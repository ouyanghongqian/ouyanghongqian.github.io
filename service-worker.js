if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const f=e=>a(e,r),n={module:{uri:r},exports:b,require:f};i[r]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),b)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1.png",revision:"1cc46be4c1f590487c82cb8b5dc58c1a"},{url:"1157.html",revision:"f0f3b429ca688145816bdf364ddef86e"},{url:"19863.html",revision:"01d64630e04e8eddb0259e5c0392a3ba"},{url:"1f7c.html",revision:"226e014bb845b48145a59678a41a60e9"},{url:"20247.html",revision:"52aa804123203cd8b08230fa532990d2"},{url:"282f.html",revision:"b717bd703b9e284fbec080007565b97a"},{url:"36155.html",revision:"d39bc5de2d03b3bbfd2e14abad6fd67c"},{url:"36182.html",revision:"a2e343fc4d4626627424805e01dcc56a"},{url:"4028.html",revision:"9705633227018a66a0f9b295cab98f96"},{url:"404.html",revision:"c66308838eaa07bf1a37678103a4c2c2"},{url:"4292.html",revision:"efcfd423f742411863e0b27433098e56"},{url:"468c.html",revision:"407cf79c9a6245a56c0738f29afff4b3"},{url:"4897.html",revision:"8079137afb6a7b25448d53fb12b8472b"},{url:"4e57.html",revision:"bc1d7f753b2e5adcbded2816e1ae85eb"},{url:"8e96.html",revision:"6860710b48c3020113ce10adc285f582"},{url:"8fd6.html",revision:"92894af6a283eb0f2eca7bfa0f096982"},{url:"9150.html",revision:"23b1e49a87c1d966e26d12d19ebf3b35"},{url:"a18f.html",revision:"247d3351b2133e2ec32122ce07b8676e"},{url:"a9da.html",revision:"ceb633b8a583a2bd696915116128b595"},{url:"archives/2022/11/index.html",revision:"a85a86c6e4257551081c6eb988ec3758"},{url:"archives/2022/12/index.html",revision:"ff7271d0c61ddb7469c1551674b37c5e"},{url:"archives/2022/12/page/2/index.html",revision:"195f476d974de90004a279ec9e591c08"},{url:"archives/2022/index.html",revision:"859c7e4d7503ad29e9d48ce421cb56dd"},{url:"archives/2022/page/2/index.html",revision:"1efbb1bb63d4cb209288da1eb97b99fc"},{url:"archives/2023/01/index.html",revision:"6ba62544613d363d32a2f65dfbe51f56"},{url:"archives/2023/index.html",revision:"54af8cc0fe9281cc156640788e775900"},{url:"archives/index.html",revision:"b93b393908511775cf325298f415426c"},{url:"archives/page/2/index.html",revision:"b7f56853b70c187bdcc4fd5c988be495"},{url:"categories/index.html",revision:"ac9d01378a484a442643c08b926459ec"},{url:"categories/便签周报/index.html",revision:"f62efa0bde8acdfd5b77d92edceae19a"},{url:"categories/实验室/index.html",revision:"36b098033c07c8ff9054a104a6a8837e"},{url:"categories/搭博客少走弯路/index.html",revision:"cfbac931dc6ab7ea83c4bc27cf61ecf4"},{url:"categories/教程/index.html",revision:"2bb4df8d4011157b2a50fffd99bc2cc5"},{url:"categories/科普/index.html",revision:"a4a65b4d0082346dd48f86f3e128d3d8"},{url:"cbf1.html",revision:"51d684bda6d5fca3f1642ace58ac1206"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"0175ed563ce5ee50aef9f38099048fa9"},{url:"games/game/test.html",revision:"e5bd4105601f11ef07309fa61d2b2aeb"},{url:"games/index.html",revision:"ad3a92045263a119ddc224bd7c2c0c40"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar/can1425.png",revision:"342251beb992e6cbe1e570c39a9335a7"},{url:"img/avatar/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/default.png",revision:"657a594995b1e734a13ed1166d533c2f"},{url:"img/favicon.png",revision:"c28efa017891dab330c7c08a39b23bc1"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/post-1.png",revision:"083fe77e658d29f2ee813783a73cf4e5"},{url:"img/post-2.png",revision:"08cd3dd89fc921fdc377893bb019cf9c"},{url:"img/post-3.png",revision:"f9e9145e50a59cfd6537b809b8ef2e2f"},{url:"img/post-4.png",revision:"cc4d891d1586933ae5a0aa1611567c16"},{url:"img/post-5.png",revision:"2fe5f7cd54d5c87500e5dfbda7135089"},{url:"img/pwa-favicon/android-192x192.png",revision:"da04652932adc20d81911e6b79729e45"},{url:"img/pwa-favicon/android-512x512.png",revision:"6f793ac77587a49dc9f9dbc7ff1513d0"},{url:"img/pwa-favicon/apple-144x144.png",revision:"71b1703a939aa9d13f8415dfc9123435"},{url:"img/pwa-favicon/apple-60x60.png",revision:"30adc4aff9bfffafeb5ed7bc3ac75bdd"},{url:"img/pwa-favicon/apple-72x72.png",revision:"075c631e5cf46e0d32294d9282641c6e"},{url:"img/random-bg/0.jpg",revision:"bf38dc8379e9d3c5ab9056e302f57ac4"},{url:"img/random-bg/1.jpg",revision:"fc512989576de94f377f1f233dd4f97d"},{url:"img/random-bg/10.jpg",revision:"9db5e40e696a356625126b58615cf9df"},{url:"img/random-bg/11.jpg",revision:"a7cf983731a8a4d2561af0ad1789f423"},{url:"img/random-bg/12.jpg",revision:"c30fdaead4606355fd0a9dc187cf1ba5"},{url:"img/random-bg/13.jpg",revision:"31ed7c4645873bc7e10c7b8ada829810"},{url:"img/random-bg/14.jpg",revision:"d1a0b85570a99f7ee136e0c6b1ce38bd"},{url:"img/random-bg/15.jpg",revision:"ba56965d1a504adca39c0943d7172dd0"},{url:"img/random-bg/16.jpg",revision:"732e41f49bc534f95f88aaf78d228391"},{url:"img/random-bg/2.jpg",revision:"c17e9f98599c3d46cb4b4849a5e41689"},{url:"img/random-bg/3.jpg",revision:"ef431bdd8701fdfc7c91a135bf9fcd68"},{url:"img/random-bg/4.jpg",revision:"e2085452ec3ab0a8592376fa5903277a"},{url:"img/random-bg/5.jpg",revision:"f1f412481bc00916c70ea8ec72f33178"},{url:"img/random-bg/6.jpg",revision:"e74b305b1cc6fc168fc6a21f9c27df06"},{url:"img/random-bg/7.jpg",revision:"e45c5b1aa25398586a8855c0f576ac2e"},{url:"img/random-bg/8.jpg",revision:"0c5e309075a29b3dc0a554d3c9b412ad"},{url:"img/random-bg/9.jpg",revision:"cfcb7d76b0c42a745f62d7b36f754b38"},{url:"index.html",revision:"e6867db9027ab3924faa7522bb6fbe2b"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"fda9ab19205d5873d3710a4cc5bb5ec3"},{url:"js/duration.js",revision:"1a10addd826ecf4f3b66793847732636"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/plugins.js",revision:"85b5700ee52692e268d7ce57a8e3647b"},{url:"js/utils.js",revision:"46155ec85282b5815b2607e8deb1edca"},{url:"links/index.html",revision:"9c3557e9ab8c55280bd4d14b3f74d6b3"},{url:"page/2/index.html",revision:"c21745b6893d1e758707d2b75db28662"},{url:"sw.js",revision:"77b5351be01be92e3822c4a86655dad5"},{url:"tags/Blog/index.html",revision:"ed531c1d5dbdd8e21bebd2bdfe374cc3"},{url:"tags/CDN/index.html",revision:"fde58d932fbb5a07d5c8ddb79bb4feea"},{url:"tags/Fluid/index.html",revision:"3bdc2ca7e8fa66caf2a3c2db698469dc"},{url:"tags/GitHubPages/index.html",revision:"3f9faf262370db01dbbd31ae87478e21"},{url:"tags/Hexo/index.html",revision:"f6f370e80aeccdd28ab1e74c2b4db838"},{url:"tags/index.html",revision:"65eee463a162d90618b30ecfdb77d171"},{url:"tags/JavaScript/index.html",revision:"b96daca3112f7a645ba7f57871c76845"},{url:"tags/Minecraft/index.html",revision:"6ae46cb968c2f70ab09bfa39e892b733"},{url:"tags/PWA应用/index.html",revision:"d270a26ad9c069b6657c7656746eb308"},{url:"tags/便签周报/index.html",revision:"f3681d44a047e02b3d95dc61fb77155f"},{url:"tags/前端/index.html",revision:"33200cff601fef3c7aee219a26c0e6da"},{url:"tags/博客/index.html",revision:"6eb401aa4386ba54fb997e9258dbf166"},{url:"tags/备案/index.html",revision:"553fe0466b8833e1f53c0cc013cef047"},{url:"tags/实验室/index.html",revision:"4c750ca35f443eb9a35686bb796e8735"},{url:"tags/开服/index.html",revision:"1a4ac923943368460033e1f35957dd93"},{url:"tags/搭博客少走弯路/index.html",revision:"733ee01615c8e0b397365819c9c88f9f"},{url:"tags/教程/index.html",revision:"359e109abc2fa742fa6a79315594d2f8"},{url:"tags/文件下载/index.html",revision:"d2ab6ed083edc214bb49750e2432d793"},{url:"tags/百度SEO/index.html",revision:"af7518eb0cac846bd0dd62c192230d97"},{url:"tags/科普/index.html",revision:"0954c391067fc200b0c888144785f4fb"},{url:"tags/网页版MC/index.html",revision:"9bd99c2a154dd2bc9d9b965c88205287"}],{})}));
//# sourceMappingURL=service-worker.js.map
