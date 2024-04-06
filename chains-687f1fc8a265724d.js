(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{86164:function(e,l,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chains",function(){return r(57446)}])},57446:function(e,l,r){"use strict";r.r(l),r.d(l,{default:function(){return S}});var a=r(52322),s=r(2784),n=r(61657),t=r(21590),i=r(92468),c=r(80144),d=r(27389),x=r(89922),m=r(93790),o=r(5140),h=r(26713),u=r(85181),f=r(35612),p=r(82791),j=r(36484),g=r(49254);let N=s.forwardRef(function({title:e,titleId:l,...r},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":l},r),e?s.createElement("title",{id:l},e):null,s.createElement("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"}))});var w=r(43785),y=r(72779),b=r.n(y),v=r(39097),k=r.n(v),C=r(98174),Z=r(49414),_=r(91436),T=r(29485),E=r(76435),L=e=>{let{isLiked:l,chainInfo:r,handleToggleLike:s}=e,{calculatePrice:t}=(0,Z.Q)(),{data:i}=(0,_.n)(r.chainId);return(0,a.jsx)("li",{className:(0,C.m)("flex items-center w-full rounded-xl lg:rounded-none h-[88px] lg:border-b-[1px] border-b-grey-100 dark:border-b-grey-500","hover:bg-grey-10 dark:hover:bg-grey-400/[0.12] cursor-pointer"),children:(0,a.jsxs)("div",{className:"flex items-center w-full",children:[(0,a.jsx)("div",{className:"flex md:hidden justify-center",children:(0,a.jsx)("button",{type:"button",className:"flex justify-center lg:w-[14px] w-[20px] ml-3 mr-4",onClick:()=>s(r.chainName),children:(0,a.jsx)(g.Z,{className:b()("w-5 h-5",l?"text-blue-600 dark:text-blue-200":"text-grey-100 dark:text-grey-500")})})}),(0,a.jsxs)(k(),{className:"flex w-full md:pl-4",href:"/chains".concat((0,E.I)(r.chainName)),prefetch:!1,children:[(0,a.jsx)(w.Ej,{chainName:r.chainName,imgUrl:r.chainSymbolImageUrl,className:"sm:min-w-[32px] sm:w-[32px] w-[56px] sm:h-[32px] h-[56px]"}),(0,a.jsxs)("div",{className:"flex flex-col justify-center w-full sm:pl-3 pl-4",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.ZT.FixedHeading04,{className:"typo-highlight",children:r.chainName}),(null==r?void 0:r.isHalted)&&(0,a.jsx)("p",{className:"leading-none text-sm typo-error border-[1px] p-1 border-typo-error-light dark:border-typo-error-dark rounded-[4px] ml-1",children:"HALTED"}),(0,a.jsx)("div",{className:"flex justify-center items-center ml-[6px] px-2 bg-grey-10 dark:bg-transparent rounded h-5 border-grey-200 dark:border-grey-500 border-solid border",children:(0,a.jsx)(n.ZT.Label02,{className:"typo-default mt-[2px]",children:"".concat(r.mainCurrency.coinDenom," ").concat((0,h.AT)({pretty:t((0,h.fO)(r.mainCurrency))}))})})]}),(0,a.jsx)("div",{className:"flex mt-2",children:(0,a.jsx)(n.ZT.FixedBody02,{className:"typo-default md:line-clamp-2",children:r.chainSummary})})]}),(0,a.jsx)("div",{className:"flex justify-end lg:min-w-[40px] min-w-[160px]",children:(0,a.jsxs)("div",{className:"flex items-center text-center",children:[(0,a.jsx)(n.ZT.FixedBody01,{className:"typo-subdued01 lg:hidden",children:"APR ".concat((0,T.q)(i),"%")}),(0,a.jsx)("div",{className:"w-5 h-5 text-grey-400/90 dark:text-grey-300/90 ml-2 mr-4 lg:ml-1 lg:mr-3",children:(0,a.jsx)(N,{})})]})})]})]})},r.chainId)},B=e=>{var l;let{searchWord:r}=e,{likedChains:n,toggleLikeChain:t}=(0,j.U)(),i=(0,s.useMemo)(()=>n.reduce((e,l)=>{let r=p.vo.find(e=>e.chainName===l);return r&&e.push(r),e},[]).concat(p.vo.filter(e=>!n.includes(e.chainName))),[n]),c=e=>{let{chainName:l,mainCurrency:{coinDenom:a}}=e,s=r.toLowerCase();return""===r||l.toLowerCase().includes(s)||a.toLowerCase().includes(s)},d=i.filter(e=>c(e));return(0,a.jsx)("ul",{className:"flex flex-col w-full mt-3",children:(0,a.jsx)(u.Z,{isEmpty:0===d.length&&""!==r,emptyBox:(0,a.jsx)(f.Z,{searchWord:r}),children:d.map(e=>(0,a.jsx)(L,{chainInfo:e,handleToggleLike:t,isLiked:null!==(l=n.includes(e.chainName))&&void 0!==l&&l},e.chainName))})})},S=()=>{let[e,l]=(0,s.useState)(""),{isNeedToConnectWallet:r}=(0,o.Z)(),{totalStakingPretty:u}=(0,m.Y)(),f=(0,s.useCallback)(e=>{l(e)},[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:"Chains"}),(0,a.jsx)(n.Y_,{icon:(0,a.jsx)(t.f5,{}),title:"Chains"}),(0,a.jsx)(c.Z,{className:"pb-16 xl:pt-0",children:(0,a.jsxs)("div",{className:"w-full flex flex-col lg:px-0 px-11 md:max-w-full max-w-[1200px] mt-4",children:[!r&&(0,a.jsxs)("div",{className:"w-full flex justify-between items-center my-6 mb-9 md:!px-4 lg:px-8",children:[(0,a.jsx)(x.Z.Default,{title:"Total Staked Balance",priceText:(0,h.AT)({pretty:u})}),(0,a.jsx)(x.Z.ClaimableRewardsBox,{isOverview:!1})]}),(0,a.jsx)("div",{className:"flex lg:px-4 md:mt-10 w-[260px]",children:(0,a.jsx)(d.Z,{handleSearchWord:f,maxLength:30,className:"w-[260px]",placeholder:"Search Chains..."})}),(0,a.jsx)(B,{searchWord:e})]})})]})}}},function(e){e.O(0,[961,774,888,179],function(){return e(e.s=86164)}),_N_E=e.O()}]);