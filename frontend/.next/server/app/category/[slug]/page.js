(()=>{var e={};e.id=457,e.ids=[457],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},79428:e=>{"use strict";e.exports=require("buffer")},94735:e=>{"use strict";e.exports=require("events")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},11723:e=>{"use strict";e.exports=require("querystring")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},18857:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var t=s(70260),a=s(28203),i=s(25155),n=s.n(i),o=s(67292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);s.d(r,d);let l=["",{children:["category",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,26405)),"C:\\Work\\melpomena\\frontend\\src\\app\\category\\[slug]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e),async e=>(await Promise.resolve().then(s.bind(s,78162))).default(e)],apple:[async e=>(await Promise.resolve().then(s.bind(s,94650))).default(e)],openGraph:[],twitter:[],manifest:"/manifest.json"}}]},{layout:[()=>Promise.resolve().then(s.bind(s,71354)),"C:\\Work\\melpomena\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,50042)),"C:\\Work\\melpomena\\frontend\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e),async e=>(await Promise.resolve().then(s.bind(s,78162))).default(e)],apple:[async e=>(await Promise.resolve().then(s.bind(s,94650))).default(e)],openGraph:[],twitter:[],manifest:"/manifest.json"}}],c=["C:\\Work\\melpomena\\frontend\\src\\app\\category\\[slug]\\page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/category/[slug]/page",pathname:"/category/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},47509:(e,r,s)=>{Promise.resolve().then(s.bind(s,46255))},89365:(e,r,s)=>{Promise.resolve().then(s.bind(s,17226))},17226:(e,r,s)=>{"use strict";s.d(r,{default:()=>l});var t=s(45512),a=s(8849),i=s(30407),n=s(29669),o=s(85358),d=s(89633);let l=({category:e})=>{let{posters:r,isLoading:s,isError:l}=function(e){let{data:r,isLoading:s,isError:t,error:a}=(0,d.I)({queryKey:["posters",e],queryFn:async()=>await o.A.getAllByCategory(e)});return{posters:r,isLoading:s,isError:t,error:a}}(e);return s?(0,t.jsx)(i.A,{}):l?(0,t.jsx)(a.A,{}):r?.length!=0&&(void 0!=r||s)?(0,t.jsx)("section",{className:"py-[30px]",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)(n.A,{className:"",posters:r})})}):(0,t.jsx)(a.A,{title:"Товаров не найдено"})}},39400:(e,r,s)=>{"use strict";s.d(r,{$:()=>l,r:()=>d});var t=s(45512),a=s(12705),i=s(21643),n=s(58009),o=s(44195);let d=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",outlineBold:"border-2 border-primary bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9",xl:"md:py-4 md:px-8 py-3 px-6 rounded-md text-lg"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef(({className:e,variant:r,size:s,asChild:i=!1,...n},l)=>{let c=i?a.DX:"button";return(0,t.jsx)(c,{className:(0,o.cn)(d({variant:r,size:s,className:e})),ref:l,...n})});l.displayName="Button"},8849:(e,r,s)=>{"use strict";s.d(r,{A:()=>i});var t=s(45512),a=s(39400);function i({title:e="Страница не найдена"}){return(0,t.jsx)("section",{className:"py-[250px]",children:(0,t.jsxs)("div",{className:"conteiner flex items-center justify-center flex-col",children:[(0,t.jsx)("p",{className:"heading-3",children:e}),(0,t.jsx)(a.$,{asChild:!0,className:"mt-5",size:"lg",children:(0,t.jsx)("a",{href:"/",className:"text-body-sm font-normal",children:"Вернуться на главную"})})]})})}},30407:(e,r,s)=>{"use strict";s.d(r,{A:()=>i});var t=s(45512),a=s(86235);function i(){return(0,t.jsx)("section",{className:"py-[250px]",children:(0,t.jsx)("div",{className:"container flex justify-center",children:(0,t.jsx)(a.A,{className:"animate-spin",size:60})})})}},29669:(e,r,s)=>{"use strict";s.d(r,{A:()=>o});var t=s(45512),a=s(28531),i=s.n(a);let n=({poster:e,className:r})=>(0,t.jsxs)(i(),{href:`/poster/${e.slug}`,className:`group/product flex flex-col h-fit hover:scale-105 active:opacity-60 transition-all duration-300 relative ${r} `,children:[(0,t.jsx)("img",{className:"absolute inset-0 w-full object-cover md:h-[400px] h-[250px] group-hover/product:h-full group-hover/product:opacity-80 group-hover/product:shadow-lg group-active:opacity-60 active:opacity-60 transition-all duration-300",src:e.images[0],alt:e.name}),(0,t.jsx)("div",{className:"md:mt-[400px] mt-[250px] py-3 relative z-10 transition-all duration-300 group-hover/product:p-3 group-hover/product:gap-4",children:(0,t.jsx)("p",{className:"text-body text-right",children:e.name})})]});function o({className:e,posters:r}){return(0,t.jsx)("div",{className:`${e} grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-x-[30px] md:gap-y-[50px] gap-x-5 gap-y-8`,children:r?.map(e=>t.jsx(n,{poster:e},e.slug))})}},85358:(e,r,s)=>{"use strict";s.d(r,{A:()=>c});let t=(0,s(68799).UU)({projectId:"b3q2ag62",dataset:"production",useCdn:!0,apiVersion:"2023-05-03"}),a=e=>""==e?`*[_type == 'poster']{
    _id, name, slug, "images": images[].asset->url
  }`:`*[_type == 'poster' && '${e}' in categories[]->slug]{
  _id, name, slug, "images": images[].asset->url
}`,i=e=>`*[_type == 'poster' && _id == '${e._id}'
   && count(dimensions[_ref == '${e.dimensionId}']) > 0
   && count(frames[_ref == '${e.frameId}']) > 0][0]{
  _id, name, slug, description,
  "images": images[].asset->url,
  "categories": categories[]->{_id, name, slug},
  "dimension": dimensions[_ref == '${e.dimensionId}'][0]->{_id, name, price},
  "frame": frames[_ref == '${e.frameId}'][0]->{_id, name, price}
}`,n=e=>`*[_type == 'poster' && (count((categories[]->slug)[@ in ${JSON.stringify(e)}]) > 0) ][0..3]{
  _id, name, slug, "images": images[].asset->url
}`,o=()=>`*[_type == 'popularPoster']{
  ...reference->{
  _id, name, slug, "images": images[].asset->url
  }
}`,d=e=>`*[_type == 'poster' && slug == '${e}'][0]{
  _id, name, slug, description,
  "images": images[].asset->url,
  "categories": categories[]->{_id, name, slug},
  "dimensions": dimensions[]->{_id, name, price},
  "frames": frames[]->{_id, name, price}
}`;class l{async getAllByCategory(e){return await t.fetch(a(e))}async getPopularPosters(){return await t.fetch(o())}async getByCategories(e){return await t.fetch(n(e))}async getAllByCart(e){return await Promise.all(e.map(e=>t.fetch(i(e.cartPoster))))}async getBySlug(e){return await t.fetch(d(e))}}let c=new l},26405:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>c,generateMetadata:()=>l});var t=s(62740),a=s(52786),i=s(94254),n=s(88677);class o{async getBySlug(e){return await i.S.fetch((0,n.PK)(e))}}let d=new o;async function l({params:e}){let r=(await e).slug;return{title:(await d.getBySlug(r)).name||""}}async function c({params:e}){let r=(await e).slug,s=await d.getBySlug(r);return(0,t.jsx)(a.A,{category:s})}},46255:(e,r,s)=>{"use strict";s.d(r,{default:()=>t});let t=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Work\\\\melpomena\\\\frontend\\\\src\\\\components\\\\pages\\\\category\\\\CategoryGrid.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Work\\melpomena\\frontend\\src\\components\\pages\\category\\CategoryGrid.tsx","default")},52786:(e,r,s)=>{"use strict";s.d(r,{A:()=>n});var t=s(62740),a=s(83655),i=s(46255);function n({category:e}){return(0,t.jsxs)("main",{children:[(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(a.Qp,{className:" py-10",children:(0,t.jsxs)(a.AB,{children:[(0,t.jsx)(a.J5,{children:(0,t.jsx)(a.w1,{className:"link",href:"/",children:"Главная"})}),(0,t.jsx)(a.tH,{}),e.slug?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.J5,{children:(0,t.jsx)(a.w1,{className:"link",href:"/category",children:"Все постеры"})}),(0,t.jsx)(a.tH,{}),(0,t.jsx)(a.J5,{children:(0,t.jsx)(a.tJ,{children:e.name})})]}):(0,t.jsx)(a.J5,{children:(0,t.jsx)(a.tJ,{children:e.name})})]})}),(0,t.jsx)("h2",{className:"heading-2 border-b-2 border-solid",children:e.name})]})}),(0,t.jsx)(i.default,{category:e.slug})]})}},83655:(e,r,s)=>{"use strict";s.d(r,{AB:()=>l,J5:()=>c,Qp:()=>d,tH:()=>m,tJ:()=>p,w1:()=>u});var t=s(62740),a=s(76301),i=s(15225),n=s(54917),o=(s(79458),s(43327));let d=a.forwardRef(({...e},r)=>(0,t.jsx)("nav",{ref:r,"aria-label":"breadcrumb",...e}));d.displayName="Breadcrumb";let l=a.forwardRef(({className:e,...r},s)=>(0,t.jsx)("ol",{ref:s,className:(0,o.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...r}));l.displayName="BreadcrumbList";let c=a.forwardRef(({className:e,...r},s)=>(0,t.jsx)("li",{ref:s,className:(0,o.cn)("inline-flex items-center gap-1.5",e),...r}));c.displayName="BreadcrumbItem";let u=a.forwardRef(({asChild:e,className:r,...s},a)=>{let n=e?i.DX:"a";return(0,t.jsx)(n,{ref:a,className:(0,o.cn)("transition-colors hover:text-foreground",r),...s})});u.displayName="BreadcrumbLink";let p=a.forwardRef(({className:e,...r},s)=>(0,t.jsx)("span",{ref:s,role:"link","aria-disabled":"true","aria-current":"page",className:(0,o.cn)("font-normal text-foreground",e),...r}));p.displayName="BreadcrumbPage";let m=({children:e,className:r,...s})=>(0,t.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,o.cn)("[&>svg]:w-3.5 [&>svg]:h-3.5",r),...s,children:e??(0,t.jsx)(n.A,{})});m.displayName="BreadcrumbSeparator"},43327:(e,r,s)=>{"use strict";s.d(r,{cn:()=>i});var t=s(13673),a=s(47317);function i(...e){return(0,a.QP)((0,t.$)(e))}},94254:(e,r,s)=>{"use strict";s.d(r,{S:()=>t});let t=(0,s(79085).UU)({projectId:"b3q2ag62",dataset:"production",useCdn:!0,apiVersion:"2023-05-03"})},88677:(e,r,s)=>{"use strict";s.d(r,{CZ:()=>o,PK:()=>d,cH:()=>n,gr:()=>i,oB:()=>t,vH:()=>a});let t=e=>""==e?`*[_type == 'poster']{
    _id, name, slug, "images": images[].asset->url
  }`:`*[_type == 'poster' && '${e}' in categories[]->slug]{
  _id, name, slug, "images": images[].asset->url
}`,a=e=>`*[_type == 'poster' && _id == '${e._id}'
   && count(dimensions[_ref == '${e.dimensionId}']) > 0
   && count(frames[_ref == '${e.frameId}']) > 0][0]{
  _id, name, slug, description,
  "images": images[].asset->url,
  "categories": categories[]->{_id, name, slug},
  "dimension": dimensions[_ref == '${e.dimensionId}'][0]->{_id, name, price},
  "frame": frames[_ref == '${e.frameId}'][0]->{_id, name, price}
}`,i=e=>`*[_type == 'poster' && (count((categories[]->slug)[@ in ${JSON.stringify(e)}]) > 0) ][0..3]{
  _id, name, slug, "images": images[].asset->url
}`,n=()=>`*[_type == 'popularPoster']{
  ...reference->{
  _id, name, slug, "images": images[].asset->url
  }
}`,o=e=>`*[_type == 'poster' && slug == '${e}'][0]{
  _id, name, slug, description,
  "images": images[].asset->url,
  "categories": categories[]->{_id, name, slug},
  "dimensions": dimensions[]->{_id, name, price},
  "frames": frames[]->{_id, name, price}
}`,d=e=>`*[_type == 'category' && slug == '${e}'][0]{
    name, slug,
  }`}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[638,426,538,497,531,788,846],()=>s(18857));module.exports=t})();