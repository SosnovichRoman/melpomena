"use strict";(()=>{var A={};A.id=489,A.ids=[489],A.modules={10846:A=>{A.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:A=>{A.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:A=>{A.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:A=>{A.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:A=>{A.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},60308:(A,e,r)=>{r.r(e),r.d(e,{patchFetch:()=>U,routeModule:()=>E,serverHooks:()=>d,workAsyncStorage:()=>i,workUnitAsyncStorage:()=>u});var t={};r.r(t),r.d(t,{GET:()=>g,dynamic:()=>C});var n=r(42706),o=r(28203),a=r(45994),s=r(39187);let p=Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAACQdJREFUeF7tXGdoFV0QnQiCYuzG3hUVFXvvHbsxdqxYUOy9F2zYo2LvGCWIXSyo2PWHHUWxYu8Fe8MWOfNxl30vzyS72fvdPJn5k82+uTP3njNtX5aExMTExJCIMQRChABj2LNjIcAs/kKAYfyFACHANAKG/UsPEAIMI2DYvWSAEGAYAcPuJQOEAMMIGHYvGSAEGEbAsHvJACHAMAKG3UsG/AsE3L9/3/AxzLjPmzdvoh17kgEg4ODBg4neTDAZaNCgAQkBBhlLsgSEh4cbhEW/6507d7KTJE1A5syZ9SNhwMPLly9JCDAAvHIpBBgEH66FACEgMAL2MRRNWHpAwiPF8+cAISDh4ENTCHCAl/QAB2DpUBUCdKDqwKYQ4AAsHapCgA5UHdgUAhyApUNVCNCBqgObQoADsHSoCgE6UHVgUwhwAJYOVSFAB6oObAoBDsDSoSoE6EDVgU0hwAFYOlS1EXDu3Dn6/PmztedatWrF2v+lS5fo3bt31v3y5ctTqlSp+Pf4/h7w8eNHunDhAuva1+kASadNbQQUKFCA7t69a+19x44d5P92Q/r06X0IOHv2LIOZEAJOnjxJNWrUYF37Op1g6bCtjYB8+fJxFCtp2bIlbd++3fp9165dsQg5c+YMVahQIUEEHDt2jGrXrs26p0+fpooVK+rAR7vN/42A5MmT8x+g06VLx4dq06YNbd261eeATgg4evQo1alTRwgIECL8F7GCBQvSnTt3+FU7lQkrV66kXr160YcPHyht2rS8tEiRInTjxg2+Rt8oV64cX9+8eZNGjRrF0f3lyxdq2rQpTZo0iQoXLsyf2zNArQMhv3//pk6dOtHTp09p4cKF9ObNG4qIiKBVq1ZRhgwZrO1euXKFpk6dSgcOHKBMmTJRq1ataNy4cda+Nm/eTEuXLqUUKVLQtm3baNq0abRgwQJKliwZRUdHU4sWLdjm9OnT+TxdunThz+2yfPlyWrFiBd2+fZvQA8eOHUtVqlRhFQRj27Zt6cePH1StWjV6+/Yt7d+/n96/f8/BCVuhoaGsu379evYDO5Ds2bPT/PnzeX0g8SFgypQpNHHiRNarXr06nThxgtatW0fdu3dncurWrUtr1qzxIQCbwIbRpMuWLcsbBJhp0qTh90VRbg4fPkz16tXzWRcSEmLtp3Llyny48+fP8z0QuHv3br7Gz+bNm/N11apVGQwcrmjRonT8+HEmZO7cuTRixAjWyZ07N78UgEB6/fo132vcuDEPASD1+vXrfC8yMpKGDBnC1yAUJRdlEr1q0aJFHAxbtmyh1q1bsy2UaUjGjBnp+/fvlCNHDisYhw4dSvPmzSMEbe/evVmvZs2a9O3bN0KlgCAoEDT+4kPAsmXLCA1YvWgLxwD/yJEjHBEvXryIRQCYxUZLlChB/fr1416BiG/Xrh2z/+TJEzp06BDVr18/IAE9e/bk6ISMHz+eoweCoSBlypR8cBwE97EHCMAHkKpX2QmADnSRLQ0bNmR9/ERkYmrDwIFzdOzYkTZu3MgBh+xCtqrsvnz5MpUqVYrXYv8AXBFQsmRJ6ty5M5PWpEkTunbtGoONM8Me3pwDae3bt+f1CKa9e/daAR0vATh0t27dWA/grF69mq/hCCzbM6B48eIMkgIFJCCKUAq6du3K91H/f/78+VcCcHgAD7l48SJnEQSkItpBKgTXYWFhfD1jxgyLjK9fv9LixYutDFD//ujx48eUK1cu1t+wYQOXOkilSpU4KlGWAJaaAAE4zo2MQu9DaYFtlLZGjRpZBAATTH94N3T48OFc8rBnlb3wcfXqVQ7kX79+Mfj4zF9HEcEZoDaBDOjQoYPVfJUSgEVU9OjRg9auXcu3MU4i1eN7RRtRgbTFIdQ6HECVIJS9CRMm8Gf2VAfxDx8+JHwOsf9fKQQBgIBAZ9OmTTRy5Egfvb8RgJKIvaOsYbqzl0J1XvtPBAeqQP78+fm2nYBhw4Zx6SpTpgyXuOfPn9PAgQM5eBTZDx48oGfPnlk6/j5ilaA+ffpYNVEpz5o1iw8I5/YMQPPG8wEEKYmoCPReEBqWIkA1YXVwewagj5QuXZrt4WDYeKAMQD1VpKHpL1myxHUGZM2alUsSQFZn8wfJHhhxZQCGEhABkvfs2cPZNHjwYO6JcWaAmoKQASAAaYU6pgRRhnT2JwAOYRilI1u2bDR69GiufZgIBg0axGtQY+MiAPU0KiqKXdl7ACIH4zD6CARlB/YhcfUApyUI/pGlKDsIgDx58rAP7BsTk/qpesDfCMDAor4ZQBPv378/28Ewc+rUKYuA2bNn0759+/gzkBQwA9D0UF7wFQKmAkwbKv38pyBsGk4+ffrEG0CTwpTy6tUrrvto6HDUrFkztuGfAbiH6EPJUM0fUY+6Dpk5cyaNGTOGr+1TUOrUqRkwlAZ7E3ZKAMoGxs179+5x70L0gnxEfaFChTi4cJb4CECdx5iOkRyCxgwCYQdjq8oA9BkMBBDYZQIQBY8ePSLUNAXU5MmTuYEOGDCAywtkzpw53FQgqNHIHAimHDCunGPjAAulAU0aNVfVaIxq+FyVINTMW7ducZZgEsFkg2i3CyIKvUCNlbCNmb1YsWKshpoLX7CJPUOgq7IYzyTqSbxv377W5IIzQtDgsX9Vu3PmzMmNFj7Q+O3PARiZsX+UW4zoCE5kJJo1JjOUHARSlixZ+BqVAXo4G+zZMwBYGns1UREAENSzhw/qSfAXbV9FJPas8X0bGsi+EPAfKsYyAJMMng/whIyn52CQfyoDggFw/z0KAYZZEwKEgMAIuGnChrF05V4ywBVs3i0SArzD0pUlIcAVbN4tEgK8w9KVJSHAFWzeLRICvMPSlSUhwBVs3i0SArzD0pUlIcAVbN4tEgK8w9KVJSHAFWzeLRICvMPSlSUhwBVs3i0SArzD0pWloCHA1emCZFGS/6+JQYJjoreZZP9vaKJPFiQGkhwBQYKbp9uM78XkhDjz5LWUhDgSncAICAGGI0MIEAIMI2DYvWSAEGAYAcPuJQOEAMMIGHYvGSAEGEbAsHvJACHAMAKG3UsGCAGGETDsXjJACDCMgGH3kgGGCfgDmWLzyTtHZ40AAAAASUVORK5CYII=","base64");function g(){return new s.NextResponse(p,{headers:{"Content-Type":"image/png","Cache-Control":"public, immutable, no-transform, max-age=31536000"}})}let C="force-static",E=new n.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/icon.png/route",pathname:"/icon.png",filename:"icon",bundlePath:"app/icon.png/route"},resolvedPagePath:"next-metadata-route-loader?filePath=C%3A%5CWork%5Cmelpomena%5Cfrontend%5Csrc%5Capp%5Cicon.png&isDynamicRouteExtension=0!?__next_metadata_route__",nextConfigOutput:"",userland:t}),{workAsyncStorage:i,workUnitAsyncStorage:u,serverHooks:d}=E;function U(){return(0,a.patchFetch)({workAsyncStorage:i,workUnitAsyncStorage:u})}}};var e=require("../../webpack-runtime.js");e.C(A);var r=A=>e(e.s=A),t=e.X(0,[638,452],()=>r(60308));module.exports=t})();