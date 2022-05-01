const _clrs = ["#ffac5f", "#ff1183", "#ad00ff", "#00a3ff", "#648f98"];

const _blobs = [];
const _speed = 0.00005; // 0005

let _w = window.innerWidth;
let _h = window.innerHeight;
let _ratio = _w / _h;
let _scl;
let _horizontal;

// setup blobs
const sketch = (container = null, special = true) => {
  // max opacity, size relative to window, goes free or around corners
  container = container ? container : document.body;
  _blobs.push(new Blob(0.25, 70, false, container));
  if(special) _blobs.push(new Blob(0.3, 110, true, container));
  update();
}

const update = () => {
  // make them go faster if they are close to each other
  // const tooClose = getDistance(_blobs[0].x, _blobs[0].y, _blobs[1].x, _blobs[1].y)
  // if (tooClose) {
  //     _blobs[0].n += _blobs[0].speed
  //     _blobs[0].m += _blobs[0].speed
  //     _blobs[1].n += _blobs[1].speed
  //     _blobs[1].m += _blobs[1].speed
  // }

  // update blobs
  _blobs.forEach((elm) => elm.update());

  // request next frame
  requestAnimationFrame(update);
}

class Blob {
  constructor(maxOpacity, maxSize, special, container) {
    this.maxOpacity = maxOpacity;
    this.maxSize = maxSize;
    this.special = special;
    this.createDivElement(container);
    this.init();
  }

  createDivElement(container) {
    this.canvas = document.createElement("canvas");
    this.size = map(Math.random(), 0, 1, (this.maxSize / 5) * 4, this.maxSize);

    // size is based on horizontal or vertical
    if (_ratio > 1) {
      _scl = _h / 100;
      _horizontal = true;
      this.canvas.style.cssText = `
            width: ${this.size}vh;
            height: ${this.size}vh;
            filter: blur(${this.size / 9}vh);
            position: absolute;
            opacity: 0;
            z-index: -1;
            `;
    } else {
      _scl = _w / 100;
      _horizontal = false;
      this.canvas.style.cssText = `
            width: ${this.size}vw;
            height: ${this.size}vw;
            filter: blur(${this.size / 9}vw);
            position: absolute;
            opacity: 0;
            z-index: -1;
            `;
    }

    if(!container.style.position) container.style.position = 'relative';

    container.appendChild(this.canvas);
  }

  init() {
    this.graphics = this.canvas.getContext("2d");
    const CX = this.canvas.width / 2;
    const CY = this.canvas.height / 2;
    let sx = CX;
    let sy = CY;

    // create gradient
    let idx = 1;
    for (var i = 0; i < 360; i += 1) {
      if (i % 90 == 0 && i != 0) {
        idx++;
      }

      let amount = (i % 90) / 90;
      this.graphics.strokeStyle = lerpColor(_clrs[idx - 1], _clrs[idx], amount);
      this.graphics.lineWidth = 3;
      var rad = (i * (2 * Math.PI)) / 360;

      // let rand = noise(i * 0.1) * 200
      // sx = CX - rand

      this.graphics.beginPath();
      this.graphics.moveTo(CX, CY);
      this.graphics.lineTo(CX + sx * Math.cos(rad), CY + sy * Math.sin(rad));
      this.graphics.stroke();
    }

    // this.graphics.globalCompositeOperation = "destination-out"; // will "punch-out" background
    // this.graphics.beginPath();
    // this.graphics.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);

    // init values
    this.n = Math.random() * 1000000;
    this.m = Math.random() * 1000000;
    this.k = Math.random() * 1000000;
    this.angle = Math.random() * 360;
    this.percent = 0;
    this.fc = Math.random() * 1000000;
    // this.speed = _speed * map(Math.random(), 0, 1, 0.5, 1) // 0002
    this.initSpeed = _speed * map(Math.random(), 0, 1, 0.5, 1); // 0002
    this.speed = _speed * map(Math.random(), 0, 1, 0.5, 1); // 0002
  }

  changeForm() {
    const CX = this.canvas.width / 2;
    const CY = this.canvas.height / 2;
    let sx = CX;
    let sy = CY;
    this.graphics.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let idx = 1;
    for (var i = 0; i < 360; i += 1) {
      if (i % 90 == 0 && i != 0) {
        idx++;
      }

      let amount = (i % 90) / 90;
      this.graphics.strokeStyle = lerpColor(_clrs[idx - 1], _clrs[idx], amount);
      this.graphics.lineWidth = 3;

      const a = map(i, 0, 360, 0, Math.PI * 2);
      const xoff = map(Math.cos(a), -1, 1, 0, 1);
      const yoff = map(Math.sin(a), -1, 1, 0, 1);
      let nval = noise(xoff, yoff, this.fc * _speed * 10);
      nval = nval > 0.5 ? 4 * Math.pow(nval - 1, 3) + 1 : 4 * Math.pow(nval, 3);
      let rand = map(nval, 0, 1, 0, 1);
      sx = CX * rand;
      sy = CY * rand;

      const rad = (i * (2 * Math.PI)) / 360;
      this.graphics.beginPath();
      this.graphics.moveTo(CX, CY);
      this.graphics.lineTo(CX + sx * Math.cos(rad), CY + sy * Math.sin(rad));
      this.graphics.stroke();
    }
  }

  update() {
    // update this speed
    this.speed =
      this.initSpeed + map(noise(this.fc * _speed), 0, 1, _speed, _speed);

    // if go around the boundaries
    if (this.special) {
      this.percent = noise((this.n + this.m) / 2);
      const dist = map(noise((this.n - this.m) / 2), 0, 1, Math.sqrt(2), 2);
      const squarePoints = [];

      const radiusX = (_w / 2) * dist;
      const radiusY = (_h / 2) * dist;
      const cx = _w / 2 - (this.size / 2) * _scl;
      const cy = _h / 2 - (this.size / 2) * _scl;

      for (var i = 0; i < 4; i++) {
        // square vertices
        var x = cx + radiusX * Math.cos((i * Math.PI * 2) / 4 - Math.PI / 4);
        var y = cy + radiusY * Math.sin((i * Math.PI * 2) / 4 - Math.PI / 4);
        squarePoints[i] = {
          x,
          y,
        };
      }

      const idx = Math.floor(this.percent * 4);
      const posA = squarePoints[idx];
      const posB = squarePoints[(idx + 1) % 4];

      let amount = 0;
      switch (idx) {
        case 0:
          amount = map(this.percent, 0, 0.25, 0, 1);
          break;
        case 1:
          amount = map(this.percent, 0.25, 0.5, 0, 1);
          break;
        case 2:
          amount = map(this.percent, 0.5, 0.75, 0, 1);
          break;
        case 3:
          amount = map(this.percent, 0.75, 1, 0, 1);
          break;
      }
      const posX = lerp(posA.x, posB.x, amount);
      const posY = lerp(posA.y, posB.y, amount);
      this.x = posX;
      this.y = posY;
      // go in noise pattern
    } else {
      this.changeForm();
      // if the blobs are too close make one faster than the other to get out of the loop
      this.x = map(noise(this.n), 0, 1, 0, _w - this.size * _scl);
      this.y = map(noise(this.m), 0, 1, 0, _h - this.size * _scl);
      // this.x = map(noise(this.n), 0, 1, -this.size * _scl, _w)
      // this.y = map(noise(this.m), 0, 1, -this.size * _scl, _h)
    }

    this.angle += noise(this.n + this.m) / 5;

    // update dom
    this.canvas.style.left = this.x + "px";
    this.canvas.style.top = this.y + "px";
    this.canvas.style.transform = "rotate(" + this.angle + "deg)";
    this.canvas.style.opacity = map(noise(this.k), 0, 1, 0, this.maxOpacity);

    // update values
    this.fc += 1;
    this.n += this.speed;
    this.m += this.speed * _ratio;
    this.k += this.speed * 8;
  }
}

const getDistance = (x1, y1, x2, y2) => {
  const dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  const minDist = ((_blobs[0].size + _blobs[1].size) / 2) * _scl;
  return false;
  return dist < minDist;
}

// sketch();

window.addEventListener("resize", function () {
  _w = window.innerWidth;
  _h = window.innerHeight;
  _ratio = _w / _h;
  if (_ratio > 1) {
    _scl = _h / 100;
    _blobs.forEach((elm) => {
      elm.canvas.style.width = `${elm.size}vh`;
      elm.canvas.style.height = `${elm.size}vh`;
      elm.canvas.filter = `blur(${elm.size / 8})vh`;
    });
  } else {
    _scl = _w / 100;
    _blobs.forEach((elm) => {
      elm.canvas.style.width = `${elm.size}vw`;
      elm.canvas.style.height = `${elm.size}vw`;
      elm.canvas.filter = `blur(${elm.size / 8})vw`;
    });
  }
});

// temp show hide form
// document.addEventListener("mousedown", function () {
//   mouseDown = true;
//   _blobs[0].canvas.style.filter = "blur(0)";
// });

// document.addEventListener("mouseup", function () {
//   if (_horizontal) {
//     _blobs[0].canvas.style.filter = `blur(${_blobs[0].size / 9}vh)`;
//   } else {
//     _blobs[0].canvas.style.filter = `blur(${_blobs[0].size / 9}vw)`;
//   }
// });

/* HELPERS */

const  lerpColor = (a, b, amount) => {
  var ah = parseInt(a.replace(/#/g, ""), 16),
    ar = ah >> 16,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff,
    bh = parseInt(b.replace(/#/g, ""), 16),
    br = bh >> 16,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return (
    "#" + (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)
  );
}

const map = function (n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

const lerp = function (start, stop, amt) {
  return amt * (stop - start) + start;
};

/* END HELPERS */

/* NOISE */

const PERLIN_YWRAPB = 4;
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB;
const PERLIN_ZWRAPB = 8;
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB;
const PERLIN_SIZE = 4095;

let perlin_octaves = 4; // default to medium smooth
let perlin_amp_falloff = 0.5; // 50% reduction/octave

const scaled_cosine = i => 0.5 * (1.0 - Math.cos(i * Math.PI));
let perlin

const noise = function (x, y = 0, z = 0) {
    if (perlin == null) {
        perlin = new Array(PERLIN_SIZE + 1);
        for (let i = 0; i < PERLIN_SIZE + 1; i++) {
            perlin[i] = Math.random();
        }
    }

    if (x < 0) {
        x = -x;
    }
    if (y < 0) {
        y = -y;
    }
    if (z < 0) {
        z = -z;
    }

    let xi = Math.floor(x),
        yi = Math.floor(y),
        zi = Math.floor(z);
    let xf = x - xi;
    let yf = y - yi;
    let zf = z - zi;
    let rxf, ryf;

    let r = 0;
    let ampl = 0.5;

    let n1, n2, n3;

    for (let o = 0; o < perlin_octaves; o++) {
        let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);

        rxf = scaled_cosine(xf);
        ryf = scaled_cosine(yf);

        n1 = perlin[ of & PERLIN_SIZE];
        n1 += rxf * (perlin[( of +1) & PERLIN_SIZE] - n1);
        n2 = perlin[( of +PERLIN_YWRAP) & PERLIN_SIZE];
        n2 += rxf * (perlin[( of +PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2);
        n1 += ryf * (n2 - n1);

        of += PERLIN_ZWRAP;
        n2 = perlin[ of & PERLIN_SIZE];
        n2 += rxf * (perlin[( of +1) & PERLIN_SIZE] - n2);
        n3 = perlin[( of +PERLIN_YWRAP) & PERLIN_SIZE];
        n3 += rxf * (perlin[( of +PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3);
        n2 += ryf * (n3 - n2);

        n1 += scaled_cosine(zf) * (n2 - n1);

        r += n1 * ampl;
        ampl *= perlin_amp_falloff;
        xi <<= 1;
        xf *= 2;
        yi <<= 1;
        yf *= 2;
        zi <<= 1;
        zf *= 2;

        if (xf >= 1.0) {
            xi++;
            xf--;
        }
        if (yf >= 1.0) {
            yi++;
            yf--;
        }
        if (zf >= 1.0) {
            zi++;
            zf--;
        }
    }
    return r;
};

/* END NOISE */

export { sketch }