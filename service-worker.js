if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const b=e=>a(e,r),s={module:{uri:r},exports:f,require:b};i[r]=Promise.all(d.map((e=>s[e]||b(e)))).then((e=>(c(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1.png",revision:"1cc46be4c1f590487c82cb8b5dc58c1a"},{url:"1157.html",revision:"ac0b30e48fff0e91130219e8ba443797"},{url:"19863.html",revision:"f62be8236511ef9ab071ed10f832e944"},{url:"1f7c.html",revision:"a87b6c154760532500f4ca2702dbdcf3"},{url:"20247.html",revision:"c165c10b78aeec4a362910304505db77"},{url:"282f.html",revision:"f5af05bab8e85f93cc7942a6d687cdce"},{url:"36155.html",revision:"1cf1e4a51be0f21adce10e04bc892af6"},{url:"36182.html",revision:"e87de276d121ed238f997d20b2979c73"},{url:"404.html",revision:"d49a458b9a51228fd52be1a5e703ce76"},{url:"4292.html",revision:"40c7c0f81e4be27e4d81fdfa8d42b693"},{url:"468c.html",revision:"1f842476c47cb23b0aea4439d7a17af5"},{url:"4897.html",revision:"25e150c5854f73b67c5723418bd17822"},{url:"4e57.html",revision:"ab97b6f7ab696ebb06f7d1eb8fa699c2"},{url:"8e96.html",revision:"6f97c1e6aa023a935e0f94c993513a31"},{url:"8fd6.html",revision:"1bee160e07683ebac83ed07cdd60ef1d"},{url:"9150.html",revision:"c16413ead936c22145aac6c84cff07fb"},{url:"a18f.html",revision:"fa7707e70c09b75a7b0edfa28a31d125"},{url:"archives/2022/11/index.html",revision:"4d824b8a08c3e8627c032817cf292bd6"},{url:"archives/2022/12/index.html",revision:"ef0c753cce8dbbf84310636cc28c2818"},{url:"archives/2022/12/page/2/index.html",revision:"3552218b37f23851603194ed16c14da6"},{url:"archives/2022/index.html",revision:"b9e659e4b2f6f191c98a9cc5b895f70e"},{url:"archives/2022/page/2/index.html",revision:"f38926b92642e365deb5f3d4545a3246"},{url:"archives/index.html",revision:"70ed4d88d06c3ad8abb21ed812a22756"},{url:"archives/page/2/index.html",revision:"9b9d3675fa7c0c5e5e95eaf55907ff93"},{url:"categories/index.html",revision:"9523faa22d8a131da2931a4e3f716793"},{url:"categories/便签周报/index.html",revision:"7e814c0e843300a3bca2e96f4f2d7626"},{url:"categories/实验室/index.html",revision:"5797ee01bf8c98decaac1639fbebe493"},{url:"categories/搭博客少走弯路/index.html",revision:"917d661fb21adf288b58dc88db33addb"},{url:"categories/教程/index.html",revision:"976be0ac16695bc200e1e9f42ba611f0"},{url:"categories/科普/index.html",revision:"22dd6a651debc9fd2cb141a877671b29"},{url:"cbf1.html",revision:"abfcba10da51aa452583f89343cb684e"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"3eaa7da1043fc91380fa8f8b38f85272"},{url:"games/game/test.html",revision:"e5bd4105601f11ef07309fa61d2b2aeb"},{url:"games/index.html",revision:"877080a06be96807c26d5dd44a8579cd"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar/can1425.png",revision:"342251beb992e6cbe1e570c39a9335a7"},{url:"img/avatar/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/default.png",revision:"657a594995b1e734a13ed1166d533c2f"},{url:"img/favicon.png",revision:"c28efa017891dab330c7c08a39b23bc1"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/post-1.png",revision:"083fe77e658d29f2ee813783a73cf4e5"},{url:"img/post-2.png",revision:"08cd3dd89fc921fdc377893bb019cf9c"},{url:"img/pwa-favicon/android-192x192.png",revision:"da04652932adc20d81911e6b79729e45"},{url:"img/pwa-favicon/android-512x512.png",revision:"6f793ac77587a49dc9f9dbc7ff1513d0"},{url:"img/pwa-favicon/apple-144x144.png",revision:"71b1703a939aa9d13f8415dfc9123435"},{url:"img/pwa-favicon/apple-60x60.png",revision:"30adc4aff9bfffafeb5ed7bc3ac75bdd"},{url:"img/pwa-favicon/apple-72x72.png",revision:"075c631e5cf46e0d32294d9282641c6e"},{url:"img/random-bg/1.jpg",revision:"bf38dc8379e9d3c5ab9056e302f57ac4"},{url:"img/random-bg/10.jpg",revision:"1764b7ee7a03b9520ee0b3338154efe8"},{url:"img/random-bg/2.jpg",revision:"7830a3bf8d4362b7ea332cb7a0c736e9"},{url:"img/random-bg/4.jpg",revision:"fc512989576de94f377f1f233dd4f97d"},{url:"img/random-bg/5.jpg",revision:"c17e9f98599c3d46cb4b4849a5e41689"},{url:"img/random-bg/6.jpg",revision:"ef431bdd8701fdfc7c91a135bf9fcd68"},{url:"img/random-bg/8.jpg",revision:"ef6e2505a462718045ce3e4e65a93b7e"},{url:"index.html",revision:"e2ca7becf5954eb9b57555c7b538a7ef"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"fda9ab19205d5873d3710a4cc5bb5ec3"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/plugins.js",revision:"85b5700ee52692e268d7ce57a8e3647b"},{url:"js/utils.js",revision:"46155ec85282b5815b2607e8deb1edca"},{url:"links/index.html",revision:"bf3a9ad444af8cd1543c9ea9d396fc9d"},{url:"page/2/index.html",revision:"f9e2d0de2a014588f5bcbced96911e2b"},{url:"sw.js",revision:"77b5351be01be92e3822c4a86655dad5"},{url:"tags/Blog/index.html",revision:"4246f777f7abb3cafe1be9c36231073d"},{url:"tags/CDN/index.html",revision:"ae10b69706f4fef1268e8da19afa092f"},{url:"tags/GitHubPages/index.html",revision:"df6063f3703db31bd427f67e92c294cc"},{url:"tags/Hexo/index.html",revision:"efa34efa08cf2e310932b1bfd11c0c84"},{url:"tags/index.html",revision:"9d9efb1625d2f6b12f29b4a7c8d7583e"},{url:"tags/JavaScript/index.html",revision:"d1d9949adada220d05cf76405b424b85"},{url:"tags/Minecraft/index.html",revision:"12013f4ce8d1efbf57585c6444fac784"},{url:"tags/PWA应用/index.html",revision:"2064f0e97a07d229135dc8b71d9f2fc3"},{url:"tags/便签周报/index.html",revision:"e672d326c95170fd45f6304d80956ace"},{url:"tags/前端/index.html",revision:"1fce675bb0acc88c1e451bd0e105efb7"},{url:"tags/博客/index.html",revision:"e9b7f4531e3257ed4cb12ce0968932b9"},{url:"tags/备案/index.html",revision:"b6fc72b300c7cdae3a6b8630a8782ec3"},{url:"tags/实验室/index.html",revision:"9e1a756922cf8dd937e1c84e3cd30d98"},{url:"tags/开服/index.html",revision:"1a0d5492813b7db1f2d9274d115f5e49"},{url:"tags/教程/index.html",revision:"eeedfc60efedee55f350113cbc69f8a2"},{url:"tags/文件下载/index.html",revision:"dd3d421a5d9ebbe32dbc762815757d3f"},{url:"tags/百度SEO/index.html",revision:"d9587fcf9269df5d048697ec06e8f7c3"},{url:"tags/科普/index.html",revision:"f91df5be246b63cc284cd0e911fc0278"},{url:"tags/网页版MC/index.html",revision:"bc99cc9d20ceedec4d34660d594c108d"}],{})}));
//# sourceMappingURL=service-worker.js.map
