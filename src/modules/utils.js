const isInViewport = function(elm, threshold, mode) {
  threshold = threshold || 0;
  mode = mode || 'visible';

  if(!elm) return false;

  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  var above = rect.bottom - threshold < 0;
  var below = rect.top - viewHeight + threshold >= 0;

  var visibleTop = rect.top - viewHeight + threshold <= 0 &&
                   rect.top - viewHeight >= -viewHeight;

  var visibleBottom = rect.bottom - viewHeight - threshold <= 0 &&
                      rect.bottom - viewHeight >= -viewHeight;

                      // console.info(rect.top, rect.bottom, window.innerHeight)


  const result = {
    visible: visibleTop || visibleBottom,
    top: visibleTop,
    bottom: visibleBottom,
    full: visibleTop && visibleBottom,
    above: above,
    below: below,
    inside: rect.top + window.innerHeight - threshold < window.innerHeight  && rect.bottom - window.innerHeight + threshold >= 0

  };

  return result;
}

const formatMoney = (amount, currency = 'USD', removeZeros = false, emptyDefault = null) => {
  if((!amount || parseFloat(amount) <= 0) && emptyDefault) return emptyDefault;

  let formatConfig = {
    style: "currency",
    currency: currency, // CNY for Chinese Yen, EUR for Euro
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
  };

  let formatted = new Intl.NumberFormat("en-GB", formatConfig).format(amount);
  if(removeZeros) formatted = formatted.replace('.00', '', formatted);
  formatted = formatted.replace('US$', '$ ', formatted);
  return formatted;
}

const formatNumber = (amount, removeZeros = false, emptyDefault = null) => {
  if((!amount || parseFloat(amount) <= 0) && emptyDefault) return emptyDefault;

  const money = formatMoney(amount, 'USD', removeZeros, emptyDefault)
  return money.slice(2)
}

export { isInViewport, formatMoney, formatNumber }