import{J as h,d as ee,r as p,c as le,G as te,e as i,o as ae,f as oe,g as l,w as t,h as s,C as g,j as f,m as j,F as ne,z as P,K as R,p as re,k as se,_ as de}from"./index-e296d5bf.js";import{u as ie}from"./setting-21bd1ff5.js";const ue=(o,y,u)=>h.get(`/admin/acl/role/${o}/${y}/?roleName=${u}`),ce=o=>o.id?h.put("/admin/acl/role/update",o):h.post("/admin/acl/role/save",o),pe=o=>h.get("/admin/acl/permission/toAssign/"+o),me=(o,y)=>h.post(`/admin/acl/permission/doAssign/?roleId=${o}&permissionId=${y}`),fe=o=>h.delete("/admin/acl/role/remove/"+o),_e=o=>(re("data-v-e306d70f"),o=o(),se(),o),ve=_e(()=>j("h4",null,"分配菜单与按钮的权限",-1)),ge={style:{flex:"auto"}},ye=ee({__name:"index",setup(o){let y=ie(),u=p(1),C=p(10),v=p(""),z=p([]),S=p(0),m=p(!1),x=p(),_=p(!1),d=le({roleName:""}),I=p([]),V=p([]),N=p();te(()=>{k()});const k=async(n=1)=>{u.value=n;let e=await ue(u.value,C.value,v.value);e.code==200&&(S.value=e.data.total,z.value=e.data.records)},E=()=>{k()},O=()=>{k(),v.value=""},T=()=>{y.refsh=!y.refsh},K=()=>{m.value=!0,Object.assign(d,{roleName:"",id:0}),P(()=>{x.value.clearValidate("roleName")})},L=n=>{m.value=!0,Object.assign(d,n),P(()=>{x.value.clearValidate("roleName")})},M={roleName:[{required:!0,trigger:"blur",validator:(n,e,r)=>{e.trim().length>=2?r():r(new Error("职位名称至少两位"))}}]},B=async()=>{await x.value.validate(),(await ce(d)).code==200&&(R({type:"success",message:d.id?"更新成功":"添加成功"}),m.value=!1,k(d.id?u.value:1))},D=async n=>{_.value=!0,Object.assign(d,n);let e=await pe(d.id);e.code==200&&(V.value=e.data,console.log("menuArr.value",V.value),I.value=U(V.value,[]))},F={children:"children",label:"name"},U=(n,e)=>(n.forEach(r=>{r.select&&r.level==4&&e.push(r.id),r.children&&r.children.length>0&&U(r.children,e)}),e),H=async()=>{const n=d.id;let e=N.value.getCheckedKeys(),r=N.value.getHalfCheckedKeys(),w=e.concat(r);(await me(n,w)).code==200&&(_.value=!1,R({type:"success",message:"分配权限成功"}),window.location.reload())},G=async n=>{(await fe(n)).code==200&&(R({type:"success",message:"删除成功"}),k(z.value.length>1?u.value:u.value-1))};return(n,e)=>{const r=i("el-input"),w=i("el-form-item"),c=i("el-button"),q=i("el-form"),A=i("el-card"),b=i("el-table-column"),J=i("el-popconfirm"),Q=i("el-table"),W=i("el-pagination"),X=i("el-dialog"),Y=i("el-tree"),Z=i("el-drawer");return ae(),oe(ne,null,[l(A,null,{default:t(()=>[l(q,{inline:!0,class:"form"},{default:t(()=>[l(w,{label:"职位搜索"},{default:t(()=>[l(r,{placeholder:"请你输入搜索职位关键字",modelValue:s(v),"onUpdate:modelValue":e[0]||(e[0]=a=>g(v)?v.value=a:v=a)},null,8,["modelValue"])]),_:1}),l(w,null,{default:t(()=>[l(c,{type:"primary",size:"default",disabled:!s(v),onClick:O},{default:t(()=>[f(" 搜索 ")]),_:1},8,["disabled"]),l(c,{type:"primary",size:"default",onClick:T},{default:t(()=>[f("重置")]),_:1})]),_:1})]),_:1})]),_:1}),l(A,{style:{margin:"10px 0px"}},{default:t(()=>[l(c,{type:"primary",size:"default",icon:"Plus",onClick:K},{default:t(()=>[f(" 添加职位 ")]),_:1}),l(Q,{border:"",style:{margin:"10px 0px"},data:s(z)},{default:t(()=>[l(b,{type:"index",align:"center",label:"#"}),l(b,{label:"ID",align:"center",prop:"id"}),l(b,{label:"职位名称",align:"center",prop:"roleName","show-overflow-tooltip":""}),l(b,{label:"创建时间",align:"center","show-overflow-tooltip":"",prop:"createTime"}),l(b,{label:"更新时间",align:"center","show-overflow-tooltip":"",prop:"updateTime"}),l(b,{label:"操作",width:"280px",align:"center"},{default:t(({row:a,$index:be})=>[l(c,{type:"primary",size:"small",icon:"User",onClick:$=>D(a)},{default:t(()=>[f(" 分配权限 ")]),_:2},1032,["onClick"]),l(c,{type:"primary",size:"small",icon:"Edit",onClick:$=>L(a)},{default:t(()=>[f(" 编辑 ")]),_:2},1032,["onClick"]),l(J,{title:`你确定要删除${a.roleName}?`,width:"260px",onConfirm:$=>G(a.id)},{reference:t(()=>[l(c,{type:"primary",size:"small",icon:"Delete"},{default:t(()=>[f(" 删除 ")]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),l(W,{"current-page":s(u),"onUpdate:currentPage":e[1]||(e[1]=a=>g(u)?u.value=a:u=a),"page-size":s(C),"onUpdate:pageSize":e[2]||(e[2]=a=>g(C)?C.value=a:C=a),"page-sizes":[10,20,30,40],background:!0,layout:"prev, pager, next, jumper,->,sizes,total",total:s(S),onCurrentChange:k,onSizeChange:E},null,8,["current-page","page-size","total"])]),_:1}),l(X,{modelValue:s(m),"onUpdate:modelValue":e[5]||(e[5]=a=>g(m)?m.value=a:m=a),title:s(d).id?"更新职位":"添加职位"},{footer:t(()=>[l(c,{type:"primary",size:"default",onClick:e[4]||(e[4]=a=>g(m)?m.value=!1:m=!1)},{default:t(()=>[f(" 取消 ")]),_:1}),l(c,{type:"primary",size:"default",onClick:B},{default:t(()=>[f("确定")]),_:1})]),default:t(()=>[l(q,{model:s(d),rules:M,ref_key:"form",ref:x},{default:t(()=>[l(w,{label:"职位名称",prop:"roleName"},{default:t(()=>[l(r,{placeholder:"请你输入职位名称",modelValue:s(d).roleName,"onUpdate:modelValue":e[3]||(e[3]=a=>s(d).roleName=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(Z,{modelValue:s(_),"onUpdate:modelValue":e[7]||(e[7]=a=>g(_)?_.value=a:_=a)},{header:t(()=>[ve]),default:t(()=>[l(Y,{ref_key:"tree",ref:N,data:s(V),"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":s(I),props:F},null,8,["data","default-checked-keys"])]),footer:t(()=>[j("div",ge,[l(c,{onClick:e[6]||(e[6]=a=>g(_)?_.value=!1:_=!1)},{default:t(()=>[f("取消")]),_:1}),l(c,{type:"primary",onClick:H},{default:t(()=>[f("确定")]),_:1})])]),_:1},8,["modelValue"])],64)}}});const we=de(ye,[["__scopeId","data-v-e306d70f"]]);export{we as default};
