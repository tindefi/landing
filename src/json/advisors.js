const advisors = [
  {
    imgLink: "https://media-exp1.licdn.com/dms/image/C5603AQGrW9_Qd5eV_Q/profile-displayphoto-shrink_400_400/0/1636045517441?e=1656547200&v=beta&t=-I8MTzlL-AGd0vpH49Wgq0vmN3WRYMtsPgkVF6u1udo",
    avatar: "ruben-illescas",
    name: "Rubén Illescas",
    position: "Business Advisor",
    social: {
      tindefi: "https://tindefi.net/users/RubenIllescas",
      linkedin: "https://www.linkedin.com/in/rub%C3%A9n-illescas-b446aa167",
    }
  },
  {
    imgLink: "https://scontent-bcn1-1.cdninstagram.com/v/t51.2885-19/142083887_107278498036726_7106738063090894636_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bcn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=cOCojR3NrUcAX92GlEi&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT91oj_c2i0vl6lq1mckZRVRKCJp7ze6eqGczG9BFzZsLA&oe=6274EB59&_nc_sid=7bff83",
    avatar: "victoria-rodriguez",
    name: "Victoria Rodríguez",
    position: "Legal advisor",
    social: {
      tindefi: "https://tindefi.net/users/victoriaRodríguez",
      linkedin: "https://www.linkedin.com/in/victoria-rodr%C3%ADguez-blanco-9847791a/",
    }
  },
  {
    imgLink: "https://media-exp1.licdn.com/dms/image/C4D03AQEnjHYm5e7BNQ/profile-displayphoto-shrink_400_400/0/1594047180612?e=1656547200&v=beta&t=qLXVSk6K6hMRnVqNuyxWFoJOhv_nKXFREWTu8rD7AWM",
    avatar: "emilio-hurtado",
    name: "Emilio Hurtado",
    position: "Business advisor",
    social: {
      tindefi: "https://tindefi.net/users/emilio-hurtado",
      linkedin: "https://www.linkedin.com/in/emiliohurtadoruiz/",
    }
  },
  {
    imgLink: "https://yt3.ggpht.com/ytc/AKedOLQAi2bJNHv4Aa2X2pzzKnpW_NOvuNgYoRAmn2-R=s176-c-k-c0x00ffffff-no-rj",
    avatar: "levs",
    name: "Levs",
    position: "Blockchain advisor",
    social: {
      tindefi: "https://tindefi.net/users/levs",
      youtube: "https://youtube.com/channel/UCOxMq4HD0ybJbhAy4vUjIwA",
    }
  },
  {
    imgLink: "https://scontent-bcn1-1.cdninstagram.com/v/t51.2885-19/272256734_469354774649178_329893884959755660_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bcn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=o1Bp2mE1ClQAX8GeZj7&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT92udODfXpIGtdX1NODcp2nOITrIyUAv3UbZkdVIMZsmQ&oe=62756672&_nc_sid=7bff83",
    avatar: "briana-banderas",
    name: "Briana Banderas",
    position: "Marketing digital & networking",
    social: {
      tindefi: "https://tindefi.net/users/briana-banderas",
      instagram: "https://www.instagram.com/brianabanderas_/?hl=es",
    }
  },
  {
    imgLink: "https://pbs.twimg.com/profile_images/1507031061011836942/dqyEYZ1m_400x400.jpg",
    avatar: "degen",
    name: "Degen",
    position: "Advisor position",
    social: {
      tindefi: "https://tindefi.net/users/degen",
      twitter: "https://twitter.com/degen0xbdc",
    }
  },
  {
    imgLink: "https://scontent-bcn1-1.cdninstagram.com/v/t51.2885-19/241314879_1175570832948178_6288527873770190393_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bcn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=IN5sstpe4GkAX8LpXY-&tn=L3RDjBt06_jpWRoD&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_tlxr1mwkjydmFQVBLSg3W8317Ld1YwfuWVeJFLHIl8A&oe=62746E87&_nc_sid=7bff83",
    avatar: "marco-banderas",
    name: "Marco Banderas",
    position: "Cantante & networking",
    social: {
      tindefi: "https://tindefi.net/users/marco-banderas",
      instagram: "https://www.instagram.com/marcobanderasbcn/?hl=es",
    }
  },
  {
    imgLink: "https://media-exp1.licdn.com/dms/image/C5603AQF2fTbwlTrLYw/profile-displayphoto-shrink_400_400/0/1642874145075?e=1656547200&v=beta&t=bONR57M9GX0lHSJGmSKJxBm9t8n2DLgslFXRalUTLAA",
    avatar: "raphael-dennett",
    name: "Raphael Dennet",
    position: "Marketing digital & networking",
    social: {
      tindefi: "https://tindefi.net/users/raphael-dennet",
      linkedin: "https://www.linkedin.com/in/raphaeldennett/",
    }
  },
  {
    imgLink: "https://media-exp1.licdn.com/dms/image/C4D03AQHQsJ9RN0TXyA/profile-displayphoto-shrink_800_800/0/1615465343187?e=1656547200&v=beta&t=xW7n6yVSu7vKRd7L2l4ZP8Br5NlnguBO2os_5oMaWmQ",
    avatar: "daniel-martin",
    name: "Daniel Martin",
    position: "Financial Advisor",
    social: {
      tindefi: "https://tindefi.net/users/daniel-martin",
      linkedin: "https://www.linkedin.com/in/daniel-mart%C3%ADn-escanciano-55908b198/",
    }
  },
  {
    imgLink: "https://scontent-bcn1-1.cdninstagram.com/v/t51.2885-19/278308727_5104876329591349_2778001041143544271_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bcn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=mxlfXS2FSWQAX9IozT-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8Fd8SJOe6qk3j2Ygi_H3q8Tco1b9U-ImJQYmm16fdD9A&oe=62743CAE&_nc_sid=7bff83",
    avatar: "alvaro-reyes",
    name: "Alvaro Reyes",
    position: "Social Skill Expert",
    social: {
      tindefi: "https://tindefi.net/users/alvaro-reyes",
      instagram: "https://www.instagram.com/alvarodaygame/?hl=es",
    }
  },
  {
    imgLink: "https://cdn4.telegram-cdn.org/file/lh_hU_zbFD617W_fo8GwnKWXQBQiDH0dIpBXPHjCexoWEiETyU4S_K0BE78dgk5YLvEejUCWIQQQ5nWXE3j1jL-FaQTIefbfuNH_KGhtLt4Ukj9sMkixQ28rAi_q4QRZ-XJlLANw-d0EEzzqZkqBd4ofJjwE1vvgUSpI6FOjv5gmoc-sxtQ7EF_TlZW9_re1WrK0VSSM2OcwoUZ5287bf2Yb9t01XlWfnA0K4BJBH5rlQy4x-V7xl6YFAB6lR-QMPGQ-0g6HtwUszieCY-vELHT5S4od0nKXwOeqCJccpJgGy2Uf1Rhs2iXeUXZ4kg8rHNH46o8eMV4M_jKNFqhyAg.jpg",
    avatar: "chain-capitals",
    name: "Chain Capitals",
    position: "Investment advisor",
    social: {
      tindefi: "https://tindefi.net/users/chain-capitals",
      telegram: "https://t.me/chaincapitals",
    }
  }
]

export { advisors }