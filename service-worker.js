if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const b=e=>d(e,c),l={module:{uri:c},exports:s,require:b};i[c]=Promise.all(a.map((e=>l[e]||b(e)))).then((e=>(r(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1157.html",revision:"5f261d0640c5508e5435f2da0f4bfc33"},{url:"19863.html",revision:"a7892a073d7b9225a28d902d38387ef5"},{url:"1f7c.html",revision:"881a4ec4fd547a2191c633ed5b157343"},{url:"20247.html",revision:"b9eb49a686cb0bc8b366338c0e130679"},{url:"282f.html",revision:"99e9c6721093aa5053623834ec4d9ef1"},{url:"36155.html",revision:"b1fb32364801e353bf76d5dbc09da800"},{url:"36182.html",revision:"36fad0586955511d6daa97e67b7c2b91"},{url:"404.html",revision:"5481e8cd9eadb343d2acb0c278f75910"},{url:"468c.html",revision:"1bebb677e2bdad066b2a803c751ed781"},{url:"4e57.html",revision:"1981cc09d458f3347f6c0d91d8207dbd"},{url:"8e96.html",revision:"7f8b2c8b26fab4c008349e1b508b7d00"},{url:"8fd6.html",revision:"c3d886bc529ec220efdca85d83790b7d"},{url:"9150.html",revision:"977c2c8dd7ed4fcf7e1f00551d0430df"},{url:"a18f.html",revision:"75b3d763bc8ff25e142420205a134bad"},{url:"about/index.html",revision:"e3f16261bc062d609ec6d11c14fec5a7"},{url:"archives/2022/11/index.html",revision:"32d7a9942fc8e745cb339e10af2528bb"},{url:"archives/2022/12/index.html",revision:"33c58354a5393ef8563ddbe8af2202fb"},{url:"archives/2022/index.html",revision:"fcec9022890883346681eb2d0b474e1c"},{url:"archives/2022/page/2/index.html",revision:"a7dff408c375b45fce8a11cf23fb2565"},{url:"archives/index.html",revision:"a284b9ee5852827db5f0c42617639902"},{url:"archives/page/2/index.html",revision:"69abe69873dd1bfcda4a67547686c149"},{url:"categories/index.html",revision:"2995dd479c6c29930b31a32dd1f3b5d1"},{url:"categories/MC教程/index.html",revision:"0c2e8b047882e108e95be7a05d354d90"},{url:"categories/便签周报/index.html",revision:"0a5eb1269b36d7acd84f49b19159babd"},{url:"categories/实验室/index.html",revision:"206dd873e938d73760bce71fcf4a9504"},{url:"categories/搭博客少走弯路系列/index.html",revision:"b982e8580612a542506b0a0339654281"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/main.css",revision:"3eaa7da1043fc91380fa8f8b38f85272"},{url:"games/game/test.html",revision:"e5bd4105601f11ef07309fa61d2b2aeb"},{url:"games/index.html",revision:"2a9b3614d1b5d92120f498458300dbba"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar/can1425.png",revision:"342251beb992e6cbe1e570c39a9335a7"},{url:"img/avatar/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/default.png",revision:"657a594995b1e734a13ed1166d533c2f"},{url:"img/favicon.png",revision:"c28efa017891dab330c7c08a39b23bc1"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"633e7e8e9904610bd81cdc70c5a760af"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"fda9ab19205d5873d3710a4cc5bb5ec3"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/plugins.js",revision:"85b5700ee52692e268d7ce57a8e3647b"},{url:"js/utils.js",revision:"46155ec85282b5815b2607e8deb1edca"},{url:"links/index.html",revision:"41fb66b65327eb61fadf049bce115b6a"},{url:"page/2/index.html",revision:"60069309933234c5e2ce0f3cbca41987"},{url:"tags/Blog/index.html",revision:"d44232ba4d9c09e13dbf69d1d4eb4652"},{url:"tags/GitHubPages/index.html",revision:"0c0d9fe56c14d31ebc978a85713d1fd4"},{url:"tags/index.html",revision:"15606b7a7d5fff9b069441e84c38afd0"},{url:"tags/JavaScript/index.html",revision:"e4efd2882364fb79221414055523d978"},{url:"tags/Minecraft/index.html",revision:"4753c1d930d8d981725067ec1b78b833"},{url:"tags/便签周报/index.html",revision:"bec6091d37fe59397488fd991c1d6bcb"},{url:"tags/前端/index.html",revision:"e5c1c967dea32e7cdfa026eb709af78c"},{url:"tags/博客/index.html",revision:"9e5ab61ffa05ff2f2b5628258d90c338"},{url:"tags/备案/index.html",revision:"cc3355b947a8c4737d4ec294927b1142"},{url:"tags/实验室/index.html",revision:"0f65521892539fbf939c343d1dd07afe"},{url:"tags/开服/index.html",revision:"05f96a57992fdc32a67393fdbb9cb722"},{url:"tags/教程/index.html",revision:"9f07163eab7be84ebd727aeab0248039"},{url:"tags/文件下载/index.html",revision:"3d8ac32d905ad9721de7b04db95b9de4"},{url:"tags/百度SEO/index.html",revision:"ae3eeb5738f469d061e62d0753e9ff05"},{url:"tags/网页版MC/index.html",revision:"65f3201cae8759794d7fa733aca6d320"}],{})}));
//# sourceMappingURL=service-worker.js.map
