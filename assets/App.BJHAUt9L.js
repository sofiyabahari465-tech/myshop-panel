import{r as pn}from"./rolldown-runtime.CXHxssQy.js";import{n as hn,r as ne,t as gn}from"./utils-vendor.C5ZOOZMr.js";import{$ as Gn,$t as Xn,A as Qe,At as Zn,B as fr,Bt as Ba,C as Wa,Ct as nt,D as Va,Dt as ns,E as Qa,Et as we,F as el,Ft as ls,G as tl,Gt as rl,H as al,Ht as Ma,I as pt,It as is,J as Ct,K as sl,L as un,Lt as lt,M as ea,Mt as ta,N as nl,Nt as Fa,O as ll,Ot as Le,P as Xt,Pt as il,Q as os,R as Hr,Rt as ra,S as Ja,St as Ge,T as ol,Tt as dl,U as ds,Ut as cl,V as bn,Vt as xl,W as ml,Wt as cs,X as xs,Xt as pl,Y as hl,Z as xe,_t as gl,a as jr,at as Ha,b as yn,bt as vr,c as $r,ct as ul,d as Kr,dt as mt,en as bl,et as ms,f as Xe,ft as Ka,g as Kt,gt as yl,h as It,ht as fn,i as Yr,it as ps,j as kr,jt as fl,k as qe,kt as jl,l as Zt,lt as vl,m as kl,mt as $t,n as Nl,nt as wl,o as At,ot as Sl,p as jn,pt as Cl,q as Il,qt as $l,r as vn,rt as Al,s as Dl,st as Tl,t as Ae,tt as kn,u as Rl,ut as El,v as hs,vt as Nr,w as ht,wt as Pl,x as St,xt as Gr,y as Nn,yt as wn,z as zl,zt as xt}from"./react-vendor.BdaCIOuY.js";var a=pn(bl(),1),e=rl(),Ml=()=>{const[t,r]=(0,a.useState)(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);return(0,a.useEffect)(()=>{const s=window.document.documentElement;t?(s.classList.add("dark"),localStorage.setItem("theme","dark")):(s.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]),(0,e.jsx)("button",{onClick:()=>r(!t),className:"relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-yellow-400 dark:hover:text-yellow-400",title:t?"حالت روشن":"حالت تاریک",children:(0,e.jsxs)("div",{className:"relative h-5 w-5",children:[(0,e.jsx)(kl,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-90 scale-0 opacity-0":"rotate-0 scale-100 opacity-100"}`}),(0,e.jsx)(al,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`})]})})},Fl=({onToggleSidebar:t,userRole:r,onRoleChange:s,userName:o})=>{const b=pl(),n=r==="admin",g=()=>{sessionStorage.removeItem("token"),sessionStorage.removeItem("authUser"),sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("userRole"),sessionStorage.removeItem("representativeId"),sessionStorage.removeItem("activeSection"),localStorage.removeItem("token"),localStorage.removeItem("authUser"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userRole"),localStorage.removeItem("representativeId"),localStorage.removeItem("activeSection"),b("/login",{replace:!0})},i=o?.trim()||"کاربر";return(0,e.jsx)("nav",{className:"sticky top-0 z-40 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-xl transition-colors dark:border-gray-700 dark:bg-gray-900/80",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6 md:py-4",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2 sm:gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-xs font-black text-white shadow-sm shadow-cyan-500/20 sm:px-4 sm:text-sm",title:n?"دسترسی کامل ادمین":"دسترسی پنل نمایندگی",children:[n?(0,e.jsx)(yl,{className:"h-4 w-4"}):(0,e.jsx)(jr,{className:"h-4 w-4"}),(0,e.jsx)("span",{children:n?"ادمین":"نماینده"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-2 sm:px-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-sm font-bold text-white shadow-sm",children:i.charAt(0)}),(0,e.jsxs)("div",{className:"hidden lg:block",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-800 dark:text-white",children:i}),(0,e.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:n?"مدیر سیستم":"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4",children:[(0,e.jsx)(Ml,{}),(0,e.jsx)("button",{type:"button",onClick:t,className:"flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400 md:h-11 md:w-11",title:"باز و بسته‌کردن منو",children:(0,e.jsx)(tl,{className:"h-5 w-5 md:h-6 md:w-6"})}),(0,e.jsxs)("button",{type:"button",onClick:g,className:"flex items-center gap-2 rounded-xl bg-red-500 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 sm:px-4 sm:text-sm",title:"خروج از حساب",children:[(0,e.jsx)(hl,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden sm:inline",children:"خروج"})]})]})]})})},Ll=({isOpen:t,onClose:r,activeSection:s,onSectionChange:o,userRole:b})=>{const n=b==="representative"||b==="user";return(0,e.jsxs)(e.Fragment,{children:[t?(0,e.jsx)("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in lg:hidden",onClick:r,"aria-hidden":"true"}):null,(0,e.jsxs)("aside",{dir:"rtl",className:`fixed top-0 right-0 z-50 flex h-screen w-72 flex-col border-l border-gray-700 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-500 ease-in-out lg:top-[73px] lg:h-[calc(100vh-73px)] ${t?"translate-x-0":"translate-x-full overflow-hidden lg:w-0 lg:translate-x-0"}`,children:[(0,e.jsx)("div",{className:"shrink-0 border-b border-gray-700 p-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold uppercase tracking-wider text-gray-500",children:"منوی اصلی"}),(0,e.jsx)("p",{className:"mt-0.5 flex items-center gap-1.5 text-lg font-bold text-cyan-400",children:n?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(jr,{className:"h-3.5 w-3.5"}),"پنل نمایندگی"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Yr,{className:"h-3.5 w-3.5"}),"دسترسی کامل"]})})]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400 lg:hidden","aria-label":"بستن منو",children:(0,e.jsx)(Ae,{className:"h-4 w-4"})})]})}),(0,e.jsx)("nav",{className:"flex-1 space-y-1  p-1",children:(n?[{id:"dashboard",label:"داشبورد",icon:os},{id:"products",label:"لیست قیمت‌ها",icon:xt},{id:"my-shipments",label:"بارهای من",icon:Zt},{id:"warehouse",label:"انبار من",icon:ra},{id:"sales-reports",label:"اعلام فروش",icon:xt,accent:"emerald"},{id:"return-request",label:"ثبت درخواست مرجوعی",icon:Va,accent:"rose"},{id:"support",label:"پشتیبانی",icon:ps},{id:"warranties",label:"گارانتی",icon:St,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Kt,accent:"amber"},{id:"profile",label:"پروفایل",icon:jr}]:[{id:"dashboard",label:"داشبورد",icon:os},{id:"products",label:"لیست قیمت‌ها",icon:xt},{id:"representatives",label:"لیست نمایندگان",icon:Yr},{id:"warehouse",label:"انبارداری",icon:It},{id:"upload",label:"آپلود اکسل",icon:Nr},{id:"shipments",label:"ارسال بار",icon:Zt},{id:"sales-reports",label:"اعلام فروش نمایندگان",icon:xt,accent:"emerald"},{id:"return-requests",label:"بررسی درخواست‌های مرجوعی",icon:Ge,accent:"rose"},{id:"support-requests",label:"رسیدگی به درخواست‌ها",icon:ps},{id:"warranties",label:"گارانتی",icon:St,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Kt,accent:"amber"}]).map((g,i)=>{const u=g.icon,p=s===g.id,d=g.accent==="rose",N=g.accent==="emerald",j=g.accent==="amber",k=g.accent==="sky",x=d?"border-rose-500/50 bg-gradient-to-r from-rose-500/25 to-red-500/20 text-white shadow-md shadow-rose-500/20":N?"border-emerald-500/50 bg-gradient-to-r from-emerald-500/25 to-teal-500/20 text-white shadow-md shadow-emerald-500/20":j?"border-amber-500/50 bg-gradient-to-r from-amber-500/25 to-yellow-500/20 text-white shadow-md shadow-amber-500/20":k?"border-sky-500/50 bg-gradient-to-r from-sky-500/25 to-blue-500/20 text-white shadow-md shadow-sky-500/20":"border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-md shadow-cyan-500/20",h=d?"border-rose-500/10 bg-rose-500/5 text-rose-300 hover:border-rose-500/30 hover:bg-rose-500/15 hover:text-rose-100":N?"border-emerald-500/10 bg-emerald-500/5 text-emerald-300 hover:border-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-100":j?"border-amber-500/10 bg-amber-500/5 text-amber-300 hover:border-amber-500/30 hover:bg-amber-500/15 hover:text-amber-100":k?"border-sky-500/10 bg-sky-500/5 text-sky-300 hover:border-sky-500/30 hover:bg-sky-500/15 hover:text-sky-100":"border-transparent text-gray-400 hover:bg-gray-800 hover:text-white",w=d?"text-rose-300":N?"text-emerald-300":j?"text-amber-400":k?"text-sky-300":"text-cyan-400",c=d?"text-rose-400":N?"text-emerald-400":j?"text-amber-400":k?"text-sky-400":"",$=d?"bg-rose-400":N?"bg-emerald-400":j?"bg-amber-400":k?"bg-sky-400":"bg-cyan-400";return(0,e.jsxs)("button",{type:"button",onClick:()=>{o(g.id),window.innerWidth<1024&&r()},style:{animationDelay:`${i*40}ms`},className:`group flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-right  transition-all duration-600 animate-slide-in-right ${p?x:h}`,children:[(0,e.jsx)("span",{className:"shrink-0 transition-transform duration-300 group-hover:scale-110",children:(0,e.jsx)(u,{className:`h-5 w-5 ${p?w:c}`})}),(0,e.jsx)("span",{className:"min-w-0 flex-1 text-[12px] font-bold leading-5",children:g.label}),p?(0,e.jsx)("span",{className:`mr-auto h-1.5 w-1.5 shrink-0 animate-pulse rounded-full ${$}`}):null]},g.id)})})]})]})},gs=t=>t?{...t,name:t.name||"",price:Number(t.price)||0,category:t.category||"عمومی",stock:Number(t.stock)||0,description:t.description||"",image:t.image||""}:null,ql=({product:t,onClose:r,onSave:s})=>{const[o,b]=(0,a.useState)(gs(t)),[n,g]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{b(gs(t)),g(!1)},[t]),!o)return null;const i=()=>{g(!0),window.setTimeout(()=>{r()},250)},u=(d,N)=>{b(j=>j?{...j,[d]:N}:null)},p=()=>{s({...o,name:o.name.trim()||"بدون نام",price:Number(o.price)||0,category:o.category.trim()||"عمومی",stock:Number(o.stock)||0,description:o.description.trim(),updatedAt:new Date().toISOString()}),i()};return(0,e.jsxs)("div",{dir:"rtl",className:`fixed inset-0 z-50 flex items-end justify-center p-0 transition-all duration-300 sm:items-center sm:p-4 ${n?"opacity-0":"opacity-100"}`,onClick:i,children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-md"}),(0,e.jsx)("div",{className:"absolute left-0 top-10 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl sm:left-20 sm:top-20 sm:h-96 sm:w-96"}),(0,e.jsx)("div",{className:"absolute bottom-0 right-0 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl sm:bottom-20 sm:right-20 sm:h-96 sm:w-96"}),(0,e.jsxs)("div",{className:`relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-300 sm:max-h-[90vh] sm:rounded-3xl ${n?"translate-y-8 scale-95 opacity-0":"translate-y-0 scale-100 opacity-100"}`,onClick:d=>d.stopPropagation(),children:[(0,e.jsx)("div",{className:"absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between gap-3 border-b border-gray-700 p-4 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3 sm:gap-4",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg sm:h-14 sm:w-14",children:(0,e.jsx)(Xt,{className:"h-5 w-5 sm:h-7 sm:w-7"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate text-lg font-bold text-white sm:text-2xl",children:"ویرایش محصول"}),(0,e.jsx)("p",{className:"mt-0.5 truncate text-xs text-gray-400 sm:text-sm",children:"اطلاعات محصول را تغییر دهید"})]})]}),(0,e.jsx)("button",{type:"button",onClick:i,"aria-label":"بستن پنجره ویرایش",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6",children:(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(jn,{className:"h-4 w-4"}),"عنوان"]}),(0,e.jsx)("input",{type:"text",value:o.name,onChange:d=>{u("name",d.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(xt,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:o.price,onChange:d=>{u("price",Number(d.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(pt,{className:"h-4 w-4"}),"موجودی"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:o.stock,onChange:d=>{u("stock",Number(d.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(ul,{className:"h-4 w-4"}),"دسته‌بندی"]}),(0,e.jsx)("input",{type:"text",value:o.category,onChange:d=>{u("category",d.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(mt,{className:"h-4 w-4"}),"توضیحات"]}),(0,e.jsx)("textarea",{value:o.description,onChange:d=>{u("description",d.target.value)},rows:4,className:"w-full resize-none rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]})}),(0,e.jsxs)("div",{className:"grid shrink-0 grid-cols-2 gap-3 border-t border-gray-700 p-4 sm:flex sm:p-6",children:[(0,e.jsx)("button",{type:"button",onClick:i,className:"min-h-11 rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-xs font-bold text-gray-300 transition-all hover:bg-gray-700 sm:flex-1 sm:px-6 sm:text-sm",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:p,className:"min-h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-3 text-xs font-bold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 sm:flex-1 sm:px-6 sm:text-sm",children:(0,e.jsxs)("span",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Qa,{className:"h-4 w-4"}),"ذخیره"]})})]})]})]})},nr=({message:t})=>(0,e.jsxs)("div",{className:"rounded-2xl bg-white p-8 text-center shadow-lg md:p-16",children:[(0,e.jsx)("p",{className:"mb-4 text-5xl md:text-6xl",children:"🔒"}),(0,e.jsx)("p",{className:"text-base text-gray-500 md:text-xl",children:t})]}),gt=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),ut=({title:t,value:r,description:s,icon:o,iconClassName:b,valueClassName:n="text-gray-900 dark:text-gray-100"})=>(0,e.jsx)("article",{className:"rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:`mt-3 truncate text-2xl font-black sm:text-2xl ${n}`,children:r}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-500 dark:text-gray-400",children:s})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${b}`,children:o})]})}),Ul=({totalProducts:t,totalPrice:r,representatives:s=[],shipments:o=[]})=>{const b=Array.isArray(s)?s:[],n=Array.isArray(o)?o:[],g=b.filter(x=>x.status==="active").length,i=b.reduce((x,h)=>x+(Number(h.storeItemsCount)||0),0),u=b.reduce((x,h)=>x+(Number(h.storeItemsTotalValue)||0),0),p=b.reduce((x,h)=>x+(Number(h.last10DaysSales)||0),0),d=b.reduce((x,h)=>x+(Number(h.averageSales)||0),0),N=n.filter(x=>x.status==="delivered").length,j=n.filter(x=>x.status==="shipping").length,k=b.reduce((x,h)=>x+(Number(h.salesAnnouncementCount)||0),0);return(0,e.jsxs)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:[(0,e.jsx)(ut,{title:"تعداد نمایندگان فعال",value:gt(g),description:"نمایندگان با وضعیت فعال",icon:(0,e.jsx)(Yr,{className:"h-6 w-6"}),iconClassName:"bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",valueClassName:"text-blue-700 dark:text-blue-400"}),(0,e.jsx)(ut,{title:"تعداد محصولات انبار",value:gt(i),description:"مجموع کالاهای ثبت‌شده در انبار نمایندگان",icon:(0,e.jsx)(ra,{className:"h-6 w-6"}),iconClassName:"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",valueClassName:"text-emerald-700 dark:text-emerald-400"}),(0,e.jsx)(ut,{title:"مجموع مبلغ کل انبارها",value:`${gt(u)} تومان`,description:"مجموع",icon:(0,e.jsx)(vn,{className:"h-6 w-6"}),iconClassName:"bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400",valueClassName:"text-indigo-700 dark:text-indigo-400"}),(0,e.jsx)(ut,{title:"فروش ۱۰ روز قبل",value:`${gt(p)} تومان`,description:"جمع فروش نمایندگان در ۱۰ روز گذشته",icon:(0,e.jsx)(il,{className:"h-6 w-6"}),iconClassName:"bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",valueClassName:"text-amber-700 dark:text-amber-400"}),(0,e.jsx)(ut,{title:"میانگین فروش ماهانه",value:`${gt(Math.round(d))} تومان`,description:"مجموع میانگین فروش ماهانه نمایندگان",icon:(0,e.jsx)(Cl,{className:"h-6 w-6"}),iconClassName:"bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400",valueClassName:"text-cyan-700 dark:text-cyan-400"}),(0,e.jsx)(ut,{title:"تعداد بارهای ارسال شده",value:gt(N),description:"مجموع بارهای تحویل‌شده",icon:(0,e.jsx)(Zt,{className:"h-6 w-6"}),iconClassName:"bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400",valueClassName:"text-purple-700 dark:text-purple-400"}),(0,e.jsx)(ut,{title:"تعداد بارهای در حال ارسال",value:gt(j),description:"بارهای در مسیر تحویل",icon:(0,e.jsx)(It,{className:"h-6 w-6"}),iconClassName:"bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",valueClassName:"text-rose-700 dark:text-rose-400"}),(0,e.jsx)(ut,{title:"اعلام فروش نمایندگان",value:gt(k),description:"مجموع اعلام فروش ثبت‌شده توسط نمایندگان",icon:(0,e.jsx)(Nn,{className:"h-6 w-6"}),iconClassName:"bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",valueClassName:"text-orange-700 dark:text-orange-400"})]})},Ol="http://localhost:5000/api",_l=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:Ol},Bl=_l("https://myshop-backend-8nu7.onrender.com/api"),Wl=()=>{if(typeof window>"u")return"";const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"],s=[];window.sessionStorage&&s.push(window.sessionStorage),window.localStorage&&s.push(window.localStorage);for(const o of s){for(const b of t){const n=o.getItem(b);if(n&&n!=="null"&&n!=="undefined")return n.replace(/^Bearer\s+/i,"").trim()}for(const b of r){const n=o.getItem(b);if(n)try{const g=JSON.parse(n),i=g?.token||g?.accessToken||g?.authToken||g?.access_token||g?.data?.token;if(i)return String(i).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},Nt=t=>{const r=Number(t);return Number.isFinite(r)?r:0},_e=t=>Nt(t).toLocaleString("fa-IR"),Vl=t=>{const r=String(t?.name||"").toLowerCase();return r.endsWith(".xlsx")||r.endsWith(".xls")},Ql=t=>String(t.row??t.rowNumber??"نامشخص"),Jl=t=>"reason"in t&&t.reason?t.reason:"error"in t&&t.error?t.error:"message"in t&&t.message?t.message:"خطای نامشخص",la=t=>"name"in t&&t.name?t.name:"productName"in t&&t.productName?t.productName:"بدون نام",ia=t=>String(t.row??t.rowNumber??"نامشخص"),oa=(t,r,s,o)=>{const b=Nt(r.createdCount),n=Nt(r.updatedCount),g=Nt(r.unchangedCount),i=Nt(r.zeroPriceCount),u=Nt(r.skippedCount),p=Nt(r.totalRows),d=Nt(r.totalProducts),N=[s?u>0?"⚠️ فایل ذخیره شد، اما بعضی ردیف‌ها ثبت نشدند":g>0?"✅ فایل ذخیره شد؛ بعضی محصولات از قبل وجود داشتند":"✅ فایل Excel با موفقیت ذخیره شد":"⚠️ فایل پردازش شد، اما تغییری ذخیره نشد","",`📄 نام فایل: ${t}`,`📊 تعداد ردیف‌ها: ${_e(p)}`,`➕ محصول جدید: ${_e(b)}`,`🔄 محصول به‌روزشده: ${_e(n)}`,`⏭️ بدون تغییر: ${_e(g)}`,`⚠️ قیمت صفر: ${_e(i)}`,`❌ ثبت‌نشده: ${_e(u)}`,`📦 کل محصولات: ${_e(d)}`];o&&!s&&(N.push(""),N.push(o)),r.createdProducts&&r.createdProducts.length>0&&(N.push(""),N.push(`محصولات اضافه‌شده (${_e(r.createdProducts.length)} مورد):`),r.createdProducts.forEach(k=>{N.push(`• ردیف ${ia(k)}: ${la(k)} — ${_e(k.price)} تومان`)})),r.updatedProducts&&r.updatedProducts.length>0&&(N.push(""),N.push(`محصولات به‌روزشده (${_e(r.updatedProducts.length)} مورد):`),r.updatedProducts.forEach(k=>{N.push(`• ردیف ${ia(k)}: ${la(k)} — قیمت جدید: ${_e(k.newPrice)} تومان`)})),r.unchangedProducts&&r.unchangedProducts.length>0&&(N.push(""),N.push(`محصولات بدون تغییر (${_e(r.unchangedProducts.length)} مورد):`),r.unchangedProducts.forEach(k=>{N.push(`• ردیف ${ia(k)}: ${la(k)} — ${_e(k.price)} تومان`)}));const j=[...r.errors||[],...r.skippedRows||[]];return j.length>0&&(N.push(""),N.push(`جزئیات ردیف‌های ثبت‌نشده (${_e(j.length)} مورد):`),j.forEach(k=>{N.push(`• ردیف ${Ql(k)}: ${Jl(k)}`)})),N.join(`
`)},Hl=({onUploadSuccess:t})=>{const r=(0,a.useRef)(null),[s,o]=(0,a.useState)(!1),[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(null),u=()=>{if(b){window.alert("⏳ لطفاً صبر کنید؛ فایل قبلی هنوز در حال پردازش است.");return}r.current&&(r.current.value="",r.current.click())},p=async k=>{if(!Vl(k)){const x="فقط فایل Excel با فرمت .xlsx یا .xls مجاز است.";window.alert(`❌ خطا

${x}`),i({type:"error",text:x});return}if(!b){n(!0),i(null);try{const x=new FormData;x.append("file",k);const h=Wl(),w={Accept:"application/json"};h&&(w.Authorization=`Bearer ${h}`);const c=(await ne.post(`${Bl}/products/upload`,x,{withCredentials:!0,headers:w,timeout:12e4})).data,$=c.data||{};if(!c.success){const P=oa(k.name,$,!1,c.error||c.message);window.alert(P),i({type:"error",text:P});return}const U=oa(k.name,$,!0,c.message);window.alert(U),i({type:"success",text:U});try{await t()}catch(P){console.error("آپلود موفق بود، اما لیست تازه نشد:",P),i({type:"success",text:`${U}

⚠️ فایل ذخیره شد، اما لیست صفحه تازه نشد.`})}}catch(x){console.error("❌ خطا در آپلود Excel:",x);let h="هنگام آپلود فایل خطای غیرمنتظره‌ای رخ داد.";if(ne.isAxiosError(x)){const w=x.response?.status,c=x.response?.data;c?.data?h=oa(k.name,c.data,!1,c.error||c.message):h=c?.error||c?.message||x.message||h,w===401&&(h="جلسه ورود شما منقضی شده است؛ دوباره وارد شوید."),w===403&&(h="این حساب اجازه آپلود لیست قیمت را ندارد."),w===413&&(h="حجم فایل نباید بیشتر از ۱۰ مگابایت باشد."),x.response||(h="ارتباط با سرور برقرار نشد.")}else x instanceof Error&&(h=x.message);window.alert(`❌ خطا در آپلود Excel

${h}`),i({type:"error",text:h})}finally{n(!1),r.current&&(r.current.value="")}}},d=k=>{const x=k.currentTarget.files?.[0];k.currentTarget.value="",x&&p(x)},N=k=>{if(k.preventDefault(),k.stopPropagation(),k.type==="dragenter"||k.type==="dragover"){o(!0);return}k.type==="dragleave"&&o(!1)},j=k=>{if(k.preventDefault(),k.stopPropagation(),o(!1),b)return;const x=k.dataTransfer.files?.[0];x&&p(x)};return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-8",children:[(0,e.jsxs)("div",{className:"mb-6 text-center",children:[(0,e.jsxs)("h2",{className:"mb-2 flex items-center justify-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100",children:[(0,e.jsx)(Nr,{className:"h-6 w-6 text-purple-600 dark:text-purple-400"}),"آپلود هوشمند لیست قیمت"]}),(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"فایل Excel شامل عنوان محصول، قیمت محصول و دسته‌بندی"})]}),(0,e.jsxs)("div",{className:`rounded-2xl border-2 border-dashed p-8 text-center transition-all md:p-12 ${s?"border-purple-500 bg-purple-50 dark:bg-purple-900/20":"border-gray-300 hover:border-purple-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"}`,onDragEnter:N,onDragLeave:N,onDragOver:N,onDrop:j,children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-purple-500 dark:text-purple-400",children:(0,e.jsx)(Ka,{className:"h-16 w-16"})}),(0,e.jsx)("p",{className:"mb-2 text-lg font-medium text-gray-700 dark:text-gray-300",children:"فایل Excel را اینجا بکشید و رها کنید"}),(0,e.jsx)("p",{className:"mb-4 text-sm text-gray-500",children:"یا"}),(0,e.jsx)("input",{ref:r,type:"file",accept:".xlsx,.xls",onChange:d,className:"hidden"}),(0,e.jsx)("button",{type:"button",onClick:u,disabled:b,className:`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-lg transition-all ${b?"cursor-not-allowed bg-gray-400":"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"}`,children:b?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}),"در حال پردازش..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Nr,{className:"h-5 w-5"}),"انتخاب فایل Excel"]})}),b?(0,e.jsxs)("div",{className:"mt-6 flex flex-col items-center",children:[(0,e.jsx)(xe,{className:"h-8 w-8 animate-spin text-purple-600"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"در حال ثبت محصولات و به‌روزرسانی لیست قیمت..."})]}):null]}),g?(0,e.jsxs)("div",{className:`mt-6 flex gap-3 rounded-xl border p-4 ${g.type==="success"?"border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20":"border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20"}`,children:[g.type==="success"?(0,e.jsx)(we,{className:"h-5 w-5 shrink-0 text-green-600 dark:text-green-400"}):(0,e.jsx)(Le,{className:"h-5 w-5 shrink-0 text-red-600 dark:text-red-400"}),(0,e.jsx)("p",{className:`whitespace-pre-line text-sm font-bold leading-7 ${g.type==="success"?"text-green-800 dark:text-green-300":"text-red-800 dark:text-red-300"}`,children:g.text})]}):null,(0,e.jsxs)("div",{className:"mt-6 flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsx)(Gn,{className:"h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-medium text-blue-800 dark:text-blue-300",children:"قالب فایل Excel"}),(0,e.jsxs)("p",{className:"mt-1 text-xs leading-6 text-blue-600 dark:text-blue-400",children:["ستون‌های فایل باید شامل"," ",(0,e.jsx)("strong",{children:"عنوان محصول"}),"،"," ",(0,e.jsx)("strong",{children:"قیمت محصول"})," و"," ",(0,e.jsx)("strong",{children:"دسته‌بندی"})," ","باشند. محصول بدون قیمت با قیمت صفر ثبت می‌شود."]})]})]})]})},Kl=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],us=t=>{const r=Number(t);return`${new Intl.NumberFormat("fa-IR").format(Number.isFinite(r)?r:0)} تومان`},wt=t=>String(t??"").replace(/\u200c/g," ").replace(/\u200f/g,"").replace(/\u200e/g,"").replace(/\s+/g," ").trim().toLowerCase(),_r=t=>String(t.name||t.productName||t.title||"بدون نام").trim(),Ar=t=>String(t.brand||t.brandName||"").trim(),hr=t=>String(t.category||"").trim(),bs=(t,r)=>{const s=String(t.id??"").trim();return s||`product-${wt(_r(t))}-${wt(hr(t))}-${r}`},Sn=({products:t,userRole:r,onEdit:s,onDelete:o})=>{const[b,n]=(0,a.useState)(""),[g,i]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),d=(0,a.useMemo)(()=>Array.isArray(t)?t.filter(Boolean):[],[t]),N=(0,a.useMemo)(()=>{const c=new Set;return Kl.forEach($=>{c.add($)}),d.forEach($=>{const U=hr($);U&&c.add(U)}),Array.from(c)},[d]),j=(0,a.useMemo)(()=>{const c=new Set;return d.forEach($=>{const U=Ar($);U&&c.add(U)}),Array.from(c).sort(($,U)=>$.localeCompare(U,"fa"))},[d]);(0,a.useEffect)(()=>{g&&!N.includes(g)&&i("")},[N,g]),(0,a.useEffect)(()=>{u&&!j.includes(u)&&p("")},[j,u]);const k=(0,a.useMemo)(()=>{const c=wt(b),$=wt(g),U=wt(u);return d.filter(P=>{const O=wt(_r(P)),H=wt(Ar(P)),T=wt(hr(P));return(!c||O.includes(c)||H.includes(c)||T.includes(c))&&(!$||T===$)&&(!U||H===U)})},[d,b,g,u]),x=!!(b||g||u),h=()=>{n(""),i(""),p("")},w=r==="admin";return d.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(un,{className:"h-16 w-16 md:h-24 md:w-24"})}),(0,e.jsx)("p",{className:"text-lg font-bold text-gray-500 dark:text-gray-400 md:text-xl",children:"هنوز محصولی اضافه نشده است"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"از بخش آپلود Excel شروع کنید."})]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4",children:[(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(jn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"لیست قیمت محصولات"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:"قیمت‌های ثبت‌شده و به‌روزرسانی‌شده محصولات"})]})]}),(0,e.jsxs)("span",{className:"w-fit rounded-lg bg-gray-100 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:[new Intl.NumberFormat("fa-IR").format(k.length)," ","محصول"]})]}),(0,e.jsxs)("div",{className:"mt-4",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Tl,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"فیلتر و جستجو"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ht,{className:"absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"text",value:b,onChange:c=>{n(c.target.value)},placeholder:"جستجوی عنوان، برند یا دسته‌بندی...",className:"w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:g,onChange:c=>{i(c.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),N.map(c=>(0,e.jsx)("option",{value:c,children:c},c))]}),(0,e.jsxs)("select",{value:u,onChange:c=>{p(c.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),j.map(c=>(0,e.jsx)("option",{value:c,children:c},c))]})]}),x?(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[new Intl.NumberFormat("fa-IR").format(k.length)," ","محصول یافت شد"]}),(0,e.jsx)("button",{type:"button",onClick:h,className:"text-xs font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400",children:"پاک کردن فیلترها"})]}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full min-w-[860px] border-collapse text-right",children:[(0,e.jsx)("thead",{className:"border-b border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-right text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"عنوان"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"برند"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"قیمت فعلی"}),w?(0,e.jsx)("th",{className:"px-4 py-3 text-center text-sm font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:k.map((c,$)=>{const U=String(c.id??"").trim(),P=bs(c,$);return(0,e.jsxs)("tr",{className:"bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"max-w-[340px] border-l border-gray-100 px-4 py-4 text-right text-sm font-bold text-gray-800 dark:border-gray-700 dark:text-gray-200",children:(0,e.jsx)("p",{className:"line-clamp-2",children:_r(c)})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400",children:Ar(c)||"-"}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center dark:border-gray-700",children:(0,e.jsx)("span",{className:"rounded-md bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:hr(c)||"عمومی"})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm font-black text-blue-700 dark:border-gray-700 dark:text-blue-400",children:us(c.price)}),w?(0,e.jsx)("td",{className:"px-4 py-4",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(c)},className:"rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(Xt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!U,onClick:()=>{U&&o(U)},className:"rounded-lg p-2 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]})}):null]},P)})})]})}),(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:k.map((c,$)=>{const U=String(c.id??"").trim();return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"line-clamp-2 text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:_r(c)}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[10px]",children:[(0,e.jsxs)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:["برند:"," ",Ar(c)||"بدون برند"]}),(0,e.jsx)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:hr(c)||"عمومی"})]})]}),w?(0,e.jsxs)("div",{className:"flex shrink-0 gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(c)},className:"rounded-lg p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(Xt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!U,onClick:()=>{U&&o(U)},className:"rounded-lg p-2 text-red-600 hover:bg-red-100 disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]}):null]}),(0,e.jsxs)("div",{className:"mt-4 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-gray-400 dark:text-gray-500",children:"قیمت فعلی"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-blue-700 dark:text-blue-400",children:us(c.price)})]})]},bs(c,$))})}),k.length===0?(0,e.jsxs)("div",{className:"py-10 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(ol,{className:"h-10 w-10"})}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-400",children:"محصولی با این مشخصات پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:h,className:"mt-3 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400",children:"پاک‌کردن فیلترها"})]}):null]})]})},Ya=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Cn=t=>{const r=Ya(t).replace(/-/g,"/").replace(/[^\d/]/g,"").replace(/\//g,"").slice(0,8);return r.length<=4?r:r.length<=6?`${r.slice(0,4)}/${r.slice(4)}`:`${r.slice(0,4)}/${r.slice(4,6)}/${r.slice(6,8)}`},In=t=>/^1[34]\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/.test(t),Yt=t=>{const r=Ya(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?new Intl.NumberFormat("fa-IR").format(s):String(t??"—")},ys=t=>String(t).padStart(2,"0"),Yl=({year:t,month:r,day:s})=>`${t}/${ys(r)}/${ys(s)}`,fs=t=>{const r=Cn(t);if(!In(r))return null;const[s,o,b]=r.split("/").map(Number);return{year:s,month:o,day:b}},Gl=t=>{const r=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],s=t-621;let o=-14,b=r[0],n=0;for(let u=1;u<r.length;u+=1){const p=r[u];if(n=p-b,s<p)break;o+=Math.floor(n/33)*8+Math.floor(n%33/4),b=p}let g=s-b;o+=Math.floor(g/33)*8+Math.floor((g%33+3)/4),n%33===4&&n-g===4&&(o+=1),n-g<6&&(g=g-n+Math.floor((n+4)/33)*33);let i=(g+1)%33-1;return i===-1&&(i=4),i===0||i===4},Xl=(t,r)=>r>=1&&r<=6?31:r>=7&&r<=11?30:r===12?Gl(t)?30:29:30,Zl=(t,r,s)=>{const o=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=[0,31,31,31,31,31,31,30,30,30,30,30,29],n=t-1600,g=r-1,i=s-1;let u=365*n+Math.floor((n+3)/4)-Math.floor((n+99)/100)+Math.floor((n+399)/400);for(let k=0;k<g;k+=1)u+=o[k+1];g>1&&(t%4===0&&t%100!==0||t%400===0)&&(u+=1),u+=i;let p=u-79;const d=Math.floor(p/12053);p%=12053;let N=979+33*d+4*Math.floor(p/1461);p%=1461,p>=366&&(N+=Math.floor((p-1)/365),p=(p-1)%365);let j=1;for(;j<=12&&p>=b[j];)p-=b[j],j+=1;return{year:N,month:j,day:p+1}},ei=(t,r,s)=>{const o=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=t-979,n=r-1,g=s-1;let i=365*b+Math.floor(b/33)*8+Math.floor((b%33+3)/4);for(let j=0;j<n;j+=1)i+=j<6?31:30;i+=g;let u=i+79,p=1600+400*Math.floor(u/146097);u%=146097;let d=!0;u>=36525&&(u-=1,p+=100*Math.floor(u/36524),u%=36524,u>=365?u+=1:d=!1),p+=4*Math.floor(u/1461),u%=1461,u>=366&&(d=!1,u-=1,p+=Math.floor(u/365),u%=365);let N=0;for(;N<12&&u>=o[N+1]+(N===1&&d?1:0);)u-=o[N+1]+(N===1&&d?1:0),N+=1;return{year:p,month:N+1,day:u+1}},ti=(t,r,s)=>{const o=ei(t,r,s);return(new Date(o.year,o.month-1,o.day).getDay()+1)%7},ri=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],ai=["ش","ی","د","س","چ","پ","ج"],si=({value:t,onChange:r,disabled:s=!1,label:o="تاریخ"})=>{const[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(()=>fs(t)||Zl(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate())),u=fs(t),p=x=>{r(Yl({...g,day:x})),n(!1)},d=x=>{i(h=>{let w=h.month+x,c=h.year;return w>12&&(w=1,c+=1),w<1&&(w=12,c-=1),{...h,year:c,month:w,day:1}})},N=Xl(g.year,g.month),j=ti(g.year,g.month,1),k=[];for(let x=0;x<j;x+=1)k.push(null);for(let x=1;x<=N;x+=1)k.push(x);return(0,e.jsxs)("div",{className:"relative w-full",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(is,{className:"h-3.5 w-3.5 text-gray-400"}),o]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("input",{type:"text",readOnly:!0,value:t,onClick:()=>{s||n(x=>!x)},disabled:s,placeholder:"1403/01/01",className:"w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-500"}),(0,e.jsx)("button",{type:"button",onClick:()=>{s||n(x=>!x)},disabled:s,className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-blue-500 disabled:opacity-50",children:(0,e.jsx)(is,{className:"h-4 w-4"})})]}),b?(0,e.jsxs)("div",{className:"absolute left-0 right-0 z-[100] mt-2 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:()=>d(1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(Zn,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})}),(0,e.jsxs)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:[ri[g.month-1]," ",Yt(g.year)]}),(0,e.jsx)("button",{type:"button",onClick:()=>d(-1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(fl,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})})]}),(0,e.jsx)("div",{className:"mb-2 grid grid-cols-7 gap-1",children:ai.map(x=>(0,e.jsx)("div",{className:"text-center text-xs font-bold text-gray-400",children:x},x))}),(0,e.jsx)("div",{className:"grid grid-cols-7 gap-1",children:k.map((x,h)=>{const w=u?.day===x&&u?.month===g.month&&u?.year===g.year;return(0,e.jsx)("button",{type:"button",disabled:!x,onClick:()=>{x&&p(x)},className:`h-8 w-full rounded-lg text-xs font-bold transition-all ${x?w?"bg-blue-600 text-white shadow-md":"text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700":"invisible"}`,children:x?Yt(x):""},`${x||"empty"}-${h}`)})}),(0,e.jsx)("div",{className:"mt-3 flex justify-end",children:(0,e.jsx)("button",{type:"button",onClick:()=>n(!1),className:"text-xs text-gray-500 transition hover:text-red-500",children:"بستن"})})]}):null]})},Br=t=>Ya(t).replace(/[^\d]/g,""),js=t=>{const r=Number(Br(t));return!Number.isFinite(r)||r===0?"":r.toLocaleString("en-US")},gr=()=>{const t=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date);return`${t.find(r=>r.type==="year")?.value||""}/${t.find(r=>r.type==="month")?.value||""}/${t.find(r=>r.type==="day")?.value||""}`},Dr={name:"",email:"",phone:"",province:"",city:"",code:"",address:"",description:"",shopDescription:"",orders:0,status:"active",startDate:gr(),depositAmount:"0",guaranteeCheck:"0",totalFinancialCommitment:"0",shipmentsCount:0,storeItemsCount:0,storeItemsTotalValue:0,returnRequestsCount:0,last10DaysSales:0,averageSales:0},ni=({representatives:t,userRole:r,onOpenDashboard:s,onAddRepresentative:o,onEditRepresentative:b,onDeleteRepresentative:n})=>{const[g,i]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!1),[d,N]=(0,a.useState)(null),[j,k]=(0,a.useState)(Dr),x=(0,a.useRef)(null),h=(0,a.useRef)(null),w=(0,a.useRef)(null),c=(0,a.useRef)(null),$=(0,a.useRef)(null),U=(0,a.useRef)(null),P=(0,a.useRef)(null),O=Number(Br(j.depositAmount))||0,H=Number(Br(j.guaranteeCheck))||0,T=(0,a.useMemo)(()=>O+H,[O,H]),I=(S,z)=>{S.key==="Enter"&&(S.preventDefault(),z.current?.focus())},f=()=>{const S=window.open("","_blank","width=900,height=700");if(!S){alert("لطفاً popup blocker را غیرفعال کنید");return}const z=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),y=t.map((m,v)=>`
      <tr>
        <td style="text-align:center;">${v+1}</td>
        <td style="text-align:center;">${m.code||"—"}</td>
        <td>${m.name||"—"}</td>
        <td>${m.province||"—"}</td>
        <td>${m.city||"—"}</td>
        <td style="text-align:center;" dir="ltr">${m.phone||"—"}</td>
        <td style="text-align:center;">${m.storeItemsCount||0}</td>
        <td style="text-align:center;">${m.status==="inactive"?"غیرفعال":"فعال"}</td>
      </tr>
    `).join("");S.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ لیست نمایندگان</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 60px; max-width: 200px; }
.company-info h1 { font-size: 18px; margin: 0; }
.company-info p { font-size: 12px; color: #666; margin: 2px 0; }
.report-title { text-align: center; margin: 20px 0; }
.report-title h2 { font-size: 22px; margin: 0; }
.report-title p { font-size: 12px; color: #666; margin-top: 5px; }
table { width: 100%; border-collapse: collapse; margin-top: 15px; }
th, td { border: 1px solid #333; padding: 8px 10px; font-size: 12px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; }
tr:nth-child(even) td { background: #f9fafb; }
.summary { display: flex; gap: 20px; margin-top: 20px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px 25px; text-align: center; min-width: 150px; }
.summary-card .label { font-size: 11px; color: #666; }
.summary-card .value { font-size: 20px; font-weight: bold; margin-top: 5px; }
.footer { margin-top: 40px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>بازرگانی مهر امین</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: 028-33236072</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${z}</p>
    <p><strong>تعداد نمایندگان:</strong> ${t.length}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش لیست نمایندگان</h2>
  <p>لیست کامل نمایندگان ثبت‌شده در سامانه</p>
</div>

<table>
  <thead>
    <tr>
      <th style="width: 5%;">ردیف</th>
      <th style="width: 10%;">کد</th>
      <th style="width: 20%;">نام نماینده</th>
      <th style="width: 12%;">استان</th>
      <th style="width: 12%;">شهر</th>
      <th style="width: 15%;">تلفن</th>
      <th style="width: 10%;">تعداد کالا</th>
      <th style="width: 10%;">وضعیت</th>
    </tr>
  </thead>
  <tbody>
    ${y}
  </tbody>
</table>

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد کل نمایندگان</div>
    <div class="value">${t.length}</div>
  </div>
  <div class="summary-card">
    <div class="label">نمایندگان فعال</div>
    <div class="value">${t.filter(m=>m.status!=="inactive").length}</div>
  </div>
  <div class="summary-card">
    <div class="label">نمایندگان غیرفعال</div>
    <div class="value">${t.filter(m=>m.status==="inactive").length}</div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>بازرگانی مهر امین - 1405</p>
</div>

</body>
</html>`),S.document.close(),S.focus(),setTimeout(()=>{S.print()},1e3)},A=S=>{S?(k({name:S.name??"",email:S.email??"",code:String(S.code??""),province:S.province??"",city:S.city??"",phone:S.phone??"",startDate:S.startDate||gr(),status:S.status==="inactive"?"inactive":"active",address:S.address??"",description:S.description??"",shopDescription:S.shopDescription??"",orders:Number(S.orders)||0,depositAmount:String(S.depositAmount??"0"),guaranteeCheck:String(S.guaranteeCheck??"0"),totalFinancialCommitment:String(S.totalFinancialCommitment??"0"),shipmentsCount:Number(S.shipmentsCount)||0,storeItemsCount:Number(S.storeItemsCount)||0,storeItemsTotalValue:Number(S.storeItemsTotalValue)||0,returnRequestsCount:Number(S.returnRequestsCount)||0,last10DaysSales:Number(S.last10DaysSales)||0,averageSales:Number(S.averageSales)||0}),N(String(S.id))):(k({...Dr,startDate:gr()}),N(null)),i(!0),window.setTimeout(()=>{x.current?.focus()},100)},B=()=>{u||(i(!1),N(null),k({...Dr,startDate:gr()}))},D=(S,z)=>{k(y=>({...y,[S]:Br(z)||"0"}))},W=async S=>{S.preventDefault();const z=j.name.trim(),y=j.email.trim(),m=String(j.code??"").trim(),v=j.province.trim(),F=j.city.trim(),L=j.phone.trim(),C=Cn(j.startDate||"");if(!z){alert("لطفاً نام نماینده را وارد کنید."),x.current?.focus();return}if(!m){alert("لطفاً کد نمایندگی را وارد کنید."),h.current?.focus();return}if(!v){alert("لطفاً استان را وارد کنید.");return}if(!F){alert("لطفاً شهر را وارد کنید."),w.current?.focus();return}if(!L){alert("لطفاً شماره تلفن را وارد کنید."),c.current?.focus();return}if(!In(C)){alert("تاریخ قرارداد نامعتبر است. لطفاً از تقویم استفاده کنید.");return}p(!0);try{const _={name:z,email:y,code:m,province:v,city:F,phone:L,address:j.address.trim(),description:j.description.trim(),shopDescription:j.shopDescription.trim(),orders:Number(j.orders)||0,status:j.status==="inactive"?"inactive":"active",startDate:C,depositAmount:String(O),guaranteeCheck:String(H),totalFinancialCommitment:String(T),shipmentsCount:Number(j.shipmentsCount)||0,storeItemsCount:Number(j.storeItemsCount)||0,storeItemsTotalValue:Number(j.storeItemsTotalValue)||0,returnRequestsCount:Number(j.returnRequestsCount)||0,last10DaysSales:Number(j.last10DaysSales)||0,averageSales:Number(j.averageSales)||0};d?(await b(d,_),alert("اطلاعات نماینده با موفقیت ویرایش شد.")):(await o(_),alert("نماینده با موفقیت ثبت شد.")),i(!1),N(null),k({...Dr,startDate:gr()})}catch(_){console.error("خطا در ذخیره نماینده:",_),alert("خطا در ذخیره اطلاعات. لطفاً دوباره تلاش کنید.")}finally{p(!1)}},K=async(S,z)=>{if(window.confirm(`آیا از حذف نماینده «${z}» مطمئن هستید؟`))try{await n(S)}catch(y){console.error("خطا در حذف نماینده:",y)}};return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-colors dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-800 dark:text-gray-100 md:text-xl",children:[(0,e.jsx)(Yr,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"لیست نمایندگان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:[Yt(t.length)," ","نماینده ثبت شده"]})]}),r==="admin"?(0,e.jsxs)("div",{className:"flex gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:f,className:"flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ لیست"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>A(),className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 active:scale-95",children:[(0,e.jsx)(Dl,{className:"h-4 w-4"}),"افزودن نماینده"]})]}):null]}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b-2 border-gray-200 bg-gray-50 text-center text-lg dark:border-gray-800 dark:bg-gray-800/50",children:[(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"کد"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"نام"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"تلفن"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"سفارش‌ها"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"وضعیت"}),r==="admin"?(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{children:t.length===0?(0,e.jsx)("tr",{children:(0,e.jsxs)("td",{colSpan:r==="admin"?7:6,className:"px-4 py-12 text-center text-gray-500 dark:text-gray-400",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(ms,{className:"h-12 w-12 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold",children:"هیچ نماینده‌ای یافت نشد"})]})}):t.map(S=>{const z=S.status!=="inactive";return(0,e.jsxs)("tr",{className:"border-b text-center transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50",children:[(0,e.jsx)("td",{className:"px-4 py-3 font-mono text-sm text-gray-700 dark:text-gray-300",children:S.code||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-800 dark:text-gray-200",children:S.name}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm text-gray-700 dark:text-gray-300",children:S.city||"---"}),(0,e.jsx)("td",{dir:"ltr",className:"px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300",children:S.phone||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300",children:Yt(S.orders||0)}),(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("span",{className:`inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${z?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[z?(0,e.jsx)(we,{className:"h-3.5 w-3.5"}):(0,e.jsx)(nt,{className:"h-3.5 w-3.5"}),z?"فعال":"غیرفعال"]})}),r==="admin"?(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(S.id)),className:"rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95",children:"داشبورد"}),(0,e.jsxs)("button",{type:"button",onClick:()=>A(S),className:"flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:[(0,e.jsx)(Xt,{className:"h-3.5 w-3.5"}),"ویرایش"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{K(String(S.id),S.name)},className:"flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:[(0,e.jsx)(Xe,{className:"h-3.5 w-3.5"}),"حذف"]})]})}):null]},String(S.id))})})]})}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:t.length===0?(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(ms,{className:"h-14 w-14 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold text-gray-500 dark:text-gray-400",children:"هیچ نماینده‌ای یافت نشد"})]}):t.map(S=>{const z=S.status!=="inactive";return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:from-gray-800 dark:to-gray-900 dark:hover:border-blue-700",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-start justify-between",children:[(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:S.name}),(0,e.jsxs)("p",{className:"mt-1 font-mono text-xs text-gray-500 dark:text-gray-400",children:["کد:"," ",S.code||"---"]})]}),(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-bold ${z?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[z?(0,e.jsx)(we,{className:"h-3 w-3"}):(0,e.jsx)(nt,{className:"h-3 w-3"}),z?"فعال":"غیرفعال"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"شهر"}),(0,e.jsx)("p",{className:"font-bold text-gray-800 dark:text-gray-200",children:S.city||"---"})]}),(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"تلفن"}),(0,e.jsx)("p",{dir:"ltr",className:"font-bold text-gray-800 dark:text-gray-200",children:S.phone||"---"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"سفارش‌ها"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-200",children:Yt(S.orders||0)})]})]}),r==="admin"?(0,e.jsxs)("div",{className:"mt-3 flex items-center gap-2 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(S.id)),className:"flex-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg",children:"داشبورد"}),(0,e.jsx)("button",{type:"button",onClick:()=>A(S),className:"flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:(0,e.jsx)(Xt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{K(String(S.id),S.name)},className:"flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]}):null]},String(S.id))})}),g?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-3 md:p-4",children:(0,e.jsxs)("div",{className:"max-h-[92dvh] w-full min-w-0 max-w-3xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between gap-2 border-b border-gray-100 pb-4 dark:border-gray-800",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:d?"ویرایش اطلاعات نماینده":"افزودن نماینده جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:d?"اطلاعات نماینده را اصلاح کرده و ذخیره کنید.":"اطلاعات اولیه و مالی نماینده را وارد کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:B,disabled:u,className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-red-900/30 dark:hover:text-red-400",children:(0,e.jsx)(Ae,{className:"h-4 w-4"})})]}),(0,e.jsxs)("form",{onSubmit:S=>{W(S)},className:"space-y-5",children:[(0,e.jsxs)("section",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)(jr,{className:"h-4 w-4"}),"اطلاعات پایه نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(jr,{className:"h-3.5 w-3.5 text-gray-400"}),"نام نماینده",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:x,type:"text",value:j.name,onChange:S=>k(z=>({...z,name:S.target.value})),onKeyDown:S=>I(S,h),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"نام نماینده",required:!0,autoFocus:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Sl,{className:"h-3.5 w-3.5 text-gray-400"}),"کد نمایندگی",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:h,type:"text",value:j.code,onChange:S=>k(z=>({...z,code:S.target.value})),onKeyDown:S=>I(S,w),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"مثلاً 1001",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Ct,{className:"h-3.5 w-3.5 text-gray-400"}),"استان",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{type:"text",value:j.province,onChange:S=>k(z=>({...z,province:S.target.value})),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"استان",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Ct,{className:"h-3.5 w-3.5 text-gray-400"}),"شهر",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:w,type:"text",value:j.city,onChange:S=>k(z=>({...z,city:S.target.value})),onKeyDown:S=>I(S,c),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"شهر",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(ea,{className:"h-3.5 w-3.5 text-gray-400"}),"تلفن",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:c,type:"text",dir:"ltr",value:j.phone,onChange:S=>k(z=>({...z,phone:S.target.value})),onKeyDown:S=>I(S,$),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"09xxxxxxxxx",required:!0})]}),(0,e.jsx)("div",{className:"min-w-0",children:(0,e.jsx)(si,{label:"تاریخ قرارداد شمسی",value:j.startDate,disabled:u,onChange:S=>k(z=>({...z,startDate:S}))})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(cs,{className:"h-3.5 w-3.5 text-gray-400"}),"وضعیت"]}),(0,e.jsxs)("select",{ref:$,value:j.status,onChange:S=>k(z=>({...z,status:S.target.value==="inactive"?"inactive":"active"})),onKeyDown:S=>I(S,U),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)(Ct,{className:"h-4 w-4"}),"آدرس و توضیحات"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 md:col-span-2",children:[(0,e.jsx)("label",{htmlFor:"representative-address",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{id:"representative-address",rows:3,maxLength:1e3,value:j.address,onChange:S=>k(z=>({...z,address:S.target.value})),disabled:u,placeholder:"استان، شهر، خیابان، پلاک و کد پستی",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{id:"representative-description",rows:4,maxLength:3e3,value:j.description,onChange:S=>k(z=>({...z,description:S.target.value})),disabled:u,placeholder:"توضیحات مربوط به نماینده",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-shop-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{id:"representative-shop-description",rows:2,maxLength:3e3,value:j.shopDescription,onChange:S=>k(z=>({...z,shopDescription:S.target.value})),disabled:u,placeholder:"مشخصات، موقعیت یا شرایط مغازه",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-purple-700 dark:text-purple-400",children:[(0,e.jsx)(xt,{className:"h-4 w-4"}),"اطلاعات مالی"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ ودیعه"}),(0,e.jsx)("input",{ref:U,type:"text",inputMode:"numeric",dir:"ltr",value:js(j.depositAmount),onChange:S=>D("depositAmount",S.target.value),onKeyDown:S=>I(S,P),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ چک ضمانت"}),(0,e.jsx)("input",{ref:P,type:"text",inputMode:"numeric",dir:"ltr",value:js(j.guaranteeCheck),onChange:S=>D("guaranteeCheck",S.target.value),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مجموع تعهد مالی"}),(0,e.jsx)("div",{dir:"ltr",className:"w-full rounded-xl border border-purple-200 bg-purple-50 px-3 py-2 text-center text-sm font-black text-purple-700 dark:border-purple-900/50 dark:bg-purple-900/20 dark:text-purple-300",children:Yt(T)})]})]}),(0,e.jsxs)("p",{className:"mt-3 flex items-start gap-2 rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)(cs,{className:"mt-0.5 h-3.5 w-3.5 shrink-0"}),"اطلاعات آماری داشبورد از طریق فایل اکسل در بخش انبار نماینده وارد خواهد شد."]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-100 pt-5 dark:border-gray-800 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:B,disabled:u,className:"min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-800 transition-all hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"submit",disabled:u,className:"min-h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 disabled:cursor-not-allowed disabled:opacity-60",children:u?"در حال ذخیره...":d?"ذخیره تغییرات":"ثبت نماینده"})]})]})]})}):null]})},li={name:"",email:"",code:"",province:"",city:"",phone:"",startDate:"",status:"active",address:"",description:"",shopDescription:""},ii=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),dt=t=>{const r=ii(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Et=t=>new Intl.NumberFormat("fa-IR").format(dt(t)),Qt=t=>new Intl.NumberFormat("fa-IR").format(dt(t)),da=t=>[String(t.province??"").trim(),String(t.city??"").trim()].filter(Boolean).join(" — ")||"ثبت نشده",bt=()=>{if(typeof window>"u")return"";for(const t of["token","accessToken","authToken","adminToken","admin_access_token"]){const r=window.sessionStorage.getItem(t);if(r?.trim())return r.trim();const s=window.localStorage.getItem(t);if(s?.trim())return s.trim()}return""},yt=async t=>{const r=await t.text();if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error(`پاسخ JSON نیست. کد پاسخ: ${t.status}. ${r.slice(0,120)}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ JSON معتبر نیست. کد پاسخ: ${t.status}`)}},oi=t=>{const r=["jpg","jpeg","png","gif","webp","svg"],s=t.name.split(".").pop()?.toLowerCase();return!!(s&&r.includes(s))},Ke=({title:t,children:r,index:s})=>(0,e.jsx)("div",{className:"group relative min-h-[220px] overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_16px_32px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 dark:shadow-none sm:min-h-[250px] sm:p-5 md:rounded-[30px] md:p-6",style:{animation:`cardEnter 550ms ease-out ${s*70}ms both`},children:(0,e.jsxs)("div",{className:"relative z-10 flex h-full flex-col",children:[(0,e.jsx)("div",{className:"w-full rounded-xl border border-blue-100 bg-slate-800 px-4 py-2.5 text-center text-sm font-black text-white shadow-sm dark:border-slate-600 dark:bg-slate-700 sm:px-5 sm:py-3 sm:text-base md:text-lg",children:t}),(0,e.jsxs)("div",{className:"relative mt-5 flex flex-1 items-center justify-center overflow-hidden rounded-[18px] border border-slate-100 bg-white p-4 text-center shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:border-gray-700 dark:bg-gray-800 sm:mt-6 sm:p-5",children:[(0,e.jsx)("div",{className:"relative z-20 w-full",children:r}),(0,e.jsx)("div",{className:"pointer-events-none absolute -right-8 -top-8 z-10 h-28 w-28 rounded-full border-[10px] border-blue-100/70 bg-blue-200/50 transition-transform duration-500 group-hover:scale-110 dark:border-blue-900/40 dark:bg-blue-800/30 sm:-right-9 sm:-top-9 sm:h-36 sm:w-36"}),(0,e.jsx)("div",{className:"pointer-events-none absolute -bottom-10 -left-10 z-0 h-32 w-32 rounded-full bg-blue-100/50 blur-xl dark:bg-blue-900/20"})]})]})}),di=({representative:t,apiUrl:r,onBack:s,files:o=[],loadingFiles:b=!1,onViewFile:n,onDeleteFile:g,onRepresentativeUpdated:i,onRefreshFiles:u})=>{const[p,d]=(0,a.useState)(t),[N,j]=(0,a.useState)([]),[k,x]=(0,a.useState)(!0),[h,w]=(0,a.useState)(""),[c,$]=(0,a.useState)([]),[U,P]=(0,a.useState)(!1),[O,H]=(0,a.useState)(""),[T,I]=(0,a.useState)([]),[f,A]=(0,a.useState)(!0),[B,D]=(0,a.useState)(""),[W,K]=(0,a.useState)(!1),[S,z]=(0,a.useState)(""),[y,m]=(0,a.useState)(null),[v,F]=(0,a.useState)(""),[L,C]=(0,a.useState)(null),[_,ee]=(0,a.useState)(!1),[V,ue]=(0,a.useState)(li),[te,le]=(0,a.useState)(!1),[oe,ie]=(0,a.useState)(""),[be,me]=(0,a.useState)(!1),[R,Q]=(0,a.useState)([]),[X,l]=(0,a.useState)(!1),[E,J]=(0,a.useState)(""),[ce,ge]=(0,a.useState)(!1),[ye,De]=(0,a.useState)(!1),[M,Y]=(0,a.useState)([]),ae=Array.isArray(o)?o:[],fe=(0,a.useMemo)(()=>{const q=[],G=new Set;return[...ae,...M].forEach(re=>{const Z=String(re.name??"").trim().toLowerCase();!Z||G.has(Z)||(G.add(Z),q.push(re))}),q},[ae,M]),Ie=(0,a.useMemo)(()=>{const q=String(r||"").trim().replace(/\/+$/,"");return q?q.endsWith("/api")?q:`${q}/api`:"http://localhost:5000/api"},[r]),Te=String(p.id).trim(),Tt=Te?`${Ie}/representatives/${encodeURIComponent(Te)}/warehouse`:"",Se=Te?`${Ie}/representatives/${encodeURIComponent(Te)}/notes`:"",Sr=`${Ie}/sales-from-warehouse/admin/all`;(0,a.useEffect)(()=>{d(t)},[t]);const tr=()=>{ue({name:p.name??"",email:p.email??"",code:String(p.code??""),province:p.province??"",city:p.city??"",phone:p.phone??"",startDate:p.startDate??"",status:p.status==="inactive"?"inactive":"active",address:p.address??"",description:p.description??"",shopDescription:p.shopDescription??""}),ie(""),ee(!0)},We=q=>{const{name:G,value:re}=q.currentTarget;ue(Z=>({...Z,[G]:re}))},it=async q=>{if(q.preventDefault(),!V.province.trim()){ie("استان را وارد کنید.");return}if(!V.city.trim()){ie("شهر را وارد کنید.");return}const G=bt();if(!G){ie("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}const re={name:V.name.trim(),email:V.email.trim(),code:V.code.trim(),province:V.province.trim(),city:V.city.trim(),phone:V.phone.trim(),startDate:V.startDate.trim(),status:V.status,address:V.address.trim(),description:V.description.trim(),shopDescription:V.shopDescription.trim()};try{le(!0),ie("");const Z=await fetch(`${Ie}/representatives/${encodeURIComponent(Te)}`,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${G}`},body:JSON.stringify(re)}),se=await yt(Z);if(!Z.ok||!se.success||!se.data)throw new Error(se.error||"ویرایش نماینده ناموفق بود.");d(se.data),i?.(se.data),ee(!1)}catch(Z){console.error("خطا در ویرایش نماینده:",Z),ie(Z instanceof Error?Z.message:"ویرایش نماینده ناموفق بود.")}finally{le(!1)}},Rt=(0,a.useCallback)(async()=>{if(!Tt){j([]),w("شناسه نماینده پیدا نشد."),x(!1);return}const q=bt();if(!q){j([]),w("توکن ادمین پیدا نشد."),x(!1);return}try{x(!0),w("");const G=await fetch(Tt,{headers:{Accept:"application/json",Authorization:`Bearer ${q}`}}),re=await yt(G);if(!G.ok||!re.success)throw new Error(re.error||"دریافت موجودی انبار ناموفق بود.");j(Array.isArray(re.data?.items)?re.data.items:[])}catch(G){j([]),w(G instanceof Error?G.message:"دریافت موجودی انبار ناموفق بود.")}finally{x(!1)}},[Tt]),Cr=(0,a.useCallback)(async()=>{const q=bt();if(!q){$([]),H("برای مشاهده فروش‌ها وارد حساب ادمین شوید."),P(!1);return}try{P(!0),H("");const G=await fetch(Sr,{headers:{Accept:"application/json",Authorization:`Bearer ${q}`}}),re=await yt(G);if(!G.ok||!re.success)throw new Error(re.error||"دریافت گزارش فروش ناموفق بود.");const Z=Array.isArray(re.data)?re.data:[];$(Z.filter(se=>String(se.representativeId)===Te))}catch(G){$([]),H(G instanceof Error?G.message:"دریافت گزارش فروش ناموفق بود.")}finally{P(!1)}},[Sr,Te]),Re=(0,a.useCallback)(async()=>{if(!Se){I([]),z("شناسه نماینده پیدا نشد."),A(!1);return}const q=bt();if(!q){I([]),z("برای مشاهده یادداشت‌ها وارد حساب ادمین شوید."),A(!1);return}try{A(!0),z("");const G=await fetch(Se,{headers:{Accept:"application/json",Authorization:`Bearer ${q}`}}),re=await yt(G);if(!G.ok||!re.success)throw new Error(re.error||"دریافت یادداشت‌ها ناموفق بود.");I(Array.isArray(re.data)?re.data:[])}catch(G){I([]),z(G instanceof Error?G.message:"دریافت یادداشت‌ها ناموفق بود.")}finally{A(!1)}},[Se]);(0,a.useEffect)(()=>{Rt(),Cr(),Re()},[Rt,Cr,Re]);const ze=async q=>{q.preventDefault();const G=B.trim();if(!G||!Se){z("متن یادداشت را وارد کنید.");return}const re=bt();if(!re){z("برای ثبت یادداشت وارد حساب ادمین شوید.");return}try{K(!0),z("");const Z=await fetch(Se,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${re}`},body:JSON.stringify({text:G})}),se=await yt(Z);if(!Z.ok||!se.success||!se.data)throw new Error(se.error||"ثبت یادداشت ناموفق بود.");I(Ee=>[se.data,...Ee]),D("")}catch(Z){z(Z instanceof Error?Z.message:"ثبت یادداشت ناموفق بود.")}finally{K(!1)}},_t=q=>{m(String(q.id)),F(q.text),z("")},Bt=()=>{m(null),F(""),C(null)},aa=async q=>{const G=v.trim();if(!G||!Se){z("متن یادداشت نمی‌تواند خالی باشد.");return}const re=bt();if(!re){z("برای ویرایش یادداشت دوباره وارد شوید.");return}try{C(q),z("");const Z=await fetch(`${Se}/${encodeURIComponent(q)}`,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${re}`},body:JSON.stringify({text:G})}),se=await yt(Z);if(!Z.ok||!se.success||!se.data)throw new Error(se.error||"ویرایش یادداشت ناموفق بود.");I(Ee=>Ee.map(Oe=>String(Oe.id)===q?se.data:Oe)),Bt()}catch(Z){z(Z instanceof Error?Z.message:"ویرایش یادداشت ناموفق بود.")}finally{C(null)}},Wt=async q=>{if(!window.confirm("آیا از حذف این یادداشت مطمئن هستید؟")||!Se)return;const G=bt();if(!G){z("برای حذف یادداشت دوباره وارد شوید.");return}try{C(q);const re=await fetch(`${Se}/${encodeURIComponent(q)}`,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${G}`}}),Z=await yt(re);if(!re.ok||!Z.success)throw new Error(Z.error||"حذف یادداشت ناموفق بود.");I(se=>se.filter(Ee=>String(Ee.id)!==q))}catch(re){z(re instanceof Error?re.message:"حذف یادداشت ناموفق بود.")}finally{C(null)}},rr=["jpg","jpeg","png","gif","webp","pdf","doc","docx","xls","xlsx","zip","rar"],Vt=q=>String(q||"").split(".").pop()?.toLowerCase()?.trim()||"",Mn=q=>{const G=Vt(q.name);return rr.includes(G)},Fn=q=>q.size>0,ts=q=>!q||q<=0?"—":q<1024?`${q} B`:q<1048576?`${(q/1024).toFixed(1)} KB`:`${(q/1048576).toFixed(1)} MB`,Ln=()=>{me(!0),Q([]),J(""),ge(!1)},sa=()=>{X||(me(!1),Q([]),J(""),ge(!1),De(!1))},rs=q=>{if(!q||q.length===0)return;const G=Array.from(q),re=[],Z=[];G.forEach(se=>{if(!Mn(se)){Z.push(`نوع فایل "${se.name}" مجاز نیست.`);return}if(!Fn(se)){Z.push(`فایل "${se.name}" خالی است.`);return}re.push(se)}),Q(se=>[...se,...re]),J(Z.join(" ")),ge(!1)},qn=q=>{Q(G=>G.filter((re,Z)=>Z!==q))},Un=q=>{q.preventDefault(),q.stopPropagation(),De(!0)},On=q=>{q.preventDefault(),q.stopPropagation(),De(!1)},_n=q=>{q.preventDefault(),q.stopPropagation()},Bn=q=>{q.preventDefault(),q.stopPropagation(),De(!1),rs(q.dataTransfer.files)},Wn=async()=>{if(R.length===0){J("حداقل یک فایل انتخاب کنید.");return}const q=bt();if(!q){J("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}if(!Te){J("شناسه نماینده پیدا نشد.");return}try{l(!0),J(""),ge(!1);const G=new FormData;R.forEach(Oe=>{G.append("files",Oe)});const re=`${Ie}/representatives/${encodeURIComponent(Te)}/files`,Z=await fetch(re,{method:"POST",headers:{Authorization:`Bearer ${q}`,Accept:"application/json"},body:G}),se=await yt(Z);if(!Z.ok||!se.success)throw new Error(se.error||"آپلود فایل‌ها ناموفق بود.");ge(!0);const Ee=Array.isArray(se.data?.files)?se.data.files:[];if(Ee.length>0)Y(Oe=>[...Oe,...Ee]);else{const Oe=R.map((Je,ke)=>({id:`local-${Date.now()}-${ke}`,name:Je.name,size:ts(Je.size),uploadedAt:new Intl.DateTimeFormat("fa-IR").format(new Date),representativeId:Te}));Y(Je=>[...Je,...Oe])}Q([]),u?.(),setTimeout(()=>{me(!1),ge(!1)},1500)}catch(G){J(G instanceof Error?G.message:"آپلود فایل‌ها ناموفق بود.")}finally{l(!1)}},Vn=(0,a.useMemo)(()=>N.reduce((q,G)=>q+dt(G.quantity),0),[N]),Qn=(0,a.useMemo)(()=>N.reduce((q,G)=>q+dt(G.totalPrice),0),[N]),Jn=(0,a.useMemo)(()=>{const q=new Date,G=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(q),re=parseInt(G.find(ke=>ke.type==="year")?.value||"0",10),Z=parseInt(G.find(ke=>ke.type==="month")?.value||"0",10),se=parseInt(G.find(ke=>ke.type==="day")?.value||"0",10),Ee=ke=>{if(!ke||typeof ke!="string")return-1;const He=ke.split("/");if(He.length<3)return-1;const Ir=parseInt(He[1],10),ar=parseInt(He[2],10);if(!Ir||!ar)return-1;let sr=ar;const Yn=[31,31,31,31,31,31,30,30,30,30,30,29];for(let na=0;na<Ir-1;na++)sr+=Yn[na];return sr},Oe=Ee(`${re}/${Z}/${se}`),Je=new Date(q);return Je.setDate(Je.getDate()-9),c.filter(ke=>{if(ke.createdAt){const He=new Date(ke.createdAt);if(!Number.isNaN(He.getTime())&&He>=Je&&He<=q)return!0}if(ke.saleDate&&Oe>0){const He=String(ke.saleDate).split("/");if(He.length<3)return!1;const Ir=parseInt(He[0],10),ar=Ee(ke.saleDate);if(ar<0)return!1;if(Ir===re){const sr=Oe-ar;if(sr>=0&&sr<=9)return!0}}return!1}).reduce((ke,He)=>ke+dt(He.totalAmount),0)},[c]),Hn=(0,a.useMemo)(()=>{const q=new Date,G=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(q),re=`${G.find(Z=>Z.type==="year")?.value||""}/${G.find(Z=>Z.type==="month")?.value||""}`;return c.filter(Z=>{const se=String(Z.saleDate||"");if(!se)return!1;const Ee=se.split("/");if(Ee.length<3)return!1;const Oe=Ee[0],Je=Ee[1],ke=parseInt(Ee[2],10);return`${Oe}/${Je}`!==re?!1:[10,20,30].includes(ke)}).reduce((Z,se)=>Z+dt(se.totalAmount),0)},[c]),as=dt(p.depositAmount),ss=dt(p.guaranteeCheck),Kn=dt(p.totalFinancialCommitment)||as+ss;return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-5",children:[(0,e.jsx)("style",{children:`
          @keyframes cardEnter {
            from {
              opacity: 0;
              transform: translateY(24px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes fileEnter {
            from {
              opacity: 0;
              transform: translateY(18px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}),(0,e.jsx)("section",{className:"overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-l from-slate-950 via-slate-900 to-blue-950 p-4 text-white shadow-[0_12px_30px_rgba(15,23,42,0.34)] md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"order-2 min-w-0 flex-1 sm:order-1",children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2",children:[(0,e.jsx)("span",{className:"h-2.5 w-2.5 rounded-full bg-cyan-400"}),(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-200 md:text-sm",children:"پنل مدیریت نمایندگی"})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-right",children:[(0,e.jsxs)("p",{className:"text-sm font-bold text-slate-200 md:text-base",children:["داشبورد نمایندگی"," ",(0,e.jsx)("span",{className:"text-white",children:da(p)})]}),(0,e.jsx)("span",{className:"hidden h-6 w-px bg-slate-600 sm:block",children:"|"}),(0,e.jsxs)("h2",{className:"text-xl font-black leading-9 text-white md:text-2xl",children:["جناب آقای"," ",(0,e.jsx)("span",{className:"text-cyan-200",children:p.name||"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"order-1 flex gap-2 sm:order-2",children:[(0,e.jsx)("button",{type:"button",onClick:tr,className:"flex min-h-10 items-center gap-2 rounded-xl border border-cyan-300 bg-cyan-400/20 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-400/30",children:"ویرایش"}),(0,e.jsxs)("button",{type:"button",onClick:s,className:"flex min-h-10 items-center gap-2 rounded-xl border border-slate-500 bg-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/20",children:[(0,e.jsx)(xl,{className:"h-4 w-4"}),"بازگشت"]})]})]})}),_?(0,e.jsxs)("section",{className:"rounded-[28px] border border-blue-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-slate-800 dark:text-gray-100",children:"ویرایش اطلاعات نماینده"}),(0,e.jsx)("button",{type:"button",onClick:()=>{ee(!1),ie("")},className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}),(0,e.jsxs)("form",{onSubmit:it,className:"space-y-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"اطلاعات پایه نماینده"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"نام نماینده*"}),(0,e.jsx)("input",{name:"name",value:V.name,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"ایمیل"}),(0,e.jsx)("input",{name:"email",type:"email",value:V.email,onChange:We,placeholder:"example@email.com",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"کد نمایندگی*"}),(0,e.jsx)("input",{name:"code",value:V.code,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"استان*"}),(0,e.jsx)("input",{name:"province",value:V.province,onChange:We,required:!0,placeholder:"مثلاً قزوین",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"شهر*"}),(0,e.jsx)("input",{name:"city",value:V.city,onChange:We,required:!0,placeholder:"مثلاً مهرگان",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تلفن*"}),(0,e.jsx)("input",{name:"phone",value:V.phone,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تاریخ قرارداد شمسی"}),(0,e.jsx)("input",{name:"startDate",value:V.startDate,onChange:We,placeholder:"۱۴۰۳/۰۱/۰۱",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"وضعیت"}),(0,e.jsxs)("select",{name:"status",value:V.status,onChange:We,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"آدرس و توضیحات"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2 md:col-span-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{name:"address",value:V.address,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"توضیحات"}),(0,e.jsx)("textarea",{name:"description",value:V.description,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{name:"shopDescription",value:V.shopDescription,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),oe?(0,e.jsx)("p",{className:"rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:oe}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:te,className:"min-h-11 rounded-xl bg-blue-600 px-6 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:te?"در حال ذخیره...":"ذخیره تغییرات"})})]})]}):null,(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-blue-700"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"اطلاعات پایه و تعهدات مالی"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(Ke,{index:0,title:"کد نمایندگی",children:(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:p.code?Et(p.code):"—"})}),(0,e.jsx)(Ke,{index:1,title:"استان — شهر نمایندگی",children:(0,e.jsx)("p",{title:da(p),className:"truncate text-3xl font-black text-slate-800 dark:text-gray-100",children:da(p)})}),(0,e.jsx)(Ke,{index:2,title:"تاریخ قرارداد شمسی",children:(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)("p",{className:"text-3xl font-black text-slate-800 dark:text-gray-100",children:p.startDate||"—"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-500 dark:text-gray-400",children:"تاریخ شروع همکاری"})]})}),(0,e.jsx)(Ke,{index:3,title:"مبلغ ودیعه",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Qt(as)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:4,title:"مبلغ چک ضمانت",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Qt(ss)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:5,title:"مجموع تعهد مالی",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Qt(Kn)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[28px] border border-blue-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-gray-800 dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("h3",{className:"mb-4 flex items-center gap-2 text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:[(0,e.jsx)(Ct,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آدرس و توضیحات نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800 md:col-span-2",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"آدرس دقیق"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:p.address||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"توضیحات"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:p.description||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"متراژ مغازه"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:p.shopDescription||"ثبت نشده"})]})]})]}),(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-emerald-600"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"عملکرد نمایندگی"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Rt()},disabled:k,className:"flex min-h-9 items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400",children:[(0,e.jsx)(qe,{className:`h-3.5 w-3.5 ${k?"animate-spin":""}`}),"بروزرسانی موجودی"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(Ke,{index:6,title:"تعداد",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Zt,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:Et(p.shipmentsCount??0)})]})}),(0,e.jsx)(Ke,{index:7,title:"تعداد موجود در انبار فروشگاه",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(pt,{className:"h-8 w-8 text-purple-600 dark:text-purple-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:k?"...":Et(Vn)})]})}),(0,e.jsx)(Ke,{index:8,title:"مجموع مبلغ اجناس فروشگاه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(It,{className:"h-8 w-8 text-emerald-600 dark:text-emerald-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:k?"...":Qt(Qn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:9,title:"درخواست‌های مرجوعی",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Va,{className:"h-8 w-8 text-orange-600 dark:text-orange-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:Et(p.returnRequestsCount??0)})]})}),(0,e.jsx)(Ke,{index:10,title:"فروش ۱۰ روز گذشته",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Kr,{className:"h-8 w-8 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:U?"...":Qt(Jn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:11,title:"فروش ۳ روز مجاز ماه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(lt,{className:"h-8 w-8 text-amber-600 dark:text-amber-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:U?"...":Qt(Hn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex flex-col items-start justify-between gap-3 border-b border-blue-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(vl,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"پرونده‌ها و اسناد نماینده"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400 md:text-sm",children:["مشاهده و مدیریت فایل‌های مربوط به"," ",p.name||"نماینده"]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 md:text-sm",children:[Et(fe.length)," پرونده"]}),(0,e.jsxs)("button",{type:"button",onClick:Ln,className:"flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50 md:text-sm",children:[(0,e.jsx)($r,{className:"h-4 w-4"}),"آپلود فایل"]})]})]}),b?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-blue-50 p-6 text-center dark:bg-gray-800",children:[(0,e.jsx)(xe,{className:"mb-4 h-10 w-10 animate-spin text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600 dark:text-gray-300",children:"در حال بارگذاری پرونده‌ها..."})]}):fe.length===0?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(El,{className:"mb-3 h-16 w-16 text-blue-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-300",children:"هنوز پرونده‌ای برای این نماینده ثبت نشده است."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:fe.map((q,G)=>{const re=oi(q),Z=String(q.representativeId??Te),se=`${Ie}/representatives/${encodeURIComponent(Z)}/files/${encodeURIComponent(q.name)}/view`,Ee=`${Ie}/representatives/${encodeURIComponent(Z)}/files/${encodeURIComponent(q.name)}/download`;return(0,e.jsxs)("article",{className:"group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",style:{animation:`fileEnter 450ms ease-out ${G*65}ms both`},children:[re?(0,e.jsx)("button",{type:"button",onClick:()=>{n?.(q)},className:"relative block h-44 w-full overflow-hidden bg-slate-100 dark:bg-gray-700",children:(0,e.jsx)("img",{src:se,alt:q.name,className:"h-full w-full object-cover"})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(q)},className:"flex h-44 w-full flex-col items-center justify-center bg-blue-50 dark:bg-gray-700",children:[(0,e.jsx)(mt,{className:"h-16 w-16 text-blue-400"}),(0,e.jsx)("span",{className:"mt-3 text-xs font-bold text-slate-500 dark:text-gray-300",children:"برای مشاهده کلیک کنید"})]}),(0,e.jsxs)("div",{className:"p-4",children:[(0,e.jsx)("p",{title:q.name,className:"truncate text-sm font-black text-slate-800 dark:text-gray-100",children:q.name}),(0,e.jsxs)("div",{className:"mt-2 flex justify-between text-[11px] text-slate-500 dark:text-gray-400",children:[(0,e.jsx)("span",{children:q.size||"—"}),(0,e.jsx)("span",{children:q.uploadedAt||"—"})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(q)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-blue-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)($t,{className:"h-4 w-4"}),"مشاهده"]}),(0,e.jsxs)("a",{href:Ee,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-emerald-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(fn,{className:"h-4 w-4"}),"دانلود"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Y(Oe=>Oe.filter(Je=>String(Je.name)!==String(q.name))),g?.(q.id)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-red-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف"]})]})]})]},q.id)})})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsx)("div",{className:"mb-5 border-b border-blue-100 pb-4 dark:border-gray-800",children:(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(mt,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"یادداشت‌های ادمین"]})}),(0,e.jsxs)("form",{onSubmit:ze,className:"space-y-3",children:[(0,e.jsx)("label",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متن یادداشت"}),(0,e.jsx)("textarea",{value:B,onChange:q=>{D(q.target.value),z("")},rows:4,maxLength:3e3,disabled:W,placeholder:"یادداشت خود را درباره این نماینده بنویسید...",className:"w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"}),S?(0,e.jsx)("p",{className:"text-xs font-bold text-red-600 dark:text-red-400",children:S}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:W||!B.trim(),className:"min-h-11 rounded-xl bg-blue-600 px-5 py-2 text-sm font-bold text-white disabled:opacity-50",children:W?"در حال ثبت...":"ثبت یادداشت"})})]}),(0,e.jsxs)("div",{className:"mt-6 border-t border-slate-100 pt-5 dark:border-gray-800",children:[(0,e.jsx)("h4",{className:"mb-3 text-sm font-black text-slate-800 dark:text-gray-100",children:"یادداشت‌های ثبت‌شده"}),f?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"در حال دریافت یادداشت‌ها..."}):T.length===0?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"هنوز یادداشتی ثبت نشده است."}):(0,e.jsx)("div",{className:"space-y-3",children:T.map(q=>{const G=String(q.id),re=y===G,Z=L===G;return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-800",children:[re?(0,e.jsx)("textarea",{value:v,onChange:se=>{F(se.target.value)},rows:4,disabled:Z,className:"w-full rounded-xl border border-blue-300 bg-white px-3 py-2 text-sm leading-7 outline-none dark:border-blue-700 dark:bg-gray-900 dark:text-gray-100"}):(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:q.text}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsx)("time",{className:"text-xs text-slate-500 dark:text-gray-400",children:new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(q.createdAt))}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[re?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",onClick:()=>{aa(G)},disabled:Z||!v.trim(),className:"rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"ذخیره ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:Bt,className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}):(0,e.jsx)("button",{type:"button",onClick:()=>{_t(q)},className:"rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white",children:"ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:()=>{Wt(G)},disabled:Z,className:"rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"حذف"})]})]})]},G)})})]})]}),be?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm",onClick:sa,children:(0,e.jsxs)("div",{className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900",onClick:q=>{q.stopPropagation()},children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100",children:[(0,e.jsx)($r,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آپلود فایل برای ",p.name||"نماینده"]}),(0,e.jsx)("button",{type:"button",onClick:sa,disabled:X,className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:ce?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10",children:[(0,e.jsx)(we,{className:"mb-3 h-16 w-16 text-emerald-500"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها با موفقیت آپلود شد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{onDragEnter:Un,onDragLeave:On,onDragOver:_n,onDrop:Bn,className:`flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-colors ${ye?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-blue-200 bg-blue-50/50 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800/50"}`,onClick:()=>{document.getElementById("file-input-upload")?.click()},children:[(0,e.jsx)($r,{className:"mb-3 h-12 w-12 text-blue-500"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها را اینجا رها کنید یا کلیک کنید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400",children:"بدون محدودیت تعداد و حجم - هر تعداد فایل که خواستید می‌توانید آپلود کنید"}),(0,e.jsx)("p",{className:"mt-2 text-[11px] text-slate-400 dark:text-gray-500",children:"انواع مجاز: JPG, PNG, GIF, WEBP, PDF, DOC, DOCX, XLS, XLSX, ZIP, RAR"}),(0,e.jsx)("input",{id:"file-input-upload",type:"file",multiple:!0,className:"hidden",onChange:q=>{rs(q.target.files),q.target.value=""},accept:".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.xls,.xlsx,.zip,.rar"})]}),R.length>0?(0,e.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,e.jsxs)("p",{className:"text-xs font-black text-slate-700 dark:text-gray-200",children:["فایل‌های انتخاب‌شده (",Et(R.length),"):"]}),R.map((q,G)=>(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex min-w-0 flex-1 items-center gap-2",children:[(0,e.jsx)(mt,{className:"h-5 w-5 flex-shrink-0 text-blue-500"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{title:q.name,className:"truncate text-sm font-bold text-slate-700 dark:text-gray-200",children:q.name}),(0,e.jsx)("p",{className:"text-[11px] text-slate-500 dark:text-gray-400",children:ts(q.size)})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{qn(G)},disabled:X,className:"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors hover:bg-red-200 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-400",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]},`${q.name}-${G}`))]}):null,E?(0,e.jsxs)("div",{className:"mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-xs font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:[(0,e.jsx)(Rl,{className:"mt-0.5 h-4 w-4 flex-shrink-0"}),(0,e.jsx)("span",{children:E})]}):null]})}),ce?null:(0,e.jsxs)("div",{className:"flex items-center justify-end gap-2 border-t border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:sa,disabled:X,className:"rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:Wn,disabled:X||R.length===0,className:"flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-50",children:X?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(xe,{className:"h-4 w-4 animate-spin"}),"در حال آپلود..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($r,{className:"h-4 w-4"}),"آپلود ",R.length>0?`(${Et(R.length)} فایل)`:""]})})]})]})}):null]})},Tr="https://myshop-backend-8nu7.onrender.com/api",ci=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),La=t=>{const r=ci(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ft=t=>new Intl.NumberFormat("fa-IR").format(La(t)),ca=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(r)},vs=t=>{const r=String(t||"pending").trim().toLowerCase();return r==="approved"?{label:"تأیید شده",wrapperClass:"border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300",Icon:we}:r==="rejected"?{label:"رد شده",wrapperClass:"border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-500/10 dark:text-red-300",Icon:nt}:r==="received"?{label:"دریافت شده",wrapperClass:"border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-500/10 dark:text-blue-300",Icon:we}:r==="reviewing"?{label:"در حال بررسی",wrapperClass:"border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-500/10 dark:text-violet-300",Icon:vr}:{label:"در انتظار بررسی",wrapperClass:"border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-500/10 dark:text-amber-300",Icon:vr}},xa=(t,r)=>ne.isAxiosError(t)&&(t.response?.data?.error||t.response?.data?.message||t.message)||r,ma=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||localStorage.getItem("accessToken")||localStorage.getItem("authToken")||"",Be=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),xi=()=>{const[t,r]=(0,a.useState)([]),[s,o]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),[g,i]=(0,a.useState)(""),[u,p]=(0,a.useState)(null),[d,N]=(0,a.useState)(null),[j,k]=(0,a.useState)(""),x=(0,a.useCallback)(async()=>{const f=ma();if(!f){n("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید."),o(!1);return}o(!0),n("");try{const A=await ne.get(`${Tr}/admin/return-requests`,{headers:{Authorization:`Bearer ${f}`}}),B=Array.isArray(A.data?.data)?A.data.data:[];r(B)}catch(A){n(xa(A,"خطا در دریافت درخواست‌های مرجوعی."))}finally{o(!1)}},[]);(0,a.useEffect)(()=>{x()},[x]);const h=(0,a.useMemo)(()=>{const f=g.trim().toLocaleLowerCase("fa-IR");return f?t.filter(A=>[A.id,A.title,A.productName,A.representativeName,A.representativeCode,A.returnDate,A.status].some(B=>String(B??"").toLocaleLowerCase("fa-IR").includes(f))):t},[t,g]),w=t.filter(f=>{const A=String(f.status||"").toLowerCase();return A==="pending"||A==="registered"||A==="reviewing"}).length,c=t.filter(f=>{const A=String(f.status||"").toLowerCase();return A==="approved"||A==="received"}).length,$=t.filter(f=>String(f.status||"").toLowerCase()==="rejected").length,U=f=>{r(A=>A.map(B=>String(B.id)===String(f.id)?f:B))},P=async f=>{const A=ma();if(!A){alert("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید.");return}const B=f.productName||f.title||"بدون عنوان";if(window.confirm(`آیا درخواست مرجوعی «${B}» از نماینده «${f.representativeName||"نامشخص"}» تأیید شود؟`)){p(String(f.id));try{const D=await ne.patch(`${Tr}/admin/return-requests/${f.id}/status`,{status:"approved",adminNote:"درخواست مرجوعی توسط ادمین تأیید شد."},{headers:{Authorization:`Bearer ${A}`}});D.data?.data?U(D.data.data):await x(),alert(D.data?.message||"درخواست مرجوعی با موفقیت تأیید شد.")}catch(D){alert(xa(D,"خطا در تأیید درخواست مرجوعی."))}finally{p(null)}}},O=f=>{N(f),k("")},H=()=>{u||(N(null),k(""))},T=f=>{const A=window.open("","_blank","width=900,height=700");if(!A){alert("پنجرهٔ چاپ باز نشد. لطفاً اجازهٔ باز شدن پنجره‌های جدید (Pop-up) را در مرورگر فعال کنید.");return}const B=f,D=La(f.unitPrice??f.price??0),W=La(f.quantity||1),K=D*W,S=vs(f.status).label,z=f.productName||f.title||"—",y=B.productBrand||f.brand||"—",m=B.productCategory||f.category||"—",v=B.adminNote||"";A.document.open(),A.document.write(`
      <!doctype html>
      <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>
            برگه مرجوعی - ${Be(f.id)}
          </title>

          <style>
            @page {
              size: A4;
              margin: 14mm;
            }

            * {
              box-sizing: border-box;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background: #ffffff;
              color: #111827;
              font-family: Tahoma, Arial, sans-serif;
              direction: rtl;
            }

            body {
              padding: 8px;
            }

            .sheet {
              width: 100%;
              max-width: 180mm;
              margin: 0 auto;
            }

            .header {
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              gap: 24px;
              border-bottom: 2px solid #111827;
              padding-bottom: 16px;
              margin-bottom: 20px;
            }

            .title {
              margin: 0;
              font-size: 23px;
              font-weight: 900;
            }

            .subtitle {
              margin-top: 7px;
              color: #4b5563;
              font-size: 12px;
              line-height: 1.9;
            }

            .header-details {
              text-align: left;
              color: #374151;
              font-size: 12px;
              line-height: 2;
            }

            .status {
              display: inline-block;
              border: 1px solid #6b7280;
              border-radius: 999px;
              padding: 1px 10px;
              font-size: 11px;
              font-weight: 700;
            }

            .section {
              border: 1px solid #d1d5db;
              border-radius: 10px;
              padding: 15px;
              margin-bottom: 16px;
              page-break-inside: avoid;
            }

            .section-title {
              margin: 0 0 12px;
              font-size: 16px;
              font-weight: 900;
            }

            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px 26px;
              font-size: 13px;
              line-height: 2;
            }

            .full {
              grid-column: 1 / -1;
            }

            .label {
              font-weight: 700;
            }

            .reason {
              white-space: pre-wrap;
              font-size: 13px;
              line-height: 2;
            }

            .footer {
              border-top: 1px solid #d1d5db;
              margin-top: 26px;
              padding-top: 12px;
              text-align: center;
              color: #6b7280;
              font-size: 11px;
              line-height: 2;
            }

            @media print {
              html,
              body {
                width: 100%;
                height: auto;
              }

              body {
                padding: 0;
              }

              .sheet {
                max-width: none;
              }
            }
          </style>
        </head>

        <body>
          <main class="sheet">
            <header class="header">
              <div>
                <h1 class="title">برگه درخواست مرجوعی</h1>

                <div class="subtitle">
                  شماره درخواست:
                  ${Be(f.id||"—")}
                </div>
              </div>

              <div class="header-details">
                <div>
                  تاریخ ثبت:
                  ${Be(ca(f.createdAt))}
                </div>

                <div>
                  وضعیت:
                  <span class="status">
                    ${Be(S)}
                  </span>
                </div>
              </div>
            </header>

            <section class="section">
              <h2 class="section-title">اطلاعات نماینده</h2>

              <div class="grid">
                <div>
                  <span class="label">نام نماینده:</span>
                  ${Be(f.representativeName||"—")}
                </div>

                <div>
                  <span class="label">کد نمایندگی:</span>
                  ${Be(f.representativeCode||"—")}
                </div>

                <div class="full">
                  <span class="label">شهر:</span>
                  ${Be(f.representativeCity||"—")}
                </div>
              </div>
            </section>

            <section class="section">
              <h2 class="section-title">
                اطلاعات کالای مرجوعی
              </h2>

              <div class="grid">
                <div class="full">
                  <span class="label">عنوان کالا:</span>
                  ${Be(z)}
                </div>

                <div>
                  <span class="label">برند:</span>
                  ${Be(y)}
                </div>

                <div>
                  <span class="label">دسته‌بندی:</span>
                  ${Be(m)}
                </div>

                <div>
                  <span class="label">تعداد مرجوعی:</span>
                  ${ft(W)} قلم
                </div>

                <div>
                  
                  ${ft(D)} تومان
                </div>

                <div>
                  <span class="label">جمع کل:</span>
                  ${ft(K)} تومان
                </div>

                <div>
                  <span class="label">تاریخ مرجوعی:</span>
                  ${Be(f.returnDate||"—")}
                </div>
              </div>
            </section>

            ${f.reason?`
                  <section class="section">
                    <h2 class="section-title">دلیل مرجوعی</h2>

                    <div class="reason">
                      ${Be(f.reason)}
                    </div>
                  </section>
                `:""}

            ${v?`
                  <section class="section">
                    <h2 class="section-title">توضیح ادمین</h2>

                    <div class="reason">
                      ${Be(v)}
                    </div>
                  </section>
                `:""}

            <footer class="footer">
              <div>
                این برگه به‌صورت خودکار توسط سامانه تولید شده است.
              </div>

              <div>
                تاریخ چاپ:
                ${Be(ca(new Date().toISOString()))}
              </div>
            </footer>
          </main>
        </body>
      </html>
    `),A.document.close(),A.onload=()=>{A.focus(),window.setTimeout(()=>{A.print()},300)}},I=async()=>{const f=ma();if(!d||!f)return;const A=j.trim();if(!A){alert("لطفاً دلیل رد درخواست را وارد کنید.");return}p(String(d.id));try{const B=await ne.patch(`${Tr}/admin/return-requests/${d.id}/status`,{status:"rejected",adminNote:A},{headers:{Authorization:`Bearer ${f}`}});B.data?.data?U(B.data.data):await x(),N(null),k(""),alert(B.data?.message||"درخواست مرجوعی رد شد.")}catch(B){alert(xa(B,"خطا در رد درخواست مرجوعی."))}finally{p(null)}};return s?(0,e.jsx)("div",{dir:"rtl",className:"flex min-h-[400px] items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(xe,{className:"mx-auto h-11 w-11 animate-spin text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت درخواست‌های مرجوعی..."})]})}):b?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm dark:border-red-900/50 dark:bg-red-900/20",children:[(0,e.jsx)(Le,{className:"mx-auto h-12 w-12 text-red-600 dark:text-red-400"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-red-700 dark:text-red-300",children:"خطا در دریافت اطلاعات"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600 dark:text-red-400",children:b}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200/70 bg-white/60 p-3 text-right text-xs leading-6 text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-300",children:["آدرس مورد انتظار API:",(0,e.jsxs)("span",{dir:"ltr",className:"mr-1 font-bold",children:[Tr,"/admin/return-requests"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{x()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("div",{dir:"rtl",children:[(0,e.jsxs)("section",{className:"mb-6 grid grid-cols-1 gap-4 md:grid-cols-3",children:[(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-amber-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-amber-100/70 blur-2xl dark:bg-amber-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-amber-600 dark:text-amber-400",children:ft(w)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-500 dark:text-amber-300",children:"درخواست نیازمند تصمیم ادمین"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm dark:bg-amber-500/15 dark:text-amber-400",children:(0,e.jsx)(vr,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-emerald-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-emerald-100/70 blur-2xl dark:bg-emerald-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-emerald-600 dark:text-emerald-400",children:ft(c)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-emerald-500 dark:text-emerald-300",children:"درخواست‌های پذیرفته‌شده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-400",children:(0,e.jsx)(we,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-red-100/70 blur-2xl dark:bg-red-900/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-red-600 dark:text-red-400",children:ft($)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-red-500 dark:text-red-300",children:"درخواست‌های ردشده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700 shadow-sm dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(nt,{className:"h-6 w-6"})})]})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-cyan-50/70 via-white to-purple-50/70 p-5 dark:border-gray-700 dark:from-cyan-950/20 dark:via-gray-900 dark:to-purple-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(Ge,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"بررسی، تأیید یا رد درخواست‌های ثبت‌شده توسط نمایندگان"})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{x()},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-black text-gray-700 shadow-sm transition-all hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"بروزرسانی"]})]}),(0,e.jsxs)("label",{className:"relative mt-5 block",children:[(0,e.jsx)(ht,{className:"absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{value:g,onChange:f=>{i(f.target.value)},placeholder:"جست‌وجو بر اساس نام نماینده، کد، عنوان، وضعیت یا تاریخ...",className:"w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-12 pl-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"})]})]}),h.length===0?(0,e.jsxs)("div",{className:"p-12 text-center",children:[(0,e.jsx)("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500",children:(0,e.jsx)(Ge,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"درخواستی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"اگر درخواست مرجوعی ثبت شده است، دکمه بروزرسانی را بزنید."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:p-5",children:h.map(f=>{const A=String(f.id),B=u===A,D=String(f.status||"pending").toLowerCase(),W=D==="pending"||D==="registered"||D==="reviewing",K=vs(f.status),S=K.Icon,z=f.adminNote||"",y=f.unitPrice||f.price||0;return(0,e.jsxs)("article",{className:"group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-700",children:[(0,e.jsx)("div",{className:"absolute right-0 top-0 h-1 w-full bg-gradient-to-l from-cyan-500 via-blue-500 to-purple-500 opacity-70"}),(0,e.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-purple-500/20",children:(0,e.jsx)(At,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:f.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["کد نمایندگی:"," ",f.representativeCode||"—"]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 flex-col items-end gap-2",children:[(0,e.jsxs)("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-black ${K.wrapperClass}`,children:[(0,e.jsx)(S,{className:"h-3.5 w-3.5"}),K.label]}),(0,e.jsxs)("p",{className:"text-[11px] font-bold text-gray-400 dark:text-gray-500",children:["ثبت: ",ca(f.createdAt)]})]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-900/60",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(Hr,{className:"h-4 w-4 text-cyan-600 dark:text-cyan-400"}),"عنوان کالای مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-base font-black text-gray-800 dark:text-white",children:f.productName||f.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5 dark:border-emerald-900/40 dark:bg-emerald-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300",children:[(0,e.jsx)(vn,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-emerald-700 dark:text-emerald-400",children:[ft(y)," تومان"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 dark:border-blue-900/40 dark:bg-blue-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300",children:[(0,e.jsx)(Hr,{className:"h-4 w-4"}),"تعداد"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-blue-700 dark:text-blue-400",children:[ft(f.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-purple-100 bg-purple-50/70 p-3.5 dark:border-purple-900/40 dark:bg-purple-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300",children:[(0,e.jsx)(lt,{className:"h-4 w-4"}),"تاریخ مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-lg font-black text-purple-700 dark:text-purple-400",children:f.returnDate||"—"})]})]}),z?(0,e.jsxs)("div",{className:"rounded-xl border border-violet-100 bg-violet-50/70 p-4 dark:border-violet-900/40 dark:bg-violet-950/20",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-violet-700 dark:text-violet-300",children:[(0,e.jsx)(mt,{className:"h-4 w-4"}),"توضیح ادمین"]}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-violet-900 dark:text-violet-200",children:z})]}):null,(0,e.jsx)("div",{className:"border-t border-gray-100 pt-4 dark:border-gray-700",children:W?(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{P(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-600 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-60",children:[B?(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Fa,{className:"h-5 w-5"}),"تأیید درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{O(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20 transition-all hover:from-red-600 hover:to-rose-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(Ae,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{T(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(mt,{className:"h-5 w-5"}),"چاپ / پرینت"]})]}):(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-black ${K.wrapperClass}`,children:[(0,e.jsx)(S,{className:"h-5 w-5"}),"وضعیت: ",K.label]}),(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{T(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(mt,{className:"h-5 w-5"}),"چاپ / پرینت"]})]})})]})]},A)})})]}),d?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",children:(0,e.jsxs)("div",{dir:"rtl",className:"w-full max-w-lg rounded-3xl border border-white/30 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(nt,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"رد درخواست مرجوعی"}),(0,e.jsxs)("p",{className:"mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400",children:["دلیل رد درخواست «",d.productName||d.title||"بدون عنوان","» را وارد کنید. این توضیح برای نماینده نمایش داده می‌شود."]})]})]}),(0,e.jsx)("button",{type:"button",onClick:H,disabled:!!u,className:"rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600 disabled:opacity-50 dark:hover:bg-gray-800",title:"بستن",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsx)("textarea",{value:j,onChange:f=>{k(f.target.value)},rows:5,placeholder:"مثال: لطفاً کالا را همراه فاکتور و تصاویر خسارت ارسال کنید.",className:"mt-5 w-full resize-none rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-7 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsx)("button",{type:"button",disabled:u===String(d.id),onClick:()=>{I()},className:"min-h-11 rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60",children:u===String(d.id)?"در حال ثبت...":"ثبت رد درخواست"}),(0,e.jsx)("button",{type:"button",disabled:!!u,onClick:H,className:"min-h-11 rounded-xl bg-gray-100 px-4 py-3 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"})]})]})}):null]})},mi={companyName:"نام شرکت شما",companySubtitle:"سامانه مدیریت فروش و انبار",reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش بر اساس اطلاعات ثبت‌شده توسط نمایندگان در سامانه فروش و انبار تهیه شده است.",companyAddress:"آدرس شرکت، شهر، استان",companyPhone:"۰۲۸-۳۳۲۳۶۰۷۲",companyWebsite:"www.example.com",reportNumber:"",preparedBy:"",salesManager:"",notes:"این گزارش بر اساس اطلاعات ثبت‌شده در سامانه تهیه شده است. لطفاً پیش از امضا، تعداد کالاها، مبلغ کل فروش و جزئیات نمایندگان را بررسی کنید."},pi=["admin_access_token","adminAccessToken","admin_token","adminToken","accessToken","authToken","token"],$n=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),st=t=>{const r=$n(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},de=t=>new Intl.NumberFormat("fa-IR").format(st(t)),Ce=t=>`${de(t)} تومان`,hi=()=>{if(typeof window>"u")return"";for(const t of pi){const r=window.localStorage.getItem(t);if(r?.trim())return r.trim();const s=window.sessionStorage.getItem(t);if(s?.trim())return s.trim()}return""},gi=async t=>{try{const r=await t.json();return typeof r=="string"?r:r?.error||r?.message||r?.detail||"دریافت اعلام فروش‌ها با خطا مواجه شد."}catch{return t.status===401?"نشست ادمین نامعتبر یا منقضی شده است. لطفاً دوباره وارد حساب ادمین شوید.":t.status===403?"شما دسترسی لازم برای مشاهده اعلام فروش‌ها را ندارید.":"دریافت اعلام فروش‌ها با خطا مواجه شد."}},Pt=(t,r)=>{if(t)return t;if(!r)return"—";const s=new Date(r);return Number.isNaN(s.getTime())?"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(s)},ks=()=>new Date().toLocaleDateString("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}),Ns=()=>new Date().toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Rr=t=>{const r=t.createdAt||t.saleDate;if(!r)return null;const s=new Date(r);return Number.isNaN(s.getTime())?null:s},lr=t=>t.productName||t.title||t.name||"کالای بدون نام",Ft=t=>st(t.unitPrice??t.price),ws=t=>{const r=st(t.totalPrice??t.totalAmount);return r>0?r:st(t.quantity)*Ft(t)},ui=t=>String(t.brand||t.brandName||"").trim(),bi=t=>String(t.category||t.categoryName||"").trim(),pa=typeof window<"u"?"https://myshop-backend-8nu7.onrender.com/api":"http://localhost:5000/api",yi=pa.endsWith("/api")?pa.slice(0,-4):pa,fi=({token:t})=>{const[r,s]=(0,a.useState)([]),[o,b]=(0,a.useState)(!0),[n,g]=(0,a.useState)(""),[i,u]=(0,a.useState)(null),[p,d]=(0,a.useState)(!1),[N,j]=(0,a.useState)("all"),[k,x]=(0,a.useState)(null),[h,w]=(0,a.useState)(mi),c=(0,a.useCallback)(async()=>{try{b(!0),g("");const y=t?.trim()||hi();if(!y)throw new Error("توکن ورود ادمین پیدا نشد. لطفاً یک‌بار خارج و دوباره وارد حساب ادمین شوید.");const m=await fetch(`${yi}/api/sales-from-warehouse/admin/all`,{method:"GET",headers:{Authorization:`Bearer ${y}`,Accept:"application/json"}});if(!m.ok){const L=await gi(m);throw m.status===401&&s([]),new Error(L)}const v=await m.json();if(!v?.success)throw new Error(v?.error||v?.message||"دریافت اعلام فروش‌ها با خطا مواجه شد.");const F=Array.isArray(v?.data)?v.data:[];s(F)}catch(y){console.error("خطا در دریافت اعلام فروش‌ها:",y),s([]),g(y instanceof Error?y.message:"خطا در دریافت اعلام فروش‌ها از سرور.")}finally{b(!1)}},[t]);(0,a.useEffect)(()=>{c()},[c]),(0,a.useEffect)(()=>{const y=m=>{if(m.key==="Escape"){if(p){d(!1),x(null);return}i&&u(null)}};return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[i,p]);const $=(0,a.useMemo)(()=>r.length,[r]);(0,a.useMemo)(()=>r.reduce((y,m)=>y+st(m.totalItems),0),[r]);const U=(0,a.useMemo)(()=>r.reduce((y,m)=>y+st(m.totalAmount),0),[r]),P=(0,a.useMemo)(()=>{const y=r.map(m=>String(m.representativeId||m.representativeCode||m.representativeName||"")).filter(Boolean);return new Set(y).size},[r]),O=(0,a.useMemo)(()=>{const y=new Date,m=new Date(y);return m.setHours(0,0,0,0),m.setDate(m.getDate()-9),r.filter(v=>{const F=Rr(v);return F?F>=m&&F<=y:!1}).reduce((v,F)=>v+st(F.totalAmount),0)},[r]),H=(0,a.useMemo)(()=>{const y=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(m=>{const v=Rr(m);return v?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(v)===y:!1}).reduce((m,v)=>m+st(v.totalAmount),0)},[r]);(0,a.useMemo)(()=>{const y=new Date,m=new Date(y);return m.setHours(0,0,0,0),m.setDate(m.getDate()-9),r.filter(v=>{const F=Rr(v);return F?F>=m&&F<=y:!1}).length},[r]),(0,a.useMemo)(()=>{const y=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(m=>{const v=Rr(m);return v?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(v)===y:!1}).length},[r]);const T=(0,a.useMemo)(()=>!i||!Array.isArray(i.items)?[]:i.items,[i]),I=(0,a.useMemo)(()=>N==="single"&&k?[k]:r,[N,k,r]),f=(0,a.useMemo)(()=>I.reduce((y,m)=>y+st(m.totalItems),0),[I]),A=(0,a.useMemo)(()=>I.reduce((y,m)=>y+st(m.totalAmount),0),[I]),B=(y,m)=>{const v=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/\//g,""),F=y==="single"&&m?.id?String(m.id).slice(-6):String(r.length).padStart(4,"0");return`ADM-${$n(v)}-${F}`},D=(y,m)=>{w(v=>({...v,[y]:m}))},W=()=>{if(r.length===0){g("هیچ اعلام فروشی برای چاپ وجود ندارد.");return}j("all"),x(null),w(y=>({...y,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:B("all")})),d(!0)},K=y=>{const m=window.open("","_blank","width=900,height=700");if(!m){alert("لطفاً popup blocker را غیرفعال کنید");return}const v=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),F=Array.isArray(y.items)?y.items:[],L=F.map((C,_)=>`
      <tr>
        <td style="text-align:center;">${_+1}</td>
        <td>${C.productName||"—"}</td>
        <td style="text-align:center;">${C.brand||"—"}</td>
        <td style="text-align:center;">${C.category||C.categoryName||"—"}</td>
        <td style="text-align:center;">${de(C.unitPrice)} تومان</td>
        <td style="text-align:center;">${de(C.quantity)||"—"}</td>
        <td style="text-align:center;">${de(C.totalPrice??Number(C.quantity||0)*Number(C.unitPrice||0))} تومان</td>
      </tr>
    `).join("");m.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ گزارش فروش - ${y.representativeName||""}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 60px; max-width: 200px; }
.company-info h1 { font-size: 18px; margin: 0; }
.company-info p { font-size: 12px; color: #666; margin: 2px 0; }
.report-title { text-align: center; margin: 20px 0; }
.report-title h2 { font-size: 22px; margin: 0; }
.report-title p { font-size: 12px; color: #666; margin-top: 5px; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
.info-card { border: 1px solid #ddd; border-radius: 8px; padding: 12px 15px; }
.info-card .label { font-size: 11px; color: #666; margin-bottom: 3px; }
.info-card .value { font-size: 14px; font-weight: bold; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ddd; padding: 8px 10px; font-size: 12px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; }
tr:nth-child(even) td { background: #f9fafb; }
tfoot td { background: #ecfdf5 !important; font-weight: bold; }
.summary { display: flex; gap: 20px; margin-top: 20px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px 25px; text-align: center; min-width: 150px; }
.summary-card .label { font-size: 11px; color: #666; }
.summary-card .value { font-size: 20px; font-weight: bold; margin-top: 5px; }
.footer { margin-top: 40px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } .print-summary-section { break-inside: avoid; page-break-inside: avoid; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>بازرگانی مهر امین</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: 028-33236072</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${v}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش اعلام فروش</h2>
  <p>گزارش تک‌گزارش فروش نمایندگی ${y.representativeName||""}</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام نمایندگی</div>
    <div class="value">${y.representativeName||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">کد نمایندگی</div>
    <div class="value">${y.representativeCode||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">شهر</div>
    <div class="value">${y.representativeCity||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">تاریخ ثبت</div>
    <div class="value">${y.saleDate||Pt(y.createdAt)||"—"}</div>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th style="width: 5%;">ردیف</th>
      <th style="width: 25%;">عنوان</th>
      <th style="width: 12%;">برند</th>
      <th style="width: 13%;">دسته‌بندی</th>
      <th style="width: 15%;">قیمت</th>
      <th style="width: 10%;">تعداد</th>
      <th style="width: 20%;">مجموع</th>
    </tr>
  </thead>
  <tbody>
    ${L}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="3" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${de(y.totalItems??F.length)}</strong></td>
        <td></td>
        <td style="text-align:center;"><strong>${Ce(y.totalAmount)}</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد اقلام</div>
      <div class="value">${de(y.totalItems??F.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع فروش</div>
      <div class="value">${de(y.totalAmount)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>بازرگانی مهر امین - 1405</p>
  </div>
</div>

</body>
</html>`),m.document.close(),m.focus(),setTimeout(()=>{m.print()},1e3)},S=()=>{d(!1),x(null)},z=()=>{const y=window.open("","_blank","width=900,height=700");if(!y){alert("لطفاً popup blocker را غیرفعال کنید");return}const m=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),v=r.map((C,_)=>{const ee=(Array.isArray(C.items)?C.items:[]).map(V=>`
        <tr>
          <td style="text-align:center;">${_+1}</td>
          <td>${V.productName||"—"}</td>
          <td style="text-align:center;">${V.brand||"—"}</td>
          <td style="text-align:center;">${V.category||V.categoryName||"—"}</td>
          <td style="text-align:center;">${de(V.unitPrice)} تومان</td>
          <td style="text-align:center;">${de(V.quantity)||"—"}</td>
          <td style="text-align:center;">${de(V.totalPrice??Number(V.quantity||0)*Number(V.unitPrice||0))} تومان</td>
        </tr>
      `).join("");return`
        <div class="report-card">
          <div class="report-card-header">
            <h3>گزارش فروش ${_+1} - ${C.representativeName||"—"}</h3>
            <p>کد نمایندگی: ${C.representativeCode||"—"} | شهر: ${C.representativeCity||"—"}</p>
            <p>تاریخ: ${C.saleDate||Pt(C.createdAt)||"—"}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 5%;">ردیف</th>
                <th style="width: 30%;">عنوان</th>
                <th style="width: 15%;">برند</th>
                <th style="width: 15%;">دسته‌بندی</th>
                <th style="width: 12%;">قیمت</th>
                <th style="width: 10%;">تعداد</th>
                <th style="width: 13%;">مجموع</th>
              </tr>
            </thead>
            <tbody>
              ${ee}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" style="text-align:left;"><strong>جمع کل:</strong></td>
                <td colspan="2" style="text-align:center;"><strong>${Ce(C.totalAmount)} تومان</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
      `}).join(""),F=r.reduce((C,_)=>C+(Number(_.totalAmount)||0),0),L=r.reduce((C,_)=>C+(Number(_.totalItems)||_.items?.length||0),0);y.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ گزارش اعلام فروش</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 60px; max-width: 200px; }
.company-info h1 { font-size: 18px; margin: 0; }
.company-info p { font-size: 12px; color: #666; margin: 2px 0; }
.report-title { text-align: center; margin: 20px 0; }
.report-title h2 { font-size: 22px; margin: 0; }
.report-title p { font-size: 12px; color: #666; margin-top: 5px; }
.report-card { margin-bottom: 30px; border: 2px solid #e5e7eb; border-radius: 10px; overflow: hidden; page-break-inside: avoid; }
.report-card-header { background: #f0fdfa; padding: 15px; border-bottom: 2px solid #0f766e; }
.report-card-header h3 { font-size: 16px; margin: 0 0 5px 0; color: #0f766e; }
.report-card-header p { font-size: 12px; color: #666; margin: 2px 0; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ddd; padding: 8px 10px; font-size: 12px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; }
tr:nth-child(even) td { background: #f9fafb; }
tfoot td { background: #ecfdf5 !important; font-weight: bold; }
.summary { display: flex; gap: 20px; margin-top: 20px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px 25px; text-align: center; min-width: 150px; }
.summary-card .label { font-size: 11px; color: #666; }
.summary-card .value { font-size: 20px; font-weight: bold; margin-top: 5px; }
.footer { margin-top: 40px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } .print-summary-section { break-inside: avoid; page-break-inside: avoid; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>بازرگانی مهر امین</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: 028-33236072</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${m}</p>
    <p><strong>تعداد گزارش‌ها:</strong> ${r.length}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش جامع اعلام فروش نمایندگان</h2>
  <p>گزارش کامل اعلام فروش‌های ثبت‌شده توسط نمایندگان</p>
</div>

${v}

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد گزارش‌ها</div>
    <div class="value">${r.length}</div>
  </div>
  <div class="summary-card">
    <div class="label">تعداد کل اقلام</div>
    <div class="value">${L}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع کل فروش</div>
    <div class="value">${de(F)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>بازرگانی مهر امین - 1405</p>
</div>

</body>
</html>`),y.document.close(),y.focus(),setTimeout(()=>{y.print()},1e3)};return o?(0,e.jsx)("section",{className:"flex min-h-[360px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(xe,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اعلام فروش‌های نمایندگان..."})]})}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6",children:[(0,e.jsx)("style",{children:`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }

          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            direction: rtl !important;
            font-family: Tahoma, Arial, sans-serif !important;
          }

          body * {
            visibility: hidden !important;
          }

          .admin-print-only,
          .admin-print-only * {
            visibility: visible !important;
          }

          .admin-print-only {
            display: block !important;
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            left: 0 !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            color: #111827 !important;
            background: #ffffff !important;
          }

          .no-print {
            display: none !important;
          }

          .admin-invoice-page {
            width: 100% !important;
            min-height: 270mm !important;
            position: relative !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }

          .admin-invoice-header {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 12px !important;
            padding: 12px 14px !important;
            border: 2px solid #0f766e !important;
            border-radius: 10px !important;
            background: #ecfdf5 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admin-company-name {
            margin: 0 !important;
            color: #115e59 !important;
            font-size: 20px !important;
            font-weight: 900 !important;
          }

          .admin-company-subtitle {
            margin: 6px 0 0 !important;
            color: #374151 !important;
            font-size: 11px !important;
          }

          .admin-company-logo {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 54px !important;
            height: 54px !important;
            flex-shrink: 0 !important;
            border: 2px solid #0f766e !important;
            border-radius: 50% !important;
            color: #115e59 !important;
            font-size: 18px !important;
            font-weight: 900 !important;
            background: #ffffff !important;
          }

          .admin-invoice-title-box {
            margin-top: 12px !important;
            padding: 10px 12px !important;
            text-align: center !important;
            border: 1px solid #9ca3af !important;
            border-radius: 8px !important;
          }

          .admin-invoice-title {
            margin: 0 !important;
            color: #111827 !important;
            font-size: 18px !important;
            font-weight: 900 !important;
          }

          .admin-invoice-description {
            margin: 5px 0 0 !important;
            color: #4b5563 !important;
            font-size: 10px !important;
          }

          .admin-invoice-info-grid {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 8px !important;
            margin-top: 12px !important;
          }

          .admin-invoice-info-card {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 8px !important;
            padding: 8px 10px !important;
            border: 1px solid #d1d5db !important;
            border-radius: 6px !important;
            background: #f9fafb !important;
            font-size: 10px !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admin-invoice-label {
            color: #4b5563 !important;
            font-weight: 700 !important;
          }

          .admin-invoice-value {
            color: #111827 !important;
            font-weight: 900 !important;
          }

          .admin-invoice-table {
            width: 100% !important;
            margin-top: 14px !important;
            border-collapse: collapse !important;
            direction: rtl !important;
            color: #111827 !important;
            font-size: 9px !important;
          }

          .admin-invoice-table th,
          .admin-invoice-table td {
            border: 1px solid #6b7280 !important;
            padding: 7px 5px !important;
            text-align: right !important;
            vertical-align: middle !important;
            line-height: 1.8 !important;
            word-break: break-word !important;
          }

          .admin-invoice-table th {
            background: #115e59 !important;
            color: #ffffff !important;
            font-weight: 900 !important;
            text-align: center !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admin-invoice-table tbody tr:nth-child(even) td {
            background: #f9fafb !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admin-invoice-table tfoot td {
            background: #ecfdf5 !important;
            color: #064e3b !important;
            font-weight: 900 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admin-details-line {
            margin: 0 !important;
            padding: 0 !important;
            line-height: 1.8 !important;
          }

          .admin-invoice-summary {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 8px !important;
            margin-top: 14px !important;
          }

          .admin-summary-card {
            padding: 10px !important;
            border: 1px solid #d1d5db !important;
            border-radius: 7px !important;
            background: #f9fafb !important;
            text-align: center !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admin-summary-label {
            margin: 0 !important;
            color: #4b5563 !important;
            font-size: 10px !important;
            font-weight: 700 !important;
          }

          .admin-summary-value {
            margin: 5px 0 0 !important;
            color: #111827 !important;
            font-size: 13px !important;
            font-weight: 900 !important;
          }

          .admin-invoice-notes {
            margin-top: 14px !important;
            padding: 10px 12px !important;
            border: 1px solid #d1d5db !important;
            border-radius: 7px !important;
            background: #fffbeb !important;
            color: #374151 !important;
            font-size: 10px !important;
            line-height: 1.9 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admin-notes-title {
            margin: 0 0 5px !important;
            color: #92400e !important;
            font-weight: 900 !important;
          }

          .admin-signatures {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 16px !important;
            margin-top: 28px !important;
            text-align: center !important;
            font-size: 10px !important;
          }

          .admin-signature-box {
            min-height: 75px !important;
            padding-top: 8px !important;
            border-top: 1px solid #111827 !important;
            color: #111827 !important;
          }

          .admin-invoice-footer {
            margin-top: 18px !important;
            padding-top: 9px !important;
            border-top: 1px solid #9ca3af !important;
            color: #4b5563 !important;
            text-align: center !important;
            font-size: 9px !important;
            line-height: 1.8 !important;
          }

          .admin-print-row {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}),(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-cyan-900/50 dark:from-cyan-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-cyan-900 dark:text-cyan-100",children:de($)}),(0,e.jsxs)("p",{className:"mt-1 truncate text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["از ",de(P)," نمایندگی"]})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(Ge,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-cyan-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-violet-900/50 dark:from-violet-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300",children:"مبلغ فروش ۱۰ روز گذشته"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-violet-900 dark:text-violet-100",children:Ce(O)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-violet-600 dark:text-violet-400",children:"فروش نمایندگان در ۱۰ روز اخیر"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(lt,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-violet-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/50 dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300",children:"مبلغ فروش ماهانه نمایندگان"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-blue-900 dark:text-blue-100",children:Ce(H)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-blue-600 dark:text-blue-400",children:"فروش نمایندگان در ماه جاری"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(Kr,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-blue-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300",children:"مجموع مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-900 dark:text-emerald-100",children:Ce(U)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-emerald-600 dark:text-emerald-400",children:"مجموع اعلام فروش‌های ثبت‌شده"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(Kr,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-emerald-400/10"})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 border-b border-gray-100 p-5 dark:border-gray-700 md:flex-row md:items-center md:justify-between md:p-6",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"لیست اعلام فروش نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات مستقیماً از سرور دریافت می‌شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:W,disabled:r.length===0,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2.5 text-xs font-black text-cyan-700 transition-colors hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300 dark:hover:bg-cyan-950/50",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش‌ها"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{c()},disabled:o,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(qe,{className:`h-4 w-4 ${o?"animate-spin":""}`}),"بروزرسانی از سرور"]})]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Ge,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز هیچ اعلام فروشی ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"بعد از ثبت فروش در پنل نماینده، گزارش آن در همین بخش برای ادمین نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-4 p-4 md:hidden",children:r.map(y=>{const m=Array.isArray(y.items)?y.items:[];return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نمایندگی"}),(0,e.jsx)("h3",{className:"mt-1 truncate font-black text-gray-800 dark:text-white",children:y.representativeName||"نمایندگی بدون نام"}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:["کد: ",y.representativeCode||"—"]}),(0,e.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(Ct,{className:"h-3.5 w-3.5 text-rose-500"}),y.representativeCity||"شهر ثبت نشده"]})]})]}),(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(At,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("div",{className:"space-y-3 p-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-gray-800 dark:text-white",children:Pt(y.saleDate,y.createdAt)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[de(y.totalItems)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-emerald-800 dark:text-emerald-200",children:Ce(y.totalAmount)})]}),m.length>0?(0,e.jsxs)("div",{className:"rounded-xl border border-gray-100 p-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-black text-gray-700 dark:text-gray-200",children:"خلاصه کالاها"}),(0,e.jsxs)("div",{className:"space-y-1.5",children:[m.slice(0,2).map((v,F)=>(0,e.jsxs)("p",{className:"text-xs leading-6 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:lr(v)})," — ",de(v.quantity)," قلم"]},`${y.id}-${v.productId||F}`)),m.length>2?(0,e.jsxs)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:["و ",de(m.length-2)," کالای دیگر..."]}):null]})]}):null,(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)($t,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{K(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-black text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]})]})]},y.id)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[900px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-ellipsis text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"کد نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"نام نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"شهر"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مجموع اقلام"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 text-center py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.map(y=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-500 dark:text-gray-400",children:Pt(y.saleDate,y.createdAt)}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-cyan-50 px-3 py-1.5 font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:y.representativeCode||"—"})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(At,{className:"h-4 w-4 text-gray-400 dark:text-gray-500"}),y.representativeName||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)(Ct,{className:"h-4 w-4 text-rose-500"}),y.representativeCity||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"font-black text-amber-700 dark:text-amber-300",children:[de(y.totalItems)," قلم"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"font-black text-emerald-700 dark:text-emerald-300",children:Ce(y.totalAmount)})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(y)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3.5 py-2 text-xs font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)($t,{className:"h-4 w-4"}),"مشاهده جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{K(y)},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-black text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]})})]},y.id))})]})})]})]}),i?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",onMouseDown:()=>{u(null)},children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"جزئیات اعلام فروش",className:"max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-gray-900",onMouseDown:y=>{y.stopPropagation()},children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(yn,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"جزئیات اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات فروش ثبت‌شده توسط نمایندگی"})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پنجره جزئیات",title:"بستن",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-6 p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900/50 dark:bg-cyan-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:"نام نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-cyan-900 dark:text-cyan-100",children:i.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["کد: ",i.representativeCode||"—"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-violet-100 bg-violet-50 p-4 dark:border-violet-900/50 dark:bg-violet-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-violet-700 dark:text-violet-300",children:"شهر نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-violet-900 dark:text-violet-100",children:i.representativeCity||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-900 dark:text-emerald-100",children:Ce(i.totalAmount)}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400",children:[de(i.totalItems)," قلم"]})]})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:Pt(i.saleDate,i.createdAt)})]}),(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-gray-600 shadow-sm dark:bg-gray-900 dark:text-gray-300",children:[(0,e.jsx)(Ge,{className:"h-4 w-4 text-cyan-500"}),"شناسه گزارش: ",i.id]})]})}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-5 py-4 dark:border-gray-700 dark:bg-gray-800/70",children:[(0,e.jsx)(fr,{className:"h-5 w-5 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("h4",{className:"font-black text-gray-800 dark:text-white",children:"کالاهای فروخته‌شده"})]}),T.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(fr,{className:"mx-auto h-10 w-10 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-black text-gray-600 dark:text-gray-300",children:"جزئیات کالاهای این اعلام فروش از سرور دریافت نشده است."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:T.map((y,m)=>(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["کالا ",de(m+1)]}),(0,e.jsx)("p",{className:"mt-1 break-words font-black text-gray-800 dark:text-white",children:lr(y)})]}),(0,e.jsxs)("span",{className:"rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",children:[de(y.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,e.jsx)("div",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800",children:(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-700 dark:text-gray-100",children:Ce(Ft(y))})}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-emerald-800 dark:text-emerald-200",children:Ce(ws(y))})]})]})]},`${i.id}-${y.productId||m}`))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[700px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"ردیف"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"برند"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:T.map((y,m)=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-500 dark:text-gray-400",children:de(m+1)}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-800 dark:text-white",children:lr(y)}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:ui(y)||"—"}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:bi(y)||"—"}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:Ce(Ft(y))}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[de(y.quantity)," قلم"]}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Ce(ws(y))})]},`${i.id}-${y.productId||m}`))})]})})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-wrap gap-2 border-t border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 md:px-6",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{K(i)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"تنظیم و چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]})}):null,p?(0,e.jsx)("div",{className:"admin-print-only",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:h.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:h.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:h.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:h.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:h.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:ks()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Ns()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:N==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:I.map((y,m)=>{const v=Array.isArray(y.items)?y.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:de(m+1)}),(0,e.jsx)("td",{children:Pt(y.saleDate,y.createdAt)}),(0,e.jsx)("td",{children:y.representativeCode||"—"}),(0,e.jsx)("td",{children:y.representativeName||"—"}),(0,e.jsx)("td",{children:y.representativeCity||"—"}),(0,e.jsxs)("td",{children:[de(y.totalItems)," قلم"]}),(0,e.jsx)("td",{children:Ce(y.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:v.length>0?v.map((F,L)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[lr(F)," — ",de(F.quantity)," قلم",Ft(F)>0?` — ${Ce(Ft(F))}`:""]},`${y.id}-${F.productId||L}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},y.id||m)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[de(f)," قلم"]}),(0,e.jsx)("td",{children:Ce(A)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[de(I.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[de(f)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:Ce(A)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:h.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:h.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:h.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:h.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",h.companyPhone||"—"," | ","وب‌سایت: ",h.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})}):null,p?(0,e.jsx)("div",{className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"تنظیم و چاپ گزارش فروش نمایندگان",className:"max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-4 border-b border-gray-100 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"تنظیم و پیش‌نمایش چاپ گزارش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات چاپ را تنظیم و پیش‌نمایش را بررسی کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:S,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پیش‌نمایش چاپ",title:"بستن",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"space-y-4 lg:col-span-1",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نوع گزارش"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{j("all"),x(null),w(y=>({...y,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:B("all")}))},className:`rounded-xl px-3 py-2 text-xs font-black transition ${N==="all"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"تمام گزارش‌ها"}),(0,e.jsx)("button",{type:"button",onClick:()=>{j("single"),w(y=>({...y,reportTitle:`گزارش اعلام فروش نمایندگی ${k?.representativeName||""}`,reportDescription:"این گزارش شامل اطلاعات و جزئیات یک اعلام فروش ثبت‌شده توسط نمایندگی است.",reportNumber:B("single",k)}))},disabled:!k,className:`rounded-xl px-3 py-2 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-60 ${N==="single"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"یک گزارش"})]})]}),(0,e.jsxs)("div",{className:"space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"نام شرکت"}),(0,e.jsx)("input",{type:"text",value:h.companyName,onChange:y=>{D("companyName",y.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"عنوان گزارش"}),(0,e.jsx)("input",{type:"text",value:h.reportTitle,onChange:y=>{D("reportTitle",y.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"شماره گزارش"}),(0,e.jsx)("input",{type:"text",value:h.reportNumber,onChange:y=>{D("reportNumber",y.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{value:h.notes,onChange:y=>{D("notes",y.target.value)},rows:3,className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row lg:flex-col",children:[(0,e.jsxs)("button",{type:"button",onClick:z,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:S,className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]}),(0,e.jsx)("div",{className:"lg:col-span-2",children:(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"پیش‌نمایش چاپ"}),(0,e.jsx)("div",{className:"mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsx)("div",{className:"max-h-[60vh] overflow-y-auto p-4",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:h.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:h.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:h.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:h.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:h.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:ks()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Ns()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:N==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:I.map((y,m)=>{const v=Array.isArray(y.items)?y.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:de(m+1)}),(0,e.jsx)("td",{children:Pt(y.saleDate,y.createdAt)}),(0,e.jsx)("td",{children:y.representativeCode||"—"}),(0,e.jsx)("td",{children:y.representativeName||"—"}),(0,e.jsx)("td",{children:y.representativeCity||"—"}),(0,e.jsxs)("td",{children:[de(y.totalItems)," قلم"]}),(0,e.jsx)("td",{children:Ce(y.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:v.length>0?v.map((F,L)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[lr(F)," — ",de(F.quantity)," قلم",Ft(F)>0?` — ${Ce(Ft(F))}`:""]},`${y.id}-${F.productId||L}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},y.id||m)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[de(f)," قلم"]}),(0,e.jsx)("td",{children:Ce(A)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[de(I.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[de(f)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:Ce(A)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:h.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:h.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:h.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:h.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",h.companyPhone||"—"," | ","وب‌سایت: ",h.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})})})]})})]})]})}):null]})},Jt="https://myshop-backend-8nu7.onrender.com/api".replace(/\/+$/,""),Ut=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],zt={name:["عنوان","عنوان","عنوان","نام","کالا","محصول","productName","Product","Name"],brand:["برند","نام برند","Brand"],category:["دسته‌بندی","دسته بندی","دسته","گروه کالا","Category"],quantity:["تعداد","تعداد کالا","تعداد موجودی","موجودی","موجودی کالا","مقدار","quantity","Qty","Stock","Count"],price:["قیمت","قیمت","قیمت","unitPrice","Unit Price","Price"]},ji=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",Er=()=>{const t=ji();if(!t)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`,Accept:"application/json"}},ct=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),er=t=>ct(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim().toLowerCase(),qa=t=>{const r=ct(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,"");if(!r)return NaN;const s=Number(r);return Number.isFinite(s)?s:NaN},pe=t=>{const r=qa(t);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},ir=(t,r)=>{const s=new Set(r.map(er));return Object.entries(t).find(([o])=>s.has(er(o)))?.[1]??""},Ss=(t,r)=>{const s=new Set(r.map(er));return Object.keys(t).some(o=>s.has(er(o)))},Pr=t=>Ut.find(r=>r.value===t)?.label||"نامشخص",An=t=>Ut.findIndex(r=>r.value===t),Cs=t=>{const r=An(t);return r<0?"confirmed":r>=Ut.length-1?null:Ut[r+1].value},ha=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/").split("/").map(t=>ct(t)).join("/"),or=(t,r)=>{if(ne.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||r}return t instanceof Error?t.message:r},vi=async t=>{const r=await t.arrayBuffer(),s=gn(r,{type:"array"}),o=s.SheetNames[0];if(!o)throw new Error("فایل اکسل هیچ برگه‌ای ندارد.");const b=s.Sheets[o],n=hn.sheet_to_json(b,{defval:"",raw:!1});if(n.length===0)throw new Error("فایل اکسل خالی است.");const g=[];if(Ss(n[0],zt.name)||g.push("عنوان"),Ss(n[0],zt.quantity)||g.push("تعداد"),g.length>0)throw new Error(`ستون‌های لازم پیدا نشد: ${g.join("، ")}`);return n.map((i,u)=>{const p=u+2,d=String(ir(i,zt.name)).trim(),N=String(ir(i,zt.brand)).trim(),j=String(ir(i,zt.category)).trim(),k=qa(ir(i,zt.quantity)),x=ir(i,zt.price),h=String(x).trim()===""?0:qa(x);let w="";return d?!Number.isSafeInteger(k)||k<=0?w="تعداد باید عدد صحیح و بزرگ‌تر از صفر باشد.":(!Number.isSafeInteger(h)||h<0)&&(w="قیمت باید عدد صحیح و نامنفی باشد."):w="عنوان خالی است.",{rowIndex:p,productName:d,brand:N,category:j,quantity:Number.isFinite(k)?k:0,unitPrice:Number.isFinite(h)?h:0,totalPrice:Number.isFinite(k)&&Number.isFinite(h)?k*h:0,error:w}})},ki=()=>{const[t,r]=(0,a.useState)([]),[s,o]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[g,i]=(0,a.useState)(!1),[u,p]=(0,a.useState)(null),[d,N]=(0,a.useState)(null),[j,k]=(0,a.useState)(""),[x,h]=(0,a.useState)(""),[w,c]=(0,a.useState)(""),[$,U]=(0,a.useState)(!1),[P,O]=(0,a.useState)(null),[H,T]=(0,a.useState)(""),[I,f]=(0,a.useState)(""),[A,B]=(0,a.useState)(ha),[D,W]=(0,a.useState)(""),[K,S]=(0,a.useState)([]),[z,y]=(0,a.useState)(""),[m,v]=(0,a.useState)(""),[F,L]=(0,a.useState)(""),C=(0,a.useRef)(null),_=(0,a.useMemo)(()=>new Map(s.map(l=>[ct(l.id).trim(),l])),[s]),ee=_.get(H),V=(0,a.useMemo)(()=>K.filter(l=>!l.error),[K]),ue=(0,a.useMemo)(()=>K.filter(l=>!!l.error),[K]),te=(0,a.useMemo)(()=>{const l=er(F);return t.filter(E=>{const J=_.get(ct(E.representativeId).trim()),ce=!z||ct(E.representativeId).trim()===z,ge=!m||E.status===m,ye=er([E.shipmentNumber,E.representativeName,J?.name,E.warehouse,E.excelFileName].join(" "));return ce&&ge&&ye.includes(l)})},[t,_,z,m,F]),le=(0,a.useCallback)(async(l=!0)=>{l&&n(!0);try{const E=Er(),[J,ce]=await Promise.all([ne.get(`${Jt}/shipments`,{headers:E}),ne.get(`${Jt}/representatives`,{headers:E})]);if(J.data.success===!1||ce.data.success===!1)throw new Error(J.data.error||ce.data.error||"دریافت اطلاعات ناموفق بود.");r(Array.isArray(J.data.data)?J.data.data:[]),o(Array.isArray(ce.data.data)?ce.data.data:[])}catch(E){k(or(E,"دریافت اطلاعات ناموفق بود."))}finally{l&&n(!1)}},[]);(0,a.useEffect)(()=>{le()},[le]);const oe=()=>{T(""),f(""),B(ha()),W(""),S([]),c(""),C.current&&(C.current.value="")},ie=()=>{oe(),B(ha()),k(""),h(""),U(!0)},be=async l=>{const E=l.target.files?.[0];if(W(""),S([]),c(""),!!E){if(!/\.(xlsx|xls)$/i.test(E.name)){c("فقط فایل اکسل xlsx یا xls پذیرفته می‌شود."),l.target.value="";return}try{const J=await vi(E);W(E.name),S(J)}catch(J){c(or(J,"خواندن فایل اکسل ناموفق بود.")),l.target.value=""}}},me=async l=>{if(l.preventDefault(),c(""),k(""),h(""),!ee){c("نماینده را انتخاب کنید.");return}const E=String(ee.id||"").trim();if(!E||E==="undefined"||E==="null"){c("شناسه نماینده نامعتبر است. لطفاً صفحه را رفرش کرده و دوباره تلاش کنید.");return}i(!0);try{let J,ce=0;V.length>0?(J=V.map(ye=>({productName:ye.productName,brand:ye.brand,category:ye.category,quantity:ye.quantity,unitPrice:ye.unitPrice,rowIndex:ye.rowIndex})),ce=ue.length):J=[{productName:"بار دستی",brand:"",category:"",quantity:1,unitPrice:0,rowIndex:1}],console.log("🚀 Sending shipment request:",{url:`${Jt}/shipments`,representativeId:E,warehouse:I.trim()||"انبار مرکزی",itemsCount:J.length,skippedInvalidRows:ce});const ge=await ne.post(`${Jt}/shipments`,{representativeId:E,warehouse:I.trim()||"انبار مرکزی",shipmentDate:A,excelFileName:D||"",items:J},{headers:{...Er(),"Content-Type":"application/json"}});if(ge.data.success===!1)throw new Error(ge.data.error||"ثبت بار ناموفق بود.");U(!1),oe(),h(ge.data.message||"بار با موفقیت ثبت شد."),le(!1)}catch(J){c(or(J,"ثبت بار ناموفق بود."))}finally{i(!1)}},R=async(l,E)=>{if(l.status!==E&&window.confirm(`وضعیت بار «${l.shipmentNumber||l.id}» به «${Pr(E)}» تغییر کند؟`)){p(String(l.id)),k(""),h("");try{const J=await ne.patch(`${Jt}/shipments/${encodeURIComponent(String(l.id))}/status`,{status:E},{headers:Er()});if(J.data.success===!1)throw new Error(J.data.error||"تغییر وضعیت ناموفق بود.");J.data.data?r(ge=>ge.map(ye=>String(ye.id)===String(l.id)?J.data.data:ye)):le(!1);let ce=J.data.message||"وضعیت بار تغییر کرد.";J.data.sms&&(J.data.sms.sent?ce+=" پیامک برای نماینده ارسال شد.":ce+=" (ارسال پیامک ناموفق بود.)"),h(ce)}catch(J){k(or(J,"تغییر وضعیت ناموفق بود."))}finally{p(null)}}},Q=async l=>{const E=Cs(l.status);if(!E){k("بار در آخرین وضعیت است. برای تغییر دستی از انتخاب‌گر وضعیت استفاده کنید.");return}await R(l,E)},X=async l=>{const E=l.shipmentNumber||l.id;if(window.confirm(`آیا از حذف بار «${E}» مطمئن هستید؟`)){N(String(l.id)),k(""),h("");try{const J=await ne.delete(`${Jt}/shipments/${encodeURIComponent(String(l.id))}`,{headers:Er()});if(J.data.success===!1)throw new Error(J.data.error||"حذف بار ناموفق بود.");r(ce=>ce.filter(ge=>String(ge.id)!==String(l.id))),h(J.data.message||"بار حذف شد.")}catch(J){k(or(J,"حذف بار ناموفق بود."))}finally{N(null)}}};return b&&t.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-10 text-center dark:bg-gray-900",children:[(0,e.jsx)(xe,{className:"mx-auto mb-3 h-9 w-9 animate-spin text-blue-600"}),"در حال دریافت اطلاعات..."]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 rounded-2xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:space-y-5 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:pb-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-900 dark:text-white sm:text-2xl",children:[(0,e.jsx)(Zt,{className:"h-5 w-5 text-blue-600 sm:h-6 sm:w-6"}),"مدیریت ارسال بار"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm",children:[pe(t.length)," حواله ثبت‌شده"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>void le(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-3 text-xs font-bold dark:border-gray-700 dark:text-white sm:px-4 sm:text-sm",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"به‌روزرسانی"]}),(0,e.jsxs)("button",{type:"button",onClick:ie,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 text-xs font-black text-white hover:bg-blue-700 sm:px-4 sm:text-sm",children:[(0,e.jsx)(kr,{className:"h-4 w-4"}),"ارسال بار جدید"]})]})]}),j&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700",children:[(0,e.jsx)(Le,{className:"h-5 w-5 shrink-0"}),j]}),x&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700",children:[(0,e.jsx)(we,{className:"h-5 w-5 shrink-0"}),x]}),(0,e.jsxs)("section",{className:"grid gap-3 md:grid-cols-3",children:[(0,e.jsx)("input",{type:"search",value:F,onChange:l=>L(l.target.value),placeholder:"جست‌وجوی حواله یا نماینده",className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("select",{value:z,onChange:l=>y(l.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ نمایندگان"}),s.map(l=>(0,e.jsx)("option",{value:ct(l.id).trim(),children:l.name||"بدون نام"},String(l.id)))]}),(0,e.jsxs)("select",{value:m,onChange:l=>v(l.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ وضعیت‌ها"}),Ut.map(l=>(0,e.jsx)("option",{value:l.value,children:l.label},l.value))]})]}),te.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل بارها"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[pe(te.length)," حواله · ",pe(te.reduce((l,E)=>l+(E.totalItems??E.items?.reduce((J,ce)=>J+ce.quantity,0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:pe(te.reduce((l,E)=>l+(E.totalValue??E.items?.reduce((J,ce)=>J+(ce.totalPrice??(ce.quantity||0)*(ce.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),te.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-10 text-center",children:[(0,e.jsx)(pt,{className:"mx-auto mb-3 h-12 w-12 text-blue-300"}),(0,e.jsx)("p",{className:"font-bold text-gray-700",children:t.length===0?"هنوز باری ثبت نشده است.":"باری با این فیلترها پیدا نشد."})]}):(0,e.jsx)("div",{className:"grid gap-4 xl:grid-cols-2",children:te.map(l=>{const E=_.get(ct(l.representativeId).trim()),J=l.representativeName||E?.name||"—",ce=l.items?.length??l.itemsCount??0,ge=l.totalItems??l.items?.reduce((ae,fe)=>ae+fe.quantity,0)??0,ye=An(l.status),De=Cs(l.status),M=u===String(l.id),Y=d===String(l.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/60 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"truncate text-xs font-bold text-gray-500",children:["حواله ",l.shipmentNumber||l.id]}),(0,e.jsx)("h3",{className:"mt-1 text-base font-black text-gray-900 dark:text-white sm:text-lg",children:J}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-600 dark:text-gray-300 sm:mt-2 sm:text-sm",children:["انبار: ",l.warehouse||"—"]})]}),(0,e.jsx)("span",{className:"rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-black text-blue-700 sm:px-3 sm:py-1.5 sm:text-xs",children:Pr(l.status)})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-2 sm:mt-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:pe(ce)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:pe(ge)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black dark:text-white sm:text-sm",children:l.shipmentDate||"—"})]})]}),(0,e.jsx)("div",{className:"mt-3 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-1.5",children:Ut.map((ae,fe)=>(0,e.jsx)("div",{className:`truncate rounded-lg px-1 py-2 text-center text-[9px] font-bold sm:text-xs ${fe<=ye?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700"}`,children:ae.label},ae.value))}),(0,e.jsxs)("div",{className:"mt-3 flex flex-col gap-2 border-t border-gray-200 pt-3 dark:border-gray-700 sm:mt-4 sm:flex-row sm:pt-4",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>O(l),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-300 px-4 text-sm font-bold text-blue-700",children:[(0,e.jsx)(ta,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsx)("button",{type:"button",onClick:()=>void Q(l),disabled:M||Y||!De,title:De?`تغییر به ${Pr(De)}`:"مرحلهٔ بعدی ندارد",className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white disabled:cursor-not-allowed disabled:bg-gray-300",children:M?(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Ma,{className:"h-5 w-5"})}),(0,e.jsx)("select",{value:l.status||"registered",onChange:ae=>void R(l,ae.target.value),disabled:M||Y,className:"min-h-11 flex-1 rounded-xl border border-gray-300 bg-white px-3 text-sm font-bold dark:border-gray-700 dark:bg-gray-900 dark:text-white",children:Ut.map(ae=>(0,e.jsx)("option",{value:ae.value,children:ae.label},ae.value))}),(0,e.jsxs)("button",{type:"button",onClick:()=>void X(l),disabled:M||Y,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 disabled:opacity-50",children:[Y?(0,e.jsx)(xe,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف"]})]})]},String(l.id))})}),$&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-xl font-black dark:text-white",children:"ارسال بار جدید"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"گیرنده به‌صورت خودکار نام نمایندهٔ انتخاب‌شده است."})]}),(0,e.jsx)("button",{type:"button",disabled:g,onClick:()=>{U(!1),oe()},className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),w&&(0,e.jsxs)("div",{className:"mb-4 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700",children:[(0,e.jsx)(Le,{className:"h-5 w-5 shrink-0"}),w]}),(0,e.jsxs)("form",{onSubmit:l=>void me(l),className:"space-y-4 sm:space-y-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 sm:grid-cols-2 sm:gap-4",children:[(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["نماینده",(0,e.jsxs)("select",{value:H,onChange:l=>T(l.target.value),required:!0,className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"نماینده را انتخاب کنید"}),s.map(l=>(0,e.jsxs)("option",{value:ct(l.id).trim(),children:[l.name||"بدون نام"," ","—"," ",l.city||"بدون شهر"]},String(l.id)))]})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["تاریخ ثبت بار",(0,e.jsxs)("div",{className:"relative mt-2",children:[(0,e.jsx)(lt,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"}),(0,e.jsx)("input",{value:A,readOnly:!0,dir:"ltr",className:"min-h-12 w-full cursor-not-allowed rounded-xl border border-blue-200 bg-blue-50 py-2 pl-3 pr-11 text-center font-black text-blue-800"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:"تاریخ امروز خودکار ثبت می‌شود و قابل ویرایش نیست."})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white sm:col-span-2",children:["انبار مبدأ ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"}),(0,e.jsx)("input",{value:I,onChange:l=>f(l.target.value),placeholder:"خالی = انبار مرکزی",className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]})]}),ee&&(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 text-sm font-bold text-purple-800",children:["گیرندهٔ خودکار:"," ",ee.name||"—"," ","— کد"," ",ee.code||"—"]}),(0,e.jsx)("div",{className:"rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-5",children:(0,e.jsxs)("label",{className:"flex cursor-pointer flex-col items-center gap-2 text-center",children:[(0,e.jsx)(Nr,{className:"h-8 w-8 text-blue-600"}),(0,e.jsxs)("span",{className:"font-black text-blue-800",children:["انتخاب فایل اکسل اقلام ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"})]}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"ستون‌های ضروری: عنوان و تعداد — اگر فایل انتخاب نکنید، بار با یک آیتم پیش‌فرض ثبت می‌شود"}),(0,e.jsx)("input",{ref:C,type:"file",accept:".xlsx,.xls",onChange:l=>void be(l),className:"sr-only"})]})}),D&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm font-bold text-green-700",children:[(0,e.jsx)(Ka,{className:"h-5 w-5"}),D]}),K.length>0&&(0,e.jsxs)("div",{className:"max-h-72 overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"space-y-2 p-2 sm:hidden",children:K.map(l=>(0,e.jsxs)("div",{className:`rounded-xl p-3 ${l.error?"bg-red-50 text-red-700":"bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white"}`,children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate font-black",children:l.productName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500",children:["ردیف ",pe(l.rowIndex)]})]}),(0,e.jsx)("span",{className:`rounded-full px-2 py-0.5 text-[10px] font-bold ${l.error?"bg-red-200 text-red-800":"bg-green-100 text-green-700"}`,children:l.error?"نامعتبر":"آماده"})]}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black",children:pe(l.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsx)("p",{className:"font-black",children:pe(l.unitPrice)})})]}),l.brand&&(0,e.jsxs)("p",{className:"mt-2 text-xs text-gray-500",children:["برند: ",l.brand]}),l.category&&(0,e.jsxs)("p",{className:"text-xs text-gray-500",children:["دسته: ",l.category]})]},l.rowIndex))}),(0,e.jsxs)("table",{className:"hidden w-full min-w-[700px] text-right text-sm sm:table",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"ردیف"}),(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:K.map(l=>(0,e.jsxs)("tr",{className:`border-t border-gray-100 dark:border-gray-700 ${l.error?"bg-red-50":"dark:text-white"}`,children:[(0,e.jsx)("td",{className:"p-3",children:pe(l.rowIndex)}),(0,e.jsx)("td",{className:"p-3 font-bold",children:l.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:pe(l.unitPrice)}),(0,e.jsx)("td",{className:"p-3",children:pe(l.quantity)}),(0,e.jsx)("td",{className:"p-3",children:l.error||"آماده"})]},l.rowIndex))})]})]}),V.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع قیمت محصولات"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[pe(V.length)," قلم · ",pe(V.reduce((l,E)=>l+E.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:pe(V.reduce((l,E)=>l+E.quantity*E.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),V.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-emerald-50 via-green-50 to-teal-50 p-4 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-teal-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل ارسال بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[pe(V.length)," قلم · ",pe(V.reduce((l,E)=>l+E.quantity,0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 sm:text-xl",children:pe(V.reduce((l,E)=>l+E.quantity*E.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",disabled:g,onClick:()=>{U(!1),oe()},className:"min-h-12 rounded-xl bg-gray-100 px-4 text-sm font-bold text-gray-700 sm:px-5",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:g||!ee,className:"flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 font-black text-white disabled:cursor-not-allowed disabled:opacity-50",children:[g?(0,e.jsx)(xe,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Wa,{className:"h-4 w-4"}),"ثبت و ارسال بار"]})]})]})]})}),P&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"text-xl font-black dark:text-white",children:["جزئیات بار"," ",P.shipmentNumber||P.id]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:["فایل:"," ",P.excelFileName||"—"]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>O(null),className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mb-5 rounded-xl bg-blue-50 p-3 text-sm font-black text-blue-700",children:["وضعیت فعلی:"," ",Pr(P.status)]}),P.items?.length?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"mb-4 rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع این بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[pe(P.items.length)," قلم · ",pe(P.items.reduce((l,E)=>l+E.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:pe(P.items.reduce((l,E)=>l+(E.totalPrice??E.quantity*E.unitPrice),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsx)("div",{className:"space-y-2 sm:hidden",children:P.items.map((l,E)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:l.productName}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:pe(l.quantity)})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"قیمت"}),(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[pe(l.unitPrice)," ت"]})]})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[l.brand&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",l.brand]}),l.category&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",l.category]})]}),(0,e.jsxs)("div",{className:"mt-2 rounded-lg bg-green-50 p-2 text-xs dark:bg-green-950/20",children:[(0,e.jsx)("span",{className:"text-gray-500",children:"مبلغ کل: "}),(0,e.jsxs)("span",{className:"font-black text-green-700 dark:text-green-300",children:[pe(l.totalPrice??l.quantity*l.unitPrice)," تومان"]})]})]},String(l.id??E)))}),(0,e.jsx)("div",{className:"hidden max-h-80 overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"مبلغ"})]})}),(0,e.jsx)("tbody",{children:P.items.map((l,E)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-white",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:l.productName}),(0,e.jsx)("td",{className:"p-3",children:l.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.category||"—"}),(0,e.jsxs)("td",{className:"p-3",children:[pe(l.unitPrice)," ","تومان"]}),(0,e.jsx)("td",{className:"p-3",children:pe(l.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[pe(l.totalPrice)," ","تومان"]})]},String(l.id??E)))})]})})]}):(0,e.jsx)("p",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500",children:"اقلام بار برای نمایش موجود نیستند."})]})})]})};function wr(t){"@babel/helpers - typeof";return wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},wr(t)}function Ni(t,r){if(wr(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var o=s.call(t,r||"default");if(wr(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function wi(t){var r=Ni(t,"string");return wr(r)=="symbol"?r:r+""}function Is(t,r,s){return(r=wi(r))in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}var Si=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},Ci=Si("https://myshop-backend-8nu7.onrender.com/api"),Ii=class extends a.Component{constructor(...t){super(...t),Is(this,"state",{hasError:!1,errorMessage:"",errorStack:"",componentStack:""}),Is(this,"handleRetry",()=>{this.setState({hasError:!1,errorMessage:"",errorStack:"",componentStack:""})})}static getDerivedStateFromError(t){return{hasError:!0,errorMessage:t?.message||"خطای نامشخص در داشبورد نماینده.",errorStack:t?.stack||""}}componentDidCatch(t,r){console.error("❌ خطای داشبورد نماینده:",t),console.error("❌ مسیر کامپوننت:",r.componentStack),this.setState({componentStack:r.componentStack||""})}render(){const{children:t,onBack:r}=this.props,{hasError:s,errorMessage:o,errorStack:b,componentStack:n}=this.state;return s?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border-2 border-red-300 bg-red-50 p-5 shadow-lg dark:border-red-900/60 dark:bg-red-950/30 md:p-7",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"rounded-xl bg-red-100 p-3 text-red-600 dark:bg-red-900/40 dark:text-red-300",children:(0,e.jsx)(Le,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-red-800 dark:text-red-300",children:"خطا در نمایش داشبورد نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-bold leading-7 text-red-700 dark:text-red-400",children:"متن خطای زیر را کامل بررسی کنید."})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-sm font-black text-red-700 dark:text-red-400",children:"متن خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-44 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-red-50 p-3 text-xs leading-6 text-red-800 dark:bg-red-950/30 dark:text-red-300",children:o})]}),b?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"جزئیات فنی خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:b})]}):null,n?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"مسیر کامپوننت خطادار"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:n})]}):null,(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",onClick:this.handleRetry,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"تلاش دوباره"]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"min-h-11 rounded-xl bg-gray-800 px-5 py-3 text-sm font-black text-white transition hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]})]}):t}},$s=({activeSection:t,userRole:r,products:s,totalProducts:o,totalPrice:b,viewingRepDashboard:n,representatives:g,representativeFiles:i,loadingFiles:u,shipments:p=[],onEditProduct:d,onDeleteProduct:N,onUploadSuccess:j,onOpenRepDashboard:k,onBackToRepList:x,onViewFile:h,onDeleteFile:w,onAddRepresentative:c,onEditRepresentative:$,onDeleteRepresentative:U,onRepresentativeUpdated:P})=>{const O=(0,a.useMemo)(()=>Array.isArray(s)?s:[],[s]),H=(0,a.useMemo)(()=>Array.isArray(g)?g:[],[g]),T=(0,a.useMemo)(()=>Array.isArray(p)?p:[],[p]),I=(0,a.useMemo)(()=>Array.isArray(i)?i:[],[i]),f=(0,a.useMemo)(()=>n===null||n===""?null:H.find(A=>String(A.id)===String(n))||null,[H,n]);if((0,a.useEffect)(()=>{console.log("🔎 MAIN CONTENT STATE",{activeSection:t,productsCount:O.length,totalProducts:o,viewingRepDashboard:n,representativesCount:H.length,selectedRepresentative:f?.name||null})},[t,O.length,o,n,H.length,f]),n!==null&&n!=="")return f?(0,e.jsx)(Ii,{onBack:x,children:(0,e.jsx)(di,{representative:f,apiUrl:Ci,onBack:x,files:I,loadingFiles:u,onViewFile:h,onDeleteFile:w,onRepresentativeUpdated:P})}):(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center shadow-lg dark:border-yellow-800 dark:bg-yellow-900/20 md:p-8",children:[(0,e.jsx)(xe,{className:"mx-auto mb-4 h-12 w-12 animate-spin text-yellow-600 dark:text-yellow-400"}),(0,e.jsx)("p",{className:"text-base font-black text-yellow-700 dark:text-yellow-300 md:text-lg",children:"اطلاعات نماینده پیدا نشد."}),(0,e.jsxs)("div",{className:"mx-auto mt-4 max-w-xl rounded-xl border border-yellow-200 bg-white p-4 text-right text-xs leading-7 text-yellow-800 dark:border-yellow-800 dark:bg-gray-900 dark:text-yellow-300",children:[(0,e.jsxs)("p",{children:["شناسه انتخاب‌شده:"," ",(0,e.jsx)("strong",{children:n})]}),(0,e.jsxs)("p",{children:["تعداد نمایندگان:"," ",(0,e.jsx)("strong",{children:H.length})]}),(0,e.jsxs)("p",{className:"break-words",children:["شناسه‌های موجود:"," ",(0,e.jsx)("strong",{children:H.map(A=>String(A.id)).join(", ")||"هیچ‌کدام"})]})]}),(0,e.jsx)("button",{type:"button",onClick:x,className:"mt-5 min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]});switch(t){case"dashboard":return(0,e.jsx)(Ul,{totalProducts:Number(o)||0,totalPrice:Number(b)||0,representatives:H,shipments:T});case"products":return(0,e.jsx)(Sn,{products:O,userRole:r,onEdit:d,onDelete:N});case"representatives":return r!=="admin"?(0,e.jsx)(nr,{message:"فقط ادمین به بخش نمایندگان دسترسی دارد."}):(0,e.jsx)(ni,{representatives:H,userRole:r,onOpenDashboard:k,onAddRepresentative:c,onEditRepresentative:$,onDeleteRepresentative:U});case"upload":return r!=="admin"?(0,e.jsx)(nr,{message:"فقط ادمین به بخش آپلود اکسل دسترسی دارد."}):(0,e.jsx)(Hl,{onUploadSuccess:j});case"shipments":return r!=="admin"?(0,e.jsx)(nr,{message:"فقط ادمین به بخش ارسال بار دسترسی دارد."}):(0,e.jsx)(ki,{});case"sales-reports":return r!=="admin"?(0,e.jsx)(nr,{message:"فقط ادمین به بخش اعلام فروش نمایندگان دسترسی دارد."}):(0,e.jsx)(fi,{});case"return-requests":return r!=="admin"?(0,e.jsx)(nr,{message:"فقط ادمین به درخواست‌های مرجوعی دسترسی دارد."}):(0,e.jsx)(xi,{});default:return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-orange-500 dark:text-orange-400",children:(0,e.jsx)(gl,{className:"h-16 w-16 md:h-20 md:w-20"})}),(0,e.jsx)("p",{className:"text-base text-gray-500 dark:text-gray-400 md:text-xl",children:"این بخش در حال توسعه است."})]})}},$i=({file:t,apiUrl:r,onClose:s})=>{if(!t)return null;const o=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/view`,b=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/download`;return(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md md:p-4",children:(0,e.jsxs)("div",{className:"relative w-full max-w-4xl",children:[(0,e.jsx)("button",{type:"button",onClick:s,className:"absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600","aria-label":"بستن",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})}),t.icon==="🖼️"?(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-white shadow-2xl",children:[(0,e.jsx)("div",{className:"relative flex items-center justify-center bg-gray-100",children:(0,e.jsx)("img",{src:o,alt:t.name,className:"max-h-[75vh] w-full object-contain"})}),(0,e.jsxs)("div",{className:"flex items-center gap-3 bg-gray-900 px-4 py-3 text-white",children:[(0,e.jsx)(kn,{className:"h-5 w-5 shrink-0 text-gray-400"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate text-sm font-bold",children:t.name}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs text-gray-400",children:[t.size," • ",t.uploadedAt]})]})]})]}):(0,e.jsxs)("div",{className:"mx-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl md:p-8",children:[(0,e.jsx)("div",{className:"mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-100 text-blue-600 mx-auto",children:(0,e.jsx)(mt,{className:"h-12 w-12"})}),(0,e.jsx)("h3",{className:"mb-2 truncate text-lg font-black text-gray-800",children:t.name}),(0,e.jsxs)("p",{className:"mb-6 text-sm text-gray-500",children:[t.size," • ",t.uploadedAt]}),(0,e.jsxs)("div",{className:"flex flex-col justify-center gap-3 sm:flex-row",children:[(0,e.jsxs)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600",children:[(0,e.jsx)($t,{className:"h-4 w-4"}),"باز کردن"]}),(0,e.jsxs)("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-600",children:[(0,e.jsx)(fn,{className:"h-4 w-4"}),"دانلود"]})]})]})]})})},Dn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),tt=t=>{const r=Dn(t).replace(/[,٬،\s]/g,""),s=Number(r);return Number.isFinite(s)?Math.max(0,s):0},dr=t=>tt(t).toLocaleString("fa-IR"),Ne=t=>tt(t).toLocaleString("fa-IR"),Ve=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),As=t=>Dn(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").trim().toLowerCase(),Ai=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},Ds=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"];for(const r of[sessionStorage,localStorage])for(const s of t){const o=r.getItem(s);if(o&&o!=="null"&&o!=="undefined"){const b=o.replace(/^Bearer\s+/i,"").trim();if(b)return b}}return""},Di=({representatives:t=[],onOpenRepresentativeWarehouse:r,apiUrl:s})=>{const[o,b]=(0,a.useState)(""),[n,g]=(0,a.useState)("all"),[i,u]=(0,a.useState)({}),[p,d]=(0,a.useState)({}),[N,j]=(0,a.useState)(!0),[k,x]=(0,a.useState)(0),h=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),w=Ai(s),c=JSON.stringify([...new Set(h.map(m=>String(m.id)))].sort()),$=JSON.stringify(h.map(m=>[String(m.id),m.storeItemsCount,m.storeItemsTotalValue])),U=(0,a.useCallback)(()=>{x(m=>m+1)},[]),P=()=>"https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png",O=()=>{try{return new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleString("fa-IR")}},H=()=>{if(N){window.alert("لطفاً صبر کنید تا دریافت انبارها کامل شود.");return}if(!I.length){window.alert("نماینده‌ای برای چاپ موجود نیست.");return}const m=window.open("","_blank","width=1000,height=720");if(!m){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}const v=O(),F=P(),L=I.map(te=>{const le=String(te.id),oe=i[le],ie=p[le];return{id:le,name:te.name||"بدون نام",code:te.code||"-",city:te.city||"-",phone:te.phone||"-",status:te.status!=="inactive"?"فعال":"غیرفعال",itemCount:oe?.itemCount??0,totalValue:oe?.totalValue??0,hasError:!!ie||!oe}}),C=L.map((te,le)=>`
        <tr>
          <td style="text-align:center;">${le+1}</td>
          <td>${Ve(te.name)}<div style="font-size:10px;color:#6b7280;margin-top:2px;" dir="ltr">${Ve(te.phone)}</div></td>
          <td style="text-align:center;">${Ve(te.code)}</td>
          <td style="text-align:center;">${Ve(te.city)}</td>
          <td style="text-align:center;">${te.status}</td>
          <td style="text-align:center;">${te.hasError?"نامشخص":Ne(te.itemCount)}</td>
          <td style="text-align:center;">${te.hasError?"نامشخص":Ne(te.totalValue)+" تومان"}</td>
        </tr>`).join(""),_=L.reduce((te,le)=>te+(le.hasError?0:le.itemCount),0),ee=L.reduce((te,le)=>te+(le.hasError?0:le.totalValue),0),V=L.filter(te=>te.status==="فعال").length,ue=L.filter(te=>te.hasError).length;m.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ لیست انبارهای نمایندگان</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 64px; max-width: 220px; }
.company-info h1 { font-size: 19px; margin: 0; color: #0f766e; }
.company-info p { font-size: 12px; color: #555; margin: 2px 0; }
.report-title { text-align: center; margin: 18px 0 12px; }
.report-title h2 { font-size: 22px; margin: 0; color: #0f766e; }
.report-title p { font-size: 12px; color: #666; margin-top: 5px; }
.info-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 14px 0 20px; }
.info-card { border: 1px solid #ddd; border-radius: 8px; padding: 12px 14px; background: #f9fafb; }
.info-card .label { font-size: 11px; color: #6b7280; margin-bottom: 4px; }
.info-card .value { font-size: 16px; font-weight: bold; color: #111; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ddd; padding: 8px 10px; font-size: 12px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; text-align: center; }
tr:nth-child(even) td { background: #f9fafb; }
tfoot td { background: #ecfdf5 !important; font-weight: bold; }
.summary { display: flex; gap: 16px; margin-top: 22px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 10px; padding: 14px 22px; text-align: center; min-width: 150px; background: #f9fafb; }
.summary-card .label { font-size: 11px; color: #6b7280; }
.summary-card .value { font-size: 19px; font-weight: bold; margin-top: 5px; color: #0f766e; }
.footer { margin-top: 36px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
.print-summary-section { break-inside: avoid; page-break-inside: avoid; }
@media print {
  @page { size: A4 portrait; margin: 10mm; }
  body { padding: 0; }
  .print-summary-section { break-inside: avoid; page-break-inside: avoid; }
}
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="${F}" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>بازرگانی مهر امین</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۸-۳۳۲۳۶۰۷۲</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${v}</p>
    <p><strong>تعداد نمایندگان:</strong> ${Ne(L.length)}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش خلاصهٔ انبارهای نمایندگان</h2>
  <p>شامل تعداد کالاهای دارای موجودی و ارزش کل موجودی هر نماینده</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نمایندگان فعال</div>
    <div class="value">${Ne(V)}</div>
  </div>
  <div class="info-card">
    <div class="label">مجموع کالاهای دارای موجودی</div>
    <div class="value">${Ne(_)}</div>
  </div>
  <div class="info-card">
    <div class="label">ارزش کل انبارها</div>
    <div class="value">${Ne(ee)}<br><span style="font-size:11px;">تومان</span></div>
  </div>
  <div class="info-card">
    <div class="label">انبارهای ناموفق</div>
    <div class="value" style="color:${ue>0?"#b91c1c":"#111"};">${Ne(ue)}</div>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th style="width:5%;">ردیف</th>
      <th style="width:30%;">نماینده</th>
      <th style="width:10%;">کد</th>
      <th style="width:13%;">شهر</th>
      <th style="width:10%;">وضعیت</th>
      <th style="width:14%;">تعداد</th>
      <th style="width:18%;">مجموع</th>
    </tr>
  </thead>
  <tbody>
    ${C}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="5" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${Ne(_)}</strong></td>
        <td style="text-align:center;"><strong>${Ne(ee)} تومان</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد کل انبارها</div>
      <div class="value">${Ne(L.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع کالاها</div>
      <div class="value">${Ne(_)}</div>
    </div>
    <div class="summary-card">
      <div class="label">ارزش کل انبارها</div>
      <div class="value">${Ne(ee)}<br><span style="font-size:11px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>بازرگانی مهر امین</p>
  </div>
</div>

</body>
</html>`),m.document.close(),m.focus(),setTimeout(()=>{m.print()},800)},T=async m=>{const v=String(m.id);let F=i[v];if(!F||!Array.isArray(F.items)||F.items.length===0)try{const oe=Ds(),ie={Accept:"application/json"};oe&&(ie.Authorization=`Bearer ${oe}`);const be=await fetch(`${w}/representatives/${encodeURIComponent(v)}/warehouse?_=${Date.now()}`,{method:"GET",credentials:"include",cache:"no-store",headers:ie}),me=await be.text();let R;try{R=JSON.parse(me)}catch{throw new Error("پاسخ انبار معتبر نیست.")}if(!be.ok||!R.success)throw new Error(R.error||R.message||"دریافت انبار ناموفق بود.");const Q=(Array.isArray(R.data?.items)?R.data.items:[]).filter(X=>tt(X.quantity)>0);F={itemCount:Q.length,totalValue:Q.reduce((X,l)=>X+tt(l.quantity)*tt(l.unitPrice),0),items:Q,updatedAt:R.data?.updatedAt}}catch(oe){const ie=oe instanceof Error?oe.message:"دریافت انبار ناموفق بود.";window.alert(`دریافت جزئیات انبار ${m.name||""} ناموفق بود:
${ie}`);return}const L=window.open("","_blank","width=1000,height=720");if(!L){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}const C=O(),_=P(),ee=F?.items??[],V=ee.map((oe,ie)=>{const be=String(oe.productName||oe.name||oe.title||"بدون عنوان"),me=String(oe.brand||"-"),R=String(oe.category||"-"),Q=tt(oe.quantity),X=tt(oe.unitPrice),l=Q*X;return`
        <tr>
          <td style="text-align:center;">${ie+1}</td>
          <td>${Ve(be)}</td>
          <td style="text-align:center;">${Ve(me)}</td>
          <td style="text-align:center;">${Ve(R)}</td>
          <td style="text-align:center;">${Ne(X)} تومان</td>
          <td style="text-align:center;">${Ne(Q)}</td>
          <td style="text-align:center;">${Ne(l)} تومان</td>
        </tr>`}).join(""),ue=ee.reduce((oe,ie)=>oe+tt(ie.quantity),0),te=F?.totalValue??0,le=F?.updatedAt?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(F.updatedAt)):"-";L.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ انبار ${Ve(m.name||"")}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 64px; max-width: 220px; }
.company-info h1 { font-size: 19px; margin: 0; color: #0f766e; }
.company-info p { font-size: 12px; color: #555; margin: 2px 0; }
.report-title { text-align: center; margin: 18px 0 12px; }
.report-title h2 { font-size: 22px; margin: 0; color: #0f766e; }
.report-title p { font-size: 12px; color: #666; margin-top: 5px; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
.info-card { border: 1px solid #ddd; border-radius: 8px; padding: 12px 15px; }
.info-card .label { font-size: 11px; color: #6b7280; margin-bottom: 4px; }
.info-card .value { font-size: 14px; font-weight: bold; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ddd; padding: 8px 10px; font-size: 12px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; text-align: center; }
tr:nth-child(even) td { background: #f9fafb; }
tfoot td { background: #ecfdf5 !important; font-weight: bold; }
.summary { display: flex; gap: 20px; margin-top: 20px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 10px; padding: 15px 25px; text-align: center; min-width: 150px; background: #f9fafb; }
.summary-card .label { font-size: 11px; color: #6b7280; }
.summary-card .value { font-size: 20px; font-weight: bold; margin-top: 5px; color: #0f766e; }
.footer { margin-top: 36px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } .print-summary-section { break-inside: avoid; page-break-inside: avoid; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="${_}" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>بازرگانی مهر امین</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۸-۳۳۲۳۶۰۷۲</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${C}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش انبار نمایندگی</h2>
  <p>فهرست کامل کالاهای دارای موجودی ${Ve(m.name||"")}</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام نمایندگی</div>
    <div class="value">${Ve(m.name||"—")}</div>
  </div>
  <div class="info-card">
    <div class="label">کد نمایندگی</div>
    <div class="value">${Ve(m.code||"—")}</div>
  </div>
  <div class="info-card">
    <div class="label">شهر</div>
    <div class="value">${Ve(m.city||"—")}</div>
  </div>
  <div class="info-card">
    <div class="label">شماره تماس</div>
    <div class="value" dir="ltr">${Ve(m.phone||"—")}</div>
  </div>
  <div class="info-card">
    <div class="label">تعداد ردیف‌های دارای موجودی</div>
    <div class="value">${Ne(F?.itemCount??ee.length)}</div>
  </div>
  <div class="info-card">
    <div class="label">آخرین بروزرسانی</div>
    <div class="value">${le}</div>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th style="width:5%;">ردیف</th>
      <th style="width:34%;">عنوان</th>
      <th style="width:13%;">برند</th>
      <th style="width:14%;">دسته‌بندی</th>
      <th style="width:12%;">قیمت</th>
      <th style="width:10%;">تعداد</th>
      <th style="width:12%;">مجموع</th>
    </tr>
  </thead>
  <tbody>
    ${V||'<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:30px;">هیچ کالای دارای موجودی ثبت نشده است.</td></tr>'}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="4" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${Ne(ue)}</strong></td>
        <td></td>
        <td style="text-align:center;"><strong>${Ne(te)} تومان</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد انواع کالا</div>
      <div class="value">${Ne(F?.itemCount??ee.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع قطعات</div>
      <div class="value">${Ne(ue)}</div>
    </div>
    <div class="summary-card">
      <div class="label">ارزش کل انبار</div>
      <div class="value">${Ne(te)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>بازرگانی مهر امین</p>
  </div>
</div>

</body>
</html>`),L.document.close(),L.focus(),setTimeout(()=>{L.print()},800)};(0,a.useEffect)(()=>{const m=new AbortController,v=JSON.parse(c);return(async()=>{if(j(!0),d({}),!v.length){u({}),j(!1);return}const L={},C={},_=Ds(),ee={Accept:"application/json"};_&&(ee.Authorization=`Bearer ${_}`);let V=0;const ue=async()=>{for(;V<v.length&&!m.signal.aborted;){const te=v[V];V+=1;try{const le=await fetch(`${w}/representatives/${encodeURIComponent(te)}/warehouse?_=${Date.now()}`,{method:"GET",credentials:"include",cache:"no-store",headers:ee,signal:m.signal}),oe=await le.text();let ie;try{ie=JSON.parse(oe)}catch{throw new Error(`پاسخ انبار معتبر نیست. کد: ${le.status}`)}if(!le.ok||!ie.success)throw new Error(ie.error||ie.message||`دریافت انبار ناموفق بود. کد: ${le.status}`);if(!Array.isArray(ie.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور موجود نیست.");const be=ie.data.items.filter(me=>tt(me.quantity)>0);L[te]={itemCount:be.length,totalValue:be.reduce((me,R)=>me+tt(R.quantity)*tt(R.unitPrice),0),items:be,updatedAt:ie.data?.updatedAt}}catch(le){if(m.signal.aborted)return;C[te]=le instanceof Error?le.message:"دریافت موجودی ناموفق بود."}}};await Promise.all(Array.from({length:Math.min(4,v.length)},()=>ue())),m.signal.aborted||(u(L),d(C),j(!1))})(),()=>{m.abort()}},[w,c,$,k]);const I=(0,a.useMemo)(()=>{const m=As(o);return h.filter(v=>{const F=v.status!=="inactive",L=n==="all"||(n==="active"?F:!F),C=!m||[v.name,v.code,v.city,v.phone].some(_=>As(_).includes(m));return L&&C})},[h,o,n]),f=(0,a.useMemo)(()=>h.reduce((m,v)=>{const F=i[String(v.id)];return F?{itemCount:m.itemCount+F.itemCount,totalValue:m.totalValue+F.totalValue}:m},{itemCount:0,totalValue:0}),[h,i]),A=h.filter(m=>m.status!=="inactive").length,B=Object.keys(p).length,D=!N&&B>0,W=m=>{const v=m.status!=="inactive";return(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${v?"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`,children:[(0,e.jsx)(we,{className:"h-3.5 w-3.5"}),v?"فعال":"غیرفعال"]})},K=m=>{if(N)return(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"در حال دریافت..."});if(p[m]||!i[m])return(0,e.jsx)("span",{className:"text-xs text-red-600",children:"نامشخص"});const v=i[m].itemCount;return(0,e.jsx)("span",{className:`inline-flex rounded-full px-2.5 py-1 text-xs font-black ${v>0?"bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`,children:v>0?`${dr(v)} نوع کالا`:"بدون موجودی"})},S=m=>N?"در حال دریافت...":p[m]||!i[m]?"نامشخص":`${dr(i[m].totalValue)} تومان`,z=(m,v)=>(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>r(m),className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white hover:from-cyan-700 hover:to-blue-700",children:[(0,e.jsx)(It,{className:"h-4 w-4"}),"ورود به انبار"]}),v?(0,e.jsxs)("button",{type:"button",onClick:()=>T(v),className:"inline-flex min-h-10 items-center justify-center gap-1 rounded-xl border border-cyan-600 px-3 py-2 text-xs font-black text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/20",title:"چاپ لیست کالاهای این انبار",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ انبار"]}):null]}),y=m=>N?"...":D?"نامشخص":dr(m);return(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(It,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl",children:"انبار نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط کالاهای دارای موجودی در انبار شمارش می‌شوند؛ ردیف‌های ثبت‌نشدهٔ اکسل در این تعداد حساب نمی‌شوند."})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:U,disabled:N,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[N?(0,e.jsx)(xe,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(qe,{className:"h-4 w-4"}),"بروزرسانی موجودی"]}),(0,e.jsxs)("button",{type:"button",onClick:H,disabled:N||!I.length,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50",title:"چاپ لیست خلاصهٔ همهٔ انبارها",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ کلی"]})]})]})}),B>0&&!N?(0,e.jsxs)("section",{role:"alert",className:"rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(Le,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsxs)("p",{children:["موجودی ",dr(B)," نماینده دریافت نشد. مجموع کل تا دریافت اطلاعات همهٔ انبارها نمایش داده نمی‌شود."]})]}),h.filter(m=>p[String(m.id)]).map(m=>(0,e.jsxs)("p",{className:"mt-2 break-words",children:[m.name||"نماینده",":"," ",p[String(m.id)]]},String(m.id)))]}):null,(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"نمایندگان فعال"}),(0,e.jsx)(we,{className:"h-5 w-5 text-green-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-green-900 dark:text-green-100",children:dr(A)})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد کالاهای دارای موجودی"}),(0,e.jsx)(pt,{className:"h-5 w-5 text-blue-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-blue-900 dark:text-blue-100",children:y(f.itemCount)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-blue-700 dark:text-blue-300",children:"مجموع ردیف‌های دارای موجودی در انبارها"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-900/50 dark:bg-purple-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع نمایندگان"}),(0,e.jsx)(xt,{className:"h-5 w-5 text-purple-600"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-xl font-black text-purple-900 dark:text-purple-100",children:y(f.totalValue)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-purple-700 dark:text-purple-300",children:"تومان"})]})]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"لیست انبارهای نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"تعداد کالا، تعداد ردیف‌های دارای موجودی در انبار است؛ نه تعداد قطعات و نه تعداد ردیف‌های فایل اکسل."}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]",children:[(0,e.jsxs)("select",{value:n,onChange:m=>g(m.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("option",{value:"all",children:"همه نمایندگان"}),(0,e.jsx)("option",{value:"active",children:"نمایندگان فعال"}),(0,e.jsx)("option",{value:"inactive",children:"نمایندگان غیرفعال"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ht,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:o,onChange:m=>b(m.target.value),placeholder:"جست‌وجوی نام، کد، شهر یا شماره",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"})]})]}),(0,e.jsx)("div",{className:"mt-5 space-y-3 lg:hidden",children:I.map(m=>{const v=String(m.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black text-gray-800 dark:text-gray-100",children:m.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 text-right text-xs text-gray-500",children:m.phone||"شماره ثبت نشده"})]}),W(m)]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:m.code||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:m.city||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"mb-2 text-blue-700 dark:text-blue-300",children:"کالاهای دارای موجودی"}),K(v)]}),(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-2 break-words font-black text-purple-900 dark:text-purple-100",children:S(v)})]})]}),(0,e.jsx)("div",{className:"mt-4",children:z(v,m)})]},v)})}),(0,e.jsx)("div",{className:"mt-5 hidden lg:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[22%] p-3",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"کد"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"شهر"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"کالاهای دارای موجودی"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[14%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:I.map(m=>{const v=String(m.id);return(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-100 text-lg",children:m.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 break-all text-right text-gray-500",children:m.phone||"شماره ثبت نشده"})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:m.code||"-"}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:m.city||"-"}),(0,e.jsx)("td",{className:"p-3",children:W(m)}),(0,e.jsx)("td",{className:"p-3",children:K(v)}),(0,e.jsx)("td",{className:"break-words p-3 font-bold text-gray-800 dark:text-gray-100",children:S(v)}),(0,e.jsx)("td",{className:"p-3",children:z(v,m)})]},v)})})]})}),I.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(It,{className:"mx-auto h-10 w-10 text-gray-400"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:h.length?"نماینده‌ای با این مشخصات پیدا نشد.":"هنوز نماینده‌ای ثبت نشده است."})]})]})]})},Ti=()=>{const t=localStorage.getItem("token")||sessionStorage.getItem("token");return{"Content-Type":"application/json",Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},Ri=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],ga=["عنوان","نام","عنوان","عنوان","کالا","محصول","Name","name","Product","product"],Ts=["برند","نام برند","Brand","brand"],Rs=["دسته‌بندی","دسته بندی","دسته","گروه","گروه کالا","Category","category"],ua=["تعداد","تعداد کالا","تعداد موجودی","تعداد محصول","تعداد","موجودی","موجودی کالا","موجودی انبار","مقدار","تعداد/موجودی","Qty","QTY","quantity","Quantity","stock","Stock","count","Count"],ba=["قیمت","قیمت","قیمت کالا","قیمت محصول","مبلغ","قیمت","Price","price","unitPrice","Unit Price"],Tn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Wr=t=>Tn(t).replace(/\u200c/g," ").replace(/[\u200e\u200f]/g,"").replace(/\u00a0/g," ").replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/ـ/g,"").replace(/\s+/g," ").trim().toLowerCase(),Ot=t=>Wr(t).replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim(),Gt=t=>{const r=Tn(t).replace(/[,٬،\s]/g,"").replace(/٫/g,".").replace(/[^\d.-]/g,"");if(!r)return 0;const s=Number(r);return Number.isFinite(s)?s:0},he=t=>Gt(t).toLocaleString("fa-IR"),Ei=t=>{if(!t)return"-";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Pi=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},zi=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const o of t){const b=s.getItem(o);if(b&&b!=="null"&&b!=="undefined"){const n=b.replace(/^Bearer\s+/i,"").trim();if(n)return n}}for(const o of r){const b=s.getItem(o);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},zr=(t=!1)=>{const r=zi();return{Accept:"application/json",...t?{"Content-Type":"application/json"}:{},...r?{Authorization:`Bearer ${r}`}:{}}},Mr=async t=>{const r=await t.text();if(!r)throw new Error(`پاسخ سرور خالی است. کد: ${t.status}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ بک‌اند معتبر نیست. کد: ${t.status}`)}},Fr=(t,r,s)=>r.error||r.message?r.error||r.message||s:t.status===401?"ابتدا وارد حساب ادمین شوید.":t.status===403?"این حساب اجازه انجام این عملیات را ندارد.":`${s} کد: ${t.status}`,cr=(t,r)=>{const s=r.map(Ot);for(const[o,b]of Object.entries(t))if(s.includes(Ot(o))&&b!==void 0&&b!==null&&String(b).trim()!=="")return b;return""},ya=(t,r)=>{const s=r.map(Ot);return Object.keys(t[0]||{}).some(o=>s.includes(Ot(o)))},fa=t=>Math.max(0,Gt(t.quantity))*Math.max(0,Gt(t.unitPrice)),Mi=t=>{switch(t){case"ready":return"معتبر";case"empty_name":return"نام خالی";case"invalid_qty":return"تعداد نامعتبر";case"invalid_price":return"قیمت نامعتبر"}},Fi=({representative:t,apiUrl:r,onBack:s,onWarehouseChanged:o})=>{const[b,n]=(0,a.useState)([]),[g,i]=(0,a.useState)([]),[u,p]=(0,a.useState)(!0),[d,N]=(0,a.useState)(!1),[j,k]=(0,a.useState)(!1),[x,h]=(0,a.useState)(""),[w,c]=(0,a.useState)(""),[$,U]=(0,a.useState)(!1),[P,O]=(0,a.useState)([]),[H,T]=(0,a.useState)(""),[I,f]=(0,a.useState)(""),[A,B]=(0,a.useState)(""),[D,W]=(0,a.useState)(""),[K,S]=(0,a.useState)(""),[z,y]=(0,a.useState)(null),m=(0,a.useRef)(!1),v=(0,a.useRef)(!1),F=(0,a.useRef)(0),L=(0,a.useRef)(!0),C=`${Pi(r)}/representatives/${encodeURIComponent(String(t.id))}/warehouse`;(0,a.useEffect)(()=>(L.current=!0,()=>{L.current=!1,F.current+=1}),[]);const _=(0,a.useCallback)(async()=>{const M=++F.current;p(!0);try{const Y=await fetch(`${C}?_=${Date.now()}`,{method:"GET",cache:"no-store",credentials:"include",headers:zr()}),ae=await Mr(Y);if(!Y.ok||!ae.success)throw new Error(Fr(Y,ae,"دریافت انبار ناموفق بود."));if(!Array.isArray(ae.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور وجود ندارد.");return L.current&&M===F.current&&(n(ae.data.items),i(Array.isArray(ae.data.movements)?ae.data.movements:[])),!0}catch(Y){return L.current&&M===F.current&&c(Y instanceof Error?Y.message:"خطا در دریافت انبار."),!1}finally{L.current&&M===F.current&&p(!1)}},[C]);(0,a.useEffect)(()=>{n([]),i([]),h(""),c(""),y(null),O([]),U(!1),T(""),f(""),B(""),W(""),S(""),_()},[_]);const ee=async()=>{try{await o()}catch(M){console.error("خطا در بروزرسانی صفحه والد:",M),L.current&&c(Y=>[Y,"عملیات انبار انجام شد، اما بروزرسانی لیست نمایندگان ناموفق بود."].filter(Boolean).join(" "))}},V=(0,a.useMemo)(()=>b.filter(M=>Gt(M.quantity)>0),[b]),ue=V.length,te=(0,a.useMemo)(()=>V.reduce((M,Y)=>M+fa(Y),0),[V]),le=(0,a.useMemo)(()=>[...g].sort((M,Y)=>new Date(Y.createdAt||0).getTime()-new Date(M.createdAt||0).getTime()).slice(0,8),[g]),oe=(0,a.useMemo)(()=>[...new Set(V.map(M=>String(M.brand||"").trim()).filter(Boolean))].sort((M,Y)=>M.localeCompare(Y,"fa")),[V]),ie=(0,a.useMemo)(()=>[...new Set([...Ri,...V.map(M=>String(M.category||"").trim()).filter(Boolean)])].sort((M,Y)=>M.localeCompare(Y,"fa")),[V]),be=(0,a.useMemo)(()=>{const M=Wr(A);return V.filter(Y=>{const ae=Wr(Y.productName),fe=String(Y.brand||"").trim(),Ie=String(Y.category||"").trim();return(!M||ae.includes(M)||Wr(fe).includes(M))&&(!D||Ie===D)&&(!K||fe===K)})},[V,A,D,K]),me=(0,a.useMemo)(()=>P.filter(M=>M.status==="ready"),[P]),R=(0,a.useMemo)(()=>me.reduce((M,Y)=>M+Y.qty,0),[me]),Q=(0,a.useMemo)(()=>me.reduce((M,Y)=>M+Y.qty*Y.price,0),[me]),X=(0,a.useMemo)(()=>{if(!z)return[];const M=z.validationErrors?.map(Y=>({...Y,status:"invalid"}))||[];return z.rowResults?.length?[...z.rowResults.filter(Y=>(Y.remainingQuantity??Y.rejectedQuantity??0)>0||Y.status==="invalid"||Y.status==="budget_exceeded"),...M]:z.rejectedItems?.length?[...z.rejectedItems,...M]:M},[z]),l=async M=>{if(!(m.current||u||j)&&window.confirm(`کالای «${M.productName}» با تمام موجودی و گردش‌های مرتبط حذف شود؟`)){m.current=!0,N(!0),h(""),c(""),y(null);try{const Y=await fetch(`${C}/items/${encodeURIComponent(String(M.id))}`,{method:"DELETE",credentials:"include",headers:zr()}),ae=await Mr(Y);if(!Y.ok||!ae.success)throw new Error(Fr(Y,ae,"حذف کالا ناموفق بود."));n(fe=>fe.filter(Ie=>String(Ie.id)!==String(M.id))),M.productId&&i(fe=>fe.filter(Ie=>String(Ie.productId)!==String(M.productId))),h(ae.message||`کالای «${M.productName}» حذف شد.`),await _(),await ee()}catch(Y){c(Y instanceof Error?Y.message:"حذف کالا ناموفق بود."),await _()}finally{m.current=!1,L.current&&N(!1)}}},E=async()=>{if(!(m.current||u||j)&&window.confirm(`تمام کالاها، گردش‌ها و سابقه فایل‌های انبار «${t.name||"نماینده"}» حذف شود؟ این عملیات قابل بازگشت نیست.`)){m.current=!0,N(!0),h(""),c(""),y(null);try{const M=await fetch(C,{method:"DELETE",credentials:"include",headers:zr()}),Y=await Mr(M);if(!M.ok||!Y.success)throw new Error(Fr(M,Y,"حذف کل موجودی ناموفق بود."));n([]),i([]),O([]),U(!1),T(""),f(""),B(""),W(""),S(""),h(Y.message||"کل موجودی انبار حذف شد."),await _(),await ee()}catch(M){c(M instanceof Error?M.message:"حذف کل موجودی ناموفق بود."),await _()}finally{m.current=!1,L.current&&N(!1)}}},J=async M=>{const Y=M.currentTarget,ae=Y.files?.[0];if(Y.value="",!(!ae||m.current||v.current)){v.current=!0,k(!0),h(""),c(""),y(null),O([]),U(!1),T(""),f("");try{const fe=await ae.arrayBuffer(),Ie=gn(fe,{type:"array"}),Te=Ie.SheetNames[0];if(!Te)throw new Error("هیچ شیتی در فایل اکسل پیدا نشد.");const Tt=Ie.Sheets[Te],Se=hn.sheet_to_json(Tt,{header:1,defval:"",raw:!0,blankrows:!1}),Sr=[...ga,...Ts,...Rs,...ua,...ba].map(Ot),tr=Se.findIndex(Re=>Array.isArray(Re)&&Re.some(ze=>ze!=null&&String(ze).trim()!==""&&Sr.includes(Ot(ze))));if(tr<0)throw new Error("هیچ سطری شامل عنوان ستون‌های شناخته‌شده پیدا نشد. لطفاً یک سطر شامل «عنوان»، «تعداد» و «قیمت» داشته باشید.");const We=(Se[tr]||[]).map((Re,ze)=>Ot(Re)||`column_${ze}`),it=Se.slice(tr+1).filter(Re=>Array.isArray(Re)&&Re.some(ze=>ze!=null&&String(ze).trim()!=="")).map(Re=>{const ze={};return We.forEach((_t,Bt)=>{ze[_t]=Re[Bt]??""}),ze});if(!it.length)throw new Error("فایل اکسل خالی است.");if(it.length>5e3)throw new Error("فایل نباید بیشتر از ۵۰۰۰ ردیف داشته باشد.");const Rt=Object.keys(it[0]).join(" | ");if(!ya(it,ga))throw new Error(`ستون عنوان پیدا نشد. ستون‌ها: ${Rt}`);if(!ya(it,ua))throw new Error(`ستون تعداد پیدا نشد. ستون‌ها: ${Rt}`);if(!ya(it,ba))throw new Error(`ستون قیمت پیدا نشد. ستون‌ها: ${Rt}`);const Cr=it.map((Re,ze)=>{const _t=String(cr(Re,ga)).trim(),Bt=String(cr(Re,Ts)).trim(),aa=String(cr(Re,Rs)).trim(),Wt=Gt(cr(Re,ua)),rr=Gt(cr(Re,ba));let Vt="ready";return _t?!Number.isSafeInteger(Wt)||Wt<=0?Vt="invalid_qty":(rr<=0||!Number.isFinite(Wt*rr))&&(Vt="invalid_price"):Vt="empty_name",{rowIndex:ze+2,excelName:_t||"(خالی)",brand:Bt,category:aa,qty:Wt,price:rr,status:Vt}});O(Cr),T(ae.name),f(`${ae.name}-${ae.size}-${ae.lastModified}`),U(!0),h(`فایل «${ae.name}» خوانده شد. ثبت نهایی و سقف مالی پس از ارسال به سرور بررسی می‌شود.`)}catch(fe){c(fe instanceof Error?fe.message:"پردازش فایل اکسل ناموفق بود.")}finally{v.current=!1,L.current&&k(!1)}}},ce=async()=>{if(me.length)try{await fetch(`${C}/update-info`,{method:"POST",headers:Ti(),body:JSON.stringify({items:me.map(M=>({name:M.excelName,brand:M.brand,category:M.category,unitPrice:M.unitPrice}))})})}catch{}},ge=async()=>{if(await ce(),!(m.current||j||u)){if(!me.length){c("هیچ ردیف معتبری برای ثبت وجود ندارد.");return}if(!I){c("شناسه فایل موجود نیست؛ فایل را دوباره انتخاب کنید.");return}m.current=!0,N(!0),h(""),c(""),y(null);try{const M=await fetch(`${C}/import`,{method:"POST",cache:"no-store",credentials:"include",headers:zr(!0),body:JSON.stringify({fileName:H,requestId:I,items:me.map(Se=>({name:Se.excelName,brand:Se.brand,category:Se.category,quantity:Se.qty,unitPrice:Se.price,rowIndex:Se.rowIndex}))})}),Y=await Mr(M);if(y(Y.data||null),!M.ok||!Y.success){c(Fr(M,Y,"ثبت اکسل ناموفق بود.")),await _(),await ee();return}const ae=Y.data,fe=ae?.acceptedRowsCount??ae?.importedCount,Ie=ae?.acceptedQuantity,Te=ae?.rejectedQuantity,Tt=[fe!==void 0?`${he(fe)} ردیف پذیرفته شد.`:"سرور ثبت فایل را تأیید کرد.",Ie!==void 0?`${he(Ie)} قطعه در این درخواست ثبت شد.`:"",Te!==void 0&&Te>0?`${he(Te)} قطعه به دلیل سقف مالی مجاز اضافه نشد.`:""].filter(Boolean);h(Y.message||Tt.join(" ")),(Y.warning||ae?.summarySaved===!1)&&c(Y.warning||"کالاها ثبت شدند، اما خلاصه نماینده بروزرسانی نشد."),ae?.completed===!1||(ae?.rejectedQuantity??0)>0||(ae?.rejectedRowsCount??0)>0||(U(!1),O([]),T(""),f("")),await _(),await ee()}catch(M){c(M instanceof Error?M.message:"ثبت اکسل ناموفق بود.")}finally{m.current=!1,L.current&&N(!1)}}},ye=()=>{m.current||j||(U(!1),O([]),T(""),f(""))},De=d||j||u;return u&&!b.length?(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 px-3 py-8",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(xe,{className:"mx-auto mb-3 h-8 w-8 animate-spin text-blue-600"}),(0,e.jsxs)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:["در حال دریافت انبار"," ",t.name||"نماینده","..."]})]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:d,className:"rounded-xl bg-gray-900 px-5 py-3 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]}):(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 overflow-x-hidden pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(It,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h2",{className:"break-words text-lg font-black text-gray-800 dark:text-gray-100",children:["انبار ",t.name||"نماینده"]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400",children:[(0,e.jsxs)("span",{children:["کد: ",t.code||"-"]}),(0,e.jsxs)("span",{children:["شهر: ",t.city||"-"]})]})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,e.jsxs)("button",{type:"button",disabled:De,onClick:()=>{c(""),_()},className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[u?(0,e.jsx)(xe,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(qe,{className:"h-4 w-4"}),"بروزرسانی"]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:d||j,className:"min-h-11 rounded-xl bg-gray-900 px-4 py-2 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]})]})}),x?(0,e.jsxs)("div",{role:"status",className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-xs font-bold leading-6 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300",children:[(0,e.jsx)(we,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:x})]}):null,w?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsx)(Le,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:w})]}):null,(0,e.jsxs)("section",{className:"grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_300px]",children:[(0,e.jsxs)("div",{className:"grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد نوع کالاهای دارای موجودی"}),(0,e.jsx)(pt,{className:"h-5 w-5 text-blue-500"})]}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-blue-900 dark:text-blue-100",children:he(ue)}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-blue-700 dark:text-blue-300",children:"تعداد ردیف‌های دارای موجودی؛ نه جمع تعداد قطعات و نه ردیف‌های ثبت‌نشدهٔ اکسل"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"مجموع موجودی انبار"}),(0,e.jsx)(xt,{className:"h-5 w-5 text-green-500"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-2xl font-black text-green-900 dark:text-green-100",children:he(te)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-green-700 dark:text-green-300",children:"تومان"})]})]}),(0,e.jsxs)("aside",{className:"min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"آخرین گردش‌ها"}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:he(le.length)})]}),(0,e.jsxs)("div",{className:"max-h-[280px] space-y-2 overflow-y-auto p-3",children:[le.map(M=>{const Y=M.type==="in";return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsx)("p",{className:"min-w-0 break-words text-xs font-bold text-gray-800 dark:text-gray-200",children:M.productName}),(0,e.jsxs)("span",{className:`shrink-0 rounded px-2 py-1 text-xs font-black ${Y?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:[Y?"+":"-",he(M.quantity)]})]}),(0,e.jsxs)("div",{className:"mt-2 flex items-center justify-between gap-2",children:[(0,e.jsxs)("span",{className:"flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300",children:[(0,e.jsx)(cl,{className:`h-3 w-3 ${Y?"text-green-600":"rotate-180 text-orange-600"}`}),Y?"ورود":"خروج"]}),(0,e.jsx)("span",{className:"text-[10px] text-gray-500",children:Ei(M.createdAt)})]})]},M.id)}),le.length?null:(0,e.jsxs)("div",{className:"py-8 text-center",children:[(0,e.jsx)(ll,{className:"mx-auto mb-2 h-8 w-8 text-gray-300"}),(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"گردشی ثبت نشده است."})]})]})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("label",{className:`flex min-h-14 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-white ${De||$?"cursor-not-allowed bg-gray-400":"cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600"}`,children:[j?(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Nr,{className:"h-5 w-5"}),j?"در حال خواندن فایل...":d?"در حال انجام عملیات...":"ارسال بار؛ آپلود اکسل",(0,e.jsx)("input",{type:"file",accept:".xlsx,.xls",onChange:J,disabled:De||$,className:"hidden"})]}),$&&P.length>0?(0,e.jsxs)("section",{className:"rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-base font-black text-blue-900 dark:text-blue-100",children:[(0,e.jsx)($t,{className:"h-5 w-5 shrink-0"}),"پیش‌نمایش فایل"]}),(0,e.jsx)("p",{className:"mt-2 break-words text-xs text-gray-600 dark:text-gray-300",children:H})]}),(0,e.jsx)("button",{type:"button",onClick:ye,disabled:d,"aria-label":"بستن پیش‌نمایش",className:"rounded-lg p-1 text-red-500 disabled:opacity-50",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2 text-xs",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های فایل:"," ",he(P.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های معتبر:"," ",he(me.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["تعداد درخواستی:"," ",he(R)," قطعه"]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["مبلغ درخواستی:"," ",he(Q)," تومان"]})]}),(0,e.jsx)("p",{className:"mt-3 text-xs leading-6 text-blue-800 dark:text-blue-200",children:"وضعیت «معتبر» فقط نام، تعداد و قیمت را تأیید می‌کند. سقف مالی و سابقه ثبت فایل هنگام ارسال به سرور بررسی می‌شوند."}),(0,e.jsx)("div",{className:"mt-4 max-h-[360px] overflow-y-auto rounded-xl border border-gray-200",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[8%] p-2",children:"ردیف"}),(0,e.jsx)("th",{className:"w-[26%] p-2",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[15%] p-2",children:"برند"}),(0,e.jsx)("th",{className:"w-[17%] p-2",children:"دسته"}),(0,e.jsx)("th",{className:"w-[13%] p-2",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[9%] p-2",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[12%] p-2",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:P.map(M=>(0,e.jsxs)("tr",{className:M.status==="ready"?"bg-green-50 text-gray-800 dark:bg-green-900/10 dark:text-gray-200":"bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200",children:[(0,e.jsx)("td",{className:"break-words p-2",children:he(M.rowIndex)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:M.excelName}),(0,e.jsx)("td",{className:"break-words p-2",children:M.brand||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:M.category||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:he(M.price)}),(0,e.jsx)("td",{className:"break-words p-2",children:he(M.qty)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:Mi(M.status)})]},M.rowIndex))})]})}),(0,e.jsxs)("div",{className:"mt-4 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{ge()},disabled:De||!me.length,className:"min-h-11 flex-1 rounded-xl bg-green-600 px-5 py-3 text-sm font-black text-white disabled:opacity-50",children:d?"در حال بررسی و ثبت...":"بررسی سقف مالی و ثبت ردیف‌های معتبر"}),(0,e.jsx)("button",{type:"button",onClick:ye,disabled:d,className:"min-h-11 rounded-xl bg-gray-200 px-5 py-3 text-sm font-bold text-gray-700 disabled:opacity-50",children:"بستن پیش‌نمایش"})]})]}):null,z?(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("h3",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"نتیجه واقعی درخواست ثبت"}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"ردیف‌های پذیرفته‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-green-900 dark:text-green-100",children:z.acceptedRowsCount!==void 0||z.importedCount!==void 0?he(z.acceptedRowsCount??z.importedCount):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-300",children:"قطعات ثبت‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-blue-900 dark:text-blue-100",children:z.acceptedQuantity!==void 0?he(z.acceptedQuantity):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-orange-50 p-3 dark:bg-orange-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-orange-700 dark:text-orange-300",children:"قطعات ثبت‌نشده یا باقی‌مانده"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-orange-900 dark:text-orange-100",children:z.rejectedQuantity!==void 0?he(z.rejectedQuantity):"گزارش نشده"})]})]}),(z.completed===!1||(z.rejectedQuantity??0)>0)&&$?(0,e.jsx)("p",{className:"mt-4 rounded-xl bg-orange-50 p-3 text-xs leading-6 text-orange-800 dark:bg-orange-900/20 dark:text-orange-200",children:"بخشی از فایل باقی مانده است. پس از افزایش سقف مؤثر مالی در صفحه نماینده، می‌توانی همین پیش‌نمایش را دوباره ارسال کنی. بک‌اندِ دارای ثبت مرحله‌ای، فقط تعداد باقی‌مانده را ثبت می‌کند."}):null,X.length>0?(0,e.jsx)("div",{className:"mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/10",children:(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(Le,{className:"mt-1 h-5 w-5 shrink-0 text-orange-600 dark:text-orange-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"text-sm font-black text-orange-800 dark:text-orange-200",children:"بعضی از کالاها ثبت نشدند"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-orange-700 dark:text-orange-300",children:"به دلیل سقف مالی مجاز، بخشی از کالاهای این فایل اضافه نشدند. فقط کالاهایی که ثبت شده‌اند در موجودی انبار نمایش داده می‌شوند."})]})]})}):null]}):null]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"موجودی واقعی انبار نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط ردیف‌هایی که موجودی بیشتر از صفر دارند در این جدول و کارت تعداد محاسبه می‌شوند."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",children:[he(be.length)," از ",he(ue)," نوع کالا"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{E()},disabled:De||!b.length&&!g.length,className:"flex min-h-10 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف کل موجودی"]})]})]}),(0,e.jsxs)("div",{className:"my-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ht,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:A,onChange:M=>B(M.target.value),placeholder:"جست‌وجوی نام یا برند",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:D,onChange:M=>W(M.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),ie.map(M=>(0,e.jsx)("option",{value:M,children:M},M))]}),(0,e.jsxs)("select",{value:K,onChange:M=>S(M.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),oe.map(M=>(0,e.jsx)("option",{value:M,children:M},M))]})]}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:be.map(M=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:M.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-600 dark:text-purple-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:M.brand||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-blue-600 dark:text-blue-300",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-2 font-black text-gray-800 dark:text-gray-100",children:[he(M.quantity)," عدد"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:M.category||"—"})]}),(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:(0,e.jsxs)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:[he(M.unitPrice)," تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"مجموع این کالا"}),(0,e.jsxs)("p",{className:"mt-2 break-words text-sm font-black text-green-900 dark:text-green-100",children:[he(fa(M))," تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{l(M)},disabled:De,className:"mt-3 flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-red-100 px-3 py-2 text-xs font-bold text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف کالا"]})]},M.id))}),(0,e.jsx)("div",{className:"hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-center text-[6px] lg:text-sm",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700  dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[30%] p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"w-[20%] p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:be.map(M=>(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:[M.productName,(0,e.jsxs)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:["برند: ",M.brand||"—"]})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:M.category||"—"}),(0,e.jsx)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:he(M.quantity)}),(0,e.jsxs)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:[he(M.unitPrice),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsxs)("td",{className:"break-words p-3 font-black text-green-700 dark:text-green-300",children:[he(fa(M)),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsx)("td",{className:"p-3",children:(0,e.jsx)("button",{type:"button",onClick:()=>{l(M)},disabled:De,"aria-label":`حذف ${M.productName}`,className:"inline-flex items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})})]},M.id))})]})}),be.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(un,{className:"mx-auto mb-3 h-12 w-12 text-gray-300"}),(0,e.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:V.length?"کالایی با این فیلتر پیدا نشد.":"کالای دارای موجودی ثبت نشده است."})]})]})]})},Es="https://myshop-backend-8nu7.onrender.com/api",Ps=[{id:"warranty",title:"درخواست گارانتی",subtitle:"ثبت مشکل کالا و پیگیری خدمات گارانتی",icon:Ba,gradient:"from-sky-500/15 to-cyan-500/5",iconColor:"text-sky-600 dark:text-sky-300"},{id:"business-card",title:"کارت ویزیت",subtitle:"درخواست طراحی یا چاپ کارت ویزیت",icon:kn,gradient:"from-violet-500/15 to-fuchsia-500/5",iconColor:"text-violet-600 dark:text-violet-300"},{id:"banner",title:"طراحی بنر",subtitle:"ثبت سفارش طراحی بنر تبلیغاتی",icon:sl,gradient:"from-pink-500/15 to-rose-500/5",iconColor:"text-pink-600 dark:text-pink-300"},{id:"new-shipment",title:"بار جدید",subtitle:"درخواست هماهنگی برای بار جدید",icon:zl,gradient:"from-amber-500/15 to-orange-500/5",iconColor:"text-amber-600 dark:text-amber-300"},{id:"visit",title:"بازدید",subtitle:"درخواست بازدید یا هماهنگی حضوری",icon:Ha,gradient:"from-emerald-500/15 to-teal-500/5",iconColor:"text-emerald-600 dark:text-emerald-300"},{id:"urgent-call",title:"تماس فوری",subtitle:"درخواست تماس سریع از تیم پشتیبانی",icon:nl,gradient:"from-red-500/15 to-rose-500/5",iconColor:"text-red-600 dark:text-red-300"},{id:"meeting",title:"رزرو زمان جلسه",subtitle:"پیشنهاد زمان برای جلسه با مجموعه",icon:lt,gradient:"from-indigo-500/15 to-blue-500/5",iconColor:"text-indigo-600 dark:text-indigo-300"}],Li={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},zs={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function Ms(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function Fs(){const t=localStorage.getItem("token")||sessionStorage.getItem("token");if(!t)throw new Error("نشست شما موجود نیست. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`}}function qi(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}var Ui=()=>{const[t,r]=(0,a.useState)(null),[s,o]=(0,a.useState)(""),[b,n]=(0,a.useState)(""),[g,i]=(0,a.useState)(""),[u,p]=(0,a.useState)([]),[d,N]=(0,a.useState)(!0),[j,k]=(0,a.useState)(!1),[x,h]=(0,a.useState)(""),[w,c]=(0,a.useState)(""),$=(0,a.useRef)(null);(0,a.useEffect)(()=>{let O=!1;async function H(){try{const T=await fetch(`${Es}/support-requests/mine`,{headers:Fs()}),I=await T.json().catch(()=>null);if(!T.ok)throw new Error(I?.error||I?.message||"دریافت درخواست‌ها ناموفق بود.");const f=I?.data??I;if(!Array.isArray(f))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");O||p(f)}catch(T){O||h(Ms(T))}finally{O||N(!1)}}return H(),()=>{O=!0}},[]);const U=O=>{r(O),o(""),n(""),i(""),h(""),c(""),setTimeout(()=>{$.current?.scrollIntoView({behavior:"smooth",block:"start"})},100)},P=async O=>{if(O.preventDefault(),!(!t||j)){k(!0),h(""),c("");try{const H=await fetch(`${Es}/support-requests`,{method:"POST",headers:{...Fs(),"Content-Type":"application/json"},body:JSON.stringify({type:t.id,subject:s.trim(),description:b.trim(),preferredTime:g.trim()})}),T=await H.json().catch(()=>null);if(!H.ok)throw new Error(T?.error||T?.message||"ثبت درخواست ناموفق بود.");const I=T?.data??T;if(!I?.id)throw new Error("پاسخ ثبت درخواست معتبر نیست.");p(f=>[I,...f]),r(null),c("درخواست شما ثبت شد و در انتظار رسیدگی است.")}catch(H){h(Ms(H))}finally{k(!1)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-full space-y-8 text-slate-900 dark:text-white",children:[(0,e.jsxs)("header",{className:"overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-xl dark:border-cyan-500/20 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30 sm:p-8",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:[(0,e.jsx)("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10",children:(0,e.jsx)(Ha,{className:"h-7 w-7 text-cyan-700 dark:text-cyan-300"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-cyan-700 dark:text-cyan-300",children:"همراه شما هستیم"}),(0,e.jsx)("h1",{className:"mt-1 text-2xl font-black sm:text-3xl",children:"مرکز پشتیبانی نمایندگان"})]})]}),(0,e.jsx)("p",{className:"mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300",children:"موضوع موردنظرتان را انتخاب کنید، توضیحات را بنویسید و وضعیت درخواست را از همین صفحه دنبال کنید."})]}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),x&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",children:x}),(0,e.jsxs)("section",{"aria-labelledby":"support-categories",children:[(0,e.jsx)("h2",{id:"support-categories",className:"mb-4 text-lg font-bold",children:"چه کمکی نیاز دارید؟"}),(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:Ps.map(O=>{const H=O.icon;return(0,e.jsxs)("article",{className:`group flex min-h-52 flex-col rounded-2xl border border-slate-200 bg-gradient-to-br ${O.gradient} bg-white p-5 text-right shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 dark:border-white/10 dark:bg-slate-900`,children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between",children:[(0,e.jsx)("span",{className:"flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-900/60",children:(0,e.jsx)(H,{className:`h-6 w-6 ${O.iconColor}`})}),(0,e.jsx)(Ma,{className:"h-5 w-5 text-slate-500 transition group-hover:-translate-x-1 group-hover:text-cyan-500 dark:text-slate-400"})]}),(0,e.jsx)("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:O.title}),(0,e.jsx)("p",{className:"mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300",children:O.subtitle}),(0,e.jsxs)("button",{type:"button",onClick:()=>U(O),className:"mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400",children:["ثبت درخواست",(0,e.jsx)(Ma,{className:"h-4 w-4"})]})]},O.id)})})]}),t&&(0,e.jsxs)("section",{ref:$,"aria-labelledby":"support-form-title",className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-cyan-500/25 dark:bg-slate-900 sm:p-7",children:[(0,e.jsxs)("div",{className:"mb-6 flex items-center justify-between gap-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs text-cyan-700 dark:text-cyan-300",children:"ثبت درخواست جدید"}),(0,e.jsx)("h2",{id:"support-form-title",className:"mt-1 text-xl font-bold",children:t.title})]}),(0,e.jsx)("button",{type:"button",onClick:()=>r(null),className:"rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white","aria-label":"بستن فرم",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsxs)("form",{onSubmit:P,className:"space-y-5",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"عنوان درخواست"}),(0,e.jsx)("input",{value:s,onChange:O=>o(O.target.value),required:!0,maxLength:120,placeholder:"عنوان کوتاه و مشخص بنویسید",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"توضیحات"}),(0,e.jsx)("textarea",{value:b,onChange:O=>n(O.target.value),required:!0,maxLength:2e3,rows:5,placeholder:"جزئیاتی که به رسیدگی کمک می‌کند بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),t.id==="meeting"&&(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"زمان پیشنهادی جلسه"}),(0,e.jsx)("input",{value:g,onChange:O=>i(O.target.value),required:!0,maxLength:120,placeholder:"مثلاً شنبه ساعت ۱۰ تا ۱۲",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("button",{type:"submit",disabled:j,className:"inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60",children:[j?(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Wa,{className:"h-5 w-5"}),j?"در حال ثبت...":"ارسال درخواست"]})]})]}),(0,e.jsxs)("section",{"aria-labelledby":"my-requests",children:[(0,e.jsx)("h2",{id:"my-requests",className:"mb-4 text-lg font-bold",children:"درخواست‌های من"}),d?(0,e.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"در حال دریافت درخواست‌ها..."}):u.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"هنوز درخواستی ثبت نکرده‌اید."}):(0,e.jsx)("div",{className:"space-y-3",children:u.map(O=>(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Ps.find(H=>H.id===O.type)?.title||"درخواست پشتیبانی"}),(0,e.jsx)("h3",{className:"mt-1 font-bold",children:O.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${zs[O.status]||zs.pending}`,children:Li[O.status]||O.status})]}),(0,e.jsx)("p",{className:"mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300",children:O.description}),O.adminNote&&(0,e.jsxs)("div",{className:"mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-500/20 dark:bg-cyan-500/10",children:[(0,e.jsx)("p",{className:"mb-1 text-xs font-bold text-cyan-800 dark:text-cyan-300",children:"پاسخ پشتیبانی"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap text-sm leading-7 text-slate-800 dark:text-slate-200",children:O.adminNote})]}),(0,e.jsx)("p",{className:"mt-3 text-xs text-slate-500 dark:text-slate-400",children:qi(O.createdAt)})]},O.id))})]})]})},Oi="https://myshop-backend-8nu7.onrender.com/api",Ls={warranty:"درخواست گارانتی","business-card":"کارت ویزیت",banner:"طراحی بنر","new-shipment":"بار جدید",visit:"بازدید","urgent-call":"تماس فوری",meeting:"رزرو زمان جلسه"},ja={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},_i={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function qs(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function Bi(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}async function Us(t,r={}){const s=localStorage.getItem("token")||sessionStorage.getItem("token");if(!s)throw new Error("نشست شما منقضی شده است. دوباره وارد شوید.");const o=await fetch(`${Oi}${t}`,{...r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,...r.headers}}),b=await o.json().catch(()=>null);if(!o.ok)throw new Error(b?.error||b?.message||"ارتباط با سرور ناموفق بود.");return b?.data??b}function Wi(){const[t,r]=(0,a.useState)([]),[s,o]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,i]=(0,a.useState)("all"),[u,p]=(0,a.useState)("all"),[d,N]=(0,a.useState)(""),[j,k]=(0,a.useState)({}),[x,h]=(0,a.useState)(""),[w,c]=(0,a.useState)(""),$=(0,a.useCallback)(async()=>{o(!0),h("");try{const T=await Us("/admin/support-requests");if(!Array.isArray(T))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");r(T),k(Object.fromEntries(T.map(I=>[I.id,{status:I.status,adminNote:I.adminNote||""}])))}catch(T){h(qs(T))}finally{o(!1)}},[]);(0,a.useEffect)(()=>{$()},[$]);const U=(0,a.useMemo)(()=>{const T=d.trim().toLocaleLowerCase();return t.filter(I=>{const f=g==="all"||I.status===g,A=u==="all"||I.type===u,B=!T||[I.subject,I.description,I.representativeId,I.representativeName||""].join(" ").toLocaleLowerCase().includes(T);return f&&A&&B})},[t,d,g,u]),P=(0,a.useMemo)(()=>({pending:t.filter(T=>T.status==="pending").length,inProgress:t.filter(T=>T.status==="in-progress").length,resolved:t.filter(T=>T.status==="resolved").length,rejected:t.filter(T=>T.status==="rejected").length}),[t]),O=(T,I)=>{k(f=>({...f,[T]:{...f[T],...I}}))},H=async T=>{const I=j[T.id];if(!(!I||b)){n(T.id),h(""),c("");try{const f=await Us(`/admin/support-requests/${encodeURIComponent(T.id)}`,{method:"PATCH",body:JSON.stringify({status:I.status,adminNote:I.adminNote.trim()})});r(A=>A.map(B=>B.id===T.id?f:B)),k(A=>({...A,[T.id]:{status:f.status,adminNote:f.adminNote||""}})),c("درخواست با موفقیت به‌روزرسانی شد.")}catch(f){h(qs(f))}finally{n(null)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6 text-slate-900 dark:text-white",children:[(0,e.jsx)("section",{className:"rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-sm dark:border-slate-700 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-center gap-4",children:[(0,e.jsx)("span",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Ha,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-xl font-black sm:text-2xl",children:"رسیدگی به درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-300",children:"درخواست‌های پشتیبانی نمایندگان را بررسی و پیگیری کنید."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void $(),disabled:s,className:"inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})}),(0,e.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-4",children:[{label:"در انتظار",value:P.pending,icon:vr,tone:"text-amber-600 dark:text-amber-300"},{label:"در حال رسیدگی",value:P.inProgress,icon:ml,tone:"text-blue-600 dark:text-blue-300"},{label:"رسیدگی‌شده",value:P.resolved,icon:we,tone:"text-emerald-600 dark:text-emerald-300"},{label:"ردشده",value:P.rejected,icon:nt,tone:"text-rose-600 dark:text-rose-300"}].map(T=>{const I=T.icon;return(0,e.jsxs)("div",{className:"flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(I,{className:`h-6 w-6 ${T.tone}`}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:T.label}),(0,e.jsx)("p",{className:"text-2xl font-black",children:T.value})]})]},T.label)})}),x&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200",children:x}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),(0,e.jsxs)("section",{className:"grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1fr_180px_180px]",children:[(0,e.jsxs)("label",{className:"relative block",children:[(0,e.jsx)(ht,{className:"pointer-events-none absolute right-3 top-3 h-5 w-5 text-slate-400"}),(0,e.jsx)("input",{value:d,onChange:T=>N(T.target.value),placeholder:"جست‌وجو در عنوان، توضیحات یا نام نماینده",className:"w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-3 pr-10 text-sm text-slate-900 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("select",{"aria-label":"فیلتر وضعیت",value:g,onChange:T=>i(T.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ وضعیت‌ها"}),Object.entries(ja).map(([T,I])=>(0,e.jsx)("option",{value:T,children:I},T))]}),(0,e.jsxs)("select",{"aria-label":"فیلتر نوع درخواست",value:u,onChange:T=>p(T.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ موضوع‌ها"}),Object.entries(Ls).map(([T,I])=>(0,e.jsx)("option",{value:T,children:I},T))]})]}),s?(0,e.jsxs)("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-300",children:[(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}),"در حال دریافت درخواست‌ها..."]}):U.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"درخواستی مطابق فیلترها پیدا نشد."}):(0,e.jsx)("div",{className:"space-y-4",children:U.map(T=>{const I=j[T.id]??{status:T.status,adminNote:T.adminNote||""};return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Ls[T.type]||T.type}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-bold",children:T.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${_i[T.status]}`,children:ja[T.status]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500 dark:text-slate-400",children:[(0,e.jsxs)("span",{children:["نماینده:"," ",T.representativeName||T.representativeId]}),(0,e.jsxs)("span",{children:["ثبت:"," ",Bi(T.createdAt)]}),T.preferredTime&&(0,e.jsxs)("span",{children:["زمان پیشنهادی:"," ",T.preferredTime]})]}),(0,e.jsx)("p",{className:"mt-4 whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:T.description}),(0,e.jsxs)("div",{className:"mt-5 grid gap-4 md:grid-cols-[180px_1fr_auto] md:items-end",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"وضعیت رسیدگی"}),(0,e.jsx)("select",{value:I.status,onChange:f=>O(T.id,{status:f.target.value}),className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800",children:Object.entries(ja).map(([f,A])=>(0,e.jsx)("option",{value:f,children:A},f))})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"پاسخ یا یادداشت برای نماینده"}),(0,e.jsx)("textarea",{value:I.adminNote,onChange:f=>O(T.id,{adminNote:f.target.value}),rows:2,maxLength:2e3,placeholder:"پاسخ یا توضیح پیگیری را بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void H(T),disabled:b!==null,className:"inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 text-sm font-bold text-white transition hover:bg-cyan-500 disabled:opacity-50",children:[b===T.id&&(0,e.jsx)(xe,{className:"h-4 w-4 animate-spin"}),"ذخیرهٔ تغییرات"]})]})]},T.id)})})]})}var Vi=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),xr=t=>{const r=Vi(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Rn=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),mr=t=>`${Rn(t)} تومان`,Qi={indigo:"border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300",cyan:"border-cyan-100 bg-cyan-50 text-cyan-700 dark:border-cyan-900/40 dark:bg-cyan-950/30 dark:text-cyan-300",emerald:"border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300",amber:"border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-300",violet:"border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900/40 dark:bg-violet-950/30 dark:text-violet-300",rose:"border-rose-100 bg-rose-50 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300",blue:"border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300",orange:"border-orange-100 bg-orange-50 text-orange-700 dark:border-orange-900/40 dark:bg-orange-950/30 dark:text-orange-300"},Ji=({title:t,value:r,icon:s,color:o})=>(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-7 -top-7 h-20 w-20 rounded-full bg-current opacity-[0.04] blur-2xl"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:"mt-3 truncate text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:r})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${Qi[o]}`,children:(0,e.jsx)(s,{className:"h-6 w-6"})})]})]}),Hi=({fullName:t="—",territory:r="—",creditAmount:s=0,inventoryItemCount:o=0,inventoryValue:b=0,salesLast10Days:n=0,salesInAllowedDays:g=0})=>{const i=xr(s),u=xr(o),p=xr(b),d=i-p,N=d<0?"rose":"emerald",j=(d<0,"مانده اعتباری"),k=xr(n),x=xr(g),h=[{title:"نام و نام خانوادگی",value:t||"—",icon:At,color:"indigo"},{title:"محدوده نمایندگی",value:r||"—",icon:Il,color:"cyan"},{title:"مبلغ اعتبار",value:mr(i),icon:dl,color:"emerald"},{title:"تعداد در انبار",value:`${Rn(u)} قلم`,icon:ra,color:"amber"},{title:"مبلغ اقلام انبار",value:mr(p),icon:bn,color:"violet"},{title:j,value:mr(Math.abs(d)),icon:xt,color:N},{title:"فروش ۱۰ روز گذشته",value:mr(k),icon:Kr,color:"blue"},{title:"فروش ۳ روز مجاز ماه",value:mr(x),icon:lt,color:"orange"}];return(0,e.jsx)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:h.map(w=>(0,e.jsx)(Ji,{title:w.title,value:w.value,icon:w.icon,color:w.color},w.title))})},En=pn(Xn(),1);function Ga(){const[t,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{const g=()=>{r(typeof window<"u"&&(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]);const s=(g,i)=>`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<title>${i}</title>
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  html, body {
    font-family: 'Vazirmatn', Tahoma, Arial, sans-serif !important;
    direction: rtl;
    padding: 15px;
    background: #ffffff !important;
    color: #111827;
    width: 100%;
    max-width: 100%;
    visibility: visible !important;
    opacity: 1 !important;
    display: block !important;
  }
  /* همه عناصر قابل مشاهده باشند */
  body * {
    visibility: visible !important;
    opacity: 1 !important;
  }
  table {
    width: 100% !important;
    max-width: 100% !important;
    border-collapse: collapse;
    margin: 10px 0;
    table-layout: fixed;
    display: table !important;
  }
  thead, tbody, tfoot {
    display: table-row-group !important;
  }
  tr {
    display: table-row !important;
    page-break-inside: avoid;
    page-break-after: auto;
  }
  th, td {
    border: 1px solid #6b7280;
    padding: 6px 8px;
    text-align: right;
    font-size: 11px;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    display: table-cell !important;
    visibility: visible !important;
  }
  th {
    background: #f3f4f6 !important;
    font-weight: bold;
    color: #111827;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 8px 0;
    color: #111827;
    display: block !important;
  }
  p, span, div {
    display: block !important;
    color: #111827;
  }
  p {
    margin: 4px 0;
  }
  /* اطمینان از نمایش همه چیز */
  .no-print, .no-print * {
    display: none !important;
  }
  @media print {
    @page {
      size: A4 portrait;
      margin: 8mm;
    }
    html, body {
      padding: 0 !important;
      margin: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
      visibility: visible !important;
      opacity: 1 !important;
    }
    body * {
      visibility: visible !important;
      opacity: 1 !important;
    }
    table {
      page-break-inside: auto;
    }
    tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }
    thead {
      display: table-header-group;
    }
  }
</style>
</head>
<body>
${g}
</body>
</html>`,o=(g,i)=>{const u=document.getElementById("print-iframe");u&&u.parentNode&&document.body.removeChild(u);const p=document.createElement("iframe");p.id="print-iframe",p.style.position="fixed",p.style.right="0",p.style.bottom="0",p.style.width="0",p.style.height="0",p.style.border="0",p.style.overflow="hidden",p.setAttribute("aria-hidden","true"),p.title=i,document.body.appendChild(p);const d=p.contentWindow?.document||p.contentDocument;if(!d){console.error("نتوانستم به iframe دسترسی پیدا کنم"),p.parentNode&&document.body.removeChild(p);return}d.open(),d.write(s(g,i)),d.close();const N=()=>{try{p.contentWindow?.focus(),setTimeout(()=>{try{p.contentWindow?.print()}catch(j){console.error("خطا در چاپ:",j)}setTimeout(()=>{p.parentNode&&document.body.removeChild(p)},1e3)},300)}catch(j){console.error("خطا در چاپ:",j),p.parentNode&&document.body.removeChild(p)}};p.contentWindow?.document?.readyState==="complete"?N():(p.onload=N,setTimeout(()=>{p.parentNode&&p.contentWindow?.document?.readyState==="complete"&&N()},2e3))};return{printContent:(g,i="چاپ")=>{setTimeout(()=>{let u=document.getElementById(g);if(u||(u=document.querySelector(`.${g}`)),u||(u=document.querySelector(`[data-print="${g}"]`)),!u){console.warn("محتوای چاپ پیدا نشد با:",g),window.print();return}const p=u.outerHTML;o(p,i)},200)},printHTML:(g,i="چاپ")=>{o(g,i)},isMobile:t}}var br=t=>{const r=String(t??"").replace(/[۰-۹]/g,o=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(o))).replace(/[٠-٩]/g,o=>String("٠١٢٣٤٥٦٧٨٩".indexOf(o))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ot=t=>new Intl.NumberFormat("fa-IR").format(br(t)),Ki=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,""),Os=t=>t.totalPrice!==void 0?br(t.totalPrice):br(t.quantity)*br(t.unitPrice),Ze=(t,r)=>String(t??"").trim()||r,Yi=({items:t,settings:r,representativeName:s,representativeCity:o,representativePhone:b,representativeAddress:n,filterDescription:g,onClose:i})=>{const{printContent:u,isMobile:p}=Ga(),d=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),N=(0,a.useMemo)(()=>d.reduce((w,c)=>w+br(c.quantity),0),[d]),j=(0,a.useMemo)(()=>d.reduce((w,c)=>w+Os(c),0),[d]);if((0,a.useEffect)(()=>{if(typeof i!="function")return;const w=()=>{i()};window.addEventListener("afterprint",w);const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("afterprint",w),document.body.style.overflow=c}},[i]),typeof document>"u")return null;const k=/^#[0-9a-fA-F]{6}$/.test(r.primaryColor)?r.primaryColor:"#111827",x=()=>{i?.()},h=(0,e.jsxs)("div",{id:"inventory-print-root",dir:"rtl",style:{"--inventory-primary":k},children:[(0,e.jsx)("style",{children:`
        #inventory-print-root {
          position: fixed;
          inset: 0;
          z-index: 99999;
          width: 100vw;
          height: 100vh;
          max-width: 100vw;
          overflow-x: hidden;
          overflow-y: auto;
          background: rgba(0, 0, 0, 0.5);
          color: #111827;
          font-family: Tahoma, Arial, sans-serif;
        }



        #inventory-print-root,
        #inventory-print-root * {
          box-sizing: border-box;
        }



        #inventory-print-root .inventory-print-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: min(1100px, calc(100% - 24px));
          max-width: calc(100% - 24px);
          margin: 18px auto 0;
          padding: 14px 18px;
          border: 1px solid #e5e7eb;
          border-radius: 14px 14px 0 0;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 10;
        }



        #inventory-print-root .inventory-print-toolbar h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-toolbar p {
          margin: 4px 0 0;
          color: #6b7280;
          font-size: 11px;
        }



        #inventory-print-root .inventory-print-actions {
          display: flex;
          flex-shrink: 0;
          gap: 8px;
        }



        #inventory-print-root button {
          border: 0;
          border-radius: 8px;
          cursor: pointer;
          padding: 9px 16px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 900;
          transition: opacity 0.2s;
        }



        #inventory-print-root button:hover {
          opacity: 0.9;
        }



        #inventory-print-root .inventory-print-close {
          background: #e5e7eb;
          color: #374151;
        }



        #inventory-print-root .inventory-print-button {
          background: var(--inventory-primary);
          color: #ffffff;
        }



        #inventory-print-root .inventory-print-paper {
          width: min(1100px, calc(100% - 24px));
          max-width: calc(100% - 24px);
          min-height: 900px;
          margin: 0 auto 18px;
          padding: 28px;
          overflow: hidden;
          border-radius: 0 0 14px 14px;
          background: #ffffff;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }



        #inventory-print-root .inventory-print-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
          padding-bottom: 14px;
          border-bottom: 3px solid var(--inventory-primary);
        }



        #inventory-print-root .inventory-print-company {
          display: flex;
          align-items: center;
          min-width: 0;
          gap: 10px;
        }



        #inventory-print-root .inventory-print-logo-box {
          display: flex;
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid #9ca3af;
          border-radius: 8px;
          background: #ffffff;
        }



        #inventory-print-root .inventory-print-logo {
          display: block;
          width: auto;
          height: auto;
          max-width: 48px;
          max-height: 48px;
          object-fit: contain;
        }



        #inventory-print-root .inventory-print-logo-fallback {
          display: flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--inventory-primary);
          color: #ffffff;
          font-size: 18pt;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-company h1 {
          margin: 0 0 3px;
          font-size: 15pt;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-company p {
          margin: 0;
          color: #4b5563;
          font-size: 8pt;
        }



        #inventory-print-root .inventory-print-title {
          flex: 1;
          min-width: 0;
          text-align: center;
        }



        #inventory-print-root .inventory-print-title span {
          display: block;
          margin-bottom: 3px;
          color: var(--inventory-primary);
          font-size: 8pt;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-title h2 {
          margin: 0;
          font-size: 18pt;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-title p {
          margin: 5px 0 0;
          color: #4b5563;
          font-size: 8pt;
        }



        #inventory-print-root .inventory-print-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          width: 100%;
          max-width: 100%;
          margin: 14px 0;
        }



        #inventory-print-root .inventory-print-meta-box {
          min-width: 0;
          padding: 8px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
          font-size: 8pt;
        }



        #inventory-print-root .inventory-print-info-box {
          display: block;
          padding: 10px;
        }



        #inventory-print-root .inventory-print-info-title {
          margin: 0 0 6px;
          padding-bottom: 5px;
          border-bottom: 1px solid #d1d5db;
          color: var(--inventory-primary);
          font-size: 9pt;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-info-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-top: 4px;
          font-size: 8pt;
        }



        #inventory-print-root .inventory-print-info-row span {
          flex-shrink: 0;
          color: #6b7280;
        }



        #inventory-print-root .inventory-print-info-row strong {
          max-width: 65%;
          color: #111827;
          font-weight: 900;
          text-align: left;
          overflow-wrap: anywhere;
          word-break: break-word;
        }



        #inventory-print-root .inventory-print-table-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          overflow-y: visible;
        }



        #inventory-print-root .inventory-print-table {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          border-collapse: collapse;
          table-layout: fixed;
          direction: rtl;
          font-size: 9pt;
        }



        #inventory-print-root .inventory-print-table th,
        #inventory-print-root .inventory-print-table td {
          max-width: 0;
          border: 1px solid #6b7280;
          padding: 6px 4px;
          text-align: right;
          vertical-align: middle;
          line-height: 1.5;
          overflow-wrap: anywhere;
          word-break: break-word;
        }



        #inventory-print-root .inventory-print-table th {
          background: #e5e7eb;
          text-align: center;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-table td.center {
          text-align: center;
          white-space: normal;
        }



        #inventory-print-root .inventory-print-table td.money {
          text-align: center;
          white-space: normal;
        }



        #inventory-print-root .inventory-print-table td.title {
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-total-table {
          margin-top: 10px;
        }



        #inventory-print-root .inventory-print-total-table td {
          background: #e5e7eb;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          width: 100%;
          max-width: 100%;
          margin-top: 14px;
        }



        #inventory-print-root .inventory-print-summary-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          min-width: 0;
          padding: 9px;
          border: 1px solid #9ca3af;
          font-size: 8pt;
        }



        #inventory-print-root .inventory-print-summary-box span {
          color: #6b7280;
        }



        #inventory-print-root .inventory-print-summary-box strong {
          max-width: 65%;
          white-space: normal;
          overflow-wrap: anywhere;
          word-break: break-word;
          text-align: left;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: 100%;
          max-width: 100%;
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px solid #9ca3af;
          color: #4b5563;
          font-size: 8pt;
        }



        #inventory-print-root .inventory-print-footer p {
          max-width: 100%;
          margin: 0;
          overflow-wrap: anywhere;
          word-break: break-word;
        }



        @media (max-width: 700px) {
          #inventory-print-root {
            width: 100vw;
            max-width: 100vw;
            overflow-x: hidden;
          }



          #inventory-print-root .inventory-print-toolbar {
            align-items: stretch;
            flex-direction: column;
            width: calc(100% - 16px);
            max-width: calc(100% - 16px);
            margin-top: 8px;
            padding: 12px;
          }



          #inventory-print-root .inventory-print-actions {
            width: 100%;
            max-width: 100%;
          }



          #inventory-print-root .inventory-print-actions button {
            flex: 1 1 0;
            min-width: 0;
          }



          #inventory-print-root .inventory-print-paper {
            width: calc(100% - 16px);
            max-width: calc(100% - 16px);
            min-width: 0;
            min-height: auto;
            margin-bottom: 8px;
            padding: 14px;
            overflow: hidden;
            border-radius: 0 0 12px 12px;
          }



          #inventory-print-root .inventory-print-header {
            align-items: stretch;
            flex-direction: column;
            gap: 14px;
          }



          #inventory-print-root .inventory-print-company {
            width: 100%;
            max-width: 100%;
          }



          #inventory-print-root .inventory-print-title {
            width: 100%;
            max-width: 100%;
            text-align: right;
          }



          #inventory-print-root .inventory-print-title h2 {
            font-size: 16pt;
            overflow-wrap: anywhere;
            word-break: break-word;
          }



          #inventory-print-root .inventory-print-meta {
            grid-template-columns: 1fr;
            width: 100%;
            max-width: 100%;
            gap: 7px;
          }



          #inventory-print-root .inventory-print-meta-box {
            width: 100%;
            max-width: 100%;
            min-width: 0;
            overflow: hidden;
          }



          #inventory-print-root .inventory-print-table-wrapper {
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
          }



          #inventory-print-root .inventory-print-table {
            width: 100%;
            max-width: 100%;
            min-width: 0 !important;
            table-layout: fixed;
            font-size: 10px;
          }



          #inventory-print-root .inventory-print-table th,
          #inventory-print-root .inventory-print-table td {
            max-width: 0;
            padding: 6px 3px;
            line-height: 1.45;
            overflow-wrap: anywhere;
            word-break: break-word;
          }



          #inventory-print-root .inventory-print-table th {
            font-size: 9px;
            white-space: normal;
          }



          #inventory-print-root .inventory-print-table td.center,
          #inventory-print-root .inventory-print-table td.money {
            white-space: normal;
            text-align: center;
          }



          #inventory-print-root .inventory-print-table td.title {
            font-size: 10px;
            font-weight: 900;
          }



          #inventory-print-root .inventory-print-summary {
            grid-template-columns: 1fr;
            width: 100%;
            max-width: 100%;
            gap: 7px;
          }



          #inventory-print-root .inventory-print-summary-box {
            width: 100%;
            max-width: 100%;
            min-height: 40px;
            font-size: 11px;
          }



          #inventory-print-root .inventory-print-summary-box strong {
            max-width: 58%;
          }



          #inventory-print-root .inventory-print-footer {
            align-items: stretch;
            flex-direction: column;
            width: 100%;
            max-width: 100%;
            gap: 8px;
            font-size: 10px;
          }
        }



        @media print {
          @page {
            size: A4 landscape;
            margin: 10mm;
          }



          html,
          body {
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            background: #ffffff !important;
          }



          body > * {
            display: none !important;
          }



          body > #inventory-print-root {
            display: block !important;
          }



          #inventory-print-root {
            position: static !important;
            inset: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            min-height: 0 !important;
            height: auto !important;
            overflow: visible !important;
            background: #ffffff !important;
            display: block !important;
          }



          #inventory-print-root .inventory-print-toolbar {
            display: none !important;
          }



          #inventory-print-root .inventory-print-paper {
            width: 100% !important;
            max-width: 100% !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }



          #inventory-print-root .inventory-print-table-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            overflow: visible !important;
          }



          #inventory-print-root .inventory-print-table {
            display: table !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            table-layout: fixed !important;
            font-size: 8.5pt !important;
          }



          #inventory-print-root .inventory-print-table thead {
            display: table-header-group !important;
          }



          #inventory-print-root .inventory-print-table tbody {
            display: table-row-group !important;
          }



          #inventory-print-root .inventory-print-table tr {
            display: table-row !important;
            margin: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }



          #inventory-print-root .inventory-print-table th,
          #inventory-print-root .inventory-print-table td {
            display: table-cell !important;
            width: auto !important;
            min-height: 0 !important;
            max-width: none !important;
            border: 1px solid #6b7280 !important;
            padding: 6px 4px !important;
            background: #ffffff !important;
            text-align: right !important;
            overflow-wrap: anywhere !important;
          }



          #inventory-print-root .inventory-print-table thead th {
            background: #e5e7eb !important;
            text-align: center !important;
          }



          #inventory-print-root .inventory-print-total-table {
            display: table !important;
            width: 100% !important;
            margin-top: 10px !important;
          }



          #inventory-print-root .inventory-print-total-table td {
            background: #e5e7eb !important;
            font-weight: 900 !important;
          }



          #inventory-print-root .inventory-print-summary {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            width: 100% !important;
          }



          #inventory-print-root .inventory-print-footer {
            display: flex !important;
            flex-direction: row !important;
            width: 100% !important;
          }
        }
      `}),(0,e.jsxs)("div",{className:"inventory-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش موجودی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{className:"inventory-print-actions",children:[(0,e.jsx)("button",{type:"button",className:"inventory-print-close",onClick:w=>{w.preventDefault(),w.stopPropagation(),x()},children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"inventory-print-button",onClick:()=>{u("inventory-print-root","چاپ موجودی انبار")},children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"inventory-print-paper",children:[(0,e.jsxs)("header",{className:"inventory-print-header",children:[(0,e.jsxs)("div",{className:"inventory-print-company",children:[(0,e.jsx)("div",{className:"inventory-print-logo-box",children:(r.companyLogoSrc,(0,e.jsx)("img",{src:r.companyLogoSrc||"../company-logo.png",alt:"لوگوی شرکت",className:"inventory-print-logo"}))}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:Ze(s,r.companyName)}),(0,e.jsx)("p",{children:Ze(r.companyTagline,"سامانه مدیریت نمایندگی و انبار")})]})]}),(0,e.jsxs)("div",{className:"inventory-print-title",children:[(0,e.jsx)("span",{children:"گزارش رسمی موجودی"}),(0,e.jsx)("h2",{children:Ze(r.reportTitle,"گزارش موجودی انبار نمایندگی")}),(0,e.jsxs)("p",{children:[s||"گزارش کلی موجودی انبار",o?` — ${o}`:""]})]})]}),(0,e.jsxs)("section",{className:"inventory-print-meta",children:[(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Ki()})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"بازرگانی مهر امین"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"028-33236072"})]})]}),(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:Ze(s,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن:"}),(0,e.jsx)("strong",{children:Ze(b,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس نمایندگی:"}),(0,e.jsx)("strong",{children:Ze(n,"—")})]})]})]}),(0,e.jsxs)("div",{className:"inventory-print-table-wrapper",children:[(0,e.jsxs)("table",{className:"inventory-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"5%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"25%"},children:"عنوان"}),(0,e.jsx)("th",{style:{width:"15%"},children:"برند"}),(0,e.jsx)("th",{style:{width:"15%"},children:"دسته‌بندی"}),(0,e.jsx)("th",{style:{width:"15%"},children:"قیمت"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"15%"},children:"مجموع"})]})}),(0,e.jsx)("tbody",{children:d.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"کالایی برای چاپ وجود ندارد."})}):d.map((w,c)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{className:"center",children:ot(c+1)}),(0,e.jsx)("td",{className:"title",children:Ze(w.title,"بدون عنوان")}),(0,e.jsx)("td",{children:Ze(w.brand,"بدون برند")}),(0,e.jsx)("td",{children:Ze(w.category,"بدون دسته‌بندی")}),(0,e.jsxs)("td",{className:"money",children:[ot(w.unitPrice)," تومان"]}),(0,e.jsxs)("td",{className:"center",children:[ot(w.quantity)," قلم"]}),(0,e.jsxs)("td",{className:"money",children:[ot(Os(w))," تومان"]})]},w.id||`inventory-print-${c}`))})]}),(0,e.jsx)("table",{className:"inventory-print-table inventory-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"55%"},children:"جمع کل انبار"}),(0,e.jsxs)("td",{className:"center",style:{width:"15%"},children:[ot(N)," قلم"]}),(0,e.jsx)("td",{className:"center",style:{width:"15%"},children:"—"}),(0,e.jsxs)("td",{className:"money",style:{width:"15%"},children:[ot(j)," تومان"]})]})})})]}),(0,e.jsxs)("section",{className:"inventory-print-summary",children:[(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد نوع کالا"}),(0,e.jsxs)("strong",{children:[ot(d.length)," کالا"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد کل اقلام"}),(0,e.jsxs)("strong",{children:[ot(N)," قلم"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"مجموع"}),(0,e.jsxs)("strong",{children:[ot(j)," تومان"]})]})]}),(0,e.jsxs)("footer",{className:"inventory-print-footer",children:[(0,e.jsx)("p",{children:Ze(r.footerText,"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.")}),(0,e.jsx)("p",{children:Ze(r.signatureLabel,"امضا و مهر نمایندگی:")})]})]})]});return(0,En.createPortal)(h,document.body)},Xa="inventory-print-template-settings-v2",Pe={companyName:"نام شرکت شما",companyTagline:"سامانه مدیریت نمایندگی و انبار",companyLogoSrc:"../company-logo.png",reportTitle:"گزارش موجودی انبار نمایندگی",footerText:"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.",signatureLabel:"امضا و مهر نمایندگی:",primaryColor:"#111827"},Gi=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],Ue=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),Lt=t=>{const r=String(t??"").replace(/[۰-۹]/g,o=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(o))).replace(/[٠-٩]/g,o=>String("٠١٢٣٤٥٦٧٨٩".indexOf(o))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Fe=t=>String(t??"").trim(),_s=t=>Fe(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/\s+/g," ").toLowerCase(),pr=t=>Fe(t.brand)||"بدون برند",va=t=>Fe(t.category)||"بدون دسته‌بندی",Ua=t=>/^#[0-9a-fA-F]{6}$/.test(Fe(t)),Bs=()=>{try{const t=localStorage.getItem(Xa);if(!t)return Pe;const r=JSON.parse(t);return{companyName:Fe(r.companyName)||Pe.companyName,companyTagline:Fe(r.companyTagline)||Pe.companyTagline,companyLogoSrc:Fe(r.companyLogoSrc)||Pe.companyLogoSrc,reportTitle:Fe(r.reportTitle)||Pe.reportTitle,footerText:Fe(r.footerText)||Pe.footerText,signatureLabel:Fe(r.signatureLabel)||Pe.signatureLabel,primaryColor:Ua(String(r.primaryColor??""))?String(r.primaryColor):Pe.primaryColor}}catch{return Pe}},Xi=t=>{localStorage.setItem(Xa,JSON.stringify(t))},Lr=t=>t.totalPrice!==void 0?Lt(t.totalPrice):Lt(t.quantity)*Lt(t.unitPrice),Zi=({items:t=[],representativeName:r="",representativeCity:s="",representativePhone:o="",representativeAddress:b=""})=>{const n=Array.isArray(t)?t:[],[g,i]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),[d,N]=(0,a.useState)(""),[j,k]=(0,a.useState)(!1),[x,h]=(0,a.useState)(!1),[w,c]=(0,a.useState)(!1),[$,U]=(0,a.useState)(()=>Bs()),[P,O]=(0,a.useState)(()=>Bs()),H=(0,a.useMemo)(()=>{const C=new Set;return n.forEach(_=>{C.add(pr(_))}),Array.from(C).sort((_,ee)=>_.localeCompare(ee,"fa"))},[n]),T=(0,a.useMemo)(()=>{const C=_s(g);return n.filter(_=>{const ee=Fe(_.title),V=pr(_),ue=va(_),te=_s(`${ee} ${V} ${ue}`);return(!C||te.includes(C))&&(!u||V===u)&&(!d||ue===d)})},[n,g,u,d]),I=n.length,f=n.reduce((C,_)=>C+Lt(_.quantity),0),A=n.reduce((C,_)=>C+Lr(_),0),B=T.reduce((C,_)=>C+Lt(_.quantity),0),D=T.reduce((C,_)=>C+Lr(_),0),W=!!g.trim()||!!u||!!d,K=(0,a.useMemo)(()=>{const C=[];return g.trim()&&C.push(`جست‌وجو: «${g.trim()}»`),u&&C.push(`برند: ${u}`),d&&C.push(`دسته‌بندی: ${d}`),C.length>0?C.join(" | "):"بدون فیلتر"},[g,u,d]),S=()=>{i(""),p(""),N("")},z=()=>{O($),h(!1),k(!1)},y=(C,_)=>{h(!1),O(ee=>({...ee,[C]:_}))},m=()=>{const C=Ua(P.primaryColor)?P.primaryColor:Pe.primaryColor,_={companyName:Fe(P.companyName)||Pe.companyName,companyTagline:Fe(P.companyTagline)||Pe.companyTagline,companyLogoSrc:Fe(P.companyLogoSrc),reportTitle:Fe(P.reportTitle)||Pe.reportTitle,footerText:Fe(P.footerText)||Pe.footerText,signatureLabel:Fe(P.signatureLabel)||Pe.signatureLabel,primaryColor:C};U(_),O(_),Xi(_),h(!0)},v=()=>{window.confirm("آیا تنظیمات قالب چاپ به حالت پیش‌فرض برگردد؟")&&(U(Pe),O(Pe),localStorage.removeItem(Xa),h(!0))},F=()=>{c(!0)},L=()=>{c(!1)};return(0,e.jsxs)("section",{dir:"rtl",className:"inventory-section overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)("div",{className:"border-b border-slate-200 p-5 dark:border-slate-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-slate-700",children:(0,e.jsx)(Nl,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-slate-900 dark:text-white md:text-lg",children:"موجودی انبار نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400",children:"جست‌وجو، فیلتر، تنظیم قالب و چاپ گزارش موجودی."})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تنوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[Ue(I)," کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تعداد کل اقلام"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[Ue(f)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[Ue(A)," تومان"]})]})]})]})}),n.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(fr,{className:"mx-auto h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600 dark:text-slate-300",children:"کالایی در انبار ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-400 dark:text-slate-500",children:"پس از ثبت کالا، جزئیات موجودی در این بخش نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"border-b border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50 md:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 lg:flex-row lg:items-center",children:[(0,e.jsxs)("div",{className:"relative min-w-0 flex-1",children:[(0,e.jsx)(ht,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:g,onChange:C=>i(C.target.value),placeholder:"جست‌وجو بر اساس عنوان، برند یا دسته‌بندی...",className:"min-h-11 w-full rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-slate-800"})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:u,onChange:C=>p(C.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-44",children:[(0,e.jsx)("option",{value:"",children:"همهٔ برندها"}),H.map(C=>(0,e.jsx)("option",{value:C,children:C},C))]}),(0,e.jsx)(hs,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:d,onChange:C=>N(C.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-48",children:[(0,e.jsx)("option",{value:"",children:"همهٔ دسته‌بندی‌ها"}),Gi.map(C=>(0,e.jsx)("option",{value:C,children:C},C))]}),(0,e.jsx)(hs,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),W&&(0,e.jsxs)("button",{type:"button",onClick:S,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(Ae,{className:"h-4 w-4"}),"پاک‌کردن"]}),(0,e.jsxs)("button",{type:"button",onClick:F,disabled:T.length===0,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"پیش‌نمایش و چاپ"]})]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2 text-sm",children:[(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:W?`${Ue(T.length)} کالا از ${Ue(n.length)} کالا پیدا شد.`:`${Ue(n.length)} کالا در انبار موجود است.`}),W&&(0,e.jsxs)("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["تعداد نتایج: ",Ue(B)," قلم · مجموع: ",Ue(D)," تومان"]})]})]}),(0,e.jsx)("div",{className:"p-5",children:T.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(ht,{className:"mx-auto h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600",children:"کالایی با این شرایط پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:S,className:"mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800",children:"پاک‌کردن فیلترها"})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:T.map(C=>{const _=Lt(C.quantity),ee=Lt(C.unitPrice);return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",children:(0,e.jsx)(ra,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-slate-800 dark:text-white",children:C.title||"بدون عنوان"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:pr(C)})]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-indigo-50 p-3 text-center dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-indigo-900 dark:text-indigo-100",children:pr(C)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-amber-900 dark:text-amber-100",children:va(C)})]})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-emerald-900 dark:text-emerald-100",children:Ue(_)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-sky-50 p-3 text-center dark:bg-sky-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-sky-700 dark:text-sky-300",children:"قیمت"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-sky-900 dark:text-sky-100",children:Ue(ee)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-purple-900 dark:text-purple-100",children:Ue(Lr(C))})]})]})]},C.id)})}),(0,e.jsx)("div",{className:"hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block dark:border-slate-700 dark:bg-slate-900",children:(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"w-full min-w-[760px] border-collapse text-center text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("thead",{className:"border-b border-slate-200 bg-gradient-to-l from-slate-50 to-slate-100 text-xs text-slate-600 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300",children:(0,e.jsxs)("tr",{className:"h-14",children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"عنوان"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"برند"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"تعداد"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"قیمت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مجموع"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:T.map(C=>(0,e.jsxs)("tr",{className:"h-16 bg-white transition-colors hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/70",children:[(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 font-black text-slate-800 last:border-l-0 dark:border-slate-800 dark:text-slate-100",children:C.title||"بدون عنوان"}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:pr(C)}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:va(C)}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-5 py-4 font-black text-emerald-700 last:border-l-0 dark:border-slate-800 dark:text-emerald-300",children:[Ue(C.quantity)," ","قلم"]}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-5 py-4 font-semibold text-sky-700 last:border-l-0 dark:border-slate-800 dark:text-sky-300",children:[Ue(C.unitPrice)," ","تومان"]}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-violet-700 dark:text-violet-300",children:[Ue(Lr(C))," ","تومان"]})]},C.id))}),(0,e.jsx)("tfoot",{className:"border-t-2 border-slate-300 bg-gradient-to-l from-slate-50 to-slate-100 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900",children:(0,e.jsxs)("tr",{className:"h-16",children:[(0,e.jsx)("td",{colSpan:3,className:"border-l border-slate-200 px-5 py-4 font-black text-slate-800 last:border-l-0 dark:border-slate-700 dark:text-slate-100",children:W?"جمع نتایج فیلترشده":"جمع کل انبار"}),(0,e.jsxs)("td",{className:"border-l border-slate-200 px-5 py-4 font-black text-emerald-700 last:border-l-0 dark:border-slate-700 dark:text-emerald-300",children:[Ue(B)," ","قلم"]}),(0,e.jsx)("td",{className:"border-l border-slate-200 px-5 py-4 text-slate-400 last:border-l-0 dark:border-slate-700 dark:text-slate-500",children:"—"}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-violet-700 dark:text-violet-300",children:[Ue(D)," ","تومان"]})]})})]})})})]})})]}),w&&(0,e.jsx)(Yi,{items:T,settings:$,representativeName:r,representativeCity:s,representativePhone:o,representativeAddress:b,filterDescription:K,onClose:L}),j&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-700",children:(0,e.jsx)(el,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-900 dark:text-white",children:"شخصی‌سازی قالب چاپ"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:"تنظیمات روی همین مرورگر ذخیره می‌شوند."})]})]}),(0,e.jsx)("button",{type:"button",onClick:z,className:"rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-5 p-4 sm:p-5",children:[x&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-bold text-green-700 dark:border-green-900 dark:bg-green-950/20 dark:text-green-300",children:[(0,e.jsx)(Fa,{className:"h-5 w-5"}),"تنظیمات قالب چاپ ذخیره شد."]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["نام شرکت",(0,e.jsx)("input",{type:"text",value:P.companyName,onChange:C=>y("companyName",C.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["زیرعنوان شرکت",(0,e.jsx)("input",{type:"text",value:P.companyTagline,onChange:C=>y("companyTagline",C.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["مسیر لوگو",(0,e.jsx)("input",{type:"text",dir:"ltr",value:P.companyLogoSrc,onChange:C=>y("companyLogoSrc",C.target.value),placeholder:"../company-logo.png",className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-left text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["عنوان گزارش",(0,e.jsx)("input",{type:"text",value:P.reportTitle,onChange:C=>y("reportTitle",C.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["رنگ اصلی",(0,e.jsx)("input",{type:"color",value:Ua(P.primaryColor)?P.primaryColor:Pe.primaryColor,onChange:C=>y("primaryColor",C.target.value),className:"mt-2 h-11 w-full cursor-pointer rounded-xl border border-slate-300 p-1 dark:border-slate-600"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن پایین گزارش",(0,e.jsx)("textarea",{value:P.footerText,onChange:C=>y("footerText",C.target.value),rows:3,className:"mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن امضا",(0,e.jsx)("input",{type:"text",value:P.signatureLabel,onChange:C=>y("signatureLabel",C.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-col-reverse gap-2 border-t border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:v,className:"min-h-11 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:"بازنشانی پیش‌فرض"}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:z,className:"min-h-11 rounded-xl bg-slate-100 px-4 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:"بستن"}),(0,e.jsxs)("button",{type:"button",onClick:m,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-black text-white dark:bg-slate-700",children:[(0,e.jsx)(Fa,{className:"h-4 w-4"}),"ذخیرهٔ تنظیمات"]})]})]})]})})]})},Za=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],et=t=>{const r=Number(t??0);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},ka=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Ws=t=>t==="pending"?"در انتظار":t==="sent"?"ارسال شده":Za.find(r=>r.value===t)?.label||"نامشخص",eo=t=>t==="pending"?0:t==="sent"?4:Za.findIndex(r=>r.value===t),to=t=>{if(ne.isAxiosError(t)){const r=t.response?.data;return t.response?.status===401?"نشست شما معتبر نیست؛ دوباره وارد حساب نمایندگی شوید.":t.response?.status===403?"دسترسی به این بخش برای حساب شما مجاز نیست.":t.response?.status===404?"مسیر «بارهای من» در بک‌اند هنوز ایجاد نشده است.":r?.error||r?.message||"دریافت بارها ناموفق بود."}return t instanceof Error?t.message:"دریافت بارها ناموفق بود."},ro=({apiUrl:t="https://myshop-backend-8nu7.onrender.com/api",token:r})=>{const[s,o]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[g,i]=(0,a.useState)(""),[u,p]=(0,a.useState)(null),d=t.replace(/\/+$/,""),N=(0,a.useCallback)(async()=>{n(!0),i("");try{const x=await ne.get(`${d}/shipments/my`,{headers:r?{Authorization:`Bearer ${r}`,Accept:"application/json"}:{Accept:"application/json"},withCredentials:!0});if(x.data.success===!1)throw new Error(x.data.error||"دریافت بارها ناموفق بود.");o(Array.isArray(x.data.data)?x.data.data:[])}catch(x){console.error("خطا در دریافت بارهای نماینده:",x),o([]),i(to(x))}finally{n(!1)}},[d,r]);(0,a.useEffect)(()=>{N()},[N]);const j=(0,a.useMemo)(()=>[...s].sort((x,h)=>new Date(h.createdAt||h.updatedAt||0).getTime()-new Date(x.createdAt||x.updatedAt||0).getTime()),[s]),k=(0,a.useMemo)(()=>s.filter(x=>x.status!=="delivered").length,[s]);return b?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(xe,{className:"h-8 w-8 animate-spin text-blue-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:"در حال دریافت بارهای شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-4 border-b border-gray-100 pb-5 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:[(0,e.jsx)(Zt,{className:"h-6 w-6 text-blue-600"}),"بارهای من"]}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت ارسال بارهای مربوط به حساب نمایندگی شما"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void N(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),g?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(Le,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:g})]}):null,g?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"کل بارها"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-blue-900 dark:text-blue-100",children:et(s.length)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"در جریان"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-amber-900 dark:text-amber-100",children:et(k)})]})]}),j.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع بارهای من"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[et(j.length)," حواله · ",et(j.reduce((x,h)=>x+(h.totalItems??h.items?.reduce((w,c)=>w+(c.quantity||0),0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:et(j.reduce((x,h)=>x+(h.totalValue??h.items?.reduce((w,c)=>w+(c.totalPrice??(c.quantity||0)*(c.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),j.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-12 text-center dark:border-gray-700 dark:bg-gray-800/40",children:[(0,e.jsx)(pt,{className:"mx-auto mb-3 h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"font-black text-gray-700 dark:text-gray-200",children:"هنوز باری برای شما ثبت نشده است."})]}):(0,e.jsx)("div",{className:"space-y-4",children:j.map(x=>{const h=String(x.id),w=u===h,c=eo(x.status),$=x.items?.length??x.itemsCount??0,U=x.items?.reduce((P,O)=>P+(Number(O.quantity)||0),0)??x.totalItems??0;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"p-4 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["شماره حواله:"," ",x.shipmentNumber||h]}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-black text-gray-800 dark:text-white",children:"بار ارسالی به نمایندگی شما"})]}),(0,e.jsx)("span",{className:"w-fit rounded-full bg-blue-100 px-3 py-1.5 text-xs font-black text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",children:Ws(x.status)})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:et($)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:et(U)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ارسال"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:x.shipmentDate||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-800 dark:text-white",children:ka(x.createdAt)})]})]}),(0,e.jsx)("div",{"aria-label":"مراحل ارسال بار",className:"mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6",children:Za.map((P,O)=>{const H=O<=c;return(0,e.jsxs)("div",{className:`flex min-h-10 items-center justify-center gap-1 rounded-lg px-2 py-2 text-center text-[10px] font-bold sm:text-xs ${H?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-300"}`,children:[H?(0,e.jsx)(we,{className:"h-3.5 w-3.5 shrink-0"}):(0,e.jsx)(vr,{className:"h-3.5 w-3.5 shrink-0"}),(0,e.jsx)("span",{children:P.label})]},P.value)})}),(0,e.jsxs)("button",{type:"button",onClick:()=>p(w?null:h),"aria-expanded":w,className:"mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 text-sm font-black text-blue-700 transition hover:bg-blue-50 dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300",children:[w?(0,e.jsx)(jl,{className:"h-4 w-4"}):(0,e.jsx)(ta,{className:"h-4 w-4"}),w?"بستن جزئیات":"مشاهدهٔ کالاها و جزئیات"]})]}),w?(0,e.jsxs)("div",{className:"space-y-5 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 text-sm sm:grid-cols-2",children:[(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["گیرنده:"," ",(0,e.jsx)("strong",{children:x.receiver||"—"})]}),(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["انبار مبدأ:"," ",(0,e.jsx)("strong",{children:x.warehouse||"—"})]}),(0,e.jsxs)("p",{className:"flex items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(lt,{className:"h-4 w-4"}),"ثبت:"," ",ka(x.createdAt)]}),(0,e.jsxs)("p",{className:"flex min-w-0 items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(Ka,{className:"h-4 w-4 shrink-0"}),(0,e.jsx)("span",{className:"break-all",children:x.excelFileName||"نام فایل ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(pt,{className:"h-5 w-5"}),"کالاهای این بار"]}),x.items?.length?(0,e.jsxs)("div",{className:"overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700 sm:hidden",children:x.items.map((P,O)=>(0,e.jsxs)("div",{className:"bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:P.productName||"—"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:et(P.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[et(P.unitPrice)," ","تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[P.brand?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",P.brand]}):null,P.category?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",P.category]}):null]})]},String(P.id??O)))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"کالا"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"})]})}),(0,e.jsx)("tbody",{children:x.items.map((P,O)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:P.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:P.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:P.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:et(P.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[et(P.unitPrice)," ","تومان"]})]},String(P.id??O)))})]})})]}):(0,e.jsx)("div",{className:"rounded-xl bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-950/20 dark:text-amber-200",children:"جزئیات اقلام برای این بار موجود نیست. بارهای قدیمی ممکن است فقط نام فایل را ذخیره کرده باشند."})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(Ge,{className:"h-5 w-5"}),"تاریخچهٔ وضعیت"]}),x.statusHistory?.length?(0,e.jsx)("div",{className:"space-y-2",children:x.statusHistory.map((P,O)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 p-3 text-sm dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("p",{className:"font-black",children:P.label||Ws(P.status)}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500",children:ka(P.changedAt||P.createdAt)}),P.note?(0,e.jsx)("p",{className:"mt-2",children:P.note}):null]},`${P.status}-${O}`))}):(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800",children:"تاریخچه‌ای برای این بار ثبت نشده است."})]})]}):null]},h)})})]})]})},Na=t=>new Intl.NumberFormat("fa-IR").format(t||0),ao=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium"}).format(r)},so=({orders:t=[]})=>{const r=Array.isArray(t)?t:[];return(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 border-b border-gray-100 p-5 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(yn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"سفارش‌های اخیر"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"آخرین سفارش‌های ثبت‌شدهٔ شما"})]})]}),(0,e.jsxs)("span",{className:"rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",children:[Na(r.length)," سفارش"]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Gr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"سفارشی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"پس از ثبت سفارش، اطلاعات آن در این بخش نمایش داده می‌شود."})]}):(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.slice(0,5).map(s=>(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between dark:hover:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-gray-300",children:(0,e.jsx)(bn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:s.title||"بدون عنوان"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["تعداد:"," ",Na(Number(s.quantity)||0)," ","قلم"]})]})]}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 sm:block sm:text-left",children:[(0,e.jsxs)("p",{className:"font-black text-emerald-600 dark:text-emerald-400",children:[Na(Number(s.amount)||0)," ","تومان"]}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500",children:ao(s.createdAt)})]})]},s.id))})]})},qt=t=>{const r=String(t??"").replace(/[۰-۹]/g,o=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(o))).replace(/[٠-٩]/g,o=>String("٠١٢٣٤٥٦٧٨٩".indexOf(o))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},jt=t=>new Intl.NumberFormat("fa-IR").format(qt(t)),wa=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r).replace(/[\u200e\u200f]/g,"")},no=t=>String(t.items?.[0]?.productName||t.items?.[0]?.title||"").trim()||String(t.representativeName||"").trim()||"کالای بدون نام",Vs=t=>{const r=qt(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,o)=>s+qt(o.quantity),0)},Qs=t=>{const r=qt(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,o)=>{const b=qt(o.totalPrice);return b>0?s+b:s+qt(o.quantity)*qt(o.unitPrice??o.price)},0)},lo=t=>t==="approved"?"تأیید شده":t==="received"?"دریافت شده":t==="rejected"?"رد شده":t==="reviewing"?"در حال بررسی":"در انتظار بررسی",io=({requests:t,representativeName:r,representativeCity:s,representativePhone:o,onClose:b})=>{const{printContent:n,isMobile:g}=Ga(),i=Array.isArray(t)?t:[],u=i.reduce((d,N)=>d+Vs(N),0),p=i.reduce((d,N)=>d+Qs(N),0);return(0,a.useEffect)(()=>{const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}},[]),typeof document>"u"?null:(0,En.createPortal)((0,e.jsxs)("div",{id:"return-print-root",dir:"rtl",children:[(0,e.jsx)("style",{children:`
        #return-print-root {
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: auto;
          background: rgba(0, 0, 0, 0.55);
          color: #111827;
          font-family: Tahoma, Arial, sans-serif;
        }


        #return-print-root * {
          box-sizing: border-box;
        }


        #return-print-root .return-print-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: min(1000px, calc(100% - 24px));
          margin: 18px auto 0;
          padding: 14px 18px;
          border: 1px solid #e5e7eb;
          border-radius: 14px 14px 0 0;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 10;
        }


        #return-print-root .return-print-toolbar h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 900;
        }


        #return-print-root .return-print-toolbar p {
          margin: 4px 0 0;
          color: #6b7280;
          font-size: 11px;
        }


        #return-print-root button {
          border: 0;
          border-radius: 8px;
          cursor: pointer;
          padding: 9px 16px;
          font: inherit;
          font-size: 12px;
          font-weight: 900;
        }


        #return-print-root .return-print-close {
          background: #e5e7eb;
          color: #374151;
        }


        #return-print-root .return-print-button {
          background: #0f766e;
          color: #ffffff;
        }


        #return-print-root .return-print-paper {
          width: min(1000px, calc(100% - 24px));
          margin: 0 auto 18px;
          padding: 24px;
          background: #ffffff;
          border-radius: 0 0 14px 14px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }


        #return-print-root .return-print-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 12px;
          border-bottom: 3px solid #0f766e;
        }


        #return-print-root .return-print-header h1 {
          margin: 0;
          font-size: 16pt;
          font-weight: 900;
        }


        #return-print-root .return-print-header p {
          margin: 4px 0 0;
          color: #4b5563;
          font-size: 8pt;
        }


        #return-print-root .return-print-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin: 14px 0;
        }


        #return-print-root .return-print-card {
          padding: 10px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
        }


        #return-print-root .return-print-card-title {
          margin: 0 0 6px;
          padding-bottom: 5px;
          border-bottom: 1px solid #d1d5db;
          color: #0f766e;
          font-size: 9pt;
          font-weight: 900;
        }


        #return-print-root .return-print-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-top: 4px;
          font-size: 8pt;
        }


        #return-print-root .return-print-row span {
          flex-shrink: 0;
          color: #6b7280;
        }


        #return-print-root .return-print-row strong {
          max-width: 65%;
          color: #111827;
          font-weight: 900;
          text-align: left;
          overflow-wrap: anywhere;
          word-break: break-word;
        }


        #return-print-root .return-print-table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
          font-size: 9pt;
        }


        #return-print-root .return-print-table th,
        #return-print-root .return-print-table td {
          border: 1px solid #6b7280;
          padding: 6px 4px;
          text-align: right;
          vertical-align: middle;
          overflow-wrap: anywhere;
          word-break: break-word;
        }


        #return-print-root .return-print-table th {
          background: #e5e7eb;
          text-align: center;
          font-weight: 900;
        }


        #return-print-root .return-print-total-table {
          margin-top: 10px;
        }


        #return-print-root .return-print-total-table td {
          background: #e5e7eb;
          font-weight: 900;
        }


        #return-print-root .return-print-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 18px;
          padding-top: 10px;
          border-top: 1px solid #9ca3af;
          color: #4b5563;
          font-size: 8pt;
        }


        @media print {
          @page {
            size: A4 landscape;
            margin: 10mm;
          }


          html,
          body {
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            background: #ffffff !important;
          }


          body > * {
            display: none !important;
          }


          body > #return-print-root {
            display: block !important;
          }


          #return-print-root {
            position: static !important;
            inset: auto !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
            background: #ffffff !important;
          }


          #return-print-root .return-print-toolbar {
            display: none !important;
          }


          #return-print-root .return-print-paper {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }


          #return-print-root .return-print-cards {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
          }


          #return-print-root .return-print-table {
            display: table !important;
            width: 100% !important;
          }


          #return-print-root .return-print-table thead {
            display: table-header-group !important;
          }


          #return-print-root .return-print-table tr {
            display: table-row !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }


          #return-print-root .return-print-table th,
          #return-print-root .return-print-table td {
            display: table-cell !important;
            border: 1px solid #6b7280 !important;
            padding: 6px 4px !important;
          }


          #return-print-root .return-print-total-table {
            display: table !important;
            width: 100% !important;
            margin-top: 10px !important;
          }


          #return-print-root .return-print-total-table td {
            background: #e5e7eb !important;
            font-weight: 900 !important;
          }


          #return-print-root .return-print-footer {
            display: flex !important;
          }
        }
      `}),(0,e.jsxs)("div",{className:"return-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش مرجوعی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("button",{type:"button",className:"return-print-close",onClick:b,children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"return-print-button",onClick:()=>n("return-print-root","چاپ درخواست مرجوعی"),children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"return-print-paper",children:[(0,e.jsxs)("header",{className:"return-print-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:r||"گزارش درخواست‌های مرجوعی"}),(0,e.jsx)("p",{children:s?`شهر: ${s}`:"گزارش درخواست‌های مرجوعی"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:"گزارش مرجوعی"}),(0,e.jsxs)("p",{children:["تاریخ چاپ: ",wa()]})]})]}),(0,e.jsxs)("section",{className:"return-print-cards",children:[(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:wa()})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"بازرگانی مهر امین"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"028-33236072"})]})]}),(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:r||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:s||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن نماینده:"}),(0,e.jsx)("strong",{children:o||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تعداد درخواست:"}),(0,e.jsx)("strong",{children:jt(i.length)})]})]})]}),(0,e.jsxs)("table",{className:"return-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"6%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"26%"},children:"عنوان مرجوعی"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"16%"},children:"مبلغ کل"}),(0,e.jsx)("th",{style:{width:"16%"},children:"تاریخ ثبت"}),(0,e.jsx)("th",{style:{width:"12%"},children:"وضعیت"}),(0,e.jsx)("th",{style:{width:"14%"},children:"توضیحات"})]})}),(0,e.jsx)("tbody",{children:i.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"درخواست مرجوعی برای چاپ وجود ندارد."})}):i.map((d,N)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:jt(N+1)}),(0,e.jsx)("td",{children:no(d)}),(0,e.jsx)("td",{children:jt(Vs(d))}),(0,e.jsxs)("td",{children:[jt(Qs(d))," تومان"]}),(0,e.jsx)("td",{children:d.returnDate||wa(d.createdAt)}),(0,e.jsx)("td",{children:lo(d.status)}),(0,e.jsx)("td",{children:d.adminNote||"—"})]},d.id||N))})]}),(0,e.jsx)("table",{className:"return-print-table return-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل مرجوعی‌ها"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[jt(u)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[jt(p)," تومان"]})]})})}),(0,e.jsxs)("footer",{className:"return-print-footer",children:[(0,e.jsxs)("span",{children:["تعداد کل درخواست‌ها:"," ",jt(i.length)]}),(0,e.jsxs)("span",{children:["مجموع‌ها:"," ",jt(p)," تومان"]})]})]})]}),document.body)},Sa="https://myshop-backend-8nu7.onrender.com/api",Ht={productId:"",title:"",brand:"",category:"",price:"",quantity:"1",confirmedReturn:!1},Xr=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),je=t=>{const r=Number(Xr(t).replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Me=t=>new Intl.NumberFormat("fa-IR").format(je(t)),$e=t=>String(t??"").trim(),yr=t=>Xr(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/\s+/g," ").trim().toLowerCase(),Js=(t,r)=>{const s=yr(t),o=yr(r);return!!(s&&o&&s===o)},oo=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/"),co=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},xo=t=>$e(t.items?.[0]?.productName)||$e(t.items?.[0]?.title)||$e(t.representativeName)||"کالای بدون نام",mo=t=>{const r=je(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,o)=>s+je(o.quantity),0)},Hs=t=>{const r=je(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,o)=>{const b=je(o.totalPrice);return b>0?s+b:s+je(o.quantity)*je(o.unitPrice??o.price)},0)},po=t=>t==="approved"||t==="received"?{label:t==="received"?"دریافت شده":"تأیید شده",type:"approved"}:t==="rejected"?{label:"رد شده",type:"rejected"}:t==="reviewing"?{label:"در حال بررسی",type:"reviewing"}:{label:"در انتظار بررسی",type:"pending"},ho=({requests:t,loading:r,errorMessage:s,onRefresh:o,onRequestCreated:b})=>{const[n,g]=(0,a.useState)(Ht),[i,u]=(0,a.useState)([]),[p,d]=(0,a.useState)([]),[N,j]=(0,a.useState)([]),[k,x]=(0,a.useState)(!1),[h,w]=(0,a.useState)(!0),[c,$]=(0,a.useState)(""),[U,P]=(0,a.useState)(""),[O,H]=(0,a.useState)(!1),[T,I]=(0,a.useState)(""),f=t,A=r||h,B=s||c,D=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),W=R=>R.productName||R.name||R.title||"کالای بدون نام",K=R=>je(R.unitPrice??R.price),S=R=>R?.name||R?.title||"",z=R=>{const Q=yr(R.productId||R.id),X=yr(W(R));return N.find(l=>Js(l.id,Q))||N.find(l=>yr(S(l))===X)},y=(R,Q)=>String(R.productId||R.id||Q),m=(0,a.useMemo)(()=>p.filter(R=>je(R.quantity)>0),[p]),v=()=>m.find((R,Q)=>{const X=y(R,Q),l=z(R),E=String(l?.id||R.productId||R.id||"");return X===n.productId||E===n.productId}),F=()=>{const R=v();if(!R)return"";const Q=m.indexOf(R);return y(R,Q)},L=async()=>{w(!0),$("");try{const[R,Q]=await Promise.all([ne.get(`${Sa}/representative/dashboard`,{headers:D()}),ne.get(`${Sa}/products`,{headers:D()})]);d(Array.isArray(R.data.data?.warehouse?.items)?R.data.data?.warehouse?.items||[]:[]);const X=R.data.data;I($e(X?.representative?.phone)||$e(X?.representative?.phoneNumber)||$e(X?.user?.phone)||$e(X?.user?.phoneNumber)||$e(X?.phone)||$e(X?.phoneNumber)),j(Array.isArray(Q.data.data)?Q.data.data:[])}catch(R){$(R.response?.data?.error||R.response?.data?.message||"خطا در دریافت اطلاعات.")}finally{w(!1)}};(0,a.useEffect)(()=>{L()},[]),(0,a.useEffect)(()=>{if(!n.productId){g(Ht);return}v()||g(Ht)},[n.productId,m,N]);const C=(0,a.useMemo)(()=>f.filter(R=>String(R.status)==="pending"||String(R.status)==="registered"||String(R.status)==="reviewing").length,[f]);(0,a.useMemo)(()=>f.filter(R=>R.status==="approved"||R.status==="received").length,[f]),(0,a.useMemo)(()=>f.filter(R=>R.status==="rejected").length,[f]);const _=(0,a.useMemo)(()=>f.find(R=>!!$e(R.representativeName))?.representativeName||"",[f]),ee=(0,a.useMemo)(()=>f.find(R=>!!$e(R.representativeCity))?.representativeCity||"",[f]),V=(0,a.useMemo)(()=>{const R=f.find(Q=>!!$e(Q.representativePhone))?.representativePhone||"";return $e(R)||T},[f,T]);(0,a.useMemo)(()=>f.reduce((R,Q)=>R+Hs(Q),0),[f]);const ue=R=>{const Q=m.find((ye,De)=>y(ye,De)===R);if(!Q){g(Ht);return}const X=z(Q),l=W(Q),E=je(X?.price),J=K(Q),ce=E>0?E:J,ge=String(X?.id||Q.productId||Q.id||"");g(ye=>({...ye,productId:ge,title:l,brand:$e(Q.brand),category:$e(Q.category)||$e(X?.category),price:String(ce),quantity:"1"})),$(""),P("")},te=()=>{const R=v();if(!R){$("ابتدا یک کالا از انبار انتخاب کنید.");return}const Q=$e(n.title),X=je(n.price),l=je(n.quantity);if(!n.productId){$("کالای انتخاب‌شده معتبر نیست.");return}const E=je(R.quantity);if(E<=0){$("کالای انتخاب‌شده موجودی ندارد.");return}if(!Number.isSafeInteger(l)||l<=0){$("تعداد مرجوعی باید عدد صحیح و بیشتر از صفر باشد.");return}if(l>E){$(`تعداد مرجوعی نمی‌تواند بیشتر از موجودی انبار باشد. موجودی فعلی: ${Me(E)} قلم`);return}if(X<=0){$("برای این کالا قیمت معتبری ثبت نشده است.");return}if(i.some(J=>Js(J.productId,n.productId))){$("این کالا قبلاً به لیست مرجوعی اضافه شده است.");return}u(J=>[...J,{id:`${n.productId}-${Date.now()}`,productId:n.productId,title:Q,brand:$e(n.brand),category:$e(n.category),price:X,quantity:String(l),maxQuantity:E}]),g(J=>({...Ht,confirmedReturn:J.confirmedReturn})),$(""),P("")},le=R=>{u(Q=>Q.filter(X=>X.id!==R)),$(""),P("")},oe=(R,Q)=>{const X=Xr(Q);u(l=>l.map(E=>E.id===R?{...E,quantity:X}:E)),$(""),P("")},ie=(0,a.useMemo)(()=>{const R=i.reduce((X,l)=>X+Math.max(0,je(l.quantity)),0),Q=i.reduce((X,l)=>X+Math.max(0,je(l.quantity))*l.price,0);return{itemsCount:i.length,totalQty:R,totalPrice:Q}},[i]),be=async R=>{R.preventDefault();const Q=oo();if(m.length===0){$("کالای قابل مرجوعی در انبار شما وجود ندارد.");return}if(i.length===0){$("حداقل یک کالا را به لیست مرجوعی اضافه کنید.");return}const X=i.find(E=>{const J=je(E.quantity);return!Number.isSafeInteger(J)||J<=0||J>E.maxQuantity||E.price<=0||!E.productId||!E.title});if(X){if(je(X.quantity)>X.maxQuantity){$(`تعداد مرجوعی کالای «${X.title}» بیشتر از موجودی انبار است.`);return}$(`اطلاعات کالای «${X.title||"نامشخص"}» معتبر نیست.`);return}if(!n.confirmedReturn){$("برای ثبت درخواست باید تیک تأیید مرجوعی را فعال کنید.");return}const l=i.map(E=>{const J=je(E.quantity);return{productId:E.productId,productName:E.title,brand:E.brand,category:E.category,quantity:J,unitPrice:E.price,totalPrice:J*E.price}});x(!0),$(""),P("");try{const E=(await ne.post(`${Sa}/return-requests/my`,{items:l,returnDate:Q,reason:"مرجوعی ثبت‌شده و تأییدشده توسط نماینده",confirmedReturn:!0},{headers:D()})).data.data;E?b(E):o(),await L(),u([]),g(Ht),P(`درخواست مرجوعی شامل ${Me(l.length)} کالا با موفقیت در تاریخ ${Q} ثبت شد.`)}catch(E){$(E.response?.data?.error||E.response?.data?.message||E.message||"خطا در ثبت درخواست مرجوعی.")}finally{x(!1)}},me=()=>{A||f.length===0||H(!0)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"return-requests-page space-y-6",children:[(0,e.jsxs)("section",{className:"return-screen-only overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-rose-50 via-white to-amber-50 p-5 dark:border-gray-700 dark:from-rose-950/20 dark:via-gray-900 dark:to-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/25",children:(0,e.jsx)(Va,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"ثبت درخواست مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"کالا را از لیست انتخاب کن، به لیست مرجوعی اضافه کن و در نهایت ثبت کن."})]})]})}),(0,e.jsxs)("form",{onSubmit:be,className:"grid grid-cols-1 gap-5 p-5 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"انتخاب کالا از انبار"}),(0,e.jsxs)("select",{value:F(),onChange:R=>{ue(R.target.value)},disabled:A||m.length===0,className:"mt-2 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition-all focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:A?"در حال دریافت کالاهای انبار...":m.length===0?"کالای قابل مرجوعی در انبار شما وجود ندارد":"یک کالا را انتخاب کنید"}),m.map((R,Q)=>{const X=y(R,Q),l=z(R),E=S(l)||W(R),J=je(l?.price),ce=J>0?J:K(R),ge=je(R.quantity);return(0,e.jsxs)("option",{value:X,children:[E," — موجودی:"," ",Me(ge)," — قیمت:"," ",Me(ce)," تومان"]},`${X}-${Q}`)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs text-gray-400 dark:text-gray-500",children:"فقط کالاهایی با موجودی بیشتر از صفر نمایش داده می‌شوند."})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"قیمت کالا"}),(0,e.jsx)("input",{type:"text",value:n.price?`${Me(n.price)} تومان`:"",readOnly:!0,placeholder:"پس از انتخاب کالا نمایش داده می‌شود",className:"mt-2 w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-emerald-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-emerald-300"})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:v()?je(v()?.quantity):void 0,value:n.quantity,onChange:R=>{g(Q=>({...Q,quantity:Xr(R.target.value)}))},disabled:!n.productId||A,className:"mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300",children:(0,e.jsx)(lt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-black text-rose-700 dark:text-rose-300",children:"تاریخ ثبت مرجوعی خودکار است"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-rose-600 dark:text-rose-400",children:"تاریخ امروز هنگام ثبت درخواست به‌صورت خودکار ذخیره می‌شود."})]})]})}),(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"button",onClick:te,disabled:A||!n.productId,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-rose-800 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20",children:[(0,e.jsx)(kr,{className:"h-5 w-5"}),"افزودن کالا به لیست مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-400 dark:text-gray-500",children:"پس از انتخاب کالا و وارد کردن تعداد، آن را به لیست مرجوعی اضافه کنید."})]}),i.length>0?(0,e.jsxs)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50/60 p-4 md:col-span-2 dark:border-rose-900/50 dark:bg-rose-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-rose-200 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-rose-900/50",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-rose-800 dark:text-rose-200",children:"کالاهای انتخاب‌شده برای مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-bold text-rose-600 dark:text-rose-300",children:"قبل از ثبت نهایی، تعداد هر کالا را بررسی کنید."})]}),(0,e.jsxs)("span",{className:"w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black text-rose-700 shadow-sm dark:bg-gray-900 dark:text-rose-300",children:[Me(ie.itemsCount)," ","نوع کالا"]})]}),(0,e.jsx)("div",{className:"mt-4 space-y-3",children:i.map((R,Q)=>{const X=je(R.quantity)*R.price;return(0,e.jsx)("div",{className:"rounded-xl border border-rose-100 bg-white p-4 dark:border-rose-900/40 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[Me(Q+1),". ",R.title]}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[R.brand?`برند: ${R.brand}`:"برند: —",R.category?` · دسته‌بندی: ${R.category}`:""]}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-black text-emerald-600 dark:text-emerald-400",children:["قیمت:"," ",Me(R.price)," ","تومان · موجودی انبار:"," ",Me(R.maxQuantity)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-xs font-black text-gray-600 dark:text-gray-300",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:R.maxQuantity,value:R.quantity,onChange:l=>{oe(R.id,l.target.value)},className:"mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-black text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-32"})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-500/10",children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ این ردیف"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-emerald-700 dark:text-emerald-300",children:[Me(X)," ","تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{le(R.id)},className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-black text-red-700 transition-colors hover:bg-red-100 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف"]})]})]})},R.id)})}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 border-t border-rose-200 pt-4 sm:grid-cols-3 dark:border-rose-900/50",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعداد نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-rose-700 dark:text-rose-300",children:Me(ie.itemsCount)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-blue-700 dark:text-blue-300",children:[Me(ie.totalQty)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-emerald-700 dark:text-emerald-300",children:[Me(ie.totalPrice)," ","تومان"]})]})]})]}):(0,e.jsx)("div",{className:"rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm font-bold text-gray-500 md:col-span-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:"هنوز کالایی به لیست مرجوعی اضافه نشده است."}),(0,e.jsxs)("label",{className:"flex cursor-pointer items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4 transition-colors hover:bg-rose-100 md:col-span-2 dark:border-rose-900/40 dark:bg-rose-950/20 dark:hover:bg-rose-950/35",children:[(0,e.jsx)("input",{type:"checkbox",checked:n.confirmedReturn,onChange:R=>{g(Q=>({...Q,confirmedReturn:R.target.checked})),$("")},disabled:A||m.length===0,className:"h-5 w-5 accent-rose-600 disabled:cursor-not-allowed"}),(0,e.jsxs)("span",{className:"flex items-center gap-2 text-sm font-black text-rose-700 dark:text-rose-300",children:[(0,e.jsx)(ns,{className:"h-5 w-5 shrink-0"}),"تأیید می‌کنم که کالا جهت مرجوعی تحویل یا ارسال شده است."]})]}),B?(0,e.jsx)("div",{className:"rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700 md:col-span-2 dark:bg-red-950/30 dark:text-red-300",children:B}):null,U?(0,e.jsx)("div",{className:"rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700 md:col-span-2 dark:bg-emerald-950/30 dark:text-emerald-300",children:U}):null,(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"submit",disabled:k||A||m.length===0||i.length===0,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-rose-500/25 transition-all hover:from-rose-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",children:[k?(0,e.jsx)(xs,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Wa,{className:"h-5 w-5"}),k?"در حال ثبت درخواست...":`ثبت درخواست مرجوعی (${Me(ie.itemsCount)} کالا)`]}),!A&&m.length===0?(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"کالای قابل مرجوعی در انبار شما وجود ندارد."}):null]})]})]}),(0,e.jsxs)("section",{className:"return-print-area overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"return-screen-only flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:(0,e.jsx)(Gr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت بررسی درخواست‌های ثبت‌شده"})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-amber-50 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[Me(C)," ","در انتظار بررسی"]}),(0,e.jsxs)("button",{type:"button",onClick:me,disabled:A||f.length===0,className:"flex min-h-9 items-center gap-2 rounded-lg bg-gray-800 px-3 text-xs font-black text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:o,disabled:A,className:"flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-rose-500/10",title:"بروزرسانی","aria-label":"بروزرسانی",children:(0,e.jsx)(qe,{className:`h-4 w-4 ${A?"animate-spin":""}`})})]})]}),A?(0,e.jsxs)("div",{className:"return-screen-only flex items-center justify-center gap-2 p-10 text-sm font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(xs,{className:"h-5 w-5 animate-spin"}),"در حال دریافت اطلاعات..."]}):f.length===0?(0,e.jsxs)("div",{className:"return-screen-only p-10 text-center",children:[(0,e.jsx)(Gr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز درخواست مرجوعی ثبت نکرده‌اید."})]}):(0,e.jsx)("div",{className:"return-screen-only divide-y divide-gray-100 dark:divide-gray-700",children:f.map(R=>{const Q=po(R.status);return(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:xo(R)}),(0,e.jsxs)("p",{className:"mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400",children:[Me(Hs(R))," ","تومان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:["تعداد:"," ",Me(mo(R))," ","قلم · تاریخ ثبت:"," ",R.returnDate||co(R.createdAt)]}),Q.type==="rejected"&&R.adminNote?(0,e.jsxs)("p",{className:"mt-3 rounded-xl bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:bg-red-950/30 dark:text-red-300",children:["دلیل رد ادمین:"," ",R.adminNote]}):null]}),Q.type==="approved"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",children:[(0,e.jsx)(ns,{className:"h-4 w-4"}),Q.label]}):null,Q.type==="rejected"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-black text-red-700 dark:bg-red-500/15 dark:text-red-300",children:[(0,e.jsx)(nt,{className:"h-4 w-4"}),Q.label]}):null,(Q.type==="pending"||Q.type==="reviewing")&&(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[(0,e.jsx)(wn,{className:"h-4 w-4"}),Q.label]})]},R.id)})})]})]}),O&&(0,e.jsx)(io,{requests:f,representativeName:_,representativeCity:ee,representativePhone:V,onClose:()=>H(!1)})]})},Dt=t=>{const r=Number(String(t??"").replace(/[۰-۹]/g,s=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(s))).replace(/[٠-٩]/g,s=>String("٠١٢٣٤٥٦٧٨٩".indexOf(s))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Vr=t=>new Intl.NumberFormat("fa-IR").format(Dt(t)),Ca=t=>`${Vr(t)} تومان`,es=t=>{const r=Dt(t.totalPrice);return r>0?r:Dt(t.quantity)*Dt(t.unitPrice)},Ks=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Zr=t=>Array.isArray(t?.items)?t.items:[],go=t=>{const r=Dt(t?.totalItems);return r>0?r:Zr(t).reduce((s,o)=>s+Dt(o.quantity),0)},uo=t=>{const r=Dt(t?.totalAmount);return r>0?r:Zr(t).reduce((s,o)=>s+es(o),0)},bo=t=>({companyName:t?.companyName||"بازرگانی مهر امین",companySubtitle:t?.companySubtitle||"سامانه مدیریت فروش",logoUrl:t?.logoUrl||"../company-logo.png",primaryColor:t?.primaryColor||"#0f766e",secondaryColor:t?.secondaryColor||"#ecfdf5",textColor:t?.textColor||"#111827",fontFamily:t?.fontFamily||"Tahoma, Arial, sans-serif",headerTitle:t?.headerTitle||"گزارش اعلام فروش",footerText:t?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:t?.showLogo??!0,showCompanyName:t?.showCompanyName??!0,showRepresentativeInfo:t?.showRepresentativeInfo??!0,showReportNumber:t?.showReportNumber??!0,showDate:t?.showDate??!0}),Ys=({report:t,reports:r,settings:s,onClose:o})=>{const{printContent:b,isMobile:n}=Ga(),g=bo(s),i=Array.isArray(r),u=i?r?.[0]:t,p=i?(r||[]).flatMap(k=>Zr(k)):Zr(t),d=i?p.reduce((k,x)=>k+Dt(x.quantity),0):go(t),N=i?p.reduce((k,x)=>k+es(x),0):uo(t),j=()=>{b("sales-print-root","چاپ اعلام فروش")};return(0,e.jsxs)("div",{className:"sales-print-root",dir:"rtl",style:{fontFamily:g.fontFamily},children:[(0,e.jsxs)("div",{className:"sales-print-screen",children:[(0,e.jsxs)("div",{className:"sales-print-topbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:i?"پیش‌نمایش همه گزارش‌ها":"پیش‌نمایش گزارش فروش"}),(0,e.jsx)("p",{children:i?"همه گزارش‌ها در یک گزارش چاپ می‌شوند.":"گزارش فروش آماده چاپ است."})]}),(0,e.jsx)("button",{type:"button",onClick:o,className:"sales-print-close",children:"بستن"})]}),(0,e.jsx)("div",{className:"sales-print-paper",children:(0,e.jsx)(Gs,{report:u,items:p,totalItems:d,totalAmount:N,settings:g,isBulk:i})}),(0,e.jsxs)("div",{className:"sales-print-actions",children:[(0,e.jsx)("button",{type:"button",onClick:o,className:"sales-print-cancel",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:j,className:"sales-print-submit",children:i?"چاپ همه گزارش‌ها":"چاپ گزارش"})]})]}),(0,e.jsx)("div",{className:"sales-print-only",children:(0,e.jsx)(Gs,{report:u,items:p,totalItems:d,totalAmount:N,settings:g,isBulk:i})}),(0,e.jsx)("style",{children:`
        .sales-print-root {
          position: fixed;
          inset: 0;
          z-index: 999999;
          overflow-y: auto;
          background: rgba(15, 23, 42, 0.75);
        }


        .sales-print-screen {
          width: min(950px, calc(100% - 24px));
          margin: 24px auto;
        }


        .sales-print-topbar,
        .sales-print-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 20px;
          background: #fff;
        }


        .sales-print-topbar {
          border-radius: 16px 16px 0 0;
        }


        .sales-print-topbar h2 {
          margin: 0;
          color: #111827;
          font-size: 18px;
          font-weight: 900;
        }


        .sales-print-topbar p {
          margin: 5px 0 0;
          color: #6b7280;
          font-size: 12px;
        }


        .sales-print-close,
        .sales-print-cancel,
        .sales-print-submit {
          border-radius: 9px;
          padding: 10px 18px;
          cursor: pointer;
          font: inherit;
          font-weight: 900;
        }


        .sales-print-close {
          border: 0;
          background: #fee2e2;
          color: #b91c1c;
        }


        .sales-print-paper {
          padding: 20px;
          background: #fff;
        }


        .sales-print-actions {
          justify-content: flex-end;
          border-radius: 0 0 16px 16px;
        }


        .sales-print-cancel {
          border: 1px solid #d1d5db;
          background: #fff;
          color: #374151;
        }


        .sales-print-submit {
          border: 0;
          background: #0f766e;
          color: #fff;
        }


        .sales-print-only {
          display: none;
        }


        .print-content {
          width: 100%;
          color: var(--print-text-color);
          background: #fff;
          direction: rtl;
        }


        .print-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 12px;
          border-bottom: 3px solid var(--print-primary-color);
        }


        .print-company {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }


        .print-logo {
          width: 42px;
          height: 42px;
          object-fit: contain;
        }


        .print-header h1,
        .print-header h2 {
          margin: 0;
          font-weight: 900;
        }


        .print-header h1 {
          font-size: 20px;
        }


        .print-header h2 {
          color: var(--print-primary-color);
          font-size: 17px;
        }


        .print-header p {
          margin: 5px 0 0;
          color: #6b7280;
          font-size: 10px;
        }


        .print-header-left {
          text-align: left;
        }


        .print-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin: 12px 0;
        }


        .print-info-box {
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          background: var(--print-secondary-color);
        }


        .print-info-title {
          margin: 0 0 6px;
          padding-bottom: 5px;
          border-bottom: 1px solid #d1d5db;
          color: var(--print-primary-color);
          font-size: 12px;
          font-weight: 900;
        }


        .print-info-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-top: 4px;
          font-size: 10px;
        }


        .print-info-row span {
          flex-shrink: 0;
          color: #6b7280;
        }


        .print-info-row strong {
          max-width: 65%;
          color: #111827;
          font-weight: 900;
          text-align: left;
          overflow-wrap: anywhere;
          word-break: break-word;
        }


        .print-table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          font-size: 9px;
        }


        .print-table th,
        .print-table td {
          border: 1px solid #9ca3af;
          padding: 5px 4px;
          text-align: right;
          overflow-wrap: anywhere;
        }


        .print-table th {
          background: var(--print-primary-color);
          color: #fff;
          font-weight: 900;
        }


        .print-table th:nth-child(1),
        .print-table td:nth-child(1) {
          width: 7%;
        }


        .print-table th:nth-child(2),
        .print-table td:nth-child(2) {
          width: 38%;
        }


        .print-table th:nth-child(3),
        .print-table td:nth-child(3) {
          width: 15%;
        }


        .print-table th:nth-child(4),
        .print-table td:nth-child(4) {
          width: 20%;
        }


        .print-table th:nth-child(5),
        .print-table td:nth-child(5) {
          width: 20%;
        }


        .print-table tbody tr:nth-child(even) {
          background: #f9fafb;
        }


        .print-total-table {
          margin-top: 10px;
        }


        .print-total-table td {
          background: var(--print-secondary-color);
          font-weight: 900;
        }


        .print-signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 24px;
        }


        .print-signatures > div {
          text-align: center;
          font-size: 9px;
          font-weight: 900;
        }


        .print-signatures i {
          display: block;
          height: 28px;
          margin-top: 5px;
          border-bottom: 1px solid #374151;
        }


        .print-footer {
          margin-top: 12px;
          padding-top: 6px;
          border-top: 1px solid #d1d5db;
          color: #6b7280;
          font-size: 8px;
          text-align: center;
        }


        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }


          html,
          body {
            width: 297mm !important;
            height: 210mm !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: #fff !important;
          }


          body > * {
            display: none !important;
          }


          body > #root {
            display: block !important;
            width: 297mm !important;
            height: 210mm !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: #fff !important;
          }


          #root > .sales-print-root {
            display: block !important;
            position: static !important;
            width: 297mm !important;
            height: 210mm !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: #fff !important;
          }


          .sales-print-screen {
            display: none !important;
          }


          .sales-print-only {
            display: block !important;
            width: 297mm !important;
            height: 210mm !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: #fff !important;
          }


          .print-content {
            display: block !important;
            width: 297mm !important;
            max-width: 297mm !important;
            min-width: 0 !important;
            height: auto !important;
            max-height: none !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 8mm 10mm !important;
            overflow: visible !important;
            box-sizing: border-box !important;
            background: #fff !important;
            transform: none !important;
          }


          .print-header {
            display: flex !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
            gap: 20px !important;
            width: 100% !important;
            padding-bottom: 4mm !important;
            border-bottom: 3px solid var(--print-primary-color) !important;
          }


          .print-header h1 {
            font-size: 22px !important;
          }


          .print-header h2 {
            font-size: 18px !important;
          }


          .print-header p {
            margin-top: 4px !important;
            font-size: 11px !important;
          }


          .print-logo {
            width: 52px !important;
            height: 52px !important;
          }


          .print-info {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            width: 100% !important;
            margin: 6mm 0 !important;
          }


          .print-info-box {
            padding: 10px !important;
            border: 1px solid #d1d5db !important;
            border-radius: 6px !important;
          }


          .print-info-title {
            font-size: 13px !important;
          }


          .print-info-row {
            font-size: 11px !important;
          }


          .print-table {
            display: table !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
            font-size: 11px !important;
          }


          .print-table thead {
            display: table-header-group !important;
          }


          .print-table tbody {
            display: table-row-group !important;
          }


          .print-table tr {
            display: table-row !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }


          .print-table th,
          .print-table td {
            display: table-cell !important;
            min-width: 0 !important;
            max-width: none !important;
            padding: 5px 6px !important;
            font-size: 11px !important;
            text-align: right !important;
            white-space: normal !important;
            overflow: visible !important;
            word-break: break-word !important;
            overflow-wrap: anywhere !important;
            line-height: 1.4 !important;
          }


          .print-table th {
            font-weight: 900 !important;
          }


          .print-total-table {
            display: table !important;
            width: 100% !important;
            margin-top: 10px !important;
          }


          .print-total-table td {
            background: var(--print-secondary-color) !important;
            font-weight: 900 !important;
          }


          .print-signatures {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px !important;
            margin-top: 8mm !important;
          }


          .print-signatures > div {
            font-size: 11px !important;
          }


          .print-signatures i {
            height: 24px !important;
            margin-top: 5px !important;
          }


          .print-footer {
            margin-top: 5mm !important;
            padding-top: 2mm !important;
            font-size: 9px !important;
          }
        }
      `})]})},Gs=({report:t,items:r,totalItems:s,totalAmount:o,settings:b,isBulk:n})=>{const g={"--print-primary-color":b.primaryColor,"--print-secondary-color":b.secondaryColor,"--print-text-color":b.textColor};return(0,e.jsxs)("div",{className:"print-content",style:g,children:[(0,e.jsxs)("header",{className:"print-header",children:[(0,e.jsxs)("div",{className:"print-company",children:[b.showLogo&&b.logoUrl?(0,e.jsx)("img",{src:b.logoUrl,alt:"لوگو",className:"print-logo"}):null,(0,e.jsxs)("div",{children:[b.showCompanyName?(0,e.jsx)("h1",{children:t?.representativeName||b.companyName}):null,(0,e.jsx)("p",{children:b.companySubtitle})]})]}),(0,e.jsxs)("div",{className:"print-header-left",children:[(0,e.jsx)("h2",{children:n?"گزارش تجمیعی اعلام فروش":b.headerTitle}),b.showDate?(0,e.jsxs)("p",{children:["تاریخ چاپ: ",Ks()]}):null]})]}),(0,e.jsxs)("section",{className:"print-info",children:[(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Ks()})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"بازرگانی مهر امین"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"028-33236072"})]})]}),(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:t?.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"کد نماینده:"}),(0,e.jsx)("strong",{children:t?.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:t?.representativeCity||"—"})]})]})]}),(0,e.jsxs)("table",{className:"print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"عنوان"}),(0,e.jsx)("th",{children:"برند"}),(0,e.jsx)("th",{children:"دسته‌بندی"}),(0,e.jsx)("th",{children:"قیمت"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{children:r.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"کالایی در این گزارش وجود ندارد."})}):r.map((i,u)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:Vr(u+1)}),(0,e.jsx)("td",{children:i.productName||"کالای بدون نام"}),(0,e.jsx)("td",{children:i.brand||i.brandName||"—"}),(0,e.jsx)("td",{children:i.category||i.categoryName||"—"}),(0,e.jsx)("td",{children:Ca(i.unitPrice)}),(0,e.jsxs)("td",{children:[Vr(i.quantity)," قلم"]}),(0,e.jsx)("td",{children:Ca(es(i))})]},i.productId||`print-item-${u}`))})]}),(0,e.jsx)("table",{className:"print-table print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[Vr(s)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsx)("td",{style:{width:"20%"},children:Ca(o)})]})})}),(0,e.jsxs)("div",{className:"print-signatures",children:[(0,e.jsxs)("div",{children:["امضای نماینده",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["تأیید مسئول فروش",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["مهر شرکت",(0,e.jsx)("i",{})]})]}),(0,e.jsx)("footer",{className:"print-footer",children:b.footerText})]})},Ia="https://myshop-backend-8nu7.onrender.com/api",yo=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),ve=t=>{const r=yo(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Ye=t=>new Intl.NumberFormat("fa-IR").format(ve(t)),Mt=t=>`${Ye(t)} تومان`,Xs=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},$a=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),fo=t=>{const r=ve(t.totalPrice);return r>0?r:ve(t.quantity)*ve(t.unitPrice)},Zs=t=>ve(t.itemsCount)>0?ve(t.itemsCount):Array.isArray(t.items)?t.items.length:0,en=t=>ve(t.totalItems)>0?ve(t.totalItems):Array.isArray(t.items)?t.items.reduce((r,s)=>r+ve(s.quantity),0):0,tn=t=>ve(t.totalAmount)>0?ve(t.totalAmount):Array.isArray(t.items)?t.items.reduce((r,s)=>r+fo(s),0):0,jo=({onSaleRegistered:t,printSettings:r})=>{const[s,o]=(0,a.useState)([]),[b,n]=(0,a.useState)({}),[g,i]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!1),[d,N]=(0,a.useState)(!1),[j,k]=(0,a.useState)(!1),[x,h]=(0,a.useState)([]),[w,c]=(0,a.useState)(""),[$,U]=(0,a.useState)({allowed:!0}),[P,O]=(0,a.useState)(null),[H,T]=(0,a.useState)(!1),I=$.allowed===!1,f=(0,a.useMemo)(()=>({companyName:r?.companyName||"نام شرکت",companySubtitle:r?.companySubtitle||"گزارش اعلام فروش",logoUrl:r?.logoUrl||"",primaryColor:r?.primaryColor||"#0f766e",secondaryColor:r?.secondaryColor||"#ecfdf5",textColor:r?.textColor||"#111827",fontFamily:r?.fontFamily||"Tahoma",headerTitle:r?.headerTitle||"گزارش اعلام فروش",footerText:r?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:r?.showLogo??!0,showCompanyName:r?.showCompanyName??!0,showRepresentativeInfo:r?.showRepresentativeInfo??!0,showReportNumber:r?.showReportNumber??!0,showDate:r?.showDate??!0}),[r]),A=(0,a.useCallback)(async()=>{p(!0);try{const v=await ne.get(`${Ia}/sales-from-warehouse/products`,{headers:$a()}),F=Array.isArray(v.data.data)?v.data.data:[];o(F),U(v.data.salesPeriod||{allowed:!0}),n(L=>{const C={};return F.forEach(_=>{const ee=String(_.productId||_.id||"");C[ee]=L[ee]||""}),C})}catch(v){const F=v;o([]),c(`❌ ${F.response?.data?.error||F.response?.data?.message||"خطا در دریافت موجودی انبار."}`)}finally{p(!1)}},[]),B=(0,a.useCallback)(async()=>{N(!0);try{const v=await ne.get(`${Ia}/sales-from-warehouse/my`,{headers:$a()});h(Array.isArray(v.data.data)?v.data.data:[]),U(v.data.salesPeriod||{allowed:!0})}catch(v){const F=v;c(`❌ ${F.response?.data?.error||F.response?.data?.message||"خطا در دریافت تاریخچه فروش."}`)}finally{N(!1)}},[]);(0,a.useEffect)(()=>{A(),B()},[A,B]);const D=(0,a.useMemo)(()=>s.map(v=>{const F=String(v.productId||v.id||""),L=ve(b[F]||0);return{product:v,productId:F,saleQuantity:L,totalAmount:L*ve(v.unitPrice)}}).filter(v=>v.saleQuantity>0),[s,b]),W=D.length,K=D.reduce((v,F)=>v+F.saleQuantity,0),S=D.reduce((v,F)=>v+F.totalAmount,0),z=(v,F)=>{if(I){c(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`);return}const L=String(v.productId||v.id||""),C=ve(b[L]||0),_=ve(v.quantity);if(F>0&&C>=_){c(`❌ تعداد «${v.productName}» نمی‌تواند بیشتر از موجودی (${Ye(_)}) باشد.`);return}const ee=Math.max(0,Math.min(_,C+F));n(V=>({...V,[L]:ee>0?String(ee):""})),c("")},y=async v=>{if(v.preventDefault(),I){c(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`);return}if(D.length===0){c("❌ حداقل برای یک کالا تعداد بیشتر از صفر وارد کنید.");return}if(!g){c("❌ برای ثبت فروش باید تأیید صحت اطلاعات را فعال کنید.");return}try{k(!0),c("");const F=await ne.post(`${Ia}/sales-from-warehouse`,{confirmedSale:!0,items:D.map(L=>({productId:L.productId,productName:L.product.productName,brand:L.product.brand,category:L.product.category,quantity:L.saleQuantity}))},{headers:$a()});F.data.data&&h(L=>[F.data.data,...L]),U(F.data.salesPeriod||{allowed:!0}),F.data.warehouse?o(F.data.warehouse.filter(L=>ve(L.quantity)>0)):await A(),n({}),i(!1),c(`✅ ${F.data.message||"فروش با موفقیت ثبت شد و موجودی انبار به‌روزرسانی شد."}`),await B(),t?.()}catch(F){const L=F;L.response?.data?.salesPeriod&&U(L.response.data.salesPeriod),c(`❌ ${L.response?.data?.error||L.response?.data?.message||"خطا در ثبت اعلام فروش."}`)}finally{k(!1)}},m=()=>`ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"sales-announcement-page space-y-6",children:[(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Nn,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"ثبت اعلام فروش از انبار"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-7 text-gray-500 dark:text-gray-400",children:"فقط کالاهای واقعی موجود در انبار شما نمایش داده می‌شوند."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Promise.all([A(),B()])},disabled:u||d,className:"inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(qe,{className:`h-4 w-4 ${u||d?"animate-spin":""}`}),"بروزرسانی"]})]})}),(0,e.jsxs)("form",{onSubmit:y,className:"p-5 md:p-6",children:[I?(0,e.jsx)("div",{className:"mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Le,{className:"mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black text-amber-900 dark:text-amber-100",children:"ثبت اعلام فروش فعلاً غیرفعال است"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200",children:m()})]})]})}):null,u?(0,e.jsx)("div",{className:"flex min-h-48 items-center justify-center",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(xe,{className:"mx-auto h-8 w-8 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"در حال دریافت کالاهای انبار..."})]})}):s.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(fr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"کالای قابل فروش در انبار شما وجود ندارد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:s.map(v=>{const F=String(v.productId||v.id||""),L=ve(b[F]||0),C=ve(v.quantity),_=L*ve(v.unitPrice);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:v.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-2.5 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"موجودی"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Ye(v.quantity)," ","قلم"]})]}),(0,e.jsx)("div",{className:"rounded-xl bg-indigo-50 p-2.5 text-center dark:bg-indigo-950/30",children:(0,e.jsx)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:Mt(v.unitPrice)})})]}),(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,1)},disabled:j||I||L>=C,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(kr,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Ye(L)}),(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,-1)},disabled:j||I||L<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(ds,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-0.5 font-black text-emerald-900 dark:text-emerald-100",children:Mt(_)})]})]})]},F)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto rounded-2xl border border-gray-100 lg:block dark:border-gray-700",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"موجودی انبار"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ فروش"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:s.map(v=>{const F=String(v.productId||v.id||""),L=ve(b[F]||0),C=ve(v.quantity),_=L*ve(v.unitPrice);return(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-gray-800 dark:text-white",children:v.productName}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Ye(v.quantity)," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-gray-600 dark:text-gray-300",children:Mt(v.unitPrice)}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("div",{className:"flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,1)},disabled:j||I||L>=C,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(kr,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Ye(L)}),(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,-1)},disabled:j||I||L<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(ds,{className:"h-5 w-5"})})]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Mt(_)})]},F)})})]})}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"کالاهای انتخاب‌شده"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-indigo-900 dark:text-indigo-100",children:[Ye(W)," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-amber-900 dark:text-amber-100",children:[Ye(K)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-emerald-900 dark:text-emerald-100",children:Mt(S)})]})]}),(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("label",{className:"flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("input",{type:"checkbox",checked:g,onChange:v=>{i(v.target.checked),c("")},disabled:j||I,className:"mt-0.5 h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"}),(0,e.jsx)("span",{className:"leading-6",children:"تعداد کالاهای فروخته‌شده را تأیید می‌کنم. پس از ثبت، موجودی کالاها از انبار من کم می‌شود."})]}),(0,e.jsx)("button",{type:"submit",disabled:j||I||D.length===0||!g,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-700 sm:w-auto",children:j?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}),"در حال ثبت..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Qa,{className:"h-5 w-5"}),"ثبت نهایی"]})})]})]}),w?(0,e.jsx)("div",{className:`mt-5 rounded-xl px-4 py-3 text-sm font-bold ${w.startsWith("✅")?"bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300":"bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300"}`,children:w}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)(Ge,{className:"h-6 w-6 text-emerald-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"تاریخچه اعلام فروش من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"گزارش‌های ثبت‌شده از طریق سرور"})]})]}),x.length>0?(0,e.jsxs)("button",{type:"button",onClick:()=>{T(!0)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ همه گزارش‌ها"]}):null]})}),d?(0,e.jsx)("div",{className:"flex min-h-[180px] items-center justify-center",children:(0,e.jsx)(xe,{className:"h-7 w-7 animate-spin text-cyan-500"})}):x.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(Ge,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز اعلام فروشی ثبت نکرده‌اید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-5 lg:hidden",children:x.map(v=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:Xs(v.createdAt||v.saleDate)})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{O(v)},className:"inline-flex shrink-0 items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-indigo-50 p-3 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"تعداد نوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:[Ye(Zs(v))," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Ye(en(v))," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 font-black text-emerald-900 dark:text-emerald-100",children:Mt(tn(v))})]})]})]},v.id))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto lg:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد نوع کالا"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:x.map(v=>(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-600 dark:text-gray-300",children:Xs(v.createdAt||v.saleDate)}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-indigo-700 dark:text-indigo-300",children:[Ye(Zs(v))," ","کالا"]}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Ye(en(v))," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Mt(tn(v))}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{O(v)},className:"inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]})})]},v.id))})]})})]})]})]}),P?(0,e.jsx)(Ys,{report:P,settings:f,onClose:()=>{O(null)}}):null,H?(0,e.jsx)(Ys,{reports:x,settings:f,onClose:()=>{T(!1)}}):null]})},qr="https://myshop-backend-8nu7.onrender.com/api",vo=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),rt=t=>{const r=vo(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ko=t=>new Intl.NumberFormat("fa-IR").format(rt(t)),No=t=>`${ko(t)} تومان`,Aa=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),wo=(t,r)=>{const s=rt(t?.quantity),o=rt(t?.unitPrice);return{id:String(t?.id||t?.productId||`inventory-item-${r}`),title:t?.productName||t?.title||t?.name||"بدون عنوان",brand:t?.brand||"",category:t?.category||"",quantity:s,unitPrice:o,totalPrice:t?.totalPrice!==void 0?rt(t.totalPrice):s*o}},So=(t,r)=>({id:String(t?.id||`shipment-${r}`),title:t?.receiver||t?.warehouse||"ارسال بار",quantity:rt(t?.totalItems??t?.itemsCount),amount:rt(t?.totalItems),createdAt:t?.createdAt||t?.updatedAt||void 0}),Co=({activeSection:t})=>{const[r,s]=(0,a.useState)({}),[o,b]=(0,a.useState)([]),[n,g]=(0,a.useState)(!0),[i,u]=(0,a.useState)(!1),[p,d]=(0,a.useState)(""),[N,j]=(0,a.useState)([]),[k,x]=(0,a.useState)(!1),h=(0,a.useCallback)(async()=>{g(!0),d("");try{const A=await ne.get(`${qr}/representative/dashboard`,{headers:Aa()});s(A.data.data||{})}catch(A){d(A.response?.data?.error||A.response?.data?.message||"خطا در دریافت اطلاعات داشبورد نمایندگی.")}finally{g(!1)}},[]),w=(0,a.useCallback)(async()=>{u(!0);try{const A=await ne.get(`${qr}/return-requests/my`,{headers:Aa()});b(Array.isArray(A.data.data)?A.data.data:[])}catch(A){d(A.response?.data?.error||A.response?.data?.message||"خطا در دریافت درخواست‌های مرجوعی.")}finally{u(!1)}},[]),c=(0,a.useCallback)(async()=>{x(!0);try{const A=await ne.get(`${qr}/sales-from-warehouse/my`,{headers:Aa()});j(Array.isArray(A.data.data)?A.data.data:[])}catch(A){console.error("خطا در دریافت فروش‌ها:",A),j([])}finally{x(!1)}},[]);(0,a.useEffect)(()=>{h()},[h]),(0,a.useEffect)(()=>{c()},[c]),(0,a.useEffect)(()=>{t==="return-request"&&w()},[t,w]);const $=(0,a.useMemo)(()=>(Array.isArray(r.warehouse?.items)?r.warehouse?.items:[]).map(wo),[r.warehouse?.items]),U=(0,a.useMemo)(()=>(Array.isArray(r.shipments)?r.shipments:[]).map(So),[r.shipments]),P=(0,a.useMemo)(()=>$.reduce((A,B)=>A+rt(B.quantity),0),[$]),O=(0,a.useMemo)(()=>$.reduce((A,B)=>A+rt(B.totalPrice),0),[$]),H=(0,a.useMemo)(()=>{const A=new Date,B=new Date(A);return B.setDate(B.getDate()-9),N.filter(D=>{const W=D.createdAt?new Date(D.createdAt):null;return W?W>=B&&W<=A:!1}).reduce((D,W)=>D+rt(W.totalAmount),0)},[N]),T=(0,a.useMemo)(()=>{const A=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit"}).formatToParts(new Date),B=`${A.find(D=>D.type==="year")?.value||""}/${A.find(D=>D.type==="month")?.value||""}`;return N.filter(D=>{const W=String(D.saleDate||"");if(!W)return!1;const K=W.split("/");if(K.length<3)return!1;const S=K[0],z=K[1],y=parseInt(K[2],10);return`${S}/${z}`!==B?!1:[10,20,30].includes(y)}).reduce((D,W)=>D+rt(W.totalAmount),0)},[N]),I=r.representative||{},f=rt(I.totalFinancialCommitment);if(t==="my-shipments"){const A=sessionStorage.getItem("token")||sessionStorage.getItem("accessToken")||sessionStorage.getItem("authToken")||"";return(0,e.jsx)(ro,{apiUrl:qr,token:A})}return n?(0,e.jsx)("div",{className:"flex min-h-[320px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(xe,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اطلاعات نمایندگی..."})]})}):p&&t!=="return-request"&&t!=="sales-reports"?(0,e.jsxs)("div",{className:"rounded-3xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/20",children:[(0,e.jsx)("p",{className:"font-black text-red-700 dark:text-red-300",children:p}),(0,e.jsxs)("button",{type:"button",onClick:()=>{h()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):t==="dashboard"?(0,e.jsx)(Hi,{fullName:I.name||"—",territory:I.city||"—",creditAmount:f,inventoryItemCount:P,inventoryValue:O,salesLast10Days:H,salesInAllowedDays:T}):t==="orders"?(0,e.jsx)(so,{orders:U}):t==="warehouse"?(0,e.jsx)(Zi,{items:$,representativeName:I.name||"",representativeCity:I.city||"",representativePhone:I.phone||"",representativeAddress:I.city||""}):t==="return-request"?(0,e.jsx)(ho,{requests:o,loading:i,errorMessage:p,onRefresh:()=>{w()},onRequestCreated:A=>{b(B=>[A,...B])}}):t==="sales-reports"?(0,e.jsx)(jo,{onSaleRegistered:()=>{h()}}):t==="profile"?(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Pl,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"پروفایل نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات ثبت‌شده توسط مدیریت سیستم"})]})]})}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نام و نام خانوادگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:I.name||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:I.code||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"محدوده نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:I.city||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"شماره تماس"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:I.phone||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعهد مالی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-600 dark:text-emerald-400",children:No(f)})]})]})]}):(0,e.jsxs)("section",{className:"rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(fr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"بخش موردنظر پیدا نشد."})]})},Io="https://myshop-backend-8nu7.onrender.com/api",$o=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",rn=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Ao=t=>{switch(t){case"approved":return{label:"تأیید شده",color:"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",icon:we};case"rejected":return{label:"رد شده",color:"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",icon:Ae};default:return{label:"در انتظار بررسی",color:"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",icon:wn}}},Do=()=>{const[t,r]=(0,a.useState)([]),[s,o]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),g=(0,a.useCallback)(async()=>{o(!0),n("");try{const i=$o();if(!i){n("توکن ورود پیدا نشد. دوباره وارد شوید.");return}const u=await fetch(`${Io}/warranties/my`,{method:"GET",headers:{Authorization:`Bearer ${i}`,Accept:"application/json"}}),p=await u.json();if(!u.ok||!p.success)throw new Error(p.error||"دریافت گارانتی‌ها ناموفق بود.");r(p.data||[])}catch(i){n(i instanceof Error?i.message:"خطا در دریافت گارانتی‌ها.")}finally{o(!1)}},[]);return(0,a.useEffect)(()=>{g()},[g]),s?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(xe,{className:"h-8 w-8 animate-spin text-sky-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-slate-600 dark:text-slate-300",children:"در حال دریافت گارانتی‌های شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-slate-100 pb-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-white",children:[(0,e.jsx)(Ba,{className:"h-5 w-5 text-sky-600"}),"گارانتی‌های ثبت‌شده من"]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-slate-500 dark:text-slate-400",children:[t.length," درخواست گارانتی ثبت شده"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void g(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),b?(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(Le,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:b})]}):null,!b&&t.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center dark:border-slate-700 dark:bg-slate-800/40",children:[(0,e.jsx)(pt,{className:"mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:"هنوز درخواست گارانتی ثبت نکرده‌اید."}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-400",children:"با استفاده از فرم بالا، اولین درخواست گارانتی خود را ثبت کنید."})]}):null,!b&&t.length>0?(0,e.jsx)("div",{className:"space-y-3",children:t.map(i=>{const u=Ao(i.status),p=u.icon;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 p-3 dark:border-slate-700 sm:p-4",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:["کد پیگیری:"," ",(0,e.jsx)("span",{className:"font-black text-slate-700 dark:text-slate-200",children:i.trackingCode||i.id})]}),(0,e.jsx)("h4",{className:"mt-1 text-sm font-black text-slate-800 dark:text-white sm:text-base",children:i.productName})]}),(0,e.jsxs)("span",{className:`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black sm:text-xs ${u.color}`,children:[(0,e.jsx)(p,{className:"h-3.5 w-3.5"}),u.label]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:i.customerName})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"موبایل"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",dir:"ltr",children:i.customerPhone})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:[i.quantity," عدد"]})]})]}),i.issueDescription?(0,e.jsxs)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-500 sm:text-xs",children:"شرح مشکل:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-600 dark:text-slate-300 sm:text-sm",children:i.issueDescription})]}):null,i.adminNote?(0,e.jsxs)("div",{className:"border-t border-slate-100 bg-amber-50 px-3 py-2 dark:border-slate-700 dark:bg-amber-950/20 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-amber-700 dark:text-amber-300 sm:text-xs",children:"یادداشت ادمین:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-amber-800 dark:text-amber-200 sm:text-sm",children:i.adminNote})]}):null,(0,e.jsx)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:(0,e.jsxs)("p",{className:"text-[10px] text-slate-400 sm:text-xs",children:["ثبت: ",rn(i.createdAt),i.decidedAt?` · تصمیم: ${rn(i.decidedAt)}`:""]})})]},i.id)})}):null]})},Da="https://myshop-backend-8nu7.onrender.com/api",an=Da.endsWith("/api")?Da.slice(0,-4):Da,sn=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",nn=new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(new Date),To=t=>{const r=Number(t)||0;return r?`${r.toLocaleString("fa-IR")} تومان`:"—"},Ro=()=>{const t=(0,a.useRef)(null),[r,s]=(0,a.useState)(""),[o,b]=(0,a.useState)(""),[n,g]=(0,a.useState)(""),[i,u]=(0,a.useState)(1),[p,d]=(0,a.useState)(""),[N,j]=(0,a.useState)(null),[k,x]=(0,a.useState)(""),[h,w]=(0,a.useState)(null),[c,$]=(0,a.useState)(!1),[U,P]=(0,a.useState)(null),[O,H]=(0,a.useState)(null),[T,I]=(0,a.useState)(null),[f,A]=(0,a.useState)([]),[B,D]=(0,a.useState)(!0),[W,K]=(0,a.useState)(null),S=(0,a.useMemo)(()=>f.find(L=>L.productId===n)||null,[n,f]),z=async()=>{try{D(!0),K(null);const L=sn(),C=await fetch(`${an}/api/warranties/form-data`,{headers:{Authorization:`Bearer ${L}`,Accept:"application/json"}}),_=await C.json();if(!C.ok||!_.success||!_.data)throw new Error(_.error||"خطا در دریافت اطلاعات فرم گارانتی.");I(_.data.representative),A(Array.isArray(_.data.products)?_.data.products:[])}catch(L){console.error("خطا در دریافت داده‌های فرم گارانتی:",L),K(L instanceof Error?L.message:"خطا در ارتباط با سرور.")}finally{D(!1)}};(0,a.useEffect)(()=>{z()},[]);const y=L=>{const C=L.target.files?.[0];if(!C)return;if(C.size>5242880){alert("حجم فایل باید حداکثر ۵ مگابایت باشد.");return}const _=new FileReader;_.onload=()=>{j(String(_.result||"")),x(C.name),w(C),P(null)},_.readAsDataURL(C)},m=()=>{j(null),x(""),w(null),t.current&&(t.current.value="")},v=L=>{const C=L.target.value;g(C),u(1)},F=async L=>{L.preventDefault(),$(!0),P(null),H(null);try{const C=sn();if(!C)throw new Error("توکن ورود پیدا نشد.");if(!S)throw new Error("محصولی انتخاب نشده است.");const _=new FormData;if(_.append("customerName",r.trim()),_.append("customerPhone",o.replace(/[\s-]/g,"")),_.append("productId",S.productId),_.append("quantity",String(i)),_.append("issueDescription",p.trim()),!h)throw new Error("فایلی انتخاب نشده است.");_.append("image",h,h.name);const ee=await(await fetch(`${an}/api/warranties`,{method:"POST",headers:{Authorization:`Bearer ${C}`,Accept:"application/json"},body:_})).json();if(!ee.success)throw new Error(ee.error||"خطا در ثبت");H("درخواست با موفقیت ثبت شد."),s(""),b(""),g(""),u(1),d(""),m(),await z()}catch(C){P(C?.message||"خطا")}finally{$(!1)}};return B?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[420px] items-center justify-center rounded-2xl border border-sky-100 bg-white",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3 text-center",children:[(0,e.jsx)(xe,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600",children:"در حال دریافت اطلاعات انبار و کد نمایندگی..."})]})}):W?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)(Le,{className:"mx-auto h-10 w-10 text-red-500"}),(0,e.jsx)("p",{className:"mt-3 font-black text-red-700",children:"دریافت اطلاعات گارانتی ناموفق بود"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600",children:W}),(0,e.jsx)("button",{type:"button",onClick:()=>{z()},className:"mt-5 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:"تلاش مجدد"})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 pb-8",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-sky-700 via-cyan-600 to-teal-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl"}),(0,e.jsx)("div",{className:"absolute -bottom-16 right-24 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(St,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"سامانه خدمات پس از فروش"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"استفاده از گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm font-medium leading-7 text-sky-50 md:text-base",children:"اطلاعات مشتری، کالای موجود در انبار و تصویر خرابی را ثبت کنید تا درخواست شما برای بررسی ارسال شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(lt,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"text-sm font-black",children:nn})]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(St,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"text-sm font-black",children:T?.code||"ثبت نشده"})]})]})]})]})]}),(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"min-w-full text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-50 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"مرحله"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"کاری که باید انجام دهید"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"نکته مهم"})]})}),(0,e.jsxs)("tbody",{className:"divide-y divide-slate-100 text-sm text-slate-700",children:[(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۱"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"اطلاعات مشتری و محصول را ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"محصول فقط از موجودی انبار اختصاصی نمایندگی شما انتخاب می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۲"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"مشکل کالا را دقیق توضیح دهید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"شرح کامل خرابی باعث بررسی سریع‌تر درخواست می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۳"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"فایل (عکس) از کالا یا خرابی ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"در موبایل، دوربین پشت گوشی برای ثبت فایل باز می‌شود. هر نام و پسوندی قابل قبول است."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۴"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"درخواست را برای بررسی ارسال کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"وضعیت اولیه تمام درخواست‌ها «در انتظار بررسی» است."})]})]})]})})]}),(0,e.jsxs)("form",{onSubmit:F,noValidate:!0,className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(Gr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"فرم ثبت درخواست گارانتی"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-medium text-slate-500",children:"همه فیلدهای دارای علامت * الزامی هستند."})]})]}),(0,e.jsx)("span",{className:"w-fit rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700",children:"وضعیت پس از ثبت: در انتظار بررسی"})]}),(0,e.jsxs)("div",{className:"p-5 md:p-7",children:[U?(0,e.jsxs)("div",{className:"mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(Le,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black",children:"ثبت درخواست ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:U})]})]}):null,O?(0,e.jsxs)("div",{className:"mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:[(0,e.jsx)(we,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black",children:"درخواست گارانتی ثبت شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:O})]})]}):null,(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(At,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات مشتری و نمایندگی"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["نام مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(At,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"text",value:r,onChange:L=>{s(L.target.value)},placeholder:"مثال: علی رضایی",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["شماره موبایل مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ea,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"tel",inputMode:"numeric",dir:"ltr",value:o,onChange:L=>{b(L.target.value)},placeholder:"028-33236072",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-left text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"کد نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 text-sky-800",children:[(0,e.jsx)(St,{className:"h-4 w-4 shrink-0 text-sky-600"}),(0,e.jsx)("span",{dir:"ltr",className:"text-sm font-black",children:T?.code||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"نام نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(At,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:T?.name||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"شهر نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(Ct,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:T?.city||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"تاریخ درخواست"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(lt,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:nn})]})]})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Hr,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات کالا"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["انتخاب محصول از انبار"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(Hr,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsxs)("select",{value:n,onChange:v,className:"w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-10 text-sm font-medium text-slate-800 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"",children:"انتخاب محصول موجود در انبار"}),f.map(L=>(0,e.jsxs)("option",{value:L.productId,children:[L.productName," — ",L.brand||"بدون برند"," — موجودی: ",L.quantity]},L.warehouseItemId))]}),(0,e.jsx)(ta,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),f.length===0?(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-600",children:"کالای دارای موجودی در انبار شما پیدا نشد."}):null]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["تعداد"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("input",{type:"number",min:"1",max:S?.quantity||1,value:i,disabled:!S,onChange:L=>{u(Number(L.target.value)||1)},className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-800 outline-none transition-all disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{className:"mt-4 grid gap-4 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:S?.brand||"پس از انتخاب محصول"})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"موجودی قابل ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:S?`${S.quantity} عدد`:"—"})]}),(0,e.jsx)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:S?To(S.unitPrice):"—"})})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-bold text-slate-700",children:[(0,e.jsx)(Le,{className:"h-4 w-4 text-sky-600"}),"شرح مشکل کالا"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("textarea",{rows:5,value:p,onChange:L=>{d(L.target.value)},placeholder:"مشکل یا خرابی کالا را با جزئیات توضیح دهید؛ مثال: نشتی از محل اتصال، شکستگی بدنه، عملکرد نادرست و...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-medium text-slate-400",children:"حداقل ۱۰ کاراکتر وارد کنید."})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)(ls,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"فایل (عکس) کالا یا خرابی"}),(0,e.jsx)("span",{className:"text-sm font-bold text-rose-500",children:"*"})]}),(0,e.jsx)("input",{ref:t,type:"file",accept:"*/*",capture:"environment",onChange:y,className:"hidden"}),N?(0,e.jsx)("div",{className:"relative overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 p-3",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[(0,e.jsx)("img",{src:N,alt:"پیش‌نمایش فایل گارانتی",className:"h-44 w-full rounded-xl object-cover sm:w-56"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-emerald-700",children:[(0,e.jsx)(we,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("p",{className:"font-black",children:"فایل آمادهٔ ارسال است"})]}),(0,e.jsx)("p",{className:"mt-2 truncate text-sm font-medium text-slate-600",children:k}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-slate-500",children:"پیش از ثبت نهایی، از واضح بودن عکس و مشخص بودن خرابی اطمینان بگیرید."}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"inline-flex items-center gap-2 rounded-lg border border-sky-300 bg-white px-3 py-2 text-xs font-bold text-sky-700 transition-colors hover:bg-sky-50",children:[(0,e.jsx)(ls,{className:"h-4 w-4"}),"تغییر فایل"]}),(0,e.jsxs)("button",{type:"button",onClick:m,className:"inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-50",children:[(0,e.jsx)(Ae,{className:"h-4 w-4"}),"حذف فایل"]})]})]})]})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"group flex min-h-44 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/60 px-5 py-7 text-center transition-all hover:border-sky-500 hover:bg-sky-50",children:[(0,e.jsx)("span",{className:"mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm transition-transform group-hover:scale-110",children:(0,e.jsx)(wl,{className:"h-7 w-7"})}),(0,e.jsx)("span",{className:"font-black text-sky-800",children:"گرفتن عکس با دوربین یا انتخاب فایل"}),(0,e.jsx)("span",{className:"mt-2 max-w-md text-xs font-medium leading-6 text-slate-500",children:"در تلفن همراه دوربین پشت گوشی باز می‌شود. هر نام و پسوندی قابل قبول است؛ فقط حجم فایل باید حداکثر ۵ مگابایت باشد."})]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("p",{className:"flex items-center gap-2 text-xs font-medium text-slate-500",children:[(0,e.jsx)(St,{className:"h-4 w-4 text-sky-600"}),"کد نمایندگی و محصول از اطلاعات واقعی حساب و انبار شما دریافت شده‌اند."]}),(0,e.jsx)("button",{type:"submit",disabled:c,className:"inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-sky-700 to-cyan-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:from-sky-800 hover:to-cyan-700 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:c?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}),"در حال ثبت درخواست..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(St,{className:"h-5 w-5"}),"ثبت نهایی درخواست گارانتی"]})})]})]})]}),(0,e.jsx)("div",{className:"mt-6",children:(0,e.jsx)(Do,{})})]})},Ta="https://myshop-backend-8nu7.onrender.com/api",Oa=Ta.endsWith("/api")?Ta.slice(0,-4):Ta,ln=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",on=t=>t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")?t:`${Oa}${t}`:"",ur=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(r)},Eo={pending:{label:"در انتظار بررسی",className:"border-amber-200 bg-amber-50 text-amber-700",icon:Ja},approved:{label:"تأیید شده",className:"border-emerald-200 bg-emerald-50 text-emerald-700",icon:we},rejected:{label:"رد شده",className:"border-rose-200 bg-rose-50 text-rose-700",icon:nt}},Ra=({status:t})=>{const r=Eo[t],s=r.icon;return(0,e.jsxs)("span",{className:["inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-lg border px-2 py-1.5 text-[10px] font-black sm:px-2.5 sm:text-xs",r.className].join(" "),children:[(0,e.jsx)(s,{className:"h-3.5 w-3.5 shrink-0"}),r.label]})},Po=({warranty:t})=>t.status!=="approved"?null:t.smsStatus==="sent"?(0,e.jsx)("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(we,{className:"mt-0.5 h-6 w-6 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-emerald-900",children:"پیامک تأیید گارانتی ارسال شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-emerald-800",children:"پیامک اطلاع‌رسانی تأیید گارانتی برای مشتری ارسال شده است."}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:["زمان ارسال:"," ",ur(t.smsSentAt)]})]})]})}):t.smsStatus==="sending"?(0,e.jsx)("div",{className:"rounded-2xl border border-sky-200 bg-sky-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(xe,{className:"mt-0.5 h-6 w-6 shrink-0 animate-spin text-sky-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-sky-900",children:"در حال ارسال پیامک"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-sky-800",children:"درخواست تأیید شده و وضعیت ارسال پیامک در حال بررسی است."})]})]})}):t.smsStatus==="skipped"?(0,e.jsx)("div",{className:"rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Ja,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"پیامک ارسال نشد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-amber-800",children:"گارانتی تأیید شده است، اما پیامک برای مشتری ارسال نشد."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-amber-700",children:["دلیل: ",t.smsError]}):null]})]})}):t.smsStatus==="failed"?(0,e.jsx)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Le,{className:"mt-0.5 h-6 w-6 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-rose-900",children:"ارسال پیامک ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-rose-800",children:"گارانتی تأیید و موجودی انبار کم شده است، اما سامانه پیامک پاسخ موفق نداده است."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-rose-700",children:["خطا: ",t.smsError]}):null]})]})}):(0,e.jsx)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ea,{className:"mt-0.5 h-6 w-6 shrink-0 text-slate-500"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"وضعیت پیامک گارانتی ثبت نشده است"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-slate-600",children:"این درخواست ممکن است پیش از فعال‌شدن پیامک گارانتی تأیید شده باشد."})]})]})}),zo=()=>{const[t,r]=(0,a.useState)([]),[s,o]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,i]=(0,a.useState)(""),[u,p]=(0,a.useState)("all"),[d,N]=(0,a.useState)(null),[j,k]=(0,a.useState)(""),[x,h]=(0,a.useState)(null),[w,c]=(0,a.useState)(null),[$,U]=(0,a.useState)(null),[P,O]=(0,a.useState)(!1),H=async()=>{try{o(!0),n(null);const D=ln();if(!D)throw new Error("توکن ورود پیدا نشد. دوباره وارد شوید.");const W=await fetch(`${Oa}/api/warranties/admin/all`,{headers:{Authorization:`Bearer ${D}`,Accept:"application/json"}}),K=await W.json();if(!W.ok||!K.success)throw new Error(K.error||"دریافت درخواست‌های گارانتی ناموفق بود.");r(Array.isArray(K.data)?K.data:[])}catch(D){console.error("خطا در دریافت درخواست‌های گارانتی:",D),n(D instanceof Error?D.message:"خطا در ارتباط با سرور.")}finally{o(!1)}};(0,a.useEffect)(()=>{H()},[]),(0,a.useEffect)(()=>{d&&(k(d.adminNote||""),c(null),U(null),O(!1))},[d]);const T=(0,a.useMemo)(()=>{const D=g.trim().toLocaleLowerCase("fa-IR");return t.filter(W=>u==="all"||W.status===u?D?[W.id,W.representativeName,W.representativeCode,W.representativeCity,W.customerName,W.customerPhone,W.productName,W.brand,W.category].filter(Boolean).join(" ").toLocaleLowerCase("fa-IR").includes(D):!0:!1)},[g,u,t]),I=(0,a.useMemo)(()=>t.reduce((D,W)=>(D.total+=1,D[W.status]+=1,D),{total:0,pending:0,approved:0,rejected:0}),[t]),f=D=>{r(W=>W.map(K=>K.id===D.id?D:K)),N(D)},A=()=>{x||(N(null),c(null),U(null))},B=async D=>{if(!d||d.status!=="pending"||D!=="approved"&&D!=="rejected")return;const W=D==="approved"?`آیا از تأیید این درخواست مطمئن هستید؟

${d.quantity} عدد از محصول «${d.productName}» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد.`:`آیا از رد این درخواست مطمئن هستید؟

موجودی انبار تغییری نمی‌کند.`;if(window.confirm(W))try{h(D),c(null),U(null);const K=ln();if(!K)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");const S=await fetch(`${Oa}/api/warranties/admin/${d.id}/decision`,{method:"PATCH",headers:{Authorization:`Bearer ${K}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({status:D,adminNote:j.trim()})}),z=await S.json();if(!S.ok||!z.success)throw new Error(z.error||"ثبت تصمیم ادمین ناموفق بود.");z.data?.warranty&&f(z.data.warranty),U(z.message||"تصمیم با موفقیت ثبت شد.")}catch(K){console.error("خطا در ثبت تصمیم گارانتی:",K),c(K instanceof Error?K.message:"خطا در ارتباط با سرور.")}finally{h(null)}};return s?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[440px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,e.jsx)(xe,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-600",children:"در حال دریافت درخواست‌های گارانتی..."})]})}):b?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-3xl border border-rose-200 bg-rose-50 p-7 text-center",children:[(0,e.jsx)(Le,{className:"mx-auto h-12 w-12 text-rose-500"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-rose-800",children:"دریافت اطلاعات ناموفق بود"}),(0,e.jsx)("p",{className:"mx-auto mt-2 max-w-xl text-sm leading-7 text-rose-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{H()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-rose-700",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("section",{dir:"rtl",className:"w-full min-w-0 space-y-5 overflow-x-hidden pb-10",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-xl shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-slate-950 via-sky-950 to-cyan-700 px-5 py-7 text-white md:px-8",children:[(0,e.jsx)("div",{className:"absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(St,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"مدیریت خدمات پس از فروش"})]}),(0,e.jsx)("h1",{className:"text-2xl font-black md:text-3xl",children:"بررسی درخواست‌های گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm leading-7 text-sky-100",children:"درخواست‌ها را بررسی کنید و پس از تأیید، موجودی کالای نماینده را به‌صورت خودکار کاهش دهید."})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{H()},className:"inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur transition-colors hover:bg-white/20",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})]}),(0,e.jsxs)("div",{className:"grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4",children:[(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کل درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-slate-800",children:I.total.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-600",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-amber-700",children:I.pending.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-600",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-700",children:I.approved.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-rose-600",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-rose-700",children:I.rejected.toLocaleString("fa-IR")})]})]})]}),(0,e.jsx)("div",{className:"rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5",children:(0,e.jsxs)("div",{className:"grid gap-3 lg:grid-cols-[minmax(0,1fr)_230px]",children:[(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsx)(ht,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:g,onChange:D=>{i(D.target.value)},placeholder:"جست‌وجو در مشتری، نماینده، محصول یا برند...",className:"h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white py-3 pr-11 pl-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]}),(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsxs)("select",{value:u,onChange:D=>{p(D.target.value)},className:"h-12 w-full min-w-0 appearance-none rounded-xl border border-slate-300 bg-white px-4 pl-10 text-sm font-bold text-slate-700 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"all",children:"همه وضعیت‌ها"}),(0,e.jsx)("option",{value:"pending",children:"در انتظار بررسی"}),(0,e.jsx)("option",{value:"approved",children:"تأیید شده"}),(0,e.jsx)("option",{value:"rejected",children:"رد شده"})]}),(0,e.jsx)(ta,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]})]})}),(0,e.jsxs)("div",{className:"min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-2 border-b border-slate-200 bg-gradient-to-l from-slate-50 to-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2",children:[(0,e.jsx)(Ge,{className:"h-5 w-5 shrink-0 text-sky-600"}),(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"فهرست درخواست‌ها"})]}),(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500",children:["نمایش"," ",T.length.toLocaleString("fa-IR")," ","درخواست"]})]}),T.length===0?(0,e.jsxs)("div",{className:"px-5 py-20 text-center",children:[(0,e.jsx)(Ge,{className:"mx-auto h-14 w-14 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-700",children:"درخواستی پیدا نشد"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"جست‌وجو یا فیلتر وضعیت را تغییر دهید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-3 md:hidden",children:T.map(D=>(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate text-sm font-black text-slate-800",children:D.productName||"بدون نام"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-medium text-slate-500",children:D.brand||"بدون برند"})]}),(0,e.jsx)(Ra,{status:D.status})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:D.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:D.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:D.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:D.customerPhone||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-black text-sky-700",children:[Number(D.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-[10px] font-bold leading-5 text-slate-600",children:ur(D.requestDate||D.createdAt)})]})]}),(0,e.jsx)("div",{className:"border-t border-slate-100 p-3",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{N(D)},className:"inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-xs font-black text-sky-700 transition-colors hover:bg-sky-100",children:[(0,e.jsx)($t,{className:"h-4 w-4"}),"بررسی کامل درخواست"]})})]},D.id))}),(0,e.jsx)("div",{className:"hidden w-full overflow-hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-100 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[16%]",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[15%]",children:"مشتری"}),(0,e.jsx)("th",{className:"w-[30%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[27%]",children:"محصول"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black lg:table-cell lg:w-[7%]",children:"تعداد"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black xl:table-cell xl:w-[13%]",children:"تاریخ"}),(0,e.jsx)("th",{className:"w-[20%] border-b border-slate-200 px-2 py-4 text-xs font-black lg:w-[16%]",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[14%] border-b border-slate-200 px-2 py-4 text-center text-xs font-black lg:w-[12%]",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100",children:T.map(D=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:D.representativeName,className:"truncate text-xs font-black text-slate-800 lg:text-sm",children:D.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:D.representativeCode,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:D.representativeCode||"—"}),(0,e.jsx)("p",{className:"mt-1 truncate text-[10px] text-slate-400",children:D.representativeCity||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:D.customerName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:D.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:D.customerPhone,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:D.customerPhone||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:D.productName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:D.productName||"—"}),(0,e.jsx)("p",{title:D.brand,className:"mt-1 truncate text-[10px] text-slate-500 lg:text-xs",children:D.brand||"بدون برند"})]}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top lg:table-cell",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-sky-50 px-2 py-1.5 text-xs font-black text-sky-700",children:Number(D.quantity||0).toLocaleString("fa-IR")})}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top text-[10px] font-medium leading-5 text-slate-600 xl:table-cell",children:ur(D.requestDate||D.createdAt)}),(0,e.jsx)("td",{className:"min-w-0 px-2 py-4 align-top",children:(0,e.jsx)(Ra,{status:D.status})}),(0,e.jsx)("td",{className:"px-2 py-4 text-center align-top",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{N(D)},className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-700 transition-colors hover:bg-sky-100 lg:h-auto lg:w-auto lg:gap-1.5 lg:px-3 lg:py-2",title:"بررسی درخواست","aria-label":"بررسی درخواست",children:[(0,e.jsx)($t,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden xl:inline",children:"بررسی"})]})})]},D.id))})]})})]})]}),d?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-end bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-5",role:"dialog","aria-modal":"true","aria-label":"بررسی درخواست گارانتی",onMouseDown:D=>{D.target===D.currentTarget&&A()},children:(0,e.jsxs)("div",{className:"flex max-h-[96vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-6xl sm:rounded-3xl",children:[(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-7",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(Ge,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"بررسی درخواست گارانتی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-xs font-bold text-slate-500",children:d.id})]})]}),(0,e.jsx)("button",{type:"button",onClick:A,disabled:!!x,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"min-h-0 overflow-y-auto p-5 md:p-7",children:[w?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(Le,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:w})]}):null,$?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:[(0,e.jsx)(we,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:$})]}):null,(0,e.jsxs)("div",{className:"mb-6 grid gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"وضعیت درخواست"}),(0,e.jsx)("div",{className:"mt-2",children:(0,e.jsx)(Ra,{status:d.status})})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-black text-slate-700",children:ur(d.requestDate||d.createdAt)})]})]}),(0,e.jsx)("div",{className:"mb-6",children:(0,e.jsx)(Po,{warranty:d})}),(0,e.jsxs)("div",{className:"grid gap-5 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(It,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات نماینده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:d.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)(Ct,{className:"h-3.5 w-3.5"}),"شهر"]}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.representativeCity||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(At,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات مشتری"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.customerName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)(ea,{className:"h-3.5 w-3.5"}),"موبایل"]}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:d.customerPhone||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(pt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"کالای درخواست‌شده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"محصول"}),(0,e.jsx)("p",{className:"mt-1 break-words text-sm font-black text-slate-800",children:d.productName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.brand||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-sky-700",children:[Number(d.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]})]})]})]}),(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)(mt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"شرح مشکل"})]}),(0,e.jsx)("p",{className:"min-h-32 break-words whitespace-pre-wrap p-4 text-sm font-medium leading-8 text-slate-700",children:d.issueDescription||"شرحی ثبت نشده است."})]}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)($t,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"تصویر یا فایل پیوست"})]}),d.image&&!P?(0,e.jsx)("a",{href:on(d.image),target:"_blank",rel:"noreferrer",className:"block bg-slate-100",children:(0,e.jsx)("img",{src:on(d.image),alt:"پیوست درخواست گارانتی",onError:()=>{O(!0)},className:"h-64 w-full object-contain sm:h-72"})}):(0,e.jsxs)("div",{className:"flex h-64 flex-col items-center justify-center p-4 text-center sm:h-72",children:[(0,e.jsx)(Al,{className:"h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-slate-500",children:"فایل پیوست در دسترس نیست."})]})]})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-2xl border border-slate-200 bg-white p-4",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-black text-slate-800",children:[(0,e.jsx)(Ba,{className:"h-5 w-5 text-sky-600"}),"یادداشت ادمین"]}),(0,e.jsx)("textarea",{rows:4,value:j,disabled:d.status!=="pending"||!!x,onChange:D=>{k(D.target.value)},placeholder:"یادداشت بررسی یا علت رد درخواست را بنویسید...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-100"})]}),d.status!=="pending"?(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-slate-50 p-3 text-xs font-bold leading-6 text-slate-600",children:["این درخواست قبلاً توسط"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:d.decidedBy||"ادمین"})," ","در تاریخ"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:ur(d.decidedAt)})," ","نهایی شده است."]}):null]}),d.status==="pending"?(0,e.jsx)("div",{className:"mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex gap-3",children:[(0,e.jsx)(Ja,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"هشدار تأیید"}),(0,e.jsxs)("p",{className:"mt-1 break-words text-sm font-medium leading-7 text-amber-800",children:["با تأیید،"," ",(0,e.jsxs)("span",{className:"font-black",children:[Number(d.quantity||0).toLocaleString("fa-IR")," ","عدد"]})," ","از محصول «",(0,e.jsx)("span",{className:"font-black",children:d.productName}),"» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد."]})]})]})}):null,(0,e.jsxs)("div",{className:"mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:A,disabled:!!x,className:"min-h-11 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",children:"بستن"}),d.status==="pending"?(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",disabled:!!x,onClick:()=>{B("rejected")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60",children:[x==="rejected"?(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(nt,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:!!x,onClick:()=>{B("approved")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-700 to-teal-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-700/20 transition-all hover:-translate-y-0.5 hover:from-emerald-800 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:[x==="approved"?(0,e.jsx)(xe,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(we,{className:"h-5 w-5"}),"تأیید و کسر از انبار"]})]}):(0,e.jsxs)("div",{className:"flex items-center gap-2 text-sm font-black text-slate-600",children:[d.status==="approved"?(0,e.jsx)(we,{className:"h-5 w-5 text-emerald-600"}):(0,e.jsx)(nt,{className:"h-5 w-5 text-rose-600"}),"این درخواست نهایی شده است."]})]})]})]})}):null]})},Ea="https://myshop-backend-8nu7.onrender.com/api",Ur=Ea.endsWith("/api")?Ea.slice(0,-4):Ea,Pa=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",dn=()=>{const[t,r]=(0,a.useState)([]),[s,o]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,i]=(0,a.useState)(""),[u,p]=(0,a.useState)(!1),[d,N]=(0,a.useState)(!1),[j,k]=(0,a.useState)(null),[x,h]=(0,a.useState)({title:"",content:""}),w=async()=>{try{o(!0),n(null);const I=Pa(),f=await fetch(`${Ur}/api/notes`,{headers:{Authorization:`Bearer ${I}`,Accept:"application/json"}}),A=await f.json();if(!f.ok||!A.success)throw new Error(A.error||"خطا در دریافت یادداشت‌ها");if(!Array.isArray(A.data))throw new Error("فرمت داده‌های یادداشت‌ها نامعتبر است.");r(A.data)}catch(I){console.error("خطا در دریافت یادداشت‌ها:",I),n(I instanceof Error?I.message:"خطا در ارتباط با سرور")}finally{o(!1)}};(0,a.useEffect)(()=>{w()},[]);const c=()=>{d||(p(!1),k(null),h({title:"",content:""}))},$=()=>{k(null),h({title:"",content:""}),p(!0)},U=I=>{k(I),h({title:I.title||"",content:I.content||""}),p(!0)},P=async I=>{if(window.confirm("آیا از حذف این یادداشت مطمئن هستید؟"))try{const f=Pa(),A=await fetch(`${Ur}/api/notes/${I}`,{method:"DELETE",headers:{Authorization:`Bearer ${f}`,Accept:"application/json"}}),B=await A.json();if(!A.ok||!B.success)throw new Error(B.error||"خطا در حذف یادداشت");r(D=>D.filter(W=>W.id!==I))}catch(f){console.error("خطا در حذف یادداشت:",f),alert(f instanceof Error?f.message:"خطا در ارتباط با سرور")}},O=async I=>{I.preventDefault();const f=x.title.trim(),A=x.content.trim();if(!f||!A){alert("عنوان و متن یادداشت الزامی است.");return}try{N(!0);const B=Pa(),D=!!j?.id,W=D?`${Ur}/api/notes/${j?.id}`:`${Ur}/api/notes`,K=await fetch(W,{method:D?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${B}`,Accept:"application/json"},body:JSON.stringify({title:f,content:A,color:"blue"})}),S=await K.json();if(!K.ok||!S.success||!S.data)throw new Error(S.error||"خطا در ذخیره یادداشت");const z=S.data;r(D?y=>y.map(m=>m.id===z.id?z:m):y=>[z,...y]),c()}catch(B){console.error("خطا در ذخیره یادداشت:",B),alert(B instanceof Error?B.message:"خطا در ارتباط با سرور")}finally{N(!1)}},H=t.filter(I=>{const f=(I.title||"").toLowerCase(),A=(I.content||"").toLowerCase(),B=g.trim().toLowerCase();return f.includes(B)||A.includes(B)}),T=I=>{if(!I)return"تاریخ نامشخص";const f=new Date(I);return Number.isNaN(f.getTime())?"تاریخ نامشخص":f.toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-[calc(100vh-120px)] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/60 p-3 md:p-6",children:[(0,e.jsxs)("div",{className:"mx-auto max-w-6xl",children:[(0,e.jsxs)("section",{className:"mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-blue-100",children:[(0,e.jsx)(Kt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"فضای شخصی شما"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"یادداشت‌های من"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-medium leading-7 text-blue-50",children:"یادداشت‌های شخصی خود را ثبت، جست‌وجو، ویرایش و مدیریت کنید."})]}),(0,e.jsxs)("button",{type:"button",onClick:$,className:"relative flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 font-black text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-xl active:translate-y-0",children:[(0,e.jsx)(kr,{className:"h-5 w-5"}),"یادداشت جدید"]})]})]}),(0,e.jsx)("div",{className:"p-4 md:p-5",children:(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ht,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400"}),(0,e.jsx)("input",{type:"text",placeholder:"جست‌وجو در عنوان یا متن یادداشت‌ها...",value:g,onChange:I=>{i(I.target.value)},className:"w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pr-10 pl-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"})]})})]}),s?(0,e.jsx)("div",{className:"flex items-center justify-center py-24",children:(0,e.jsx)("div",{className:"h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"})}):b?(0,e.jsxs)("div",{className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)("p",{className:"font-bold text-red-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{w()},className:"mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(qe,{className:"h-4 w-4"}),"تلاش مجدد"]})]}):H.length===0?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-white py-20 text-center shadow-sm",children:[(0,e.jsx)("div",{className:"mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500",children:(0,e.jsx)(Kt,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"text-lg font-black text-slate-700",children:g?"یادداشتی پیدا نشد":"هنوز یادداشتی ندارید"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:g?"عبارت جست‌وجو را تغییر دهید.":"با دکمهٔ «یادداشت جدید» اولین یادداشت خود را بسازید."})]}):(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:H.map(I=>(0,e.jsxs)("article",{className:"group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10",children:[(0,e.jsx)("div",{className:"h-1.5 bg-gradient-to-l from-blue-700 via-blue-500 to-cyan-400"}),(0,e.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110",children:(0,e.jsx)(Kt,{className:"h-5 w-5"})}),(0,e.jsx)("h3",{className:"line-clamp-2 min-w-0 pt-1 text-lg font-black text-slate-800",children:I.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{U(I)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600",title:"ویرایش یادداشت","aria-label":"ویرایش یادداشت",children:(0,e.jsx)(Xt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{P(I.id)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600",title:"حذف یادداشت","aria-label":"حذف یادداشت",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]})]}),(0,e.jsx)("p",{className:"mb-5 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-slate-600",children:I.content||"بدون متن"}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 border-t border-slate-100 pt-3",children:[(0,e.jsxs)("span",{className:"min-w-0 truncate text-xs font-medium text-slate-400",children:["آخرین ویرایش: ",T(I.updatedAt||I.createdAt)]}),(0,e.jsx)("span",{className:"shrink-0 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-black text-blue-700",children:"یادداشت شخصی"})]})]})]},I.id))})]}),u?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm",onClick:c,role:"presentation",children:(0,e.jsxs)("div",{className:"w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:I=>{I.stopPropagation()},role:"dialog","aria-modal":"true","aria-label":j?"ویرایش یادداشت":"یادداشت جدید",children:[(0,e.jsx)("div",{className:"bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 p-5 text-white",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15",children:(0,e.jsx)(Kt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black",children:j?"ویرایش یادداشت":"یادداشت جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-medium text-blue-100",children:"عنوان و متن یادداشت شخصی خود را وارد کنید."})]})]}),(0,e.jsx)("button",{type:"button",onClick:c,disabled:d,className:"rounded-lg p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن پنجره",children:(0,e.jsx)(Ae,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("form",{onSubmit:O,className:"p-5",children:[(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsx)("label",{htmlFor:"note-title",className:"mb-2 block text-sm font-black text-slate-700",children:"عنوان یادداشت"}),(0,e.jsx)("input",{id:"note-title",type:"text",value:x.title,onChange:I=>{h(f=>({...f,title:I.target.value}))},className:"w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"مثال: پیگیری سفارش هفتهٔ آینده",maxLength:120,required:!0,disabled:d})]}),(0,e.jsxs)("div",{className:"mb-6",children:[(0,e.jsx)("label",{htmlFor:"note-content",className:"mb-2 block text-sm font-black text-slate-700",children:"متن یادداشت"}),(0,e.jsx)("textarea",{id:"note-content",value:x.content,onChange:I=>{h(f=>({...f,content:I.target.value}))},rows:7,className:"w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"متن یادداشت خود را اینجا بنویسید...",maxLength:3e3,required:!0,disabled:d})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:c,disabled:d,className:"rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:d,className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-700 to-cyan-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:from-blue-800 hover:to-cyan-700 disabled:cursor-not-allowed disabled:opacity-70",children:[(0,e.jsx)(Qa,{className:"h-4 w-4"}),d?"در حال ذخیره...":j?"ذخیرهٔ تغییرات":"ثبت یادداشت"]})]})]})]})}):null]})},Mo=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},Fo=t=>Array.isArray(t)?t:Array.isArray(t.data)?t.data:t.data&&Array.isArray(t.data.products)?t.data.products:Array.isArray(t.products)?t.products:[],Qr=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const o of t){const b=s.getItem(o);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const o of r){const b=s.getItem(o);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},za=()=>{const t=Qr();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},cn=(t,r)=>{if(ne.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||t.message||r}return t instanceof Error?t.message:r},Lo=({apiUrl:t})=>{const[r,s]=(0,a.useState)([]),[o,b]=(0,a.useState)(null),[n,g]=(0,a.useState)(!1),[i,u]=(0,a.useState)(null),p=(0,a.useMemo)(()=>Mo(t),[t]),d=(0,a.useRef)(0),N=(0,a.useRef)(null),j=(0,a.useCallback)(async()=>{const k=d.current+1;d.current=k,N.current&&N.current.abort();const x=new AbortController;N.current=x;const h=`${p}/products`;try{g(!0),console.log("📡 دریافت محصولات از:",h);const w=await ne.get(h,{signal:x.signal,params:{_t:Date.now()},headers:za(),withCredentials:!!Qr()});if(x.signal.aborted||k!==d.current)return null;const c=w.data;if(c?.success===!1)throw new Error(c.error||c.message||"دریافت محصولات ناموفق بود.");const $=Fo(c);return s($),console.log("✅ تعداد محصولات دریافت‌شده:",$.length),$}catch(w){return ne.isCancel(w)||x.signal.aborted||k!==d.current||console.error("❌ خطا در بارگذاری محصولات:",w),null}finally{k===d.current&&g(!1)}},[p]);return(0,a.useEffect)(()=>(j(),()=>{d.current+=1,N.current&&N.current.abort()}),[j]),{products:r,editingProduct:o,setEditingProduct:b,loadProducts:j,handleEdit:(0,a.useCallback)(async k=>{try{const x=Qr();await ne.put(`${p}/products/${encodeURIComponent(String(k.id))}`,k,{headers:za(),withCredentials:!!x}),await j(),b(null)}catch(x){console.error("❌ خطا در ویرایش محصول:",x),alert(cn(x,"خطا در ویرایش محصول"))}},[p,j]),handleDelete:(0,a.useCallback)(async k=>{const x=String(k).trim();if(!x){alert("شناسه محصول معتبر نیست.");return}if(i)return;if(!r.some(w=>String(w.id)===x)){alert("این محصول در لیست فعلی وجود ندارد.");return}if(!window.confirm("آیا از حذف این محصول مطمئن هستید؟"))return;const h=r;try{const w=Qr();u(x),g(!0);const c=(await ne.delete(`${p}/products/${encodeURIComponent(x)}`,{headers:za(),withCredentials:!!w})).data;if(c?.success===!1)throw new Error(c.error||c.message||"حذف محصول توسط سرور انجام نشد.");s(U=>U.filter(P=>String(P.id)!==x));const $=await j();if($&&$.some(U=>String(U.id)===x))throw s(h),new Error("سرور محصول را حذف نکرد؛ محصول همچنان در لیست وجود دارد.");console.log("✅ محصول واقعاً حذف شد:",x)}catch(w){console.error("❌ خطا در حذف محصول:",w),s(h),alert(cn(w,"حذف محصول انجام نشد."))}finally{u(null),g(!1)}},[p,i,j,r]),totalProducts:r.length,totalPrice:(0,a.useMemo)(()=>r.reduce((k,x)=>k+(Number(x.price)||0),0),[r]),loading:n,deletingProductId:i}},qo=({apiUrl:t,representativeId:r})=>{const[s,o]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(null),[u,p]=(0,a.useState)(null),d=(0,a.useRef)(0),N=String(t||"").trim().replace(/\/+$/,""),j=(0,a.useCallback)(async h=>{const w=String(h||"").trim();if(!w){d.current+=1,o([]),i(null),n(!1);return}const c=++d.current;n(!0),i(null);try{const $=await ne.get(`${N}/representatives/${encodeURIComponent(w)}/files`,{headers:{Accept:"application/json"},params:{_t:Date.now()}});if(c!==d.current)return;if($.data?.success===!1||!Array.isArray($.data?.files))throw new Error($.data?.error||"پاسخ فهرست فایل‌های نماینده معتبر نیست.");o($.data.files)}catch($){if(c!==d.current)return;const U=ne.isAxiosError($)?$.response?.data?.error||`دریافت فایل‌ها ناموفق بود (HTTP ${$.response?.status??"بدون پاسخ"}).`:$ instanceof Error?$.message:"خطا در دریافت فایل‌های نماینده.";console.error("خطا در بارگذاری پرونده‌های نماینده:",$),o([]),i(U)}finally{c===d.current&&n(!1)}},[N]);(0,a.useEffect)(()=>(r?(o([]),j(r)):(d.current+=1,o([]),i(null),n(!1),p(null)),()=>{d.current+=1}),[r,j]);const k=(0,a.useCallback)(async h=>{if(!r)throw new Error("ابتدا یک نماینده را انتخاب کنید.");const w=new FormData;w.append("file",h);try{await ne.post(`${N}/representatives/${encodeURIComponent(r)}/files`,w,{headers:{Accept:"application/json"}}),await j(r)}catch(c){const $=ne.isAxiosError(c)?c.response?.data?.error||`آپلود فایل ناموفق بود (HTTP ${c.response?.status??"بدون پاسخ"}).`:c instanceof Error?c.message:"خطا در آپلود فایل.";throw new Error($)}},[N,r,j]);return{files:s,loadingFiles:b,filesError:g,viewingFile:u,setViewingFile:p,loadRepresentativeFiles:j,uploadFile:k,deleteFile:async h=>{if(!r)return;const w=s.find(c=>c.id===h);if(w&&window.confirm(`آیا از حذف فایل «${w.name}» مطمئن هستید؟`))try{await ne.delete(`${N}/representatives/${encodeURIComponent(r)}/files/${encodeURIComponent(w.name)}`),await j(r),u?.id===h&&p(null)}catch(c){console.error("خطا در حذف فایل:",c),window.alert("خطا در حذف فایل")}}}},Uo=(t,r=5e3)=>{const s=(0,a.useRef)(t);(0,a.useEffect)(()=>{s.current=t},[t]),(0,a.useEffect)(()=>{const o=setInterval(()=>{s.current()},r);return()=>clearInterval(o)},[r])},vt=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),at=t=>String(t??"").trim(),Oo=t=>String(t||"").trim().replace(/\/+$/,"").replace(/\/api$/,""),Or=(t,r)=>{if(!ne.isAxiosError(t))return t instanceof Error&&t.message?t.message:r;const s=t.response?.data;return s?.error?s.error:s?.message?s.message:t.response?.status===400?"اطلاعات ارسال‌شده معتبر نیست.":t.response?.status===401?"نشست کاربری منقضی یا نامعتبر است؛ دوباره وارد شوید.":t.response?.status===403?"اجازهٔ دسترسی به این بخش را ندارید.":t.response?.status===404?"مسیر نمایندگان در بک‌اند پیدا نشد.":t.response?r:"ارتباط با بک‌اند برقرار نشد؛ اجرای سرور را بررسی کنید."},xn=t=>({...t,name:at(t.name),email:at(t.email),code:at(t.code),province:at(t.province),city:at(t.city),phone:at(t.phone),startDate:at(t.startDate),address:at(t.address),description:at(t.description),shopDescription:at(t.shopDescription),status:t.status==="inactive"?"inactive":"active",orders:Number(t.orders)||0,depositAmount:t.depositAmount??"0",guaranteeCheck:t.guaranteeCheck??"0",totalFinancialCommitment:t.totalFinancialCommitment??"0",shipmentsCount:Number(t.shipmentsCount)||0,storeItemsCount:Number(t.storeItemsCount)||0,storeItemsTotalValue:Number(t.storeItemsTotalValue)||0,returnRequestsCount:Number(t.returnRequestsCount)||0,last10DaysSales:Number(t.last10DaysSales)||0,averageSales:Number(t.averageSales)||0}),_o=({apiUrl:t,isAdmin:r})=>{const[s,o]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(null),u=(0,a.useRef)(0),p=(0,a.useRef)(!1),d=(0,a.useRef)(!1),N=(0,a.useMemo)(()=>Oo(t),[t]),j=(0,a.useCallback)((h=!1)=>{const w=localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"";if(!w)throw new Error("توکن ورود پیدا نشد؛ دوباره وارد شوید.");return{Accept:"application/json",Authorization:`Bearer ${w}`,...h?{"Content-Type":"application/json"}:{}}},[]),k=(0,a.useCallback)(()=>{if(!r)throw new Error("این عملیات فقط برای ادمین مجاز است.")},[r]),x=(0,a.useCallback)(async(h=!1)=>{if(!r||h&&p.current)return;h&&(p.current=!0);const w=++u.current;h||(n(!0),i(null));try{const c=(await ne.get(`${N}/api/representatives`,{headers:j(),params:{_t:Date.now()}})).data;if(c.success===!1)throw new Error(c.error||"خطا در بارگذاری نمایندگان.");if(!d.current||w!==u.current)return;o(Array.isArray(c.data)?c.data:[]),h||i(null)}catch(c){if(!d.current||w!==u.current)return;const $=Or(c,"خطا در بارگذاری نمایندگان.");console.error("خطا در بارگذاری نمایندگان:",$),h||i($)}finally{h&&(p.current=!1),d.current&&w===u.current&&!h&&n(!1)}},[j,r,N]);return(0,a.useEffect)(()=>{d.current=!0,r?x():(o([]),n(!1),i(null));const h=()=>{r&&document.visibilityState==="visible"&&x(!0)};return r&&(window.addEventListener("focus",h),document.addEventListener("visibilitychange",h)),()=>{d.current=!1,u.current+=1,window.removeEventListener("focus",h),document.removeEventListener("visibilitychange",h)}},[r,x]),Uo(x,5e3),{representatives:s,loading:b,error:g,loadRepresentatives:x,addRepresentative:(0,a.useCallback)(async h=>{k();try{const w=(await ne.post(`${N}/api/representatives`,xn(h),{headers:j(!0)})).data;if(w.success===!1||!w.data)throw new Error(w.error||"بک‌اند اطلاعات نمایندهٔ جدید را برنگرداند.");const c=w.data;return u.current+=1,o($=>$.some(U=>vt(U.id)===vt(c.id))?$.map(U=>vt(U.id)===vt(c.id)?c:U):[...$,c]),i(null),c}catch(w){const c=Or(w,"خطا در ثبت نماینده.");throw i(c),window.alert(c),w}},[k,j,N]),updateRepresentative:(0,a.useCallback)(async(h,w)=>{k();const c=vt(h);if(!c)throw new Error("شناسه نماینده برای ویرایش معتبر نیست.");try{const $=(await ne.put(`${N}/api/representatives/${encodeURIComponent(c)}`,xn(w),{headers:j(!0)})).data;if($.success===!1||!$.data)throw new Error($.error||"بک‌اند اطلاعات نمایندهٔ ویرایش‌شده را برنگرداند.");const U=$.data;return u.current+=1,o(P=>P.map(O=>vt(O.id)===c?U:O)),i(null),U}catch($){const U=Or($,"خطا در ویرایش نماینده.");throw i(U),window.alert(U),$}},[k,j,N]),deleteRepresentative:(0,a.useCallback)(async h=>{k();const w=vt(h);if(!w)throw new Error("شناسه نماینده برای حذف معتبر نیست.");try{const c=(await ne.delete(`${N}/api/representatives/${encodeURIComponent(w)}`,{headers:j()})).data;if(c.success===!1)throw new Error(c.error||"خطا در حذف نماینده.");u.current+=1,o($=>$.filter(U=>vt(U.id)!==w)),i(null)}catch(c){const $=Or(c,"خطا در حذف نماینده.");throw i($),window.alert($),c}},[k,j,N])}},Bo=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},kt=Bo("https://myshop-backend-8nu7.onrender.com/api"),Pn=["dashboard","products","representatives","upload","shipments","warehouse","sales-reports","return-requests","support-requests","reports","users","settings","notes","warranties"],_a=["dashboard","products","orders","my-shipments","warehouse","sales-reports","return-request","support","profile","notes","warranties"],Wo=()=>{const t=localStorage.getItem("activeSection")||sessionStorage.getItem("activeSection"),r=[...Pn,..._a];return t&&r.includes(t)?t:"dashboard"},zn=()=>{try{const t=localStorage.getItem("authUser")||sessionStorage.getItem("authUser");return t?JSON.parse(t):null}catch{return null}},Vo=()=>{const t=zn();if(t?.role==="admin"||t?.role==="representative")return t.role;const r=localStorage.getItem("userRole")||sessionStorage.getItem("userRole");return r==="admin"?"admin":r==="representative"||r==="user"?"representative":null},Jr=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage])for(const o of t){const b=s.getItem(o);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const s of[sessionStorage,localStorage])for(const o of r){const b=s.getItem(o);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}return""},mn=()=>{const t=Jr();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},Qo=t=>{if(Array.isArray(t))return t;const r=t;if(Array.isArray(r?.data))return r.data;if(Array.isArray(r?.reports))return r.reports;if(Array.isArray(r?.salesReports))return r.salesReports;if(r?.data&&typeof r.data=="object"){const s=r.data?.data;if(Array.isArray(s))return s}return[]};function Yo(){const t=(0,a.useMemo)(()=>zn(),[]),r=(0,a.useMemo)(()=>Vo(),[]),s=r==="representative",[o,b]=(0,a.useState)(!0),[n,g]=(0,a.useState)(Wo),[i,u]=(0,a.useState)(null),[p,d]=(0,a.useState)(null),[N,j]=(0,a.useState)([]),[k,x]=(0,a.useState)([]),h=(0,a.useCallback)(async()=>{if(!s&&Jr())try{const l=await ne.get(`${kt}/shipments`,{withCredentials:!0,headers:mn(),params:{_:Date.now()}});if(l.data.success===!1)throw new Error(l.data.error||"دریافت بارها ناموفق بود.");j(Array.isArray(l.data.data)?l.data.data:[])}catch(l){console.error("❌ خطا در دریافت بارها:",l)}},[s]),w=(0,a.useCallback)(async()=>{if(!s&&Jr()){for(const l of["/sales-from-warehouse/admin/all","/sales-reports","/sale-reports","/sales","/sales/announcements"])try{const E=await ne.get(`${kt}${l}`,{withCredentials:!0,headers:mn(),params:{_:Date.now()}}),J=Qo(E.data);x(J),console.log(`✅ گزارش‌های فروش از «${l}» دریافت شد (${J.length} مورد)`);return}catch{continue}console.warn("⚠️ هیچ endpoint گزارش فروشی پیدا نشد. لطفاً endpoint اعلام فروش را بررسی کنید.")}},[s]);(0,a.useEffect)(()=>{s||h()},[s,h]),(0,a.useEffect)(()=>{s||(n==="dashboard"||n==="sales-reports"||n==="reports")&&w()},[n,s,w]);const{products:c,editingProduct:$,setEditingProduct:U,loadProducts:P,handleEdit:O,handleDelete:H,totalProducts:T,totalPrice:I}=Lo({apiUrl:kt}),{representatives:f,addRepresentative:A,updateRepresentative:B,deleteRepresentative:D,loadRepresentatives:W}=_o({apiUrl:kt,isAdmin:r==="admin"}),{files:K,loadingFiles:S,viewingFile:z,setViewingFile:y,deleteFile:m}=qo({apiUrl:kt,representativeId:i}),v=(0,a.useCallback)(async l=>{await m(String(l))},[m]),F=(0,a.useCallback)(async()=>{console.log("🔄 شروع بروزرسانی محصولات بعد از آپلود"),await P(),console.log("✅ محصولات بعد از آپلود بروزرسانی شدند")},[P]),L=(0,a.useCallback)(async()=>{await W()},[W]);(0,a.useEffect)(()=>{s&&!_a.includes(n)&&(g("dashboard"),sessionStorage.setItem("activeSection","dashboard"))},[n,s]),(0,a.useEffect)(()=>{sessionStorage.setItem("activeSection",n)},[n]),(0,a.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[n,i,p]),(0,a.useEffect)(()=>{const l=()=>{b(window.innerWidth>=1024)};return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),(0,a.useEffect)(()=>{s&&n==="products"&&P()},[n,s,P]);const C=()=>{u(null),d(null),y(null)},_=l=>{if(s&&!_a.includes(l)){alert("🔒 اجازه ورود به این بخش را ندارید.");return}!s&&!Pn.includes(l)||(C(),g(l),sessionStorage.setItem("activeSection",l),window.innerWidth<1024&&b(!1))},ee=l=>{if(s){alert("🔒 اجازه ورود به این بخش را ندارید.");return}if(!f.some(E=>String(E.id)===String(l))){alert("نماینده موردنظر پیدا نشد. صفحه را رفرش کنید.");return}g("representatives"),d(null),y(null),u(String(l)),sessionStorage.setItem("activeSection","representatives")},V=()=>{C(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},ue=async l=>{await B(String(l.id),{...l,name:l.name?.trim()||"",email:l.email?.trim()||"",province:l.province?.trim()||"",city:l.city?.trim()||"",phone:l.phone?.trim()||"",code:String(l.code??"").trim(),address:l.address?.trim()||"",description:l.description?.trim()||"",shopDescription:l.shopDescription?.trim()||""}),await W()},te=async l=>{await A({name:l.name?.trim()||"",email:l.email?.trim()||"",phone:l.phone?.trim()||"",province:l.province?.trim()||"",city:l.city?.trim()||"",code:String(l.code??"").trim(),address:l.address?.trim()||"",description:l.description?.trim()||"",shopDescription:l.shopDescription?.trim()||"",orders:Number(l.orders)||0,status:l.status==="inactive"?"inactive":"active",startDate:l.startDate||"",depositAmount:l.depositAmount||"0",guaranteeCheck:l.guaranteeCheck||"0",totalFinancialCommitment:l.totalFinancialCommitment||"0",shipmentsCount:Number(l.shipmentsCount)||0,storeItemsCount:Number(l.storeItemsCount)||0,storeItemsTotalValue:Number(l.storeItemsTotalValue)||0,returnRequestsCount:Number(l.returnRequestsCount)||0,last10DaysSales:Number(l.last10DaysSales)||0,averageSales:Number(l.averageSales)||0}),await W(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},le=async(l,E)=>{await B(l,{...E,name:E.name?.trim()||"",email:E.email?.trim()||"",phone:E.phone?.trim()||"",province:E.province?.trim()||"",city:E.city?.trim()||"",code:String(E.code??"").trim(),address:E.address?.trim()||"",description:E.description?.trim()||"",shopDescription:E.shopDescription?.trim()||"",orders:Number(E.orders)||0,status:E.status==="inactive"?"inactive":"active",startDate:E.startDate||"",depositAmount:E.depositAmount||"0",guaranteeCheck:E.guaranteeCheck||"0",totalFinancialCommitment:E.totalFinancialCommitment||"0",shipmentsCount:Number(E.shipmentsCount)||0,storeItemsCount:Number(E.storeItemsCount)||0,storeItemsTotalValue:Number(E.storeItemsTotalValue)||0,returnRequestsCount:Number(E.returnRequestsCount)||0,last10DaysSales:Number(E.last10DaysSales)||0,averageSales:Number(E.averageSales)||0}),await W()},oe=async l=>{await D(l),i&&String(i)===String(l)&&C(),p&&String(p)===String(l)&&C(),await W(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},ie=(0,a.useMemo)(()=>i&&f.find(l=>String(l.id)===String(i))||null,[f,i]),be=(0,a.useMemo)(()=>p&&f.find(l=>String(l.id)===String(p))||null,[f,p]),me=p?`انبار ${be?.name||""}`:i?`داشبورد ${ie?.name||""}`:n==="dashboard"?"داشبورد":n==="products"?"لیست قیمت‌ها":n==="representatives"?"لیست نمایندگان":n==="upload"?"آپلود اکسل":n==="shipments"?"ارسال بار":n==="warehouse"?"انبار نمایندگان":n==="sales-reports"?"اعلام فروش نمایندگان":n==="return-requests"?"درخواست‌های مرجوعی":n==="support-requests"?"رسیدگی به درخواست‌ها":n==="reports"?"گزارشات":n==="users"?"مدیریت کاربران":n==="settings"?"تنظیمات":n==="notes"?"یادداشت‌ها":n==="warranties"?"مدیریت گارانتی":"پنل مدیریت",R=p?"موجودی، ورود و خروج کالا در انبار اختصاصی نماینده":i?"اطلاعات، آمار و پرونده‌های نماینده":n==="dashboard"?"نمای کلی از وضعیت محصولات":n==="products"?"مشاهده لیست قیمت محصولات":n==="representatives"?"مدیریت نمایندگان و پرونده‌های آن‌ها":n==="upload"?"افزودن محصولات از فایل اکسل":n==="shipments"?"ثبت و مدیریت ارسال بار":n==="warehouse"?"مشاهده و مدیریت انبار اختصاصی هر نماینده":n==="sales-reports"?"مشاهده فقط‌خواندنی اعلام فروش ثبت‌شده توسط نمایندگان":n==="return-requests"?"بررسی، تأیید یا رد درخواست‌های مرجوعی نماینده‌ها":n==="support-requests"?"بررسی و پاسخ به درخواست‌های پشتیبانی نمایندگان":n==="reports"?"مشاهده گزارش‌های سیستم":n==="users"?"مدیریت کاربران سیستم":n==="settings"?"تنظیمات پنل مدیریت":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="warranties"?"مشاهده و رسیدگی به درخواست‌های گارانتی نمایندگان":"",Q=n==="dashboard"?"داشبورد نمایندگی":n==="products"?"لیست قیمت‌ها":n==="orders"?"سفارش‌های من":n==="my-shipments"?"بارهای من":n==="warehouse"?"انبار نمایندگی":n==="sales-reports"?"اعلام فروش":n==="return-request"?"درخواست مرجوعی":n==="support"?"پشتیبانی":n==="profile"?"پروفایل نمایندگی":n==="notes"?"یادداشت‌ها":n==="warranties"?"استفاده از گارانتی":"داشبورد نمایندگی",X=n==="dashboard"?"نمای کلی اطلاعات، اعتبار و موجودی نمایندگی":n==="products"?"مشاهده لیست قیمت ثبت‌شده توسط مدیریت":n==="orders"?"مشاهده سفارش‌های ثبت‌شده":n==="my-shipments"?"پیگیری وضعیت و جزئیات بارهای ارسالی به نمایندگی شما":n==="warehouse"?"مشاهده موجودی و مجموع":n==="sales-reports"?"ثبت و مشاهده اعلام فروش نمایندگی":n==="return-request"?"ثبت و پیگیری درخواست مرجوعی":n==="support"?"ثبت و پیگیری درخواست‌های پشتیبانی":n==="profile"?"مشاهده اطلاعات کاربری و نمایندگی":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="warranties"?"ثبت درخواست استفاده از گارانتی برای کالاهای موجود در انبار":"";return!Jr()||!t||!r?(0,e.jsx)($l,{to:"/login",replace:!0}):(0,e.jsxs)("div",{dir:"ltr",className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950",children:[(0,e.jsx)(Fl,{onToggleSidebar:()=>{b(l=>!l)},userRole:s?"representative":"admin",onRoleChange:()=>{},userName:s?t.name||t.username||"نماینده":t.name||"مدیر سیستم"}),(0,e.jsx)(Ll,{isOpen:o,onClose:()=>{b(!1)},activeSection:n,onSectionChange:_,userRole:s?"representative":"admin"}),(0,e.jsx)("main",{dir:"rtl",className:`min-h-[calc(100vh-76px)] transition-all duration-500 ${o?"lg:mr-72":"lg:mr-0"}`,children:(0,e.jsxs)("div",{className:"mx-auto max-w-7xl p-3 md:p-6",children:[(0,e.jsxs)("header",{className:"mb-4 md:mb-6",children:[(0,e.jsx)("h1",{className:"text-xl font-black text-gray-800 dark:text-white md:text-3xl",children:s?Q:me}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm",children:s?X:R})]}),s?n==="warranties"?(0,e.jsx)(Ro,{}):n==="notes"?(0,e.jsx)(dn,{}):n==="products"?(0,e.jsx)(Sn,{products:Array.isArray(c)?c:[],userRole:"user",onEdit:()=>{},onDelete:()=>{}}):n==="support"?(0,e.jsx)(Ui,{}):(0,e.jsx)(Co,{activeSection:n}):n==="notes"?(0,e.jsx)(dn,{}):n==="warranties"?(0,e.jsx)(zo,{}):i?(0,e.jsx)($s,{activeSection:"representatives",userRole:"admin",products:c,totalProducts:T,totalPrice:I,viewingRepDashboard:i,representatives:f,representativeFiles:K,loadingFiles:S,shipments:N,onEditProduct:U,onDeleteProduct:H,onUploadSuccess:F,onOpenRepDashboard:ee,onBackToRepList:V,onViewFile:y,onDeleteFile:v,onAddRepresentative:te,onEditRepresentative:le,onDeleteRepresentative:oe,onRepresentativeUpdated:ue}):n==="warehouse"&&be?(0,e.jsx)(Fi,{representative:be,apiUrl:kt,products:c,onBack:()=>{d(null)},onWarehouseChanged:L,onProductsChanged:()=>{P()}}):n==="warehouse"?(0,e.jsx)(Di,{representatives:f,apiUrl:kt,onOpenRepresentativeWarehouse:l=>{u(null),y(null),d(String(l))}}):n==="support-requests"?(0,e.jsx)(Wi,{}):(0,e.jsx)($s,{activeSection:n,userRole:"admin",products:c,totalProducts:T,totalPrice:I,viewingRepDashboard:null,representatives:f,representativeFiles:K,loadingFiles:S,shipments:N,onEditProduct:U,onDeleteProduct:H,onUploadSuccess:F,onOpenRepDashboard:ee,onBackToRepList:V,onViewFile:y,onDeleteFile:v,onAddRepresentative:te,onEditRepresentative:le,onDeleteRepresentative:oe,onRepresentativeUpdated:ue})]})}),s?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($i,{file:z,apiUrl:kt,onClose:()=>{y(null)}}),$?(0,e.jsx)(ql,{product:$,onClose:()=>{U(null)},onSave:O}):null]})]})}export{Yo as default};
