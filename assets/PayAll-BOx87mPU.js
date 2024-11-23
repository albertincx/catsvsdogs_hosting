const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TonPage-B4qHhmMP.js","assets/index-GomyT9KN.js","assets/index-CSmDDrvz.css","assets/QRCodeShow-qMGXuc3y.js"])))=>i.map(i=>d[i]);
import{W as s,_ as e,o as a,a as t,b as r,t as l,X as i,j as c,G as n,Y as d,Z as o,$ as x,a0 as j,a1 as p,L as h,d as u,l as b}from"./index-GomyT9KN.js";const m=s((()=>e((()=>import("./TonPage-B4qHhmMP.js")),__vite__mapDeps([0,1,2,3])))),f=({upd:s})=>{const e=a.useRef(null),u=t(r((s=>s.user))),[f,w]=a.useState(0),[S,T]=a.useState();let _=[{title:l("stars pay")},{title:l("crypto pay",{count:2})}];const y=(e,a=!0)=>{b.getState().update("curTab",`${location.hash}farm${e}`),w(e),a&&S.slideTo(e),s?.()},P=a.useCallback((()=>{i(S),s?.()}),[S]);return c.jsxs(v,{children:[c.jsx(n,{h:16}),c.jsxs("div",{children:[c.jsx(d,{tabs:_,setActiveTab:y,activeTab:f}),c.jsx("div",{className:"swiper-scrollbar swiper-farm"})]}),c.jsx(n,{h:10}),c.jsxs(o,{ref:e,onSwiper:s=>T(s),spaceBetween:0,modules:[x],slidesPerView:1,scrollbar:{draggable:!0,el:".swiper-farm"},onSlideChange:s=>{y(s.activeIndex,!1)},className:"frens-tabs",autoHeight:!0,children:[c.jsx(j,{children:0===f&&c.jsx(p,{game:u.balance,upd:P,cl:"test"})}),c.jsxs(j,{children:[1===f&&c.jsx(g,{children:c.jsx(a.Suspense,{fallback:c.jsx(h,{router:!0}),children:c.jsx(m,{tab:f,upd:P,cl:"test"})})}),c.jsx(n,{h:16}),c.jsx(n,{h:16})]})]}),c.jsx(n,{h:4})]})},g=u.div`
    min-height: 250px;
`,v=u.div`
    .ton-page-form.test {
        padding: 0;
    }
`;export{f as default};
