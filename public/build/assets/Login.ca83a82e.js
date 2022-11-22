import{r as s,j as e,a as u,u as h,F as p,b as t,L as f}from"./app.2da2ca6b.js";import{I as d}from"./InputGroup.da432440.js";import{h as m}from"./index.m.4f4de470.js";function g({message:l,show:o,...n}){const[c,r]=s.exports.useState(o);return s.exports.useEffect(()=>(r(o),()=>{}),[o]),e(s.exports.Fragment,{children:e(u.Alert,{...n,show:c,dismissible:{onClose:()=>r(!1)},children:l})})}function k(){const{data:l,setData:o,post:n,processing:c,errors:r,reset:b}=h();s.exports.useEffect(()=>()=>{b("password")},[]);const i=a=>{o(a.currentTarget.name,a.currentTarget.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value)};return e(p,{children:t("div",{className:"relative min-h-screen w-full",children:[e("img",{src:"https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",className:"absolute inset-0 z-0 h-full w-full object-cover"}),e("div",{className:"absolute inset-0 z-0 h-full w-full bg-black/50"}),e("div",{className:"container mx-auto p-4",children:t("form",{onSubmit:a=>{a.preventDefault(),n(m("login"))},className:"flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4",children:[e("div",{className:"relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-4 grid h-28 place-items-center",children:e("h3",{className:"block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white",children:"Sign In"})}),t("div",{className:"p-6 flex flex-col gap-4",children:[e(g,{color:"red",show:Object.keys(r).length>0,message:"Harap isi dengan benar"}),e(d,{label:"Email",value:l.email,name:"email",error:r.email,autoComplete:"username",onChange:i,type:"email"}),e(d,{type:"password",error:r.password,name:"password",value:l.password,autoComplete:"current-password",onChange:i,label:"Password"}),e("div",{className:"-ml-2.5",children:t("div",{className:"inline-flex items-center",children:[t("label",{className:"relative flex items-center cursor-pointer p-3 rounded-full",htmlFor:"checkbox",children:[e("input",{type:"checkbox",name:"remember",value:l.remember,onChange:i,className:"peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-500 checked:border-blue-500 checked:before:bg-blue-500",id:"checkbox"}),e("div",{className:"text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor",strokeWidth:1,children:e("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]}),e("label",{className:"text-gray-700 font-light select-none cursor-pointer mt-px",htmlFor:"checkbox",children:"Remember Me"})]})})]}),t("div",{className:"p-6 pt-0",children:[e("button",{type:"submit",className:"middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full",children:"Sign In"}),t("p",{className:"antialiased font-sans text-sm font-light leading-normal text-inherit mt-6 flex justify-center",children:["Don't have an account?",e(f,{href:m("register"),children:e("span",{className:"block antialiased font-sans text-sm leading-normal text-blue-500 ml-1 font-bold",children:"Sign up"})})]})]})]})})]})})}export{k as Login,k as default};