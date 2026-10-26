import{r as hn}from"./rolldown-runtime.CXHxssQy.js";import{n as gn,r as xe,t as un}from"./utils-vendor.C5ZOOZMr.js";import{$ as Xn,$t as Zn,A as Qe,At as el,B as Xt,Bt as Qa,C as Ha,Ct as it,D as Ja,Dt as os,E as Ya,Et as Ne,F as tl,Ft as la,G as rl,Gt as al,H as sl,Ht as Ua,I as gt,It as ds,J as $t,K as nl,L as bn,Lt as ot,M as ea,Mt as ta,N as ll,Nt as qa,O as il,Ot as ze,P as Zt,Pt as ol,Q as cs,R as Kr,Rt as ra,S as Ka,St as Ge,T as dl,Tt as cl,U as xs,Ut as xl,V as fn,Vt as ml,W as pl,Wt as ms,X as ps,Xt as hl,Y as gl,Z as ue,_t as ul,a as jr,at as Ga,b as yn,bt as vr,c as Dr,ct as bl,d as kr,dt as ht,en as fl,et as hs,f as Xe,ft as Xa,g as Yt,gt as yl,h as It,ht as jn,i as Gr,it as gs,j as Nr,jt as jl,k as Ue,kt as vl,l as er,lt as kl,m as Nl,mt as At,n as wl,nt as us,o as Dt,ot as Sl,p as vn,pt as Cl,q as $l,qt as Il,r as kn,rt as Al,s as Dl,st as Tl,t as Ce,tt as Nn,u as Rl,ut as El,v as bs,vt as wr,w as ut,wt as Pl,x as at,xt as Sr,y as wn,yt as Sn,z as zl,zt as pt}from"./react-vendor.BdaCIOuY.js";var a=hn(fl(),1),e=al(),Ml=()=>{const[t,r]=(0,a.useState)(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);return(0,a.useEffect)(()=>{const s=window.document.documentElement;t?(s.classList.add("dark"),localStorage.setItem("theme","dark")):(s.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]),(0,e.jsx)("button",{onClick:()=>r(!t),className:"relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-yellow-400 dark:hover:text-yellow-400",title:t?"حالت روشن":"حالت تاریک",children:(0,e.jsxs)("div",{className:"relative h-5 w-5",children:[(0,e.jsx)(Nl,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-90 scale-0 opacity-0":"rotate-0 scale-100 opacity-100"}`}),(0,e.jsx)(sl,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`})]})})},Fl=({onToggleSidebar:t,userRole:r,onRoleChange:s,userName:c})=>{const b=hl(),n=r==="admin",g=()=>{sessionStorage.removeItem("token"),sessionStorage.removeItem("authUser"),sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("userRole"),sessionStorage.removeItem("representativeId"),sessionStorage.removeItem("activeSection"),localStorage.removeItem("token"),localStorage.removeItem("authUser"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userRole"),localStorage.removeItem("representativeId"),localStorage.removeItem("activeSection"),b("/login",{replace:!0})},i=c?.trim()||"کاربر";return(0,e.jsx)("nav",{className:"sticky top-0 z-40 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-xl transition-colors dark:border-gray-700 dark:bg-gray-900/80",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6 md:py-4",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2 sm:gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-xs font-black text-white shadow-sm shadow-cyan-500/20 sm:px-4 sm:text-sm",title:n?"دسترسی کامل ادمین":"دسترسی پنل نمایندگی",children:[n?(0,e.jsx)(yl,{className:"h-4 w-4"}):(0,e.jsx)(jr,{className:"h-4 w-4"}),(0,e.jsx)("span",{children:n?"ادمین":"نماینده"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-2 sm:px-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-sm font-bold text-white shadow-sm",children:i.charAt(0)}),(0,e.jsxs)("div",{className:"hidden lg:block",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-800 dark:text-white",children:i}),(0,e.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:n?"مدیر سیستم":"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4",children:[(0,e.jsx)(Ml,{}),(0,e.jsx)("button",{type:"button",onClick:t,className:"flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400 md:h-11 md:w-11",title:"باز و بسته‌کردن منو",children:(0,e.jsx)(rl,{className:"h-5 w-5 md:h-6 md:w-6"})}),(0,e.jsxs)("button",{type:"button",onClick:g,className:"flex items-center gap-2 rounded-xl bg-red-500 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 sm:px-4 sm:text-sm",title:"خروج از حساب",children:[(0,e.jsx)(gl,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden sm:inline",children:"خروج"})]})]})]})})},Ll=({isOpen:t,onClose:r,activeSection:s,onSectionChange:c,userRole:b})=>{const n=b==="representative"||b==="user";return(0,e.jsxs)(e.Fragment,{children:[t?(0,e.jsx)("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in lg:hidden",onClick:r,"aria-hidden":"true"}):null,(0,e.jsxs)("aside",{dir:"rtl",className:`fixed top-0 right-0 z-50 flex h-screen w-72 flex-col border-l border-gray-700 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-500 ease-in-out lg:top-[73px] lg:h-[calc(100vh-73px)] ${t?"translate-x-0":"translate-x-full overflow-hidden lg:w-0 lg:translate-x-0"}`,children:[(0,e.jsx)("div",{className:"shrink-0 border-b border-gray-700 p-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold uppercase tracking-wider text-gray-500",children:"منوی اصلی"}),(0,e.jsx)("p",{className:"mt-0.5 flex items-center gap-1.5 text-lg font-bold text-cyan-400",children:n?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(jr,{className:"h-3.5 w-3.5"}),"پنل نمایندگی"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Gr,{className:"h-3.5 w-3.5"}),"دسترسی کامل"]})})]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400 lg:hidden","aria-label":"بستن منو",children:(0,e.jsx)(Ce,{className:"h-4 w-4"})})]})}),(0,e.jsx)("nav",{className:"flex-1 space-y-1  p-1",children:(n?[{id:"dashboard",label:"داشبورد",icon:cs},{id:"products",label:"لیست قیمت‌ها",icon:pt},{id:"my-shipments",label:"بارهای من",icon:er},{id:"warehouse",label:"انبار من",icon:ra},{id:"sales-reports",label:"اعلام فروش",icon:pt,accent:"emerald"},{id:"return-request",label:"ثبت درخواست مرجوعی",icon:Ja,accent:"rose"},{id:"support",label:"پشتیبانی",icon:gs},{id:"warranties",label:"گارانتی",icon:at,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Yt,accent:"amber"},{id:"profile",label:"پروفایل",icon:jr}]:[{id:"dashboard",label:"داشبورد",icon:cs},{id:"products",label:"لیست قیمت‌ها",icon:pt},{id:"representatives",label:"لیست نمایندگان",icon:Gr},{id:"warehouse",label:"انبارداری",icon:It},{id:"upload",label:"آپلود اکسل",icon:wr},{id:"shipments",label:"ارسال بار",icon:er},{id:"sales-reports",label:"اعلام فروش نمایندگان",icon:pt,accent:"emerald"},{id:"return-requests",label:"بررسی درخواست‌های مرجوعی",icon:Ge,accent:"rose"},{id:"support-requests",label:"رسیدگی به درخواست‌ها",icon:gs},{id:"warranties",label:"گارانتی",icon:at,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Yt,accent:"amber"}]).map((g,i)=>{const u=g.icon,h=s===g.id,d=g.accent==="rose",N=g.accent==="emerald",v=g.accent==="amber",k=g.accent==="sky",x=d?"border-rose-500/50 bg-gradient-to-r from-rose-500/25 to-red-500/20 text-white shadow-md shadow-rose-500/20":N?"border-emerald-500/50 bg-gradient-to-r from-emerald-500/25 to-teal-500/20 text-white shadow-md shadow-emerald-500/20":v?"border-amber-500/50 bg-gradient-to-r from-amber-500/25 to-yellow-500/20 text-white shadow-md shadow-amber-500/20":k?"border-sky-500/50 bg-gradient-to-r from-sky-500/25 to-blue-500/20 text-white shadow-md shadow-sky-500/20":"border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-md shadow-cyan-500/20",p=d?"border-rose-500/10 bg-rose-500/5 text-rose-300 hover:border-rose-500/30 hover:bg-rose-500/15 hover:text-rose-100":N?"border-emerald-500/10 bg-emerald-500/5 text-emerald-300 hover:border-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-100":v?"border-amber-500/10 bg-amber-500/5 text-amber-300 hover:border-amber-500/30 hover:bg-amber-500/15 hover:text-amber-100":k?"border-sky-500/10 bg-sky-500/5 text-sky-300 hover:border-sky-500/30 hover:bg-sky-500/15 hover:text-sky-100":"border-transparent text-gray-400 hover:bg-gray-800 hover:text-white",w=d?"text-rose-300":N?"text-emerald-300":v?"text-amber-400":k?"text-sky-300":"text-cyan-400",o=d?"text-rose-400":N?"text-emerald-400":v?"text-amber-400":k?"text-sky-400":"",$=d?"bg-rose-400":N?"bg-emerald-400":v?"bg-amber-400":k?"bg-sky-400":"bg-cyan-400";return(0,e.jsxs)("button",{type:"button",onClick:()=>{c(g.id),window.innerWidth<1024&&r()},style:{animationDelay:`${i*40}ms`},className:`group flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-right  transition-all duration-600 animate-slide-in-right ${h?x:p}`,children:[(0,e.jsx)("span",{className:"shrink-0 transition-transform duration-300 group-hover:scale-110",children:(0,e.jsx)(u,{className:`h-5 w-5 ${h?w:o}`})}),(0,e.jsx)("span",{className:"min-w-0 flex-1 text-[12px] font-bold leading-5",children:g.label}),h?(0,e.jsx)("span",{className:`mr-auto h-1.5 w-1.5 shrink-0 animate-pulse rounded-full ${$}`}):null]},g.id)})})]})]})},fs=t=>t?{...t,name:t.name||"",price:Number(t.price)||0,category:t.category||"عمومی",stock:Number(t.stock)||0,description:t.description||"",image:t.image||""}:null,Ul=({product:t,onClose:r,onSave:s})=>{const[c,b]=(0,a.useState)(fs(t)),[n,g]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{b(fs(t)),g(!1)},[t]),!c)return null;const i=()=>{g(!0),window.setTimeout(()=>{r()},250)},u=(d,N)=>{b(v=>v?{...v,[d]:N}:null)},h=()=>{s({...c,name:c.name.trim()||"بدون نام",price:Number(c.price)||0,category:c.category.trim()||"عمومی",stock:Number(c.stock)||0,description:c.description.trim(),updatedAt:new Date().toISOString()}),i()};return(0,e.jsxs)("div",{dir:"rtl",className:`fixed inset-0 z-50 flex items-end justify-center p-0 transition-all duration-300 sm:items-center sm:p-4 ${n?"opacity-0":"opacity-100"}`,onClick:i,children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-md"}),(0,e.jsx)("div",{className:"absolute left-0 top-10 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl sm:left-20 sm:top-20 sm:h-96 sm:w-96"}),(0,e.jsx)("div",{className:"absolute bottom-0 right-0 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl sm:bottom-20 sm:right-20 sm:h-96 sm:w-96"}),(0,e.jsxs)("div",{className:`relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-300 sm:max-h-[90vh] sm:rounded-3xl ${n?"translate-y-8 scale-95 opacity-0":"translate-y-0 scale-100 opacity-100"}`,onClick:d=>d.stopPropagation(),children:[(0,e.jsx)("div",{className:"absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between gap-3 border-b border-gray-700 p-4 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3 sm:gap-4",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg sm:h-14 sm:w-14",children:(0,e.jsx)(Zt,{className:"h-5 w-5 sm:h-7 sm:w-7"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate text-lg font-bold text-white sm:text-2xl",children:"ویرایش محصول"}),(0,e.jsx)("p",{className:"mt-0.5 truncate text-xs text-gray-400 sm:text-sm",children:"اطلاعات محصول را تغییر دهید"})]})]}),(0,e.jsx)("button",{type:"button",onClick:i,"aria-label":"بستن پنجره ویرایش",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6",children:(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(vn,{className:"h-4 w-4"}),"عنوان"]}),(0,e.jsx)("input",{type:"text",value:c.name,onChange:d=>{u("name",d.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(pt,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:c.price,onChange:d=>{u("price",Number(d.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(gt,{className:"h-4 w-4"}),"موجودی"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:c.stock,onChange:d=>{u("stock",Number(d.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(bl,{className:"h-4 w-4"}),"دسته‌بندی"]}),(0,e.jsx)("input",{type:"text",value:c.category,onChange:d=>{u("category",d.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(ht,{className:"h-4 w-4"}),"توضیحات"]}),(0,e.jsx)("textarea",{value:c.description,onChange:d=>{u("description",d.target.value)},rows:4,className:"w-full resize-none rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]})}),(0,e.jsxs)("div",{className:"grid shrink-0 grid-cols-2 gap-3 border-t border-gray-700 p-4 sm:flex sm:p-6",children:[(0,e.jsx)("button",{type:"button",onClick:i,className:"min-h-11 rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-xs font-bold text-gray-300 transition-all hover:bg-gray-700 sm:flex-1 sm:px-6 sm:text-sm",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:h,className:"min-h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-3 text-xs font-bold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 sm:flex-1 sm:px-6 sm:text-sm",children:(0,e.jsxs)("span",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Ya,{className:"h-4 w-4"}),"ذخیره"]})})]})]})]})},lr=({message:t})=>(0,e.jsxs)("div",{className:"rounded-2xl bg-white p-8 text-center shadow-lg md:p-16",children:[(0,e.jsx)("p",{className:"mb-4 text-5xl md:text-6xl",children:"🔒"}),(0,e.jsx)("p",{className:"text-base text-gray-500 md:text-xl",children:t})]}),bt=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),ft=({title:t,value:r,description:s,icon:c,iconClassName:b,valueClassName:n="text-gray-900 dark:text-gray-100"})=>(0,e.jsx)("article",{className:"rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:`mt-3 truncate text-2xl font-black sm:text-2xl ${n}`,children:r}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-500 dark:text-gray-400",children:s})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${b}`,children:c})]})}),ql=({totalProducts:t,totalPrice:r,representatives:s=[],shipments:c=[]})=>{const b=Array.isArray(s)?s:[],n=Array.isArray(c)?c:[],g=b.filter(x=>x.status==="active").length,i=b.reduce((x,p)=>x+(Number(p.storeItemsCount)||0),0),u=b.reduce((x,p)=>x+(Number(p.storeItemsTotalValue)||0),0),h=b.reduce((x,p)=>x+(Number(p.last10DaysSales)||0),0),d=b.reduce((x,p)=>x+(Number(p.averageSales)||0),0),N=n.filter(x=>x.status==="delivered").length,v=n.filter(x=>x.status==="shipping").length,k=b.reduce((x,p)=>x+(Number(p.salesAnnouncementCount)||0),0);return(0,e.jsxs)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:[(0,e.jsx)(ft,{title:"تعداد نمایندگان فعال",value:bt(g),description:"نمایندگان با وضعیت فعال",icon:(0,e.jsx)(Gr,{className:"h-6 w-6"}),iconClassName:"bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",valueClassName:"text-blue-700 dark:text-blue-400"}),(0,e.jsx)(ft,{title:"تعداد محصولات انبار",value:bt(i),description:"مجموع کالاهای ثبت‌شده در انبار نمایندگان",icon:(0,e.jsx)(ra,{className:"h-6 w-6"}),iconClassName:"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",valueClassName:"text-emerald-700 dark:text-emerald-400"}),(0,e.jsx)(ft,{title:"مجموع مبلغ کل انبارها",value:`${bt(u)} تومان`,description:"مجموع",icon:(0,e.jsx)(kn,{className:"h-6 w-6"}),iconClassName:"bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400",valueClassName:"text-indigo-700 dark:text-indigo-400"}),(0,e.jsx)(ft,{title:"فروش ۱۰ روز قبل",value:`${bt(h)} تومان`,description:"جمع فروش نمایندگان در ۱۰ روز گذشته",icon:(0,e.jsx)(ol,{className:"h-6 w-6"}),iconClassName:"bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",valueClassName:"text-amber-700 dark:text-amber-400"}),(0,e.jsx)(ft,{title:"میانگین فروش ماهانه",value:`${bt(Math.round(d))} تومان`,description:"مجموع میانگین فروش ماهانه نمایندگان",icon:(0,e.jsx)(Cl,{className:"h-6 w-6"}),iconClassName:"bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400",valueClassName:"text-cyan-700 dark:text-cyan-400"}),(0,e.jsx)(ft,{title:"تعداد بارهای ارسال شده",value:bt(N),description:"مجموع بارهای تحویل‌شده",icon:(0,e.jsx)(er,{className:"h-6 w-6"}),iconClassName:"bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400",valueClassName:"text-purple-700 dark:text-purple-400"}),(0,e.jsx)(ft,{title:"تعداد بارهای در حال ارسال",value:bt(v),description:"بارهای در مسیر تحویل",icon:(0,e.jsx)(It,{className:"h-6 w-6"}),iconClassName:"bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",valueClassName:"text-rose-700 dark:text-rose-400"}),(0,e.jsx)(ft,{title:"اعلام فروش نمایندگان",value:bt(k),description:"مجموع اعلام فروش ثبت‌شده توسط نمایندگان",icon:(0,e.jsx)(wn,{className:"h-6 w-6"}),iconClassName:"bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",valueClassName:"text-orange-700 dark:text-orange-400"})]})},Ol="http://localhost:5000/api",_l=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:Ol},Bl=_l("https://myshop-backend-8nu7.onrender.com/api"),Wl=()=>{if(typeof window>"u")return"";const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"],s=[];window.sessionStorage&&s.push(window.sessionStorage),window.localStorage&&s.push(window.localStorage);for(const c of s){for(const b of t){const n=c.getItem(b);if(n&&n!=="null"&&n!=="undefined")return n.replace(/^Bearer\s+/i,"").trim()}for(const b of r){const n=c.getItem(b);if(n)try{const g=JSON.parse(n),i=g?.token||g?.accessToken||g?.authToken||g?.access_token||g?.data?.token;if(i)return String(i).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},St=t=>{const r=Number(t);return Number.isFinite(r)?r:0},_e=t=>St(t).toLocaleString("fa-IR"),Vl=t=>{const r=String(t?.name||"").toLowerCase();return r.endsWith(".xlsx")||r.endsWith(".xls")},Ql=t=>String(t.row??t.rowNumber??"نامشخص"),Hl=t=>"reason"in t&&t.reason?t.reason:"error"in t&&t.error?t.error:"message"in t&&t.message?t.message:"خطای نامشخص",ia=t=>"name"in t&&t.name?t.name:"productName"in t&&t.productName?t.productName:"بدون نام",oa=t=>String(t.row??t.rowNumber??"نامشخص"),da=(t,r,s,c)=>{const b=St(r.createdCount),n=St(r.updatedCount),g=St(r.unchangedCount),i=St(r.zeroPriceCount),u=St(r.skippedCount),h=St(r.totalRows),d=St(r.totalProducts),N=[s?u>0?"⚠️ فایل ذخیره شد، اما بعضی ردیف‌ها ثبت نشدند":g>0?"✅ فایل ذخیره شد؛ بعضی محصولات از قبل وجود داشتند":"✅ فایل Excel با موفقیت ذخیره شد":"⚠️ فایل پردازش شد، اما تغییری ذخیره نشد","",`📄 نام فایل: ${t}`,`📊 تعداد ردیف‌ها: ${_e(h)}`,`➕ محصول جدید: ${_e(b)}`,`🔄 محصول به‌روزشده: ${_e(n)}`,`⏭️ بدون تغییر: ${_e(g)}`,`⚠️ قیمت صفر: ${_e(i)}`,`❌ ثبت‌نشده: ${_e(u)}`,`📦 کل محصولات: ${_e(d)}`];c&&!s&&(N.push(""),N.push(c)),r.createdProducts&&r.createdProducts.length>0&&(N.push(""),N.push(`محصولات اضافه‌شده (${_e(r.createdProducts.length)} مورد):`),r.createdProducts.forEach(k=>{N.push(`• ردیف ${oa(k)}: ${ia(k)} — ${_e(k.price)} تومان`)})),r.updatedProducts&&r.updatedProducts.length>0&&(N.push(""),N.push(`محصولات به‌روزشده (${_e(r.updatedProducts.length)} مورد):`),r.updatedProducts.forEach(k=>{N.push(`• ردیف ${oa(k)}: ${ia(k)} — قیمت جدید: ${_e(k.newPrice)} تومان`)})),r.unchangedProducts&&r.unchangedProducts.length>0&&(N.push(""),N.push(`محصولات بدون تغییر (${_e(r.unchangedProducts.length)} مورد):`),r.unchangedProducts.forEach(k=>{N.push(`• ردیف ${oa(k)}: ${ia(k)} — ${_e(k.price)} تومان`)}));const v=[...r.errors||[],...r.skippedRows||[]];return v.length>0&&(N.push(""),N.push(`جزئیات ردیف‌های ثبت‌نشده (${_e(v.length)} مورد):`),v.forEach(k=>{N.push(`• ردیف ${Ql(k)}: ${Hl(k)}`)})),N.join(`
`)},Jl=({onUploadSuccess:t})=>{const r=(0,a.useRef)(null),[s,c]=(0,a.useState)(!1),[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(null),u=()=>{if(b){window.alert("⏳ لطفاً صبر کنید؛ فایل قبلی هنوز در حال پردازش است.");return}r.current&&(r.current.value="",r.current.click())},h=async k=>{if(!Vl(k)){const x="فقط فایل Excel با فرمت .xlsx یا .xls مجاز است.";window.alert(`❌ خطا

${x}`),i({type:"error",text:x});return}if(!b){n(!0),i(null);try{const x=new FormData;x.append("file",k);const p=Wl(),w={Accept:"application/json"};p&&(w.Authorization=`Bearer ${p}`);const o=(await xe.post(`${Bl}/products/upload`,x,{withCredentials:!0,headers:w,timeout:12e4})).data,$=o.data||{};if(!o.success){const z=da(k.name,$,!1,o.error||o.message);window.alert(z),i({type:"error",text:z});return}const q=da(k.name,$,!0,o.message);window.alert(q),i({type:"success",text:q});try{await t()}catch(z){console.error("آپلود موفق بود، اما لیست تازه نشد:",z),i({type:"success",text:`${q}

⚠️ فایل ذخیره شد، اما لیست صفحه تازه نشد.`})}}catch(x){console.error("❌ خطا در آپلود Excel:",x);let p="هنگام آپلود فایل خطای غیرمنتظره‌ای رخ داد.";if(xe.isAxiosError(x)){const w=x.response?.status,o=x.response?.data;o?.data?p=da(k.name,o.data,!1,o.error||o.message):p=o?.error||o?.message||x.message||p,w===401&&(p="جلسه ورود شما منقضی شده است؛ دوباره وارد شوید."),w===403&&(p="این حساب اجازه آپلود لیست قیمت را ندارد."),w===413&&(p="حجم فایل نباید بیشتر از ۱۰ مگابایت باشد."),x.response||(p="ارتباط با سرور برقرار نشد.")}else x instanceof Error&&(p=x.message);window.alert(`❌ خطا در آپلود Excel

${p}`),i({type:"error",text:p})}finally{n(!1),r.current&&(r.current.value="")}}},d=k=>{const x=k.currentTarget.files?.[0];k.currentTarget.value="",x&&h(x)},N=k=>{if(k.preventDefault(),k.stopPropagation(),k.type==="dragenter"||k.type==="dragover"){c(!0);return}k.type==="dragleave"&&c(!1)},v=k=>{if(k.preventDefault(),k.stopPropagation(),c(!1),b)return;const x=k.dataTransfer.files?.[0];x&&h(x)};return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-8",children:[(0,e.jsxs)("div",{className:"mb-6 text-center",children:[(0,e.jsxs)("h2",{className:"mb-2 flex items-center justify-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100",children:[(0,e.jsx)(wr,{className:"h-6 w-6 text-purple-600 dark:text-purple-400"}),"آپلود هوشمند لیست قیمت"]}),(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"فایل Excel شامل عنوان محصول، قیمت محصول و دسته‌بندی"})]}),(0,e.jsxs)("div",{className:`rounded-2xl border-2 border-dashed p-8 text-center transition-all md:p-12 ${s?"border-purple-500 bg-purple-50 dark:bg-purple-900/20":"border-gray-300 hover:border-purple-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"}`,onDragEnter:N,onDragLeave:N,onDragOver:N,onDrop:v,children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-purple-500 dark:text-purple-400",children:(0,e.jsx)(Xa,{className:"h-16 w-16"})}),(0,e.jsx)("p",{className:"mb-2 text-lg font-medium text-gray-700 dark:text-gray-300",children:"فایل Excel را اینجا بکشید و رها کنید"}),(0,e.jsx)("p",{className:"mb-4 text-sm text-gray-500",children:"یا"}),(0,e.jsx)("input",{ref:r,type:"file",accept:".xlsx,.xls",onChange:d,className:"hidden"}),(0,e.jsx)("button",{type:"button",onClick:u,disabled:b,className:`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-lg transition-all ${b?"cursor-not-allowed bg-gray-400":"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"}`,children:b?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}),"در حال پردازش..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(wr,{className:"h-5 w-5"}),"انتخاب فایل Excel"]})}),b?(0,e.jsxs)("div",{className:"mt-6 flex flex-col items-center",children:[(0,e.jsx)(ue,{className:"h-8 w-8 animate-spin text-purple-600"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"در حال ثبت محصولات و به‌روزرسانی لیست قیمت..."})]}):null]}),g?(0,e.jsxs)("div",{className:`mt-6 flex gap-3 rounded-xl border p-4 ${g.type==="success"?"border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20":"border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20"}`,children:[g.type==="success"?(0,e.jsx)(Ne,{className:"h-5 w-5 shrink-0 text-green-600 dark:text-green-400"}):(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0 text-red-600 dark:text-red-400"}),(0,e.jsx)("p",{className:`whitespace-pre-line text-sm font-bold leading-7 ${g.type==="success"?"text-green-800 dark:text-green-300":"text-red-800 dark:text-red-300"}`,children:g.text})]}):null,(0,e.jsxs)("div",{className:"mt-6 flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsx)(Xn,{className:"h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-medium text-blue-800 dark:text-blue-300",children:"قالب فایل Excel"}),(0,e.jsxs)("p",{className:"mt-1 text-xs leading-6 text-blue-600 dark:text-blue-400",children:["ستون‌های فایل باید شامل"," ",(0,e.jsx)("strong",{children:"عنوان محصول"}),"،"," ",(0,e.jsx)("strong",{children:"قیمت محصول"})," و"," ",(0,e.jsx)("strong",{children:"دسته‌بندی"})," ","باشند. محصول بدون قیمت با قیمت صفر ثبت می‌شود."]})]})]})]})},Yl=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],ys=t=>{const r=Number(t);return`${new Intl.NumberFormat("fa-IR").format(Number.isFinite(r)?r:0)} تومان`},Ct=t=>String(t??"").replace(/\u200c/g," ").replace(/\u200f/g,"").replace(/\u200e/g,"").replace(/\s+/g," ").trim().toLowerCase(),Wr=t=>String(t.name||t.productName||t.title||"بدون نام").trim(),Tr=t=>String(t.brand||t.brandName||"").trim(),gr=t=>String(t.category||"").trim(),js=(t,r)=>{const s=String(t.id??"").trim();return s||`product-${Ct(Wr(t))}-${Ct(gr(t))}-${r}`},Cn=({products:t,userRole:r,onEdit:s,onDelete:c})=>{const[b,n]=(0,a.useState)(""),[g,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),d=(0,a.useMemo)(()=>Array.isArray(t)?t.filter(Boolean):[],[t]),N=(0,a.useMemo)(()=>{const o=new Set;return Yl.forEach($=>{o.add($)}),d.forEach($=>{const q=gr($);q&&o.add(q)}),Array.from(o)},[d]),v=(0,a.useMemo)(()=>{const o=new Set;return d.forEach($=>{const q=Tr($);q&&o.add(q)}),Array.from(o).sort(($,q)=>$.localeCompare(q,"fa"))},[d]);(0,a.useEffect)(()=>{g&&!N.includes(g)&&i("")},[N,g]),(0,a.useEffect)(()=>{u&&!v.includes(u)&&h("")},[v,u]);const k=(0,a.useMemo)(()=>{const o=Ct(b),$=Ct(g),q=Ct(u);return d.filter(z=>{const O=Ct(Wr(z)),G=Ct(Tr(z)),P=Ct(gr(z));return(!o||O.includes(o)||G.includes(o)||P.includes(o))&&(!$||P===$)&&(!q||G===q)})},[d,b,g,u]),x=!!(b||g||u),p=()=>{n(""),i(""),h("")},w=r==="admin";return d.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(bn,{className:"h-16 w-16 md:h-24 md:w-24"})}),(0,e.jsx)("p",{className:"text-lg font-bold text-gray-500 dark:text-gray-400 md:text-xl",children:"هنوز محصولی اضافه نشده است"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"از بخش آپلود Excel شروع کنید."})]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4",children:[(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(vn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"لیست قیمت محصولات"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:"قیمت‌های ثبت‌شده و به‌روزرسانی‌شده محصولات"})]})]}),(0,e.jsxs)("span",{className:"w-fit rounded-lg bg-gray-100 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:[new Intl.NumberFormat("fa-IR").format(k.length)," ","محصول"]})]}),(0,e.jsxs)("div",{className:"mt-4",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Tl,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"فیلتر و جستجو"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ut,{className:"absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"text",value:b,onChange:o=>{n(o.target.value)},placeholder:"جستجوی عنوان، برند یا دسته‌بندی...",className:"w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:g,onChange:o=>{i(o.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),N.map(o=>(0,e.jsx)("option",{value:o,children:o},o))]}),(0,e.jsxs)("select",{value:u,onChange:o=>{h(o.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),v.map(o=>(0,e.jsx)("option",{value:o,children:o},o))]})]}),x?(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[new Intl.NumberFormat("fa-IR").format(k.length)," ","محصول یافت شد"]}),(0,e.jsx)("button",{type:"button",onClick:p,className:"text-xs font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400",children:"پاک کردن فیلترها"})]}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full min-w-[860px] border-collapse text-right",children:[(0,e.jsx)("thead",{className:"border-b border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-right text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"عنوان"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"برند"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"قیمت فعلی"}),w?(0,e.jsx)("th",{className:"px-4 py-3 text-center text-sm font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:k.map((o,$)=>{const q=String(o.id??"").trim(),z=js(o,$);return(0,e.jsxs)("tr",{className:"bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"max-w-[340px] border-l border-gray-100 px-4 py-4 text-right text-sm font-bold text-gray-800 dark:border-gray-700 dark:text-gray-200",children:(0,e.jsx)("p",{className:"line-clamp-2",children:Wr(o)})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400",children:Tr(o)||"-"}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center dark:border-gray-700",children:(0,e.jsx)("span",{className:"rounded-md bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:gr(o)||"عمومی"})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm font-black text-blue-700 dark:border-gray-700 dark:text-blue-400",children:ys(o.price)}),w?(0,e.jsx)("td",{className:"px-4 py-4",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(o)},className:"rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(Zt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!q,onClick:()=>{q&&c(q)},className:"rounded-lg p-2 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]})}):null]},z)})})]})}),(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:k.map((o,$)=>{const q=String(o.id??"").trim();return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"line-clamp-2 text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:Wr(o)}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[10px]",children:[(0,e.jsxs)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:["برند:"," ",Tr(o)||"بدون برند"]}),(0,e.jsx)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:gr(o)||"عمومی"})]})]}),w?(0,e.jsxs)("div",{className:"flex shrink-0 gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(o)},className:"rounded-lg p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(Zt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!q,onClick:()=>{q&&c(q)},className:"rounded-lg p-2 text-red-600 hover:bg-red-100 disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]}):null]}),(0,e.jsxs)("div",{className:"mt-4 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-gray-400 dark:text-gray-500",children:"قیمت فعلی"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-blue-700 dark:text-blue-400",children:ys(o.price)})]})]},js(o,$))})}),k.length===0?(0,e.jsxs)("div",{className:"py-10 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(dl,{className:"h-10 w-10"})}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-400",children:"محصولی با این مشخصات پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:p,className:"mt-3 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400",children:"پاک‌کردن فیلترها"})]}):null]})]})},Za=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),$n=t=>{const r=Za(t).replace(/-/g,"/").replace(/[^\d/]/g,"").replace(/\//g,"").slice(0,8);return r.length<=4?r:r.length<=6?`${r.slice(0,4)}/${r.slice(4)}`:`${r.slice(0,4)}/${r.slice(4,6)}/${r.slice(6,8)}`},In=t=>/^1[34]\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/.test(t),Kt=t=>{const r=Za(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?new Intl.NumberFormat("fa-IR").format(s):String(t??"—")},vs=t=>String(t).padStart(2,"0"),Kl=({year:t,month:r,day:s})=>`${t}/${vs(r)}/${vs(s)}`,ks=t=>{const r=$n(t);if(!In(r))return null;const[s,c,b]=r.split("/").map(Number);return{year:s,month:c,day:b}},Gl=t=>{const r=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],s=t-621;let c=-14,b=r[0],n=0;for(let u=1;u<r.length;u+=1){const h=r[u];if(n=h-b,s<h)break;c+=Math.floor(n/33)*8+Math.floor(n%33/4),b=h}let g=s-b;c+=Math.floor(g/33)*8+Math.floor((g%33+3)/4),n%33===4&&n-g===4&&(c+=1),n-g<6&&(g=g-n+Math.floor((n+4)/33)*33);let i=(g+1)%33-1;return i===-1&&(i=4),i===0||i===4},Xl=(t,r)=>r>=1&&r<=6?31:r>=7&&r<=11?30:r===12?Gl(t)?30:29:30,Zl=(t,r,s)=>{const c=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=[0,31,31,31,31,31,31,30,30,30,30,30,29],n=t-1600,g=r-1,i=s-1;let u=365*n+Math.floor((n+3)/4)-Math.floor((n+99)/100)+Math.floor((n+399)/400);for(let k=0;k<g;k+=1)u+=c[k+1];g>1&&(t%4===0&&t%100!==0||t%400===0)&&(u+=1),u+=i;let h=u-79;const d=Math.floor(h/12053);h%=12053;let N=979+33*d+4*Math.floor(h/1461);h%=1461,h>=366&&(N+=Math.floor((h-1)/365),h=(h-1)%365);let v=1;for(;v<=12&&h>=b[v];)h-=b[v],v+=1;return{year:N,month:v,day:h+1}},ei=(t,r,s)=>{const c=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=t-979,n=r-1,g=s-1;let i=365*b+Math.floor(b/33)*8+Math.floor((b%33+3)/4);for(let v=0;v<n;v+=1)i+=v<6?31:30;i+=g;let u=i+79,h=1600+400*Math.floor(u/146097);u%=146097;let d=!0;u>=36525&&(u-=1,h+=100*Math.floor(u/36524),u%=36524,u>=365?u+=1:d=!1),h+=4*Math.floor(u/1461),u%=1461,u>=366&&(d=!1,u-=1,h+=Math.floor(u/365),u%=365);let N=0;for(;N<12&&u>=c[N+1]+(N===1&&d?1:0);)u-=c[N+1]+(N===1&&d?1:0),N+=1;return{year:h,month:N+1,day:u+1}},ti=(t,r,s)=>{const c=ei(t,r,s);return(new Date(c.year,c.month-1,c.day).getDay()+1)%7},ri=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],ai=["ش","ی","د","س","چ","پ","ج"],si=({value:t,onChange:r,disabled:s=!1,label:c="تاریخ"})=>{const[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(()=>ks(t)||Zl(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate())),u=ks(t),h=x=>{r(Kl({...g,day:x})),n(!1)},d=x=>{i(p=>{let w=p.month+x,o=p.year;return w>12&&(w=1,o+=1),w<1&&(w=12,o-=1),{...p,year:o,month:w,day:1}})},N=Xl(g.year,g.month),v=ti(g.year,g.month,1),k=[];for(let x=0;x<v;x+=1)k.push(null);for(let x=1;x<=N;x+=1)k.push(x);return(0,e.jsxs)("div",{className:"relative w-full",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(ds,{className:"h-3.5 w-3.5 text-gray-400"}),c]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("input",{type:"text",readOnly:!0,value:t,onClick:()=>{s||n(x=>!x)},disabled:s,placeholder:"1403/01/01",className:"w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-500"}),(0,e.jsx)("button",{type:"button",onClick:()=>{s||n(x=>!x)},disabled:s,className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-blue-500 disabled:opacity-50",children:(0,e.jsx)(ds,{className:"h-4 w-4"})})]}),b?(0,e.jsxs)("div",{className:"absolute left-0 right-0 z-[100] mt-2 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:()=>d(1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(el,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})}),(0,e.jsxs)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:[ri[g.month-1]," ",Kt(g.year)]}),(0,e.jsx)("button",{type:"button",onClick:()=>d(-1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(jl,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})})]}),(0,e.jsx)("div",{className:"mb-2 grid grid-cols-7 gap-1",children:ai.map(x=>(0,e.jsx)("div",{className:"text-center text-xs font-bold text-gray-400",children:x},x))}),(0,e.jsx)("div",{className:"grid grid-cols-7 gap-1",children:k.map((x,p)=>{const w=u?.day===x&&u?.month===g.month&&u?.year===g.year;return(0,e.jsx)("button",{type:"button",disabled:!x,onClick:()=>{x&&h(x)},className:`h-8 w-full rounded-lg text-xs font-bold transition-all ${x?w?"bg-blue-600 text-white shadow-md":"text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700":"invisible"}`,children:x?Kt(x):""},`${x||"empty"}-${p}`)})}),(0,e.jsx)("div",{className:"mt-3 flex justify-end",children:(0,e.jsx)("button",{type:"button",onClick:()=>n(!1),className:"text-xs text-gray-500 transition hover:text-red-500",children:"بستن"})})]}):null]})},Vr=t=>Za(t).replace(/[^\d]/g,""),Ns=t=>{const r=Number(Vr(t));return!Number.isFinite(r)||r===0?"":r.toLocaleString("en-US")},ur=()=>{const t=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date);return`${t.find(r=>r.type==="year")?.value||""}/${t.find(r=>r.type==="month")?.value||""}/${t.find(r=>r.type==="day")?.value||""}`},Rr={name:"",email:"",phone:"",province:"",city:"",code:"",address:"",description:"",shopDescription:"",orders:0,status:"active",startDate:ur(),depositAmount:"0",guaranteeCheck:"0",totalFinancialCommitment:"0",shipmentsCount:0,storeItemsCount:0,storeItemsTotalValue:0,returnRequestsCount:0,last10DaysSales:0,averageSales:0},ni=({representatives:t,userRole:r,onOpenDashboard:s,onAddRepresentative:c,onEditRepresentative:b,onDeleteRepresentative:n})=>{const[g,i]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[d,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(Rr),x=(0,a.useRef)(null),p=(0,a.useRef)(null),w=(0,a.useRef)(null),o=(0,a.useRef)(null),$=(0,a.useRef)(null),q=(0,a.useRef)(null),z=(0,a.useRef)(null),O=Number(Vr(v.depositAmount))||0,G=Number(Vr(v.guaranteeCheck))||0,P=(0,a.useMemo)(()=>O+G,[O,G]),S=(C,F)=>{C.key==="Enter"&&(C.preventDefault(),F.current?.focus())},y=()=>{const C=window.open("","_blank","width=900,height=700");if(!C){alert("لطفاً popup blocker را غیرفعال کنید");return}const F=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),f=t.map((m,L)=>`
      <tr>
        <td style="text-align:center;">${L+1}</td>
        <td style="text-align:center;">${m.code||"—"}</td>
        <td>${m.name||"—"}</td>
        <td>${m.province||"—"}</td>
        <td>${m.city||"—"}</td>
        <td style="text-align:center;" dir="ltr">${m.phone||"—"}</td>
        <td style="text-align:center;">${m.storeItemsCount||0}</td>
        <td style="text-align:center;">${m.status==="inactive"?"غیرفعال":"فعال"}</td>
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
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: 021-93111021</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${F}</p>
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
    ${f}
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
  <p>هلدینگ مهر - 1405</p>
</div>

</body>
</html>`),C.document.close(),C.focus(),setTimeout(()=>{C.print()},1e3)},I=C=>{C?(k({name:C.name??"",email:C.email??"",code:String(C.code??""),province:C.province??"",city:C.city??"",phone:C.phone??"",startDate:C.startDate||ur(),status:C.status==="inactive"?"inactive":"active",address:C.address??"",description:C.description??"",shopDescription:C.shopDescription??"",orders:Number(C.orders)||0,depositAmount:String(C.depositAmount??"0"),guaranteeCheck:String(C.guaranteeCheck??"0"),totalFinancialCommitment:String(C.totalFinancialCommitment??"0"),shipmentsCount:Number(C.shipmentsCount)||0,storeItemsCount:Number(C.storeItemsCount)||0,storeItemsTotalValue:Number(C.storeItemsTotalValue)||0,returnRequestsCount:Number(C.returnRequestsCount)||0,last10DaysSales:Number(C.last10DaysSales)||0,averageSales:Number(C.averageSales)||0}),N(String(C.id))):(k({...Rr,startDate:ur()}),N(null)),i(!0),window.setTimeout(()=>{x.current?.focus()},100)},_=()=>{u||(i(!1),N(null),k({...Rr,startDate:ur()}))},T=(C,F)=>{k(f=>({...f,[C]:Vr(F)||"0"}))},V=async C=>{C.preventDefault();const F=v.name.trim(),f=v.email.trim(),m=String(v.code??"").trim(),L=v.province.trim(),W=v.city.trim(),A=v.phone.trim(),j=$n(v.startDate||"");if(!F){alert("لطفاً نام نماینده را وارد کنید."),x.current?.focus();return}if(!m){alert("لطفاً کد نمایندگی را وارد کنید."),p.current?.focus();return}if(!L){alert("لطفاً استان را وارد کنید.");return}if(!W){alert("لطفاً شهر را وارد کنید."),w.current?.focus();return}if(!A){alert("لطفاً شماره تلفن را وارد کنید."),o.current?.focus();return}if(!In(j)){alert("تاریخ قرارداد نامعتبر است. لطفاً از تقویم استفاده کنید.");return}h(!0);try{const U={name:F,email:f,code:m,province:L,city:W,phone:A,address:v.address.trim(),description:v.description.trim(),shopDescription:v.shopDescription.trim(),orders:Number(v.orders)||0,status:v.status==="inactive"?"inactive":"active",startDate:j,depositAmount:String(O),guaranteeCheck:String(G),totalFinancialCommitment:String(P),shipmentsCount:Number(v.shipmentsCount)||0,storeItemsCount:Number(v.storeItemsCount)||0,storeItemsTotalValue:Number(v.storeItemsTotalValue)||0,returnRequestsCount:Number(v.returnRequestsCount)||0,last10DaysSales:Number(v.last10DaysSales)||0,averageSales:Number(v.averageSales)||0};d?(await b(d,U),alert("اطلاعات نماینده با موفقیت ویرایش شد.")):(await c(U),alert("نماینده با موفقیت ثبت شد.")),i(!1),N(null),k({...Rr,startDate:ur()})}catch(U){console.error("خطا در ذخیره نماینده:",U),alert("خطا در ذخیره اطلاعات. لطفاً دوباره تلاش کنید.")}finally{h(!1)}},Q=async(C,F)=>{if(window.confirm(`آیا از حذف نماینده «${F}» مطمئن هستید؟`))try{await n(C)}catch(f){console.error("خطا در حذف نماینده:",f)}};return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-colors dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-800 dark:text-gray-100 md:text-xl",children:[(0,e.jsx)(Gr,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"لیست نمایندگان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:[Kt(t.length)," ","نماینده ثبت شده"]})]}),r==="admin"?(0,e.jsxs)("div",{className:"flex gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:y,className:"flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ لیست"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>I(),className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 active:scale-95",children:[(0,e.jsx)(Dl,{className:"h-4 w-4"}),"افزودن نماینده"]})]}):null]}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b-2 border-gray-200 bg-gray-50 text-center text-lg dark:border-gray-800 dark:bg-gray-800/50",children:[(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"کد"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"نام"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"تلفن"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"سفارش‌ها"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"وضعیت"}),r==="admin"?(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{children:t.length===0?(0,e.jsx)("tr",{children:(0,e.jsxs)("td",{colSpan:r==="admin"?7:6,className:"px-4 py-12 text-center text-gray-500 dark:text-gray-400",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(hs,{className:"h-12 w-12 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold",children:"هیچ نماینده‌ای یافت نشد"})]})}):t.map(C=>{const F=C.status!=="inactive";return(0,e.jsxs)("tr",{className:"border-b text-center transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50",children:[(0,e.jsx)("td",{className:"px-4 py-3 font-mono text-sm text-gray-700 dark:text-gray-300",children:C.code||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-800 dark:text-gray-200",children:C.name}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm text-gray-700 dark:text-gray-300",children:C.city||"---"}),(0,e.jsx)("td",{dir:"ltr",className:"px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300",children:C.phone||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300",children:Kt(C.orders||0)}),(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("span",{className:`inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${F?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[F?(0,e.jsx)(Ne,{className:"h-3.5 w-3.5"}):(0,e.jsx)(it,{className:"h-3.5 w-3.5"}),F?"فعال":"غیرفعال"]})}),r==="admin"?(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(C.id)),className:"rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95",children:"داشبورد"}),(0,e.jsxs)("button",{type:"button",onClick:()=>I(C),className:"flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:[(0,e.jsx)(Zt,{className:"h-3.5 w-3.5"}),"ویرایش"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(String(C.id),C.name)},className:"flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:[(0,e.jsx)(Xe,{className:"h-3.5 w-3.5"}),"حذف"]})]})}):null]},String(C.id))})})]})}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:t.length===0?(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(hs,{className:"h-14 w-14 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold text-gray-500 dark:text-gray-400",children:"هیچ نماینده‌ای یافت نشد"})]}):t.map(C=>{const F=C.status!=="inactive";return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:from-gray-800 dark:to-gray-900 dark:hover:border-blue-700",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-start justify-between",children:[(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:C.name}),(0,e.jsxs)("p",{className:"mt-1 font-mono text-xs text-gray-500 dark:text-gray-400",children:["کد:"," ",C.code||"---"]})]}),(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-bold ${F?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[F?(0,e.jsx)(Ne,{className:"h-3 w-3"}):(0,e.jsx)(it,{className:"h-3 w-3"}),F?"فعال":"غیرفعال"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"شهر"}),(0,e.jsx)("p",{className:"font-bold text-gray-800 dark:text-gray-200",children:C.city||"---"})]}),(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"تلفن"}),(0,e.jsx)("p",{dir:"ltr",className:"font-bold text-gray-800 dark:text-gray-200",children:C.phone||"---"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"سفارش‌ها"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-200",children:Kt(C.orders||0)})]})]}),r==="admin"?(0,e.jsxs)("div",{className:"mt-3 flex items-center gap-2 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(C.id)),className:"flex-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg",children:"داشبورد"}),(0,e.jsx)("button",{type:"button",onClick:()=>I(C),className:"flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:(0,e.jsx)(Zt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{Q(String(C.id),C.name)},className:"flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]}):null]},String(C.id))})}),g?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-3 md:p-4",children:(0,e.jsxs)("div",{className:"max-h-[92dvh] w-full min-w-0 max-w-3xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between gap-2 border-b border-gray-100 pb-4 dark:border-gray-800",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:d?"ویرایش اطلاعات نماینده":"افزودن نماینده جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:d?"اطلاعات نماینده را اصلاح کرده و ذخیره کنید.":"اطلاعات اولیه و مالی نماینده را وارد کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:_,disabled:u,className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-red-900/30 dark:hover:text-red-400",children:(0,e.jsx)(Ce,{className:"h-4 w-4"})})]}),(0,e.jsxs)("form",{onSubmit:C=>{V(C)},className:"space-y-5",children:[(0,e.jsxs)("section",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)(jr,{className:"h-4 w-4"}),"اطلاعات پایه نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(jr,{className:"h-3.5 w-3.5 text-gray-400"}),"نام نماینده",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:x,type:"text",value:v.name,onChange:C=>k(F=>({...F,name:C.target.value})),onKeyDown:C=>S(C,p),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"نام نماینده",required:!0,autoFocus:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Sl,{className:"h-3.5 w-3.5 text-gray-400"}),"کد نمایندگی",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:p,type:"text",value:v.code,onChange:C=>k(F=>({...F,code:C.target.value})),onKeyDown:C=>S(C,w),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"مثلاً 1001",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)($t,{className:"h-3.5 w-3.5 text-gray-400"}),"استان",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{type:"text",value:v.province,onChange:C=>k(F=>({...F,province:C.target.value})),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"استان",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)($t,{className:"h-3.5 w-3.5 text-gray-400"}),"شهر",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:w,type:"text",value:v.city,onChange:C=>k(F=>({...F,city:C.target.value})),onKeyDown:C=>S(C,o),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"شهر",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(ea,{className:"h-3.5 w-3.5 text-gray-400"}),"تلفن",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:o,type:"text",dir:"ltr",value:v.phone,onChange:C=>k(F=>({...F,phone:C.target.value})),onKeyDown:C=>S(C,$),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"09xxxxxxxxx",required:!0})]}),(0,e.jsx)("div",{className:"min-w-0",children:(0,e.jsx)(si,{label:"تاریخ قرارداد شمسی",value:v.startDate,disabled:u,onChange:C=>k(F=>({...F,startDate:C}))})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(ms,{className:"h-3.5 w-3.5 text-gray-400"}),"وضعیت"]}),(0,e.jsxs)("select",{ref:$,value:v.status,onChange:C=>k(F=>({...F,status:C.target.value==="inactive"?"inactive":"active"})),onKeyDown:C=>S(C,q),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)($t,{className:"h-4 w-4"}),"آدرس و توضیحات"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 md:col-span-2",children:[(0,e.jsx)("label",{htmlFor:"representative-address",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{id:"representative-address",rows:3,maxLength:1e3,value:v.address,onChange:C=>k(F=>({...F,address:C.target.value})),disabled:u,placeholder:"استان، شهر، خیابان، پلاک و کد پستی",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{id:"representative-description",rows:4,maxLength:3e3,value:v.description,onChange:C=>k(F=>({...F,description:C.target.value})),disabled:u,placeholder:"توضیحات مربوط به نماینده",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-shop-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{id:"representative-shop-description",rows:2,maxLength:3e3,value:v.shopDescription,onChange:C=>k(F=>({...F,shopDescription:C.target.value})),disabled:u,placeholder:"مشخصات، موقعیت یا شرایط مغازه",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-purple-700 dark:text-purple-400",children:[(0,e.jsx)(pt,{className:"h-4 w-4"}),"اطلاعات مالی"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ ودیعه"}),(0,e.jsx)("input",{ref:q,type:"text",inputMode:"numeric",dir:"ltr",value:Ns(v.depositAmount),onChange:C=>T("depositAmount",C.target.value),onKeyDown:C=>S(C,z),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ چک ضمانت"}),(0,e.jsx)("input",{ref:z,type:"text",inputMode:"numeric",dir:"ltr",value:Ns(v.guaranteeCheck),onChange:C=>T("guaranteeCheck",C.target.value),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مجموع تعهد مالی"}),(0,e.jsx)("div",{dir:"ltr",className:"w-full rounded-xl border border-purple-200 bg-purple-50 px-3 py-2 text-center text-sm font-black text-purple-700 dark:border-purple-900/50 dark:bg-purple-900/20 dark:text-purple-300",children:Kt(P)})]})]}),(0,e.jsxs)("p",{className:"mt-3 flex items-start gap-2 rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)(ms,{className:"mt-0.5 h-3.5 w-3.5 shrink-0"}),"اطلاعات آماری داشبورد از طریق فایل اکسل در بخش انبار نماینده وارد خواهد شد."]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-100 pt-5 dark:border-gray-800 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:_,disabled:u,className:"min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-800 transition-all hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"submit",disabled:u,className:"min-h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 disabled:cursor-not-allowed disabled:opacity-60",children:u?"در حال ذخیره...":d?"ذخیره تغییرات":"ثبت نماینده"})]})]})]})}):null]})},li={name:"",email:"",code:"",province:"",city:"",phone:"",startDate:"",status:"active",address:"",description:"",shopDescription:""},ii=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),xt=t=>{const r=ii(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Ze=t=>new Intl.NumberFormat("fa-IR").format(xt(t)),Pt=t=>new Intl.NumberFormat("fa-IR").format(xt(t)),oi=(t,r)=>{if(t&&String(t).split("/").length===3)return t;if(r)try{return new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(r))}catch{return r}return"—"},ca=t=>[String(t.province??"").trim(),String(t.city??"").trim()].filter(Boolean).join(" — ")||"ثبت نشده",yt=()=>{if(typeof window>"u")return"";for(const t of["token","accessToken","authToken","adminToken","admin_access_token"]){const r=window.sessionStorage.getItem(t);if(r?.trim())return r.trim();const s=window.localStorage.getItem(t);if(s?.trim())return s.trim()}return""},jt=async t=>{const r=await t.text();if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error(`پاسخ JSON نیست. کد پاسخ: ${t.status}. ${r.slice(0,120)}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ JSON معتبر نیست. کد پاسخ: ${t.status}`)}},di=t=>{const r=["jpg","jpeg","png","gif","webp","svg"],s=t.name.split(".").pop()?.toLowerCase();return!!(s&&r.includes(s))},Ye=({title:t,children:r,index:s})=>(0,e.jsx)("div",{className:"group relative min-h-[160px] overflow-hidden rounded-[20px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 p-3 shadow-[0_6px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)] dark:border-gray-700 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 dark:shadow-none sm:min-h-[180px] sm:p-4 md:rounded-[24px] md:p-5",style:{animation:`cardEnter 550ms ease-out ${s*70}ms both`},children:(0,e.jsxs)("div",{className:"relative z-10 flex h-full flex-col",children:[(0,e.jsx)("div",{className:"w-full rounded-lg border border-blue-100 bg-slate-800 px-3 py-2 text-center text-xs font-black text-white shadow-sm dark:border-slate-600 dark:bg-slate-700 sm:px-4 sm:py-2.5 sm:text-sm md:text-base",children:t}),(0,e.jsxs)("div",{className:"relative mt-3 flex flex-1 items-center justify-center overflow-hidden rounded-[14px] border border-slate-100 bg-white p-3 text-center shadow-[0_4px_14px_rgba(15,23,42,0.06)] dark:border-gray-700 dark:bg-gray-800 sm:mt-4 sm:p-4",children:[(0,e.jsx)("div",{className:"relative z-20 w-full",children:r}),(0,e.jsx)("div",{className:"pointer-events-none absolute -right-6 -top-6 z-10 h-20 w-20 rounded-full border-[8px] border-blue-100/70 bg-blue-200/50 transition-transform duration-500 group-hover:scale-110 dark:border-blue-900/40 dark:bg-blue-800/30 sm:-right-7 sm:-top-7 sm:h-28 sm:w-28"}),(0,e.jsx)("div",{className:"pointer-events-none absolute -bottom-8 -left-8 z-0 h-24 w-24 rounded-full bg-blue-100/50 blur-xl dark:bg-blue-900/20"})]})]})}),ci=({representative:t,apiUrl:r,onBack:s,files:c=[],loadingFiles:b=!1,onViewFile:n,onDeleteFile:g,onRepresentativeUpdated:i,onRefreshFiles:u})=>{const[h,d]=(0,a.useState)(t),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)(!0),[p,w]=(0,a.useState)(""),[o,$]=(0,a.useState)([]),[q,z]=(0,a.useState)(!1),[O,G]=(0,a.useState)(""),[P,S]=(0,a.useState)([]),[y,I]=(0,a.useState)(!0),[_,T]=(0,a.useState)(""),[V,Q]=(0,a.useState)(!1),[C,F]=(0,a.useState)(""),[f,m]=(0,a.useState)(null),[L,W]=(0,a.useState)(""),[A,j]=(0,a.useState)(null),[U,Z]=(0,a.useState)(!1),[B,pe]=(0,a.useState)(li),[ee,re]=(0,a.useState)(!1),[ne,X]=(0,a.useState)(""),[ie,he]=(0,a.useState)(!1),[R,H]=(0,a.useState)([]),[ae,l]=(0,a.useState)(!1),[E,J]=(0,a.useState)(""),[me,fe]=(0,a.useState)(!1),[te,oe]=(0,a.useState)(!1),[D,Y]=(0,a.useState)([]),de=Array.isArray(c)?c:[],je=(0,a.useMemo)(()=>{const M=[],K=new Set;return[...de,...D].forEach(le=>{const se=String(le.name??"").trim().toLowerCase();!se||K.has(se)||(K.add(se),M.push(le))}),M},[de,D]),Ae=(0,a.useMemo)(()=>{const M=String(r||"").trim().replace(/\/+$/,"");return M?M.endsWith("/api")?M:`${M}/api`:"http://localhost:5000/api"},[r]),Te=String(h.id).trim(),Rt=Te?`${Ae}/representatives/${encodeURIComponent(Te)}/warehouse`:"",$e=Te?`${Ae}/representatives/${encodeURIComponent(Te)}/notes`:"",$r=`${Ae}/sales-from-warehouse/admin/all`;(0,a.useEffect)(()=>{d(t)},[t]);const rr=()=>{pe({name:h.name??"",email:h.email??"",code:String(h.code??""),province:h.province??"",city:h.city??"",phone:h.phone??"",startDate:h.startDate??"",status:h.status==="inactive"?"inactive":"active",address:h.address??"",description:h.description??"",shopDescription:h.shopDescription??""}),X(""),Z(!0)},We=M=>{const{name:K,value:le}=M.currentTarget;pe(se=>({...se,[K]:le}))},dt=async M=>{if(M.preventDefault(),!B.province.trim()){X("استان را وارد کنید.");return}if(!B.city.trim()){X("شهر را وارد کنید.");return}const K=yt();if(!K){X("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}const le={name:B.name.trim(),email:B.email.trim(),code:B.code.trim(),province:B.province.trim(),city:B.city.trim(),phone:B.phone.trim(),startDate:B.startDate.trim(),status:B.status,address:B.address.trim(),description:B.description.trim(),shopDescription:B.shopDescription.trim()};try{re(!0),X("");const se=await fetch(`${Ae}/representatives/${encodeURIComponent(Te)}`,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${K}`},body:JSON.stringify(le)}),ce=await jt(se);if(!se.ok||!ce.success||!ce.data)throw new Error(ce.error||"ویرایش نماینده ناموفق بود.");d(ce.data),i?.(ce.data),Z(!1)}catch(se){console.error("خطا در ویرایش نماینده:",se),X(se instanceof Error?se.message:"ویرایش نماینده ناموفق بود.")}finally{re(!1)}},Et=(0,a.useCallback)(async()=>{if(!Rt){v([]),w("شناسه نماینده پیدا نشد."),x(!1);return}const M=yt();if(!M){v([]),w("توکن ادمین پیدا نشد."),x(!1);return}try{x(!0),w("");const K=await fetch(Rt,{headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),le=await jt(K);if(!K.ok||!le.success)throw new Error(le.error||"دریافت موجودی انبار ناموفق بود.");v(Array.isArray(le.data?.items)?le.data.items:[])}catch(K){v([]),w(K instanceof Error?K.message:"دریافت موجودی انبار ناموفق بود.")}finally{x(!1)}},[Rt]),Ir=(0,a.useCallback)(async()=>{const M=yt();if(!M){$([]),G("برای مشاهده فروش‌ها وارد حساب ادمین شوید."),z(!1);return}try{z(!0),G("");const K=await fetch($r,{headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),le=await jt(K);if(!K.ok||!le.success)throw new Error(le.error||"دریافت گزارش فروش ناموفق بود.");const se=Array.isArray(le.data)?le.data:[];$(se.filter(ce=>String(ce.representativeId)===Te))}catch(K){$([]),G(K instanceof Error?K.message:"دریافت گزارش فروش ناموفق بود.")}finally{z(!1)}},[$r,Te]),Re=(0,a.useCallback)(async()=>{if(!$e){S([]),F("شناسه نماینده پیدا نشد."),I(!1);return}const M=yt();if(!M){S([]),F("برای مشاهده یادداشت‌ها وارد حساب ادمین شوید."),I(!1);return}try{I(!0),F("");const K=await fetch($e,{headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),le=await jt(K);if(!K.ok||!le.success)throw new Error(le.error||"دریافت یادداشت‌ها ناموفق بود.");S(Array.isArray(le.data)?le.data:[])}catch(K){S([]),F(K instanceof Error?K.message:"دریافت یادداشت‌ها ناموفق بود.")}finally{I(!1)}},[$e]);(0,a.useEffect)(()=>{Et(),Ir(),Re()},[Et,Ir,Re]);const Me=async M=>{M.preventDefault();const K=_.trim();if(!K||!$e){F("متن یادداشت را وارد کنید.");return}const le=yt();if(!le){F("برای ثبت یادداشت وارد حساب ادمین شوید.");return}try{Q(!0),F("");const se=await fetch($e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${le}`},body:JSON.stringify({text:K})}),ce=await jt(se);if(!se.ok||!ce.success||!ce.data)throw new Error(ce.error||"ثبت یادداشت ناموفق بود.");S(Ee=>[ce.data,...Ee]),T("")}catch(se){F(se instanceof Error?se.message:"ثبت یادداشت ناموفق بود.")}finally{Q(!1)}},Bt=M=>{m(String(M.id)),W(M.text),F("")},Wt=()=>{m(null),W(""),j(null)},aa=async M=>{const K=L.trim();if(!K||!$e){F("متن یادداشت نمی‌تواند خالی باشد.");return}const le=yt();if(!le){F("برای ویرایش یادداشت دوباره وارد شوید.");return}try{j(M),F("");const se=await fetch(`${$e}/${encodeURIComponent(M)}`,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${le}`},body:JSON.stringify({text:K})}),ce=await jt(se);if(!se.ok||!ce.success||!ce.data)throw new Error(ce.error||"ویرایش یادداشت ناموفق بود.");S(Ee=>Ee.map(Oe=>String(Oe.id)===M?ce.data:Oe)),Wt()}catch(se){F(se instanceof Error?se.message:"ویرایش یادداشت ناموفق بود.")}finally{j(null)}},Vt=async M=>{if(!window.confirm("آیا از حذف این یادداشت مطمئن هستید؟")||!$e)return;const K=yt();if(!K){F("برای حذف یادداشت دوباره وارد شوید.");return}try{j(M);const le=await fetch(`${$e}/${encodeURIComponent(M)}`,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${K}`}}),se=await jt(le);if(!le.ok||!se.success)throw new Error(se.error||"حذف یادداشت ناموفق بود.");S(ce=>ce.filter(Ee=>String(Ee.id)!==M))}catch(le){F(le instanceof Error?le.message:"حذف یادداشت ناموفق بود.")}finally{j(null)}},ar=["jpg","jpeg","png","gif","webp","pdf","doc","docx","xls","xlsx","zip","rar"],Qt=M=>String(M||"").split(".").pop()?.toLowerCase()?.trim()||"",Fn=M=>{const K=Qt(M.name);return ar.includes(K)},Ln=M=>M.size>0,ss=M=>!M||M<=0?"—":M<1024?`${M} B`:M<1048576?`${(M/1024).toFixed(1)} KB`:`${(M/1048576).toFixed(1)} MB`,Un=()=>{he(!0),H([]),J(""),fe(!1)},sa=()=>{ae||(he(!1),H([]),J(""),fe(!1),oe(!1))},ns=M=>{if(!M||M.length===0)return;const K=Array.from(M),le=[],se=[];K.forEach(ce=>{if(!Fn(ce)){se.push(`نوع فایل "${ce.name}" مجاز نیست.`);return}if(!Ln(ce)){se.push(`فایل "${ce.name}" خالی است.`);return}le.push(ce)}),H(ce=>[...ce,...le]),J(se.join(" ")),fe(!1)},qn=M=>{H(K=>K.filter((le,se)=>se!==M))},On=M=>{M.preventDefault(),M.stopPropagation(),oe(!0)},_n=M=>{M.preventDefault(),M.stopPropagation(),oe(!1)},Bn=M=>{M.preventDefault(),M.stopPropagation()},Wn=M=>{M.preventDefault(),M.stopPropagation(),oe(!1),ns(M.dataTransfer.files)},Vn=async()=>{if(R.length===0){J("حداقل یک فایل انتخاب کنید.");return}const M=yt();if(!M){J("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}if(!Te){J("شناسه نماینده پیدا نشد.");return}try{l(!0),J(""),fe(!1);const K=new FormData;R.forEach(Oe=>{K.append("files",Oe)});const le=`${Ae}/representatives/${encodeURIComponent(Te)}/files`,se=await fetch(le,{method:"POST",headers:{Authorization:`Bearer ${M}`,Accept:"application/json"},body:K}),ce=await jt(se);if(!se.ok||!ce.success)throw new Error(ce.error||"آپلود فایل‌ها ناموفق بود.");fe(!0);const Ee=Array.isArray(ce.data?.files)?ce.data.files:[];if(Ee.length>0)Y(Oe=>[...Oe,...Ee]);else{const Oe=R.map((He,we)=>({id:`local-${Date.now()}-${we}`,name:He.name,size:ss(He.size),uploadedAt:new Intl.DateTimeFormat("fa-IR").format(new Date),representativeId:Te}));Y(He=>[...He,...Oe])}H([]),u?.(),setTimeout(()=>{he(!1),fe(!1)},1500)}catch(K){J(K instanceof Error?K.message:"آپلود فایل‌ها ناموفق بود.")}finally{l(!1)}},Qn=(0,a.useMemo)(()=>N.reduce((M,K)=>M+xt(K.quantity),0),[N]),Hn=(0,a.useMemo)(()=>N.reduce((M,K)=>M+xt(K.totalPrice),0),[N]),Jn=(0,a.useMemo)(()=>{const M=new Date,K=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(M),le=parseInt(K.find(we=>we.type==="year")?.value||"0",10),se=parseInt(K.find(we=>we.type==="month")?.value||"0",10),ce=parseInt(K.find(we=>we.type==="day")?.value||"0",10),Ee=we=>{if(!we||typeof we!="string")return-1;const Je=we.split("/");if(Je.length<3)return-1;const Ar=parseInt(Je[1],10),sr=parseInt(Je[2],10);if(!Ar||!sr)return-1;let nr=sr;const Gn=[31,31,31,31,31,31,30,30,30,30,30,29];for(let na=0;na<Ar-1;na++)nr+=Gn[na];return nr},Oe=Ee(`${le}/${se}/${ce}`),He=new Date(M);return He.setDate(He.getDate()-9),o.filter(we=>{if(we.createdAt){const Je=new Date(we.createdAt);if(!Number.isNaN(Je.getTime())&&Je>=He&&Je<=M)return!0}if(we.saleDate&&Oe>0){const Je=String(we.saleDate).split("/");if(Je.length<3)return!1;const Ar=parseInt(Je[0],10),sr=Ee(we.saleDate);if(sr<0)return!1;if(Ar===le){const nr=Oe-sr;if(nr>=0&&nr<=9)return!0}}return!1}).reduce((we,Je)=>we+xt(Je.totalAmount),0)},[o]),Yn=(0,a.useMemo)(()=>{const M=new Date,K=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(M),le=`${K.find(se=>se.type==="year")?.value||""}/${K.find(se=>se.type==="month")?.value||""}`;return o.filter(se=>{const ce=String(se.saleDate||"");if(!ce)return!1;const Ee=ce.split("/");if(Ee.length<3)return!1;const Oe=Ee[0],He=Ee[1],we=parseInt(Ee[2],10);return`${Oe}/${He}`!==le?!1:[10,20,30].includes(we)}).reduce((se,ce)=>se+xt(ce.totalAmount),0)},[o]),ls=xt(h.depositAmount),is=xt(h.guaranteeCheck),Kn=xt(h.totalFinancialCommitment)||ls+is;return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-5",children:[(0,e.jsx)("style",{children:`
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
        `}),(0,e.jsx)("section",{className:"overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-l from-slate-950 via-slate-900 to-blue-950 p-4 text-white shadow-[0_12px_30px_rgba(15,23,42,0.34)] md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"order-2 min-w-0 flex-1 sm:order-1",children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2",children:[(0,e.jsx)("span",{className:"h-2.5 w-2.5 rounded-full bg-cyan-400"}),(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-200 md:text-sm",children:"پنل مدیریت نمایندگی"})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-right",children:[(0,e.jsxs)("p",{className:"text-sm font-bold text-slate-200 md:text-base",children:["داشبورد نمایندگی"," ",(0,e.jsx)("span",{className:"text-white",children:ca(h)})]}),(0,e.jsx)("span",{className:"hidden h-6 w-px bg-slate-600 sm:block",children:"|"}),(0,e.jsxs)("h2",{className:"text-xl font-black leading-9 text-white md:text-2xl",children:["جناب آقای"," ",(0,e.jsx)("span",{className:"text-cyan-200",children:h.name||"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"order-1 flex gap-2 sm:order-2",children:[(0,e.jsx)("button",{type:"button",onClick:rr,className:"flex min-h-10 items-center gap-2 rounded-xl border border-cyan-300 bg-cyan-400/20 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-400/30",children:"ویرایش"}),(0,e.jsxs)("button",{type:"button",onClick:s,className:"flex min-h-10 items-center gap-2 rounded-xl border border-slate-500 bg-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/20",children:[(0,e.jsx)(ml,{className:"h-4 w-4"}),"بازگشت"]})]})]})}),U?(0,e.jsxs)("section",{className:"rounded-[28px] border border-blue-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-slate-800 dark:text-gray-100",children:"ویرایش اطلاعات نماینده"}),(0,e.jsx)("button",{type:"button",onClick:()=>{Z(!1),X("")},className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}),(0,e.jsxs)("form",{onSubmit:dt,className:"space-y-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"اطلاعات پایه نماینده"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"نام نماینده*"}),(0,e.jsx)("input",{name:"name",value:B.name,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"ایمیل"}),(0,e.jsx)("input",{name:"email",type:"email",value:B.email,onChange:We,placeholder:"example@email.com",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"کد نمایندگی*"}),(0,e.jsx)("input",{name:"code",value:B.code,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"استان*"}),(0,e.jsx)("input",{name:"province",value:B.province,onChange:We,required:!0,placeholder:"مثلاً قزوین",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"شهر*"}),(0,e.jsx)("input",{name:"city",value:B.city,onChange:We,required:!0,placeholder:"مثلاً مهرگان",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تلفن*"}),(0,e.jsx)("input",{name:"phone",value:B.phone,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تاریخ قرارداد شمسی"}),(0,e.jsx)("input",{name:"startDate",value:B.startDate,onChange:We,placeholder:"۱۴۰۳/۰۱/۰۱",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"وضعیت"}),(0,e.jsxs)("select",{name:"status",value:B.status,onChange:We,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"آدرس و توضیحات"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2 md:col-span-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{name:"address",value:B.address,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"توضیحات"}),(0,e.jsx)("textarea",{name:"description",value:B.description,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{name:"shopDescription",value:B.shopDescription,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),ne?(0,e.jsx)("p",{className:"rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:ne}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:ee,className:"min-h-11 rounded-xl bg-blue-600 px-6 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:ee?"در حال ذخیره...":"ذخیره تغییرات"})})]})]}):null,(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-blue-700"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"اطلاعات پایه و تعهدات مالی"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(Ye,{index:0,title:"کد نمایندگی",children:(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:h.code?Ze(h.code):"—"})}),(0,e.jsx)(Ye,{index:1,title:"استان — شهر نمایندگی",children:(0,e.jsx)("p",{title:ca(h),className:"truncate text-3xl font-black text-slate-800 dark:text-gray-100",children:ca(h)})}),(0,e.jsx)(Ye,{index:2,title:"تاریخ قرارداد شمسی",children:(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)("p",{className:"text-3xl font-black text-slate-800 dark:text-gray-100",children:h.startDate||"—"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-500 dark:text-gray-400",children:"تاریخ شروع همکاری"})]})}),(0,e.jsx)(Ye,{index:3,title:"مبلغ ودیعه",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Pt(ls)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ye,{index:4,title:"مبلغ چک ضمانت",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Pt(is)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ye,{index:5,title:"مجموع تعهد مالی",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Pt(Kn)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[28px] border border-blue-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-gray-800 dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("h3",{className:"mb-4 flex items-center gap-2 text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:[(0,e.jsx)($t,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آدرس و توضیحات نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800 md:col-span-2",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"آدرس دقیق"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:h.address||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"توضیحات"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:h.description||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"متراژ مغازه"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:h.shopDescription||"ثبت نشده"})]})]})]}),(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-emerald-600"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"عملکرد نمایندگی"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Et()},disabled:k,className:"flex min-h-9 items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400",children:[(0,e.jsx)(Ue,{className:`h-3.5 w-3.5 ${k?"animate-spin":""}`}),"بروزرسانی موجودی"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(Ye,{index:6,title:"تعداد",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(er,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:Ze(h.shipmentsCount??0)})]})}),(0,e.jsx)(Ye,{index:7,title:"تعداد موجود در انبار فروشگاه",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(gt,{className:"h-8 w-8 text-purple-600 dark:text-purple-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:k?"...":Ze(Qn)})]})}),(0,e.jsx)(Ye,{index:8,title:"مجموع مبلغ اجناس فروشگاه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(It,{className:"h-8 w-8 text-emerald-600 dark:text-emerald-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:k?"...":Pt(Hn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ye,{index:9,title:"درخواست‌های مرجوعی",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Ja,{className:"h-8 w-8 text-orange-600 dark:text-orange-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:Ze(h.returnRequestsCount??0)})]})}),(0,e.jsx)(Ye,{index:10,title:"فروش ۱۰ روز گذشته",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(kr,{className:"h-8 w-8 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:q?"...":Pt(Jn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ye,{index:11,title:"فروش ۳ روز مجاز ماه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(ot,{className:"h-8 w-8 text-amber-600 dark:text-amber-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:q?"...":Pt(Yn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex flex-col items-start justify-between gap-3 border-b border-blue-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(kl,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"پرونده‌ها و اسناد نماینده"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400 md:text-sm",children:["مشاهده و مدیریت فایل‌های مربوط به"," ",h.name||"نماینده"]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 md:text-sm",children:[Ze(je.length)," پرونده"]}),(0,e.jsxs)("button",{type:"button",onClick:Un,className:"flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50 md:text-sm",children:[(0,e.jsx)(Dr,{className:"h-4 w-4"}),"آپلود فایل"]})]})]}),b?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-blue-50 p-6 text-center dark:bg-gray-800",children:[(0,e.jsx)(ue,{className:"mb-4 h-10 w-10 animate-spin text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600 dark:text-gray-300",children:"در حال بارگذاری پرونده‌ها..."})]}):je.length===0?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(El,{className:"mb-3 h-16 w-16 text-blue-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-300",children:"هنوز پرونده‌ای برای این نماینده ثبت نشده است."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:je.map((M,K)=>{const le=di(M),se=String(M.representativeId??Te),ce=`${Ae}/representatives/${encodeURIComponent(se)}/files/${encodeURIComponent(M.name)}/view`,Ee=`${Ae}/representatives/${encodeURIComponent(se)}/files/${encodeURIComponent(M.name)}/download`;return(0,e.jsxs)("article",{className:"group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",style:{animation:`fileEnter 450ms ease-out ${K*65}ms both`},children:[le?(0,e.jsx)("button",{type:"button",onClick:()=>{n?.(M)},className:"relative block h-44 w-full overflow-hidden bg-slate-100 dark:bg-gray-700",children:(0,e.jsx)("img",{src:ce,alt:M.name,className:"h-full w-full object-cover"})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(M)},className:"flex h-44 w-full flex-col items-center justify-center bg-blue-50 dark:bg-gray-700",children:[(0,e.jsx)(ht,{className:"h-16 w-16 text-blue-400"}),(0,e.jsx)("span",{className:"mt-3 text-xs font-bold text-slate-500 dark:text-gray-300",children:"برای مشاهده کلیک کنید"})]}),(0,e.jsxs)("div",{className:"p-4",children:[(0,e.jsx)("p",{title:M.name,className:"truncate text-sm font-black text-slate-800 dark:text-gray-100",children:M.name}),(0,e.jsxs)("div",{className:"mt-2 flex justify-between text-[11px] text-slate-500 dark:text-gray-400",children:[(0,e.jsx)("span",{children:M.size||"—"}),(0,e.jsx)("span",{children:M.uploadedAt||"—"})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(M)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-blue-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"مشاهده"]}),(0,e.jsxs)("a",{href:Ee,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-emerald-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(jn,{className:"h-4 w-4"}),"دانلود"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Y(Oe=>Oe.filter(He=>String(He.name)!==String(M.name))),g?.(M.id)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-red-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف"]})]})]})]},M.id)})})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsx)("div",{className:"mb-5 border-b border-blue-100 pb-4 dark:border-gray-800",children:(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(ht,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"یادداشت‌های ادمین"]})}),(0,e.jsxs)("form",{onSubmit:Me,className:"space-y-3",children:[(0,e.jsx)("label",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متن یادداشت"}),(0,e.jsx)("textarea",{value:_,onChange:M=>{T(M.target.value),F("")},rows:4,maxLength:3e3,disabled:V,placeholder:"یادداشت خود را درباره این نماینده بنویسید...",className:"w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"}),C?(0,e.jsx)("p",{className:"text-xs font-bold text-red-600 dark:text-red-400",children:C}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:V||!_.trim(),className:"min-h-11 rounded-xl bg-blue-600 px-5 py-2 text-sm font-bold text-white disabled:opacity-50",children:V?"در حال ثبت...":"ثبت یادداشت"})})]}),(0,e.jsxs)("div",{className:"mt-6 border-t border-slate-100 pt-5 dark:border-gray-800",children:[(0,e.jsx)("h4",{className:"mb-3 text-sm font-black text-slate-800 dark:text-gray-100",children:"یادداشت‌های ثبت‌شده"}),y?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"در حال دریافت یادداشت‌ها..."}):P.length===0?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"هنوز یادداشتی ثبت نشده است."}):(0,e.jsx)("div",{className:"space-y-3",children:P.map(M=>{const K=String(M.id),le=f===K,se=A===K;return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-800",children:[le?(0,e.jsx)("textarea",{value:L,onChange:ce=>{W(ce.target.value)},rows:4,disabled:se,className:"w-full rounded-xl border border-blue-300 bg-white px-3 py-2 text-sm leading-7 outline-none dark:border-blue-700 dark:bg-gray-900 dark:text-gray-100"}):(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:M.text}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsx)("time",{className:"text-xs text-slate-500 dark:text-gray-400",children:new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(M.createdAt))}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[le?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",onClick:()=>{aa(K)},disabled:se||!L.trim(),className:"rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"ذخیره ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:Wt,className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}):(0,e.jsx)("button",{type:"button",onClick:()=>{Bt(M)},className:"rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white",children:"ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:()=>{Vt(K)},disabled:se,className:"rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"حذف"})]})]})]},K)})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex flex-col items-start justify-between gap-3 border-b border-blue-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100",children:[(0,e.jsx)(kr,{className:"h-5 w-5 text-cyan-600 dark:text-cyan-400"}),"اعلام فروش‌های این نماینده"]}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400",children:"لیست کامل اعلام فروش‌های ثبت‌شده توسط این نماینده"})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-cyan-50 px-3 py-2 dark:bg-cyan-950/30",children:[(0,e.jsx)(Sr,{className:"h-4 w-4 text-cyan-600 dark:text-cyan-400"}),(0,e.jsxs)("span",{className:"text-xs font-black text-cyan-700 dark:text-cyan-300",children:["مجموع: ",Ze(o.length)," گزارش"]})]})]}),q?(0,e.jsxs)("div",{className:"flex items-center justify-center py-8",children:[(0,e.jsx)(ue,{className:"h-8 w-8 animate-spin text-cyan-500"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-slate-500 dark:text-gray-400",children:"در حال دریافت فروش‌ها..."})]}):o.length===0?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10 text-center",children:[(0,e.jsx)(Xt,{className:"mb-3 h-12 w-12 text-slate-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-500 dark:text-gray-400",children:"هنوز فروشی برای این نماینده ثبت نشده است."})]}):(0,e.jsxs)("div",{className:"overflow-x-auto",children:[(0,e.jsxs)("table",{className:"w-full min-w-[640px] text-right text-xs sm:text-sm",children:[(0,e.jsx)("thead",{className:"bg-slate-50 dark:bg-gray-800/80",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"ردیف"}),(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"تعداد اقلام"}),(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100 dark:divide-gray-700",children:o.slice(0,10).map((M,K)=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-slate-50 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:Ze(K+1)}),(0,e.jsx)("td",{className:"px-3 py-3 font-bold text-slate-700 dark:text-gray-200",children:oi(M.saleDate,M.createdAt)}),(0,e.jsxs)("td",{className:"px-3 py-3 text-amber-700 dark:text-amber-300",children:[(0,e.jsx)("span",{className:"font-black",children:Ze(M.totalItems||0)})," ","قلم"]}),(0,e.jsx)("td",{className:"px-3 py-3 font-black text-emerald-700 dark:text-emerald-300",children:Pt(M.totalAmount||0)})]},M.id||K))})]}),o.length>10?(0,e.jsxs)("div",{className:"mt-3 border-t border-slate-100 pt-3 text-center text-xs text-slate-500 dark:border-gray-700 dark:text-gray-400",children:["نمایش ۱۰ گزارش اول از مجموع ",Ze(o.length)," گزارش"]}):null]})]}),ie?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm",onClick:sa,children:(0,e.jsxs)("div",{className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900",onClick:M=>{M.stopPropagation()},children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100",children:[(0,e.jsx)(Dr,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آپلود فایل برای ",h.name||"نماینده"]}),(0,e.jsx)("button",{type:"button",onClick:sa,disabled:ae,className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:me?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10",children:[(0,e.jsx)(Ne,{className:"mb-3 h-16 w-16 text-emerald-500"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها با موفقیت آپلود شد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{onDragEnter:On,onDragLeave:_n,onDragOver:Bn,onDrop:Wn,className:`flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-colors ${te?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-blue-200 bg-blue-50/50 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800/50"}`,onClick:()=>{document.getElementById("file-input-upload")?.click()},children:[(0,e.jsx)(Dr,{className:"mb-3 h-12 w-12 text-blue-500"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها را اینجا رها کنید یا کلیک کنید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400",children:"بدون محدودیت تعداد و حجم - هر تعداد فایل که خواستید می‌توانید آپلود کنید"}),(0,e.jsx)("p",{className:"mt-2 text-[11px] text-slate-400 dark:text-gray-500",children:"انواع مجاز: JPG, PNG, GIF, WEBP, PDF, DOC, DOCX, XLS, XLSX, ZIP, RAR"}),(0,e.jsx)("input",{id:"file-input-upload",type:"file",multiple:!0,className:"hidden",onChange:M=>{ns(M.target.files),M.target.value=""},accept:".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.xls,.xlsx,.zip,.rar"})]}),R.length>0?(0,e.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,e.jsxs)("p",{className:"text-xs font-black text-slate-700 dark:text-gray-200",children:["فایل‌های انتخاب‌شده (",Ze(R.length),"):"]}),R.map((M,K)=>(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex min-w-0 flex-1 items-center gap-2",children:[(0,e.jsx)(ht,{className:"h-5 w-5 flex-shrink-0 text-blue-500"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{title:M.name,className:"truncate text-sm font-bold text-slate-700 dark:text-gray-200",children:M.name}),(0,e.jsx)("p",{className:"text-[11px] text-slate-500 dark:text-gray-400",children:ss(M.size)})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{qn(K)},disabled:ae,className:"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors hover:bg-red-200 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-400",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]},`${M.name}-${K}`))]}):null,E?(0,e.jsxs)("div",{className:"mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-xs font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:[(0,e.jsx)(Rl,{className:"mt-0.5 h-4 w-4 flex-shrink-0"}),(0,e.jsx)("span",{children:E})]}):null]})}),me?null:(0,e.jsxs)("div",{className:"flex items-center justify-end gap-2 border-t border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:sa,disabled:ae,className:"rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:Vn,disabled:ae||R.length===0,className:"flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-50",children:ae?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ue,{className:"h-4 w-4 animate-spin"}),"در حال آپلود..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Dr,{className:"h-4 w-4"}),"آپلود ",R.length>0?`(${Ze(R.length)} فایل)`:""]})})]})]})}):null]})},Er="https://myshop-backend-8nu7.onrender.com/api",xi=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Oa=t=>{const r=xi(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},vt=t=>new Intl.NumberFormat("fa-IR").format(Oa(t)),xa=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(r)},ws=t=>{const r=String(t||"pending").trim().toLowerCase();return r==="approved"?{label:"تأیید شده",wrapperClass:"border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300",Icon:Ne}:r==="rejected"?{label:"رد شده",wrapperClass:"border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-500/10 dark:text-red-300",Icon:it}:r==="received"?{label:"دریافت شده",wrapperClass:"border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-500/10 dark:text-blue-300",Icon:Ne}:r==="reviewing"?{label:"در حال بررسی",wrapperClass:"border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-500/10 dark:text-violet-300",Icon:vr}:{label:"در انتظار بررسی",wrapperClass:"border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-500/10 dark:text-amber-300",Icon:vr}},ma=(t,r)=>xe.isAxiosError(t)&&(t.response?.data?.error||t.response?.data?.message||t.message)||r,pa=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||localStorage.getItem("accessToken")||localStorage.getItem("authToken")||"",Be=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),mi=()=>{const[t,r]=(0,a.useState)([]),[s,c]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),[g,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(null),[d,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(""),x=(0,a.useCallback)(async()=>{const y=pa();if(!y){n("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید."),c(!1);return}c(!0),n("");try{const I=await xe.get(`${Er}/admin/return-requests`,{headers:{Authorization:`Bearer ${y}`}}),_=Array.isArray(I.data?.data)?I.data.data:[];r(_)}catch(I){n(ma(I,"خطا در دریافت درخواست‌های مرجوعی."))}finally{c(!1)}},[]);(0,a.useEffect)(()=>{x()},[x]);const p=(0,a.useMemo)(()=>{const y=g.trim().toLocaleLowerCase("fa-IR");return y?t.filter(I=>[I.id,I.title,I.productName,I.representativeName,I.representativeCode,I.returnDate,I.status].some(_=>String(_??"").toLocaleLowerCase("fa-IR").includes(y))):t},[t,g]),w=t.filter(y=>{const I=String(y.status||"").toLowerCase();return I==="pending"||I==="registered"||I==="reviewing"}).length,o=t.filter(y=>{const I=String(y.status||"").toLowerCase();return I==="approved"||I==="received"}).length,$=t.filter(y=>String(y.status||"").toLowerCase()==="rejected").length,q=y=>{r(I=>I.map(_=>String(_.id)===String(y.id)?y:_))},z=async y=>{const I=pa();if(!I){alert("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید.");return}const _=y.productName||y.title||"بدون عنوان";if(window.confirm(`آیا درخواست مرجوعی «${_}» از نماینده «${y.representativeName||"نامشخص"}» تأیید شود؟`)){h(String(y.id));try{const T=await xe.patch(`${Er}/admin/return-requests/${y.id}/status`,{status:"approved",adminNote:"درخواست مرجوعی توسط ادمین تأیید شد."},{headers:{Authorization:`Bearer ${I}`}});T.data?.data?q(T.data.data):await x(),alert(T.data?.message||"درخواست مرجوعی با موفقیت تأیید شد.")}catch(T){alert(ma(T,"خطا در تأیید درخواست مرجوعی."))}finally{h(null)}}},O=y=>{N(y),k("")},G=()=>{u||(N(null),k(""))},P=y=>{const I=window.open("","_blank","width=900,height=700");if(!I){alert("پنجرهٔ چاپ باز نشد. لطفاً اجازهٔ باز شدن پنجره‌های جدید (Pop-up) را در مرورگر فعال کنید.");return}const _=y,T=Oa(y.unitPrice??y.price??0),V=Oa(y.quantity||1),Q=T*V,C=ws(y.status).label,F=y.productName||y.title||"—",f=_.productBrand||y.brand||"—",m=_.productCategory||y.category||"—",L=_.adminNote||"";I.document.open(),I.document.write(`
      <!doctype html>
      <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>
            برگه مرجوعی - ${Be(y.id)}
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
              border-bottom: 3px solid #0f766e;
              padding-bottom: 16px;
              margin-bottom: 20px;
            }

            .header-logo {
              display: flex;
              align-items: center;
              gap: 14px;
            }

            .header-logo img {
              max-height: 64px;
              max-width: 200px;
              border-radius: 8px;
              object-fit: contain;
            }

            .header-company-info h1 {
              margin: 0;
              font-size: 19px;
              font-weight: 900;
              color: #0f766e;
            }

            .header-company-info p {
              margin: 3px 0;
              color: #4b5563;
              font-size: 12px;
              line-height: 1.7;
            }

            .header-title-block {
              text-align: center;
              flex: 1;
            }

            .title {
              margin: 0;
              font-size: 23px;
              font-weight: 900;
              color: #0f766e;
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
              min-width: 180px;
            }

            .header-details strong {
              color: #111827;
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
              <div class="header-logo">
                <img src="https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png" alt="لوگو" onerror="this.style.display='none'" />
                <div class="header-company-info">
                  <h1>هلدینگ مهر</h1>
                  <p>سامانه مدیریت نمایندگی و انبار</p>
                  <p>تلفن: ۰۲۱-۹۳۱۱۱۰۲۱</p>
                </div>
              </div>

              <div class="header-title-block">
                <h1 class="title">برگه درخواست مرجوعی</h1>

                <div class="subtitle">
                  شماره درخواست:
                  ${Be(y.id||"—")}
                </div>
              </div>

              <div class="header-details">
                <div>
                  <strong>تاریخ ثبت:</strong>
                  ${Be(xa(y.createdAt))}
                </div>

                <div>
                  <strong>وضعیت:</strong>
                  <span class="status">
                    ${Be(C)}
                  </span>
                </div>
              </div>
            </header>

            <section class="section">
              <h2 class="section-title">اطلاعات نماینده</h2>

              <div class="grid">
                <div>
                  <span class="label">نام نماینده:</span>
                  ${Be(y.representativeName||"—")}
                </div>

                <div>
                  <span class="label">کد نمایندگی:</span>
                  ${Be(y.representativeCode||"—")}
                </div>

                <div class="full">
                  <span class="label">شهر:</span>
                  ${Be(y.representativeCity||"—")}
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
                  ${Be(F)}
                </div>

                <div>
                  <span class="label">برند:</span>
                  ${Be(f)}
                </div>

                <div>
                  <span class="label">دسته‌بندی:</span>
                  ${Be(m)}
                </div>

                <div>
                  <span class="label">تعداد مرجوعی:</span>
                  ${vt(V)} قلم
                </div>

                <div>
                  
                  ${vt(T)} تومان
                </div>

                <div>
                  <span class="label">جمع کل:</span>
                  ${vt(Q)} تومان
                </div>

                <div>
                  <span class="label">تاریخ مرجوعی:</span>
                  ${Be(y.returnDate||"—")}
                </div>
              </div>
            </section>

            ${y.reason?`
                  <section class="section">
                    <h2 class="section-title">دلیل مرجوعی</h2>

                    <div class="reason">
                      ${Be(y.reason)}
                    </div>
                  </section>
                `:""}

            ${L?`
                  <section class="section">
                    <h2 class="section-title">توضیح ادمین</h2>

                    <div class="reason">
                      ${Be(L)}
                    </div>
                  </section>
                `:""}

            <footer class="footer">
              <div>
                این برگه به‌صورت خودکار توسط سامانه تولید شده است.
              </div>

              <div>
                تاریخ چاپ:
                ${Be(xa(new Date().toISOString()))}
              </div>
            </footer>
          </main>
        </body>
      </html>
    `),I.document.close(),I.onload=()=>{I.focus(),window.setTimeout(()=>{I.print()},300)}},S=async()=>{const y=pa();if(!d||!y)return;const I=v.trim();if(!I){alert("لطفاً دلیل رد درخواست را وارد کنید.");return}h(String(d.id));try{const _=await xe.patch(`${Er}/admin/return-requests/${d.id}/status`,{status:"rejected",adminNote:I},{headers:{Authorization:`Bearer ${y}`}});_.data?.data?q(_.data.data):await x(),N(null),k(""),alert(_.data?.message||"درخواست مرجوعی رد شد.")}catch(_){alert(ma(_,"خطا در رد درخواست مرجوعی."))}finally{h(null)}};return s?(0,e.jsx)("div",{dir:"rtl",className:"flex min-h-[400px] items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(ue,{className:"mx-auto h-11 w-11 animate-spin text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت درخواست‌های مرجوعی..."})]})}):b?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm dark:border-red-900/50 dark:bg-red-900/20",children:[(0,e.jsx)(ze,{className:"mx-auto h-12 w-12 text-red-600 dark:text-red-400"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-red-700 dark:text-red-300",children:"خطا در دریافت اطلاعات"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600 dark:text-red-400",children:b}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200/70 bg-white/60 p-3 text-right text-xs leading-6 text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-300",children:["آدرس مورد انتظار API:",(0,e.jsxs)("span",{dir:"ltr",className:"mr-1 font-bold",children:[Er,"/admin/return-requests"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{x()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("div",{dir:"rtl",children:[(0,e.jsxs)("section",{className:"mb-6 grid grid-cols-1 gap-4 md:grid-cols-3",children:[(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-amber-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-amber-100/70 blur-2xl dark:bg-amber-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-amber-600 dark:text-amber-400",children:vt(w)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-500 dark:text-amber-300",children:"درخواست نیازمند تصمیم ادمین"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm dark:bg-amber-500/15 dark:text-amber-400",children:(0,e.jsx)(vr,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-emerald-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-emerald-100/70 blur-2xl dark:bg-emerald-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-emerald-600 dark:text-emerald-400",children:vt(o)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-emerald-500 dark:text-emerald-300",children:"درخواست‌های پذیرفته‌شده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-400",children:(0,e.jsx)(Ne,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-red-100/70 blur-2xl dark:bg-red-900/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-red-600 dark:text-red-400",children:vt($)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-red-500 dark:text-red-300",children:"درخواست‌های ردشده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700 shadow-sm dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(it,{className:"h-6 w-6"})})]})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-cyan-50/70 via-white to-purple-50/70 p-5 dark:border-gray-700 dark:from-cyan-950/20 dark:via-gray-900 dark:to-purple-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(Ge,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"بررسی، تأیید یا رد درخواست‌های ثبت‌شده توسط نمایندگان"})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{x()},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-black text-gray-700 shadow-sm transition-all hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"بروزرسانی"]})]}),(0,e.jsxs)("label",{className:"relative mt-5 block",children:[(0,e.jsx)(ut,{className:"absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{value:g,onChange:y=>{i(y.target.value)},placeholder:"جست‌وجو بر اساس نام نماینده، کد، عنوان، وضعیت یا تاریخ...",className:"w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-12 pl-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"})]})]}),p.length===0?(0,e.jsxs)("div",{className:"p-12 text-center",children:[(0,e.jsx)("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500",children:(0,e.jsx)(Ge,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"درخواستی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"اگر درخواست مرجوعی ثبت شده است، دکمه بروزرسانی را بزنید."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:p-5",children:p.map(y=>{const I=String(y.id),_=u===I,T=String(y.status||"pending").toLowerCase(),V=T==="pending"||T==="registered"||T==="reviewing",Q=ws(y.status),C=Q.Icon,F=y.adminNote||"",f=y.unitPrice||y.price||0;return(0,e.jsxs)("article",{className:"group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-700",children:[(0,e.jsx)("div",{className:"absolute right-0 top-0 h-1 w-full bg-gradient-to-l from-cyan-500 via-blue-500 to-purple-500 opacity-70"}),(0,e.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-purple-500/20",children:(0,e.jsx)(Dt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:y.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["کد نمایندگی:"," ",y.representativeCode||"—"]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 flex-col items-end gap-2",children:[(0,e.jsxs)("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-black ${Q.wrapperClass}`,children:[(0,e.jsx)(C,{className:"h-3.5 w-3.5"}),Q.label]}),(0,e.jsxs)("p",{className:"text-[11px] font-bold text-gray-400 dark:text-gray-500",children:["ثبت: ",xa(y.createdAt)]})]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-900/60",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(Kr,{className:"h-4 w-4 text-cyan-600 dark:text-cyan-400"}),"عنوان کالای مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-base font-black text-gray-800 dark:text-white",children:y.productName||y.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5 dark:border-emerald-900/40 dark:bg-emerald-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300",children:[(0,e.jsx)(kn,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-emerald-700 dark:text-emerald-400",children:[vt(f)," تومان"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 dark:border-blue-900/40 dark:bg-blue-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300",children:[(0,e.jsx)(Kr,{className:"h-4 w-4"}),"تعداد"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-blue-700 dark:text-blue-400",children:[vt(y.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-purple-100 bg-purple-50/70 p-3.5 dark:border-purple-900/40 dark:bg-purple-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300",children:[(0,e.jsx)(ot,{className:"h-4 w-4"}),"تاریخ مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-lg font-black text-purple-700 dark:text-purple-400",children:y.returnDate||"—"})]})]}),F?(0,e.jsxs)("div",{className:"rounded-xl border border-violet-100 bg-violet-50/70 p-4 dark:border-violet-900/40 dark:bg-violet-950/20",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-violet-700 dark:text-violet-300",children:[(0,e.jsx)(ht,{className:"h-4 w-4"}),"توضیح ادمین"]}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-violet-900 dark:text-violet-200",children:F})]}):null,(0,e.jsx)("div",{className:"border-t border-gray-100 pt-4 dark:border-gray-700",children:V?(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{z(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-600 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-60",children:[_?(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(qa,{className:"h-5 w-5"}),"تأیید درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{O(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20 transition-all hover:from-red-600 hover:to-rose-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(Ce,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{P(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(ht,{className:"h-5 w-5"}),"چاپ / پرینت"]})]}):(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-black ${Q.wrapperClass}`,children:[(0,e.jsx)(C,{className:"h-5 w-5"}),"وضعیت: ",Q.label]}),(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{P(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(ht,{className:"h-5 w-5"}),"چاپ / پرینت"]})]})})]})]},I)})})]}),d?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",children:(0,e.jsxs)("div",{dir:"rtl",className:"w-full max-w-lg rounded-3xl border border-white/30 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(it,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"رد درخواست مرجوعی"}),(0,e.jsxs)("p",{className:"mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400",children:["دلیل رد درخواست «",d.productName||d.title||"بدون عنوان","» را وارد کنید. این توضیح برای نماینده نمایش داده می‌شود."]})]})]}),(0,e.jsx)("button",{type:"button",onClick:G,disabled:!!u,className:"rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600 disabled:opacity-50 dark:hover:bg-gray-800",title:"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsx)("textarea",{value:v,onChange:y=>{k(y.target.value)},rows:5,placeholder:"مثال: لطفاً کالا را همراه فاکتور و تصاویر خسارت ارسال کنید.",className:"mt-5 w-full resize-none rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-7 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsx)("button",{type:"button",disabled:u===String(d.id),onClick:()=>{S()},className:"min-h-11 rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60",children:u===String(d.id)?"در حال ثبت...":"ثبت رد درخواست"}),(0,e.jsx)("button",{type:"button",disabled:!!u,onClick:G,className:"min-h-11 rounded-xl bg-gray-100 px-4 py-3 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"})]})]})}):null]})},pi={companyName:"نام شرکت شما",companySubtitle:"سامانه مدیریت فروش و انبار",reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش بر اساس اطلاعات ثبت‌شده توسط نمایندگان در سامانه فروش و انبار تهیه شده است.",companyAddress:"آدرس شرکت، شهر، استان",companyPhone:"۰۲۱-۹۳۱۱۱۰۲۱",companyWebsite:"www.example.com",reportNumber:"",preparedBy:"",salesManager:"",notes:"این گزارش بر اساس اطلاعات ثبت‌شده در سامانه تهیه شده است. لطفاً پیش از امضا، تعداد کالاها، مبلغ کل فروش و جزئیات نمایندگان را بررسی کنید."},hi=["admin_access_token","adminAccessToken","admin_token","adminToken","accessToken","authToken","token"],An=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),lt=t=>{const r=An(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ge=t=>new Intl.NumberFormat("fa-IR").format(lt(t)),Ie=t=>`${ge(t)} تومان`,gi=()=>{if(typeof window>"u")return"";for(const t of hi){const r=window.localStorage.getItem(t);if(r?.trim())return r.trim();const s=window.sessionStorage.getItem(t);if(s?.trim())return s.trim()}return""},ui=async t=>{try{const r=await t.json();return typeof r=="string"?r:r?.error||r?.message||r?.detail||"دریافت اعلام فروش‌ها با خطا مواجه شد."}catch{return t.status===401?"نشست ادمین نامعتبر یا منقضی شده است. لطفاً دوباره وارد حساب ادمین شوید.":t.status===403?"شما دسترسی لازم برای مشاهده اعلام فروش‌ها را ندارید.":"دریافت اعلام فروش‌ها با خطا مواجه شد."}},zt=(t,r)=>{if(t)return t;if(!r)return"—";const s=new Date(r);return Number.isNaN(s.getTime())?"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(s)},Ss=()=>new Date().toLocaleDateString("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}),Cs=()=>new Date().toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Pr=t=>{const r=t.createdAt||t.saleDate;if(!r)return null;const s=new Date(r);return Number.isNaN(s.getTime())?null:s},ir=t=>t.productName||t.title||t.name||"کالای بدون نام",Lt=t=>lt(t.unitPrice??t.price),$s=t=>{const r=lt(t.totalPrice??t.totalAmount);return r>0?r:lt(t.quantity)*Lt(t)},bi=t=>String(t.brand||t.brandName||"").trim(),fi=t=>String(t.category||t.categoryName||"").trim(),ha=typeof window<"u"?"https://myshop-backend-8nu7.onrender.com/api":"http://localhost:5000/api",yi=ha.endsWith("/api")?ha.slice(0,-4):ha,ji=({token:t})=>{const[r,s]=(0,a.useState)([]),[c,b]=(0,a.useState)(!0),[n,g]=(0,a.useState)(""),[i,u]=(0,a.useState)(null),[h,d]=(0,a.useState)(!1),[N,v]=(0,a.useState)("all"),[k,x]=(0,a.useState)(null),[p,w]=(0,a.useState)(pi),o=(0,a.useCallback)(async()=>{try{b(!0),g("");const f=t?.trim()||gi();if(!f)throw new Error("توکن ورود ادمین پیدا نشد. لطفاً یک‌بار خارج و دوباره وارد حساب ادمین شوید.");const m=await fetch(`${yi}/api/sales-from-warehouse/admin/all`,{method:"GET",headers:{Authorization:`Bearer ${f}`,Accept:"application/json"}});if(!m.ok){const A=await ui(m);throw m.status===401&&s([]),new Error(A)}const L=await m.json();if(!L?.success)throw new Error(L?.error||L?.message||"دریافت اعلام فروش‌ها با خطا مواجه شد.");const W=Array.isArray(L?.data)?L.data:[];s(W)}catch(f){console.error("خطا در دریافت اعلام فروش‌ها:",f),s([]),g(f instanceof Error?f.message:"خطا در دریافت اعلام فروش‌ها از سرور.")}finally{b(!1)}},[t]);(0,a.useEffect)(()=>{o()},[o]),(0,a.useEffect)(()=>{const f=m=>{if(m.key==="Escape"){if(h){d(!1),x(null);return}i&&u(null)}};return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f)}},[i,h]);const $=(0,a.useMemo)(()=>r.length,[r]);(0,a.useMemo)(()=>r.reduce((f,m)=>f+lt(m.totalItems),0),[r]);const q=(0,a.useMemo)(()=>r.reduce((f,m)=>f+lt(m.totalAmount),0),[r]),z=(0,a.useMemo)(()=>{const f=r.map(m=>String(m.representativeId||m.representativeCode||m.representativeName||"")).filter(Boolean);return new Set(f).size},[r]),O=(0,a.useMemo)(()=>{const f=new Date,m=new Date(f);return m.setHours(0,0,0,0),m.setDate(m.getDate()-9),r.filter(L=>{const W=Pr(L);return W?W>=m&&W<=f:!1}).reduce((L,W)=>L+lt(W.totalAmount),0)},[r]),G=(0,a.useMemo)(()=>{const f=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(m=>{const L=Pr(m);return L?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(L)===f:!1}).reduce((m,L)=>m+lt(L.totalAmount),0)},[r]);(0,a.useMemo)(()=>{const f=new Date,m=new Date(f);return m.setHours(0,0,0,0),m.setDate(m.getDate()-9),r.filter(L=>{const W=Pr(L);return W?W>=m&&W<=f:!1}).length},[r]),(0,a.useMemo)(()=>{const f=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(m=>{const L=Pr(m);return L?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(L)===f:!1}).length},[r]);const P=(0,a.useMemo)(()=>!i||!Array.isArray(i.items)?[]:i.items,[i]),S=(0,a.useMemo)(()=>N==="single"&&k?[k]:r,[N,k,r]),y=(0,a.useMemo)(()=>S.reduce((f,m)=>f+lt(m.totalItems),0),[S]),I=(0,a.useMemo)(()=>S.reduce((f,m)=>f+lt(m.totalAmount),0),[S]),_=(f,m)=>{const L=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/\//g,""),W=f==="single"&&m?.id?String(m.id).slice(-6):String(r.length).padStart(4,"0");return`ADM-${An(L)}-${W}`},T=(f,m)=>{w(L=>({...L,[f]:m}))},V=()=>{if(r.length===0){g("هیچ اعلام فروشی برای چاپ وجود ندارد.");return}v("all"),x(null),w(f=>({...f,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:_("all")})),d(!0)},Q=f=>{const m=window.open("","_blank","width=900,height=700");if(!m){alert("لطفاً popup blocker را غیرفعال کنید");return}const L=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),W=Array.isArray(f.items)?f.items:[],A=W.map((j,U)=>`
      <tr>
        <td style="text-align:center;">${U+1}</td>
        <td>${j.productName||"—"}</td>
        <td style="text-align:center;">${j.brand||"—"}</td>
        <td style="text-align:center;">${j.category||j.categoryName||"—"}</td>
        <td style="text-align:center;">${ge(j.unitPrice)} تومان</td>
        <td style="text-align:center;">${ge(j.quantity)||"—"}</td>
        <td style="text-align:center;">${ge(j.totalPrice??Number(j.quantity||0)*Number(j.unitPrice||0))} تومان</td>
      </tr>
    `).join("");m.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ گزارش فروش - ${f.representativeName||""}</title>
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
.info-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 6px; margin-bottom: 12px; }
.info-card { border: 1px solid #ddd; border-radius: 6px; padding: 6px 8px; }
.info-card .label { font-size: 9px; color: #666; margin-bottom: 2px; }
.info-card .value { font-size: 12px; font-weight: bold; }
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
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: 021-93111021</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${L}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش اعلام فروش</h2>
  <p>گزارش تک‌گزارش فروش نمایندگی ${f.representativeName||""}</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام نمایندگی</div>
    <div class="value">${f.representativeName||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">کد نمایندگی</div>
    <div class="value">${f.representativeCode||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">شهر</div>
    <div class="value">${f.representativeCity||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">تاریخ ثبت</div>
    <div class="value">${f.saleDate||zt(f.createdAt)||"—"}</div>
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
    ${A}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="3" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${ge(f.totalItems??W.length)}</strong></td>
        <td></td>
        <td style="text-align:center;"><strong>${Ie(f.totalAmount)}</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد اقلام</div>
      <div class="value">${ge(f.totalItems??W.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع فروش</div>
      <div class="value">${ge(f.totalAmount)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر - 1405</p>
  </div>
</div>

</body>
</html>`),m.document.close(),m.focus(),setTimeout(()=>{m.print()},1e3)},C=()=>{d(!1),x(null)},F=()=>{const f=window.open("","_blank","width=900,height=700");if(!f){alert("لطفاً popup blocker را غیرفعال کنید");return}const m=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),L=r.map((j,U)=>{const Z=(Array.isArray(j.items)?j.items:[]).map(B=>`
        <tr>
          <td style="text-align:center;">${U+1}</td>
          <td>${B.productName||"—"}</td>
          <td style="text-align:center;">${B.brand||"—"}</td>
          <td style="text-align:center;">${B.category||B.categoryName||"—"}</td>
          <td style="text-align:center;">${ge(B.unitPrice)} تومان</td>
          <td style="text-align:center;">${ge(B.quantity)||"—"}</td>
          <td style="text-align:center;">${ge(B.totalPrice??Number(B.quantity||0)*Number(B.unitPrice||0))} تومان</td>
        </tr>
      `).join("");return`
        <div class="report-card">
          <div class="report-card-header">
            <h3>گزارش فروش ${U+1} - ${j.representativeName||"—"}</h3>
            <p>کد نمایندگی: ${j.representativeCode||"—"} | شهر: ${j.representativeCity||"—"}</p>
            <p>تاریخ: ${j.saleDate||zt(j.createdAt)||"—"}</p>
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
              ${Z}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" style="text-align:left;"><strong>جمع کل:</strong></td>
                <td colspan="2" style="text-align:center;"><strong>${Ie(j.totalAmount)} تومان</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
      `}).join(""),W=r.reduce((j,U)=>j+(Number(U.totalAmount)||0),0),A=r.reduce((j,U)=>j+(Number(U.totalItems)||U.items?.length||0),0);f.document.write(`<!DOCTYPE html>
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
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: 021-93111021</p>
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

${L}

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد گزارش‌ها</div>
    <div class="value">${r.length}</div>
  </div>
  <div class="summary-card">
    <div class="label">تعداد کل اقلام</div>
    <div class="value">${A}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع کل فروش</div>
    <div class="value">${ge(W)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>هلدینگ مهر - 1405</p>
</div>

</body>
</html>`),f.document.close(),f.focus(),setTimeout(()=>{f.print()},1e3)};return c?(0,e.jsx)("section",{className:"flex min-h-[360px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(ue,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اعلام فروش‌های نمایندگان..."})]})}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6",children:[(0,e.jsx)("style",{children:`
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
      `}),(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-cyan-900/50 dark:from-cyan-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-cyan-900 dark:text-cyan-100",children:ge($)}),(0,e.jsxs)("p",{className:"mt-1 truncate text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["از ",ge(z)," نمایندگی"]})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(Ge,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-cyan-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-violet-900/50 dark:from-violet-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300",children:"مبلغ فروش ۱۰ روز گذشته"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-violet-900 dark:text-violet-100",children:Ie(O)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-violet-600 dark:text-violet-400",children:"فروش نمایندگان در ۱۰ روز اخیر"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(ot,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-violet-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/50 dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300",children:"مبلغ فروش ماهانه نمایندگان"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-blue-900 dark:text-blue-100",children:Ie(G)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-blue-600 dark:text-blue-400",children:"فروش نمایندگان در ماه جاری"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(kr,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-blue-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300",children:"مجموع مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-900 dark:text-emerald-100",children:Ie(q)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-emerald-600 dark:text-emerald-400",children:"مجموع اعلام فروش‌های ثبت‌شده"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(kr,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-emerald-400/10"})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 border-b border-gray-100 p-5 dark:border-gray-700 md:flex-row md:items-center md:justify-between md:p-6",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"لیست اعلام فروش نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات مستقیماً از سرور دریافت می‌شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:V,disabled:r.length===0,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2.5 text-xs font-black text-cyan-700 transition-colors hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300 dark:hover:bg-cyan-950/50",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش‌ها"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{o()},disabled:c,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Ue,{className:`h-4 w-4 ${c?"animate-spin":""}`}),"بروزرسانی از سرور"]})]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Ge,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز هیچ اعلام فروشی ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"بعد از ثبت فروش در پنل نماینده، گزارش آن در همین بخش برای ادمین نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-4 p-4 md:hidden",children:r.map(f=>{const m=Array.isArray(f.items)?f.items:[];return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نمایندگی"}),(0,e.jsx)("h3",{className:"mt-1 truncate font-black text-gray-800 dark:text-white",children:f.representativeName||"نمایندگی بدون نام"}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:["کد: ",f.representativeCode||"—"]}),(0,e.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[(0,e.jsx)($t,{className:"h-3.5 w-3.5 text-rose-500"}),f.representativeCity||"شهر ثبت نشده"]})]})]}),(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Dt,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("div",{className:"space-y-3 p-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-gray-800 dark:text-white",children:zt(f.saleDate,f.createdAt)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[ge(f.totalItems)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-emerald-800 dark:text-emerald-200",children:Ie(f.totalAmount)})]}),m.length>0?(0,e.jsxs)("div",{className:"rounded-xl border border-gray-100 p-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-black text-gray-700 dark:text-gray-200",children:"خلاصه کالاها"}),(0,e.jsxs)("div",{className:"space-y-1.5",children:[m.slice(0,2).map((L,W)=>(0,e.jsxs)("p",{className:"text-xs leading-6 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:ir(L)})," — ",ge(L.quantity)," قلم"]},`${f.id}-${L.productId||W}`)),m.length>2?(0,e.jsxs)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:["و ",ge(m.length-2)," کالای دیگر..."]}):null]})]}):null,(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-black text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]})]})]},f.id)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[900px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-ellipsis text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"کد نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"نام نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"شهر"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مجموع اقلام"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 text-center py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.map(f=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-500 dark:text-gray-400",children:zt(f.saleDate,f.createdAt)}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-cyan-50 px-3 py-1.5 font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:f.representativeCode||"—"})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(Dt,{className:"h-4 w-4 text-gray-400 dark:text-gray-500"}),f.representativeName||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)($t,{className:"h-4 w-4 text-rose-500"}),f.representativeCity||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"font-black text-amber-700 dark:text-amber-300",children:[ge(f.totalItems)," قلم"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"font-black text-emerald-700 dark:text-emerald-300",children:Ie(f.totalAmount)})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(f)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3.5 py-2 text-xs font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"مشاهده جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(f)},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-black text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]})})]},f.id))})]})})]})]}),i?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",onMouseDown:()=>{u(null)},children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"جزئیات اعلام فروش",className:"max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-gray-900",onMouseDown:f=>{f.stopPropagation()},children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(yn,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"جزئیات اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات فروش ثبت‌شده توسط نمایندگی"})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پنجره جزئیات",title:"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-6 p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900/50 dark:bg-cyan-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:"نام نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-cyan-900 dark:text-cyan-100",children:i.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["کد: ",i.representativeCode||"—"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-violet-100 bg-violet-50 p-4 dark:border-violet-900/50 dark:bg-violet-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-violet-700 dark:text-violet-300",children:"شهر نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-violet-900 dark:text-violet-100",children:i.representativeCity||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-900 dark:text-emerald-100",children:Ie(i.totalAmount)}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400",children:[ge(i.totalItems)," قلم"]})]})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:zt(i.saleDate,i.createdAt)})]}),(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-gray-600 shadow-sm dark:bg-gray-900 dark:text-gray-300",children:[(0,e.jsx)(Ge,{className:"h-4 w-4 text-cyan-500"}),"شناسه گزارش: ",i.id]})]})}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-5 py-4 dark:border-gray-700 dark:bg-gray-800/70",children:[(0,e.jsx)(Xt,{className:"h-5 w-5 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("h4",{className:"font-black text-gray-800 dark:text-white",children:"کالاهای فروخته‌شده"})]}),P.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(Xt,{className:"mx-auto h-10 w-10 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-black text-gray-600 dark:text-gray-300",children:"جزئیات کالاهای این اعلام فروش از سرور دریافت نشده است."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:P.map((f,m)=>(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["کالا ",ge(m+1)]}),(0,e.jsx)("p",{className:"mt-1 break-words font-black text-gray-800 dark:text-white",children:ir(f)})]}),(0,e.jsxs)("span",{className:"rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",children:[ge(f.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,e.jsx)("div",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800",children:(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-700 dark:text-gray-100",children:Ie(Lt(f))})}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-emerald-800 dark:text-emerald-200",children:Ie($s(f))})]})]})]},`${i.id}-${f.productId||m}`))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[700px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"ردیف"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"برند"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:P.map((f,m)=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-500 dark:text-gray-400",children:ge(m+1)}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-800 dark:text-white",children:ir(f)}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:bi(f)||"—"}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:fi(f)||"—"}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:Ie(Lt(f))}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[ge(f.quantity)," قلم"]}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Ie($s(f))})]},`${i.id}-${f.productId||m}`))})]})})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-wrap gap-2 border-t border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 md:px-6",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(i)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"تنظیم و چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]})}):null,h?(0,e.jsx)("div",{className:"admin-print-only",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:p.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:p.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:p.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:p.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:p.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Ss()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Cs()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:N==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:S.map((f,m)=>{const L=Array.isArray(f.items)?f.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:ge(m+1)}),(0,e.jsx)("td",{children:zt(f.saleDate,f.createdAt)}),(0,e.jsx)("td",{children:f.representativeCode||"—"}),(0,e.jsx)("td",{children:f.representativeName||"—"}),(0,e.jsx)("td",{children:f.representativeCity||"—"}),(0,e.jsxs)("td",{children:[ge(f.totalItems)," قلم"]}),(0,e.jsx)("td",{children:Ie(f.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:L.length>0?L.map((W,A)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[ir(W)," — ",ge(W.quantity)," قلم",Lt(W)>0?` — ${Ie(Lt(W))}`:""]},`${f.id}-${W.productId||A}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},f.id||m)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[ge(y)," قلم"]}),(0,e.jsx)("td",{children:Ie(I)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ge(S.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ge(y)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:Ie(I)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:p.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:p.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:p.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:p.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",p.companyPhone||"—"," | ","وب‌سایت: ",p.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})}):null,h?(0,e.jsx)("div",{className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"تنظیم و چاپ گزارش فروش نمایندگان",className:"max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-4 border-b border-gray-100 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"تنظیم و پیش‌نمایش چاپ گزارش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات چاپ را تنظیم و پیش‌نمایش را بررسی کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:C,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پیش‌نمایش چاپ",title:"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"space-y-4 lg:col-span-1",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نوع گزارش"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{v("all"),x(null),w(f=>({...f,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:_("all")}))},className:`rounded-xl px-3 py-2 text-xs font-black transition ${N==="all"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"تمام گزارش‌ها"}),(0,e.jsx)("button",{type:"button",onClick:()=>{v("single"),w(f=>({...f,reportTitle:`گزارش اعلام فروش نمایندگی ${k?.representativeName||""}`,reportDescription:"این گزارش شامل اطلاعات و جزئیات یک اعلام فروش ثبت‌شده توسط نمایندگی است.",reportNumber:_("single",k)}))},disabled:!k,className:`rounded-xl px-3 py-2 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-60 ${N==="single"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"یک گزارش"})]})]}),(0,e.jsxs)("div",{className:"space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"نام شرکت"}),(0,e.jsx)("input",{type:"text",value:p.companyName,onChange:f=>{T("companyName",f.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"عنوان گزارش"}),(0,e.jsx)("input",{type:"text",value:p.reportTitle,onChange:f=>{T("reportTitle",f.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"شماره گزارش"}),(0,e.jsx)("input",{type:"text",value:p.reportNumber,onChange:f=>{T("reportNumber",f.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{value:p.notes,onChange:f=>{T("notes",f.target.value)},rows:3,className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row lg:flex-col",children:[(0,e.jsxs)("button",{type:"button",onClick:F,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:C,className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]}),(0,e.jsx)("div",{className:"lg:col-span-2",children:(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"پیش‌نمایش چاپ"}),(0,e.jsx)("div",{className:"mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsx)("div",{className:"max-h-[60vh] overflow-y-auto p-4",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:p.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:p.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:p.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:p.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:p.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Ss()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Cs()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:N==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:S.map((f,m)=>{const L=Array.isArray(f.items)?f.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:ge(m+1)}),(0,e.jsx)("td",{children:zt(f.saleDate,f.createdAt)}),(0,e.jsx)("td",{children:f.representativeCode||"—"}),(0,e.jsx)("td",{children:f.representativeName||"—"}),(0,e.jsx)("td",{children:f.representativeCity||"—"}),(0,e.jsxs)("td",{children:[ge(f.totalItems)," قلم"]}),(0,e.jsx)("td",{children:Ie(f.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:L.length>0?L.map((W,A)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[ir(W)," — ",ge(W.quantity)," قلم",Lt(W)>0?` — ${Ie(Lt(W))}`:""]},`${f.id}-${W.productId||A}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},f.id||m)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[ge(y)," قلم"]}),(0,e.jsx)("td",{children:Ie(I)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ge(S.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ge(y)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:Ie(I)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:p.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:p.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:p.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:p.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",p.companyPhone||"—"," | ","وب‌سایت: ",p.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})})})]})})]})]})}):null]})},Ht="https://myshop-backend-8nu7.onrender.com/api".replace(/\/+$/,""),Ot=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],Mt={name:["عنوان","عنوان","عنوان","نام","کالا","محصول","productName","Product","Name"],brand:["برند","نام برند","Brand"],category:["دسته‌بندی","دسته بندی","دسته","گروه کالا","Category"],quantity:["تعداد","تعداد کالا","تعداد موجودی","موجودی","موجودی کالا","مقدار","quantity","Qty","Stock","Count"],price:["قیمت","قیمت","قیمت","unitPrice","Unit Price","Price"]},vi=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",zr=()=>{const t=vi();if(!t)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`,Accept:"application/json"}},mt=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),tr=t=>mt(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim().toLowerCase(),_a=t=>{const r=mt(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,"");if(!r)return NaN;const s=Number(r);return Number.isFinite(s)?s:NaN},be=t=>{const r=_a(t);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},or=(t,r)=>{const s=new Set(r.map(tr));return Object.entries(t).find(([c])=>s.has(tr(c)))?.[1]??""},Is=(t,r)=>{const s=new Set(r.map(tr));return Object.keys(t).some(c=>s.has(tr(c)))},Mr=t=>Ot.find(r=>r.value===t)?.label||"نامشخص",Dn=t=>Ot.findIndex(r=>r.value===t),As=t=>{const r=Dn(t);return r<0?"confirmed":r>=Ot.length-1?null:Ot[r+1].value},ga=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/").split("/").map(t=>mt(t)).join("/"),dr=(t,r)=>{if(xe.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||r}return t instanceof Error?t.message:r},ki=async t=>{const r=await t.arrayBuffer(),s=un(r,{type:"array"}),c=s.SheetNames[0];if(!c)throw new Error("فایل اکسل هیچ برگه‌ای ندارد.");const b=s.Sheets[c],n=gn.sheet_to_json(b,{defval:"",raw:!1});if(n.length===0)throw new Error("فایل اکسل خالی است.");const g=[];if(Is(n[0],Mt.name)||g.push("عنوان"),Is(n[0],Mt.quantity)||g.push("تعداد"),g.length>0)throw new Error(`ستون‌های لازم پیدا نشد: ${g.join("، ")}`);return n.map((i,u)=>{const h=u+2,d=String(or(i,Mt.name)).trim(),N=String(or(i,Mt.brand)).trim(),v=String(or(i,Mt.category)).trim(),k=_a(or(i,Mt.quantity)),x=or(i,Mt.price),p=String(x).trim()===""?0:_a(x);let w="";return d?!Number.isSafeInteger(k)||k<=0?w="تعداد باید عدد صحیح و بزرگ‌تر از صفر باشد.":(!Number.isSafeInteger(p)||p<0)&&(w="قیمت باید عدد صحیح و نامنفی باشد."):w="عنوان خالی است.",{rowIndex:h,productName:d,brand:N,category:v,quantity:Number.isFinite(k)?k:0,unitPrice:Number.isFinite(p)?p:0,totalPrice:Number.isFinite(k)&&Number.isFinite(p)?k*p:0,error:w}})},Ni=()=>{const[t,r]=(0,a.useState)([]),[s,c]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[g,i]=(0,a.useState)(!1),[u,h]=(0,a.useState)(null),[d,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(""),[x,p]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),[$,q]=(0,a.useState)(!1),[z,O]=(0,a.useState)(null),[G,P]=(0,a.useState)(""),[S,y]=(0,a.useState)(""),[I,_]=(0,a.useState)(ga),[T,V]=(0,a.useState)(""),[Q,C]=(0,a.useState)([]),[F,f]=(0,a.useState)(""),[m,L]=(0,a.useState)(""),[W,A]=(0,a.useState)(""),j=(0,a.useRef)(null),U=(0,a.useMemo)(()=>new Map(s.map(l=>[mt(l.id).trim(),l])),[s]),Z=U.get(G),B=(0,a.useMemo)(()=>Q.filter(l=>!l.error),[Q]),pe=(0,a.useMemo)(()=>Q.filter(l=>!!l.error),[Q]),ee=(0,a.useMemo)(()=>{const l=tr(W);return t.filter(E=>{const J=U.get(mt(E.representativeId).trim()),me=!F||mt(E.representativeId).trim()===F,fe=!m||E.status===m,te=tr([E.shipmentNumber,E.representativeName,J?.name,E.warehouse,E.excelFileName].join(" "));return me&&fe&&te.includes(l)})},[t,U,F,m,W]),re=(0,a.useCallback)(async(l=!0)=>{l&&n(!0);try{const E=zr(),[J,me]=await Promise.all([xe.get(`${Ht}/shipments`,{headers:E}),xe.get(`${Ht}/representatives`,{headers:E})]);if(J.data.success===!1||me.data.success===!1)throw new Error(J.data.error||me.data.error||"دریافت اطلاعات ناموفق بود.");r(Array.isArray(J.data.data)?J.data.data:[]),c(Array.isArray(me.data.data)?me.data.data:[])}catch(E){k(dr(E,"دریافت اطلاعات ناموفق بود."))}finally{l&&n(!1)}},[]);(0,a.useEffect)(()=>{re()},[re]);const ne=()=>{P(""),y(""),_(ga()),V(""),C([]),o(""),j.current&&(j.current.value="")},X=()=>{ne(),_(ga()),k(""),p(""),q(!0)},ie=async l=>{const E=l.target.files?.[0];if(V(""),C([]),o(""),!!E){if(!/\.(xlsx|xls)$/i.test(E.name)){o("فقط فایل اکسل xlsx یا xls پذیرفته می‌شود."),l.target.value="";return}try{const J=await ki(E);V(E.name),C(J)}catch(J){o(dr(J,"خواندن فایل اکسل ناموفق بود.")),l.target.value=""}}},he=async l=>{if(l.preventDefault(),o(""),k(""),p(""),!Z){o("نماینده را انتخاب کنید.");return}const E=String(Z.id||"").trim();if(!E||E==="undefined"||E==="null"){o("شناسه نماینده نامعتبر است. لطفاً صفحه را رفرش کرده و دوباره تلاش کنید.");return}i(!0);try{let J,me=0;B.length>0?(J=B.map(te=>({productName:te.productName,brand:te.brand,category:te.category,quantity:te.quantity,unitPrice:te.unitPrice,rowIndex:te.rowIndex})),me=pe.length):J=[{productName:"بار دستی",brand:"",category:"",quantity:1,unitPrice:0,rowIndex:1}],console.log("🚀 Sending shipment request:",{url:`${Ht}/shipments`,representativeId:E,warehouse:S.trim()||"انبار مرکزی",itemsCount:J.length,skippedInvalidRows:me});const fe=await xe.post(`${Ht}/shipments`,{representativeId:E,warehouse:S.trim()||"انبار مرکزی",shipmentDate:I,excelFileName:T||"",items:J},{headers:{...zr(),"Content-Type":"application/json"}});if(fe.data.success===!1)throw new Error(fe.data.error||"ثبت بار ناموفق بود.");q(!1),ne(),p(fe.data.message||"بار با موفقیت ثبت شد."),re(!1)}catch(J){o(dr(J,"ثبت بار ناموفق بود."))}finally{i(!1)}},R=async(l,E)=>{if(l.status!==E&&window.confirm(`وضعیت بار «${l.shipmentNumber||l.id}» به «${Mr(E)}» تغییر کند؟`)){h(String(l.id)),k(""),p("");try{const J=await xe.patch(`${Ht}/shipments/${encodeURIComponent(String(l.id))}/status`,{status:E},{headers:zr()});if(J.data.success===!1)throw new Error(J.data.error||"تغییر وضعیت ناموفق بود.");J.data.data?r(fe=>fe.map(te=>String(te.id)===String(l.id)?J.data.data:te)):re(!1);let me=J.data.message||"وضعیت بار تغییر کرد.";J.data.sms&&(J.data.sms.sent?me+=" پیامک برای نماینده ارسال شد.":me+=" (ارسال پیامک ناموفق بود.)"),p(me)}catch(J){k(dr(J,"تغییر وضعیت ناموفق بود."))}finally{h(null)}}},H=async l=>{const E=As(l.status);if(!E){k("بار در آخرین وضعیت است. برای تغییر دستی از انتخاب‌گر وضعیت استفاده کنید.");return}await R(l,E)},ae=async l=>{const E=l.shipmentNumber||l.id;if(window.confirm(`آیا از حذف بار «${E}» مطمئن هستید؟`)){N(String(l.id)),k(""),p("");try{const J=await xe.delete(`${Ht}/shipments/${encodeURIComponent(String(l.id))}`,{headers:zr()});if(J.data.success===!1)throw new Error(J.data.error||"حذف بار ناموفق بود.");r(me=>me.filter(fe=>String(fe.id)!==String(l.id))),p(J.data.message||"بار حذف شد.")}catch(J){k(dr(J,"حذف بار ناموفق بود."))}finally{N(null)}}};return b&&t.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-10 text-center dark:bg-gray-900",children:[(0,e.jsx)(ue,{className:"mx-auto mb-3 h-9 w-9 animate-spin text-blue-600"}),"در حال دریافت اطلاعات..."]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 rounded-2xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:space-y-5 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:pb-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-900 dark:text-white sm:text-2xl",children:[(0,e.jsx)(er,{className:"h-5 w-5 text-blue-600 sm:h-6 sm:w-6"}),"مدیریت ارسال بار"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm",children:[be(t.length)," حواله ثبت‌شده"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>void re(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-3 text-xs font-bold dark:border-gray-700 dark:text-white sm:px-4 sm:text-sm",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"به‌روزرسانی"]}),(0,e.jsxs)("button",{type:"button",onClick:X,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 text-xs font-black text-white hover:bg-blue-700 sm:px-4 sm:text-sm",children:[(0,e.jsx)(Nr,{className:"h-4 w-4"}),"ارسال بار جدید"]})]})]}),v&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),v]}),x&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700",children:[(0,e.jsx)(Ne,{className:"h-5 w-5 shrink-0"}),x]}),(0,e.jsxs)("section",{className:"grid gap-3 md:grid-cols-3",children:[(0,e.jsx)("input",{type:"search",value:W,onChange:l=>A(l.target.value),placeholder:"جست‌وجوی حواله یا نماینده",className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("select",{value:F,onChange:l=>f(l.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ نمایندگان"}),s.map(l=>(0,e.jsx)("option",{value:mt(l.id).trim(),children:l.name||"بدون نام"},String(l.id)))]}),(0,e.jsxs)("select",{value:m,onChange:l=>L(l.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ وضعیت‌ها"}),Ot.map(l=>(0,e.jsx)("option",{value:l.value,children:l.label},l.value))]})]}),ee.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل بارها"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(ee.length)," حواله · ",be(ee.reduce((l,E)=>l+(E.totalItems??E.items?.reduce((J,me)=>J+me.quantity,0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:be(ee.reduce((l,E)=>l+(E.totalValue??E.items?.reduce((J,me)=>J+(me.totalPrice??(me.quantity||0)*(me.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),ee.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-10 text-center",children:[(0,e.jsx)(gt,{className:"mx-auto mb-3 h-12 w-12 text-blue-300"}),(0,e.jsx)("p",{className:"font-bold text-gray-700",children:t.length===0?"هنوز باری ثبت نشده است.":"باری با این فیلترها پیدا نشد."})]}):(0,e.jsx)("div",{className:"grid gap-4 xl:grid-cols-2",children:ee.map(l=>{const E=U.get(mt(l.representativeId).trim()),J=l.representativeName||E?.name||"—",me=l.items?.length??l.itemsCount??0,fe=l.totalItems??l.items?.reduce((de,je)=>de+je.quantity,0)??0,te=Dn(l.status),oe=As(l.status),D=u===String(l.id),Y=d===String(l.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/60 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"truncate text-xs font-bold text-gray-500",children:["حواله ",l.shipmentNumber||l.id]}),(0,e.jsx)("h3",{className:"mt-1 text-base font-black text-gray-900 dark:text-white sm:text-lg",children:J}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-600 dark:text-gray-300 sm:mt-2 sm:text-sm",children:["انبار: ",l.warehouse||"—"]})]}),(0,e.jsx)("span",{className:"rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-black text-blue-700 sm:px-3 sm:py-1.5 sm:text-xs",children:Mr(l.status)})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-2 sm:mt-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:be(me)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:be(fe)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black dark:text-white sm:text-sm",children:l.shipmentDate||"—"})]})]}),(0,e.jsx)("div",{className:"mt-3 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-1.5",children:Ot.map((de,je)=>(0,e.jsx)("div",{className:`truncate rounded-lg px-1 py-2 text-center text-[9px] font-bold sm:text-xs ${je<=te?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700"}`,children:de.label},de.value))}),(0,e.jsxs)("div",{className:"mt-3 flex flex-col gap-2 border-t border-gray-200 pt-3 dark:border-gray-700 sm:mt-4 sm:flex-row sm:pt-4",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>O(l),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-300 px-4 text-sm font-bold text-blue-700",children:[(0,e.jsx)(ta,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsx)("button",{type:"button",onClick:()=>void H(l),disabled:D||Y||!oe,title:oe?`تغییر به ${Mr(oe)}`:"مرحلهٔ بعدی ندارد",className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white disabled:cursor-not-allowed disabled:bg-gray-300",children:D?(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Ua,{className:"h-5 w-5"})}),(0,e.jsx)("select",{value:l.status||"registered",onChange:de=>void R(l,de.target.value),disabled:D||Y,className:"min-h-11 flex-1 rounded-xl border border-gray-300 bg-white px-3 text-sm font-bold dark:border-gray-700 dark:bg-gray-900 dark:text-white",children:Ot.map(de=>(0,e.jsx)("option",{value:de.value,children:de.label},de.value))}),(0,e.jsxs)("button",{type:"button",onClick:()=>void ae(l),disabled:D||Y,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 disabled:opacity-50",children:[Y?(0,e.jsx)(ue,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف"]})]})]},String(l.id))})}),$&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-xl font-black dark:text-white",children:"ارسال بار جدید"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"گیرنده به‌صورت خودکار نام نمایندهٔ انتخاب‌شده است."})]}),(0,e.jsx)("button",{type:"button",disabled:g,onClick:()=>{q(!1),ne()},className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),w&&(0,e.jsxs)("div",{className:"mb-4 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),w]}),(0,e.jsxs)("form",{onSubmit:l=>void he(l),className:"space-y-4 sm:space-y-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 sm:grid-cols-2 sm:gap-4",children:[(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["نماینده",(0,e.jsxs)("select",{value:G,onChange:l=>P(l.target.value),required:!0,className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"نماینده را انتخاب کنید"}),s.map(l=>(0,e.jsxs)("option",{value:mt(l.id).trim(),children:[l.name||"بدون نام"," ","—"," ",l.city||"بدون شهر"]},String(l.id)))]})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["تاریخ ثبت بار",(0,e.jsxs)("div",{className:"relative mt-2",children:[(0,e.jsx)(ot,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"}),(0,e.jsx)("input",{value:I,readOnly:!0,dir:"ltr",className:"min-h-12 w-full cursor-not-allowed rounded-xl border border-blue-200 bg-blue-50 py-2 pl-3 pr-11 text-center font-black text-blue-800"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:"تاریخ امروز خودکار ثبت می‌شود و قابل ویرایش نیست."})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white sm:col-span-2",children:["انبار مبدأ ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"}),(0,e.jsx)("input",{value:S,onChange:l=>y(l.target.value),placeholder:"خالی = انبار مرکزی",className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]})]}),Z&&(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 text-sm font-bold text-purple-800",children:["گیرندهٔ خودکار:"," ",Z.name||"—"," ","— کد"," ",Z.code||"—"]}),(0,e.jsx)("div",{className:"rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-5",children:(0,e.jsxs)("label",{className:"flex cursor-pointer flex-col items-center gap-2 text-center",children:[(0,e.jsx)(wr,{className:"h-8 w-8 text-blue-600"}),(0,e.jsxs)("span",{className:"font-black text-blue-800",children:["انتخاب فایل اکسل اقلام ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"})]}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"ستون‌های ضروری: عنوان و تعداد — اگر فایل انتخاب نکنید، بار با یک آیتم پیش‌فرض ثبت می‌شود"}),(0,e.jsx)("input",{ref:j,type:"file",accept:".xlsx,.xls",onChange:l=>void ie(l),className:"sr-only"})]})}),T&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm font-bold text-green-700",children:[(0,e.jsx)(Xa,{className:"h-5 w-5"}),T]}),Q.length>0&&(0,e.jsxs)("div",{className:"max-h-72 overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"space-y-2 p-2 sm:hidden",children:Q.map(l=>(0,e.jsxs)("div",{className:`rounded-xl p-3 ${l.error?"bg-red-50 text-red-700":"bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white"}`,children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate font-black",children:l.productName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500",children:["ردیف ",be(l.rowIndex)]})]}),(0,e.jsx)("span",{className:`rounded-full px-2 py-0.5 text-[10px] font-bold ${l.error?"bg-red-200 text-red-800":"bg-green-100 text-green-700"}`,children:l.error?"نامعتبر":"آماده"})]}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black",children:be(l.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsx)("p",{className:"font-black",children:be(l.unitPrice)})})]}),l.brand&&(0,e.jsxs)("p",{className:"mt-2 text-xs text-gray-500",children:["برند: ",l.brand]}),l.category&&(0,e.jsxs)("p",{className:"text-xs text-gray-500",children:["دسته: ",l.category]})]},l.rowIndex))}),(0,e.jsxs)("table",{className:"hidden w-full min-w-[700px] text-right text-sm sm:table",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"ردیف"}),(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:Q.map(l=>(0,e.jsxs)("tr",{className:`border-t border-gray-100 dark:border-gray-700 ${l.error?"bg-red-50":"dark:text-white"}`,children:[(0,e.jsx)("td",{className:"p-3",children:be(l.rowIndex)}),(0,e.jsx)("td",{className:"p-3 font-bold",children:l.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:be(l.unitPrice)}),(0,e.jsx)("td",{className:"p-3",children:be(l.quantity)}),(0,e.jsx)("td",{className:"p-3",children:l.error||"آماده"})]},l.rowIndex))})]})]}),B.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع قیمت محصولات"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(B.length)," قلم · ",be(B.reduce((l,E)=>l+E.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:be(B.reduce((l,E)=>l+E.quantity*E.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),B.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-emerald-50 via-green-50 to-teal-50 p-4 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-teal-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل ارسال بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(B.length)," قلم · ",be(B.reduce((l,E)=>l+E.quantity,0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 sm:text-xl",children:be(B.reduce((l,E)=>l+E.quantity*E.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",disabled:g,onClick:()=>{q(!1),ne()},className:"min-h-12 rounded-xl bg-gray-100 px-4 text-sm font-bold text-gray-700 sm:px-5",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:g||!Z,className:"flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 font-black text-white disabled:cursor-not-allowed disabled:opacity-50",children:[g?(0,e.jsx)(ue,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Ha,{className:"h-4 w-4"}),"ثبت و ارسال بار"]})]})]})]})}),z&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"text-xl font-black dark:text-white",children:["جزئیات بار"," ",z.shipmentNumber||z.id]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:["فایل:"," ",z.excelFileName||"—"]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>O(null),className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mb-5 rounded-xl bg-blue-50 p-3 text-sm font-black text-blue-700",children:["وضعیت فعلی:"," ",Mr(z.status)]}),z.items?.length?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"mb-4 rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع این بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(z.items.length)," قلم · ",be(z.items.reduce((l,E)=>l+E.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:be(z.items.reduce((l,E)=>l+(E.totalPrice??E.quantity*E.unitPrice),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsx)("div",{className:"space-y-2 sm:hidden",children:z.items.map((l,E)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:l.productName}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:be(l.quantity)})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"قیمت"}),(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[be(l.unitPrice)," ت"]})]})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[l.brand&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",l.brand]}),l.category&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",l.category]})]}),(0,e.jsxs)("div",{className:"mt-2 rounded-lg bg-green-50 p-2 text-xs dark:bg-green-950/20",children:[(0,e.jsx)("span",{className:"text-gray-500",children:"مبلغ کل: "}),(0,e.jsxs)("span",{className:"font-black text-green-700 dark:text-green-300",children:[be(l.totalPrice??l.quantity*l.unitPrice)," تومان"]})]})]},String(l.id??E)))}),(0,e.jsx)("div",{className:"hidden max-h-80 overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"مبلغ"})]})}),(0,e.jsx)("tbody",{children:z.items.map((l,E)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-white",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:l.productName}),(0,e.jsx)("td",{className:"p-3",children:l.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.category||"—"}),(0,e.jsxs)("td",{className:"p-3",children:[be(l.unitPrice)," ","تومان"]}),(0,e.jsx)("td",{className:"p-3",children:be(l.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[be(l.totalPrice)," ","تومان"]})]},String(l.id??E)))})]})})]}):(0,e.jsx)("p",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500",children:"اقلام بار برای نمایش موجود نیستند."})]})})]})};function Cr(t){"@babel/helpers - typeof";return Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Cr(t)}function wi(t,r){if(Cr(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var c=s.call(t,r||"default");if(Cr(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Si(t){var r=wi(t,"string");return Cr(r)=="symbol"?r:r+""}function Ds(t,r,s){return(r=Si(r))in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}var Ci=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},$i=Ci("https://myshop-backend-8nu7.onrender.com/api"),Ii=class extends a.Component{constructor(...t){super(...t),Ds(this,"state",{hasError:!1,errorMessage:"",errorStack:"",componentStack:""}),Ds(this,"handleRetry",()=>{this.setState({hasError:!1,errorMessage:"",errorStack:"",componentStack:""})})}static getDerivedStateFromError(t){return{hasError:!0,errorMessage:t?.message||"خطای نامشخص در داشبورد نماینده.",errorStack:t?.stack||""}}componentDidCatch(t,r){console.error("❌ خطای داشبورد نماینده:",t),console.error("❌ مسیر کامپوننت:",r.componentStack),this.setState({componentStack:r.componentStack||""})}render(){const{children:t,onBack:r}=this.props,{hasError:s,errorMessage:c,errorStack:b,componentStack:n}=this.state;return s?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border-2 border-red-300 bg-red-50 p-5 shadow-lg dark:border-red-900/60 dark:bg-red-950/30 md:p-7",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"rounded-xl bg-red-100 p-3 text-red-600 dark:bg-red-900/40 dark:text-red-300",children:(0,e.jsx)(ze,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-red-800 dark:text-red-300",children:"خطا در نمایش داشبورد نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-bold leading-7 text-red-700 dark:text-red-400",children:"متن خطای زیر را کامل بررسی کنید."})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-sm font-black text-red-700 dark:text-red-400",children:"متن خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-44 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-red-50 p-3 text-xs leading-6 text-red-800 dark:bg-red-950/30 dark:text-red-300",children:c})]}),b?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"جزئیات فنی خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:b})]}):null,n?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"مسیر کامپوننت خطادار"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:n})]}):null,(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",onClick:this.handleRetry,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"تلاش دوباره"]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"min-h-11 rounded-xl bg-gray-800 px-5 py-3 text-sm font-black text-white transition hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]})]}):t}},Ts=({activeSection:t,userRole:r,products:s,totalProducts:c,totalPrice:b,viewingRepDashboard:n,representatives:g,representativeFiles:i,loadingFiles:u,shipments:h=[],onEditProduct:d,onDeleteProduct:N,onUploadSuccess:v,onOpenRepDashboard:k,onBackToRepList:x,onViewFile:p,onDeleteFile:w,onAddRepresentative:o,onEditRepresentative:$,onDeleteRepresentative:q,onRepresentativeUpdated:z})=>{const O=(0,a.useMemo)(()=>Array.isArray(s)?s:[],[s]),G=(0,a.useMemo)(()=>Array.isArray(g)?g:[],[g]),P=(0,a.useMemo)(()=>Array.isArray(h)?h:[],[h]),S=(0,a.useMemo)(()=>Array.isArray(i)?i:[],[i]),y=(0,a.useMemo)(()=>n===null||n===""?null:G.find(I=>String(I.id)===String(n))||null,[G,n]);if((0,a.useEffect)(()=>{console.log("🔎 MAIN CONTENT STATE",{activeSection:t,productsCount:O.length,totalProducts:c,viewingRepDashboard:n,representativesCount:G.length,selectedRepresentative:y?.name||null})},[t,O.length,c,n,G.length,y]),n!==null&&n!=="")return y?(0,e.jsx)(Ii,{onBack:x,children:(0,e.jsx)(ci,{representative:y,apiUrl:$i,onBack:x,files:S,loadingFiles:u,onViewFile:p,onDeleteFile:w,onRepresentativeUpdated:z})}):(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center shadow-lg dark:border-yellow-800 dark:bg-yellow-900/20 md:p-8",children:[(0,e.jsx)(ue,{className:"mx-auto mb-4 h-12 w-12 animate-spin text-yellow-600 dark:text-yellow-400"}),(0,e.jsx)("p",{className:"text-base font-black text-yellow-700 dark:text-yellow-300 md:text-lg",children:"اطلاعات نماینده پیدا نشد."}),(0,e.jsxs)("div",{className:"mx-auto mt-4 max-w-xl rounded-xl border border-yellow-200 bg-white p-4 text-right text-xs leading-7 text-yellow-800 dark:border-yellow-800 dark:bg-gray-900 dark:text-yellow-300",children:[(0,e.jsxs)("p",{children:["شناسه انتخاب‌شده:"," ",(0,e.jsx)("strong",{children:n})]}),(0,e.jsxs)("p",{children:["تعداد نمایندگان:"," ",(0,e.jsx)("strong",{children:G.length})]}),(0,e.jsxs)("p",{className:"break-words",children:["شناسه‌های موجود:"," ",(0,e.jsx)("strong",{children:G.map(I=>String(I.id)).join(", ")||"هیچ‌کدام"})]})]}),(0,e.jsx)("button",{type:"button",onClick:x,className:"mt-5 min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]});switch(t){case"dashboard":return(0,e.jsx)(ql,{totalProducts:Number(c)||0,totalPrice:Number(b)||0,representatives:G,shipments:P});case"products":return(0,e.jsx)(Cn,{products:O,userRole:r,onEdit:d,onDelete:N});case"representatives":return r!=="admin"?(0,e.jsx)(lr,{message:"فقط ادمین به بخش نمایندگان دسترسی دارد."}):(0,e.jsx)(ni,{representatives:G,userRole:r,onOpenDashboard:k,onAddRepresentative:o,onEditRepresentative:$,onDeleteRepresentative:q});case"upload":return r!=="admin"?(0,e.jsx)(lr,{message:"فقط ادمین به بخش آپلود اکسل دسترسی دارد."}):(0,e.jsx)(Jl,{onUploadSuccess:v});case"shipments":return r!=="admin"?(0,e.jsx)(lr,{message:"فقط ادمین به بخش ارسال بار دسترسی دارد."}):(0,e.jsx)(Ni,{});case"sales-reports":return r!=="admin"?(0,e.jsx)(lr,{message:"فقط ادمین به بخش اعلام فروش نمایندگان دسترسی دارد."}):(0,e.jsx)(ji,{});case"return-requests":return r!=="admin"?(0,e.jsx)(lr,{message:"فقط ادمین به درخواست‌های مرجوعی دسترسی دارد."}):(0,e.jsx)(mi,{});default:return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-orange-500 dark:text-orange-400",children:(0,e.jsx)(ul,{className:"h-16 w-16 md:h-20 md:w-20"})}),(0,e.jsx)("p",{className:"text-base text-gray-500 dark:text-gray-400 md:text-xl",children:"این بخش در حال توسعه است."})]})}},Ai=({file:t,apiUrl:r,onClose:s})=>{if(!t)return null;const c=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/view`,b=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/download`;return(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md md:p-4",children:(0,e.jsxs)("div",{className:"relative w-full max-w-4xl",children:[(0,e.jsx)("button",{type:"button",onClick:s,className:"absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600","aria-label":"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})}),t.icon==="🖼️"?(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-white shadow-2xl",children:[(0,e.jsx)("div",{className:"relative flex items-center justify-center bg-gray-100",children:(0,e.jsx)("img",{src:c,alt:t.name,className:"max-h-[75vh] w-full object-contain"})}),(0,e.jsxs)("div",{className:"flex items-center gap-3 bg-gray-900 px-4 py-3 text-white",children:[(0,e.jsx)(Nn,{className:"h-5 w-5 shrink-0 text-gray-400"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate text-sm font-bold",children:t.name}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs text-gray-400",children:[t.size," • ",t.uploadedAt]})]})]})]}):(0,e.jsxs)("div",{className:"mx-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl md:p-8",children:[(0,e.jsx)("div",{className:"mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-100 text-blue-600 mx-auto",children:(0,e.jsx)(ht,{className:"h-12 w-12"})}),(0,e.jsx)("h3",{className:"mb-2 truncate text-lg font-black text-gray-800",children:t.name}),(0,e.jsxs)("p",{className:"mb-6 text-sm text-gray-500",children:[t.size," • ",t.uploadedAt]}),(0,e.jsxs)("div",{className:"flex flex-col justify-center gap-3 sm:flex-row",children:[(0,e.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"باز کردن"]}),(0,e.jsxs)("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-600",children:[(0,e.jsx)(jn,{className:"h-4 w-4"}),"دانلود"]})]})]})]})})},Tn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),rt=t=>{const r=Tn(t).replace(/[,٬،\s]/g,""),s=Number(r);return Number.isFinite(s)?Math.max(0,s):0},cr=t=>rt(t).toLocaleString("fa-IR"),Se=t=>rt(t).toLocaleString("fa-IR"),Ve=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Rs=t=>Tn(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").trim().toLowerCase(),Di=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},Es=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"];for(const r of[sessionStorage,localStorage])for(const s of t){const c=r.getItem(s);if(c&&c!=="null"&&c!=="undefined"){const b=c.replace(/^Bearer\s+/i,"").trim();if(b)return b}}return""},Ti=({representatives:t=[],onOpenRepresentativeWarehouse:r,apiUrl:s})=>{const[c,b]=(0,a.useState)(""),[n,g]=(0,a.useState)("all"),[i,u]=(0,a.useState)({}),[h,d]=(0,a.useState)({}),[N,v]=(0,a.useState)(!0),[k,x]=(0,a.useState)(0),p=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),w=Di(s),o=JSON.stringify([...new Set(p.map(m=>String(m.id)))].sort()),$=JSON.stringify(p.map(m=>[String(m.id),m.storeItemsCount,m.storeItemsTotalValue])),q=(0,a.useCallback)(()=>{x(m=>m+1)},[]),z=()=>"https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png",O=()=>{try{return new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleString("fa-IR")}},G=()=>{if(N){window.alert("لطفاً صبر کنید تا دریافت انبارها کامل شود.");return}if(!S.length){window.alert("نماینده‌ای برای چاپ موجود نیست.");return}const m=window.open("","_blank","width=1000,height=720");if(!m){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}const L=O(),W=z(),A=S.map(ee=>{const re=String(ee.id),ne=i[re],X=h[re];return{id:re,name:ee.name||"بدون نام",code:ee.code||"-",city:ee.city||"-",phone:ee.phone||"-",status:ee.status!=="inactive"?"فعال":"غیرفعال",itemCount:ne?.itemCount??0,totalValue:ne?.totalValue??0,hasError:!!X||!ne}}),j=A.map((ee,re)=>`
        <tr>
          <td style="text-align:center;">${re+1}</td>
          <td>${Ve(ee.name)}<div style="font-size:10px;color:#6b7280;margin-top:2px;" dir="ltr">${Ve(ee.phone)}</div></td>
          <td style="text-align:center;">${Ve(ee.code)}</td>
          <td style="text-align:center;">${Ve(ee.city)}</td>
          <td style="text-align:center;">${ee.status}</td>
          <td style="text-align:center;">${ee.hasError?"نامشخص":Se(ee.itemCount)}</td>
          <td style="text-align:center;">${ee.hasError?"نامشخص":Se(ee.totalValue)+" تومان"}</td>
        </tr>`).join(""),U=A.reduce((ee,re)=>ee+(re.hasError?0:re.itemCount),0),Z=A.reduce((ee,re)=>ee+(re.hasError?0:re.totalValue),0),B=A.filter(ee=>ee.status==="فعال").length,pe=A.filter(ee=>ee.hasError).length;m.document.write(`<!DOCTYPE html>
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
.info-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin: 10px 0 14px; }
.info-card { border: 1px solid #ddd; border-radius: 6px; padding: 6px 8px; background: #f9fafb; }
.info-card .label { font-size: 9px; color: #6b7280; margin-bottom: 2px; }
.info-card .value { font-size: 12px; font-weight: bold; color: #111; }
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
    <img src="${W}" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۱-۹۳۱۱۱۰۲۱</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${L}</p>
    <p><strong>تعداد نمایندگان:</strong> ${Se(A.length)}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش خلاصهٔ انبارهای نمایندگان</h2>
  <p>شامل تعداد کالاهای دارای موجودی و ارزش کل موجودی هر نماینده</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نمایندگان فعال</div>
    <div class="value">${Se(B)}</div>
  </div>
  <div class="info-card">
    <div class="label">مجموع کالاهای دارای موجودی</div>
    <div class="value">${Se(U)}</div>
  </div>
  <div class="info-card">
    <div class="label">ارزش کل انبارها</div>
    <div class="value">${Se(Z)}<br><span style="font-size:11px;">تومان</span></div>
  </div>
  <div class="info-card">
    <div class="label">انبارهای ناموفق</div>
    <div class="value" style="color:${pe>0?"#b91c1c":"#111"};">${Se(pe)}</div>
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
    ${j}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="5" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${Se(U)}</strong></td>
        <td style="text-align:center;"><strong>${Se(Z)} تومان</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد کل انبارها</div>
      <div class="value">${Se(A.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع کالاها</div>
      <div class="value">${Se(U)}</div>
    </div>
    <div class="summary-card">
      <div class="label">ارزش کل انبارها</div>
      <div class="value">${Se(Z)}<br><span style="font-size:11px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر</p>
  </div>
</div>

</body>
</html>`),m.document.close(),m.focus(),setTimeout(()=>{m.print()},800)},P=async m=>{const L=String(m.id);let W=i[L];if(!W||!Array.isArray(W.items)||W.items.length===0)try{const ne=Es(),X={Accept:"application/json"};ne&&(X.Authorization=`Bearer ${ne}`);const ie=await fetch(`${w}/representatives/${encodeURIComponent(L)}/warehouse?_=${Date.now()}`,{method:"GET",credentials:"include",cache:"no-store",headers:X}),he=await ie.text();let R;try{R=JSON.parse(he)}catch{throw new Error("پاسخ انبار معتبر نیست.")}if(!ie.ok||!R.success)throw new Error(R.error||R.message||"دریافت انبار ناموفق بود.");const H=(Array.isArray(R.data?.items)?R.data.items:[]).filter(ae=>rt(ae.quantity)>0);W={itemCount:H.length,totalValue:H.reduce((ae,l)=>ae+rt(l.quantity)*rt(l.unitPrice),0),items:H,updatedAt:R.data?.updatedAt}}catch(ne){const X=ne instanceof Error?ne.message:"دریافت انبار ناموفق بود.";window.alert(`دریافت جزئیات انبار ${m.name||""} ناموفق بود:
${X}`);return}const A=window.open("","_blank","width=1000,height=720");if(!A){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}const j=O(),U=z(),Z=W?.items??[],B=Z.map((ne,X)=>{const ie=String(ne.productName||ne.name||ne.title||"بدون عنوان"),he=String(ne.brand||"-"),R=String(ne.category||"-"),H=rt(ne.quantity),ae=rt(ne.unitPrice),l=H*ae;return`
        <tr>
          <td style="text-align:center;">${X+1}</td>
          <td>${Ve(ie)}</td>
          <td style="text-align:center;">${Ve(he)}</td>
          <td style="text-align:center;">${Ve(R)}</td>
          <td style="text-align:center;">${Se(ae)} تومان</td>
          <td style="text-align:center;">${Se(H)}</td>
          <td style="text-align:center;">${Se(l)} تومان</td>
        </tr>`}).join(""),pe=Z.reduce((ne,X)=>ne+rt(X.quantity),0),ee=W?.totalValue??0,re=W?.updatedAt?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(W.updatedAt)):"-";A.document.write(`<!DOCTYPE html>
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
.info-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 6px; margin-bottom: 12px; }
.info-card { border: 1px solid #ddd; border-radius: 6px; padding: 6px 8px; }
.info-card .label { font-size: 9px; color: #6b7280; margin-bottom: 2px; }
.info-card .value { font-size: 12px; font-weight: bold; }
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
    <img src="${U}" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۱-۹۳۱۱۱۰۲۱</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${j}</p>
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
    <div class="value">${Se(W?.itemCount??Z.length)}</div>
  </div>
  <div class="info-card">
    <div class="label">آخرین بروزرسانی</div>
    <div class="value">${re}</div>
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
    ${B||'<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:30px;">هیچ کالای دارای موجودی ثبت نشده است.</td></tr>'}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="4" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${Se(pe)}</strong></td>
        <td></td>
        <td style="text-align:center;"><strong>${Se(ee)} تومان</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد انواع کالا</div>
      <div class="value">${Se(W?.itemCount??Z.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع قطعات</div>
      <div class="value">${Se(pe)}</div>
    </div>
    <div class="summary-card">
      <div class="label">ارزش کل انبار</div>
      <div class="value">${Se(ee)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر</p>
  </div>
</div>

</body>
</html>`),A.document.close(),A.focus(),setTimeout(()=>{A.print()},800)};(0,a.useEffect)(()=>{const m=new AbortController,L=JSON.parse(o);return(async()=>{if(v(!0),d({}),!L.length){u({}),v(!1);return}const A={},j={},U=Es(),Z={Accept:"application/json"};U&&(Z.Authorization=`Bearer ${U}`);let B=0;const pe=async()=>{for(;B<L.length&&!m.signal.aborted;){const ee=L[B];B+=1;try{const re=await fetch(`${w}/representatives/${encodeURIComponent(ee)}/warehouse?_=${Date.now()}`,{method:"GET",credentials:"include",cache:"no-store",headers:Z,signal:m.signal}),ne=await re.text();let X;try{X=JSON.parse(ne)}catch{throw new Error(`پاسخ انبار معتبر نیست. کد: ${re.status}`)}if(!re.ok||!X.success)throw new Error(X.error||X.message||`دریافت انبار ناموفق بود. کد: ${re.status}`);if(!Array.isArray(X.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور موجود نیست.");const ie=X.data.items.filter(he=>rt(he.quantity)>0);A[ee]={itemCount:ie.length,totalValue:ie.reduce((he,R)=>he+rt(R.quantity)*rt(R.unitPrice),0),items:ie,updatedAt:X.data?.updatedAt}}catch(re){if(m.signal.aborted)return;j[ee]=re instanceof Error?re.message:"دریافت موجودی ناموفق بود."}}};await Promise.all(Array.from({length:Math.min(4,L.length)},()=>pe())),m.signal.aborted||(u(A),d(j),v(!1))})(),()=>{m.abort()}},[w,o,$,k]);const S=(0,a.useMemo)(()=>{const m=Rs(c);return p.filter(L=>{const W=L.status!=="inactive",A=n==="all"||(n==="active"?W:!W),j=!m||[L.name,L.code,L.city,L.phone].some(U=>Rs(U).includes(m));return A&&j})},[p,c,n]),y=(0,a.useMemo)(()=>p.reduce((m,L)=>{const W=i[String(L.id)];return W?{itemCount:m.itemCount+W.itemCount,totalValue:m.totalValue+W.totalValue}:m},{itemCount:0,totalValue:0}),[p,i]),I=p.filter(m=>m.status!=="inactive").length,_=Object.keys(h).length,T=!N&&_>0,V=m=>{const L=m.status!=="inactive";return(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${L?"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`,children:[(0,e.jsx)(Ne,{className:"h-3.5 w-3.5"}),L?"فعال":"غیرفعال"]})},Q=m=>{if(N)return(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"در حال دریافت..."});if(h[m]||!i[m])return(0,e.jsx)("span",{className:"text-xs text-red-600",children:"نامشخص"});const L=i[m].itemCount;return(0,e.jsx)("span",{className:`inline-flex rounded-full px-2.5 py-1 text-xs font-black ${L>0?"bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`,children:L>0?`${cr(L)} نوع کالا`:"بدون موجودی"})},C=m=>N?"در حال دریافت...":h[m]||!i[m]?"نامشخص":`${cr(i[m].totalValue)} تومان`,F=(m,L)=>(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>r(m),className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white hover:from-cyan-700 hover:to-blue-700",children:[(0,e.jsx)(It,{className:"h-4 w-4"}),"ورود به انبار"]}),L?(0,e.jsxs)("button",{type:"button",onClick:()=>P(L),className:"inline-flex min-h-10 items-center justify-center gap-1 rounded-xl border border-cyan-600 px-3 py-2 text-xs font-black text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/20",title:"چاپ لیست کالاهای این انبار",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ انبار"]}):null]}),f=m=>N?"...":T?"نامشخص":cr(m);return(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(It,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl",children:"انبار نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط کالاهای دارای موجودی در انبار شمارش می‌شوند؛ ردیف‌های ثبت‌نشدهٔ اکسل در این تعداد حساب نمی‌شوند."})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:q,disabled:N,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[N?(0,e.jsx)(ue,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Ue,{className:"h-4 w-4"}),"بروزرسانی موجودی"]}),(0,e.jsxs)("button",{type:"button",onClick:G,disabled:N||!S.length,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50",title:"چاپ لیست خلاصهٔ همهٔ انبارها",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ کلی"]})]})]})}),_>0&&!N?(0,e.jsxs)("section",{role:"alert",className:"rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(ze,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsxs)("p",{children:["موجودی ",cr(_)," نماینده دریافت نشد. مجموع کل تا دریافت اطلاعات همهٔ انبارها نمایش داده نمی‌شود."]})]}),p.filter(m=>h[String(m.id)]).map(m=>(0,e.jsxs)("p",{className:"mt-2 break-words",children:[m.name||"نماینده",":"," ",h[String(m.id)]]},String(m.id)))]}):null,(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"نمایندگان فعال"}),(0,e.jsx)(Ne,{className:"h-5 w-5 text-green-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-green-900 dark:text-green-100",children:cr(I)})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد کالاهای دارای موجودی"}),(0,e.jsx)(gt,{className:"h-5 w-5 text-blue-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-blue-900 dark:text-blue-100",children:f(y.itemCount)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-blue-700 dark:text-blue-300",children:"مجموع ردیف‌های دارای موجودی در انبارها"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-900/50 dark:bg-purple-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع نمایندگان"}),(0,e.jsx)(pt,{className:"h-5 w-5 text-purple-600"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-xl font-black text-purple-900 dark:text-purple-100",children:f(y.totalValue)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-purple-700 dark:text-purple-300",children:"تومان"})]})]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"لیست انبارهای نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"تعداد کالا، تعداد ردیف‌های دارای موجودی در انبار است؛ نه تعداد قطعات و نه تعداد ردیف‌های فایل اکسل."}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]",children:[(0,e.jsxs)("select",{value:n,onChange:m=>g(m.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("option",{value:"all",children:"همه نمایندگان"}),(0,e.jsx)("option",{value:"active",children:"نمایندگان فعال"}),(0,e.jsx)("option",{value:"inactive",children:"نمایندگان غیرفعال"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:c,onChange:m=>b(m.target.value),placeholder:"جست‌وجوی نام، کد، شهر یا شماره",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"})]})]}),(0,e.jsx)("div",{className:"mt-5 space-y-3 lg:hidden",children:S.map(m=>{const L=String(m.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black text-gray-800 dark:text-gray-100",children:m.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 text-right text-xs text-gray-500",children:m.phone||"شماره ثبت نشده"})]}),V(m)]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:m.code||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:m.city||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"mb-2 text-blue-700 dark:text-blue-300",children:"کالاهای دارای موجودی"}),Q(L)]}),(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-2 break-words font-black text-purple-900 dark:text-purple-100",children:C(L)})]})]}),(0,e.jsx)("div",{className:"mt-4",children:F(L,m)})]},L)})}),(0,e.jsx)("div",{className:"mt-5 hidden lg:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[22%] p-3",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"کد"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"شهر"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"کالاهای دارای موجودی"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[14%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:S.map(m=>{const L=String(m.id);return(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-100 text-lg",children:m.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 break-all text-right text-gray-500",children:m.phone||"شماره ثبت نشده"})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:m.code||"-"}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:m.city||"-"}),(0,e.jsx)("td",{className:"p-3",children:V(m)}),(0,e.jsx)("td",{className:"p-3",children:Q(L)}),(0,e.jsx)("td",{className:"break-words p-3 font-bold text-gray-800 dark:text-gray-100",children:C(L)}),(0,e.jsx)("td",{className:"p-3",children:F(L,m)})]},L)})})]})}),S.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(It,{className:"mx-auto h-10 w-10 text-gray-400"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:p.length?"نماینده‌ای با این مشخصات پیدا نشد.":"هنوز نماینده‌ای ثبت نشده است."})]})]})]})},Ri=()=>{const t=localStorage.getItem("token")||sessionStorage.getItem("token");return{"Content-Type":"application/json",Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},Ei=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],ua=["عنوان","نام","عنوان","عنوان","کالا","محصول","Name","name","Product","product"],Ps=["برند","نام برند","Brand","brand"],zs=["دسته‌بندی","دسته بندی","دسته","گروه","گروه کالا","Category","category"],ba=["تعداد","تعداد کالا","تعداد موجودی","تعداد محصول","تعداد","موجودی","موجودی کالا","موجودی انبار","مقدار","تعداد/موجودی","Qty","QTY","quantity","Quantity","stock","Stock","count","Count"],fa=["قیمت","قیمت","قیمت کالا","قیمت محصول","مبلغ","قیمت","Price","price","unitPrice","Unit Price"],Rn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Qr=t=>Rn(t).replace(/\u200c/g," ").replace(/[\u200e\u200f]/g,"").replace(/\u00a0/g," ").replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/ـ/g,"").replace(/\s+/g," ").trim().toLowerCase(),_t=t=>Qr(t).replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim(),Gt=t=>{const r=Rn(t).replace(/[,٬،\s]/g,"").replace(/٫/g,".").replace(/[^\d.-]/g,"");if(!r)return 0;const s=Number(r);return Number.isFinite(s)?s:0},ye=t=>Gt(t).toLocaleString("fa-IR"),Pi=t=>{if(!t)return"-";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},zi=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},Mi=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const c of t){const b=s.getItem(c);if(b&&b!=="null"&&b!=="undefined"){const n=b.replace(/^Bearer\s+/i,"").trim();if(n)return n}}for(const c of r){const b=s.getItem(c);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},Fr=(t=!1)=>{const r=Mi();return{Accept:"application/json",...t?{"Content-Type":"application/json"}:{},...r?{Authorization:`Bearer ${r}`}:{}}},Lr=async t=>{const r=await t.text();if(!r)throw new Error(`پاسخ سرور خالی است. کد: ${t.status}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ بک‌اند معتبر نیست. کد: ${t.status}`)}},Ur=(t,r,s)=>r.error||r.message?r.error||r.message||s:t.status===401?"ابتدا وارد حساب ادمین شوید.":t.status===403?"این حساب اجازه انجام این عملیات را ندارد.":`${s} کد: ${t.status}`,xr=(t,r)=>{const s=r.map(_t);for(const[c,b]of Object.entries(t))if(s.includes(_t(c))&&b!==void 0&&b!==null&&String(b).trim()!=="")return b;return""},ya=(t,r)=>{const s=r.map(_t);return Object.keys(t[0]||{}).some(c=>s.includes(_t(c)))},ja=t=>Math.max(0,Gt(t.quantity))*Math.max(0,Gt(t.unitPrice)),Fi=t=>{switch(t){case"ready":return"معتبر";case"empty_name":return"نام خالی";case"invalid_qty":return"تعداد نامعتبر";case"invalid_price":return"قیمت نامعتبر"}},Li=({representative:t,apiUrl:r,onBack:s,onWarehouseChanged:c})=>{const[b,n]=(0,a.useState)([]),[g,i]=(0,a.useState)([]),[u,h]=(0,a.useState)(!0),[d,N]=(0,a.useState)(!1),[v,k]=(0,a.useState)(!1),[x,p]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),[$,q]=(0,a.useState)(!1),[z,O]=(0,a.useState)([]),[G,P]=(0,a.useState)(""),[S,y]=(0,a.useState)(""),[I,_]=(0,a.useState)(""),[T,V]=(0,a.useState)(""),[Q,C]=(0,a.useState)(""),[F,f]=(0,a.useState)(null),m=(0,a.useRef)(!1),L=(0,a.useRef)(!1),W=(0,a.useRef)(0),A=(0,a.useRef)(!0),j=`${zi(r)}/representatives/${encodeURIComponent(String(t.id))}/warehouse`;(0,a.useEffect)(()=>(A.current=!0,()=>{A.current=!1,W.current+=1}),[]);const U=(0,a.useCallback)(async()=>{const D=++W.current;h(!0);try{const Y=await fetch(`${j}?_=${Date.now()}`,{method:"GET",cache:"no-store",credentials:"include",headers:Fr()}),de=await Lr(Y);if(!Y.ok||!de.success)throw new Error(Ur(Y,de,"دریافت انبار ناموفق بود."));if(!Array.isArray(de.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور وجود ندارد.");return A.current&&D===W.current&&(n(de.data.items),i(Array.isArray(de.data.movements)?de.data.movements:[])),!0}catch(Y){return A.current&&D===W.current&&o(Y instanceof Error?Y.message:"خطا در دریافت انبار."),!1}finally{A.current&&D===W.current&&h(!1)}},[j]);(0,a.useEffect)(()=>{n([]),i([]),p(""),o(""),f(null),O([]),q(!1),P(""),y(""),_(""),V(""),C(""),U()},[U]);const Z=async()=>{try{await c()}catch(D){console.error("خطا در بروزرسانی صفحه والد:",D),A.current&&o(Y=>[Y,"عملیات انبار انجام شد، اما بروزرسانی لیست نمایندگان ناموفق بود."].filter(Boolean).join(" "))}},B=(0,a.useMemo)(()=>b.filter(D=>Gt(D.quantity)>0),[b]),pe=B.length,ee=(0,a.useMemo)(()=>B.reduce((D,Y)=>D+ja(Y),0),[B]),re=(0,a.useMemo)(()=>[...g].sort((D,Y)=>new Date(Y.createdAt||0).getTime()-new Date(D.createdAt||0).getTime()).slice(0,8),[g]),ne=(0,a.useMemo)(()=>[...new Set(B.map(D=>String(D.brand||"").trim()).filter(Boolean))].sort((D,Y)=>D.localeCompare(Y,"fa")),[B]),X=(0,a.useMemo)(()=>[...new Set([...Ei,...B.map(D=>String(D.category||"").trim()).filter(Boolean)])].sort((D,Y)=>D.localeCompare(Y,"fa")),[B]),ie=(0,a.useMemo)(()=>{const D=Qr(I);return B.filter(Y=>{const de=Qr(Y.productName),je=String(Y.brand||"").trim(),Ae=String(Y.category||"").trim();return(!D||de.includes(D)||Qr(je).includes(D))&&(!T||Ae===T)&&(!Q||je===Q)})},[B,I,T,Q]),he=(0,a.useMemo)(()=>z.filter(D=>D.status==="ready"),[z]),R=(0,a.useMemo)(()=>he.reduce((D,Y)=>D+Y.qty,0),[he]),H=(0,a.useMemo)(()=>he.reduce((D,Y)=>D+Y.qty*Y.price,0),[he]),ae=(0,a.useMemo)(()=>{if(!F)return[];const D=F.validationErrors?.map(Y=>({...Y,status:"invalid"}))||[];return F.rowResults?.length?[...F.rowResults.filter(Y=>(Y.remainingQuantity??Y.rejectedQuantity??0)>0||Y.status==="invalid"||Y.status==="budget_exceeded"),...D]:F.rejectedItems?.length?[...F.rejectedItems,...D]:D},[F]),l=async D=>{if(!(m.current||u||v)&&window.confirm(`کالای «${D.productName}» با تمام موجودی و گردش‌های مرتبط حذف شود؟`)){m.current=!0,N(!0),p(""),o(""),f(null);try{const Y=await fetch(`${j}/items/${encodeURIComponent(String(D.id))}`,{method:"DELETE",credentials:"include",headers:Fr()}),de=await Lr(Y);if(!Y.ok||!de.success)throw new Error(Ur(Y,de,"حذف کالا ناموفق بود."));n(je=>je.filter(Ae=>String(Ae.id)!==String(D.id))),D.productId&&i(je=>je.filter(Ae=>String(Ae.productId)!==String(D.productId))),p(de.message||`کالای «${D.productName}» حذف شد.`),await U(),await Z()}catch(Y){o(Y instanceof Error?Y.message:"حذف کالا ناموفق بود."),await U()}finally{m.current=!1,A.current&&N(!1)}}},E=async()=>{if(!(m.current||u||v)&&window.confirm(`تمام کالاها، گردش‌ها و سابقه فایل‌های انبار «${t.name||"نماینده"}» حذف شود؟ این عملیات قابل بازگشت نیست.`)){m.current=!0,N(!0),p(""),o(""),f(null);try{const D=await fetch(j,{method:"DELETE",credentials:"include",headers:Fr()}),Y=await Lr(D);if(!D.ok||!Y.success)throw new Error(Ur(D,Y,"حذف کل موجودی ناموفق بود."));n([]),i([]),O([]),q(!1),P(""),y(""),_(""),V(""),C(""),p(Y.message||"کل موجودی انبار حذف شد."),await U(),await Z()}catch(D){o(D instanceof Error?D.message:"حذف کل موجودی ناموفق بود."),await U()}finally{m.current=!1,A.current&&N(!1)}}},J=async D=>{const Y=D.currentTarget,de=Y.files?.[0];if(Y.value="",!(!de||m.current||L.current)){L.current=!0,k(!0),p(""),o(""),f(null),O([]),q(!1),P(""),y("");try{const je=await de.arrayBuffer(),Ae=un(je,{type:"array"}),Te=Ae.SheetNames[0];if(!Te)throw new Error("هیچ شیتی در فایل اکسل پیدا نشد.");const Rt=Ae.Sheets[Te],$e=gn.sheet_to_json(Rt,{header:1,defval:"",raw:!0,blankrows:!1}),$r=[...ua,...Ps,...zs,...ba,...fa].map(_t),rr=$e.findIndex(Re=>Array.isArray(Re)&&Re.some(Me=>Me!=null&&String(Me).trim()!==""&&$r.includes(_t(Me))));if(rr<0)throw new Error("هیچ سطری شامل عنوان ستون‌های شناخته‌شده پیدا نشد. لطفاً یک سطر شامل «عنوان»، «تعداد» و «قیمت» داشته باشید.");const We=($e[rr]||[]).map((Re,Me)=>_t(Re)||`column_${Me}`),dt=$e.slice(rr+1).filter(Re=>Array.isArray(Re)&&Re.some(Me=>Me!=null&&String(Me).trim()!=="")).map(Re=>{const Me={};return We.forEach((Bt,Wt)=>{Me[Bt]=Re[Wt]??""}),Me});if(!dt.length)throw new Error("فایل اکسل خالی است.");if(dt.length>5e3)throw new Error("فایل نباید بیشتر از ۵۰۰۰ ردیف داشته باشد.");const Et=Object.keys(dt[0]).join(" | ");if(!ya(dt,ua))throw new Error(`ستون عنوان پیدا نشد. ستون‌ها: ${Et}`);if(!ya(dt,ba))throw new Error(`ستون تعداد پیدا نشد. ستون‌ها: ${Et}`);if(!ya(dt,fa))throw new Error(`ستون قیمت پیدا نشد. ستون‌ها: ${Et}`);const Ir=dt.map((Re,Me)=>{const Bt=String(xr(Re,ua)).trim(),Wt=String(xr(Re,Ps)).trim(),aa=String(xr(Re,zs)).trim(),Vt=Gt(xr(Re,ba)),ar=Gt(xr(Re,fa));let Qt="ready";return Bt?!Number.isSafeInteger(Vt)||Vt<=0?Qt="invalid_qty":(ar<=0||!Number.isFinite(Vt*ar))&&(Qt="invalid_price"):Qt="empty_name",{rowIndex:Me+2,excelName:Bt||"(خالی)",brand:Wt,category:aa,qty:Vt,price:ar,status:Qt}});O(Ir),P(de.name),y(`${de.name}-${de.size}-${de.lastModified}`),q(!0),p(`فایل «${de.name}» خوانده شد. ثبت نهایی و سقف مالی پس از ارسال به سرور بررسی می‌شود.`)}catch(je){o(je instanceof Error?je.message:"پردازش فایل اکسل ناموفق بود.")}finally{L.current=!1,A.current&&k(!1)}}},me=async()=>{if(he.length)try{await fetch(`${j}/update-info`,{method:"POST",headers:Ri(),body:JSON.stringify({items:he.map(D=>({name:D.excelName,brand:D.brand,category:D.category,unitPrice:D.unitPrice}))})})}catch{}},fe=async()=>{if(await me(),!(m.current||v||u)){if(!he.length){o("هیچ ردیف معتبری برای ثبت وجود ندارد.");return}if(!S){o("شناسه فایل موجود نیست؛ فایل را دوباره انتخاب کنید.");return}m.current=!0,N(!0),p(""),o(""),f(null);try{const D=await fetch(`${j}/import`,{method:"POST",cache:"no-store",credentials:"include",headers:Fr(!0),body:JSON.stringify({fileName:G,requestId:S,items:he.map($e=>({name:$e.excelName,brand:$e.brand,category:$e.category,quantity:$e.qty,unitPrice:$e.price,rowIndex:$e.rowIndex}))})}),Y=await Lr(D);if(f(Y.data||null),!D.ok||!Y.success){o(Ur(D,Y,"ثبت اکسل ناموفق بود.")),await U(),await Z();return}const de=Y.data,je=de?.acceptedRowsCount??de?.importedCount,Ae=de?.acceptedQuantity,Te=de?.rejectedQuantity,Rt=[je!==void 0?`${ye(je)} ردیف پذیرفته شد.`:"سرور ثبت فایل را تأیید کرد.",Ae!==void 0?`${ye(Ae)} قطعه در این درخواست ثبت شد.`:"",Te!==void 0&&Te>0?`${ye(Te)} قطعه به دلیل سقف مالی مجاز اضافه نشد.`:""].filter(Boolean);p(Y.message||Rt.join(" ")),(Y.warning||de?.summarySaved===!1)&&o(Y.warning||"کالاها ثبت شدند، اما خلاصه نماینده بروزرسانی نشد."),de?.completed===!1||(de?.rejectedQuantity??0)>0||(de?.rejectedRowsCount??0)>0||(q(!1),O([]),P(""),y("")),await U(),await Z()}catch(D){o(D instanceof Error?D.message:"ثبت اکسل ناموفق بود.")}finally{m.current=!1,A.current&&N(!1)}}},te=()=>{m.current||v||(q(!1),O([]),P(""),y(""))},oe=d||v||u;return u&&!b.length?(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 px-3 py-8",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(ue,{className:"mx-auto mb-3 h-8 w-8 animate-spin text-blue-600"}),(0,e.jsxs)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:["در حال دریافت انبار"," ",t.name||"نماینده","..."]})]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:d,className:"rounded-xl bg-gray-900 px-5 py-3 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]}):(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 overflow-x-hidden pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(It,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h2",{className:"break-words text-lg font-black text-gray-800 dark:text-gray-100",children:["انبار ",t.name||"نماینده"]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400",children:[(0,e.jsxs)("span",{children:["کد: ",t.code||"-"]}),(0,e.jsxs)("span",{children:["شهر: ",t.city||"-"]})]})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,e.jsxs)("button",{type:"button",disabled:oe,onClick:()=>{o(""),U()},className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[u?(0,e.jsx)(ue,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Ue,{className:"h-4 w-4"}),"بروزرسانی"]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:d||v,className:"min-h-11 rounded-xl bg-gray-900 px-4 py-2 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]})]})}),x?(0,e.jsxs)("div",{role:"status",className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-xs font-bold leading-6 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300",children:[(0,e.jsx)(Ne,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:x})]}):null,w?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsx)(ze,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:w})]}):null,(0,e.jsxs)("section",{className:"grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_300px]",children:[(0,e.jsxs)("div",{className:"grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد نوع کالاهای دارای موجودی"}),(0,e.jsx)(gt,{className:"h-5 w-5 text-blue-500"})]}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-blue-900 dark:text-blue-100",children:ye(pe)}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-blue-700 dark:text-blue-300",children:"تعداد ردیف‌های دارای موجودی؛ نه جمع تعداد قطعات و نه ردیف‌های ثبت‌نشدهٔ اکسل"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"مجموع موجودی انبار"}),(0,e.jsx)(pt,{className:"h-5 w-5 text-green-500"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-2xl font-black text-green-900 dark:text-green-100",children:ye(ee)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-green-700 dark:text-green-300",children:"تومان"})]})]}),(0,e.jsxs)("aside",{className:"min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"آخرین گردش‌ها"}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:ye(re.length)})]}),(0,e.jsxs)("div",{className:"max-h-[280px] space-y-2 overflow-y-auto p-3",children:[re.map(D=>{const Y=D.type==="in";return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsx)("p",{className:"min-w-0 break-words text-xs font-bold text-gray-800 dark:text-gray-200",children:D.productName}),(0,e.jsxs)("span",{className:`shrink-0 rounded px-2 py-1 text-xs font-black ${Y?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:[Y?"+":"-",ye(D.quantity)]})]}),(0,e.jsxs)("div",{className:"mt-2 flex items-center justify-between gap-2",children:[(0,e.jsxs)("span",{className:"flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300",children:[(0,e.jsx)(xl,{className:`h-3 w-3 ${Y?"text-green-600":"rotate-180 text-orange-600"}`}),Y?"ورود":"خروج"]}),(0,e.jsx)("span",{className:"text-[10px] text-gray-500",children:Pi(D.createdAt)})]})]},D.id)}),re.length?null:(0,e.jsxs)("div",{className:"py-8 text-center",children:[(0,e.jsx)(il,{className:"mx-auto mb-2 h-8 w-8 text-gray-300"}),(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"گردشی ثبت نشده است."})]})]})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("label",{className:`flex min-h-14 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-white ${oe||$?"cursor-not-allowed bg-gray-400":"cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600"}`,children:[v?(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(wr,{className:"h-5 w-5"}),v?"در حال خواندن فایل...":d?"در حال انجام عملیات...":"ارسال بار؛ آپلود اکسل",(0,e.jsx)("input",{type:"file",accept:".xlsx,.xls",onChange:J,disabled:oe||$,className:"hidden"})]}),$&&z.length>0?(0,e.jsxs)("section",{className:"rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-base font-black text-blue-900 dark:text-blue-100",children:[(0,e.jsx)(At,{className:"h-5 w-5 shrink-0"}),"پیش‌نمایش فایل"]}),(0,e.jsx)("p",{className:"mt-2 break-words text-xs text-gray-600 dark:text-gray-300",children:G})]}),(0,e.jsx)("button",{type:"button",onClick:te,disabled:d,"aria-label":"بستن پیش‌نمایش",className:"rounded-lg p-1 text-red-500 disabled:opacity-50",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2 text-xs",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های فایل:"," ",ye(z.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های معتبر:"," ",ye(he.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["تعداد درخواستی:"," ",ye(R)," قطعه"]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["مبلغ درخواستی:"," ",ye(H)," تومان"]})]}),(0,e.jsx)("p",{className:"mt-3 text-xs leading-6 text-blue-800 dark:text-blue-200",children:"وضعیت «معتبر» فقط نام، تعداد و قیمت را تأیید می‌کند. سقف مالی و سابقه ثبت فایل هنگام ارسال به سرور بررسی می‌شوند."}),(0,e.jsx)("div",{className:"mt-4 max-h-[360px] overflow-y-auto rounded-xl border border-gray-200",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[8%] p-2",children:"ردیف"}),(0,e.jsx)("th",{className:"w-[26%] p-2",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[15%] p-2",children:"برند"}),(0,e.jsx)("th",{className:"w-[17%] p-2",children:"دسته"}),(0,e.jsx)("th",{className:"w-[13%] p-2",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[9%] p-2",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[12%] p-2",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:z.map(D=>(0,e.jsxs)("tr",{className:D.status==="ready"?"bg-green-50 text-gray-800 dark:bg-green-900/10 dark:text-gray-200":"bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200",children:[(0,e.jsx)("td",{className:"break-words p-2",children:ye(D.rowIndex)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:D.excelName}),(0,e.jsx)("td",{className:"break-words p-2",children:D.brand||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:D.category||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:ye(D.price)}),(0,e.jsx)("td",{className:"break-words p-2",children:ye(D.qty)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:Fi(D.status)})]},D.rowIndex))})]})}),(0,e.jsxs)("div",{className:"mt-4 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{fe()},disabled:oe||!he.length,className:"min-h-11 flex-1 rounded-xl bg-green-600 px-5 py-3 text-sm font-black text-white disabled:opacity-50",children:d?"در حال بررسی و ثبت...":"بررسی سقف مالی و ثبت ردیف‌های معتبر"}),(0,e.jsx)("button",{type:"button",onClick:te,disabled:d,className:"min-h-11 rounded-xl bg-gray-200 px-5 py-3 text-sm font-bold text-gray-700 disabled:opacity-50",children:"بستن پیش‌نمایش"})]})]}):null,F?(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("h3",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"نتیجه واقعی درخواست ثبت"}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"ردیف‌های پذیرفته‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-green-900 dark:text-green-100",children:F.acceptedRowsCount!==void 0||F.importedCount!==void 0?ye(F.acceptedRowsCount??F.importedCount):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-300",children:"قطعات ثبت‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-blue-900 dark:text-blue-100",children:F.acceptedQuantity!==void 0?ye(F.acceptedQuantity):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-orange-50 p-3 dark:bg-orange-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-orange-700 dark:text-orange-300",children:"قطعات ثبت‌نشده یا باقی‌مانده"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-orange-900 dark:text-orange-100",children:F.rejectedQuantity!==void 0?ye(F.rejectedQuantity):"گزارش نشده"})]})]}),(F.completed===!1||(F.rejectedQuantity??0)>0)&&$?(0,e.jsx)("p",{className:"mt-4 rounded-xl bg-orange-50 p-3 text-xs leading-6 text-orange-800 dark:bg-orange-900/20 dark:text-orange-200",children:"بخشی از فایل باقی مانده است. پس از افزایش سقف مؤثر مالی در صفحه نماینده، می‌توانی همین پیش‌نمایش را دوباره ارسال کنی. بک‌اندِ دارای ثبت مرحله‌ای، فقط تعداد باقی‌مانده را ثبت می‌کند."}):null,ae.length>0?(0,e.jsx)("div",{className:"mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/10",children:(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(ze,{className:"mt-1 h-5 w-5 shrink-0 text-orange-600 dark:text-orange-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"text-sm font-black text-orange-800 dark:text-orange-200",children:"بعضی از کالاها ثبت نشدند"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-orange-700 dark:text-orange-300",children:"به دلیل سقف مالی مجاز، بخشی از کالاهای این فایل اضافه نشدند. فقط کالاهایی که ثبت شده‌اند در موجودی انبار نمایش داده می‌شوند."})]})]})}):null]}):null]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"موجودی واقعی انبار نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط ردیف‌هایی که موجودی بیشتر از صفر دارند در این جدول و کارت تعداد محاسبه می‌شوند."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",children:[ye(ie.length)," از ",ye(pe)," نوع کالا"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{E()},disabled:oe||!b.length&&!g.length,className:"flex min-h-10 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف کل موجودی"]})]})]}),(0,e.jsxs)("div",{className:"my-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:I,onChange:D=>_(D.target.value),placeholder:"جست‌وجوی نام یا برند",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:T,onChange:D=>V(D.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),X.map(D=>(0,e.jsx)("option",{value:D,children:D},D))]}),(0,e.jsxs)("select",{value:Q,onChange:D=>C(D.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),ne.map(D=>(0,e.jsx)("option",{value:D,children:D},D))]})]}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:ie.map(D=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:D.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-600 dark:text-purple-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:D.brand||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-blue-600 dark:text-blue-300",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-2 font-black text-gray-800 dark:text-gray-100",children:[ye(D.quantity)," عدد"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:D.category||"—"})]}),(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:(0,e.jsxs)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:[ye(D.unitPrice)," تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"مجموع این کالا"}),(0,e.jsxs)("p",{className:"mt-2 break-words text-sm font-black text-green-900 dark:text-green-100",children:[ye(ja(D))," تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{l(D)},disabled:oe,className:"mt-3 flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-red-100 px-3 py-2 text-xs font-bold text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف کالا"]})]},D.id))}),(0,e.jsx)("div",{className:"hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-center text-[6px] lg:text-sm",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700  dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[30%] p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"w-[20%] p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:ie.map(D=>(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:[D.productName,(0,e.jsxs)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:["برند: ",D.brand||"—"]})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:D.category||"—"}),(0,e.jsx)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:ye(D.quantity)}),(0,e.jsxs)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:[ye(D.unitPrice),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsxs)("td",{className:"break-words p-3 font-black text-green-700 dark:text-green-300",children:[ye(ja(D)),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsx)("td",{className:"p-3",children:(0,e.jsx)("button",{type:"button",onClick:()=>{l(D)},disabled:oe,"aria-label":`حذف ${D.productName}`,className:"inline-flex items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})})]},D.id))})]})}),ie.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(bn,{className:"mx-auto mb-3 h-12 w-12 text-gray-300"}),(0,e.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:B.length?"کالایی با این فیلتر پیدا نشد.":"کالای دارای موجودی ثبت نشده است."})]})]})]})},Ms="https://myshop-backend-8nu7.onrender.com/api",Fs=[{id:"warranty",title:"درخواست گارانتی",subtitle:"ثبت مشکل کالا و پیگیری خدمات گارانتی",icon:Qa,gradient:"from-sky-500/15 to-cyan-500/5",iconColor:"text-sky-600 dark:text-sky-300"},{id:"business-card",title:"کارت ویزیت",subtitle:"درخواست طراحی یا چاپ کارت ویزیت",icon:Nn,gradient:"from-violet-500/15 to-fuchsia-500/5",iconColor:"text-violet-600 dark:text-violet-300"},{id:"banner",title:"طراحی بنر",subtitle:"ثبت سفارش طراحی بنر تبلیغاتی",icon:nl,gradient:"from-pink-500/15 to-rose-500/5",iconColor:"text-pink-600 dark:text-pink-300"},{id:"new-shipment",title:"بار جدید",subtitle:"درخواست هماهنگی برای بار جدید",icon:zl,gradient:"from-amber-500/15 to-orange-500/5",iconColor:"text-amber-600 dark:text-amber-300"},{id:"visit",title:"بازدید",subtitle:"درخواست بازدید یا هماهنگی حضوری",icon:Ga,gradient:"from-emerald-500/15 to-teal-500/5",iconColor:"text-emerald-600 dark:text-emerald-300"},{id:"urgent-call",title:"تماس فوری",subtitle:"درخواست تماس سریع از تیم پشتیبانی",icon:ll,gradient:"from-red-500/15 to-rose-500/5",iconColor:"text-red-600 dark:text-red-300"},{id:"meeting",title:"رزرو زمان جلسه",subtitle:"پیشنهاد زمان برای جلسه با مجموعه",icon:ot,gradient:"from-indigo-500/15 to-blue-500/5",iconColor:"text-indigo-600 dark:text-indigo-300"}],Ui={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},Ls={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function Us(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function qs(){const t=localStorage.getItem("token")||sessionStorage.getItem("token");if(!t)throw new Error("نشست شما موجود نیست. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`}}function qi(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}var Oi=()=>{const[t,r]=(0,a.useState)(null),[s,c]=(0,a.useState)(""),[b,n]=(0,a.useState)(""),[g,i]=(0,a.useState)(""),[u,h]=(0,a.useState)([]),[d,N]=(0,a.useState)(!0),[v,k]=(0,a.useState)(!1),[x,p]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),$=(0,a.useRef)(null);(0,a.useEffect)(()=>{let O=!1;async function G(){try{const P=await fetch(`${Ms}/support-requests/mine`,{headers:qs()}),S=await P.json().catch(()=>null);if(!P.ok)throw new Error(S?.error||S?.message||"دریافت درخواست‌ها ناموفق بود.");const y=S?.data??S;if(!Array.isArray(y))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");O||h(y)}catch(P){O||p(Us(P))}finally{O||N(!1)}}return G(),()=>{O=!0}},[]);const q=O=>{r(O),c(""),n(""),i(""),p(""),o(""),setTimeout(()=>{$.current?.scrollIntoView({behavior:"smooth",block:"start"})},100)},z=async O=>{if(O.preventDefault(),!(!t||v)){k(!0),p(""),o("");try{const G=await fetch(`${Ms}/support-requests`,{method:"POST",headers:{...qs(),"Content-Type":"application/json"},body:JSON.stringify({type:t.id,subject:s.trim(),description:b.trim(),preferredTime:g.trim()})}),P=await G.json().catch(()=>null);if(!G.ok)throw new Error(P?.error||P?.message||"ثبت درخواست ناموفق بود.");const S=P?.data??P;if(!S?.id)throw new Error("پاسخ ثبت درخواست معتبر نیست.");h(y=>[S,...y]),r(null),o("درخواست شما ثبت شد و در انتظار رسیدگی است.")}catch(G){p(Us(G))}finally{k(!1)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-full space-y-8 text-slate-900 dark:text-white",children:[(0,e.jsxs)("header",{className:"overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-xl dark:border-cyan-500/20 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30 sm:p-8",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:[(0,e.jsx)("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10",children:(0,e.jsx)(Ga,{className:"h-7 w-7 text-cyan-700 dark:text-cyan-300"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-cyan-700 dark:text-cyan-300",children:"همراه شما هستیم"}),(0,e.jsx)("h1",{className:"mt-1 text-2xl font-black sm:text-3xl",children:"مرکز پشتیبانی نمایندگان"})]})]}),(0,e.jsx)("p",{className:"mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300",children:"موضوع موردنظرتان را انتخاب کنید، توضیحات را بنویسید و وضعیت درخواست را از همین صفحه دنبال کنید."})]}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),x&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",children:x}),(0,e.jsxs)("section",{"aria-labelledby":"support-categories",children:[(0,e.jsx)("h2",{id:"support-categories",className:"mb-4 text-lg font-bold",children:"چه کمکی نیاز دارید؟"}),(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:Fs.map(O=>{const G=O.icon;return(0,e.jsxs)("article",{className:`group flex min-h-52 flex-col rounded-2xl border border-slate-200 bg-gradient-to-br ${O.gradient} bg-white p-5 text-right shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 dark:border-white/10 dark:bg-slate-900`,children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between",children:[(0,e.jsx)("span",{className:"flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-900/60",children:(0,e.jsx)(G,{className:`h-6 w-6 ${O.iconColor}`})}),(0,e.jsx)(Ua,{className:"h-5 w-5 text-slate-500 transition group-hover:-translate-x-1 group-hover:text-cyan-500 dark:text-slate-400"})]}),(0,e.jsx)("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:O.title}),(0,e.jsx)("p",{className:"mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300",children:O.subtitle}),(0,e.jsxs)("button",{type:"button",onClick:()=>q(O),className:"mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400",children:["ثبت درخواست",(0,e.jsx)(Ua,{className:"h-4 w-4"})]})]},O.id)})})]}),t&&(0,e.jsxs)("section",{ref:$,"aria-labelledby":"support-form-title",className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-cyan-500/25 dark:bg-slate-900 sm:p-7",children:[(0,e.jsxs)("div",{className:"mb-6 flex items-center justify-between gap-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs text-cyan-700 dark:text-cyan-300",children:"ثبت درخواست جدید"}),(0,e.jsx)("h2",{id:"support-form-title",className:"mt-1 text-xl font-bold",children:t.title})]}),(0,e.jsx)("button",{type:"button",onClick:()=>r(null),className:"rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white","aria-label":"بستن فرم",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("form",{onSubmit:z,className:"space-y-5",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"عنوان درخواست"}),(0,e.jsx)("input",{value:s,onChange:O=>c(O.target.value),required:!0,maxLength:120,placeholder:"عنوان کوتاه و مشخص بنویسید",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"توضیحات"}),(0,e.jsx)("textarea",{value:b,onChange:O=>n(O.target.value),required:!0,maxLength:2e3,rows:5,placeholder:"جزئیاتی که به رسیدگی کمک می‌کند بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),t.id==="meeting"&&(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"زمان پیشنهادی جلسه"}),(0,e.jsx)("input",{value:g,onChange:O=>i(O.target.value),required:!0,maxLength:120,placeholder:"مثلاً شنبه ساعت ۱۰ تا ۱۲",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("button",{type:"submit",disabled:v,className:"inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60",children:[v?(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Ha,{className:"h-5 w-5"}),v?"در حال ثبت...":"ارسال درخواست"]})]})]}),(0,e.jsxs)("section",{"aria-labelledby":"my-requests",children:[(0,e.jsx)("h2",{id:"my-requests",className:"mb-4 text-lg font-bold",children:"درخواست‌های من"}),d?(0,e.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"در حال دریافت درخواست‌ها..."}):u.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"هنوز درخواستی ثبت نکرده‌اید."}):(0,e.jsx)("div",{className:"space-y-3",children:u.map(O=>(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Fs.find(G=>G.id===O.type)?.title||"درخواست پشتیبانی"}),(0,e.jsx)("h3",{className:"mt-1 font-bold",children:O.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${Ls[O.status]||Ls.pending}`,children:Ui[O.status]||O.status})]}),(0,e.jsx)("p",{className:"mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300",children:O.description}),O.adminNote&&(0,e.jsxs)("div",{className:"mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-500/20 dark:bg-cyan-500/10",children:[(0,e.jsx)("p",{className:"mb-1 text-xs font-bold text-cyan-800 dark:text-cyan-300",children:"پاسخ پشتیبانی"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap text-sm leading-7 text-slate-800 dark:text-slate-200",children:O.adminNote})]}),(0,e.jsx)("p",{className:"mt-3 text-xs text-slate-500 dark:text-slate-400",children:qi(O.createdAt)})]},O.id))})]})]})},_i="https://myshop-backend-8nu7.onrender.com/api",Os={warranty:"درخواست گارانتی","business-card":"کارت ویزیت",banner:"طراحی بنر","new-shipment":"بار جدید",visit:"بازدید","urgent-call":"تماس فوری",meeting:"رزرو زمان جلسه"},va={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},Bi={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function _s(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function Wi(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}async function Bs(t,r={}){const s=localStorage.getItem("token")||sessionStorage.getItem("token");if(!s)throw new Error("نشست شما منقضی شده است. دوباره وارد شوید.");const c=await fetch(`${_i}${t}`,{...r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,...r.headers}}),b=await c.json().catch(()=>null);if(!c.ok)throw new Error(b?.error||b?.message||"ارتباط با سرور ناموفق بود.");return b?.data??b}function Vi(){const[t,r]=(0,a.useState)([]),[s,c]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,i]=(0,a.useState)("all"),[u,h]=(0,a.useState)("all"),[d,N]=(0,a.useState)(""),[v,k]=(0,a.useState)({}),[x,p]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),$=(0,a.useCallback)(async()=>{c(!0),p("");try{const P=await Bs("/admin/support-requests");if(!Array.isArray(P))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");r(P),k(Object.fromEntries(P.map(S=>[S.id,{status:S.status,adminNote:S.adminNote||""}])))}catch(P){p(_s(P))}finally{c(!1)}},[]);(0,a.useEffect)(()=>{$()},[$]);const q=(0,a.useMemo)(()=>{const P=d.trim().toLocaleLowerCase();return t.filter(S=>{const y=g==="all"||S.status===g,I=u==="all"||S.type===u,_=!P||[S.subject,S.description,S.representativeId,S.representativeName||""].join(" ").toLocaleLowerCase().includes(P);return y&&I&&_})},[t,d,g,u]),z=(0,a.useMemo)(()=>({pending:t.filter(P=>P.status==="pending").length,inProgress:t.filter(P=>P.status==="in-progress").length,resolved:t.filter(P=>P.status==="resolved").length,rejected:t.filter(P=>P.status==="rejected").length}),[t]),O=(P,S)=>{k(y=>({...y,[P]:{...y[P],...S}}))},G=async P=>{const S=v[P.id];if(!(!S||b)){n(P.id),p(""),o("");try{const y=await Bs(`/admin/support-requests/${encodeURIComponent(P.id)}`,{method:"PATCH",body:JSON.stringify({status:S.status,adminNote:S.adminNote.trim()})});r(I=>I.map(_=>_.id===P.id?y:_)),k(I=>({...I,[P.id]:{status:y.status,adminNote:y.adminNote||""}})),o("درخواست با موفقیت به‌روزرسانی شد.")}catch(y){p(_s(y))}finally{n(null)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6 text-slate-900 dark:text-white",children:[(0,e.jsx)("section",{className:"rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-sm dark:border-slate-700 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-center gap-4",children:[(0,e.jsx)("span",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Ga,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-xl font-black sm:text-2xl",children:"رسیدگی به درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-300",children:"درخواست‌های پشتیبانی نمایندگان را بررسی و پیگیری کنید."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void $(),disabled:s,className:"inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})}),(0,e.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-4",children:[{label:"در انتظار",value:z.pending,icon:vr,tone:"text-amber-600 dark:text-amber-300"},{label:"در حال رسیدگی",value:z.inProgress,icon:pl,tone:"text-blue-600 dark:text-blue-300"},{label:"رسیدگی‌شده",value:z.resolved,icon:Ne,tone:"text-emerald-600 dark:text-emerald-300"},{label:"ردشده",value:z.rejected,icon:it,tone:"text-rose-600 dark:text-rose-300"}].map(P=>{const S=P.icon;return(0,e.jsxs)("div",{className:"flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(S,{className:`h-6 w-6 ${P.tone}`}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:P.label}),(0,e.jsx)("p",{className:"text-2xl font-black",children:P.value})]})]},P.label)})}),x&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200",children:x}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),(0,e.jsxs)("section",{className:"grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1fr_180px_180px]",children:[(0,e.jsxs)("label",{className:"relative block",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-3 h-5 w-5 text-slate-400"}),(0,e.jsx)("input",{value:d,onChange:P=>N(P.target.value),placeholder:"جست‌وجو در عنوان، توضیحات یا نام نماینده",className:"w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-3 pr-10 text-sm text-slate-900 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("select",{"aria-label":"فیلتر وضعیت",value:g,onChange:P=>i(P.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ وضعیت‌ها"}),Object.entries(va).map(([P,S])=>(0,e.jsx)("option",{value:P,children:S},P))]}),(0,e.jsxs)("select",{"aria-label":"فیلتر نوع درخواست",value:u,onChange:P=>h(P.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ موضوع‌ها"}),Object.entries(Os).map(([P,S])=>(0,e.jsx)("option",{value:P,children:S},P))]})]}),s?(0,e.jsxs)("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-300",children:[(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}),"در حال دریافت درخواست‌ها..."]}):q.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"درخواستی مطابق فیلترها پیدا نشد."}):(0,e.jsx)("div",{className:"space-y-4",children:q.map(P=>{const S=v[P.id]??{status:P.status,adminNote:P.adminNote||""};return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Os[P.type]||P.type}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-bold",children:P.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${Bi[P.status]}`,children:va[P.status]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500 dark:text-slate-400",children:[(0,e.jsxs)("span",{children:["نماینده:"," ",P.representativeName||P.representativeId]}),(0,e.jsxs)("span",{children:["ثبت:"," ",Wi(P.createdAt)]}),P.preferredTime&&(0,e.jsxs)("span",{children:["زمان پیشنهادی:"," ",P.preferredTime]})]}),(0,e.jsx)("p",{className:"mt-4 whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:P.description}),(0,e.jsxs)("div",{className:"mt-5 grid gap-4 md:grid-cols-[180px_1fr_auto] md:items-end",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"وضعیت رسیدگی"}),(0,e.jsx)("select",{value:S.status,onChange:y=>O(P.id,{status:y.target.value}),className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800",children:Object.entries(va).map(([y,I])=>(0,e.jsx)("option",{value:y,children:I},y))})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"پاسخ یا یادداشت برای نماینده"}),(0,e.jsx)("textarea",{value:S.adminNote,onChange:y=>O(P.id,{adminNote:y.target.value}),rows:2,maxLength:2e3,placeholder:"پاسخ یا توضیح پیگیری را بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void G(P),disabled:b!==null,className:"inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 text-sm font-bold text-white transition hover:bg-cyan-500 disabled:opacity-50",children:[b===P.id&&(0,e.jsx)(ue,{className:"h-4 w-4 animate-spin"}),"ذخیرهٔ تغییرات"]})]})]},P.id)})})]})}var Qi=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),mr=t=>{const r=Qi(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},En=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),pr=t=>`${En(t)} تومان`,Hi={indigo:"border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300",cyan:"border-cyan-100 bg-cyan-50 text-cyan-700 dark:border-cyan-900/40 dark:bg-cyan-950/30 dark:text-cyan-300",emerald:"border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300",amber:"border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-300",violet:"border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900/40 dark:bg-violet-950/30 dark:text-violet-300",rose:"border-rose-100 bg-rose-50 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300",blue:"border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300",orange:"border-orange-100 bg-orange-50 text-orange-700 dark:border-orange-900/40 dark:bg-orange-950/30 dark:text-orange-300"},Ji=({title:t,value:r,icon:s,color:c})=>(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-7 -top-7 h-20 w-20 rounded-full bg-current opacity-[0.04] blur-2xl"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:"mt-3 truncate text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:r})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${Hi[c]}`,children:(0,e.jsx)(s,{className:"h-6 w-6"})})]})]}),Yi=({fullName:t="—",territory:r="—",creditAmount:s=0,inventoryItemCount:c=0,inventoryValue:b=0,salesLast10Days:n=0,salesInAllowedDays:g=0})=>{const i=mr(s),u=mr(c),h=mr(b),d=i-h,N=d<0?"rose":"emerald",v=(d<0,"مانده اعتباری"),k=mr(n),x=mr(g),p=[{title:"نام و نام خانوادگی",value:t||"—",icon:Dt,color:"indigo"},{title:"محدوده نمایندگی",value:r||"—",icon:$l,color:"cyan"},{title:"مبلغ اعتبار",value:pr(i),icon:cl,color:"emerald"},{title:"تعداد در انبار",value:`${En(u)} قلم`,icon:ra,color:"amber"},{title:"مبلغ اقلام انبار",value:pr(h),icon:fn,color:"violet"},{title:v,value:pr(Math.abs(d)),icon:pt,color:N},{title:"فروش ۱۰ روز گذشته",value:pr(k),icon:kr,color:"blue"},{title:"فروش ۳ روز مجاز ماه",value:pr(x),icon:ot,color:"orange"}];return(0,e.jsx)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:p.map(w=>(0,e.jsx)(Ji,{title:w.title,value:w.value,icon:w.icon,color:w.color},w.title))})},Pn=hn(Zn(),1);function es(){const[t,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{const g=()=>{r(typeof window<"u"&&(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]);const s=(g,i)=>`<!DOCTYPE html>
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
</html>`,c=(g,i)=>{const u=document.getElementById("print-iframe");u&&u.parentNode&&document.body.removeChild(u);const h=document.createElement("iframe");h.id="print-iframe",h.style.position="fixed",h.style.right="0",h.style.bottom="0",h.style.width="0",h.style.height="0",h.style.border="0",h.style.overflow="hidden",h.setAttribute("aria-hidden","true"),h.title=i,document.body.appendChild(h);const d=h.contentWindow?.document||h.contentDocument;if(!d){console.error("نتوانستم به iframe دسترسی پیدا کنم"),h.parentNode&&document.body.removeChild(h);return}d.open(),d.write(s(g,i)),d.close();const N=()=>{try{h.contentWindow?.focus(),setTimeout(()=>{try{h.contentWindow?.print()}catch(v){console.error("خطا در چاپ:",v)}setTimeout(()=>{h.parentNode&&document.body.removeChild(h)},1e3)},300)}catch(v){console.error("خطا در چاپ:",v),h.parentNode&&document.body.removeChild(h)}};h.contentWindow?.document?.readyState==="complete"?N():(h.onload=N,setTimeout(()=>{h.parentNode&&h.contentWindow?.document?.readyState==="complete"&&N()},2e3))};return{printContent:(g,i="چاپ")=>{setTimeout(()=>{let u=document.getElementById(g);if(u||(u=document.querySelector(`.${g}`)),u||(u=document.querySelector(`[data-print="${g}"]`)),!u){console.warn("محتوای چاپ پیدا نشد با:",g),window.print();return}const h=u.outerHTML;c(h,i)},200)},printHTML:(g,i="چاپ")=>{c(g,i)},isMobile:t}}var fr=t=>{const r=String(t??"").replace(/[۰-۹]/g,c=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(c))).replace(/[٠-٩]/g,c=>String("٠١٢٣٤٥٦٧٨٩".indexOf(c))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ct=t=>new Intl.NumberFormat("fa-IR").format(fr(t)),Ki=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,""),Ws=t=>t.totalPrice!==void 0?fr(t.totalPrice):fr(t.quantity)*fr(t.unitPrice),et=(t,r)=>String(t??"").trim()||r,Gi=({items:t,settings:r,representativeName:s,representativeCity:c,representativePhone:b,representativeAddress:n,filterDescription:g,onClose:i})=>{const{printContent:u,isMobile:h}=es(),d=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),N=(0,a.useMemo)(()=>d.reduce((w,o)=>w+fr(o.quantity),0),[d]),v=(0,a.useMemo)(()=>d.reduce((w,o)=>w+Ws(o),0),[d]);if((0,a.useEffect)(()=>{if(typeof i!="function")return;const w=()=>{i()};window.addEventListener("afterprint",w);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("afterprint",w),document.body.style.overflow=o}},[i]),typeof document>"u")return null;const k=/^#[0-9a-fA-F]{6}$/.test(r.primaryColor)?r.primaryColor:"#111827",x=()=>{i?.()},p=(0,e.jsxs)("div",{id:"inventory-print-root",dir:"rtl",style:{"--inventory-primary":k},children:[(0,e.jsx)("style",{children:`
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
      `}),(0,e.jsxs)("div",{className:"inventory-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش موجودی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{className:"inventory-print-actions",children:[(0,e.jsx)("button",{type:"button",className:"inventory-print-close",onClick:w=>{w.preventDefault(),w.stopPropagation(),x()},children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"inventory-print-button",onClick:()=>{u("inventory-print-root","چاپ موجودی انبار")},children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"inventory-print-paper",children:[(0,e.jsxs)("header",{className:"inventory-print-header",children:[(0,e.jsxs)("div",{className:"inventory-print-company",children:[(0,e.jsx)("div",{className:"inventory-print-logo-box",children:(r.companyLogoSrc,(0,e.jsx)("img",{src:r.companyLogoSrc||"../company-logo.png",alt:"لوگوی شرکت",className:"inventory-print-logo"}))}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:et(s,r.companyName)}),(0,e.jsx)("p",{children:et(r.companyTagline,"سامانه مدیریت نمایندگی و انبار")})]})]}),(0,e.jsxs)("div",{className:"inventory-print-title",children:[(0,e.jsx)("span",{children:"گزارش رسمی موجودی"}),(0,e.jsx)("h2",{children:et(r.reportTitle,"گزارش موجودی انبار نمایندگی")}),(0,e.jsxs)("p",{children:[s||"گزارش کلی موجودی انبار",c?` — ${c}`:""]})]})]}),(0,e.jsxs)("section",{className:"inventory-print-meta",children:[(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Ki()})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"هلدینگ مهر"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"021-93111021"})]})]}),(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:et(s,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن:"}),(0,e.jsx)("strong",{children:et(b,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس نمایندگی:"}),(0,e.jsx)("strong",{children:et(n,"—")})]})]})]}),(0,e.jsxs)("div",{className:"inventory-print-table-wrapper",children:[(0,e.jsxs)("table",{className:"inventory-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"5%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"25%"},children:"عنوان"}),(0,e.jsx)("th",{style:{width:"15%"},children:"برند"}),(0,e.jsx)("th",{style:{width:"15%"},children:"دسته‌بندی"}),(0,e.jsx)("th",{style:{width:"15%"},children:"قیمت"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"15%"},children:"مجموع"})]})}),(0,e.jsx)("tbody",{children:d.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"کالایی برای چاپ وجود ندارد."})}):d.map((w,o)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{className:"center",children:ct(o+1)}),(0,e.jsx)("td",{className:"title",children:et(w.title,"بدون عنوان")}),(0,e.jsx)("td",{children:et(w.brand,"بدون برند")}),(0,e.jsx)("td",{children:et(w.category,"بدون دسته‌بندی")}),(0,e.jsxs)("td",{className:"money",children:[ct(w.unitPrice)," تومان"]}),(0,e.jsxs)("td",{className:"center",children:[ct(w.quantity)," قلم"]}),(0,e.jsxs)("td",{className:"money",children:[ct(Ws(w))," تومان"]})]},w.id||`inventory-print-${o}`))})]}),(0,e.jsx)("table",{className:"inventory-print-table inventory-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"55%"},children:"جمع کل انبار"}),(0,e.jsxs)("td",{className:"center",style:{width:"15%"},children:[ct(N)," قلم"]}),(0,e.jsx)("td",{className:"center",style:{width:"15%"},children:"—"}),(0,e.jsxs)("td",{className:"money",style:{width:"15%"},children:[ct(v)," تومان"]})]})})})]}),(0,e.jsxs)("section",{className:"inventory-print-summary",children:[(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد نوع کالا"}),(0,e.jsxs)("strong",{children:[ct(d.length)," کالا"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد کل اقلام"}),(0,e.jsxs)("strong",{children:[ct(N)," قلم"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"مجموع"}),(0,e.jsxs)("strong",{children:[ct(v)," تومان"]})]})]}),(0,e.jsxs)("footer",{className:"inventory-print-footer",children:[(0,e.jsx)("p",{children:et(r.footerText,"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.")}),(0,e.jsx)("p",{children:et(r.signatureLabel,"امضا و مهر نمایندگی:")})]})]})]});return(0,Pn.createPortal)(p,document.body)},ts="inventory-print-template-settings-v2",Pe={companyName:"نام شرکت شما",companyTagline:"سامانه مدیریت نمایندگی و انبار",companyLogoSrc:"../company-logo.png",reportTitle:"گزارش موجودی انبار نمایندگی",footerText:"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.",signatureLabel:"امضا و مهر نمایندگی:",primaryColor:"#111827"},Xi=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],qe=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),Ut=t=>{const r=String(t??"").replace(/[۰-۹]/g,c=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(c))).replace(/[٠-٩]/g,c=>String("٠١٢٣٤٥٦٧٨٩".indexOf(c))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Le=t=>String(t??"").trim(),Vs=t=>Le(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/\s+/g," ").toLowerCase(),hr=t=>Le(t.brand)||"بدون برند",ka=t=>Le(t.category)||"بدون دسته‌بندی",Ba=t=>/^#[0-9a-fA-F]{6}$/.test(Le(t)),Qs=()=>{try{const t=localStorage.getItem(ts);if(!t)return Pe;const r=JSON.parse(t);return{companyName:Le(r.companyName)||Pe.companyName,companyTagline:Le(r.companyTagline)||Pe.companyTagline,companyLogoSrc:Le(r.companyLogoSrc)||Pe.companyLogoSrc,reportTitle:Le(r.reportTitle)||Pe.reportTitle,footerText:Le(r.footerText)||Pe.footerText,signatureLabel:Le(r.signatureLabel)||Pe.signatureLabel,primaryColor:Ba(String(r.primaryColor??""))?String(r.primaryColor):Pe.primaryColor}}catch{return Pe}},Zi=t=>{localStorage.setItem(ts,JSON.stringify(t))},qr=t=>t.totalPrice!==void 0?Ut(t.totalPrice):Ut(t.quantity)*Ut(t.unitPrice),eo=({items:t=[],representativeName:r="",representativeCity:s="",representativePhone:c="",representativeAddress:b=""})=>{const n=Array.isArray(t)?t:[],[g,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[d,N]=(0,a.useState)(""),[v,k]=(0,a.useState)(!1),[x,p]=(0,a.useState)(!1),[w,o]=(0,a.useState)(!1),[$,q]=(0,a.useState)(()=>Qs()),[z,O]=(0,a.useState)(()=>Qs()),G=(0,a.useMemo)(()=>{const j=new Set;return n.forEach(U=>{j.add(hr(U))}),Array.from(j).sort((U,Z)=>U.localeCompare(Z,"fa"))},[n]),P=(0,a.useMemo)(()=>{const j=Vs(g);return n.filter(U=>{const Z=Le(U.title),B=hr(U),pe=ka(U),ee=Vs(`${Z} ${B} ${pe}`);return(!j||ee.includes(j))&&(!u||B===u)&&(!d||pe===d)})},[n,g,u,d]),S=n.length,y=n.reduce((j,U)=>j+Ut(U.quantity),0),I=n.reduce((j,U)=>j+qr(U),0),_=P.reduce((j,U)=>j+Ut(U.quantity),0),T=P.reduce((j,U)=>j+qr(U),0),V=!!g.trim()||!!u||!!d,Q=(0,a.useMemo)(()=>{const j=[];return g.trim()&&j.push(`جست‌وجو: «${g.trim()}»`),u&&j.push(`برند: ${u}`),d&&j.push(`دسته‌بندی: ${d}`),j.length>0?j.join(" | "):"بدون فیلتر"},[g,u,d]),C=()=>{i(""),h(""),N("")},F=()=>{O($),p(!1),k(!1)},f=(j,U)=>{p(!1),O(Z=>({...Z,[j]:U}))},m=()=>{const j=Ba(z.primaryColor)?z.primaryColor:Pe.primaryColor,U={companyName:Le(z.companyName)||Pe.companyName,companyTagline:Le(z.companyTagline)||Pe.companyTagline,companyLogoSrc:Le(z.companyLogoSrc),reportTitle:Le(z.reportTitle)||Pe.reportTitle,footerText:Le(z.footerText)||Pe.footerText,signatureLabel:Le(z.signatureLabel)||Pe.signatureLabel,primaryColor:j};q(U),O(U),Zi(U),p(!0)},L=()=>{window.confirm("آیا تنظیمات قالب چاپ به حالت پیش‌فرض برگردد؟")&&(q(Pe),O(Pe),localStorage.removeItem(ts),p(!0))},W=()=>{o(!0)},A=()=>{o(!1)};return(0,e.jsxs)("section",{dir:"rtl",className:"inventory-section overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)("div",{className:"border-b border-slate-200 p-5 dark:border-slate-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-slate-700",children:(0,e.jsx)(wl,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-slate-900 dark:text-white md:text-lg",children:"موجودی انبار نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400",children:"جست‌وجو، فیلتر، تنظیم قالب و چاپ گزارش موجودی."})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تنوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[qe(S)," کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تعداد کل اقلام"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[qe(y)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[qe(I)," تومان"]})]})]})]})}),n.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Xt,{className:"mx-auto h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600 dark:text-slate-300",children:"کالایی در انبار ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-400 dark:text-slate-500",children:"پس از ثبت کالا، جزئیات موجودی در این بخش نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"border-b border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50 md:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 lg:flex-row lg:items-center",children:[(0,e.jsxs)("div",{className:"relative min-w-0 flex-1",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:g,onChange:j=>i(j.target.value),placeholder:"جست‌وجو بر اساس عنوان، برند یا دسته‌بندی...",className:"min-h-11 w-full rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-slate-800"})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:u,onChange:j=>h(j.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-44",children:[(0,e.jsx)("option",{value:"",children:"همهٔ برندها"}),G.map(j=>(0,e.jsx)("option",{value:j,children:j},j))]}),(0,e.jsx)(bs,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:d,onChange:j=>N(j.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-48",children:[(0,e.jsx)("option",{value:"",children:"همهٔ دسته‌بندی‌ها"}),Xi.map(j=>(0,e.jsx)("option",{value:j,children:j},j))]}),(0,e.jsx)(bs,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),V&&(0,e.jsxs)("button",{type:"button",onClick:C,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(Ce,{className:"h-4 w-4"}),"پاک‌کردن"]}),(0,e.jsxs)("button",{type:"button",onClick:W,disabled:P.length===0,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"پیش‌نمایش و چاپ"]})]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2 text-sm",children:[(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:V?`${qe(P.length)} کالا از ${qe(n.length)} کالا پیدا شد.`:`${qe(n.length)} کالا در انبار موجود است.`}),V&&(0,e.jsxs)("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["تعداد نتایج: ",qe(_)," قلم · مجموع: ",qe(T)," تومان"]})]})]}),(0,e.jsx)("div",{className:"p-5",children:P.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(ut,{className:"mx-auto h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600",children:"کالایی با این شرایط پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:C,className:"mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800",children:"پاک‌کردن فیلترها"})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:P.map(j=>{const U=Ut(j.quantity),Z=Ut(j.unitPrice);return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",children:(0,e.jsx)(ra,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-slate-800 dark:text-white",children:j.title||"بدون عنوان"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:hr(j)})]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-indigo-50 p-3 text-center dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-indigo-900 dark:text-indigo-100",children:hr(j)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-amber-900 dark:text-amber-100",children:ka(j)})]})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-emerald-900 dark:text-emerald-100",children:qe(U)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-sky-50 p-3 text-center dark:bg-sky-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-sky-700 dark:text-sky-300",children:"قیمت"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-sky-900 dark:text-sky-100",children:qe(Z)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-purple-900 dark:text-purple-100",children:qe(qr(j))})]})]})]},j.id)})}),(0,e.jsx)("div",{className:"hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block dark:border-slate-700 dark:bg-slate-900",children:(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"w-full min-w-[760px] border-collapse text-center text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("thead",{className:"border-b border-slate-200 bg-gradient-to-l from-slate-50 to-slate-100 text-xs text-slate-600 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300",children:(0,e.jsxs)("tr",{className:"h-14",children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"عنوان"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"برند"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"تعداد"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-5 py-4 font-black last:border-l-0 dark:border-slate-700",children:"قیمت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مجموع"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:P.map(j=>(0,e.jsxs)("tr",{className:"h-16 bg-white transition-colors hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/70",children:[(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 font-black text-slate-800 last:border-l-0 dark:border-slate-800 dark:text-slate-100",children:j.title||"بدون عنوان"}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:hr(j)}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-5 py-4 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:ka(j)}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-5 py-4 font-black text-emerald-700 last:border-l-0 dark:border-slate-800 dark:text-emerald-300",children:[qe(j.quantity)," ","قلم"]}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-5 py-4 font-semibold text-sky-700 last:border-l-0 dark:border-slate-800 dark:text-sky-300",children:[qe(j.unitPrice)," ","تومان"]}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-violet-700 dark:text-violet-300",children:[qe(qr(j))," ","تومان"]})]},j.id))}),(0,e.jsx)("tfoot",{className:"border-t-2 border-slate-300 bg-gradient-to-l from-slate-50 to-slate-100 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900",children:(0,e.jsxs)("tr",{className:"h-16",children:[(0,e.jsx)("td",{colSpan:3,className:"border-l border-slate-200 px-5 py-4 font-black text-slate-800 last:border-l-0 dark:border-slate-700 dark:text-slate-100",children:V?"جمع نتایج فیلترشده":"جمع کل انبار"}),(0,e.jsxs)("td",{className:"border-l border-slate-200 px-5 py-4 font-black text-emerald-700 last:border-l-0 dark:border-slate-700 dark:text-emerald-300",children:[qe(_)," ","قلم"]}),(0,e.jsx)("td",{className:"border-l border-slate-200 px-5 py-4 text-slate-400 last:border-l-0 dark:border-slate-700 dark:text-slate-500",children:"—"}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-violet-700 dark:text-violet-300",children:[qe(T)," ","تومان"]})]})})]})})})]})})]}),w&&(0,e.jsx)(Gi,{items:P,settings:$,representativeName:r,representativeCity:s,representativePhone:c,representativeAddress:b,filterDescription:Q,onClose:A}),v&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-700",children:(0,e.jsx)(tl,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-900 dark:text-white",children:"شخصی‌سازی قالب چاپ"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:"تنظیمات روی همین مرورگر ذخیره می‌شوند."})]})]}),(0,e.jsx)("button",{type:"button",onClick:F,className:"rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-5 p-4 sm:p-5",children:[x&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-bold text-green-700 dark:border-green-900 dark:bg-green-950/20 dark:text-green-300",children:[(0,e.jsx)(qa,{className:"h-5 w-5"}),"تنظیمات قالب چاپ ذخیره شد."]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["نام شرکت",(0,e.jsx)("input",{type:"text",value:z.companyName,onChange:j=>f("companyName",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["زیرعنوان شرکت",(0,e.jsx)("input",{type:"text",value:z.companyTagline,onChange:j=>f("companyTagline",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["مسیر لوگو",(0,e.jsx)("input",{type:"text",dir:"ltr",value:z.companyLogoSrc,onChange:j=>f("companyLogoSrc",j.target.value),placeholder:"../company-logo.png",className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-left text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["عنوان گزارش",(0,e.jsx)("input",{type:"text",value:z.reportTitle,onChange:j=>f("reportTitle",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["رنگ اصلی",(0,e.jsx)("input",{type:"color",value:Ba(z.primaryColor)?z.primaryColor:Pe.primaryColor,onChange:j=>f("primaryColor",j.target.value),className:"mt-2 h-11 w-full cursor-pointer rounded-xl border border-slate-300 p-1 dark:border-slate-600"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن پایین گزارش",(0,e.jsx)("textarea",{value:z.footerText,onChange:j=>f("footerText",j.target.value),rows:3,className:"mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن امضا",(0,e.jsx)("input",{type:"text",value:z.signatureLabel,onChange:j=>f("signatureLabel",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-col-reverse gap-2 border-t border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:L,className:"min-h-11 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:"بازنشانی پیش‌فرض"}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:F,className:"min-h-11 rounded-xl bg-slate-100 px-4 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:"بستن"}),(0,e.jsxs)("button",{type:"button",onClick:m,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-black text-white dark:bg-slate-700",children:[(0,e.jsx)(qa,{className:"h-4 w-4"}),"ذخیرهٔ تنظیمات"]})]})]})]})})]})},rs=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],tt=t=>{const r=Number(t??0);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},Na=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Hs=t=>t==="pending"?"در انتظار":t==="sent"?"ارسال شده":rs.find(r=>r.value===t)?.label||"نامشخص",to=t=>t==="pending"?0:t==="sent"?4:rs.findIndex(r=>r.value===t),ro=t=>{if(xe.isAxiosError(t)){const r=t.response?.data;return t.response?.status===401?"نشست شما معتبر نیست؛ دوباره وارد حساب نمایندگی شوید.":t.response?.status===403?"دسترسی به این بخش برای حساب شما مجاز نیست.":t.response?.status===404?"مسیر «بارهای من» در بک‌اند هنوز ایجاد نشده است.":r?.error||r?.message||"دریافت بارها ناموفق بود."}return t instanceof Error?t.message:"دریافت بارها ناموفق بود."},ao=({apiUrl:t="https://myshop-backend-8nu7.onrender.com/api",token:r})=>{const[s,c]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[g,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(null),d=t.replace(/\/+$/,""),N=(0,a.useCallback)(async()=>{n(!0),i("");try{const x=await xe.get(`${d}/shipments/my`,{headers:r?{Authorization:`Bearer ${r}`,Accept:"application/json"}:{Accept:"application/json"},withCredentials:!0});if(x.data.success===!1)throw new Error(x.data.error||"دریافت بارها ناموفق بود.");c(Array.isArray(x.data.data)?x.data.data:[])}catch(x){console.error("خطا در دریافت بارهای نماینده:",x),c([]),i(ro(x))}finally{n(!1)}},[d,r]);(0,a.useEffect)(()=>{N()},[N]);const v=(0,a.useMemo)(()=>[...s].sort((x,p)=>new Date(p.createdAt||p.updatedAt||0).getTime()-new Date(x.createdAt||x.updatedAt||0).getTime()),[s]),k=(0,a.useMemo)(()=>s.filter(x=>x.status!=="delivered").length,[s]);return b?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(ue,{className:"h-8 w-8 animate-spin text-blue-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:"در حال دریافت بارهای شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-4 border-b border-gray-100 pb-5 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:[(0,e.jsx)(er,{className:"h-6 w-6 text-blue-600"}),"بارهای من"]}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت ارسال بارهای مربوط به حساب نمایندگی شما"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void N(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),g?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:g})]}):null,g?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"کل بارها"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-blue-900 dark:text-blue-100",children:tt(s.length)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"در جریان"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-amber-900 dark:text-amber-100",children:tt(k)})]})]}),v.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع بارهای من"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[tt(v.length)," حواله · ",tt(v.reduce((x,p)=>x+(p.totalItems??p.items?.reduce((w,o)=>w+(o.quantity||0),0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:tt(v.reduce((x,p)=>x+(p.totalValue??p.items?.reduce((w,o)=>w+(o.totalPrice??(o.quantity||0)*(o.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),v.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-12 text-center dark:border-gray-700 dark:bg-gray-800/40",children:[(0,e.jsx)(gt,{className:"mx-auto mb-3 h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"font-black text-gray-700 dark:text-gray-200",children:"هنوز باری برای شما ثبت نشده است."})]}):(0,e.jsx)("div",{className:"space-y-4",children:v.map(x=>{const p=String(x.id),w=u===p,o=to(x.status),$=x.items?.length??x.itemsCount??0,q=x.items?.reduce((z,O)=>z+(Number(O.quantity)||0),0)??x.totalItems??0;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"p-4 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["شماره حواله:"," ",x.shipmentNumber||p]}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-black text-gray-800 dark:text-white",children:"بار ارسالی به نمایندگی شما"})]}),(0,e.jsx)("span",{className:"w-fit rounded-full bg-blue-100 px-3 py-1.5 text-xs font-black text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",children:Hs(x.status)})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:tt($)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:tt(q)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ارسال"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:x.shipmentDate||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-800 dark:text-white",children:Na(x.createdAt)})]})]}),(0,e.jsx)("div",{"aria-label":"مراحل ارسال بار",className:"mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6",children:rs.map((z,O)=>{const G=O<=o;return(0,e.jsxs)("div",{className:`flex min-h-10 items-center justify-center gap-1 rounded-lg px-2 py-2 text-center text-[10px] font-bold sm:text-xs ${G?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-300"}`,children:[G?(0,e.jsx)(Ne,{className:"h-3.5 w-3.5 shrink-0"}):(0,e.jsx)(vr,{className:"h-3.5 w-3.5 shrink-0"}),(0,e.jsx)("span",{children:z.label})]},z.value)})}),(0,e.jsxs)("button",{type:"button",onClick:()=>h(w?null:p),"aria-expanded":w,className:"mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 text-sm font-black text-blue-700 transition hover:bg-blue-50 dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300",children:[w?(0,e.jsx)(vl,{className:"h-4 w-4"}):(0,e.jsx)(ta,{className:"h-4 w-4"}),w?"بستن جزئیات":"مشاهدهٔ کالاها و جزئیات"]})]}),w?(0,e.jsxs)("div",{className:"space-y-5 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 text-sm sm:grid-cols-2",children:[(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["گیرنده:"," ",(0,e.jsx)("strong",{children:x.receiver||"—"})]}),(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["انبار مبدأ:"," ",(0,e.jsx)("strong",{children:x.warehouse||"—"})]}),(0,e.jsxs)("p",{className:"flex items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(ot,{className:"h-4 w-4"}),"ثبت:"," ",Na(x.createdAt)]}),(0,e.jsxs)("p",{className:"flex min-w-0 items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(Xa,{className:"h-4 w-4 shrink-0"}),(0,e.jsx)("span",{className:"break-all",children:x.excelFileName||"نام فایل ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(gt,{className:"h-5 w-5"}),"کالاهای این بار"]}),x.items?.length?(0,e.jsxs)("div",{className:"overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700 sm:hidden",children:x.items.map((z,O)=>(0,e.jsxs)("div",{className:"bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:z.productName||"—"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:tt(z.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[tt(z.unitPrice)," ","تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[z.brand?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",z.brand]}):null,z.category?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",z.category]}):null]})]},String(z.id??O)))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"کالا"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"})]})}),(0,e.jsx)("tbody",{children:x.items.map((z,O)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:z.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:z.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:z.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:tt(z.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[tt(z.unitPrice)," ","تومان"]})]},String(z.id??O)))})]})})]}):(0,e.jsx)("div",{className:"rounded-xl bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-950/20 dark:text-amber-200",children:"جزئیات اقلام برای این بار موجود نیست. بارهای قدیمی ممکن است فقط نام فایل را ذخیره کرده باشند."})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(Ge,{className:"h-5 w-5"}),"تاریخچهٔ وضعیت"]}),x.statusHistory?.length?(0,e.jsx)("div",{className:"space-y-2",children:x.statusHistory.map((z,O)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 p-3 text-sm dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("p",{className:"font-black",children:z.label||Hs(z.status)}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500",children:Na(z.changedAt||z.createdAt)}),z.note?(0,e.jsx)("p",{className:"mt-2",children:z.note}):null]},`${z.status}-${O}`))}):(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800",children:"تاریخچه‌ای برای این بار ثبت نشده است."})]})]}):null]},p)})})]})]})},wa=t=>new Intl.NumberFormat("fa-IR").format(t||0),so=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium"}).format(r)},no=({orders:t=[]})=>{const r=Array.isArray(t)?t:[];return(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 border-b border-gray-100 p-5 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(yn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"سفارش‌های اخیر"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"آخرین سفارش‌های ثبت‌شدهٔ شما"})]})]}),(0,e.jsxs)("span",{className:"rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",children:[wa(r.length)," سفارش"]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Sr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"سفارشی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"پس از ثبت سفارش، اطلاعات آن در این بخش نمایش داده می‌شود."})]}):(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.slice(0,5).map(s=>(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between dark:hover:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-gray-300",children:(0,e.jsx)(fn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:s.title||"بدون عنوان"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["تعداد:"," ",wa(Number(s.quantity)||0)," ","قلم"]})]})]}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 sm:block sm:text-left",children:[(0,e.jsxs)("p",{className:"font-black text-emerald-600 dark:text-emerald-400",children:[wa(Number(s.amount)||0)," ","تومان"]}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500",children:so(s.createdAt)})]})]},s.id))})]})},qt=t=>{const r=String(t??"").replace(/[۰-۹]/g,c=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(c))).replace(/[٠-٩]/g,c=>String("٠١٢٣٤٥٦٧٨٩".indexOf(c))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},kt=t=>new Intl.NumberFormat("fa-IR").format(qt(t)),Sa=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r).replace(/[\u200e\u200f]/g,"")},lo=t=>String(t.items?.[0]?.productName||t.items?.[0]?.title||"").trim()||String(t.representativeName||"").trim()||"کالای بدون نام",Js=t=>{const r=qt(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,c)=>s+qt(c.quantity),0)},Ys=t=>{const r=qt(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,c)=>{const b=qt(c.totalPrice);return b>0?s+b:s+qt(c.quantity)*qt(c.unitPrice??c.price)},0)},io=t=>t==="approved"?"تأیید شده":t==="received"?"دریافت شده":t==="rejected"?"رد شده":t==="reviewing"?"در حال بررسی":"در انتظار بررسی",oo=({requests:t,representativeName:r,representativeCity:s,representativePhone:c,onClose:b})=>{const{printContent:n,isMobile:g}=es(),i=Array.isArray(t)?t:[],u=i.reduce((d,N)=>d+Js(N),0),h=i.reduce((d,N)=>d+Ys(N),0);return(0,a.useEffect)(()=>{const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}},[]),typeof document>"u"?null:(0,Pn.createPortal)((0,e.jsxs)("div",{id:"return-print-root",dir:"rtl",children:[(0,e.jsx)("style",{children:`
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

        #return-print-root .return-print-header .return-print-logo-block {
          display: flex;
          align-items: center;
          gap: 14px;
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
      `}),(0,e.jsxs)("div",{className:"return-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش مرجوعی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("button",{type:"button",className:"return-print-close",onClick:b,children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"return-print-button",onClick:()=>n("return-print-root","چاپ درخواست مرجوعی"),children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"return-print-paper",children:[(0,e.jsxs)("header",{className:"return-print-header",children:[(0,e.jsxs)("div",{className:"return-print-logo-block",children:[(0,e.jsx)("img",{src:"https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png",alt:"لوگو",style:{maxHeight:"64px",maxWidth:"200px",borderRadius:"8px",objectFit:"contain"},onError:d=>{d.target.style.display="none"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{style:{color:"#0f766e",margin:0,fontSize:"16pt"},children:"هلدینگ مهر"}),(0,e.jsx)("p",{style:{margin:"3px 0 0",fontSize:"9pt",color:"#4b5563"},children:"سامانه مدیریت نمایندگی و انبار"}),(0,e.jsx)("p",{style:{margin:"3px 0 0",fontSize:"9pt",color:"#4b5563"},children:"تلفن: ۰۲۱-۹۳۱۱۱۰۲۱"})]})]}),(0,e.jsxs)("div",{style:{textAlign:"center",flex:1},children:[(0,e.jsx)("h1",{style:{color:"#0f766e",margin:0,fontSize:"16pt"},children:r||"گزارش درخواست‌های مرجوعی"}),(0,e.jsx)("p",{style:{margin:"4px 0 0",fontSize:"9pt",color:"#4b5563"},children:s?`شهر: ${s}`:"گزارش درخواست‌های مرجوعی"})]}),(0,e.jsxs)("div",{style:{textAlign:"left",minWidth:"180px"},children:[(0,e.jsx)("h1",{style:{color:"#0f766e",margin:0,fontSize:"14pt"},children:"گزارش مرجوعی"}),(0,e.jsxs)("p",{style:{margin:"4px 0 0",fontSize:"9pt",color:"#4b5563"},children:["تاریخ چاپ: ",Sa()]})]})]}),(0,e.jsxs)("section",{className:"return-print-cards",children:[(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Sa()})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"هلدینگ مهر"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"021-93111021"})]})]}),(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:r||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:s||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن نماینده:"}),(0,e.jsx)("strong",{children:c||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تعداد درخواست:"}),(0,e.jsx)("strong",{children:kt(i.length)})]})]})]}),(0,e.jsxs)("table",{className:"return-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"6%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"26%"},children:"عنوان مرجوعی"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"16%"},children:"مبلغ کل"}),(0,e.jsx)("th",{style:{width:"16%"},children:"تاریخ ثبت"}),(0,e.jsx)("th",{style:{width:"12%"},children:"وضعیت"}),(0,e.jsx)("th",{style:{width:"14%"},children:"توضیحات"})]})}),(0,e.jsx)("tbody",{children:i.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"درخواست مرجوعی برای چاپ وجود ندارد."})}):i.map((d,N)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:kt(N+1)}),(0,e.jsx)("td",{children:lo(d)}),(0,e.jsx)("td",{children:kt(Js(d))}),(0,e.jsxs)("td",{children:[kt(Ys(d))," تومان"]}),(0,e.jsx)("td",{children:d.returnDate||Sa(d.createdAt)}),(0,e.jsx)("td",{children:io(d.status)}),(0,e.jsx)("td",{children:d.adminNote||"—"})]},d.id||N))})]}),(0,e.jsx)("table",{className:"return-print-table return-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل مرجوعی‌ها"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[kt(u)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[kt(h)," تومان"]})]})})}),(0,e.jsxs)("footer",{className:"return-print-footer",children:[(0,e.jsxs)("span",{children:["تعداد کل درخواست‌ها:"," ",kt(i.length)]}),(0,e.jsxs)("span",{children:["مجموع‌ها:"," ",kt(h)," تومان"]})]})]})]}),document.body)},Ca="https://myshop-backend-8nu7.onrender.com/api",Jt={productId:"",title:"",brand:"",category:"",price:"",quantity:"1",confirmedReturn:!1},Xr=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),ve=t=>{const r=Number(Xr(t).replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Fe=t=>new Intl.NumberFormat("fa-IR").format(ve(t)),De=t=>String(t??"").trim(),yr=t=>Xr(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/\s+/g," ").trim().toLowerCase(),Ks=(t,r)=>{const s=yr(t),c=yr(r);return!!(s&&c&&s===c)},co=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/"),xo=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},mo=t=>De(t.items?.[0]?.productName)||De(t.items?.[0]?.title)||De(t.representativeName)||"کالای بدون نام",po=t=>{const r=ve(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,c)=>s+ve(c.quantity),0)},Gs=t=>{const r=ve(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,c)=>{const b=ve(c.totalPrice);return b>0?s+b:s+ve(c.quantity)*ve(c.unitPrice??c.price)},0)},ho=t=>t==="approved"||t==="received"?{label:t==="received"?"دریافت شده":"تأیید شده",type:"approved"}:t==="rejected"?{label:"رد شده",type:"rejected"}:t==="reviewing"?{label:"در حال بررسی",type:"reviewing"}:{label:"در انتظار بررسی",type:"pending"},go=({requests:t,loading:r,errorMessage:s,onRefresh:c,onRequestCreated:b})=>{const[n,g]=(0,a.useState)(Jt),[i,u]=(0,a.useState)([]),[h,d]=(0,a.useState)([]),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)(!1),[p,w]=(0,a.useState)(!0),[o,$]=(0,a.useState)(""),[q,z]=(0,a.useState)(""),[O,G]=(0,a.useState)(!1),[P,S]=(0,a.useState)(""),y=t,I=r||p,_=s||o,T=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),V=R=>R.productName||R.name||R.title||"کالای بدون نام",Q=R=>ve(R.unitPrice??R.price),C=R=>R?.name||R?.title||"",F=R=>{const H=yr(R.productId||R.id),ae=yr(V(R));return N.find(l=>Ks(l.id,H))||N.find(l=>yr(C(l))===ae)},f=(R,H)=>String(R.productId||R.id||H),m=(0,a.useMemo)(()=>h.filter(R=>ve(R.quantity)>0),[h]),L=()=>m.find((R,H)=>{const ae=f(R,H),l=F(R),E=String(l?.id||R.productId||R.id||"");return ae===n.productId||E===n.productId}),W=()=>{const R=L();if(!R)return"";const H=m.indexOf(R);return f(R,H)},A=async()=>{w(!0),$("");try{const[R,H]=await Promise.all([xe.get(`${Ca}/representative/dashboard`,{headers:T()}),xe.get(`${Ca}/products`,{headers:T()})]);d(Array.isArray(R.data.data?.warehouse?.items)?R.data.data?.warehouse?.items||[]:[]);const ae=R.data.data;S(De(ae?.representative?.phone)||De(ae?.representative?.phoneNumber)||De(ae?.user?.phone)||De(ae?.user?.phoneNumber)||De(ae?.phone)||De(ae?.phoneNumber)),v(Array.isArray(H.data.data)?H.data.data:[])}catch(R){$(R.response?.data?.error||R.response?.data?.message||"خطا در دریافت اطلاعات.")}finally{w(!1)}};(0,a.useEffect)(()=>{A()},[]),(0,a.useEffect)(()=>{if(!n.productId){g(Jt);return}L()||g(Jt)},[n.productId,m,N]);const j=(0,a.useMemo)(()=>y.filter(R=>String(R.status)==="pending"||String(R.status)==="registered"||String(R.status)==="reviewing").length,[y]);(0,a.useMemo)(()=>y.filter(R=>R.status==="approved"||R.status==="received").length,[y]),(0,a.useMemo)(()=>y.filter(R=>R.status==="rejected").length,[y]);const U=(0,a.useMemo)(()=>y.find(R=>!!De(R.representativeName))?.representativeName||"",[y]),Z=(0,a.useMemo)(()=>y.find(R=>!!De(R.representativeCity))?.representativeCity||"",[y]),B=(0,a.useMemo)(()=>{const R=y.find(H=>!!De(H.representativePhone))?.representativePhone||"";return De(R)||P},[y,P]);(0,a.useMemo)(()=>y.reduce((R,H)=>R+Gs(H),0),[y]);const pe=R=>{const H=m.find((te,oe)=>f(te,oe)===R);if(!H){g(Jt);return}const ae=F(H),l=V(H),E=ve(ae?.price),J=Q(H),me=E>0?E:J,fe=String(ae?.id||H.productId||H.id||"");g(te=>({...te,productId:fe,title:l,brand:De(H.brand),category:De(H.category)||De(ae?.category),price:String(me),quantity:"1"})),$(""),z("")},ee=()=>{const R=L();if(!R){$("ابتدا یک کالا از انبار انتخاب کنید.");return}const H=De(n.title),ae=ve(n.price),l=ve(n.quantity);if(!n.productId){$("کالای انتخاب‌شده معتبر نیست.");return}const E=ve(R.quantity);if(E<=0){$("کالای انتخاب‌شده موجودی ندارد.");return}if(!Number.isSafeInteger(l)||l<=0){$("تعداد مرجوعی باید عدد صحیح و بیشتر از صفر باشد.");return}if(l>E){$(`تعداد مرجوعی نمی‌تواند بیشتر از موجودی انبار باشد. موجودی فعلی: ${Fe(E)} قلم`);return}if(ae<=0){$("برای این کالا قیمت معتبری ثبت نشده است.");return}if(i.some(J=>Ks(J.productId,n.productId))){$("این کالا قبلاً به لیست مرجوعی اضافه شده است.");return}u(J=>[...J,{id:`${n.productId}-${Date.now()}`,productId:n.productId,title:H,brand:De(n.brand),category:De(n.category),price:ae,quantity:String(l),maxQuantity:E}]),g(J=>({...Jt,confirmedReturn:J.confirmedReturn})),$(""),z("")},re=R=>{u(H=>H.filter(ae=>ae.id!==R)),$(""),z("")},ne=(R,H)=>{const ae=Xr(H);u(l=>l.map(E=>E.id===R?{...E,quantity:ae}:E)),$(""),z("")},X=(0,a.useMemo)(()=>{const R=i.reduce((ae,l)=>ae+Math.max(0,ve(l.quantity)),0),H=i.reduce((ae,l)=>ae+Math.max(0,ve(l.quantity))*l.price,0);return{itemsCount:i.length,totalQty:R,totalPrice:H}},[i]),ie=async R=>{R.preventDefault();const H=co();if(m.length===0){$("کالای قابل مرجوعی در انبار شما وجود ندارد.");return}if(i.length===0){$("حداقل یک کالا را به لیست مرجوعی اضافه کنید.");return}const ae=i.find(E=>{const J=ve(E.quantity);return!Number.isSafeInteger(J)||J<=0||J>E.maxQuantity||E.price<=0||!E.productId||!E.title});if(ae){if(ve(ae.quantity)>ae.maxQuantity){$(`تعداد مرجوعی کالای «${ae.title}» بیشتر از موجودی انبار است.`);return}$(`اطلاعات کالای «${ae.title||"نامشخص"}» معتبر نیست.`);return}if(!n.confirmedReturn){$("برای ثبت درخواست باید تیک تأیید مرجوعی را فعال کنید.");return}const l=i.map(E=>{const J=ve(E.quantity);return{productId:E.productId,productName:E.title,brand:E.brand,category:E.category,quantity:J,unitPrice:E.price,totalPrice:J*E.price}});x(!0),$(""),z("");try{const E=(await xe.post(`${Ca}/return-requests/my`,{items:l,returnDate:H,reason:"مرجوعی ثبت‌شده و تأییدشده توسط نماینده",confirmedReturn:!0},{headers:T()})).data.data;E?b(E):c(),await A(),u([]),g(Jt),z(`درخواست مرجوعی شامل ${Fe(l.length)} کالا با موفقیت در تاریخ ${H} ثبت شد.`)}catch(E){$(E.response?.data?.error||E.response?.data?.message||E.message||"خطا در ثبت درخواست مرجوعی.")}finally{x(!1)}},he=()=>{I||y.length===0||G(!0)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"return-requests-page space-y-6",children:[(0,e.jsxs)("section",{className:"return-screen-only overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-rose-50 via-white to-amber-50 p-5 dark:border-gray-700 dark:from-rose-950/20 dark:via-gray-900 dark:to-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/25",children:(0,e.jsx)(Ja,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"ثبت درخواست مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"کالا را از لیست انتخاب کن، به لیست مرجوعی اضافه کن و در نهایت ثبت کن."})]})]})}),(0,e.jsxs)("form",{onSubmit:ie,className:"grid grid-cols-1 gap-5 p-5 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"انتخاب کالا از انبار"}),(0,e.jsxs)("select",{value:W(),onChange:R=>{pe(R.target.value)},disabled:I||m.length===0,className:"mt-2 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition-all focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:I?"در حال دریافت کالاهای انبار...":m.length===0?"کالای قابل مرجوعی در انبار شما وجود ندارد":"یک کالا را انتخاب کنید"}),m.map((R,H)=>{const ae=f(R,H),l=F(R),E=C(l)||V(R),J=ve(l?.price),me=J>0?J:Q(R),fe=ve(R.quantity);return(0,e.jsxs)("option",{value:ae,children:[E," — موجودی:"," ",Fe(fe)," — قیمت:"," ",Fe(me)," تومان"]},`${ae}-${H}`)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs text-gray-400 dark:text-gray-500",children:"فقط کالاهایی با موجودی بیشتر از صفر نمایش داده می‌شوند."})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"قیمت کالا"}),(0,e.jsx)("input",{type:"text",value:n.price?`${Fe(n.price)} تومان`:"",readOnly:!0,placeholder:"پس از انتخاب کالا نمایش داده می‌شود",className:"mt-2 w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-emerald-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-emerald-300"})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:L()?ve(L()?.quantity):void 0,value:n.quantity,onChange:R=>{g(H=>({...H,quantity:Xr(R.target.value)}))},disabled:!n.productId||I,className:"mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300",children:(0,e.jsx)(ot,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-black text-rose-700 dark:text-rose-300",children:"تاریخ ثبت مرجوعی خودکار است"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-rose-600 dark:text-rose-400",children:"تاریخ امروز هنگام ثبت درخواست به‌صورت خودکار ذخیره می‌شود."})]})]})}),(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"button",onClick:ee,disabled:I||!n.productId,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-rose-800 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20",children:[(0,e.jsx)(Nr,{className:"h-5 w-5"}),"افزودن کالا به لیست مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-400 dark:text-gray-500",children:"پس از انتخاب کالا و وارد کردن تعداد، آن را به لیست مرجوعی اضافه کنید."})]}),i.length>0?(0,e.jsxs)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50/60 p-4 md:col-span-2 dark:border-rose-900/50 dark:bg-rose-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-rose-200 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-rose-900/50",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-rose-800 dark:text-rose-200",children:"کالاهای انتخاب‌شده برای مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-bold text-rose-600 dark:text-rose-300",children:"قبل از ثبت نهایی، تعداد هر کالا را بررسی کنید."})]}),(0,e.jsxs)("span",{className:"w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black text-rose-700 shadow-sm dark:bg-gray-900 dark:text-rose-300",children:[Fe(X.itemsCount)," ","نوع کالا"]})]}),(0,e.jsx)("div",{className:"mt-4 space-y-3",children:i.map((R,H)=>{const ae=ve(R.quantity)*R.price;return(0,e.jsx)("div",{className:"rounded-xl border border-rose-100 bg-white p-4 dark:border-rose-900/40 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[Fe(H+1),". ",R.title]}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[R.brand?`برند: ${R.brand}`:"برند: —",R.category?` · دسته‌بندی: ${R.category}`:""]}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-black text-emerald-600 dark:text-emerald-400",children:["قیمت:"," ",Fe(R.price)," ","تومان · موجودی انبار:"," ",Fe(R.maxQuantity)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-xs font-black text-gray-600 dark:text-gray-300",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:R.maxQuantity,value:R.quantity,onChange:l=>{ne(R.id,l.target.value)},className:"mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-black text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-32"})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-500/10",children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ این ردیف"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-emerald-700 dark:text-emerald-300",children:[Fe(ae)," ","تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{re(R.id)},className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-black text-red-700 transition-colors hover:bg-red-100 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20",children:[(0,e.jsx)(Xe,{className:"h-4 w-4"}),"حذف"]})]})]})},R.id)})}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 border-t border-rose-200 pt-4 sm:grid-cols-3 dark:border-rose-900/50",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعداد نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-rose-700 dark:text-rose-300",children:Fe(X.itemsCount)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-blue-700 dark:text-blue-300",children:[Fe(X.totalQty)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-emerald-700 dark:text-emerald-300",children:[Fe(X.totalPrice)," ","تومان"]})]})]})]}):(0,e.jsx)("div",{className:"rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm font-bold text-gray-500 md:col-span-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:"هنوز کالایی به لیست مرجوعی اضافه نشده است."}),(0,e.jsxs)("label",{className:"flex cursor-pointer items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4 transition-colors hover:bg-rose-100 md:col-span-2 dark:border-rose-900/40 dark:bg-rose-950/20 dark:hover:bg-rose-950/35",children:[(0,e.jsx)("input",{type:"checkbox",checked:n.confirmedReturn,onChange:R=>{g(H=>({...H,confirmedReturn:R.target.checked})),$("")},disabled:I||m.length===0,className:"h-5 w-5 accent-rose-600 disabled:cursor-not-allowed"}),(0,e.jsxs)("span",{className:"flex items-center gap-2 text-sm font-black text-rose-700 dark:text-rose-300",children:[(0,e.jsx)(os,{className:"h-5 w-5 shrink-0"}),"تأیید می‌کنم که کالا جهت مرجوعی تحویل یا ارسال شده است."]})]}),_?(0,e.jsx)("div",{className:"rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700 md:col-span-2 dark:bg-red-950/30 dark:text-red-300",children:_}):null,q?(0,e.jsx)("div",{className:"rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700 md:col-span-2 dark:bg-emerald-950/30 dark:text-emerald-300",children:q}):null,(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"submit",disabled:k||I||m.length===0||i.length===0,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-rose-500/25 transition-all hover:from-rose-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",children:[k?(0,e.jsx)(ps,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Ha,{className:"h-5 w-5"}),k?"در حال ثبت درخواست...":`ثبت درخواست مرجوعی (${Fe(X.itemsCount)} کالا)`]}),!I&&m.length===0?(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"کالای قابل مرجوعی در انبار شما وجود ندارد."}):null]})]})]}),(0,e.jsxs)("section",{className:"return-print-area overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"return-screen-only flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:(0,e.jsx)(Sr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت بررسی درخواست‌های ثبت‌شده"})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-amber-50 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[Fe(j)," ","در انتظار بررسی"]}),(0,e.jsxs)("button",{type:"button",onClick:he,disabled:I||y.length===0,className:"flex min-h-9 items-center gap-2 rounded-lg bg-gray-800 px-3 text-xs font-black text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:c,disabled:I,className:"flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-rose-500/10",title:"بروزرسانی","aria-label":"بروزرسانی",children:(0,e.jsx)(Ue,{className:`h-4 w-4 ${I?"animate-spin":""}`})})]})]}),I?(0,e.jsxs)("div",{className:"return-screen-only flex items-center justify-center gap-2 p-10 text-sm font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(ps,{className:"h-5 w-5 animate-spin"}),"در حال دریافت اطلاعات..."]}):y.length===0?(0,e.jsxs)("div",{className:"return-screen-only p-10 text-center",children:[(0,e.jsx)(Sr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز درخواست مرجوعی ثبت نکرده‌اید."})]}):(0,e.jsx)("div",{className:"return-screen-only divide-y divide-gray-100 dark:divide-gray-700",children:y.map(R=>{const H=ho(R.status);return(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:mo(R)}),(0,e.jsxs)("p",{className:"mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400",children:[Fe(Gs(R))," ","تومان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:["تعداد:"," ",Fe(po(R))," ","قلم · تاریخ ثبت:"," ",R.returnDate||xo(R.createdAt)]}),H.type==="rejected"&&R.adminNote?(0,e.jsxs)("p",{className:"mt-3 rounded-xl bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:bg-red-950/30 dark:text-red-300",children:["دلیل رد ادمین:"," ",R.adminNote]}):null]}),H.type==="approved"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",children:[(0,e.jsx)(os,{className:"h-4 w-4"}),H.label]}):null,H.type==="rejected"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-black text-red-700 dark:bg-red-500/15 dark:text-red-300",children:[(0,e.jsx)(it,{className:"h-4 w-4"}),H.label]}):null,(H.type==="pending"||H.type==="reviewing")&&(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[(0,e.jsx)(Sn,{className:"h-4 w-4"}),H.label]})]},R.id)})})]})]}),O&&(0,e.jsx)(oo,{requests:y,representativeName:U,representativeCity:Z,representativePhone:B,onClose:()=>G(!1)})]})},Tt=t=>{const r=Number(String(t??"").replace(/[۰-۹]/g,s=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(s))).replace(/[٠-٩]/g,s=>String("٠١٢٣٤٥٦٧٨٩".indexOf(s))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Hr=t=>new Intl.NumberFormat("fa-IR").format(Tt(t)),$a=t=>`${Hr(t)} تومان`,as=t=>{const r=Tt(t.totalPrice);return r>0?r:Tt(t.quantity)*Tt(t.unitPrice)},Xs=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Zr=t=>Array.isArray(t?.items)?t.items:[],uo=t=>{const r=Tt(t?.totalItems);return r>0?r:Zr(t).reduce((s,c)=>s+Tt(c.quantity),0)},bo=t=>{const r=Tt(t?.totalAmount);return r>0?r:Zr(t).reduce((s,c)=>s+as(c),0)},fo=t=>({companyName:t?.companyName||"هلدینگ مهر",companySubtitle:t?.companySubtitle||"سامانه مدیریت فروش",logoUrl:t?.logoUrl||"../company-logo.png",primaryColor:t?.primaryColor||"#0f766e",secondaryColor:t?.secondaryColor||"#ecfdf5",textColor:t?.textColor||"#111827",fontFamily:t?.fontFamily||"Tahoma, Arial, sans-serif",headerTitle:t?.headerTitle||"گزارش اعلام فروش",footerText:t?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:t?.showLogo??!0,showCompanyName:t?.showCompanyName??!0,showRepresentativeInfo:t?.showRepresentativeInfo??!0,showReportNumber:t?.showReportNumber??!0,showDate:t?.showDate??!0}),Zs=({report:t,reports:r,settings:s,onClose:c})=>{const{printContent:b,isMobile:n}=es(),g=fo(s),i=Array.isArray(r),u=i?r?.[0]:t,h=i?(r||[]).flatMap(k=>Zr(k)):Zr(t),d=i?h.reduce((k,x)=>k+Tt(x.quantity),0):uo(t),N=i?h.reduce((k,x)=>k+as(x),0):bo(t),v=()=>{b("sales-print-root","چاپ اعلام فروش")};return(0,e.jsxs)("div",{className:"sales-print-root",dir:"rtl",style:{fontFamily:g.fontFamily},children:[(0,e.jsxs)("div",{className:"sales-print-screen",children:[(0,e.jsxs)("div",{className:"sales-print-topbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:i?"پیش‌نمایش همه گزارش‌ها":"پیش‌نمایش گزارش فروش"}),(0,e.jsx)("p",{children:i?"همه گزارش‌ها در یک گزارش چاپ می‌شوند.":"گزارش فروش آماده چاپ است."})]}),(0,e.jsx)("button",{type:"button",onClick:c,className:"sales-print-close",children:"بستن"})]}),(0,e.jsx)("div",{className:"sales-print-paper",children:(0,e.jsx)(en,{report:u,items:h,totalItems:d,totalAmount:N,settings:g,isBulk:i})}),(0,e.jsxs)("div",{className:"sales-print-actions",children:[(0,e.jsx)("button",{type:"button",onClick:c,className:"sales-print-cancel",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:v,className:"sales-print-submit",children:i?"چاپ همه گزارش‌ها":"چاپ گزارش"})]})]}),(0,e.jsx)("div",{className:"sales-print-only",children:(0,e.jsx)(en,{report:u,items:h,totalItems:d,totalAmount:N,settings:g,isBulk:i})}),(0,e.jsx)("style",{children:`
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
      `})]})},en=({report:t,items:r,totalItems:s,totalAmount:c,settings:b,isBulk:n})=>{const g={"--print-primary-color":b.primaryColor,"--print-secondary-color":b.secondaryColor,"--print-text-color":b.textColor};return(0,e.jsxs)("div",{className:"print-content",style:g,children:[(0,e.jsxs)("header",{className:"print-header",children:[(0,e.jsxs)("div",{className:"print-company",children:[b.showLogo&&b.logoUrl?(0,e.jsx)("img",{src:b.logoUrl,alt:"لوگو",className:"print-logo"}):null,(0,e.jsxs)("div",{children:[b.showCompanyName?(0,e.jsx)("h1",{children:t?.representativeName||b.companyName}):null,(0,e.jsx)("p",{children:b.companySubtitle})]})]}),(0,e.jsxs)("div",{className:"print-header-left",children:[(0,e.jsx)("h2",{children:n?"گزارش تجمیعی اعلام فروش":b.headerTitle}),b.showDate?(0,e.jsxs)("p",{children:["تاریخ چاپ: ",Xs()]}):null]})]}),(0,e.jsxs)("section",{className:"print-info",children:[(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Xs()})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"هلدینگ مهر"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"سه راه خیام"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"021-93111021"})]})]}),(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:t?.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"کد نماینده:"}),(0,e.jsx)("strong",{children:t?.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:t?.representativeCity||"—"})]})]})]}),(0,e.jsxs)("table",{className:"print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"عنوان"}),(0,e.jsx)("th",{children:"برند"}),(0,e.jsx)("th",{children:"دسته‌بندی"}),(0,e.jsx)("th",{children:"قیمت"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{children:r.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"کالایی در این گزارش وجود ندارد."})}):r.map((i,u)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:Hr(u+1)}),(0,e.jsx)("td",{children:i.productName||"کالای بدون نام"}),(0,e.jsx)("td",{children:i.brand||i.brandName||"—"}),(0,e.jsx)("td",{children:i.category||i.categoryName||"—"}),(0,e.jsx)("td",{children:$a(i.unitPrice)}),(0,e.jsxs)("td",{children:[Hr(i.quantity)," قلم"]}),(0,e.jsx)("td",{children:$a(as(i))})]},i.productId||`print-item-${u}`))})]}),(0,e.jsx)("table",{className:"print-table print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[Hr(s)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsx)("td",{style:{width:"20%"},children:$a(c)})]})})}),(0,e.jsxs)("div",{className:"print-signatures",children:[(0,e.jsxs)("div",{children:["امضای نماینده",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["تأیید مسئول فروش",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["مهر شرکت",(0,e.jsx)("i",{})]})]}),(0,e.jsx)("footer",{className:"print-footer",children:b.footerText})]})},Ia="https://myshop-backend-8nu7.onrender.com/api",yo=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),ke=t=>{const r=yo(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Ke=t=>new Intl.NumberFormat("fa-IR").format(ke(t)),Ft=t=>`${Ke(t)} تومان`,tn=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Aa=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),jo=t=>{const r=ke(t.totalPrice);return r>0?r:ke(t.quantity)*ke(t.unitPrice)},rn=t=>ke(t.itemsCount)>0?ke(t.itemsCount):Array.isArray(t.items)?t.items.length:0,an=t=>ke(t.totalItems)>0?ke(t.totalItems):Array.isArray(t.items)?t.items.reduce((r,s)=>r+ke(s.quantity),0):0,sn=t=>ke(t.totalAmount)>0?ke(t.totalAmount):Array.isArray(t.items)?t.items.reduce((r,s)=>r+jo(s),0):0,vo=({onSaleRegistered:t,printSettings:r})=>{const[s,c]=(0,a.useState)([]),[b,n]=(0,a.useState)({}),[g,i]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[d,N]=(0,a.useState)(!1),[v,k]=(0,a.useState)(!1),[x,p]=(0,a.useState)([]),[w,o]=(0,a.useState)(""),[$,q]=(0,a.useState)({allowed:!0}),[z,O]=(0,a.useState)(null),[G,P]=(0,a.useState)(!1),S=$.allowed===!1,y=(0,a.useMemo)(()=>({companyName:r?.companyName||"نام شرکت",companySubtitle:r?.companySubtitle||"گزارش اعلام فروش",logoUrl:r?.logoUrl||"",primaryColor:r?.primaryColor||"#0f766e",secondaryColor:r?.secondaryColor||"#ecfdf5",textColor:r?.textColor||"#111827",fontFamily:r?.fontFamily||"Tahoma",headerTitle:r?.headerTitle||"گزارش اعلام فروش",footerText:r?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:r?.showLogo??!0,showCompanyName:r?.showCompanyName??!0,showRepresentativeInfo:r?.showRepresentativeInfo??!0,showReportNumber:r?.showReportNumber??!0,showDate:r?.showDate??!0}),[r]),I=(0,a.useCallback)(A=>{const j=window.open("","_blank","width=900,height=700");if(!j){alert("لطفاً popup blocker را غیرفعال کنید");return}const U=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),Z=Array.isArray(A.items)?A.items:[],B=X=>{const ie=Number(String(X??"").replace(/[۰-۹]/g,he=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(he))).replace(/[٠-٩]/g,he=>String("٠١٢٣٤٥٦٧٨٩".indexOf(he))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(ie)?ie.toLocaleString("fa-IR"):"۰"},pe=X=>`${B(X)} تومان`,ee=Z.map((X,ie)=>`
        <tr>
          <td style="text-align:center;">${ie+1}</td>
          <td>${X.productName||"—"}</td>
          <td style="text-align:center;">${X.brand||X.brandName||"—"}</td>
          <td style="text-align:center;">${X.category||X.categoryName||"—"}</td>
          <td style="text-align:center;">${B(X.unitPrice)} تومان</td>
          <td style="text-align:center;">${B(X.quantity)||"—"}</td>
          <td style="text-align:center;">${B(X.totalPrice??Number(X.quantity||0)*Number(X.unitPrice||0))} تومان</td>
        </tr>`).join(""),re=A.totalItems??Z.length,ne=A.totalAmount??0;j.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ گزارش فروش - ${A.representativeName||""}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 60px; max-width: 200px; }
.company-info h1 { font-size: 18px; margin: 0; color: #0f766e; }
.company-info p { font-size: 12px; color: #555; margin: 2px 0; }
.report-title { text-align: center; margin: 18px 0 12px; }
.report-title h2 { font-size: 22px; margin: 0; color: #0f766e; }
.report-title p { font-size: 12px; color: #666; margin-top: 5px; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
.info-card { border: 1px solid #ddd; border-radius: 8px; padding: 12px 15px; }
.info-card .label { font-size: 11px; color: #6b7280; margin-bottom: 3px; }
.info-card .value { font-size: 14px; font-weight: bold; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ddd; padding: 8px 10px; font-size: 12px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; text-align: center; }
tr:nth-child(even) td { background: #f9fafb; }
.print-summary-section { break-inside: avoid; page-break-inside: avoid; }
.summary { display: flex; gap: 20px; margin-top: 20px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px 25px; text-align: center; min-width: 150px; background: #f9fafb; }
.summary-card .label { font-size: 11px; color: #6b7280; }
.summary-card .value { font-size: 20px; font-weight: bold; margin-top: 5px; color: #0f766e; }
.footer { margin-top: 36px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۱-۹۳۱۱۱۰۲۱</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${U}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش اعلام فروش</h2>
  <p>گزارش فروش نمایندگی ${A.representativeName||""}</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام نمایندگی</div>
    <div class="value">${A.representativeName||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">کد نمایندگی</div>
    <div class="value">${A.representativeCode||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">شهر</div>
    <div class="value">${A.representativeCity||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">تاریخ ثبت</div>
    <div class="value">${A.saleDate||A.saleDateJalali||"—"}</div>
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
    ${ee||'<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:30px;">هیچ کالایی در این گزارش ثبت نشده است.</td></tr>'}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="5" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${B(re)}</strong></td>
        <td style="text-align:center;"><strong>${pe(ne)}</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد اقلام</div>
      <div class="value">${B(re)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع فروش</div>
      <div class="value">${B(ne)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر</p>
  </div>
</div>

</body>
</html>`),j.document.close(),j.focus(),setTimeout(()=>{j.print()},800)},[]),_=(0,a.useCallback)(A=>{const j=window.open("","_blank","width=1000,height=720");if(!j){alert("لطفاً popup blocker را غیرفعال کنید");return}const U=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),Z=re=>{const ne=Number(String(re??"").replace(/[۰-۹]/g,X=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(X))).replace(/[٠-٩]/g,X=>String("٠١٢٣٤٥٦٧٨٩".indexOf(X))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(ne)?ne.toLocaleString("fa-IR"):"۰"},B=A.map((re,ne)=>{const X=(Array.isArray(re.items)?re.items:[]).map(ie=>`
        <tr>
          <td style="text-align:center;">${ne+1}</td>
          <td>${ie.productName||"—"}</td>
          <td style="text-align:center;">${ie.brand||ie.brandName||"—"}</td>
          <td style="text-align:center;">${ie.category||ie.categoryName||"—"}</td>
          <td style="text-align:center;">${Z(ie.unitPrice)} تومان</td>
          <td style="text-align:center;">${Z(ie.quantity)||"—"}</td>
          <td style="text-align:center;">${Z(ie.totalPrice??Number(ie.quantity||0)*Number(ie.unitPrice||0))} تومان</td>
        </tr>`).join("");return`
        <div class="report-card">
          <div class="report-card-header">
            <h3>گزارش فروش ${ne+1} - ${re.representativeName||"—"}</h3>
            <p>کد نمایندگی: ${re.representativeCode||"—"} | شهر: ${re.representativeCity||"—"}</p>
            <p>تاریخ: ${re.saleDate||"—"}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 5%;">ردیف</th>
                <th style="width: 30%;">عنوان</th>
                <th style="width: 12%;">برند</th>
                <th style="width: 13%;">دسته‌بندی</th>
                <th style="width: 12%;">قیمت</th>
                <th style="width: 10%;">تعداد</th>
                <th style="width: 13%;">مجموع</th>
              </tr>
            </thead>
            <tbody>
              ${X||'<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:20px;">هیچ کالایی ثبت نشده است.</td></tr>'}
            </tbody>
          </table>
        </div>
      `}).join(""),pe=A.reduce((re,ne)=>re+Number(ne.totalAmount||0),0),ee=A.reduce((re,ne)=>re+Number(ne.totalItems||0),0);j.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ همه گزارش‌های فروش</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
body { font-family: 'Vazirmatn', Tahoma, Arial, sans-serif; direction: rtl; padding: 20px; background: #fff; color: #111; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 3px solid #0f766e; padding-bottom: 15px; }
.logo { display: flex; align-items: center; gap: 15px; }
.logo img { max-height: 60px; max-width: 200px; }
.company-info h1 { font-size: 18px; margin: 0; color: #0f766e; }
.company-info p { font-size: 12px; color: #555; margin: 2px 0; }
.report-title { text-align: center; margin: 20px 0; }
.report-title h2 { font-size: 22px; margin: 0; color: #0f766e; }
.report-title p { font-size: 12px; color: #666; margin-top: 5px; }
.report-card { margin-top: 30px; page-break-inside: avoid; }
.report-card-header { background: #ecfdf5; padding: 10px; border-radius: 8px; margin-bottom: 10px; }
.report-card-header h3 { margin: 0; font-size: 14px; color: #0f766e; }
.report-card-header p { font-size: 11px; color: #666; margin: 3px 0 0; }
table { width: 100%; border-collapse: collapse; margin-top: 5px; }
th, td { border: 1px solid #ddd; padding: 6px 8px; font-size: 11px; text-align: right; }
th { background: #0f766e !important; color: #fff; font-weight: bold; text-align: center; }
tr:nth-child(even) td { background: #f9fafb; }
.summary { display: flex; gap: 20px; margin-top: 30px; justify-content: space-around; }
.summary-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px 25px; text-align: center; min-width: 150px; background: #f9fafb; }
.summary-card .label { font-size: 11px; color: #6b7280; }
.summary-card .value { font-size: 18px; font-weight: bold; margin-top: 5px; color: #0f766e; }
.footer { margin-top: 40px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
@media print { @page { size: A4 portrait; margin: 10mm; } body { padding: 0; } .report-card { page-break-after: always; } .report-card:last-child { page-break-after: auto; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">
    <img src="https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png" alt="لوگو" onerror="this.style.display='none'" />
    <div class="company-info">
      <h1>هلدینگ مهر</h1>
      <p>سامانه مدیریت نمایندگی و انبار</p>
      <p>تلفن: ۰۲۱-۹۳۱۱۱۰۲۱</p>
    </div>
  </div>
  <div style="font-size: 12px; text-align: left;">
    <p><strong>تاریخ چاپ:</strong> ${U}</p>
    <p><strong>تعداد گزارش‌ها:</strong> ${Z(A.length)}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش جامع اعلام فروش</h2>
  <p>گزارش همه‌ی فروش‌های ثبت‌شده</p>
</div>

${B}

<div class="summary">
  <div class="summary-card">
    <div class="label">تعداد گزارش‌ها</div>
    <div class="value">${Z(A.length)}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع اقلام</div>
    <div class="value">${Z(ee)}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع فروش</div>
    <div class="value">${Z(pe)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>هلدینگ مهر</p>
</div>

</body>
</html>`),j.document.close(),j.focus(),setTimeout(()=>{j.print()},800)},[]),T=(0,a.useCallback)(async()=>{h(!0);try{const A=await xe.get(`${Ia}/sales-from-warehouse/products`,{headers:Aa()}),j=Array.isArray(A.data.data)?A.data.data:[];c(j),q(A.data.salesPeriod||{allowed:!0}),n(U=>{const Z={};return j.forEach(B=>{const pe=String(B.productId||B.id||"");Z[pe]=U[pe]||""}),Z})}catch(A){const j=A;c([]),o(`❌ ${j.response?.data?.error||j.response?.data?.message||"خطا در دریافت موجودی انبار."}`)}finally{h(!1)}},[]),V=(0,a.useCallback)(async()=>{N(!0);try{const A=await xe.get(`${Ia}/sales-from-warehouse/my`,{headers:Aa()});p(Array.isArray(A.data.data)?A.data.data:[]),q(A.data.salesPeriod||{allowed:!0})}catch(A){const j=A;o(`❌ ${j.response?.data?.error||j.response?.data?.message||"خطا در دریافت تاریخچه فروش."}`)}finally{N(!1)}},[]);(0,a.useEffect)(()=>{T(),V()},[T,V]);const Q=(0,a.useMemo)(()=>s.map(A=>{const j=String(A.productId||A.id||""),U=ke(b[j]||0);return{product:A,productId:j,saleQuantity:U,totalAmount:U*ke(A.unitPrice)}}).filter(A=>A.saleQuantity>0),[s,b]),C=Q.length,F=Q.reduce((A,j)=>A+j.saleQuantity,0),f=Q.reduce((A,j)=>A+j.totalAmount,0),m=(A,j)=>{if(S){o(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`);return}const U=String(A.productId||A.id||""),Z=ke(b[U]||0),B=ke(A.quantity);if(j>0&&Z>=B){o(`❌ تعداد «${A.productName}» نمی‌تواند بیشتر از موجودی (${Ke(B)}) باشد.`);return}const pe=Math.max(0,Math.min(B,Z+j));n(ee=>({...ee,[U]:pe>0?String(pe):""})),o("")},L=async A=>{if(A.preventDefault(),S){o(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`);return}if(Q.length===0){o("❌ حداقل برای یک کالا تعداد بیشتر از صفر وارد کنید.");return}if(!g){o("❌ برای ثبت فروش باید تأیید صحت اطلاعات را فعال کنید.");return}try{k(!0),o("");const j=await xe.post(`${Ia}/sales-from-warehouse`,{confirmedSale:!0,items:Q.map(U=>({productId:U.productId,productName:U.product.productName,brand:U.product.brand,category:U.product.category,quantity:U.saleQuantity}))},{headers:Aa()});j.data.data&&p(U=>[j.data.data,...U]),q(j.data.salesPeriod||{allowed:!0}),j.data.warehouse?c(j.data.warehouse.filter(U=>ke(U.quantity)>0)):await T(),n({}),i(!1),o(`✅ ${j.data.message||"فروش با موفقیت ثبت شد و موجودی انبار به‌روزرسانی شد."}`),await V(),t?.()}catch(j){const U=j;U.response?.data?.salesPeriod&&q(U.response.data.salesPeriod),o(`❌ ${U.response?.data?.error||U.response?.data?.message||"خطا در ثبت اعلام فروش."}`)}finally{k(!1)}},W=()=>`ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"sales-announcement-page space-y-6",children:[(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(wn,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"ثبت اعلام فروش از انبار"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-7 text-gray-500 dark:text-gray-400",children:"فقط کالاهای واقعی موجود در انبار شما نمایش داده می‌شوند."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Promise.all([T(),V()])},disabled:u||d,className:"inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Ue,{className:`h-4 w-4 ${u||d?"animate-spin":""}`}),"بروزرسانی"]})]})}),(0,e.jsxs)("form",{onSubmit:L,className:"p-5 md:p-6",children:[S?(0,e.jsx)("div",{className:"mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black text-amber-900 dark:text-amber-100",children:"ثبت اعلام فروش فعلاً غیرفعال است"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200",children:W()})]})]})}):null,u?(0,e.jsx)("div",{className:"flex min-h-48 items-center justify-center",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(ue,{className:"mx-auto h-8 w-8 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"در حال دریافت کالاهای انبار..."})]})}):s.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(Xt,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"کالای قابل فروش در انبار شما وجود ندارد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:s.map(A=>{const j=String(A.productId||A.id||""),U=ke(b[j]||0),Z=ke(A.quantity),B=U*ke(A.unitPrice);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:A.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-2.5 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"موجودی"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Ke(A.quantity)," ","قلم"]})]}),(0,e.jsx)("div",{className:"rounded-xl bg-indigo-50 p-2.5 text-center dark:bg-indigo-950/30",children:(0,e.jsx)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:Ft(A.unitPrice)})})]}),(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{m(A,1)},disabled:v||S||U>=Z,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(Nr,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Ke(U)}),(0,e.jsx)("button",{type:"button",onClick:()=>{m(A,-1)},disabled:v||S||U<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(xs,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-0.5 font-black text-emerald-900 dark:text-emerald-100",children:Ft(B)})]})]})]},j)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto rounded-2xl border border-gray-100 lg:block dark:border-gray-700",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"موجودی انبار"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ فروش"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:s.map(A=>{const j=String(A.productId||A.id||""),U=ke(b[j]||0),Z=ke(A.quantity),B=U*ke(A.unitPrice);return(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-gray-800 dark:text-white",children:A.productName}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Ke(A.quantity)," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-gray-600 dark:text-gray-300",children:Ft(A.unitPrice)}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("div",{className:"flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{m(A,1)},disabled:v||S||U>=Z,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(Nr,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Ke(U)}),(0,e.jsx)("button",{type:"button",onClick:()=>{m(A,-1)},disabled:v||S||U<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(xs,{className:"h-5 w-5"})})]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Ft(B)})]},j)})})]})}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"کالاهای انتخاب‌شده"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-indigo-900 dark:text-indigo-100",children:[Ke(C)," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-amber-900 dark:text-amber-100",children:[Ke(F)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-emerald-900 dark:text-emerald-100",children:Ft(f)})]})]}),(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("label",{className:"flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("input",{type:"checkbox",checked:g,onChange:A=>{i(A.target.checked),o("")},disabled:v||S,className:"mt-0.5 h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"}),(0,e.jsx)("span",{className:"leading-6",children:"تعداد کالاهای فروخته‌شده را تأیید می‌کنم. پس از ثبت، موجودی کالاها از انبار من کم می‌شود."})]}),(0,e.jsx)("button",{type:"submit",disabled:v||S||Q.length===0||!g,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-700 sm:w-auto",children:v?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}),"در حال ثبت..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ya,{className:"h-5 w-5"}),"ثبت نهایی"]})})]})]}),w?(0,e.jsx)("div",{className:`mt-5 rounded-xl px-4 py-3 text-sm font-bold ${w.startsWith("✅")?"bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300":"bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300"}`,children:w}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)(Ge,{className:"h-6 w-6 text-emerald-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"تاریخچه اعلام فروش من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"گزارش‌های ثبت‌شده از طریق سرور"})]})]}),x.length>0?(0,e.jsxs)("button",{type:"button",onClick:()=>{_(x)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ همه گزارش‌ها"]}):null]})}),d?(0,e.jsx)("div",{className:"flex min-h-[180px] items-center justify-center",children:(0,e.jsx)(ue,{className:"h-7 w-7 animate-spin text-cyan-500"})}):x.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(Ge,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز اعلام فروشی ثبت نکرده‌اید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-5 lg:hidden",children:x.map(A=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:tn(A.createdAt||A.saleDate)})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{I(A)},className:"inline-flex shrink-0 items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-indigo-50 p-3 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"تعداد نوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:[Ke(rn(A))," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Ke(an(A))," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 font-black text-emerald-900 dark:text-emerald-100",children:Ft(sn(A))})]})]})]},A.id))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto lg:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد نوع کالا"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:x.map(A=>(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-600 dark:text-gray-300",children:tn(A.createdAt||A.saleDate)}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-indigo-700 dark:text-indigo-300",children:[Ke(rn(A))," ","کالا"]}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Ke(an(A))," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Ft(sn(A))}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{I(A)},className:"inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]})})]},A.id))})]})})]})]})]}),z?(0,e.jsx)(Zs,{report:z,settings:y,onClose:()=>{O(null)}}):null,G?(0,e.jsx)(Zs,{reports:x,settings:y,onClose:()=>{P(!1)}}):null]})},Or="https://myshop-backend-8nu7.onrender.com/api",ko=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),st=t=>{const r=ko(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},No=t=>new Intl.NumberFormat("fa-IR").format(st(t)),wo=t=>`${No(t)} تومان`,Da=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),So=(t,r)=>{const s=st(t?.quantity),c=st(t?.unitPrice);return{id:String(t?.id||t?.productId||`inventory-item-${r}`),title:t?.productName||t?.title||t?.name||"بدون عنوان",brand:t?.brand||"",category:t?.category||"",quantity:s,unitPrice:c,totalPrice:t?.totalPrice!==void 0?st(t.totalPrice):s*c}},Co=(t,r)=>({id:String(t?.id||`shipment-${r}`),title:t?.receiver||t?.warehouse||"ارسال بار",quantity:st(t?.totalItems??t?.itemsCount),amount:st(t?.totalItems),createdAt:t?.createdAt||t?.updatedAt||void 0}),$o=({activeSection:t})=>{const[r,s]=(0,a.useState)({}),[c,b]=(0,a.useState)([]),[n,g]=(0,a.useState)(!0),[i,u]=(0,a.useState)(!1),[h,d]=(0,a.useState)(""),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)(!1),p=(0,a.useCallback)(async()=>{g(!0),d("");try{const I=await xe.get(`${Or}/representative/dashboard`,{headers:Da()});s(I.data.data||{})}catch(I){d(I.response?.data?.error||I.response?.data?.message||"خطا در دریافت اطلاعات داشبورد نمایندگی.")}finally{g(!1)}},[]),w=(0,a.useCallback)(async()=>{u(!0);try{const I=await xe.get(`${Or}/return-requests/my`,{headers:Da()});b(Array.isArray(I.data.data)?I.data.data:[])}catch(I){d(I.response?.data?.error||I.response?.data?.message||"خطا در دریافت درخواست‌های مرجوعی.")}finally{u(!1)}},[]),o=(0,a.useCallback)(async()=>{x(!0);try{const I=await xe.get(`${Or}/sales-from-warehouse/my`,{headers:Da()});v(Array.isArray(I.data.data)?I.data.data:[])}catch(I){console.error("خطا در دریافت فروش‌ها:",I),v([])}finally{x(!1)}},[]);(0,a.useEffect)(()=>{p()},[p]),(0,a.useEffect)(()=>{o()},[o]),(0,a.useEffect)(()=>{t==="return-request"&&w()},[t,w]);const $=(0,a.useMemo)(()=>(Array.isArray(r.warehouse?.items)?r.warehouse?.items:[]).map(So),[r.warehouse?.items]),q=(0,a.useMemo)(()=>(Array.isArray(r.shipments)?r.shipments:[]).map(Co),[r.shipments]),z=(0,a.useMemo)(()=>$.reduce((I,_)=>I+st(_.quantity),0),[$]),O=(0,a.useMemo)(()=>$.reduce((I,_)=>I+st(_.totalPrice),0),[$]),G=(0,a.useMemo)(()=>{const I=new Date,_=new Date(I);return _.setDate(_.getDate()-9),N.filter(T=>{const V=T.createdAt?new Date(T.createdAt):null;return V?V>=_&&V<=I:!1}).reduce((T,V)=>T+st(V.totalAmount),0)},[N]),P=(0,a.useMemo)(()=>{const I=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit"}).formatToParts(new Date),_=`${I.find(T=>T.type==="year")?.value||""}/${I.find(T=>T.type==="month")?.value||""}`;return N.filter(T=>{const V=String(T.saleDate||"");if(!V)return!1;const Q=V.split("/");if(Q.length<3)return!1;const C=Q[0],F=Q[1],f=parseInt(Q[2],10);return`${C}/${F}`!==_?!1:[10,20,30].includes(f)}).reduce((T,V)=>T+st(V.totalAmount),0)},[N]),S=r.representative||{},y=st(S.totalFinancialCommitment);if(t==="my-shipments"){const I=sessionStorage.getItem("token")||sessionStorage.getItem("accessToken")||sessionStorage.getItem("authToken")||"";return(0,e.jsx)(ao,{apiUrl:Or,token:I})}return n?(0,e.jsx)("div",{className:"flex min-h-[320px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(ue,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اطلاعات نمایندگی..."})]})}):h&&t!=="return-request"&&t!=="sales-reports"?(0,e.jsxs)("div",{className:"rounded-3xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/20",children:[(0,e.jsx)("p",{className:"font-black text-red-700 dark:text-red-300",children:h}),(0,e.jsxs)("button",{type:"button",onClick:()=>{p()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):t==="dashboard"?(0,e.jsx)(Yi,{fullName:S.name||"—",territory:S.city||"—",creditAmount:y,inventoryItemCount:z,inventoryValue:O,salesLast10Days:G,salesInAllowedDays:P}):t==="orders"?(0,e.jsx)(no,{orders:q}):t==="warehouse"?(0,e.jsx)(eo,{items:$,representativeName:S.name||"",representativeCity:S.city||"",representativePhone:S.phone||"",representativeAddress:S.city||""}):t==="return-request"?(0,e.jsx)(go,{requests:c,loading:i,errorMessage:h,onRefresh:()=>{w()},onRequestCreated:I=>{b(_=>[I,..._])}}):t==="sales-reports"?(0,e.jsx)(vo,{onSaleRegistered:()=>{p()}}):t==="profile"?(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Pl,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"پروفایل نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات ثبت‌شده توسط مدیریت سیستم"})]})]})}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نام و نام خانوادگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.name||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.code||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"محدوده نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.city||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"شماره تماس"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.phone||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعهد مالی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-600 dark:text-emerald-400",children:wo(y)})]})]})]}):(0,e.jsxs)("section",{className:"rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(Xt,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"بخش موردنظر پیدا نشد."})]})},Io="https://myshop-backend-8nu7.onrender.com/api",Ao=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",nn=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Do=t=>{switch(t){case"approved":return{label:"تأیید شده",color:"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",icon:Ne};case"rejected":return{label:"رد شده",color:"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",icon:Ce};default:return{label:"در انتظار بررسی",color:"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",icon:Sn}}},To=()=>{const[t,r]=(0,a.useState)([]),[s,c]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),g=(0,a.useCallback)(async()=>{c(!0),n("");try{const i=Ao();if(!i){n("توکن ورود پیدا نشد. دوباره وارد شوید.");return}const u=await fetch(`${Io}/warranties/my`,{method:"GET",headers:{Authorization:`Bearer ${i}`,Accept:"application/json"}}),h=await u.json();if(!u.ok||!h.success)throw new Error(h.error||"دریافت گارانتی‌ها ناموفق بود.");r(h.data||[])}catch(i){n(i instanceof Error?i.message:"خطا در دریافت گارانتی‌ها.")}finally{c(!1)}},[]);return(0,a.useEffect)(()=>{g()},[g]),s?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(ue,{className:"h-8 w-8 animate-spin text-sky-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-slate-600 dark:text-slate-300",children:"در حال دریافت گارانتی‌های شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-slate-100 pb-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-white",children:[(0,e.jsx)(Qa,{className:"h-5 w-5 text-sky-600"}),"گارانتی‌های ثبت‌شده من"]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-slate-500 dark:text-slate-400",children:[t.length," درخواست گارانتی ثبت شده"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void g(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),b?(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(ze,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:b})]}):null,!b&&t.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center dark:border-slate-700 dark:bg-slate-800/40",children:[(0,e.jsx)(gt,{className:"mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:"هنوز درخواست گارانتی ثبت نکرده‌اید."}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-400",children:"با استفاده از فرم بالا، اولین درخواست گارانتی خود را ثبت کنید."})]}):null,!b&&t.length>0?(0,e.jsx)("div",{className:"space-y-3",children:t.map(i=>{const u=Do(i.status),h=u.icon;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 p-3 dark:border-slate-700 sm:p-4",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:["کد پیگیری:"," ",(0,e.jsx)("span",{className:"font-black text-slate-700 dark:text-slate-200",children:i.trackingCode||i.id})]}),(0,e.jsx)("h4",{className:"mt-1 text-sm font-black text-slate-800 dark:text-white sm:text-base",children:i.productName})]}),(0,e.jsxs)("span",{className:`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black sm:text-xs ${u.color}`,children:[(0,e.jsx)(h,{className:"h-3.5 w-3.5"}),u.label]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:i.customerName})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"موبایل"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",dir:"ltr",children:i.customerPhone})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:[i.quantity," عدد"]})]})]}),i.issueDescription?(0,e.jsxs)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-500 sm:text-xs",children:"شرح مشکل:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-600 dark:text-slate-300 sm:text-sm",children:i.issueDescription})]}):null,i.adminNote?(0,e.jsxs)("div",{className:"border-t border-slate-100 bg-amber-50 px-3 py-2 dark:border-slate-700 dark:bg-amber-950/20 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-amber-700 dark:text-amber-300 sm:text-xs",children:"یادداشت ادمین:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-amber-800 dark:text-amber-200 sm:text-sm",children:i.adminNote})]}):null,(0,e.jsx)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:(0,e.jsxs)("p",{className:"text-[10px] text-slate-400 sm:text-xs",children:["ثبت: ",nn(i.createdAt),i.decidedAt?` · تصمیم: ${nn(i.decidedAt)}`:""]})})]},i.id)})}):null]})},Ta="https://myshop-backend-8nu7.onrender.com/api",Ra=Ta.endsWith("/api")?Ta.slice(0,-4):Ta,Ea=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",ln=new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(new Date),Ro=t=>{const r=Number(t)||0;return r?`${r.toLocaleString("fa-IR")} تومان`:"—"},Eo=()=>{const t=(0,a.useRef)(null),[r,s]=(0,a.useState)(""),[c,b]=(0,a.useState)(""),[n,g]=(0,a.useState)(""),[i,u]=(0,a.useState)(1),[h,d]=(0,a.useState)(""),[N,v]=(0,a.useState)(null),[k,x]=(0,a.useState)(""),[p,w]=(0,a.useState)(null),[o,$]=(0,a.useState)(!1),[q,z]=(0,a.useState)(null),[O,G]=(0,a.useState)(null),[P,S]=(0,a.useState)(!1),[y,I]=(0,a.useState)(""),[_,T]=(0,a.useState)(null),[V,Q]=(0,a.useState)(null),[C,F]=(0,a.useState)(!1),[f,m]=(0,a.useState)(null),[L,W]=(0,a.useState)(null),A=(0,a.useRef)(null),[j,U]=(0,a.useState)(null),[Z,B]=(0,a.useState)([]),[pe,ee]=(0,a.useState)(!0),[re,ne]=(0,a.useState)(null),X=(0,a.useMemo)(()=>Z.find(te=>te.productId===n)||null,[n,Z]),ie=async()=>{try{ee(!0),ne(null);const te=Ea(),oe=await fetch(`${Ra}/api/warranties/form-data`,{headers:{Authorization:`Bearer ${te}`,Accept:"application/json"}}),D=await oe.json();if(!oe.ok||!D.success||!D.data)throw new Error(D.error||"خطا در دریافت اطلاعات فرم گارانتی.");U(D.data.representative),B(Array.isArray(D.data.products)?D.data.products:[])}catch(te){console.error("خطا در دریافت داده‌های فرم گارانتی:",te),ne(te instanceof Error?te.message:"خطا در ارتباط با سرور.")}finally{ee(!1)}};(0,a.useEffect)(()=>{ie()},[]);const he=te=>{const oe=te.target.files?.[0];if(!oe)return;if(oe.size>5242880){alert("حجم فایل باید حداکثر ۵ مگابایت باشد.");return}const D=new FileReader;D.onload=()=>{v(String(D.result||"")),x(oe.name),w(oe),z(null)},D.readAsDataURL(oe)},R=()=>{v(null),x(""),w(null),t.current&&(t.current.value="")},H=te=>{const oe=te.target.value;g(oe),u(1)},ae=async te=>{te.preventDefault(),$(!0),z(null),G(null);try{const oe=Ea();if(!oe)throw new Error("توکن ورود پیدا نشد.");if(!X)throw new Error("محصولی انتخاب نشده است.");const D=new FormData;if(D.append("customerName",r.trim()),D.append("customerPhone",c.replace(/[\s-]/g,"")),D.append("productId",X.productId),D.append("quantity",String(i)),D.append("issueDescription","ثبت گارانتی اولیه - بدون شرح مشکل"),!p)throw new Error("فایلی انتخاب نشده است.");D.append("image",p,p.name);const Y=await(await fetch(`${Ra}/api/warranties`,{method:"POST",headers:{Authorization:`Bearer ${oe}`,Accept:"application/json"},body:D})).json();if(!Y.success)throw new Error(Y.error||"خطا در ثبت");G("درخواست با موفقیت ثبت شد."),s(""),b(""),g(""),u(1),d(""),R(),await ie()}catch(oe){z(oe?.message||"خطا")}finally{$(!1)}},l=te=>{const oe=te.target.files?.[0];if(!oe)return;T(oe),m(null);const D=new FileReader;D.onload=Y=>{Q(Y.target?.result)},D.readAsDataURL(oe)},E=()=>{T(null),Q(null),A.current&&(A.current.value="")},J=()=>{S(!0),I(""),T(null),Q(null),m(null),W(null)},me=()=>{C||(S(!1),I(""),T(null),Q(null),m(null),W(null))},fe=async()=>{if(m(null),W(null),y.trim().length<10){m("شرح مشکل باید حداقل ۱۰ کاراکتر باشد.");return}if(!_){m("عکس محصول الزامی است.");return}F(!0);try{const te=Ea();if(!te)throw new Error("توکن ورود پیدا نشد.");const oe=new FormData;oe.append("issueDescription",y.trim()),oe.append("image",_,_.name),oe.append("useWarranty","true");const D=await(await fetch(`${Ra}/api/warranties/use`,{method:"POST",headers:{Authorization:`Bearer ${te}`,Accept:"application/json"},body:oe})).json();if(!D.success)throw new Error(D.error||"خطا در ثبت درخواست");W("درخواست استفاده از گارانتی با موفقیت ثبت شد."),I(""),E(),setTimeout(()=>{S(!1),W(null)},2500)}catch(te){m(te?.message||"خطا")}finally{F(!1)}};return pe?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[420px] items-center justify-center rounded-2xl border border-sky-100 bg-white",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3 text-center",children:[(0,e.jsx)(ue,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600",children:"در حال دریافت اطلاعات انبار و کد نمایندگی..."})]})}):re?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)(ze,{className:"mx-auto h-10 w-10 text-red-500"}),(0,e.jsx)("p",{className:"mt-3 font-black text-red-700",children:"دریافت اطلاعات گارانتی ناموفق بود"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600",children:re}),(0,e.jsx)("button",{type:"button",onClick:()=>{ie()},className:"mt-5 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:"تلاش مجدد"})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 pb-8",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-sky-700 via-cyan-600 to-teal-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl"}),(0,e.jsx)("div",{className:"absolute -bottom-16 right-24 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(at,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"سامانه خدمات پس از فروش"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"استفاده از گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm font-medium leading-7 text-sky-50 md:text-base",children:"اطلاعات مشتری، کالای موجود در انبار و تصویر خرابی را ثبت کنید تا درخواست شما برای بررسی ارسال شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(ot,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"text-sm font-black",children:ln})]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(at,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"text-sm font-black",children:j?.code||"ثبت نشده"})]})]})]})]})]}),(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"min-w-full text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-50 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"مرحله"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"کاری که باید انجام دهید"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"نکته مهم"})]})}),(0,e.jsxs)("tbody",{className:"divide-y divide-slate-100 text-sm text-slate-700",children:[(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۱"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"اطلاعات مشتری و محصول را ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"محصول فقط از موجودی انبار اختصاصی نمایندگی شما انتخاب می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۲"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"مشکل کالا را دقیق توضیح دهید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"شرح کامل خرابی باعث بررسی سریع‌تر درخواست می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۳"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"فایل (عکس) از کالا یا خرابی ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"در موبایل، دوربین پشت گوشی برای ثبت فایل باز می‌شود. هر نام و پسوندی قابل قبول است."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۴"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"درخواست را برای بررسی ارسال کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"وضعیت اولیه تمام درخواست‌ها «در انتظار بررسی» است."})]})]})]})})]}),(0,e.jsxs)("form",{onSubmit:ae,noValidate:!0,className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(Sr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"فرم ثبت درخواست گارانتی"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-medium text-slate-500",children:"همه فیلدهای دارای علامت * الزامی هستند."})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsx)("span",{className:"w-fit rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700",children:"وضعیت پس از ثبت: در انتظار بررسی"}),(0,e.jsxs)("button",{type:"button",onClick:J,className:"inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-emerald-600 to-teal-500 px-4 py-1.5 text-xs font-black text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0",children:[(0,e.jsx)(at,{className:"h-4 w-4"}),"استفاده از گارانتی"]})]})]}),(0,e.jsxs)("div",{className:"p-5 md:p-7",children:[q?(0,e.jsxs)("div",{className:"mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black",children:"ثبت درخواست ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:q})]})]}):null,O?(0,e.jsx)("div",{className:"mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Ne,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"font-black",children:"درخواست گارانتی ثبت شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:O})]})]})}):null,(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Dt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات مشتری و نمایندگی"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["نام مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(Dt,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"text",value:r,onChange:te=>{s(te.target.value)},placeholder:"مثال: علی رضایی",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["شماره موبایل مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ea,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"tel",inputMode:"numeric",dir:"ltr",value:c,onChange:te=>{b(te.target.value)},placeholder:"021-93111021",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-left text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"کد نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 text-sky-800",children:[(0,e.jsx)(at,{className:"h-4 w-4 shrink-0 text-sky-600"}),(0,e.jsx)("span",{dir:"ltr",className:"text-sm font-black",children:j?.code||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"نام نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(Dt,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:j?.name||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"شهر نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)($t,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:j?.city||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"تاریخ درخواست"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(ot,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:ln})]})]})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Kr,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات کالا"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["انتخاب محصول از انبار"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(Kr,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsxs)("select",{value:n,onChange:H,className:"w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-10 text-sm font-medium text-slate-800 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"",children:"انتخاب محصول موجود در انبار"}),Z.map(te=>(0,e.jsxs)("option",{value:te.productId,children:[te.productName," — ",te.brand||"بدون برند"," — موجودی: ",te.quantity]},te.warehouseItemId))]}),(0,e.jsx)(ta,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),Z.length===0?(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-600",children:"کالای دارای موجودی در انبار شما پیدا نشد."}):null]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["تعداد"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("input",{type:"number",min:"1",max:X?.quantity||1,value:i,disabled:!X,onChange:te=>{u(Number(te.target.value)||1)},className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-800 outline-none transition-all disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{className:"mt-4 grid gap-4 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:X?.brand||"پس از انتخاب محصول"})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"موجودی قابل ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:X?`${X.quantity} عدد`:"—"})]}),(0,e.jsx)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:X?Ro(X.unitPrice):"—"})})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)(la,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"عکس کارت گارانتی"}),(0,e.jsx)("span",{className:"text-sm font-bold text-rose-500",children:"*"})]}),(0,e.jsx)("input",{ref:t,type:"file",accept:"*/*",capture:"environment",onChange:he,className:"hidden"}),N?(0,e.jsx)("div",{className:"relative overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 p-3",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[(0,e.jsx)("img",{src:N,alt:"پیش‌نمایش فایل گارانتی",className:"h-44 w-full rounded-xl object-cover sm:w-56"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-emerald-700",children:[(0,e.jsx)(Ne,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("p",{className:"font-black",children:"فایل آمادهٔ ارسال است"})]}),(0,e.jsx)("p",{className:"mt-2 truncate text-sm font-medium text-slate-600",children:k}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-slate-500",children:"پیش از ثبت نهایی، از واضح بودن عکس و مشخص بودن خرابی اطمینان بگیرید."}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"inline-flex items-center gap-2 rounded-lg border border-sky-300 bg-white px-3 py-2 text-xs font-bold text-sky-700 transition-colors hover:bg-sky-50",children:[(0,e.jsx)(la,{className:"h-4 w-4"}),"تغییر فایل"]}),(0,e.jsxs)("button",{type:"button",onClick:R,className:"inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-50",children:[(0,e.jsx)(Ce,{className:"h-4 w-4"}),"حذف فایل"]})]})]})]})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"group flex min-h-44 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/60 px-5 py-7 text-center transition-all hover:border-sky-500 hover:bg-sky-50",children:[(0,e.jsx)("span",{className:"mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm transition-transform group-hover:scale-110",children:(0,e.jsx)(us,{className:"h-7 w-7"})}),(0,e.jsx)("span",{className:"font-black text-sky-800",children:"گرفتن عکس با دوربین یا انتخاب فایل"}),(0,e.jsx)("span",{className:"mt-2 max-w-md text-xs font-medium leading-6 text-slate-500",children:"در تلفن همراه دوربین پشت گوشی باز می‌شود. هر نام و پسوندی قابل قبول است؛ فقط حجم فایل باید حداکثر ۵ مگابایت باشد."})]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("p",{className:"flex items-center gap-2 text-xs font-medium text-slate-500",children:[(0,e.jsx)(at,{className:"h-4 w-4 text-sky-600"}),"کد نمایندگی و محصول از اطلاعات واقعی حساب و انبار شما دریافت شده‌اند."]}),(0,e.jsx)("button",{type:"submit",disabled:o,className:"inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-sky-700 to-cyan-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:from-sky-800 hover:to-cyan-700 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}),"در حال ثبت درخواست..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(at,{className:"h-5 w-5"}),"ثبت نهایی درخواست گارانتی"]})})]})]})]}),(0,e.jsx)("div",{className:"mt-6",children:(0,e.jsx)(To,{})}),P?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm",onClick:me,children:(0,e.jsxs)("div",{className:"max-h-[92vh] w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl",onClick:te=>{te.stopPropagation()},children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-emerald-100 bg-gradient-to-l from-emerald-50 to-teal-50 p-5",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white",children:(0,e.jsx)(at,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"استفاده از گارانتی"}),(0,e.jsx)("p",{className:"text-xs text-slate-500",children:"شرح مشکل و عکس محصول را ثبت کنید"})]})]}),(0,e.jsx)("button",{type:"button",onClick:me,disabled:C,className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"max-h-[calc(92vh-180px)] overflow-y-auto p-5",children:L?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10 text-center",children:[(0,e.jsx)("div",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100",children:(0,e.jsx)(Ne,{className:"h-9 w-9 text-emerald-600"})}),(0,e.jsx)("p",{className:"mt-4 font-black text-emerald-700",children:L})]}):(0,e.jsxs)(e.Fragment,{children:[f?(0,e.jsxs)("div",{className:"mb-4 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-5 w-5 shrink-0"}),(0,e.jsx)("p",{className:"text-sm font-medium",children:f})]}):null,(0,e.jsxs)("div",{className:"mb-5",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-bold text-slate-700",children:[(0,e.jsx)(ze,{className:"h-4 w-4 text-emerald-600"}),"شرح مشکل محصول",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("textarea",{rows:4,value:y,onChange:te=>{I(te.target.value)},placeholder:"مشکل محصول را با جزئیات توضیح دهید؛ مثال: نشتی از محل اتصال، شکستگی بدنه، عملکرد نادرست...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-medium text-slate-400",children:"حداقل ۱۰ کاراکتر وارد کنید."})]}),(0,e.jsxs)("div",{className:"mb-2",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)(la,{className:"h-5 w-5 text-emerald-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"عکس محصول (خرابی)"}),(0,e.jsx)("span",{className:"text-sm font-bold text-rose-500",children:"*"})]}),(0,e.jsx)("input",{ref:A,type:"file",accept:"image/*",capture:"environment",onChange:l,className:"hidden"}),V?(0,e.jsx)("div",{className:"relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-3",children:(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center",children:[(0,e.jsx)("img",{src:V,alt:"عکس محصول",className:"h-32 w-full max-w-[180px] rounded-xl object-cover"}),(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"text-sm font-black text-slate-700",children:"عکس انتخاب شد"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500",children:_?.name})]}),(0,e.jsx)("button",{type:"button",onClick:E,className:"flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600 transition hover:bg-rose-200",children:(0,e.jsx)(Ce,{className:"h-4 w-4"})})]})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{A.current?.click()},className:"group flex min-h-40 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/60 px-5 py-6 text-center transition-all hover:border-emerald-500 hover:bg-emerald-50",children:[(0,e.jsx)("span",{className:"mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm transition-transform group-hover:scale-110",children:(0,e.jsx)(us,{className:"h-6 w-6"})}),(0,e.jsx)("span",{className:"font-black text-emerald-800",children:"گرفتن عکس یا انتخاب فایل"}),(0,e.jsx)("span",{className:"mt-2 max-w-md text-xs font-medium leading-6 text-slate-500",children:"عکس واضح از محصول و خرابی آن را آپلود کنید. حداکثر حجم ۵ مگابایت."})]})]})]})}),L?null:(0,e.jsxs)("div",{className:"flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50 p-4",children:[(0,e.jsx)("button",{type:"button",onClick:me,disabled:C,className:"rounded-xl bg-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-300 disabled:opacity-50",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:fe,disabled:C||y.trim().length<10||!_,className:"inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-600 to-teal-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0",children:C?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ue,{className:"h-4 w-4 animate-spin"}),"در حال ثبت..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(at,{className:"h-4 w-4"}),"ثبت درخواست"]})})]})]})}):null]})},Pa="https://myshop-backend-8nu7.onrender.com/api",Wa=Pa.endsWith("/api")?Pa.slice(0,-4):Pa,on=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",dn=t=>t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")?t:`${Wa}${t}`:"",br=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(r)},Po={pending:{label:"در انتظار بررسی",className:"border-amber-200 bg-amber-50 text-amber-700",icon:Ka},approved:{label:"تأیید شده",className:"border-emerald-200 bg-emerald-50 text-emerald-700",icon:Ne},rejected:{label:"رد شده",className:"border-rose-200 bg-rose-50 text-rose-700",icon:it}},za=({status:t})=>{const r=Po[t],s=r.icon;return(0,e.jsxs)("span",{className:["inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-lg border px-2 py-1.5 text-[10px] font-black sm:px-2.5 sm:text-xs",r.className].join(" "),children:[(0,e.jsx)(s,{className:"h-3.5 w-3.5 shrink-0"}),r.label]})},zo=({warranty:t})=>t.status!=="approved"?null:t.smsStatus==="sent"?(0,e.jsx)("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Ne,{className:"mt-0.5 h-6 w-6 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-emerald-900",children:"پیامک تأیید گارانتی ارسال شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-emerald-800",children:"پیامک اطلاع‌رسانی تأیید گارانتی برای مشتری ارسال شده است."}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:["زمان ارسال:"," ",br(t.smsSentAt)]})]})]})}):t.smsStatus==="sending"?(0,e.jsx)("div",{className:"rounded-2xl border border-sky-200 bg-sky-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ue,{className:"mt-0.5 h-6 w-6 shrink-0 animate-spin text-sky-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-sky-900",children:"در حال ارسال پیامک"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-sky-800",children:"درخواست تأیید شده و وضعیت ارسال پیامک در حال بررسی است."})]})]})}):t.smsStatus==="skipped"?(0,e.jsx)("div",{className:"rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Ka,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"پیامک ارسال نشد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-amber-800",children:"گارانتی تأیید شده است، اما پیامک برای مشتری ارسال نشد."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-amber-700",children:["دلیل: ",t.smsError]}):null]})]})}):t.smsStatus==="failed"?(0,e.jsx)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-6 w-6 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-rose-900",children:"ارسال پیامک ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-rose-800",children:"گارانتی تأیید و موجودی انبار کم شده است، اما سامانه پیامک پاسخ موفق نداده است."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-rose-700",children:["خطا: ",t.smsError]}):null]})]})}):(0,e.jsx)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(ea,{className:"mt-0.5 h-6 w-6 shrink-0 text-slate-500"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"وضعیت پیامک گارانتی ثبت نشده است"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-slate-600",children:"این درخواست ممکن است پیش از فعال‌شدن پیامک گارانتی تأیید شده باشد."})]})]})}),Mo=()=>{const[t,r]=(0,a.useState)([]),[s,c]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,i]=(0,a.useState)(""),[u,h]=(0,a.useState)("all"),[d,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(""),[x,p]=(0,a.useState)(null),[w,o]=(0,a.useState)(null),[$,q]=(0,a.useState)(null),[z,O]=(0,a.useState)(!1),G=async()=>{try{c(!0),n(null);const T=on();if(!T)throw new Error("توکن ورود پیدا نشد. دوباره وارد شوید.");const V=await fetch(`${Wa}/api/warranties/admin/all`,{headers:{Authorization:`Bearer ${T}`,Accept:"application/json"}}),Q=await V.json();if(!V.ok||!Q.success)throw new Error(Q.error||"دریافت درخواست‌های گارانتی ناموفق بود.");r(Array.isArray(Q.data)?Q.data:[])}catch(T){console.error("خطا در دریافت درخواست‌های گارانتی:",T),n(T instanceof Error?T.message:"خطا در ارتباط با سرور.")}finally{c(!1)}};(0,a.useEffect)(()=>{G()},[]),(0,a.useEffect)(()=>{d&&(k(d.adminNote||""),o(null),q(null),O(!1))},[d]);const P=(0,a.useMemo)(()=>{const T=g.trim().toLocaleLowerCase("fa-IR");return t.filter(V=>u==="all"||V.status===u?T?[V.id,V.representativeName,V.representativeCode,V.representativeCity,V.customerName,V.customerPhone,V.productName,V.brand,V.category].filter(Boolean).join(" ").toLocaleLowerCase("fa-IR").includes(T):!0:!1)},[g,u,t]),S=(0,a.useMemo)(()=>t.reduce((T,V)=>(T.total+=1,T[V.status]+=1,T),{total:0,pending:0,approved:0,rejected:0}),[t]),y=T=>{r(V=>V.map(Q=>Q.id===T.id?T:Q)),N(T)},I=()=>{x||(N(null),o(null),q(null))},_=async T=>{if(!d||d.status!=="pending"||T!=="approved"&&T!=="rejected")return;const V=T==="approved"?`آیا از تأیید این درخواست مطمئن هستید؟

${d.quantity} عدد از محصول «${d.productName}» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد.`:`آیا از رد این درخواست مطمئن هستید؟

موجودی انبار تغییری نمی‌کند.`;if(window.confirm(V))try{p(T),o(null),q(null);const Q=on();if(!Q)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");const C=await fetch(`${Wa}/api/warranties/admin/${d.id}/decision`,{method:"PATCH",headers:{Authorization:`Bearer ${Q}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({status:T,adminNote:v.trim()})}),F=await C.json();if(!C.ok||!F.success)throw new Error(F.error||"ثبت تصمیم ادمین ناموفق بود.");F.data?.warranty&&y(F.data.warranty),q(F.message||"تصمیم با موفقیت ثبت شد.")}catch(Q){console.error("خطا در ثبت تصمیم گارانتی:",Q),o(Q instanceof Error?Q.message:"خطا در ارتباط با سرور.")}finally{p(null)}};return s?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[440px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,e.jsx)(ue,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-600",children:"در حال دریافت درخواست‌های گارانتی..."})]})}):b?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-3xl border border-rose-200 bg-rose-50 p-7 text-center",children:[(0,e.jsx)(ze,{className:"mx-auto h-12 w-12 text-rose-500"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-rose-800",children:"دریافت اطلاعات ناموفق بود"}),(0,e.jsx)("p",{className:"mx-auto mt-2 max-w-xl text-sm leading-7 text-rose-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{G()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-rose-700",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("section",{dir:"rtl",className:"w-full min-w-0 space-y-5 overflow-x-hidden pb-10",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-xl shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-slate-950 via-sky-950 to-cyan-700 px-5 py-7 text-white md:px-8",children:[(0,e.jsx)("div",{className:"absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(at,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"مدیریت خدمات پس از فروش"})]}),(0,e.jsx)("h1",{className:"text-2xl font-black md:text-3xl",children:"بررسی درخواست‌های گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm leading-7 text-sky-100",children:"درخواست‌ها را بررسی کنید و پس از تأیید، موجودی کالای نماینده را به‌صورت خودکار کاهش دهید."})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{G()},className:"inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur transition-colors hover:bg-white/20",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})]}),(0,e.jsxs)("div",{className:"grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4",children:[(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کل درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-slate-800",children:S.total.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-600",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-amber-700",children:S.pending.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-600",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-700",children:S.approved.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-rose-600",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-rose-700",children:S.rejected.toLocaleString("fa-IR")})]})]})]}),(0,e.jsx)("div",{className:"rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5",children:(0,e.jsxs)("div",{className:"grid gap-3 lg:grid-cols-[minmax(0,1fr)_230px]",children:[(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:g,onChange:T=>{i(T.target.value)},placeholder:"جست‌وجو در مشتری، نماینده، محصول یا برند...",className:"h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white py-3 pr-11 pl-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]}),(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsxs)("select",{value:u,onChange:T=>{h(T.target.value)},className:"h-12 w-full min-w-0 appearance-none rounded-xl border border-slate-300 bg-white px-4 pl-10 text-sm font-bold text-slate-700 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"all",children:"همه وضعیت‌ها"}),(0,e.jsx)("option",{value:"pending",children:"در انتظار بررسی"}),(0,e.jsx)("option",{value:"approved",children:"تأیید شده"}),(0,e.jsx)("option",{value:"rejected",children:"رد شده"})]}),(0,e.jsx)(ta,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]})]})}),(0,e.jsxs)("div",{className:"min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-2 border-b border-slate-200 bg-gradient-to-l from-slate-50 to-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2",children:[(0,e.jsx)(Ge,{className:"h-5 w-5 shrink-0 text-sky-600"}),(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"فهرست درخواست‌ها"})]}),(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500",children:["نمایش"," ",P.length.toLocaleString("fa-IR")," ","درخواست"]})]}),P.length===0?(0,e.jsxs)("div",{className:"px-5 py-20 text-center",children:[(0,e.jsx)(Ge,{className:"mx-auto h-14 w-14 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-700",children:"درخواستی پیدا نشد"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"جست‌وجو یا فیلتر وضعیت را تغییر دهید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-3 md:hidden",children:P.map(T=>(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate text-sm font-black text-slate-800",children:T.productName||"بدون نام"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-medium text-slate-500",children:T.brand||"بدون برند"})]}),(0,e.jsx)(za,{status:T.status})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:T.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:T.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:T.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:T.customerPhone||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-black text-sky-700",children:[Number(T.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-[10px] font-bold leading-5 text-slate-600",children:br(T.requestDate||T.createdAt)})]})]}),(0,e.jsx)("div",{className:"border-t border-slate-100 p-3",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{N(T)},className:"inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-xs font-black text-sky-700 transition-colors hover:bg-sky-100",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"بررسی کامل درخواست"]})})]},T.id))}),(0,e.jsx)("div",{className:"hidden w-full overflow-hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-100 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[16%]",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[15%]",children:"مشتری"}),(0,e.jsx)("th",{className:"w-[30%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[27%]",children:"محصول"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black lg:table-cell lg:w-[7%]",children:"تعداد"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black xl:table-cell xl:w-[13%]",children:"تاریخ"}),(0,e.jsx)("th",{className:"w-[20%] border-b border-slate-200 px-2 py-4 text-xs font-black lg:w-[16%]",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[14%] border-b border-slate-200 px-2 py-4 text-center text-xs font-black lg:w-[12%]",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100",children:P.map(T=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:T.representativeName,className:"truncate text-xs font-black text-slate-800 lg:text-sm",children:T.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:T.representativeCode,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:T.representativeCode||"—"}),(0,e.jsx)("p",{className:"mt-1 truncate text-[10px] text-slate-400",children:T.representativeCity||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:T.customerName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:T.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:T.customerPhone,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:T.customerPhone||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:T.productName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:T.productName||"—"}),(0,e.jsx)("p",{title:T.brand,className:"mt-1 truncate text-[10px] text-slate-500 lg:text-xs",children:T.brand||"بدون برند"})]}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top lg:table-cell",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-sky-50 px-2 py-1.5 text-xs font-black text-sky-700",children:Number(T.quantity||0).toLocaleString("fa-IR")})}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top text-[10px] font-medium leading-5 text-slate-600 xl:table-cell",children:br(T.requestDate||T.createdAt)}),(0,e.jsx)("td",{className:"min-w-0 px-2 py-4 align-top",children:(0,e.jsx)(za,{status:T.status})}),(0,e.jsx)("td",{className:"px-2 py-4 text-center align-top",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{N(T)},className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-700 transition-colors hover:bg-sky-100 lg:h-auto lg:w-auto lg:gap-1.5 lg:px-3 lg:py-2",title:"بررسی درخواست","aria-label":"بررسی درخواست",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden xl:inline",children:"بررسی"})]})})]},T.id))})]})})]})]}),d?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-end bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-5",role:"dialog","aria-modal":"true","aria-label":"بررسی درخواست گارانتی",onMouseDown:T=>{T.target===T.currentTarget&&I()},children:(0,e.jsxs)("div",{className:"flex max-h-[96vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-6xl sm:rounded-3xl",children:[(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-7",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(Ge,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"بررسی درخواست گارانتی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-xs font-bold text-slate-500",children:d.id})]})]}),(0,e.jsx)("button",{type:"button",onClick:I,disabled:!!x,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"min-h-0 overflow-y-auto p-5 md:p-7",children:[w?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(ze,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:w})]}):null,$?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:[(0,e.jsx)(Ne,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:$})]}):null,(0,e.jsxs)("div",{className:"mb-6 grid gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"وضعیت درخواست"}),(0,e.jsx)("div",{className:"mt-2",children:(0,e.jsx)(za,{status:d.status})})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-black text-slate-700",children:br(d.requestDate||d.createdAt)})]})]}),(0,e.jsx)("div",{className:"mb-6",children:(0,e.jsx)(zo,{warranty:d})}),(0,e.jsxs)("div",{className:"grid gap-5 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(It,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات نماینده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:d.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)($t,{className:"h-3.5 w-3.5"}),"شهر"]}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.representativeCity||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(Dt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات مشتری"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.customerName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)(ea,{className:"h-3.5 w-3.5"}),"موبایل"]}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:d.customerPhone||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(gt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"کالای درخواست‌شده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"محصول"}),(0,e.jsx)("p",{className:"mt-1 break-words text-sm font-black text-slate-800",children:d.productName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:d.brand||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-sky-700",children:[Number(d.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]})]})]})]}),(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)(ht,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"شرح مشکل"})]}),(0,e.jsx)("p",{className:"min-h-32 break-words whitespace-pre-wrap p-4 text-sm font-medium leading-8 text-slate-700",children:d.issueDescription||"شرحی ثبت نشده است."})]}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)(At,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"تصویر یا فایل پیوست"})]}),d.image&&!z?(0,e.jsx)("a",{href:dn(d.image),target:"_blank",rel:"noreferrer",className:"block bg-slate-100",children:(0,e.jsx)("img",{src:dn(d.image),alt:"پیوست درخواست گارانتی",onError:()=>{O(!0)},className:"h-64 w-full object-contain sm:h-72"})}):(0,e.jsxs)("div",{className:"flex h-64 flex-col items-center justify-center p-4 text-center sm:h-72",children:[(0,e.jsx)(Al,{className:"h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-slate-500",children:"فایل پیوست در دسترس نیست."})]})]})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-2xl border border-slate-200 bg-white p-4",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-black text-slate-800",children:[(0,e.jsx)(Qa,{className:"h-5 w-5 text-sky-600"}),"یادداشت ادمین"]}),(0,e.jsx)("textarea",{rows:4,value:v,disabled:d.status!=="pending"||!!x,onChange:T=>{k(T.target.value)},placeholder:"یادداشت بررسی یا علت رد درخواست را بنویسید...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-100"})]}),d.status!=="pending"?(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-slate-50 p-3 text-xs font-bold leading-6 text-slate-600",children:["این درخواست قبلاً توسط"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:d.decidedBy||"ادمین"})," ","در تاریخ"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:br(d.decidedAt)})," ","نهایی شده است."]}):null]}),d.status==="pending"?(0,e.jsx)("div",{className:"mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex gap-3",children:[(0,e.jsx)(Ka,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"هشدار تأیید"}),(0,e.jsxs)("p",{className:"mt-1 break-words text-sm font-medium leading-7 text-amber-800",children:["با تأیید،"," ",(0,e.jsxs)("span",{className:"font-black",children:[Number(d.quantity||0).toLocaleString("fa-IR")," ","عدد"]})," ","از محصول «",(0,e.jsx)("span",{className:"font-black",children:d.productName}),"» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد."]})]})]})}):null,(0,e.jsxs)("div",{className:"mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:I,disabled:!!x,className:"min-h-11 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",children:"بستن"}),d.status==="pending"?(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",disabled:!!x,onClick:()=>{_("rejected")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60",children:[x==="rejected"?(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(it,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:!!x,onClick:()=>{_("approved")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-700 to-teal-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-700/20 transition-all hover:-translate-y-0.5 hover:from-emerald-800 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:[x==="approved"?(0,e.jsx)(ue,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Ne,{className:"h-5 w-5"}),"تأیید و کسر از انبار"]})]}):(0,e.jsxs)("div",{className:"flex items-center gap-2 text-sm font-black text-slate-600",children:[d.status==="approved"?(0,e.jsx)(Ne,{className:"h-5 w-5 text-emerald-600"}):(0,e.jsx)(it,{className:"h-5 w-5 text-rose-600"}),"این درخواست نهایی شده است."]})]})]})]})}):null]})},Ma="https://myshop-backend-8nu7.onrender.com/api",_r=Ma.endsWith("/api")?Ma.slice(0,-4):Ma,Fa=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",cn=()=>{const[t,r]=(0,a.useState)([]),[s,c]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[g,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(!1),[d,N]=(0,a.useState)(!1),[v,k]=(0,a.useState)(null),[x,p]=(0,a.useState)({title:"",content:""}),w=async()=>{try{c(!0),n(null);const S=Fa(),y=await fetch(`${_r}/api/notes`,{headers:{Authorization:`Bearer ${S}`,Accept:"application/json"}}),I=await y.json();if(!y.ok||!I.success)throw new Error(I.error||"خطا در دریافت یادداشت‌ها");if(!Array.isArray(I.data))throw new Error("فرمت داده‌های یادداشت‌ها نامعتبر است.");r(I.data)}catch(S){console.error("خطا در دریافت یادداشت‌ها:",S),n(S instanceof Error?S.message:"خطا در ارتباط با سرور")}finally{c(!1)}};(0,a.useEffect)(()=>{w()},[]);const o=()=>{d||(h(!1),k(null),p({title:"",content:""}))},$=()=>{k(null),p({title:"",content:""}),h(!0)},q=S=>{k(S),p({title:S.title||"",content:S.content||""}),h(!0)},z=async S=>{if(window.confirm("آیا از حذف این یادداشت مطمئن هستید؟"))try{const y=Fa(),I=await fetch(`${_r}/api/notes/${S}`,{method:"DELETE",headers:{Authorization:`Bearer ${y}`,Accept:"application/json"}}),_=await I.json();if(!I.ok||!_.success)throw new Error(_.error||"خطا در حذف یادداشت");r(T=>T.filter(V=>V.id!==S))}catch(y){console.error("خطا در حذف یادداشت:",y),alert(y instanceof Error?y.message:"خطا در ارتباط با سرور")}},O=async S=>{S.preventDefault();const y=x.title.trim(),I=x.content.trim();if(!y||!I){alert("عنوان و متن یادداشت الزامی است.");return}try{N(!0);const _=Fa(),T=!!v?.id,V=T?`${_r}/api/notes/${v?.id}`:`${_r}/api/notes`,Q=await fetch(V,{method:T?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${_}`,Accept:"application/json"},body:JSON.stringify({title:y,content:I,color:"blue"})}),C=await Q.json();if(!Q.ok||!C.success||!C.data)throw new Error(C.error||"خطا در ذخیره یادداشت");const F=C.data;r(T?f=>f.map(m=>m.id===F.id?F:m):f=>[F,...f]),o()}catch(_){console.error("خطا در ذخیره یادداشت:",_),alert(_ instanceof Error?_.message:"خطا در ارتباط با سرور")}finally{N(!1)}},G=t.filter(S=>{const y=(S.title||"").toLowerCase(),I=(S.content||"").toLowerCase(),_=g.trim().toLowerCase();return y.includes(_)||I.includes(_)}),P=S=>{if(!S)return"تاریخ نامشخص";const y=new Date(S);return Number.isNaN(y.getTime())?"تاریخ نامشخص":y.toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-[calc(100vh-120px)] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/60 p-3 md:p-6",children:[(0,e.jsxs)("div",{className:"mx-auto max-w-6xl",children:[(0,e.jsxs)("section",{className:"mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-blue-100",children:[(0,e.jsx)(Yt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"فضای شخصی شما"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"یادداشت‌های من"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-medium leading-7 text-blue-50",children:"یادداشت‌های شخصی خود را ثبت، جست‌وجو، ویرایش و مدیریت کنید."})]}),(0,e.jsxs)("button",{type:"button",onClick:$,className:"relative flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 font-black text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-xl active:translate-y-0",children:[(0,e.jsx)(Nr,{className:"h-5 w-5"}),"یادداشت جدید"]})]})]}),(0,e.jsx)("div",{className:"p-4 md:p-5",children:(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400"}),(0,e.jsx)("input",{type:"text",placeholder:"جست‌وجو در عنوان یا متن یادداشت‌ها...",value:g,onChange:S=>{i(S.target.value)},className:"w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pr-10 pl-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"})]})})]}),s?(0,e.jsx)("div",{className:"flex items-center justify-center py-24",children:(0,e.jsx)("div",{className:"h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"})}):b?(0,e.jsxs)("div",{className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)("p",{className:"font-bold text-red-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{w()},className:"mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Ue,{className:"h-4 w-4"}),"تلاش مجدد"]})]}):G.length===0?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-white py-20 text-center shadow-sm",children:[(0,e.jsx)("div",{className:"mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500",children:(0,e.jsx)(Yt,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"text-lg font-black text-slate-700",children:g?"یادداشتی پیدا نشد":"هنوز یادداشتی ندارید"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:g?"عبارت جست‌وجو را تغییر دهید.":"با دکمهٔ «یادداشت جدید» اولین یادداشت خود را بسازید."})]}):(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:G.map(S=>(0,e.jsxs)("article",{className:"group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10",children:[(0,e.jsx)("div",{className:"h-1.5 bg-gradient-to-l from-blue-700 via-blue-500 to-cyan-400"}),(0,e.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110",children:(0,e.jsx)(Yt,{className:"h-5 w-5"})}),(0,e.jsx)("h3",{className:"line-clamp-2 min-w-0 pt-1 text-lg font-black text-slate-800",children:S.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{q(S)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600",title:"ویرایش یادداشت","aria-label":"ویرایش یادداشت",children:(0,e.jsx)(Zt,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{z(S.id)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600",title:"حذف یادداشت","aria-label":"حذف یادداشت",children:(0,e.jsx)(Xe,{className:"h-4 w-4"})})]})]}),(0,e.jsx)("p",{className:"mb-5 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-slate-600",children:S.content||"بدون متن"}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 border-t border-slate-100 pt-3",children:[(0,e.jsxs)("span",{className:"min-w-0 truncate text-xs font-medium text-slate-400",children:["آخرین ویرایش: ",P(S.updatedAt||S.createdAt)]}),(0,e.jsx)("span",{className:"shrink-0 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-black text-blue-700",children:"یادداشت شخصی"})]})]})]},S.id))})]}),u?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm",onClick:o,role:"presentation",children:(0,e.jsxs)("div",{className:"w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:S=>{S.stopPropagation()},role:"dialog","aria-modal":"true","aria-label":v?"ویرایش یادداشت":"یادداشت جدید",children:[(0,e.jsx)("div",{className:"bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 p-5 text-white",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15",children:(0,e.jsx)(Yt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black",children:v?"ویرایش یادداشت":"یادداشت جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-medium text-blue-100",children:"عنوان و متن یادداشت شخصی خود را وارد کنید."})]})]}),(0,e.jsx)("button",{type:"button",onClick:o,disabled:d,className:"rounded-lg p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن پنجره",children:(0,e.jsx)(Ce,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("form",{onSubmit:O,className:"p-5",children:[(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsx)("label",{htmlFor:"note-title",className:"mb-2 block text-sm font-black text-slate-700",children:"عنوان یادداشت"}),(0,e.jsx)("input",{id:"note-title",type:"text",value:x.title,onChange:S=>{p(y=>({...y,title:S.target.value}))},className:"w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"مثال: پیگیری سفارش هفتهٔ آینده",maxLength:120,required:!0,disabled:d})]}),(0,e.jsxs)("div",{className:"mb-6",children:[(0,e.jsx)("label",{htmlFor:"note-content",className:"mb-2 block text-sm font-black text-slate-700",children:"متن یادداشت"}),(0,e.jsx)("textarea",{id:"note-content",value:x.content,onChange:S=>{p(y=>({...y,content:S.target.value}))},rows:7,className:"w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"متن یادداشت خود را اینجا بنویسید...",maxLength:3e3,required:!0,disabled:d})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:o,disabled:d,className:"rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:d,className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-700 to-cyan-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:from-blue-800 hover:to-cyan-700 disabled:cursor-not-allowed disabled:opacity-70",children:[(0,e.jsx)(Ya,{className:"h-4 w-4"}),d?"در حال ذخیره...":v?"ذخیرهٔ تغییرات":"ثبت یادداشت"]})]})]})]})}):null]})},Fo=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},Lo=t=>Array.isArray(t)?t:Array.isArray(t.data)?t.data:t.data&&Array.isArray(t.data.products)?t.data.products:Array.isArray(t.products)?t.products:[],Jr=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const c of t){const b=s.getItem(c);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const c of r){const b=s.getItem(c);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},La=()=>{const t=Jr();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},xn=(t,r)=>{if(xe.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||t.message||r}return t instanceof Error?t.message:r},Uo=({apiUrl:t})=>{const[r,s]=(0,a.useState)([]),[c,b]=(0,a.useState)(null),[n,g]=(0,a.useState)(!1),[i,u]=(0,a.useState)(null),h=(0,a.useMemo)(()=>Fo(t),[t]),d=(0,a.useRef)(0),N=(0,a.useRef)(null),v=(0,a.useCallback)(async()=>{const k=d.current+1;d.current=k,N.current&&N.current.abort();const x=new AbortController;N.current=x;const p=`${h}/products`;try{g(!0),console.log("📡 دریافت محصولات از:",p);const w=await xe.get(p,{signal:x.signal,params:{_t:Date.now()},headers:La(),withCredentials:!!Jr()});if(x.signal.aborted||k!==d.current)return null;const o=w.data;if(o?.success===!1)throw new Error(o.error||o.message||"دریافت محصولات ناموفق بود.");const $=Lo(o);return s($),console.log("✅ تعداد محصولات دریافت‌شده:",$.length),$}catch(w){return xe.isCancel(w)||x.signal.aborted||k!==d.current||console.error("❌ خطا در بارگذاری محصولات:",w),null}finally{k===d.current&&g(!1)}},[h]);return(0,a.useEffect)(()=>(v(),()=>{d.current+=1,N.current&&N.current.abort()}),[v]),{products:r,editingProduct:c,setEditingProduct:b,loadProducts:v,handleEdit:(0,a.useCallback)(async k=>{try{const x=Jr();await xe.put(`${h}/products/${encodeURIComponent(String(k.id))}`,k,{headers:La(),withCredentials:!!x}),await v(),b(null)}catch(x){console.error("❌ خطا در ویرایش محصول:",x),alert(xn(x,"خطا در ویرایش محصول"))}},[h,v]),handleDelete:(0,a.useCallback)(async k=>{const x=String(k).trim();if(!x){alert("شناسه محصول معتبر نیست.");return}if(i)return;if(!r.some(w=>String(w.id)===x)){alert("این محصول در لیست فعلی وجود ندارد.");return}if(!window.confirm("آیا از حذف این محصول مطمئن هستید؟"))return;const p=r;try{const w=Jr();u(x),g(!0);const o=(await xe.delete(`${h}/products/${encodeURIComponent(x)}`,{headers:La(),withCredentials:!!w})).data;if(o?.success===!1)throw new Error(o.error||o.message||"حذف محصول توسط سرور انجام نشد.");s(q=>q.filter(z=>String(z.id)!==x));const $=await v();if($&&$.some(q=>String(q.id)===x))throw s(p),new Error("سرور محصول را حذف نکرد؛ محصول همچنان در لیست وجود دارد.");console.log("✅ محصول واقعاً حذف شد:",x)}catch(w){console.error("❌ خطا در حذف محصول:",w),s(p),alert(xn(w,"حذف محصول انجام نشد."))}finally{u(null),g(!1)}},[h,i,v,r]),totalProducts:r.length,totalPrice:(0,a.useMemo)(()=>r.reduce((k,x)=>k+(Number(x.price)||0),0),[r]),loading:n,deletingProductId:i}},qo=({apiUrl:t,representativeId:r})=>{const[s,c]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(null),[u,h]=(0,a.useState)(null),d=(0,a.useRef)(0),N=String(t||"").trim().replace(/\/+$/,""),v=(0,a.useCallback)(async p=>{const w=String(p||"").trim();if(!w){d.current+=1,c([]),i(null),n(!1);return}const o=++d.current;n(!0),i(null);try{const $=await xe.get(`${N}/representatives/${encodeURIComponent(w)}/files`,{headers:{Accept:"application/json"},params:{_t:Date.now()}});if(o!==d.current)return;if($.data?.success===!1||!Array.isArray($.data?.files))throw new Error($.data?.error||"پاسخ فهرست فایل‌های نماینده معتبر نیست.");c($.data.files)}catch($){if(o!==d.current)return;const q=xe.isAxiosError($)?$.response?.data?.error||`دریافت فایل‌ها ناموفق بود (HTTP ${$.response?.status??"بدون پاسخ"}).`:$ instanceof Error?$.message:"خطا در دریافت فایل‌های نماینده.";console.error("خطا در بارگذاری پرونده‌های نماینده:",$),c([]),i(q)}finally{o===d.current&&n(!1)}},[N]);(0,a.useEffect)(()=>(r?(c([]),v(r)):(d.current+=1,c([]),i(null),n(!1),h(null)),()=>{d.current+=1}),[r,v]);const k=(0,a.useCallback)(async p=>{if(!r)throw new Error("ابتدا یک نماینده را انتخاب کنید.");const w=new FormData;w.append("file",p);try{await xe.post(`${N}/representatives/${encodeURIComponent(r)}/files`,w,{headers:{Accept:"application/json"}}),await v(r)}catch(o){const $=xe.isAxiosError(o)?o.response?.data?.error||`آپلود فایل ناموفق بود (HTTP ${o.response?.status??"بدون پاسخ"}).`:o instanceof Error?o.message:"خطا در آپلود فایل.";throw new Error($)}},[N,r,v]);return{files:s,loadingFiles:b,filesError:g,viewingFile:u,setViewingFile:h,loadRepresentativeFiles:v,uploadFile:k,deleteFile:async p=>{if(!r)return;const w=s.find(o=>o.id===p);if(w&&window.confirm(`آیا از حذف فایل «${w.name}» مطمئن هستید؟`))try{await xe.delete(`${N}/representatives/${encodeURIComponent(r)}/files/${encodeURIComponent(w.name)}`),await v(r),u?.id===p&&h(null)}catch(o){console.error("خطا در حذف فایل:",o),window.alert("خطا در حذف فایل")}}}},Oo=(t,r=5e3)=>{const s=(0,a.useRef)(t);(0,a.useEffect)(()=>{s.current=t},[t]),(0,a.useEffect)(()=>{const c=setInterval(()=>{s.current()},r);return()=>clearInterval(c)},[r])},Nt=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),nt=t=>String(t??"").trim(),_o=t=>String(t||"").trim().replace(/\/+$/,"").replace(/\/api$/,""),Br=(t,r)=>{if(!xe.isAxiosError(t))return t instanceof Error&&t.message?t.message:r;const s=t.response?.data;return s?.error?s.error:s?.message?s.message:t.response?.status===400?"اطلاعات ارسال‌شده معتبر نیست.":t.response?.status===401?"نشست کاربری منقضی یا نامعتبر است؛ دوباره وارد شوید.":t.response?.status===403?"اجازهٔ دسترسی به این بخش را ندارید.":t.response?.status===404?"مسیر نمایندگان در بک‌اند پیدا نشد.":t.response?r:"ارتباط با بک‌اند برقرار نشد؛ اجرای سرور را بررسی کنید."},mn=t=>({...t,name:nt(t.name),email:nt(t.email),code:nt(t.code),province:nt(t.province),city:nt(t.city),phone:nt(t.phone),startDate:nt(t.startDate),address:nt(t.address),description:nt(t.description),shopDescription:nt(t.shopDescription),status:t.status==="inactive"?"inactive":"active",orders:Number(t.orders)||0,depositAmount:t.depositAmount??"0",guaranteeCheck:t.guaranteeCheck??"0",totalFinancialCommitment:t.totalFinancialCommitment??"0",shipmentsCount:Number(t.shipmentsCount)||0,storeItemsCount:Number(t.storeItemsCount)||0,storeItemsTotalValue:Number(t.storeItemsTotalValue)||0,returnRequestsCount:Number(t.returnRequestsCount)||0,last10DaysSales:Number(t.last10DaysSales)||0,averageSales:Number(t.averageSales)||0}),Bo=({apiUrl:t,isAdmin:r})=>{const[s,c]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[g,i]=(0,a.useState)(null),u=(0,a.useRef)(0),h=(0,a.useRef)(!1),d=(0,a.useRef)(!1),N=(0,a.useMemo)(()=>_o(t),[t]),v=(0,a.useCallback)((p=!1)=>{const w=localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"";if(!w)throw new Error("توکن ورود پیدا نشد؛ دوباره وارد شوید.");return{Accept:"application/json",Authorization:`Bearer ${w}`,...p?{"Content-Type":"application/json"}:{}}},[]),k=(0,a.useCallback)(()=>{if(!r)throw new Error("این عملیات فقط برای ادمین مجاز است.")},[r]),x=(0,a.useCallback)(async(p=!1)=>{if(!r||p&&h.current)return;p&&(h.current=!0);const w=++u.current;p||(n(!0),i(null));try{const o=(await xe.get(`${N}/api/representatives`,{headers:v(),params:{_t:Date.now()}})).data;if(o.success===!1)throw new Error(o.error||"خطا در بارگذاری نمایندگان.");if(!d.current||w!==u.current)return;c(Array.isArray(o.data)?o.data:[]),p||i(null)}catch(o){if(!d.current||w!==u.current)return;const $=Br(o,"خطا در بارگذاری نمایندگان.");console.error("خطا در بارگذاری نمایندگان:",$),p||i($)}finally{p&&(h.current=!1),d.current&&w===u.current&&!p&&n(!1)}},[v,r,N]);return(0,a.useEffect)(()=>{d.current=!0,r?x():(c([]),n(!1),i(null));const p=()=>{r&&document.visibilityState==="visible"&&x(!0)};return r&&(window.addEventListener("focus",p),document.addEventListener("visibilitychange",p)),()=>{d.current=!1,u.current+=1,window.removeEventListener("focus",p),document.removeEventListener("visibilitychange",p)}},[r,x]),Oo(x,5e3),{representatives:s,loading:b,error:g,loadRepresentatives:x,addRepresentative:(0,a.useCallback)(async p=>{k();try{const w=(await xe.post(`${N}/api/representatives`,mn(p),{headers:v(!0)})).data;if(w.success===!1||!w.data)throw new Error(w.error||"بک‌اند اطلاعات نمایندهٔ جدید را برنگرداند.");const o=w.data;return u.current+=1,c($=>$.some(q=>Nt(q.id)===Nt(o.id))?$.map(q=>Nt(q.id)===Nt(o.id)?o:q):[...$,o]),i(null),o}catch(w){const o=Br(w,"خطا در ثبت نماینده.");throw i(o),window.alert(o),w}},[k,v,N]),updateRepresentative:(0,a.useCallback)(async(p,w)=>{k();const o=Nt(p);if(!o)throw new Error("شناسه نماینده برای ویرایش معتبر نیست.");try{const $=(await xe.put(`${N}/api/representatives/${encodeURIComponent(o)}`,mn(w),{headers:v(!0)})).data;if($.success===!1||!$.data)throw new Error($.error||"بک‌اند اطلاعات نمایندهٔ ویرایش‌شده را برنگرداند.");const q=$.data;return u.current+=1,c(z=>z.map(O=>Nt(O.id)===o?q:O)),i(null),q}catch($){const q=Br($,"خطا در ویرایش نماینده.");throw i(q),window.alert(q),$}},[k,v,N]),deleteRepresentative:(0,a.useCallback)(async p=>{k();const w=Nt(p);if(!w)throw new Error("شناسه نماینده برای حذف معتبر نیست.");try{const o=(await xe.delete(`${N}/api/representatives/${encodeURIComponent(w)}`,{headers:v()})).data;if(o.success===!1)throw new Error(o.error||"خطا در حذف نماینده.");u.current+=1,c($=>$.filter(q=>Nt(q.id)!==w)),i(null)}catch(o){const $=Br(o,"خطا در حذف نماینده.");throw i($),window.alert($),o}},[k,v,N])}},Wo=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},wt=Wo("https://myshop-backend-8nu7.onrender.com/api"),zn=["dashboard","products","representatives","upload","shipments","warehouse","sales-reports","return-requests","support-requests","reports","users","settings","notes","warranties"],Va=["dashboard","products","orders","my-shipments","warehouse","sales-reports","return-request","support","profile","notes","warranties"],Vo=()=>{const t=localStorage.getItem("activeSection")||sessionStorage.getItem("activeSection"),r=[...zn,...Va];return t&&r.includes(t)?t:"dashboard"},Mn=()=>{try{const t=localStorage.getItem("authUser")||sessionStorage.getItem("authUser");return t?JSON.parse(t):null}catch{return null}},Qo=()=>{const t=Mn();if(t?.role==="admin"||t?.role==="representative")return t.role;const r=localStorage.getItem("userRole")||sessionStorage.getItem("userRole");return r==="admin"?"admin":r==="representative"||r==="user"?"representative":null},Yr=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage])for(const c of t){const b=s.getItem(c);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const s of[sessionStorage,localStorage])for(const c of r){const b=s.getItem(c);if(b)try{const n=JSON.parse(b),g=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(g)return String(g).replace(/^Bearer\s+/i,"").trim()}catch{continue}}return""},pn=()=>{const t=Yr();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},Ho=t=>{if(Array.isArray(t))return t;const r=t;if(Array.isArray(r?.data))return r.data;if(Array.isArray(r?.reports))return r.reports;if(Array.isArray(r?.salesReports))return r.salesReports;if(r?.data&&typeof r.data=="object"){const s=r.data?.data;if(Array.isArray(s))return s}return[]};function Go(){const t=(0,a.useMemo)(()=>Mn(),[]),r=(0,a.useMemo)(()=>Qo(),[]),s=r==="representative",[c,b]=(0,a.useState)(!0),[n,g]=(0,a.useState)(Vo),[i,u]=(0,a.useState)(null),[h,d]=(0,a.useState)(null),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)([]),p=(0,a.useCallback)(async()=>{if(!s&&Yr())try{const l=await xe.get(`${wt}/shipments`,{withCredentials:!0,headers:pn(),params:{_:Date.now()}});if(l.data.success===!1)throw new Error(l.data.error||"دریافت بارها ناموفق بود.");v(Array.isArray(l.data.data)?l.data.data:[])}catch(l){console.error("❌ خطا در دریافت بارها:",l)}},[s]),w=(0,a.useCallback)(async()=>{if(!s&&Yr()){for(const l of["/sales-from-warehouse/admin/all","/sales-reports","/sale-reports","/sales","/sales/announcements"])try{const E=await xe.get(`${wt}${l}`,{withCredentials:!0,headers:pn(),params:{_:Date.now()}}),J=Ho(E.data);x(J),console.log(`✅ گزارش‌های فروش از «${l}» دریافت شد (${J.length} مورد)`);return}catch{continue}console.warn("⚠️ هیچ endpoint گزارش فروشی پیدا نشد. لطفاً endpoint اعلام فروش را بررسی کنید.")}},[s]);(0,a.useEffect)(()=>{s||p()},[s,p]),(0,a.useEffect)(()=>{s||(n==="dashboard"||n==="sales-reports"||n==="reports")&&w()},[n,s,w]);const{products:o,editingProduct:$,setEditingProduct:q,loadProducts:z,handleEdit:O,handleDelete:G,totalProducts:P,totalPrice:S}=Uo({apiUrl:wt}),{representatives:y,addRepresentative:I,updateRepresentative:_,deleteRepresentative:T,loadRepresentatives:V}=Bo({apiUrl:wt,isAdmin:r==="admin"}),{files:Q,loadingFiles:C,viewingFile:F,setViewingFile:f,deleteFile:m}=qo({apiUrl:wt,representativeId:i}),L=(0,a.useCallback)(async l=>{await m(String(l))},[m]),W=(0,a.useCallback)(async()=>{console.log("🔄 شروع بروزرسانی محصولات بعد از آپلود"),await z(),console.log("✅ محصولات بعد از آپلود بروزرسانی شدند")},[z]),A=(0,a.useCallback)(async()=>{await V()},[V]);(0,a.useEffect)(()=>{s&&!Va.includes(n)&&(g("dashboard"),sessionStorage.setItem("activeSection","dashboard"))},[n,s]),(0,a.useEffect)(()=>{sessionStorage.setItem("activeSection",n)},[n]),(0,a.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[n,i,h]),(0,a.useEffect)(()=>{const l=()=>{b(window.innerWidth>=1024)};return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),(0,a.useEffect)(()=>{s&&n==="products"&&z()},[n,s,z]);const j=()=>{u(null),d(null),f(null)},U=l=>{if(s&&!Va.includes(l)){alert("🔒 اجازه ورود به این بخش را ندارید.");return}!s&&!zn.includes(l)||(j(),g(l),sessionStorage.setItem("activeSection",l),window.innerWidth<1024&&b(!1))},Z=l=>{if(s){alert("🔒 اجازه ورود به این بخش را ندارید.");return}if(!y.some(E=>String(E.id)===String(l))){alert("نماینده موردنظر پیدا نشد. صفحه را رفرش کنید.");return}g("representatives"),d(null),f(null),u(String(l)),sessionStorage.setItem("activeSection","representatives")},B=()=>{j(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},pe=async l=>{await _(String(l.id),{...l,name:l.name?.trim()||"",email:l.email?.trim()||"",province:l.province?.trim()||"",city:l.city?.trim()||"",phone:l.phone?.trim()||"",code:String(l.code??"").trim(),address:l.address?.trim()||"",description:l.description?.trim()||"",shopDescription:l.shopDescription?.trim()||""}),await V()},ee=async l=>{await I({name:l.name?.trim()||"",email:l.email?.trim()||"",phone:l.phone?.trim()||"",province:l.province?.trim()||"",city:l.city?.trim()||"",code:String(l.code??"").trim(),address:l.address?.trim()||"",description:l.description?.trim()||"",shopDescription:l.shopDescription?.trim()||"",orders:Number(l.orders)||0,status:l.status==="inactive"?"inactive":"active",startDate:l.startDate||"",depositAmount:l.depositAmount||"0",guaranteeCheck:l.guaranteeCheck||"0",totalFinancialCommitment:l.totalFinancialCommitment||"0",shipmentsCount:Number(l.shipmentsCount)||0,storeItemsCount:Number(l.storeItemsCount)||0,storeItemsTotalValue:Number(l.storeItemsTotalValue)||0,returnRequestsCount:Number(l.returnRequestsCount)||0,last10DaysSales:Number(l.last10DaysSales)||0,averageSales:Number(l.averageSales)||0}),await V(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},re=async(l,E)=>{await _(l,{...E,name:E.name?.trim()||"",email:E.email?.trim()||"",phone:E.phone?.trim()||"",province:E.province?.trim()||"",city:E.city?.trim()||"",code:String(E.code??"").trim(),address:E.address?.trim()||"",description:E.description?.trim()||"",shopDescription:E.shopDescription?.trim()||"",orders:Number(E.orders)||0,status:E.status==="inactive"?"inactive":"active",startDate:E.startDate||"",depositAmount:E.depositAmount||"0",guaranteeCheck:E.guaranteeCheck||"0",totalFinancialCommitment:E.totalFinancialCommitment||"0",shipmentsCount:Number(E.shipmentsCount)||0,storeItemsCount:Number(E.storeItemsCount)||0,storeItemsTotalValue:Number(E.storeItemsTotalValue)||0,returnRequestsCount:Number(E.returnRequestsCount)||0,last10DaysSales:Number(E.last10DaysSales)||0,averageSales:Number(E.averageSales)||0}),await V()},ne=async l=>{await T(l),i&&String(i)===String(l)&&j(),h&&String(h)===String(l)&&j(),await V(),g("representatives"),sessionStorage.setItem("activeSection","representatives")},X=(0,a.useMemo)(()=>i&&y.find(l=>String(l.id)===String(i))||null,[y,i]),ie=(0,a.useMemo)(()=>h&&y.find(l=>String(l.id)===String(h))||null,[y,h]),he=h?`انبار ${ie?.name||""}`:i?`داشبورد ${X?.name||""}`:n==="dashboard"?"داشبورد":n==="products"?"لیست قیمت‌ها":n==="representatives"?"لیست نمایندگان":n==="upload"?"آپلود اکسل":n==="shipments"?"ارسال بار":n==="warehouse"?"انبار نمایندگان":n==="sales-reports"?"اعلام فروش نمایندگان":n==="return-requests"?"درخواست‌های مرجوعی":n==="support-requests"?"رسیدگی به درخواست‌ها":n==="reports"?"گزارشات":n==="users"?"مدیریت کاربران":n==="settings"?"تنظیمات":n==="notes"?"یادداشت‌ها":n==="warranties"?"مدیریت گارانتی":"پنل مدیریت",R=h?"موجودی، ورود و خروج کالا در انبار اختصاصی نماینده":i?"اطلاعات، آمار و پرونده‌های نماینده":n==="dashboard"?"نمای کلی از وضعیت محصولات":n==="products"?"مشاهده لیست قیمت محصولات":n==="representatives"?"مدیریت نمایندگان و پرونده‌های آن‌ها":n==="upload"?"افزودن محصولات از فایل اکسل":n==="shipments"?"ثبت و مدیریت ارسال بار":n==="warehouse"?"مشاهده و مدیریت انبار اختصاصی هر نماینده":n==="sales-reports"?"مشاهده فقط‌خواندنی اعلام فروش ثبت‌شده توسط نمایندگان":n==="return-requests"?"بررسی، تأیید یا رد درخواست‌های مرجوعی نماینده‌ها":n==="support-requests"?"بررسی و پاسخ به درخواست‌های پشتیبانی نمایندگان":n==="reports"?"مشاهده گزارش‌های سیستم":n==="users"?"مدیریت کاربران سیستم":n==="settings"?"تنظیمات پنل مدیریت":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="warranties"?"مشاهده و رسیدگی به درخواست‌های گارانتی نمایندگان":"",H=n==="dashboard"?"داشبورد نمایندگی":n==="products"?"لیست قیمت‌ها":n==="orders"?"سفارش‌های من":n==="my-shipments"?"بارهای من":n==="warehouse"?"انبار نمایندگی":n==="sales-reports"?"اعلام فروش":n==="return-request"?"درخواست مرجوعی":n==="support"?"پشتیبانی":n==="profile"?"پروفایل نمایندگی":n==="notes"?"یادداشت‌ها":n==="warranties"?"استفاده از گارانتی":"داشبورد نمایندگی",ae=n==="dashboard"?"نمای کلی اطلاعات، اعتبار و موجودی نمایندگی":n==="products"?"مشاهده لیست قیمت ثبت‌شده توسط مدیریت":n==="orders"?"مشاهده سفارش‌های ثبت‌شده":n==="my-shipments"?"پیگیری وضعیت و جزئیات بارهای ارسالی به نمایندگی شما":n==="warehouse"?"مشاهده موجودی و مجموع":n==="sales-reports"?"ثبت و مشاهده اعلام فروش نمایندگی":n==="return-request"?"ثبت و پیگیری درخواست مرجوعی":n==="support"?"ثبت و پیگیری درخواست‌های پشتیبانی":n==="profile"?"مشاهده اطلاعات کاربری و نمایندگی":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="warranties"?"ثبت درخواست استفاده از گارانتی برای کالاهای موجود در انبار":"";return!Yr()||!t||!r?(0,e.jsx)(Il,{to:"/login",replace:!0}):(0,e.jsxs)("div",{dir:"ltr",className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950",children:[(0,e.jsx)(Fl,{onToggleSidebar:()=>{b(l=>!l)},userRole:s?"representative":"admin",onRoleChange:()=>{},userName:s?t.name||t.username||"نماینده":t.name||"مدیر سیستم"}),(0,e.jsx)(Ll,{isOpen:c,onClose:()=>{b(!1)},activeSection:n,onSectionChange:U,userRole:s?"representative":"admin"}),(0,e.jsx)("main",{dir:"rtl",className:`min-h-[calc(100vh-76px)] transition-all duration-500 ${c?"lg:mr-72":"lg:mr-0"}`,children:(0,e.jsxs)("div",{className:"mx-auto max-w-7xl p-3 md:p-6",children:[(0,e.jsxs)("header",{className:"mb-4 md:mb-6",children:[(0,e.jsx)("h1",{className:"text-xl font-black text-gray-800 dark:text-white md:text-3xl",children:s?H:he}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm",children:s?ae:R})]}),s?n==="warranties"?(0,e.jsx)(Eo,{}):n==="notes"?(0,e.jsx)(cn,{}):n==="products"?(0,e.jsx)(Cn,{products:Array.isArray(o)?o:[],userRole:"user",onEdit:()=>{},onDelete:()=>{}}):n==="support"?(0,e.jsx)(Oi,{}):(0,e.jsx)($o,{activeSection:n}):n==="notes"?(0,e.jsx)(cn,{}):n==="warranties"?(0,e.jsx)(Mo,{}):i?(0,e.jsx)(Ts,{activeSection:"representatives",userRole:"admin",products:o,totalProducts:P,totalPrice:S,viewingRepDashboard:i,representatives:y,representativeFiles:Q,loadingFiles:C,shipments:N,onEditProduct:q,onDeleteProduct:G,onUploadSuccess:W,onOpenRepDashboard:Z,onBackToRepList:B,onViewFile:f,onDeleteFile:L,onAddRepresentative:ee,onEditRepresentative:re,onDeleteRepresentative:ne,onRepresentativeUpdated:pe}):n==="warehouse"&&ie?(0,e.jsx)(Li,{representative:ie,apiUrl:wt,products:o,onBack:()=>{d(null)},onWarehouseChanged:A,onProductsChanged:()=>{z()}}):n==="warehouse"?(0,e.jsx)(Ti,{representatives:y,apiUrl:wt,onOpenRepresentativeWarehouse:l=>{u(null),f(null),d(String(l))}}):n==="support-requests"?(0,e.jsx)(Vi,{}):(0,e.jsx)(Ts,{activeSection:n,userRole:"admin",products:o,totalProducts:P,totalPrice:S,viewingRepDashboard:null,representatives:y,representativeFiles:Q,loadingFiles:C,shipments:N,onEditProduct:q,onDeleteProduct:G,onUploadSuccess:W,onOpenRepDashboard:Z,onBackToRepList:B,onViewFile:f,onDeleteFile:L,onAddRepresentative:ee,onEditRepresentative:re,onDeleteRepresentative:ne,onRepresentativeUpdated:pe})]})}),s?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ai,{file:F,apiUrl:wt,onClose:()=>{f(null)}}),$?(0,e.jsx)(Ul,{product:$,onClose:()=>{q(null)},onSave:O}):null]})]})}export{Go as default};
