import{r as sn}from"./rolldown-runtime.CXHxssQy.js";import{n as nn,r as ae,t as ln}from"./utils-vendor.C5ZOOZMr.js";import{$ as Bn,$t as Wn,A as Oe,At as Vn,B as pr,Bt as za,C as Fa,Ct as et,D as Ma,Dt as Ga,E as La,Et as ve,F as Hn,Ft as Xa,G as Qn,Gt as Jn,H as Kn,Ht as $a,I as ot,It as Za,J as vt,K as Yn,L as on,Lt as tt,M as Qr,Mt as Jr,N as Gn,Nt as Aa,O as Xn,Ot as ze,P as Jt,Pt as Zn,Q as es,R as Or,Rt as Kr,S as qa,St as We,T as el,Tt as tl,U as ts,Ut as rl,V as dn,Vt as al,W as sl,Wt as rs,X as as,Xt as nl,Y as ll,Z as le,_t as il,a as hr,at as Ua,b as cn,bt as gr,c as vr,ct as ol,d as _r,dt as it,en as dl,et as ss,f as Ve,ft as Oa,g as Vt,gt as cl,h as kt,ht as xn,i as Br,it as ns,j as ur,jt as xl,k as Fe,kt as ml,l as Kt,lt as pl,m as hl,mt as Nt,n as gl,nt as ul,o as wt,ot as bl,p as mn,pt as yl,q as fl,qt as jl,r as pn,rt as vl,s as kl,st as Nl,t as Ce,tt as hn,u as wl,ut as Sl,v as ls,vt as br,w as dt,wt as Cl,x as jt,xt as Wr,y as gn,yt as un,z as Il,zt as lt}from"./react-vendor.BdaCIOuY.js";var a=sn(dl(),1),e=Jn(),$l=()=>{const[t,r]=(0,a.useState)(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);return(0,a.useEffect)(()=>{const s=window.document.documentElement;t?(s.classList.add("dark"),localStorage.setItem("theme","dark")):(s.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]),(0,e.jsx)("button",{onClick:()=>r(!t),className:"relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-yellow-400 dark:hover:text-yellow-400",title:t?"حالت روشن":"حالت تاریک",children:(0,e.jsxs)("div",{className:"relative h-5 w-5",children:[(0,e.jsx)(hl,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-90 scale-0 opacity-0":"rotate-0 scale-100 opacity-100"}`}),(0,e.jsx)(Kn,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`})]})})},Al=({onToggleSidebar:t,userRole:r,onRoleChange:s,userName:d})=>{const b=nl(),n=r==="admin",g=()=>{sessionStorage.removeItem("token"),sessionStorage.removeItem("authUser"),sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("userRole"),sessionStorage.removeItem("representativeId"),sessionStorage.removeItem("activeSection"),localStorage.removeItem("token"),localStorage.removeItem("authUser"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userRole"),localStorage.removeItem("representativeId"),localStorage.removeItem("activeSection"),b("/login",{replace:!0})},o=d?.trim()||"کاربر";return(0,e.jsx)("nav",{className:"sticky top-0 z-40 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-xl transition-colors dark:border-gray-700 dark:bg-gray-900/80",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6 md:py-4",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2 sm:gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-xs font-black text-white shadow-sm shadow-cyan-500/20 sm:px-4 sm:text-sm",title:n?"دسترسی کامل ادمین":"دسترسی پنل نمایندگی",children:[n?(0,e.jsx)(cl,{className:"h-4 w-4"}):(0,e.jsx)(hr,{className:"h-4 w-4"}),(0,e.jsx)("span",{children:n?"ادمین":"نماینده"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-2 sm:px-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-sm font-bold text-white shadow-sm",children:o.charAt(0)}),(0,e.jsxs)("div",{className:"hidden lg:block",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-800 dark:text-white",children:o}),(0,e.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:n?"مدیر سیستم":"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4",children:[(0,e.jsx)($l,{}),(0,e.jsx)("button",{type:"button",onClick:t,className:"flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400 md:h-11 md:w-11",title:"باز و بسته‌کردن منو",children:(0,e.jsx)(Qn,{className:"h-5 w-5 md:h-6 md:w-6"})}),(0,e.jsxs)("button",{type:"button",onClick:g,className:"flex items-center gap-2 rounded-xl bg-red-500 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 sm:px-4 sm:text-sm",title:"خروج از حساب",children:[(0,e.jsx)(ll,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden sm:inline",children:"خروج"})]})]})]})})},Tl=({isOpen:t,onClose:r,activeSection:s,onSectionChange:d,userRole:b})=>{const n=b==="representative"||b==="user";return(0,e.jsxs)(e.Fragment,{children:[t?(0,e.jsx)("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in lg:hidden",onClick:r,"aria-hidden":"true"}):null,(0,e.jsxs)("aside",{dir:"rtl",className:`fixed top-0 right-0 z-50 flex h-screen w-72 flex-col border-l border-gray-700 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-500 ease-in-out lg:top-[73px] lg:h-[calc(100vh-73px)] ${t?"translate-x-0":"translate-x-full overflow-hidden lg:w-0 lg:translate-x-0"}`,children:[(0,e.jsx)("div",{className:"shrink-0 border-b border-gray-700 p-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold uppercase tracking-wider text-gray-500",children:"منوی اصلی"}),(0,e.jsx)("p",{className:"mt-0.5 flex items-center gap-1.5 text-lg font-bold text-cyan-400",children:n?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(hr,{className:"h-3.5 w-3.5"}),"پنل نمایندگی"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Br,{className:"h-3.5 w-3.5"}),"دسترسی کامل"]})})]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400 lg:hidden","aria-label":"بستن منو",children:(0,e.jsx)(Ce,{className:"h-4 w-4"})})]})}),(0,e.jsx)("nav",{className:"flex-1 space-y-1  p-1",children:(n?[{id:"dashboard",label:"داشبورد",icon:es},{id:"products",label:"لیست قیمت‌ها",icon:lt},{id:"my-shipments",label:"بارهای من",icon:Kt},{id:"warehouse",label:"انبار من",icon:Kr},{id:"sales-reports",label:"اعلام فروش",icon:lt,accent:"emerald"},{id:"return-request",label:"ثبت درخواست مرجوعی",icon:Ma,accent:"rose"},{id:"support",label:"پشتیبانی",icon:ns},{id:"warranties",label:"گارانتی",icon:jt,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Vt,accent:"amber"},{id:"profile",label:"پروفایل",icon:hr}]:[{id:"dashboard",label:"داشبورد",icon:es},{id:"products",label:"لیست قیمت‌ها",icon:lt},{id:"representatives",label:"لیست نمایندگان",icon:Br},{id:"warehouse",label:"انبارداری",icon:kt},{id:"upload",label:"آپلود اکسل",icon:br},{id:"shipments",label:"ارسال بار",icon:Kt},{id:"sales-reports",label:"اعلام فروش نمایندگان",icon:lt,accent:"emerald"},{id:"return-requests",label:"بررسی درخواست‌های مرجوعی",icon:We,accent:"rose"},{id:"support-requests",label:"رسیدگی به درخواست‌ها",icon:ns},{id:"warranties",label:"گارانتی",icon:jt,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Vt,accent:"amber"}]).map((g,o)=>{const u=g.icon,p=s===g.id,c=g.accent==="rose",k=g.accent==="emerald",f=g.accent==="amber",j=g.accent==="sky",m=c?"border-rose-500/50 bg-gradient-to-r from-rose-500/25 to-red-500/20 text-white shadow-md shadow-rose-500/20":k?"border-emerald-500/50 bg-gradient-to-r from-emerald-500/25 to-teal-500/20 text-white shadow-md shadow-emerald-500/20":f?"border-amber-500/50 bg-gradient-to-r from-amber-500/25 to-yellow-500/20 text-white shadow-md shadow-amber-500/20":j?"border-sky-500/50 bg-gradient-to-r from-sky-500/25 to-blue-500/20 text-white shadow-md shadow-sky-500/20":"border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-md shadow-cyan-500/20",h=c?"border-rose-500/10 bg-rose-500/5 text-rose-300 hover:border-rose-500/30 hover:bg-rose-500/15 hover:text-rose-100":k?"border-emerald-500/10 bg-emerald-500/5 text-emerald-300 hover:border-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-100":f?"border-amber-500/10 bg-amber-500/5 text-amber-300 hover:border-amber-500/30 hover:bg-amber-500/15 hover:text-amber-100":j?"border-sky-500/10 bg-sky-500/5 text-sky-300 hover:border-sky-500/30 hover:bg-sky-500/15 hover:text-sky-100":"border-transparent text-gray-400 hover:bg-gray-800 hover:text-white",w=c?"text-rose-300":k?"text-emerald-300":f?"text-amber-400":j?"text-sky-300":"text-cyan-400",x=c?"text-rose-400":k?"text-emerald-400":f?"text-amber-400":j?"text-sky-400":"",I=c?"bg-rose-400":k?"bg-emerald-400":f?"bg-amber-400":j?"bg-sky-400":"bg-cyan-400";return(0,e.jsxs)("button",{type:"button",onClick:()=>{d(g.id),window.innerWidth<1024&&r()},style:{animationDelay:`${o*40}ms`},className:`group flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-right  transition-all duration-600 animate-slide-in-right ${p?m:h}`,children:[(0,e.jsx)("span",{className:"shrink-0 transition-transform duration-300 group-hover:scale-110",children:(0,e.jsx)(u,{className:`h-5 w-5 ${p?w:x}`})}),(0,e.jsx)("span",{className:"min-w-0 flex-1 text-[12px] font-bold leading-5",children:g.label}),p?(0,e.jsx)("span",{className:`mr-auto h-1.5 w-1.5 shrink-0 animate-pulse rounded-full ${I}`}):null]},g.id)})})]})]})},is=t=>t?{...t,name:t.name||"",price:Number(t.price)||0,category:t.category||"عمومی",stock:Number(t.stock)||0,description:t.description||"",image:t.image||""}:null,Dl=({product:t,onClose:r,onSave:s})=>{const[d,b]=(0,a.useState)(is(t)),[n,g]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{b(is(t)),g(!1)},[t]),!d)return null;const o=()=>{g(!0),window.setTimeout(()=>{r()},250)},u=(c,k)=>{b(f=>f?{...f,[c]:k}:null)},p=()=>{s({...d,name:d.name.trim()||"بدون نام",price:Number(d.price)||0,category:d.category.trim()||"عمومی",stock:Number(d.stock)||0,description:d.description.trim(),updatedAt:new Date().toISOString()}),o()};return(0,e.jsxs)("div",{dir:"rtl",className:`fixed inset-0 z-50 flex items-end justify-center p-0 transition-all duration-300 sm:items-center sm:p-4 ${n?"opacity-0":"opacity-100"}`,onClick:o,children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-md"}),(0,e.jsx)("div",{className:"absolute left-0 top-10 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl sm:left-20 sm:top-20 sm:h-96 sm:w-96"}),(0,e.jsx)("div",{className:"absolute bottom-0 right-0 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl sm:bottom-20 sm:right-20 sm:h-96 sm:w-96"}),(0,e.jsxs)("div",{className:`relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-300 sm:max-h-[90vh] sm:rounded-3xl ${n?"translate-y-8 scale-95 opacity-0":"translate-y-0 scale-100 opacity-100"}`,onClick:c=>c.stopPropagation(),children:[(0,e.jsx)("div",{className:"absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between gap-3 border-b border-gray-700 p-4 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3 sm:gap-4",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg sm:h-14 sm:w-14",children:(0,e.jsx)(Jt,{className:"h-5 w-5 sm:h-7 sm:w-7"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate text-lg font-bold text-white sm:text-2xl",children:"ویرایش محصول"}),(0,e.jsx)("p",{className:"mt-0.5 truncate text-xs text-gray-400 sm:text-sm",children:"اطلاعات محصول را تغییر دهید"})]})]}),(0,e.jsx)("button",{type:"button",onClick:o,"aria-label":"بستن پنجره ویرایش",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6",children:(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(mn,{className:"h-4 w-4"}),"عنوان"]}),(0,e.jsx)("input",{type:"text",value:d.name,onChange:c=>{u("name",c.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(lt,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:d.price,onChange:c=>{u("price",Number(c.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(ot,{className:"h-4 w-4"}),"موجودی"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:d.stock,onChange:c=>{u("stock",Number(c.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(ol,{className:"h-4 w-4"}),"دسته‌بندی"]}),(0,e.jsx)("input",{type:"text",value:d.category,onChange:c=>{u("category",c.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(it,{className:"h-4 w-4"}),"توضیحات"]}),(0,e.jsx)("textarea",{value:d.description,onChange:c=>{u("description",c.target.value)},rows:4,className:"w-full resize-none rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]})}),(0,e.jsxs)("div",{className:"grid shrink-0 grid-cols-2 gap-3 border-t border-gray-700 p-4 sm:flex sm:p-6",children:[(0,e.jsx)("button",{type:"button",onClick:o,className:"min-h-11 rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-xs font-bold text-gray-300 transition-all hover:bg-gray-700 sm:flex-1 sm:px-6 sm:text-sm",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:p,className:"min-h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-3 text-xs font-bold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 sm:flex-1 sm:px-6 sm:text-sm",children:(0,e.jsxs)("span",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(La,{className:"h-4 w-4"}),"ذخیره"]})})]})]})]})},Zt=({message:t})=>(0,e.jsxs)("div",{className:"rounded-2xl bg-white p-8 text-center shadow-lg md:p-16",children:[(0,e.jsx)("p",{className:"mb-4 text-5xl md:text-6xl",children:"🔒"}),(0,e.jsx)("p",{className:"text-base text-gray-500 md:text-xl",children:t})]}),ct=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),xt=({title:t,value:r,description:s,icon:d,iconClassName:b,valueClassName:n="text-gray-900 dark:text-gray-100"})=>(0,e.jsx)("article",{className:"rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:`mt-3 truncate text-2xl font-black sm:text-2xl ${n}`,children:r}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-500 dark:text-gray-400",children:s})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${b}`,children:d})]})}),Rl=({totalProducts:t,totalPrice:r,representatives:s=[],shipments:d=[]})=>{const b=Array.isArray(s)?s:[],n=Array.isArray(d)?d:[],g=b.filter(m=>m.status==="active").length,o=b.reduce((m,h)=>m+(Number(h.storeItemsCount)||0),0),u=b.reduce((m,h)=>m+(Number(h.storeItemsTotalValue)||0),0),p=b.reduce((m,h)=>m+(Number(h.last10DaysSales)||0),0),c=b.reduce((m,h)=>m+(Number(h.averageSales)||0),0),k=n.filter(m=>m.status==="delivered").length,f=n.filter(m=>m.status==="shipping").length,j=b.reduce((m,h)=>m+(Number(h.salesAnnouncementCount)||0),0);return(0,e.jsxs)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:[(0,e.jsx)(xt,{title:"تعداد نمایندگان فعال",value:ct(g),description:"نمایندگان با وضعیت فعال",icon:(0,e.jsx)(Br,{className:"h-6 w-6"}),iconClassName:"bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",valueClassName:"text-blue-700 dark:text-blue-400"}),(0,e.jsx)(xt,{title:"تعداد محصولات انبار",value:ct(o),description:"مجموع کالاهای ثبت‌شده در انبار نمایندگان",icon:(0,e.jsx)(Kr,{className:"h-6 w-6"}),iconClassName:"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",valueClassName:"text-emerald-700 dark:text-emerald-400"}),(0,e.jsx)(xt,{title:"مجموع مبلغ کل انبارها",value:`${ct(u)} تومان`,description:"مجموع",icon:(0,e.jsx)(pn,{className:"h-6 w-6"}),iconClassName:"bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400",valueClassName:"text-indigo-700 dark:text-indigo-400"}),(0,e.jsx)(xt,{title:"فروش ۱۰ روز قبل",value:`${ct(p)} تومان`,description:"جمع فروش نمایندگان در ۱۰ روز گذشته",icon:(0,e.jsx)(Zn,{className:"h-6 w-6"}),iconClassName:"bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",valueClassName:"text-amber-700 dark:text-amber-400"}),(0,e.jsx)(xt,{title:"میانگین فروش ماهانه",value:`${ct(Math.round(c))} تومان`,description:"مجموع میانگین فروش ماهانه نمایندگان",icon:(0,e.jsx)(yl,{className:"h-6 w-6"}),iconClassName:"bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400",valueClassName:"text-cyan-700 dark:text-cyan-400"}),(0,e.jsx)(xt,{title:"تعداد بارهای ارسال شده",value:ct(k),description:"مجموع بارهای تحویل‌شده",icon:(0,e.jsx)(Kt,{className:"h-6 w-6"}),iconClassName:"bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400",valueClassName:"text-purple-700 dark:text-purple-400"}),(0,e.jsx)(xt,{title:"تعداد بارهای در حال ارسال",value:ct(f),description:"بارهای در مسیر تحویل",icon:(0,e.jsx)(kt,{className:"h-6 w-6"}),iconClassName:"bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",valueClassName:"text-rose-700 dark:text-rose-400"}),(0,e.jsx)(xt,{title:"اعلام فروش نمایندگان",value:ct(j),description:"مجموع اعلام فروش ثبت‌شده توسط نمایندگان",icon:(0,e.jsx)(gn,{className:"h-6 w-6"}),iconClassName:"bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",valueClassName:"text-orange-700 dark:text-orange-400"})]})},El="http://localhost:5000/api",Pl=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:El},zl=Pl("https://myshop-backend-8nu7.onrender.com/api"),Fl=()=>{if(typeof window>"u")return"";const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"],s=[];window.sessionStorage&&s.push(window.sessionStorage),window.localStorage&&s.push(window.localStorage);for(const d of s){for(const b of t){const n=d.getItem(b);if(n&&n!=="null"&&n!=="undefined")return n.replace(/^Bearer\s+/i,"").trim()}for(const b of r){const n=d.getItem(b);if(n)try{const g=JSON.parse(n),o=g?.token||g?.accessToken||g?.authToken||g?.access_token||g?.data?.token;if(o)return String(o).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},yt=t=>{const r=Number(t);return Number.isFinite(r)?r:0},Le=t=>yt(t).toLocaleString("fa-IR"),Ml=t=>{const r=String(t?.name||"").toLowerCase();return r.endsWith(".xlsx")||r.endsWith(".xls")},Ll=t=>String(t.row??t.rowNumber??"نامشخص"),ql=t=>"reason"in t&&t.reason?t.reason:"error"in t&&t.error?t.error:"message"in t&&t.message?t.message:"خطای نامشخص",Xr=t=>"name"in t&&t.name?t.name:"productName"in t&&t.productName?t.productName:"بدون نام",Zr=t=>String(t.row??t.rowNumber??"نامشخص"),ea=(t,r,s,d)=>{const b=yt(r.createdCount),n=yt(r.updatedCount),g=yt(r.unchangedCount),o=yt(r.zeroPriceCount),u=yt(r.skippedCount),p=yt(r.totalRows),c=yt(r.totalProducts),k=[s?u>0?"⚠️ فایل ذخیره شد، اما بعضی ردیف‌ها ثبت نشدند":g>0?"✅ فایل ذخیره شد؛ بعضی محصولات از قبل وجود داشتند":"✅ فایل Excel با موفقیت ذخیره شد":"⚠️ فایل پردازش شد، اما تغییری ذخیره نشد","",`📄 نام فایل: ${t}`,`📊 تعداد ردیف‌ها: ${Le(p)}`,`➕ محصول جدید: ${Le(b)}`,`🔄 محصول به‌روزشده: ${Le(n)}`,`⏭️ بدون تغییر: ${Le(g)}`,`⚠️ قیمت صفر: ${Le(o)}`,`❌ ثبت‌نشده: ${Le(u)}`,`📦 کل محصولات: ${Le(c)}`];d&&!s&&(k.push(""),k.push(d)),r.createdProducts&&r.createdProducts.length>0&&(k.push(""),k.push(`محصولات اضافه‌شده (${Le(r.createdProducts.length)} مورد):`),r.createdProducts.forEach(j=>{k.push(`• ردیف ${Zr(j)}: ${Xr(j)} — ${Le(j.price)} تومان`)})),r.updatedProducts&&r.updatedProducts.length>0&&(k.push(""),k.push(`محصولات به‌روزشده (${Le(r.updatedProducts.length)} مورد):`),r.updatedProducts.forEach(j=>{k.push(`• ردیف ${Zr(j)}: ${Xr(j)} — قیمت جدید: ${Le(j.newPrice)} تومان`)})),r.unchangedProducts&&r.unchangedProducts.length>0&&(k.push(""),k.push(`محصولات بدون تغییر (${Le(r.unchangedProducts.length)} مورد):`),r.unchangedProducts.forEach(j=>{k.push(`• ردیف ${Zr(j)}: ${Xr(j)} — ${Le(j.price)} تومان`)}));const f=[...r.errors||[],...r.skippedRows||[]];return f.length>0&&(k.push(""),k.push(`جزئیات ردیف‌های ثبت‌نشده (${Le(f.length)} مورد):`),f.forEach(j=>{k.push(`• ردیف ${Ll(j)}: ${ql(j)}`)})),k.join(`
`)},Ul=({onUploadSuccess:t})=>{const r=(0,a.useRef)(null),[s,d]=(0,a.useState)(!1),[b,n]=(0,a.useState)(!1),[g,o]=(0,a.useState)(null),u=()=>{if(b){window.alert("⏳ لطفاً صبر کنید؛ فایل قبلی هنوز در حال پردازش است.");return}r.current&&(r.current.value="",r.current.click())},p=async j=>{if(!Ml(j)){const m="فقط فایل Excel با فرمت .xlsx یا .xls مجاز است.";window.alert(`❌ خطا

${m}`),o({type:"error",text:m});return}if(!b){n(!0),o(null);try{const m=new FormData;m.append("file",j);const h=Fl(),w={Accept:"application/json"};h&&(w.Authorization=`Bearer ${h}`);const x=(await ae.post(`${zl}/products/upload`,m,{withCredentials:!0,headers:w,timeout:12e4})).data,I=x.data||{};if(!x.success){const P=ea(j.name,I,!1,x.error||x.message);window.alert(P),o({type:"error",text:P});return}const U=ea(j.name,I,!0,x.message);window.alert(U),o({type:"success",text:U});try{await t()}catch(P){console.error("آپلود موفق بود، اما لیست تازه نشد:",P),o({type:"success",text:`${U}

⚠️ فایل ذخیره شد، اما لیست صفحه تازه نشد.`})}}catch(m){console.error("❌ خطا در آپلود Excel:",m);let h="هنگام آپلود فایل خطای غیرمنتظره‌ای رخ داد.";if(ae.isAxiosError(m)){const w=m.response?.status,x=m.response?.data;x?.data?h=ea(j.name,x.data,!1,x.error||x.message):h=x?.error||x?.message||m.message||h,w===401&&(h="جلسه ورود شما منقضی شده است؛ دوباره وارد شوید."),w===403&&(h="این حساب اجازه آپلود لیست قیمت را ندارد."),w===413&&(h="حجم فایل نباید بیشتر از ۱۰ مگابایت باشد."),m.response||(h="ارتباط با سرور برقرار نشد.")}else m instanceof Error&&(h=m.message);window.alert(`❌ خطا در آپلود Excel

${h}`),o({type:"error",text:h})}finally{n(!1),r.current&&(r.current.value="")}}},c=j=>{const m=j.currentTarget.files?.[0];j.currentTarget.value="",m&&p(m)},k=j=>{if(j.preventDefault(),j.stopPropagation(),j.type==="dragenter"||j.type==="dragover"){d(!0);return}j.type==="dragleave"&&d(!1)},f=j=>{if(j.preventDefault(),j.stopPropagation(),d(!1),b)return;const m=j.dataTransfer.files?.[0];m&&p(m)};return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-8",children:[(0,e.jsxs)("div",{className:"mb-6 text-center",children:[(0,e.jsxs)("h2",{className:"mb-2 flex items-center justify-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100",children:[(0,e.jsx)(br,{className:"h-6 w-6 text-purple-600 dark:text-purple-400"}),"آپلود هوشمند لیست قیمت"]}),(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"فایل Excel شامل عنوان محصول، قیمت محصول و دسته‌بندی"})]}),(0,e.jsxs)("div",{className:`rounded-2xl border-2 border-dashed p-8 text-center transition-all md:p-12 ${s?"border-purple-500 bg-purple-50 dark:bg-purple-900/20":"border-gray-300 hover:border-purple-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"}`,onDragEnter:k,onDragLeave:k,onDragOver:k,onDrop:f,children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-purple-500 dark:text-purple-400",children:(0,e.jsx)(Oa,{className:"h-16 w-16"})}),(0,e.jsx)("p",{className:"mb-2 text-lg font-medium text-gray-700 dark:text-gray-300",children:"فایل Excel را اینجا بکشید و رها کنید"}),(0,e.jsx)("p",{className:"mb-4 text-sm text-gray-500",children:"یا"}),(0,e.jsx)("input",{ref:r,type:"file",accept:".xlsx,.xls",onChange:c,className:"hidden"}),(0,e.jsx)("button",{type:"button",onClick:u,disabled:b,className:`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-lg transition-all ${b?"cursor-not-allowed bg-gray-400":"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"}`,children:b?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}),"در حال پردازش..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(br,{className:"h-5 w-5"}),"انتخاب فایل Excel"]})}),b?(0,e.jsxs)("div",{className:"mt-6 flex flex-col items-center",children:[(0,e.jsx)(le,{className:"h-8 w-8 animate-spin text-purple-600"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"در حال ثبت محصولات و به‌روزرسانی لیست قیمت..."})]}):null]}),g?(0,e.jsxs)("div",{className:`mt-6 flex gap-3 rounded-xl border p-4 ${g.type==="success"?"border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20":"border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20"}`,children:[g.type==="success"?(0,e.jsx)(ve,{className:"h-5 w-5 shrink-0 text-green-600 dark:text-green-400"}):(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0 text-red-600 dark:text-red-400"}),(0,e.jsx)("p",{className:`whitespace-pre-line text-sm font-bold leading-7 ${g.type==="success"?"text-green-800 dark:text-green-300":"text-red-800 dark:text-red-300"}`,children:g.text})]}):null,(0,e.jsxs)("div",{className:"mt-6 flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsx)(Bn,{className:"h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-medium text-blue-800 dark:text-blue-300",children:"قالب فایل Excel"}),(0,e.jsxs)("p",{className:"mt-1 text-xs leading-6 text-blue-600 dark:text-blue-400",children:["ستون‌های فایل باید شامل"," ",(0,e.jsx)("strong",{children:"عنوان محصول"}),"،"," ",(0,e.jsx)("strong",{children:"قیمت محصول"})," و"," ",(0,e.jsx)("strong",{children:"دسته‌بندی"})," ","باشند. محصول بدون قیمت با قیمت صفر ثبت می‌شود."]})]})]})]})},Ol=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],os=t=>{const r=Number(t);return`${new Intl.NumberFormat("fa-IR").format(Number.isFinite(r)?r:0)} تومان`},ft=t=>String(t??"").replace(/\u200c/g," ").replace(/\u200f/g,"").replace(/\u200e/g,"").replace(/\s+/g," ").trim().toLowerCase(),zr=t=>String(t.name||t.productName||t.title||"بدون نام").trim(),kr=t=>String(t.brand||t.brandName||"").trim(),or=t=>String(t.category||"").trim(),ds=(t,r)=>{const s=String(t.id??"").trim();return s||`product-${ft(zr(t))}-${ft(or(t))}-${r}`},bn=({products:t,userRole:r,onEdit:s,onDelete:d})=>{const[b,n]=(0,a.useState)(""),[g,o]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),c=(0,a.useMemo)(()=>Array.isArray(t)?t.filter(Boolean):[],[t]),k=(0,a.useMemo)(()=>{const x=new Set;return Ol.forEach(I=>{x.add(I)}),c.forEach(I=>{const U=or(I);U&&x.add(U)}),Array.from(x)},[c]),f=(0,a.useMemo)(()=>{const x=new Set;return c.forEach(I=>{const U=kr(I);U&&x.add(U)}),Array.from(x).sort((I,U)=>I.localeCompare(U,"fa"))},[c]);(0,a.useEffect)(()=>{g&&!k.includes(g)&&o("")},[k,g]),(0,a.useEffect)(()=>{u&&!f.includes(u)&&p("")},[f,u]);const j=(0,a.useMemo)(()=>{const x=ft(b),I=ft(g),U=ft(u);return c.filter(P=>{const O=ft(zr(P)),H=ft(kr(P)),T=ft(or(P));return(!x||O.includes(x)||H.includes(x)||T.includes(x))&&(!I||T===I)&&(!U||H===U)})},[c,b,g,u]),m=!!(b||g||u),h=()=>{n(""),o(""),p("")},w=r==="admin";return c.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(on,{className:"h-16 w-16 md:h-24 md:w-24"})}),(0,e.jsx)("p",{className:"text-lg font-bold text-gray-500 dark:text-gray-400 md:text-xl",children:"هنوز محصولی اضافه نشده است"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"از بخش آپلود Excel شروع کنید."})]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4",children:[(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(mn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"لیست قیمت محصولات"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:"قیمت‌های ثبت‌شده و به‌روزرسانی‌شده محصولات"})]})]}),(0,e.jsxs)("span",{className:"w-fit rounded-lg bg-gray-100 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:[new Intl.NumberFormat("fa-IR").format(j.length)," ","محصول"]})]}),(0,e.jsxs)("div",{className:"mt-4",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Nl,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"فیلتر و جستجو"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(dt,{className:"absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"text",value:b,onChange:x=>{n(x.target.value)},placeholder:"جستجوی عنوان، برند یا دسته‌بندی...",className:"w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:g,onChange:x=>{o(x.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),k.map(x=>(0,e.jsx)("option",{value:x,children:x},x))]}),(0,e.jsxs)("select",{value:u,onChange:x=>{p(x.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),f.map(x=>(0,e.jsx)("option",{value:x,children:x},x))]})]}),m?(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[new Intl.NumberFormat("fa-IR").format(j.length)," ","محصول یافت شد"]}),(0,e.jsx)("button",{type:"button",onClick:h,className:"text-xs font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400",children:"پاک کردن فیلترها"})]}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full min-w-[860px] border-collapse text-right",children:[(0,e.jsx)("thead",{className:"border-b border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-right text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"عنوان"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"برند"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"قیمت فعلی"}),w?(0,e.jsx)("th",{className:"px-4 py-3 text-center text-sm font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:j.map((x,I)=>{const U=String(x.id??"").trim(),P=ds(x,I);return(0,e.jsxs)("tr",{className:"bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"max-w-[340px] border-l border-gray-100 px-4 py-4 text-right text-sm font-bold text-gray-800 dark:border-gray-700 dark:text-gray-200",children:(0,e.jsx)("p",{className:"line-clamp-2",children:zr(x)})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400",children:kr(x)||"-"}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center dark:border-gray-700",children:(0,e.jsx)("span",{className:"rounded-md bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:or(x)||"عمومی"})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm font-black text-blue-700 dark:border-gray-700 dark:text-blue-400",children:os(x.price)}),w?(0,e.jsx)("td",{className:"px-4 py-4",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(x)},className:"rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(Jt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!U,onClick:()=>{U&&d(U)},className:"rounded-lg p-2 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(Ve,{className:"h-4 w-4"})})]})}):null]},P)})})]})}),(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:j.map((x,I)=>{const U=String(x.id??"").trim();return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"line-clamp-2 text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:zr(x)}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[10px]",children:[(0,e.jsxs)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:["برند:"," ",kr(x)||"بدون برند"]}),(0,e.jsx)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:or(x)||"عمومی"})]})]}),w?(0,e.jsxs)("div",{className:"flex shrink-0 gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(x)},className:"rounded-lg p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(Jt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!U,onClick:()=>{U&&d(U)},className:"rounded-lg p-2 text-red-600 hover:bg-red-100 disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(Ve,{className:"h-4 w-4"})})]}):null]}),(0,e.jsxs)("div",{className:"mt-4 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-gray-400 dark:text-gray-500",children:"قیمت فعلی"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-blue-700 dark:text-blue-400",children:os(x.price)})]})]},ds(x,I))})}),j.length===0?(0,e.jsxs)("div",{className:"py-10 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(el,{className:"h-10 w-10"})}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-400",children:"محصولی با این مشخصات پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:h,className:"mt-3 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400",children:"پاک‌کردن فیلترها"})]}):null]})]})},_a=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),yn=t=>{const r=_a(t).replace(/-/g,"/").replace(/[^\d/]/g,"").replace(/\//g,"").slice(0,8);return r.length<=4?r:r.length<=6?`${r.slice(0,4)}/${r.slice(4)}`:`${r.slice(0,4)}/${r.slice(4,6)}/${r.slice(6,8)}`},fn=t=>/^1[34]\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/.test(t),Ht=t=>{const r=_a(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?new Intl.NumberFormat("fa-IR").format(s):String(t??"—")},cs=t=>String(t).padStart(2,"0"),_l=({year:t,month:r,day:s})=>`${t}/${cs(r)}/${cs(s)}`,xs=t=>{const r=yn(t);if(!fn(r))return null;const[s,d,b]=r.split("/").map(Number);return{year:s,month:d,day:b}},Bl=t=>{const r=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],s=t-621;let d=-14,b=r[0],n=0;for(let u=1;u<r.length;u+=1){const p=r[u];if(n=p-b,s<p)break;d+=Math.floor(n/33)*8+Math.floor(n%33/4),b=p}let g=s-b;d+=Math.floor(g/33)*8+Math.floor((g%33+3)/4),n%33===4&&n-g===4&&(d+=1),n-g<6&&(g=g-n+Math.floor((n+4)/33)*33);let o=(g+1)%33-1;return o===-1&&(o=4),o===0||o===4},Wl=(t,r)=>r>=1&&r<=6?31:r>=7&&r<=11?30:r===12?Bl(t)?30:29:30,Vl=(t,r,s)=>{const d=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=[0,31,31,31,31,31,31,30,30,30,30,30,29],n=t-1600,g=r-1,o=s-1;let u=365*n+Math.floor((n+3)/4)-Math.floor((n+99)/100)+Math.floor((n+399)/400);for(let j=0;j<g;j+=1)u+=d[j+1];g>1&&(t%4===0&&t%100!==0||t%400===0)&&(u+=1),u+=o;let p=u-79;const c=Math.floor(p/12053);p%=12053;let k=979+33*c+4*Math.floor(p/1461);p%=1461,p>=366&&(k+=Math.floor((p-1)/365),p=(p-1)%365);let f=1;for(;f<=12&&p>=b[f];)p-=b[f],f+=1;return{year:k,month:f,day:p+1}},Hl=(t,r,s)=>{const d=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=t-979,n=r-1,g=s-1;let o=365*b+Math.floor(b/33)*8+Math.floor((b%33+3)/4);for(let f=0;f<n;f+=1)o+=f<6?31:30;o+=g;let u=o+79,p=1600+400*Math.floor(u/146097);u%=146097;let c=!0;u>=36525&&(u-=1,p+=100*Math.floor(u/36524),u%=36524,u>=365?u+=1:c=!1),p+=4*Math.floor(u/1461),u%=1461,u>=366&&(c=!1,u-=1,p+=Math.floor(u/365),u%=365);let k=0;for(;k<12&&u>=d[k+1]+(k===1&&c?1:0);)u-=d[k+1]+(k===1&&c?1:0),k+=1;return{year:p,month:k+1,day:u+1}},Ql=(t,r,s)=>{const d=Hl(t,r,s);return(new Date(d.year,d.month-1,d.day).getDay()+1)%7},Jl=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],Kl=["ش","ی","د","س","چ","پ","ج"],Yl=({value:t,onChange:r,disabled:s=!1,label:d="تاریخ"})=>{const[b,n]=(0,a.useState)(!1),[g,o]=(0,a.useState)(()=>xs(t)||Vl(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate())),u=xs(t),p=m=>{r(_l({...g,day:m})),n(!1)},c=m=>{o(h=>{let w=h.month+m,x=h.year;return w>12&&(w=1,x+=1),w<1&&(w=12,x-=1),{...h,year:x,month:w,day:1}})},k=Wl(g.year,g.month),f=Ql(g.year,g.month,1),j=[];for(let m=0;m<f;m+=1)j.push(null);for(let m=1;m<=k;m+=1)j.push(m);return(0,e.jsxs)("div",{className:"relative w-full",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Za,{className:"h-3.5 w-3.5 text-gray-400"}),d]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("input",{type:"text",readOnly:!0,value:t,onClick:()=>{s||n(m=>!m)},disabled:s,placeholder:"1403/01/01",className:"w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-500"}),(0,e.jsx)("button",{type:"button",onClick:()=>{s||n(m=>!m)},disabled:s,className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-blue-500 disabled:opacity-50",children:(0,e.jsx)(Za,{className:"h-4 w-4"})})]}),b?(0,e.jsxs)("div",{className:"absolute left-0 right-0 z-[100] mt-2 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:()=>c(1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(Vn,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})}),(0,e.jsxs)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:[Jl[g.month-1]," ",Ht(g.year)]}),(0,e.jsx)("button",{type:"button",onClick:()=>c(-1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(xl,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})})]}),(0,e.jsx)("div",{className:"mb-2 grid grid-cols-7 gap-1",children:Kl.map(m=>(0,e.jsx)("div",{className:"text-center text-xs font-bold text-gray-400",children:m},m))}),(0,e.jsx)("div",{className:"grid grid-cols-7 gap-1",children:j.map((m,h)=>{const w=u?.day===m&&u?.month===g.month&&u?.year===g.year;return(0,e.jsx)("button",{type:"button",disabled:!m,onClick:()=>{m&&p(m)},className:`h-8 w-full rounded-lg text-xs font-bold transition-all ${m?w?"bg-blue-600 text-white shadow-md":"text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700":"invisible"}`,children:m?Ht(m):""},`${m||"empty"}-${h}`)})}),(0,e.jsx)("div",{className:"mt-3 flex justify-end",children:(0,e.jsx)("button",{type:"button",onClick:()=>n(!1),className:"text-xs text-gray-500 transition hover:text-red-500",children:"بستن"})})]}):null]})},Fr=t=>_a(t).replace(/[^\d]/g,""),ms=t=>{const r=Number(Fr(t));return!Number.isFinite(r)||r===0?"":r.toLocaleString("en-US")},dr=()=>{const t=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date);return`${t.find(r=>r.type==="year")?.value||""}/${t.find(r=>r.type==="month")?.value||""}/${t.find(r=>r.type==="day")?.value||""}`},Nr={name:"",email:"",phone:"",province:"",city:"",code:"",address:"",description:"",shopDescription:"",orders:0,status:"active",startDate:dr(),depositAmount:"0",guaranteeCheck:"0",totalFinancialCommitment:"0",shipmentsCount:0,storeItemsCount:0,storeItemsTotalValue:0,returnRequestsCount:0,last10DaysSales:0,averageSales:0},Gl=({representatives:t,userRole:r,onOpenDashboard:s,onAddRepresentative:d,onEditRepresentative:b,onDeleteRepresentative:n})=>{const[g,o]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!1),[c,k]=(0,a.useState)(null),[f,j]=(0,a.useState)(Nr),m=(0,a.useRef)(null),h=(0,a.useRef)(null),w=(0,a.useRef)(null),x=(0,a.useRef)(null),I=(0,a.useRef)(null),U=(0,a.useRef)(null),P=(0,a.useRef)(null),O=Number(Fr(f.depositAmount))||0,H=Number(Fr(f.guaranteeCheck))||0,T=(0,a.useMemo)(()=>O+H,[O,H]),A=(C,z)=>{C.key==="Enter"&&(C.preventDefault(),z.current?.focus())},y=()=>{const C=window.open("","_blank","width=900,height=700");if(!C){alert("لطفاً popup blocker را غیرفعال کنید");return}const z=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),l=t.map((N,v)=>`
      <tr>
        <td style="text-align:center;">${v+1}</td>
        <td style="text-align:center;">${N.code||"—"}</td>
        <td>${N.name||"—"}</td>
        <td>${N.province||"—"}</td>
        <td>${N.city||"—"}</td>
        <td style="text-align:center;" dir="ltr">${N.phone||"—"}</td>
        <td style="text-align:center;">${N.storeItemsCount||0}</td>
        <td style="text-align:center;">${N.status==="inactive"?"غیرفعال":"فعال"}</td>
      </tr>
    `).join("");C.document.write(`<!DOCTYPE html>
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
  <h2>📋 گزارش لیست نمایندگان</h2>
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
    ${l}
  </tbody>
</table>

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد کل نمایندگان</div>
    <div class="value">${t.length}</div>
  </div>
  <div class="summary-card">
    <div class="label">نمایندگان فعال</div>
    <div class="value">${t.filter(N=>N.status!=="inactive").length}</div>
  </div>
  <div class="summary-card">
    <div class="label">نمایندگان غیرفعال</div>
    <div class="value">${t.filter(N=>N.status==="inactive").length}</div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>بازرگانی مهر امین - 1405</p>
</div>

</body>
</html>`),C.document.close(),C.focus(),setTimeout(()=>{C.print()},1e3)},$=C=>{C?(j({name:C.name??"",email:C.email??"",code:String(C.code??""),province:C.province??"",city:C.city??"",phone:C.phone??"",startDate:C.startDate||dr(),status:C.status==="inactive"?"inactive":"active",address:C.address??"",description:C.description??"",shopDescription:C.shopDescription??"",orders:Number(C.orders)||0,depositAmount:String(C.depositAmount??"0"),guaranteeCheck:String(C.guaranteeCheck??"0"),totalFinancialCommitment:String(C.totalFinancialCommitment??"0"),shipmentsCount:Number(C.shipmentsCount)||0,storeItemsCount:Number(C.storeItemsCount)||0,storeItemsTotalValue:Number(C.storeItemsTotalValue)||0,returnRequestsCount:Number(C.returnRequestsCount)||0,last10DaysSales:Number(C.last10DaysSales)||0,averageSales:Number(C.averageSales)||0}),k(String(C.id))):(j({...Nr,startDate:dr()}),k(null)),o(!0),window.setTimeout(()=>{m.current?.focus()},100)},B=()=>{u||(o(!1),k(null),j({...Nr,startDate:dr()}))},D=(C,z)=>{j(l=>({...l,[C]:Fr(z)||"0"}))},W=async C=>{C.preventDefault();const z=f.name.trim(),l=f.email.trim(),N=String(f.code??"").trim(),v=f.province.trim(),R=f.city.trim(),q=f.phone.trim(),S=yn(f.startDate||"");if(!z){alert("لطفاً نام نماینده را وارد کنید."),m.current?.focus();return}if(!N){alert("لطفاً کد نمایندگی را وارد کنید."),h.current?.focus();return}if(!v){alert("لطفاً استان را وارد کنید.");return}if(!R){alert("لطفاً شهر را وارد کنید."),w.current?.focus();return}if(!q){alert("لطفاً شماره تلفن را وارد کنید."),x.current?.focus();return}if(!fn(S)){alert("تاریخ قرارداد نامعتبر است. لطفاً از تقویم استفاده کنید.");return}p(!0);try{const _={name:z,email:l,code:N,province:v,city:R,phone:q,address:f.address.trim(),description:f.description.trim(),shopDescription:f.shopDescription.trim(),orders:Number(f.orders)||0,status:f.status==="inactive"?"inactive":"active",startDate:S,depositAmount:String(O),guaranteeCheck:String(H),totalFinancialCommitment:String(T),shipmentsCount:Number(f.shipmentsCount)||0,storeItemsCount:Number(f.storeItemsCount)||0,storeItemsTotalValue:Number(f.storeItemsTotalValue)||0,returnRequestsCount:Number(f.returnRequestsCount)||0,last10DaysSales:Number(f.last10DaysSales)||0,averageSales:Number(f.averageSales)||0};c?(await b(c,_),alert("اطلاعات نماینده با موفقیت ویرایش شد.")):(await d(_),alert("نماینده با موفقیت ثبت شد.")),o(!1),k(null),j({...Nr,startDate:dr()})}catch(_){console.error("خطا در ذخیره نماینده:",_),alert("خطا در ذخیره اطلاعات. لطفاً دوباره تلاش کنید.")}finally{p(!1)}},J=async(C,z)=>{if(window.confirm(`آیا از حذف نماینده «${z}» مطمئن هستید؟`))try{await n(C)}catch(l){console.error("خطا در حذف نماینده:",l)}};return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-colors dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-800 dark:text-gray-100 md:text-xl",children:[(0,e.jsx)(Br,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"لیست نمایندگان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:[Ht(t.length)," ","نماینده ثبت شده"]})]}),r==="admin"?(0,e.jsxs)("div",{className:"flex gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:y,className:"flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ لیست"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>$(),className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 active:scale-95",children:[(0,e.jsx)(kl,{className:"h-4 w-4"}),"افزودن نماینده"]})]}):null]}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b-2 border-gray-200 bg-gray-50 text-center text-lg dark:border-gray-800 dark:bg-gray-800/50",children:[(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"کد"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"نام"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"تلفن"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"سفارش‌ها"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"وضعیت"}),r==="admin"?(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{children:t.length===0?(0,e.jsx)("tr",{children:(0,e.jsxs)("td",{colSpan:r==="admin"?7:6,className:"px-4 py-12 text-center text-gray-500 dark:text-gray-400",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(ss,{className:"h-12 w-12 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold",children:"هیچ نماینده‌ای یافت نشد"})]})}):t.map(C=>{const z=C.status!=="inactive";return(0,e.jsxs)("tr",{className:"border-b text-center transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50",children:[(0,e.jsx)("td",{className:"px-4 py-3 font-mono text-sm text-gray-700 dark:text-gray-300",children:C.code||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-800 dark:text-gray-200",children:C.name}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm text-gray-700 dark:text-gray-300",children:C.city||"---"}),(0,e.jsx)("td",{dir:"ltr",className:"px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300",children:C.phone||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300",children:Ht(C.orders||0)}),(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("span",{className:`inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${z?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[z?(0,e.jsx)(ve,{className:"h-3.5 w-3.5"}):(0,e.jsx)(et,{className:"h-3.5 w-3.5"}),z?"فعال":"غیرفعال"]})}),r==="admin"?(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(C.id)),className:"rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95",children:"داشبورد"}),(0,e.jsxs)("button",{type:"button",onClick:()=>$(C),className:"flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:[(0,e.jsx)(Jt,{className:"h-3.5 w-3.5"}),"ویرایش"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{J(String(C.id),C.name)},className:"flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:[(0,e.jsx)(Ve,{className:"h-3.5 w-3.5"}),"حذف"]})]})}):null]},String(C.id))})})]})}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:t.length===0?(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(ss,{className:"h-14 w-14 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold text-gray-500 dark:text-gray-400",children:"هیچ نماینده‌ای یافت نشد"})]}):t.map(C=>{const z=C.status!=="inactive";return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:from-gray-800 dark:to-gray-900 dark:hover:border-blue-700",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-start justify-between",children:[(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:C.name}),(0,e.jsxs)("p",{className:"mt-1 font-mono text-xs text-gray-500 dark:text-gray-400",children:["کد:"," ",C.code||"---"]})]}),(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-bold ${z?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[z?(0,e.jsx)(ve,{className:"h-3 w-3"}):(0,e.jsx)(et,{className:"h-3 w-3"}),z?"فعال":"غیرفعال"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"شهر"}),(0,e.jsx)("p",{className:"font-bold text-gray-800 dark:text-gray-200",children:C.city||"---"})]}),(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"تلفن"}),(0,e.jsx)("p",{dir:"ltr",className:"font-bold text-gray-800 dark:text-gray-200",children:C.phone||"---"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"سفارش‌ها"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-200",children:Ht(C.orders||0)})]})]}),r==="admin"?(0,e.jsxs)("div",{className:"mt-3 flex items-center gap-2 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(C.id)),className:"flex-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg",children:"داشبورد"}),(0,e.jsx)("button",{type:"button",onClick:()=>$(C),className:"flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:(0,e.jsx)(Jt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{J(String(C.id),C.name)},className:"flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:(0,e.jsx)(Ve,{className:"h-4 w-4"})})]}):null]},String(C.id))})}),g?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-3 md:p-4",children:(0,e.jsxs)("div",{className:"max-h-[92dvh] w-full min-w-0 max-w-3xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between gap-2 border-b border-gray-100 pb-4 dark:border-gray-800",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:c?"ویرایش اطلاعات نماینده":"افزودن نماینده جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:c?"اطلاعات نماینده را اصلاح کرده و ذخیره کنید.":"اطلاعات اولیه و مالی نماینده را وارد کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:B,disabled:u,className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-red-900/30 dark:hover:text-red-400",children:(0,e.jsx)(Ce,{className:"h-4 w-4"})})]}),(0,e.jsxs)("form",{onSubmit:C=>{W(C)},className:"space-y-5",children:[(0,e.jsxs)("section",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)(hr,{className:"h-4 w-4"}),"اطلاعات پایه نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(hr,{className:"h-3.5 w-3.5 text-gray-400"}),"نام نماینده",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:m,type:"text",value:f.name,onChange:C=>j(z=>({...z,name:C.target.value})),onKeyDown:C=>A(C,h),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"نام نماینده",required:!0,autoFocus:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(bl,{className:"h-3.5 w-3.5 text-gray-400"}),"کد نمایندگی",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:h,type:"text",value:f.code,onChange:C=>j(z=>({...z,code:C.target.value})),onKeyDown:C=>A(C,w),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"مثلاً 1001",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(vt,{className:"h-3.5 w-3.5 text-gray-400"}),"استان",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{type:"text",value:f.province,onChange:C=>j(z=>({...z,province:C.target.value})),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"استان",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(vt,{className:"h-3.5 w-3.5 text-gray-400"}),"شهر",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:w,type:"text",value:f.city,onChange:C=>j(z=>({...z,city:C.target.value})),onKeyDown:C=>A(C,x),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"شهر",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Qr,{className:"h-3.5 w-3.5 text-gray-400"}),"تلفن",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:x,type:"text",dir:"ltr",value:f.phone,onChange:C=>j(z=>({...z,phone:C.target.value})),onKeyDown:C=>A(C,I),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"09xxxxxxxxx",required:!0})]}),(0,e.jsx)("div",{className:"min-w-0",children:(0,e.jsx)(Yl,{label:"تاریخ قرارداد شمسی",value:f.startDate,disabled:u,onChange:C=>j(z=>({...z,startDate:C}))})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(rs,{className:"h-3.5 w-3.5 text-gray-400"}),"وضعیت"]}),(0,e.jsxs)("select",{ref:I,value:f.status,onChange:C=>j(z=>({...z,status:C.target.value==="inactive"?"inactive":"active"})),onKeyDown:C=>A(C,U),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)(vt,{className:"h-4 w-4"}),"آدرس و توضیحات"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 md:col-span-2",children:[(0,e.jsx)("label",{htmlFor:"representative-address",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{id:"representative-address",rows:3,maxLength:1e3,value:f.address,onChange:C=>j(z=>({...z,address:C.target.value})),disabled:u,placeholder:"استان، شهر، خیابان، پلاک و کد پستی",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{id:"representative-description",rows:4,maxLength:3e3,value:f.description,onChange:C=>j(z=>({...z,description:C.target.value})),disabled:u,placeholder:"توضیحات مربوط به نماینده",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-shop-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{id:"representative-shop-description",rows:2,maxLength:3e3,value:f.shopDescription,onChange:C=>j(z=>({...z,shopDescription:C.target.value})),disabled:u,placeholder:"مشخصات، موقعیت یا شرایط مغازه",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-purple-700 dark:text-purple-400",children:[(0,e.jsx)(lt,{className:"h-4 w-4"}),"اطلاعات مالی"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ ودیعه"}),(0,e.jsx)("input",{ref:U,type:"text",inputMode:"numeric",dir:"ltr",value:ms(f.depositAmount),onChange:C=>D("depositAmount",C.target.value),onKeyDown:C=>A(C,P),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ چک ضمانت"}),(0,e.jsx)("input",{ref:P,type:"text",inputMode:"numeric",dir:"ltr",value:ms(f.guaranteeCheck),onChange:C=>D("guaranteeCheck",C.target.value),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مجموع تعهد مالی"}),(0,e.jsx)("div",{dir:"ltr",className:"w-full rounded-xl border border-purple-200 bg-purple-50 px-3 py-2 text-center text-sm font-black text-purple-700 dark:border-purple-900/50 dark:bg-purple-900/20 dark:text-purple-300",children:Ht(T)})]})]}),(0,e.jsxs)("p",{className:"mt-3 flex items-start gap-2 rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)(rs,{className:"mt-0.5 h-3.5 w-3.5 shrink-0"}),"اطلاعات آماری داشبورد از طریق فایل اکسل در بخش انبار نماینده وارد خواهد شد."]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-100 pt-5 dark:border-gray-800 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:B,disabled:u,className:"min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-800 transition-all hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"submit",disabled:u,className:"min-h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 disabled:cursor-not-allowed disabled:opacity-60",children:u?"در حال ذخیره...":c?"ذخیره تغییرات":"ثبت نماینده"})]})]})]})}):null]})},Xl={name:"",email:"",code:"",province:"",city:"",phone:"",startDate:"",status:"active",address:"",description:"",shopDescription:""},Zl=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),st=t=>{const r=Zl(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},$t=t=>new Intl.NumberFormat("fa-IR").format(st(t)),Ot=t=>new Intl.NumberFormat("fa-IR").format(st(t)),ta=t=>[String(t.province??"").trim(),String(t.city??"").trim()].filter(Boolean).join(" — ")||"ثبت نشده",mt=()=>{if(typeof window>"u")return"";for(const t of["token","accessToken","authToken","adminToken","admin_access_token"]){const r=window.sessionStorage.getItem(t);if(r?.trim())return r.trim();const s=window.localStorage.getItem(t);if(s?.trim())return s.trim()}return""},pt=async t=>{const r=await t.text();if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error(`پاسخ JSON نیست. کد پاسخ: ${t.status}. ${r.slice(0,120)}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ JSON معتبر نیست. کد پاسخ: ${t.status}`)}},ei=t=>{const r=["jpg","jpeg","png","gif","webp","svg"],s=t.name.split(".").pop()?.toLowerCase();return!!(s&&r.includes(s))},_e=({title:t,children:r,index:s})=>(0,e.jsx)("div",{className:"group relative min-h-[220px] overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_16px_32px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 dark:shadow-none sm:min-h-[250px] sm:p-5 md:rounded-[30px] md:p-6",style:{animation:`cardEnter 550ms ease-out ${s*70}ms both`},children:(0,e.jsxs)("div",{className:"relative z-10 flex h-full flex-col",children:[(0,e.jsx)("div",{className:"w-full rounded-xl border border-blue-100 bg-slate-800 px-4 py-2.5 text-center text-sm font-black text-white shadow-sm dark:border-slate-600 dark:bg-slate-700 sm:px-5 sm:py-3 sm:text-base md:text-lg",children:t}),(0,e.jsxs)("div",{className:"relative mt-5 flex flex-1 items-center justify-center overflow-hidden rounded-[18px] border border-slate-100 bg-white p-4 text-center shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:border-gray-700 dark:bg-gray-800 sm:mt-6 sm:p-5",children:[(0,e.jsx)("div",{className:"relative z-20 w-full",children:r}),(0,e.jsx)("div",{className:"pointer-events-none absolute -right-8 -top-8 z-10 h-28 w-28 rounded-full border-[10px] border-blue-100/70 bg-blue-200/50 transition-transform duration-500 group-hover:scale-110 dark:border-blue-900/40 dark:bg-blue-800/30 sm:-right-9 sm:-top-9 sm:h-36 sm:w-36"}),(0,e.jsx)("div",{className:"pointer-events-none absolute -bottom-10 -left-10 z-0 h-32 w-32 rounded-full bg-blue-100/50 blur-xl dark:bg-blue-900/20"})]})]})}),ti=({representative:t,apiUrl:r,onBack:s,files:d=[],loadingFiles:b=!1,onViewFile:n,onDeleteFile:g,onRepresentativeUpdated:o,onRefreshFiles:u})=>{const[p,c]=(0,a.useState)(t),[k,f]=(0,a.useState)([]),[j,m]=(0,a.useState)(!0),[h,w]=(0,a.useState)(""),[x,I]=(0,a.useState)([]),[U,P]=(0,a.useState)(!1),[O,H]=(0,a.useState)(""),[T,A]=(0,a.useState)([]),[y,$]=(0,a.useState)(!0),[B,D]=(0,a.useState)(""),[W,J]=(0,a.useState)(!1),[C,z]=(0,a.useState)(""),[l,N]=(0,a.useState)(null),[v,R]=(0,a.useState)(""),[q,S]=(0,a.useState)(null),[_,te]=(0,a.useState)(!1),[G,de]=(0,a.useState)(Xl),[ie,he]=(0,a.useState)(!1),[xe,ge]=(0,a.useState)(""),[Ie,ue]=(0,a.useState)(!1),[F,Y]=(0,a.useState)([]),[ee,i]=(0,a.useState)(!1),[E,V]=(0,a.useState)(""),[ne,pe]=(0,a.useState)(!1),[be,$e]=(0,a.useState)(!1),[M,K]=(0,a.useState)([]),re=Array.isArray(d)?d:[],ye=(0,a.useMemo)(()=>{const L=[],Q=new Set;return[...re,...M].forEach(X=>{const Z=String(X.name??"").trim().toLowerCase();!Z||Q.has(Z)||(Q.add(Z),L.push(X))}),L},[re,M]),Ne=(0,a.useMemo)(()=>{const L=String(r||"").trim().replace(/\/+$/,"");return L?L.endsWith("/api")?L:`${L}/api`:"http://localhost:5000/api"},[r]),Ae=String(p.id).trim(),Ct=Ae?`${Ne}/representatives/${encodeURIComponent(Ae)}/warehouse`:"",ke=Ae?`${Ne}/representatives/${encodeURIComponent(Ae)}/notes`:"",fr=`${Ne}/sales-from-warehouse/admin/all`;(0,a.useEffect)(()=>{c(t)},[t]);const Gt=()=>{de({name:p.name??"",email:p.email??"",code:String(p.code??""),province:p.province??"",city:p.city??"",phone:p.phone??"",startDate:p.startDate??"",status:p.status==="inactive"?"inactive":"active",address:p.address??"",description:p.description??"",shopDescription:p.shopDescription??""}),ge(""),te(!0)},Ue=L=>{const{name:Q,value:X}=L.currentTarget;de(Z=>({...Z,[Q]:X}))},rt=async L=>{if(L.preventDefault(),!G.province.trim()){ge("استان را وارد کنید.");return}if(!G.city.trim()){ge("شهر را وارد کنید.");return}const Q=mt();if(!Q){ge("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}const X={name:G.name.trim(),email:G.email.trim(),code:G.code.trim(),province:G.province.trim(),city:G.city.trim(),phone:G.phone.trim(),startDate:G.startDate.trim(),status:G.status,address:G.address.trim(),description:G.description.trim(),shopDescription:G.shopDescription.trim()};try{he(!0),ge("");const Z=await fetch(`${Ne}/representatives/${encodeURIComponent(Ae)}`,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${Q}`},body:JSON.stringify(X)}),se=await pt(Z);if(!Z.ok||!se.success||!se.data)throw new Error(se.error||"ویرایش نماینده ناموفق بود.");c(se.data),o?.(se.data),te(!1)}catch(Z){console.error("خطا در ویرایش نماینده:",Z),ge(Z instanceof Error?Z.message:"ویرایش نماینده ناموفق بود.")}finally{he(!1)}},It=(0,a.useCallback)(async()=>{if(!Ct){f([]),w("شناسه نماینده پیدا نشد."),m(!1);return}const L=mt();if(!L){f([]),w("توکن ادمین پیدا نشد."),m(!1);return}try{m(!0),w("");const Q=await fetch(Ct,{headers:{Accept:"application/json",Authorization:`Bearer ${L}`}}),X=await pt(Q);if(!Q.ok||!X.success)throw new Error(X.error||"دریافت موجودی انبار ناموفق بود.");f(Array.isArray(X.data?.items)?X.data.items:[])}catch(Q){f([]),w(Q instanceof Error?Q.message:"دریافت موجودی انبار ناموفق بود.")}finally{m(!1)}},[Ct]),jr=(0,a.useCallback)(async()=>{const L=mt();if(!L){I([]),H("برای مشاهده فروش‌ها وارد حساب ادمین شوید."),P(!1);return}try{P(!0),H("");const Q=await fetch(fr,{headers:{Accept:"application/json",Authorization:`Bearer ${L}`}}),X=await pt(Q);if(!Q.ok||!X.success)throw new Error(X.error||"دریافت گزارش فروش ناموفق بود.");const Z=Array.isArray(X.data)?X.data:[];I(Z.filter(se=>String(se.representativeId)===Ae))}catch(Q){I([]),H(Q instanceof Error?Q.message:"دریافت گزارش فروش ناموفق بود.")}finally{P(!1)}},[fr,Ae]),Te=(0,a.useCallback)(async()=>{if(!ke){A([]),z("شناسه نماینده پیدا نشد."),$(!1);return}const L=mt();if(!L){A([]),z("برای مشاهده یادداشت‌ها وارد حساب ادمین شوید."),$(!1);return}try{$(!0),z("");const Q=await fetch(ke,{headers:{Accept:"application/json",Authorization:`Bearer ${L}`}}),X=await pt(Q);if(!Q.ok||!X.success)throw new Error(X.error||"دریافت یادداشت‌ها ناموفق بود.");A(Array.isArray(X.data)?X.data:[])}catch(Q){A([]),z(Q instanceof Error?Q.message:"دریافت یادداشت‌ها ناموفق بود.")}finally{$(!1)}},[ke]);(0,a.useEffect)(()=>{It(),jr(),Te()},[It,jr,Te]);const Re=async L=>{L.preventDefault();const Q=B.trim();if(!Q||!ke){z("متن یادداشت را وارد کنید.");return}const X=mt();if(!X){z("برای ثبت یادداشت وارد حساب ادمین شوید.");return}try{J(!0),z("");const Z=await fetch(ke,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${X}`},body:JSON.stringify({text:Q})}),se=await pt(Z);if(!Z.ok||!se.success||!se.data)throw new Error(se.error||"ثبت یادداشت ناموفق بود.");A(Ke=>[se.data,...Ke]),D("")}catch(Z){z(Z instanceof Error?Z.message:"ثبت یادداشت ناموفق بود.")}finally{J(!1)}},Ft=L=>{N(String(L.id)),R(L.text),z("")},Mt=()=>{N(null),R(""),S(null)},Yr=async L=>{const Q=v.trim();if(!Q||!ke){z("متن یادداشت نمی‌تواند خالی باشد.");return}const X=mt();if(!X){z("برای ویرایش یادداشت دوباره وارد شوید.");return}try{S(L),z("");const Z=await fetch(`${ke}/${encodeURIComponent(L)}`,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${X}`},body:JSON.stringify({text:Q})}),se=await pt(Z);if(!Z.ok||!se.success||!se.data)throw new Error(se.error||"ویرایش یادداشت ناموفق بود.");A(Ke=>Ke.map(Ye=>String(Ye.id)===L?se.data:Ye)),Mt()}catch(Z){z(Z instanceof Error?Z.message:"ویرایش یادداشت ناموفق بود.")}finally{S(null)}},Lt=async L=>{if(!window.confirm("آیا از حذف این یادداشت مطمئن هستید؟")||!ke)return;const Q=mt();if(!Q){z("برای حذف یادداشت دوباره وارد شوید.");return}try{S(L);const X=await fetch(`${ke}/${encodeURIComponent(L)}`,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${Q}`}}),Z=await pt(X);if(!X.ok||!Z.success)throw new Error(Z.error||"حذف یادداشت ناموفق بود.");A(se=>se.filter(Ke=>String(Ke.id)!==L))}catch(X){z(X instanceof Error?X.message:"حذف یادداشت ناموفق بود.")}finally{S(null)}},Xt=["jpg","jpeg","png","gif","webp","pdf","doc","docx","xls","xlsx","zip","rar"],qt=L=>String(L||"").split(".").pop()?.toLowerCase()?.trim()||"",$n=L=>{const Q=qt(L.name);return Xt.includes(Q)},An=L=>L.size>0,Qa=L=>!L||L<=0?"—":L<1024?`${L} B`:L<1048576?`${(L/1024).toFixed(1)} KB`:`${(L/1048576).toFixed(1)} MB`,Tn=()=>{ue(!0),Y([]),V(""),pe(!1)},Gr=()=>{ee||(ue(!1),Y([]),V(""),pe(!1),$e(!1))},Ja=L=>{if(!L||L.length===0)return;const Q=Array.from(L),X=[],Z=[];Q.forEach(se=>{if(!$n(se)){Z.push(`نوع فایل "${se.name}" مجاز نیست.`);return}if(!An(se)){Z.push(`فایل "${se.name}" خالی است.`);return}X.push(se)}),Y(se=>[...se,...X]),V(Z.join(" ")),pe(!1)},Dn=L=>{Y(Q=>Q.filter((X,Z)=>Z!==L))},Rn=L=>{L.preventDefault(),L.stopPropagation(),$e(!0)},En=L=>{L.preventDefault(),L.stopPropagation(),$e(!1)},Pn=L=>{L.preventDefault(),L.stopPropagation()},zn=L=>{L.preventDefault(),L.stopPropagation(),$e(!1),Ja(L.dataTransfer.files)},Fn=async()=>{if(F.length===0){V("حداقل یک فایل انتخاب کنید.");return}const L=mt();if(!L){V("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}if(!Ae){V("شناسه نماینده پیدا نشد.");return}try{i(!0),V(""),pe(!1);const Q=new FormData;F.forEach(Ye=>{Q.append("files",Ye)});const X=`${Ne}/representatives/${encodeURIComponent(Ae)}/files`,Z=await fetch(X,{method:"POST",headers:{Authorization:`Bearer ${L}`,Accept:"application/json"},body:Q}),se=await pt(Z);if(!Z.ok||!se.success)throw new Error(se.error||"آپلود فایل‌ها ناموفق بود.");pe(!0);const Ke=Array.isArray(se.data?.files)?se.data.files:[];if(Ke.length>0)K(Ye=>[...Ye,...Ke]);else{const Ye=F.map((Ut,_n)=>({id:`local-${Date.now()}-${_n}`,name:Ut.name,size:Qa(Ut.size),uploadedAt:new Intl.DateTimeFormat("fa-IR").format(new Date),representativeId:Ae}));K(Ut=>[...Ut,...Ye])}Y([]),u?.(),setTimeout(()=>{ue(!1),pe(!1)},1500)}catch(Q){V(Q instanceof Error?Q.message:"آپلود فایل‌ها ناموفق بود.")}finally{i(!1)}},Mn=(0,a.useMemo)(()=>k.reduce((L,Q)=>L+st(Q.quantity),0),[k]),Ln=(0,a.useMemo)(()=>k.reduce((L,Q)=>L+st(Q.totalPrice),0),[k]),qn=(0,a.useMemo)(()=>{const L=new Date,Q=new Date(L);return Q.setDate(Q.getDate()-9),x.filter(X=>{const Z=X.createdAt?new Date(X.createdAt):new Date(NaN);return!Number.isNaN(Z.getTime())&&Z>=Q&&Z<=L}).reduce((X,Z)=>X+st(Z.totalAmount),0)},[x]),Un=(0,a.useMemo)(()=>{const L=new Date;return x.filter(Q=>{const X=Q.createdAt?new Date(Q.createdAt):new Date(NaN);return!Number.isNaN(X.getTime())&&X.getMonth()===L.getMonth()&&X.getFullYear()===L.getFullYear()&&[10,20,30].includes(X.getDate())}).reduce((Q,X)=>Q+st(X.totalAmount),0)},[x]),Ka=st(p.depositAmount),Ya=st(p.guaranteeCheck),On=st(p.totalFinancialCommitment)||Ka+Ya;return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-5",children:[(0,e.jsx)("style",{children:`
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
        `}),(0,e.jsx)("section",{className:"overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-l from-slate-950 via-slate-900 to-blue-950 p-4 text-white shadow-[0_12px_30px_rgba(15,23,42,0.34)] md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"order-2 min-w-0 flex-1 sm:order-1",children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2",children:[(0,e.jsx)("span",{className:"h-2.5 w-2.5 rounded-full bg-cyan-400"}),(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-200 md:text-sm",children:"پنل مدیریت نمایندگی"})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-right",children:[(0,e.jsxs)("p",{className:"text-sm font-bold text-slate-200 md:text-base",children:["داشبورد نمایندگی"," ",(0,e.jsx)("span",{className:"text-white",children:ta(p)})]}),(0,e.jsx)("span",{className:"hidden h-6 w-px bg-slate-600 sm:block",children:"|"}),(0,e.jsxs)("h2",{className:"text-xl font-black leading-9 text-white md:text-2xl",children:["جناب آقای"," ",(0,e.jsx)("span",{className:"text-cyan-200",children:p.name||"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"order-1 flex gap-2 sm:order-2",children:[(0,e.jsx)("button",{type:"button",onClick:Gt,className:"flex min-h-10 items-center gap-2 rounded-xl border border-cyan-300 bg-cyan-400/20 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-400/30",children:"ویرایش"}),(0,e.jsxs)("button",{type:"button",onClick:s,className:"flex min-h-10 items-center gap-2 rounded-xl border border-slate-500 bg-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/20",children:[(0,e.jsx)(al,{className:"h-4 w-4"}),"بازگشت"]})]})]})}),_?(0,e.jsxs)("section",{className:"rounded-[28px] border border-blue-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-slate-800 dark:text-gray-100",children:"ویرایش اطلاعات نماینده"}),(0,e.jsx)("button",{type:"button",onClick:()=>{te(!1),ge("")},className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}),(0,e.jsxs)("form",{onSubmit:rt,className:"space-y-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"اطلاعات پایه نماینده"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"نام نماینده*"}),(0,e.jsx)("input",{name:"name",value:G.name,onChange:Ue,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"ایمیل"}),(0,e.jsx)("input",{name:"email",type:"email",value:G.email,onChange:Ue,placeholder:"example@email.com",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"کد نمایندگی*"}),(0,e.jsx)("input",{name:"code",value:G.code,onChange:Ue,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"استان*"}),(0,e.jsx)("input",{name:"province",value:G.province,onChange:Ue,required:!0,placeholder:"مثلاً قزوین",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"شهر*"}),(0,e.jsx)("input",{name:"city",value:G.city,onChange:Ue,required:!0,placeholder:"مثلاً مهرگان",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تلفن*"}),(0,e.jsx)("input",{name:"phone",value:G.phone,onChange:Ue,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تاریخ قرارداد شمسی"}),(0,e.jsx)("input",{name:"startDate",value:G.startDate,onChange:Ue,placeholder:"۱۴۰۳/۰۱/۰۱",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"وضعیت"}),(0,e.jsxs)("select",{name:"status",value:G.status,onChange:Ue,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"آدرس و توضیحات"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2 md:col-span-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{name:"address",value:G.address,onChange:Ue,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"توضیحات"}),(0,e.jsx)("textarea",{name:"description",value:G.description,onChange:Ue,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{name:"shopDescription",value:G.shopDescription,onChange:Ue,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),xe?(0,e.jsx)("p",{className:"rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:xe}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:ie,className:"min-h-11 rounded-xl bg-blue-600 px-6 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:ie?"در حال ذخیره...":"ذخیره تغییرات"})})]})]}):null,(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-blue-700"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"اطلاعات پایه و تعهدات مالی"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(_e,{index:0,title:"کد نمایندگی",children:(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:p.code?$t(p.code):"—"})}),(0,e.jsx)(_e,{index:1,title:"استان — شهر نمایندگی",children:(0,e.jsx)("p",{title:ta(p),className:"truncate text-3xl font-black text-slate-800 dark:text-gray-100",children:ta(p)})}),(0,e.jsx)(_e,{index:2,title:"تاریخ قرارداد شمسی",children:(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)("p",{className:"text-3xl font-black text-slate-800 dark:text-gray-100",children:p.startDate||"—"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-500 dark:text-gray-400",children:"تاریخ شروع همکاری"})]})}),(0,e.jsx)(_e,{index:3,title:"مبلغ ودیعه",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Ot(Ka)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(_e,{index:4,title:"مبلغ چک ضمانت",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Ot(Ya)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(_e,{index:5,title:"مجموع تعهد مالی",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Ot(On)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[28px] border border-blue-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-gray-800 dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("h3",{className:"mb-4 flex items-center gap-2 text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:[(0,e.jsx)(vt,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آدرس و توضیحات نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800 md:col-span-2",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"آدرس دقیق"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:p.address||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"توضیحات"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:p.description||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"متراژ مغازه"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:p.shopDescription||"ثبت نشده"})]})]})]}),(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-emerald-600"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"عملکرد نمایندگی"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{It()},disabled:j,className:"flex min-h-9 items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400",children:[(0,e.jsx)(Fe,{className:`h-3.5 w-3.5 ${j?"animate-spin":""}`}),"بروزرسانی موجودی"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(_e,{index:6,title:"تعداد",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Kt,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:$t(p.shipmentsCount??0)})]})}),(0,e.jsx)(_e,{index:7,title:"تعداد موجود در انبار فروشگاه",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(ot,{className:"h-8 w-8 text-purple-600 dark:text-purple-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:j?"...":$t(Mn)})]})}),(0,e.jsx)(_e,{index:8,title:"مجموع مبلغ اجناس فروشگاه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(kt,{className:"h-8 w-8 text-emerald-600 dark:text-emerald-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:j?"...":Ot(Ln)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(_e,{index:9,title:"درخواست‌های مرجوعی",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Ma,{className:"h-8 w-8 text-orange-600 dark:text-orange-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:$t(p.returnRequestsCount??0)})]})}),(0,e.jsx)(_e,{index:10,title:"فروش ۱۰ روز گذشته",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(_r,{className:"h-8 w-8 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:U?"...":Ot(qn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(_e,{index:11,title:"فروش ۳ روز مجاز ماه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(tt,{className:"h-8 w-8 text-amber-600 dark:text-amber-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:U?"...":Ot(Un)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex flex-col items-start justify-between gap-3 border-b border-blue-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(pl,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"پرونده‌ها و اسناد نماینده"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400 md:text-sm",children:["مشاهده و مدیریت فایل‌های مربوط به"," ",p.name||"نماینده"]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 md:text-sm",children:[$t(ye.length)," پرونده"]}),(0,e.jsxs)("button",{type:"button",onClick:Tn,className:"flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50 md:text-sm",children:[(0,e.jsx)(vr,{className:"h-4 w-4"}),"آپلود فایل"]})]})]}),b?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-blue-50 p-6 text-center dark:bg-gray-800",children:[(0,e.jsx)(le,{className:"mb-4 h-10 w-10 animate-spin text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600 dark:text-gray-300",children:"در حال بارگذاری پرونده‌ها..."})]}):ye.length===0?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(Sl,{className:"mb-3 h-16 w-16 text-blue-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-300",children:"هنوز پرونده‌ای برای این نماینده ثبت نشده است."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:ye.map((L,Q)=>{const X=ei(L),Z=String(L.representativeId??Ae),se=`${Ne}/representatives/${encodeURIComponent(Z)}/files/${encodeURIComponent(L.name)}/view`,Ke=`${Ne}/representatives/${encodeURIComponent(Z)}/files/${encodeURIComponent(L.name)}/download`;return(0,e.jsxs)("article",{className:"group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",style:{animation:`fileEnter 450ms ease-out ${Q*65}ms both`},children:[X?(0,e.jsx)("button",{type:"button",onClick:()=>{n?.(L)},className:"relative block h-44 w-full overflow-hidden bg-slate-100 dark:bg-gray-700",children:(0,e.jsx)("img",{src:se,alt:L.name,className:"h-full w-full object-cover"})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(L)},className:"flex h-44 w-full flex-col items-center justify-center bg-blue-50 dark:bg-gray-700",children:[(0,e.jsx)(it,{className:"h-16 w-16 text-blue-400"}),(0,e.jsx)("span",{className:"mt-3 text-xs font-bold text-slate-500 dark:text-gray-300",children:"برای مشاهده کلیک کنید"})]}),(0,e.jsxs)("div",{className:"p-4",children:[(0,e.jsx)("p",{title:L.name,className:"truncate text-sm font-black text-slate-800 dark:text-gray-100",children:L.name}),(0,e.jsxs)("div",{className:"mt-2 flex justify-between text-[11px] text-slate-500 dark:text-gray-400",children:[(0,e.jsx)("span",{children:L.size||"—"}),(0,e.jsx)("span",{children:L.uploadedAt||"—"})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(L)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-blue-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(Nt,{className:"h-4 w-4"}),"مشاهده"]}),(0,e.jsxs)("a",{href:Ke,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-emerald-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(xn,{className:"h-4 w-4"}),"دانلود"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{K(Ye=>Ye.filter(Ut=>String(Ut.name)!==String(L.name))),g?.(L.id)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-red-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(Ve,{className:"h-4 w-4"}),"حذف"]})]})]})]},L.id)})})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsx)("div",{className:"mb-5 border-b border-blue-100 pb-4 dark:border-gray-800",children:(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(it,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"یادداشت‌های ادمین"]})}),(0,e.jsxs)("form",{onSubmit:Re,className:"space-y-3",children:[(0,e.jsx)("label",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متن یادداشت"}),(0,e.jsx)("textarea",{value:B,onChange:L=>{D(L.target.value),z("")},rows:4,maxLength:3e3,disabled:W,placeholder:"یادداشت خود را درباره این نماینده بنویسید...",className:"w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"}),C?(0,e.jsx)("p",{className:"text-xs font-bold text-red-600 dark:text-red-400",children:C}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:W||!B.trim(),className:"min-h-11 rounded-xl bg-blue-600 px-5 py-2 text-sm font-bold text-white disabled:opacity-50",children:W?"در حال ثبت...":"ثبت یادداشت"})})]}),(0,e.jsxs)("div",{className:"mt-6 border-t border-slate-100 pt-5 dark:border-gray-800",children:[(0,e.jsx)("h4",{className:"mb-3 text-sm font-black text-slate-800 dark:text-gray-100",children:"یادداشت‌های ثبت‌شده"}),y?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"در حال دریافت یادداشت‌ها..."}):T.length===0?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"هنوز یادداشتی ثبت نشده است."}):(0,e.jsx)("div",{className:"space-y-3",children:T.map(L=>{const Q=String(L.id),X=l===Q,Z=q===Q;return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-800",children:[X?(0,e.jsx)("textarea",{value:v,onChange:se=>{R(se.target.value)},rows:4,disabled:Z,className:"w-full rounded-xl border border-blue-300 bg-white px-3 py-2 text-sm leading-7 outline-none dark:border-blue-700 dark:bg-gray-900 dark:text-gray-100"}):(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:L.text}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsx)("time",{className:"text-xs text-slate-500 dark:text-gray-400",children:new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(L.createdAt))}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[X?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",onClick:()=>{Yr(Q)},disabled:Z||!v.trim(),className:"rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"ذخیره ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:Mt,className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}):(0,e.jsx)("button",{type:"button",onClick:()=>{Ft(L)},className:"rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white",children:"ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:()=>{Lt(Q)},disabled:Z,className:"rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"حذف"})]})]})]},Q)})})]})]}),Ie?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm",onClick:Gr,children:(0,e.jsxs)("div",{className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900",onClick:L=>{L.stopPropagation()},children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100",children:[(0,e.jsx)(vr,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آپلود فایل برای ",p.name||"نماینده"]}),(0,e.jsx)("button",{type:"button",onClick:Gr,disabled:ee,className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:ne?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10",children:[(0,e.jsx)(ve,{className:"mb-3 h-16 w-16 text-emerald-500"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها با موفقیت آپلود شد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{onDragEnter:Rn,onDragLeave:En,onDragOver:Pn,onDrop:zn,className:`flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-colors ${be?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-blue-200 bg-blue-50/50 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800/50"}`,onClick:()=>{document.getElementById("file-input-upload")?.click()},children:[(0,e.jsx)(vr,{className:"mb-3 h-12 w-12 text-blue-500"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها را اینجا رها کنید یا کلیک کنید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400",children:"بدون محدودیت تعداد و حجم - هر تعداد فایل که خواستید می‌توانید آپلود کنید"}),(0,e.jsx)("p",{className:"mt-2 text-[11px] text-slate-400 dark:text-gray-500",children:"انواع مجاز: JPG, PNG, GIF, WEBP, PDF, DOC, DOCX, XLS, XLSX, ZIP, RAR"}),(0,e.jsx)("input",{id:"file-input-upload",type:"file",multiple:!0,className:"hidden",onChange:L=>{Ja(L.target.files),L.target.value=""},accept:".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.xls,.xlsx,.zip,.rar"})]}),F.length>0?(0,e.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,e.jsxs)("p",{className:"text-xs font-black text-slate-700 dark:text-gray-200",children:["فایل‌های انتخاب‌شده (",$t(F.length),"):"]}),F.map((L,Q)=>(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex min-w-0 flex-1 items-center gap-2",children:[(0,e.jsx)(it,{className:"h-5 w-5 flex-shrink-0 text-blue-500"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{title:L.name,className:"truncate text-sm font-bold text-slate-700 dark:text-gray-200",children:L.name}),(0,e.jsx)("p",{className:"text-[11px] text-slate-500 dark:text-gray-400",children:Qa(L.size)})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{Dn(Q)},disabled:ee,className:"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors hover:bg-red-200 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-400",children:(0,e.jsx)(Ve,{className:"h-4 w-4"})})]},`${L.name}-${Q}`))]}):null,E?(0,e.jsxs)("div",{className:"mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-xs font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:[(0,e.jsx)(wl,{className:"mt-0.5 h-4 w-4 flex-shrink-0"}),(0,e.jsx)("span",{children:E})]}):null]})}),ne?null:(0,e.jsxs)("div",{className:"flex items-center justify-end gap-2 border-t border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:Gr,disabled:ee,className:"rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:Fn,disabled:ee||F.length===0,className:"flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-50",children:ee?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(le,{className:"h-4 w-4 animate-spin"}),"در حال آپلود..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(vr,{className:"h-4 w-4"}),"آپلود ",F.length>0?`(${$t(F.length)} فایل)`:""]})})]})]})}):null]})},wr="https://myshop-backend-8nu7.onrender.com/api",ri=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Ta=t=>{const r=ri(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ht=t=>new Intl.NumberFormat("fa-IR").format(Ta(t)),ra=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(r)},ps=t=>{const r=String(t||"pending").trim().toLowerCase();return r==="approved"?{label:"تأیید شده",wrapperClass:"border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300",Icon:ve}:r==="rejected"?{label:"رد شده",wrapperClass:"border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-500/10 dark:text-red-300",Icon:et}:r==="received"?{label:"دریافت شده",wrapperClass:"border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-500/10 dark:text-blue-300",Icon:ve}:r==="reviewing"?{label:"در حال بررسی",wrapperClass:"border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-500/10 dark:text-violet-300",Icon:gr}:{label:"در انتظار بررسی",wrapperClass:"border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-500/10 dark:text-amber-300",Icon:gr}},aa=(t,r)=>ae.isAxiosError(t)&&(t.response?.data?.error||t.response?.data?.message||t.message)||r,sa=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||localStorage.getItem("accessToken")||localStorage.getItem("authToken")||"",qe=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),ai=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),[g,o]=(0,a.useState)(""),[u,p]=(0,a.useState)(null),[c,k]=(0,a.useState)(null),[f,j]=(0,a.useState)(""),m=(0,a.useCallback)(async()=>{const y=sa();if(!y){n("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید."),d(!1);return}d(!0),n("");try{const $=await ae.get(`${wr}/admin/return-requests`,{headers:{Authorization:`Bearer ${y}`}}),B=Array.isArray($.data?.data)?$.data.data:[];r(B)}catch($){n(aa($,"خطا در دریافت درخواست‌های مرجوعی."))}finally{d(!1)}},[]);(0,a.useEffect)(()=>{m()},[m]);const h=(0,a.useMemo)(()=>{const y=g.trim().toLocaleLowerCase("fa-IR");return y?t.filter($=>[$.id,$.title,$.productName,$.representativeName,$.representativeCode,$.returnDate,$.status].some(B=>String(B??"").toLocaleLowerCase("fa-IR").includes(y))):t},[t,g]),w=t.filter(y=>{const $=String(y.status||"").toLowerCase();return $==="pending"||$==="registered"||$==="reviewing"}).length,x=t.filter(y=>{const $=String(y.status||"").toLowerCase();return $==="approved"||$==="received"}).length,I=t.filter(y=>String(y.status||"").toLowerCase()==="rejected").length,U=y=>{r($=>$.map(B=>String(B.id)===String(y.id)?y:B))},P=async y=>{const $=sa();if(!$){alert("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید.");return}const B=y.productName||y.title||"بدون عنوان";if(window.confirm(`آیا درخواست مرجوعی «${B}» از نماینده «${y.representativeName||"نامشخص"}» تأیید شود؟`)){p(String(y.id));try{const D=await ae.patch(`${wr}/admin/return-requests/${y.id}/status`,{status:"approved",adminNote:"درخواست مرجوعی توسط ادمین تأیید شد."},{headers:{Authorization:`Bearer ${$}`}});D.data?.data?U(D.data.data):await m(),alert(D.data?.message||"درخواست مرجوعی با موفقیت تأیید شد.")}catch(D){alert(aa(D,"خطا در تأیید درخواست مرجوعی."))}finally{p(null)}}},O=y=>{k(y),j("")},H=()=>{u||(k(null),j(""))},T=y=>{const $=window.open("","_blank","width=900,height=700");if(!$){alert("پنجرهٔ چاپ باز نشد. لطفاً اجازهٔ باز شدن پنجره‌های جدید (Pop-up) را در مرورگر فعال کنید.");return}const B=y,D=Ta(y.unitPrice??y.price??0),W=Ta(y.quantity||1),J=D*W,C=ps(y.status).label,z=y.productName||y.title||"—",l=B.productBrand||y.brand||"—",N=B.productCategory||y.category||"—",v=B.adminNote||"";$.document.open(),$.document.write(`
      <!doctype html>
      <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>
            برگه مرجوعی - ${qe(y.id)}
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
                  ${qe(y.id||"—")}
                </div>
              </div>

              <div class="header-details">
                <div>
                  تاریخ ثبت:
                  ${qe(ra(y.createdAt))}
                </div>

                <div>
                  وضعیت:
                  <span class="status">
                    ${qe(C)}
                  </span>
                </div>
              </div>
            </header>

            <section class="section">
              <h2 class="section-title">اطلاعات نماینده</h2>

              <div class="grid">
                <div>
                  <span class="label">نام نماینده:</span>
                  ${qe(y.representativeName||"—")}
                </div>

                <div>
                  <span class="label">کد نمایندگی:</span>
                  ${qe(y.representativeCode||"—")}
                </div>

                <div class="full">
                  <span class="label">شهر:</span>
                  ${qe(y.representativeCity||"—")}
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
                  ${qe(z)}
                </div>

                <div>
                  <span class="label">برند:</span>
                  ${qe(l)}
                </div>

                <div>
                  <span class="label">دسته‌بندی:</span>
                  ${qe(N)}
                </div>

                <div>
                  <span class="label">تعداد مرجوعی:</span>
                  ${ht(W)} قلم
                </div>

                <div>
                  
                  ${ht(D)} تومان
                </div>

                <div>
                  <span class="label">جمع کل:</span>
                  ${ht(J)} تومان
                </div>

                <div>
                  <span class="label">تاریخ مرجوعی:</span>
                  ${qe(y.returnDate||"—")}
                </div>
              </div>
            </section>

            ${y.reason?`
                  <section class="section">
                    <h2 class="section-title">دلیل مرجوعی</h2>

                    <div class="reason">
                      ${qe(y.reason)}
                    </div>
                  </section>
                `:""}

            ${v?`
                  <section class="section">
                    <h2 class="section-title">توضیح ادمین</h2>

                    <div class="reason">
                      ${qe(v)}
                    </div>
                  </section>
                `:""}

            <footer class="footer">
              <div>
                این برگه به‌صورت خودکار توسط سامانه تولید شده است.
              </div>

              <div>
                تاریخ چاپ:
                ${qe(ra(new Date().toISOString()))}
              </div>
            </footer>
          </main>
        </body>
      </html>
    `),$.document.close(),$.onload=()=>{$.focus(),window.setTimeout(()=>{$.print()},300)}},A=async()=>{const y=sa();if(!c||!y)return;const $=f.trim();if(!$){alert("لطفاً دلیل رد درخواست را وارد کنید.");return}p(String(c.id));try{const B=await ae.patch(`${wr}/admin/return-requests/${c.id}/status`,{status:"rejected",adminNote:$},{headers:{Authorization:`Bearer ${y}`}});B.data?.data?U(B.data.data):await m(),k(null),j(""),alert(B.data?.message||"درخواست مرجوعی رد شد.")}catch(B){alert(aa(B,"خطا در رد درخواست مرجوعی."))}finally{p(null)}};return s?(0,e.jsx)("div",{dir:"rtl",className:"flex min-h-[400px] items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(le,{className:"mx-auto h-11 w-11 animate-spin text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت درخواست‌های مرجوعی..."})]})}):b?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm dark:border-red-900/50 dark:bg-red-900/20",children:[(0,e.jsx)(ze,{className:"mx-auto h-12 w-12 text-red-600 dark:text-red-400"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-red-700 dark:text-red-300",children:"خطا در دریافت اطلاعات"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600 dark:text-red-400",children:b}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200/70 bg-white/60 p-3 text-right text-xs leading-6 text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-300",children:["آدرس مورد انتظار API:",(0,e.jsxs)("span",{dir:"ltr",className:"mr-1 font-bold",children:[wr,"/admin/return-requests"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{m()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("div",{dir:"rtl",children:[(0,e.jsxs)("section",{className:"mb-6 grid grid-cols-1 gap-4 md:grid-cols-3",children:[(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-amber-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-amber-100/70 blur-2xl dark:bg-amber-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-amber-600 dark:text-amber-400",children:ht(w)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-500 dark:text-amber-300",children:"درخواست نیازمند تصمیم ادمین"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm dark:bg-amber-500/15 dark:text-amber-400",children:(0,e.jsx)(gr,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-emerald-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-emerald-100/70 blur-2xl dark:bg-emerald-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-emerald-600 dark:text-emerald-400",children:ht(x)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-emerald-500 dark:text-emerald-300",children:"درخواست‌های پذیرفته‌شده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-400",children:(0,e.jsx)(ve,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-red-100/70 blur-2xl dark:bg-red-900/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-red-600 dark:text-red-400",children:ht(I)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-red-500 dark:text-red-300",children:"درخواست‌های ردشده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700 shadow-sm dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(et,{className:"h-6 w-6"})})]})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-cyan-50/70 via-white to-purple-50/70 p-5 dark:border-gray-700 dark:from-cyan-950/20 dark:via-gray-900 dark:to-purple-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(We,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"بررسی، تأیید یا رد درخواست‌های ثبت‌شده توسط نمایندگان"})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{m()},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-black text-gray-700 shadow-sm transition-all hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"بروزرسانی"]})]}),(0,e.jsxs)("label",{className:"relative mt-5 block",children:[(0,e.jsx)(dt,{className:"absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{value:g,onChange:y=>{o(y.target.value)},placeholder:"جست‌وجو بر اساس نام نماینده، کد، عنوان، وضعیت یا تاریخ...",className:"w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-12 pl-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"})]})]}),h.length===0?(0,e.jsxs)("div",{className:"p-12 text-center",children:[(0,e.jsx)("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500",children:(0,e.jsx)(We,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"درخواستی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"اگر درخواست مرجوعی ثبت شده است، دکمه بروزرسانی را بزنید."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:p-5",children:h.map(y=>{const $=String(y.id),B=u===$,D=String(y.status||"pending").toLowerCase(),W=D==="pending"||D==="registered"||D==="reviewing",J=ps(y.status),C=J.Icon,z=y.adminNote||"",l=y.unitPrice||y.price||0;return(0,e.jsxs)("article",{className:"group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-700",children:[(0,e.jsx)("div",{className:"absolute right-0 top-0 h-1 w-full bg-gradient-to-l from-cyan-500 via-blue-500 to-purple-500 opacity-70"}),(0,e.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-purple-500/20",children:(0,e.jsx)(wt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:y.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["کد نمایندگی:"," ",y.representativeCode||"—"]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 flex-col items-end gap-2",children:[(0,e.jsxs)("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-black ${J.wrapperClass}`,children:[(0,e.jsx)(C,{className:"h-3.5 w-3.5"}),J.label]}),(0,e.jsxs)("p",{className:"text-[11px] font-bold text-gray-400 dark:text-gray-500",children:["ثبت: ",ra(y.createdAt)]})]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-900/60",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(Or,{className:"h-4 w-4 text-cyan-600 dark:text-cyan-400"}),"عنوان کالای مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-base font-black text-gray-800 dark:text-white",children:y.productName||y.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5 dark:border-emerald-900/40 dark:bg-emerald-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300",children:[(0,e.jsx)(pn,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-emerald-700 dark:text-emerald-400",children:[ht(l)," تومان"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 dark:border-blue-900/40 dark:bg-blue-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300",children:[(0,e.jsx)(Or,{className:"h-4 w-4"}),"تعداد"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-blue-700 dark:text-blue-400",children:[ht(y.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-purple-100 bg-purple-50/70 p-3.5 dark:border-purple-900/40 dark:bg-purple-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300",children:[(0,e.jsx)(tt,{className:"h-4 w-4"}),"تاریخ مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-lg font-black text-purple-700 dark:text-purple-400",children:y.returnDate||"—"})]})]}),z?(0,e.jsxs)("div",{className:"rounded-xl border border-violet-100 bg-violet-50/70 p-4 dark:border-violet-900/40 dark:bg-violet-950/20",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-violet-700 dark:text-violet-300",children:[(0,e.jsx)(it,{className:"h-4 w-4"}),"توضیح ادمین"]}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-violet-900 dark:text-violet-200",children:z})]}):null,(0,e.jsx)("div",{className:"border-t border-gray-100 pt-4 dark:border-gray-700",children:W?(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{P(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-600 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-60",children:[B?(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Aa,{className:"h-5 w-5"}),"تأیید درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{O(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20 transition-all hover:from-red-600 hover:to-rose-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(Ce,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{T(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(it,{className:"h-5 w-5"}),"چاپ / پرینت"]})]}):(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-black ${J.wrapperClass}`,children:[(0,e.jsx)(C,{className:"h-5 w-5"}),"وضعیت: ",J.label]}),(0,e.jsxs)("button",{type:"button",disabled:B,onClick:()=>{T(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(it,{className:"h-5 w-5"}),"چاپ / پرینت"]})]})})]})]},$)})})]}),c?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",children:(0,e.jsxs)("div",{dir:"rtl",className:"w-full max-w-lg rounded-3xl border border-white/30 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(et,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"رد درخواست مرجوعی"}),(0,e.jsxs)("p",{className:"mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400",children:["دلیل رد درخواست «",c.productName||c.title||"بدون عنوان","» را وارد کنید. این توضیح برای نماینده نمایش داده می‌شود."]})]})]}),(0,e.jsx)("button",{type:"button",onClick:H,disabled:!!u,className:"rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600 disabled:opacity-50 dark:hover:bg-gray-800",title:"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsx)("textarea",{value:f,onChange:y=>{j(y.target.value)},rows:5,placeholder:"مثال: لطفاً کالا را همراه فاکتور و تصاویر خسارت ارسال کنید.",className:"mt-5 w-full resize-none rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-7 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsx)("button",{type:"button",disabled:u===String(c.id),onClick:()=>{A()},className:"min-h-11 rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60",children:u===String(c.id)?"در حال ثبت...":"ثبت رد درخواست"}),(0,e.jsx)("button",{type:"button",disabled:!!u,onClick:H,className:"min-h-11 rounded-xl bg-gray-100 px-4 py-3 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"})]})]})}):null]})},si={companyName:"نام شرکت شما",companySubtitle:"سامانه مدیریت فروش و انبار",reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش بر اساس اطلاعات ثبت‌شده توسط نمایندگان در سامانه فروش و انبار تهیه شده است.",companyAddress:"آدرس شرکت، شهر، استان",companyPhone:"۰۲۸-۳۳۲۳۶۰۷۲",companyWebsite:"www.example.com",reportNumber:"",preparedBy:"",salesManager:"",notes:"این گزارش بر اساس اطلاعات ثبت‌شده در سامانه تهیه شده است. لطفاً پیش از امضا، تعداد کالاها، مبلغ کل فروش و جزئیات نمایندگان را بررسی کنید."},ni=["admin_access_token","adminAccessToken","admin_token","adminToken","accessToken","authToken","token"],jn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Ze=t=>{const r=jn(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},oe=t=>new Intl.NumberFormat("fa-IR").format(Ze(t)),we=t=>`${oe(t)} تومان`,li=()=>{if(typeof window>"u")return"";for(const t of ni){const r=window.localStorage.getItem(t);if(r?.trim())return r.trim();const s=window.sessionStorage.getItem(t);if(s?.trim())return s.trim()}return""},ii=async t=>{try{const r=await t.json();return typeof r=="string"?r:r?.error||r?.message||r?.detail||"دریافت اعلام فروش‌ها با خطا مواجه شد."}catch{return t.status===401?"نشست ادمین نامعتبر یا منقضی شده است. لطفاً دوباره وارد حساب ادمین شوید.":t.status===403?"شما دسترسی لازم برای مشاهده اعلام فروش‌ها را ندارید.":"دریافت اعلام فروش‌ها با خطا مواجه شد."}},_t=(t,r)=>{if(t)return t;if(!r)return"—";const s=new Date(r);return Number.isNaN(s.getTime())?"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(s)},hs=()=>new Date().toLocaleDateString("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}),gs=()=>new Date().toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Sr=t=>{const r=t.createdAt||t.saleDate;if(!r)return null;const s=new Date(r);return Number.isNaN(s.getTime())?null:s},er=t=>t.productName||t.title||t.name||"کالای بدون نام",Dt=t=>Ze(t.unitPrice??t.price),us=t=>{const r=Ze(t.totalPrice??t.totalAmount);return r>0?r:Ze(t.quantity)*Dt(t)},na=typeof window<"u"?"https://myshop-backend-8nu7.onrender.com/api":"http://localhost:5000/api",oi=na.endsWith("/api")?na.slice(0,-4):na,di=({token:t})=>{const[r,s]=(0,a.useState)([]),[d,b]=(0,a.useState)(!0),[n,g]=(0,a.useState)(""),[o,u]=(0,a.useState)(null),[p,c]=(0,a.useState)(!1),[k,f]=(0,a.useState)("all"),[j,m]=(0,a.useState)(null),[h,w]=(0,a.useState)(si),x=(0,a.useCallback)(async()=>{try{b(!0),g("");const l=t?.trim()||li();if(!l)throw new Error("توکن ورود ادمین پیدا نشد. لطفاً یک‌بار خارج و دوباره وارد حساب ادمین شوید.");const N=await fetch(`${oi}/api/sales-from-warehouse/admin/all`,{method:"GET",headers:{Authorization:`Bearer ${l}`,Accept:"application/json"}});if(!N.ok){const q=await ii(N);throw N.status===401&&s([]),new Error(q)}const v=await N.json();if(!v?.success)throw new Error(v?.error||v?.message||"دریافت اعلام فروش‌ها با خطا مواجه شد.");const R=Array.isArray(v?.data)?v.data:[];s(R)}catch(l){console.error("خطا در دریافت اعلام فروش‌ها:",l),s([]),g(l instanceof Error?l.message:"خطا در دریافت اعلام فروش‌ها از سرور.")}finally{b(!1)}},[t]);(0,a.useEffect)(()=>{x()},[x]),(0,a.useEffect)(()=>{const l=N=>{if(N.key==="Escape"){if(p){c(!1),m(null);return}o&&u(null)}};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[o,p]);const I=(0,a.useMemo)(()=>r.length,[r]);(0,a.useMemo)(()=>r.reduce((l,N)=>l+Ze(N.totalItems),0),[r]);const U=(0,a.useMemo)(()=>r.reduce((l,N)=>l+Ze(N.totalAmount),0),[r]),P=(0,a.useMemo)(()=>{const l=r.map(N=>String(N.representativeId||N.representativeCode||N.representativeName||"")).filter(Boolean);return new Set(l).size},[r]),O=(0,a.useMemo)(()=>{const l=new Date,N=new Date(l);return N.setHours(0,0,0,0),N.setDate(N.getDate()-9),r.filter(v=>{const R=Sr(v);return R?R>=N&&R<=l:!1}).reduce((v,R)=>v+Ze(R.totalAmount),0)},[r]),H=(0,a.useMemo)(()=>{const l=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(N=>{const v=Sr(N);return v?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(v)===l:!1}).reduce((N,v)=>N+Ze(v.totalAmount),0)},[r]);(0,a.useMemo)(()=>{const l=new Date,N=new Date(l);return N.setHours(0,0,0,0),N.setDate(N.getDate()-9),r.filter(v=>{const R=Sr(v);return R?R>=N&&R<=l:!1}).length},[r]),(0,a.useMemo)(()=>{const l=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(N=>{const v=Sr(N);return v?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(v)===l:!1}).length},[r]);const T=(0,a.useMemo)(()=>!o||!Array.isArray(o.items)?[]:o.items,[o]),A=(0,a.useMemo)(()=>k==="single"&&j?[j]:r,[k,j,r]),y=(0,a.useMemo)(()=>A.reduce((l,N)=>l+Ze(N.totalItems),0),[A]),$=(0,a.useMemo)(()=>A.reduce((l,N)=>l+Ze(N.totalAmount),0),[A]),B=(l,N)=>{const v=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/\//g,""),R=l==="single"&&N?.id?String(N.id).slice(-6):String(r.length).padStart(4,"0");return`ADM-${jn(v)}-${R}`},D=(l,N)=>{w(v=>({...v,[l]:N}))},W=()=>{if(r.length===0){g("هیچ اعلام فروشی برای چاپ وجود ندارد.");return}f("all"),m(null),w(l=>({...l,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:B("all")})),c(!0)},J=l=>{const N=window.open("","_blank","width=900,height=700");if(!N){alert("لطفاً popup blocker را غیرفعال کنید");return}const v=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),R=Array.isArray(l.items)?l.items:[],q=R.map((S,_)=>`
      <tr>
        <td style="text-align:center;">${_+1}</td>
        <td>${S.productName||"—"}</td>
        <td>${S.brand||"—"}</td>
        <td style="text-align:center;">${oe(S.quantity)||"—"}</td>
        <td style="text-align:center;">${oe(S.unitPrice)} تومان</td>
        <td style="text-align:center;">${oe(S.totalPrice??Number(S.quantity||0)*Number(S.unitPrice||0))} تومان</td>
      </tr>
    `).join("");N.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ گزارش فروش - ${l.representativeName||""}</title>
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
    <p><strong>تاریخ چاپ:</strong> ${v}</p>
  </div>
</div>

<div class="report-title">
  <h2>📋 گزارش اعلام فروش</h2>
  <p>گزارش تک‌گزارش فروش نمایندگی ${l.representativeName||""}</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام نمایندگی</div>
    <div class="value">${l.representativeName||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">کد نمایندگی</div>
    <div class="value">${l.representativeCode||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">شهر</div>
    <div class="value">${l.representativeCity||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">تاریخ ثبت</div>
    <div class="value">${l.saleDate||_t(l.createdAt)||"—"}</div>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th style="width: 5%;">ردیف</th>
      <th style="width: 35%;">عنوان</th>
      <th style="width: 15%;">برند</th>
      <th style="width: 10%;">تعداد</th>
      <th style="width: 15%;">قیمت</th>
      <th style="width: 20%;">مجموع</th>
    </tr>
  </thead>
  <tbody>
    ${q}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3" style="text-align:left;"><strong>جمع کل:</strong></td>
      <td style="text-align:center;"><strong>${oe(l.totalItems??R.length)}</strong></td>
      <td></td>
      <td style="text-align:center;"><strong>${we(l.totalAmount)}</strong></td>
    </tr>
  </tfoot>
</table>

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد اقلام</div>
    <div class="value">${oe(l.totalItems??R.length)}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع فروش</div>
    <div class="value">${oe(l.totalAmount)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>بازرگانی مهر امین - 1405</p>
</div>

</body>
</html>`),N.document.close(),N.focus(),setTimeout(()=>{N.print()},1e3)},C=()=>{c(!1),m(null)},z=()=>{setTimeout(()=>{const l=document.querySelector(".admin-print-only");if(!l){console.warn("محتوای چاپ پیدا نشد"),window.print();return}const N=window.getComputedStyle(l);(N.display==="none"||N.visibility==="hidden")&&console.warn("محتوای چاپ مخفی است");const v=document.getElementById("print-iframe");v&&v.parentNode&&document.body.removeChild(v);const R=document.createElement("iframe");R.id="print-iframe",R.style.position="fixed",R.style.right="0",R.style.bottom="0",R.style.width="0",R.style.height="0",R.style.border="0",R.style.overflow="hidden",R.setAttribute("aria-hidden","true"),R.title="چاپ گزارش فروش",document.body.appendChild(R);const q=R.contentWindow?.document||R.contentDocument;if(!q){R.parentNode&&document.body.removeChild(R),window.print();return}Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).map(_=>_.outerHTML).join(`
`),q.open(),q.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ گزارش فروش</title>
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
html, body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif !important; direction: rtl; padding: 15px; background: #ffffff !important; color: #111827; width: 100%; max-width: 100%; visibility: visible !important; opacity: 1 !important; display: block !important; }
body * { visibility: visible !important; opacity: 1 !important; }
table { width: 100% !important; max-width: 100% !important; border-collapse: collapse; margin: 10px 0; table-layout: fixed; display: table !important; }
thead, tbody, tfoot { display: table-row-group !important; }
tr { display: table-row !important; page-break-inside: avoid; page-break-after: auto; }
th, td { border: 1px solid #6b7280; padding: 6px 8px; text-align: right; font-size: 11px; word-wrap: break-word; word-break: break-word; overflow-wrap: break-word; display: table-cell !important; visibility: visible !important; }
th { background: #f3f4f6 !important; font-weight: bold; color: #111827; }
img { max-width: 100%; height: auto; }
h1, h2, h3, h4, h5, h6 { margin: 8px 0; color: #111827; display: block !important; }
p, span, div { color: #111827; }
p { margin: 4px 0; }
@media print {
  @page { size: A4 portrait; margin: 8mm; }
  html, body { padding: 0 !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; visibility: visible !important; opacity: 1 !important; }
  body * { visibility: visible !important; opacity: 1 !important; }
  table { page-break-inside: auto; }
  tr { page-break-inside: avoid; page-break-after: auto; }
  thead { display: table-header-group; }
}
</style>
</head>
<body>${l.outerHTML}</body>
</html>`),q.close();const S=()=>{try{R.contentWindow?.focus(),setTimeout(()=>{try{R.contentWindow?.print()}catch(_){console.error("خطا در چاپ:",_)}setTimeout(()=>{R.parentNode&&document.body.removeChild(R)},1e3)},500)}catch(_){console.error("خطا در چاپ:",_),R.parentNode&&document.body.removeChild(R)}};R.contentWindow?.document?.readyState==="complete"?S():(R.onload=S,setTimeout(()=>{R.parentNode&&R.contentWindow?.document?.readyState==="complete"&&S()},3e3))},200)};return d?(0,e.jsx)("section",{className:"flex min-h-[360px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(le,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اعلام فروش‌های نمایندگان..."})]})}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6",children:[(0,e.jsx)("style",{children:`
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
      `}),(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-cyan-900/50 dark:from-cyan-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-cyan-900 dark:text-cyan-100",children:oe(I)}),(0,e.jsxs)("p",{className:"mt-1 truncate text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["از ",oe(P)," نمایندگی"]})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(We,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-cyan-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-violet-900/50 dark:from-violet-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300",children:"مبلغ فروش ۱۰ روز گذشته"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-violet-900 dark:text-violet-100",children:we(O)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-violet-600 dark:text-violet-400",children:"فروش نمایندگان در ۱۰ روز اخیر"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(tt,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-violet-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/50 dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300",children:"مبلغ فروش ماهانه نمایندگان"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-blue-900 dark:text-blue-100",children:we(H)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-blue-600 dark:text-blue-400",children:"فروش نمایندگان در ماه جاری"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(_r,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-blue-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300",children:"مجموع مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-900 dark:text-emerald-100",children:we(U)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-emerald-600 dark:text-emerald-400",children:"مجموع اعلام فروش‌های ثبت‌شده"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(_r,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-emerald-400/10"})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 border-b border-gray-100 p-5 dark:border-gray-700 md:flex-row md:items-center md:justify-between md:p-6",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"لیست اعلام فروش نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات مستقیماً از سرور دریافت می‌شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:W,disabled:r.length===0,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2.5 text-xs font-black text-cyan-700 transition-colors hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300 dark:hover:bg-cyan-950/50",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ گزارش‌ها"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{x()},disabled:d,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Fe,{className:`h-4 w-4 ${d?"animate-spin":""}`}),"بروزرسانی از سرور"]})]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(We,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز هیچ اعلام فروشی ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"بعد از ثبت فروش در پنل نماینده، گزارش آن در همین بخش برای ادمین نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-4 p-4 md:hidden",children:r.map(l=>{const N=Array.isArray(l.items)?l.items:[];return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نمایندگی"}),(0,e.jsx)("h3",{className:"mt-1 truncate font-black text-gray-800 dark:text-white",children:l.representativeName||"نمایندگی بدون نام"}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:["کد: ",l.representativeCode||"—"]}),(0,e.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(vt,{className:"h-3.5 w-3.5 text-rose-500"}),l.representativeCity||"شهر ثبت نشده"]})]})]}),(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(wt,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("div",{className:"space-y-3 p-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-gray-800 dark:text-white",children:_t(l.saleDate,l.createdAt)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[oe(l.totalItems)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-emerald-800 dark:text-emerald-200",children:we(l.totalAmount)})]}),N.length>0?(0,e.jsxs)("div",{className:"rounded-xl border border-gray-100 p-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-black text-gray-700 dark:text-gray-200",children:"خلاصه کالاها"}),(0,e.jsxs)("div",{className:"space-y-1.5",children:[N.slice(0,2).map((v,R)=>(0,e.jsxs)("p",{className:"text-xs leading-6 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:er(v)})," — ",oe(v.quantity)," قلم"]},`${l.id}-${v.productId||R}`)),N.length>2?(0,e.jsxs)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:["و ",oe(N.length-2)," کالای دیگر..."]}):null]})]}):null,(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(l)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)(Nt,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{J(l)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-black text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ"]})]})]})]},l.id)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[900px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-ellipsis text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"کد نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"نام نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"شهر"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مجموع اقلام"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 text-center py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.map(l=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-500 dark:text-gray-400",children:_t(l.saleDate,l.createdAt)}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-cyan-50 px-3 py-1.5 font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:l.representativeCode||"—"})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(wt,{className:"h-4 w-4 text-gray-400 dark:text-gray-500"}),l.representativeName||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)(vt,{className:"h-4 w-4 text-rose-500"}),l.representativeCity||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"font-black text-amber-700 dark:text-amber-300",children:[oe(l.totalItems)," قلم"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"font-black text-emerald-700 dark:text-emerald-300",children:we(l.totalAmount)})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(l)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3.5 py-2 text-xs font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Nt,{className:"h-4 w-4"}),"مشاهده جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{J(l)},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-black text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ"]})]})})]},l.id))})]})})]})]}),o?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",onMouseDown:()=>{u(null)},children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"جزئیات اعلام فروش",className:"max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-gray-900",onMouseDown:l=>{l.stopPropagation()},children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(cn,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"جزئیات اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات فروش ثبت‌شده توسط نمایندگی"})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پنجره جزئیات",title:"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-6 p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900/50 dark:bg-cyan-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:"نام نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-cyan-900 dark:text-cyan-100",children:o.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["کد: ",o.representativeCode||"—"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-violet-100 bg-violet-50 p-4 dark:border-violet-900/50 dark:bg-violet-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-violet-700 dark:text-violet-300",children:"شهر نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-violet-900 dark:text-violet-100",children:o.representativeCity||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-900 dark:text-emerald-100",children:we(o.totalAmount)}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400",children:[oe(o.totalItems)," قلم"]})]})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:_t(o.saleDate,o.createdAt)})]}),(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-gray-600 shadow-sm dark:bg-gray-900 dark:text-gray-300",children:[(0,e.jsx)(We,{className:"h-4 w-4 text-cyan-500"}),"شناسه گزارش: ",o.id]})]})}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-5 py-4 dark:border-gray-700 dark:bg-gray-800/70",children:[(0,e.jsx)(pr,{className:"h-5 w-5 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("h4",{className:"font-black text-gray-800 dark:text-white",children:"کالاهای فروخته‌شده"})]}),T.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(pr,{className:"mx-auto h-10 w-10 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-black text-gray-600 dark:text-gray-300",children:"جزئیات کالاهای این اعلام فروش از سرور دریافت نشده است."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:T.map((l,N)=>(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["کالا ",oe(N+1)]}),(0,e.jsx)("p",{className:"mt-1 break-words font-black text-gray-800 dark:text-white",children:er(l)})]}),(0,e.jsxs)("span",{className:"rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",children:[oe(l.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,e.jsx)("div",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800",children:(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-700 dark:text-gray-100",children:we(Dt(l))})}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-emerald-800 dark:text-emerald-200",children:we(us(l))})]})]})]},`${o.id}-${l.productId||N}`))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[700px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"ردیف"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:T.map((l,N)=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-500 dark:text-gray-400",children:oe(N+1)}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-800 dark:text-white",children:er(l)}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[oe(l.quantity)," قلم"]}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:we(Dt(l))}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:we(us(l))})]},`${o.id}-${l.productId||N}`))})]})})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-wrap gap-2 border-t border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 md:px-6",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{J(o)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"تنظیم و چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]})}):null,p?(0,e.jsx)("div",{className:"admin-print-only",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:h.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:h.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:h.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:h.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:h.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:hs()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:gs()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:k==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:A.map((l,N)=>{const v=Array.isArray(l.items)?l.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:oe(N+1)}),(0,e.jsx)("td",{children:_t(l.saleDate,l.createdAt)}),(0,e.jsx)("td",{children:l.representativeCode||"—"}),(0,e.jsx)("td",{children:l.representativeName||"—"}),(0,e.jsx)("td",{children:l.representativeCity||"—"}),(0,e.jsxs)("td",{children:[oe(l.totalItems)," قلم"]}),(0,e.jsx)("td",{children:we(l.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:v.length>0?v.map((R,q)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[er(R)," — ",oe(R.quantity)," قلم",Dt(R)>0?` — ${we(Dt(R))}`:""]},`${l.id}-${R.productId||q}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},l.id||N)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[oe(y)," قلم"]}),(0,e.jsx)("td",{children:we($)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[oe(A.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[oe(y)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:we($)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:h.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:h.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:h.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:h.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",h.companyPhone||"—"," | ","وب‌سایت: ",h.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})}):null,p?(0,e.jsx)("div",{className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"تنظیم و چاپ گزارش فروش نمایندگان",className:"max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-4 border-b border-gray-100 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"تنظیم و پیش‌نمایش چاپ گزارش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات چاپ را تنظیم و پیش‌نمایش را بررسی کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:C,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پیش‌نمایش چاپ",title:"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"space-y-4 lg:col-span-1",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نوع گزارش"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{f("all"),m(null),w(l=>({...l,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:B("all")}))},className:`rounded-xl px-3 py-2 text-xs font-black transition ${k==="all"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"تمام گزارش‌ها"}),(0,e.jsx)("button",{type:"button",onClick:()=>{f("single"),w(l=>({...l,reportTitle:`گزارش اعلام فروش نمایندگی ${j?.representativeName||""}`,reportDescription:"این گزارش شامل اطلاعات و جزئیات یک اعلام فروش ثبت‌شده توسط نمایندگی است.",reportNumber:B("single",j)}))},disabled:!j,className:`rounded-xl px-3 py-2 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-60 ${k==="single"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"یک گزارش"})]})]}),(0,e.jsxs)("div",{className:"space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"نام شرکت"}),(0,e.jsx)("input",{type:"text",value:h.companyName,onChange:l=>{D("companyName",l.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"عنوان گزارش"}),(0,e.jsx)("input",{type:"text",value:h.reportTitle,onChange:l=>{D("reportTitle",l.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"شماره گزارش"}),(0,e.jsx)("input",{type:"text",value:h.reportNumber,onChange:l=>{D("reportNumber",l.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{value:h.notes,onChange:l=>{D("notes",l.target.value)},rows:3,className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row lg:flex-col",children:[(0,e.jsxs)("button",{type:"button",onClick:z,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:C,className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]}),(0,e.jsx)("div",{className:"lg:col-span-2",children:(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"پیش‌نمایش چاپ"}),(0,e.jsx)("div",{className:"mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsx)("div",{className:"max-h-[60vh] overflow-y-auto p-4",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:h.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:h.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:h.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:h.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:h.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:hs()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:gs()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:k==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:A.map((l,N)=>{const v=Array.isArray(l.items)?l.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:oe(N+1)}),(0,e.jsx)("td",{children:_t(l.saleDate,l.createdAt)}),(0,e.jsx)("td",{children:l.representativeCode||"—"}),(0,e.jsx)("td",{children:l.representativeName||"—"}),(0,e.jsx)("td",{children:l.representativeCity||"—"}),(0,e.jsxs)("td",{children:[oe(l.totalItems)," قلم"]}),(0,e.jsx)("td",{children:we(l.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:v.length>0?v.map((R,q)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[er(R)," — ",oe(R.quantity)," قلم",Dt(R)>0?` — ${we(Dt(R))}`:""]},`${l.id}-${R.productId||q}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},l.id||N)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[oe(y)," قلم"]}),(0,e.jsx)("td",{children:we($)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[oe(A.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[oe(y)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:we($)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:h.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:h.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:h.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:h.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",h.companyPhone||"—"," | ","وب‌سایت: ",h.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})})})]})})]})]})}):null]})},Bt="https://myshop-backend-8nu7.onrender.com/api".replace(/\/+$/,""),Pt=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],At={name:["عنوان","عنوان","عنوان","نام","کالا","محصول","productName","Product","Name"],brand:["برند","نام برند","Brand"],category:["دسته‌بندی","دسته بندی","دسته","گروه کالا","Category"],quantity:["تعداد","تعداد کالا","تعداد موجودی","موجودی","موجودی کالا","مقدار","quantity","Qty","Stock","Count"],price:["قیمت","قیمت","قیمت","unitPrice","Unit Price","Price"]},ci=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",Cr=()=>{const t=ci();if(!t)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`,Accept:"application/json"}},nt=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Yt=t=>nt(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim().toLowerCase(),Da=t=>{const r=nt(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,"");if(!r)return NaN;const s=Number(r);return Number.isFinite(s)?s:NaN},ce=t=>{const r=Da(t);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},tr=(t,r)=>{const s=new Set(r.map(Yt));return Object.entries(t).find(([d])=>s.has(Yt(d)))?.[1]??""},bs=(t,r)=>{const s=new Set(r.map(Yt));return Object.keys(t).some(d=>s.has(Yt(d)))},Ir=t=>Pt.find(r=>r.value===t)?.label||"نامشخص",vn=t=>Pt.findIndex(r=>r.value===t),ys=t=>{const r=vn(t);return r<0?"confirmed":r>=Pt.length-1?null:Pt[r+1].value},la=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/").split("/").map(t=>nt(t)).join("/"),rr=(t,r)=>{if(ae.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||r}return t instanceof Error?t.message:r},xi=async t=>{const r=await t.arrayBuffer(),s=ln(r,{type:"array"}),d=s.SheetNames[0];if(!d)throw new Error("فایل اکسل هیچ برگه‌ای ندارد.");const b=s.Sheets[d],n=nn.sheet_to_json(b,{defval:"",raw:!1});if(n.length===0)throw new Error("فایل اکسل خالی است.");const g=[];if(bs(n[0],At.name)||g.push("عنوان"),bs(n[0],At.quantity)||g.push("تعداد"),g.length>0)throw new Error(`ستون‌های لازم پیدا نشد: ${g.join("، ")}`);return n.map((o,u)=>{const p=u+2,c=String(tr(o,At.name)).trim(),k=String(tr(o,At.brand)).trim(),f=String(tr(o,At.category)).trim(),j=Da(tr(o,At.quantity)),m=tr(o,At.price),h=String(m).trim()===""?0:Da(m);let w="";return c?!Number.isSafeInteger(j)||j<=0?w="تعداد باید عدد صحیح و بزرگ‌تر از صفر باشد.":(!Number.isSafeInteger(h)||h<0)&&(w="قیمت باید عدد صحیح و نامنفی باشد."):w="عنوان خالی است.",{rowIndex:p,productName:c,brand:k,category:f,quantity:Number.isFinite(j)?j:0,unitPrice:Number.isFinite(h)?h:0,totalPrice:Number.isFinite(j)&&Number.isFinite(h)?j*h:0,error:w}})},mi=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[g,o]=(0,a.useState)(!1),[u,p]=(0,a.useState)(null),[c,k]=(0,a.useState)(null),[f,j]=(0,a.useState)(""),[m,h]=(0,a.useState)(""),[w,x]=(0,a.useState)(""),[I,U]=(0,a.useState)(!1),[P,O]=(0,a.useState)(null),[H,T]=(0,a.useState)(""),[A,y]=(0,a.useState)(""),[$,B]=(0,a.useState)(la),[D,W]=(0,a.useState)(""),[J,C]=(0,a.useState)([]),[z,l]=(0,a.useState)(""),[N,v]=(0,a.useState)(""),[R,q]=(0,a.useState)(""),S=(0,a.useRef)(null),_=(0,a.useMemo)(()=>new Map(s.map(i=>[nt(i.id).trim(),i])),[s]),te=_.get(H),G=(0,a.useMemo)(()=>J.filter(i=>!i.error),[J]),de=(0,a.useMemo)(()=>J.filter(i=>!!i.error),[J]),ie=(0,a.useMemo)(()=>{const i=Yt(R);return t.filter(E=>{const V=_.get(nt(E.representativeId).trim()),ne=!z||nt(E.representativeId).trim()===z,pe=!N||E.status===N,be=Yt([E.shipmentNumber,E.representativeName,V?.name,E.warehouse,E.excelFileName].join(" "));return ne&&pe&&be.includes(i)})},[t,_,z,N,R]),he=(0,a.useCallback)(async(i=!0)=>{i&&n(!0);try{const E=Cr(),[V,ne]=await Promise.all([ae.get(`${Bt}/shipments`,{headers:E}),ae.get(`${Bt}/representatives`,{headers:E})]);if(V.data.success===!1||ne.data.success===!1)throw new Error(V.data.error||ne.data.error||"دریافت اطلاعات ناموفق بود.");r(Array.isArray(V.data.data)?V.data.data:[]),d(Array.isArray(ne.data.data)?ne.data.data:[])}catch(E){j(rr(E,"دریافت اطلاعات ناموفق بود."))}finally{i&&n(!1)}},[]);(0,a.useEffect)(()=>{he()},[he]);const xe=()=>{T(""),y(""),B(la()),W(""),C([]),x(""),S.current&&(S.current.value="")},ge=()=>{xe(),B(la()),j(""),h(""),U(!0)},Ie=async i=>{const E=i.target.files?.[0];if(W(""),C([]),x(""),!!E){if(!/\.(xlsx|xls)$/i.test(E.name)){x("فقط فایل اکسل xlsx یا xls پذیرفته می‌شود."),i.target.value="";return}try{const V=await xi(E);W(E.name),C(V)}catch(V){x(rr(V,"خواندن فایل اکسل ناموفق بود.")),i.target.value=""}}},ue=async i=>{if(i.preventDefault(),x(""),j(""),h(""),!te){x("نماینده را انتخاب کنید.");return}const E=String(te.id||"").trim();if(!E||E==="undefined"||E==="null"){x("شناسه نماینده نامعتبر است. لطفاً صفحه را رفرش کرده و دوباره تلاش کنید.");return}o(!0);try{let V,ne=0;G.length>0?(V=G.map(be=>({productName:be.productName,brand:be.brand,category:be.category,quantity:be.quantity,unitPrice:be.unitPrice,rowIndex:be.rowIndex})),ne=de.length):V=[{productName:"بار دستی",brand:"",category:"",quantity:1,unitPrice:0,rowIndex:1}],console.log("🚀 Sending shipment request:",{url:`${Bt}/shipments`,representativeId:E,warehouse:A.trim()||"انبار مرکزی",itemsCount:V.length,skippedInvalidRows:ne});const pe=await ae.post(`${Bt}/shipments`,{representativeId:E,warehouse:A.trim()||"انبار مرکزی",shipmentDate:$,excelFileName:D||"",items:V},{headers:{...Cr(),"Content-Type":"application/json"}});if(pe.data.success===!1)throw new Error(pe.data.error||"ثبت بار ناموفق بود.");U(!1),xe(),h(pe.data.message||"بار با موفقیت ثبت شد."),he(!1)}catch(V){x(rr(V,"ثبت بار ناموفق بود."))}finally{o(!1)}},F=async(i,E)=>{if(i.status!==E&&window.confirm(`وضعیت بار «${i.shipmentNumber||i.id}» به «${Ir(E)}» تغییر کند؟`)){p(String(i.id)),j(""),h("");try{const V=await ae.patch(`${Bt}/shipments/${encodeURIComponent(String(i.id))}/status`,{status:E},{headers:Cr()});if(V.data.success===!1)throw new Error(V.data.error||"تغییر وضعیت ناموفق بود.");V.data.data?r(pe=>pe.map(be=>String(be.id)===String(i.id)?V.data.data:be)):he(!1);let ne=V.data.message||"وضعیت بار تغییر کرد.";V.data.sms&&(V.data.sms.sent?ne+=" پیامک برای نماینده ارسال شد.":ne+=" (ارسال پیامک ناموفق بود.)"),h(ne)}catch(V){j(rr(V,"تغییر وضعیت ناموفق بود."))}finally{p(null)}}},Y=async i=>{const E=ys(i.status);if(!E){j("بار در آخرین وضعیت است. برای تغییر دستی از انتخاب‌گر وضعیت استفاده کنید.");return}await F(i,E)},ee=async i=>{const E=i.shipmentNumber||i.id;if(window.confirm(`آیا از حذف بار «${E}» مطمئن هستید؟`)){k(String(i.id)),j(""),h("");try{const V=await ae.delete(`${Bt}/shipments/${encodeURIComponent(String(i.id))}`,{headers:Cr()});if(V.data.success===!1)throw new Error(V.data.error||"حذف بار ناموفق بود.");r(ne=>ne.filter(pe=>String(pe.id)!==String(i.id))),h(V.data.message||"بار حذف شد.")}catch(V){j(rr(V,"حذف بار ناموفق بود."))}finally{k(null)}}};return b&&t.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-10 text-center dark:bg-gray-900",children:[(0,e.jsx)(le,{className:"mx-auto mb-3 h-9 w-9 animate-spin text-blue-600"}),"در حال دریافت اطلاعات..."]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 rounded-2xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:space-y-5 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:pb-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-900 dark:text-white sm:text-2xl",children:[(0,e.jsx)(Kt,{className:"h-5 w-5 text-blue-600 sm:h-6 sm:w-6"}),"مدیریت ارسال بار"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm",children:[ce(t.length)," حواله ثبت‌شده"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>void he(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-3 text-xs font-bold dark:border-gray-700 dark:text-white sm:px-4 sm:text-sm",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"به‌روزرسانی"]}),(0,e.jsxs)("button",{type:"button",onClick:ge,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 text-xs font-black text-white hover:bg-blue-700 sm:px-4 sm:text-sm",children:[(0,e.jsx)(ur,{className:"h-4 w-4"}),"ارسال بار جدید"]})]})]}),f&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),f]}),m&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700",children:[(0,e.jsx)(ve,{className:"h-5 w-5 shrink-0"}),m]}),(0,e.jsxs)("section",{className:"grid gap-3 md:grid-cols-3",children:[(0,e.jsx)("input",{type:"search",value:R,onChange:i=>q(i.target.value),placeholder:"جست‌وجوی حواله یا نماینده",className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("select",{value:z,onChange:i=>l(i.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ نمایندگان"}),s.map(i=>(0,e.jsx)("option",{value:nt(i.id).trim(),children:i.name||"بدون نام"},String(i.id)))]}),(0,e.jsxs)("select",{value:N,onChange:i=>v(i.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ وضعیت‌ها"}),Pt.map(i=>(0,e.jsx)("option",{value:i.value,children:i.label},i.value))]})]}),ie.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل بارها"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[ce(ie.length)," حواله · ",ce(ie.reduce((i,E)=>i+(E.totalItems??E.items?.reduce((V,ne)=>V+ne.quantity,0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:ce(ie.reduce((i,E)=>i+(E.totalValue??E.items?.reduce((V,ne)=>V+(ne.totalPrice??(ne.quantity||0)*(ne.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),ie.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-10 text-center",children:[(0,e.jsx)(ot,{className:"mx-auto mb-3 h-12 w-12 text-blue-300"}),(0,e.jsx)("p",{className:"font-bold text-gray-700",children:t.length===0?"هنوز باری ثبت نشده است.":"باری با این فیلترها پیدا نشد."})]}):(0,e.jsx)("div",{className:"grid gap-4 xl:grid-cols-2",children:ie.map(i=>{const E=_.get(nt(i.representativeId).trim()),V=i.representativeName||E?.name||"—",ne=i.items?.length??i.itemsCount??0,pe=i.totalItems??i.items?.reduce((re,ye)=>re+ye.quantity,0)??0,be=vn(i.status),$e=ys(i.status),M=u===String(i.id),K=c===String(i.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/60 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"truncate text-xs font-bold text-gray-500",children:["حواله ",i.shipmentNumber||i.id]}),(0,e.jsx)("h3",{className:"mt-1 text-base font-black text-gray-900 dark:text-white sm:text-lg",children:V}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-600 dark:text-gray-300 sm:mt-2 sm:text-sm",children:["انبار: ",i.warehouse||"—"]})]}),(0,e.jsx)("span",{className:"rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-black text-blue-700 sm:px-3 sm:py-1.5 sm:text-xs",children:Ir(i.status)})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-2 sm:mt-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:ce(ne)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:ce(pe)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black dark:text-white sm:text-sm",children:i.shipmentDate||"—"})]})]}),(0,e.jsx)("div",{className:"mt-3 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-1.5",children:Pt.map((re,ye)=>(0,e.jsx)("div",{className:`truncate rounded-lg px-1 py-2 text-center text-[9px] font-bold sm:text-xs ${ye<=be?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700"}`,children:re.label},re.value))}),(0,e.jsxs)("div",{className:"mt-3 flex flex-col gap-2 border-t border-gray-200 pt-3 dark:border-gray-700 sm:mt-4 sm:flex-row sm:pt-4",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>O(i),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-300 px-4 text-sm font-bold text-blue-700",children:[(0,e.jsx)(Jr,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsx)("button",{type:"button",onClick:()=>void Y(i),disabled:M||K||!$e,title:$e?`تغییر به ${Ir($e)}`:"مرحلهٔ بعدی ندارد",className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white disabled:cursor-not-allowed disabled:bg-gray-300",children:M?(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)($a,{className:"h-5 w-5"})}),(0,e.jsx)("select",{value:i.status||"registered",onChange:re=>void F(i,re.target.value),disabled:M||K,className:"min-h-11 flex-1 rounded-xl border border-gray-300 bg-white px-3 text-sm font-bold dark:border-gray-700 dark:bg-gray-900 dark:text-white",children:Pt.map(re=>(0,e.jsx)("option",{value:re.value,children:re.label},re.value))}),(0,e.jsxs)("button",{type:"button",onClick:()=>void ee(i),disabled:M||K,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 disabled:opacity-50",children:[K?(0,e.jsx)(le,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Ve,{className:"h-4 w-4"}),"حذف"]})]})]},String(i.id))})}),I&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-xl font-black dark:text-white",children:"ارسال بار جدید"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"گیرنده به‌صورت خودکار نام نمایندهٔ انتخاب‌شده است."})]}),(0,e.jsx)("button",{type:"button",disabled:g,onClick:()=>{U(!1),xe()},className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),w&&(0,e.jsxs)("div",{className:"mb-4 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),w]}),(0,e.jsxs)("form",{onSubmit:i=>void ue(i),className:"space-y-4 sm:space-y-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 sm:grid-cols-2 sm:gap-4",children:[(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["نماینده",(0,e.jsxs)("select",{value:H,onChange:i=>T(i.target.value),required:!0,className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"نماینده را انتخاب کنید"}),s.map(i=>(0,e.jsxs)("option",{value:nt(i.id).trim(),children:[i.name||"بدون نام"," ","—"," ",i.city||"بدون شهر"]},String(i.id)))]})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["تاریخ ثبت بار",(0,e.jsxs)("div",{className:"relative mt-2",children:[(0,e.jsx)(tt,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"}),(0,e.jsx)("input",{value:$,readOnly:!0,dir:"ltr",className:"min-h-12 w-full cursor-not-allowed rounded-xl border border-blue-200 bg-blue-50 py-2 pl-3 pr-11 text-center font-black text-blue-800"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:"تاریخ امروز خودکار ثبت می‌شود و قابل ویرایش نیست."})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white sm:col-span-2",children:["انبار مبدأ ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"}),(0,e.jsx)("input",{value:A,onChange:i=>y(i.target.value),placeholder:"خالی = انبار مرکزی",className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]})]}),te&&(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 text-sm font-bold text-purple-800",children:["گیرندهٔ خودکار:"," ",te.name||"—"," ","— کد"," ",te.code||"—"]}),(0,e.jsx)("div",{className:"rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-5",children:(0,e.jsxs)("label",{className:"flex cursor-pointer flex-col items-center gap-2 text-center",children:[(0,e.jsx)(br,{className:"h-8 w-8 text-blue-600"}),(0,e.jsxs)("span",{className:"font-black text-blue-800",children:["انتخاب فایل اکسل اقلام ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"})]}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"ستون‌های ضروری: عنوان و تعداد — اگر فایل انتخاب نکنید، بار با یک آیتم پیش‌فرض ثبت می‌شود"}),(0,e.jsx)("input",{ref:S,type:"file",accept:".xlsx,.xls",onChange:i=>void Ie(i),className:"sr-only"})]})}),D&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm font-bold text-green-700",children:[(0,e.jsx)(Oa,{className:"h-5 w-5"}),D]}),J.length>0&&(0,e.jsxs)("div",{className:"max-h-72 overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"space-y-2 p-2 sm:hidden",children:J.map(i=>(0,e.jsxs)("div",{className:`rounded-xl p-3 ${i.error?"bg-red-50 text-red-700":"bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white"}`,children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate font-black",children:i.productName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500",children:["ردیف ",ce(i.rowIndex)]})]}),(0,e.jsx)("span",{className:`rounded-full px-2 py-0.5 text-[10px] font-bold ${i.error?"bg-red-200 text-red-800":"bg-green-100 text-green-700"}`,children:i.error?"نامعتبر":"آماده"})]}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black",children:ce(i.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsx)("p",{className:"font-black",children:ce(i.unitPrice)})})]}),i.brand&&(0,e.jsxs)("p",{className:"mt-2 text-xs text-gray-500",children:["برند: ",i.brand]}),i.category&&(0,e.jsxs)("p",{className:"text-xs text-gray-500",children:["دسته: ",i.category]})]},i.rowIndex))}),(0,e.jsxs)("table",{className:"hidden w-full min-w-[700px] text-right text-sm sm:table",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"ردیف"}),(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:J.map(i=>(0,e.jsxs)("tr",{className:`border-t border-gray-100 dark:border-gray-700 ${i.error?"bg-red-50":"dark:text-white"}`,children:[(0,e.jsx)("td",{className:"p-3",children:ce(i.rowIndex)}),(0,e.jsx)("td",{className:"p-3 font-bold",children:i.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:i.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:i.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:ce(i.quantity)}),(0,e.jsx)("td",{className:"p-3",children:ce(i.unitPrice)}),(0,e.jsx)("td",{className:"p-3",children:i.error||"آماده"})]},i.rowIndex))})]})]}),G.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع قیمت محصولات"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[ce(G.length)," قلم · ",ce(G.reduce((i,E)=>i+E.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:ce(G.reduce((i,E)=>i+E.quantity*E.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),G.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-emerald-50 via-green-50 to-teal-50 p-4 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-teal-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل ارسال بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[ce(G.length)," قلم · ",ce(G.reduce((i,E)=>i+E.quantity,0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 sm:text-xl",children:ce(G.reduce((i,E)=>i+E.quantity*E.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",disabled:g,onClick:()=>{U(!1),xe()},className:"min-h-12 rounded-xl bg-gray-100 px-4 text-sm font-bold text-gray-700 sm:px-5",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:g||!te,className:"flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 font-black text-white disabled:cursor-not-allowed disabled:opacity-50",children:[g?(0,e.jsx)(le,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Fa,{className:"h-4 w-4"}),"ثبت و ارسال بار"]})]})]})]})}),P&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"text-xl font-black dark:text-white",children:["جزئیات بار"," ",P.shipmentNumber||P.id]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:["فایل:"," ",P.excelFileName||"—"]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>O(null),className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mb-5 rounded-xl bg-blue-50 p-3 text-sm font-black text-blue-700",children:["وضعیت فعلی:"," ",Ir(P.status)]}),P.items?.length?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"mb-4 rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع این بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[ce(P.items.length)," قلم · ",ce(P.items.reduce((i,E)=>i+E.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:ce(P.items.reduce((i,E)=>i+(E.totalPrice??E.quantity*E.unitPrice),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsx)("div",{className:"space-y-2 sm:hidden",children:P.items.map((i,E)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:i.productName}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:ce(i.quantity)})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"قیمت"}),(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[ce(i.unitPrice)," ت"]})]})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[i.brand&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",i.brand]}),i.category&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",i.category]})]}),(0,e.jsxs)("div",{className:"mt-2 rounded-lg bg-green-50 p-2 text-xs dark:bg-green-950/20",children:[(0,e.jsx)("span",{className:"text-gray-500",children:"مبلغ کل: "}),(0,e.jsxs)("span",{className:"font-black text-green-700 dark:text-green-300",children:[ce(i.totalPrice??i.quantity*i.unitPrice)," تومان"]})]})]},String(i.id??E)))}),(0,e.jsx)("div",{className:"hidden max-h-80 overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"مبلغ"})]})}),(0,e.jsx)("tbody",{children:P.items.map((i,E)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-white",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:i.productName}),(0,e.jsx)("td",{className:"p-3",children:i.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:i.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:ce(i.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[ce(i.unitPrice)," ","تومان"]}),(0,e.jsxs)("td",{className:"p-3",children:[ce(i.totalPrice)," ","تومان"]})]},String(i.id??E)))})]})})]}):(0,e.jsx)("p",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500",children:"اقلام بار برای نمایش موجود نیستند."})]})})]})};function yr(t){"@babel/helpers - typeof";return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},yr(t)}function pi(t,r){if(yr(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var d=s.call(t,r||"default");if(yr(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function hi(t){var r=pi(t,"string");return yr(r)=="symbol"?r:r+""}function fs(t,r,s){return(r=hi(r))in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}var gi=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},ui=gi("https://myshop-backend-8nu7.onrender.com/api"),bi=class extends a.Component{constructor(...t){super(...t),fs(this,"state",{hasError:!1,errorMessage:"",errorStack:"",componentStack:""}),fs(this,"handleRetry",()=>{this.setState({hasError:!1,errorMessage:"",errorStack:"",componentStack:""})})}static getDerivedStateFromError(t){return{hasError:!0,errorMessage:t?.message||"خطای نامشخص در داشبورد نماینده.",errorStack:t?.stack||""}}componentDidCatch(t,r){console.error("❌ خطای داشبورد نماینده:",t),console.error("❌ مسیر کامپوننت:",r.componentStack),this.setState({componentStack:r.componentStack||""})}render(){const{children:t,onBack:r}=this.props,{hasError:s,errorMessage:d,errorStack:b,componentStack:n}=this.state;return s?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border-2 border-red-300 bg-red-50 p-5 shadow-lg dark:border-red-900/60 dark:bg-red-950/30 md:p-7",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"rounded-xl bg-red-100 p-3 text-red-600 dark:bg-red-900/40 dark:text-red-300",children:(0,e.jsx)(ze,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-red-800 dark:text-red-300",children:"خطا در نمایش داشبورد نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-bold leading-7 text-red-700 dark:text-red-400",children:"متن خطای زیر را کامل بررسی کنید."})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-sm font-black text-red-700 dark:text-red-400",children:"متن خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-44 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-red-50 p-3 text-xs leading-6 text-red-800 dark:bg-red-950/30 dark:text-red-300",children:d})]}),b?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"جزئیات فنی خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:b})]}):null,n?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"مسیر کامپوننت خطادار"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:n})]}):null,(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",onClick:this.handleRetry,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"تلاش دوباره"]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"min-h-11 rounded-xl bg-gray-800 px-5 py-3 text-sm font-black text-white transition hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]})]}):t}},js=({activeSection:t,userRole:r,products:s,totalProducts:d,totalPrice:b,viewingRepDashboard:n,representatives:g,representativeFiles:o,loadingFiles:u,shipments:p=[],onEditProduct:c,onDeleteProduct:k,onUploadSuccess:f,onOpenRepDashboard:j,onBackToRepList:m,onViewFile:h,onDeleteFile:w,onAddRepresentative:x,onEditRepresentative:I,onDeleteRepresentative:U,onRepresentativeUpdated:P})=>{const O=(0,a.useMemo)(()=>Array.isArray(s)?s:[],[s]),H=(0,a.useMemo)(()=>Array.isArray(g)?g:[],[g]),T=(0,a.useMemo)(()=>Array.isArray(p)?p:[],[p]),A=(0,a.useMemo)(()=>Array.isArray(o)?o:[],[o]),y=(0,a.useMemo)(()=>n===null||n===""?null:H.find($=>String($.id)===String(n))||null,[H,n]);if((0,a.useEffect)(()=>{console.log("🔎 MAIN CONTENT STATE",{activeSection:t,productsCount:O.length,totalProducts:d,viewingRepDashboard:n,representativesCount:H.length,selectedRepresentative:y?.name||null})},[t,O.length,d,n,H.length,y]),n!==null&&n!=="")return y?(0,e.jsx)(bi,{onBack:m,children:(0,e.jsx)(ti,{representative:y,apiUrl:ui,onBack:m,files:A,loadingFiles:u,onViewFile:h,onDeleteFile:w,onRepresentativeUpdated:P})}):(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center shadow-lg dark:border-yellow-800 dark:bg-yellow-900/20 md:p-8",children:[(0,e.jsx)(le,{className:"mx-auto mb-4 h-12 w-12 animate-spin text-yellow-600 dark:text-yellow-400"}),(0,e.jsx)("p",{className:"text-base font-black text-yellow-700 dark:text-yellow-300 md:text-lg",children:"اطلاعات نماینده پیدا نشد."}),(0,e.jsxs)("div",{className:"mx-auto mt-4 max-w-xl rounded-xl border border-yellow-200 bg-white p-4 text-right text-xs leading-7 text-yellow-800 dark:border-yellow-800 dark:bg-gray-900 dark:text-yellow-300",children:[(0,e.jsxs)("p",{children:["شناسه انتخاب‌شده:"," ",(0,e.jsx)("strong",{children:n})]}),(0,e.jsxs)("p",{children:["تعداد نمایندگان:"," ",(0,e.jsx)("strong",{children:H.length})]}),(0,e.jsxs)("p",{className:"break-words",children:["شناسه‌های موجود:"," ",(0,e.jsx)("strong",{children:H.map($=>String($.id)).join(", ")||"هیچ‌کدام"})]})]}),(0,e.jsx)("button",{type:"button",onClick:m,className:"mt-5 min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]});switch(t){case"dashboard":return(0,e.jsx)(Rl,{totalProducts:Number(d)||0,totalPrice:Number(b)||0,representatives:H,shipments:T});case"products":return(0,e.jsx)(bn,{products:O,userRole:r,onEdit:c,onDelete:k});case"representatives":return r!=="admin"?(0,e.jsx)(Zt,{message:"فقط ادمین به بخش نمایندگان دسترسی دارد."}):(0,e.jsx)(Gl,{representatives:H,userRole:r,onOpenDashboard:j,onAddRepresentative:x,onEditRepresentative:I,onDeleteRepresentative:U});case"upload":return r!=="admin"?(0,e.jsx)(Zt,{message:"فقط ادمین به بخش آپلود اکسل دسترسی دارد."}):(0,e.jsx)(Ul,{onUploadSuccess:f});case"shipments":return r!=="admin"?(0,e.jsx)(Zt,{message:"فقط ادمین به بخش ارسال بار دسترسی دارد."}):(0,e.jsx)(mi,{});case"sales-reports":return r!=="admin"?(0,e.jsx)(Zt,{message:"فقط ادمین به بخش اعلام فروش نمایندگان دسترسی دارد."}):(0,e.jsx)(di,{});case"return-requests":return r!=="admin"?(0,e.jsx)(Zt,{message:"فقط ادمین به درخواست‌های مرجوعی دسترسی دارد."}):(0,e.jsx)(ai,{});default:return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-orange-500 dark:text-orange-400",children:(0,e.jsx)(il,{className:"h-16 w-16 md:h-20 md:w-20"})}),(0,e.jsx)("p",{className:"text-base text-gray-500 dark:text-gray-400 md:text-xl",children:"این بخش در حال توسعه است."})]})}},yi=({file:t,apiUrl:r,onClose:s})=>{if(!t)return null;const d=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/view`,b=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/download`;return(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md md:p-4",children:(0,e.jsxs)("div",{className:"relative w-full max-w-4xl",children:[(0,e.jsx)("button",{type:"button",onClick:s,className:"absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600","aria-label":"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})}),t.icon==="🖼️"?(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-white shadow-2xl",children:[(0,e.jsx)("div",{className:"relative flex items-center justify-center bg-gray-100",children:(0,e.jsx)("img",{src:d,alt:t.name,className:"max-h-[75vh] w-full object-contain"})}),(0,e.jsxs)("div",{className:"flex items-center gap-3 bg-gray-900 px-4 py-3 text-white",children:[(0,e.jsx)(hn,{className:"h-5 w-5 shrink-0 text-gray-400"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate text-sm font-bold",children:t.name}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs text-gray-400",children:[t.size," • ",t.uploadedAt]})]})]})]}):(0,e.jsxs)("div",{className:"mx-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl md:p-8",children:[(0,e.jsx)("div",{className:"mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-100 text-blue-600 mx-auto",children:(0,e.jsx)(it,{className:"h-12 w-12"})}),(0,e.jsx)("h3",{className:"mb-2 truncate text-lg font-black text-gray-800",children:t.name}),(0,e.jsxs)("p",{className:"mb-6 text-sm text-gray-500",children:[t.size," • ",t.uploadedAt]}),(0,e.jsxs)("div",{className:"flex flex-col justify-center gap-3 sm:flex-row",children:[(0,e.jsxs)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600",children:[(0,e.jsx)(Nt,{className:"h-4 w-4"}),"باز کردن"]}),(0,e.jsxs)("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-600",children:[(0,e.jsx)(xn,{className:"h-4 w-4"}),"دانلود"]})]})]})]})})},kn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Xe=t=>{const r=kn(t).replace(/[,٬،\s]/g,""),s=Number(r);return Number.isFinite(s)?Math.max(0,s):0},ar=t=>Xe(t).toLocaleString("fa-IR"),vs=t=>kn(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").trim().toLowerCase(),fi=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},ks=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"];for(const r of[sessionStorage,localStorage])for(const s of t){const d=r.getItem(s);if(d&&d!=="null"&&d!=="undefined"){const b=d.replace(/^Bearer\s+/i,"").trim();if(b)return b}}return""},ji=({representatives:t=[],onOpenRepresentativeWarehouse:r,apiUrl:s})=>{const[d,b]=(0,a.useState)(""),[n,g]=(0,a.useState)("all"),[o,u]=(0,a.useState)({}),[p,c]=(0,a.useState)({}),[k,f]=(0,a.useState)(!0),[j,m]=(0,a.useState)(0),h=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),w=fi(s),x=JSON.stringify([...new Set(h.map(l=>String(l.id)))].sort()),I=JSON.stringify(h.map(l=>[String(l.id),l.storeItemsCount,l.storeItemsTotalValue])),U=(0,a.useCallback)(()=>{m(l=>l+1)},[]),P=()=>{try{return new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleString("fa-IR")}},O=()=>{if(k){window.alert("لطفاً صبر کنید تا دریافت انبارها کامل شود.");return}if(!T.length){window.alert("نماینده‌ای برای چاپ موجود نیست.");return}const l=window.open("","_blank","width=1000,height=720");if(!l){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}P();const N=T.map(v=>{const R=String(v.id),q=o[R],S=p[R];return{id:R,name:v.name||"بدون نام",code:v.code||"-",city:v.city||"-",phone:v.phone||"-",status:v.status!=="inactive"?"فعال":"غیرفعال",itemCount:q?.itemCount??0,totalValue:q?.totalValue??0,hasError:!!S||!q}});N.map((v,R)=>`
        <tr>
          <td style="text-align:center;">\${idx + 1}</td>
          <td>\${escapeHtml(rep.name)}<div style="font-size:10px;color:#6b7280;margin-top:2px;" dir="ltr">\${escapeHtml(rep.phone)}</div></td>
          <td style="text-align:center;">\${escapeHtml(rep.code)}</td>
          <td style="text-align:center;">\${escapeHtml(rep.city)}</td>
          <td style="text-align:center;">\${rep.status}</td>
          <td style="text-align:center;">\${rep.hasError ? 'نامشخص' : formatFa(rep.itemCount)}</td>
          <td style="text-align:center;">\${rep.hasError ? 'نامشخص' : formatFa(rep.totalValue) + ' تومان'}</td>
        </tr>`).join(""),N.reduce((v,R)=>v+(R.hasError?0:R.itemCount),0),N.reduce((v,R)=>v+(R.hasError?0:R.totalValue),0),N.filter(v=>v.status==="فعال").length,N.filter(v=>v.hasError).length,l.document.write(`<!DOCTYPE html>
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
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="\${logoUrl}" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>بازرگانی مهر امین</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۸-۳۳۲۳۶۰۷۲</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> \${today}</p>
    <p><strong>تعداد نمایندگان:</strong> \${formatFa(repsWithSummary.length)}</p>
  </div>
</div>

<div class="report-title">
  <h2>📋 گزارش خلاصهٔ انبارهای نمایندگان</h2>
  <p>شامل تعداد کالاهای دارای موجودی و ارزش کل موجودی هر نماینده</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نمایندگان فعال</div>
    <div class="value">\${formatFa(activeCount)}</div>
  </div>
  <div class="info-card">
    <div class="label">مجموع کالاهای دارای موجودی</div>
    <div class="value">\${formatFa(totalItems)}</div>
  </div>
  <div class="info-card">
    <div class="label">ارزش کل انبارها</div>
    <div class="value">\${formatFa(totalValue)}<br><span style="font-size:11px;">تومان</span></div>
  </div>
  <div class="info-card">
    <div class="label">انبارهای ناموفق</div>
    <div class="value" style="color:\${failedCount > 0 ? '#b91c1c' : '#111'};">\${formatFa(failedCount)}</div>
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
      <th style="width:14%;">کالاهای دارای موجودی</th>
      <th style="width:18%;">ارزش کل</th>
    </tr>
  </thead>
  <tbody>
    \${rows}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="5" style="text-align:left;"><strong>جمع کل:</strong></td>
      <td style="text-align:center;"><strong>\${formatFa(totalItems)}</strong></td>
      <td style="text-align:center;"><strong>\${formatFa(totalValue)} تومان</strong></td>
    </tr>
  </tfoot>
</table>

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد کل انبارها</div>
    <div class="value">\${formatFa(repsWithSummary.length)}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع کالاها</div>
    <div class="value">\${formatFa(totalItems)}</div>
  </div>
  <div class="summary-card">
    <div class="label">ارزش کل انبارها</div>
    <div class="value">\${formatFa(totalValue)}<br><span style="font-size:11px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>بازرگانی مهر امین</p>
</div>

</body>
</html>`),l.document.close(),l.focus(),setTimeout(()=>{l.print()},800)},H=async l=>{const N=String(l.id);let v=o[N];if(!v||!Array.isArray(v.items)||v.items.length===0)try{const S=ks(),_={Accept:"application/json"};S&&(_.Authorization="Bearer ${token}");const te=await fetch("${apiBase}/representatives/${encodeURIComponent(id)}/warehouse?_=${Date.now()}",{method:"GET",credentials:"include",cache:"no-store",headers:_}),G=await te.text();let de;try{de=JSON.parse(G)}catch{throw new Error("پاسخ انبار معتبر نیست.")}if(!te.ok||!de.success)throw new Error(de.error||de.message||"دریافت انبار ناموفق بود.");const ie=(Array.isArray(de.data?.items)?de.data.items:[]).filter(he=>Xe(he.quantity)>0);v={itemCount:ie.length,totalValue:ie.reduce((he,xe)=>he+Xe(xe.quantity)*Xe(xe.unitPrice),0),items:ie,updatedAt:de.data?.updatedAt}}catch(S){S instanceof Error&&S.message,window.alert("دریافت جزئیات انبار ${representative.name || ''} ناموفق بود:\n${message}");return}const R=window.open("","_blank","width=1000,height=720");if(!R){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}P();const q=v?.items??[];q.map((S,_)=>(String(S.productName||S.name||S.title||"بدون عنوان"),String(S.brand||"-"),String(S.category||"-"),Xe(S.quantity)*Xe(S.unitPrice),`
        <tr>
          <td style="text-align:center;">\${idx + 1}</td>
          <td>\${escapeHtml(name)}</td>
          <td style="text-align:center;">\${escapeHtml(brand)}</td>
          <td style="text-align:center;">\${escapeHtml(category)}</td>
          <td style="text-align:center;">\${formatFa(qty)}</td>
          <td style="text-align:center;">\${formatFa(unit)} تومان</td>
          <td style="text-align:center;">\${formatFa(total)} تومان</td>
        </tr>`)).join(""),q.reduce((S,_)=>S+Xe(_.quantity),0),v?.totalValue,v?.updatedAt&&new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(v.updatedAt)),R.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ انبار \${escapeHtml(representative.name || '')}</title>
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
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="\${logoUrl}" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>بازرگانی مهر امین</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۸-۳۳۲۳۶۰۷۲</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> \${today}</p>
  </div>
</div>

<div class="report-title">
  <h2>📋 گزارش انبار نمایندگی</h2>
  <p>فهرست کامل کالاهای دارای موجودی \${escapeHtml(representative.name || '')}</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام نمایندگی</div>
    <div class="value">\${escapeHtml(representative.name || '—')}</div>
  </div>
  <div class="info-card">
    <div class="label">کد نمایندگی</div>
    <div class="value">\${escapeHtml(representative.code || '—')}</div>
  </div>
  <div class="info-card">
    <div class="label">شهر</div>
    <div class="value">\${escapeHtml(representative.city || '—')}</div>
  </div>
  <div class="info-card">
    <div class="label">شماره تماس</div>
    <div class="value" dir="ltr">\${escapeHtml(representative.phone || '—')}</div>
  </div>
  <div class="info-card">
    <div class="label">تعداد ردیف‌های دارای موجودی</div>
    <div class="value">\${formatFa(summary?.itemCount ?? items.length)}</div>
  </div>
  <div class="info-card">
    <div class="label">آخرین بروزرسانی</div>
    <div class="value">\${updatedAtText}</div>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th style="width:5%;">ردیف</th>
      <th style="width:34%;">عنوان</th>
      <th style="width:13%;">برند</th>
      <th style="width:14%;">دسته‌بندی</th>
      <th style="width:10%;">تعداد</th>
      <th style="width:12%;">قیمت</th>
      <th style="width:12%;">مجموع</th>
    </tr>
  </thead>
  <tbody>
    \${itemsHtml || '<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:30px;">هیچ کالای دارای موجودی ثبت نشده است.</td></tr>'}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:left;"><strong>جمع کل:</strong></td>
      <td style="text-align:center;"><strong>\${formatFa(totalQty)}</strong></td>
      <td></td>
      <td style="text-align:center;"><strong>\${formatFa(totalValue)} تومان</strong></td>
    </tr>
  </tfoot>
</table>

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد انواع کالا</div>
    <div class="value">\${formatFa(summary?.itemCount ?? items.length)}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع قطعات</div>
    <div class="value">\${formatFa(totalQty)}</div>
  </div>
  <div class="summary-card">
    <div class="label">ارزش کل انبار</div>
    <div class="value">\${formatFa(totalValue)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>بازرگانی مهر امین</p>
</div>

</body>
</html>`),R.document.close(),R.focus(),setTimeout(()=>{R.print()},800)};(0,a.useEffect)(()=>{const l=new AbortController,N=JSON.parse(x);return(async()=>{if(f(!0),c({}),!N.length){u({}),f(!1);return}const R={},q={},S=ks(),_={Accept:"application/json"};S&&(_.Authorization=`Bearer ${S}`);let te=0;const G=async()=>{for(;te<N.length&&!l.signal.aborted;){const de=N[te];te+=1;try{const ie=await fetch(`${w}/representatives/${encodeURIComponent(de)}/warehouse?_=${Date.now()}`,{method:"GET",credentials:"include",cache:"no-store",headers:_,signal:l.signal}),he=await ie.text();let xe;try{xe=JSON.parse(he)}catch{throw new Error(`پاسخ انبار معتبر نیست. کد: ${ie.status}`)}if(!ie.ok||!xe.success)throw new Error(xe.error||xe.message||`دریافت انبار ناموفق بود. کد: ${ie.status}`);if(!Array.isArray(xe.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور موجود نیست.");const ge=xe.data.items.filter(Ie=>Xe(Ie.quantity)>0);R[de]={itemCount:ge.length,totalValue:ge.reduce((Ie,ue)=>Ie+Xe(ue.quantity)*Xe(ue.unitPrice),0),items:ge,updatedAt:xe.data?.updatedAt}}catch(ie){if(l.signal.aborted)return;q[de]=ie instanceof Error?ie.message:"دریافت موجودی ناموفق بود."}}};await Promise.all(Array.from({length:Math.min(4,N.length)},()=>G())),l.signal.aborted||(u(R),c(q),f(!1))})(),()=>{l.abort()}},[w,x,I,j]);const T=(0,a.useMemo)(()=>{const l=vs(d);return h.filter(N=>{const v=N.status!=="inactive",R=n==="all"||(n==="active"?v:!v),q=!l||[N.name,N.code,N.city,N.phone].some(S=>vs(S).includes(l));return R&&q})},[h,d,n]),A=(0,a.useMemo)(()=>h.reduce((l,N)=>{const v=o[String(N.id)];return v?{itemCount:l.itemCount+v.itemCount,totalValue:l.totalValue+v.totalValue}:l},{itemCount:0,totalValue:0}),[h,o]),y=h.filter(l=>l.status!=="inactive").length,$=Object.keys(p).length,B=!k&&$>0,D=l=>{const N=l.status!=="inactive";return(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${N?"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`,children:[(0,e.jsx)(ve,{className:"h-3.5 w-3.5"}),N?"فعال":"غیرفعال"]})},W=l=>{if(k)return(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"در حال دریافت..."});if(p[l]||!o[l])return(0,e.jsx)("span",{className:"text-xs text-red-600",children:"نامشخص"});const N=o[l].itemCount;return(0,e.jsx)("span",{className:`inline-flex rounded-full px-2.5 py-1 text-xs font-black ${N>0?"bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`,children:N>0?`${ar(N)} نوع کالا`:"بدون موجودی"})},J=l=>k?"در حال دریافت...":p[l]||!o[l]?"نامشخص":`${ar(o[l].totalValue)} تومان`,C=(l,N)=>(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>r(l),className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white hover:from-cyan-700 hover:to-blue-700",children:[(0,e.jsx)(kt,{className:"h-4 w-4"}),"ورود به انبار"]}),N?(0,e.jsxs)("button",{type:"button",onClick:()=>H(N),className:"inline-flex min-h-10 items-center justify-center gap-1 rounded-xl border border-cyan-600 px-3 py-2 text-xs font-black text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/20",title:"چاپ لیست کالاهای این انبار",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ انبار"]}):null]}),z=l=>k?"...":B?"نامشخص":ar(l);return(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(kt,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl",children:"انبار نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط کالاهای دارای موجودی در انبار شمارش می‌شوند؛ ردیف‌های ثبت‌نشدهٔ اکسل در این تعداد حساب نمی‌شوند."})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:U,disabled:k,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[k?(0,e.jsx)(le,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Fe,{className:"h-4 w-4"}),"بروزرسانی موجودی"]}),(0,e.jsxs)("button",{type:"button",onClick:O,disabled:k||!T.length,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50",title:"چاپ لیست خلاصهٔ همهٔ انبارها",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ کلی"]})]})]})}),$>0&&!k?(0,e.jsxs)("section",{role:"alert",className:"rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(ze,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsxs)("p",{children:["موجودی ",ar($)," نماینده دریافت نشد. مجموع کل تا دریافت اطلاعات همهٔ انبارها نمایش داده نمی‌شود."]})]}),h.filter(l=>p[String(l.id)]).map(l=>(0,e.jsxs)("p",{className:"mt-2 break-words",children:[l.name||"نماینده",":"," ",p[String(l.id)]]},String(l.id)))]}):null,(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"نمایندگان فعال"}),(0,e.jsx)(ve,{className:"h-5 w-5 text-green-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-green-900 dark:text-green-100",children:ar(y)})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد کالاهای دارای موجودی"}),(0,e.jsx)(ot,{className:"h-5 w-5 text-blue-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-blue-900 dark:text-blue-100",children:z(A.itemCount)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-blue-700 dark:text-blue-300",children:"مجموع ردیف‌های دارای موجودی در انبارها"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-900/50 dark:bg-purple-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع نمایندگان"}),(0,e.jsx)(lt,{className:"h-5 w-5 text-purple-600"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-xl font-black text-purple-900 dark:text-purple-100",children:z(A.totalValue)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-purple-700 dark:text-purple-300",children:"تومان"})]})]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"لیست انبارهای نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"تعداد کالا، تعداد ردیف‌های دارای موجودی در انبار است؛ نه تعداد قطعات و نه تعداد ردیف‌های فایل اکسل."}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]",children:[(0,e.jsxs)("select",{value:n,onChange:l=>g(l.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("option",{value:"all",children:"همه نمایندگان"}),(0,e.jsx)("option",{value:"active",children:"نمایندگان فعال"}),(0,e.jsx)("option",{value:"inactive",children:"نمایندگان غیرفعال"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(dt,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:d,onChange:l=>b(l.target.value),placeholder:"جست‌وجوی نام، کد، شهر یا شماره",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"})]})]}),(0,e.jsx)("div",{className:"mt-5 space-y-3 lg:hidden",children:T.map(l=>{const N=String(l.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black text-gray-800 dark:text-gray-100",children:l.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 text-right text-xs text-gray-500",children:l.phone||"شماره ثبت نشده"})]}),D(l)]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:l.code||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:l.city||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"mb-2 text-blue-700 dark:text-blue-300",children:"کالاهای دارای موجودی"}),W(N)]}),(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-2 break-words font-black text-purple-900 dark:text-purple-100",children:J(N)})]})]}),(0,e.jsx)("div",{className:"mt-4",children:C(N,l)})]},N)})}),(0,e.jsx)("div",{className:"mt-5 hidden lg:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[22%] p-3",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"کد"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"شهر"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"کالاهای دارای موجودی"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[14%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:T.map(l=>{const N=String(l.id);return(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-100 text-lg",children:l.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 break-all text-right text-gray-500",children:l.phone||"شماره ثبت نشده"})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:l.code||"-"}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:l.city||"-"}),(0,e.jsx)("td",{className:"p-3",children:D(l)}),(0,e.jsx)("td",{className:"p-3",children:W(N)}),(0,e.jsx)("td",{className:"break-words p-3 font-bold text-gray-800 dark:text-gray-100",children:J(N)}),(0,e.jsx)("td",{className:"p-3",children:C(N,l)})]},N)})})]})}),T.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(kt,{className:"mx-auto h-10 w-10 text-gray-400"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:h.length?"نماینده‌ای با این مشخصات پیدا نشد.":"هنوز نماینده‌ای ثبت نشده است."})]})]})]})},vi=()=>{const t=localStorage.getItem("token")||sessionStorage.getItem("token");return{"Content-Type":"application/json",Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},ki=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],ia=["عنوان","نام","عنوان","عنوان","کالا","محصول","Name","name","Product","product"],Ns=["برند","نام برند","Brand","brand"],ws=["دسته‌بندی","دسته بندی","دسته","گروه","گروه کالا","Category","category"],oa=["تعداد","تعداد کالا","تعداد موجودی","تعداد محصول","تعداد","موجودی","موجودی کالا","موجودی انبار","مقدار","تعداد/موجودی","Qty","QTY","quantity","Quantity","stock","Stock","count","Count"],da=["قیمت","قیمت","قیمت کالا","قیمت محصول","مبلغ","قیمت","Price","price","unitPrice","Unit Price"],Nn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Mr=t=>Nn(t).replace(/\u200c/g," ").replace(/[\u200e\u200f]/g,"").replace(/\u00a0/g," ").replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/ـ/g,"").replace(/\s+/g," ").trim().toLowerCase(),zt=t=>Mr(t).replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim(),Qt=t=>{const r=Nn(t).replace(/[,٬،\s]/g,"").replace(/٫/g,".").replace(/[^\d.-]/g,"");if(!r)return 0;const s=Number(r);return Number.isFinite(s)?s:0},me=t=>Qt(t).toLocaleString("fa-IR"),Ni=t=>{if(!t)return"-";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},wi=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},Si=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const d of t){const b=s.getItem(d);if(b&&b!=="null"&&b!=="undefined"){const n=b.replace(/^Bearer\s+/i,"").trim();if(n)return n}}for(const d of r){const b=s.getItem(d);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},$r=(t=!1)=>{const r=Si();return{Accept:"application/json",...t?{"Content-Type":"application/json"}:{},...r?{Authorization:`Bearer ${r}`}:{}}},Ar=async t=>{const r=await t.text();if(!r)throw new Error(`پاسخ سرور خالی است. کد: ${t.status}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ بک‌اند معتبر نیست. کد: ${t.status}`)}},Tr=(t,r,s)=>r.error||r.message?r.error||r.message||s:t.status===401?"ابتدا وارد حساب ادمین شوید.":t.status===403?"این حساب اجازه انجام این عملیات را ندارد.":`${s} کد: ${t.status}`,sr=(t,r)=>{const s=r.map(zt);for(const[d,b]of Object.entries(t))if(s.includes(zt(d))&&b!==void 0&&b!==null&&String(b).trim()!=="")return b;return""},ca=(t,r)=>{const s=r.map(zt);return Object.keys(t[0]||{}).some(d=>s.includes(zt(d)))},xa=t=>Math.max(0,Qt(t.quantity))*Math.max(0,Qt(t.unitPrice)),Ci=t=>{switch(t){case"ready":return"معتبر";case"empty_name":return"نام خالی";case"invalid_qty":return"تعداد نامعتبر";case"invalid_price":return"قیمت نامعتبر"}},Ii=({representative:t,apiUrl:r,onBack:s,onWarehouseChanged:d})=>{const[b,n]=(0,a.useState)([]),[g,o]=(0,a.useState)([]),[u,p]=(0,a.useState)(!0),[c,k]=(0,a.useState)(!1),[f,j]=(0,a.useState)(!1),[m,h]=(0,a.useState)(""),[w,x]=(0,a.useState)(""),[I,U]=(0,a.useState)(!1),[P,O]=(0,a.useState)([]),[H,T]=(0,a.useState)(""),[A,y]=(0,a.useState)(""),[$,B]=(0,a.useState)(""),[D,W]=(0,a.useState)(""),[J,C]=(0,a.useState)(""),[z,l]=(0,a.useState)(null),N=(0,a.useRef)(!1),v=(0,a.useRef)(!1),R=(0,a.useRef)(0),q=(0,a.useRef)(!0),S=`${wi(r)}/representatives/${encodeURIComponent(String(t.id))}/warehouse`;(0,a.useEffect)(()=>(q.current=!0,()=>{q.current=!1,R.current+=1}),[]);const _=(0,a.useCallback)(async()=>{const M=++R.current;p(!0);try{const K=await fetch(`${S}?_=${Date.now()}`,{method:"GET",cache:"no-store",credentials:"include",headers:$r()}),re=await Ar(K);if(!K.ok||!re.success)throw new Error(Tr(K,re,"دریافت انبار ناموفق بود."));if(!Array.isArray(re.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور وجود ندارد.");return q.current&&M===R.current&&(n(re.data.items),o(Array.isArray(re.data.movements)?re.data.movements:[])),!0}catch(K){return q.current&&M===R.current&&x(K instanceof Error?K.message:"خطا در دریافت انبار."),!1}finally{q.current&&M===R.current&&p(!1)}},[S]);(0,a.useEffect)(()=>{n([]),o([]),h(""),x(""),l(null),O([]),U(!1),T(""),y(""),B(""),W(""),C(""),_()},[_]);const te=async()=>{try{await d()}catch(M){console.error("خطا در بروزرسانی صفحه والد:",M),q.current&&x(K=>[K,"عملیات انبار انجام شد، اما بروزرسانی لیست نمایندگان ناموفق بود."].filter(Boolean).join(" "))}},G=(0,a.useMemo)(()=>b.filter(M=>Qt(M.quantity)>0),[b]),de=G.length,ie=(0,a.useMemo)(()=>G.reduce((M,K)=>M+xa(K),0),[G]),he=(0,a.useMemo)(()=>[...g].sort((M,K)=>new Date(K.createdAt||0).getTime()-new Date(M.createdAt||0).getTime()).slice(0,8),[g]),xe=(0,a.useMemo)(()=>[...new Set(G.map(M=>String(M.brand||"").trim()).filter(Boolean))].sort((M,K)=>M.localeCompare(K,"fa")),[G]),ge=(0,a.useMemo)(()=>[...new Set([...ki,...G.map(M=>String(M.category||"").trim()).filter(Boolean)])].sort((M,K)=>M.localeCompare(K,"fa")),[G]),Ie=(0,a.useMemo)(()=>{const M=Mr($);return G.filter(K=>{const re=Mr(K.productName),ye=String(K.brand||"").trim(),Ne=String(K.category||"").trim();return(!M||re.includes(M)||Mr(ye).includes(M))&&(!D||Ne===D)&&(!J||ye===J)})},[G,$,D,J]),ue=(0,a.useMemo)(()=>P.filter(M=>M.status==="ready"),[P]),F=(0,a.useMemo)(()=>ue.reduce((M,K)=>M+K.qty,0),[ue]),Y=(0,a.useMemo)(()=>ue.reduce((M,K)=>M+K.qty*K.price,0),[ue]),ee=(0,a.useMemo)(()=>{if(!z)return[];const M=z.validationErrors?.map(K=>({...K,status:"invalid"}))||[];return z.rowResults?.length?[...z.rowResults.filter(K=>(K.remainingQuantity??K.rejectedQuantity??0)>0||K.status==="invalid"||K.status==="budget_exceeded"),...M]:z.rejectedItems?.length?[...z.rejectedItems,...M]:M},[z]),i=async M=>{if(!(N.current||u||f)&&window.confirm(`کالای «${M.productName}» با تمام موجودی و گردش‌های مرتبط حذف شود؟`)){N.current=!0,k(!0),h(""),x(""),l(null);try{const K=await fetch(`${S}/items/${encodeURIComponent(String(M.id))}`,{method:"DELETE",credentials:"include",headers:$r()}),re=await Ar(K);if(!K.ok||!re.success)throw new Error(Tr(K,re,"حذف کالا ناموفق بود."));n(ye=>ye.filter(Ne=>String(Ne.id)!==String(M.id))),M.productId&&o(ye=>ye.filter(Ne=>String(Ne.productId)!==String(M.productId))),h(re.message||`کالای «${M.productName}» حذف شد.`),await _(),await te()}catch(K){x(K instanceof Error?K.message:"حذف کالا ناموفق بود."),await _()}finally{N.current=!1,q.current&&k(!1)}}},E=async()=>{if(!(N.current||u||f)&&window.confirm(`تمام کالاها، گردش‌ها و سابقه فایل‌های انبار «${t.name||"نماینده"}» حذف شود؟ این عملیات قابل بازگشت نیست.`)){N.current=!0,k(!0),h(""),x(""),l(null);try{const M=await fetch(S,{method:"DELETE",credentials:"include",headers:$r()}),K=await Ar(M);if(!M.ok||!K.success)throw new Error(Tr(M,K,"حذف کل موجودی ناموفق بود."));n([]),o([]),O([]),U(!1),T(""),y(""),B(""),W(""),C(""),h(K.message||"کل موجودی انبار حذف شد."),await _(),await te()}catch(M){x(M instanceof Error?M.message:"حذف کل موجودی ناموفق بود."),await _()}finally{N.current=!1,q.current&&k(!1)}}},V=async M=>{const K=M.currentTarget,re=K.files?.[0];if(K.value="",!(!re||N.current||v.current)){v.current=!0,j(!0),h(""),x(""),l(null),O([]),U(!1),T(""),y("");try{const ye=await re.arrayBuffer(),Ne=ln(ye,{type:"array"}),Ae=Ne.SheetNames[0];if(!Ae)throw new Error("هیچ شیتی در فایل اکسل پیدا نشد.");const Ct=Ne.Sheets[Ae],ke=nn.sheet_to_json(Ct,{header:1,defval:"",raw:!0,blankrows:!1}),fr=[...ia,...Ns,...ws,...oa,...da].map(zt),Gt=ke.findIndex(Te=>Array.isArray(Te)&&Te.some(Re=>Re!=null&&String(Re).trim()!==""&&fr.includes(zt(Re))));if(Gt<0)throw new Error("هیچ سطری شامل عنوان ستون‌های شناخته‌شده پیدا نشد. لطفاً یک سطر شامل «عنوان»، «تعداد» و «قیمت» داشته باشید.");const Ue=(ke[Gt]||[]).map((Te,Re)=>zt(Te)||`column_${Re}`),rt=ke.slice(Gt+1).filter(Te=>Array.isArray(Te)&&Te.some(Re=>Re!=null&&String(Re).trim()!=="")).map(Te=>{const Re={};return Ue.forEach((Ft,Mt)=>{Re[Ft]=Te[Mt]??""}),Re});if(!rt.length)throw new Error("فایل اکسل خالی است.");if(rt.length>5e3)throw new Error("فایل نباید بیشتر از ۵۰۰۰ ردیف داشته باشد.");const It=Object.keys(rt[0]).join(" | ");if(!ca(rt,ia))throw new Error(`ستون عنوان پیدا نشد. ستون‌ها: ${It}`);if(!ca(rt,oa))throw new Error(`ستون تعداد پیدا نشد. ستون‌ها: ${It}`);if(!ca(rt,da))throw new Error(`ستون قیمت پیدا نشد. ستون‌ها: ${It}`);const jr=rt.map((Te,Re)=>{const Ft=String(sr(Te,ia)).trim(),Mt=String(sr(Te,Ns)).trim(),Yr=String(sr(Te,ws)).trim(),Lt=Qt(sr(Te,oa)),Xt=Qt(sr(Te,da));let qt="ready";return Ft?!Number.isSafeInteger(Lt)||Lt<=0?qt="invalid_qty":(Xt<=0||!Number.isFinite(Lt*Xt))&&(qt="invalid_price"):qt="empty_name",{rowIndex:Re+2,excelName:Ft||"(خالی)",brand:Mt,category:Yr,qty:Lt,price:Xt,status:qt}});O(jr),T(re.name),y(`${re.name}-${re.size}-${re.lastModified}`),U(!0),h(`فایل «${re.name}» خوانده شد. ثبت نهایی و سقف مالی پس از ارسال به سرور بررسی می‌شود.`)}catch(ye){x(ye instanceof Error?ye.message:"پردازش فایل اکسل ناموفق بود.")}finally{v.current=!1,q.current&&j(!1)}}},ne=async()=>{if(ue.length)try{await fetch(`${S}/update-info`,{method:"POST",headers:vi(),body:JSON.stringify({items:ue.map(M=>({name:M.excelName,brand:M.brand,category:M.category,unitPrice:M.unitPrice}))})})}catch{}},pe=async()=>{if(await ne(),!(N.current||f||u)){if(!ue.length){x("هیچ ردیف معتبری برای ثبت وجود ندارد.");return}if(!A){x("شناسه فایل موجود نیست؛ فایل را دوباره انتخاب کنید.");return}N.current=!0,k(!0),h(""),x(""),l(null);try{const M=await fetch(`${S}/import`,{method:"POST",cache:"no-store",credentials:"include",headers:$r(!0),body:JSON.stringify({fileName:H,requestId:A,items:ue.map(ke=>({name:ke.excelName,brand:ke.brand,category:ke.category,quantity:ke.qty,unitPrice:ke.price,rowIndex:ke.rowIndex}))})}),K=await Ar(M);if(l(K.data||null),!M.ok||!K.success){x(Tr(M,K,"ثبت اکسل ناموفق بود.")),await _(),await te();return}const re=K.data,ye=re?.acceptedRowsCount??re?.importedCount,Ne=re?.acceptedQuantity,Ae=re?.rejectedQuantity,Ct=[ye!==void 0?`${me(ye)} ردیف پذیرفته شد.`:"سرور ثبت فایل را تأیید کرد.",Ne!==void 0?`${me(Ne)} قطعه در این درخواست ثبت شد.`:"",Ae!==void 0&&Ae>0?`${me(Ae)} قطعه به دلیل سقف مالی مجاز اضافه نشد.`:""].filter(Boolean);h(K.message||Ct.join(" ")),(K.warning||re?.summarySaved===!1)&&x(K.warning||"کالاها ثبت شدند، اما خلاصه نماینده بروزرسانی نشد."),re?.completed===!1||(re?.rejectedQuantity??0)>0||(re?.rejectedRowsCount??0)>0||(U(!1),O([]),T(""),y("")),await _(),await te()}catch(M){x(M instanceof Error?M.message:"ثبت اکسل ناموفق بود.")}finally{N.current=!1,q.current&&k(!1)}}},be=()=>{N.current||f||(U(!1),O([]),T(""),y(""))},$e=c||f||u;return u&&!b.length?(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 px-3 py-8",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(le,{className:"mx-auto mb-3 h-8 w-8 animate-spin text-blue-600"}),(0,e.jsxs)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:["در حال دریافت انبار"," ",t.name||"نماینده","..."]})]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:c,className:"rounded-xl bg-gray-900 px-5 py-3 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]}):(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 overflow-x-hidden pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(kt,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h2",{className:"break-words text-lg font-black text-gray-800 dark:text-gray-100",children:["انبار ",t.name||"نماینده"]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400",children:[(0,e.jsxs)("span",{children:["کد: ",t.code||"-"]}),(0,e.jsxs)("span",{children:["شهر: ",t.city||"-"]})]})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,e.jsxs)("button",{type:"button",disabled:$e,onClick:()=>{x(""),_()},className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[u?(0,e.jsx)(le,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Fe,{className:"h-4 w-4"}),"بروزرسانی"]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:c||f,className:"min-h-11 rounded-xl bg-gray-900 px-4 py-2 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]})]})}),m?(0,e.jsxs)("div",{role:"status",className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-xs font-bold leading-6 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300",children:[(0,e.jsx)(ve,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:m})]}):null,w?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsx)(ze,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:w})]}):null,(0,e.jsxs)("section",{className:"grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_300px]",children:[(0,e.jsxs)("div",{className:"grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد نوع کالاهای دارای موجودی"}),(0,e.jsx)(ot,{className:"h-5 w-5 text-blue-500"})]}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-blue-900 dark:text-blue-100",children:me(de)}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-blue-700 dark:text-blue-300",children:"تعداد ردیف‌های دارای موجودی؛ نه جمع تعداد قطعات و نه ردیف‌های ثبت‌نشدهٔ اکسل"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"مجموع موجودی انبار"}),(0,e.jsx)(lt,{className:"h-5 w-5 text-green-500"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-2xl font-black text-green-900 dark:text-green-100",children:me(ie)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-green-700 dark:text-green-300",children:"تومان"})]})]}),(0,e.jsxs)("aside",{className:"min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"آخرین گردش‌ها"}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:me(he.length)})]}),(0,e.jsxs)("div",{className:"max-h-[280px] space-y-2 overflow-y-auto p-3",children:[he.map(M=>{const K=M.type==="in";return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsx)("p",{className:"min-w-0 break-words text-xs font-bold text-gray-800 dark:text-gray-200",children:M.productName}),(0,e.jsxs)("span",{className:`shrink-0 rounded px-2 py-1 text-xs font-black ${K?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:[K?"+":"-",me(M.quantity)]})]}),(0,e.jsxs)("div",{className:"mt-2 flex items-center justify-between gap-2",children:[(0,e.jsxs)("span",{className:"flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300",children:[(0,e.jsx)(rl,{className:`h-3 w-3 ${K?"text-green-600":"rotate-180 text-orange-600"}`}),K?"ورود":"خروج"]}),(0,e.jsx)("span",{className:"text-[10px] text-gray-500",children:Ni(M.createdAt)})]})]},M.id)}),he.length?null:(0,e.jsxs)("div",{className:"py-8 text-center",children:[(0,e.jsx)(Xn,{className:"mx-auto mb-2 h-8 w-8 text-gray-300"}),(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"گردشی ثبت نشده است."})]})]})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("label",{className:`flex min-h-14 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-white ${$e||I?"cursor-not-allowed bg-gray-400":"cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600"}`,children:[f?(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(br,{className:"h-5 w-5"}),f?"در حال خواندن فایل...":c?"در حال انجام عملیات...":"ارسال بار؛ آپلود اکسل",(0,e.jsx)("input",{type:"file",accept:".xlsx,.xls",onChange:V,disabled:$e||I,className:"hidden"})]}),I&&P.length>0?(0,e.jsxs)("section",{className:"rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-base font-black text-blue-900 dark:text-blue-100",children:[(0,e.jsx)(Nt,{className:"h-5 w-5 shrink-0"}),"پیش‌نمایش فایل"]}),(0,e.jsx)("p",{className:"mt-2 break-words text-xs text-gray-600 dark:text-gray-300",children:H})]}),(0,e.jsx)("button",{type:"button",onClick:be,disabled:c,"aria-label":"بستن پیش‌نمایش",className:"rounded-lg p-1 text-red-500 disabled:opacity-50",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2 text-xs",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های فایل:"," ",me(P.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های معتبر:"," ",me(ue.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["تعداد درخواستی:"," ",me(F)," قطعه"]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["مبلغ درخواستی:"," ",me(Y)," تومان"]})]}),(0,e.jsx)("p",{className:"mt-3 text-xs leading-6 text-blue-800 dark:text-blue-200",children:"وضعیت «معتبر» فقط نام، تعداد و قیمت را تأیید می‌کند. سقف مالی و سابقه ثبت فایل هنگام ارسال به سرور بررسی می‌شوند."}),(0,e.jsx)("div",{className:"mt-4 max-h-[360px] overflow-y-auto rounded-xl border border-gray-200",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[8%] p-2",children:"ردیف"}),(0,e.jsx)("th",{className:"w-[26%] p-2",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[15%] p-2",children:"برند"}),(0,e.jsx)("th",{className:"w-[17%] p-2",children:"دسته"}),(0,e.jsx)("th",{className:"w-[9%] p-2",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[13%] p-2",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[12%] p-2",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:P.map(M=>(0,e.jsxs)("tr",{className:M.status==="ready"?"bg-green-50 text-gray-800 dark:bg-green-900/10 dark:text-gray-200":"bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200",children:[(0,e.jsx)("td",{className:"break-words p-2",children:me(M.rowIndex)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:M.excelName}),(0,e.jsx)("td",{className:"break-words p-2",children:M.brand||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:M.category||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:me(M.qty)}),(0,e.jsx)("td",{className:"break-words p-2",children:me(M.price)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:Ci(M.status)})]},M.rowIndex))})]})}),(0,e.jsxs)("div",{className:"mt-4 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{pe()},disabled:$e||!ue.length,className:"min-h-11 flex-1 rounded-xl bg-green-600 px-5 py-3 text-sm font-black text-white disabled:opacity-50",children:c?"در حال بررسی و ثبت...":"بررسی سقف مالی و ثبت ردیف‌های معتبر"}),(0,e.jsx)("button",{type:"button",onClick:be,disabled:c,className:"min-h-11 rounded-xl bg-gray-200 px-5 py-3 text-sm font-bold text-gray-700 disabled:opacity-50",children:"بستن پیش‌نمایش"})]})]}):null,z?(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("h3",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"نتیجه واقعی درخواست ثبت"}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"ردیف‌های پذیرفته‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-green-900 dark:text-green-100",children:z.acceptedRowsCount!==void 0||z.importedCount!==void 0?me(z.acceptedRowsCount??z.importedCount):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-300",children:"قطعات ثبت‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-blue-900 dark:text-blue-100",children:z.acceptedQuantity!==void 0?me(z.acceptedQuantity):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-orange-50 p-3 dark:bg-orange-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-orange-700 dark:text-orange-300",children:"قطعات ثبت‌نشده یا باقی‌مانده"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-orange-900 dark:text-orange-100",children:z.rejectedQuantity!==void 0?me(z.rejectedQuantity):"گزارش نشده"})]})]}),(z.completed===!1||(z.rejectedQuantity??0)>0)&&I?(0,e.jsx)("p",{className:"mt-4 rounded-xl bg-orange-50 p-3 text-xs leading-6 text-orange-800 dark:bg-orange-900/20 dark:text-orange-200",children:"بخشی از فایل باقی مانده است. پس از افزایش سقف مؤثر مالی در صفحه نماینده، می‌توانی همین پیش‌نمایش را دوباره ارسال کنی. بک‌اندِ دارای ثبت مرحله‌ای، فقط تعداد باقی‌مانده را ثبت می‌کند."}):null,ee.length>0?(0,e.jsx)("div",{className:"mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/10",children:(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(ze,{className:"mt-1 h-5 w-5 shrink-0 text-orange-600 dark:text-orange-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"text-sm font-black text-orange-800 dark:text-orange-200",children:"بعضی از کالاها ثبت نشدند"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-orange-700 dark:text-orange-300",children:"به دلیل سقف مالی مجاز، بخشی از کالاهای این فایل اضافه نشدند. فقط کالاهایی که ثبت شده‌اند در موجودی انبار نمایش داده می‌شوند."})]})]})}):null]}):null]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"موجودی واقعی انبار نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط ردیف‌هایی که موجودی بیشتر از صفر دارند در این جدول و کارت تعداد محاسبه می‌شوند."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",children:[me(Ie.length)," از ",me(de)," نوع کالا"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{E()},disabled:$e||!b.length&&!g.length,className:"flex min-h-10 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:[(0,e.jsx)(Ve,{className:"h-4 w-4"}),"حذف کل موجودی"]})]})]}),(0,e.jsxs)("div",{className:"my-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(dt,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:$,onChange:M=>B(M.target.value),placeholder:"جست‌وجوی نام یا برند",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:D,onChange:M=>W(M.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),ge.map(M=>(0,e.jsx)("option",{value:M,children:M},M))]}),(0,e.jsxs)("select",{value:J,onChange:M=>C(M.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),xe.map(M=>(0,e.jsx)("option",{value:M,children:M},M))]})]}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:Ie.map(M=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:M.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-600 dark:text-purple-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:M.brand||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-blue-600 dark:text-blue-300",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-2 font-black text-gray-800 dark:text-gray-100",children:[me(M.quantity)," عدد"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:M.category||"—"})]}),(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:(0,e.jsxs)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:[me(M.unitPrice)," تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"مجموع این کالا"}),(0,e.jsxs)("p",{className:"mt-2 break-words text-sm font-black text-green-900 dark:text-green-100",children:[me(xa(M))," تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{i(M)},disabled:$e,className:"mt-3 flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-red-100 px-3 py-2 text-xs font-bold text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:[(0,e.jsx)(Ve,{className:"h-4 w-4"}),"حذف کالا"]})]},M.id))}),(0,e.jsx)("div",{className:"hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-center text-[6px] lg:text-sm",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700  dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[30%] p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"w-[20%] p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:Ie.map(M=>(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:[M.productName,(0,e.jsxs)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:["برند: ",M.brand||"—"]})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:M.category||"—"}),(0,e.jsx)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:me(M.quantity)}),(0,e.jsxs)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:[me(M.unitPrice),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsxs)("td",{className:"break-words p-3 font-black text-green-700 dark:text-green-300",children:[me(xa(M)),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsx)("td",{className:"p-3",children:(0,e.jsx)("button",{type:"button",onClick:()=>{i(M)},disabled:$e,"aria-label":`حذف ${M.productName}`,className:"inline-flex items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:(0,e.jsx)(Ve,{className:"h-4 w-4"})})})]},M.id))})]})}),Ie.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(on,{className:"mx-auto mb-3 h-12 w-12 text-gray-300"}),(0,e.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:G.length?"کالایی با این فیلتر پیدا نشد.":"کالای دارای موجودی ثبت نشده است."})]})]})]})},Ss="https://myshop-backend-8nu7.onrender.com/api",Cs=[{id:"warranty",title:"درخواست گارانتی",subtitle:"ثبت مشکل کالا و پیگیری خدمات گارانتی",icon:za,gradient:"from-sky-500/15 to-cyan-500/5",iconColor:"text-sky-600 dark:text-sky-300"},{id:"business-card",title:"کارت ویزیت",subtitle:"درخواست طراحی یا چاپ کارت ویزیت",icon:hn,gradient:"from-violet-500/15 to-fuchsia-500/5",iconColor:"text-violet-600 dark:text-violet-300"},{id:"banner",title:"طراحی بنر",subtitle:"ثبت سفارش طراحی بنر تبلیغاتی",icon:Yn,gradient:"from-pink-500/15 to-rose-500/5",iconColor:"text-pink-600 dark:text-pink-300"},{id:"new-shipment",title:"بار جدید",subtitle:"درخواست هماهنگی برای بار جدید",icon:Il,gradient:"from-amber-500/15 to-orange-500/5",iconColor:"text-amber-600 dark:text-amber-300"},{id:"visit",title:"بازدید",subtitle:"درخواست بازدید یا هماهنگی حضوری",icon:Ua,gradient:"from-emerald-500/15 to-teal-500/5",iconColor:"text-emerald-600 dark:text-emerald-300"},{id:"urgent-call",title:"تماس فوری",subtitle:"درخواست تماس سریع از تیم پشتیبانی",icon:Gn,gradient:"from-red-500/15 to-rose-500/5",iconColor:"text-red-600 dark:text-red-300"},{id:"meeting",title:"رزرو زمان جلسه",subtitle:"پیشنهاد زمان برای جلسه با مجموعه",icon:tt,gradient:"from-indigo-500/15 to-blue-500/5",iconColor:"text-indigo-600 dark:text-indigo-300"}],$i={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},Is={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function $s(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function As(){const t=localStorage.getItem("token")||sessionStorage.getItem("token");if(!t)throw new Error("نشست شما موجود نیست. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`}}function Ai(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}var Ti=()=>{const[t,r]=(0,a.useState)(null),[s,d]=(0,a.useState)(""),[b,n]=(0,a.useState)(""),[g,o]=(0,a.useState)(""),[u,p]=(0,a.useState)([]),[c,k]=(0,a.useState)(!0),[f,j]=(0,a.useState)(!1),[m,h]=(0,a.useState)(""),[w,x]=(0,a.useState)(""),I=(0,a.useRef)(null);(0,a.useEffect)(()=>{let O=!1;async function H(){try{const T=await fetch(`${Ss}/support-requests/mine`,{headers:As()}),A=await T.json().catch(()=>null);if(!T.ok)throw new Error(A?.error||A?.message||"دریافت درخواست‌ها ناموفق بود.");const y=A?.data??A;if(!Array.isArray(y))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");O||p(y)}catch(T){O||h($s(T))}finally{O||k(!1)}}return H(),()=>{O=!0}},[]);const U=O=>{r(O),d(""),n(""),o(""),h(""),x(""),setTimeout(()=>{I.current?.scrollIntoView({behavior:"smooth",block:"start"})},100)},P=async O=>{if(O.preventDefault(),!(!t||f)){j(!0),h(""),x("");try{const H=await fetch(`${Ss}/support-requests`,{method:"POST",headers:{...As(),"Content-Type":"application/json"},body:JSON.stringify({type:t.id,subject:s.trim(),description:b.trim(),preferredTime:g.trim()})}),T=await H.json().catch(()=>null);if(!H.ok)throw new Error(T?.error||T?.message||"ثبت درخواست ناموفق بود.");const A=T?.data??T;if(!A?.id)throw new Error("پاسخ ثبت درخواست معتبر نیست.");p(y=>[A,...y]),r(null),x("درخواست شما ثبت شد و در انتظار رسیدگی است.")}catch(H){h($s(H))}finally{j(!1)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-full space-y-8 text-slate-900 dark:text-white",children:[(0,e.jsxs)("header",{className:"overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-xl dark:border-cyan-500/20 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30 sm:p-8",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:[(0,e.jsx)("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10",children:(0,e.jsx)(Ua,{className:"h-7 w-7 text-cyan-700 dark:text-cyan-300"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-cyan-700 dark:text-cyan-300",children:"همراه شما هستیم"}),(0,e.jsx)("h1",{className:"mt-1 text-2xl font-black sm:text-3xl",children:"مرکز پشتیبانی نمایندگان"})]})]}),(0,e.jsx)("p",{className:"mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300",children:"موضوع موردنظرتان را انتخاب کنید، توضیحات را بنویسید و وضعیت درخواست را از همین صفحه دنبال کنید."})]}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),m&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",children:m}),(0,e.jsxs)("section",{"aria-labelledby":"support-categories",children:[(0,e.jsx)("h2",{id:"support-categories",className:"mb-4 text-lg font-bold",children:"چه کمکی نیاز دارید؟"}),(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:Cs.map(O=>{const H=O.icon;return(0,e.jsxs)("article",{className:`group flex min-h-52 flex-col rounded-2xl border border-slate-200 bg-gradient-to-br ${O.gradient} bg-white p-5 text-right shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 dark:border-white/10 dark:bg-slate-900`,children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between",children:[(0,e.jsx)("span",{className:"flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-900/60",children:(0,e.jsx)(H,{className:`h-6 w-6 ${O.iconColor}`})}),(0,e.jsx)($a,{className:"h-5 w-5 text-slate-500 transition group-hover:-translate-x-1 group-hover:text-cyan-500 dark:text-slate-400"})]}),(0,e.jsx)("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:O.title}),(0,e.jsx)("p",{className:"mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300",children:O.subtitle}),(0,e.jsxs)("button",{type:"button",onClick:()=>U(O),className:"mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400",children:["ثبت درخواست",(0,e.jsx)($a,{className:"h-4 w-4"})]})]},O.id)})})]}),t&&(0,e.jsxs)("section",{ref:I,"aria-labelledby":"support-form-title",className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-cyan-500/25 dark:bg-slate-900 sm:p-7",children:[(0,e.jsxs)("div",{className:"mb-6 flex items-center justify-between gap-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs text-cyan-700 dark:text-cyan-300",children:"ثبت درخواست جدید"}),(0,e.jsx)("h2",{id:"support-form-title",className:"mt-1 text-xl font-bold",children:t.title})]}),(0,e.jsx)("button",{type:"button",onClick:()=>r(null),className:"rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white","aria-label":"بستن فرم",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("form",{onSubmit:P,className:"space-y-5",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"عنوان درخواست"}),(0,e.jsx)("input",{value:s,onChange:O=>d(O.target.value),required:!0,maxLength:120,placeholder:"عنوان کوتاه و مشخص بنویسید",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"توضیحات"}),(0,e.jsx)("textarea",{value:b,onChange:O=>n(O.target.value),required:!0,maxLength:2e3,rows:5,placeholder:"جزئیاتی که به رسیدگی کمک می‌کند بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),t.id==="meeting"&&(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"زمان پیشنهادی جلسه"}),(0,e.jsx)("input",{value:g,onChange:O=>o(O.target.value),required:!0,maxLength:120,placeholder:"مثلاً شنبه ساعت ۱۰ تا ۱۲",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("button",{type:"submit",disabled:f,className:"inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60",children:[f?(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Fa,{className:"h-5 w-5"}),f?"در حال ثبت...":"ارسال درخواست"]})]})]}),(0,e.jsxs)("section",{"aria-labelledby":"my-requests",children:[(0,e.jsx)("h2",{id:"my-requests",className:"mb-4 text-lg font-bold",children:"درخواست‌های من"}),c?(0,e.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"در حال دریافت درخواست‌ها..."}):u.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"هنوز درخواستی ثبت نکرده‌اید."}):(0,e.jsx)("div",{className:"space-y-3",children:u.map(O=>(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Cs.find(H=>H.id===O.type)?.title||"درخواست پشتیبانی"}),(0,e.jsx)("h3",{className:"mt-1 font-bold",children:O.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${Is[O.status]||Is.pending}`,children:$i[O.status]||O.status})]}),(0,e.jsx)("p",{className:"mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300",children:O.description}),O.adminNote&&(0,e.jsxs)("div",{className:"mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-500/20 dark:bg-cyan-500/10",children:[(0,e.jsx)("p",{className:"mb-1 text-xs font-bold text-cyan-800 dark:text-cyan-300",children:"پاسخ پشتیبانی"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap text-sm leading-7 text-slate-800 dark:text-slate-200",children:O.adminNote})]}),(0,e.jsx)("p",{className:"mt-3 text-xs text-slate-500 dark:text-slate-400",children:Ai(O.createdAt)})]},O.id))})]})]})},Di="https://myshop-backend-8nu7.onrender.com/api",Ts={warranty:"درخواست گارانتی","business-card":"کارت ویزیت",banner:"طراحی بنر","new-shipment":"بار جدید",visit:"بازدید","urgent-call":"تماس فوری",meeting:"رزرو زمان جلسه"},ma={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},Ri={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function Ds(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function Ei(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}async function Rs(t,r={}){const s=localStorage.getItem("token")||sessionStorage.getItem("token");if(!s)throw new Error("نشست شما منقضی شده است. دوباره وارد شوید.");const d=await fetch(`${Di}${t}`,{...r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,...r.headers}}),b=await d.json().catch(()=>null);if(!d.ok)throw new Error(b?.error||b?.message||"ارتباط با سرور ناموفق بود.");return b?.data??b}function Pi(){const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,o]=(0,a.useState)("all"),[u,p]=(0,a.useState)("all"),[c,k]=(0,a.useState)(""),[f,j]=(0,a.useState)({}),[m,h]=(0,a.useState)(""),[w,x]=(0,a.useState)(""),I=(0,a.useCallback)(async()=>{d(!0),h("");try{const T=await Rs("/admin/support-requests");if(!Array.isArray(T))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");r(T),j(Object.fromEntries(T.map(A=>[A.id,{status:A.status,adminNote:A.adminNote||""}])))}catch(T){h(Ds(T))}finally{d(!1)}},[]);(0,a.useEffect)(()=>{I()},[I]);const U=(0,a.useMemo)(()=>{const T=c.trim().toLocaleLowerCase();return t.filter(A=>{const y=g==="all"||A.status===g,$=u==="all"||A.type===u,B=!T||[A.subject,A.description,A.representativeId,A.representativeName||""].join(" ").toLocaleLowerCase().includes(T);return y&&$&&B})},[t,c,g,u]),P=(0,a.useMemo)(()=>({pending:t.filter(T=>T.status==="pending").length,inProgress:t.filter(T=>T.status==="in-progress").length,resolved:t.filter(T=>T.status==="resolved").length,rejected:t.filter(T=>T.status==="rejected").length}),[t]),O=(T,A)=>{j(y=>({...y,[T]:{...y[T],...A}}))},H=async T=>{const A=f[T.id];if(!(!A||b)){n(T.id),h(""),x("");try{const y=await Rs(`/admin/support-requests/${encodeURIComponent(T.id)}`,{method:"PATCH",body:JSON.stringify({status:A.status,adminNote:A.adminNote.trim()})});r($=>$.map(B=>B.id===T.id?y:B)),j($=>({...$,[T.id]:{status:y.status,adminNote:y.adminNote||""}})),x("درخواست با موفقیت به‌روزرسانی شد.")}catch(y){h(Ds(y))}finally{n(null)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6 text-slate-900 dark:text-white",children:[(0,e.jsx)("section",{className:"rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-sm dark:border-slate-700 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-center gap-4",children:[(0,e.jsx)("span",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Ua,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-xl font-black sm:text-2xl",children:"رسیدگی به درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-300",children:"درخواست‌های پشتیبانی نمایندگان را بررسی و پیگیری کنید."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void I(),disabled:s,className:"inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})}),(0,e.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-4",children:[{label:"در انتظار",value:P.pending,icon:gr,tone:"text-amber-600 dark:text-amber-300"},{label:"در حال رسیدگی",value:P.inProgress,icon:sl,tone:"text-blue-600 dark:text-blue-300"},{label:"رسیدگی‌شده",value:P.resolved,icon:ve,tone:"text-emerald-600 dark:text-emerald-300"},{label:"ردشده",value:P.rejected,icon:et,tone:"text-rose-600 dark:text-rose-300"}].map(T=>{const A=T.icon;return(0,e.jsxs)("div",{className:"flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(A,{className:`h-6 w-6 ${T.tone}`}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:T.label}),(0,e.jsx)("p",{className:"text-2xl font-black",children:T.value})]})]},T.label)})}),m&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200",children:m}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),(0,e.jsxs)("section",{className:"grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1fr_180px_180px]",children:[(0,e.jsxs)("label",{className:"relative block",children:[(0,e.jsx)(dt,{className:"pointer-events-none absolute right-3 top-3 h-5 w-5 text-slate-400"}),(0,e.jsx)("input",{value:c,onChange:T=>k(T.target.value),placeholder:"جست‌وجو در عنوان، توضیحات یا نام نماینده",className:"w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-3 pr-10 text-sm text-slate-900 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("select",{"aria-label":"فیلتر وضعیت",value:g,onChange:T=>o(T.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ وضعیت‌ها"}),Object.entries(ma).map(([T,A])=>(0,e.jsx)("option",{value:T,children:A},T))]}),(0,e.jsxs)("select",{"aria-label":"فیلتر نوع درخواست",value:u,onChange:T=>p(T.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ موضوع‌ها"}),Object.entries(Ts).map(([T,A])=>(0,e.jsx)("option",{value:T,children:A},T))]})]}),s?(0,e.jsxs)("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-300",children:[(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}),"در حال دریافت درخواست‌ها..."]}):U.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"درخواستی مطابق فیلترها پیدا نشد."}):(0,e.jsx)("div",{className:"space-y-4",children:U.map(T=>{const A=f[T.id]??{status:T.status,adminNote:T.adminNote||""};return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Ts[T.type]||T.type}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-bold",children:T.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${Ri[T.status]}`,children:ma[T.status]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500 dark:text-slate-400",children:[(0,e.jsxs)("span",{children:["نماینده:"," ",T.representativeName||T.representativeId]}),(0,e.jsxs)("span",{children:["ثبت:"," ",Ei(T.createdAt)]}),T.preferredTime&&(0,e.jsxs)("span",{children:["زمان پیشنهادی:"," ",T.preferredTime]})]}),(0,e.jsx)("p",{className:"mt-4 whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:T.description}),(0,e.jsxs)("div",{className:"mt-5 grid gap-4 md:grid-cols-[180px_1fr_auto] md:items-end",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"وضعیت رسیدگی"}),(0,e.jsx)("select",{value:A.status,onChange:y=>O(T.id,{status:y.target.value}),className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800",children:Object.entries(ma).map(([y,$])=>(0,e.jsx)("option",{value:y,children:$},y))})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"پاسخ یا یادداشت برای نماینده"}),(0,e.jsx)("textarea",{value:A.adminNote,onChange:y=>O(T.id,{adminNote:y.target.value}),rows:2,maxLength:2e3,placeholder:"پاسخ یا توضیح پیگیری را بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void H(T),disabled:b!==null,className:"inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 text-sm font-bold text-white transition hover:bg-cyan-500 disabled:opacity-50",children:[b===T.id&&(0,e.jsx)(le,{className:"h-4 w-4 animate-spin"}),"ذخیرهٔ تغییرات"]})]})]},T.id)})})]})}var zi=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),nr=t=>{const r=zi(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},wn=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),lr=t=>`${wn(t)} تومان`,Fi={indigo:"border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300",cyan:"border-cyan-100 bg-cyan-50 text-cyan-700 dark:border-cyan-900/40 dark:bg-cyan-950/30 dark:text-cyan-300",emerald:"border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300",amber:"border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-300",violet:"border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900/40 dark:bg-violet-950/30 dark:text-violet-300",rose:"border-rose-100 bg-rose-50 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300",blue:"border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300",orange:"border-orange-100 bg-orange-50 text-orange-700 dark:border-orange-900/40 dark:bg-orange-950/30 dark:text-orange-300"},Mi=({title:t,value:r,icon:s,color:d})=>(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-7 -top-7 h-20 w-20 rounded-full bg-current opacity-[0.04] blur-2xl"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:"mt-3 truncate text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:r})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${Fi[d]}`,children:(0,e.jsx)(s,{className:"h-6 w-6"})})]})]}),Li=({fullName:t="—",territory:r="—",creditAmount:s=0,inventoryItemCount:d=0,inventoryValue:b=0,salesLast10Days:n=0,salesInAllowedDays:g=0})=>{const o=nr(s),u=nr(d),p=nr(b),c=o-p,k=c<0?"rose":"emerald",f=(c<0,"مانده اعتباری"),j=nr(n),m=nr(g),h=[{title:"نام و نام خانوادگی",value:t||"—",icon:wt,color:"indigo"},{title:"محدوده نمایندگی",value:r||"—",icon:fl,color:"cyan"},{title:"مبلغ اعتبار",value:lr(o),icon:tl,color:"emerald"},{title:"تعداد در انبار",value:`${wn(u)} قلم`,icon:Kr,color:"amber"},{title:"مبلغ اقلام انبار",value:lr(p),icon:dn,color:"violet"},{title:f,value:lr(Math.abs(c)),icon:lt,color:k},{title:"فروش ۱۰ روز گذشته",value:lr(j),icon:_r,color:"blue"},{title:"فروش ۳ روز مجاز ماه",value:lr(m),icon:tt,color:"orange"}];return(0,e.jsx)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:h.map(w=>(0,e.jsx)(Mi,{title:w.title,value:w.value,icon:w.icon,color:w.color},w.title))})},Sn=sn(Wn(),1);function Ba(){const[t,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{const g=()=>{r(typeof window<"u"&&(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]);const s=(g,o)=>`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<title>${o}</title>
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
</html>`,d=(g,o)=>{const u=document.getElementById("print-iframe");u&&u.parentNode&&document.body.removeChild(u);const p=document.createElement("iframe");p.id="print-iframe",p.style.position="fixed",p.style.right="0",p.style.bottom="0",p.style.width="0",p.style.height="0",p.style.border="0",p.style.overflow="hidden",p.setAttribute("aria-hidden","true"),p.title=o,document.body.appendChild(p);const c=p.contentWindow?.document||p.contentDocument;if(!c){console.error("نتوانستم به iframe دسترسی پیدا کنم"),p.parentNode&&document.body.removeChild(p);return}c.open(),c.write(s(g,o)),c.close();const k=()=>{try{p.contentWindow?.focus(),setTimeout(()=>{try{p.contentWindow?.print()}catch(f){console.error("خطا در چاپ:",f)}setTimeout(()=>{p.parentNode&&document.body.removeChild(p)},1e3)},300)}catch(f){console.error("خطا در چاپ:",f),p.parentNode&&document.body.removeChild(p)}};p.contentWindow?.document?.readyState==="complete"?k():(p.onload=k,setTimeout(()=>{p.parentNode&&p.contentWindow?.document?.readyState==="complete"&&k()},2e3))};return{printContent:(g,o="چاپ")=>{setTimeout(()=>{let u=document.getElementById(g);if(u||(u=document.querySelector(`.${g}`)),u||(u=document.querySelector(`[data-print="${g}"]`)),!u){console.warn("محتوای چاپ پیدا نشد با:",g),window.print();return}const p=u.outerHTML;d(p,o)},200)},printHTML:(g,o="چاپ")=>{d(g,o)},isMobile:t}}var xr=t=>{const r=String(t??"").replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},at=t=>new Intl.NumberFormat("fa-IR").format(xr(t)),qi=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,""),Es=t=>t.totalPrice!==void 0?xr(t.totalPrice):xr(t.quantity)*xr(t.unitPrice),He=(t,r)=>String(t??"").trim()||r,Ui=({items:t,settings:r,representativeName:s,representativeCity:d,representativePhone:b,representativeAddress:n,filterDescription:g,onClose:o})=>{const{printContent:u,isMobile:p}=Ba(),c=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),k=(0,a.useMemo)(()=>c.reduce((w,x)=>w+xr(x.quantity),0),[c]),f=(0,a.useMemo)(()=>c.reduce((w,x)=>w+Es(x),0),[c]);if((0,a.useEffect)(()=>{if(typeof o!="function")return;const w=()=>{o()};window.addEventListener("afterprint",w);const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("afterprint",w),document.body.style.overflow=x}},[o]),typeof document>"u")return null;const j=/^#[0-9a-fA-F]{6}$/.test(r.primaryColor)?r.primaryColor:"#111827",m=()=>{o?.()},h=(0,e.jsxs)("div",{id:"inventory-print-root",dir:"rtl",style:{"--inventory-primary":j},children:[(0,e.jsx)("style",{children:`
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
      `}),(0,e.jsxs)("div",{className:"inventory-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش موجودی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{className:"inventory-print-actions",children:[(0,e.jsx)("button",{type:"button",className:"inventory-print-close",onClick:w=>{w.preventDefault(),w.stopPropagation(),m()},children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"inventory-print-button",onClick:()=>{u("inventory-print-root","چاپ موجودی انبار")},children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"inventory-print-paper",children:[(0,e.jsxs)("header",{className:"inventory-print-header",children:[(0,e.jsxs)("div",{className:"inventory-print-company",children:[(0,e.jsx)("div",{className:"inventory-print-logo-box",children:(r.companyLogoSrc,(0,e.jsx)("img",{src:r.companyLogoSrc||"../company-logo.png",alt:"لوگوی شرکت",className:"inventory-print-logo"}))}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:He(s,r.companyName)}),(0,e.jsx)("p",{children:He(r.companyTagline,"سامانه مدیریت نمایندگی و انبار")})]})]}),(0,e.jsxs)("div",{className:"inventory-print-title",children:[(0,e.jsx)("span",{children:"گزارش رسمی موجودی"}),(0,e.jsx)("h2",{children:He(r.reportTitle,"گزارش موجودی انبار نمایندگی")}),(0,e.jsxs)("p",{children:[s||"گزارش کلی موجودی انبار",d?` — ${d}`:""]})]})]}),(0,e.jsxs)("section",{className:"inventory-print-meta",children:[(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:qi()})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"بازرگانی مهر امین"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"028-33236072"})]})]}),(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:He(s,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن:"}),(0,e.jsx)("strong",{children:He(b,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس نمایندگی:"}),(0,e.jsx)("strong",{children:He(n,"—")})]})]})]}),(0,e.jsxs)("div",{className:"inventory-print-table-wrapper",children:[(0,e.jsxs)("table",{className:"inventory-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"5%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"25%"},children:"عنوان"}),(0,e.jsx)("th",{style:{width:"15%"},children:"برند"}),(0,e.jsx)("th",{style:{width:"15%"},children:"دسته‌بندی"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"15%"},children:"قیمت"}),(0,e.jsx)("th",{style:{width:"15%"},children:"مجموع"})]})}),(0,e.jsx)("tbody",{children:c.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"کالایی برای چاپ وجود ندارد."})}):c.map((w,x)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{className:"center",children:at(x+1)}),(0,e.jsx)("td",{className:"title",children:He(w.title,"بدون عنوان")}),(0,e.jsx)("td",{children:He(w.brand,"بدون برند")}),(0,e.jsx)("td",{children:He(w.category,"بدون دسته‌بندی")}),(0,e.jsxs)("td",{className:"center",children:[at(w.quantity)," قلم"]}),(0,e.jsxs)("td",{className:"money",children:[at(w.unitPrice)," تومان"]}),(0,e.jsxs)("td",{className:"money",children:[at(Es(w))," تومان"]})]},w.id||`inventory-print-${x}`))})]}),(0,e.jsx)("table",{className:"inventory-print-table inventory-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"55%"},children:"جمع کل انبار"}),(0,e.jsxs)("td",{className:"center",style:{width:"15%"},children:[at(k)," قلم"]}),(0,e.jsx)("td",{className:"center",style:{width:"15%"},children:"—"}),(0,e.jsxs)("td",{className:"money",style:{width:"15%"},children:[at(f)," تومان"]})]})})})]}),(0,e.jsxs)("section",{className:"inventory-print-summary",children:[(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد نوع کالا"}),(0,e.jsxs)("strong",{children:[at(c.length)," کالا"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد کل اقلام"}),(0,e.jsxs)("strong",{children:[at(k)," قلم"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"مجموع"}),(0,e.jsxs)("strong",{children:[at(f)," تومان"]})]})]}),(0,e.jsxs)("footer",{className:"inventory-print-footer",children:[(0,e.jsx)("p",{children:He(r.footerText,"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.")}),(0,e.jsx)("p",{children:He(r.signatureLabel,"امضا و مهر نمایندگی:")})]})]})]});return(0,Sn.createPortal)(h,document.body)},Wa="inventory-print-template-settings-v2",De={companyName:"نام شرکت شما",companyTagline:"سامانه مدیریت نمایندگی و انبار",companyLogoSrc:"../company-logo.png",reportTitle:"گزارش موجودی انبار نمایندگی",footerText:"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.",signatureLabel:"امضا و مهر نمایندگی:",primaryColor:"#111827"},Oi=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],Me=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),Rt=t=>{const r=String(t??"").replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Pe=t=>String(t??"").trim(),Ps=t=>Pe(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/\s+/g," ").toLowerCase(),ir=t=>Pe(t.brand)||"بدون برند",pa=t=>Pe(t.category)||"بدون دسته‌بندی",Ra=t=>/^#[0-9a-fA-F]{6}$/.test(Pe(t)),zs=()=>{try{const t=localStorage.getItem(Wa);if(!t)return De;const r=JSON.parse(t);return{companyName:Pe(r.companyName)||De.companyName,companyTagline:Pe(r.companyTagline)||De.companyTagline,companyLogoSrc:Pe(r.companyLogoSrc)||De.companyLogoSrc,reportTitle:Pe(r.reportTitle)||De.reportTitle,footerText:Pe(r.footerText)||De.footerText,signatureLabel:Pe(r.signatureLabel)||De.signatureLabel,primaryColor:Ra(String(r.primaryColor??""))?String(r.primaryColor):De.primaryColor}}catch{return De}},_i=t=>{localStorage.setItem(Wa,JSON.stringify(t))},Dr=t=>t.totalPrice!==void 0?Rt(t.totalPrice):Rt(t.quantity)*Rt(t.unitPrice),Bi=({items:t=[],representativeName:r="",representativeCity:s="",representativePhone:d="",representativeAddress:b=""})=>{const n=Array.isArray(t)?t:[],[g,o]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),[c,k]=(0,a.useState)(""),[f,j]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[w,x]=(0,a.useState)(!1),[I,U]=(0,a.useState)(()=>zs()),[P,O]=(0,a.useState)(()=>zs()),H=(0,a.useMemo)(()=>{const S=new Set;return n.forEach(_=>{S.add(ir(_))}),Array.from(S).sort((_,te)=>_.localeCompare(te,"fa"))},[n]),T=(0,a.useMemo)(()=>{const S=Ps(g);return n.filter(_=>{const te=Pe(_.title),G=ir(_),de=pa(_),ie=Ps(`${te} ${G} ${de}`);return(!S||ie.includes(S))&&(!u||G===u)&&(!c||de===c)})},[n,g,u,c]),A=n.length,y=n.reduce((S,_)=>S+Rt(_.quantity),0),$=n.reduce((S,_)=>S+Dr(_),0),B=T.reduce((S,_)=>S+Rt(_.quantity),0),D=T.reduce((S,_)=>S+Dr(_),0),W=!!g.trim()||!!u||!!c,J=(0,a.useMemo)(()=>{const S=[];return g.trim()&&S.push(`جست‌وجو: «${g.trim()}»`),u&&S.push(`برند: ${u}`),c&&S.push(`دسته‌بندی: ${c}`),S.length>0?S.join(" | "):"بدون فیلتر"},[g,u,c]),C=()=>{o(""),p(""),k("")},z=()=>{O(I),h(!1),j(!1)},l=(S,_)=>{h(!1),O(te=>({...te,[S]:_}))},N=()=>{const S=Ra(P.primaryColor)?P.primaryColor:De.primaryColor,_={companyName:Pe(P.companyName)||De.companyName,companyTagline:Pe(P.companyTagline)||De.companyTagline,companyLogoSrc:Pe(P.companyLogoSrc),reportTitle:Pe(P.reportTitle)||De.reportTitle,footerText:Pe(P.footerText)||De.footerText,signatureLabel:Pe(P.signatureLabel)||De.signatureLabel,primaryColor:S};U(_),O(_),_i(_),h(!0)},v=()=>{window.confirm("آیا تنظیمات قالب چاپ به حالت پیش‌فرض برگردد؟")&&(U(De),O(De),localStorage.removeItem(Wa),h(!0))},R=()=>{x(!0)},q=()=>{x(!1)};return(0,e.jsxs)("section",{dir:"rtl",className:"inventory-section overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)("div",{className:"border-b border-slate-200 p-5 dark:border-slate-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-slate-700",children:(0,e.jsx)(gl,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-slate-900 dark:text-white md:text-lg",children:"موجودی انبار نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400",children:"جست‌وجو، فیلتر، تنظیم قالب و چاپ گزارش موجودی."})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تنوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[Me(A)," کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تعداد کل اقلام"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[Me(y)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[Me($)," تومان"]})]})]})]})}),n.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(pr,{className:"mx-auto h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600 dark:text-slate-300",children:"کالایی در انبار ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-400 dark:text-slate-500",children:"پس از ثبت کالا، جزئیات موجودی در این بخش نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"border-b border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50 md:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 lg:flex-row lg:items-center",children:[(0,e.jsxs)("div",{className:"relative min-w-0 flex-1",children:[(0,e.jsx)(dt,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:g,onChange:S=>o(S.target.value),placeholder:"جست‌وجو بر اساس عنوان، برند یا دسته‌بندی...",className:"min-h-11 w-full rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-slate-800"})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:u,onChange:S=>p(S.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-44",children:[(0,e.jsx)("option",{value:"",children:"همهٔ برندها"}),H.map(S=>(0,e.jsx)("option",{value:S,children:S},S))]}),(0,e.jsx)(ls,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:c,onChange:S=>k(S.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-48",children:[(0,e.jsx)("option",{value:"",children:"همهٔ دسته‌بندی‌ها"}),Oi.map(S=>(0,e.jsx)("option",{value:S,children:S},S))]}),(0,e.jsx)(ls,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),W&&(0,e.jsxs)("button",{type:"button",onClick:C,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(Ce,{className:"h-4 w-4"}),"پاک‌کردن"]}),(0,e.jsxs)("button",{type:"button",onClick:R,disabled:T.length===0,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"پیش‌نمایش و چاپ"]})]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2 text-sm",children:[(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:W?`${Me(T.length)} کالا از ${Me(n.length)} کالا پیدا شد.`:`${Me(n.length)} کالا در انبار موجود است.`}),W&&(0,e.jsxs)("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["تعداد نتایج: ",Me(B)," قلم · مجموع: ",Me(D)," تومان"]})]})]}),(0,e.jsx)("div",{className:"p-5",children:T.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(dt,{className:"mx-auto h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600",children:"کالایی با این شرایط پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:C,className:"mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800",children:"پاک‌کردن فیلترها"})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:T.map(S=>{const _=Rt(S.quantity),te=Rt(S.unitPrice);return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",children:(0,e.jsx)(Kr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-slate-800 dark:text-white",children:S.title||"بدون عنوان"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:ir(S)})]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-indigo-50 p-3 text-center dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-indigo-900 dark:text-indigo-100",children:ir(S)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-amber-900 dark:text-amber-100",children:pa(S)})]})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-emerald-900 dark:text-emerald-100",children:Me(_)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-sky-50 p-3 text-center dark:bg-sky-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-sky-700 dark:text-sky-300",children:"قیمت"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-sky-900 dark:text-sky-100",children:Me(te)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-purple-900 dark:text-purple-100",children:Me(Dr(S))})]})]})]},S.id)})}),(0,e.jsx)("div",{className:"hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block dark:border-slate-700 dark:bg-slate-900",children:(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"w-full min-w-[760px] border-collapse text-center text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("thead",{className:"border-b border-slate-200 bg-gradient-to-l from-slate-50 to-slate-100 text-xs text-slate-600 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300",children:(0,e.jsxs)("tr",{className:"h-14",children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"عنوان"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"برند"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"تعداد"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"قیمت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مجموع"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:T.map(S=>(0,e.jsxs)("tr",{className:"h-16 bg-white transition-colors hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/70",children:[(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 font-black text-slate-800 last:border-l-0 dark:border-slate-800 dark:text-slate-100",children:S.title||"بدون عنوان"}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:ir(S)}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:pa(S)}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-5 py-4 font-black text-emerald-700 last:border-l-0 dark:border-slate-800 dark:text-emerald-300",children:[Me(S.quantity)," ","قلم"]}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-5 py-4 font-semibold text-sky-700 last:border-l-0 dark:border-slate-800 dark:text-sky-300",children:[Me(S.unitPrice)," ","تومان"]}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-violet-700 dark:text-violet-300",children:[Me(Dr(S))," ","تومان"]})]},S.id))}),(0,e.jsx)("tfoot",{className:"border-t-2 border-slate-300 bg-gradient-to-l from-slate-50 to-slate-100 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900",children:(0,e.jsxs)("tr",{className:"h-16",children:[(0,e.jsx)("td",{colSpan:3,className:"border-l border-slate-200 px-5 py-4 font-black text-slate-800 last:border-l-0 dark:border-slate-700 dark:text-slate-100",children:W?"جمع نتایج فیلترشده":"جمع کل انبار"}),(0,e.jsxs)("td",{className:"border-l border-slate-200 px-5 py-4 font-black text-emerald-700 last:border-l-0 dark:border-slate-700 dark:text-emerald-300",children:[Me(B)," ","قلم"]}),(0,e.jsx)("td",{className:"border-l border-slate-200 px-5 py-4 text-slate-400 last:border-l-0 dark:border-slate-700 dark:text-slate-500",children:"—"}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-violet-700 dark:text-violet-300",children:[Me(D)," ","تومان"]})]})})]})})})]})})]}),w&&(0,e.jsx)(Ui,{items:T,settings:I,representativeName:r,representativeCity:s,representativePhone:d,representativeAddress:b,filterDescription:J,onClose:q}),f&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-700",children:(0,e.jsx)(Hn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-900 dark:text-white",children:"شخصی‌سازی قالب چاپ"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:"تنظیمات روی همین مرورگر ذخیره می‌شوند."})]})]}),(0,e.jsx)("button",{type:"button",onClick:z,className:"rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-5 p-4 sm:p-5",children:[m&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-bold text-green-700 dark:border-green-900 dark:bg-green-950/20 dark:text-green-300",children:[(0,e.jsx)(Aa,{className:"h-5 w-5"}),"تنظیمات قالب چاپ ذخیره شد."]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["نام شرکت",(0,e.jsx)("input",{type:"text",value:P.companyName,onChange:S=>l("companyName",S.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["زیرعنوان شرکت",(0,e.jsx)("input",{type:"text",value:P.companyTagline,onChange:S=>l("companyTagline",S.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["مسیر لوگو",(0,e.jsx)("input",{type:"text",dir:"ltr",value:P.companyLogoSrc,onChange:S=>l("companyLogoSrc",S.target.value),placeholder:"../company-logo.png",className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-left text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["عنوان گزارش",(0,e.jsx)("input",{type:"text",value:P.reportTitle,onChange:S=>l("reportTitle",S.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["رنگ اصلی",(0,e.jsx)("input",{type:"color",value:Ra(P.primaryColor)?P.primaryColor:De.primaryColor,onChange:S=>l("primaryColor",S.target.value),className:"mt-2 h-11 w-full cursor-pointer rounded-xl border border-slate-300 p-1 dark:border-slate-600"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن پایین گزارش",(0,e.jsx)("textarea",{value:P.footerText,onChange:S=>l("footerText",S.target.value),rows:3,className:"mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن امضا",(0,e.jsx)("input",{type:"text",value:P.signatureLabel,onChange:S=>l("signatureLabel",S.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-col-reverse gap-2 border-t border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:v,className:"min-h-11 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:"بازنشانی پیش‌فرض"}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:z,className:"min-h-11 rounded-xl bg-slate-100 px-4 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:"بستن"}),(0,e.jsxs)("button",{type:"button",onClick:N,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-black text-white dark:bg-slate-700",children:[(0,e.jsx)(Aa,{className:"h-4 w-4"}),"ذخیرهٔ تنظیمات"]})]})]})]})})]})},Va=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],Qe=t=>{const r=Number(t??0);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},ha=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Fs=t=>t==="pending"?"در انتظار":t==="sent"?"ارسال شده":Va.find(r=>r.value===t)?.label||"نامشخص",Wi=t=>t==="pending"?0:t==="sent"?4:Va.findIndex(r=>r.value===t),Vi=t=>{if(ae.isAxiosError(t)){const r=t.response?.data;return t.response?.status===401?"نشست شما معتبر نیست؛ دوباره وارد حساب نمایندگی شوید.":t.response?.status===403?"دسترسی به این بخش برای حساب شما مجاز نیست.":t.response?.status===404?"مسیر «بارهای من» در بک‌اند هنوز ایجاد نشده است.":r?.error||r?.message||"دریافت بارها ناموفق بود."}return t instanceof Error?t.message:"دریافت بارها ناموفق بود."},Hi=({apiUrl:t="https://myshop-backend-8nu7.onrender.com/api",token:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[g,o]=(0,a.useState)(""),[u,p]=(0,a.useState)(null),c=t.replace(/\/+$/,""),k=(0,a.useCallback)(async()=>{n(!0),o("");try{const m=await ae.get(`${c}/shipments/my`,{headers:r?{Authorization:`Bearer ${r}`,Accept:"application/json"}:{Accept:"application/json"},withCredentials:!0});if(m.data.success===!1)throw new Error(m.data.error||"دریافت بارها ناموفق بود.");d(Array.isArray(m.data.data)?m.data.data:[])}catch(m){console.error("خطا در دریافت بارهای نماینده:",m),d([]),o(Vi(m))}finally{n(!1)}},[c,r]);(0,a.useEffect)(()=>{k()},[k]);const f=(0,a.useMemo)(()=>[...s].sort((m,h)=>new Date(h.createdAt||h.updatedAt||0).getTime()-new Date(m.createdAt||m.updatedAt||0).getTime()),[s]),j=(0,a.useMemo)(()=>s.filter(m=>m.status!=="delivered").length,[s]);return b?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(le,{className:"h-8 w-8 animate-spin text-blue-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:"در حال دریافت بارهای شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-4 border-b border-gray-100 pb-5 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:[(0,e.jsx)(Kt,{className:"h-6 w-6 text-blue-600"}),"بارهای من"]}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت ارسال بارهای مربوط به حساب نمایندگی شما"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void k(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),g?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:g})]}):null,g?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"کل بارها"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-blue-900 dark:text-blue-100",children:Qe(s.length)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"در جریان"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-amber-900 dark:text-amber-100",children:Qe(j)})]})]}),f.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع بارهای من"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[Qe(f.length)," حواله · ",Qe(f.reduce((m,h)=>m+(h.totalItems??h.items?.reduce((w,x)=>w+(x.quantity||0),0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:Qe(f.reduce((m,h)=>m+(h.totalValue??h.items?.reduce((w,x)=>w+(x.totalPrice??(x.quantity||0)*(x.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),f.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-12 text-center dark:border-gray-700 dark:bg-gray-800/40",children:[(0,e.jsx)(ot,{className:"mx-auto mb-3 h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"font-black text-gray-700 dark:text-gray-200",children:"هنوز باری برای شما ثبت نشده است."})]}):(0,e.jsx)("div",{className:"space-y-4",children:f.map(m=>{const h=String(m.id),w=u===h,x=Wi(m.status),I=m.items?.length??m.itemsCount??0,U=m.items?.reduce((P,O)=>P+(Number(O.quantity)||0),0)??m.totalItems??0;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"p-4 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["شماره حواله:"," ",m.shipmentNumber||h]}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-black text-gray-800 dark:text-white",children:"بار ارسالی به نمایندگی شما"})]}),(0,e.jsx)("span",{className:"w-fit rounded-full bg-blue-100 px-3 py-1.5 text-xs font-black text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",children:Fs(m.status)})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:Qe(I)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:Qe(U)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ارسال"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:m.shipmentDate||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-800 dark:text-white",children:ha(m.createdAt)})]})]}),(0,e.jsx)("div",{"aria-label":"مراحل ارسال بار",className:"mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6",children:Va.map((P,O)=>{const H=O<=x;return(0,e.jsxs)("div",{className:`flex min-h-10 items-center justify-center gap-1 rounded-lg px-2 py-2 text-center text-[10px] font-bold sm:text-xs ${H?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-300"}`,children:[H?(0,e.jsx)(ve,{className:"h-3.5 w-3.5 shrink-0"}):(0,e.jsx)(gr,{className:"h-3.5 w-3.5 shrink-0"}),(0,e.jsx)("span",{children:P.label})]},P.value)})}),(0,e.jsxs)("button",{type:"button",onClick:()=>p(w?null:h),"aria-expanded":w,className:"mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 text-sm font-black text-blue-700 transition hover:bg-blue-50 dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300",children:[w?(0,e.jsx)(ml,{className:"h-4 w-4"}):(0,e.jsx)(Jr,{className:"h-4 w-4"}),w?"بستن جزئیات":"مشاهدهٔ کالاها و جزئیات"]})]}),w?(0,e.jsxs)("div",{className:"space-y-5 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 text-sm sm:grid-cols-2",children:[(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["گیرنده:"," ",(0,e.jsx)("strong",{children:m.receiver||"—"})]}),(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["انبار مبدأ:"," ",(0,e.jsx)("strong",{children:m.warehouse||"—"})]}),(0,e.jsxs)("p",{className:"flex items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(tt,{className:"h-4 w-4"}),"ثبت:"," ",ha(m.createdAt)]}),(0,e.jsxs)("p",{className:"flex min-w-0 items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(Oa,{className:"h-4 w-4 shrink-0"}),(0,e.jsx)("span",{className:"break-all",children:m.excelFileName||"نام فایل ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(ot,{className:"h-5 w-5"}),"کالاهای این بار"]}),m.items?.length?(0,e.jsxs)("div",{className:"overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700 sm:hidden",children:m.items.map((P,O)=>(0,e.jsxs)("div",{className:"bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:P.productName||"—"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:Qe(P.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[Qe(P.unitPrice)," ","تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[P.brand?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",P.brand]}):null,P.category?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",P.category]}):null]})]},String(P.id??O)))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"کالا"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"})]})}),(0,e.jsx)("tbody",{children:m.items.map((P,O)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:P.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:P.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:P.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:Qe(P.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[Qe(P.unitPrice)," ","تومان"]})]},String(P.id??O)))})]})})]}):(0,e.jsx)("div",{className:"rounded-xl bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-950/20 dark:text-amber-200",children:"جزئیات اقلام برای این بار موجود نیست. بارهای قدیمی ممکن است فقط نام فایل را ذخیره کرده باشند."})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(We,{className:"h-5 w-5"}),"تاریخچهٔ وضعیت"]}),m.statusHistory?.length?(0,e.jsx)("div",{className:"space-y-2",children:m.statusHistory.map((P,O)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 p-3 text-sm dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("p",{className:"font-black",children:P.label||Fs(P.status)}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500",children:ha(P.changedAt||P.createdAt)}),P.note?(0,e.jsx)("p",{className:"mt-2",children:P.note}):null]},`${P.status}-${O}`))}):(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800",children:"تاریخچه‌ای برای این بار ثبت نشده است."})]})]}):null]},h)})})]})]})},ga=t=>new Intl.NumberFormat("fa-IR").format(t||0),Qi=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium"}).format(r)},Ji=({orders:t=[]})=>{const r=Array.isArray(t)?t:[];return(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 border-b border-gray-100 p-5 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(cn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"سفارش‌های اخیر"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"آخرین سفارش‌های ثبت‌شدهٔ شما"})]})]}),(0,e.jsxs)("span",{className:"rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",children:[ga(r.length)," سفارش"]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Wr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"سفارشی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"پس از ثبت سفارش، اطلاعات آن در این بخش نمایش داده می‌شود."})]}):(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.slice(0,5).map(s=>(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between dark:hover:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-gray-300",children:(0,e.jsx)(dn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:s.title||"بدون عنوان"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["تعداد:"," ",ga(Number(s.quantity)||0)," ","قلم"]})]})]}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 sm:block sm:text-left",children:[(0,e.jsxs)("p",{className:"font-black text-emerald-600 dark:text-emerald-400",children:[ga(Number(s.amount)||0)," ","تومان"]}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500",children:Qi(s.createdAt)})]})]},s.id))})]})},Et=t=>{const r=String(t??"").replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},gt=t=>new Intl.NumberFormat("fa-IR").format(Et(t)),ua=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r).replace(/[\u200e\u200f]/g,"")},Ki=t=>String(t.items?.[0]?.productName||t.items?.[0]?.title||"").trim()||String(t.representativeName||"").trim()||"کالای بدون نام",Ms=t=>{const r=Et(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,d)=>s+Et(d.quantity),0)},Ls=t=>{const r=Et(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,d)=>{const b=Et(d.totalPrice);return b>0?s+b:s+Et(d.quantity)*Et(d.unitPrice??d.price)},0)},Yi=t=>t==="approved"?"تأیید شده":t==="received"?"دریافت شده":t==="rejected"?"رد شده":t==="reviewing"?"در حال بررسی":"در انتظار بررسی",Gi=({requests:t,representativeName:r,representativeCity:s,representativePhone:d,onClose:b})=>{const{printContent:n,isMobile:g}=Ba(),o=Array.isArray(t)?t:[],u=o.reduce((c,k)=>c+Ms(k),0),p=o.reduce((c,k)=>c+Ls(k),0);return(0,a.useEffect)(()=>{const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[]),typeof document>"u"?null:(0,Sn.createPortal)((0,e.jsxs)("div",{id:"return-print-root",dir:"rtl",children:[(0,e.jsx)("style",{children:`
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
      `}),(0,e.jsxs)("div",{className:"return-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش مرجوعی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("button",{type:"button",className:"return-print-close",onClick:b,children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"return-print-button",onClick:()=>n("return-print-root","چاپ درخواست مرجوعی"),children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"return-print-paper",children:[(0,e.jsxs)("header",{className:"return-print-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:r||"گزارش درخواست‌های مرجوعی"}),(0,e.jsx)("p",{children:s?`شهر: ${s}`:"گزارش درخواست‌های مرجوعی"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:"گزارش مرجوعی"}),(0,e.jsxs)("p",{children:["تاریخ چاپ: ",ua()]})]})]}),(0,e.jsxs)("section",{className:"return-print-cards",children:[(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:ua()})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"بازرگانی مهر امین"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"028-33236072"})]})]}),(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:r||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:s||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن نماینده:"}),(0,e.jsx)("strong",{children:d||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تعداد درخواست:"}),(0,e.jsx)("strong",{children:gt(o.length)})]})]})]}),(0,e.jsxs)("table",{className:"return-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"6%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"26%"},children:"عنوان مرجوعی"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"16%"},children:"مبلغ کل"}),(0,e.jsx)("th",{style:{width:"16%"},children:"تاریخ ثبت"}),(0,e.jsx)("th",{style:{width:"12%"},children:"وضعیت"}),(0,e.jsx)("th",{style:{width:"14%"},children:"توضیحات"})]})}),(0,e.jsx)("tbody",{children:o.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"درخواست مرجوعی برای چاپ وجود ندارد."})}):o.map((c,k)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:gt(k+1)}),(0,e.jsx)("td",{children:Ki(c)}),(0,e.jsx)("td",{children:gt(Ms(c))}),(0,e.jsxs)("td",{children:[gt(Ls(c))," تومان"]}),(0,e.jsx)("td",{children:c.returnDate||ua(c.createdAt)}),(0,e.jsx)("td",{children:Yi(c.status)}),(0,e.jsx)("td",{children:c.adminNote||"—"})]},c.id||k))})]}),(0,e.jsx)("table",{className:"return-print-table return-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل مرجوعی‌ها"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[gt(u)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[gt(p)," تومان"]})]})})}),(0,e.jsxs)("footer",{className:"return-print-footer",children:[(0,e.jsxs)("span",{children:["تعداد کل درخواست‌ها:"," ",gt(o.length)]}),(0,e.jsxs)("span",{children:["مجموع‌ها:"," ",gt(p)," تومان"]})]})]})]}),document.body)},ba="https://myshop-backend-8nu7.onrender.com/api",Wt={productId:"",title:"",brand:"",category:"",price:"",quantity:"1",confirmedReturn:!1},Vr=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),fe=t=>{const r=Number(Vr(t).replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Ee=t=>new Intl.NumberFormat("fa-IR").format(fe(t)),Se=t=>String(t??"").trim(),mr=t=>Vr(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/\s+/g," ").trim().toLowerCase(),qs=(t,r)=>{const s=mr(t),d=mr(r);return!!(s&&d&&s===d)},Xi=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/"),Zi=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},eo=t=>Se(t.items?.[0]?.productName)||Se(t.items?.[0]?.title)||Se(t.representativeName)||"کالای بدون نام",to=t=>{const r=fe(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,d)=>s+fe(d.quantity),0)},Us=t=>{const r=fe(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,d)=>{const b=fe(d.totalPrice);return b>0?s+b:s+fe(d.quantity)*fe(d.unitPrice??d.price)},0)},ro=t=>t==="approved"||t==="received"?{label:t==="received"?"دریافت شده":"تأیید شده",type:"approved"}:t==="rejected"?{label:"رد شده",type:"rejected"}:t==="reviewing"?{label:"در حال بررسی",type:"reviewing"}:{label:"در انتظار بررسی",type:"pending"},ao=({requests:t,loading:r,errorMessage:s,onRefresh:d,onRequestCreated:b})=>{const[n,g]=(0,a.useState)(Wt),[o,u]=(0,a.useState)([]),[p,c]=(0,a.useState)([]),[k,f]=(0,a.useState)([]),[j,m]=(0,a.useState)(!1),[h,w]=(0,a.useState)(!0),[x,I]=(0,a.useState)(""),[U,P]=(0,a.useState)(""),[O,H]=(0,a.useState)(!1),[T,A]=(0,a.useState)(""),y=t,$=r||h,B=s||x,D=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),W=F=>F.productName||F.name||F.title||"کالای بدون نام",J=F=>fe(F.unitPrice??F.price),C=F=>F?.name||F?.title||"",z=F=>{const Y=mr(F.productId||F.id),ee=mr(W(F));return k.find(i=>qs(i.id,Y))||k.find(i=>mr(C(i))===ee)},l=(F,Y)=>String(F.productId||F.id||Y),N=(0,a.useMemo)(()=>p.filter(F=>fe(F.quantity)>0),[p]),v=()=>N.find((F,Y)=>{const ee=l(F,Y),i=z(F),E=String(i?.id||F.productId||F.id||"");return ee===n.productId||E===n.productId}),R=()=>{const F=v();if(!F)return"";const Y=N.indexOf(F);return l(F,Y)},q=async()=>{w(!0),I("");try{const[F,Y]=await Promise.all([ae.get(`${ba}/representative/dashboard`,{headers:D()}),ae.get(`${ba}/products`,{headers:D()})]);c(Array.isArray(F.data.data?.warehouse?.items)?F.data.data?.warehouse?.items||[]:[]);const ee=F.data.data;A(Se(ee?.representative?.phone)||Se(ee?.representative?.phoneNumber)||Se(ee?.user?.phone)||Se(ee?.user?.phoneNumber)||Se(ee?.phone)||Se(ee?.phoneNumber)),f(Array.isArray(Y.data.data)?Y.data.data:[])}catch(F){I(F.response?.data?.error||F.response?.data?.message||"خطا در دریافت اطلاعات.")}finally{w(!1)}};(0,a.useEffect)(()=>{q()},[]),(0,a.useEffect)(()=>{if(!n.productId){g(Wt);return}v()||g(Wt)},[n.productId,N,k]);const S=(0,a.useMemo)(()=>y.filter(F=>String(F.status)==="pending"||String(F.status)==="registered"||String(F.status)==="reviewing").length,[y]);(0,a.useMemo)(()=>y.filter(F=>F.status==="approved"||F.status==="received").length,[y]),(0,a.useMemo)(()=>y.filter(F=>F.status==="rejected").length,[y]);const _=(0,a.useMemo)(()=>y.find(F=>!!Se(F.representativeName))?.representativeName||"",[y]),te=(0,a.useMemo)(()=>y.find(F=>!!Se(F.representativeCity))?.representativeCity||"",[y]),G=(0,a.useMemo)(()=>{const F=y.find(Y=>!!Se(Y.representativePhone))?.representativePhone||"";return Se(F)||T},[y,T]);(0,a.useMemo)(()=>y.reduce((F,Y)=>F+Us(Y),0),[y]);const de=F=>{const Y=N.find((be,$e)=>l(be,$e)===F);if(!Y){g(Wt);return}const ee=z(Y),i=W(Y),E=fe(ee?.price),V=J(Y),ne=E>0?E:V,pe=String(ee?.id||Y.productId||Y.id||"");g(be=>({...be,productId:pe,title:i,brand:Se(Y.brand),category:Se(Y.category)||Se(ee?.category),price:String(ne),quantity:"1"})),I(""),P("")},ie=()=>{const F=v();if(!F){I("ابتدا یک کالا از انبار انتخاب کنید.");return}const Y=Se(n.title),ee=fe(n.price),i=fe(n.quantity);if(!n.productId){I("کالای انتخاب‌شده معتبر نیست.");return}const E=fe(F.quantity);if(E<=0){I("کالای انتخاب‌شده موجودی ندارد.");return}if(!Number.isSafeInteger(i)||i<=0){I("تعداد مرجوعی باید عدد صحیح و بیشتر از صفر باشد.");return}if(i>E){I(`تعداد مرجوعی نمی‌تواند بیشتر از موجودی انبار باشد. موجودی فعلی: ${Ee(E)} قلم`);return}if(ee<=0){I("برای این کالا قیمت معتبری ثبت نشده است.");return}if(o.some(V=>qs(V.productId,n.productId))){I("این کالا قبلاً به لیست مرجوعی اضافه شده است.");return}u(V=>[...V,{id:`${n.productId}-${Date.now()}`,productId:n.productId,title:Y,brand:Se(n.brand),category:Se(n.category),price:ee,quantity:String(i),maxQuantity:E}]),g(V=>({...Wt,confirmedReturn:V.confirmedReturn})),I(""),P("")},he=F=>{u(Y=>Y.filter(ee=>ee.id!==F)),I(""),P("")},xe=(F,Y)=>{const ee=Vr(Y);u(i=>i.map(E=>E.id===F?{...E,quantity:ee}:E)),I(""),P("")},ge=(0,a.useMemo)(()=>{const F=o.reduce((ee,i)=>ee+Math.max(0,fe(i.quantity)),0),Y=o.reduce((ee,i)=>ee+Math.max(0,fe(i.quantity))*i.price,0);return{itemsCount:o.length,totalQty:F,totalPrice:Y}},[o]),Ie=async F=>{F.preventDefault();const Y=Xi();if(N.length===0){I("کالای قابل مرجوعی در انبار شما وجود ندارد.");return}if(o.length===0){I("حداقل یک کالا را به لیست مرجوعی اضافه کنید.");return}const ee=o.find(E=>{const V=fe(E.quantity);return!Number.isSafeInteger(V)||V<=0||V>E.maxQuantity||E.price<=0||!E.productId||!E.title});if(ee){if(fe(ee.quantity)>ee.maxQuantity){I(`تعداد مرجوعی کالای «${ee.title}» بیشتر از موجودی انبار است.`);return}I(`اطلاعات کالای «${ee.title||"نامشخص"}» معتبر نیست.`);return}if(!n.confirmedReturn){I("برای ثبت درخواست باید تیک تأیید مرجوعی را فعال کنید.");return}const i=o.map(E=>{const V=fe(E.quantity);return{productId:E.productId,productName:E.title,brand:E.brand,category:E.category,quantity:V,unitPrice:E.price,totalPrice:V*E.price}});m(!0),I(""),P("");try{const E=(await ae.post(`${ba}/return-requests/my`,{items:i,returnDate:Y,reason:"مرجوعی ثبت‌شده و تأییدشده توسط نماینده",confirmedReturn:!0},{headers:D()})).data.data;E?b(E):d(),await q(),u([]),g(Wt),P(`درخواست مرجوعی شامل ${Ee(i.length)} کالا با موفقیت در تاریخ ${Y} ثبت شد.`)}catch(E){I(E.response?.data?.error||E.response?.data?.message||E.message||"خطا در ثبت درخواست مرجوعی.")}finally{m(!1)}},ue=()=>{$||y.length===0||H(!0)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"return-requests-page space-y-6",children:[(0,e.jsxs)("section",{className:"return-screen-only overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-rose-50 via-white to-amber-50 p-5 dark:border-gray-700 dark:from-rose-950/20 dark:via-gray-900 dark:to-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/25",children:(0,e.jsx)(Ma,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"ثبت درخواست مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"کالا را از لیست انتخاب کن، به لیست مرجوعی اضافه کن و در نهایت ثبت کن."})]})]})}),(0,e.jsxs)("form",{onSubmit:Ie,className:"grid grid-cols-1 gap-5 p-5 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"انتخاب کالا از انبار"}),(0,e.jsxs)("select",{value:R(),onChange:F=>{de(F.target.value)},disabled:$||N.length===0,className:"mt-2 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition-all focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:$?"در حال دریافت کالاهای انبار...":N.length===0?"کالای قابل مرجوعی در انبار شما وجود ندارد":"یک کالا را انتخاب کنید"}),N.map((F,Y)=>{const ee=l(F,Y),i=z(F),E=C(i)||W(F),V=fe(i?.price),ne=V>0?V:J(F),pe=fe(F.quantity);return(0,e.jsxs)("option",{value:ee,children:[E," — موجودی:"," ",Ee(pe)," — قیمت:"," ",Ee(ne)," تومان"]},`${ee}-${Y}`)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs text-gray-400 dark:text-gray-500",children:"فقط کالاهایی با موجودی بیشتر از صفر نمایش داده می‌شوند."})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"قیمت کالا"}),(0,e.jsx)("input",{type:"text",value:n.price?`${Ee(n.price)} تومان`:"",readOnly:!0,placeholder:"پس از انتخاب کالا نمایش داده می‌شود",className:"mt-2 w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-emerald-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-emerald-300"})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:v()?fe(v()?.quantity):void 0,value:n.quantity,onChange:F=>{g(Y=>({...Y,quantity:Vr(F.target.value)}))},disabled:!n.productId||$,className:"mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300",children:(0,e.jsx)(tt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-black text-rose-700 dark:text-rose-300",children:"تاریخ ثبت مرجوعی خودکار است"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-rose-600 dark:text-rose-400",children:"تاریخ امروز هنگام ثبت درخواست به‌صورت خودکار ذخیره می‌شود."})]})]})}),(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"button",onClick:ie,disabled:$||!n.productId,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-rose-800 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20",children:[(0,e.jsx)(ur,{className:"h-5 w-5"}),"افزودن کالا به لیست مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-400 dark:text-gray-500",children:"پس از انتخاب کالا و وارد کردن تعداد، آن را به لیست مرجوعی اضافه کنید."})]}),o.length>0?(0,e.jsxs)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50/60 p-4 md:col-span-2 dark:border-rose-900/50 dark:bg-rose-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-rose-200 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-rose-900/50",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-rose-800 dark:text-rose-200",children:"کالاهای انتخاب‌شده برای مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-bold text-rose-600 dark:text-rose-300",children:"قبل از ثبت نهایی، تعداد هر کالا را بررسی کنید."})]}),(0,e.jsxs)("span",{className:"w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black text-rose-700 shadow-sm dark:bg-gray-900 dark:text-rose-300",children:[Ee(ge.itemsCount)," ","نوع کالا"]})]}),(0,e.jsx)("div",{className:"mt-4 space-y-3",children:o.map((F,Y)=>{const ee=fe(F.quantity)*F.price;return(0,e.jsx)("div",{className:"rounded-xl border border-rose-100 bg-white p-4 dark:border-rose-900/40 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[Ee(Y+1),". ",F.title]}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[F.brand?`برند: ${F.brand}`:"برند: —",F.category?` · دسته‌بندی: ${F.category}`:""]}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-black text-emerald-600 dark:text-emerald-400",children:["قیمت:"," ",Ee(F.price)," ","تومان · موجودی انبار:"," ",Ee(F.maxQuantity)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-xs font-black text-gray-600 dark:text-gray-300",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:F.maxQuantity,value:F.quantity,onChange:i=>{xe(F.id,i.target.value)},className:"mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-black text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-32"})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-500/10",children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ این ردیف"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-emerald-700 dark:text-emerald-300",children:[Ee(ee)," ","تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{he(F.id)},className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-black text-red-700 transition-colors hover:bg-red-100 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20",children:[(0,e.jsx)(Ve,{className:"h-4 w-4"}),"حذف"]})]})]})},F.id)})}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 border-t border-rose-200 pt-4 sm:grid-cols-3 dark:border-rose-900/50",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعداد نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-rose-700 dark:text-rose-300",children:Ee(ge.itemsCount)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-blue-700 dark:text-blue-300",children:[Ee(ge.totalQty)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-emerald-700 dark:text-emerald-300",children:[Ee(ge.totalPrice)," ","تومان"]})]})]})]}):(0,e.jsx)("div",{className:"rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm font-bold text-gray-500 md:col-span-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:"هنوز کالایی به لیست مرجوعی اضافه نشده است."}),(0,e.jsxs)("label",{className:"flex cursor-pointer items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4 transition-colors hover:bg-rose-100 md:col-span-2 dark:border-rose-900/40 dark:bg-rose-950/20 dark:hover:bg-rose-950/35",children:[(0,e.jsx)("input",{type:"checkbox",checked:n.confirmedReturn,onChange:F=>{g(Y=>({...Y,confirmedReturn:F.target.checked})),I("")},disabled:$||N.length===0,className:"h-5 w-5 accent-rose-600 disabled:cursor-not-allowed"}),(0,e.jsxs)("span",{className:"flex items-center gap-2 text-sm font-black text-rose-700 dark:text-rose-300",children:[(0,e.jsx)(Ga,{className:"h-5 w-5 shrink-0"}),"تأیید می‌کنم که کالا جهت مرجوعی تحویل یا ارسال شده است."]})]}),B?(0,e.jsx)("div",{className:"rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700 md:col-span-2 dark:bg-red-950/30 dark:text-red-300",children:B}):null,U?(0,e.jsx)("div",{className:"rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700 md:col-span-2 dark:bg-emerald-950/30 dark:text-emerald-300",children:U}):null,(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"submit",disabled:j||$||N.length===0||o.length===0,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-rose-500/25 transition-all hover:from-rose-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",children:[j?(0,e.jsx)(as,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Fa,{className:"h-5 w-5"}),j?"در حال ثبت درخواست...":`ثبت درخواست مرجوعی (${Ee(ge.itemsCount)} کالا)`]}),!$&&N.length===0?(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"کالای قابل مرجوعی در انبار شما وجود ندارد."}):null]})]})]}),(0,e.jsxs)("section",{className:"return-print-area overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"return-screen-only flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:(0,e.jsx)(Wr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت بررسی درخواست‌های ثبت‌شده"})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-amber-50 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[Ee(S)," ","در انتظار بررسی"]}),(0,e.jsxs)("button",{type:"button",onClick:ue,disabled:$||y.length===0,className:"flex min-h-9 items-center gap-2 rounded-lg bg-gray-800 px-3 text-xs font-black text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:d,disabled:$,className:"flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-rose-500/10",title:"بروزرسانی","aria-label":"بروزرسانی",children:(0,e.jsx)(Fe,{className:`h-4 w-4 ${$?"animate-spin":""}`})})]})]}),$?(0,e.jsxs)("div",{className:"return-screen-only flex items-center justify-center gap-2 p-10 text-sm font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(as,{className:"h-5 w-5 animate-spin"}),"در حال دریافت اطلاعات..."]}):y.length===0?(0,e.jsxs)("div",{className:"return-screen-only p-10 text-center",children:[(0,e.jsx)(Wr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز درخواست مرجوعی ثبت نکرده‌اید."})]}):(0,e.jsx)("div",{className:"return-screen-only divide-y divide-gray-100 dark:divide-gray-700",children:y.map(F=>{const Y=ro(F.status);return(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:eo(F)}),(0,e.jsxs)("p",{className:"mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400",children:[Ee(Us(F))," ","تومان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:["تعداد:"," ",Ee(to(F))," ","قلم · تاریخ ثبت:"," ",F.returnDate||Zi(F.createdAt)]}),Y.type==="rejected"&&F.adminNote?(0,e.jsxs)("p",{className:"mt-3 rounded-xl bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:bg-red-950/30 dark:text-red-300",children:["دلیل رد ادمین:"," ",F.adminNote]}):null]}),Y.type==="approved"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",children:[(0,e.jsx)(Ga,{className:"h-4 w-4"}),Y.label]}):null,Y.type==="rejected"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-black text-red-700 dark:bg-red-500/15 dark:text-red-300",children:[(0,e.jsx)(et,{className:"h-4 w-4"}),Y.label]}):null,(Y.type==="pending"||Y.type==="reviewing")&&(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[(0,e.jsx)(un,{className:"h-4 w-4"}),Y.label]})]},F.id)})})]})]}),O&&(0,e.jsx)(Gi,{requests:y,representativeName:_,representativeCity:te,representativePhone:G,onClose:()=>H(!1)})]})},St=t=>{const r=Number(String(t??"").replace(/[۰-۹]/g,s=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(s))).replace(/[٠-٩]/g,s=>String("٠١٢٣٤٥٦٧٨٩".indexOf(s))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Lr=t=>new Intl.NumberFormat("fa-IR").format(St(t)),ya=t=>`${Lr(t)} تومان`,Ha=t=>{const r=St(t.totalPrice);return r>0?r:St(t.quantity)*St(t.unitPrice)},Os=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Hr=t=>Array.isArray(t?.items)?t.items:[],so=t=>{const r=St(t?.totalItems);return r>0?r:Hr(t).reduce((s,d)=>s+St(d.quantity),0)},no=t=>{const r=St(t?.totalAmount);return r>0?r:Hr(t).reduce((s,d)=>s+Ha(d),0)},lo=t=>({companyName:t?.companyName||"بازرگانی مهر امین",companySubtitle:t?.companySubtitle||"سامانه مدیریت فروش",logoUrl:t?.logoUrl||"../company-logo.png",primaryColor:t?.primaryColor||"#0f766e",secondaryColor:t?.secondaryColor||"#ecfdf5",textColor:t?.textColor||"#111827",fontFamily:t?.fontFamily||"Tahoma, Arial, sans-serif",headerTitle:t?.headerTitle||"گزارش اعلام فروش",footerText:t?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:t?.showLogo??!0,showCompanyName:t?.showCompanyName??!0,showRepresentativeInfo:t?.showRepresentativeInfo??!0,showReportNumber:t?.showReportNumber??!0,showDate:t?.showDate??!0}),_s=({report:t,reports:r,settings:s,onClose:d})=>{const{printContent:b,isMobile:n}=Ba(),g=lo(s),o=Array.isArray(r),u=o?r?.[0]:t,p=o?(r||[]).flatMap(j=>Hr(j)):Hr(t),c=o?p.reduce((j,m)=>j+St(m.quantity),0):so(t),k=o?p.reduce((j,m)=>j+Ha(m),0):no(t),f=()=>{b("sales-print-root","چاپ اعلام فروش")};return(0,e.jsxs)("div",{className:"sales-print-root",dir:"rtl",style:{fontFamily:g.fontFamily},children:[(0,e.jsxs)("div",{className:"sales-print-screen",children:[(0,e.jsxs)("div",{className:"sales-print-topbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:o?"پیش‌نمایش همه گزارش‌ها":"پیش‌نمایش گزارش فروش"}),(0,e.jsx)("p",{children:o?"همه گزارش‌ها در یک گزارش چاپ می‌شوند.":"گزارش فروش آماده چاپ است."})]}),(0,e.jsx)("button",{type:"button",onClick:d,className:"sales-print-close",children:"بستن"})]}),(0,e.jsx)("div",{className:"sales-print-paper",children:(0,e.jsx)(Bs,{report:u,items:p,totalItems:c,totalAmount:k,settings:g,isBulk:o})}),(0,e.jsxs)("div",{className:"sales-print-actions",children:[(0,e.jsx)("button",{type:"button",onClick:d,className:"sales-print-cancel",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:f,className:"sales-print-submit",children:o?"چاپ همه گزارش‌ها":"چاپ گزارش"})]})]}),(0,e.jsx)("div",{className:"sales-print-only",children:(0,e.jsx)(Bs,{report:u,items:p,totalItems:c,totalAmount:k,settings:g,isBulk:o})}),(0,e.jsx)("style",{children:`
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
      `})]})},Bs=({report:t,items:r,totalItems:s,totalAmount:d,settings:b,isBulk:n})=>{const g={"--print-primary-color":b.primaryColor,"--print-secondary-color":b.secondaryColor,"--print-text-color":b.textColor};return(0,e.jsxs)("div",{className:"print-content",style:g,children:[(0,e.jsxs)("header",{className:"print-header",children:[(0,e.jsxs)("div",{className:"print-company",children:[b.showLogo&&b.logoUrl?(0,e.jsx)("img",{src:b.logoUrl,alt:"لوگو",className:"print-logo"}):null,(0,e.jsxs)("div",{children:[b.showCompanyName?(0,e.jsx)("h1",{children:t?.representativeName||b.companyName}):null,(0,e.jsx)("p",{children:b.companySubtitle})]})]}),(0,e.jsxs)("div",{className:"print-header-left",children:[(0,e.jsx)("h2",{children:n?"گزارش تجمیعی اعلام فروش":b.headerTitle}),b.showDate?(0,e.jsxs)("p",{children:["تاریخ چاپ: ",Os()]}):null]})]}),(0,e.jsxs)("section",{className:"print-info",children:[(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Os()})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"بازرگانی مهر امین"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"028-33236072"})]})]}),(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:t?.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"کد نماینده:"}),(0,e.jsx)("strong",{children:t?.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:t?.representativeCity||"—"})]})]})]}),(0,e.jsxs)("table",{className:"print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"عنوان"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"قیمت"}),(0,e.jsx)("th",{children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{children:r.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:5,children:"کالایی در این گزارش وجود ندارد."})}):r.map((o,u)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:Lr(u+1)}),(0,e.jsx)("td",{children:o.productName||"کالای بدون نام"}),(0,e.jsxs)("td",{children:[Lr(o.quantity)," قلم"]}),(0,e.jsx)("td",{children:ya(o.unitPrice)}),(0,e.jsx)("td",{children:ya(Ha(o))})]},o.productId||`print-item-${u}`))})]}),(0,e.jsx)("table",{className:"print-table print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[Lr(s)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsx)("td",{style:{width:"20%"},children:ya(d)})]})})}),(0,e.jsxs)("div",{className:"print-signatures",children:[(0,e.jsxs)("div",{children:["امضای نماینده",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["تأیید مسئول فروش",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["مهر شرکت",(0,e.jsx)("i",{})]})]}),(0,e.jsx)("footer",{className:"print-footer",children:b.footerText})]})},fa="https://myshop-backend-8nu7.onrender.com/api",io=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),je=t=>{const r=io(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Be=t=>new Intl.NumberFormat("fa-IR").format(je(t)),Tt=t=>`${Be(t)} تومان`,Ws=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},ja=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),oo=t=>{const r=je(t.totalPrice);return r>0?r:je(t.quantity)*je(t.unitPrice)},Vs=t=>je(t.itemsCount)>0?je(t.itemsCount):Array.isArray(t.items)?t.items.length:0,Hs=t=>je(t.totalItems)>0?je(t.totalItems):Array.isArray(t.items)?t.items.reduce((r,s)=>r+je(s.quantity),0):0,Qs=t=>je(t.totalAmount)>0?je(t.totalAmount):Array.isArray(t.items)?t.items.reduce((r,s)=>r+oo(s),0):0,co=({onSaleRegistered:t,printSettings:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)({}),[g,o]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!1),[c,k]=(0,a.useState)(!1),[f,j]=(0,a.useState)(!1),[m,h]=(0,a.useState)([]),[w,x]=(0,a.useState)(""),[I,U]=(0,a.useState)({allowed:!0}),[P,O]=(0,a.useState)(null),[H,T]=(0,a.useState)(!1),A=I.allowed===!1,y=(0,a.useMemo)(()=>({companyName:r?.companyName||"نام شرکت",companySubtitle:r?.companySubtitle||"گزارش اعلام فروش",logoUrl:r?.logoUrl||"",primaryColor:r?.primaryColor||"#0f766e",secondaryColor:r?.secondaryColor||"#ecfdf5",textColor:r?.textColor||"#111827",fontFamily:r?.fontFamily||"Tahoma",headerTitle:r?.headerTitle||"گزارش اعلام فروش",footerText:r?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:r?.showLogo??!0,showCompanyName:r?.showCompanyName??!0,showRepresentativeInfo:r?.showRepresentativeInfo??!0,showReportNumber:r?.showReportNumber??!0,showDate:r?.showDate??!0}),[r]),$=(0,a.useCallback)(async()=>{p(!0);try{const v=await ae.get(`${fa}/sales-from-warehouse/products`,{headers:ja()}),R=Array.isArray(v.data.data)?v.data.data:[];d(R),U(v.data.salesPeriod||{allowed:!0}),n(q=>{const S={};return R.forEach(_=>{const te=String(_.productId||_.id||"");S[te]=q[te]||""}),S})}catch(v){const R=v;d([]),x(`❌ ${R.response?.data?.error||R.response?.data?.message||"خطا در دریافت موجودی انبار."}`)}finally{p(!1)}},[]),B=(0,a.useCallback)(async()=>{k(!0);try{const v=await ae.get(`${fa}/sales-from-warehouse/my`,{headers:ja()});h(Array.isArray(v.data.data)?v.data.data:[]),U(v.data.salesPeriod||{allowed:!0})}catch(v){const R=v;x(`❌ ${R.response?.data?.error||R.response?.data?.message||"خطا در دریافت تاریخچه فروش."}`)}finally{k(!1)}},[]);(0,a.useEffect)(()=>{$(),B()},[$,B]);const D=(0,a.useMemo)(()=>s.map(v=>{const R=String(v.productId||v.id||""),q=je(b[R]||0);return{product:v,productId:R,saleQuantity:q,totalAmount:q*je(v.unitPrice)}}).filter(v=>v.saleQuantity>0),[s,b]),W=D.length,J=D.reduce((v,R)=>v+R.saleQuantity,0),C=D.reduce((v,R)=>v+R.totalAmount,0),z=(v,R)=>{if(A){x(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${I.todayJalali?` امروز ${I.todayJalali} است.`:""}${I.nextAllowedAtFa?` نوبت بعدی: ${I.nextAllowedAtFa}.`:""}`);return}const q=String(v.productId||v.id||""),S=je(b[q]||0),_=je(v.quantity);if(R>0&&S>=_){x(`❌ تعداد «${v.productName}» نمی‌تواند بیشتر از موجودی (${Be(_)}) باشد.`);return}const te=Math.max(0,Math.min(_,S+R));n(G=>({...G,[q]:te>0?String(te):""})),x("")},l=async v=>{if(v.preventDefault(),A){x(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${I.todayJalali?` امروز ${I.todayJalali} است.`:""}${I.nextAllowedAtFa?` نوبت بعدی: ${I.nextAllowedAtFa}.`:""}`);return}if(D.length===0){x("❌ حداقل برای یک کالا تعداد بیشتر از صفر وارد کنید.");return}if(!g){x("❌ برای ثبت فروش باید تأیید صحت اطلاعات را فعال کنید.");return}try{j(!0),x("");const R=await ae.post(`${fa}/sales-from-warehouse`,{confirmedSale:!0,items:D.map(q=>({productId:q.productId,quantity:q.saleQuantity}))},{headers:ja()});R.data.data&&h(q=>[R.data.data,...q]),U(R.data.salesPeriod||{allowed:!0}),R.data.warehouse?d(R.data.warehouse.filter(q=>je(q.quantity)>0)):await $(),n({}),o(!1),x(`✅ ${R.data.message||"فروش با موفقیت ثبت شد و موجودی انبار به‌روزرسانی شد."}`),await B(),t?.()}catch(R){const q=R;q.response?.data?.salesPeriod&&U(q.response.data.salesPeriod),x(`❌ ${q.response?.data?.error||q.response?.data?.message||"خطا در ثبت اعلام فروش."}`)}finally{j(!1)}},N=()=>`ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${I.todayJalali?` امروز ${I.todayJalali} است.`:""}${I.nextAllowedAtFa?` نوبت بعدی: ${I.nextAllowedAtFa}.`:""}`;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"sales-announcement-page space-y-6",children:[(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(gn,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"ثبت اعلام فروش از انبار"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-7 text-gray-500 dark:text-gray-400",children:"فقط کالاهای واقعی موجود در انبار شما نمایش داده می‌شوند."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Promise.all([$(),B()])},disabled:u||c,className:"inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Fe,{className:`h-4 w-4 ${u||c?"animate-spin":""}`}),"بروزرسانی"]})]})}),(0,e.jsxs)("form",{onSubmit:l,className:"p-5 md:p-6",children:[A?(0,e.jsx)("div",{className:"mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black text-amber-900 dark:text-amber-100",children:"ثبت اعلام فروش فعلاً غیرفعال است"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200",children:N()})]})]})}):null,u?(0,e.jsx)("div",{className:"flex min-h-48 items-center justify-center",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(le,{className:"mx-auto h-8 w-8 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"در حال دریافت کالاهای انبار..."})]})}):s.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(pr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"کالای قابل فروش در انبار شما وجود ندارد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:s.map(v=>{const R=String(v.productId||v.id||""),q=je(b[R]||0),S=je(v.quantity),_=q*je(v.unitPrice);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:v.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-2.5 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"موجودی"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Be(v.quantity)," ","قلم"]})]}),(0,e.jsx)("div",{className:"rounded-xl bg-indigo-50 p-2.5 text-center dark:bg-indigo-950/30",children:(0,e.jsx)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:Tt(v.unitPrice)})})]}),(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,1)},disabled:f||A||q>=S,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(ur,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Be(q)}),(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,-1)},disabled:f||A||q<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(ts,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-0.5 font-black text-emerald-900 dark:text-emerald-100",children:Tt(_)})]})]})]},R)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto rounded-2xl border border-gray-100 lg:block dark:border-gray-700",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"موجودی انبار"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ فروش"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:s.map(v=>{const R=String(v.productId||v.id||""),q=je(b[R]||0),S=je(v.quantity),_=q*je(v.unitPrice);return(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-gray-800 dark:text-white",children:v.productName}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Be(v.quantity)," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-gray-600 dark:text-gray-300",children:Tt(v.unitPrice)}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("div",{className:"flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,1)},disabled:f||A||q>=S,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(ur,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Be(q)}),(0,e.jsx)("button",{type:"button",onClick:()=>{z(v,-1)},disabled:f||A||q<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(ts,{className:"h-5 w-5"})})]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Tt(_)})]},R)})})]})}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"کالاهای انتخاب‌شده"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-indigo-900 dark:text-indigo-100",children:[Be(W)," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-amber-900 dark:text-amber-100",children:[Be(J)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-emerald-900 dark:text-emerald-100",children:Tt(C)})]})]}),(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("label",{className:"flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("input",{type:"checkbox",checked:g,onChange:v=>{o(v.target.checked),x("")},disabled:f||A,className:"mt-0.5 h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"}),(0,e.jsx)("span",{className:"leading-6",children:"تعداد کالاهای فروخته‌شده را تأیید می‌کنم. پس از ثبت، موجودی کالاها از انبار من کم می‌شود."})]}),(0,e.jsx)("button",{type:"submit",disabled:f||A||D.length===0||!g,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-700 sm:w-auto",children:f?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}),"در حال ثبت..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(La,{className:"h-5 w-5"}),"ثبت نهایی"]})})]})]}),w?(0,e.jsx)("div",{className:`mt-5 rounded-xl px-4 py-3 text-sm font-bold ${w.startsWith("✅")?"bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300":"bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300"}`,children:w}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)(We,{className:"h-6 w-6 text-emerald-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"تاریخچه اعلام فروش من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"گزارش‌های ثبت‌شده از طریق سرور"})]})]}),m.length>0?(0,e.jsxs)("button",{type:"button",onClick:()=>{T(!0)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ همه گزارش‌ها"]}):null]})}),c?(0,e.jsx)("div",{className:"flex min-h-[180px] items-center justify-center",children:(0,e.jsx)(le,{className:"h-7 w-7 animate-spin text-cyan-500"})}):m.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(We,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز اعلام فروشی ثبت نکرده‌اید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-5 lg:hidden",children:m.map(v=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:Ws(v.createdAt||v.saleDate)})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{O(v)},className:"inline-flex shrink-0 items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-indigo-50 p-3 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"تعداد نوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:[Be(Vs(v))," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Be(Hs(v))," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 font-black text-emerald-900 dark:text-emerald-100",children:Tt(Qs(v))})]})]})]},v.id))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto lg:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد نوع کالا"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:m.map(v=>(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-600 dark:text-gray-300",children:Ws(v.createdAt||v.saleDate)}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-indigo-700 dark:text-indigo-300",children:[Be(Vs(v))," ","کالا"]}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Be(Hs(v))," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Tt(Qs(v))}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{O(v)},className:"inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Oe,{className:"h-4 w-4"}),"چاپ گزارش"]})})]},v.id))})]})})]})]})]}),P?(0,e.jsx)(_s,{report:P,settings:y,onClose:()=>{O(null)}}):null,H?(0,e.jsx)(_s,{reports:m,settings:y,onClose:()=>{T(!1)}}):null]})},Rr="https://myshop-backend-8nu7.onrender.com/api",xo=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Je=t=>{const r=xo(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},mo=t=>new Intl.NumberFormat("fa-IR").format(Je(t)),po=t=>`${mo(t)} تومان`,va=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),ho=(t,r)=>{const s=Je(t?.quantity),d=Je(t?.unitPrice);return{id:String(t?.id||t?.productId||`inventory-item-${r}`),title:t?.productName||t?.title||t?.name||"بدون عنوان",brand:t?.brand||"",category:t?.category||"",quantity:s,unitPrice:d,totalPrice:t?.totalPrice!==void 0?Je(t.totalPrice):s*d}},go=(t,r)=>({id:String(t?.id||`shipment-${r}`),title:t?.receiver||t?.warehouse||"ارسال بار",quantity:Je(t?.totalItems??t?.itemsCount),amount:Je(t?.totalItems),createdAt:t?.createdAt||t?.updatedAt||void 0}),uo=({activeSection:t})=>{const[r,s]=(0,a.useState)({}),[d,b]=(0,a.useState)([]),[n,g]=(0,a.useState)(!0),[o,u]=(0,a.useState)(!1),[p,c]=(0,a.useState)(""),[k,f]=(0,a.useState)([]),[j,m]=(0,a.useState)(!1),h=(0,a.useCallback)(async()=>{g(!0),c("");try{const $=await ae.get(`${Rr}/representative/dashboard`,{headers:va()});s($.data.data||{})}catch($){c($.response?.data?.error||$.response?.data?.message||"خطا در دریافت اطلاعات داشبورد نمایندگی.")}finally{g(!1)}},[]),w=(0,a.useCallback)(async()=>{u(!0);try{const $=await ae.get(`${Rr}/return-requests/my`,{headers:va()});b(Array.isArray($.data.data)?$.data.data:[])}catch($){c($.response?.data?.error||$.response?.data?.message||"خطا در دریافت درخواست‌های مرجوعی.")}finally{u(!1)}},[]),x=(0,a.useCallback)(async()=>{m(!0);try{const $=await ae.get(`${Rr}/sales-from-warehouse/my`,{headers:va()});f(Array.isArray($.data.data)?$.data.data:[])}catch($){console.error("خطا در دریافت فروش‌ها:",$),f([])}finally{m(!1)}},[]);(0,a.useEffect)(()=>{h()},[h]),(0,a.useEffect)(()=>{x()},[x]),(0,a.useEffect)(()=>{t==="return-request"&&w()},[t,w]);const I=(0,a.useMemo)(()=>(Array.isArray(r.warehouse?.items)?r.warehouse?.items:[]).map(ho),[r.warehouse?.items]),U=(0,a.useMemo)(()=>(Array.isArray(r.shipments)?r.shipments:[]).map(go),[r.shipments]),P=(0,a.useMemo)(()=>I.reduce(($,B)=>$+Je(B.quantity),0),[I]),O=(0,a.useMemo)(()=>I.reduce(($,B)=>$+Je(B.totalPrice),0),[I]),H=(0,a.useMemo)(()=>{const $=new Date,B=new Date($);return B.setDate(B.getDate()-9),k.filter(D=>{const W=D.createdAt?new Date(D.createdAt):null;return W?W>=B&&W<=$:!1}).reduce((D,W)=>D+Je(W.totalAmount),0)},[k]),T=(0,a.useMemo)(()=>{const $=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit"}).formatToParts(new Date),B=`${$.find(D=>D.type==="year")?.value||""}/${$.find(D=>D.type==="month")?.value||""}`;return k.filter(D=>{const W=String(D.saleDate||"");if(!W)return!1;const J=W.split("/");if(J.length<3)return!1;const C=J[0],z=J[1],l=parseInt(J[2],10);return`${C}/${z}`!==B?!1:[10,20,30].includes(l)}).reduce((D,W)=>D+Je(W.totalAmount),0)},[k]),A=r.representative||{},y=Je(A.totalFinancialCommitment);if(t==="my-shipments"){const $=sessionStorage.getItem("token")||sessionStorage.getItem("accessToken")||sessionStorage.getItem("authToken")||"";return(0,e.jsx)(Hi,{apiUrl:Rr,token:$})}return n?(0,e.jsx)("div",{className:"flex min-h-[320px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(le,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اطلاعات نمایندگی..."})]})}):p&&t!=="return-request"&&t!=="sales-reports"?(0,e.jsxs)("div",{className:"rounded-3xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/20",children:[(0,e.jsx)("p",{className:"font-black text-red-700 dark:text-red-300",children:p}),(0,e.jsxs)("button",{type:"button",onClick:()=>{h()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):t==="dashboard"?(0,e.jsx)(Li,{fullName:A.name||"—",territory:A.city||"—",creditAmount:y,inventoryItemCount:P,inventoryValue:O,salesLast10Days:H,salesInAllowedDays:T}):t==="orders"?(0,e.jsx)(Ji,{orders:U}):t==="warehouse"?(0,e.jsx)(Bi,{items:I,representativeName:A.name||"",representativeCity:A.city||"",representativePhone:A.phone||"",representativeAddress:A.city||""}):t==="return-request"?(0,e.jsx)(ao,{requests:d,loading:o,errorMessage:p,onRefresh:()=>{w()},onRequestCreated:$=>{b(B=>[$,...B])}}):t==="sales-reports"?(0,e.jsx)(co,{onSaleRegistered:()=>{h()}}):t==="profile"?(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Cl,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"پروفایل نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات ثبت‌شده توسط مدیریت سیستم"})]})]})}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نام و نام خانوادگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:A.name||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:A.code||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"محدوده نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:A.city||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"شماره تماس"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:A.phone||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعهد مالی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-600 dark:text-emerald-400",children:po(y)})]})]})]}):(0,e.jsxs)("section",{className:"rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(pr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"بخش موردنظر پیدا نشد."})]})},bo="https://myshop-backend-8nu7.onrender.com/api",yo=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",Js=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},fo=t=>{switch(t){case"approved":return{label:"تأیید شده",color:"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",icon:ve};case"rejected":return{label:"رد شده",color:"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",icon:Ce};default:return{label:"در انتظار بررسی",color:"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",icon:un}}},jo=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),g=(0,a.useCallback)(async()=>{d(!0),n("");try{const o=yo();if(!o){n("توکن ورود پیدا نشد. دوباره وارد شوید.");return}const u=await fetch(`${bo}/warranties/my`,{method:"GET",headers:{Authorization:`Bearer ${o}`,Accept:"application/json"}}),p=await u.json();if(!u.ok||!p.success)throw new Error(p.error||"دریافت گارانتی‌ها ناموفق بود.");r(p.data||[])}catch(o){n(o instanceof Error?o.message:"خطا در دریافت گارانتی‌ها.")}finally{d(!1)}},[]);return(0,a.useEffect)(()=>{g()},[g]),s?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(le,{className:"h-8 w-8 animate-spin text-sky-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-slate-600 dark:text-slate-300",children:"در حال دریافت گارانتی‌های شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-slate-100 pb-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-white",children:[(0,e.jsx)(za,{className:"h-5 w-5 text-sky-600"}),"گارانتی‌های ثبت‌شده من"]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-slate-500 dark:text-slate-400",children:[t.length," درخواست گارانتی ثبت شده"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void g(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),b?(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:b})]}):null,!b&&t.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center dark:border-slate-700 dark:bg-slate-800/40",children:[(0,e.jsx)(ot,{className:"mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:"هنوز درخواست گارانتی ثبت نکرده‌اید."}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-400",children:"با استفاده از فرم بالا، اولین درخواست گارانتی خود را ثبت کنید."})]}):null,!b&&t.length>0?(0,e.jsx)("div",{className:"space-y-3",children:t.map(o=>{const u=fo(o.status),p=u.icon;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 p-3 dark:border-slate-700 sm:p-4",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:["کد پیگیری:"," ",(0,e.jsx)("span",{className:"font-black text-slate-700 dark:text-slate-200",children:o.trackingCode||o.id})]}),(0,e.jsx)("h4",{className:"mt-1 text-sm font-black text-slate-800 dark:text-white sm:text-base",children:o.productName})]}),(0,e.jsxs)("span",{className:`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black sm:text-xs ${u.color}`,children:[(0,e.jsx)(p,{className:"h-3.5 w-3.5"}),u.label]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:o.customerName})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"موبایل"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",dir:"ltr",children:o.customerPhone})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:[o.quantity," عدد"]})]})]}),o.issueDescription?(0,e.jsxs)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-500 sm:text-xs",children:"شرح مشکل:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-600 dark:text-slate-300 sm:text-sm",children:o.issueDescription})]}):null,o.adminNote?(0,e.jsxs)("div",{className:"border-t border-slate-100 bg-amber-50 px-3 py-2 dark:border-slate-700 dark:bg-amber-950/20 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-amber-700 dark:text-amber-300 sm:text-xs",children:"یادداشت ادمین:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-amber-800 dark:text-amber-200 sm:text-sm",children:o.adminNote})]}):null,(0,e.jsx)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:(0,e.jsxs)("p",{className:"text-[10px] text-slate-400 sm:text-xs",children:["ثبت: ",Js(o.createdAt),o.decidedAt?` · تصمیم: ${Js(o.decidedAt)}`:""]})})]},o.id)})}):null]})},ka="https://myshop-backend-8nu7.onrender.com/api",Ks=ka.endsWith("/api")?ka.slice(0,-4):ka,Ys=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",Gs=new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(new Date),vo=t=>{const r=Number(t)||0;return r?`${r.toLocaleString("fa-IR")} تومان`:"—"},ko=()=>{const t=(0,a.useRef)(null),[r,s]=(0,a.useState)(""),[d,b]=(0,a.useState)(""),[n,g]=(0,a.useState)(""),[o,u]=(0,a.useState)(1),[p,c]=(0,a.useState)(""),[k,f]=(0,a.useState)(null),[j,m]=(0,a.useState)(""),[h,w]=(0,a.useState)(null),[x,I]=(0,a.useState)(!1),[U,P]=(0,a.useState)(null),[O,H]=(0,a.useState)(null),[T,A]=(0,a.useState)(null),[y,$]=(0,a.useState)([]),[B,D]=(0,a.useState)(!0),[W,J]=(0,a.useState)(null),C=(0,a.useMemo)(()=>y.find(q=>q.productId===n)||null,[n,y]),z=async()=>{try{D(!0),J(null);const q=Ys(),S=await fetch(`${Ks}/api/warranties/form-data`,{headers:{Authorization:`Bearer ${q}`,Accept:"application/json"}}),_=await S.json();if(!S.ok||!_.success||!_.data)throw new Error(_.error||"خطا در دریافت اطلاعات فرم گارانتی.");A(_.data.representative),$(Array.isArray(_.data.products)?_.data.products:[])}catch(q){console.error("خطا در دریافت داده‌های فرم گارانتی:",q),J(q instanceof Error?q.message:"خطا در ارتباط با سرور.")}finally{D(!1)}};(0,a.useEffect)(()=>{z()},[]);const l=q=>{const S=q.target.files?.[0];if(!S)return;if(S.size>5242880){alert("حجم فایل باید حداکثر ۵ مگابایت باشد.");return}const _=new FileReader;_.onload=()=>{f(String(_.result||"")),m(S.name),w(S),P(null)},_.readAsDataURL(S)},N=()=>{f(null),m(""),w(null),t.current&&(t.current.value="")},v=q=>{const S=q.target.value;g(S),u(1)},R=async q=>{q.preventDefault(),I(!0),P(null),H(null);try{const S=Ys();if(!S)throw new Error("توکن ورود پیدا نشد.");if(!C)throw new Error("محصولی انتخاب نشده است.");const _=new FormData;if(_.append("customerName",r.trim()),_.append("customerPhone",d.replace(/[\s-]/g,"")),_.append("productId",C.productId),_.append("quantity",String(o)),_.append("issueDescription",p.trim()),!h)throw new Error("فایلی انتخاب نشده است.");_.append("image",h,h.name);const te=await(await fetch(`${Ks}/api/warranties`,{method:"POST",headers:{Authorization:`Bearer ${S}`,Accept:"application/json"},body:_})).json();if(!te.success)throw new Error(te.error||"خطا در ثبت");H("درخواست با موفقیت ثبت شد."),s(""),b(""),g(""),u(1),c(""),N(),await z()}catch(S){P(S?.message||"خطا")}finally{I(!1)}};return B?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[420px] items-center justify-center rounded-2xl border border-sky-100 bg-white",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3 text-center",children:[(0,e.jsx)(le,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600",children:"در حال دریافت اطلاعات انبار و کد نمایندگی..."})]})}):W?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)(ze,{className:"mx-auto h-10 w-10 text-red-500"}),(0,e.jsx)("p",{className:"mt-3 font-black text-red-700",children:"دریافت اطلاعات گارانتی ناموفق بود"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600",children:W}),(0,e.jsx)("button",{type:"button",onClick:()=>{z()},className:"mt-5 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:"تلاش مجدد"})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 pb-8",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-sky-700 via-cyan-600 to-teal-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl"}),(0,e.jsx)("div",{className:"absolute -bottom-16 right-24 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(jt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"سامانه خدمات پس از فروش"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"استفاده از گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm font-medium leading-7 text-sky-50 md:text-base",children:"اطلاعات مشتری، کالای موجود در انبار و تصویر خرابی را ثبت کنید تا درخواست شما برای بررسی ارسال شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(tt,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"text-sm font-black",children:Gs})]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(jt,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"text-sm font-black",children:T?.code||"ثبت نشده"})]})]})]})]})]}),(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"min-w-full text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-50 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"مرحله"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"کاری که باید انجام دهید"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"نکته مهم"})]})}),(0,e.jsxs)("tbody",{className:"divide-y divide-slate-100 text-sm text-slate-700",children:[(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۱"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"اطلاعات مشتری و محصول را ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"محصول فقط از موجودی انبار اختصاصی نمایندگی شما انتخاب می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۲"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"مشکل کالا را دقیق توضیح دهید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"شرح کامل خرابی باعث بررسی سریع‌تر درخواست می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۳"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"فایل (عکس) از کالا یا خرابی ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"در موبایل، دوربین پشت گوشی برای ثبت فایل باز می‌شود. هر نام و پسوندی قابل قبول است."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۴"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"درخواست را برای بررسی ارسال کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"وضعیت اولیه تمام درخواست‌ها «در انتظار بررسی» است."})]})]})]})})]}),(0,e.jsxs)("form",{onSubmit:R,noValidate:!0,className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(Wr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"فرم ثبت درخواست گارانتی"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-medium text-slate-500",children:"همه فیلدهای دارای علامت * الزامی هستند."})]})]}),(0,e.jsx)("span",{className:"w-fit rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700",children:"وضعیت پس از ثبت: در انتظار بررسی"})]}),(0,e.jsxs)("div",{className:"p-5 md:p-7",children:[U?(0,e.jsxs)("div",{className:"mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black",children:"ثبت درخواست ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:U})]})]}):null,O?(0,e.jsxs)("div",{className:"mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:[(0,e.jsx)(ve,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black",children:"درخواست گارانتی ثبت شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:O})]})]}):null,(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(wt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات مشتری و نمایندگی"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["نام مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(wt,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"text",value:r,onChange:q=>{s(q.target.value)},placeholder:"مثال: علی رضایی",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["شماره موبایل مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(Qr,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"tel",inputMode:"numeric",dir:"ltr",value:d,onChange:q=>{b(q.target.value)},placeholder:"028-33236072",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-left text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"کد نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 text-sky-800",children:[(0,e.jsx)(jt,{className:"h-4 w-4 shrink-0 text-sky-600"}),(0,e.jsx)("span",{dir:"ltr",className:"text-sm font-black",children:T?.code||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"نام نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(wt,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:T?.name||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"شهر نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(vt,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:T?.city||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"تاریخ درخواست"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(tt,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:Gs})]})]})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Or,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات کالا"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["انتخاب محصول از انبار"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(Or,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsxs)("select",{value:n,onChange:v,className:"w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-10 text-sm font-medium text-slate-800 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"",children:"انتخاب محصول موجود در انبار"}),y.map(q=>(0,e.jsxs)("option",{value:q.productId,children:[q.productName," — ",q.brand||"بدون برند"," — موجودی: ",q.quantity]},q.warehouseItemId))]}),(0,e.jsx)(Jr,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),y.length===0?(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-600",children:"کالای دارای موجودی در انبار شما پیدا نشد."}):null]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["تعداد"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("input",{type:"number",min:"1",max:C?.quantity||1,value:o,disabled:!C,onChange:q=>{u(Number(q.target.value)||1)},className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-800 outline-none transition-all disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{className:"mt-4 grid gap-4 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:C?.brand||"پس از انتخاب محصول"})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"موجودی قابل ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:C?`${C.quantity} عدد`:"—"})]}),(0,e.jsx)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:C?vo(C.unitPrice):"—"})})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-bold text-slate-700",children:[(0,e.jsx)(ze,{className:"h-4 w-4 text-sky-600"}),"شرح مشکل کالا"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("textarea",{rows:5,value:p,onChange:q=>{c(q.target.value)},placeholder:"مشکل یا خرابی کالا را با جزئیات توضیح دهید؛ مثال: نشتی از محل اتصال، شکستگی بدنه، عملکرد نادرست و...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-medium text-slate-400",children:"حداقل ۱۰ کاراکتر وارد کنید."})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)(Xa,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"فایل (عکس) کالا یا خرابی"}),(0,e.jsx)("span",{className:"text-sm font-bold text-rose-500",children:"*"})]}),(0,e.jsx)("input",{ref:t,type:"file",accept:"*/*",capture:"environment",onChange:l,className:"hidden"}),k?(0,e.jsx)("div",{className:"relative overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 p-3",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[(0,e.jsx)("img",{src:k,alt:"پیش‌نمایش فایل گارانتی",className:"h-44 w-full rounded-xl object-cover sm:w-56"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-emerald-700",children:[(0,e.jsx)(ve,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("p",{className:"font-black",children:"فایل آمادهٔ ارسال است"})]}),(0,e.jsx)("p",{className:"mt-2 truncate text-sm font-medium text-slate-600",children:j}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-slate-500",children:"پیش از ثبت نهایی، از واضح بودن عکس و مشخص بودن خرابی اطمینان بگیرید."}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"inline-flex items-center gap-2 rounded-lg border border-sky-300 bg-white px-3 py-2 text-xs font-bold text-sky-700 transition-colors hover:bg-sky-50",children:[(0,e.jsx)(Xa,{className:"h-4 w-4"}),"تغییر فایل"]}),(0,e.jsxs)("button",{type:"button",onClick:N,className:"inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-50",children:[(0,e.jsx)(Ce,{className:"h-4 w-4"}),"حذف فایل"]})]})]})]})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"group flex min-h-44 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/60 px-5 py-7 text-center transition-all hover:border-sky-500 hover:bg-sky-50",children:[(0,e.jsx)("span",{className:"mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm transition-transform group-hover:scale-110",children:(0,e.jsx)(ul,{className:"h-7 w-7"})}),(0,e.jsx)("span",{className:"font-black text-sky-800",children:"گرفتن عکس با دوربین یا انتخاب فایل"}),(0,e.jsx)("span",{className:"mt-2 max-w-md text-xs font-medium leading-6 text-slate-500",children:"در تلفن همراه دوربین پشت گوشی باز می‌شود. هر نام و پسوندی قابل قبول است؛ فقط حجم فایل باید حداکثر ۵ مگابایت باشد."})]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("p",{className:"flex items-center gap-2 text-xs font-medium text-slate-500",children:[(0,e.jsx)(jt,{className:"h-4 w-4 text-sky-600"}),"کد نمایندگی و محصول از اطلاعات واقعی حساب و انبار شما دریافت شده‌اند."]}),(0,e.jsx)("button",{type:"submit",disabled:x,className:"inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-sky-700 to-cyan-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:from-sky-800 hover:to-cyan-700 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:x?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}),"در حال ثبت درخواست..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(jt,{className:"h-5 w-5"}),"ثبت نهایی درخواست گارانتی"]})})]})]})]}),(0,e.jsx)("div",{className:"mt-6",children:(0,e.jsx)(jo,{})})]})},Na="https://myshop-backend-8nu7.onrender.com/api",Ea=Na.endsWith("/api")?Na.slice(0,-4):Na,Xs=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",Zs=t=>t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")?t:`${Ea}${t}`:"",cr=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(r)},No={pending:{label:"در انتظار بررسی",className:"border-amber-200 bg-amber-50 text-amber-700",icon:qa},approved:{label:"تأیید شده",className:"border-emerald-200 bg-emerald-50 text-emerald-700",icon:ve},rejected:{label:"رد شده",className:"border-rose-200 bg-rose-50 text-rose-700",icon:et}},wa=({status:t})=>{const r=No[t],s=r.icon;return(0,e.jsxs)("span",{className:["inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-lg border px-2 py-1.5 text-[10px] font-black sm:px-2.5 sm:text-xs",r.className].join(" "),children:[(0,e.jsx)(s,{className:"h-3.5 w-3.5 shrink-0"}),r.label]})},wo=({warranty:t})=>t.status!=="approved"?null:t.smsStatus==="sent"?(0,e.jsx)("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ve,{className:"mt-0.5 h-6 w-6 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-emerald-900",children:"پیامک تأیید گارانتی ارسال شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-emerald-800",children:"پیامک اطلاع‌رسانی تأیید گارانتی برای مشتری ارسال شده است."}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:["زمان ارسال:"," ",cr(t.smsSentAt)]})]})]})}):t.smsStatus==="sending"?(0,e.jsx)("div",{className:"rounded-2xl border border-sky-200 bg-sky-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(le,{className:"mt-0.5 h-6 w-6 shrink-0 animate-spin text-sky-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-sky-900",children:"در حال ارسال پیامک"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-sky-800",children:"درخواست تأیید شده و وضعیت ارسال پیامک در حال بررسی است."})]})]})}):t.smsStatus==="skipped"?(0,e.jsx)("div",{className:"rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(qa,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"پیامک ارسال نشد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-amber-800",children:"گارانتی تأیید شده است، اما پیامک برای مشتری ارسال نشد."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-amber-700",children:["دلیل: ",t.smsError]}):null]})]})}):t.smsStatus==="failed"?(0,e.jsx)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-6 w-6 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-rose-900",children:"ارسال پیامک ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-rose-800",children:"گارانتی تأیید و موجودی انبار کم شده است، اما سامانه پیامک پاسخ موفق نداده است."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-rose-700",children:["خطا: ",t.smsError]}):null]})]})}):(0,e.jsx)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Qr,{className:"mt-0.5 h-6 w-6 shrink-0 text-slate-500"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"وضعیت پیامک گارانتی ثبت نشده است"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-slate-600",children:"این درخواست ممکن است پیش از فعال‌شدن پیامک گارانتی تأیید شده باشد."})]})]})}),So=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,o]=(0,a.useState)(""),[u,p]=(0,a.useState)("all"),[c,k]=(0,a.useState)(null),[f,j]=(0,a.useState)(""),[m,h]=(0,a.useState)(null),[w,x]=(0,a.useState)(null),[I,U]=(0,a.useState)(null),[P,O]=(0,a.useState)(!1),H=async()=>{try{d(!0),n(null);const D=Xs();if(!D)throw new Error("توکن ورود پیدا نشد. دوباره وارد شوید.");const W=await fetch(`${Ea}/api/warranties/admin/all`,{headers:{Authorization:`Bearer ${D}`,Accept:"application/json"}}),J=await W.json();if(!W.ok||!J.success)throw new Error(J.error||"دریافت درخواست‌های گارانتی ناموفق بود.");r(Array.isArray(J.data)?J.data:[])}catch(D){console.error("خطا در دریافت درخواست‌های گارانتی:",D),n(D instanceof Error?D.message:"خطا در ارتباط با سرور.")}finally{d(!1)}};(0,a.useEffect)(()=>{H()},[]),(0,a.useEffect)(()=>{c&&(j(c.adminNote||""),x(null),U(null),O(!1))},[c]);const T=(0,a.useMemo)(()=>{const D=g.trim().toLocaleLowerCase("fa-IR");return t.filter(W=>u==="all"||W.status===u?D?[W.id,W.representativeName,W.representativeCode,W.representativeCity,W.customerName,W.customerPhone,W.productName,W.brand,W.category].filter(Boolean).join(" ").toLocaleLowerCase("fa-IR").includes(D):!0:!1)},[g,u,t]),A=(0,a.useMemo)(()=>t.reduce((D,W)=>(D.total+=1,D[W.status]+=1,D),{total:0,pending:0,approved:0,rejected:0}),[t]),y=D=>{r(W=>W.map(J=>J.id===D.id?D:J)),k(D)},$=()=>{m||(k(null),x(null),U(null))},B=async D=>{if(!c||c.status!=="pending"||D!=="approved"&&D!=="rejected")return;const W=D==="approved"?`آیا از تأیید این درخواست مطمئن هستید؟

${c.quantity} عدد از محصول «${c.productName}» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد.`:`آیا از رد این درخواست مطمئن هستید؟

موجودی انبار تغییری نمی‌کند.`;if(window.confirm(W))try{h(D),x(null),U(null);const J=Xs();if(!J)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");const C=await fetch(`${Ea}/api/warranties/admin/${c.id}/decision`,{method:"PATCH",headers:{Authorization:`Bearer ${J}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({status:D,adminNote:f.trim()})}),z=await C.json();if(!C.ok||!z.success)throw new Error(z.error||"ثبت تصمیم ادمین ناموفق بود.");z.data?.warranty&&y(z.data.warranty),U(z.message||"تصمیم با موفقیت ثبت شد.")}catch(J){console.error("خطا در ثبت تصمیم گارانتی:",J),x(J instanceof Error?J.message:"خطا در ارتباط با سرور.")}finally{h(null)}};return s?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[440px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,e.jsx)(le,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-600",children:"در حال دریافت درخواست‌های گارانتی..."})]})}):b?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-3xl border border-rose-200 bg-rose-50 p-7 text-center",children:[(0,e.jsx)(ze,{className:"mx-auto h-12 w-12 text-rose-500"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-rose-800",children:"دریافت اطلاعات ناموفق بود"}),(0,e.jsx)("p",{className:"mx-auto mt-2 max-w-xl text-sm leading-7 text-rose-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{H()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-rose-700",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("section",{dir:"rtl",className:"w-full min-w-0 space-y-5 overflow-x-hidden pb-10",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-xl shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-slate-950 via-sky-950 to-cyan-700 px-5 py-7 text-white md:px-8",children:[(0,e.jsx)("div",{className:"absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(jt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"مدیریت خدمات پس از فروش"})]}),(0,e.jsx)("h1",{className:"text-2xl font-black md:text-3xl",children:"بررسی درخواست‌های گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm leading-7 text-sky-100",children:"درخواست‌ها را بررسی کنید و پس از تأیید، موجودی کالای نماینده را به‌صورت خودکار کاهش دهید."})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{H()},className:"inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur transition-colors hover:bg-white/20",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})]}),(0,e.jsxs)("div",{className:"grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4",children:[(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کل درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-slate-800",children:A.total.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-600",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-amber-700",children:A.pending.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-600",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-700",children:A.approved.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-rose-600",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-rose-700",children:A.rejected.toLocaleString("fa-IR")})]})]})]}),(0,e.jsx)("div",{className:"rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5",children:(0,e.jsxs)("div",{className:"grid gap-3 lg:grid-cols-[minmax(0,1fr)_230px]",children:[(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsx)(dt,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:g,onChange:D=>{o(D.target.value)},placeholder:"جست‌وجو در مشتری، نماینده، محصول یا برند...",className:"h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white py-3 pr-11 pl-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]}),(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsxs)("select",{value:u,onChange:D=>{p(D.target.value)},className:"h-12 w-full min-w-0 appearance-none rounded-xl border border-slate-300 bg-white px-4 pl-10 text-sm font-bold text-slate-700 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"all",children:"همه وضعیت‌ها"}),(0,e.jsx)("option",{value:"pending",children:"در انتظار بررسی"}),(0,e.jsx)("option",{value:"approved",children:"تأیید شده"}),(0,e.jsx)("option",{value:"rejected",children:"رد شده"})]}),(0,e.jsx)(Jr,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]})]})}),(0,e.jsxs)("div",{className:"min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-2 border-b border-slate-200 bg-gradient-to-l from-slate-50 to-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2",children:[(0,e.jsx)(We,{className:"h-5 w-5 shrink-0 text-sky-600"}),(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"فهرست درخواست‌ها"})]}),(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500",children:["نمایش"," ",T.length.toLocaleString("fa-IR")," ","درخواست"]})]}),T.length===0?(0,e.jsxs)("div",{className:"px-5 py-20 text-center",children:[(0,e.jsx)(We,{className:"mx-auto h-14 w-14 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-700",children:"درخواستی پیدا نشد"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"جست‌وجو یا فیلتر وضعیت را تغییر دهید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-3 md:hidden",children:T.map(D=>(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate text-sm font-black text-slate-800",children:D.productName||"بدون نام"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-medium text-slate-500",children:D.brand||"بدون برند"})]}),(0,e.jsx)(wa,{status:D.status})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:D.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:D.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:D.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:D.customerPhone||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-black text-sky-700",children:[Number(D.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-[10px] font-bold leading-5 text-slate-600",children:cr(D.requestDate||D.createdAt)})]})]}),(0,e.jsx)("div",{className:"border-t border-slate-100 p-3",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{k(D)},className:"inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-xs font-black text-sky-700 transition-colors hover:bg-sky-100",children:[(0,e.jsx)(Nt,{className:"h-4 w-4"}),"بررسی کامل درخواست"]})})]},D.id))}),(0,e.jsx)("div",{className:"hidden w-full overflow-hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-100 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[16%]",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[15%]",children:"مشتری"}),(0,e.jsx)("th",{className:"w-[30%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[27%]",children:"محصول"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black lg:table-cell lg:w-[7%]",children:"تعداد"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black xl:table-cell xl:w-[13%]",children:"تاریخ"}),(0,e.jsx)("th",{className:"w-[20%] border-b border-slate-200 px-2 py-4 text-xs font-black lg:w-[16%]",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[14%] border-b border-slate-200 px-2 py-4 text-center text-xs font-black lg:w-[12%]",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100",children:T.map(D=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:D.representativeName,className:"truncate text-xs font-black text-slate-800 lg:text-sm",children:D.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:D.representativeCode,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:D.representativeCode||"—"}),(0,e.jsx)("p",{className:"mt-1 truncate text-[10px] text-slate-400",children:D.representativeCity||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:D.customerName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:D.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:D.customerPhone,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:D.customerPhone||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:D.productName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:D.productName||"—"}),(0,e.jsx)("p",{title:D.brand,className:"mt-1 truncate text-[10px] text-slate-500 lg:text-xs",children:D.brand||"بدون برند"})]}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top lg:table-cell",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-sky-50 px-2 py-1.5 text-xs font-black text-sky-700",children:Number(D.quantity||0).toLocaleString("fa-IR")})}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top text-[10px] font-medium leading-5 text-slate-600 xl:table-cell",children:cr(D.requestDate||D.createdAt)}),(0,e.jsx)("td",{className:"min-w-0 px-2 py-4 align-top",children:(0,e.jsx)(wa,{status:D.status})}),(0,e.jsx)("td",{className:"px-2 py-4 text-center align-top",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{k(D)},className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-700 transition-colors hover:bg-sky-100 lg:h-auto lg:w-auto lg:gap-1.5 lg:px-3 lg:py-2",title:"بررسی درخواست","aria-label":"بررسی درخواست",children:[(0,e.jsx)(Nt,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden xl:inline",children:"بررسی"})]})})]},D.id))})]})})]})]}),c?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-end bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-5",role:"dialog","aria-modal":"true","aria-label":"بررسی درخواست گارانتی",onMouseDown:D=>{D.target===D.currentTarget&&$()},children:(0,e.jsxs)("div",{className:"flex max-h-[96vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-6xl sm:rounded-3xl",children:[(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-7",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(We,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"بررسی درخواست گارانتی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-xs font-bold text-slate-500",children:c.id})]})]}),(0,e.jsx)("button",{type:"button",onClick:$,disabled:!!m,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"min-h-0 overflow-y-auto p-5 md:p-7",children:[w?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:w})]}):null,I?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:[(0,e.jsx)(ve,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:I})]}):null,(0,e.jsxs)("div",{className:"mb-6 grid gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"وضعیت درخواست"}),(0,e.jsx)("div",{className:"mt-2",children:(0,e.jsx)(wa,{status:c.status})})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-black text-slate-700",children:cr(c.requestDate||c.createdAt)})]})]}),(0,e.jsx)("div",{className:"mb-6",children:(0,e.jsx)(wo,{warranty:c})}),(0,e.jsxs)("div",{className:"grid gap-5 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(kt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات نماینده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:c.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)(vt,{className:"h-3.5 w-3.5"}),"شهر"]}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.representativeCity||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(wt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات مشتری"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.customerName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)(Qr,{className:"h-3.5 w-3.5"}),"موبایل"]}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:c.customerPhone||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(ot,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"کالای درخواست‌شده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"محصول"}),(0,e.jsx)("p",{className:"mt-1 break-words text-sm font-black text-slate-800",children:c.productName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.brand||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-sky-700",children:[Number(c.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]})]})]})]}),(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)(it,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"شرح مشکل"})]}),(0,e.jsx)("p",{className:"min-h-32 break-words whitespace-pre-wrap p-4 text-sm font-medium leading-8 text-slate-700",children:c.issueDescription||"شرحی ثبت نشده است."})]}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)(Nt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"تصویر یا فایل پیوست"})]}),c.image&&!P?(0,e.jsx)("a",{href:Zs(c.image),target:"_blank",rel:"noreferrer",className:"block bg-slate-100",children:(0,e.jsx)("img",{src:Zs(c.image),alt:"پیوست درخواست گارانتی",onError:()=>{O(!0)},className:"h-64 w-full object-contain sm:h-72"})}):(0,e.jsxs)("div",{className:"flex h-64 flex-col items-center justify-center p-4 text-center sm:h-72",children:[(0,e.jsx)(vl,{className:"h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-slate-500",children:"فایل پیوست در دسترس نیست."})]})]})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-2xl border border-slate-200 bg-white p-4",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-black text-slate-800",children:[(0,e.jsx)(za,{className:"h-5 w-5 text-sky-600"}),"یادداشت ادمین"]}),(0,e.jsx)("textarea",{rows:4,value:f,disabled:c.status!=="pending"||!!m,onChange:D=>{j(D.target.value)},placeholder:"یادداشت بررسی یا علت رد درخواست را بنویسید...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-100"})]}),c.status!=="pending"?(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-slate-50 p-3 text-xs font-bold leading-6 text-slate-600",children:["این درخواست قبلاً توسط"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:c.decidedBy||"ادمین"})," ","در تاریخ"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:cr(c.decidedAt)})," ","نهایی شده است."]}):null]}),c.status==="pending"?(0,e.jsx)("div",{className:"mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex gap-3",children:[(0,e.jsx)(qa,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"هشدار تأیید"}),(0,e.jsxs)("p",{className:"mt-1 break-words text-sm font-medium leading-7 text-amber-800",children:["با تأیید،"," ",(0,e.jsxs)("span",{className:"font-black",children:[Number(c.quantity||0).toLocaleString("fa-IR")," ","عدد"]})," ","از محصول «",(0,e.jsx)("span",{className:"font-black",children:c.productName}),"» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد."]})]})]})}):null,(0,e.jsxs)("div",{className:"mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:$,disabled:!!m,className:"min-h-11 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",children:"بستن"}),c.status==="pending"?(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",disabled:!!m,onClick:()=>{B("rejected")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60",children:[m==="rejected"?(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(et,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:!!m,onClick:()=>{B("approved")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-700 to-teal-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-700/20 transition-all hover:-translate-y-0.5 hover:from-emerald-800 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:[m==="approved"?(0,e.jsx)(le,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(ve,{className:"h-5 w-5"}),"تأیید و کسر از انبار"]})]}):(0,e.jsxs)("div",{className:"flex items-center gap-2 text-sm font-black text-slate-600",children:[c.status==="approved"?(0,e.jsx)(ve,{className:"h-5 w-5 text-emerald-600"}):(0,e.jsx)(et,{className:"h-5 w-5 text-rose-600"}),"این درخواست نهایی شده است."]})]})]})]})}):null]})},Sa="https://myshop-backend-8nu7.onrender.com/api",Er=Sa.endsWith("/api")?Sa.slice(0,-4):Sa,Ca=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",en=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,o]=(0,a.useState)(""),[u,p]=(0,a.useState)(!1),[c,k]=(0,a.useState)(!1),[f,j]=(0,a.useState)(null),[m,h]=(0,a.useState)({title:"",content:""}),w=async()=>{try{d(!0),n(null);const A=Ca(),y=await fetch(`${Er}/api/notes`,{headers:{Authorization:`Bearer ${A}`,Accept:"application/json"}}),$=await y.json();if(!y.ok||!$.success)throw new Error($.error||"خطا در دریافت یادداشت‌ها");if(!Array.isArray($.data))throw new Error("فرمت داده‌های یادداشت‌ها نامعتبر است.");r($.data)}catch(A){console.error("خطا در دریافت یادداشت‌ها:",A),n(A instanceof Error?A.message:"خطا در ارتباط با سرور")}finally{d(!1)}};(0,a.useEffect)(()=>{w()},[]);const x=()=>{c||(p(!1),j(null),h({title:"",content:""}))},I=()=>{j(null),h({title:"",content:""}),p(!0)},U=A=>{j(A),h({title:A.title||"",content:A.content||""}),p(!0)},P=async A=>{if(window.confirm("آیا از حذف این یادداشت مطمئن هستید؟"))try{const y=Ca(),$=await fetch(`${Er}/api/notes/${A}`,{method:"DELETE",headers:{Authorization:`Bearer ${y}`,Accept:"application/json"}}),B=await $.json();if(!$.ok||!B.success)throw new Error(B.error||"خطا در حذف یادداشت");r(D=>D.filter(W=>W.id!==A))}catch(y){console.error("خطا در حذف یادداشت:",y),alert(y instanceof Error?y.message:"خطا در ارتباط با سرور")}},O=async A=>{A.preventDefault();const y=m.title.trim(),$=m.content.trim();if(!y||!$){alert("عنوان و متن یادداشت الزامی است.");return}try{k(!0);const B=Ca(),D=!!f?.id,W=D?`${Er}/api/notes/${f?.id}`:`${Er}/api/notes`,J=await fetch(W,{method:D?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${B}`,Accept:"application/json"},body:JSON.stringify({title:y,content:$,color:"blue"})}),C=await J.json();if(!J.ok||!C.success||!C.data)throw new Error(C.error||"خطا در ذخیره یادداشت");const z=C.data;r(D?l=>l.map(N=>N.id===z.id?z:N):l=>[z,...l]),x()}catch(B){console.error("خطا در ذخیره یادداشت:",B),alert(B instanceof Error?B.message:"خطا در ارتباط با سرور")}finally{k(!1)}},H=t.filter(A=>{const y=(A.title||"").toLowerCase(),$=(A.content||"").toLowerCase(),B=g.trim().toLowerCase();return y.includes(B)||$.includes(B)}),T=A=>{if(!A)return"تاریخ نامشخص";const y=new Date(A);return Number.isNaN(y.getTime())?"تاریخ نامشخص":y.toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-[calc(100vh-120px)] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/60 p-3 md:p-6",children:[(0,e.jsxs)("div",{className:"mx-auto max-w-6xl",children:[(0,e.jsxs)("section",{className:"mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-blue-100",children:[(0,e.jsx)(Vt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"فضای شخصی شما"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"یادداشت‌های من"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-medium leading-7 text-blue-50",children:"یادداشت‌های شخصی خود را ثبت، جست‌وجو، ویرایش و مدیریت کنید."})]}),(0,e.jsxs)("button",{type:"button",onClick:I,className:"relative flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 font-black text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-xl active:translate-y-0",children:[(0,e.jsx)(ur,{className:"h-5 w-5"}),"یادداشت جدید"]})]})]}),(0,e.jsx)("div",{className:"p-4 md:p-5",children:(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(dt,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400"}),(0,e.jsx)("input",{type:"text",placeholder:"جست‌وجو در عنوان یا متن یادداشت‌ها...",value:g,onChange:A=>{o(A.target.value)},className:"w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pr-10 pl-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"})]})})]}),s?(0,e.jsx)("div",{className:"flex items-center justify-center py-24",children:(0,e.jsx)("div",{className:"h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"})}):b?(0,e.jsxs)("div",{className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)("p",{className:"font-bold text-red-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{w()},className:"mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Fe,{className:"h-4 w-4"}),"تلاش مجدد"]})]}):H.length===0?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-white py-20 text-center shadow-sm",children:[(0,e.jsx)("div",{className:"mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500",children:(0,e.jsx)(Vt,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"text-lg font-black text-slate-700",children:g?"یادداشتی پیدا نشد":"هنوز یادداشتی ندارید"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:g?"عبارت جست‌وجو را تغییر دهید.":"با دکمهٔ «یادداشت جدید» اولین یادداشت خود را بسازید."})]}):(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:H.map(A=>(0,e.jsxs)("article",{className:"group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10",children:[(0,e.jsx)("div",{className:"h-1.5 bg-gradient-to-l from-blue-700 via-blue-500 to-cyan-400"}),(0,e.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110",children:(0,e.jsx)(Vt,{className:"h-5 w-5"})}),(0,e.jsx)("h3",{className:"line-clamp-2 min-w-0 pt-1 text-lg font-black text-slate-800",children:A.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{U(A)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600",title:"ویرایش یادداشت","aria-label":"ویرایش یادداشت",children:(0,e.jsx)(Jt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{P(A.id)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600",title:"حذف یادداشت","aria-label":"حذف یادداشت",children:(0,e.jsx)(Ve,{className:"h-4 w-4"})})]})]}),(0,e.jsx)("p",{className:"mb-5 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-slate-600",children:A.content||"بدون متن"}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 border-t border-slate-100 pt-3",children:[(0,e.jsxs)("span",{className:"min-w-0 truncate text-xs font-medium text-slate-400",children:["آخرین ویرایش: ",T(A.updatedAt||A.createdAt)]}),(0,e.jsx)("span",{className:"shrink-0 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-black text-blue-700",children:"یادداشت شخصی"})]})]})]},A.id))})]}),u?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm",onClick:x,role:"presentation",children:(0,e.jsxs)("div",{className:"w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:A=>{A.stopPropagation()},role:"dialog","aria-modal":"true","aria-label":f?"ویرایش یادداشت":"یادداشت جدید",children:[(0,e.jsx)("div",{className:"bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 p-5 text-white",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15",children:(0,e.jsx)(Vt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black",children:f?"ویرایش یادداشت":"یادداشت جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-medium text-blue-100",children:"عنوان و متن یادداشت شخصی خود را وارد کنید."})]})]}),(0,e.jsx)("button",{type:"button",onClick:x,disabled:c,className:"rounded-lg p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن پنجره",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("form",{onSubmit:O,className:"p-5",children:[(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsx)("label",{htmlFor:"note-title",className:"mb-2 block text-sm font-black text-slate-700",children:"عنوان یادداشت"}),(0,e.jsx)("input",{id:"note-title",type:"text",value:m.title,onChange:A=>{h(y=>({...y,title:A.target.value}))},className:"w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"مثال: پیگیری سفارش هفتهٔ آینده",maxLength:120,required:!0,disabled:c})]}),(0,e.jsxs)("div",{className:"mb-6",children:[(0,e.jsx)("label",{htmlFor:"note-content",className:"mb-2 block text-sm font-black text-slate-700",children:"متن یادداشت"}),(0,e.jsx)("textarea",{id:"note-content",value:m.content,onChange:A=>{h(y=>({...y,content:A.target.value}))},rows:7,className:"w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"متن یادداشت خود را اینجا بنویسید...",maxLength:3e3,required:!0,disabled:c})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:x,disabled:c,className:"rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:c,className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-700 to-cyan-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:from-blue-800 hover:to-cyan-700 disabled:cursor-not-allowed disabled:opacity-70",children:[(0,e.jsx)(La,{className:"h-4 w-4"}),c?"در حال ذخیره...":f?"ذخیرهٔ تغییرات":"ثبت یادداشت"]})]})]})]})}):null]})},Co=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},Io=t=>Array.isArray(t)?t:Array.isArray(t.data)?t.data:t.data&&Array.isArray(t.data.products)?t.data.products:Array.isArray(t.products)?t.products:[],qr=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const d of t){const b=s.getItem(d);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const d of r){const b=s.getItem(d);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},Ia=()=>{const t=qr();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},tn=(t,r)=>{if(ae.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||t.message||r}return t instanceof Error?t.message:r},$o=({apiUrl:t})=>{const[r,s]=(0,a.useState)([]),[d,b]=(0,a.useState)(null),[n,g]=(0,a.useState)(!1),[o,u]=(0,a.useState)(null),p=(0,a.useMemo)(()=>Co(t),[t]),c=(0,a.useRef)(0),k=(0,a.useRef)(null),f=(0,a.useCallback)(async()=>{const j=c.current+1;c.current=j,k.current&&k.current.abort();const m=new AbortController;k.current=m;const h=`${p}/products`;try{g(!0),console.log("📡 دریافت محصولات از:",h);const w=await ae.get(h,{signal:m.signal,params:{_t:Date.now()},headers:Ia(),withCredentials:!!qr()});if(m.signal.aborted||j!==c.current)return null;const x=w.data;if(x?.success===!1)throw new Error(x.error||x.message||"دریافت محصولات ناموفق بود.");const I=Io(x);return s(I),console.log("✅ تعداد محصولات دریافت‌شده:",I.length),I}catch(w){return ae.isCancel(w)||m.signal.aborted||j!==c.current||console.error("❌ خطا در بارگذاری محصولات:",w),null}finally{j===c.current&&g(!1)}},[p]);return(0,a.useEffect)(()=>(f(),()=>{c.current+=1,k.current&&k.current.abort()}),[f]),{products:r,editingProduct:d,setEditingProduct:b,loadProducts:f,handleEdit:(0,a.useCallback)(async j=>{try{const m=qr();await ae.put(`${p}/products/${encodeURIComponent(String(j.id))}`,j,{headers:Ia(),withCredentials:!!m}),await f(),b(null)}catch(m){console.error("❌ خطا در ویرایش محصول:",m),alert(tn(m,"خطا در ویرایش محصول"))}},[p,f]),handleDelete:(0,a.useCallback)(async j=>{const m=String(j).trim();if(!m){alert("شناسه محصول معتبر نیست.");return}if(o)return;if(!r.some(w=>String(w.id)===m)){alert("این محصول در لیست فعلی وجود ندارد.");return}if(!window.confirm("آیا از حذف این محصول مطمئن هستید؟"))return;const h=r;try{const w=qr();u(m),g(!0);const x=(await ae.delete(`${p}/products/${encodeURIComponent(m)}`,{headers:Ia(),withCredentials:!!w})).data;if(x?.success===!1)throw new Error(x.error||x.message||"حذف محصول توسط سرور انجام نشد.");s(U=>U.filter(P=>String(P.id)!==m));const I=await f();if(I&&I.some(U=>String(U.id)===m))throw s(h),new Error("سرور محصول را حذف نکرد؛ محصول همچنان در لیست وجود دارد.");console.log("✅ محصول واقعاً حذف شد:",m)}catch(w){console.error("❌ خطا در حذف محصول:",w),s(h),alert(tn(w,"حذف محصول انجام نشد."))}finally{u(null),g(!1)}},[p,o,f,r]),totalProducts:r.length,totalPrice:(0,a.useMemo)(()=>r.reduce((j,m)=>j+(Number(m.price)||0),0),[r]),loading:n,deletingProductId:o}},Ao=({apiUrl:t,representativeId:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[g,o]=(0,a.useState)(null),[u,p]=(0,a.useState)(null),c=(0,a.useRef)(0),k=String(t||"").trim().replace(/\/+$/,""),f=(0,a.useCallback)(async h=>{const w=String(h||"").trim();if(!w){c.current+=1,d([]),o(null),n(!1);return}const x=++c.current;n(!0),o(null);try{const I=await ae.get(`${k}/representatives/${encodeURIComponent(w)}/files`,{headers:{Accept:"application/json"},params:{_t:Date.now()}});if(x!==c.current)return;if(I.data?.success===!1||!Array.isArray(I.data?.files))throw new Error(I.data?.error||"پاسخ فهرست فایل‌های نماینده معتبر نیست.");d(I.data.files)}catch(I){if(x!==c.current)return;const U=ae.isAxiosError(I)?I.response?.data?.error||`دریافت فایل‌ها ناموفق بود (HTTP ${I.response?.status??"بدون پاسخ"}).`:I instanceof Error?I.message:"خطا در دریافت فایل‌های نماینده.";console.error("خطا در بارگذاری پرونده‌های نماینده:",I),d([]),o(U)}finally{x===c.current&&n(!1)}},[k]);(0,a.useEffect)(()=>(r?(d([]),f(r)):(c.current+=1,d([]),o(null),n(!1),p(null)),()=>{c.current+=1}),[r,f]);const j=(0,a.useCallback)(async h=>{if(!r)throw new Error("ابتدا یک نماینده را انتخاب کنید.");const w=new FormData;w.append("file",h);try{await ae.post(`${k}/representatives/${encodeURIComponent(r)}/files`,w,{headers:{Accept:"application/json"}}),await f(r)}catch(x){const I=ae.isAxiosError(x)?x.response?.data?.error||`آپلود فایل ناموفق بود (HTTP ${x.response?.status??"بدون پاسخ"}).`:x instanceof Error?x.message:"خطا در آپلود فایل.";throw new Error(I)}},[k,r,f]);return{files:s,loadingFiles:b,filesError:g,viewingFile:u,setViewingFile:p,loadRepresentativeFiles:f,uploadFile:j,deleteFile:async h=>{if(!r)return;const w=s.find(x=>x.id===h);if(w&&window.confirm(`آیا از حذف فایل «${w.name}» مطمئن هستید؟`))try{await ae.delete(`${k}/representatives/${encodeURIComponent(r)}/files/${encodeURIComponent(w.name)}`),await f(r),u?.id===h&&p(null)}catch(x){console.error("خطا در حذف فایل:",x),window.alert("خطا در حذف فایل")}}}},To=(t,r=5e3)=>{const s=(0,a.useRef)(t);(0,a.useEffect)(()=>{s.current=t},[t]),(0,a.useEffect)(()=>{const d=setInterval(()=>{s.current()},r);return()=>clearInterval(d)},[r])},ut=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Ge=t=>String(t??"").trim(),Do=t=>String(t||"").trim().replace(/\/+$/,"").replace(/\/api$/,""),Pr=(t,r)=>{if(!ae.isAxiosError(t))return t instanceof Error&&t.message?t.message:r;const s=t.response?.data;return s?.error?s.error:s?.message?s.message:t.response?.status===400?"اطلاعات ارسال‌شده معتبر نیست.":t.response?.status===401?"نشست کاربری منقضی یا نامعتبر است؛ دوباره وارد شوید.":t.response?.status===403?"اجازهٔ دسترسی به این بخش را ندارید.":t.response?.status===404?"مسیر نمایندگان در بک‌اند پیدا نشد.":t.response?r:"ارتباط با بک‌اند برقرار نشد؛ اجرای سرور را بررسی کنید."},rn=t=>({...t,name:Ge(t.name),email:Ge(t.email),code:Ge(t.code),province:Ge(t.province),city:Ge(t.city),phone:Ge(t.phone),startDate:Ge(t.startDate),address:Ge(t.address),description:Ge(t.description),shopDescription:Ge(t.shopDescription),status:t.status==="inactive"?"inactive":"active",orders:Number(t.orders)||0,depositAmount:t.depositAmount??"0",guaranteeCheck:t.guaranteeCheck??"0",totalFinancialCommitment:t.totalFinancialCommitment??"0",shipmentsCount:Number(t.shipmentsCount)||0,storeItemsCount:Number(t.storeItemsCount)||0,storeItemsTotalValue:Number(t.storeItemsTotalValue)||0,returnRequestsCount:Number(t.returnRequestsCount)||0,last10DaysSales:Number(t.last10DaysSales)||0,averageSales:Number(t.averageSales)||0}),Ro=({apiUrl:t,isAdmin:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[g,o]=(0,a.useState)(null),u=(0,a.useRef)(0),p=(0,a.useRef)(!1),c=(0,a.useRef)(!1),k=(0,a.useMemo)(()=>Do(t),[t]),f=(0,a.useCallback)((h=!1)=>{const w=localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"";if(!w)throw new Error("توکن ورود پیدا نشد؛ دوباره وارد شوید.");return{Accept:"application/json",Authorization:`Bearer ${w}`,...h?{"Content-Type":"application/json"}:{}}},[]),j=(0,a.useCallback)(()=>{if(!r)throw new Error("این عملیات فقط برای ادمین مجاز است.")},[r]),m=(0,a.useCallback)(async(h=!1)=>{if(!r||h&&p.current)return;h&&(p.current=!0);const w=++u.current;h||(n(!0),o(null));try{const x=(await ae.get(`${k}/api/representatives`,{headers:f(),params:{_t:Date.now()}})).data;if(x.success===!1)throw new Error(x.error||"خطا در بارگذاری نمایندگان.");if(!c.current||w!==u.current)return;d(Array.isArray(x.data)?x.data:[]),h||o(null)}catch(x){if(!c.current||w!==u.current)return;const I=Pr(x,"خطا در بارگذاری نمایندگان.");console.error("خطا در بارگذاری نمایندگان:",I),h||o(I)}finally{h&&(p.current=!1),c.current&&w===u.current&&!h&&n(!1)}},[f,r,k]);return(0,a.useEffect)(()=>{c.current=!0,r?m():(d([]),n(!1),o(null));const h=()=>{r&&document.visibilityState==="visible"&&m(!0)};return r&&(window.addEventListener("focus",h),document.addEventListener("visibilitychange",h)),()=>{c.current=!1,u.current+=1,window.removeEventListener("focus",h),document.removeEventListener("visibilitychange",h)}},[r,m]),To(m,5e3),{representatives:s,loading:b,error:g,loadRepresentatives:m,addRepresentative:(0,a.useCallback)(async h=>{j();try{const w=(await ae.post(`${k}/api/representatives`,rn(h),{headers:f(!0)})).data;if(w.success===!1||!w.data)throw new Error(w.error||"بک‌اند اطلاعات نمایندهٔ جدید را برنگرداند.");const x=w.data;return u.current+=1,d(I=>I.some(U=>ut(U.id)===ut(x.id))?I.map(U=>ut(U.id)===ut(x.id)?x:U):[...I,x]),o(null),x}catch(w){const x=Pr(w,"خطا در ثبت نماینده.");throw o(x),window.alert(x),w}},[j,f,k]),updateRepresentative:(0,a.useCallback)(async(h,w)=>{j();const x=ut(h);if(!x)throw new Error("شناسه نماینده برای ویرایش معتبر نیست.");try{const I=(await ae.put(`${k}/api/representatives/${encodeURIComponent(x)}`,rn(w),{headers:f(!0)})).data;if(I.success===!1||!I.data)throw new Error(I.error||"بک‌اند اطلاعات نمایندهٔ ویرایش‌شده را برنگرداند.");const U=I.data;return u.current+=1,d(P=>P.map(O=>ut(O.id)===x?U:O)),o(null),U}catch(I){const U=Pr(I,"خطا در ویرایش نماینده.");throw o(U),window.alert(U),I}},[j,f,k]),deleteRepresentative:(0,a.useCallback)(async h=>{j();const w=ut(h);if(!w)throw new Error("شناسه نماینده برای حذف معتبر نیست.");try{const x=(await ae.delete(`${k}/api/representatives/${encodeURIComponent(w)}`,{headers:f()})).data;if(x.success===!1)throw new Error(x.error||"خطا در حذف نماینده.");u.current+=1,d(I=>I.filter(U=>ut(U.id)!==w)),o(null)}catch(x){const I=Pr(x,"خطا در حذف نماینده.");throw o(I),window.alert(I),x}},[j,f,k])}},Eo=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},bt=Eo("https://myshop-backend-8nu7.onrender.com/api"),Cn=["dashboard","products","representatives","upload","shipments","warehouse","sales-reports","return-requests","support-requests","reports","users","settings","notes","warranties"],Pa=["dashboard","products","orders","my-shipments","warehouse","sales-reports","return-request","support","profile","notes","warranties"],Po=()=>{const t=localStorage.getItem("activeSection")||sessionStorage.getItem("activeSection"),r=[...Cn,...Pa];return t&&r.includes(t)?t:"dashboard"},In=()=>{try{const t=localStorage.getItem("authUser")||sessionStorage.getItem("authUser");return t?JSON.parse(t):null}catch{return null}},zo=()=>{const t=In();if(t?.role==="admin"||t?.role==="representative")return t.role;const r=localStorage.getItem("userRole")||sessionStorage.getItem("userRole");return r==="admin"?"admin":r==="representative"||r==="user"?"representative":null},Ur=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage])for(const d of t){const b=s.getItem(d);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const s of[sessionStorage,localStorage])for(const d of r){const b=s.getItem(d);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}return""},an=()=>{const t=Ur();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},Fo=t=>{if(Array.isArray(t))return t;const r=t;if(Array.isArray(r?.data))return r.data;if(Array.isArray(r?.reports))return r.reports;if(Array.isArray(r?.salesReports))return r.salesReports;if(r?.data&&typeof r.data=="object"){const s=r.data?.data;if(Array.isArray(s))return s}return[]};function Uo(){const t=(0,a.useMemo)(()=>In(),[]),r=(0,a.useMemo)(()=>zo(),[]),s=r==="representative",[d,b]=(0,a.useState)(!0),[n,g]=(0,a.useState)(Po),[o,u]=(0,a.useState)(null),[p,c]=(0,a.useState)(null),[k,f]=(0,a.useState)([]),[j,m]=(0,a.useState)([]),h=(0,a.useCallback)(async()=>{if(!s&&Ur())try{const i=await ae.get(`${bt}/shipments`,{withCredentials:!0,headers:an(),params:{_:Date.now()}});if(i.data.success===!1)throw new Error(i.data.error||"دریافت بارها ناموفق بود.");f(Array.isArray(i.data.data)?i.data.data:[])}catch(i){console.error("❌ خطا در دریافت بارها:",i)}},[s]),w=(0,a.useCallback)(async()=>{if(!s&&Ur()){for(const i of["/sales-from-warehouse/admin/all","/sales-reports","/sale-reports","/sales","/sales/announcements"])try{const E=await ae.get(`${bt}${i}`,{withCredentials:!0,headers:an(),params:{_:Date.now()}}),V=Fo(E.data);m(V),console.log(`✅ گزارش‌های فروش از «${i}» دریافت شد (${V.length} مورد)`);return}catch{continue}console.warn("⚠️ هیچ endpoint گزارش فروشی پیدا نشد. لطفاً endpoint اعلام فروش را بررسی کنید.")}},[s]);(0,a.useEffect)(()=>{s||h()},[s,h]),(0,a.useEffect)(()=>{s||(n==="dashboard"||n==="sales-reports"||n==="reports")&&w()},[n,s,w]);const{products:x,editingProduct:I,setEditingProduct:U,loadProducts:P,handleEdit:O,handleDelete:H,totalProducts:T,totalPrice:A}=$o({apiUrl:bt}),{representatives:y,addRepresentative:$,updateRepresentative:B,deleteRepresentative:D,loadRepresentatives:W}=Ro({apiUrl:bt,isAdmin:r==="admin"}),{files:J,loadingFiles:C,viewingFile:z,setViewingFile:l,deleteFile:N}=Ao({apiUrl:bt,representativeId:o}),v=(0,a.useCallback)(async i=>{await N(String(i))},[N]),R=(0,a.useCallback)(async()=>{console.log("🔄 شروع بروزرسانی محصولات بعد از آپلود"),await P(),console.log("✅ محصولات بعد از آپلود بروزرسانی شدند")},[P]),q=(0,a.useCallback)(async()=>{await W()},[W]);(0,a.useEffect)(()=>{s&&!Pa.includes(n)&&(g("dashboard"),sessionStorage.setItem("activeSection","dashboard"))},[n,s]),(0,a.useEffect)(()=>{sessionStorage.setItem("activeSection",n)},[n]),(0,a.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[n,o,p]),(0,a.useEffect)(()=>{const i=()=>{b(window.innerWidth>=1024)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),(0,a.useEffect)(()=>{s&&n==="products"&&P()},[n,s,P]);const S=()=>{u(null),c(null),l(null)},_=i=>{if(s&&!Pa.includes(i)){alert("🔒 اجازه ورود به این بخش را ندارید.");return}!s&&!Cn.includes(i)||(S(),g(i),sessionStorage.setItem("activeSection",i),window.innerWidth<1024&&b(!1))},te=i=>{if(s){alert("🔒 اجازه ورود به این بخش را ندارید.");return}if(!y.some(E=>String(E.id)===String(i))){alert("نماینده موردنظر پیدا نشد. صفحه را رفرش کنید.");return}g("representatives"),c(null),l(null),u(String(i)),sessionStorage.setItem("activeSection","representatives")},G=()=>{S(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},de=async i=>{await B(String(i.id),{...i,name:i.name?.trim()||"",email:i.email?.trim()||"",province:i.province?.trim()||"",city:i.city?.trim()||"",phone:i.phone?.trim()||"",code:String(i.code??"").trim(),address:i.address?.trim()||"",description:i.description?.trim()||"",shopDescription:i.shopDescription?.trim()||""}),await W()},ie=async i=>{await $({name:i.name?.trim()||"",email:i.email?.trim()||"",phone:i.phone?.trim()||"",province:i.province?.trim()||"",city:i.city?.trim()||"",code:String(i.code??"").trim(),address:i.address?.trim()||"",description:i.description?.trim()||"",shopDescription:i.shopDescription?.trim()||"",orders:Number(i.orders)||0,status:i.status==="inactive"?"inactive":"active",startDate:i.startDate||"",depositAmount:i.depositAmount||"0",guaranteeCheck:i.guaranteeCheck||"0",totalFinancialCommitment:i.totalFinancialCommitment||"0",shipmentsCount:Number(i.shipmentsCount)||0,storeItemsCount:Number(i.storeItemsCount)||0,storeItemsTotalValue:Number(i.storeItemsTotalValue)||0,returnRequestsCount:Number(i.returnRequestsCount)||0,last10DaysSales:Number(i.last10DaysSales)||0,averageSales:Number(i.averageSales)||0}),await W(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},he=async(i,E)=>{await B(i,{...E,name:E.name?.trim()||"",email:E.email?.trim()||"",phone:E.phone?.trim()||"",province:E.province?.trim()||"",city:E.city?.trim()||"",code:String(E.code??"").trim(),address:E.address?.trim()||"",description:E.description?.trim()||"",shopDescription:E.shopDescription?.trim()||"",orders:Number(E.orders)||0,status:E.status==="inactive"?"inactive":"active",startDate:E.startDate||"",depositAmount:E.depositAmount||"0",guaranteeCheck:E.guaranteeCheck||"0",totalFinancialCommitment:E.totalFinancialCommitment||"0",shipmentsCount:Number(E.shipmentsCount)||0,storeItemsCount:Number(E.storeItemsCount)||0,storeItemsTotalValue:Number(E.storeItemsTotalValue)||0,returnRequestsCount:Number(E.returnRequestsCount)||0,last10DaysSales:Number(E.last10DaysSales)||0,averageSales:Number(E.averageSales)||0}),await W()},xe=async i=>{await D(i),o&&String(o)===String(i)&&S(),p&&String(p)===String(i)&&S(),await W(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},ge=(0,a.useMemo)(()=>o&&y.find(i=>String(i.id)===String(o))||null,[y,o]),Ie=(0,a.useMemo)(()=>p&&y.find(i=>String(i.id)===String(p))||null,[y,p]),ue=p?`انبار ${Ie?.name||""}`:o?`داشبورد ${ge?.name||""}`:n==="dashboard"?"داشبورد":n==="products"?"لیست قیمت‌ها":n==="representatives"?"لیست نمایندگان":n==="upload"?"آپلود اکسل":n==="shipments"?"ارسال بار":n==="warehouse"?"انبار نمایندگان":n==="sales-reports"?"اعلام فروش نمایندگان":n==="return-requests"?"درخواست‌های مرجوعی":n==="support-requests"?"رسیدگی به درخواست‌ها":n==="reports"?"گزارشات":n==="users"?"مدیریت کاربران":n==="settings"?"تنظیمات":n==="notes"?"یادداشت‌ها":n==="warranties"?"مدیریت گارانتی":"پنل مدیریت",F=p?"موجودی، ورود و خروج کالا در انبار اختصاصی نماینده":o?"اطلاعات، آمار و پرونده‌های نماینده":n==="dashboard"?"نمای کلی از وضعیت محصولات":n==="products"?"مشاهده لیست قیمت محصولات":n==="representatives"?"مدیریت نمایندگان و پرونده‌های آن‌ها":n==="upload"?"افزودن محصولات از فایل اکسل":n==="shipments"?"ثبت و مدیریت ارسال بار":n==="warehouse"?"مشاهده و مدیریت انبار اختصاصی هر نماینده":n==="sales-reports"?"مشاهده فقط‌خواندنی اعلام فروش ثبت‌شده توسط نمایندگان":n==="return-requests"?"بررسی، تأیید یا رد درخواست‌های مرجوعی نماینده‌ها":n==="support-requests"?"بررسی و پاسخ به درخواست‌های پشتیبانی نمایندگان":n==="reports"?"مشاهده گزارش‌های سیستم":n==="users"?"مدیریت کاربران سیستم":n==="settings"?"تنظیمات پنل مدیریت":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="warranties"?"مشاهده و رسیدگی به درخواست‌های گارانتی نمایندگان":"",Y=n==="dashboard"?"داشبورد نمایندگی":n==="products"?"لیست قیمت‌ها":n==="orders"?"سفارش‌های من":n==="my-shipments"?"بارهای من":n==="warehouse"?"انبار نمایندگی":n==="sales-reports"?"اعلام فروش":n==="return-request"?"درخواست مرجوعی":n==="support"?"پشتیبانی":n==="profile"?"پروفایل نمایندگی":n==="notes"?"یادداشت‌ها":n==="warranties"?"استفاده از گارانتی":"داشبورد نمایندگی",ee=n==="dashboard"?"نمای کلی اطلاعات، اعتبار و موجودی نمایندگی":n==="products"?"مشاهده لیست قیمت ثبت‌شده توسط مدیریت":n==="orders"?"مشاهده سفارش‌های ثبت‌شده":n==="my-shipments"?"پیگیری وضعیت و جزئیات بارهای ارسالی به نمایندگی شما":n==="warehouse"?"مشاهده موجودی و مجموع":n==="sales-reports"?"ثبت و مشاهده اعلام فروش نمایندگی":n==="return-request"?"ثبت و پیگیری درخواست مرجوعی":n==="support"?"ثبت و پیگیری درخواست‌های پشتیبانی":n==="profile"?"مشاهده اطلاعات کاربری و نمایندگی":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="warranties"?"ثبت درخواست استفاده از گارانتی برای کالاهای موجود در انبار":"";return!Ur()||!t||!r?(0,e.jsx)(jl,{to:"/login",replace:!0}):(0,e.jsxs)("div",{dir:"ltr",className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950",children:[(0,e.jsx)(Al,{onToggleSidebar:()=>{b(i=>!i)},userRole:s?"representative":"admin",onRoleChange:()=>{},userName:s?t.name||t.username||"نماینده":t.name||"مدیر سیستم"}),(0,e.jsx)(Tl,{isOpen:d,onClose:()=>{b(!1)},activeSection:n,onSectionChange:_,userRole:s?"representative":"admin"}),(0,e.jsx)("main",{dir:"rtl",className:`min-h-[calc(100vh-76px)] transition-all duration-500 ${d?"lg:mr-72":"lg:mr-0"}`,children:(0,e.jsxs)("div",{className:"mx-auto max-w-7xl p-3 md:p-6",children:[(0,e.jsxs)("header",{className:"mb-4 md:mb-6",children:[(0,e.jsx)("h1",{className:"text-xl font-black text-gray-800 dark:text-white md:text-3xl",children:s?Y:ue}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm",children:s?ee:F})]}),s?n==="warranties"?(0,e.jsx)(ko,{}):n==="notes"?(0,e.jsx)(en,{}):n==="products"?(0,e.jsx)(bn,{products:Array.isArray(x)?x:[],userRole:"user",onEdit:()=>{},onDelete:()=>{}}):n==="support"?(0,e.jsx)(Ti,{}):(0,e.jsx)(uo,{activeSection:n}):n==="notes"?(0,e.jsx)(en,{}):n==="warranties"?(0,e.jsx)(So,{}):o?(0,e.jsx)(js,{activeSection:"representatives",userRole:"admin",products:x,totalProducts:T,totalPrice:A,viewingRepDashboard:o,representatives:y,representativeFiles:J,loadingFiles:C,shipments:k,onEditProduct:U,onDeleteProduct:H,onUploadSuccess:R,onOpenRepDashboard:te,onBackToRepList:G,onViewFile:l,onDeleteFile:v,onAddRepresentative:ie,onEditRepresentative:he,onDeleteRepresentative:xe,onRepresentativeUpdated:de}):n==="warehouse"&&Ie?(0,e.jsx)(Ii,{representative:Ie,apiUrl:bt,products:x,onBack:()=>{c(null)},onWarehouseChanged:q,onProductsChanged:()=>{P()}}):n==="warehouse"?(0,e.jsx)(ji,{representatives:y,apiUrl:bt,onOpenRepresentativeWarehouse:i=>{u(null),l(null),c(String(i))}}):n==="support-requests"?(0,e.jsx)(Pi,{}):(0,e.jsx)(js,{activeSection:n,userRole:"admin",products:x,totalProducts:T,totalPrice:A,viewingRepDashboard:null,representatives:y,representativeFiles:J,loadingFiles:C,shipments:k,onEditProduct:U,onDeleteProduct:H,onUploadSuccess:R,onOpenRepDashboard:te,onBackToRepList:G,onViewFile:l,onDeleteFile:v,onAddRepresentative:ie,onEditRepresentative:he,onDeleteRepresentative:xe,onRepresentativeUpdated:de})]})}),s?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(yi,{file:z,apiUrl:bt,onClose:()=>{l(null)}}),I?(0,e.jsx)(Dl,{product:I,onClose:()=>{U(null)},onSave:O}):null]})]})}export{Uo as default};
