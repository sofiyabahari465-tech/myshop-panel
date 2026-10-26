import{r as bn}from"./rolldown-runtime.CXHxssQy.js";import{n as yn,r as oe,t as fn}from"./utils-vendor.C5ZOOZMr.js";import{$ as ms,$t as tl,A as wr,At as rl,B as jn,Bt as Ga,C as ut,Ct as al,D as sl,Dt as Ae,E as Xa,Et as ps,F as bt,Ft as hs,G as jr,Gt as nl,H as gs,Ht as Wa,I as vn,It as it,J as ll,K as il,L as ea,Lt as sa,M as ol,Mt as Va,N as er,Nt as dl,O as Re,Ot as cl,P as xl,Pt as ca,Q as ml,R as pl,Rt as vr,S as Xt,St as ot,T as Za,Tt as je,U as hl,Ut as gl,V as ul,Vt as bl,W as yl,Wt as us,X as me,Xt as fl,Y as bs,Z as ys,_ as fs,_t as Sr,a as $t,at as jl,b as rt,bt as Cr,c as tr,ct as vl,d as He,dt as es,en as kl,et as kn,f as Nn,ft as Nl,gt as wl,h as Kt,ht as Sl,i as $r,it as ts,j as na,jt as la,k as Qe,kt as Cl,l as $l,lt as Il,m as It,mt as wn,n as Sn,nt as Al,o as Dl,ot as Tl,p as Rl,pt as At,q as Dt,qt as El,r as ta,rt as js,s as Pr,st as Pl,t as we,tt as vs,u as Ir,ut as gt,v as Cn,vt as $n,w as zl,wt as Ml,x as rs,xt as Xe,y as In,yt as Ar,z as rr,zt as ht}from"./react-vendor.D16DtCKP.js";var a=bn(kl(),1),e=nl(),Fl=()=>{const[t,r]=(0,a.useState)(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);return(0,a.useEffect)(()=>{const s=window.document.documentElement;t?(s.classList.add("dark"),localStorage.setItem("theme","dark")):(s.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]),(0,e.jsx)("button",{onClick:()=>r(!t),className:"relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-yellow-400 dark:hover:text-yellow-400",title:t?"حالت روشن":"حالت تاریک",children:(0,e.jsxs)("div",{className:"relative h-5 w-5",children:[(0,e.jsx)(Rl,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-90 scale-0 opacity-0":"rotate-0 scale-100 opacity-100"}`}),(0,e.jsx)(ul,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${t?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`})]})})},Ll=({onToggleSidebar:t,userRole:r,onRoleChange:s,userName:d})=>{const b=fl(),n=r==="admin",p=()=>{sessionStorage.removeItem("token"),sessionStorage.removeItem("authUser"),sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("userRole"),sessionStorage.removeItem("representativeId"),sessionStorage.removeItem("activeSection"),localStorage.removeItem("token"),localStorage.removeItem("authUser"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userRole"),localStorage.removeItem("representativeId"),localStorage.removeItem("activeSection"),b("/login",{replace:!0})},i=d?.trim()||"کاربر";return(0,e.jsx)("nav",{className:"sticky top-0 z-40 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-xl transition-colors dark:border-gray-700 dark:bg-gray-900/80",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6 md:py-4",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2 sm:gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-2.5 py-1.5 text-[11px] font-bold text-white shadow-sm sm:px-3 sm:text-xs",title:n?"دسترسی کامل ادمین":"دسترسی پنل نمایندگی",children:[n?(0,e.jsx)(Sl,{className:"h-3.5 w-3.5"}):(0,e.jsx)($r,{className:"h-3.5 w-3.5"}),(0,e.jsx)("span",{className:"tracking-tight",children:n?"ادمین":"نماینده"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1.5 dark:border-gray-700 dark:bg-gray-800 sm:px-2.5",children:[(0,e.jsx)("div",{className:"flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-green-500 to-emerald-600 text-[11px] font-black text-white shadow-sm",children:i.charAt(0)}),(0,e.jsxs)("div",{className:"hidden lg:block",children:[(0,e.jsx)("p",{className:"text-xs font-bold tracking-tight text-gray-800 dark:text-white",children:i}),(0,e.jsx)("p",{className:"text-[10px] font-medium text-gray-500 dark:text-gray-400",children:n?"مدیر سیستم":"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4",children:[(0,e.jsx)(Fl,{}),(0,e.jsx)("button",{type:"button",onClick:t,className:"flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400 md:h-11 md:w-11",title:"باز و بسته‌کردن منو",children:(0,e.jsx)(yl,{className:"h-5 w-5 md:h-6 md:w-6"})}),(0,e.jsxs)("button",{type:"button",onClick:p,className:"flex items-center gap-2 rounded-xl bg-red-500 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 sm:px-4 sm:text-sm",title:"خروج از حساب",children:[(0,e.jsx)(ll,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden sm:inline",children:"خروج"})]})]})]})})},Ul=({isOpen:t,onClose:r,activeSection:s,onSectionChange:d,userRole:b})=>{const n=b==="representative"||b==="user";return(0,e.jsxs)(e.Fragment,{children:[t?(0,e.jsx)("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in lg:hidden",onClick:r,"aria-hidden":"true"}):null,(0,e.jsxs)("aside",{dir:"rtl",className:`fixed top-0 right-0 z-50 flex h-screen w-60 flex-col border-l border-gray-700 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-500 ease-in-out lg:top-[73px] lg:h-[calc(100vh-73px)] ${t?"translate-x-0":"translate-x-full overflow-hidden lg:w-0 lg:translate-x-0"}`,children:[(0,e.jsx)("div",{className:"shrink-0 border-b border-gray-700 p-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold uppercase tracking-wider text-gray-500",children:"منوی اصلی"}),(0,e.jsx)("p",{className:"mt-0.5 flex items-center gap-1.5 text-lg font-bold text-cyan-400",children:n?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($r,{className:"h-3.5 w-3.5"}),"پنل نمایندگی"]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ta,{className:"h-3.5 w-3.5"}),"دسترسی کامل"]})})]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400 lg:hidden","aria-label":"بستن منو",children:(0,e.jsx)(we,{className:"h-4 w-4"})})]})}),(0,e.jsx)("nav",{className:"flex-1 space-y-1  p-1",children:(n?[{id:"dashboard",label:"داشبورد",icon:ys},{id:"products",label:"لیست قیمت‌ها",icon:ht},{id:"my-shipments",label:"بارهای من",icon:tr},{id:"warehouse",label:"انبار من",icon:sa},{id:"sales-reports",label:"اعلام فروش",icon:ht,accent:"emerald"},{id:"return-request",label:"ثبت درخواست مرجوعی",icon:Xa,accent:"rose"},{id:"support",label:"پشتیبانی",icon:js},{id:"warranties",label:"گارانتی",icon:rt,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Kt,accent:"amber"},{id:"notifications",label:"اطلاع‌رسانی",icon:vr,accent:"cyan"},{id:"profile",label:"پروفایل",icon:$r}]:[{id:"dashboard",label:"داشبورد",icon:ys},{id:"products",label:"لیست قیمت‌ها",icon:ht},{id:"representatives",label:"لیست نمایندگان",icon:ta},{id:"warehouse",label:"انبارداری",icon:It},{id:"upload",label:"آپلود اکسل",icon:Sr},{id:"shipments",label:"ارسال بار",icon:tr},{id:"sales-reports",label:"اعلام فروش نمایندگان",icon:ht,accent:"emerald"},{id:"return-requests",label:"بررسی درخواست‌های مرجوعی",icon:Xe,accent:"rose"},{id:"support-requests",label:"رسیدگی به درخواست‌ها",icon:js},{id:"warranties",label:"گارانتی",icon:rt,accent:"sky"},{id:"notes",label:"یادداشت‌ها",icon:Kt,accent:"amber"},{id:"announcements",label:"اعلام اطلاعیه‌ها",icon:jr,accent:"orange"}]).map((p,i)=>{const u=p.icon,h=s===p.id,c=p.accent==="rose",N=p.accent==="emerald",v=p.accent==="amber",k=p.accent==="sky",x=c?"border-rose-500/50 bg-gradient-to-r from-rose-500/25 to-red-500/20 text-white shadow-md shadow-rose-500/20":N?"border-emerald-500/50 bg-gradient-to-r from-emerald-500/25 to-teal-500/20 text-white shadow-md shadow-emerald-500/20":v?"border-amber-500/50 bg-gradient-to-r from-amber-500/25 to-yellow-500/20 text-white shadow-md shadow-amber-500/20":k?"border-sky-500/50 bg-gradient-to-r from-sky-500/25 to-blue-500/20 text-white shadow-md shadow-sky-500/20":"border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-md shadow-cyan-500/20",g=c?"border-rose-500/10 bg-rose-500/5 text-rose-300 hover:border-rose-500/30 hover:bg-rose-500/15 hover:text-rose-100":N?"border-emerald-500/10 bg-emerald-500/5 text-emerald-300 hover:border-emerald-500/30 hover:bg-emerald-500/15 hover:text-emerald-100":v?"border-amber-500/10 bg-amber-500/5 text-amber-300 hover:border-amber-500/30 hover:bg-amber-500/15 hover:text-amber-100":k?"border-sky-500/10 bg-sky-500/5 text-sky-300 hover:border-sky-500/30 hover:bg-sky-500/15 hover:text-sky-100":"border-transparent text-gray-400 hover:bg-gray-800 hover:text-white",w=c?"text-rose-300":N?"text-emerald-300":v?"text-amber-400":k?"text-sky-300":"text-cyan-400",o=c?"text-rose-400":N?"text-emerald-400":v?"text-amber-400":k?"text-sky-400":"",$=c?"bg-rose-400":N?"bg-emerald-400":v?"bg-amber-400":k?"bg-sky-400":"bg-cyan-400";return(0,e.jsxs)("button",{type:"button",onClick:()=>{d(p.id),window.innerWidth<1024&&r()},style:{animationDelay:`${i*40}ms`},className:`group flex w-full items-center gap-2.5 rounded-lg border px-3 py-2 text-right  transition-all duration-600 animate-slide-in-right ${h?x:g}`,children:[(0,e.jsx)("span",{className:"shrink-0 transition-transform duration-300 group-hover:scale-110",children:(0,e.jsx)(u,{className:`h-5 w-5 ${h?w:o}`})}),(0,e.jsx)("span",{className:"min-w-0 flex-1 text-[13px] font-bold leading-5",children:p.label}),h?(0,e.jsx)("span",{className:`mr-auto h-1.5 w-1.5 shrink-0 animate-pulse rounded-full ${$}`}):null]},p.id)})})]})]})},ks=t=>t?{...t,name:t.name||"",price:Number(t.price)||0,category:t.category||"عمومی",stock:Number(t.stock)||0,description:t.description||"",image:t.image||""}:null,ql=({product:t,onClose:r,onSave:s})=>{const[d,b]=(0,a.useState)(ks(t)),[n,p]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{b(ks(t)),p(!1)},[t]),!d)return null;const i=()=>{p(!0),window.setTimeout(()=>{r()},250)},u=(c,N)=>{b(v=>v?{...v,[c]:N}:null)},h=()=>{s({...d,name:d.name.trim()||"بدون نام",price:Number(d.price)||0,category:d.category.trim()||"عمومی",stock:Number(d.stock)||0,description:d.description.trim(),updatedAt:new Date().toISOString()}),i()};return(0,e.jsxs)("div",{dir:"rtl",className:`fixed inset-0 z-50 flex items-end justify-center p-0 transition-all duration-300 sm:items-center sm:p-4 ${n?"opacity-0":"opacity-100"}`,onClick:i,children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-md"}),(0,e.jsx)("div",{className:"absolute left-0 top-10 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl sm:left-20 sm:top-20 sm:h-96 sm:w-96"}),(0,e.jsx)("div",{className:"absolute bottom-0 right-0 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl sm:bottom-20 sm:right-20 sm:h-96 sm:w-96"}),(0,e.jsxs)("div",{className:`relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-300 sm:max-h-[90vh] sm:rounded-3xl ${n?"translate-y-8 scale-95 opacity-0":"translate-y-0 scale-100 opacity-100"}`,onClick:c=>c.stopPropagation(),children:[(0,e.jsx)("div",{className:"absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between gap-3 border-b border-gray-700 p-4 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3 sm:gap-4",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg sm:h-14 sm:w-14",children:(0,e.jsx)(er,{className:"h-5 w-5 sm:h-7 sm:w-7"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate text-lg font-bold text-white sm:text-2xl",children:"ویرایش محصول"}),(0,e.jsx)("p",{className:"mt-0.5 truncate text-xs text-gray-400 sm:text-sm",children:"اطلاعات محصول را تغییر دهید"})]})]}),(0,e.jsx)("button",{type:"button",onClick:i,"aria-label":"بستن پنجره ویرایش",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-gray-400 transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-red-400",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6",children:(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(Nn,{className:"h-4 w-4"}),"عنوان"]}),(0,e.jsx)("input",{type:"text",value:d.name,onChange:c=>{u("name",c.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(ht,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:d.price,onChange:c=>{u("price",Number(c.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(bt,{className:"h-4 w-4"}),"موجودی"]}),(0,e.jsx)("input",{type:"number",min:"0",inputMode:"numeric",value:d.stock,onChange:c=>{u("stock",Number(c.target.value)||0)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(Pl,{className:"h-4 w-4"}),"دسته‌بندی"]}),(0,e.jsx)("input",{type:"text",value:d.category,onChange:c=>{u("category",c.target.value)},className:"min-h-11 w-full rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400 sm:text-sm",children:[(0,e.jsx)(gt,{className:"h-4 w-4"}),"توضیحات"]}),(0,e.jsx)("textarea",{value:d.description,onChange:c=>{u("description",c.target.value)},rows:4,className:"w-full resize-none rounded-xl border-2 border-gray-700 bg-gray-800/50 px-3 py-2.5 text-sm text-white outline-none transition-all focus:border-cyan-500 sm:px-4 sm:py-3"})]})]})}),(0,e.jsxs)("div",{className:"grid shrink-0 grid-cols-2 gap-3 border-t border-gray-700 p-4 sm:flex sm:p-6",children:[(0,e.jsx)("button",{type:"button",onClick:i,className:"min-h-11 rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-xs font-bold text-gray-300 transition-all hover:bg-gray-700 sm:flex-1 sm:px-6 sm:text-sm",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:h,className:"min-h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-3 text-xs font-bold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 sm:flex-1 sm:px-6 sm:text-sm",children:(0,e.jsxs)("span",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Za,{className:"h-4 w-4"}),"ذخیره"]})})]})]})]})},or=({message:t})=>(0,e.jsxs)("div",{className:"rounded-2xl bg-white p-8 text-center shadow-lg md:p-16",children:[(0,e.jsx)("p",{className:"mb-4 text-5xl md:text-6xl",children:"🔒"}),(0,e.jsx)("p",{className:"text-base text-gray-500 md:text-xl",children:t})]}),yt=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),ft=({title:t,value:r,description:s,icon:d,iconClassName:b,valueClassName:n="text-gray-900 dark:text-gray-100"})=>(0,e.jsx)("article",{className:"rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:`mt-3 truncate text-2xl font-black sm:text-2xl ${n}`,children:r}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-500 dark:text-gray-400",children:s})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${b}`,children:d})]})}),Ol=({totalProducts:t,totalPrice:r,representatives:s=[],shipments:d=[]})=>{const b=Array.isArray(s)?s:[],n=Array.isArray(d)?d:[],p=b.filter(x=>x.status==="active").length,i=b.reduce((x,g)=>x+(Number(g.storeItemsCount)||0),0),u=b.reduce((x,g)=>x+(Number(g.storeItemsTotalValue)||0),0),h=b.reduce((x,g)=>x+(Number(g.last10DaysSales)||0),0),c=b.reduce((x,g)=>x+(Number(g.averageSales)||0),0),N=n.filter(x=>x.status==="delivered").length,v=n.filter(x=>x.status==="shipping").length,k=b.reduce((x,g)=>x+(Number(g.salesAnnouncementCount)||0),0);return(0,e.jsxs)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:[(0,e.jsx)(ft,{title:"تعداد نمایندگان فعال",value:yt(p),description:"نمایندگان با وضعیت فعال",icon:(0,e.jsx)(ta,{className:"h-6 w-6"}),iconClassName:"bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",valueClassName:"text-blue-700 dark:text-blue-400"}),(0,e.jsx)(ft,{title:"تعداد محصولات انبار",value:yt(i),description:"مجموع کالاهای ثبت‌شده در انبار نمایندگان",icon:(0,e.jsx)(sa,{className:"h-6 w-6"}),iconClassName:"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",valueClassName:"text-emerald-700 dark:text-emerald-400"}),(0,e.jsx)(ft,{title:"مجموع مبلغ کل انبارها",value:`${yt(u)} تومان`,description:"مجموع",icon:(0,e.jsx)(Sn,{className:"h-6 w-6"}),iconClassName:"bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400",valueClassName:"text-indigo-700 dark:text-indigo-400"}),(0,e.jsx)(ft,{title:"فروش ۱۰ روز قبل",value:`${yt(h)} تومان`,description:"جمع فروش نمایندگان در ۱۰ روز گذشته",icon:(0,e.jsx)(dl,{className:"h-6 w-6"}),iconClassName:"bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",valueClassName:"text-amber-700 dark:text-amber-400"}),(0,e.jsx)(ft,{title:"میانگین فروش ماهانه",value:`${yt(Math.round(c))} تومان`,description:"مجموع میانگین فروش ماهانه نمایندگان",icon:(0,e.jsx)(Nl,{className:"h-6 w-6"}),iconClassName:"bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400",valueClassName:"text-cyan-700 dark:text-cyan-400"}),(0,e.jsx)(ft,{title:"تعداد بارهای ارسال شده",value:yt(N),description:"مجموع بارهای تحویل‌شده",icon:(0,e.jsx)(tr,{className:"h-6 w-6"}),iconClassName:"bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400",valueClassName:"text-purple-700 dark:text-purple-400"}),(0,e.jsx)(ft,{title:"تعداد بارهای در حال ارسال",value:yt(v),description:"بارهای در مسیر تحویل",icon:(0,e.jsx)(It,{className:"h-6 w-6"}),iconClassName:"bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",valueClassName:"text-rose-700 dark:text-rose-400"}),(0,e.jsx)(ft,{title:"اعلام فروش نمایندگان",value:yt(k),description:"مجموع اعلام فروش ثبت‌شده توسط نمایندگان",icon:(0,e.jsx)(Cn,{className:"h-6 w-6"}),iconClassName:"bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",valueClassName:"text-orange-700 dark:text-orange-400"})]})},_l="http://localhost:5000/api",Bl=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:_l},Wl=Bl("https://myshop-backend-8nu7.onrender.com/api"),Vl=()=>{if(typeof window>"u")return"";const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"],s=[];window.sessionStorage&&s.push(window.sessionStorage),window.localStorage&&s.push(window.localStorage);for(const d of s){for(const b of t){const n=d.getItem(b);if(n&&n!=="null"&&n!=="undefined")return n.replace(/^Bearer\s+/i,"").trim()}for(const b of r){const n=d.getItem(b);if(n)try{const p=JSON.parse(n),i=p?.token||p?.accessToken||p?.authToken||p?.access_token||p?.data?.token;if(i)return String(i).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},St=t=>{const r=Number(t);return Number.isFinite(r)?r:0},_e=t=>St(t).toLocaleString("fa-IR"),Ql=t=>{const r=String(t?.name||"").toLowerCase();return r.endsWith(".xlsx")||r.endsWith(".xls")},Hl=t=>String(t.row??t.rowNumber??"نامشخص"),Jl=t=>"reason"in t&&t.reason?t.reason:"error"in t&&t.error?t.error:"message"in t&&t.message?t.message:"خطای نامشخص",xa=t=>"name"in t&&t.name?t.name:"productName"in t&&t.productName?t.productName:"بدون نام",ma=t=>String(t.row??t.rowNumber??"نامشخص"),pa=(t,r,s,d)=>{const b=St(r.createdCount),n=St(r.updatedCount),p=St(r.unchangedCount),i=St(r.zeroPriceCount),u=St(r.skippedCount),h=St(r.totalRows),c=St(r.totalProducts),N=[s?u>0?"⚠️ فایل ذخیره شد، اما بعضی ردیف‌ها ثبت نشدند":p>0?"✅ فایل ذخیره شد؛ بعضی محصولات از قبل وجود داشتند":"✅ فایل Excel با موفقیت ذخیره شد":"⚠️ فایل پردازش شد، اما تغییری ذخیره نشد","",`📄 نام فایل: ${t}`,`📊 تعداد ردیف‌ها: ${_e(h)}`,`➕ محصول جدید: ${_e(b)}`,`🔄 محصول به‌روزشده: ${_e(n)}`,`⏭️ بدون تغییر: ${_e(p)}`,`⚠️ قیمت صفر: ${_e(i)}`,`❌ ثبت‌نشده: ${_e(u)}`,`📦 کل محصولات: ${_e(c)}`];d&&!s&&(N.push(""),N.push(d)),r.createdProducts&&r.createdProducts.length>0&&(N.push(""),N.push(`محصولات اضافه‌شده (${_e(r.createdProducts.length)} مورد):`),r.createdProducts.forEach(k=>{N.push(`• ردیف ${ma(k)}: ${xa(k)} — ${_e(k.price)} تومان`)})),r.updatedProducts&&r.updatedProducts.length>0&&(N.push(""),N.push(`محصولات به‌روزشده (${_e(r.updatedProducts.length)} مورد):`),r.updatedProducts.forEach(k=>{N.push(`• ردیف ${ma(k)}: ${xa(k)} — قیمت جدید: ${_e(k.newPrice)} تومان`)})),r.unchangedProducts&&r.unchangedProducts.length>0&&(N.push(""),N.push(`محصولات بدون تغییر (${_e(r.unchangedProducts.length)} مورد):`),r.unchangedProducts.forEach(k=>{N.push(`• ردیف ${ma(k)}: ${xa(k)} — ${_e(k.price)} تومان`)}));const v=[...r.errors||[],...r.skippedRows||[]];return v.length>0&&(N.push(""),N.push(`جزئیات ردیف‌های ثبت‌نشده (${_e(v.length)} مورد):`),v.forEach(k=>{N.push(`• ردیف ${Hl(k)}: ${Jl(k)}`)})),N.join(`
`)},Yl=({onUploadSuccess:t})=>{const r=(0,a.useRef)(null),[s,d]=(0,a.useState)(!1),[b,n]=(0,a.useState)(!1),[p,i]=(0,a.useState)(null),u=()=>{if(b){window.alert("⏳ لطفاً صبر کنید؛ فایل قبلی هنوز در حال پردازش است.");return}r.current&&(r.current.value="",r.current.click())},h=async k=>{if(!Ql(k)){const x="فقط فایل Excel با فرمت .xlsx یا .xls مجاز است.";window.alert(`❌ خطا

${x}`),i({type:"error",text:x});return}if(!b){n(!0),i(null);try{const x=new FormData;x.append("file",k);const g=Vl(),w={Accept:"application/json"};g&&(w.Authorization=`Bearer ${g}`);const o=(await oe.post(`${Wl}/products/upload`,x,{withCredentials:!0,headers:w,timeout:12e4})).data,$=o.data||{};if(!o.success){const P=pa(k.name,$,!1,o.error||o.message);window.alert(P),i({type:"error",text:P});return}const q=pa(k.name,$,!0,o.message);window.alert(q),i({type:"success",text:q});try{await t()}catch(P){console.error("آپلود موفق بود، اما لیست تازه نشد:",P),i({type:"success",text:`${q}

⚠️ فایل ذخیره شد، اما لیست صفحه تازه نشد.`})}}catch(x){console.error("❌ خطا در آپلود Excel:",x);let g="هنگام آپلود فایل خطای غیرمنتظره‌ای رخ داد.";if(oe.isAxiosError(x)){const w=x.response?.status,o=x.response?.data;o?.data?g=pa(k.name,o.data,!1,o.error||o.message):g=o?.error||o?.message||x.message||g,w===401&&(g="جلسه ورود شما منقضی شده است؛ دوباره وارد شوید."),w===403&&(g="این حساب اجازه آپلود لیست قیمت را ندارد."),w===413&&(g="حجم فایل نباید بیشتر از ۱۰ مگابایت باشد."),x.response||(g="ارتباط با سرور برقرار نشد.")}else x instanceof Error&&(g=x.message);window.alert(`❌ خطا در آپلود Excel

${g}`),i({type:"error",text:g})}finally{n(!1),r.current&&(r.current.value="")}}},c=k=>{const x=k.currentTarget.files?.[0];k.currentTarget.value="",x&&h(x)},N=k=>{if(k.preventDefault(),k.stopPropagation(),k.type==="dragenter"||k.type==="dragover"){d(!0);return}k.type==="dragleave"&&d(!1)},v=k=>{if(k.preventDefault(),k.stopPropagation(),d(!1),b)return;const x=k.dataTransfer.files?.[0];x&&h(x)};return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-8",children:[(0,e.jsxs)("div",{className:"mb-6 text-center",children:[(0,e.jsxs)("h2",{className:"mb-2 flex items-center justify-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100",children:[(0,e.jsx)(Sr,{className:"h-6 w-6 text-purple-600 dark:text-purple-400"}),"آپلود هوشمند لیست قیمت"]}),(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"فایل Excel شامل عنوان محصول، قیمت محصول و دسته‌بندی"})]}),(0,e.jsxs)("div",{className:`rounded-2xl border-2 border-dashed p-8 text-center transition-all md:p-12 ${s?"border-purple-500 bg-purple-50 dark:bg-purple-900/20":"border-gray-300 hover:border-purple-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"}`,onDragEnter:N,onDragLeave:N,onDragOver:N,onDrop:v,children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-purple-500 dark:text-purple-400",children:(0,e.jsx)(es,{className:"h-16 w-16"})}),(0,e.jsx)("p",{className:"mb-2 text-lg font-medium text-gray-700 dark:text-gray-300",children:"فایل Excel را اینجا بکشید و رها کنید"}),(0,e.jsx)("p",{className:"mb-4 text-sm text-gray-500",children:"یا"}),(0,e.jsx)("input",{ref:r,type:"file",accept:".xlsx,.xls",onChange:c,className:"hidden"}),(0,e.jsx)("button",{type:"button",onClick:u,disabled:b,className:`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-lg transition-all ${b?"cursor-not-allowed bg-gray-400":"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"}`,children:b?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}),"در حال پردازش..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Sr,{className:"h-5 w-5"}),"انتخاب فایل Excel"]})}),b?(0,e.jsxs)("div",{className:"mt-6 flex flex-col items-center",children:[(0,e.jsx)(me,{className:"h-8 w-8 animate-spin text-purple-600"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"در حال ثبت محصولات و به‌روزرسانی لیست قیمت..."})]}):null]}),p?(0,e.jsxs)("div",{className:`mt-6 flex gap-3 rounded-xl border p-4 ${p.type==="success"?"border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20":"border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20"}`,children:[p.type==="success"?(0,e.jsx)(je,{className:"h-5 w-5 shrink-0 text-green-600 dark:text-green-400"}):(0,e.jsx)(Ae,{className:"h-5 w-5 shrink-0 text-red-600 dark:text-red-400"}),(0,e.jsx)("p",{className:`whitespace-pre-line text-sm font-bold leading-7 ${p.type==="success"?"text-green-800 dark:text-green-300":"text-red-800 dark:text-red-300"}`,children:p.text})]}):null,(0,e.jsxs)("div",{className:"mt-6 flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsx)(ml,{className:"h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-medium text-blue-800 dark:text-blue-300",children:"قالب فایل Excel"}),(0,e.jsxs)("p",{className:"mt-1 text-xs leading-6 text-blue-600 dark:text-blue-400",children:["ستون‌های فایل باید شامل"," ",(0,e.jsx)("strong",{children:"عنوان محصول"}),"،"," ",(0,e.jsx)("strong",{children:"قیمت محصول"})," و"," ",(0,e.jsx)("strong",{children:"دسته‌بندی"})," ","باشند. محصول بدون قیمت با قیمت صفر ثبت می‌شود."]})]})]})]})},Kl=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],Ns=t=>{const r=Number(t);return`${new Intl.NumberFormat("fa-IR").format(Number.isFinite(r)?r:0)} تومان`},Ct=t=>String(t??"").replace(/\u200c/g," ").replace(/\u200f/g,"").replace(/\u200e/g,"").replace(/\s+/g," ").trim().toLowerCase(),Jr=t=>String(t.name||t.productName||t.title||"بدون نام").trim(),zr=t=>String(t.brand||t.brandName||"").trim(),br=t=>String(t.category||"").trim(),ws=(t,r)=>{const s=String(t.id??"").trim();return s||`product-${Ct(Jr(t))}-${Ct(br(t))}-${r}`},An=({products:t,userRole:r,onEdit:s,onDelete:d})=>{const[b,n]=(0,a.useState)(""),[p,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),c=(0,a.useMemo)(()=>Array.isArray(t)?t.filter(Boolean):[],[t]),N=(0,a.useMemo)(()=>{const o=new Set;return Kl.forEach($=>{o.add($)}),c.forEach($=>{const q=br($);q&&o.add(q)}),Array.from(o)},[c]),v=(0,a.useMemo)(()=>{const o=new Set;return c.forEach($=>{const q=zr($);q&&o.add(q)}),Array.from(o).sort(($,q)=>$.localeCompare(q,"fa"))},[c]);(0,a.useEffect)(()=>{p&&!N.includes(p)&&i("")},[N,p]),(0,a.useEffect)(()=>{u&&!v.includes(u)&&h("")},[v,u]);const k=(0,a.useMemo)(()=>{const o=Ct(b),$=Ct(p),q=Ct(u);return c.filter(P=>{const O=Ct(Jr(P)),G=Ct(zr(P)),C=Ct(br(P));return(!o||O.includes(o)||G.includes(o)||C.includes(o))&&(!$||C===$)&&(!q||G===q)})},[c,b,p,u]),x=!!(b||p||u),g=()=>{n(""),i(""),h("")},w=r==="admin";return c.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(vn,{className:"h-16 w-16 md:h-24 md:w-24"})}),(0,e.jsx)("p",{className:"text-lg font-bold text-gray-500 dark:text-gray-400 md:text-xl",children:"هنوز محصولی اضافه نشده است"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"از بخش آپلود Excel شروع کنید."})]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4",children:[(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(Nn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"لیست قیمت محصولات"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:"قیمت‌های ثبت‌شده و به‌روزرسانی‌شده محصولات"})]})]}),(0,e.jsxs)("span",{className:"w-fit rounded-lg bg-gray-100 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:[new Intl.NumberFormat("fa-IR").format(k.length)," ","محصول"]})]}),(0,e.jsxs)("div",{className:"mt-4",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(Tl,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"فیلتر و جستجو"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ut,{className:"absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"text",value:b,onChange:o=>{n(o.target.value)},placeholder:"جستجوی عنوان، برند یا دسته‌بندی...",className:"w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:p,onChange:o=>{i(o.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),N.map(o=>(0,e.jsx)("option",{value:o,children:o},o))]}),(0,e.jsxs)("select",{value:u,onChange:o=>{h(o.target.value)},className:"w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),v.map(o=>(0,e.jsx)("option",{value:o,children:o},o))]})]}),x?(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[new Intl.NumberFormat("fa-IR").format(k.length)," ","محصول یافت شد"]}),(0,e.jsx)("button",{type:"button",onClick:g,className:"text-xs font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400",children:"پاک کردن فیلترها"})]}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full min-w-[860px] border-collapse text-right",children:[(0,e.jsx)("thead",{className:"border-b border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-right text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"عنوان"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"برند"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"border-l border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300",children:"قیمت فعلی"}),w?(0,e.jsx)("th",{className:"px-4 py-3 text-center text-sm font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:k.map((o,$)=>{const q=String(o.id??"").trim(),P=ws(o,$);return(0,e.jsxs)("tr",{className:"bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"max-w-[340px] border-l border-gray-100 px-4 py-4 text-right text-sm font-bold text-gray-800 dark:border-gray-700 dark:text-gray-200",children:(0,e.jsx)("p",{className:"line-clamp-2",children:Jr(o)})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400",children:zr(o)||"-"}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center dark:border-gray-700",children:(0,e.jsx)("span",{className:"rounded-md bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:br(o)||"عمومی"})}),(0,e.jsx)("td",{className:"border-l border-gray-100 px-4 py-4 text-center text-sm font-black text-blue-700 dark:border-gray-700 dark:text-blue-400",children:Ns(o.price)}),w?(0,e.jsx)("td",{className:"px-4 py-4",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(o)},className:"rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(er,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!q,onClick:()=>{q&&d(q)},className:"rounded-lg p-2 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(He,{className:"h-4 w-4"})})]})}):null]},P)})})]})}),(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:k.map((o,$)=>{const q=String(o.id??"").trim();return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"line-clamp-2 text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:Jr(o)}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[10px]",children:[(0,e.jsxs)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:["برند:"," ",zr(o)||"بدون برند"]}),(0,e.jsx)("span",{className:"rounded-md bg-gray-200 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300",children:br(o)||"عمومی"})]})]}),w?(0,e.jsxs)("div",{className:"flex shrink-0 gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{s(o)},className:"rounded-lg p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20","aria-label":"ویرایش محصول",children:(0,e.jsx)(er,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",disabled:!q,onClick:()=>{q&&d(q)},className:"rounded-lg p-2 text-red-600 hover:bg-red-100 disabled:opacity-40 dark:text-red-400 dark:hover:bg-red-900/20","aria-label":"حذف محصول",children:(0,e.jsx)(He,{className:"h-4 w-4"})})]}):null]}),(0,e.jsxs)("div",{className:"mt-4 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-gray-400 dark:text-gray-500",children:"قیمت فعلی"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-blue-700 dark:text-blue-400",children:Ns(o.price)})]})]},ws(o,$))})}),k.length===0?(0,e.jsxs)("div",{className:"py-10 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center text-gray-300 dark:text-gray-600",children:(0,e.jsx)(zl,{className:"h-10 w-10"})}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-400",children:"محصولی با این مشخصات پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:g,className:"mt-3 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400",children:"پاک‌کردن فیلترها"})]}):null]})]})},as=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Dn=t=>{const r=as(t).replace(/-/g,"/").replace(/[^\d/]/g,"").replace(/\//g,"").slice(0,8);return r.length<=4?r:r.length<=6?`${r.slice(0,4)}/${r.slice(4)}`:`${r.slice(0,4)}/${r.slice(4,6)}/${r.slice(6,8)}`},Tn=t=>/^1[34]\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/.test(t),Gt=t=>{const r=as(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?new Intl.NumberFormat("fa-IR").format(s):String(t??"—")},Ss=t=>String(t).padStart(2,"0"),Gl=({year:t,month:r,day:s})=>`${t}/${Ss(r)}/${Ss(s)}`,Cs=t=>{const r=Dn(t);if(!Tn(r))return null;const[s,d,b]=r.split("/").map(Number);return{year:s,month:d,day:b}},Xl=t=>{const r=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],s=t-621;let d=-14,b=r[0],n=0;for(let u=1;u<r.length;u+=1){const h=r[u];if(n=h-b,s<h)break;d+=Math.floor(n/33)*8+Math.floor(n%33/4),b=h}let p=s-b;d+=Math.floor(p/33)*8+Math.floor((p%33+3)/4),n%33===4&&n-p===4&&(d+=1),n-p<6&&(p=p-n+Math.floor((n+4)/33)*33);let i=(p+1)%33-1;return i===-1&&(i=4),i===0||i===4},Zl=(t,r)=>r>=1&&r<=6?31:r>=7&&r<=11?30:r===12?Xl(t)?30:29:30,ei=(t,r,s)=>{const d=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=[0,31,31,31,31,31,31,30,30,30,30,30,29],n=t-1600,p=r-1,i=s-1;let u=365*n+Math.floor((n+3)/4)-Math.floor((n+99)/100)+Math.floor((n+399)/400);for(let k=0;k<p;k+=1)u+=d[k+1];p>1&&(t%4===0&&t%100!==0||t%400===0)&&(u+=1),u+=i;let h=u-79;const c=Math.floor(h/12053);h%=12053;let N=979+33*c+4*Math.floor(h/1461);h%=1461,h>=366&&(N+=Math.floor((h-1)/365),h=(h-1)%365);let v=1;for(;v<=12&&h>=b[v];)h-=b[v],v+=1;return{year:N,month:v,day:h+1}},ti=(t,r,s)=>{const d=[0,31,28,31,30,31,30,31,31,30,31,30,31],b=t-979,n=r-1,p=s-1;let i=365*b+Math.floor(b/33)*8+Math.floor((b%33+3)/4);for(let v=0;v<n;v+=1)i+=v<6?31:30;i+=p;let u=i+79,h=1600+400*Math.floor(u/146097);u%=146097;let c=!0;u>=36525&&(u-=1,h+=100*Math.floor(u/36524),u%=36524,u>=365?u+=1:c=!1),h+=4*Math.floor(u/1461),u%=1461,u>=366&&(c=!1,u-=1,h+=Math.floor(u/365),u%=365);let N=0;for(;N<12&&u>=d[N+1]+(N===1&&c?1:0);)u-=d[N+1]+(N===1&&c?1:0),N+=1;return{year:h,month:N+1,day:u+1}},ri=(t,r,s)=>{const d=ti(t,r,s);return(new Date(d.year,d.month-1,d.day).getDay()+1)%7},ai=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],si=["ش","ی","د","س","چ","پ","ج"],ni=({value:t,onChange:r,disabled:s=!1,label:d="تاریخ"})=>{const[b,n]=(0,a.useState)(!1),[p,i]=(0,a.useState)(()=>Cs(t)||ei(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate())),u=Cs(t),h=x=>{r(Gl({...p,day:x})),n(!1)},c=x=>{i(g=>{let w=g.month+x,o=g.year;return w>12&&(w=1,o+=1),w<1&&(w=12,o-=1),{...g,year:o,month:w,day:1}})},N=Zl(p.year,p.month),v=ri(p.year,p.month,1),k=[];for(let x=0;x<v;x+=1)k.push(null);for(let x=1;x<=N;x+=1)k.push(x);return(0,e.jsxs)("div",{className:"relative w-full",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(hs,{className:"h-3.5 w-3.5 text-gray-400"}),d]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("input",{type:"text",readOnly:!0,value:t,onClick:()=>{s||n(x=>!x)},disabled:s,placeholder:"1403/01/01",className:"w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition-colors focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-500"}),(0,e.jsx)("button",{type:"button",onClick:()=>{s||n(x=>!x)},disabled:s,className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-blue-500 disabled:opacity-50",children:(0,e.jsx)(hs,{className:"h-4 w-4"})})]}),b?(0,e.jsxs)("div",{className:"absolute left-0 right-0 z-[100] mt-2 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:()=>c(1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(Cl,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})}),(0,e.jsxs)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:[ai[p.month-1]," ",Gt(p.year)]}),(0,e.jsx)("button",{type:"button",onClick:()=>c(-1),className:"rounded-lg p-1 transition hover:bg-gray-100 dark:hover:bg-gray-700",children:(0,e.jsx)(rl,{className:"h-5 w-5 text-gray-600 dark:text-gray-300"})})]}),(0,e.jsx)("div",{className:"mb-2 grid grid-cols-7 gap-1",children:si.map(x=>(0,e.jsx)("div",{className:"text-center text-xs font-bold text-gray-400",children:x},x))}),(0,e.jsx)("div",{className:"grid grid-cols-7 gap-1",children:k.map((x,g)=>{const w=u?.day===x&&u?.month===p.month&&u?.year===p.year;return(0,e.jsx)("button",{type:"button",disabled:!x,onClick:()=>{x&&h(x)},className:`h-8 w-full rounded-lg text-xs font-bold transition-all ${x?w?"bg-blue-600 text-white shadow-md":"text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700":"invisible"}`,children:x?Gt(x):""},`${x||"empty"}-${g}`)})}),(0,e.jsx)("div",{className:"mt-3 flex justify-end",children:(0,e.jsx)("button",{type:"button",onClick:()=>n(!1),className:"text-xs text-gray-500 transition hover:text-red-500",children:"بستن"})})]}):null]})},Yr=t=>as(t).replace(/[^\d]/g,""),$s=t=>{const r=Number(Yr(t));return!Number.isFinite(r)||r===0?"":r.toLocaleString("en-US")},yr=()=>{const t=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date);return`${t.find(r=>r.type==="year")?.value||""}/${t.find(r=>r.type==="month")?.value||""}/${t.find(r=>r.type==="day")?.value||""}`},Mr={name:"",email:"",phone:"",province:"",city:"",code:"",address:"",description:"",shopDescription:"",orders:0,status:"active",startDate:yr(),depositAmount:"0",guaranteeCheck:"0",totalFinancialCommitment:"0",shipmentsCount:0,storeItemsCount:0,storeItemsTotalValue:0,returnRequestsCount:0,last10DaysSales:0,averageSales:0},li=({representatives:t,userRole:r,onOpenDashboard:s,onAddRepresentative:d,onEditRepresentative:b,onDeleteRepresentative:n})=>{const[p,i]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[c,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(Mr),x=(0,a.useRef)(null),g=(0,a.useRef)(null),w=(0,a.useRef)(null),o=(0,a.useRef)(null),$=(0,a.useRef)(null),q=(0,a.useRef)(null),P=(0,a.useRef)(null),O=Number(Yr(v.depositAmount))||0,G=Number(Yr(v.guaranteeCheck))||0,C=(0,a.useMemo)(()=>O+G,[O,G]),S=(A,F)=>{A.key==="Enter"&&(A.preventDefault(),F.current?.focus())},f=()=>{const A=window.open("","_blank","width=900,height=700");if(!A){alert("لطفاً popup blocker را غیرفعال کنید");return}const F=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),y=t.map((m,L)=>`
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
    `).join("");A.document.write(`<!DOCTYPE html>
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
  <p>هلدینگ مهر - 1405</p>
</div>

</body>
</html>`),A.document.close(),A.focus(),setTimeout(()=>{A.print()},1e3)},I=A=>{A?(k({name:A.name??"",email:A.email??"",code:String(A.code??""),province:A.province??"",city:A.city??"",phone:A.phone??"",startDate:A.startDate||yr(),status:A.status==="inactive"?"inactive":"active",address:A.address??"",description:A.description??"",shopDescription:A.shopDescription??"",orders:Number(A.orders)||0,depositAmount:String(A.depositAmount??"0"),guaranteeCheck:String(A.guaranteeCheck??"0"),totalFinancialCommitment:String(A.totalFinancialCommitment??"0"),shipmentsCount:Number(A.shipmentsCount)||0,storeItemsCount:Number(A.storeItemsCount)||0,storeItemsTotalValue:Number(A.storeItemsTotalValue)||0,returnRequestsCount:Number(A.returnRequestsCount)||0,last10DaysSales:Number(A.last10DaysSales)||0,averageSales:Number(A.averageSales)||0}),N(String(A.id))):(k({...Mr,startDate:yr()}),N(null)),i(!0),window.setTimeout(()=>{x.current?.focus()},100)},_=()=>{u||(i(!1),N(null),k({...Mr,startDate:yr()}))},R=(A,F)=>{k(y=>({...y,[A]:Yr(F)||"0"}))},V=async A=>{A.preventDefault();const F=v.name.trim(),y=v.email.trim(),m=String(v.code??"").trim(),L=v.province.trim(),W=v.city.trim(),D=v.phone.trim(),j=Dn(v.startDate||"");if(!F){alert("لطفاً نام نماینده را وارد کنید."),x.current?.focus();return}if(!m){alert("لطفاً کد نمایندگی را وارد کنید."),g.current?.focus();return}if(!L){alert("لطفاً استان را وارد کنید.");return}if(!W){alert("لطفاً شهر را وارد کنید."),w.current?.focus();return}if(!D){alert("لطفاً شماره تلفن را وارد کنید."),o.current?.focus();return}if(!Tn(j)){alert("تاریخ قرارداد نامعتبر است. لطفاً از تقویم استفاده کنید.");return}h(!0);try{const U={name:F,email:y,code:m,province:L,city:W,phone:D,address:v.address.trim(),description:v.description.trim(),shopDescription:v.shopDescription.trim(),orders:Number(v.orders)||0,status:v.status==="inactive"?"inactive":"active",startDate:j,depositAmount:String(O),guaranteeCheck:String(G),totalFinancialCommitment:String(C),shipmentsCount:Number(v.shipmentsCount)||0,storeItemsCount:Number(v.storeItemsCount)||0,storeItemsTotalValue:Number(v.storeItemsTotalValue)||0,returnRequestsCount:Number(v.returnRequestsCount)||0,last10DaysSales:Number(v.last10DaysSales)||0,averageSales:Number(v.averageSales)||0};c?(await b(c,U),alert("اطلاعات نماینده با موفقیت ویرایش شد.")):(await d(U),alert("نماینده با موفقیت ثبت شد.")),i(!1),N(null),k({...Mr,startDate:yr()})}catch(U){console.error("خطا در ذخیره نماینده:",U),alert("خطا در ذخیره اطلاعات. لطفاً دوباره تلاش کنید.")}finally{h(!1)}},Q=async(A,F)=>{if(window.confirm(`آیا از حذف نماینده «${F}» مطمئن هستید؟`))try{await n(A)}catch(y){console.error("خطا در حذف نماینده:",y)}};return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-colors dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-800 dark:text-gray-100 md:text-xl",children:[(0,e.jsx)(ta,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"لیست نمایندگان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:[Gt(t.length)," ","نماینده ثبت شده"]})]}),r==="admin"?(0,e.jsxs)("div",{className:"flex gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:f,className:"flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ لیست"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>I(),className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 active:scale-95",children:[(0,e.jsx)(Dl,{className:"h-4 w-4"}),"افزودن نماینده"]})]}):null]}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"w-full",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b-2 border-gray-200 bg-gray-50 text-center text-lg dark:border-gray-800 dark:bg-gray-800/50",children:[(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"کد"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"نام"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"تلفن"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"سفارش‌ها"}),(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"وضعیت"}),r==="admin"?(0,e.jsx)("th",{className:"px-4 py-3 font-bold text-gray-700 dark:text-gray-300",children:"عملیات"}):null]})}),(0,e.jsx)("tbody",{children:t.length===0?(0,e.jsx)("tr",{children:(0,e.jsxs)("td",{colSpan:r==="admin"?7:6,className:"px-4 py-12 text-center text-gray-500 dark:text-gray-400",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(ms,{className:"h-12 w-12 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold",children:"هیچ نماینده‌ای یافت نشد"})]})}):t.map(A=>{const F=A.status!=="inactive";return(0,e.jsxs)("tr",{className:"border-b text-center transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50",children:[(0,e.jsx)("td",{className:"px-4 py-3 font-mono text-sm text-gray-700 dark:text-gray-300",children:A.code||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-800 dark:text-gray-200",children:A.name}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm text-gray-700 dark:text-gray-300",children:A.city||"---"}),(0,e.jsx)("td",{dir:"ltr",className:"px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300",children:A.phone||"---"}),(0,e.jsx)("td",{className:"px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300",children:Gt(A.orders||0)}),(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("span",{className:`inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${F?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[F?(0,e.jsx)(je,{className:"h-3.5 w-3.5"}):(0,e.jsx)(ot,{className:"h-3.5 w-3.5"}),F?"فعال":"غیرفعال"]})}),r==="admin"?(0,e.jsx)("td",{className:"px-4 py-3",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(A.id)),className:"rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95",children:"داشبورد"}),(0,e.jsxs)("button",{type:"button",onClick:()=>I(A),className:"flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:[(0,e.jsx)(er,{className:"h-3.5 w-3.5"}),"ویرایش"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(String(A.id),A.name)},className:"flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:[(0,e.jsx)(He,{className:"h-3.5 w-3.5"}),"حذف"]})]})}):null]},String(A.id))})})]})}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:t.length===0?(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)("div",{className:"mb-2 flex justify-center",children:(0,e.jsx)(ms,{className:"h-14 w-14 text-gray-300 dark:text-gray-600"})}),(0,e.jsx)("p",{className:"font-bold text-gray-500 dark:text-gray-400",children:"هیچ نماینده‌ای یافت نشد"})]}):t.map(A=>{const F=A.status!=="inactive";return(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:from-gray-800 dark:to-gray-900 dark:hover:border-blue-700",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-start justify-between",children:[(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:A.name}),(0,e.jsxs)("p",{className:"mt-1 font-mono text-xs text-gray-500 dark:text-gray-400",children:["کد:"," ",A.code||"---"]})]}),(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-bold ${F?"border-green-300 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400":"border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"}`,children:[F?(0,e.jsx)(je,{className:"h-3 w-3"}):(0,e.jsx)(ot,{className:"h-3 w-3"}),F?"فعال":"غیرفعال"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"شهر"}),(0,e.jsx)("p",{className:"font-bold text-gray-800 dark:text-gray-200",children:A.city||"---"})]}),(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"تلفن"}),(0,e.jsx)("p",{dir:"ltr",className:"font-bold text-gray-800 dark:text-gray-200",children:A.phone||"---"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"سفارش‌ها"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-200",children:Gt(A.orders||0)})]})]}),r==="admin"?(0,e.jsxs)("div",{className:"mt-3 flex items-center gap-2 border-t border-gray-200 pt-3 dark:border-gray-700",children:[(0,e.jsx)("button",{type:"button",onClick:()=>s(String(A.id)),className:"flex-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg",children:"داشبورد"}),(0,e.jsx)("button",{type:"button",onClick:()=>I(A),className:"flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 transition-all hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50",children:(0,e.jsx)(er,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{Q(String(A.id),A.name)},className:"flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-all hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50",children:(0,e.jsx)(He,{className:"h-4 w-4"})})]}):null]},String(A.id))})}),p?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-3 md:p-4",children:(0,e.jsxs)("div",{className:"max-h-[92dvh] w-full min-w-0 max-w-3xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center justify-between gap-2 border-b border-gray-100 pb-4 dark:border-gray-800",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:c?"ویرایش اطلاعات نماینده":"افزودن نماینده جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:c?"اطلاعات نماینده را اصلاح کرده و ذخیره کنید.":"اطلاعات اولیه و مالی نماینده را وارد کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:_,disabled:u,className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-red-900/30 dark:hover:text-red-400",children:(0,e.jsx)(we,{className:"h-4 w-4"})})]}),(0,e.jsxs)("form",{onSubmit:A=>{V(A)},className:"space-y-5",children:[(0,e.jsxs)("section",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)($r,{className:"h-4 w-4"}),"اطلاعات پایه نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)($r,{className:"h-3.5 w-3.5 text-gray-400"}),"نام نماینده",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:x,type:"text",value:v.name,onChange:A=>k(F=>({...F,name:A.target.value})),onKeyDown:A=>S(A,g),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"نام نماینده",required:!0,autoFocus:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(jl,{className:"h-3.5 w-3.5 text-gray-400"}),"کد نمایندگی",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:g,type:"text",value:v.code,onChange:A=>k(F=>({...F,code:A.target.value})),onKeyDown:A=>S(A,w),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"مثلاً 1001",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Dt,{className:"h-3.5 w-3.5 text-gray-400"}),"استان",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{type:"text",value:v.province,onChange:A=>k(F=>({...F,province:A.target.value})),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"استان",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(Dt,{className:"h-3.5 w-3.5 text-gray-400"}),"شهر",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:w,type:"text",value:v.city,onChange:A=>k(F=>({...F,city:A.target.value})),onKeyDown:A=>S(A,o),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"شهر",required:!0})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(na,{className:"h-3.5 w-3.5 text-gray-400"}),"تلفن",(0,e.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,e.jsx)("input",{ref:o,type:"text",dir:"ltr",value:v.phone,onChange:A=>k(F=>({...F,phone:A.target.value})),onKeyDown:A=>S(A,$),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"09xxxxxxxxx",required:!0})]}),(0,e.jsx)("div",{className:"min-w-0",children:(0,e.jsx)(ni,{label:"تاریخ قرارداد شمسی",value:v.startDate,disabled:u,onChange:A=>k(F=>({...F,startDate:A}))})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("label",{className:"mb-1 flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300",children:[(0,e.jsx)(us,{className:"h-3.5 w-3.5 text-gray-400"}),"وضعیت"]}),(0,e.jsxs)("select",{ref:$,value:v.status,onChange:A=>k(F=>({...F,status:A.target.value==="inactive"?"inactive":"active"})),onKeyDown:A=>S(A,q),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-400",children:[(0,e.jsx)(Dt,{className:"h-4 w-4"}),"آدرس و توضیحات"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 md:col-span-2",children:[(0,e.jsx)("label",{htmlFor:"representative-address",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{id:"representative-address",rows:3,maxLength:1e3,value:v.address,onChange:A=>k(F=>({...F,address:A.target.value})),disabled:u,placeholder:"استان، شهر، خیابان، پلاک و کد پستی",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{id:"representative-description",rows:4,maxLength:3e3,value:v.description,onChange:A=>k(F=>({...F,description:A.target.value})),disabled:u,placeholder:"توضیحات مربوط به نماینده",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{htmlFor:"representative-shop-description",className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{id:"representative-shop-description",rows:2,maxLength:3e3,value:v.shopDescription,onChange:A=>k(F=>({...F,shopDescription:A.target.value})),disabled:u,placeholder:"مشخصات، موقعیت یا شرایط مغازه",className:"w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm leading-7 text-gray-800 outline-none focus:border-blue-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),(0,e.jsxs)("section",{className:"border-t border-gray-100 pt-4 dark:border-gray-800",children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 text-sm font-black text-purple-700 dark:text-purple-400",children:[(0,e.jsx)(ht,{className:"h-4 w-4"}),"اطلاعات مالی"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ ودیعه"}),(0,e.jsx)("input",{ref:q,type:"text",inputMode:"numeric",dir:"ltr",value:$s(v.depositAmount),onChange:A=>R("depositAmount",A.target.value),onKeyDown:A=>S(A,P),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مبلغ چک ضمانت"}),(0,e.jsx)("input",{ref:P,type:"text",inputMode:"numeric",dir:"ltr",value:$s(v.guaranteeCheck),onChange:A=>R("guaranteeCheck",A.target.value),disabled:u,className:"w-full min-w-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-sm font-bold text-gray-800 outline-none focus:border-purple-500 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",placeholder:"0"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("label",{className:"mb-1 block text-xs font-bold text-gray-700 dark:text-gray-300",children:"مجموع تعهد مالی"}),(0,e.jsx)("div",{dir:"ltr",className:"w-full rounded-xl border border-purple-200 bg-purple-50 px-3 py-2 text-center text-sm font-black text-purple-700 dark:border-purple-900/50 dark:bg-purple-900/20 dark:text-purple-300",children:Gt(C)})]})]}),(0,e.jsxs)("p",{className:"mt-3 flex items-start gap-2 rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)(us,{className:"mt-0.5 h-3.5 w-3.5 shrink-0"}),"اطلاعات آماری داشبورد از طریق فایل اکسل در بخش انبار نماینده وارد خواهد شد."]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-100 pt-5 dark:border-gray-800 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:_,disabled:u,className:"min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-800 transition-all hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"submit",disabled:u,className:"min-h-11 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 disabled:cursor-not-allowed disabled:opacity-60",children:u?"در حال ذخیره...":c?"ذخیره تغییرات":"ثبت نماینده"})]})]})]})}):null]})},ii={name:"",email:"",code:"",province:"",city:"",phone:"",startDate:"",status:"active",address:"",description:"",shopDescription:""},oi=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),mt=t=>{const r=oi(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Ze=t=>new Intl.NumberFormat("fa-IR").format(mt(t)),Pt=t=>new Intl.NumberFormat("fa-IR").format(mt(t)),di=(t,r)=>{if(t&&String(t).split("/").length===3)return t;if(r)try{return new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(r))}catch{return r}return"—"},ha=t=>[String(t.province??"").trim(),String(t.city??"").trim()].filter(Boolean).join(" — ")||"ثبت نشده",jt=()=>{if(typeof window>"u")return"";for(const t of["token","accessToken","authToken","adminToken","admin_access_token"]){const r=window.sessionStorage.getItem(t);if(r?.trim())return r.trim();const s=window.localStorage.getItem(t);if(s?.trim())return s.trim()}return""},vt=async t=>{const r=await t.text();if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error(`پاسخ JSON نیست. کد پاسخ: ${t.status}. ${r.slice(0,120)}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ JSON معتبر نیست. کد پاسخ: ${t.status}`)}},ci=t=>{const r=["jpg","jpeg","png","gif","webp","svg"],s=t.name.split(".").pop()?.toLowerCase();return!!(s&&r.includes(s))},Ke=({title:t,children:r,index:s})=>(0,e.jsx)("div",{className:"group relative min-h-[160px] overflow-hidden rounded-[20px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 p-3 shadow-[0_6px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)] dark:border-gray-700 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 dark:shadow-none sm:min-h-[180px] sm:p-4 md:rounded-[24px] md:p-5",style:{animation:`cardEnter 550ms ease-out ${s*70}ms both`},children:(0,e.jsxs)("div",{className:"relative z-10 flex h-full flex-col",children:[(0,e.jsx)("div",{className:"w-full rounded-lg border border-blue-100 bg-slate-800 px-3 py-2 text-center text-xs font-black text-white shadow-sm dark:border-slate-600 dark:bg-slate-700 sm:px-4 sm:py-2.5 sm:text-sm md:text-base",children:t}),(0,e.jsxs)("div",{className:"relative mt-3 flex flex-1 items-center justify-center overflow-hidden rounded-[14px] border border-slate-100 bg-white p-3 text-center shadow-[0_4px_14px_rgba(15,23,42,0.06)] dark:border-gray-700 dark:bg-gray-800 sm:mt-4 sm:p-4",children:[(0,e.jsx)("div",{className:"relative z-20 w-full",children:r}),(0,e.jsx)("div",{className:"pointer-events-none absolute -right-6 -top-6 z-10 h-20 w-20 rounded-full border-[8px] border-blue-100/70 bg-blue-200/50 transition-transform duration-500 group-hover:scale-110 dark:border-blue-900/40 dark:bg-blue-800/30 sm:-right-7 sm:-top-7 sm:h-28 sm:w-28"}),(0,e.jsx)("div",{className:"pointer-events-none absolute -bottom-8 -left-8 z-0 h-24 w-24 rounded-full bg-blue-100/50 blur-xl dark:bg-blue-900/20"})]})]})}),xi=({representative:t,apiUrl:r,onBack:s,files:d=[],loadingFiles:b=!1,onViewFile:n,onDeleteFile:p,onRepresentativeUpdated:i,onRefreshFiles:u})=>{const[h,c]=(0,a.useState)(t),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)(!0),[g,w]=(0,a.useState)(""),[o,$]=(0,a.useState)([]),[q,P]=(0,a.useState)(!1),[O,G]=(0,a.useState)(""),[C,S]=(0,a.useState)([]),[f,I]=(0,a.useState)(!0),[_,R]=(0,a.useState)(""),[V,Q]=(0,a.useState)(!1),[A,F]=(0,a.useState)(""),[y,m]=(0,a.useState)(null),[L,W]=(0,a.useState)(""),[D,j]=(0,a.useState)(null),[U,Z]=(0,a.useState)(!1),[B,ge]=(0,a.useState)(ii),[te,ee]=(0,a.useState)(!1),[se,H]=(0,a.useState)(""),[ie,pe]=(0,a.useState)(!1),[E,J]=(0,a.useState)([]),[ae,l]=(0,a.useState)(!1),[z,Y]=(0,a.useState)(""),[he,ye]=(0,a.useState)(!1),[re,de]=(0,a.useState)(!1),[T,K]=(0,a.useState)([]),ce=Array.isArray(d)?d:[],ve=(0,a.useMemo)(()=>{const M=[],X=new Set;return[...ce,...T].forEach(le=>{const ne=String(le.name??"").trim().toLowerCase();!ne||X.has(ne)||(X.add(ne),M.push(le))}),M},[ce,T]),De=(0,a.useMemo)(()=>{const M=String(r||"").trim().replace(/\/+$/,"");return M?M.endsWith("/api")?M:`${M}/api`:"http://localhost:5000/api"},[r]),Ee=String(h.id).trim(),Rt=Ee?`${De}/representatives/${encodeURIComponent(Ee)}/warehouse`:"",$e=Ee?`${De}/representatives/${encodeURIComponent(Ee)}/notes`:"",Tr=`${De}/sales-from-warehouse/admin/all`;(0,a.useEffect)(()=>{c(t)},[t]);const sr=()=>{ge({name:h.name??"",email:h.email??"",code:String(h.code??""),province:h.province??"",city:h.city??"",phone:h.phone??"",startDate:h.startDate??"",status:h.status==="inactive"?"inactive":"active",address:h.address??"",description:h.description??"",shopDescription:h.shopDescription??""}),H(""),Z(!0)},We=M=>{const{name:X,value:le}=M.currentTarget;ge(ne=>({...ne,[X]:le}))},dt=async M=>{if(M.preventDefault(),!B.province.trim()){H("استان را وارد کنید.");return}if(!B.city.trim()){H("شهر را وارد کنید.");return}const X=jt();if(!X){H("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}const le={name:B.name.trim(),email:B.email.trim(),code:B.code.trim(),province:B.province.trim(),city:B.city.trim(),phone:B.phone.trim(),startDate:B.startDate.trim(),status:B.status,address:B.address.trim(),description:B.description.trim(),shopDescription:B.shopDescription.trim()};try{ee(!0),H("");const ne=await fetch(`${De}/representatives/${encodeURIComponent(Ee)}`,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${X}`},body:JSON.stringify(le)}),xe=await vt(ne);if(!ne.ok||!xe.success||!xe.data)throw new Error(xe.error||"ویرایش نماینده ناموفق بود.");c(xe.data),i?.(xe.data),Z(!1)}catch(ne){console.error("خطا در ویرایش نماینده:",ne),H(ne instanceof Error?ne.message:"ویرایش نماینده ناموفق بود.")}finally{ee(!1)}},Et=(0,a.useCallback)(async()=>{if(!Rt){v([]),w("شناسه نماینده پیدا نشد."),x(!1);return}const M=jt();if(!M){v([]),w("توکن ادمین پیدا نشد."),x(!1);return}try{x(!0),w("");const X=await fetch(Rt,{headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),le=await vt(X);if(!X.ok||!le.success)throw new Error(le.error||"دریافت موجودی انبار ناموفق بود.");v(Array.isArray(le.data?.items)?le.data.items:[])}catch(X){v([]),w(X instanceof Error?X.message:"دریافت موجودی انبار ناموفق بود.")}finally{x(!1)}},[Rt]),Rr=(0,a.useCallback)(async()=>{const M=jt();if(!M){$([]),G("برای مشاهده فروش‌ها وارد حساب ادمین شوید."),P(!1);return}try{P(!0),G("");const X=await fetch(Tr,{headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),le=await vt(X);if(!X.ok||!le.success)throw new Error(le.error||"دریافت گزارش فروش ناموفق بود.");const ne=Array.isArray(le.data)?le.data:[];$(ne.filter(xe=>String(xe.representativeId)===Ee))}catch(X){$([]),G(X instanceof Error?X.message:"دریافت گزارش فروش ناموفق بود.")}finally{P(!1)}},[Tr,Ee]),Pe=(0,a.useCallback)(async()=>{if(!$e){S([]),F("شناسه نماینده پیدا نشد."),I(!1);return}const M=jt();if(!M){S([]),F("برای مشاهده یادداشت‌ها وارد حساب ادمین شوید."),I(!1);return}try{I(!0),F("");const X=await fetch($e,{headers:{Accept:"application/json",Authorization:`Bearer ${M}`}}),le=await vt(X);if(!X.ok||!le.success)throw new Error(le.error||"دریافت یادداشت‌ها ناموفق بود.");S(Array.isArray(le.data)?le.data:[])}catch(X){S([]),F(X instanceof Error?X.message:"دریافت یادداشت‌ها ناموفق بود.")}finally{I(!1)}},[$e]);(0,a.useEffect)(()=>{Et(),Rr(),Pe()},[Et,Rr,Pe]);const Fe=async M=>{M.preventDefault();const X=_.trim();if(!X||!$e){F("متن یادداشت را وارد کنید.");return}const le=jt();if(!le){F("برای ثبت یادداشت وارد حساب ادمین شوید.");return}try{Q(!0),F("");const ne=await fetch($e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${le}`},body:JSON.stringify({text:X})}),xe=await vt(ne);if(!ne.ok||!xe.success||!xe.data)throw new Error(xe.error||"ثبت یادداشت ناموفق بود.");S(ze=>[xe.data,...ze]),R("")}catch(ne){F(ne instanceof Error?ne.message:"ثبت یادداشت ناموفق بود.")}finally{Q(!1)}},Bt=M=>{m(String(M.id)),W(M.text),F("")},Wt=()=>{m(null),W(""),j(null)},ia=async M=>{const X=L.trim();if(!X||!$e){F("متن یادداشت نمی‌تواند خالی باشد.");return}const le=jt();if(!le){F("برای ویرایش یادداشت دوباره وارد شوید.");return}try{j(M),F("");const ne=await fetch(`${$e}/${encodeURIComponent(M)}`,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${le}`},body:JSON.stringify({text:X})}),xe=await vt(ne);if(!ne.ok||!xe.success||!xe.data)throw new Error(xe.error||"ویرایش یادداشت ناموفق بود.");S(ze=>ze.map(Oe=>String(Oe.id)===M?xe.data:Oe)),Wt()}catch(ne){F(ne instanceof Error?ne.message:"ویرایش یادداشت ناموفق بود.")}finally{j(null)}},Vt=async M=>{if(!window.confirm("آیا از حذف این یادداشت مطمئن هستید؟")||!$e)return;const X=jt();if(!X){F("برای حذف یادداشت دوباره وارد شوید.");return}try{j(M);const le=await fetch(`${$e}/${encodeURIComponent(M)}`,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${X}`}}),ne=await vt(le);if(!le.ok||!ne.success)throw new Error(ne.error||"حذف یادداشت ناموفق بود.");S(xe=>xe.filter(ze=>String(ze.id)!==M))}catch(le){F(le instanceof Error?le.message:"حذف یادداشت ناموفق بود.")}finally{j(null)}},nr=["jpg","jpeg","png","gif","webp","pdf","doc","docx","xls","xlsx","zip","rar"],Qt=M=>String(M||"").split(".").pop()?.toLowerCase()?.trim()||"",qn=M=>{const X=Qt(M.name);return nr.includes(X)},On=M=>M.size>0,os=M=>!M||M<=0?"—":M<1024?`${M} B`:M<1048576?`${(M/1024).toFixed(1)} KB`:`${(M/1048576).toFixed(1)} MB`,_n=()=>{pe(!0),J([]),Y(""),ye(!1)},oa=()=>{ae||(pe(!1),J([]),Y(""),ye(!1),de(!1))},ds=M=>{if(!M||M.length===0)return;const X=Array.from(M),le=[],ne=[];X.forEach(xe=>{if(!qn(xe)){ne.push(`نوع فایل "${xe.name}" مجاز نیست.`);return}if(!On(xe)){ne.push(`فایل "${xe.name}" خالی است.`);return}le.push(xe)}),J(xe=>[...xe,...le]),Y(ne.join(" ")),ye(!1)},Bn=M=>{J(X=>X.filter((le,ne)=>ne!==M))},Wn=M=>{M.preventDefault(),M.stopPropagation(),de(!0)},Vn=M=>{M.preventDefault(),M.stopPropagation(),de(!1)},Qn=M=>{M.preventDefault(),M.stopPropagation()},Hn=M=>{M.preventDefault(),M.stopPropagation(),de(!1),ds(M.dataTransfer.files)},Jn=async()=>{if(E.length===0){Y("حداقل یک فایل انتخاب کنید.");return}const M=jt();if(!M){Y("توکن ادمین پیدا نشد. دوباره وارد شوید.");return}if(!Ee){Y("شناسه نماینده پیدا نشد.");return}try{l(!0),Y(""),ye(!1);const X=new FormData;E.forEach(Oe=>{X.append("files",Oe)});const le=`${De}/representatives/${encodeURIComponent(Ee)}/files`,ne=await fetch(le,{method:"POST",headers:{Authorization:`Bearer ${M}`,Accept:"application/json"},body:X}),xe=await vt(ne);if(!ne.ok||!xe.success)throw new Error(xe.error||"آپلود فایل‌ها ناموفق بود.");ye(!0);const ze=Array.isArray(xe.data?.files)?xe.data.files:[];if(ze.length>0)K(Oe=>[...Oe,...ze]);else{const Oe=E.map((Je,Se)=>({id:`local-${Date.now()}-${Se}`,name:Je.name,size:os(Je.size),uploadedAt:new Intl.DateTimeFormat("fa-IR").format(new Date),representativeId:Ee}));K(Je=>[...Je,...Oe])}J([]),u?.(),setTimeout(()=>{pe(!1),ye(!1)},1500)}catch(X){Y(X instanceof Error?X.message:"آپلود فایل‌ها ناموفق بود.")}finally{l(!1)}},Yn=(0,a.useMemo)(()=>N.reduce((M,X)=>M+mt(X.quantity),0),[N]),Kn=(0,a.useMemo)(()=>N.reduce((M,X)=>M+mt(X.totalPrice),0),[N]),Gn=(0,a.useMemo)(()=>{const M=new Date,X=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(M),le=parseInt(X.find(Se=>Se.type==="year")?.value||"0",10),ne=parseInt(X.find(Se=>Se.type==="month")?.value||"0",10),xe=parseInt(X.find(Se=>Se.type==="day")?.value||"0",10),ze=Se=>{if(!Se||typeof Se!="string")return-1;const Ye=Se.split("/");if(Ye.length<3)return-1;const Er=parseInt(Ye[1],10),lr=parseInt(Ye[2],10);if(!Er||!lr)return-1;let ir=lr;const el=[31,31,31,31,31,31,30,30,30,30,30,29];for(let da=0;da<Er-1;da++)ir+=el[da];return ir},Oe=ze(`${le}/${ne}/${xe}`),Je=new Date(M);return Je.setDate(Je.getDate()-9),o.filter(Se=>{if(Se.createdAt){const Ye=new Date(Se.createdAt);if(!Number.isNaN(Ye.getTime())&&Ye>=Je&&Ye<=M)return!0}if(Se.saleDate&&Oe>0){const Ye=String(Se.saleDate).split("/");if(Ye.length<3)return!1;const Er=parseInt(Ye[0],10),lr=ze(Se.saleDate);if(lr<0)return!1;if(Er===le){const ir=Oe-lr;if(ir>=0&&ir<=9)return!0}}return!1}).reduce((Se,Ye)=>Se+mt(Ye.totalAmount),0)},[o]),Xn=(0,a.useMemo)(()=>{const M=new Date,X=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(M),le=`${X.find(ne=>ne.type==="year")?.value||""}/${X.find(ne=>ne.type==="month")?.value||""}`;return o.filter(ne=>{const xe=String(ne.saleDate||"");if(!xe)return!1;const ze=xe.split("/");if(ze.length<3)return!1;const Oe=ze[0],Je=ze[1],Se=parseInt(ze[2],10);return`${Oe}/${Je}`!==le?!1:[10,20,30].includes(Se)}).reduce((ne,xe)=>ne+mt(xe.totalAmount),0)},[o]),cs=mt(h.depositAmount),xs=mt(h.guaranteeCheck),Zn=mt(h.totalFinancialCommitment)||cs+xs;return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-5",children:[(0,e.jsx)("style",{children:`
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
        `}),(0,e.jsx)("section",{className:"overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-l from-slate-950 via-slate-900 to-blue-950 p-4 text-white shadow-[0_12px_30px_rgba(15,23,42,0.34)] md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"order-2 min-w-0 flex-1 sm:order-1",children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2",children:[(0,e.jsx)("span",{className:"h-2.5 w-2.5 rounded-full bg-cyan-400"}),(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-200 md:text-sm",children:"پنل مدیریت نمایندگی"})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-right",children:[(0,e.jsxs)("p",{className:"text-sm font-bold text-slate-200 md:text-base",children:["داشبورد نمایندگی"," ",(0,e.jsx)("span",{className:"text-white",children:ha(h)})]}),(0,e.jsx)("span",{className:"hidden h-6 w-px bg-slate-600 sm:block",children:"|"}),(0,e.jsxs)("h2",{className:"text-xl font-black leading-9 text-white md:text-2xl",children:["جناب آقای"," ",(0,e.jsx)("span",{className:"text-cyan-200",children:h.name||"نماینده"})]})]})]}),(0,e.jsxs)("div",{className:"order-1 flex gap-2 sm:order-2",children:[(0,e.jsx)("button",{type:"button",onClick:sr,className:"flex min-h-10 items-center gap-2 rounded-xl border border-cyan-300 bg-cyan-400/20 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-400/30",children:"ویرایش"}),(0,e.jsxs)("button",{type:"button",onClick:s,className:"flex min-h-10 items-center gap-2 rounded-xl border border-slate-500 bg-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/20",children:[(0,e.jsx)(bl,{className:"h-4 w-4"}),"بازگشت"]})]})]})}),U?(0,e.jsxs)("section",{className:"rounded-[28px] border border-blue-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-slate-800 dark:text-gray-100",children:"ویرایش اطلاعات نماینده"}),(0,e.jsx)("button",{type:"button",onClick:()=>{Z(!1),H("")},className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}),(0,e.jsxs)("form",{onSubmit:dt,className:"space-y-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"اطلاعات پایه نماینده"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"نام نماینده*"}),(0,e.jsx)("input",{name:"name",value:B.name,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"ایمیل"}),(0,e.jsx)("input",{name:"email",type:"email",value:B.email,onChange:We,placeholder:"example@email.com",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"کد نمایندگی*"}),(0,e.jsx)("input",{name:"code",value:B.code,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"استان*"}),(0,e.jsx)("input",{name:"province",value:B.province,onChange:We,required:!0,placeholder:"مثلاً قزوین",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"شهر*"}),(0,e.jsx)("input",{name:"city",value:B.city,onChange:We,required:!0,placeholder:"مثلاً مهرگان",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تلفن*"}),(0,e.jsx)("input",{name:"phone",value:B.phone,onChange:We,required:!0,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"تاریخ قرارداد شمسی"}),(0,e.jsx)("input",{name:"startDate",value:B.startDate,onChange:We,placeholder:"۱۴۰۳/۰۱/۰۱",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"وضعیت"}),(0,e.jsxs)("select",{name:"status",value:B.status,onChange:We,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"active",children:"فعال"}),(0,e.jsx)("option",{value:"inactive",children:"غیرفعال"})]})]})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"mb-4 text-base font-black text-slate-800 dark:text-gray-100",children:"آدرس و توضیحات"}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"space-y-2 md:col-span-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"آدرس دقیق"}),(0,e.jsx)("textarea",{name:"address",value:B.address,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"توضیحات"}),(0,e.jsx)("textarea",{name:"description",value:B.description,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("label",{className:"space-y-2",children:[(0,e.jsx)("span",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متراژ مغازه"}),(0,e.jsx)("textarea",{name:"shopDescription",value:B.shopDescription,onChange:We,rows:4,className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]})]})]}),se?(0,e.jsx)("p",{className:"rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:se}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:te,className:"min-h-11 rounded-xl bg-blue-600 px-6 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:te?"در حال ذخیره...":"ذخیره تغییرات"})})]})]}):null,(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-blue-700"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"اطلاعات پایه و تعهدات مالی"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(Ke,{index:0,title:"کد نمایندگی",children:(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:h.code?Ze(h.code):"—"})}),(0,e.jsx)(Ke,{index:1,title:"استان — شهر نمایندگی",children:(0,e.jsx)("p",{title:ha(h),className:"truncate text-3xl font-black text-slate-800 dark:text-gray-100",children:ha(h)})}),(0,e.jsx)(Ke,{index:2,title:"تاریخ قرارداد شمسی",children:(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)("p",{className:"text-3xl font-black text-slate-800 dark:text-gray-100",children:h.startDate||"—"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-500 dark:text-gray-400",children:"تاریخ شروع همکاری"})]})}),(0,e.jsx)(Ke,{index:3,title:"مبلغ ودیعه",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Pt(cs)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:4,title:"مبلغ چک ضمانت",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Pt(xs)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:5,title:"مجموع تعهد مالی",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:Pt(Zn)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[28px] border border-blue-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-gray-800 dark:bg-gray-900 sm:p-5 md:p-6",children:[(0,e.jsxs)("h3",{className:"mb-4 flex items-center gap-2 text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:[(0,e.jsx)(Dt,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آدرس و توضیحات نماینده"]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800 md:col-span-2",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"آدرس دقیق"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:h.address||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"توضیحات"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:h.description||"ثبت نشده"})]}),(0,e.jsxs)("div",{className:"min-w-0 rounded-xl bg-slate-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"متراژ مغازه"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:h.shopDescription||"ثبت نشده"})]})]})]}),(0,e.jsxs)("section",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"h-6 w-1 rounded-full bg-emerald-600"}),(0,e.jsx)("h3",{className:"text-base font-black text-slate-800 dark:text-gray-100 sm:text-lg",children:"عملکرد نمایندگی"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Et()},disabled:k,className:"flex min-h-9 items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400",children:[(0,e.jsx)(Re,{className:`h-3.5 w-3.5 ${k?"animate-spin":""}`}),"بروزرسانی موجودی"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsx)(Ke,{index:6,title:"تعداد",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(tr,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:Ze(h.shipmentsCount??0)})]})}),(0,e.jsx)(Ke,{index:7,title:"تعداد موجود در انبار فروشگاه",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(bt,{className:"h-8 w-8 text-purple-600 dark:text-purple-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:k?"...":Ze(Yn)})]})}),(0,e.jsx)(Ke,{index:8,title:"مجموع مبلغ اجناس فروشگاه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(It,{className:"h-8 w-8 text-emerald-600 dark:text-emerald-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:k?"...":Pt(Kn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:9,title:"درخواست‌های مرجوعی",children:(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Xa,{className:"h-8 w-8 text-orange-600 dark:text-orange-400"}),(0,e.jsx)("p",{className:"text-4xl font-black text-slate-800 dark:text-gray-100",children:Ze(h.returnRequestsCount??0)})]})}),(0,e.jsx)(Ke,{index:10,title:"فروش ۱۰ روز گذشته",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(Ir,{className:"h-8 w-8 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:q?"...":Pt(Gn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})}),(0,e.jsx)(Ke,{index:11,title:"فروش ۳ روز مجاز ماه",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,e.jsx)(it,{className:"h-8 w-8 text-amber-600 dark:text-amber-400"}),(0,e.jsx)("p",{dir:"ltr",className:"truncate text-2xl font-black text-slate-800 dark:text-gray-100 sm:text-3xl",children:q?"...":Pt(Xn)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-slate-500 dark:text-gray-400",children:"تومان"})]})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex flex-col items-start justify-between gap-3 border-b border-blue-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(vl,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"پرونده‌ها و اسناد نماینده"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400 md:text-sm",children:["مشاهده و مدیریت فایل‌های مربوط به"," ",h.name||"نماینده"]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 md:text-sm",children:[Ze(ve.length)," پرونده"]}),(0,e.jsxs)("button",{type:"button",onClick:_n,className:"flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50 md:text-sm",children:[(0,e.jsx)(Pr,{className:"h-4 w-4"}),"آپلود فایل"]})]})]}),b?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-blue-50 p-6 text-center dark:bg-gray-800",children:[(0,e.jsx)(me,{className:"mb-4 h-10 w-10 animate-spin text-blue-600 dark:text-blue-400"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600 dark:text-gray-300",children:"در حال بارگذاری پرونده‌ها..."})]}):ve.length===0?(0,e.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(Il,{className:"mb-3 h-16 w-16 text-blue-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-300",children:"هنوز پرونده‌ای برای این نماینده ثبت نشده است."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",children:ve.map((M,X)=>{const le=ci(M),ne=String(M.representativeId??Ee),xe=`${De}/representatives/${encodeURIComponent(ne)}/files/${encodeURIComponent(M.name)}/view`,ze=`${De}/representatives/${encodeURIComponent(ne)}/files/${encodeURIComponent(M.name)}/download`;return(0,e.jsxs)("article",{className:"group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",style:{animation:`fileEnter 450ms ease-out ${X*65}ms both`},children:[le?(0,e.jsx)("button",{type:"button",onClick:()=>{n?.(M)},className:"relative block h-44 w-full overflow-hidden bg-slate-100 dark:bg-gray-700",children:(0,e.jsx)("img",{src:xe,alt:M.name,className:"h-full w-full object-cover"})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(M)},className:"flex h-44 w-full flex-col items-center justify-center bg-blue-50 dark:bg-gray-700",children:[(0,e.jsx)(gt,{className:"h-16 w-16 text-blue-400"}),(0,e.jsx)("span",{className:"mt-3 text-xs font-bold text-slate-500 dark:text-gray-300",children:"برای مشاهده کلیک کنید"})]}),(0,e.jsxs)("div",{className:"p-4",children:[(0,e.jsx)("p",{title:M.name,className:"truncate text-sm font-black text-slate-800 dark:text-gray-100",children:M.name}),(0,e.jsxs)("div",{className:"mt-2 flex justify-between text-[11px] text-slate-500 dark:text-gray-400",children:[(0,e.jsx)("span",{children:M.size||"—"}),(0,e.jsx)("span",{children:M.uploadedAt||"—"})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(M)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-blue-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"مشاهده"]}),(0,e.jsxs)("a",{href:ze,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-emerald-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(wn,{className:"h-4 w-4"}),"دانلود"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{K(Oe=>Oe.filter(Je=>String(Je.name)!==String(M.name))),p?.(M.id)},className:"flex min-h-10 items-center justify-center gap-1 rounded-lg bg-red-600 px-2 py-2 text-xs font-bold text-white",children:[(0,e.jsx)(He,{className:"h-4 w-4"}),"حذف"]})]})]})]},M.id)})})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsx)("div",{className:"mb-5 border-b border-blue-100 pb-4 dark:border-gray-800",children:(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100 md:text-2xl",children:[(0,e.jsx)(gt,{className:"h-6 w-6 text-blue-600 dark:text-blue-400"}),"یادداشت‌های ادمین"]})}),(0,e.jsxs)("form",{onSubmit:Fe,className:"space-y-3",children:[(0,e.jsx)("label",{className:"block text-sm font-bold text-slate-700 dark:text-gray-200",children:"متن یادداشت"}),(0,e.jsx)("textarea",{value:_,onChange:M=>{R(M.target.value),F("")},rows:4,maxLength:3e3,disabled:V,placeholder:"یادداشت خود را درباره این نماینده بنویسید...",className:"w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"}),A?(0,e.jsx)("p",{className:"text-xs font-bold text-red-600 dark:text-red-400",children:A}):null,(0,e.jsx)("div",{className:"flex justify-end",children:(0,e.jsx)("button",{type:"submit",disabled:V||!_.trim(),className:"min-h-11 rounded-xl bg-blue-600 px-5 py-2 text-sm font-bold text-white disabled:opacity-50",children:V?"در حال ثبت...":"ثبت یادداشت"})})]}),(0,e.jsxs)("div",{className:"mt-6 border-t border-slate-100 pt-5 dark:border-gray-800",children:[(0,e.jsx)("h4",{className:"mb-3 text-sm font-black text-slate-800 dark:text-gray-100",children:"یادداشت‌های ثبت‌شده"}),f?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"در حال دریافت یادداشت‌ها..."}):C.length===0?(0,e.jsx)("p",{className:"rounded-2xl bg-slate-50 px-4 py-5 text-center text-sm text-slate-500 dark:bg-gray-800 dark:text-gray-400",children:"هنوز یادداشتی ثبت نشده است."}):(0,e.jsx)("div",{className:"space-y-3",children:C.map(M=>{const X=String(M.id),le=y===X,ne=D===X;return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-800",children:[le?(0,e.jsx)("textarea",{value:L,onChange:xe=>{W(xe.target.value)},rows:4,disabled:ne,className:"w-full rounded-xl border border-blue-300 bg-white px-3 py-2 text-sm leading-7 outline-none dark:border-blue-700 dark:bg-gray-900 dark:text-gray-100"}):(0,e.jsx)("p",{className:"whitespace-pre-wrap break-words text-sm leading-7 text-slate-800 dark:text-gray-100",children:M.text}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsx)("time",{className:"text-xs text-slate-500 dark:text-gray-400",children:new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(M.createdAt))}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[le?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",onClick:()=>{ia(X)},disabled:ne||!L.trim(),className:"rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"ذخیره ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:Wt,className:"rounded-lg bg-gray-200 px-3 py-2 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-100",children:"انصراف"})]}):(0,e.jsx)("button",{type:"button",onClick:()=>{Bt(M)},className:"rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white",children:"ویرایش"}),(0,e.jsx)("button",{type:"button",onClick:()=>{Vt(X)},disabled:ne,className:"rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:"حذف"})]})]})]},X)})})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_12px_30px_rgba(55,104,180,0.14)] dark:border-gray-800 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex flex-col items-start justify-between gap-3 border-b border-blue-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100",children:[(0,e.jsx)(Ir,{className:"h-5 w-5 text-cyan-600 dark:text-cyan-400"}),"اعلام فروش‌های این نماینده"]}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400",children:"لیست کامل اعلام فروش‌های ثبت‌شده توسط این نماینده"})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-cyan-50 px-3 py-2 dark:bg-cyan-950/30",children:[(0,e.jsx)(Cr,{className:"h-4 w-4 text-cyan-600 dark:text-cyan-400"}),(0,e.jsxs)("span",{className:"text-xs font-black text-cyan-700 dark:text-cyan-300",children:["مجموع: ",Ze(o.length)," گزارش"]})]})]}),q?(0,e.jsxs)("div",{className:"flex items-center justify-center py-8",children:[(0,e.jsx)(me,{className:"h-8 w-8 animate-spin text-cyan-500"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-slate-500 dark:text-gray-400",children:"در حال دریافت فروش‌ها..."})]}):o.length===0?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10 text-center",children:[(0,e.jsx)(rr,{className:"mb-3 h-12 w-12 text-slate-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-500 dark:text-gray-400",children:"هنوز فروشی برای این نماینده ثبت نشده است."})]}):(0,e.jsxs)("div",{className:"overflow-x-auto",children:[(0,e.jsxs)("table",{className:"w-full min-w-[640px] text-right text-xs sm:text-sm",children:[(0,e.jsx)("thead",{className:"bg-slate-50 dark:bg-gray-800/80",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"ردیف"}),(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"تعداد اقلام"}),(0,e.jsx)("th",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100 dark:divide-gray-700",children:o.slice(0,10).map((M,X)=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-slate-50 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"px-3 py-3 font-black text-slate-500 dark:text-gray-400",children:Ze(X+1)}),(0,e.jsx)("td",{className:"px-3 py-3 font-bold text-slate-700 dark:text-gray-200",children:di(M.saleDate,M.createdAt)}),(0,e.jsxs)("td",{className:"px-3 py-3 text-amber-700 dark:text-amber-300",children:[(0,e.jsx)("span",{className:"font-black",children:Ze(M.totalItems||0)})," ","قلم"]}),(0,e.jsx)("td",{className:"px-3 py-3 font-black text-emerald-700 dark:text-emerald-300",children:Pt(M.totalAmount||0)})]},M.id||X))})]}),o.length>10?(0,e.jsxs)("div",{className:"mt-3 border-t border-slate-100 pt-3 text-center text-xs text-slate-500 dark:border-gray-700 dark:text-gray-400",children:["نمایش ۱۰ گزارش اول از مجموع ",Ze(o.length)," گزارش"]}):null]})]}),ie?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm",onClick:oa,children:(0,e.jsxs)("div",{className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900",onClick:M=>{M.stopPropagation()},children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-gray-100",children:[(0,e.jsx)(Pr,{className:"h-5 w-5 text-blue-600 dark:text-blue-400"}),"آپلود فایل برای ",h.name||"نماینده"]}),(0,e.jsx)("button",{type:"button",onClick:oa,disabled:ae,className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:he?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10",children:[(0,e.jsx)(je,{className:"mb-3 h-16 w-16 text-emerald-500"}),(0,e.jsx)("p",{className:"text-base font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها با موفقیت آپلود شد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{onDragEnter:Wn,onDragLeave:Vn,onDragOver:Qn,onDrop:Hn,className:`flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-colors ${re?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-blue-200 bg-blue-50/50 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800/50"}`,onClick:()=>{document.getElementById("file-input-upload")?.click()},children:[(0,e.jsx)(Pr,{className:"mb-3 h-12 w-12 text-blue-500"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-700 dark:text-gray-200",children:"فایل‌ها را اینجا رها کنید یا کلیک کنید"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-gray-400",children:"بدون محدودیت تعداد و حجم - هر تعداد فایل که خواستید می‌توانید آپلود کنید"}),(0,e.jsx)("p",{className:"mt-2 text-[11px] text-slate-400 dark:text-gray-500",children:"انواع مجاز: JPG, PNG, GIF, WEBP, PDF, DOC, DOCX, XLS, XLSX, ZIP, RAR"}),(0,e.jsx)("input",{id:"file-input-upload",type:"file",multiple:!0,className:"hidden",onChange:M=>{ds(M.target.files),M.target.value=""},accept:".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.xls,.xlsx,.zip,.rar"})]}),E.length>0?(0,e.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,e.jsxs)("p",{className:"text-xs font-black text-slate-700 dark:text-gray-200",children:["فایل‌های انتخاب‌شده (",Ze(E.length),"):"]}),E.map((M,X)=>(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex min-w-0 flex-1 items-center gap-2",children:[(0,e.jsx)(gt,{className:"h-5 w-5 flex-shrink-0 text-blue-500"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{title:M.name,className:"truncate text-sm font-bold text-slate-700 dark:text-gray-200",children:M.name}),(0,e.jsx)("p",{className:"text-[11px] text-slate-500 dark:text-gray-400",children:os(M.size)})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{Bn(X)},disabled:ae,className:"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors hover:bg-red-200 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-400",children:(0,e.jsx)(He,{className:"h-4 w-4"})})]},`${M.name}-${X}`))]}):null,z?(0,e.jsxs)("div",{className:"mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-xs font-bold text-red-600 dark:bg-red-900/20 dark:text-red-400",children:[(0,e.jsx)($l,{className:"mt-0.5 h-4 w-4 flex-shrink-0"}),(0,e.jsx)("span",{children:z})]}):null]})}),he?null:(0,e.jsxs)("div",{className:"flex items-center justify-end gap-2 border-t border-blue-100 p-5 dark:border-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:oa,disabled:ae,className:"rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:Jn,disabled:ae||E.length===0,className:"flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-50",children:ae?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}),"در حال آپلود..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Pr,{className:"h-4 w-4"}),"آپلود ",E.length>0?`(${Ze(E.length)} فایل)`:""]})})]})]})}):null]})},Fr="https://myshop-backend-8nu7.onrender.com/api",mi=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Qa=t=>{const r=mi(t).replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},kt=t=>new Intl.NumberFormat("fa-IR").format(Qa(t)),ga=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(r)},Is=t=>{const r=String(t||"pending").trim().toLowerCase();return r==="approved"?{label:"تأیید شده",wrapperClass:"border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300",Icon:je}:r==="rejected"?{label:"رد شده",wrapperClass:"border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-500/10 dark:text-red-300",Icon:ot}:r==="received"?{label:"دریافت شده",wrapperClass:"border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-500/10 dark:text-blue-300",Icon:je}:r==="reviewing"?{label:"در حال بررسی",wrapperClass:"border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-500/10 dark:text-violet-300",Icon:Ar}:{label:"در انتظار بررسی",wrapperClass:"border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-500/10 dark:text-amber-300",Icon:Ar}},ua=(t,r)=>oe.isAxiosError(t)&&(t.response?.data?.error||t.response?.data?.message||t.message)||r,ba=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||localStorage.getItem("accessToken")||localStorage.getItem("authToken")||"",Be=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),pi=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),[p,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(null),[c,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(""),x=(0,a.useCallback)(async()=>{const f=ba();if(!f){n("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید."),d(!1);return}d(!0),n("");try{const I=await oe.get(`${Fr}/admin/return-requests`,{headers:{Authorization:`Bearer ${f}`}}),_=Array.isArray(I.data?.data)?I.data.data:[];r(_)}catch(I){n(ua(I,"خطا در دریافت درخواست‌های مرجوعی."))}finally{d(!1)}},[]);(0,a.useEffect)(()=>{x()},[x]);const g=(0,a.useMemo)(()=>{const f=p.trim().toLocaleLowerCase("fa-IR");return f?t.filter(I=>[I.id,I.title,I.productName,I.representativeName,I.representativeCode,I.returnDate,I.status].some(_=>String(_??"").toLocaleLowerCase("fa-IR").includes(f))):t},[t,p]),w=t.filter(f=>{const I=String(f.status||"").toLowerCase();return I==="pending"||I==="registered"||I==="reviewing"}).length,o=t.filter(f=>{const I=String(f.status||"").toLowerCase();return I==="approved"||I==="received"}).length,$=t.filter(f=>String(f.status||"").toLowerCase()==="rejected").length,q=f=>{r(I=>I.map(_=>String(_.id)===String(f.id)?f:_))},P=async f=>{const I=ba();if(!I){alert("توکن ورود پیدا نشد. لطفاً دوباره وارد حساب شوید.");return}const _=f.productName||f.title||"بدون عنوان";if(window.confirm(`آیا درخواست مرجوعی «${_}» از نماینده «${f.representativeName||"نامشخص"}» تأیید شود؟`)){h(String(f.id));try{const R=await oe.patch(`${Fr}/admin/return-requests/${f.id}/status`,{status:"approved",adminNote:"درخواست مرجوعی توسط ادمین تأیید شد."},{headers:{Authorization:`Bearer ${I}`}});R.data?.data?q(R.data.data):await x(),alert(R.data?.message||"درخواست مرجوعی با موفقیت تأیید شد.")}catch(R){alert(ua(R,"خطا در تأیید درخواست مرجوعی."))}finally{h(null)}}},O=f=>{N(f),k("")},G=()=>{u||(N(null),k(""))},C=f=>{const I=window.open("","_blank","width=900,height=700");if(!I){alert("پنجرهٔ چاپ باز نشد. لطفاً اجازهٔ باز شدن پنجره‌های جدید (Pop-up) را در مرورگر فعال کنید.");return}const _=f,R=Qa(f.unitPrice??f.price??0),V=Qa(f.quantity||1),Q=R*V,A=Is(f.status).label,F=f.productName||f.title||"—",y=_.productBrand||f.brand||"—",m=_.productCategory||f.category||"—",L=_.adminNote||"";I.document.open(),I.document.write(`
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
                  ${Be(f.id||"—")}
                </div>
              </div>

              <div class="header-details">
                <div>
                  <strong>تاریخ ثبت:</strong>
                  ${Be(ga(f.createdAt))}
                </div>

                <div>
                  <strong>وضعیت:</strong>
                  <span class="status">
                    ${Be(A)}
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
                  ${Be(F)}
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
                  ${kt(V)} قلم
                </div>

                <div>
                  
                  ${kt(R)} تومان
                </div>

                <div>
                  <span class="label">جمع کل:</span>
                  ${kt(Q)} تومان
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
                ${Be(ga(new Date().toISOString()))}
              </div>
            </footer>
          </main>
        </body>
      </html>
    `),I.document.close(),I.onload=()=>{I.focus(),window.setTimeout(()=>{I.print()},300)}},S=async()=>{const f=ba();if(!c||!f)return;const I=v.trim();if(!I){alert("لطفاً دلیل رد درخواست را وارد کنید.");return}h(String(c.id));try{const _=await oe.patch(`${Fr}/admin/return-requests/${c.id}/status`,{status:"rejected",adminNote:I},{headers:{Authorization:`Bearer ${f}`}});_.data?.data?q(_.data.data):await x(),N(null),k(""),alert(_.data?.message||"درخواست مرجوعی رد شد.")}catch(_){alert(ua(_,"خطا در رد درخواست مرجوعی."))}finally{h(null)}};return s?(0,e.jsx)("div",{dir:"rtl",className:"flex min-h-[400px] items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(me,{className:"mx-auto h-11 w-11 animate-spin text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت درخواست‌های مرجوعی..."})]})}):b?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm dark:border-red-900/50 dark:bg-red-900/20",children:[(0,e.jsx)(Ae,{className:"mx-auto h-12 w-12 text-red-600 dark:text-red-400"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-red-700 dark:text-red-300",children:"خطا در دریافت اطلاعات"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600 dark:text-red-400",children:b}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200/70 bg-white/60 p-3 text-right text-xs leading-6 text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-300",children:["آدرس مورد انتظار API:",(0,e.jsxs)("span",{dir:"ltr",className:"mr-1 font-bold",children:[Fr,"/admin/return-requests"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{x()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("div",{dir:"rtl",children:[(0,e.jsxs)("section",{className:"mb-6 grid grid-cols-1 gap-4 md:grid-cols-3",children:[(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-amber-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-amber-100/70 blur-2xl dark:bg-amber-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-amber-600 dark:text-amber-400",children:kt(w)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-500 dark:text-amber-300",children:"درخواست نیازمند تصمیم ادمین"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm dark:bg-amber-500/15 dark:text-amber-400",children:(0,e.jsx)(Ar,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-emerald-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-emerald-100/70 blur-2xl dark:bg-emerald-500/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-emerald-600 dark:text-emerald-400",children:kt(o)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-emerald-500 dark:text-emerald-300",children:"درخواست‌های پذیرفته‌شده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-400",children:(0,e.jsx)(je,{className:"h-6 w-6"})})]})]}),(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-5 -top-5 h-20 w-20 rounded-full bg-red-100/70 blur-2xl dark:bg-red-900/10"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-red-600 dark:text-red-400",children:kt($)}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-red-500 dark:text-red-300",children:"درخواست‌های ردشده"})]}),(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700 shadow-sm dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(ot,{className:"h-6 w-6"})})]})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-cyan-50/70 via-white to-purple-50/70 p-5 dark:border-gray-700 dark:from-cyan-950/20 dark:via-gray-900 dark:to-purple-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(Xe,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"بررسی، تأیید یا رد درخواست‌های ثبت‌شده توسط نمایندگان"})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{x()},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-black text-gray-700 shadow-sm transition-all hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"بروزرسانی"]})]}),(0,e.jsxs)("label",{className:"relative mt-5 block",children:[(0,e.jsx)(ut,{className:"absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{value:p,onChange:f=>{i(f.target.value)},placeholder:"جست‌وجو بر اساس نام نماینده، کد، عنوان، وضعیت یا تاریخ...",className:"w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-12 pl-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"})]})]}),g.length===0?(0,e.jsxs)("div",{className:"p-12 text-center",children:[(0,e.jsx)("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500",children:(0,e.jsx)(Xe,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"درخواستی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"اگر درخواست مرجوعی ثبت شده است، دکمه بروزرسانی را بزنید."})]}):(0,e.jsx)("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:p-5",children:g.map(f=>{const I=String(f.id),_=u===I,R=String(f.status||"pending").toLowerCase(),V=R==="pending"||R==="registered"||R==="reviewing",Q=Is(f.status),A=Q.Icon,F=f.adminNote||"",y=f.unitPrice||f.price||0;return(0,e.jsxs)("article",{className:"group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-700",children:[(0,e.jsx)("div",{className:"absolute right-0 top-0 h-1 w-full bg-gradient-to-l from-cyan-500 via-blue-500 to-purple-500 opacity-70"}),(0,e.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-purple-500/20",children:(0,e.jsx)($t,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:f.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["کد نمایندگی:"," ",f.representativeCode||"—"]})]})]}),(0,e.jsxs)("div",{className:"flex shrink-0 flex-col items-end gap-2",children:[(0,e.jsxs)("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-black ${Q.wrapperClass}`,children:[(0,e.jsx)(A,{className:"h-3.5 w-3.5"}),Q.label]}),(0,e.jsxs)("p",{className:"text-[11px] font-bold text-gray-400 dark:text-gray-500",children:["ثبت: ",ga(f.createdAt)]})]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-900/60",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(ea,{className:"h-4 w-4 text-cyan-600 dark:text-cyan-400"}),"عنوان کالای مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-base font-black text-gray-800 dark:text-white",children:f.productName||f.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5 dark:border-emerald-900/40 dark:bg-emerald-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300",children:[(0,e.jsx)(Sn,{className:"h-4 w-4"}),"قیمت"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-emerald-700 dark:text-emerald-400",children:[kt(y)," تومان"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 dark:border-blue-900/40 dark:bg-blue-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300",children:[(0,e.jsx)(ea,{className:"h-4 w-4"}),"تعداد"]}),(0,e.jsxs)("p",{className:"mt-2 text-lg font-black text-blue-700 dark:text-blue-400",children:[kt(f.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-purple-100 bg-purple-50/70 p-3.5 dark:border-purple-900/40 dark:bg-purple-900/15",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300",children:[(0,e.jsx)(it,{className:"h-4 w-4"}),"تاریخ مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-lg font-black text-purple-700 dark:text-purple-400",children:f.returnDate||"—"})]})]}),F?(0,e.jsxs)("div",{className:"rounded-xl border border-violet-100 bg-violet-50/70 p-4 dark:border-violet-900/40 dark:bg-violet-950/20",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-xs font-black text-violet-700 dark:text-violet-300",children:[(0,e.jsx)(gt,{className:"h-4 w-4"}),"توضیح ادمین"]}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-violet-900 dark:text-violet-200",children:F})]}):null,(0,e.jsx)("div",{className:"border-t border-gray-100 pt-4 dark:border-gray-700",children:V?(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{P(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-600 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-60",children:[_?(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Va,{className:"h-5 w-5"}),"تأیید درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{O(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20 transition-all hover:from-red-600 hover:to-rose-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(we,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{C(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(gt,{className:"h-5 w-5"}),"چاپ / پرینت"]})]}):(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-black ${Q.wrapperClass}`,children:[(0,e.jsx)(A,{className:"h-5 w-5"}),"وضعیت: ",Q.label]}),(0,e.jsxs)("button",{type:"button",disabled:_,onClick:()=>{C(f)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",children:[(0,e.jsx)(gt,{className:"h-5 w-5"}),"چاپ / پرینت"]})]})})]})]},I)})})]}),c?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",children:(0,e.jsxs)("div",{dir:"rtl",className:"w-full max-w-lg rounded-3xl border border-white/30 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400",children:(0,e.jsx)(ot,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"رد درخواست مرجوعی"}),(0,e.jsxs)("p",{className:"mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400",children:["دلیل رد درخواست «",c.productName||c.title||"بدون عنوان","» را وارد کنید. این توضیح برای نماینده نمایش داده می‌شود."]})]})]}),(0,e.jsx)("button",{type:"button",onClick:G,disabled:!!u,className:"rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600 disabled:opacity-50 dark:hover:bg-gray-800",title:"بستن",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsx)("textarea",{value:v,onChange:f=>{k(f.target.value)},rows:5,placeholder:"مثال: لطفاً کالا را همراه فاکتور و تصاویر خسارت ارسال کنید.",className:"mt-5 w-full resize-none rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-7 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsx)("button",{type:"button",disabled:u===String(c.id),onClick:()=>{S()},className:"min-h-11 rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60",children:u===String(c.id)?"در حال ثبت...":"ثبت رد درخواست"}),(0,e.jsx)("button",{type:"button",disabled:!!u,onClick:G,className:"min-h-11 rounded-xl bg-gray-100 px-4 py-3 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"انصراف"})]})]})}):null]})},hi={companyName:"نام شرکت شما",companySubtitle:"سامانه مدیریت فروش و انبار",reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش بر اساس اطلاعات ثبت‌شده توسط نمایندگان در سامانه فروش و انبار تهیه شده است.",companyAddress:"آدرس شرکت، شهر، استان",companyPhone:"۰۲۱-۹۳۱۱۱۰۲۱",companyWebsite:"www.example.com",reportNumber:"",preparedBy:"",salesManager:"",notes:"این گزارش بر اساس اطلاعات ثبت‌شده در سامانه تهیه شده است. لطفاً پیش از امضا، تعداد کالاها، مبلغ کل فروش و جزئیات نمایندگان را بررسی کنید."},gi=["admin_access_token","adminAccessToken","admin_token","adminToken","accessToken","authToken","token"],Rn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),lt=t=>{const r=Rn(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ue=t=>new Intl.NumberFormat("fa-IR").format(lt(t)),Ie=t=>`${ue(t)} تومان`,ui=()=>{if(typeof window>"u")return"";for(const t of gi){const r=window.localStorage.getItem(t);if(r?.trim())return r.trim();const s=window.sessionStorage.getItem(t);if(s?.trim())return s.trim()}return""},bi=async t=>{try{const r=await t.json();return typeof r=="string"?r:r?.error||r?.message||r?.detail||"دریافت اعلام فروش‌ها با خطا مواجه شد."}catch{return t.status===401?"نشست ادمین نامعتبر یا منقضی شده است. لطفاً دوباره وارد حساب ادمین شوید.":t.status===403?"شما دسترسی لازم برای مشاهده اعلام فروش‌ها را ندارید.":"دریافت اعلام فروش‌ها با خطا مواجه شد."}},zt=(t,r)=>{if(t)return t;if(!r)return"—";const s=new Date(r);return Number.isNaN(s.getTime())?"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(s)},As=()=>new Date().toLocaleDateString("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}),Ds=()=>new Date().toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit"}),Lr=t=>{const r=t.createdAt||t.saleDate;if(!r)return null;const s=new Date(r);return Number.isNaN(s.getTime())?null:s},dr=t=>t.productName||t.title||t.name||"کالای بدون نام",Lt=t=>lt(t.unitPrice??t.price),Ts=t=>{const r=lt(t.totalPrice??t.totalAmount);return r>0?r:lt(t.quantity)*Lt(t)},yi=t=>String(t.brand||t.brandName||"").trim(),fi=t=>String(t.category||t.categoryName||"").trim(),ya=typeof window<"u"?"https://myshop-backend-8nu7.onrender.com/api":"http://localhost:5000/api",ji=ya.endsWith("/api")?ya.slice(0,-4):ya,vi=({token:t})=>{const[r,s]=(0,a.useState)([]),[d,b]=(0,a.useState)(!0),[n,p]=(0,a.useState)(""),[i,u]=(0,a.useState)(null),[h,c]=(0,a.useState)(!1),[N,v]=(0,a.useState)("all"),[k,x]=(0,a.useState)(null),[g,w]=(0,a.useState)(hi),o=(0,a.useCallback)(async()=>{try{b(!0),p("");const y=t?.trim()||ui();if(!y)throw new Error("توکن ورود ادمین پیدا نشد. لطفاً یک‌بار خارج و دوباره وارد حساب ادمین شوید.");const m=await fetch(`${ji}/api/sales-from-warehouse/admin/all`,{method:"GET",headers:{Authorization:`Bearer ${y}`,Accept:"application/json"}});if(!m.ok){const D=await bi(m);throw m.status===401&&s([]),new Error(D)}const L=await m.json();if(!L?.success)throw new Error(L?.error||L?.message||"دریافت اعلام فروش‌ها با خطا مواجه شد.");const W=Array.isArray(L?.data)?L.data:[];s(W)}catch(y){console.error("خطا در دریافت اعلام فروش‌ها:",y),s([]),p(y instanceof Error?y.message:"خطا در دریافت اعلام فروش‌ها از سرور.")}finally{b(!1)}},[t]);(0,a.useEffect)(()=>{o()},[o]),(0,a.useEffect)(()=>{const y=m=>{if(m.key==="Escape"){if(h){c(!1),x(null);return}i&&u(null)}};return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[i,h]);const $=(0,a.useMemo)(()=>r.length,[r]);(0,a.useMemo)(()=>r.reduce((y,m)=>y+lt(m.totalItems),0),[r]);const q=(0,a.useMemo)(()=>r.reduce((y,m)=>y+lt(m.totalAmount),0),[r]),P=(0,a.useMemo)(()=>{const y=r.map(m=>String(m.representativeId||m.representativeCode||m.representativeName||"")).filter(Boolean);return new Set(y).size},[r]),O=(0,a.useMemo)(()=>{const y=new Date,m=new Date(y);return m.setHours(0,0,0,0),m.setDate(m.getDate()-9),r.filter(L=>{const W=Lr(L);return W?W>=m&&W<=y:!1}).reduce((L,W)=>L+lt(W.totalAmount),0)},[r]),G=(0,a.useMemo)(()=>{const y=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(m=>{const L=Lr(m);return L?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(L)===y:!1}).reduce((m,L)=>m+lt(L.totalAmount),0)},[r]);(0,a.useMemo)(()=>{const y=new Date,m=new Date(y);return m.setHours(0,0,0,0),m.setDate(m.getDate()-9),r.filter(L=>{const W=Lr(L);return W?W>=m&&W<=y:!1}).length},[r]),(0,a.useMemo)(()=>{const y=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(new Date);return r.filter(m=>{const L=Lr(m);return L?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit"}).format(L)===y:!1}).length},[r]);const C=(0,a.useMemo)(()=>!i||!Array.isArray(i.items)?[]:i.items,[i]),S=(0,a.useMemo)(()=>N==="single"&&k?[k]:r,[N,k,r]),f=(0,a.useMemo)(()=>S.reduce((y,m)=>y+lt(m.totalItems),0),[S]),I=(0,a.useMemo)(()=>S.reduce((y,m)=>y+lt(m.totalAmount),0),[S]),_=(y,m)=>{const L=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/\//g,""),W=y==="single"&&m?.id?String(m.id).slice(-6):String(r.length).padStart(4,"0");return`ADM-${Rn(L)}-${W}`},R=(y,m)=>{w(L=>({...L,[y]:m}))},V=()=>{if(r.length===0){p("هیچ اعلام فروشی برای چاپ وجود ندارد.");return}v("all"),x(null),w(y=>({...y,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:_("all")})),c(!0)},Q=y=>{const m=window.open("","_blank","width=900,height=700");if(!m){alert("لطفاً popup blocker را غیرفعال کنید");return}const L=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),W=Array.isArray(y.items)?y.items:[],D=W.map((j,U)=>`
      <tr>
        <td style="text-align:center;">${U+1}</td>
        <td>${j.productName||"—"}</td>
        <td style="text-align:center;">${j.brand||"—"}</td>
        <td style="text-align:center;">${j.category||j.categoryName||"—"}</td>
        <td style="text-align:center;">${ue(j.unitPrice)} تومان</td>
        <td style="text-align:center;">${ue(j.quantity)||"—"}</td>
        <td style="text-align:center;">${ue(j.totalPrice??Number(j.quantity||0)*Number(j.unitPrice||0))} تومان</td>
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
    <div class="value">${y.saleDate||zt(y.createdAt)||"—"}</div>
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
    ${D}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="3" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${ue(y.totalItems??W.length)}</strong></td>
        <td></td>
        <td style="text-align:center;"><strong>${Ie(y.totalAmount)}</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد اقلام</div>
      <div class="value">${ue(y.totalItems??W.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع فروش</div>
      <div class="value">${ue(y.totalAmount)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر - 1405</p>
  </div>
</div>

</body>
</html>`),m.document.close(),m.focus(),setTimeout(()=>{m.print()},1e3)},A=()=>{c(!1),x(null)},F=()=>{const y=window.open("","_blank","width=900,height=700");if(!y){alert("لطفاً popup blocker را غیرفعال کنید");return}const m=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),L=r.map((j,U)=>{const Z=(Array.isArray(j.items)?j.items:[]).map(B=>`
        <tr>
          <td style="text-align:center;">${U+1}</td>
          <td>${B.productName||"—"}</td>
          <td style="text-align:center;">${B.brand||"—"}</td>
          <td style="text-align:center;">${B.category||B.categoryName||"—"}</td>
          <td style="text-align:center;">${ue(B.unitPrice)} تومان</td>
          <td style="text-align:center;">${ue(B.quantity)||"—"}</td>
          <td style="text-align:center;">${ue(B.totalPrice??Number(B.quantity||0)*Number(B.unitPrice||0))} تومان</td>
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
      `}).join(""),W=r.reduce((j,U)=>j+(Number(U.totalAmount)||0),0),D=r.reduce((j,U)=>j+(Number(U.totalItems)||U.items?.length||0),0);y.document.write(`<!DOCTYPE html>
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
    <div class="value">${D}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع کل فروش</div>
    <div class="value">${ue(W)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>هلدینگ مهر - 1405</p>
</div>

</body>
</html>`),y.document.close(),y.focus(),setTimeout(()=>{y.print()},1e3)};return d?(0,e.jsx)("section",{className:"flex min-h-[360px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(me,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اعلام فروش‌های نمایندگان..."})]})}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6",children:[(0,e.jsx)("style",{children:`
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
      `}),(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-cyan-900/50 dark:from-cyan-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-cyan-900 dark:text-cyan-100",children:ue($)}),(0,e.jsxs)("p",{className:"mt-1 truncate text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["از ",ue(P)," نمایندگی"]})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(Xe,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-cyan-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-violet-900/50 dark:from-violet-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300",children:"مبلغ فروش ۱۰ روز گذشته"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-violet-900 dark:text-violet-100",children:Ie(O)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-violet-600 dark:text-violet-400",children:"فروش نمایندگان در ۱۰ روز اخیر"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(it,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-violet-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/50 dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300",children:"مبلغ فروش ماهانه نمایندگان"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-blue-900 dark:text-blue-100",children:Ie(G)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-blue-600 dark:text-blue-400",children:"فروش نمایندگان در ماه جاری"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(Ir,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-blue-400/10"})]}),(0,e.jsxs)("div",{className:"group relative flex h-36 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-gray-900",children:[(0,e.jsxs)("div",{className:"relative z-10 flex w-full items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300",children:"مجموع مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-900 dark:text-emerald-100",children:Ie(q)}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-bold text-emerald-600 dark:text-emerald-400",children:"مجموع اعلام فروش‌های ثبت‌شده"})]}),(0,e.jsx)("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/40 transition-transform group-hover:scale-110 group-hover:rotate-3",children:(0,e.jsx)(Ir,{className:"h-7 w-7"})})]}),(0,e.jsx)("div",{className:"absolute -left-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-emerald-400/10"})]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-4 border-b border-gray-100 p-5 dark:border-gray-700 md:flex-row md:items-center md:justify-between md:p-6",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"لیست اعلام فروش نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات مستقیماً از سرور دریافت می‌شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:V,disabled:r.length===0,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2.5 text-xs font-black text-cyan-700 transition-colors hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300 dark:hover:bg-cyan-950/50",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش‌ها"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{o()},disabled:d,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Re,{className:`h-4 w-4 ${d?"animate-spin":""}`}),"بروزرسانی از سرور"]})]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Xe,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز هیچ اعلام فروشی ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"بعد از ثبت فروش در پنل نماینده، گزارش آن در همین بخش برای ادمین نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-4 p-4 md:hidden",children:r.map(y=>{const m=Array.isArray(y.items)?y.items:[];return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نمایندگی"}),(0,e.jsx)("h3",{className:"mt-1 truncate font-black text-gray-800 dark:text-white",children:y.representativeName||"نمایندگی بدون نام"}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:["کد: ",y.representativeCode||"—"]}),(0,e.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(Dt,{className:"h-3.5 w-3.5 text-rose-500"}),y.representativeCity||"شهر ثبت نشده"]})]})]}),(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)($t,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("div",{className:"space-y-3 p-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-gray-800 dark:text-white",children:zt(y.saleDate,y.createdAt)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[ue(y.totalItems)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-emerald-800 dark:text-emerald-200",children:Ie(y.totalAmount)})]}),m.length>0?(0,e.jsxs)("div",{className:"rounded-xl border border-gray-100 p-3 dark:border-gray-700",children:[(0,e.jsx)("p",{className:"mb-2 text-xs font-black text-gray-700 dark:text-gray-200",children:"خلاصه کالاها"}),(0,e.jsxs)("div",{className:"space-y-1.5",children:[m.slice(0,2).map((L,W)=>(0,e.jsxs)("p",{className:"text-xs leading-6 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)("span",{className:"font-bold text-gray-800 dark:text-gray-100",children:dr(L)})," — ",ue(L.quantity)," قلم"]},`${y.id}-${L.productId||W}`)),m.length>2?(0,e.jsxs)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:["و ",ue(m.length-2)," کالای دیگر..."]}):null]})]}):null,(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(y)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-black text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]})]})]},y.id)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[900px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-ellipsis text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"کد نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"نام نمایندگی"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"شهر"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مجموع اقلام"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-5 text-center py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.map(y=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-500 dark:text-gray-400",children:zt(y.saleDate,y.createdAt)}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-cyan-50 px-3 py-1.5 font-black text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:y.representativeCode||"—"})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)($t,{className:"h-4 w-4 text-gray-400 dark:text-gray-500"}),y.representativeName||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"inline-flex items-center gap-2 text-gray-600 dark:text-gray-300",children:[(0,e.jsx)(Dt,{className:"h-4 w-4 text-rose-500"}),y.representativeCity||"—"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("span",{className:"font-black text-amber-700 dark:text-amber-300",children:[ue(y.totalItems)," قلم"]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsx)("span",{className:"font-black text-emerald-700 dark:text-emerald-300",children:Ie(y.totalAmount)})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4",children:(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{u(y)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-3.5 py-2 text-xs font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"مشاهده جزئیات"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(y)},className:"inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-black text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]})})]},y.id))})]})})]})]}),i?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",onMouseDown:()=>{u(null)},children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"جزئیات اعلام فروش",className:"max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-gray-900",onMouseDown:y=>{y.stopPropagation()},children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-100 bg-white p-5 dark:border-gray-700 dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20",children:(0,e.jsx)(In,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"جزئیات اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات فروش ثبت‌شده توسط نمایندگی"})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پنجره جزئیات",title:"بستن",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-6 p-5 md:p-6",children:[(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900/50 dark:bg-cyan-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-cyan-700 dark:text-cyan-300",children:"نام نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-cyan-900 dark:text-cyan-100",children:i.representativeName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-cyan-600 dark:text-cyan-400",children:["کد: ",i.representativeCode||"—"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-violet-100 bg-violet-50 p-4 dark:border-violet-900/50 dark:bg-violet-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-violet-700 dark:text-violet-300",children:"شهر نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-violet-900 dark:text-violet-100",children:i.representativeCity||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-900 dark:text-emerald-100",children:Ie(i.totalAmount)}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400",children:[ue(i.totalItems)," قلم"]})]})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت اعلام فروش"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:zt(i.saleDate,i.createdAt)})]}),(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-gray-600 shadow-sm dark:bg-gray-900 dark:text-gray-300",children:[(0,e.jsx)(Xe,{className:"h-4 w-4 text-cyan-500"}),"شناسه گزارش: ",i.id]})]})}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-5 py-4 dark:border-gray-700 dark:bg-gray-800/70",children:[(0,e.jsx)(rr,{className:"h-5 w-5 text-cyan-600 dark:text-cyan-400"}),(0,e.jsx)("h4",{className:"font-black text-gray-800 dark:text-white",children:"کالاهای فروخته‌شده"})]}),C.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(rr,{className:"mx-auto h-10 w-10 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-black text-gray-600 dark:text-gray-300",children:"جزئیات کالاهای این اعلام فروش از سرور دریافت نشده است."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-4 md:hidden",children:C.map((y,m)=>(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["کالا ",ue(m+1)]}),(0,e.jsx)("p",{className:"mt-1 break-words font-black text-gray-800 dark:text-white",children:dr(y)})]}),(0,e.jsxs)("span",{className:"rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",children:[ue(y.quantity)," قلم"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[(0,e.jsx)("div",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800",children:(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-700 dark:text-gray-100",children:Ie(Lt(y))})}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-emerald-800 dark:text-emerald-200",children:Ie(Ts(y))})]})]})]},`${i.id}-${y.productId||m}`))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto md:block",children:(0,e.jsxs)("table",{className:"min-w-[700px] w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"ردیف"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"برند"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:C.map((y,m)=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-500 dark:text-gray-400",children:ue(m+1)}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-gray-800 dark:text-white",children:dr(y)}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:yi(y)||"—"}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:fi(y)||"—"}),(0,e.jsx)("td",{className:"px-5 py-4 text-gray-600 dark:text-gray-300",children:Ie(Lt(y))}),(0,e.jsxs)("td",{className:"px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[ue(y.quantity)," قلم"]}),(0,e.jsx)("td",{className:"px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Ie(Ts(y))})]},`${i.id}-${y.productId||m}`))})]})})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-wrap gap-2 border-t border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 md:px-6",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{Q(i)},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"تنظیم و چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:()=>{u(null)},className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]})}):null,h?(0,e.jsx)("div",{className:"admin-print-only",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:g.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:g.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:g.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:g.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:g.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:As()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Ds()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:N==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:S.map((y,m)=>{const L=Array.isArray(y.items)?y.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:ue(m+1)}),(0,e.jsx)("td",{children:zt(y.saleDate,y.createdAt)}),(0,e.jsx)("td",{children:y.representativeCode||"—"}),(0,e.jsx)("td",{children:y.representativeName||"—"}),(0,e.jsx)("td",{children:y.representativeCity||"—"}),(0,e.jsxs)("td",{children:[ue(y.totalItems)," قلم"]}),(0,e.jsx)("td",{children:Ie(y.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:L.length>0?L.map((W,D)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[dr(W)," — ",ue(W.quantity)," قلم",Lt(W)>0?` — ${Ie(Lt(W))}`:""]},`${y.id}-${W.productId||D}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},y.id||m)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[ue(f)," قلم"]}),(0,e.jsx)("td",{children:Ie(I)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ue(S.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ue(f)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:Ie(I)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:g.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:g.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:g.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:g.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",g.companyPhone||"—"," | ","وب‌سایت: ",g.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})}):null,h?(0,e.jsx)("div",{className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm no-print",children:(0,e.jsxs)("section",{dir:"rtl",role:"dialog","aria-modal":"true","aria-label":"تنظیم و چاپ گزارش فروش نمایندگان",className:"max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl dark:bg-gray-900 md:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-4 border-b border-gray-100 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-white",children:"تنظیم و پیش‌نمایش چاپ گزارش"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات چاپ را تنظیم و پیش‌نمایش را بررسی کنید."})]}),(0,e.jsx)("button",{type:"button",onClick:A,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300","aria-label":"بستن پیش‌نمایش چاپ",title:"بستن",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"space-y-4 lg:col-span-1",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نوع گزارش"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{v("all"),x(null),w(y=>({...y,reportTitle:"گزارش جامع اعلام فروش نمایندگان",reportDescription:"این گزارش شامل تمام اعلام فروش‌های ثبت‌شده توسط نمایندگان است.",reportNumber:_("all")}))},className:`rounded-xl px-3 py-2 text-xs font-black transition ${N==="all"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"تمام گزارش‌ها"}),(0,e.jsx)("button",{type:"button",onClick:()=>{v("single"),w(y=>({...y,reportTitle:`گزارش اعلام فروش نمایندگی ${k?.representativeName||""}`,reportDescription:"این گزارش شامل اطلاعات و جزئیات یک اعلام فروش ثبت‌شده توسط نمایندگی است.",reportNumber:_("single",k)}))},disabled:!k,className:`rounded-xl px-3 py-2 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-60 ${N==="single"?"bg-cyan-600 text-white":"bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"}`,children:"یک گزارش"})]})]}),(0,e.jsxs)("div",{className:"space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"نام شرکت"}),(0,e.jsx)("input",{type:"text",value:g.companyName,onChange:y=>{R("companyName",y.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"عنوان گزارش"}),(0,e.jsx)("input",{type:"text",value:g.reportTitle,onChange:y=>{R("reportTitle",y.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"شماره گزارش"}),(0,e.jsx)("input",{type:"text",value:g.reportNumber,onChange:y=>{R("reportNumber",y.target.value)},className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"text-xs font-bold text-gray-600 dark:text-gray-300",children:"توضیحات"}),(0,e.jsx)("textarea",{value:g.notes,onChange:y=>{R("notes",y.target.value)},rows:3,className:"mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800 outline-none focus:border-cyan-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"})]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row lg:flex-col",children:[(0,e.jsxs)("button",{type:"button",onClick:F,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-black text-white transition-colors hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:A,className:"inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-black text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:"بستن"})]})]}),(0,e.jsx)("div",{className:"lg:col-span-2",children:(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"پیش‌نمایش چاپ"}),(0,e.jsx)("div",{className:"mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsx)("div",{className:"max-h-[60vh] overflow-y-auto p-4",children:(0,e.jsxs)("div",{className:"admin-invoice-page",children:[(0,e.jsxs)("header",{className:"admin-invoice-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"admin-company-name",children:g.companyName||"—"}),(0,e.jsx)("p",{className:"admin-company-subtitle",children:g.companySubtitle||"—"})]}),(0,e.jsx)("div",{className:"admin-company-logo",children:(0,e.jsx)("img",{src:"../company-logo.png",alt:"لوگو",style:{maxHeight:"54px",maxWidth:"100%"}})})]}),(0,e.jsxs)("section",{className:"admin-invoice-title-box",children:[(0,e.jsx)("h2",{className:"admin-invoice-title",children:g.reportTitle||"گزارش اعلام فروش"}),(0,e.jsx)("p",{className:"admin-invoice-description",children:g.reportDescription||"—"})]}),(0,e.jsxs)("section",{className:"admin-invoice-info-grid",children:[(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"شماره گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:g.reportNumber||"—"})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"تاریخ چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:As()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"ساعت چاپ"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:Ds()})]}),(0,e.jsxs)("div",{className:"admin-invoice-info-card",children:[(0,e.jsx)("span",{className:"admin-invoice-label",children:"نوع گزارش"}),(0,e.jsx)("span",{className:"admin-invoice-value",children:N==="all"?"تمام اعلام فروش نمایندگان":"اعلام فروش یک نمایندگی"})]})]}),(0,e.jsxs)("table",{className:"admin-invoice-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"تاریخ ثبت"}),(0,e.jsx)("th",{children:"کد نمایندگی"}),(0,e.jsx)("th",{children:"نام نمایندگی"}),(0,e.jsx)("th",{children:"شهر"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"}),(0,e.jsx)("th",{children:"جزئیات کالاها"})]})}),(0,e.jsx)("tbody",{children:S.map((y,m)=>{const L=Array.isArray(y.items)?y.items:[];return(0,e.jsxs)("tr",{className:"admin-print-row",children:[(0,e.jsx)("td",{children:ue(m+1)}),(0,e.jsx)("td",{children:zt(y.saleDate,y.createdAt)}),(0,e.jsx)("td",{children:y.representativeCode||"—"}),(0,e.jsx)("td",{children:y.representativeName||"—"}),(0,e.jsx)("td",{children:y.representativeCity||"—"}),(0,e.jsxs)("td",{children:[ue(y.totalItems)," قلم"]}),(0,e.jsx)("td",{children:Ie(y.totalAmount)}),(0,e.jsx)("td",{children:(0,e.jsx)("div",{children:L.length>0?L.map((W,D)=>(0,e.jsxs)("p",{className:"admin-details-line",children:[dr(W)," — ",ue(W.quantity)," قلم",Lt(W)>0?` — ${Ie(Lt(W))}`:""]},`${y.id}-${W.productId||D}`)):(0,e.jsx)("span",{children:"جزئیات کالا دریافت نشده است"})})})]},y.id||m)})}),(0,e.jsx)("tfoot",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{colSpan:5,children:"جمع کل گزارش"}),(0,e.jsxs)("td",{children:[ue(f)," قلم"]}),(0,e.jsx)("td",{children:Ie(I)}),(0,e.jsx)("td",{children:"—"})]})})]}),(0,e.jsxs)("section",{className:"admin-invoice-summary",children:[(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ue(S.length)," گزارش"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"تعداد"}),(0,e.jsxs)("p",{className:"admin-summary-value",children:[ue(f)," قلم"]})]}),(0,e.jsxs)("div",{className:"admin-summary-card",children:[(0,e.jsx)("p",{className:"admin-summary-label",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"admin-summary-value",children:Ie(I)})]})]}),(0,e.jsxs)("section",{className:"admin-invoice-notes",children:[(0,e.jsx)("p",{className:"admin-notes-title",children:"توضیحات و شرایط گزارش"}),(0,e.jsx)("p",{children:g.notes||"—"})]}),(0,e.jsxs)("section",{className:"admin-signatures",children:[(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تنظیم‌کننده گزارش"}),(0,e.jsx)("p",{children:g.preparedBy||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"تأیید مسئول فروش"}),(0,e.jsx)("p",{children:g.salesManager||"نام و امضا"})]}),(0,e.jsxs)("div",{className:"admin-signature-box",children:[(0,e.jsx)("p",{children:"مهر و امضای شرکت"}),(0,e.jsx)("p",{children:"تاریخ تأیید"})]})]}),(0,e.jsxs)("footer",{className:"admin-invoice-footer",children:[(0,e.jsx)("div",{children:g.companyAddress||"—"}),(0,e.jsxs)("div",{children:["تلفن: ",g.companyPhone||"—"," | ","وب‌سایت: ",g.companyWebsite||"—"]}),(0,e.jsx)("div",{children:"این سند به‌صورت سیستمی تولید شده است."})]})]})})})]})})]})]})}):null]})},Ht="https://myshop-backend-8nu7.onrender.com/api".replace(/\/+$/,""),Ot=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],Mt={name:["عنوان","عنوان","عنوان","نام","کالا","محصول","productName","Product","Name"],brand:["برند","نام برند","Brand"],category:["دسته‌بندی","دسته بندی","دسته","گروه کالا","Category"],quantity:["تعداد","تعداد کالا","تعداد موجودی","موجودی","موجودی کالا","مقدار","quantity","Qty","Stock","Count"],price:["قیمت","قیمت","قیمت","unitPrice","Unit Price","Price"]},ki=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",Ur=()=>{const t=ki();if(!t)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`,Accept:"application/json"}},pt=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),ar=t=>pt(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim().toLowerCase(),Ha=t=>{const r=pt(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,"");if(!r)return NaN;const s=Number(r);return Number.isFinite(s)?s:NaN},be=t=>{const r=Ha(t);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},cr=(t,r)=>{const s=new Set(r.map(ar));return Object.entries(t).find(([d])=>s.has(ar(d)))?.[1]??""},Rs=(t,r)=>{const s=new Set(r.map(ar));return Object.keys(t).some(d=>s.has(ar(d)))},qr=t=>Ot.find(r=>r.value===t)?.label||"نامشخص",En=t=>Ot.findIndex(r=>r.value===t),Es=t=>{const r=En(t);return r<0?"confirmed":r>=Ot.length-1?null:Ot[r+1].value},fa=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/").split("/").map(t=>pt(t)).join("/"),xr=(t,r)=>{if(oe.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||r}return t instanceof Error?t.message:r},Ni=async t=>{const r=await t.arrayBuffer(),s=fn(r,{type:"array"}),d=s.SheetNames[0];if(!d)throw new Error("فایل اکسل هیچ برگه‌ای ندارد.");const b=s.Sheets[d],n=yn.sheet_to_json(b,{defval:"",raw:!1});if(n.length===0)throw new Error("فایل اکسل خالی است.");const p=[];if(Rs(n[0],Mt.name)||p.push("عنوان"),Rs(n[0],Mt.quantity)||p.push("تعداد"),p.length>0)throw new Error(`ستون‌های لازم پیدا نشد: ${p.join("، ")}`);return n.map((i,u)=>{const h=u+2,c=String(cr(i,Mt.name)).trim(),N=String(cr(i,Mt.brand)).trim(),v=String(cr(i,Mt.category)).trim(),k=Ha(cr(i,Mt.quantity)),x=cr(i,Mt.price),g=String(x).trim()===""?0:Ha(x);let w="";return c?!Number.isSafeInteger(k)||k<=0?w="تعداد باید عدد صحیح و بزرگ‌تر از صفر باشد.":(!Number.isSafeInteger(g)||g<0)&&(w="قیمت باید عدد صحیح و نامنفی باشد."):w="عنوان خالی است.",{rowIndex:h,productName:c,brand:N,category:v,quantity:Number.isFinite(k)?k:0,unitPrice:Number.isFinite(g)?g:0,totalPrice:Number.isFinite(k)&&Number.isFinite(g)?k*g:0,error:w}})},wi=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[p,i]=(0,a.useState)(!1),[u,h]=(0,a.useState)(null),[c,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(""),[x,g]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),[$,q]=(0,a.useState)(!1),[P,O]=(0,a.useState)(null),[G,C]=(0,a.useState)(""),[S,f]=(0,a.useState)(""),[I,_]=(0,a.useState)(fa),[R,V]=(0,a.useState)(""),[Q,A]=(0,a.useState)([]),[F,y]=(0,a.useState)(""),[m,L]=(0,a.useState)(""),[W,D]=(0,a.useState)(""),j=(0,a.useRef)(null),U=(0,a.useMemo)(()=>new Map(s.map(l=>[pt(l.id).trim(),l])),[s]),Z=U.get(G),B=(0,a.useMemo)(()=>Q.filter(l=>!l.error),[Q]),ge=(0,a.useMemo)(()=>Q.filter(l=>!!l.error),[Q]),te=(0,a.useMemo)(()=>{const l=ar(W);return t.filter(z=>{const Y=U.get(pt(z.representativeId).trim()),he=!F||pt(z.representativeId).trim()===F,ye=!m||z.status===m,re=ar([z.shipmentNumber,z.representativeName,Y?.name,z.warehouse,z.excelFileName].join(" "));return he&&ye&&re.includes(l)})},[t,U,F,m,W]),ee=(0,a.useCallback)(async(l=!0)=>{l&&n(!0);try{const z=Ur(),[Y,he]=await Promise.all([oe.get(`${Ht}/shipments`,{headers:z}),oe.get(`${Ht}/representatives`,{headers:z})]);if(Y.data.success===!1||he.data.success===!1)throw new Error(Y.data.error||he.data.error||"دریافت اطلاعات ناموفق بود.");r(Array.isArray(Y.data.data)?Y.data.data:[]),d(Array.isArray(he.data.data)?he.data.data:[])}catch(z){k(xr(z,"دریافت اطلاعات ناموفق بود."))}finally{l&&n(!1)}},[]);(0,a.useEffect)(()=>{ee()},[ee]);const se=()=>{C(""),f(""),_(fa()),V(""),A([]),o(""),j.current&&(j.current.value="")},H=()=>{se(),_(fa()),k(""),g(""),q(!0)},ie=async l=>{const z=l.target.files?.[0];if(V(""),A([]),o(""),!!z){if(!/\.(xlsx|xls)$/i.test(z.name)){o("فقط فایل اکسل xlsx یا xls پذیرفته می‌شود."),l.target.value="";return}try{const Y=await Ni(z);V(z.name),A(Y)}catch(Y){o(xr(Y,"خواندن فایل اکسل ناموفق بود.")),l.target.value=""}}},pe=async l=>{if(l.preventDefault(),o(""),k(""),g(""),!Z){o("نماینده را انتخاب کنید.");return}const z=String(Z.id||"").trim();if(!z||z==="undefined"||z==="null"){o("شناسه نماینده نامعتبر است. لطفاً صفحه را رفرش کرده و دوباره تلاش کنید.");return}i(!0);try{let Y,he=0;B.length>0?(Y=B.map(re=>({productName:re.productName,brand:re.brand,category:re.category,quantity:re.quantity,unitPrice:re.unitPrice,rowIndex:re.rowIndex})),he=ge.length):Y=[{productName:"بار دستی",brand:"",category:"",quantity:1,unitPrice:0,rowIndex:1}],console.log("🚀 Sending shipment request:",{url:`${Ht}/shipments`,representativeId:z,warehouse:S.trim()||"انبار مرکزی",itemsCount:Y.length,skippedInvalidRows:he});const ye=await oe.post(`${Ht}/shipments`,{representativeId:z,warehouse:S.trim()||"انبار مرکزی",shipmentDate:I,excelFileName:R||"",items:Y},{headers:{...Ur(),"Content-Type":"application/json"}});if(ye.data.success===!1)throw new Error(ye.data.error||"ثبت بار ناموفق بود.");q(!1),se(),g(ye.data.message||"بار با موفقیت ثبت شد."),ee(!1)}catch(Y){o(xr(Y,"ثبت بار ناموفق بود."))}finally{i(!1)}},E=async(l,z)=>{if(l.status!==z&&window.confirm(`وضعیت بار «${l.shipmentNumber||l.id}» به «${qr(z)}» تغییر کند؟`)){h(String(l.id)),k(""),g("");try{const Y=await oe.patch(`${Ht}/shipments/${encodeURIComponent(String(l.id))}/status`,{status:z},{headers:Ur()});if(Y.data.success===!1)throw new Error(Y.data.error||"تغییر وضعیت ناموفق بود.");Y.data.data?r(ye=>ye.map(re=>String(re.id)===String(l.id)?Y.data.data:re)):ee(!1);let he=Y.data.message||"وضعیت بار تغییر کرد.";Y.data.sms&&(Y.data.sms.sent?he+=" پیامک برای نماینده ارسال شد.":he+=" (ارسال پیامک ناموفق بود.)"),g(he)}catch(Y){k(xr(Y,"تغییر وضعیت ناموفق بود."))}finally{h(null)}}},J=async l=>{const z=Es(l.status);if(!z){k("بار در آخرین وضعیت است. برای تغییر دستی از انتخاب‌گر وضعیت استفاده کنید.");return}await E(l,z)},ae=async l=>{const z=l.shipmentNumber||l.id;if(window.confirm(`آیا از حذف بار «${z}» مطمئن هستید؟`)){N(String(l.id)),k(""),g("");try{const Y=await oe.delete(`${Ht}/shipments/${encodeURIComponent(String(l.id))}`,{headers:Ur()});if(Y.data.success===!1)throw new Error(Y.data.error||"حذف بار ناموفق بود.");r(he=>he.filter(ye=>String(ye.id)!==String(l.id))),g(Y.data.message||"بار حذف شد.")}catch(Y){k(xr(Y,"حذف بار ناموفق بود."))}finally{N(null)}}};return b&&t.length===0?(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-10 text-center dark:bg-gray-900",children:[(0,e.jsx)(me,{className:"mx-auto mb-3 h-9 w-9 animate-spin text-blue-600"}),"در حال دریافت اطلاعات..."]}):(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 rounded-2xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:space-y-5 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-gray-100 pb-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between sm:pb-5",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-lg font-black text-gray-900 dark:text-white sm:text-2xl",children:[(0,e.jsx)(tr,{className:"h-5 w-5 text-blue-600 sm:h-6 sm:w-6"}),"مدیریت ارسال بار"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm",children:[be(t.length)," حواله ثبت‌شده"]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>void ee(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-3 text-xs font-bold dark:border-gray-700 dark:text-white sm:px-4 sm:text-sm",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"به‌روزرسانی"]}),(0,e.jsxs)("button",{type:"button",onClick:H,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 text-xs font-black text-white hover:bg-blue-700 sm:px-4 sm:text-sm",children:[(0,e.jsx)(wr,{className:"h-4 w-4"}),"ارسال بار جدید"]})]})]}),v&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700",children:[(0,e.jsx)(Ae,{className:"h-5 w-5 shrink-0"}),v]}),x&&(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700",children:[(0,e.jsx)(je,{className:"h-5 w-5 shrink-0"}),x]}),(0,e.jsxs)("section",{className:"grid gap-3 md:grid-cols-3",children:[(0,e.jsx)("input",{type:"search",value:W,onChange:l=>D(l.target.value),placeholder:"جست‌وجوی حواله یا نماینده",className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,e.jsxs)("select",{value:F,onChange:l=>y(l.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ نمایندگان"}),s.map(l=>(0,e.jsx)("option",{value:pt(l.id).trim(),children:l.name||"بدون نام"},String(l.id)))]}),(0,e.jsxs)("select",{value:m,onChange:l=>L(l.target.value),className:"min-h-11 rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"همهٔ وضعیت‌ها"}),Ot.map(l=>(0,e.jsx)("option",{value:l.value,children:l.label},l.value))]})]}),te.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل بارها"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(te.length)," حواله · ",be(te.reduce((l,z)=>l+(z.totalItems??z.items?.reduce((Y,he)=>Y+he.quantity,0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:be(te.reduce((l,z)=>l+(z.totalValue??z.items?.reduce((Y,he)=>Y+(he.totalPrice??(he.quantity||0)*(he.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),te.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-10 text-center",children:[(0,e.jsx)(bt,{className:"mx-auto mb-3 h-12 w-12 text-blue-300"}),(0,e.jsx)("p",{className:"font-bold text-gray-700",children:t.length===0?"هنوز باری ثبت نشده است.":"باری با این فیلترها پیدا نشد."})]}):(0,e.jsx)("div",{className:"grid gap-4 xl:grid-cols-2",children:te.map(l=>{const z=U.get(pt(l.representativeId).trim()),Y=l.representativeName||z?.name||"—",he=l.items?.length??l.itemsCount??0,ye=l.totalItems??l.items?.reduce((ce,ve)=>ce+ve.quantity,0)??0,re=En(l.status),de=Es(l.status),T=u===String(l.id),K=c===String(l.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/60 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"truncate text-xs font-bold text-gray-500",children:["حواله ",l.shipmentNumber||l.id]}),(0,e.jsx)("h3",{className:"mt-1 text-base font-black text-gray-900 dark:text-white sm:text-lg",children:Y}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-600 dark:text-gray-300 sm:mt-2 sm:text-sm",children:["انبار: ",l.warehouse||"—"]})]}),(0,e.jsx)("span",{className:"rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-black text-blue-700 sm:px-3 sm:py-1.5 sm:text-xs",children:qr(l.status)})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-2 sm:mt-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:be(he)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black dark:text-white sm:text-base",children:be(ye)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-2 dark:bg-gray-900 sm:p-3",children:[(0,e.jsx)("p",{className:"text-[10px] text-gray-500 sm:text-xs",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black dark:text-white sm:text-sm",children:l.shipmentDate||"—"})]})]}),(0,e.jsx)("div",{className:"mt-3 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-1.5",children:Ot.map((ce,ve)=>(0,e.jsx)("div",{className:`truncate rounded-lg px-1 py-2 text-center text-[9px] font-bold sm:text-xs ${ve<=re?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700"}`,children:ce.label},ce.value))}),(0,e.jsxs)("div",{className:"mt-3 flex flex-col gap-2 border-t border-gray-200 pt-3 dark:border-gray-700 sm:mt-4 sm:flex-row sm:pt-4",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>O(l),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-300 px-4 text-sm font-bold text-blue-700",children:[(0,e.jsx)(la,{className:"h-4 w-4"}),"جزئیات"]}),(0,e.jsx)("button",{type:"button",onClick:()=>void J(l),disabled:T||K||!de,title:de?`تغییر به ${qr(de)}`:"مرحلهٔ بعدی ندارد",className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white disabled:cursor-not-allowed disabled:bg-gray-300",children:T?(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Wa,{className:"h-5 w-5"})}),(0,e.jsx)("select",{value:l.status||"registered",onChange:ce=>void E(l,ce.target.value),disabled:T||K,className:"min-h-11 flex-1 rounded-xl border border-gray-300 bg-white px-3 text-sm font-bold dark:border-gray-700 dark:bg-gray-900 dark:text-white",children:Ot.map(ce=>(0,e.jsx)("option",{value:ce.value,children:ce.label},ce.value))}),(0,e.jsxs)("button",{type:"button",onClick:()=>void ae(l),disabled:T||K,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 disabled:opacity-50",children:[K?(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(He,{className:"h-4 w-4"}),"حذف"]})]})]},String(l.id))})}),$&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-xl font-black dark:text-white",children:"ارسال بار جدید"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"گیرنده به‌صورت خودکار نام نمایندهٔ انتخاب‌شده است."})]}),(0,e.jsx)("button",{type:"button",disabled:p,onClick:()=>{q(!1),se()},className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),w&&(0,e.jsxs)("div",{className:"mb-4 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700",children:[(0,e.jsx)(Ae,{className:"h-5 w-5 shrink-0"}),w]}),(0,e.jsxs)("form",{onSubmit:l=>void pe(l),className:"space-y-4 sm:space-y-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 sm:grid-cols-2 sm:gap-4",children:[(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["نماینده",(0,e.jsxs)("select",{value:G,onChange:l=>C(l.target.value),required:!0,className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:"نماینده را انتخاب کنید"}),s.map(l=>(0,e.jsxs)("option",{value:pt(l.id).trim(),children:[l.name||"بدون نام"," ","—"," ",l.city||"بدون شهر"]},String(l.id)))]})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white",children:["تاریخ ثبت بار",(0,e.jsxs)("div",{className:"relative mt-2",children:[(0,e.jsx)(it,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"}),(0,e.jsx)("input",{value:I,readOnly:!0,dir:"ltr",className:"min-h-12 w-full cursor-not-allowed rounded-xl border border-blue-200 bg-blue-50 py-2 pl-3 pr-11 text-center font-black text-blue-800"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:"تاریخ امروز خودکار ثبت می‌شود و قابل ویرایش نیست."})]}),(0,e.jsxs)("label",{className:"block text-sm font-bold dark:text-white sm:col-span-2",children:["انبار مبدأ ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"}),(0,e.jsx)("input",{value:S,onChange:l=>f(l.target.value),placeholder:"خالی = انبار مرکزی",className:"mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]})]}),Z&&(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 text-sm font-bold text-purple-800",children:["گیرندهٔ خودکار:"," ",Z.name||"—"," ","— کد"," ",Z.code||"—"]}),(0,e.jsx)("div",{className:"rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-5",children:(0,e.jsxs)("label",{className:"flex cursor-pointer flex-col items-center gap-2 text-center",children:[(0,e.jsx)(Sr,{className:"h-8 w-8 text-blue-600"}),(0,e.jsxs)("span",{className:"font-black text-blue-800",children:["انتخاب فایل اکسل اقلام ",(0,e.jsx)("span",{className:"text-xs font-normal text-gray-500",children:"(اختیاری)"})]}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"ستون‌های ضروری: عنوان و تعداد — اگر فایل انتخاب نکنید، بار با یک آیتم پیش‌فرض ثبت می‌شود"}),(0,e.jsx)("input",{ref:j,type:"file",accept:".xlsx,.xls",onChange:l=>void ie(l),className:"sr-only"})]})}),R&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm font-bold text-green-700",children:[(0,e.jsx)(es,{className:"h-5 w-5"}),R]}),Q.length>0&&(0,e.jsxs)("div",{className:"max-h-72 overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"space-y-2 p-2 sm:hidden",children:Q.map(l=>(0,e.jsxs)("div",{className:`rounded-xl p-3 ${l.error?"bg-red-50 text-red-700":"bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white"}`,children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate font-black",children:l.productName||"—"}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500",children:["ردیف ",be(l.rowIndex)]})]}),(0,e.jsx)("span",{className:`rounded-full px-2 py-0.5 text-[10px] font-bold ${l.error?"bg-red-200 text-red-800":"bg-green-100 text-green-700"}`,children:l.error?"نامعتبر":"آماده"})]}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black",children:be(l.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsx)("p",{className:"font-black",children:be(l.unitPrice)})})]}),l.brand&&(0,e.jsxs)("p",{className:"mt-2 text-xs text-gray-500",children:["برند: ",l.brand]}),l.category&&(0,e.jsxs)("p",{className:"text-xs text-gray-500",children:["دسته: ",l.category]})]},l.rowIndex))}),(0,e.jsxs)("table",{className:"hidden w-full min-w-[700px] text-right text-sm sm:table",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"ردیف"}),(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:Q.map(l=>(0,e.jsxs)("tr",{className:`border-t border-gray-100 dark:border-gray-700 ${l.error?"bg-red-50":"dark:text-white"}`,children:[(0,e.jsx)("td",{className:"p-3",children:be(l.rowIndex)}),(0,e.jsx)("td",{className:"p-3 font-bold",children:l.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:be(l.unitPrice)}),(0,e.jsx)("td",{className:"p-3",children:be(l.quantity)}),(0,e.jsx)("td",{className:"p-3",children:l.error||"آماده"})]},l.rowIndex))})]})]}),B.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع قیمت محصولات"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(B.length)," قلم · ",be(B.reduce((l,z)=>l+z.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:be(B.reduce((l,z)=>l+z.quantity*z.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),B.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-emerald-50 via-green-50 to-teal-50 p-4 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-teal-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع کل ارسال بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(B.length)," قلم · ",be(B.reduce((l,z)=>l+z.quantity,0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 sm:text-xl",children:be(B.reduce((l,z)=>l+z.quantity*z.unitPrice,0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex-row sm:justify-end",children:[(0,e.jsx)("button",{type:"button",disabled:p,onClick:()=>{q(!1),se()},className:"min-h-12 rounded-xl bg-gray-100 px-4 text-sm font-bold text-gray-700 sm:px-5",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:p||!Z,className:"flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 font-black text-white disabled:cursor-not-allowed disabled:opacity-50",children:[p?(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Xt,{className:"h-4 w-4"}),"ثبت و ارسال بار"]})]})]})]})}),P&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-700",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"text-xl font-black dark:text-white",children:["جزئیات بار"," ",P.shipmentNumber||P.id]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:["فایل:"," ",P.excelFileName||"—"]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>O(null),className:"rounded-lg p-2 dark:text-white",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mb-5 rounded-xl bg-blue-50 p-3 text-sm font-black text-blue-700",children:["وضعیت فعلی:"," ",qr(P.status)]}),P.items?.length?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"mb-4 rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white",children:(0,e.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع این بار"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[be(P.items.length)," قلم · ",be(P.items.reduce((l,z)=>l+z.quantity,0))," عدد"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-xl",children:be(P.items.reduce((l,z)=>l+(z.totalPrice??z.quantity*z.unitPrice),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),(0,e.jsx)("div",{className:"space-y-2 sm:hidden",children:P.items.map((l,z)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:l.productName}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:be(l.quantity)})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"قیمت"}),(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[be(l.unitPrice)," ت"]})]})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[l.brand&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",l.brand]}),l.category&&(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",l.category]})]}),(0,e.jsxs)("div",{className:"mt-2 rounded-lg bg-green-50 p-2 text-xs dark:bg-green-950/20",children:[(0,e.jsx)("span",{className:"text-gray-500",children:"مبلغ کل: "}),(0,e.jsxs)("span",{className:"font-black text-green-700 dark:text-green-300",children:[be(l.totalPrice??l.quantity*l.unitPrice)," تومان"]})]})]},String(l.id??z)))}),(0,e.jsx)("div",{className:"hidden max-h-80 overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800 dark:text-white",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"مبلغ"})]})}),(0,e.jsx)("tbody",{children:P.items.map((l,z)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-white",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:l.productName}),(0,e.jsx)("td",{className:"p-3",children:l.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:l.category||"—"}),(0,e.jsxs)("td",{className:"p-3",children:[be(l.unitPrice)," ","تومان"]}),(0,e.jsx)("td",{className:"p-3",children:be(l.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[be(l.totalPrice)," ","تومان"]})]},String(l.id??z)))})]})})]}):(0,e.jsx)("p",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500",children:"اقلام بار برای نمایش موجود نیستند."})]})})]})};function Dr(t){"@babel/helpers - typeof";return Dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Dr(t)}function Si(t,r){if(Dr(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var d=s.call(t,r||"default");if(Dr(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Ci(t){var r=Si(t,"string");return Dr(r)=="symbol"?r:r+""}function Ps(t,r,s){return(r=Ci(r))in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}var $i=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},Ii=$i("https://myshop-backend-8nu7.onrender.com/api"),Ai=class extends a.Component{constructor(...t){super(...t),Ps(this,"state",{hasError:!1,errorMessage:"",errorStack:"",componentStack:""}),Ps(this,"handleRetry",()=>{this.setState({hasError:!1,errorMessage:"",errorStack:"",componentStack:""})})}static getDerivedStateFromError(t){return{hasError:!0,errorMessage:t?.message||"خطای نامشخص در داشبورد نماینده.",errorStack:t?.stack||""}}componentDidCatch(t,r){console.error("❌ خطای داشبورد نماینده:",t),console.error("❌ مسیر کامپوننت:",r.componentStack),this.setState({componentStack:r.componentStack||""})}render(){const{children:t,onBack:r}=this.props,{hasError:s,errorMessage:d,errorStack:b,componentStack:n}=this.state;return s?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border-2 border-red-300 bg-red-50 p-5 shadow-lg dark:border-red-900/60 dark:bg-red-950/30 md:p-7",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"rounded-xl bg-red-100 p-3 text-red-600 dark:bg-red-900/40 dark:text-red-300",children:(0,e.jsx)(Ae,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black text-red-800 dark:text-red-300",children:"خطا در نمایش داشبورد نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-bold leading-7 text-red-700 dark:text-red-400",children:"متن خطای زیر را کامل بررسی کنید."})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-sm font-black text-red-700 dark:text-red-400",children:"متن خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-44 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-red-50 p-3 text-xs leading-6 text-red-800 dark:bg-red-950/30 dark:text-red-300",children:d})]}),b?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"جزئیات فنی خطا"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:b})]}):null,n?(0,e.jsxs)("details",{className:"mt-4 rounded-xl border border-red-200 bg-white p-4 dark:border-red-900/40 dark:bg-gray-900",children:[(0,e.jsx)("summary",{className:"cursor-pointer text-sm font-black text-red-700 dark:text-red-400",children:"مسیر کامپوننت خطادار"}),(0,e.jsx)("pre",{className:"mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-gray-950 p-3 text-xs leading-6 text-gray-100",children:n})]}):null,(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",onClick:this.handleRetry,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"تلاش دوباره"]}),(0,e.jsx)("button",{type:"button",onClick:r,className:"min-h-11 rounded-xl bg-gray-800 px-5 py-3 text-sm font-black text-white transition hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]})]}):t}},zs=({activeSection:t,userRole:r,products:s,totalProducts:d,totalPrice:b,viewingRepDashboard:n,representatives:p,representativeFiles:i,loadingFiles:u,shipments:h=[],onEditProduct:c,onDeleteProduct:N,onUploadSuccess:v,onOpenRepDashboard:k,onBackToRepList:x,onViewFile:g,onDeleteFile:w,onAddRepresentative:o,onEditRepresentative:$,onDeleteRepresentative:q,onRepresentativeUpdated:P})=>{const O=(0,a.useMemo)(()=>Array.isArray(s)?s:[],[s]),G=(0,a.useMemo)(()=>Array.isArray(p)?p:[],[p]),C=(0,a.useMemo)(()=>Array.isArray(h)?h:[],[h]),S=(0,a.useMemo)(()=>Array.isArray(i)?i:[],[i]),f=(0,a.useMemo)(()=>n===null||n===""?null:G.find(I=>String(I.id)===String(n))||null,[G,n]);if((0,a.useEffect)(()=>{console.log("🔎 MAIN CONTENT STATE",{activeSection:t,productsCount:O.length,totalProducts:d,viewingRepDashboard:n,representativesCount:G.length,selectedRepresentative:f?.name||null})},[t,O.length,d,n,G.length,f]),n!==null&&n!=="")return f?(0,e.jsx)(Ai,{onBack:x,children:(0,e.jsx)(xi,{representative:f,apiUrl:Ii,onBack:x,files:S,loadingFiles:u,onViewFile:g,onDeleteFile:w,onRepresentativeUpdated:P})}):(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center shadow-lg dark:border-yellow-800 dark:bg-yellow-900/20 md:p-8",children:[(0,e.jsx)(me,{className:"mx-auto mb-4 h-12 w-12 animate-spin text-yellow-600 dark:text-yellow-400"}),(0,e.jsx)("p",{className:"text-base font-black text-yellow-700 dark:text-yellow-300 md:text-lg",children:"اطلاعات نماینده پیدا نشد."}),(0,e.jsxs)("div",{className:"mx-auto mt-4 max-w-xl rounded-xl border border-yellow-200 bg-white p-4 text-right text-xs leading-7 text-yellow-800 dark:border-yellow-800 dark:bg-gray-900 dark:text-yellow-300",children:[(0,e.jsxs)("p",{children:["شناسه انتخاب‌شده:"," ",(0,e.jsx)("strong",{children:n})]}),(0,e.jsxs)("p",{children:["تعداد نمایندگان:"," ",(0,e.jsx)("strong",{children:G.length})]}),(0,e.jsxs)("p",{className:"break-words",children:["شناسه‌های موجود:"," ",(0,e.jsx)("strong",{children:G.map(I=>String(I.id)).join(", ")||"هیچ‌کدام"})]})]}),(0,e.jsx)("button",{type:"button",onClick:x,className:"mt-5 min-h-11 rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:"بازگشت به لیست نمایندگان"})]});switch(t){case"dashboard":return(0,e.jsx)(Ol,{totalProducts:Number(d)||0,totalPrice:Number(b)||0,representatives:G,shipments:C});case"products":return(0,e.jsx)(An,{products:O,userRole:r,onEdit:c,onDelete:N});case"representatives":return r!=="admin"?(0,e.jsx)(or,{message:"فقط ادمین به بخش نمایندگان دسترسی دارد."}):(0,e.jsx)(li,{representatives:G,userRole:r,onOpenDashboard:k,onAddRepresentative:o,onEditRepresentative:$,onDeleteRepresentative:q});case"upload":return r!=="admin"?(0,e.jsx)(or,{message:"فقط ادمین به بخش آپلود اکسل دسترسی دارد."}):(0,e.jsx)(Yl,{onUploadSuccess:v});case"shipments":return r!=="admin"?(0,e.jsx)(or,{message:"فقط ادمین به بخش ارسال بار دسترسی دارد."}):(0,e.jsx)(wi,{});case"sales-reports":return r!=="admin"?(0,e.jsx)(or,{message:"فقط ادمین به بخش اعلام فروش نمایندگان دسترسی دارد."}):(0,e.jsx)(vi,{});case"return-requests":return r!=="admin"?(0,e.jsx)(or,{message:"فقط ادمین به درخواست‌های مرجوعی دسترسی دارد."}):(0,e.jsx)(pi,{});default:return(0,e.jsxs)("div",{dir:"rtl",className:"rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-gray-900 md:p-16",children:[(0,e.jsx)("div",{className:"mb-4 flex justify-center text-orange-500 dark:text-orange-400",children:(0,e.jsx)(wl,{className:"h-16 w-16 md:h-20 md:w-20"})}),(0,e.jsx)("p",{className:"text-base text-gray-500 dark:text-gray-400 md:text-xl",children:"این بخش در حال توسعه است."})]})}},Di=({file:t,apiUrl:r,onClose:s})=>{if(!t)return null;const d=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/view`,b=`${r}/representatives/${t.representativeId}/files/${encodeURIComponent(t.name)}/download`;return(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md md:p-4",children:(0,e.jsxs)("div",{className:"relative w-full max-w-4xl",children:[(0,e.jsx)("button",{type:"button",onClick:s,className:"absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600","aria-label":"بستن",children:(0,e.jsx)(we,{className:"h-5 w-5"})}),t.icon==="🖼️"?(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-white shadow-2xl",children:[(0,e.jsx)("div",{className:"relative flex items-center justify-center bg-gray-100",children:(0,e.jsx)("img",{src:d,alt:t.name,className:"max-h-[75vh] w-full object-contain"})}),(0,e.jsxs)("div",{className:"flex items-center gap-3 bg-gray-900 px-4 py-3 text-white",children:[(0,e.jsx)(kn,{className:"h-5 w-5 shrink-0 text-gray-400"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("p",{className:"truncate text-sm font-bold",children:t.name}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs text-gray-400",children:[t.size," • ",t.uploadedAt]})]})]})]}):(0,e.jsxs)("div",{className:"mx-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl md:p-8",children:[(0,e.jsx)("div",{className:"mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-100 text-blue-600 mx-auto",children:(0,e.jsx)(gt,{className:"h-12 w-12"})}),(0,e.jsx)("h3",{className:"mb-2 truncate text-lg font-black text-gray-800",children:t.name}),(0,e.jsxs)("p",{className:"mb-6 text-sm text-gray-500",children:[t.size," • ",t.uploadedAt]}),(0,e.jsxs)("div",{className:"flex flex-col justify-center gap-3 sm:flex-row",children:[(0,e.jsxs)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"باز کردن"]}),(0,e.jsxs)("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-600",children:[(0,e.jsx)(wn,{className:"h-4 w-4"}),"دانلود"]})]})]})]})})},Pn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),tt=t=>{const r=Pn(t).replace(/[,٬،\s]/g,""),s=Number(r);return Number.isFinite(s)?Math.max(0,s):0},mr=t=>tt(t).toLocaleString("fa-IR"),Ce=t=>tt(t).toLocaleString("fa-IR"),Ve=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Ms=t=>Pn(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").trim().toLowerCase(),Ti=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},Fs=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"];for(const r of[sessionStorage,localStorage])for(const s of t){const d=r.getItem(s);if(d&&d!=="null"&&d!=="undefined"){const b=d.replace(/^Bearer\s+/i,"").trim();if(b)return b}}return""},Ri=({representatives:t=[],onOpenRepresentativeWarehouse:r,apiUrl:s})=>{const[d,b]=(0,a.useState)(""),[n,p]=(0,a.useState)("all"),[i,u]=(0,a.useState)({}),[h,c]=(0,a.useState)({}),[N,v]=(0,a.useState)(!0),[k,x]=(0,a.useState)(0),g=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),w=Ti(s),o=JSON.stringify([...new Set(g.map(m=>String(m.id)))].sort()),$=JSON.stringify(g.map(m=>[String(m.id),m.storeItemsCount,m.storeItemsTotalValue])),q=(0,a.useCallback)(()=>{x(m=>m+1)},[]),P=()=>"https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png",O=()=>{try{return new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleString("fa-IR")}},G=()=>{if(N){window.alert("لطفاً صبر کنید تا دریافت انبارها کامل شود.");return}if(!S.length){window.alert("نماینده‌ای برای چاپ موجود نیست.");return}const m=window.open("","_blank","width=1000,height=720");if(!m){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}const L=O(),W=P(),D=S.map(te=>{const ee=String(te.id),se=i[ee],H=h[ee];return{id:ee,name:te.name||"بدون نام",code:te.code||"-",city:te.city||"-",phone:te.phone||"-",status:te.status!=="inactive"?"فعال":"غیرفعال",itemCount:se?.itemCount??0,totalValue:se?.totalValue??0,hasError:!!H||!se}}),j=D.map((te,ee)=>`
        <tr>
          <td style="text-align:center;">${ee+1}</td>
          <td>${Ve(te.name)}<div style="font-size:10px;color:#6b7280;margin-top:2px;" dir="ltr">${Ve(te.phone)}</div></td>
          <td style="text-align:center;">${Ve(te.code)}</td>
          <td style="text-align:center;">${Ve(te.city)}</td>
          <td style="text-align:center;">${te.status}</td>
          <td style="text-align:center;">${te.hasError?"نامشخص":Ce(te.itemCount)}</td>
          <td style="text-align:center;">${te.hasError?"نامشخص":Ce(te.totalValue)+" تومان"}</td>
        </tr>`).join(""),U=D.reduce((te,ee)=>te+(ee.hasError?0:ee.itemCount),0),Z=D.reduce((te,ee)=>te+(ee.hasError?0:ee.totalValue),0),B=D.filter(te=>te.status==="فعال").length,ge=D.filter(te=>te.hasError).length;m.document.write(`<!DOCTYPE html>
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
    <p><strong>تعداد نمایندگان:</strong> ${Ce(D.length)}</p>
  </div>
</div>

<div class="report-title">
  <h2>گزارش خلاصهٔ انبارهای نمایندگان</h2>
  <p>شامل تعداد کالاهای دارای موجودی و ارزش کل موجودی هر نماینده</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نمایندگان فعال</div>
    <div class="value">${Ce(B)}</div>
  </div>
  <div class="info-card">
    <div class="label">مجموع کالاهای دارای موجودی</div>
    <div class="value">${Ce(U)}</div>
  </div>
  <div class="info-card">
    <div class="label">ارزش کل انبارها</div>
    <div class="value">${Ce(Z)}<br><span style="font-size:11px;">تومان</span></div>
  </div>
  <div class="info-card">
    <div class="label">انبارهای ناموفق</div>
    <div class="value" style="color:${ge>0?"#b91c1c":"#111"};">${Ce(ge)}</div>
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
        <td style="text-align:center;"><strong>${Ce(U)}</strong></td>
        <td style="text-align:center;"><strong>${Ce(Z)} تومان</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد کل انبارها</div>
      <div class="value">${Ce(D.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع کالاها</div>
      <div class="value">${Ce(U)}</div>
    </div>
    <div class="summary-card">
      <div class="label">ارزش کل انبارها</div>
      <div class="value">${Ce(Z)}<br><span style="font-size:11px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر</p>
  </div>
</div>

</body>
</html>`),m.document.close(),m.focus(),setTimeout(()=>{m.print()},800)},C=async m=>{const L=String(m.id);let W=i[L];if(!W||!Array.isArray(W.items)||W.items.length===0)try{const se=Fs(),H={Accept:"application/json"};se&&(H.Authorization=`Bearer ${se}`);const ie=await fetch(`${w}/representatives/${encodeURIComponent(L)}/warehouse?_=${Date.now()}`,{method:"GET",credentials:"include",cache:"no-store",headers:H}),pe=await ie.text();let E;try{E=JSON.parse(pe)}catch{throw new Error("پاسخ انبار معتبر نیست.")}if(!ie.ok||!E.success)throw new Error(E.error||E.message||"دریافت انبار ناموفق بود.");const J=(Array.isArray(E.data?.items)?E.data.items:[]).filter(ae=>tt(ae.quantity)>0);W={itemCount:J.length,totalValue:J.reduce((ae,l)=>ae+tt(l.quantity)*tt(l.unitPrice),0),items:J,updatedAt:E.data?.updatedAt}}catch(se){const H=se instanceof Error?se.message:"دریافت انبار ناموفق بود.";window.alert(`دریافت جزئیات انبار ${m.name||""} ناموفق بود:
${H}`);return}const D=window.open("","_blank","width=1000,height=720");if(!D){window.alert("پنجرهٔ چاپ باز نشد. لطفاً popup blocker را غیرفعال کنید.");return}const j=O(),U=P(),Z=W?.items??[],B=Z.map((se,H)=>{const ie=String(se.productName||se.name||se.title||"بدون عنوان"),pe=String(se.brand||"-"),E=String(se.category||"-"),J=tt(se.quantity),ae=tt(se.unitPrice),l=J*ae;return`
        <tr>
          <td style="text-align:center;">${H+1}</td>
          <td>${Ve(ie)}</td>
          <td style="text-align:center;">${Ve(pe)}</td>
          <td style="text-align:center;">${Ve(E)}</td>
          <td style="text-align:center;">${Ce(ae)} تومان</td>
          <td style="text-align:center;">${Ce(J)}</td>
          <td style="text-align:center;">${Ce(l)} تومان</td>
        </tr>`}).join(""),ge=Z.reduce((se,H)=>se+tt(H.quantity),0),te=W?.totalValue??0,ee=W?.updatedAt?new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(W.updatedAt)):"-";D.document.write(`<!DOCTYPE html>
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
    <div class="value">${Ce(W?.itemCount??Z.length)}</div>
  </div>
  <div class="info-card">
    <div class="label">آخرین بروزرسانی</div>
    <div class="value">${ee}</div>
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
        <td style="text-align:center;"><strong>${Ce(ge)}</strong></td>
        <td></td>
        <td style="text-align:center;"><strong>${Ce(te)} تومان</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد انواع کالا</div>
      <div class="value">${Ce(W?.itemCount??Z.length)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع قطعات</div>
      <div class="value">${Ce(ge)}</div>
    </div>
    <div class="summary-card">
      <div class="label">ارزش کل انبار</div>
      <div class="value">${Ce(te)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر</p>
  </div>
</div>

</body>
</html>`),D.document.close(),D.focus(),setTimeout(()=>{D.print()},800)};(0,a.useEffect)(()=>{const m=new AbortController,L=JSON.parse(o);return(async()=>{if(v(!0),c({}),!L.length){u({}),v(!1);return}const D={},j={},U=Fs(),Z={Accept:"application/json"};U&&(Z.Authorization=`Bearer ${U}`);let B=0;const ge=async()=>{for(;B<L.length&&!m.signal.aborted;){const te=L[B];B+=1;try{const ee=await fetch(`${w}/representatives/${encodeURIComponent(te)}/warehouse?_=${Date.now()}`,{method:"GET",credentials:"include",cache:"no-store",headers:Z,signal:m.signal}),se=await ee.text();let H;try{H=JSON.parse(se)}catch{throw new Error(`پاسخ انبار معتبر نیست. کد: ${ee.status}`)}if(!ee.ok||!H.success)throw new Error(H.error||H.message||`دریافت انبار ناموفق بود. کد: ${ee.status}`);if(!Array.isArray(H.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور موجود نیست.");const ie=H.data.items.filter(pe=>tt(pe.quantity)>0);D[te]={itemCount:ie.length,totalValue:ie.reduce((pe,E)=>pe+tt(E.quantity)*tt(E.unitPrice),0),items:ie,updatedAt:H.data?.updatedAt}}catch(ee){if(m.signal.aborted)return;j[te]=ee instanceof Error?ee.message:"دریافت موجودی ناموفق بود."}}};await Promise.all(Array.from({length:Math.min(4,L.length)},()=>ge())),m.signal.aborted||(u(D),c(j),v(!1))})(),()=>{m.abort()}},[w,o,$,k]);const S=(0,a.useMemo)(()=>{const m=Ms(d);return g.filter(L=>{const W=L.status!=="inactive",D=n==="all"||(n==="active"?W:!W),j=!m||[L.name,L.code,L.city,L.phone].some(U=>Ms(U).includes(m));return D&&j})},[g,d,n]),f=(0,a.useMemo)(()=>g.reduce((m,L)=>{const W=i[String(L.id)];return W?{itemCount:m.itemCount+W.itemCount,totalValue:m.totalValue+W.totalValue}:m},{itemCount:0,totalValue:0}),[g,i]),I=g.filter(m=>m.status!=="inactive").length,_=Object.keys(h).length,R=!N&&_>0,V=m=>{const L=m.status!=="inactive";return(0,e.jsxs)("span",{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${L?"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`,children:[(0,e.jsx)(je,{className:"h-3.5 w-3.5"}),L?"فعال":"غیرفعال"]})},Q=m=>{if(N)return(0,e.jsx)("span",{className:"text-xs text-gray-500",children:"در حال دریافت..."});if(h[m]||!i[m])return(0,e.jsx)("span",{className:"text-xs text-red-600",children:"نامشخص"});const L=i[m].itemCount;return(0,e.jsx)("span",{className:`inline-flex rounded-full px-2.5 py-1 text-xs font-black ${L>0?"bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`,children:L>0?`${mr(L)} نوع کالا`:"بدون موجودی"})},A=m=>N?"در حال دریافت...":h[m]||!i[m]?"نامشخص":`${mr(i[m].totalValue)} تومان`,F=(m,L)=>(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>r(m),className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white hover:from-cyan-700 hover:to-blue-700",children:[(0,e.jsx)(It,{className:"h-4 w-4"}),"ورود به انبار"]}),L?(0,e.jsxs)("button",{type:"button",onClick:()=>C(L),className:"inline-flex min-h-10 items-center justify-center gap-1 rounded-xl border border-cyan-600 px-3 py-2 text-xs font-black text-cyan-700 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-900/20",title:"چاپ لیست کالاهای این انبار",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ انبار"]}):null]}),y=m=>N?"...":R?"نامشخص":mr(m);return(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(It,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl",children:"انبار نمایندگان"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط کالاهای دارای موجودی در انبار شمارش می‌شوند؛ ردیف‌های ثبت‌نشدهٔ اکسل در این تعداد حساب نمی‌شوند."})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:q,disabled:N,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[N?(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Re,{className:"h-4 w-4"}),"بروزرسانی موجودی"]}),(0,e.jsxs)("button",{type:"button",onClick:G,disabled:N||!S.length,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-sm hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50",title:"چاپ لیست خلاصهٔ همهٔ انبارها",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ کلی"]})]})]})}),_>0&&!N?(0,e.jsxs)("section",{role:"alert",className:"rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(Ae,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsxs)("p",{children:["موجودی ",mr(_)," نماینده دریافت نشد. مجموع کل تا دریافت اطلاعات همهٔ انبارها نمایش داده نمی‌شود."]})]}),g.filter(m=>h[String(m.id)]).map(m=>(0,e.jsxs)("p",{className:"mt-2 break-words",children:[m.name||"نماینده",":"," ",h[String(m.id)]]},String(m.id)))]}):null,(0,e.jsxs)("section",{className:"grid grid-cols-1 gap-3 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"نمایندگان فعال"}),(0,e.jsx)(je,{className:"h-5 w-5 text-green-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-green-900 dark:text-green-100",children:mr(I)})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد کالاهای دارای موجودی"}),(0,e.jsx)(bt,{className:"h-5 w-5 text-blue-600"})]}),(0,e.jsx)("p",{className:"mt-3 text-2xl font-black text-blue-900 dark:text-blue-100",children:y(f.itemCount)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-blue-700 dark:text-blue-300",children:"مجموع ردیف‌های دارای موجودی در انبارها"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-purple-100 bg-purple-50 p-4 dark:border-purple-900/50 dark:bg-purple-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع نمایندگان"}),(0,e.jsx)(ht,{className:"h-5 w-5 text-purple-600"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-xl font-black text-purple-900 dark:text-purple-100",children:y(f.totalValue)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-purple-700 dark:text-purple-300",children:"تومان"})]})]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"لیست انبارهای نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"تعداد کالا، تعداد ردیف‌های دارای موجودی در انبار است؛ نه تعداد قطعات و نه تعداد ردیف‌های فایل اکسل."}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]",children:[(0,e.jsxs)("select",{value:n,onChange:m=>p(m.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("option",{value:"all",children:"همه نمایندگان"}),(0,e.jsx)("option",{value:"active",children:"نمایندگان فعال"}),(0,e.jsx)("option",{value:"inactive",children:"نمایندگان غیرفعال"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:d,onChange:m=>b(m.target.value),placeholder:"جست‌وجوی نام، کد، شهر یا شماره",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"})]})]}),(0,e.jsx)("div",{className:"mt-5 space-y-3 lg:hidden",children:S.map(m=>{const L=String(m.id);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black text-gray-800 dark:text-gray-100",children:m.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 text-right text-xs text-gray-500",children:m.phone||"شماره ثبت نشده"})]}),V(m)]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-3 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:m.code||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"شهر"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:m.city||"-"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"mb-2 text-blue-700 dark:text-blue-300",children:"کالاهای دارای موجودی"}),Q(L)]}),(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-2 break-words font-black text-purple-900 dark:text-purple-100",children:A(L)})]})]}),(0,e.jsx)("div",{className:"mt-4",children:F(L,m)})]},L)})}),(0,e.jsx)("div",{className:"mt-5 hidden lg:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[22%] p-3",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"کد"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"شهر"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"کالاهای دارای موجودی"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[14%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:S.map(m=>{const L=String(m.id);return(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-gray-100 text-lg",children:m.name||"بدون نام"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 break-all text-right text-gray-500",children:m.phone||"شماره ثبت نشده"})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:m.code||"-"}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-700 dark:text-gray-200",children:m.city||"-"}),(0,e.jsx)("td",{className:"p-3",children:V(m)}),(0,e.jsx)("td",{className:"p-3",children:Q(L)}),(0,e.jsx)("td",{className:"break-words p-3 font-bold text-gray-800 dark:text-gray-100",children:A(L)}),(0,e.jsx)("td",{className:"p-3",children:F(L,m)})]},L)})})]})}),S.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(It,{className:"mx-auto h-10 w-10 text-gray-400"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:g.length?"نماینده‌ای با این مشخصات پیدا نشد.":"هنوز نماینده‌ای ثبت نشده است."})]})]})]})},Ei=()=>{const t=localStorage.getItem("token")||sessionStorage.getItem("token");return{"Content-Type":"application/json",Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},Pi=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],ja=["عنوان","نام","عنوان","عنوان","کالا","محصول","Name","name","Product","product"],Ls=["برند","نام برند","Brand","brand"],Us=["دسته‌بندی","دسته بندی","دسته","گروه","گروه کالا","Category","category"],va=["تعداد","تعداد کالا","تعداد موجودی","تعداد محصول","تعداد","موجودی","موجودی کالا","موجودی انبار","مقدار","تعداد/موجودی","Qty","QTY","quantity","Quantity","stock","Stock","count","Count"],ka=["قیمت","قیمت","قیمت کالا","قیمت محصول","مبلغ","قیمت","Price","price","unitPrice","Unit Price"],zn=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Kr=t=>zn(t).replace(/\u200c/g," ").replace(/[\u200e\u200f]/g,"").replace(/\u00a0/g," ").replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/ـ/g,"").replace(/\s+/g," ").trim().toLowerCase(),_t=t=>Kr(t).replace(/[/\\|_-]/g," ").replace(/\s+/g," ").trim(),Zt=t=>{const r=zn(t).replace(/[,٬،\s]/g,"").replace(/٫/g,".").replace(/[^\d.-]/g,"");if(!r)return 0;const s=Number(r);return Number.isFinite(s)?s:0},fe=t=>Zt(t).toLocaleString("fa-IR"),zi=t=>{if(!t)return"-";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Mi=t=>{const r=(t||"https://myshop-backend-8nu7.onrender.com/api").replace(/\/+$/,"");return r.endsWith("/api")?r:`${r}/api`},Fi=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const d of t){const b=s.getItem(d);if(b&&b!=="null"&&b!=="undefined"){const n=b.replace(/^Bearer\s+/i,"").trim();if(n)return n}}for(const d of r){const b=s.getItem(d);if(b)try{const n=JSON.parse(b),p=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(p)return String(p).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},Or=(t=!1)=>{const r=Fi();return{Accept:"application/json",...t?{"Content-Type":"application/json"}:{},...r?{Authorization:`Bearer ${r}`}:{}}},_r=async t=>{const r=await t.text();if(!r)throw new Error(`پاسخ سرور خالی است. کد: ${t.status}`);try{return JSON.parse(r)}catch{throw new Error(`پاسخ بک‌اند معتبر نیست. کد: ${t.status}`)}},Br=(t,r,s)=>r.error||r.message?r.error||r.message||s:t.status===401?"ابتدا وارد حساب ادمین شوید.":t.status===403?"این حساب اجازه انجام این عملیات را ندارد.":`${s} کد: ${t.status}`,pr=(t,r)=>{const s=r.map(_t);for(const[d,b]of Object.entries(t))if(s.includes(_t(d))&&b!==void 0&&b!==null&&String(b).trim()!=="")return b;return""},Na=(t,r)=>{const s=r.map(_t);return Object.keys(t[0]||{}).some(d=>s.includes(_t(d)))},wa=t=>Math.max(0,Zt(t.quantity))*Math.max(0,Zt(t.unitPrice)),Li=t=>{switch(t){case"ready":return"معتبر";case"empty_name":return"نام خالی";case"invalid_qty":return"تعداد نامعتبر";case"invalid_price":return"قیمت نامعتبر"}},Ui=({representative:t,apiUrl:r,onBack:s,onWarehouseChanged:d})=>{const[b,n]=(0,a.useState)([]),[p,i]=(0,a.useState)([]),[u,h]=(0,a.useState)(!0),[c,N]=(0,a.useState)(!1),[v,k]=(0,a.useState)(!1),[x,g]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),[$,q]=(0,a.useState)(!1),[P,O]=(0,a.useState)([]),[G,C]=(0,a.useState)(""),[S,f]=(0,a.useState)(""),[I,_]=(0,a.useState)(""),[R,V]=(0,a.useState)(""),[Q,A]=(0,a.useState)(""),[F,y]=(0,a.useState)(null),m=(0,a.useRef)(!1),L=(0,a.useRef)(!1),W=(0,a.useRef)(0),D=(0,a.useRef)(!0),j=`${Mi(r)}/representatives/${encodeURIComponent(String(t.id))}/warehouse`;(0,a.useEffect)(()=>(D.current=!0,()=>{D.current=!1,W.current+=1}),[]);const U=(0,a.useCallback)(async()=>{const T=++W.current;h(!0);try{const K=await fetch(`${j}?_=${Date.now()}`,{method:"GET",cache:"no-store",credentials:"include",headers:Or()}),ce=await _r(K);if(!K.ok||!ce.success)throw new Error(Br(K,ce,"دریافت انبار ناموفق بود."));if(!Array.isArray(ce.data?.items))throw new Error("لیست کالاهای انبار در پاسخ سرور وجود ندارد.");return D.current&&T===W.current&&(n(ce.data.items),i(Array.isArray(ce.data.movements)?ce.data.movements:[])),!0}catch(K){return D.current&&T===W.current&&o(K instanceof Error?K.message:"خطا در دریافت انبار."),!1}finally{D.current&&T===W.current&&h(!1)}},[j]);(0,a.useEffect)(()=>{n([]),i([]),g(""),o(""),y(null),O([]),q(!1),C(""),f(""),_(""),V(""),A(""),U()},[U]);const Z=async()=>{try{await d()}catch(T){console.error("خطا در بروزرسانی صفحه والد:",T),D.current&&o(K=>[K,"عملیات انبار انجام شد، اما بروزرسانی لیست نمایندگان ناموفق بود."].filter(Boolean).join(" "))}},B=(0,a.useMemo)(()=>b.filter(T=>Zt(T.quantity)>0),[b]),ge=B.length,te=(0,a.useMemo)(()=>B.reduce((T,K)=>T+wa(K),0),[B]),ee=(0,a.useMemo)(()=>[...p].sort((T,K)=>new Date(K.createdAt||0).getTime()-new Date(T.createdAt||0).getTime()).slice(0,8),[p]),se=(0,a.useMemo)(()=>[...new Set(B.map(T=>String(T.brand||"").trim()).filter(Boolean))].sort((T,K)=>T.localeCompare(K,"fa")),[B]),H=(0,a.useMemo)(()=>[...new Set([...Pi,...B.map(T=>String(T.category||"").trim()).filter(Boolean)])].sort((T,K)=>T.localeCompare(K,"fa")),[B]),ie=(0,a.useMemo)(()=>{const T=Kr(I);return B.filter(K=>{const ce=Kr(K.productName),ve=String(K.brand||"").trim(),De=String(K.category||"").trim();return(!T||ce.includes(T)||Kr(ve).includes(T))&&(!R||De===R)&&(!Q||ve===Q)})},[B,I,R,Q]),pe=(0,a.useMemo)(()=>P.filter(T=>T.status==="ready"),[P]),E=(0,a.useMemo)(()=>pe.reduce((T,K)=>T+K.qty,0),[pe]),J=(0,a.useMemo)(()=>pe.reduce((T,K)=>T+K.qty*K.price,0),[pe]),ae=(0,a.useMemo)(()=>{if(!F)return[];const T=F.validationErrors?.map(K=>({...K,status:"invalid"}))||[];return F.rowResults?.length?[...F.rowResults.filter(K=>(K.remainingQuantity??K.rejectedQuantity??0)>0||K.status==="invalid"||K.status==="budget_exceeded"),...T]:F.rejectedItems?.length?[...F.rejectedItems,...T]:T},[F]),l=async T=>{if(!(m.current||u||v)&&window.confirm(`کالای «${T.productName}» با تمام موجودی و گردش‌های مرتبط حذف شود؟`)){m.current=!0,N(!0),g(""),o(""),y(null);try{const K=await fetch(`${j}/items/${encodeURIComponent(String(T.id))}`,{method:"DELETE",credentials:"include",headers:Or()}),ce=await _r(K);if(!K.ok||!ce.success)throw new Error(Br(K,ce,"حذف کالا ناموفق بود."));n(ve=>ve.filter(De=>String(De.id)!==String(T.id))),T.productId&&i(ve=>ve.filter(De=>String(De.productId)!==String(T.productId))),g(ce.message||`کالای «${T.productName}» حذف شد.`),await U(),await Z()}catch(K){o(K instanceof Error?K.message:"حذف کالا ناموفق بود."),await U()}finally{m.current=!1,D.current&&N(!1)}}},z=async()=>{if(!(m.current||u||v)&&window.confirm(`تمام کالاها، گردش‌ها و سابقه فایل‌های انبار «${t.name||"نماینده"}» حذف شود؟ این عملیات قابل بازگشت نیست.`)){m.current=!0,N(!0),g(""),o(""),y(null);try{const T=await fetch(j,{method:"DELETE",credentials:"include",headers:Or()}),K=await _r(T);if(!T.ok||!K.success)throw new Error(Br(T,K,"حذف کل موجودی ناموفق بود."));n([]),i([]),O([]),q(!1),C(""),f(""),_(""),V(""),A(""),g(K.message||"کل موجودی انبار حذف شد."),await U(),await Z()}catch(T){o(T instanceof Error?T.message:"حذف کل موجودی ناموفق بود."),await U()}finally{m.current=!1,D.current&&N(!1)}}},Y=async T=>{const K=T.currentTarget,ce=K.files?.[0];if(K.value="",!(!ce||m.current||L.current)){L.current=!0,k(!0),g(""),o(""),y(null),O([]),q(!1),C(""),f("");try{const ve=await ce.arrayBuffer(),De=fn(ve,{type:"array"}),Ee=De.SheetNames[0];if(!Ee)throw new Error("هیچ شیتی در فایل اکسل پیدا نشد.");const Rt=De.Sheets[Ee],$e=yn.sheet_to_json(Rt,{header:1,defval:"",raw:!0,blankrows:!1}),Tr=[...ja,...Ls,...Us,...va,...ka].map(_t),sr=$e.findIndex(Pe=>Array.isArray(Pe)&&Pe.some(Fe=>Fe!=null&&String(Fe).trim()!==""&&Tr.includes(_t(Fe))));if(sr<0)throw new Error("هیچ سطری شامل عنوان ستون‌های شناخته‌شده پیدا نشد. لطفاً یک سطر شامل «عنوان»، «تعداد» و «قیمت» داشته باشید.");const We=($e[sr]||[]).map((Pe,Fe)=>_t(Pe)||`column_${Fe}`),dt=$e.slice(sr+1).filter(Pe=>Array.isArray(Pe)&&Pe.some(Fe=>Fe!=null&&String(Fe).trim()!=="")).map(Pe=>{const Fe={};return We.forEach((Bt,Wt)=>{Fe[Bt]=Pe[Wt]??""}),Fe});if(!dt.length)throw new Error("فایل اکسل خالی است.");if(dt.length>5e3)throw new Error("فایل نباید بیشتر از ۵۰۰۰ ردیف داشته باشد.");const Et=Object.keys(dt[0]).join(" | ");if(!Na(dt,ja))throw new Error(`ستون عنوان پیدا نشد. ستون‌ها: ${Et}`);if(!Na(dt,va))throw new Error(`ستون تعداد پیدا نشد. ستون‌ها: ${Et}`);if(!Na(dt,ka))throw new Error(`ستون قیمت پیدا نشد. ستون‌ها: ${Et}`);const Rr=dt.map((Pe,Fe)=>{const Bt=String(pr(Pe,ja)).trim(),Wt=String(pr(Pe,Ls)).trim(),ia=String(pr(Pe,Us)).trim(),Vt=Zt(pr(Pe,va)),nr=Zt(pr(Pe,ka));let Qt="ready";return Bt?!Number.isSafeInteger(Vt)||Vt<=0?Qt="invalid_qty":(nr<=0||!Number.isFinite(Vt*nr))&&(Qt="invalid_price"):Qt="empty_name",{rowIndex:Fe+2,excelName:Bt||"(خالی)",brand:Wt,category:ia,qty:Vt,price:nr,status:Qt}});O(Rr),C(ce.name),f(`${ce.name}-${ce.size}-${ce.lastModified}`),q(!0),g(`فایل «${ce.name}» خوانده شد. ثبت نهایی و سقف مالی پس از ارسال به سرور بررسی می‌شود.`)}catch(ve){o(ve instanceof Error?ve.message:"پردازش فایل اکسل ناموفق بود.")}finally{L.current=!1,D.current&&k(!1)}}},he=async()=>{if(pe.length)try{await fetch(`${j}/update-info`,{method:"POST",headers:Ei(),body:JSON.stringify({items:pe.map(T=>({name:T.excelName,brand:T.brand,category:T.category,unitPrice:T.unitPrice}))})})}catch{}},ye=async()=>{if(await he(),!(m.current||v||u)){if(!pe.length){o("هیچ ردیف معتبری برای ثبت وجود ندارد.");return}if(!S){o("شناسه فایل موجود نیست؛ فایل را دوباره انتخاب کنید.");return}m.current=!0,N(!0),g(""),o(""),y(null);try{const T=await fetch(`${j}/import`,{method:"POST",cache:"no-store",credentials:"include",headers:Or(!0),body:JSON.stringify({fileName:G,requestId:S,items:pe.map($e=>({name:$e.excelName,brand:$e.brand,category:$e.category,quantity:$e.qty,unitPrice:$e.price,rowIndex:$e.rowIndex}))})}),K=await _r(T);if(y(K.data||null),!T.ok||!K.success){o(Br(T,K,"ثبت اکسل ناموفق بود.")),await U(),await Z();return}const ce=K.data,ve=ce?.acceptedRowsCount??ce?.importedCount,De=ce?.acceptedQuantity,Ee=ce?.rejectedQuantity,Rt=[ve!==void 0?`${fe(ve)} ردیف پذیرفته شد.`:"سرور ثبت فایل را تأیید کرد.",De!==void 0?`${fe(De)} قطعه در این درخواست ثبت شد.`:"",Ee!==void 0&&Ee>0?`${fe(Ee)} قطعه به دلیل سقف مالی مجاز اضافه نشد.`:""].filter(Boolean);g(K.message||Rt.join(" ")),(K.warning||ce?.summarySaved===!1)&&o(K.warning||"کالاها ثبت شدند، اما خلاصه نماینده بروزرسانی نشد."),ce?.completed===!1||(ce?.rejectedQuantity??0)>0||(ce?.rejectedRowsCount??0)>0||(q(!1),O([]),C(""),f("")),await U(),await Z()}catch(T){o(T instanceof Error?T.message:"ثبت اکسل ناموفق بود.")}finally{m.current=!1,D.current&&N(!1)}}},re=()=>{m.current||v||(q(!1),O([]),C(""),f(""))},de=c||v||u;return u&&!b.length?(0,e.jsxs)("div",{dir:"rtl",className:"space-y-4 px-3 py-8",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(me,{className:"mx-auto mb-3 h-8 w-8 animate-spin text-blue-600"}),(0,e.jsxs)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:["در حال دریافت انبار"," ",t.name||"نماینده","..."]})]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:c,className:"rounded-xl bg-gray-900 px-5 py-3 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]}):(0,e.jsxs)("div",{dir:"rtl",className:"w-full min-w-0 space-y-4 overflow-x-hidden pb-6 sm:space-y-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(It,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h2",{className:"break-words text-lg font-black text-gray-800 dark:text-gray-100",children:["انبار ",t.name||"نماینده"]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400",children:[(0,e.jsxs)("span",{children:["کد: ",t.code||"-"]}),(0,e.jsxs)("span",{children:["شهر: ",t.city||"-"]})]})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,e.jsxs)("button",{type:"button",disabled:de,onClick:()=>{o(""),U()},className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[u?(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Re,{className:"h-4 w-4"}),"بروزرسانی"]}),(0,e.jsx)("button",{type:"button",onClick:s,disabled:c||v,className:"min-h-11 rounded-xl bg-gray-900 px-4 py-2 text-xs font-bold text-white disabled:opacity-50",children:"بازگشت"})]})]})}),x?(0,e.jsxs)("div",{role:"status",className:"flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-xs font-bold leading-6 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300",children:[(0,e.jsx)(je,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:x})]}):null,w?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:[(0,e.jsx)(Ae,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{className:"break-words",children:w})]}):null,(0,e.jsxs)("section",{className:"grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_300px]",children:[(0,e.jsxs)("div",{className:"grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-blue-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"تعداد نوع کالاهای دارای موجودی"}),(0,e.jsx)(bt,{className:"h-5 w-5 text-blue-500"})]}),(0,e.jsx)("p",{className:"mt-3 text-3xl font-black text-blue-900 dark:text-blue-100",children:fe(ge)}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-blue-700 dark:text-blue-300",children:"تعداد ردیف‌های دارای موجودی؛ نه جمع تعداد قطعات و نه ردیف‌های ثبت‌نشدهٔ اکسل"})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-900/20",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-green-700 dark:text-green-300",children:"مجموع موجودی انبار"}),(0,e.jsx)(ht,{className:"h-5 w-5 text-green-500"})]}),(0,e.jsx)("p",{className:"mt-3 break-words text-2xl font-black text-green-900 dark:text-green-100",children:fe(te)}),(0,e.jsx)("p",{className:"mt-2 text-xs text-green-700 dark:text-green-300",children:"تومان"})]})]}),(0,e.jsxs)("aside",{className:"min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-700",children:[(0,e.jsx)("h3",{className:"text-sm font-black text-gray-800 dark:text-gray-100",children:"آخرین گردش‌ها"}),(0,e.jsx)("span",{className:"text-xs text-gray-500",children:fe(ee.length)})]}),(0,e.jsxs)("div",{className:"max-h-[280px] space-y-2 overflow-y-auto p-3",children:[ee.map(T=>{const K=T.type==="in";return(0,e.jsxs)("article",{className:"rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,e.jsx)("p",{className:"min-w-0 break-words text-xs font-bold text-gray-800 dark:text-gray-200",children:T.productName}),(0,e.jsxs)("span",{className:`shrink-0 rounded px-2 py-1 text-xs font-black ${K?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:[K?"+":"-",fe(T.quantity)]})]}),(0,e.jsxs)("div",{className:"mt-2 flex items-center justify-between gap-2",children:[(0,e.jsxs)("span",{className:"flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300",children:[(0,e.jsx)(gl,{className:`h-3 w-3 ${K?"text-green-600":"rotate-180 text-orange-600"}`}),K?"ورود":"خروج"]}),(0,e.jsx)("span",{className:"text-[10px] text-gray-500",children:zi(T.createdAt)})]})]},T.id)}),ee.length?null:(0,e.jsxs)("div",{className:"py-8 text-center",children:[(0,e.jsx)(sl,{className:"mx-auto mb-2 h-8 w-8 text-gray-300"}),(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"گردشی ثبت نشده است."})]})]})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("label",{className:`flex min-h-14 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-white ${de||$?"cursor-not-allowed bg-gray-400":"cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600"}`,children:[v?(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Sr,{className:"h-5 w-5"}),v?"در حال خواندن فایل...":c?"در حال انجام عملیات...":"ارسال بار؛ آپلود اکسل",(0,e.jsx)("input",{type:"file",accept:".xlsx,.xls",onChange:Y,disabled:de||$,className:"hidden"})]}),$&&P.length>0?(0,e.jsxs)("section",{className:"rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/50 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-base font-black text-blue-900 dark:text-blue-100",children:[(0,e.jsx)(At,{className:"h-5 w-5 shrink-0"}),"پیش‌نمایش فایل"]}),(0,e.jsx)("p",{className:"mt-2 break-words text-xs text-gray-600 dark:text-gray-300",children:G})]}),(0,e.jsx)("button",{type:"button",onClick:re,disabled:c,"aria-label":"بستن پیش‌نمایش",className:"rounded-lg p-1 text-red-500 disabled:opacity-50",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2 text-xs",children:[(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های فایل:"," ",fe(P.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["ردیف‌های معتبر:"," ",fe(pe.length)]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["تعداد درخواستی:"," ",fe(E)," قطعه"]}),(0,e.jsxs)("span",{className:"rounded-lg bg-white px-3 py-2 dark:bg-gray-800",children:["مبلغ درخواستی:"," ",fe(J)," تومان"]})]}),(0,e.jsx)("p",{className:"mt-3 text-xs leading-6 text-blue-800 dark:text-blue-200",children:"وضعیت «معتبر» فقط نام، تعداد و قیمت را تأیید می‌کند. سقف مالی و سابقه ثبت فایل هنگام ارسال به سرور بررسی می‌شوند."}),(0,e.jsx)("div",{className:"mt-4 max-h-[360px] overflow-y-auto rounded-xl border border-gray-200",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right text-xs",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[8%] p-2",children:"ردیف"}),(0,e.jsx)("th",{className:"w-[26%] p-2",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[15%] p-2",children:"برند"}),(0,e.jsx)("th",{className:"w-[17%] p-2",children:"دسته"}),(0,e.jsx)("th",{className:"w-[13%] p-2",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[9%] p-2",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[12%] p-2",children:"وضعیت"})]})}),(0,e.jsx)("tbody",{children:P.map(T=>(0,e.jsxs)("tr",{className:T.status==="ready"?"bg-green-50 text-gray-800 dark:bg-green-900/10 dark:text-gray-200":"bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200",children:[(0,e.jsx)("td",{className:"break-words p-2",children:fe(T.rowIndex)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:T.excelName}),(0,e.jsx)("td",{className:"break-words p-2",children:T.brand||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:T.category||"—"}),(0,e.jsx)("td",{className:"break-words p-2",children:fe(T.price)}),(0,e.jsx)("td",{className:"break-words p-2",children:fe(T.qty)}),(0,e.jsx)("td",{className:"break-words p-2 font-bold",children:Li(T.status)})]},T.rowIndex))})]})}),(0,e.jsxs)("div",{className:"mt-4 flex flex-col gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{ye()},disabled:de||!pe.length,className:"min-h-11 flex-1 rounded-xl bg-green-600 px-5 py-3 text-sm font-black text-white disabled:opacity-50",children:c?"در حال بررسی و ثبت...":"بررسی سقف مالی و ثبت ردیف‌های معتبر"}),(0,e.jsx)("button",{type:"button",onClick:re,disabled:c,className:"min-h-11 rounded-xl bg-gray-200 px-5 py-3 text-sm font-bold text-gray-700 disabled:opacity-50",children:"بستن پیش‌نمایش"})]})]}):null,F?(0,e.jsxs)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("h3",{className:"text-base font-black text-gray-800 dark:text-gray-100",children:"نتیجه واقعی درخواست ثبت"}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"ردیف‌های پذیرفته‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-green-900 dark:text-green-100",children:F.acceptedRowsCount!==void 0||F.importedCount!==void 0?fe(F.acceptedRowsCount??F.importedCount):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-300",children:"قطعات ثبت‌شده در این درخواست"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-blue-900 dark:text-blue-100",children:F.acceptedQuantity!==void 0?fe(F.acceptedQuantity):"گزارش نشده"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-orange-50 p-3 dark:bg-orange-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-orange-700 dark:text-orange-300",children:"قطعات ثبت‌نشده یا باقی‌مانده"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-orange-900 dark:text-orange-100",children:F.rejectedQuantity!==void 0?fe(F.rejectedQuantity):"گزارش نشده"})]})]}),(F.completed===!1||(F.rejectedQuantity??0)>0)&&$?(0,e.jsx)("p",{className:"mt-4 rounded-xl bg-orange-50 p-3 text-xs leading-6 text-orange-800 dark:bg-orange-900/20 dark:text-orange-200",children:"بخشی از فایل باقی مانده است. پس از افزایش سقف مؤثر مالی در صفحه نماینده، می‌توانی همین پیش‌نمایش را دوباره ارسال کنی. بک‌اندِ دارای ثبت مرحله‌ای، فقط تعداد باقی‌مانده را ثبت می‌کند."}):null,ae.length>0?(0,e.jsx)("div",{className:"mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/10",children:(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(Ae,{className:"mt-1 h-5 w-5 shrink-0 text-orange-600 dark:text-orange-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{className:"text-sm font-black text-orange-800 dark:text-orange-200",children:"بعضی از کالاها ثبت نشدند"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-orange-700 dark:text-orange-300",children:"به دلیل سقف مالی مجاز، بخشی از کالاهای این فایل اضافه نشدند. فقط کالاهایی که ثبت شده‌اند در موجودی انبار نمایش داده می‌شوند."})]})]})}):null]}):null]}),(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:"موجودی واقعی انبار نماینده"}),(0,e.jsx)("p",{className:"mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"فقط ردیف‌هایی که موجودی بیشتر از صفر دارند در این جدول و کارت تعداد محاسبه می‌شوند."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",children:[fe(ie.length)," از ",fe(ge)," نوع کالا"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{z()},disabled:de||!b.length&&!p.length,className:"flex min-h-10 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50",children:[(0,e.jsx)(He,{className:"h-4 w-4"}),"حذف کل موجودی"]})]})]}),(0,e.jsxs)("div",{className:"my-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,e.jsx)("input",{type:"search",value:I,onChange:T=>_(T.target.value),placeholder:"جست‌وجوی نام یا برند",className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"})]}),(0,e.jsxs)("select",{value:R,onChange:T=>V(T.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه دسته‌بندی‌ها"}),H.map(T=>(0,e.jsx)("option",{value:T,children:T},T))]}),(0,e.jsxs)("select",{value:Q,onChange:T=>A(T.target.value),className:"min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",children:[(0,e.jsx)("option",{value:"",children:"همه برندها"}),se.map(T=>(0,e.jsx)("option",{value:T,children:T},T))]})]}),(0,e.jsx)("div",{className:"space-y-3 md:hidden",children:ie.map(T=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"break-words text-sm font-black leading-6 text-gray-800 dark:text-gray-100",children:T.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20",children:[(0,e.jsx)("p",{className:"text-purple-600 dark:text-purple-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:T.brand||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20",children:[(0,e.jsx)("p",{className:"text-blue-600 dark:text-blue-300",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-2 font-black text-gray-800 dark:text-gray-100",children:[fe(T.quantity)," عدد"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:[(0,e.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:T.category||"—"})]}),(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-3 dark:bg-gray-700",children:(0,e.jsxs)("p",{className:"mt-2 break-words font-bold text-gray-800 dark:text-gray-100",children:[fe(T.unitPrice)," تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-green-50 p-3 dark:bg-green-900/20",children:[(0,e.jsx)("p",{className:"text-xs text-green-700 dark:text-green-300",children:"مجموع این کالا"}),(0,e.jsxs)("p",{className:"mt-2 break-words text-sm font-black text-green-900 dark:text-green-100",children:[fe(wa(T))," تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{l(T)},disabled:de,className:"mt-3 flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-red-100 px-3 py-2 text-xs font-bold text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:[(0,e.jsx)(He,{className:"h-4 w-4"}),"حذف کالا"]})]},T.id))}),(0,e.jsx)("div",{className:"hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-center text-[6px] lg:text-sm",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"border-b border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700  dark:bg-gray-800 dark:text-gray-400",children:[(0,e.jsx)("th",{className:"w-[30%] p-3",children:"عنوان"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"w-[20%] p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"w-[16%] p-3",children:"قیمت"}),(0,e.jsx)("th",{className:"w-[18%] p-3",children:"مجموع"}),(0,e.jsx)("th",{className:"w-[10%] p-3",children:"عملیات"})]})}),(0,e.jsx)("tbody",{children:ie.map(T=>(0,e.jsxs)("tr",{className:"border-b border-gray-100 dark:border-gray-700",children:[(0,e.jsxs)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:[T.productName,(0,e.jsxs)("p",{className:"mt-2 text-xs font-normal text-gray-500",children:["برند: ",T.brand||"—"]})]}),(0,e.jsx)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:T.category||"—"}),(0,e.jsx)("td",{className:"break-words p-3 font-black text-gray-800 dark:text-gray-100",children:fe(T.quantity)}),(0,e.jsxs)("td",{className:"break-words p-3 text-gray-600 dark:text-gray-300",children:[fe(T.unitPrice),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsxs)("td",{className:"break-words p-3 font-black text-green-700 dark:text-green-300",children:[fe(wa(T)),(0,e.jsx)("span",{className:"block text-[10px]",children:"تومان"})]}),(0,e.jsx)("td",{className:"p-3",children:(0,e.jsx)("button",{type:"button",onClick:()=>{l(T)},disabled:de,"aria-label":`حذف ${T.productName}`,className:"inline-flex items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-300",children:(0,e.jsx)(He,{className:"h-4 w-4"})})})]},T.id))})]})}),ie.length?null:(0,e.jsxs)("div",{className:"py-12 text-center",children:[(0,e.jsx)(vn,{className:"mx-auto mb-3 h-12 w-12 text-gray-300"}),(0,e.jsx)("p",{className:"text-sm font-bold text-gray-600 dark:text-gray-300",children:B.length?"کالایی با این فیلتر پیدا نشد.":"کالای دارای موجودی ثبت نشده است."})]})]})]})},qs="https://myshop-backend-8nu7.onrender.com/api",Os=[{id:"warranty",title:"درخواست گارانتی",subtitle:"ثبت مشکل کالا و پیگیری خدمات گارانتی",icon:Ga,gradient:"from-sky-500/15 to-cyan-500/5",iconColor:"text-sky-600 dark:text-sky-300"},{id:"business-card",title:"کارت ویزیت",subtitle:"درخواست طراحی یا چاپ کارت ویزیت",icon:kn,gradient:"from-violet-500/15 to-fuchsia-500/5",iconColor:"text-violet-600 dark:text-violet-300"},{id:"banner",title:"طراحی بنر",subtitle:"ثبت سفارش طراحی بنر تبلیغاتی",icon:jr,gradient:"from-pink-500/15 to-rose-500/5",iconColor:"text-pink-600 dark:text-pink-300"},{id:"new-shipment",title:"بار جدید",subtitle:"درخواست هماهنگی برای بار جدید",icon:pl,gradient:"from-amber-500/15 to-orange-500/5",iconColor:"text-amber-600 dark:text-amber-300"},{id:"visit",title:"بازدید",subtitle:"درخواست بازدید یا هماهنگی حضوری",icon:ts,gradient:"from-emerald-500/15 to-teal-500/5",iconColor:"text-emerald-600 dark:text-emerald-300"},{id:"urgent-call",title:"تماس فوری",subtitle:"درخواست تماس سریع از تیم پشتیبانی",icon:ol,gradient:"from-red-500/15 to-rose-500/5",iconColor:"text-red-600 dark:text-red-300"},{id:"meeting",title:"رزرو زمان جلسه",subtitle:"پیشنهاد زمان برای جلسه با مجموعه",icon:it,gradient:"from-indigo-500/15 to-blue-500/5",iconColor:"text-indigo-600 dark:text-indigo-300"}],qi={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},_s={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function Bs(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function Ws(){const t=localStorage.getItem("token")||sessionStorage.getItem("token");if(!t)throw new Error("نشست شما موجود نیست. دوباره وارد شوید.");return{Authorization:`Bearer ${t}`}}function Oi(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}var _i=()=>{const[t,r]=(0,a.useState)(null),[s,d]=(0,a.useState)(""),[b,n]=(0,a.useState)(""),[p,i]=(0,a.useState)(""),[u,h]=(0,a.useState)([]),[c,N]=(0,a.useState)(!0),[v,k]=(0,a.useState)(!1),[x,g]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),$=(0,a.useRef)(null);(0,a.useEffect)(()=>{let O=!1;async function G(){try{const C=await fetch(`${qs}/support-requests/mine`,{headers:Ws()}),S=await C.json().catch(()=>null);if(!C.ok)throw new Error(S?.error||S?.message||"دریافت درخواست‌ها ناموفق بود.");const f=S?.data??S;if(!Array.isArray(f))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");O||h(f)}catch(C){O||g(Bs(C))}finally{O||N(!1)}}return G(),()=>{O=!0}},[]);const q=O=>{r(O),d(""),n(""),i(""),g(""),o(""),setTimeout(()=>{$.current?.scrollIntoView({behavior:"smooth",block:"start"})},100)},P=async O=>{if(O.preventDefault(),!(!t||v)){k(!0),g(""),o("");try{const G=await fetch(`${qs}/support-requests`,{method:"POST",headers:{...Ws(),"Content-Type":"application/json"},body:JSON.stringify({type:t.id,subject:s.trim(),description:b.trim(),preferredTime:p.trim()})}),C=await G.json().catch(()=>null);if(!G.ok)throw new Error(C?.error||C?.message||"ثبت درخواست ناموفق بود.");const S=C?.data??C;if(!S?.id)throw new Error("پاسخ ثبت درخواست معتبر نیست.");h(f=>[S,...f]),r(null),o("درخواست شما ثبت شد و در انتظار رسیدگی است.")}catch(G){g(Bs(G))}finally{k(!1)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-full space-y-8 text-slate-900 dark:text-white",children:[(0,e.jsxs)("header",{className:"overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-xl dark:border-cyan-500/20 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30 sm:p-8",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:[(0,e.jsx)("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10",children:(0,e.jsx)(ts,{className:"h-7 w-7 text-cyan-700 dark:text-cyan-300"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-cyan-700 dark:text-cyan-300",children:"همراه شما هستیم"}),(0,e.jsx)("h1",{className:"mt-1 text-2xl font-black sm:text-3xl",children:"مرکز پشتیبانی نمایندگان"})]})]}),(0,e.jsx)("p",{className:"mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300",children:"موضوع موردنظرتان را انتخاب کنید، توضیحات را بنویسید و وضعیت درخواست را از همین صفحه دنبال کنید."})]}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),x&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",children:x}),(0,e.jsxs)("section",{"aria-labelledby":"support-categories",children:[(0,e.jsx)("h2",{id:"support-categories",className:"mb-4 text-lg font-bold",children:"چه کمکی نیاز دارید؟"}),(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:Os.map(O=>{const G=O.icon;return(0,e.jsxs)("article",{className:`group flex min-h-52 flex-col rounded-2xl border border-slate-200 bg-gradient-to-br ${O.gradient} bg-white p-5 text-right shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 dark:border-white/10 dark:bg-slate-900`,children:[(0,e.jsxs)("div",{className:"mb-5 flex items-start justify-between",children:[(0,e.jsx)("span",{className:"flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-900/60",children:(0,e.jsx)(G,{className:`h-6 w-6 ${O.iconColor}`})}),(0,e.jsx)(Wa,{className:"h-5 w-5 text-slate-500 transition group-hover:-translate-x-1 group-hover:text-cyan-500 dark:text-slate-400"})]}),(0,e.jsx)("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:O.title}),(0,e.jsx)("p",{className:"mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300",children:O.subtitle}),(0,e.jsxs)("button",{type:"button",onClick:()=>q(O),className:"mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400",children:["ثبت درخواست",(0,e.jsx)(Wa,{className:"h-4 w-4"})]})]},O.id)})})]}),t&&(0,e.jsxs)("section",{ref:$,"aria-labelledby":"support-form-title",className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-cyan-500/25 dark:bg-slate-900 sm:p-7",children:[(0,e.jsxs)("div",{className:"mb-6 flex items-center justify-between gap-4",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs text-cyan-700 dark:text-cyan-300",children:"ثبت درخواست جدید"}),(0,e.jsx)("h2",{id:"support-form-title",className:"mt-1 text-xl font-bold",children:t.title})]}),(0,e.jsx)("button",{type:"button",onClick:()=>r(null),className:"rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white","aria-label":"بستن فرم",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("form",{onSubmit:P,className:"space-y-5",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"عنوان درخواست"}),(0,e.jsx)("input",{value:s,onChange:O=>d(O.target.value),required:!0,maxLength:120,placeholder:"عنوان کوتاه و مشخص بنویسید",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"توضیحات"}),(0,e.jsx)("textarea",{value:b,onChange:O=>n(O.target.value),required:!0,maxLength:2e3,rows:5,placeholder:"جزئیاتی که به رسیدگی کمک می‌کند بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),t.id==="meeting"&&(0,e.jsxs)("label",{className:"block space-y-2 text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("span",{children:"زمان پیشنهادی جلسه"}),(0,e.jsx)("input",{value:p,onChange:O=>i(O.target.value),required:!0,maxLength:120,placeholder:"مثلاً شنبه ساعت ۱۰ تا ۱۲",className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("button",{type:"submit",disabled:v,className:"inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60",children:[v?(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Xt,{className:"h-5 w-5"}),v?"در حال ثبت...":"ارسال درخواست"]})]})]}),(0,e.jsxs)("section",{"aria-labelledby":"my-requests",children:[(0,e.jsx)("h2",{id:"my-requests",className:"mb-4 text-lg font-bold",children:"درخواست‌های من"}),c?(0,e.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"در حال دریافت درخواست‌ها..."}):u.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"هنوز درخواستی ثبت نکرده‌اید."}):(0,e.jsx)("div",{className:"space-y-3",children:u.map(O=>(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Os.find(G=>G.id===O.type)?.title||"درخواست پشتیبانی"}),(0,e.jsx)("h3",{className:"mt-1 font-bold",children:O.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${_s[O.status]||_s.pending}`,children:qi[O.status]||O.status})]}),(0,e.jsx)("p",{className:"mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300",children:O.description}),O.adminNote&&(0,e.jsxs)("div",{className:"mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-500/20 dark:bg-cyan-500/10",children:[(0,e.jsx)("p",{className:"mb-1 text-xs font-bold text-cyan-800 dark:text-cyan-300",children:"پاسخ پشتیبانی"}),(0,e.jsx)("p",{className:"whitespace-pre-wrap text-sm leading-7 text-slate-800 dark:text-slate-200",children:O.adminNote})]}),(0,e.jsx)("p",{className:"mt-3 text-xs text-slate-500 dark:text-slate-400",children:Oi(O.createdAt)})]},O.id))})]})]})},Bi="https://myshop-backend-8nu7.onrender.com/api",Vs={warranty:"درخواست گارانتی","business-card":"کارت ویزیت",banner:"طراحی بنر","new-shipment":"بار جدید",visit:"بازدید","urgent-call":"تماس فوری",meeting:"رزرو زمان جلسه"},Sa={pending:"در انتظار رسیدگی","in-progress":"در حال رسیدگی",resolved:"رسیدگی‌شده",rejected:"ردشده"},Wi={pending:"border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200","in-progress":"border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",resolved:"border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",rejected:"border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200"};function Qs(t){return t instanceof Error?t.message:"خطای غیرمنتظره رخ داد."}function Vi(t){const r=new Date(t);return Number.isNaN(r.getTime())?"تاریخ نامشخص":r.toLocaleString("fa-IR")}async function Hs(t,r={}){const s=localStorage.getItem("token")||sessionStorage.getItem("token");if(!s)throw new Error("نشست شما منقضی شده است. دوباره وارد شوید.");const d=await fetch(`${Bi}${t}`,{...r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,...r.headers}}),b=await d.json().catch(()=>null);if(!d.ok)throw new Error(b?.error||b?.message||"ارتباط با سرور ناموفق بود.");return b?.data??b}function Qi(){const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[p,i]=(0,a.useState)("all"),[u,h]=(0,a.useState)("all"),[c,N]=(0,a.useState)(""),[v,k]=(0,a.useState)({}),[x,g]=(0,a.useState)(""),[w,o]=(0,a.useState)(""),$=(0,a.useCallback)(async()=>{d(!0),g("");try{const C=await Hs("/admin/support-requests");if(!Array.isArray(C))throw new Error("پاسخ سرور برای درخواست‌ها معتبر نیست.");r(C),k(Object.fromEntries(C.map(S=>[S.id,{status:S.status,adminNote:S.adminNote||""}])))}catch(C){g(Qs(C))}finally{d(!1)}},[]);(0,a.useEffect)(()=>{$()},[$]);const q=(0,a.useMemo)(()=>{const C=c.trim().toLocaleLowerCase();return t.filter(S=>{const f=p==="all"||S.status===p,I=u==="all"||S.type===u,_=!C||[S.subject,S.description,S.representativeId,S.representativeName||""].join(" ").toLocaleLowerCase().includes(C);return f&&I&&_})},[t,c,p,u]),P=(0,a.useMemo)(()=>({pending:t.filter(C=>C.status==="pending").length,inProgress:t.filter(C=>C.status==="in-progress").length,resolved:t.filter(C=>C.status==="resolved").length,rejected:t.filter(C=>C.status==="rejected").length}),[t]),O=(C,S)=>{k(f=>({...f,[C]:{...f[C],...S}}))},G=async C=>{const S=v[C.id];if(!(!S||b)){n(C.id),g(""),o("");try{const f=await Hs(`/admin/support-requests/${encodeURIComponent(C.id)}`,{method:"PATCH",body:JSON.stringify({status:S.status,adminNote:S.adminNote.trim()})});r(I=>I.map(_=>_.id===C.id?f:_)),k(I=>({...I,[C.id]:{status:f.status,adminNote:f.adminNote||""}})),o("درخواست با موفقیت به‌روزرسانی شد.")}catch(f){g(Qs(f))}finally{n(null)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6 text-slate-900 dark:text-white",children:[(0,e.jsx)("section",{className:"rounded-3xl border border-slate-200 bg-gradient-to-l from-cyan-50 via-white to-violet-50 p-6 shadow-sm dark:border-slate-700 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[(0,e.jsxs)("div",{className:"flex items-center gap-4",children:[(0,e.jsx)("span",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(ts,{className:"h-7 w-7"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-xl font-black sm:text-2xl",children:"رسیدگی به درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-300",children:"درخواست‌های پشتیبانی نمایندگان را بررسی و پیگیری کنید."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void $(),disabled:s,className:"inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})}),(0,e.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-4",children:[{label:"در انتظار",value:P.pending,icon:Ar,tone:"text-amber-600 dark:text-amber-300"},{label:"در حال رسیدگی",value:P.inProgress,icon:hl,tone:"text-blue-600 dark:text-blue-300"},{label:"رسیدگی‌شده",value:P.resolved,icon:je,tone:"text-emerald-600 dark:text-emerald-300"},{label:"ردشده",value:P.rejected,icon:ot,tone:"text-rose-600 dark:text-rose-300"}].map(C=>{const S=C.icon;return(0,e.jsxs)("div",{className:"flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(S,{className:`h-6 w-6 ${C.tone}`}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:C.label}),(0,e.jsx)("p",{className:"text-2xl font-black",children:C.value})]})]},C.label)})}),x&&(0,e.jsx)("div",{role:"alert",className:"rounded-xl border border-rose-300 bg-rose-50 p-4 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200",children:x}),w&&(0,e.jsx)("div",{role:"status",className:"rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",children:w}),(0,e.jsxs)("section",{className:"grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1fr_180px_180px]",children:[(0,e.jsxs)("label",{className:"relative block",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-3 h-5 w-5 text-slate-400"}),(0,e.jsx)("input",{value:c,onChange:C=>N(C.target.value),placeholder:"جست‌وجو در عنوان، توضیحات یا نام نماینده",className:"w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-3 pr-10 text-sm text-slate-900 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("select",{"aria-label":"فیلتر وضعیت",value:p,onChange:C=>i(C.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ وضعیت‌ها"}),Object.entries(Sa).map(([C,S])=>(0,e.jsx)("option",{value:C,children:S},C))]}),(0,e.jsxs)("select",{"aria-label":"فیلتر نوع درخواست",value:u,onChange:C=>h(C.target.value),className:"rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("option",{value:"all",children:"همهٔ موضوع‌ها"}),Object.entries(Vs).map(([C,S])=>(0,e.jsx)("option",{value:C,children:S},C))]})]}),s?(0,e.jsxs)("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-300",children:[(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}),"در حال دریافت درخواست‌ها..."]}):q.length===0?(0,e.jsx)("div",{className:"rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",children:"درخواستی مطابق فیلترها پیدا نشد."}):(0,e.jsx)("div",{className:"space-y-4",children:q.map(C=>{const S=v[C.id]??{status:C.status,adminNote:C.adminNote||""};return(0,e.jsxs)("article",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-semibold text-cyan-700 dark:text-cyan-300",children:Vs[C.type]||C.type}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-bold",children:C.subject})]}),(0,e.jsx)("span",{className:`rounded-full border px-3 py-1 text-xs font-semibold ${Wi[C.status]}`,children:Sa[C.status]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500 dark:text-slate-400",children:[(0,e.jsxs)("span",{children:["نماینده:"," ",C.representativeName||C.representativeId]}),(0,e.jsxs)("span",{children:["ثبت:"," ",Vi(C.createdAt)]}),C.preferredTime&&(0,e.jsxs)("span",{children:["زمان پیشنهادی:"," ",C.preferredTime]})]}),(0,e.jsx)("p",{className:"mt-4 whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:C.description}),(0,e.jsxs)("div",{className:"mt-5 grid gap-4 md:grid-cols-[180px_1fr_auto] md:items-end",children:[(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"وضعیت رسیدگی"}),(0,e.jsx)("select",{value:S.status,onChange:f=>O(C.id,{status:f.target.value}),className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800",children:Object.entries(Sa).map(([f,I])=>(0,e.jsx)("option",{value:f,children:I},f))})]}),(0,e.jsxs)("label",{className:"block space-y-2 text-sm",children:[(0,e.jsx)("span",{children:"پاسخ یا یادداشت برای نماینده"}),(0,e.jsx)("textarea",{value:S.adminNote,onChange:f=>O(C.id,{adminNote:f.target.value}),rows:2,maxLength:2e3,placeholder:"پاسخ یا توضیح پیگیری را بنویسید",className:"w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void G(C),disabled:b!==null,className:"inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 text-sm font-bold text-white transition hover:bg-cyan-500 disabled:opacity-50",children:[b===C.id&&(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}),"ذخیرهٔ تغییرات"]})]})]},C.id)})})]})}var Hi=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),hr=t=>{const r=Hi(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Mn=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),gr=t=>`${Mn(t)} تومان`,Ji={indigo:"border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300",cyan:"border-cyan-100 bg-cyan-50 text-cyan-700 dark:border-cyan-900/40 dark:bg-cyan-950/30 dark:text-cyan-300",emerald:"border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300",amber:"border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-300",violet:"border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900/40 dark:bg-violet-950/30 dark:text-violet-300",rose:"border-rose-100 bg-rose-50 text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300",blue:"border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300",orange:"border-orange-100 bg-orange-50 text-orange-700 dark:border-orange-900/40 dark:bg-orange-950/30 dark:text-orange-300"},Yi=({title:t,value:r,icon:s,color:d})=>(0,e.jsxs)("article",{className:"relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"absolute -left-7 -top-7 h-20 w-20 rounded-full bg-current opacity-[0.04] blur-2xl"}),(0,e.jsxs)("div",{className:"relative flex items-start justify-between gap-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:t}),(0,e.jsx)("p",{className:"mt-3 truncate text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:r})]}),(0,e.jsx)("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${Ji[d]}`,children:(0,e.jsx)(s,{className:"h-6 w-6"})})]})]}),Ki=({fullName:t="—",territory:r="—",creditAmount:s=0,inventoryItemCount:d=0,inventoryValue:b=0,salesLast10Days:n=0,salesInAllowedDays:p=0})=>{const i=hr(s),u=hr(d),h=hr(b),c=i-h,N=c<0?"rose":"emerald",v=(c<0,"مانده اعتباری"),k=hr(n),x=hr(p),g=[{title:"نام و نام خانوادگی",value:t||"—",icon:$t,color:"indigo"},{title:"محدوده نمایندگی",value:r||"—",icon:il,color:"cyan"},{title:"مبلغ اعتبار",value:gr(i),icon:Ml,color:"emerald"},{title:"تعداد در انبار",value:`${Mn(u)} قلم`,icon:sa,color:"amber"},{title:"مبلغ اقلام انبار",value:gr(h),icon:jn,color:"violet"},{title:v,value:gr(Math.abs(c)),icon:ht,color:N},{title:"فروش ۱۰ روز گذشته",value:gr(k),icon:Ir,color:"blue"},{title:"فروش ۳ روز مجاز ماه",value:gr(x),icon:it,color:"orange"}];return(0,e.jsx)("section",{dir:"rtl",className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:g.map(w=>(0,e.jsx)(Yi,{title:w.title,value:w.value,icon:w.icon,color:w.color},w.title))})},Fn=bn(tl(),1);function ss(){const[t,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{const p=()=>{r(typeof window<"u"&&(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const s=(p,i)=>`<!DOCTYPE html>
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
${p}
</body>
</html>`,d=(p,i)=>{const u=document.getElementById("print-iframe");u&&u.parentNode&&document.body.removeChild(u);const h=document.createElement("iframe");h.id="print-iframe",h.style.position="fixed",h.style.right="0",h.style.bottom="0",h.style.width="0",h.style.height="0",h.style.border="0",h.style.overflow="hidden",h.setAttribute("aria-hidden","true"),h.title=i,document.body.appendChild(h);const c=h.contentWindow?.document||h.contentDocument;if(!c){console.error("نتوانستم به iframe دسترسی پیدا کنم"),h.parentNode&&document.body.removeChild(h);return}c.open(),c.write(s(p,i)),c.close();const N=()=>{try{h.contentWindow?.focus(),setTimeout(()=>{try{h.contentWindow?.print()}catch(v){console.error("خطا در چاپ:",v)}setTimeout(()=>{h.parentNode&&document.body.removeChild(h)},1e3)},300)}catch(v){console.error("خطا در چاپ:",v),h.parentNode&&document.body.removeChild(h)}};h.contentWindow?.document?.readyState==="complete"?N():(h.onload=N,setTimeout(()=>{h.parentNode&&h.contentWindow?.document?.readyState==="complete"&&N()},2e3))};return{printContent:(p,i="چاپ")=>{setTimeout(()=>{let u=document.getElementById(p);if(u||(u=document.querySelector(`.${p}`)),u||(u=document.querySelector(`[data-print="${p}"]`)),!u){console.warn("محتوای چاپ پیدا نشد با:",p),window.print();return}const h=u.outerHTML;d(h,i)},200)},printHTML:(p,i="چاپ")=>{d(p,i)},isMobile:t}}var kr=t=>{const r=String(t??"").replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},ct=t=>new Intl.NumberFormat("fa-IR").format(kr(t)),Gi=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,""),Js=t=>t.totalPrice!==void 0?kr(t.totalPrice):kr(t.quantity)*kr(t.unitPrice),st=(t,r)=>String(t??"").trim()||r,Xi=({items:t,settings:r,representativeName:s,representativeCity:d,representativePhone:b,representativeAddress:n,filterDescription:p,onClose:i})=>{const{printContent:u,isMobile:h}=ss(),c=(0,a.useMemo)(()=>Array.isArray(t)?t:[],[t]),N=(0,a.useMemo)(()=>c.reduce((w,o)=>w+kr(o.quantity),0),[c]),v=(0,a.useMemo)(()=>c.reduce((w,o)=>w+Js(o),0),[c]);if((0,a.useEffect)(()=>{if(typeof i!="function")return;const w=()=>{i()};window.addEventListener("afterprint",w);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("afterprint",w),document.body.style.overflow=o}},[i]),typeof document>"u")return null;const k=/^#[0-9a-fA-F]{6}$/.test(r.primaryColor)?r.primaryColor:"#111827",x=()=>{i?.()},g=(0,e.jsxs)("div",{id:"inventory-print-root",dir:"rtl",style:{"--inventory-primary":k},children:[(0,e.jsx)("style",{children:`
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
          gap: 4px;
          width: 100%;
          max-width: 100%;
          margin: 8px 0;
        }



        #inventory-print-root .inventory-print-meta-box {
          min-width: 0;
          padding: 4px 6px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
          font-size: 7pt;
        }



        #inventory-print-root .inventory-print-info-box {
          display: block;
          padding: 5px 6px;
        }



        #inventory-print-root .inventory-print-info-title {
          margin: 0 0 3px;
          padding-bottom: 2px;
          border-bottom: 1px solid #d1d5db;
          color: var(--inventory-primary);
          font-size: 7pt;
          font-weight: 900;
        }



        #inventory-print-root .inventory-print-info-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 6px;
          margin-top: 2px;
          font-size: 7pt;
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
      `}),(0,e.jsxs)("div",{className:"inventory-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش موجودی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{className:"inventory-print-actions",children:[(0,e.jsx)("button",{type:"button",className:"inventory-print-close",onClick:w=>{w.preventDefault(),w.stopPropagation(),x()},children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"inventory-print-button",onClick:()=>{u("inventory-print-root","چاپ موجودی انبار")},children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"inventory-print-paper",children:[(0,e.jsxs)("header",{className:"inventory-print-header",children:[(0,e.jsxs)("div",{className:"inventory-print-company",children:[(0,e.jsx)("div",{className:"inventory-print-logo-box",children:(0,e.jsx)("img",{src:"https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png",alt:"لوگوی هلدینگ مهر",className:"inventory-print-logo",onError:w=>{w.target.style.display="none"}})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"inventory-print-company-name",children:"هلدینگ مهر"}),(0,e.jsx)("p",{children:st(r.companyTagline,"سامانه مدیریت نمایندگی و انبار")}),(0,e.jsx)("p",{className:"inventory-print-company-phone",children:"تلفن: ۰۲۱-۹۳۱۱۱۰۲۱"})]})]}),(0,e.jsxs)("div",{className:"inventory-print-title",children:[(0,e.jsx)("span",{children:"گزارش رسمی موجودی"}),(0,e.jsx)("h2",{children:st(r.reportTitle,"گزارش موجودی انبار نمایندگی")}),(0,e.jsxs)("p",{children:[s||"گزارش کلی موجودی انبار",d?` — ${d}`:""]})]})]}),(0,e.jsxs)("section",{className:"inventory-print-meta",children:[(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Gi()})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"هلدینگ مهر"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"قزوین، سه راه خیام، مجتمع الغدیر"})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"021-93111021"})]})]}),(0,e.jsxs)("div",{className:"inventory-print-meta-box inventory-print-info-box",children:[(0,e.jsx)("p",{className:"inventory-print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:st(s,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"تلفن:"}),(0,e.jsx)("strong",{children:st(b,"—")})]}),(0,e.jsxs)("div",{className:"inventory-print-info-row",children:[(0,e.jsx)("span",{children:"آدرس نمایندگی:"}),(0,e.jsx)("strong",{children:st(n,"—")})]})]})]}),(0,e.jsxs)("div",{className:"inventory-print-table-wrapper",children:[(0,e.jsxs)("table",{className:"inventory-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"5%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"25%"},children:"عنوان"}),(0,e.jsx)("th",{style:{width:"15%"},children:"برند"}),(0,e.jsx)("th",{style:{width:"15%"},children:"دسته‌بندی"}),(0,e.jsx)("th",{style:{width:"15%"},children:"قیمت"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"15%"},children:"مجموع"})]})}),(0,e.jsx)("tbody",{children:c.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"کالایی برای چاپ وجود ندارد."})}):c.map((w,o)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{className:"center",children:ct(o+1)}),(0,e.jsx)("td",{className:"title",children:st(w.title,"بدون عنوان")}),(0,e.jsx)("td",{children:st(w.brand,"بدون برند")}),(0,e.jsx)("td",{children:st(w.category,"بدون دسته‌بندی")}),(0,e.jsxs)("td",{className:"money",children:[ct(w.unitPrice)," تومان"]}),(0,e.jsxs)("td",{className:"center",children:[ct(w.quantity)," قلم"]}),(0,e.jsxs)("td",{className:"money",children:[ct(Js(w))," تومان"]})]},w.id||`inventory-print-${o}`))})]}),(0,e.jsx)("table",{className:"inventory-print-table inventory-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"55%"},children:"جمع کل انبار"}),(0,e.jsxs)("td",{className:"center",style:{width:"15%"},children:[ct(N)," قلم"]}),(0,e.jsx)("td",{className:"center",style:{width:"15%"},children:"—"}),(0,e.jsxs)("td",{className:"money",style:{width:"15%"},children:[ct(v)," تومان"]})]})})})]}),(0,e.jsxs)("section",{className:"inventory-print-summary",children:[(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد نوع کالا"}),(0,e.jsxs)("strong",{children:[ct(c.length)," کالا"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"تعداد کل اقلام"}),(0,e.jsxs)("strong",{children:[ct(N)," قلم"]})]}),(0,e.jsxs)("div",{className:"inventory-print-summary-box",children:[(0,e.jsx)("span",{children:"مجموع"}),(0,e.jsxs)("strong",{children:[ct(v)," تومان"]})]})]}),(0,e.jsxs)("footer",{className:"inventory-print-footer",children:[(0,e.jsx)("p",{children:st(r.footerText,"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.")}),(0,e.jsx)("p",{children:st(r.signatureLabel,"امضا و مهر نمایندگی:")})]})]})]});return(0,Fn.createPortal)(g,document.body)},ns="inventory-print-template-settings-v2",Me={companyName:"نام شرکت شما",companyTagline:"سامانه مدیریت نمایندگی و انبار",companyLogoSrc:"../company-logo.png",reportTitle:"گزارش موجودی انبار نمایندگی",footerText:"این گزارش به‌صورت خودکار از سامانه مدیریت انبار تهیه شده است.",signatureLabel:"امضا و مهر نمایندگی:",primaryColor:"#111827"},Zi=["لنت ترمز خودرو","جلوبندی خودرو","برق خودرو","بدنه خودرو","قطعات موتوری","انواع تسمه","لوازم اسپرت","روغن خودرو"],qe=t=>new Intl.NumberFormat("fa-IR").format(Number.isFinite(t)?t:0),Ut=t=>{const r=String(t??"").replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Ue=t=>String(t??"").trim(),Jt=t=>Ue(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[\u200c\u200e\u200f\u00a0]/g," ").replace(/\s+/g," ").replace(/\s*خودرو\s*/g," ").replace(/\s*خودرو$/g,"").replace(/^خودرو\s*/g,"").trim().toLowerCase(),ur=t=>Ue(t.brand)||"بدون برند",Ca=t=>Ue(t.category)||"بدون دسته‌بندی",Ja=t=>/^#[0-9a-fA-F]{6}$/.test(Ue(t)),Ys=()=>{try{const t=localStorage.getItem(ns);if(!t)return Me;const r=JSON.parse(t);return{companyName:Ue(r.companyName)||Me.companyName,companyTagline:Ue(r.companyTagline)||Me.companyTagline,companyLogoSrc:Ue(r.companyLogoSrc)||Me.companyLogoSrc,reportTitle:Ue(r.reportTitle)||Me.reportTitle,footerText:Ue(r.footerText)||Me.footerText,signatureLabel:Ue(r.signatureLabel)||Me.signatureLabel,primaryColor:Ja(String(r.primaryColor??""))?String(r.primaryColor):Me.primaryColor}}catch{return Me}},eo=t=>{localStorage.setItem(ns,JSON.stringify(t))},Wr=t=>t.totalPrice!==void 0?Ut(t.totalPrice):Ut(t.quantity)*Ut(t.unitPrice),to=({items:t=[],representativeName:r="",representativeCity:s="",representativePhone:d="",representativeAddress:b=""})=>{const n=Array.isArray(t)?t:[],[p,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[c,N]=(0,a.useState)(""),[v,k]=(0,a.useState)(!1),[x,g]=(0,a.useState)(!1),[w,o]=(0,a.useState)(!1),[$,q]=(0,a.useState)(()=>Ys()),[P,O]=(0,a.useState)(()=>Ys()),G=(0,a.useMemo)(()=>{const j=new Set;return n.forEach(U=>{j.add(ur(U))}),Array.from(j).sort((U,Z)=>U.localeCompare(Z,"fa"))},[n]),C=(0,a.useMemo)(()=>{const j=Jt(p);return n.filter(U=>{const Z=Ue(U.title),B=ur(U),ge=Ca(U),te=Jt(`${Z} ${B} ${ge}`),ee=Jt(ge),se=Jt(c),H=Jt(B),ie=Jt(u),pe=!c||ee===se||ee.includes(se)||se.includes(ee),E=!u||H===ie||H.includes(ie)||ie.includes(H);return(!j||te.includes(j))&&E&&pe})},[n,p,u,c]),S=n.length,f=n.reduce((j,U)=>j+Ut(U.quantity),0),I=n.reduce((j,U)=>j+Wr(U),0),_=C.reduce((j,U)=>j+Ut(U.quantity),0),R=C.reduce((j,U)=>j+Wr(U),0),V=!!p.trim()||!!u||!!c,Q=(0,a.useMemo)(()=>{const j=[];return p.trim()&&j.push(`جست‌وجو: «${p.trim()}»`),u&&j.push(`برند: ${u}`),c&&j.push(`دسته‌بندی: ${c}`),j.length>0?j.join(" | "):"بدون فیلتر"},[p,u,c]),A=()=>{i(""),h(""),N("")},F=()=>{O($),g(!1),k(!1)},y=(j,U)=>{g(!1),O(Z=>({...Z,[j]:U}))},m=()=>{const j=Ja(P.primaryColor)?P.primaryColor:Me.primaryColor,U={companyName:Ue(P.companyName)||Me.companyName,companyTagline:Ue(P.companyTagline)||Me.companyTagline,companyLogoSrc:Ue(P.companyLogoSrc),reportTitle:Ue(P.reportTitle)||Me.reportTitle,footerText:Ue(P.footerText)||Me.footerText,signatureLabel:Ue(P.signatureLabel)||Me.signatureLabel,primaryColor:j};q(U),O(U),eo(U),g(!0)},L=()=>{window.confirm("آیا تنظیمات قالب چاپ به حالت پیش‌فرض برگردد؟")&&(q(Me),O(Me),localStorage.removeItem(ns),g(!0))},W=()=>{o(!0)},D=()=>{o(!1)};return(0,e.jsxs)("section",{dir:"rtl",className:"inventory-section overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)("div",{className:"border-b border-slate-200 p-4 dark:border-slate-700 md:p-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("img",{src:"https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png",alt:"هلدینگ مهر",className:"h-12 w-12 shrink-0 rounded-lg object-contain",onError:j=>{j.target.style.display="none"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-slate-900 dark:text-white md:text-lg",children:"موجودی انبار نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400",children:"جست‌وجو، فیلتر، تنظیم قالب و چاپ گزارش موجودی."})]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تنوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[qe(S)," کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"تعداد کل اقلام"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[qe(f)," قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-slate-900 dark:text-slate-100",children:[qe(I)," تومان"]})]})]})]})}),n.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(rr,{className:"mx-auto h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600 dark:text-slate-300",children:"کالایی در انبار ثبت نشده است."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-400 dark:text-slate-500",children:"پس از ثبت کالا، جزئیات موجودی در این بخش نمایش داده می‌شود."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"border-b border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50 md:p-4",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center",children:[(0,e.jsxs)("div",{className:"relative min-w-0 flex-1",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:p,onChange:j=>i(j.target.value),placeholder:"جست‌وجو بر اساس عنوان، برند یا دسته‌بندی...",className:"min-h-11 w-full rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-slate-800"})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-2 sm:flex-row",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:u,onChange:j=>h(j.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-44",children:[(0,e.jsx)("option",{value:"",children:"همهٔ برندها"}),G.map(j=>(0,e.jsx)("option",{value:j,children:j},j))]}),(0,e.jsx)(fs,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{value:c,onChange:j=>N(j.target.value),className:"min-h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:min-w-48",children:[(0,e.jsx)("option",{value:"",children:"همهٔ دسته‌بندی‌ها"}),Zi.map(j=>(0,e.jsx)("option",{value:j,children:j},j))]}),(0,e.jsx)(fs,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),V&&(0,e.jsxs)("button",{type:"button",onClick:A,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(we,{className:"h-4 w-4"}),"پاک‌کردن"]}),(0,e.jsxs)("button",{type:"button",onClick:W,disabled:C.length===0,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"پیش‌نمایش و چاپ"]})]})]}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2 text-sm",children:[(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:V?`${qe(C.length)} کالا از ${qe(n.length)} کالا پیدا شد.`:`${qe(n.length)} کالا در انبار موجود است.`}),V&&(0,e.jsxs)("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["تعداد نتایج: ",qe(_)," قلم · مجموع: ",qe(R)," تومان"]})]})]}),(0,e.jsx)("div",{className:"p-4",children:C.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(ut,{className:"mx-auto h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-600",children:"کالایی با این شرایط پیدا نشد."}),(0,e.jsx)("button",{type:"button",onClick:A,className:"mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800",children:"پاک‌کردن فیلترها"})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:C.map(j=>{const U=Ut(j.quantity),Z=Ut(j.unitPrice);return(0,e.jsxs)("article",{className:"rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800",children:[(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",children:(0,e.jsx)(sa,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-slate-800 dark:text-white",children:j.title||"بدون عنوان"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:ur(j)})]})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-indigo-50 p-2 text-center dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-indigo-900 dark:text-indigo-100",children:ur(j)})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-amber-50 p-2 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"دسته‌بندی"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-amber-900 dark:text-amber-100",children:Ca(j)})]})]}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 p-2 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"تعداد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-black text-emerald-900 dark:text-emerald-100",children:qe(U)})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-sky-50 p-2 text-center dark:bg-sky-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-sky-700 dark:text-sky-300",children:"قیمت"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-sky-900 dark:text-sky-100",children:qe(Z)})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-purple-50 p-2 text-center dark:bg-purple-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-300",children:"مجموع"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-purple-900 dark:text-purple-100",children:qe(Wr(j))})]})]})]},j.id)})}),(0,e.jsx)("div",{className:"hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block dark:border-slate-700 dark:bg-slate-900",children:(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"w-full min-w-[760px] border-collapse text-center text-sm text-slate-700 dark:text-slate-200",children:[(0,e.jsx)("thead",{className:"border-b border-slate-200 bg-gradient-to-l from-slate-50 to-slate-100 text-xs text-slate-600 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300",children:(0,e.jsxs)("tr",{className:"h-10",children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-3 py-2.5 font-black last:border-l-0 dark:border-slate-700",children:"عنوان"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-3 py-2.5 font-black last:border-l-0 dark:border-slate-700",children:"برند"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-3 py-2.5 font-black last:border-l-0 dark:border-slate-700",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-3 py-2.5 font-black last:border-l-0 dark:border-slate-700",children:"تعداد"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-l border-slate-200 px-3 py-2.5 font-black last:border-l-0 dark:border-slate-700",children:"قیمت"}),(0,e.jsx)("th",{className:"whitespace-nowrap px-3 py-2.5 font-black",children:"مجموع"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:C.map(j=>(0,e.jsxs)("tr",{className:"h-16 bg-white transition-colors hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/70",children:[(0,e.jsx)("td",{className:"border-l border-slate-100 px-3 py-2.5 font-black text-slate-800 last:border-l-0 dark:border-slate-800 dark:text-slate-100",children:j.title||"بدون عنوان"}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-3 py-2.5 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:ur(j)}),(0,e.jsx)("td",{className:"border-l border-slate-100 px-3 py-2.5 text-slate-500 last:border-l-0 dark:border-slate-800 dark:text-slate-300",children:Ca(j)}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-3 py-2.5 font-black text-emerald-700 last:border-l-0 dark:border-slate-800 dark:text-emerald-300",children:[qe(j.quantity)," ","قلم"]}),(0,e.jsxs)("td",{className:"border-l border-slate-100 px-3 py-2.5 font-semibold text-sky-700 last:border-l-0 dark:border-slate-800 dark:text-sky-300",children:[qe(j.unitPrice)," ","تومان"]}),(0,e.jsxs)("td",{className:"px-3 py-2.5 font-black text-violet-700 dark:text-violet-300",children:[qe(Wr(j))," ","تومان"]})]},j.id))}),(0,e.jsx)("tfoot",{className:"border-t-2 border-slate-300 bg-gradient-to-l from-slate-50 to-slate-100 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900",children:(0,e.jsxs)("tr",{className:"h-16",children:[(0,e.jsx)("td",{colSpan:3,className:"border-l border-slate-200 px-3 py-2.5 font-black text-slate-800 last:border-l-0 dark:border-slate-700 dark:text-slate-100",children:V?"جمع نتایج فیلترشده":"جمع کل انبار"}),(0,e.jsxs)("td",{className:"border-l border-slate-200 px-3 py-2.5 font-black text-emerald-700 last:border-l-0 dark:border-slate-700 dark:text-emerald-300",children:[qe(_)," ","قلم"]}),(0,e.jsx)("td",{className:"border-l border-slate-200 px-3 py-2.5 text-slate-400 last:border-l-0 dark:border-slate-700 dark:text-slate-500",children:"—"}),(0,e.jsxs)("td",{className:"px-3 py-2.5 font-black text-violet-700 dark:text-violet-300",children:[qe(R)," ","تومان"]})]})})]})})})]})})]}),w&&(0,e.jsx)(Xi,{items:C,settings:$,representativeName:r,representativeCity:s,representativePhone:d,representativeAddress:b,filterDescription:Q,onClose:D}),v&&(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3",children:(0,e.jsxs)("div",{className:"max-h-[95dvh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-700",children:(0,e.jsx)(xl,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-900 dark:text-white",children:"شخصی‌سازی قالب چاپ"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:"تنظیمات روی همین مرورگر ذخیره می‌شوند."})]})]}),(0,e.jsx)("button",{type:"button",onClick:F,className:"rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"space-y-5 p-4 sm:p-5",children:[x&&(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-bold text-green-700 dark:border-green-900 dark:bg-green-950/20 dark:text-green-300",children:[(0,e.jsx)(Va,{className:"h-5 w-5"}),"تنظیمات قالب چاپ ذخیره شد."]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["نام شرکت",(0,e.jsx)("input",{type:"text",value:P.companyName,onChange:j=>y("companyName",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["زیرعنوان شرکت",(0,e.jsx)("input",{type:"text",value:P.companyTagline,onChange:j=>y("companyTagline",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["مسیر لوگو",(0,e.jsx)("input",{type:"text",dir:"ltr",value:P.companyLogoSrc,onChange:j=>y("companyLogoSrc",j.target.value),placeholder:"../company-logo.png",className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-left text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["عنوان گزارش",(0,e.jsx)("input",{type:"text",value:P.reportTitle,onChange:j=>y("reportTitle",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200",children:["رنگ اصلی",(0,e.jsx)("input",{type:"color",value:Ja(P.primaryColor)?P.primaryColor:Me.primaryColor,onChange:j=>y("primaryColor",j.target.value),className:"mt-2 h-11 w-full cursor-pointer rounded-xl border border-slate-300 p-1 dark:border-slate-600"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن پایین گزارش",(0,e.jsx)("textarea",{value:P.footerText,onChange:j=>y("footerText",j.target.value),rows:3,className:"mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]}),(0,e.jsxs)("label",{className:"text-sm font-bold text-slate-700 dark:text-slate-200 md:col-span-2",children:["متن امضا",(0,e.jsx)("input",{type:"text",value:P.signatureLabel,onChange:j=>y("signatureLabel",j.target.value),className:"mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white"})]})]})]}),(0,e.jsxs)("div",{className:"sticky bottom-0 flex flex-col-reverse gap-2 border-t border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:L,className:"min-h-11 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-black text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:"بازنشانی پیش‌فرض"}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-2 sm:flex-row",children:[(0,e.jsx)("button",{type:"button",onClick:F,className:"min-h-11 rounded-xl bg-slate-100 px-4 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200",children:"بستن"}),(0,e.jsxs)("button",{type:"button",onClick:m,className:"flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-black text-white dark:bg-slate-700",children:[(0,e.jsx)(Va,{className:"h-4 w-4"}),"ذخیرهٔ تنظیمات"]})]})]})]})})]})},ls=[{value:"registered",label:"ثبت شده"},{value:"confirmed",label:"تأیید شده"},{value:"preparing",label:"در حال آماده‌سازی"},{value:"loading",label:"بارگیری"},{value:"shipping",label:"در حال ارسال"},{value:"delivered",label:"تحویل شده"}],et=t=>{const r=Number(t??0);return Number.isFinite(r)?new Intl.NumberFormat("fa-IR").format(r):"—"},$a=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Ks=t=>t==="pending"?"در انتظار":t==="sent"?"ارسال شده":ls.find(r=>r.value===t)?.label||"نامشخص",ro=t=>t==="pending"?0:t==="sent"?4:ls.findIndex(r=>r.value===t),ao=t=>{if(oe.isAxiosError(t)){const r=t.response?.data;return t.response?.status===401?"نشست شما معتبر نیست؛ دوباره وارد حساب نمایندگی شوید.":t.response?.status===403?"دسترسی به این بخش برای حساب شما مجاز نیست.":t.response?.status===404?"مسیر «بارهای من» در بک‌اند هنوز ایجاد نشده است.":r?.error||r?.message||"دریافت بارها ناموفق بود."}return t instanceof Error?t.message:"دریافت بارها ناموفق بود."},so=({apiUrl:t="https://myshop-backend-8nu7.onrender.com/api",token:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!0),[p,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(null),c=t.replace(/\/+$/,""),N=(0,a.useCallback)(async()=>{n(!0),i("");try{const x=await oe.get(`${c}/shipments/my`,{headers:r?{Authorization:`Bearer ${r}`,Accept:"application/json"}:{Accept:"application/json"},withCredentials:!0});if(x.data.success===!1)throw new Error(x.data.error||"دریافت بارها ناموفق بود.");d(Array.isArray(x.data.data)?x.data.data:[])}catch(x){console.error("خطا در دریافت بارهای نماینده:",x),d([]),i(ao(x))}finally{n(!1)}},[c,r]);(0,a.useEffect)(()=>{N()},[N]);const v=(0,a.useMemo)(()=>[...s].sort((x,g)=>new Date(g.createdAt||g.updatedAt||0).getTime()-new Date(x.createdAt||x.updatedAt||0).getTime()),[s]),k=(0,a.useMemo)(()=>s.filter(x=>x.status!=="delivered").length,[s]);return b?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(me,{className:"h-8 w-8 animate-spin text-blue-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-gray-600 dark:text-gray-300",children:"در حال دریافت بارهای شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-4 border-b border-gray-100 pb-5 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"flex items-center gap-2 text-xl font-black text-gray-800 dark:text-white sm:text-2xl",children:[(0,e.jsx)(tr,{className:"h-6 w-6 text-blue-600"}),"بارهای من"]}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت ارسال بارهای مربوط به حساب نمایندگی شما"})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void N(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),p?(0,e.jsxs)("div",{role:"alert",className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(Ae,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:p})]}):null,p?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-blue-700 dark:text-blue-300",children:"کل بارها"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-blue-900 dark:text-blue-100",children:et(s.length)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"در جریان"}),(0,e.jsx)("p",{className:"mt-2 text-2xl font-black text-amber-900 dark:text-amber-100",children:et(k)})]})]}),v.length>0&&(0,e.jsx)("div",{className:"rounded-2xl bg-gradient-to-l from-cyan-50 via-blue-50 to-purple-50 p-4 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-purple-950/30",children:(0,e.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg",children:(0,e.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع بارهای من"}),(0,e.jsxs)("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[et(v.length)," حواله · ",et(v.reduce((x,g)=>x+(g.totalItems??g.items?.reduce((w,o)=>w+(o.quantity||0),0)??0),0))," عدد کالا"]})]})]}),(0,e.jsxs)("div",{className:"text-left",children:[(0,e.jsx)("p",{className:"text-lg font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 sm:text-2xl",children:et(v.reduce((x,g)=>x+(g.totalValue??g.items?.reduce((w,o)=>w+(o.totalPrice??(o.quantity||0)*(o.unitPrice||0)),0)??0),0))}),(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تومان"})]})]})}),v.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-12 text-center dark:border-gray-700 dark:bg-gray-800/40",children:[(0,e.jsx)(bt,{className:"mx-auto mb-3 h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"font-black text-gray-700 dark:text-gray-200",children:"هنوز باری برای شما ثبت نشده است."})]}):(0,e.jsx)("div",{className:"space-y-4",children:v.map(x=>{const g=String(x.id),w=u===g,o=ro(x.status),$=x.items?.length??x.itemsCount??0,q=x.items?.reduce((P,O)=>P+(Number(O.quantity)||0),0)??x.totalItems??0;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60 dark:border-gray-700 dark:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"p-4 sm:p-5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:["شماره حواله:"," ",x.shipmentNumber||g]}),(0,e.jsx)("h3",{className:"mt-1 text-lg font-black text-gray-800 dark:text-white",children:"بار ارسالی به نمایندگی شما"})]}),(0,e.jsx)("span",{className:"w-fit rounded-full bg-blue-100 px-3 py-1.5 text-xs font-black text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",children:Ks(x.status)})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:et($)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"مجموع تعداد"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:et(q)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ارسال"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:x.shipmentDate||"—"})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs text-gray-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-black text-gray-800 dark:text-white",children:$a(x.createdAt)})]})]}),(0,e.jsx)("div",{"aria-label":"مراحل ارسال بار",className:"mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6",children:ls.map((P,O)=>{const G=O<=o;return(0,e.jsxs)("div",{className:`flex min-h-10 items-center justify-center gap-1 rounded-lg px-2 py-2 text-center text-[10px] font-bold sm:text-xs ${G?"bg-blue-600 text-white":"bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-300"}`,children:[G?(0,e.jsx)(je,{className:"h-3.5 w-3.5 shrink-0"}):(0,e.jsx)(Ar,{className:"h-3.5 w-3.5 shrink-0"}),(0,e.jsx)("span",{children:P.label})]},P.value)})}),(0,e.jsxs)("button",{type:"button",onClick:()=>h(w?null:g),"aria-expanded":w,className:"mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 text-sm font-black text-blue-700 transition hover:bg-blue-50 dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300",children:[w?(0,e.jsx)(cl,{className:"h-4 w-4"}):(0,e.jsx)(la,{className:"h-4 w-4"}),w?"بستن جزئیات":"مشاهدهٔ کالاها و جزئیات"]})]}),w?(0,e.jsxs)("div",{className:"space-y-5 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsxs)("div",{className:"grid gap-3 text-sm sm:grid-cols-2",children:[(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["گیرنده:"," ",(0,e.jsx)("strong",{children:x.receiver||"—"})]}),(0,e.jsxs)("p",{className:"rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:["انبار مبدأ:"," ",(0,e.jsx)("strong",{children:x.warehouse||"—"})]}),(0,e.jsxs)("p",{className:"flex items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(it,{className:"h-4 w-4"}),"ثبت:"," ",$a(x.createdAt)]}),(0,e.jsxs)("p",{className:"flex min-w-0 items-center gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)(es,{className:"h-4 w-4 shrink-0"}),(0,e.jsx)("span",{className:"break-all",children:x.excelFileName||"نام فایل ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(bt,{className:"h-5 w-5"}),"کالاهای این بار"]}),x.items?.length?(0,e.jsxs)("div",{className:"overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700",children:[(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700 sm:hidden",children:x.items.map((P,O)=>(0,e.jsxs)("div",{className:"bg-gray-50 p-3 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:P.productName||"—"}),(0,e.jsxs)("div",{className:"mt-2 grid grid-cols-2 gap-2 text-xs",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-gray-500",children:"تعداد"}),(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:et(P.quantity)})]}),(0,e.jsx)("div",{className:"rounded-lg bg-white p-2 dark:bg-gray-900",children:(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[et(P.unitPrice)," ","تومان"]})})]}),(0,e.jsxs)("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400",children:[P.brand?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["برند: ",P.brand]}):null,P.category?(0,e.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 dark:bg-gray-900",children:["دسته: ",P.category]}):null]})]},String(P.id??O)))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto sm:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"p-3",children:"کالا"}),(0,e.jsx)("th",{className:"p-3",children:"برند"}),(0,e.jsx)("th",{className:"p-3",children:"دسته‌بندی"}),(0,e.jsx)("th",{className:"p-3",children:"تعداد"}),(0,e.jsx)("th",{className:"p-3",children:"قیمت"})]})}),(0,e.jsx)("tbody",{children:x.items.map((P,O)=>(0,e.jsxs)("tr",{className:"border-t border-gray-100 dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("td",{className:"p-3 font-bold",children:P.productName||"—"}),(0,e.jsx)("td",{className:"p-3",children:P.brand||"—"}),(0,e.jsx)("td",{className:"p-3",children:P.category||"—"}),(0,e.jsx)("td",{className:"p-3",children:et(P.quantity)}),(0,e.jsxs)("td",{className:"p-3",children:[et(P.unitPrice)," ","تومان"]})]},String(P.id??O)))})]})})]}):(0,e.jsx)("div",{className:"rounded-xl bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-950/20 dark:text-amber-200",children:"جزئیات اقلام برای این بار موجود نیست. بارهای قدیمی ممکن است فقط نام فایل را ذخیره کرده باشند."})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h4",{className:"mb-3 flex items-center gap-2 font-black text-gray-800 dark:text-white",children:[(0,e.jsx)(Xe,{className:"h-5 w-5"}),"تاریخچهٔ وضعیت"]}),x.statusHistory?.length?(0,e.jsx)("div",{className:"space-y-2",children:x.statusHistory.map((P,O)=>(0,e.jsxs)("div",{className:"rounded-xl border border-gray-200 p-3 text-sm dark:border-gray-700 dark:text-gray-200",children:[(0,e.jsx)("p",{className:"font-black",children:P.label||Ks(P.status)}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500",children:$a(P.changedAt||P.createdAt)}),P.note?(0,e.jsx)("p",{className:"mt-2",children:P.note}):null]},`${P.status}-${O}`))}):(0,e.jsx)("div",{className:"rounded-xl bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800",children:"تاریخچه‌ای برای این بار ثبت نشده است."})]})]}):null]},g)})})]})]})},Ia=t=>new Intl.NumberFormat("fa-IR").format(t||0),no=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium"}).format(r)},lo=({orders:t=[]})=>{const r=Array.isArray(t)?t:[];return(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 border-b border-gray-100 p-5 dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",children:(0,e.jsx)(In,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"سفارش‌های اخیر"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"آخرین سفارش‌های ثبت‌شدهٔ شما"})]})]}),(0,e.jsxs)("span",{className:"rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",children:[Ia(r.length)," سفارش"]})]}),r.length===0?(0,e.jsxs)("div",{className:"p-10 text-center",children:[(0,e.jsx)(Cr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"سفارشی برای نمایش وجود ندارد."}),(0,e.jsx)("p",{className:"mt-2 text-sm text-gray-400 dark:text-gray-500",children:"پس از ثبت سفارش، اطلاعات آن در این بخش نمایش داده می‌شود."})]}):(0,e.jsx)("div",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:r.slice(0,5).map(s=>(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between dark:hover:bg-gray-800/60",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-gray-300",children:(0,e.jsx)(jn,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:s.title||"بدون عنوان"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:["تعداد:"," ",Ia(Number(s.quantity)||0)," ","قلم"]})]})]}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-4 sm:block sm:text-left",children:[(0,e.jsxs)("p",{className:"font-black text-emerald-600 dark:text-emerald-400",children:[Ia(Number(s.amount)||0)," ","تومان"]}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500",children:no(s.createdAt)})]})]},s.id))})]})},qt=t=>{const r=String(t??"").replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Nt=t=>new Intl.NumberFormat("fa-IR").format(qt(t)),Aa=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r).replace(/[\u200e\u200f]/g,"")},io=t=>String(t.items?.[0]?.productName||t.items?.[0]?.title||"").trim()||String(t.representativeName||"").trim()||"کالای بدون نام",Gs=t=>{const r=qt(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,d)=>s+qt(d.quantity),0)},Xs=t=>{const r=qt(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,d)=>{const b=qt(d.totalPrice);return b>0?s+b:s+qt(d.quantity)*qt(d.unitPrice??d.price)},0)},oo=t=>t==="approved"?"تأیید شده":t==="received"?"دریافت شده":t==="rejected"?"رد شده":t==="reviewing"?"در حال بررسی":"در انتظار بررسی",co=({requests:t,representativeName:r,representativeCity:s,representativePhone:d,onClose:b})=>{const{printContent:n,isMobile:p}=ss(),i=Array.isArray(t)?t:[],u=i.reduce((c,N)=>c+Gs(N),0),h=i.reduce((c,N)=>c+Xs(N),0);return(0,a.useEffect)(()=>{const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[]),typeof document>"u"?null:(0,Fn.createPortal)((0,e.jsxs)("div",{id:"return-print-root",dir:"rtl",children:[(0,e.jsx)("style",{children:`
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
      `}),(0,e.jsxs)("div",{className:"return-print-toolbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"پیش‌نمایش گزارش مرجوعی"}),(0,e.jsx)("p",{children:"فقط همین گزارش چاپ می‌شود."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("button",{type:"button",className:"return-print-close",onClick:b,children:"بستن"}),(0,e.jsx)("button",{type:"button",className:"return-print-button",onClick:()=>n("return-print-root","چاپ درخواست مرجوعی"),children:"چاپ"})]})]}),(0,e.jsxs)("main",{className:"return-print-paper",children:[(0,e.jsxs)("header",{className:"return-print-header",children:[(0,e.jsxs)("div",{className:"return-print-logo-block",children:[(0,e.jsx)("img",{src:"https://sofiyabahari465-tech.github.io/myshop-panel/company-logo.png",alt:"لوگو",style:{maxHeight:"64px",maxWidth:"200px",borderRadius:"8px",objectFit:"contain"},onError:c=>{c.target.style.display="none"}}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{style:{color:"#0f766e",margin:0,fontSize:"16pt"},children:"هلدینگ مهر"}),(0,e.jsx)("p",{style:{margin:"3px 0 0",fontSize:"9pt",color:"#4b5563"},children:"سامانه مدیریت نمایندگی و انبار"}),(0,e.jsx)("p",{style:{margin:"3px 0 0",fontSize:"9pt",color:"#4b5563"},children:"تلفن: ۰۲۱-۹۳۱۱۱۰۲۱"})]})]}),(0,e.jsxs)("div",{style:{textAlign:"center",flex:1},children:[(0,e.jsx)("h1",{style:{color:"#0f766e",margin:0,fontSize:"16pt"},children:r||"گزارش درخواست‌های مرجوعی"}),(0,e.jsx)("p",{style:{margin:"4px 0 0",fontSize:"9pt",color:"#4b5563"},children:s?`شهر: ${s}`:"گزارش درخواست‌های مرجوعی"})]}),(0,e.jsxs)("div",{style:{textAlign:"left",minWidth:"180px"},children:[(0,e.jsx)("h1",{style:{color:"#0f766e",margin:0,fontSize:"14pt"},children:"گزارش مرجوعی"}),(0,e.jsxs)("p",{style:{margin:"4px 0 0",fontSize:"9pt",color:"#4b5563"},children:["تاریخ چاپ: ",Aa()]})]})]}),(0,e.jsxs)("section",{className:"return-print-cards",children:[(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:Aa()})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"هلدینگ مهر"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"قزوین، سه راه خیام، مجتمع الغدیر"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"021-93111021"})]})]}),(0,e.jsxs)("div",{className:"return-print-card",children:[(0,e.jsx)("p",{className:"return-print-card-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:r||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:s||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تلفن نماینده:"}),(0,e.jsx)("strong",{children:d||"—"})]}),(0,e.jsxs)("div",{className:"return-print-row",children:[(0,e.jsx)("span",{children:"تعداد درخواست:"}),(0,e.jsx)("strong",{children:Nt(i.length)})]})]})]}),(0,e.jsxs)("table",{className:"return-print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"6%"},children:"ردیف"}),(0,e.jsx)("th",{style:{width:"26%"},children:"عنوان مرجوعی"}),(0,e.jsx)("th",{style:{width:"10%"},children:"تعداد"}),(0,e.jsx)("th",{style:{width:"16%"},children:"مبلغ کل"}),(0,e.jsx)("th",{style:{width:"16%"},children:"تاریخ ثبت"}),(0,e.jsx)("th",{style:{width:"12%"},children:"وضعیت"}),(0,e.jsx)("th",{style:{width:"14%"},children:"توضیحات"})]})}),(0,e.jsx)("tbody",{children:i.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"درخواست مرجوعی برای چاپ وجود ندارد."})}):i.map((c,N)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:Nt(N+1)}),(0,e.jsx)("td",{children:io(c)}),(0,e.jsx)("td",{children:Nt(Gs(c))}),(0,e.jsxs)("td",{children:[Nt(Xs(c))," تومان"]}),(0,e.jsx)("td",{children:c.returnDate||Aa(c.createdAt)}),(0,e.jsx)("td",{children:oo(c.status)}),(0,e.jsx)("td",{children:c.adminNote||"—"})]},c.id||N))})]}),(0,e.jsx)("table",{className:"return-print-table return-print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل مرجوعی‌ها"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[Nt(u)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[Nt(h)," تومان"]})]})})}),(0,e.jsxs)("footer",{className:"return-print-footer",children:[(0,e.jsxs)("span",{children:["تعداد کل درخواست‌ها:"," ",Nt(i.length)]}),(0,e.jsxs)("span",{children:["مجموع‌ها:"," ",Nt(h)," تومان"]})]})]})]}),document.body)},Da="https://myshop-backend-8nu7.onrender.com/api",Yt={productId:"",title:"",brand:"",category:"",price:"",quantity:"1",confirmedReturn:!1},ra=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),ke=t=>{const r=Number(ra(t).replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Le=t=>new Intl.NumberFormat("fa-IR").format(ke(t)),Te=t=>String(t??"").trim(),Nr=t=>ra(t).replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/\s+/g," ").trim().toLowerCase(),Zs=(t,r)=>{const s=Nr(t),d=Nr(r);return!!(s&&d&&s===d)},xo=()=>new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date).replace(/[\u200e\u200f]/g,"").replace(/-/g,"/"),mo=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},po=t=>Te(t.items?.[0]?.productName)||Te(t.items?.[0]?.title)||Te(t.representativeName)||"کالای بدون نام",ho=t=>{const r=ke(t.totalQuantity);return r>0?r:(t.items||[]).reduce((s,d)=>s+ke(d.quantity),0)},en=t=>{const r=ke(t.totalPrice);return r>0?r:(t.items||[]).reduce((s,d)=>{const b=ke(d.totalPrice);return b>0?s+b:s+ke(d.quantity)*ke(d.unitPrice??d.price)},0)},go=t=>t==="approved"||t==="received"?{label:t==="received"?"دریافت شده":"تأیید شده",type:"approved"}:t==="rejected"?{label:"رد شده",type:"rejected"}:t==="reviewing"?{label:"در حال بررسی",type:"reviewing"}:{label:"در انتظار بررسی",type:"pending"},uo=({requests:t,loading:r,errorMessage:s,onRefresh:d,onRequestCreated:b})=>{const[n,p]=(0,a.useState)(Yt),[i,u]=(0,a.useState)([]),[h,c]=(0,a.useState)([]),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)(!1),[g,w]=(0,a.useState)(!0),[o,$]=(0,a.useState)(""),[q,P]=(0,a.useState)(""),[O,G]=(0,a.useState)(!1),[C,S]=(0,a.useState)(""),f=t,I=r||g,_=s||o,R=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),V=E=>E.productName||E.name||E.title||"کالای بدون نام",Q=E=>ke(E.unitPrice??E.price),A=E=>E?.name||E?.title||"",F=E=>{const J=Nr(E.productId||E.id),ae=Nr(V(E));return N.find(l=>Zs(l.id,J))||N.find(l=>Nr(A(l))===ae)},y=(E,J)=>String(E.productId||E.id||J),m=(0,a.useMemo)(()=>h.filter(E=>ke(E.quantity)>0),[h]),L=()=>m.find((E,J)=>{const ae=y(E,J),l=F(E),z=String(l?.id||E.productId||E.id||"");return ae===n.productId||z===n.productId}),W=()=>{const E=L();if(!E)return"";const J=m.indexOf(E);return y(E,J)},D=async()=>{w(!0),$("");try{const[E,J]=await Promise.all([oe.get(`${Da}/representative/dashboard`,{headers:R()}),oe.get(`${Da}/products`,{headers:R()})]);c(Array.isArray(E.data.data?.warehouse?.items)?E.data.data?.warehouse?.items||[]:[]);const ae=E.data.data;S(Te(ae?.representative?.phone)||Te(ae?.representative?.phoneNumber)||Te(ae?.user?.phone)||Te(ae?.user?.phoneNumber)||Te(ae?.phone)||Te(ae?.phoneNumber)),v(Array.isArray(J.data.data)?J.data.data:[])}catch(E){$(E.response?.data?.error||E.response?.data?.message||"خطا در دریافت اطلاعات.")}finally{w(!1)}};(0,a.useEffect)(()=>{D()},[]),(0,a.useEffect)(()=>{if(!n.productId){p(Yt);return}L()||p(Yt)},[n.productId,m,N]);const j=(0,a.useMemo)(()=>f.filter(E=>String(E.status)==="pending"||String(E.status)==="registered"||String(E.status)==="reviewing").length,[f]);(0,a.useMemo)(()=>f.filter(E=>E.status==="approved"||E.status==="received").length,[f]),(0,a.useMemo)(()=>f.filter(E=>E.status==="rejected").length,[f]);const U=(0,a.useMemo)(()=>f.find(E=>!!Te(E.representativeName))?.representativeName||"",[f]),Z=(0,a.useMemo)(()=>f.find(E=>!!Te(E.representativeCity))?.representativeCity||"",[f]),B=(0,a.useMemo)(()=>{const E=f.find(J=>!!Te(J.representativePhone))?.representativePhone||"";return Te(E)||C},[f,C]);(0,a.useMemo)(()=>f.reduce((E,J)=>E+en(J),0),[f]);const ge=E=>{const J=m.find((re,de)=>y(re,de)===E);if(!J){p(Yt);return}const ae=F(J),l=V(J),z=ke(ae?.price),Y=Q(J),he=z>0?z:Y,ye=String(ae?.id||J.productId||J.id||"");p(re=>({...re,productId:ye,title:l,brand:Te(J.brand),category:Te(J.category)||Te(ae?.category),price:String(he),quantity:"1"})),$(""),P("")},te=()=>{const E=L();if(!E){$("ابتدا یک کالا از انبار انتخاب کنید.");return}const J=Te(n.title),ae=ke(n.price),l=ke(n.quantity);if(!n.productId){$("کالای انتخاب‌شده معتبر نیست.");return}const z=ke(E.quantity);if(z<=0){$("کالای انتخاب‌شده موجودی ندارد.");return}if(!Number.isSafeInteger(l)||l<=0){$("تعداد مرجوعی باید عدد صحیح و بیشتر از صفر باشد.");return}if(l>z){$(`تعداد مرجوعی نمی‌تواند بیشتر از موجودی انبار باشد. موجودی فعلی: ${Le(z)} قلم`);return}if(ae<=0){$("برای این کالا قیمت معتبری ثبت نشده است.");return}if(i.some(Y=>Zs(Y.productId,n.productId))){$("این کالا قبلاً به لیست مرجوعی اضافه شده است.");return}u(Y=>[...Y,{id:`${n.productId}-${Date.now()}`,productId:n.productId,title:J,brand:Te(n.brand),category:Te(n.category),price:ae,quantity:String(l),maxQuantity:z}]),p(Y=>({...Yt,confirmedReturn:Y.confirmedReturn})),$(""),P("")},ee=E=>{u(J=>J.filter(ae=>ae.id!==E)),$(""),P("")},se=(E,J)=>{const ae=ra(J);u(l=>l.map(z=>z.id===E?{...z,quantity:ae}:z)),$(""),P("")},H=(0,a.useMemo)(()=>{const E=i.reduce((ae,l)=>ae+Math.max(0,ke(l.quantity)),0),J=i.reduce((ae,l)=>ae+Math.max(0,ke(l.quantity))*l.price,0);return{itemsCount:i.length,totalQty:E,totalPrice:J}},[i]),ie=async E=>{E.preventDefault();const J=xo();if(m.length===0){$("کالای قابل مرجوعی در انبار شما وجود ندارد.");return}if(i.length===0){$("حداقل یک کالا را به لیست مرجوعی اضافه کنید.");return}const ae=i.find(z=>{const Y=ke(z.quantity);return!Number.isSafeInteger(Y)||Y<=0||Y>z.maxQuantity||z.price<=0||!z.productId||!z.title});if(ae){if(ke(ae.quantity)>ae.maxQuantity){$(`تعداد مرجوعی کالای «${ae.title}» بیشتر از موجودی انبار است.`);return}$(`اطلاعات کالای «${ae.title||"نامشخص"}» معتبر نیست.`);return}if(!n.confirmedReturn){$("برای ثبت درخواست باید تیک تأیید مرجوعی را فعال کنید.");return}const l=i.map(z=>{const Y=ke(z.quantity);return{productId:z.productId,productName:z.title,brand:z.brand,category:z.category,quantity:Y,unitPrice:z.price,totalPrice:Y*z.price}});x(!0),$(""),P("");try{const z=(await oe.post(`${Da}/return-requests/my`,{items:l,returnDate:J,reason:"مرجوعی ثبت‌شده و تأییدشده توسط نماینده",confirmedReturn:!0},{headers:R()})).data.data;z?b(z):d(),await D(),u([]),p(Yt),P(`درخواست مرجوعی شامل ${Le(l.length)} کالا با موفقیت در تاریخ ${J} ثبت شد.`)}catch(z){$(z.response?.data?.error||z.response?.data?.message||z.message||"خطا در ثبت درخواست مرجوعی.")}finally{x(!1)}},pe=()=>{I||f.length===0||G(!0)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"return-requests-page space-y-6",children:[(0,e.jsxs)("section",{className:"return-screen-only overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 bg-gradient-to-l from-rose-50 via-white to-amber-50 p-5 dark:border-gray-700 dark:from-rose-950/20 dark:via-gray-900 dark:to-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/25",children:(0,e.jsx)(Xa,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"ثبت درخواست مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"کالا را از لیست انتخاب کن، به لیست مرجوعی اضافه کن و در نهایت ثبت کن."})]})]})}),(0,e.jsxs)("form",{onSubmit:ie,className:"grid grid-cols-1 gap-5 p-5 md:grid-cols-2",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"انتخاب کالا از انبار"}),(0,e.jsxs)("select",{value:W(),onChange:E=>{ge(E.target.value)},disabled:I||m.length===0,className:"mt-2 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition-all focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:[(0,e.jsx)("option",{value:"",children:I?"در حال دریافت کالاهای انبار...":m.length===0?"کالای قابل مرجوعی در انبار شما وجود ندارد":"یک کالا را انتخاب کنید"}),m.map((E,J)=>{const ae=y(E,J),l=F(E),z=A(l)||V(E),Y=ke(l?.price),he=Y>0?Y:Q(E),ye=ke(E.quantity);return(0,e.jsxs)("option",{value:ae,children:[z," — موجودی:"," ",Le(ye)," — قیمت:"," ",Le(he)," تومان"]},`${ae}-${J}`)})]}),(0,e.jsx)("p",{className:"mt-2 text-xs text-gray-400 dark:text-gray-500",children:"فقط کالاهایی با موجودی بیشتر از صفر نمایش داده می‌شوند."})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"قیمت کالا"}),(0,e.jsx)("input",{type:"text",value:n.price?`${Le(n.price)} تومان`:"",readOnly:!0,placeholder:"پس از انتخاب کالا نمایش داده می‌شود",className:"mt-2 w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-emerald-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-emerald-300"})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-sm font-black text-gray-700 dark:text-gray-200",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:L()?ke(L()?.quantity):void 0,value:n.quantity,onChange:E=>{p(J=>({...J,quantity:ra(E.target.value)}))},disabled:!n.productId||I,className:"mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-white"})]}),(0,e.jsx)("div",{className:"rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/20",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300",children:(0,e.jsx)(it,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-sm font-black text-rose-700 dark:text-rose-300",children:"تاریخ ثبت مرجوعی خودکار است"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-rose-600 dark:text-rose-400",children:"تاریخ امروز هنگام ثبت درخواست به‌صورت خودکار ذخیره می‌شود."})]})]})}),(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"button",onClick:te,disabled:I||!n.productId,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-rose-800 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20",children:[(0,e.jsx)(wr,{className:"h-5 w-5"}),"افزودن کالا به لیست مرجوعی"]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-gray-400 dark:text-gray-500",children:"پس از انتخاب کالا و وارد کردن تعداد، آن را به لیست مرجوعی اضافه کنید."})]}),i.length>0?(0,e.jsxs)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50/60 p-4 md:col-span-2 dark:border-rose-900/50 dark:bg-rose-950/20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-rose-200 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-rose-900/50",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-rose-800 dark:text-rose-200",children:"کالاهای انتخاب‌شده برای مرجوعی"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-bold text-rose-600 dark:text-rose-300",children:"قبل از ثبت نهایی، تعداد هر کالا را بررسی کنید."})]}),(0,e.jsxs)("span",{className:"w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black text-rose-700 shadow-sm dark:bg-gray-900 dark:text-rose-300",children:[Le(H.itemsCount)," ","نوع کالا"]})]}),(0,e.jsx)("div",{className:"mt-4 space-y-3",children:i.map((E,J)=>{const ae=ke(E.quantity)*E.price;return(0,e.jsx)("div",{className:"rounded-xl border border-rose-100 bg-white p-4 dark:border-rose-900/40 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"font-black text-gray-800 dark:text-white",children:[Le(J+1),". ",E.title]}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-bold text-gray-500 dark:text-gray-400",children:[E.brand?`برند: ${E.brand}`:"برند: —",E.category?` · دسته‌بندی: ${E.category}`:""]}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-black text-emerald-600 dark:text-emerald-400",children:["قیمت:"," ",Le(E.price)," ","تومان · موجودی انبار:"," ",Le(E.maxQuantity)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsx)("span",{className:"text-xs font-black text-gray-600 dark:text-gray-300",children:"تعداد مرجوعی"}),(0,e.jsx)("input",{type:"number",min:"1",max:E.maxQuantity,value:E.quantity,onChange:l=>{se(E.id,l.target.value)},className:"mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-black text-gray-800 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-32"})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-500/10",children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ این ردیف"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-emerald-700 dark:text-emerald-300",children:[Le(ae)," ","تومان"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{ee(E.id)},className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-black text-red-700 transition-colors hover:bg-red-100 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20",children:[(0,e.jsx)(He,{className:"h-4 w-4"}),"حذف"]})]})]})},E.id)})}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 border-t border-rose-200 pt-4 sm:grid-cols-3 dark:border-rose-900/50",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعداد نوع کالا"}),(0,e.jsx)("p",{className:"mt-1 text-lg font-black text-rose-700 dark:text-rose-300",children:Le(H.itemsCount)})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-blue-700 dark:text-blue-300",children:[Le(H.totalQty)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"مجموع"}),(0,e.jsxs)("p",{className:"mt-1 text-lg font-black text-emerald-700 dark:text-emerald-300",children:[Le(H.totalPrice)," ","تومان"]})]})]})]}):(0,e.jsx)("div",{className:"rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm font-bold text-gray-500 md:col-span-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",children:"هنوز کالایی به لیست مرجوعی اضافه نشده است."}),(0,e.jsxs)("label",{className:"flex cursor-pointer items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4 transition-colors hover:bg-rose-100 md:col-span-2 dark:border-rose-900/40 dark:bg-rose-950/20 dark:hover:bg-rose-950/35",children:[(0,e.jsx)("input",{type:"checkbox",checked:n.confirmedReturn,onChange:E=>{p(J=>({...J,confirmedReturn:E.target.checked})),$("")},disabled:I||m.length===0,className:"h-5 w-5 accent-rose-600 disabled:cursor-not-allowed"}),(0,e.jsxs)("span",{className:"flex items-center gap-2 text-sm font-black text-rose-700 dark:text-rose-300",children:[(0,e.jsx)(ps,{className:"h-5 w-5 shrink-0"}),"تأیید می‌کنم که کالا جهت مرجوعی تحویل یا ارسال شده است."]})]}),_?(0,e.jsx)("div",{className:"rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700 md:col-span-2 dark:bg-red-950/30 dark:text-red-300",children:_}):null,q?(0,e.jsx)("div",{className:"rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700 md:col-span-2 dark:bg-emerald-950/30 dark:text-emerald-300",children:q}):null,(0,e.jsxs)("div",{className:"md:col-span-2",children:[(0,e.jsxs)("button",{type:"submit",disabled:k||I||m.length===0||i.length===0,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-rose-500/25 transition-all hover:from-rose-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",children:[k?(0,e.jsx)(bs,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(Xt,{className:"h-5 w-5"}),k?"در حال ثبت درخواست...":`ثبت درخواست مرجوعی (${Le(H.itemsCount)} کالا)`]}),!I&&m.length===0?(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"کالای قابل مرجوعی در انبار شما وجود ندارد."}):null]})]})]}),(0,e.jsxs)("section",{className:"return-print-area overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsxs)("div",{className:"return-screen-only flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:(0,e.jsx)(Cr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"درخواست‌های مرجوعی من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"وضعیت بررسی درخواست‌های ثبت‌شده"})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsxs)("span",{className:"rounded-full bg-amber-50 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[Le(j)," ","در انتظار بررسی"]}),(0,e.jsxs)("button",{type:"button",onClick:pe,disabled:I||f.length===0,className:"flex min-h-9 items-center gap-2 rounded-lg bg-gray-800 px-3 text-xs font-black text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]}),(0,e.jsx)("button",{type:"button",onClick:d,disabled:I,className:"flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-rose-500/10",title:"بروزرسانی","aria-label":"بروزرسانی",children:(0,e.jsx)(Re,{className:`h-4 w-4 ${I?"animate-spin":""}`})})]})]}),I?(0,e.jsxs)("div",{className:"return-screen-only flex items-center justify-center gap-2 p-10 text-sm font-black text-gray-500 dark:text-gray-400",children:[(0,e.jsx)(bs,{className:"h-5 w-5 animate-spin"}),"در حال دریافت اطلاعات..."]}):f.length===0?(0,e.jsxs)("div",{className:"return-screen-only p-10 text-center",children:[(0,e.jsx)(Cr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز درخواست مرجوعی ثبت نکرده‌اید."})]}):(0,e.jsx)("div",{className:"return-screen-only divide-y divide-gray-100 dark:divide-gray-700",children:f.map(E=>{const J=go(E.status);return(0,e.jsxs)("article",{className:"flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate font-black text-gray-800 dark:text-white",children:po(E)}),(0,e.jsxs)("p",{className:"mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400",children:[Le(en(E))," ","تومان"]}),(0,e.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:["تعداد:"," ",Le(ho(E))," ","قلم · تاریخ ثبت:"," ",E.returnDate||mo(E.createdAt)]}),J.type==="rejected"&&E.adminNote?(0,e.jsxs)("p",{className:"mt-3 rounded-xl bg-red-50 p-3 text-xs font-bold leading-6 text-red-700 dark:bg-red-950/30 dark:text-red-300",children:["دلیل رد ادمین:"," ",E.adminNote]}):null]}),J.type==="approved"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",children:[(0,e.jsx)(ps,{className:"h-4 w-4"}),J.label]}):null,J.type==="rejected"?(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-black text-red-700 dark:bg-red-500/15 dark:text-red-300",children:[(0,e.jsx)(ot,{className:"h-4 w-4"}),J.label]}):null,(J.type==="pending"||J.type==="reviewing")&&(0,e.jsxs)("span",{className:"inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",children:[(0,e.jsx)($n,{className:"h-4 w-4"}),J.label]})]},E.id)})})]})]}),O&&(0,e.jsx)(co,{requests:f,representativeName:U,representativeCity:Z,representativePhone:B,onClose:()=>G(!1)})]})},Tt=t=>{const r=Number(String(t??"").replace(/[۰-۹]/g,s=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(s))).replace(/[٠-٩]/g,s=>String("٠١٢٣٤٥٦٧٨٩".indexOf(s))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(r)?r:0},Gr=t=>new Intl.NumberFormat("fa-IR").format(Tt(t)),Ta=t=>`${Gr(t)} تومان`,is=t=>{const r=Tt(t.totalPrice);return r>0?r:Tt(t.quantity)*Tt(t.unitPrice)},tn=t=>{const r=t?new Date(t):new Date;return Number.isNaN(r.getTime())?t||"—":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},aa=t=>Array.isArray(t?.items)?t.items:[],bo=t=>{const r=Tt(t?.totalItems);return r>0?r:aa(t).reduce((s,d)=>s+Tt(d.quantity),0)},yo=t=>{const r=Tt(t?.totalAmount);return r>0?r:aa(t).reduce((s,d)=>s+is(d),0)},fo=t=>({companyName:t?.companyName||"هلدینگ مهر",companySubtitle:t?.companySubtitle||"سامانه مدیریت فروش",logoUrl:t?.logoUrl||"../company-logo.png",primaryColor:t?.primaryColor||"#0f766e",secondaryColor:t?.secondaryColor||"#ecfdf5",textColor:t?.textColor||"#111827",fontFamily:t?.fontFamily||"Tahoma, Arial, sans-serif",headerTitle:t?.headerTitle||"گزارش اعلام فروش",footerText:t?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:t?.showLogo??!0,showCompanyName:t?.showCompanyName??!0,showRepresentativeInfo:t?.showRepresentativeInfo??!0,showReportNumber:t?.showReportNumber??!0,showDate:t?.showDate??!0}),rn=({report:t,reports:r,settings:s,onClose:d})=>{const{printContent:b,isMobile:n}=ss(),p=fo(s),i=Array.isArray(r),u=i?r?.[0]:t,h=i?(r||[]).flatMap(k=>aa(k)):aa(t),c=i?h.reduce((k,x)=>k+Tt(x.quantity),0):bo(t),N=i?h.reduce((k,x)=>k+is(x),0):yo(t),v=()=>{b("sales-print-root","چاپ اعلام فروش")};return(0,e.jsxs)("div",{className:"sales-print-root",dir:"rtl",style:{fontFamily:p.fontFamily},children:[(0,e.jsxs)("div",{className:"sales-print-screen",children:[(0,e.jsxs)("div",{className:"sales-print-topbar",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:i?"پیش‌نمایش همه گزارش‌ها":"پیش‌نمایش گزارش فروش"}),(0,e.jsx)("p",{children:i?"همه گزارش‌ها در یک گزارش چاپ می‌شوند.":"گزارش فروش آماده چاپ است."})]}),(0,e.jsx)("button",{type:"button",onClick:d,className:"sales-print-close",children:"بستن"})]}),(0,e.jsx)("div",{className:"sales-print-paper",children:(0,e.jsx)(an,{report:u,items:h,totalItems:c,totalAmount:N,settings:p,isBulk:i})}),(0,e.jsxs)("div",{className:"sales-print-actions",children:[(0,e.jsx)("button",{type:"button",onClick:d,className:"sales-print-cancel",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:v,className:"sales-print-submit",children:i?"چاپ همه گزارش‌ها":"چاپ گزارش"})]})]}),(0,e.jsx)("div",{className:"sales-print-only",children:(0,e.jsx)(an,{report:u,items:h,totalItems:c,totalAmount:N,settings:p,isBulk:i})}),(0,e.jsx)("style",{children:`
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
      `})]})},an=({report:t,items:r,totalItems:s,totalAmount:d,settings:b,isBulk:n})=>{const p={"--print-primary-color":b.primaryColor,"--print-secondary-color":b.secondaryColor,"--print-text-color":b.textColor};return(0,e.jsxs)("div",{className:"print-content",style:p,children:[(0,e.jsxs)("header",{className:"print-header",children:[(0,e.jsxs)("div",{className:"print-company",children:[b.showLogo&&b.logoUrl?(0,e.jsx)("img",{src:b.logoUrl,alt:"لوگو",className:"print-logo"}):null,(0,e.jsxs)("div",{children:[b.showCompanyName?(0,e.jsx)("h1",{children:t?.representativeName||b.companyName}):null,(0,e.jsx)("p",{children:b.companySubtitle})]})]}),(0,e.jsxs)("div",{className:"print-header-left",children:[(0,e.jsx)("h2",{children:n?"گزارش تجمیعی اعلام فروش":b.headerTitle}),b.showDate?(0,e.jsxs)("p",{children:["تاریخ چاپ: ",tn()]}):null]})]}),(0,e.jsxs)("section",{className:"print-info",children:[(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات شرکت"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تاریخ و ساعت چاپ:"}),(0,e.jsx)("strong",{children:tn()})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:"هلدینگ مهر"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"آدرس شرکت:"}),(0,e.jsx)("strong",{children:"قزوین، سه راه خیام، مجتمع الغدیر"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"تلفن شرکت:"}),(0,e.jsx)("strong",{children:"021-93111021"})]})]}),(0,e.jsxs)("div",{className:"print-info-box",children:[(0,e.jsx)("p",{className:"print-info-title",children:"مشخصات نماینده"}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"نام شخص / شرکت:"}),(0,e.jsx)("strong",{children:t?.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"کد نماینده:"}),(0,e.jsx)("strong",{children:t?.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"print-info-row",children:[(0,e.jsx)("span",{children:"شهر / آدرس:"}),(0,e.jsx)("strong",{children:t?.representativeCity||"—"})]})]})]}),(0,e.jsxs)("table",{className:"print-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ردیف"}),(0,e.jsx)("th",{children:"عنوان"}),(0,e.jsx)("th",{children:"برند"}),(0,e.jsx)("th",{children:"دسته‌بندی"}),(0,e.jsx)("th",{children:"قیمت"}),(0,e.jsx)("th",{children:"تعداد"}),(0,e.jsx)("th",{children:"مبلغ کل"})]})}),(0,e.jsx)("tbody",{children:r.length===0?(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:7,children:"کالایی در این گزارش وجود ندارد."})}):r.map((i,u)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:Gr(u+1)}),(0,e.jsx)("td",{children:i.productName||"کالای بدون نام"}),(0,e.jsx)("td",{children:i.brand||i.brandName||"—"}),(0,e.jsx)("td",{children:i.category||i.categoryName||"—"}),(0,e.jsx)("td",{children:Ta(i.unitPrice)}),(0,e.jsxs)("td",{children:[Gr(i.quantity)," قلم"]}),(0,e.jsx)("td",{children:Ta(is(i))})]},i.productId||`print-item-${u}`))})]}),(0,e.jsx)("table",{className:"print-table print-total-table",children:(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{style:{width:"40%"},children:"جمع کل"}),(0,e.jsxs)("td",{style:{width:"20%"},children:[Gr(s)," قلم"]}),(0,e.jsx)("td",{style:{width:"20%"},children:"—"}),(0,e.jsx)("td",{style:{width:"20%"},children:Ta(d)})]})})}),(0,e.jsxs)("div",{className:"print-signatures",children:[(0,e.jsxs)("div",{children:["امضای نماینده",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["تأیید مسئول فروش",(0,e.jsx)("i",{})]}),(0,e.jsxs)("div",{children:["مهر شرکت",(0,e.jsx)("i",{})]})]}),(0,e.jsx)("footer",{className:"print-footer",children:b.footerText})]})},Ra="https://myshop-backend-8nu7.onrender.com/api",jo=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),Ne=t=>{const r=jo(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},Ge=t=>new Intl.NumberFormat("fa-IR").format(Ne(t)),Ft=t=>`${Ge(t)} تومان`,sn=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},Ea=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),vo=t=>{const r=Ne(t.totalPrice);return r>0?r:Ne(t.quantity)*Ne(t.unitPrice)},nn=t=>Ne(t.itemsCount)>0?Ne(t.itemsCount):Array.isArray(t.items)?t.items.length:0,ln=t=>Ne(t.totalItems)>0?Ne(t.totalItems):Array.isArray(t.items)?t.items.reduce((r,s)=>r+Ne(s.quantity),0):0,on=t=>Ne(t.totalAmount)>0?Ne(t.totalAmount):Array.isArray(t.items)?t.items.reduce((r,s)=>r+vo(s),0):0,ko=({onSaleRegistered:t,printSettings:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)({}),[p,i]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[c,N]=(0,a.useState)(!1),[v,k]=(0,a.useState)(!1),[x,g]=(0,a.useState)([]),[w,o]=(0,a.useState)(""),[$,q]=(0,a.useState)({allowed:!0}),[P,O]=(0,a.useState)(null),[G,C]=(0,a.useState)(!1),S=$.allowed===!1,f=(0,a.useMemo)(()=>({companyName:r?.companyName||"نام شرکت",companySubtitle:r?.companySubtitle||"گزارش اعلام فروش",logoUrl:r?.logoUrl||"",primaryColor:r?.primaryColor||"#0f766e",secondaryColor:r?.secondaryColor||"#ecfdf5",textColor:r?.textColor||"#111827",fontFamily:r?.fontFamily||"Tahoma",headerTitle:r?.headerTitle||"گزارش اعلام فروش",footerText:r?.footerText||"این گزارش به صورت سیستمی صادر شده است.",showLogo:r?.showLogo??!0,showCompanyName:r?.showCompanyName??!0,showRepresentativeInfo:r?.showRepresentativeInfo??!0,showReportNumber:r?.showReportNumber??!0,showDate:r?.showDate??!0}),[r]),I=(0,a.useCallback)(D=>{const j=window.open("","_blank","width=900,height=700");if(!j){alert("لطفاً popup blocker را غیرفعال کنید");return}const U=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),Z=Array.isArray(D.items)?D.items:[],B=H=>{const ie=Number(String(H??"").replace(/[۰-۹]/g,pe=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(pe))).replace(/[٠-٩]/g,pe=>String("٠١٢٣٤٥٦٧٨٩".indexOf(pe))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(ie)?ie.toLocaleString("fa-IR"):"۰"},ge=H=>`${B(H)} تومان`,te=Z.map((H,ie)=>`
        <tr>
          <td style="text-align:center;">${ie+1}</td>
          <td>${H.productName||"—"}</td>
          <td style="text-align:center;">${H.brand||H.brandName||"—"}</td>
          <td style="text-align:center;">${H.category||H.categoryName||"—"}</td>
          <td style="text-align:center;">${B(H.unitPrice)} تومان</td>
          <td style="text-align:center;">${B(H.quantity)||"—"}</td>
          <td style="text-align:center;">${B(H.totalPrice??Number(H.quantity||0)*Number(H.unitPrice||0))} تومان</td>
        </tr>`).join(""),ee=D.totalItems??Z.length,se=D.totalAmount??0;j.document.write(`<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>چاپ گزارش فروش - ${D.representativeName||""}</title>
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
  <p>گزارش فروش نمایندگی ${D.representativeName||""}</p>
</div>

<div class="info-grid">
  <div class="info-card">
    <div class="label">نام نمایندگی</div>
    <div class="value">${D.representativeName||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">کد نمایندگی</div>
    <div class="value">${D.representativeCode||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">شهر</div>
    <div class="value">${D.representativeCity||"—"}</div>
  </div>
  <div class="info-card">
    <div class="label">تاریخ ثبت</div>
    <div class="value">${D.saleDate||D.saleDateJalali||"—"}</div>
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
    ${te||'<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:30px;">هیچ کالایی در این گزارش ثبت نشده است.</td></tr>'}
  </tbody>
</table>

<div class="print-summary-section">
  <table style="margin-top: 15px;">
    <tbody>
      <tr style="background: #ecfdf5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
        <td colspan="5" style="text-align:left;"><strong>جمع کل:</strong></td>
        <td style="text-align:center;"><strong>${B(ee)}</strong></td>
        <td style="text-align:center;"><strong>${ge(se)}</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-card">
      <div class="label">تعداد اقلام</div>
      <div class="value">${B(ee)}</div>
    </div>
    <div class="summary-card">
      <div class="label">مجموع فروش</div>
      <div class="value">${B(se)}<br><span style="font-size:12px;">تومان</span></div>
    </div>
  </div>

  <div class="footer">
    <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
    <p>هلدینگ مهر</p>
  </div>
</div>

</body>
</html>`),j.document.close(),j.focus(),setTimeout(()=>{j.print()},800)},[]),_=(0,a.useCallback)(D=>{const j=window.open("","_blank","width=1000,height=720");if(!j){alert("لطفاً popup blocker را غیرفعال کنید");return}const U=new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date),Z=ee=>{const se=Number(String(ee??"").replace(/[۰-۹]/g,H=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(H))).replace(/[٠-٩]/g,H=>String("٠١٢٣٤٥٦٧٨٩".indexOf(H))).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""));return Number.isFinite(se)?se.toLocaleString("fa-IR"):"۰"},B=D.map((ee,se)=>{const H=(Array.isArray(ee.items)?ee.items:[]).map(ie=>`
        <tr>
          <td style="text-align:center;">${se+1}</td>
          <td>${ie.productName||"—"}</td>
          <td style="text-align:center;">${ie.brand||ie.brandName||"—"}</td>
          <td style="text-align:center;">${ie.category||ie.categoryName||"—"}</td>
          <td style="text-align:center;">${Z(ie.unitPrice)} تومان</td>
          <td style="text-align:center;">${Z(ie.quantity)||"—"}</td>
          <td style="text-align:center;">${Z(ie.totalPrice??Number(ie.quantity||0)*Number(ie.unitPrice||0))} تومان</td>
        </tr>`).join("");return`
        <div class="report-card">
          <div class="report-card-header">
            <h3>گزارش فروش ${se+1} - ${ee.representativeName||"—"}</h3>
            <p>کد نمایندگی: ${ee.representativeCode||"—"} | شهر: ${ee.representativeCity||"—"}</p>
            <p>تاریخ: ${ee.saleDate||"—"}</p>
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
              ${H||'<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:20px;">هیچ کالایی ثبت نشده است.</td></tr>'}
            </tbody>
          </table>
        </div>
      `}).join(""),ge=D.reduce((ee,se)=>ee+Number(se.totalAmount||0),0),te=D.reduce((ee,se)=>ee+Number(se.totalItems||0),0);j.document.write(`<!DOCTYPE html>
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
    <p><strong>تعداد گزارش‌ها:</strong> ${Z(D.length)}</p>
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
    <div class="value">${Z(D.length)}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع اقلام</div>
    <div class="value">${Z(te)}</div>
  </div>
  <div class="summary-card">
    <div class="label">مجموع فروش</div>
    <div class="value">${Z(ge)}<br><span style="font-size:12px;">تومان</span></div>
  </div>
</div>

<div class="footer">
  <p>این گزارش به‌صورت خودکار از سامانه مدیریت نمایندگی و انبار تهیه شده است.</p>
  <p>هلدینگ مهر</p>
</div>

</body>
</html>`),j.document.close(),j.focus(),setTimeout(()=>{j.print()},800)},[]),R=(0,a.useCallback)(async()=>{h(!0);try{const D=await oe.get(`${Ra}/sales-from-warehouse/products`,{headers:Ea()}),j=Array.isArray(D.data.data)?D.data.data:[];d(j),q(D.data.salesPeriod||{allowed:!0}),n(U=>{const Z={};return j.forEach(B=>{const ge=String(B.productId||B.id||"");Z[ge]=U[ge]||""}),Z})}catch(D){const j=D;d([]),o(`❌ ${j.response?.data?.error||j.response?.data?.message||"خطا در دریافت موجودی انبار."}`)}finally{h(!1)}},[]),V=(0,a.useCallback)(async()=>{N(!0);try{const D=await oe.get(`${Ra}/sales-from-warehouse/my`,{headers:Ea()});g(Array.isArray(D.data.data)?D.data.data:[]),q(D.data.salesPeriod||{allowed:!0})}catch(D){const j=D;o(`❌ ${j.response?.data?.error||j.response?.data?.message||"خطا در دریافت تاریخچه فروش."}`)}finally{N(!1)}},[]);(0,a.useEffect)(()=>{R(),V()},[R,V]);const Q=(0,a.useMemo)(()=>s.map(D=>{const j=String(D.productId||D.id||""),U=Ne(b[j]||0);return{product:D,productId:j,saleQuantity:U,totalAmount:U*Ne(D.unitPrice)}}).filter(D=>D.saleQuantity>0),[s,b]),A=Q.length,F=Q.reduce((D,j)=>D+j.saleQuantity,0),y=Q.reduce((D,j)=>D+j.totalAmount,0),m=(D,j)=>{if(S){o(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`);return}const U=String(D.productId||D.id||""),Z=Ne(b[U]||0),B=Ne(D.quantity);if(j>0&&Z>=B){o(`❌ تعداد «${D.productName}» نمی‌تواند بیشتر از موجودی (${Ge(B)}) باشد.`);return}const ge=Math.max(0,Math.min(B,Z+j));n(te=>({...te,[U]:ge>0?String(ge):""})),o("")},L=async D=>{if(D.preventDefault(),S){o(`❌ ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`);return}if(Q.length===0){o("❌ حداقل برای یک کالا تعداد بیشتر از صفر وارد کنید.");return}if(!p){o("❌ برای ثبت فروش باید تأیید صحت اطلاعات را فعال کنید.");return}try{k(!0),o("");const j=await oe.post(`${Ra}/sales-from-warehouse`,{confirmedSale:!0,items:Q.map(U=>({productId:U.productId,productName:U.product.productName,brand:U.product.brand,category:U.product.category,quantity:U.saleQuantity}))},{headers:Ea()});j.data.data&&g(U=>[j.data.data,...U]),q(j.data.salesPeriod||{allowed:!0}),j.data.warehouse?d(j.data.warehouse.filter(U=>Ne(U.quantity)>0)):await R(),n({}),i(!1),o(`✅ ${j.data.message||"فروش با موفقیت ثبت شد و موجودی انبار به‌روزرسانی شد."}`),await V(),t?.()}catch(j){const U=j;U.response?.data?.salesPeriod&&q(U.response.data.salesPeriod),o(`❌ ${U.response?.data?.error||U.response?.data?.message||"خطا در ثبت اعلام فروش."}`)}finally{k(!1)}},W=()=>`ثبت اعلام فروش فقط در روزهای ۱۰، ۲۰ و ۳۰ هر ماه شمسی مجاز است.${$.todayJalali?` امروز ${$.todayJalali} است.`:""}${$.nextAllowedAtFa?` نوبت بعدی: ${$.nextAllowedAtFa}.`:""}`;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{dir:"rtl",className:"sales-announcement-page space-y-6",children:[(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(Cn,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"ثبت اعلام فروش از انبار"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-7 text-gray-500 dark:text-gray-400",children:"فقط کالاهای واقعی موجود در انبار شما نمایش داده می‌شوند."})]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{Promise.all([R(),V()])},disabled:u||c,className:"inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-black text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:[(0,e.jsx)(Re,{className:`h-4 w-4 ${u||c?"animate-spin":""}`}),"بروزرسانی"]})]})}),(0,e.jsxs)("form",{onSubmit:L,className:"p-5 md:p-6",children:[S?(0,e.jsx)("div",{className:"mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Ae,{className:"mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-300"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black text-amber-900 dark:text-amber-100",children:"ثبت اعلام فروش فعلاً غیرفعال است"}),(0,e.jsx)("p",{className:"mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200",children:W()})]})]})}):null,u?(0,e.jsx)("div",{className:"flex min-h-48 items-center justify-center",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(me,{className:"mx-auto h-8 w-8 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-gray-500 dark:text-gray-400",children:"در حال دریافت کالاهای انبار..."})]})}):s.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50",children:[(0,e.jsx)(rr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"کالای قابل فروش در انبار شما وجود ندارد."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 lg:hidden",children:s.map(D=>{const j=String(D.productId||D.id||""),U=Ne(b[j]||0),Z=Ne(D.quantity),B=U*Ne(D.unitPrice);return(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"font-black text-gray-800 dark:text-white",children:D.productName}),(0,e.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-2.5 text-center dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"موجودی"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Ge(D.quantity)," ","قلم"]})]}),(0,e.jsx)("div",{className:"rounded-xl bg-indigo-50 p-2.5 text-center dark:bg-indigo-950/30",children:(0,e.jsx)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:Ft(D.unitPrice)})})]}),(0,e.jsxs)("div",{className:"mt-3 flex items-center justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{m(D,1)},disabled:v||S||U>=Z,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(wr,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Ge(U)}),(0,e.jsx)("button",{type:"button",onClick:()=>{m(D,-1)},disabled:v||S||U<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(gs,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ فروش"}),(0,e.jsx)("p",{className:"mt-0.5 font-black text-emerald-900 dark:text-emerald-100",children:Ft(B)})]})]})]},j)})}),(0,e.jsx)("div",{className:"hidden overflow-x-auto rounded-2xl border border-gray-100 lg:block dark:border-gray-700",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عنوان"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"موجودی انبار"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"قیمت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ فروش"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:s.map(D=>{const j=String(D.productId||D.id||""),U=Ne(b[j]||0),Z=Ne(D.quantity),B=U*Ne(D.unitPrice);return(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-gray-800 dark:text-white",children:D.productName}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Ge(D.quantity)," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-gray-600 dark:text-gray-300",children:Ft(D.unitPrice)}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("div",{className:"flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{m(D,1)},disabled:v||S||U>=Z,className:"flex h-11 w-11 items-center justify-center border-l border-gray-200 text-cyan-700 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-cyan-300 dark:hover:bg-cyan-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(wr,{className:"h-5 w-5"})}),(0,e.jsx)("span",{className:"flex h-11 min-w-12 items-center justify-center px-3 text-sm font-black text-gray-800 dark:text-white",children:Ge(U)}),(0,e.jsx)("button",{type:"button",onClick:()=>{m(D,-1)},disabled:v||S||U<=0,className:"flex h-11 w-11 items-center justify-center border-r border-gray-200 text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:disabled:bg-gray-700 dark:disabled:text-gray-500",children:(0,e.jsx)(gs,{className:"h-5 w-5"})})]})}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Ft(B)})]},j)})})]})}),(0,e.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"کالاهای انتخاب‌شده"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-indigo-900 dark:text-indigo-100",children:[Ge(A)," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-amber-50 p-4 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-2 text-xl font-black text-amber-900 dark:text-amber-100",children:[Ge(F)," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل فروش"}),(0,e.jsx)("p",{className:"mt-2 text-xl font-black text-emerald-900 dark:text-emerald-100",children:Ft(y)})]})]}),(0,e.jsxs)("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("label",{className:"flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200",children:[(0,e.jsx)("input",{type:"checkbox",checked:p,onChange:D=>{i(D.target.checked),o("")},disabled:v||S,className:"mt-0.5 h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"}),(0,e.jsx)("span",{className:"leading-6",children:"تعداد کالاهای فروخته‌شده را تأیید می‌کنم. پس از ثبت، موجودی کالاها از انبار من کم می‌شود."})]}),(0,e.jsx)("button",{type:"submit",disabled:v||S||Q.length===0||!p,className:"inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-700 sm:w-auto",children:v?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}),"در حال ثبت..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Za,{className:"h-5 w-5"}),"ثبت نهایی"]})})]})]}),w?(0,e.jsx)("div",{className:`mt-5 rounded-xl px-4 py-3 text-sm font-bold ${w.startsWith("✅")?"bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300":"bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300"}`,children:w}):null]})]}),(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700 md:p-6",children:(0,e.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)(Xe,{className:"h-6 w-6 text-emerald-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white md:text-lg",children:"تاریخچه اعلام فروش من"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"گزارش‌های ثبت‌شده از طریق سرور"})]})]}),x.length>0?(0,e.jsxs)("button",{type:"button",onClick:()=>{_(x)},className:"inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-cyan-700",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ همه گزارش‌ها"]}):null]})}),c?(0,e.jsx)("div",{className:"flex min-h-[180px] items-center justify-center",children:(0,e.jsx)(me,{className:"h-7 w-7 animate-spin text-cyan-500"})}):x.length===0?(0,e.jsxs)("div",{className:"p-8 text-center",children:[(0,e.jsx)(Xe,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"هنوز اعلام فروشی ثبت نکرده‌اید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-5 lg:hidden",children:x.map(D=>(0,e.jsxs)("article",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-gray-800 dark:text-white",children:sn(D.createdAt||D.saleDate)})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{I(D)},className:"inline-flex shrink-0 items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ"]})]}),(0,e.jsxs)("div",{className:"mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl bg-indigo-50 p-3 dark:bg-indigo-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-indigo-700 dark:text-indigo-300",children:"تعداد نوع کالا"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-indigo-900 dark:text-indigo-100",children:[Ge(nn(D))," ","کالا"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-700 dark:text-amber-300",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 font-black text-amber-900 dark:text-amber-100",children:[Ge(ln(D))," ","قلم"]})]}),(0,e.jsxs)("div",{className:"rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-700 dark:text-emerald-300",children:"مبلغ کل"}),(0,e.jsx)("p",{className:"mt-1 font-black text-emerald-900 dark:text-emerald-100",children:Ft(on(D))})]})]})]},D.id))}),(0,e.jsx)("div",{className:"hidden overflow-x-auto lg:block",children:(0,e.jsxs)("table",{className:"w-full text-right text-sm",children:[(0,e.jsx)("thead",{className:"bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/80 dark:text-gray-400",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تاریخ ثبت"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد نوع کالا"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"تعداد"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"مبلغ کل فروش"}),(0,e.jsx)("th",{className:"px-5 py-4 font-black",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:x.map(D=>(0,e.jsxs)("tr",{className:"transition hover:bg-gray-50/80 dark:hover:bg-gray-800/60",children:[(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 text-xs font-bold text-gray-600 dark:text-gray-300",children:sn(D.createdAt||D.saleDate)}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-indigo-700 dark:text-indigo-300",children:[Ge(nn(D))," ","کالا"]}),(0,e.jsxs)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-amber-700 dark:text-amber-300",children:[Ge(ln(D))," ","قلم"]}),(0,e.jsx)("td",{className:"whitespace-nowrap px-5 py-4 font-black text-emerald-700 dark:text-emerald-300",children:Ft(on(D))}),(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{I(D)},className:"inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300",children:[(0,e.jsx)(Qe,{className:"h-4 w-4"}),"چاپ گزارش"]})})]},D.id))})]})})]})]})]}),P?(0,e.jsx)(rn,{report:P,settings:f,onClose:()=>{O(null)}}):null,G?(0,e.jsx)(rn,{reports:x,settings:f,onClose:()=>{C(!1)}}):null]})},Vr="https://myshop-backend-8nu7.onrender.com/api",No=t=>String(t??"").replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),at=t=>{const r=No(t).replace(/[,٬،\s]/g,"").replace(/[^\d.-]/g,""),s=Number(r);return Number.isFinite(s)?s:0},wo=t=>new Intl.NumberFormat("fa-IR").format(at(t)),So=t=>`${wo(t)} تومان`,Pa=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||""}`}),Co=(t,r)=>{const s=at(t?.quantity),d=at(t?.unitPrice);return{id:String(t?.id||t?.productId||`inventory-item-${r}`),title:t?.productName||t?.title||t?.name||"بدون عنوان",brand:t?.brand||"",category:t?.category||"",quantity:s,unitPrice:d,totalPrice:t?.totalPrice!==void 0?at(t.totalPrice):s*d}},$o=(t,r)=>({id:String(t?.id||`shipment-${r}`),title:t?.receiver||t?.warehouse||"ارسال بار",quantity:at(t?.totalItems??t?.itemsCount),amount:at(t?.totalItems),createdAt:t?.createdAt||t?.updatedAt||void 0}),Io=({activeSection:t})=>{const[r,s]=(0,a.useState)({}),[d,b]=(0,a.useState)([]),[n,p]=(0,a.useState)(!0),[i,u]=(0,a.useState)(!1),[h,c]=(0,a.useState)(""),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)(!1),g=(0,a.useCallback)(async()=>{p(!0),c("");try{const I=await oe.get(`${Vr}/representative/dashboard`,{headers:Pa()});s(I.data.data||{})}catch(I){c(I.response?.data?.error||I.response?.data?.message||"خطا در دریافت اطلاعات داشبورد نمایندگی.")}finally{p(!1)}},[]),w=(0,a.useCallback)(async()=>{u(!0);try{const I=await oe.get(`${Vr}/return-requests/my`,{headers:Pa()});b(Array.isArray(I.data.data)?I.data.data:[])}catch(I){c(I.response?.data?.error||I.response?.data?.message||"خطا در دریافت درخواست‌های مرجوعی.")}finally{u(!1)}},[]),o=(0,a.useCallback)(async()=>{x(!0);try{const I=await oe.get(`${Vr}/sales-from-warehouse/my`,{headers:Pa()});v(Array.isArray(I.data.data)?I.data.data:[])}catch(I){console.error("خطا در دریافت فروش‌ها:",I),v([])}finally{x(!1)}},[]);(0,a.useEffect)(()=>{g()},[g]),(0,a.useEffect)(()=>{o()},[o]),(0,a.useEffect)(()=>{t==="return-request"&&w()},[t,w]);const $=(0,a.useMemo)(()=>(Array.isArray(r.warehouse?.items)?r.warehouse?.items:[]).map(Co),[r.warehouse?.items]),q=(0,a.useMemo)(()=>(Array.isArray(r.shipments)?r.shipments:[]).map($o),[r.shipments]),P=(0,a.useMemo)(()=>$.reduce((I,_)=>I+at(_.quantity),0),[$]),O=(0,a.useMemo)(()=>$.reduce((I,_)=>I+at(_.totalPrice),0),[$]),G=(0,a.useMemo)(()=>{const I=new Date,_=new Date(I);return _.setDate(_.getDate()-9),N.filter(R=>{const V=R.createdAt?new Date(R.createdAt):null;return V?V>=_&&V<=I:!1}).reduce((R,V)=>R+at(V.totalAmount),0)},[N]),C=(0,a.useMemo)(()=>{const I=new Intl.DateTimeFormat("en-US-u-ca-persian",{year:"numeric",month:"2-digit"}).formatToParts(new Date),_=`${I.find(R=>R.type==="year")?.value||""}/${I.find(R=>R.type==="month")?.value||""}`;return N.filter(R=>{const V=String(R.saleDate||"");if(!V)return!1;const Q=V.split("/");if(Q.length<3)return!1;const A=Q[0],F=Q[1],y=parseInt(Q[2],10);return`${A}/${F}`!==_?!1:[10,20,30].includes(y)}).reduce((R,V)=>R+at(V.totalAmount),0)},[N]),S=r.representative||{},f=at(S.totalFinancialCommitment);if(t==="my-shipments"){const I=sessionStorage.getItem("token")||sessionStorage.getItem("accessToken")||sessionStorage.getItem("authToken")||"";return(0,e.jsx)(so,{apiUrl:Vr,token:I})}return n?(0,e.jsx)("div",{className:"flex min-h-[320px] items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsx)(me,{className:"mx-auto h-10 w-10 animate-spin text-cyan-500"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"در حال دریافت اطلاعات نمایندگی..."})]})}):h&&t!=="return-request"&&t!=="sales-reports"?(0,e.jsxs)("div",{className:"rounded-3xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/20",children:[(0,e.jsx)("p",{className:"font-black text-red-700 dark:text-red-300",children:h}),(0,e.jsxs)("button",{type:"button",onClick:()=>{g()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):t==="dashboard"?(0,e.jsx)(Ki,{fullName:S.name||"—",territory:S.city||"—",creditAmount:f,inventoryItemCount:P,inventoryValue:O,salesLast10Days:G,salesInAllowedDays:C}):t==="orders"?(0,e.jsx)(lo,{orders:q}):t==="warehouse"?(0,e.jsx)(to,{items:$,representativeName:S.name||"",representativeCity:S.city||"",representativePhone:S.phone||"",representativeAddress:S.city||""}):t==="return-request"?(0,e.jsx)(uo,{requests:d,loading:i,errorMessage:h,onRefresh:()=>{w()},onRequestCreated:I=>{b(_=>[I,..._])}}):t==="sales-reports"?(0,e.jsx)(ko,{onSaleRegistered:()=>{g()}}):t==="profile"?(0,e.jsxs)("section",{className:"overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)("div",{className:"border-b border-gray-100 p-5 dark:border-gray-700",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",children:(0,e.jsx)(al,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-black text-gray-800 dark:text-white",children:"پروفایل نمایندگی"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"اطلاعات ثبت‌شده توسط مدیریت سیستم"})]})]})}),(0,e.jsxs)("div",{className:"grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"نام و نام خانوادگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.name||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"کد نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.code||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"محدوده نمایندگی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.city||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"شماره تماس"}),(0,e.jsx)("p",{className:"mt-2 font-black text-gray-800 dark:text-white",children:S.phone||"—"})]}),(0,e.jsxs)("div",{className:"rounded-2xl bg-gray-50 p-4 dark:bg-gray-800",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-gray-500 dark:text-gray-400",children:"تعهد مالی"}),(0,e.jsx)("p",{className:"mt-2 font-black text-emerald-600 dark:text-emerald-400",children:So(f)})]})]})]}):(0,e.jsxs)("section",{className:"rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900",children:[(0,e.jsx)(rr,{className:"mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"mt-4 font-black text-gray-600 dark:text-gray-300",children:"بخش موردنظر پیدا نشد."})]})},Ao="https://myshop-backend-8nu7.onrender.com/api",Do=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"",dn=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:new Intl.DateTimeFormat("fa-IR-u-ca-persian",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(r)},To=t=>{switch(t){case"approved":return{label:"تأیید شده",color:"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",icon:je};case"rejected":return{label:"رد شده",color:"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",icon:we};default:return{label:"در انتظار بررسی",color:"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",icon:$n}}},Ro=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),p=(0,a.useCallback)(async()=>{d(!0),n("");try{const i=Do();if(!i){n("توکن ورود پیدا نشد. دوباره وارد شوید.");return}const u=await fetch(`${Ao}/warranties/my`,{method:"GET",headers:{Authorization:`Bearer ${i}`,Accept:"application/json"}}),h=await u.json();if(!u.ok||!h.success)throw new Error(h.error||"دریافت گارانتی‌ها ناموفق بود.");r(h.data||[])}catch(i){n(i instanceof Error?i.message:"خطا در دریافت گارانتی‌ها.")}finally{d(!1)}},[]);return(0,a.useEffect)(()=>{p()},[p]),s?(0,e.jsxs)("div",{dir:"rtl",className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900",children:[(0,e.jsx)(me,{className:"h-8 w-8 animate-spin text-sky-600"}),(0,e.jsx)("span",{className:"mr-3 text-sm font-bold text-slate-600 dark:text-slate-300",children:"در حال دریافت گارانتی‌های شما..."})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6",children:[(0,e.jsxs)("header",{className:"flex flex-col gap-3 border-b border-slate-100 pb-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"flex items-center gap-2 text-lg font-black text-slate-800 dark:text-white",children:[(0,e.jsx)(Ga,{className:"h-5 w-5 text-sky-600"}),"گارانتی‌های ثبت‌شده من"]}),(0,e.jsxs)("p",{className:"mt-1 text-sm text-slate-500 dark:text-slate-400",children:[t.length," درخواست گارانتی ثبت شده"]})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>void p(),className:"flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"به‌روزرسانی"]})]}),b?(0,e.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900 dark:bg-red-950/20 dark:text-red-300",children:[(0,e.jsx)(Ae,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("span",{children:b})]}):null,!b&&t.length===0?(0,e.jsxs)("div",{className:"rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center dark:border-slate-700 dark:bg-slate-800/40",children:[(0,e.jsx)(bt,{className:"mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600"}),(0,e.jsx)("p",{className:"font-bold text-slate-600 dark:text-slate-300",children:"هنوز درخواست گارانتی ثبت نکرده‌اید."}),(0,e.jsx)("p",{className:"mt-1 text-sm text-slate-400",children:"با استفاده از فرم بالا، اولین درخواست گارانتی خود را ثبت کنید."})]}):null,!b&&t.length>0?(0,e.jsx)("div",{className:"space-y-3",children:t.map(i=>{const u=To(i.status),h=u.icon;return(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 p-3 dark:border-slate-700 sm:p-4",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400",children:["کد پیگیری:"," ",(0,e.jsx)("span",{className:"font-black text-slate-700 dark:text-slate-200",children:i.trackingCode||i.id})]}),(0,e.jsx)("h4",{className:"mt-1 text-sm font-black text-slate-800 dark:text-white sm:text-base",children:i.productName})]}),(0,e.jsxs)("span",{className:`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black sm:text-xs ${u.color}`,children:[(0,e.jsx)(h,{className:"h-3.5 w-3.5"}),u.label]})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4",children:[(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:i.customerName})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"موبایل"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",dir:"ltr",children:i.customerPhone})]}),(0,e.jsxs)("div",{className:"rounded-lg bg-white p-2 dark:bg-slate-900",children:[(0,e.jsx)("p",{className:"text-[10px] text-slate-500 sm:text-xs",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-0.5 text-xs font-black text-slate-800 dark:text-white sm:text-sm",children:[i.quantity," عدد"]})]})]}),i.issueDescription?(0,e.jsxs)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-500 sm:text-xs",children:"شرح مشکل:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-600 dark:text-slate-300 sm:text-sm",children:i.issueDescription})]}):null,i.adminNote?(0,e.jsxs)("div",{className:"border-t border-slate-100 bg-amber-50 px-3 py-2 dark:border-slate-700 dark:bg-amber-950/20 sm:px-4",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-amber-700 dark:text-amber-300 sm:text-xs",children:"یادداشت ادمین:"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-amber-800 dark:text-amber-200 sm:text-sm",children:i.adminNote})]}):null,(0,e.jsx)("div",{className:"border-t border-slate-100 px-3 py-2 dark:border-slate-700 sm:px-4",children:(0,e.jsxs)("p",{className:"text-[10px] text-slate-400 sm:text-xs",children:["ثبت: ",dn(i.createdAt),i.decidedAt?` · تصمیم: ${dn(i.decidedAt)}`:""]})})]},i.id)})}):null]})},za="https://myshop-backend-8nu7.onrender.com/api",Ma=za.endsWith("/api")?za.slice(0,-4):za,Fa=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",cn=new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(new Date),Eo=t=>{const r=Number(t)||0;return r?`${r.toLocaleString("fa-IR")} تومان`:"—"},Po=()=>{const t=(0,a.useRef)(null),[r,s]=(0,a.useState)(""),[d,b]=(0,a.useState)(""),[n,p]=(0,a.useState)(""),[i,u]=(0,a.useState)(1),[h,c]=(0,a.useState)(""),[N,v]=(0,a.useState)(null),[k,x]=(0,a.useState)(""),[g,w]=(0,a.useState)(null),[o,$]=(0,a.useState)(!1),[q,P]=(0,a.useState)(null),[O,G]=(0,a.useState)(null),[C,S]=(0,a.useState)(!1),[f,I]=(0,a.useState)(""),[_,R]=(0,a.useState)(null),[V,Q]=(0,a.useState)(null),[A,F]=(0,a.useState)(!1),[y,m]=(0,a.useState)(null),[L,W]=(0,a.useState)(null),D=(0,a.useRef)(null),[j,U]=(0,a.useState)(null),[Z,B]=(0,a.useState)([]),[ge,te]=(0,a.useState)(!0),[ee,se]=(0,a.useState)(null),H=(0,a.useMemo)(()=>Z.find(re=>re.productId===n)||null,[n,Z]),ie=async()=>{try{te(!0),se(null);const re=Fa(),de=await fetch(`${Ma}/api/warranties/form-data`,{headers:{Authorization:`Bearer ${re}`,Accept:"application/json"}}),T=await de.json();if(!de.ok||!T.success||!T.data)throw new Error(T.error||"خطا در دریافت اطلاعات فرم گارانتی.");U(T.data.representative),B(Array.isArray(T.data.products)?T.data.products:[])}catch(re){console.error("خطا در دریافت داده‌های فرم گارانتی:",re),se(re instanceof Error?re.message:"خطا در ارتباط با سرور.")}finally{te(!1)}};(0,a.useEffect)(()=>{ie()},[]);const pe=re=>{const de=re.target.files?.[0];if(!de)return;if(de.size>5242880){alert("حجم فایل باید حداکثر ۵ مگابایت باشد.");return}const T=new FileReader;T.onload=()=>{v(String(T.result||"")),x(de.name),w(de),P(null)},T.readAsDataURL(de)},E=()=>{v(null),x(""),w(null),t.current&&(t.current.value="")},J=re=>{const de=re.target.value;p(de),u(1)},ae=async re=>{re.preventDefault(),$(!0),P(null),G(null);try{const de=Fa();if(!de)throw new Error("توکن ورود پیدا نشد.");if(!H)throw new Error("محصولی انتخاب نشده است.");const T=new FormData;if(T.append("customerName",r.trim()),T.append("customerPhone",d.replace(/[\s-]/g,"")),T.append("productId",H.productId),T.append("quantity",String(i)),T.append("issueDescription","ثبت گارانتی اولیه - بدون شرح مشکل"),!g)throw new Error("فایلی انتخاب نشده است.");T.append("image",g,g.name);const K=await(await fetch(`${Ma}/api/warranties`,{method:"POST",headers:{Authorization:`Bearer ${de}`,Accept:"application/json"},body:T})).json();if(!K.success)throw new Error(K.error||"خطا در ثبت");G("درخواست با موفقیت ثبت شد."),s(""),b(""),p(""),u(1),c(""),E(),await ie()}catch(de){P(de?.message||"خطا")}finally{$(!1)}},l=re=>{const de=re.target.files?.[0];if(!de)return;R(de),m(null);const T=new FileReader;T.onload=K=>{Q(K.target?.result)},T.readAsDataURL(de)},z=()=>{R(null),Q(null),D.current&&(D.current.value="")},Y=()=>{S(!0),I(""),R(null),Q(null),m(null),W(null)},he=()=>{A||(S(!1),I(""),R(null),Q(null),m(null),W(null))},ye=async()=>{if(m(null),W(null),f.trim().length<10){m("شرح مشکل باید حداقل ۱۰ کاراکتر باشد.");return}if(!_){m("عکس محصول الزامی است.");return}F(!0);try{const re=Fa();if(!re)throw new Error("توکن ورود پیدا نشد.");const de=new FormData;de.append("issueDescription",f.trim()),de.append("image",_,_.name),de.append("useWarranty","true");const T=await(await fetch(`${Ma}/api/warranties/use`,{method:"POST",headers:{Authorization:`Bearer ${re}`,Accept:"application/json"},body:de})).json();if(!T.success)throw new Error(T.error||"خطا در ثبت درخواست");W("درخواست استفاده از گارانتی با موفقیت ثبت شد."),I(""),z(),setTimeout(()=>{S(!1),W(null)},2500)}catch(re){m(re?.message||"خطا")}finally{F(!1)}};return ge?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[420px] items-center justify-center rounded-2xl border border-sky-100 bg-white",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3 text-center",children:[(0,e.jsx)(me,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-bold text-slate-600",children:"در حال دریافت اطلاعات انبار و کد نمایندگی..."})]})}):ee?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)(Ae,{className:"mx-auto h-10 w-10 text-red-500"}),(0,e.jsx)("p",{className:"mt-3 font-black text-red-700",children:"دریافت اطلاعات گارانتی ناموفق بود"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-red-600",children:ee}),(0,e.jsx)("button",{type:"button",onClick:()=>{ie()},className:"mt-5 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:"تلاش مجدد"})]}):(0,e.jsxs)("section",{dir:"rtl",className:"space-y-5 pb-8",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-sky-700 via-cyan-600 to-teal-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl"}),(0,e.jsx)("div",{className:"absolute -bottom-16 right-24 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(rt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"سامانه خدمات پس از فروش"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"استفاده از گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm font-medium leading-7 text-sky-50 md:text-base",children:"اطلاعات مشتری، کالای موجود در انبار و تصویر خرابی را ثبت کنید تا درخواست شما برای بررسی ارسال شود."})]}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(it,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"text-sm font-black",children:cn})]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-sm",children:[(0,e.jsx)(rt,{className:"h-5 w-5"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[11px] font-bold text-sky-100",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"text-sm font-black",children:j?.code||"ثبت نشده"})]})]})]})]})]}),(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"min-w-full text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-50 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"مرحله"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"کاری که باید انجام دهید"}),(0,e.jsx)("th",{className:"whitespace-nowrap border-b border-slate-200 px-5 py-3 text-xs font-black",children:"نکته مهم"})]})}),(0,e.jsxs)("tbody",{className:"divide-y divide-slate-100 text-sm text-slate-700",children:[(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۱"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"اطلاعات مشتری و محصول را ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"محصول فقط از موجودی انبار اختصاصی نمایندگی شما انتخاب می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۲"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"مشکل کالا را دقیق توضیح دهید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"شرح کامل خرابی باعث بررسی سریع‌تر درخواست می‌شود."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۳"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"فایل (عکس) از کالا یا خرابی ثبت کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"در موبایل، دوربین پشت گوشی برای ثبت فایل باز می‌شود. هر نام و پسوندی قابل قبول است."})]}),(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsx)("td",{className:"px-5 py-4",children:(0,e.jsx)("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-xs font-black text-sky-700",children:"۴"})}),(0,e.jsx)("td",{className:"px-5 py-4 font-bold",children:"درخواست را برای بررسی ارسال کنید"}),(0,e.jsx)("td",{className:"px-5 py-4 text-xs leading-6 text-slate-500",children:"وضعیت اولیه تمام درخواست‌ها «در انتظار بررسی» است."})]})]})]})})]}),(0,e.jsxs)("form",{onSubmit:ae,noValidate:!0,className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 md:flex-row md:items-center md:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(Cr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"فرم ثبت درخواست گارانتی"}),(0,e.jsx)("p",{className:"mt-0.5 text-xs font-medium text-slate-500",children:"همه فیلدهای دارای علامت * الزامی هستند."})]})]}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,e.jsx)("span",{className:"w-fit rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700",children:"وضعیت پس از ثبت: در انتظار بررسی"}),(0,e.jsxs)("button",{type:"button",onClick:Y,className:"inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-l from-emerald-600 to-teal-500 px-4 py-1.5 text-xs font-black text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0",children:[(0,e.jsx)(rt,{className:"h-4 w-4"}),"استفاده از گارانتی"]})]})]}),(0,e.jsxs)("div",{className:"p-5 md:p-7",children:[q?(0,e.jsxs)("div",{className:"mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(Ae,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-black",children:"ثبت درخواست ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:q})]})]}):null,O?(0,e.jsx)("div",{className:"mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(je,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"font-black",children:"درخواست گارانتی ثبت شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7",children:O})]})]})}):null,(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)($t,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات مشتری و نمایندگی"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["نام مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)($t,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"text",value:r,onChange:re=>{s(re.target.value)},placeholder:"مثال: علی رضایی",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["شماره موبایل مشتری"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(na,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"tel",inputMode:"numeric",dir:"ltr",value:d,onChange:re=>{b(re.target.value)},placeholder:"021-93111021",className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-3 text-left text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"کد نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 text-sky-800",children:[(0,e.jsx)(rt,{className:"h-4 w-4 shrink-0 text-sky-600"}),(0,e.jsx)("span",{dir:"ltr",className:"text-sm font-black",children:j?.code||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"نام نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)($t,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:j?.name||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"شهر نمایندگی"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(Dt,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"truncate text-sm font-bold",children:j?.city||"ثبت نشده"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:"تاریخ درخواست"}),(0,e.jsxs)("div",{className:"flex h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-700",children:[(0,e.jsx)(it,{className:"h-4 w-4 shrink-0 text-slate-500"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:cn})]})]})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,e.jsx)(ea,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"اطلاعات کالا"})]}),(0,e.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[(0,e.jsxs)("label",{className:"block md:col-span-2",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["انتخاب محصول از انبار"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(ea,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"}),(0,e.jsxs)("select",{value:n,onChange:J,className:"w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-10 text-sm font-medium text-slate-800 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"",children:"انتخاب محصول موجود در انبار"}),Z.map(re=>(0,e.jsxs)("option",{value:re.productId,children:[re.productName," — ",re.brand||"بدون برند"," — موجودی: ",re.quantity]},re.warehouseItemId))]}),(0,e.jsx)(la,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]}),Z.length===0?(0,e.jsx)("p",{className:"mt-2 text-xs font-bold text-amber-600",children:"کالای دارای موجودی در انبار شما پیدا نشد."}):null]}),(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["تعداد"," ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("input",{type:"number",min:"1",max:H?.quantity||1,value:i,disabled:!H,onChange:re=>{u(Number(re.target.value)||1)},className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-800 outline-none transition-all disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]})]}),(0,e.jsxs)("div",{className:"mt-4 grid gap-4 md:grid-cols-3",children:[(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند کالا"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:H?.brand||"پس از انتخاب محصول"})]}),(0,e.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"موجودی قابل ثبت"}),(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:H?`${H.quantity} عدد`:"—"})]}),(0,e.jsx)("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsx)("p",{className:"mt-1 font-black text-slate-800",children:H?Eo(H.unitPrice):"—"})})]})]}),(0,e.jsxs)("div",{className:"mb-8",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)(ca,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"عکس کارت گارانتی"}),(0,e.jsx)("span",{className:"text-sm font-bold text-rose-500",children:"*"})]}),(0,e.jsx)("input",{ref:t,type:"file",accept:"*/*",capture:"environment",onChange:pe,className:"hidden"}),N?(0,e.jsx)("div",{className:"relative overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 p-3",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[(0,e.jsx)("img",{src:N,alt:"پیش‌نمایش فایل گارانتی",className:"h-44 w-full rounded-xl object-cover sm:w-56"}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 text-emerald-700",children:[(0,e.jsx)(je,{className:"h-5 w-5 shrink-0"}),(0,e.jsx)("p",{className:"font-black",children:"فایل آمادهٔ ارسال است"})]}),(0,e.jsx)("p",{className:"mt-2 truncate text-sm font-medium text-slate-600",children:k}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-slate-500",children:"پیش از ثبت نهایی، از واضح بودن عکس و مشخص بودن خرابی اطمینان بگیرید."}),(0,e.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"inline-flex items-center gap-2 rounded-lg border border-sky-300 bg-white px-3 py-2 text-xs font-bold text-sky-700 transition-colors hover:bg-sky-50",children:[(0,e.jsx)(ca,{className:"h-4 w-4"}),"تغییر فایل"]}),(0,e.jsxs)("button",{type:"button",onClick:E,className:"inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-50",children:[(0,e.jsx)(we,{className:"h-4 w-4"}),"حذف فایل"]})]})]})]})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{t.current?.click()},className:"group flex min-h-44 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/60 px-5 py-7 text-center transition-all hover:border-sky-500 hover:bg-sky-50",children:[(0,e.jsx)("span",{className:"mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm transition-transform group-hover:scale-110",children:(0,e.jsx)(vs,{className:"h-7 w-7"})}),(0,e.jsx)("span",{className:"font-black text-sky-800",children:"گرفتن عکس با دوربین یا انتخاب فایل"}),(0,e.jsx)("span",{className:"mt-2 max-w-md text-xs font-medium leading-6 text-slate-500",children:"در تلفن همراه دوربین پشت گوشی باز می‌شود. هر نام و پسوندی قابل قبول است؛ فقط حجم فایل باید حداکثر ۵ مگابایت باشد."})]})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("p",{className:"flex items-center gap-2 text-xs font-medium text-slate-500",children:[(0,e.jsx)(rt,{className:"h-4 w-4 text-sky-600"}),"کد نمایندگی و محصول از اطلاعات واقعی حساب و انبار شما دریافت شده‌اند."]}),(0,e.jsx)("button",{type:"submit",disabled:o,className:"inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-sky-700 to-cyan-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:from-sky-800 hover:to-cyan-700 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}),"در حال ثبت درخواست..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(rt,{className:"h-5 w-5"}),"ثبت نهایی درخواست گارانتی"]})})]})]})]}),(0,e.jsx)("div",{className:"mt-6",children:(0,e.jsx)(Ro,{})}),C?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm",onClick:he,children:(0,e.jsxs)("div",{className:"max-h-[92vh] w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl",onClick:re=>{re.stopPropagation()},children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-emerald-100 bg-gradient-to-l from-emerald-50 to-teal-50 p-5",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white",children:(0,e.jsx)(rt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"استفاده از گارانتی"}),(0,e.jsx)("p",{className:"text-xs text-slate-500",children:"شرح مشکل و عکس محصول را ثبت کنید"})]})]}),(0,e.jsx)("button",{type:"button",onClick:he,disabled:A,className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsx)("div",{className:"max-h-[calc(92vh-180px)] overflow-y-auto p-5",children:L?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center py-10 text-center",children:[(0,e.jsx)("div",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100",children:(0,e.jsx)(je,{className:"h-9 w-9 text-emerald-600"})}),(0,e.jsx)("p",{className:"mt-4 font-black text-emerald-700",children:L})]}):(0,e.jsxs)(e.Fragment,{children:[y?(0,e.jsxs)("div",{className:"mb-4 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700",children:[(0,e.jsx)(Ae,{className:"mt-0.5 h-5 w-5 shrink-0"}),(0,e.jsx)("p",{className:"text-sm font-medium",children:y})]}):null,(0,e.jsxs)("div",{className:"mb-5",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-bold text-slate-700",children:[(0,e.jsx)(Ae,{className:"h-4 w-4 text-emerald-600"}),"شرح مشکل محصول",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("textarea",{rows:4,value:f,onChange:re=>{I(re.target.value)},placeholder:"مشکل محصول را با جزئیات توضیح دهید؛ مثال: نشتی از محل اتصال، شکستگی بدنه، عملکرد نادرست...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"})]}),(0,e.jsx)("p",{className:"mt-2 text-xs font-medium text-slate-400",children:"حداقل ۱۰ کاراکتر وارد کنید."})]}),(0,e.jsxs)("div",{className:"mb-2",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,e.jsx)(ca,{className:"h-5 w-5 text-emerald-600"}),(0,e.jsx)("h4",{className:"font-black text-slate-800",children:"عکس محصول (خرابی)"}),(0,e.jsx)("span",{className:"text-sm font-bold text-rose-500",children:"*"})]}),(0,e.jsx)("input",{ref:D,type:"file",accept:"image/*",capture:"environment",onChange:l,className:"hidden"}),V?(0,e.jsx)("div",{className:"relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-3",children:(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center",children:[(0,e.jsx)("img",{src:V,alt:"عکس محصول",className:"h-32 w-full max-w-[180px] rounded-xl object-cover"}),(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsx)("p",{className:"text-sm font-black text-slate-700",children:"عکس انتخاب شد"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-slate-500",children:_?.name})]}),(0,e.jsx)("button",{type:"button",onClick:z,className:"flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600 transition hover:bg-rose-200",children:(0,e.jsx)(we,{className:"h-4 w-4"})})]})}):(0,e.jsxs)("button",{type:"button",onClick:()=>{D.current?.click()},className:"group flex min-h-40 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/60 px-5 py-6 text-center transition-all hover:border-emerald-500 hover:bg-emerald-50",children:[(0,e.jsx)("span",{className:"mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm transition-transform group-hover:scale-110",children:(0,e.jsx)(vs,{className:"h-6 w-6"})}),(0,e.jsx)("span",{className:"font-black text-emerald-800",children:"گرفتن عکس یا انتخاب فایل"}),(0,e.jsx)("span",{className:"mt-2 max-w-md text-xs font-medium leading-6 text-slate-500",children:"عکس واضح از محصول و خرابی آن را آپلود کنید. حداکثر حجم ۵ مگابایت."})]})]})]})}),L?null:(0,e.jsxs)("div",{className:"flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50 p-4",children:[(0,e.jsx)("button",{type:"button",onClick:he,disabled:A,className:"rounded-xl bg-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-300 disabled:opacity-50",children:"انصراف"}),(0,e.jsx)("button",{type:"button",onClick:ye,disabled:A||f.trim().length<10||!_,className:"inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-600 to-teal-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0",children:A?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}),"در حال ثبت..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(rt,{className:"h-4 w-4"}),"ثبت درخواست"]})})]})]})}):null]})},La="https://myshop-backend-8nu7.onrender.com/api",Ya=La.endsWith("/api")?La.slice(0,-4):La,xn=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",mn=t=>t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")?t:`${Ya}${t}`:"",fr=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(r)},zo={pending:{label:"در انتظار بررسی",className:"border-amber-200 bg-amber-50 text-amber-700",icon:rs},approved:{label:"تأیید شده",className:"border-emerald-200 bg-emerald-50 text-emerald-700",icon:je},rejected:{label:"رد شده",className:"border-rose-200 bg-rose-50 text-rose-700",icon:ot}},Ua=({status:t})=>{const r=zo[t],s=r.icon;return(0,e.jsxs)("span",{className:["inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-lg border px-2 py-1.5 text-[10px] font-black sm:px-2.5 sm:text-xs",r.className].join(" "),children:[(0,e.jsx)(s,{className:"h-3.5 w-3.5 shrink-0"}),r.label]})},Mo=({warranty:t})=>t.status!=="approved"?null:t.smsStatus==="sent"?(0,e.jsx)("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(je,{className:"mt-0.5 h-6 w-6 shrink-0 text-emerald-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-emerald-900",children:"پیامک تأیید گارانتی ارسال شد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-emerald-800",children:"پیامک اطلاع‌رسانی تأیید گارانتی برای مشتری ارسال شده است."}),(0,e.jsxs)("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:["زمان ارسال:"," ",fr(t.smsSentAt)]})]})]})}):t.smsStatus==="sending"?(0,e.jsx)("div",{className:"rounded-2xl border border-sky-200 bg-sky-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(me,{className:"mt-0.5 h-6 w-6 shrink-0 animate-spin text-sky-600"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-sky-900",children:"در حال ارسال پیامک"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-sky-800",children:"درخواست تأیید شده و وضعیت ارسال پیامک در حال بررسی است."})]})]})}):t.smsStatus==="skipped"?(0,e.jsx)("div",{className:"rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(rs,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"پیامک ارسال نشد"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-amber-800",children:"گارانتی تأیید شده است، اما پیامک برای مشتری ارسال نشد."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-amber-700",children:["دلیل: ",t.smsError]}):null]})]})}):t.smsStatus==="failed"?(0,e.jsx)("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(Ae,{className:"mt-0.5 h-6 w-6 shrink-0 text-rose-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-rose-900",children:"ارسال پیامک ناموفق بود"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-rose-800",children:"گارانتی تأیید و موجودی انبار کم شده است، اما سامانه پیامک پاسخ موفق نداده است."}),t.smsError?(0,e.jsxs)("p",{className:"mt-2 break-words text-xs font-bold leading-6 text-rose-700",children:["خطا: ",t.smsError]}):null]})]})}):(0,e.jsx)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)(na,{className:"mt-0.5 h-6 w-6 shrink-0 text-slate-500"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"وضعیت پیامک گارانتی ثبت نشده است"}),(0,e.jsx)("p",{className:"mt-1 text-sm font-medium leading-7 text-slate-600",children:"این درخواست ممکن است پیش از فعال‌شدن پیامک گارانتی تأیید شده باشد."})]})]})}),Fo=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[p,i]=(0,a.useState)(""),[u,h]=(0,a.useState)("all"),[c,N]=(0,a.useState)(null),[v,k]=(0,a.useState)(""),[x,g]=(0,a.useState)(null),[w,o]=(0,a.useState)(null),[$,q]=(0,a.useState)(null),[P,O]=(0,a.useState)(!1),G=async()=>{try{d(!0),n(null);const R=xn();if(!R)throw new Error("توکن ورود پیدا نشد. دوباره وارد شوید.");const V=await fetch(`${Ya}/api/warranties/admin/all`,{headers:{Authorization:`Bearer ${R}`,Accept:"application/json"}}),Q=await V.json();if(!V.ok||!Q.success)throw new Error(Q.error||"دریافت درخواست‌های گارانتی ناموفق بود.");r(Array.isArray(Q.data)?Q.data:[])}catch(R){console.error("خطا در دریافت درخواست‌های گارانتی:",R),n(R instanceof Error?R.message:"خطا در ارتباط با سرور.")}finally{d(!1)}};(0,a.useEffect)(()=>{G()},[]),(0,a.useEffect)(()=>{c&&(k(c.adminNote||""),o(null),q(null),O(!1))},[c]);const C=(0,a.useMemo)(()=>{const R=p.trim().toLocaleLowerCase("fa-IR");return t.filter(V=>u==="all"||V.status===u?R?[V.id,V.representativeName,V.representativeCode,V.representativeCity,V.customerName,V.customerPhone,V.productName,V.brand,V.category].filter(Boolean).join(" ").toLocaleLowerCase("fa-IR").includes(R):!0:!1)},[p,u,t]),S=(0,a.useMemo)(()=>t.reduce((R,V)=>(R.total+=1,R[V.status]+=1,R),{total:0,pending:0,approved:0,rejected:0}),[t]),f=R=>{r(V=>V.map(Q=>Q.id===R.id?R:Q)),N(R)},I=()=>{x||(N(null),o(null),q(null))},_=async R=>{if(!c||c.status!=="pending"||R!=="approved"&&R!=="rejected")return;const V=R==="approved"?`آیا از تأیید این درخواست مطمئن هستید؟

${c.quantity} عدد از محصول «${c.productName}» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد.`:`آیا از رد این درخواست مطمئن هستید؟

موجودی انبار تغییری نمی‌کند.`;if(window.confirm(V))try{g(R),o(null),q(null);const Q=xn();if(!Q)throw new Error("توکن ادمین پیدا نشد. دوباره وارد شوید.");const A=await fetch(`${Ya}/api/warranties/admin/${c.id}/decision`,{method:"PATCH",headers:{Authorization:`Bearer ${Q}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({status:R,adminNote:v.trim()})}),F=await A.json();if(!A.ok||!F.success)throw new Error(F.error||"ثبت تصمیم ادمین ناموفق بود.");F.data?.warranty&&f(F.data.warranty),q(F.message||"تصمیم با موفقیت ثبت شد.")}catch(Q){console.error("خطا در ثبت تصمیم گارانتی:",Q),o(Q instanceof Error?Q.message:"خطا در ارتباط با سرور.")}finally{g(null)}};return s?(0,e.jsx)("section",{dir:"rtl",className:"flex min-h-[440px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm",children:(0,e.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,e.jsx)(me,{className:"h-10 w-10 animate-spin text-sky-600"}),(0,e.jsx)("p",{className:"text-sm font-black text-slate-600",children:"در حال دریافت درخواست‌های گارانتی..."})]})}):b?(0,e.jsxs)("section",{dir:"rtl",className:"rounded-3xl border border-rose-200 bg-rose-50 p-7 text-center",children:[(0,e.jsx)(Ae,{className:"mx-auto h-12 w-12 text-rose-500"}),(0,e.jsx)("h2",{className:"mt-4 text-lg font-black text-rose-800",children:"دریافت اطلاعات ناموفق بود"}),(0,e.jsx)("p",{className:"mx-auto mt-2 max-w-xl text-sm leading-7 text-rose-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{G()},className:"mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-rose-700",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"تلاش دوباره"]})]}):(0,e.jsxs)("section",{dir:"rtl",className:"w-full min-w-0 space-y-5 overflow-x-hidden pb-10",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-xl shadow-sky-950/5",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-slate-950 via-sky-950 to-cyan-700 px-5 py-7 text-white md:px-8",children:[(0,e.jsx)("div",{className:"absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-2 text-sky-100",children:[(0,e.jsx)(rt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"مدیریت خدمات پس از فروش"})]}),(0,e.jsx)("h1",{className:"text-2xl font-black md:text-3xl",children:"بررسی درخواست‌های گارانتی"}),(0,e.jsx)("p",{className:"mt-2 max-w-2xl text-sm leading-7 text-sky-100",children:"درخواست‌ها را بررسی کنید و پس از تأیید، موجودی کالای نماینده را به‌صورت خودکار کاهش دهید."})]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{G()},className:"inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur transition-colors hover:bg-white/20",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"به‌روزرسانی"]})]})]}),(0,e.jsxs)("div",{className:"grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4",children:[(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کل درخواست‌ها"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-slate-800",children:S.total.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-amber-600",children:"در انتظار بررسی"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-amber-700",children:S.pending.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-emerald-600",children:"تأیید شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-emerald-700",children:S.approved.toLocaleString("fa-IR")})]}),(0,e.jsxs)("div",{className:"bg-white p-5",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-rose-600",children:"رد شده"}),(0,e.jsx)("p",{className:"mt-2 text-3xl font-black text-rose-700",children:S.rejected.toLocaleString("fa-IR")})]})]})]}),(0,e.jsx)("div",{className:"rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5",children:(0,e.jsxs)("div",{className:"grid gap-3 lg:grid-cols-[minmax(0,1fr)_230px]",children:[(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"}),(0,e.jsx)("input",{type:"search",value:p,onChange:R=>{i(R.target.value)},placeholder:"جست‌وجو در مشتری، نماینده، محصول یا برند...",className:"h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white py-3 pr-11 pl-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"})]}),(0,e.jsxs)("div",{className:"relative min-w-0",children:[(0,e.jsxs)("select",{value:u,onChange:R=>{h(R.target.value)},className:"h-12 w-full min-w-0 appearance-none rounded-xl border border-slate-300 bg-white px-4 pl-10 text-sm font-bold text-slate-700 outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-100",children:[(0,e.jsx)("option",{value:"all",children:"همه وضعیت‌ها"}),(0,e.jsx)("option",{value:"pending",children:"در انتظار بررسی"}),(0,e.jsx)("option",{value:"approved",children:"تأیید شده"}),(0,e.jsx)("option",{value:"rejected",children:"رد شده"})]}),(0,e.jsx)(la,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"})]})]})}),(0,e.jsxs)("div",{className:"min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-2 border-b border-slate-200 bg-gradient-to-l from-slate-50 to-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-2",children:[(0,e.jsx)(Xe,{className:"h-5 w-5 shrink-0 text-sky-600"}),(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"فهرست درخواست‌ها"})]}),(0,e.jsxs)("p",{className:"text-xs font-bold text-slate-500",children:["نمایش"," ",C.length.toLocaleString("fa-IR")," ","درخواست"]})]}),C.length===0?(0,e.jsxs)("div",{className:"px-5 py-20 text-center",children:[(0,e.jsx)(Xe,{className:"mx-auto h-14 w-14 text-slate-300"}),(0,e.jsx)("p",{className:"mt-4 font-black text-slate-700",children:"درخواستی پیدا نشد"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"جست‌وجو یا فیلتر وضعیت را تغییر دهید."})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"space-y-3 p-3 md:hidden",children:C.map(R=>(0,e.jsxs)("article",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3 border-b border-slate-100 bg-slate-50 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"truncate text-sm font-black text-slate-800",children:R.productName||"بدون نام"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-medium text-slate-500",children:R.brand||"بدون برند"})]}),(0,e.jsx)(Ua,{status:R.status})]}),(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-3 p-4",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:R.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:R.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-xs font-black text-slate-700",children:R.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-[10px] text-slate-500",children:R.customerPhone||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-xs font-black text-sky-700",children:[Number(R.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-[10px] font-bold text-slate-400",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-1 text-[10px] font-bold leading-5 text-slate-600",children:fr(R.requestDate||R.createdAt)})]})]}),(0,e.jsx)("div",{className:"border-t border-slate-100 p-3",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{N(R)},className:"inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-xs font-black text-sky-700 transition-colors hover:bg-sky-100",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),"بررسی کامل درخواست"]})})]},R.id))}),(0,e.jsx)("div",{className:"hidden w-full overflow-hidden md:block",children:(0,e.jsxs)("table",{className:"w-full table-fixed text-right",children:[(0,e.jsx)("thead",{className:"bg-slate-100 text-slate-600",children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[16%]",children:"نماینده"}),(0,e.jsx)("th",{className:"w-[18%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[15%]",children:"مشتری"}),(0,e.jsx)("th",{className:"w-[30%] border-b border-slate-200 px-3 py-4 text-xs font-black lg:w-[27%]",children:"محصول"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black lg:table-cell lg:w-[7%]",children:"تعداد"}),(0,e.jsx)("th",{className:"hidden border-b border-slate-200 px-2 py-4 text-xs font-black xl:table-cell xl:w-[13%]",children:"تاریخ"}),(0,e.jsx)("th",{className:"w-[20%] border-b border-slate-200 px-2 py-4 text-xs font-black lg:w-[16%]",children:"وضعیت"}),(0,e.jsx)("th",{className:"w-[14%] border-b border-slate-200 px-2 py-4 text-center text-xs font-black lg:w-[12%]",children:"عملیات"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-slate-100",children:C.map(R=>(0,e.jsxs)("tr",{className:"transition-colors hover:bg-sky-50/60",children:[(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:R.representativeName,className:"truncate text-xs font-black text-slate-800 lg:text-sm",children:R.representativeName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:R.representativeCode,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:R.representativeCode||"—"}),(0,e.jsx)("p",{className:"mt-1 truncate text-[10px] text-slate-400",children:R.representativeCity||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:R.customerName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:R.customerName||"—"}),(0,e.jsx)("p",{dir:"ltr",title:R.customerPhone,className:"mt-1 truncate text-[10px] font-medium text-slate-500 lg:text-xs",children:R.customerPhone||"—"})]}),(0,e.jsxs)("td",{className:"min-w-0 px-3 py-4 align-top",children:[(0,e.jsx)("p",{title:R.productName,className:"truncate text-xs font-bold text-slate-800 lg:text-sm",children:R.productName||"—"}),(0,e.jsx)("p",{title:R.brand,className:"mt-1 truncate text-[10px] text-slate-500 lg:text-xs",children:R.brand||"بدون برند"})]}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top lg:table-cell",children:(0,e.jsx)("span",{className:"inline-flex rounded-lg bg-sky-50 px-2 py-1.5 text-xs font-black text-sky-700",children:Number(R.quantity||0).toLocaleString("fa-IR")})}),(0,e.jsx)("td",{className:"hidden px-2 py-4 align-top text-[10px] font-medium leading-5 text-slate-600 xl:table-cell",children:fr(R.requestDate||R.createdAt)}),(0,e.jsx)("td",{className:"min-w-0 px-2 py-4 align-top",children:(0,e.jsx)(Ua,{status:R.status})}),(0,e.jsx)("td",{className:"px-2 py-4 text-center align-top",children:(0,e.jsxs)("button",{type:"button",onClick:()=>{N(R)},className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-700 transition-colors hover:bg-sky-100 lg:h-auto lg:w-auto lg:gap-1.5 lg:px-3 lg:py-2",title:"بررسی درخواست","aria-label":"بررسی درخواست",children:[(0,e.jsx)(At,{className:"h-4 w-4"}),(0,e.jsx)("span",{className:"hidden xl:inline",children:"بررسی"})]})})]},R.id))})]})})]})]}),c?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-end bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-5",role:"dialog","aria-modal":"true","aria-label":"بررسی درخواست گارانتی",onMouseDown:R=>{R.target===R.currentTarget&&I()},children:(0,e.jsxs)("div",{className:"flex max-h-[96vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-6xl sm:rounded-3xl",children:[(0,e.jsxs)("div",{className:"flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-7",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700",children:(0,e.jsx)(Xe,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"truncate font-black text-slate-800",children:"بررسی درخواست گارانتی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-xs font-bold text-slate-500",children:c.id})]})]}),(0,e.jsx)("button",{type:"button",onClick:I,disabled:!!x,className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("div",{className:"min-h-0 overflow-y-auto p-5 md:p-7",children:[w?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800",children:[(0,e.jsx)(Ae,{className:"mt-0.5 h-5 w-5 shrink-0 text-rose-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:w})]}):null,$?(0,e.jsxs)("div",{className:"mb-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800",children:[(0,e.jsx)(je,{className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-600"}),(0,e.jsx)("p",{className:"text-sm font-bold leading-7",children:$})]}):null,(0,e.jsxs)("div",{className:"mb-6 grid gap-3 md:grid-cols-2",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"وضعیت درخواست"}),(0,e.jsx)("div",{className:"mt-2",children:(0,e.jsx)(Ua,{status:c.status})})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-4",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تاریخ ثبت"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-black text-slate-700",children:fr(c.requestDate||c.createdAt)})]})]}),(0,e.jsx)("div",{className:"mb-6",children:(0,e.jsx)(Mo,{warranty:c})}),(0,e.jsxs)("div",{className:"grid gap-5 xl:grid-cols-2",children:[(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(It,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات نماینده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام نماینده"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.representativeName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"کد نمایندگی"}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:c.representativeCode||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)(Dt,{className:"h-3.5 w-3.5"}),"شهر"]}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.representativeCity||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)($t,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"اطلاعات مشتری"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"نام مشتری"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.customerName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsxs)("p",{className:"flex items-center gap-1 text-xs font-bold text-slate-500",children:[(0,e.jsx)(na,{className:"h-3.5 w-3.5"}),"موبایل"]}),(0,e.jsx)("p",{dir:"ltr",className:"mt-1 truncate text-sm font-black text-slate-800",children:c.customerPhone||"—"})]})]})]}),(0,e.jsxs)("div",{className:"rounded-2xl border border-slate-200",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3",children:[(0,e.jsx)(bt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"کالای درخواست‌شده"})]}),(0,e.jsxs)("div",{className:"grid gap-4 p-4 sm:grid-cols-2",children:[(0,e.jsxs)("div",{className:"min-w-0 sm:col-span-2",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"محصول"}),(0,e.jsx)("p",{className:"mt-1 break-words text-sm font-black text-slate-800",children:c.productName||"—"})]}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"برند"}),(0,e.jsx)("p",{className:"mt-1 truncate text-sm font-black text-slate-800",children:c.brand||"—"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-bold text-slate-500",children:"تعداد"}),(0,e.jsxs)("p",{className:"mt-1 text-sm font-black text-sky-700",children:[Number(c.quantity||0).toLocaleString("fa-IR")," ","عدد"]})]})]})]})]}),(0,e.jsxs)("div",{className:"space-y-5",children:[(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)(gt,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"شرح مشکل"})]}),(0,e.jsx)("p",{className:"min-h-32 break-words whitespace-pre-wrap p-4 text-sm font-medium leading-8 text-slate-700",children:c.issueDescription||"شرحی ثبت نشده است."})]}),(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-slate-50",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3",children:[(0,e.jsx)(At,{className:"h-5 w-5 text-sky-600"}),(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"تصویر یا فایل پیوست"})]}),c.image&&!P?(0,e.jsx)("a",{href:mn(c.image),target:"_blank",rel:"noreferrer",className:"block bg-slate-100",children:(0,e.jsx)("img",{src:mn(c.image),alt:"پیوست درخواست گارانتی",onError:()=>{O(!0)},className:"h-64 w-full object-contain sm:h-72"})}):(0,e.jsxs)("div",{className:"flex h-64 flex-col items-center justify-center p-4 text-center sm:h-72",children:[(0,e.jsx)(Al,{className:"h-12 w-12 text-slate-300"}),(0,e.jsx)("p",{className:"mt-3 text-sm font-bold text-slate-500",children:"فایل پیوست در دسترس نیست."})]})]})]})]}),(0,e.jsxs)("div",{className:"mt-5 rounded-2xl border border-slate-200 bg-white p-4",children:[(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 flex items-center gap-2 text-sm font-black text-slate-800",children:[(0,e.jsx)(Ga,{className:"h-5 w-5 text-sky-600"}),"یادداشت ادمین"]}),(0,e.jsx)("textarea",{rows:4,value:v,disabled:c.status!=="pending"||!!x,onChange:R=>{k(R.target.value)},placeholder:"یادداشت بررسی یا علت رد درخواست را بنویسید...",className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-100"})]}),c.status!=="pending"?(0,e.jsxs)("div",{className:"mt-3 rounded-xl bg-slate-50 p-3 text-xs font-bold leading-6 text-slate-600",children:["این درخواست قبلاً توسط"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:c.decidedBy||"ادمین"})," ","در تاریخ"," ",(0,e.jsx)("span",{className:"font-black text-slate-800",children:fr(c.decidedAt)})," ","نهایی شده است."]}):null]}),c.status==="pending"?(0,e.jsx)("div",{className:"mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4",children:(0,e.jsxs)("div",{className:"flex gap-3",children:[(0,e.jsx)(rs,{className:"mt-0.5 h-6 w-6 shrink-0 text-amber-600"}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h3",{className:"font-black text-amber-900",children:"هشدار تأیید"}),(0,e.jsxs)("p",{className:"mt-1 break-words text-sm font-medium leading-7 text-amber-800",children:["با تأیید،"," ",(0,e.jsxs)("span",{className:"font-black",children:[Number(c.quantity||0).toLocaleString("fa-IR")," ","عدد"]})," ","از محصول «",(0,e.jsx)("span",{className:"font-black",children:c.productName}),"» از انبار نماینده کم می‌شود و پیامک تأیید برای مشتری ارسال خواهد شد."]})]})]})}):null,(0,e.jsxs)("div",{className:"mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("button",{type:"button",onClick:I,disabled:!!x,className:"min-h-11 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",children:"بستن"}),c.status==="pending"?(0,e.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,e.jsxs)("button",{type:"button",disabled:!!x,onClick:()=>{_("rejected")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-black text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60",children:[x==="rejected"?(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(ot,{className:"h-5 w-5"}),"رد درخواست"]}),(0,e.jsxs)("button",{type:"button",disabled:!!x,onClick:()=>{_("approved")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-700 to-teal-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-700/20 transition-all hover:-translate-y-0.5 hover:from-emerald-800 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",children:[x==="approved"?(0,e.jsx)(me,{className:"h-5 w-5 animate-spin"}):(0,e.jsx)(je,{className:"h-5 w-5"}),"تأیید و کسر از انبار"]})]}):(0,e.jsxs)("div",{className:"flex items-center gap-2 text-sm font-black text-slate-600",children:[c.status==="approved"?(0,e.jsx)(je,{className:"h-5 w-5 text-emerald-600"}):(0,e.jsx)(ot,{className:"h-5 w-5 text-rose-600"}),"این درخواست نهایی شده است."]})]})]})]})}):null]})},qa="https://myshop-backend-8nu7.onrender.com/api",Qr=qa.endsWith("/api")?qa.slice(0,-4):qa,Oa=()=>localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||localStorage.getItem("token")||"",pn=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(null),[p,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(!1),[c,N]=(0,a.useState)(!1),[v,k]=(0,a.useState)(null),[x,g]=(0,a.useState)({title:"",content:""}),w=async()=>{try{d(!0),n(null);const S=Oa(),f=await fetch(`${Qr}/api/notes`,{headers:{Authorization:`Bearer ${S}`,Accept:"application/json"}}),I=await f.json();if(!f.ok||!I.success)throw new Error(I.error||"خطا در دریافت یادداشت‌ها");if(!Array.isArray(I.data))throw new Error("فرمت داده‌های یادداشت‌ها نامعتبر است.");r(I.data)}catch(S){console.error("خطا در دریافت یادداشت‌ها:",S),n(S instanceof Error?S.message:"خطا در ارتباط با سرور")}finally{d(!1)}};(0,a.useEffect)(()=>{w()},[]);const o=()=>{c||(h(!1),k(null),g({title:"",content:""}))},$=()=>{k(null),g({title:"",content:""}),h(!0)},q=S=>{k(S),g({title:S.title||"",content:S.content||""}),h(!0)},P=async S=>{if(window.confirm("آیا از حذف این یادداشت مطمئن هستید؟"))try{const f=Oa(),I=await fetch(`${Qr}/api/notes/${S}`,{method:"DELETE",headers:{Authorization:`Bearer ${f}`,Accept:"application/json"}}),_=await I.json();if(!I.ok||!_.success)throw new Error(_.error||"خطا در حذف یادداشت");r(R=>R.filter(V=>V.id!==S))}catch(f){console.error("خطا در حذف یادداشت:",f),alert(f instanceof Error?f.message:"خطا در ارتباط با سرور")}},O=async S=>{S.preventDefault();const f=x.title.trim(),I=x.content.trim();if(!f||!I){alert("عنوان و متن یادداشت الزامی است.");return}try{N(!0);const _=Oa(),R=!!v?.id,V=R?`${Qr}/api/notes/${v?.id}`:`${Qr}/api/notes`,Q=await fetch(V,{method:R?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${_}`,Accept:"application/json"},body:JSON.stringify({title:f,content:I,color:"blue"})}),A=await Q.json();if(!Q.ok||!A.success||!A.data)throw new Error(A.error||"خطا در ذخیره یادداشت");const F=A.data;r(R?y=>y.map(m=>m.id===F.id?F:m):y=>[F,...y]),o()}catch(_){console.error("خطا در ذخیره یادداشت:",_),alert(_ instanceof Error?_.message:"خطا در ارتباط با سرور")}finally{N(!1)}},G=t.filter(S=>{const f=(S.title||"").toLowerCase(),I=(S.content||"").toLowerCase(),_=p.trim().toLowerCase();return f.includes(_)||I.includes(_)}),C=S=>{if(!S)return"تاریخ نامشخص";const f=new Date(S);return Number.isNaN(f.getTime())?"تاریخ نامشخص":f.toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})};return(0,e.jsxs)("div",{dir:"rtl",className:"min-h-[calc(100vh-120px)] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/60 p-3 md:p-6",children:[(0,e.jsxs)("div",{className:"mx-auto max-w-6xl",children:[(0,e.jsxs)("section",{className:"mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm",children:[(0,e.jsxs)("div",{className:"relative overflow-hidden bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 px-5 py-6 text-white md:px-7",children:[(0,e.jsx)("div",{className:"absolute -left-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"}),(0,e.jsx)("div",{className:"absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl"}),(0,e.jsxs)("div",{className:"relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-2 flex items-center gap-2 text-blue-100",children:[(0,e.jsx)(Kt,{className:"h-5 w-5"}),(0,e.jsx)("span",{className:"text-sm font-bold",children:"فضای شخصی شما"})]}),(0,e.jsx)("h2",{className:"text-2xl font-black md:text-3xl",children:"یادداشت‌های من"}),(0,e.jsx)("p",{className:"mt-2 text-sm font-medium leading-7 text-blue-50",children:"یادداشت‌های شخصی خود را ثبت، جست‌وجو، ویرایش و مدیریت کنید."})]}),(0,e.jsxs)("button",{type:"button",onClick:$,className:"relative flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 font-black text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-xl active:translate-y-0",children:[(0,e.jsx)(wr,{className:"h-5 w-5"}),"یادداشت جدید"]})]})]}),(0,e.jsx)("div",{className:"p-4 md:p-5",children:(0,e.jsxs)("div",{className:"group relative",children:[(0,e.jsx)(ut,{className:"pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-hover:text-blue-600 group-focus-within:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-400"}),(0,e.jsx)("input",{type:"text",placeholder:"جست‌وجو در عنوان یا متن یادداشت‌ها...",value:p,onChange:S=>{i(S.target.value)},className:"w-full rounded-xl border border-slate-300 bg-white py-3 pr-10 pl-4 text-sm text-slate-800 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-blue-400 hover:shadow-md focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400 dark:hover:border-blue-500 dark:focus:bg-gray-800 dark:focus:ring-blue-900/30"})]})})]}),s?(0,e.jsx)("div",{className:"flex items-center justify-center py-24",children:(0,e.jsx)("div",{className:"h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"})}):b?(0,e.jsxs)("div",{className:"rounded-2xl border border-red-200 bg-red-50 p-6 text-center",children:[(0,e.jsx)("p",{className:"font-bold text-red-700",children:b}),(0,e.jsxs)("button",{type:"button",onClick:()=>{w()},className:"mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700",children:[(0,e.jsx)(Re,{className:"h-4 w-4"}),"تلاش مجدد"]})]}):G.length===0?(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-white py-20 text-center shadow-sm",children:[(0,e.jsx)("div",{className:"mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500",children:(0,e.jsx)(Kt,{className:"h-8 w-8"})}),(0,e.jsx)("p",{className:"text-lg font-black text-slate-700",children:p?"یادداشتی پیدا نشد":"هنوز یادداشتی ندارید"}),(0,e.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:p?"عبارت جست‌وجو را تغییر دهید.":"با دکمهٔ «یادداشت جدید» اولین یادداشت خود را بسازید."})]}):(0,e.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:G.map(S=>(0,e.jsxs)("article",{className:"group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10",children:[(0,e.jsx)("div",{className:"h-1.5 bg-gradient-to-l from-blue-700 via-blue-500 to-cyan-400"}),(0,e.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,e.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex min-w-0 items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110",children:(0,e.jsx)(Kt,{className:"h-5 w-5"})}),(0,e.jsx)("h3",{className:"line-clamp-2 min-w-0 pt-1 text-lg font-black text-slate-800",children:S.title||"بدون عنوان"})]}),(0,e.jsxs)("div",{className:"flex shrink-0 items-center gap-1",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{q(S)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600",title:"ویرایش یادداشت","aria-label":"ویرایش یادداشت",children:(0,e.jsx)(er,{className:"h-4 w-4"})}),(0,e.jsx)("button",{type:"button",onClick:()=>{P(S.id)},className:"rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600",title:"حذف یادداشت","aria-label":"حذف یادداشت",children:(0,e.jsx)(He,{className:"h-4 w-4"})})]})]}),(0,e.jsx)("p",{className:"mb-5 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-slate-600",children:S.content||"بدون متن"}),(0,e.jsxs)("div",{className:"flex items-center justify-between gap-3 border-t border-slate-100 pt-3",children:[(0,e.jsxs)("span",{className:"min-w-0 truncate text-xs font-medium text-slate-400",children:["آخرین ویرایش: ",C(S.updatedAt||S.createdAt)]}),(0,e.jsx)("span",{className:"shrink-0 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-black text-blue-700",children:"یادداشت شخصی"})]})]})]},S.id))})]}),u?(0,e.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm",onClick:o,role:"presentation",children:(0,e.jsxs)("div",{className:"w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:S=>{S.stopPropagation()},role:"dialog","aria-modal":"true","aria-label":v?"ویرایش یادداشت":"یادداشت جدید",children:[(0,e.jsx)("div",{className:"bg-gradient-to-l from-blue-700 via-blue-600 to-cyan-500 p-5 text-white",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15",children:(0,e.jsx)(Kt,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-lg font-black",children:v?"ویرایش یادداشت":"یادداشت جدید"}),(0,e.jsx)("p",{className:"mt-1 text-xs font-medium text-blue-100",children:"عنوان و متن یادداشت شخصی خود را وارد کنید."})]})]}),(0,e.jsx)("button",{type:"button",onClick:o,disabled:c,className:"rounded-lg p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-50","aria-label":"بستن پنجره",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]})}),(0,e.jsxs)("form",{onSubmit:O,className:"p-5",children:[(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsx)("label",{htmlFor:"note-title",className:"mb-2 block text-sm font-black text-slate-700",children:"عنوان یادداشت"}),(0,e.jsx)("input",{id:"note-title",type:"text",value:x.title,onChange:S=>{g(f=>({...f,title:S.target.value}))},className:"w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"مثال: پیگیری سفارش هفتهٔ آینده",maxLength:120,required:!0,disabled:c})]}),(0,e.jsxs)("div",{className:"mb-6",children:[(0,e.jsx)("label",{htmlFor:"note-content",className:"mb-2 block text-sm font-black text-slate-700",children:"متن یادداشت"}),(0,e.jsx)("textarea",{id:"note-content",value:x.content,onChange:S=>{g(f=>({...f,content:S.target.value}))},rows:7,className:"w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100",placeholder:"متن یادداشت خود را اینجا بنویسید...",maxLength:3e3,required:!0,disabled:c})]}),(0,e.jsxs)("div",{className:"flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-end",children:[(0,e.jsx)("button",{type:"button",onClick:o,disabled:c,className:"rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",children:"انصراف"}),(0,e.jsxs)("button",{type:"submit",disabled:c,className:"flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-700 to-cyan-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:from-blue-800 hover:to-cyan-700 disabled:cursor-not-allowed disabled:opacity-70",children:[(0,e.jsx)(Za,{className:"h-4 w-4"}),c?"در حال ذخیره...":v?"ذخیرهٔ تغییرات":"ثبت یادداشت"]})]})]})]})}):null]})},Lo="https://myshop-backend-8nu7.onrender.com/api".replace(/\/+$/,""),_a=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||""}`,Accept:"application/json","Content-Type":"application/json"}),Uo=({apiUrl:t})=>{const[r,s]=(0,a.useState)([]),[d,b]=(0,a.useState)(!0),[n,p]=(0,a.useState)(""),[i,u]=(0,a.useState)(!1),[h,c]=(0,a.useState)(""),[N,v]=(0,a.useState)(""),[k,x]=(0,a.useState)(!1),[g,w]=(0,a.useState)(null),[o,$]=(0,a.useState)(null),q=String(t||Lo).replace(/\/+$/,""),P=(0,a.useCallback)(async()=>{b(!0),p("");try{const C=await oe.get(`${q}/announcements`,{headers:_a()});if(C.data?.success)s(C.data.data||[]);else throw new Error(C.data?.error||"خطا در دریافت اطلاعیه‌ها")}catch(C){p(C?.response?.data?.error||C?.message||"خطا در دریافت")}finally{b(!1)}},[q]);(0,a.useEffect)(()=>{P()},[P]);const O=async C=>{if(C.preventDefault(),!(!h.trim()||!N.trim())){x(!0),w(null);try{const S=await oe.post(`${q}/announcements`,{title:h.trim(),message:N.trim()},{headers:_a()});if(S.data?.success)w(`اطلاعیه ثبت شد! ${S.data?.sms?.sent||0} پیامک موفق${S.data?.sms?.failed?`، ${S.data.sms.failed} ناموفق`:""}.`),c(""),v(""),u(!1),await P();else throw new Error(S.data?.error||"خطا")}catch(S){w(null),p(S?.response?.data?.error||S?.message||"خطا در ثبت")}finally{x(!1)}}},G=async C=>{if(window.confirm("آیا از حذف این اطلاعیه مطمئن هستید؟")){$(C);try{await oe.delete(`${q}/announcements/${C}`,{headers:_a()}),await P()}catch(S){p(S?.response?.data?.error||"خطا در حذف")}finally{$(null)}}};return(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6 pb-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white",children:(0,e.jsx)(jr,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl",children:"اعلام اطلاعیه‌ها"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"اطلاعیه‌ها را مدیریت کنید و به‌طور خودکار به همه نمایندگان پیامک ارسال کنید."})]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsxs)("button",{type:"button",onClick:P,disabled:d,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[d?(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Re,{className:"h-4 w-4"}),"بروزرسانی"]}),(0,e.jsxs)("button",{type:"button",onClick:()=>{u(!0),w(null),p("")},className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-600 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-lg transition hover:from-amber-700 hover:to-orange-700",children:[(0,e.jsx)(Xt,{className:"h-4 w-4"}),"ثبت اطلاعیه جدید"]})]})]})}),n?(0,e.jsx)("section",{className:"rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(Ae,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{children:n})]})}):null,g?(0,e.jsx)("section",{className:"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs leading-6 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300",children:(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(je,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{children:g})]})}):null,(0,e.jsxs)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:[(0,e.jsxs)("h3",{className:"text-lg font-black text-gray-800 dark:text-gray-100",children:["لیست اطلاعیه‌ها (",r.length,")"]}),d?(0,e.jsx)("div",{className:"flex min-h-[200px] items-center justify-center",children:(0,e.jsx)(me,{className:"h-8 w-8 animate-spin text-amber-500"})}):r.length===0?(0,e.jsxs)("div",{className:"flex min-h-[200px] flex-col items-center justify-center text-center",children:[(0,e.jsx)(vr,{className:"mb-3 h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"هنوز اطلاعیه‌ای ثبت نشده است."})]}):(0,e.jsx)("div",{className:"mt-4 space-y-3",children:r.map(C=>{const S=C.smsResults?.filter(I=>I.success).length||0,f=C.smsResults?.filter(I=>!I.success).length||0;return(0,e.jsx)("article",{className:"rounded-xl border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800",children:(0,e.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2",children:[(0,e.jsx)(jr,{className:"h-5 w-5 text-amber-600 dark:text-amber-400"}),(0,e.jsx)("h4",{className:"break-words text-base font-black text-gray-800 dark:text-gray-100",children:C.title})]}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300",children:C.message}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400",children:[(0,e.jsxs)("span",{children:["📅 ",C.persianDate||C.createdAt?.slice(0,10)||"—"]}),(0,e.jsxs)("span",{children:["👤 ",C.createdBy||"ادمین"]}),S>0?(0,e.jsxs)("span",{className:"rounded-full bg-emerald-100 px-2 py-1 font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",children:["✅ ",S," پیامک موفق"]}):null,f>0?(0,e.jsxs)("span",{className:"rounded-full bg-red-100 px-2 py-1 font-bold text-red-700 dark:bg-red-900/30 dark:text-red-400",children:["❌ ",f," ناموفق"]}):null]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>G(C.id),disabled:o===C.id,className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition hover:bg-red-200 disabled:opacity-50 dark:bg-red-900/30 dark:text-red-400",children:o===C.id?(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(He,{className:"h-4 w-4"})})]})},C.id)})})]}),i?(0,e.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm",onClick:()=>!k&&u(!1),children:(0,e.jsxs)("div",{className:"max-h-[92vh] w-full max-w-lg overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-2xl",onClick:C=>C.stopPropagation(),children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-amber-100 bg-gradient-to-l from-amber-50 to-orange-50 p-5",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white",children:(0,e.jsx)(jr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"font-black text-slate-800",children:"ثبت اطلاعیه جدید"}),(0,e.jsx)("p",{className:"text-xs text-slate-500",children:"به همه نمایندگان پیامک ارسال می‌شود"})]})]}),(0,e.jsx)("button",{type:"button",onClick:()=>!k&&u(!1),className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200",children:(0,e.jsx)(we,{className:"h-5 w-5"})})]}),(0,e.jsxs)("form",{onSubmit:O,className:"max-h-[calc(92vh-180px)] overflow-y-auto p-5",children:[(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["عنوان اطلاعیه ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("input",{type:"text",value:h,onChange:C=>c(C.target.value),placeholder:"مثال: تغییر ساعات کاری",required:!0,maxLength:100,className:"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100"})]})}),(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsxs)("label",{className:"block",children:[(0,e.jsxs)("span",{className:"mb-2 block text-sm font-bold text-slate-700",children:["متن اطلاعیه ",(0,e.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,e.jsx)("textarea",{rows:5,value:N,onChange:C=>v(C.target.value),placeholder:"متن کامل اطلاعیه را بنویسید...",required:!0,maxLength:1e3,className:"w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium leading-7 text-slate-800 outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100"})]})}),(0,e.jsx)("div",{className:"rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700",children:(0,e.jsxs)("p",{className:"flex items-center gap-2",children:[(0,e.jsx)(Xt,{className:"h-4 w-4"}),"بعد از ثبت، به‌طور خودکار به همه نماینده‌های فعال پیامک ارسال می‌شود."]})}),(0,e.jsxs)("div",{className:"mt-5 flex items-center justify-end gap-3 border-t border-slate-100 pt-4",children:[(0,e.jsx)("button",{type:"button",onClick:()=>!k&&u(!1),disabled:k,className:"rounded-xl bg-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-300 disabled:opacity-50",children:"انصراف"}),(0,e.jsx)("button",{type:"submit",disabled:k||!h.trim()||!N.trim(),className:"inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-600 to-orange-600 px-5 py-2.5 text-sm font-black text-white shadow-lg disabled:opacity-50",children:k?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}),"در حال ثبت و ارسال..."]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Xt,{className:"h-4 w-4"}),"ثبت و ارسال"]})})]})]})]})}):null]})},qo="https://myshop-backend-8nu7.onrender.com/api".replace(/\/+$/,""),Oo=()=>({Authorization:`Bearer ${localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||""}`,Accept:"application/json"}),_o=()=>{const[t,r]=(0,a.useState)([]),[s,d]=(0,a.useState)(!0),[b,n]=(0,a.useState)(""),p=(0,a.useCallback)(async()=>{d(!0),n("");try{const i=await oe.get(`${qo}/announcements/my`,{headers:Oo()});if(i.data?.success)r(i.data.data||[]);else throw new Error(i.data?.error||"خطا")}catch(i){n(i?.response?.data?.error||i?.message||"خطا در دریافت")}finally{d(!1)}},[]);return(0,a.useEffect)(()=>{p()},[p]),(0,e.jsxs)("div",{dir:"rtl",className:"space-y-6 pb-6",children:[(0,e.jsx)("section",{className:"rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white",children:(0,e.jsx)(vr,{className:"h-6 w-6"})}),(0,e.jsxs)("div",{className:"min-w-0",children:[(0,e.jsx)("h2",{className:"text-lg font-black text-gray-800 dark:text-gray-100 sm:text-2xl",children:"اطلاع‌رسانی"}),(0,e.jsx)("p",{className:"mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400",children:"اطلاعیه‌ها و خبرهای جدید از مدیریت سیستم"})]})]}),(0,e.jsxs)("button",{type:"button",onClick:p,disabled:s,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200",children:[s?(0,e.jsx)(me,{className:"h-4 w-4 animate-spin"}):(0,e.jsx)(Re,{className:"h-4 w-4"}),"بروزرسانی"]})]})}),b?(0,e.jsx)("section",{className:"rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300",children:(0,e.jsxs)("div",{className:"flex items-start gap-2",children:[(0,e.jsx)(Ae,{className:"mt-1 h-4 w-4 shrink-0"}),(0,e.jsx)("p",{children:b})]})}):null,(0,e.jsx)("section",{className:"min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5",children:s?(0,e.jsx)("div",{className:"flex min-h-[200px] items-center justify-center",children:(0,e.jsx)(me,{className:"h-8 w-8 animate-spin text-cyan-500"})}):t.length===0?(0,e.jsxs)("div",{className:"flex min-h-[200px] flex-col items-center justify-center text-center",children:[(0,e.jsx)(vr,{className:"mb-3 h-12 w-12 text-gray-300 dark:text-gray-600"}),(0,e.jsx)("p",{className:"text-sm font-bold text-gray-500 dark:text-gray-400",children:"هنوز اطلاعیه‌ای دریافت نشده است."})]}):(0,e.jsx)("div",{className:"space-y-3",children:t.map(i=>(0,e.jsx)("article",{className:"rounded-xl border border-cyan-200 bg-gradient-to-l from-cyan-50 to-white p-4 dark:border-cyan-900/30 dark:from-cyan-950/20 dark:to-gray-800",children:(0,e.jsxs)("div",{className:"flex items-start gap-3",children:[(0,e.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",children:(0,e.jsx)(vr,{className:"h-5 w-5"})}),(0,e.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,e.jsx)("h4",{className:"break-words text-base font-black text-gray-800 dark:text-gray-100",children:i.title}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300",children:i.message}),(0,e.jsxs)("div",{className:"mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400",children:[(0,e.jsxs)("span",{children:["📅 ",i.persianDate||i.createdAt?.slice(0,10)||"—"]}),(0,e.jsxs)("span",{children:["👤 ",i.createdBy||"ادمین"]})]})]})]})},i.id))})})]})},Bo=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},Wo=t=>Array.isArray(t)?t:Array.isArray(t.data)?t.data:t.data&&Array.isArray(t.data.products)?t.data.products:Array.isArray(t.products)?t.products:[],Xr=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage]){for(const d of t){const b=s.getItem(d);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const d of r){const b=s.getItem(d);if(b)try{const n=JSON.parse(b),p=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(p)return String(p).replace(/^Bearer\s+/i,"").trim()}catch{continue}}}return""},Ba=()=>{const t=Xr();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},hn=(t,r)=>{if(oe.isAxiosError(t)){const s=t.response?.data;return s?.error||s?.message||t.message||r}return t instanceof Error?t.message:r},Vo=({apiUrl:t})=>{const[r,s]=(0,a.useState)([]),[d,b]=(0,a.useState)(null),[n,p]=(0,a.useState)(!1),[i,u]=(0,a.useState)(null),h=(0,a.useMemo)(()=>Bo(t),[t]),c=(0,a.useRef)(0),N=(0,a.useRef)(null),v=(0,a.useCallback)(async()=>{const k=c.current+1;c.current=k,N.current&&N.current.abort();const x=new AbortController;N.current=x;const g=`${h}/products`;try{p(!0),console.log("📡 دریافت محصولات از:",g);const w=await oe.get(g,{signal:x.signal,params:{_t:Date.now()},headers:Ba(),withCredentials:!!Xr()});if(x.signal.aborted||k!==c.current)return null;const o=w.data;if(o?.success===!1)throw new Error(o.error||o.message||"دریافت محصولات ناموفق بود.");const $=Wo(o);return s($),console.log("✅ تعداد محصولات دریافت‌شده:",$.length),$}catch(w){return oe.isCancel(w)||x.signal.aborted||k!==c.current||console.error("❌ خطا در بارگذاری محصولات:",w),null}finally{k===c.current&&p(!1)}},[h]);return(0,a.useEffect)(()=>(v(),()=>{c.current+=1,N.current&&N.current.abort()}),[v]),{products:r,editingProduct:d,setEditingProduct:b,loadProducts:v,handleEdit:(0,a.useCallback)(async k=>{try{const x=Xr();await oe.put(`${h}/products/${encodeURIComponent(String(k.id))}`,k,{headers:Ba(),withCredentials:!!x}),await v(),b(null)}catch(x){console.error("❌ خطا در ویرایش محصول:",x),alert(hn(x,"خطا در ویرایش محصول"))}},[h,v]),handleDelete:(0,a.useCallback)(async k=>{const x=String(k).trim();if(!x){alert("شناسه محصول معتبر نیست.");return}if(i)return;if(!r.some(w=>String(w.id)===x)){alert("این محصول در لیست فعلی وجود ندارد.");return}if(!window.confirm("آیا از حذف این محصول مطمئن هستید؟"))return;const g=r;try{const w=Xr();u(x),p(!0);const o=(await oe.delete(`${h}/products/${encodeURIComponent(x)}`,{headers:Ba(),withCredentials:!!w})).data;if(o?.success===!1)throw new Error(o.error||o.message||"حذف محصول توسط سرور انجام نشد.");s(q=>q.filter(P=>String(P.id)!==x));const $=await v();if($&&$.some(q=>String(q.id)===x))throw s(g),new Error("سرور محصول را حذف نکرد؛ محصول همچنان در لیست وجود دارد.");console.log("✅ محصول واقعاً حذف شد:",x)}catch(w){console.error("❌ خطا در حذف محصول:",w),s(g),alert(hn(w,"حذف محصول انجام نشد."))}finally{u(null),p(!1)}},[h,i,v,r]),totalProducts:r.length,totalPrice:(0,a.useMemo)(()=>r.reduce((k,x)=>k+(Number(x.price)||0),0),[r]),loading:n,deletingProductId:i}},Qo=({apiUrl:t,representativeId:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[p,i]=(0,a.useState)(null),[u,h]=(0,a.useState)(null),c=(0,a.useRef)(0),N=String(t||"").trim().replace(/\/+$/,""),v=(0,a.useCallback)(async g=>{const w=String(g||"").trim();if(!w){c.current+=1,d([]),i(null),n(!1);return}const o=++c.current;n(!0),i(null);try{const $=await oe.get(`${N}/representatives/${encodeURIComponent(w)}/files`,{headers:{Accept:"application/json"},params:{_t:Date.now()}});if(o!==c.current)return;if($.data?.success===!1||!Array.isArray($.data?.files))throw new Error($.data?.error||"پاسخ فهرست فایل‌های نماینده معتبر نیست.");d($.data.files)}catch($){if(o!==c.current)return;const q=oe.isAxiosError($)?$.response?.data?.error||`دریافت فایل‌ها ناموفق بود (HTTP ${$.response?.status??"بدون پاسخ"}).`:$ instanceof Error?$.message:"خطا در دریافت فایل‌های نماینده.";console.error("خطا در بارگذاری پرونده‌های نماینده:",$),d([]),i(q)}finally{o===c.current&&n(!1)}},[N]);(0,a.useEffect)(()=>(r?(d([]),v(r)):(c.current+=1,d([]),i(null),n(!1),h(null)),()=>{c.current+=1}),[r,v]);const k=(0,a.useCallback)(async g=>{if(!r)throw new Error("ابتدا یک نماینده را انتخاب کنید.");const w=new FormData;w.append("file",g);try{await oe.post(`${N}/representatives/${encodeURIComponent(r)}/files`,w,{headers:{Accept:"application/json"}}),await v(r)}catch(o){const $=oe.isAxiosError(o)?o.response?.data?.error||`آپلود فایل ناموفق بود (HTTP ${o.response?.status??"بدون پاسخ"}).`:o instanceof Error?o.message:"خطا در آپلود فایل.";throw new Error($)}},[N,r,v]);return{files:s,loadingFiles:b,filesError:p,viewingFile:u,setViewingFile:h,loadRepresentativeFiles:v,uploadFile:k,deleteFile:async g=>{if(!r)return;const w=s.find(o=>o.id===g);if(w&&window.confirm(`آیا از حذف فایل «${w.name}» مطمئن هستید؟`))try{await oe.delete(`${N}/representatives/${encodeURIComponent(r)}/files/${encodeURIComponent(w.name)}`),await v(r),u?.id===g&&h(null)}catch(o){console.error("خطا در حذف فایل:",o),window.alert("خطا در حذف فایل")}}}},Ho=(t,r=5e3)=>{const s=(0,a.useRef)(t);(0,a.useEffect)(()=>{s.current=t},[t]),(0,a.useEffect)(()=>{const d=setInterval(()=>{s.current()},r);return()=>clearInterval(d)},[r])},wt=t=>String(t??"").trim().replace(/[۰-۹]/g,r=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(r))).replace(/[٠-٩]/g,r=>String("٠١٢٣٤٥٦٧٨٩".indexOf(r))),nt=t=>String(t??"").trim(),Jo=t=>String(t||"").trim().replace(/\/+$/,"").replace(/\/api$/,""),Hr=(t,r)=>{if(!oe.isAxiosError(t))return t instanceof Error&&t.message?t.message:r;const s=t.response?.data;return s?.error?s.error:s?.message?s.message:t.response?.status===400?"اطلاعات ارسال‌شده معتبر نیست.":t.response?.status===401?"نشست کاربری منقضی یا نامعتبر است؛ دوباره وارد شوید.":t.response?.status===403?"اجازهٔ دسترسی به این بخش را ندارید.":t.response?.status===404?"مسیر نمایندگان در بک‌اند پیدا نشد.":t.response?r:"ارتباط با بک‌اند برقرار نشد؛ اجرای سرور را بررسی کنید."},gn=t=>({...t,name:nt(t.name),email:nt(t.email),code:nt(t.code),province:nt(t.province),city:nt(t.city),phone:nt(t.phone),startDate:nt(t.startDate),address:nt(t.address),description:nt(t.description),shopDescription:nt(t.shopDescription),status:t.status==="inactive"?"inactive":"active",orders:Number(t.orders)||0,depositAmount:t.depositAmount??"0",guaranteeCheck:t.guaranteeCheck??"0",totalFinancialCommitment:t.totalFinancialCommitment??"0",shipmentsCount:Number(t.shipmentsCount)||0,storeItemsCount:Number(t.storeItemsCount)||0,storeItemsTotalValue:Number(t.storeItemsTotalValue)||0,returnRequestsCount:Number(t.returnRequestsCount)||0,last10DaysSales:Number(t.last10DaysSales)||0,averageSales:Number(t.averageSales)||0}),Yo=({apiUrl:t,isAdmin:r})=>{const[s,d]=(0,a.useState)([]),[b,n]=(0,a.useState)(!1),[p,i]=(0,a.useState)(null),u=(0,a.useRef)(0),h=(0,a.useRef)(!1),c=(0,a.useRef)(!1),N=(0,a.useMemo)(()=>Jo(t),[t]),v=(0,a.useCallback)((g=!1)=>{const w=localStorage.getItem("token")||sessionStorage.getItem("token")||localStorage.getItem("accessToken")||sessionStorage.getItem("accessToken")||localStorage.getItem("authToken")||sessionStorage.getItem("authToken")||"";if(!w)throw new Error("توکن ورود پیدا نشد؛ دوباره وارد شوید.");return{Accept:"application/json",Authorization:`Bearer ${w}`,...g?{"Content-Type":"application/json"}:{}}},[]),k=(0,a.useCallback)(()=>{if(!r)throw new Error("این عملیات فقط برای ادمین مجاز است.")},[r]),x=(0,a.useCallback)(async(g=!1)=>{if(!r||g&&h.current)return;g&&(h.current=!0);const w=++u.current;g||(n(!0),i(null));try{const o=(await oe.get(`${N}/api/representatives`,{headers:v(),params:{_t:Date.now()}})).data;if(o.success===!1)throw new Error(o.error||"خطا در بارگذاری نمایندگان.");if(!c.current||w!==u.current)return;d(Array.isArray(o.data)?o.data:[]),g||i(null)}catch(o){if(!c.current||w!==u.current)return;const $=Hr(o,"خطا در بارگذاری نمایندگان.");console.error("خطا در بارگذاری نمایندگان:",$),g||i($)}finally{g&&(h.current=!1),c.current&&w===u.current&&!g&&n(!1)}},[v,r,N]);return(0,a.useEffect)(()=>{c.current=!0,r?x():(d([]),n(!1),i(null));const g=()=>{r&&document.visibilityState==="visible"&&x(!0)};return r&&(window.addEventListener("focus",g),document.addEventListener("visibilitychange",g)),()=>{c.current=!1,u.current+=1,window.removeEventListener("focus",g),document.removeEventListener("visibilitychange",g)}},[r,x]),Ho(x,5e3),{representatives:s,loading:b,error:p,loadRepresentatives:x,addRepresentative:(0,a.useCallback)(async g=>{k();try{const w=(await oe.post(`${N}/api/representatives`,gn(g),{headers:v(!0)})).data;if(w.success===!1||!w.data)throw new Error(w.error||"بک‌اند اطلاعات نمایندهٔ جدید را برنگرداند.");const o=w.data;return u.current+=1,d($=>$.some(q=>wt(q.id)===wt(o.id))?$.map(q=>wt(q.id)===wt(o.id)?o:q):[...$,o]),i(null),o}catch(w){const o=Hr(w,"خطا در ثبت نماینده.");throw i(o),window.alert(o),w}},[k,v,N]),updateRepresentative:(0,a.useCallback)(async(g,w)=>{k();const o=wt(g);if(!o)throw new Error("شناسه نماینده برای ویرایش معتبر نیست.");try{const $=(await oe.put(`${N}/api/representatives/${encodeURIComponent(o)}`,gn(w),{headers:v(!0)})).data;if($.success===!1||!$.data)throw new Error($.error||"بک‌اند اطلاعات نمایندهٔ ویرایش‌شده را برنگرداند.");const q=$.data;return u.current+=1,d(P=>P.map(O=>wt(O.id)===o?q:O)),i(null),q}catch($){const q=Hr($,"خطا در ویرایش نماینده.");throw i(q),window.alert(q),$}},[k,v,N]),deleteRepresentative:(0,a.useCallback)(async g=>{k();const w=wt(g);if(!w)throw new Error("شناسه نماینده برای حذف معتبر نیست.");try{const o=(await oe.delete(`${N}/api/representatives/${encodeURIComponent(w)}`,{headers:v()})).data;if(o.success===!1)throw new Error(o.error||"خطا در حذف نماینده.");u.current+=1,d($=>$.filter(q=>wt(q.id)!==w)),i(null)}catch(o){const $=Hr(o,"خطا در حذف نماینده.");throw i($),window.alert($),o}},[k,v,N])}},Ko=t=>{const r=String(t||"").trim().replace(/\/+$/,"");return r?r.endsWith("/api")?r:`${r}/api`:"http://localhost:5000/api"},xt=Ko("https://myshop-backend-8nu7.onrender.com/api"),Ln=["dashboard","products","representatives","upload","shipments","warehouse","sales-reports","return-requests","support-requests","reports","users","settings","notes","warranties","announcements"],Ka=["dashboard","products","orders","my-shipments","warehouse","sales-reports","return-request","support","profile","notes","warranties","notifications"],Go=()=>{const t=localStorage.getItem("activeSection")||sessionStorage.getItem("activeSection"),r=[...Ln,...Ka];return t&&r.includes(t)?t:"dashboard"},Un=()=>{try{const t=localStorage.getItem("authUser")||sessionStorage.getItem("authUser");return t?JSON.parse(t):null}catch{return null}},Xo=()=>{const t=Un();if(t?.role==="admin"||t?.role==="representative")return t.role;const r=localStorage.getItem("userRole")||sessionStorage.getItem("userRole");return r==="admin"?"admin":r==="representative"||r==="user"?"representative":null},Zr=()=>{const t=["token","accessToken","authToken","adminToken","jwt","access_token"],r=["authUser","user","currentUser","auth","admin","session"];for(const s of[sessionStorage,localStorage])for(const d of t){const b=s.getItem(d);if(b&&b!=="null"&&b!=="undefined")return b.replace(/^Bearer\s+/i,"").trim()}for(const s of[sessionStorage,localStorage])for(const d of r){const b=s.getItem(d);if(b)try{const n=JSON.parse(b),p=n?.token||n?.accessToken||n?.authToken||n?.access_token||n?.data?.token;if(p)return String(p).replace(/^Bearer\s+/i,"").trim()}catch{continue}}return""},un=()=>{const t=Zr();return{Accept:"application/json",...t?{Authorization:`Bearer ${t}`}:{}}},Zo=t=>{if(Array.isArray(t))return t;const r=t;if(Array.isArray(r?.data))return r.data;if(Array.isArray(r?.reports))return r.reports;if(Array.isArray(r?.salesReports))return r.salesReports;if(r?.data&&typeof r.data=="object"){const s=r.data?.data;if(Array.isArray(s))return s}return[]};function ad(){const t=(0,a.useMemo)(()=>Un(),[]),r=(0,a.useMemo)(()=>Xo(),[]),s=r==="representative",[d,b]=(0,a.useState)(!0),[n,p]=(0,a.useState)(Go),[i,u]=(0,a.useState)(null),[h,c]=(0,a.useState)(null),[N,v]=(0,a.useState)([]),[k,x]=(0,a.useState)([]),g=(0,a.useCallback)(async()=>{if(!s&&Zr())try{const l=await oe.get(`${xt}/shipments`,{withCredentials:!0,headers:un(),params:{_:Date.now()}});if(l.data.success===!1)throw new Error(l.data.error||"دریافت بارها ناموفق بود.");v(Array.isArray(l.data.data)?l.data.data:[])}catch(l){console.error("❌ خطا در دریافت بارها:",l)}},[s]),w=(0,a.useCallback)(async()=>{if(!s&&Zr()){for(const l of["/sales-from-warehouse/admin/all","/sales-reports","/sale-reports","/sales","/sales/announcements"])try{const z=await oe.get(`${xt}${l}`,{withCredentials:!0,headers:un(),params:{_:Date.now()}}),Y=Zo(z.data);x(Y),console.log(`✅ گزارش‌های فروش از «${l}» دریافت شد (${Y.length} مورد)`);return}catch{continue}console.warn("⚠️ هیچ endpoint گزارش فروشی پیدا نشد. لطفاً endpoint اعلام فروش را بررسی کنید.")}},[s]);(0,a.useEffect)(()=>{s||g()},[s,g]),(0,a.useEffect)(()=>{s||(n==="dashboard"||n==="sales-reports"||n==="reports")&&w()},[n,s,w]);const{products:o,editingProduct:$,setEditingProduct:q,loadProducts:P,handleEdit:O,handleDelete:G,totalProducts:C,totalPrice:S}=Vo({apiUrl:xt}),{representatives:f,addRepresentative:I,updateRepresentative:_,deleteRepresentative:R,loadRepresentatives:V}=Yo({apiUrl:xt,isAdmin:r==="admin"}),{files:Q,loadingFiles:A,viewingFile:F,setViewingFile:y,deleteFile:m}=Qo({apiUrl:xt,representativeId:i}),L=(0,a.useCallback)(async l=>{await m(String(l))},[m]),W=(0,a.useCallback)(async()=>{console.log("🔄 شروع بروزرسانی محصولات بعد از آپلود"),await P(),console.log("✅ محصولات بعد از آپلود بروزرسانی شدند")},[P]),D=(0,a.useCallback)(async()=>{await V()},[V]);(0,a.useEffect)(()=>{s&&!Ka.includes(n)&&(p("dashboard"),sessionStorage.setItem("activeSection","dashboard"))},[n,s]),(0,a.useEffect)(()=>{sessionStorage.setItem("activeSection",n)},[n]),(0,a.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[n,i,h]),(0,a.useEffect)(()=>{const l=()=>{b(window.innerWidth>=1024)};return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),(0,a.useEffect)(()=>{s&&n==="products"&&P()},[n,s,P]);const j=()=>{u(null),c(null),y(null)},U=l=>{if(s&&!Ka.includes(l)){alert("🔒 اجازه ورود به این بخش را ندارید.");return}!s&&!Ln.includes(l)||(j(),p(l),sessionStorage.setItem("activeSection",l),window.innerWidth<1024&&b(!1))},Z=l=>{if(s){alert("🔒 اجازه ورود به این بخش را ندارید.");return}if(!f.some(z=>String(z.id)===String(l))){alert("نماینده موردنظر پیدا نشد. صفحه را رفرش کنید.");return}p("representatives"),c(null),y(null),u(String(l)),sessionStorage.setItem("activeSection","representatives")},B=()=>{j(),p("representatives"),sessionStorage.setItem("activeSection","representatives")},ge=async l=>{await _(String(l.id),{...l,name:l.name?.trim()||"",email:l.email?.trim()||"",province:l.province?.trim()||"",city:l.city?.trim()||"",phone:l.phone?.trim()||"",code:String(l.code??"").trim(),address:l.address?.trim()||"",description:l.description?.trim()||"",shopDescription:l.shopDescription?.trim()||""}),await V()},te=async l=>{await I({name:l.name?.trim()||"",email:l.email?.trim()||"",phone:l.phone?.trim()||"",province:l.province?.trim()||"",city:l.city?.trim()||"",code:String(l.code??"").trim(),address:l.address?.trim()||"",description:l.description?.trim()||"",shopDescription:l.shopDescription?.trim()||"",orders:Number(l.orders)||0,status:l.status==="inactive"?"inactive":"active",startDate:l.startDate||"",depositAmount:l.depositAmount||"0",guaranteeCheck:l.guaranteeCheck||"0",totalFinancialCommitment:l.totalFinancialCommitment||"0",shipmentsCount:Number(l.shipmentsCount)||0,storeItemsCount:Number(l.storeItemsCount)||0,storeItemsTotalValue:Number(l.storeItemsTotalValue)||0,returnRequestsCount:Number(l.returnRequestsCount)||0,last10DaysSales:Number(l.last10DaysSales)||0,averageSales:Number(l.averageSales)||0}),await V(),p("representatives"),sessionStorage.setItem("activeSection","representatives")},ee=async(l,z)=>{await _(l,{...z,name:z.name?.trim()||"",email:z.email?.trim()||"",phone:z.phone?.trim()||"",province:z.province?.trim()||"",city:z.city?.trim()||"",code:String(z.code??"").trim(),address:z.address?.trim()||"",description:z.description?.trim()||"",shopDescription:z.shopDescription?.trim()||"",orders:Number(z.orders)||0,status:z.status==="inactive"?"inactive":"active",startDate:z.startDate||"",depositAmount:z.depositAmount||"0",guaranteeCheck:z.guaranteeCheck||"0",totalFinancialCommitment:z.totalFinancialCommitment||"0",shipmentsCount:Number(z.shipmentsCount)||0,storeItemsCount:Number(z.storeItemsCount)||0,storeItemsTotalValue:Number(z.storeItemsTotalValue)||0,returnRequestsCount:Number(z.returnRequestsCount)||0,last10DaysSales:Number(z.last10DaysSales)||0,averageSales:Number(z.averageSales)||0}),await V()},se=async l=>{await R(l),i&&String(i)===String(l)&&j(),h&&String(h)===String(l)&&j(),await V(),p("representatives"),sessionStorage.setItem("activeSection","representatives")},H=(0,a.useMemo)(()=>i&&f.find(l=>String(l.id)===String(i))||null,[f,i]),ie=(0,a.useMemo)(()=>h&&f.find(l=>String(l.id)===String(h))||null,[f,h]),pe=h?`انبار ${ie?.name||""}`:i?`داشبورد ${H?.name||""}`:n==="dashboard"?"داشبورد":n==="products"?"لیست قیمت‌ها":n==="representatives"?"لیست نمایندگان":n==="upload"?"آپلود اکسل":n==="shipments"?"ارسال بار":n==="warehouse"?"انبار نمایندگان":n==="sales-reports"?"اعلام فروش نمایندگان":n==="return-requests"?"درخواست‌های مرجوعی":n==="support-requests"?"رسیدگی به درخواست‌ها":n==="reports"?"گزارشات":n==="users"?"مدیریت کاربران":n==="settings"?"تنظیمات":n==="notes"?"یادداشت‌ها":n==="announcements"?"اعلام اطلاعیه‌ها":n==="warranties"?"مدیریت گارانتی":"پنل مدیریت",E=h?"موجودی، ورود و خروج کالا در انبار اختصاصی نماینده":i?"اطلاعات، آمار و پرونده‌های نماینده":n==="dashboard"?"نمای کلی از وضعیت محصولات":n==="products"?"مشاهده لیست قیمت محصولات":n==="representatives"?"مدیریت نمایندگان و پرونده‌های آن‌ها":n==="upload"?"افزودن محصولات از فایل اکسل":n==="shipments"?"ثبت و مدیریت ارسال بار":n==="warehouse"?"مشاهده و مدیریت انبار اختصاصی هر نماینده":n==="sales-reports"?"مشاهده فقط‌خواندنی اعلام فروش ثبت‌شده توسط نمایندگان":n==="return-requests"?"بررسی، تأیید یا رد درخواست‌های مرجوعی نماینده‌ها":n==="support-requests"?"بررسی و پاسخ به درخواست‌های پشتیبانی نمایندگان":n==="reports"?"مشاهده گزارش‌های سیستم":n==="users"?"مدیریت کاربران سیستم":n==="settings"?"تنظیمات پنل مدیریت":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="announcements"?"مدیریت اطلاعیه‌ها و ارسال پیامک به نمایندگان":n==="warranties"?"مشاهده و رسیدگی به درخواست‌های گارانتی نمایندگان":"",J=n==="dashboard"?"داشبورد نمایندگی":n==="products"?"لیست قیمت‌ها":n==="orders"?"سفارش‌های من":n==="my-shipments"?"بارهای من":n==="warehouse"?"انبار نمایندگی":n==="sales-reports"?"اعلام فروش":n==="return-request"?"درخواست مرجوعی":n==="support"?"پشتیبانی":n==="profile"?"پروفایل نمایندگی":n==="notes"?"یادداشت‌ها":n==="notifications"?"اطلاع‌رسانی":n==="warranties"?"استفاده از گارانتی":"داشبورد نمایندگی",ae=n==="dashboard"?"نمای کلی اطلاعات، اعتبار و موجودی نمایندگی":n==="products"?"مشاهده لیست قیمت ثبت‌شده توسط مدیریت":n==="orders"?"مشاهده سفارش‌های ثبت‌شده":n==="my-shipments"?"پیگیری وضعیت و جزئیات بارهای ارسالی به نمایندگی شما":n==="warehouse"?"مشاهده موجودی و مجموع":n==="sales-reports"?"ثبت و مشاهده اعلام فروش نمایندگی":n==="return-request"?"ثبت و پیگیری درخواست مرجوعی":n==="support"?"ثبت و پیگیری درخواست‌های پشتیبانی":n==="profile"?"مشاهده اطلاعات کاربری و نمایندگی":n==="notes"?"مدیریت یادداشت‌های شخصی":n==="notifications"?"اطلاعیه‌ها و خبرهای جدید از مدیریت":n==="warranties"?"ثبت درخواست استفاده از گارانتی برای کالاهای موجود در انبار":"";return!Zr()||!t||!r?(0,e.jsx)(El,{to:"/login",replace:!0}):(0,e.jsxs)("div",{dir:"ltr",className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950",children:[(0,e.jsx)(Ll,{onToggleSidebar:()=>{b(l=>!l)},userRole:s?"representative":"admin",onRoleChange:()=>{},userName:s?t.name||t.username||"نماینده":t.name||"مدیر سیستم"}),(0,e.jsx)(Ul,{isOpen:d,onClose:()=>{b(!1)},activeSection:n,onSectionChange:U,userRole:s?"representative":"admin"}),(0,e.jsx)("main",{dir:"rtl",className:`min-h-[calc(100vh-76px)] transition-all duration-500 ${d?"lg:mr-72":"lg:mr-0"}`,children:(0,e.jsxs)("div",{className:"mx-auto max-w-7xl p-3 md:p-6",children:[(0,e.jsxs)("header",{className:"mb-4 md:mb-6",children:[(0,e.jsx)("h1",{className:"text-xl font-black text-gray-800 dark:text-white md:text-3xl",children:s?J:pe}),(0,e.jsx)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm",children:s?ae:E})]}),s?n==="warranties"?(0,e.jsx)(Po,{}):n==="notes"?(0,e.jsx)(pn,{}):n==="notifications"?(0,e.jsx)(_o,{}):n==="products"?(0,e.jsx)(An,{products:Array.isArray(o)?o:[],userRole:"user",onEdit:()=>{},onDelete:()=>{}}):n==="support"?(0,e.jsx)(_i,{}):(0,e.jsx)(Io,{activeSection:n}):n==="notes"?(0,e.jsx)(pn,{}):n==="announcements"?(0,e.jsx)(Uo,{apiUrl:xt}):n==="warranties"?(0,e.jsx)(Fo,{}):i?(0,e.jsx)(zs,{activeSection:"representatives",userRole:"admin",products:o,totalProducts:C,totalPrice:S,viewingRepDashboard:i,representatives:f,representativeFiles:Q,loadingFiles:A,shipments:N,onEditProduct:q,onDeleteProduct:G,onUploadSuccess:W,onOpenRepDashboard:Z,onBackToRepList:B,onViewFile:y,onDeleteFile:L,onAddRepresentative:te,onEditRepresentative:ee,onDeleteRepresentative:se,onRepresentativeUpdated:ge}):n==="warehouse"&&ie?(0,e.jsx)(Ui,{representative:ie,apiUrl:xt,products:o,onBack:()=>{c(null)},onWarehouseChanged:D,onProductsChanged:()=>{P()}}):n==="warehouse"?(0,e.jsx)(Ri,{representatives:f,apiUrl:xt,onOpenRepresentativeWarehouse:l=>{u(null),y(null),c(String(l))}}):n==="support-requests"?(0,e.jsx)(Qi,{}):(0,e.jsx)(zs,{activeSection:n,userRole:"admin",products:o,totalProducts:C,totalPrice:S,viewingRepDashboard:null,representatives:f,representativeFiles:Q,loadingFiles:A,shipments:N,onEditProduct:q,onDeleteProduct:G,onUploadSuccess:W,onOpenRepDashboard:Z,onBackToRepList:B,onViewFile:y,onDeleteFile:L,onAddRepresentative:te,onEditRepresentative:ee,onDeleteRepresentative:se,onRepresentativeUpdated:ge})]})}),s?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Di,{file:F,apiUrl:xt,onClose:()=>{y(null)}}),$?(0,e.jsx)(ql,{product:$,onClose:()=>{q(null)},onSave:O}):null]})]})}export{ad as default};
