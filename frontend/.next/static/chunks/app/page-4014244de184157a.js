(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6593:(e,s,a)=>{Promise.resolve().then(a.bind(a,3147))},3147:(e,s,a)=>{"use strict";a.d(s,{default:()=>o});var t=a(5155),r=a(4119),n=a(5605),i=a(547),c=a(4505);function o(){let{posters:e,isLoading:s,isError:a}=function(){let{data:e,isLoading:s,isError:a,error:t}=(0,i.I)({queryKey:["popular-posters"],queryFn:async()=>await n.A.getPopularPosters()});return{posters:e,isLoading:s,isError:a,error:t}}();return(0,t.jsx)("section",{className:"",children:(0,t.jsxs)("div",{className:"container pt-20 md:pb-20 pb-5",children:[(0,t.jsx)("h2",{className:"heading-2 border-b-2 border-solid",children:"Популярные постеры"}),s?(0,t.jsx)("div",{className:"h-96 flex items-center justify-center",children:(0,t.jsx)(c.A,{className:"animate-spin",size:60})}):a?(0,t.jsx)("div",{className:"h-96 flex items-center justify-center",children:(0,t.jsx)("span",{className:"heading-4",children:"Произошла ошибка загрузки"})}):(0,t.jsx)(r.A,{posters:e,className:" mt-[30px]"})]})})}},4119:(e,s,a)=>{"use strict";a.d(s,{A:()=>c});var t=a(5155),r=a(8173),n=a.n(r);let i=e=>{let{poster:s,className:a}=e;return(0,t.jsxs)(n(),{href:"/poster/".concat(s.slug),className:"group/product flex flex-col h-fit hover:scale-105 active:opacity-60 transition-all duration-300 relative ".concat(a," "),children:[(0,t.jsx)("img",{className:"absolute inset-0 w-full object-cover md:h-[400px] h-[250px] group-hover/product:h-full group-hover/product:opacity-80 group-hover/product:shadow-lg group-active:opacity-60 active:opacity-60 transition-all duration-300",src:s.images[0],alt:s.name}),(0,t.jsx)("div",{className:"md:mt-[400px] mt-[250px] py-3 relative z-10 transition-all duration-300 group-hover/product:p-3 group-hover/product:gap-4",children:(0,t.jsx)("p",{className:"text-body text-right",children:s.name})})]})};function c(e){let{className:s,posters:a}=e;return(0,t.jsx)("div",{className:"".concat(s," grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-x-[30px] md:gap-y-[50px] gap-x-5 gap-y-8"),children:null==a?void 0:a.map(e=>(0,t.jsx)(i,{poster:e},e.slug))})}},5605:(e,s,a)=>{"use strict";a.d(s,{A:()=>d});let t=(0,a(7096).UU)({projectId:"b3q2ag62",dataset:"production",useCdn:!0,apiVersion:"2023-05-03"}),r=e=>""==e?"*[_type == 'poster']{\n    _id, name, slug, \"images\": images[].asset->url\n  }":"*[_type == 'poster' && '".concat(e,'\' in categories[]->slug]{\n  _id, name, slug, "images": images[].asset->url\n}'),n=e=>"*[_type == 'poster' && _id == '".concat(e._id,"'\n   && count(dimensions[_ref == '").concat(e.dimensionId,"']) > 0\n   && count(frames[_ref == '").concat(e.frameId,'\']) > 0][0]{\n  _id, name, slug, description,\n  "images": images[].asset->url,\n  "categories": categories[]->{_id, name, slug},\n  "dimension": dimensions[_ref == \'').concat(e.dimensionId,"'][0]->{_id, name, price},\n  \"frame\": frames[_ref == '").concat(e.frameId,"'][0]->{_id, name, price}\n}"),i=e=>"*[_type == 'poster' && (count((categories[]->slug)[@ in ".concat(JSON.stringify(e),']) > 0) ][0..3]{\n  _id, name, slug, "images": images[].asset->url\n}'),c=()=>"*[_type == 'popularPoster']{\n  ...reference->{\n  _id, name, slug, \"images\": images[].asset->url\n  }\n}",o=e=>"*[_type == 'poster' && slug == '".concat(e,'\'][0]{\n  _id, name, slug, description,\n  "images": images[].asset->url,\n  "categories": categories[]->{_id, name, slug},\n  "dimensions": dimensions[]->{_id, name, price},\n  "frames": frames[]->{_id, name, price}\n}');class l{async getAllByCategory(e){return await t.fetch(r(e))}async getPopularPosters(){return await t.fetch(c())}async getByCategories(e){return await t.fetch(i(e))}async getAllByCart(e){return await Promise.all(e.map(e=>t.fetch(n(e.cartPoster))))}async getBySlug(e){return await t.fetch(o(e))}}let d=new l}},e=>{var s=s=>e(e.s=s);e.O(0,[678,304,173,441,517,358],()=>s(6593)),_N_E=e.O()}]);