if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const l=e=>a(e,s),b={module:{uri:s},exports:c,require:l};i[s]=Promise.all(d.map((e=>b[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1157.html",revision:"a5a297aac293d98031b98ed7e3e5b5ab"},{url:"19863.html",revision:"de3f11e8040fb6b54ce1be1ed6d1f3bb"},{url:"1f7c.html",revision:"9ba0658bc576358f9261caa4f51f2d95"},{url:"20247.html",revision:"c6d422541cd79dac779d54e36b3ee305"},{url:"36155.html",revision:"882ec5873511bff6a9f7b6692b2825e2"},{url:"36182.html",revision:"74e16651a88f831d46daba4b8d50947b"},{url:"404.html",revision:"0e5c44883a9c78bb2816573721d2dc27"},{url:"468c.html",revision:"eeee95d25053f42ba28d3966283535a0"},{url:"8e96.html",revision:"21cd011e8c12615fe2e58d07301ab026"},{url:"8fd6.html",revision:"3519a450e36bd200314d9aca5a08f9d3"},{url:"about/index.html",revision:"20268c4e5c78b9e52c48723a545aa7e8"},{url:"archives/2022/11/index.html",revision:"208e445b6f08a49882ed29e6180d1fd7"},{url:"archives/2022/12/index.html",revision:"925ef8faacdfeb57ccd2214d8f092416"},{url:"archives/2022/index.html",revision:"ca63a0048b340f333d01781f27247852"},{url:"archives/index.html",revision:"52a407eb75ee2e4e1bf55169307db575"},{url:"categories/index.html",revision:"1110f276b336a8009adb09a62b7325aa"},{url:"categories/MC教程/index.html",revision:"c08d42a96c5f4242366ce91eeae91917"},{url:"categories/便签周报/index.html",revision:"5f2ae997c1cad0520873ae833fc199bf"},{url:"categories/实验室/index.html",revision:"011d62b345b9b43a6f2c643410f7fe88"},{url:"categories/搭博客少走弯路系列/index.html",revision:"75e336bfc02bc305395974f9bee1eb55"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"3eaa7da1043fc91380fa8f8b38f85272"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar/can1425.png",revision:"342251beb992e6cbe1e570c39a9335a7"},{url:"img/avatar/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/default.png",revision:"657a594995b1e734a13ed1166d533c2f"},{url:"img/favicon.png",revision:"c28efa017891dab330c7c08a39b23bc1"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"640903b01c916951dac2f50467d6b5a5"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"fda9ab19205d5873d3710a4cc5bb5ec3"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/plugins.js",revision:"85b5700ee52692e268d7ce57a8e3647b"},{url:"js/utils.js",revision:"46155ec85282b5815b2607e8deb1edca"},{url:"links/index.html",revision:"0777316e31ee28d8e173420ddec54470"},{url:"tags/Blog/index.html",revision:"11d8eaa8483d25ef6315954d67322062"},{url:"tags/index.html",revision:"1185faa70f01cd9aecb183111891219d"},{url:"tags/JavaScript/index.html",revision:"5c43e8bfc8eb714c05d4986b856bdf38"},{url:"tags/Minecraft/index.html",revision:"a86ae4c90b7e7d46f210aae2424c3f39"},{url:"tags/便签周报/index.html",revision:"e236e2a891e5bff0b7d52eba89c4165a"},{url:"tags/前端/index.html",revision:"cf813b095da84519818ae0b70a97c7fc"},{url:"tags/博客/index.html",revision:"0ee41243436f1f0fe869f12dbcc935b1"},{url:"tags/备案/index.html",revision:"5b853a9bb55db749e87b7ff351490300"},{url:"tags/实验室/index.html",revision:"de352e464137a9beee79d0577804fa83"},{url:"tags/开服/index.html",revision:"a8ed74fea6f54e78f538fa0385a6f63e"},{url:"tags/教程/index.html",revision:"3b39077be126d6774f6f173b82b55c64"},{url:"tags/文件下载/index.html",revision:"e9ab21d349fbbd6e8905b8ab6a6d3139"},{url:"tags/网页版MC/index.html",revision:"936a713167aa32dad00d53795785f165"}],{})}));
//# sourceMappingURL=service-worker.js.map
