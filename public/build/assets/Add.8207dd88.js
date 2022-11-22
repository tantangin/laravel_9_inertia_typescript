import{r as i,u as v,j as e,a as r,b as t}from"./app.661b6241.js";import{I as m,a as d}from"./InputGroup.7a035b18.js";import{D as b}from"./DashboardLayout.ddd739d4.js";import{b as x}from"./helpers.931c93d7.js";import{h as k}from"./index.m.4f4de470.js";function j(){const l=i.exports.useRef(null),{data:o,setData:s,errors:c,post:u,processing:h}=v(),n=a=>{a.currentTarget.type==="checkbox"?s("status",a.currentTarget.checked?"active":"not active"):s(a.currentTarget.name,a.currentTarget.value)},g=a=>{if(a.preventDefault(),!(!a.currentTarget.files||!l.current)){var p=URL.createObjectURL(a.currentTarget.files[0]);l.current.src=p,l.current.style.display="block",s("logo",a.currentTarget.files[0])}},f=a=>{a.preventDefault(),u(k("toko.master.add"))};return i.exports.useEffect(()=>{s("status","active")},[]),e(b,{children:r(t.Card,{className:"mt-20",children:[e(t.CardHeader,{variant:"gradient",color:"blue-gray",className:"px-4 mr-auto h-10 place-items-center flex w-auto ",children:"Tambah Toko"}),r("form",{onSubmit:f,children:[r(t.CardBody,{children:[r("div",{className:"flex flex-col md:flex-row md:gap-2 mb-3",children:[e("div",{className:"w-full md:w-1/2 mb-4",children:e(m,{error:c.name,value:o.name,label:"Nama toko",onChange:n,name:"name"})}),e("div",{className:"w-full md:w-1/2 ",children:e(m,{error:c.link,value:o.link,label:"Link Utama Toko",onChange:n,name:"link"})})]}),r("div",{className:"mt-4    ",children:[e("label",{className:"inline-block mb-2 text-gray-500",children:"Upload Image(jpg,png)"}),e("div",{className:"flex items-center justify-center w-full",children:r("label",{className:"flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300",children:[r("div",{className:"relative flex flex-col items-center justify-center pt-7",children:[e("img",{ref:l,className:"absolute inset-0 w-full h-32"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-12 h-12 text-gray-400 group-hover:text-gray-600",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),e("p",{className:"pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600",children:"Select a photo"})]}),e("input",{type:"file",onChange:g,className:"opacity-0",accept:"image/*"})]})}),e(d,{message:c.logo,className:"mt-2"})]}),r("div",{className:"-ml-2 mt-2",children:[e(t.Checkbox,{name:"status",label:"Active ? ",onChange:n,value:"active",checked:o.status=="active"}),e(d,{message:c.status,className:"mt-2"})]})]}),r(t.CardFooter,{className:"flex  gap-7 pt-2",children:[e(t.Button,{disabled:h,type:"submit",children:"Save"}),e(t.Button,{color:"amber",type:"reset",onClick:x,children:"Back"})]})]})]})})}export{j as default};