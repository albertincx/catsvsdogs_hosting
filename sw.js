if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),d={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/browser-ponyfill-f2aSXRt1.js",revision:null},{url:"assets/index-DLUS_4j2.css",revision:null},{url:"assets/index-Dyh74HDl.js",revision:null},{url:"index.html",revision:"f983281b32dc541b76e8fdf0ebd17124"},{url:"policy.html",revision:"6048c955bee5275ca34bd6ce285faf03"},{url:"terms.html",revision:"c7663ddeb5e92727729a748d6357d4c6"},{url:"manifest.json",revision:"29d671f02b81b0bd75ed18cd586319dd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
