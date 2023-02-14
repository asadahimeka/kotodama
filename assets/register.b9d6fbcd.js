import{_ as q}from"./WithGithub.ec61f0d6.js";import{d as C,u as N,q as B,r as p,a as F,v as S,o as M,c as $,i as m,b as o,w as t,t as v,e,f as h,$ as j,x as D,E as G,g as i,s as I}from"./index.54956955.js";import{u as T,v as W}from"./validate.4816d201.js";const z={class:"max-w-300px m-auto"},A={class:"register-container"},H={class:"title-container"},J={text:"2xl",p:"10"},K={class:"flex justify-between"},Z=C({__name:"register",setup(O){const y=I(),{t:s}=N(),V=B(),c=p(!1),l=F({serverURL:V.serverURL,display_name:"",email:"",password:"",checkPass:"",url:""}),_=p(),w=p(),f=p(),U=(g,r,n)=>{W(r)?n():n(new Error(s("error.username")))},{validatePass:k,validatePass2:x}=T(_,l),E={email:[{required:!0,trigger:"blur",validator:U}],password:[{required:!0,trigger:"blur",validator:k}],checkPass:[{required:!0,trigger:"blur",validator:x}],url:[{required:!0,trigger:"blur"}]};S(()=>{l.email===""?w.value.focus():l.password===""&&f.value.focus()});function b(){_.value.validate(async g=>{if(g){j.defaults.baseURL=l.serverURL,c.value=!0;try{const{serverURL:r,checkPass:n,...u}=l,d=await D(u);d&&d.errno!==1e3&&(G.success({message:s("message.register_success"),showClose:!0}),y.push("/login"))}catch{}c.value=!1}})}return(g,r)=>{const n=i("el-input"),u=i("el-form-item"),d=i("el-button"),R=i("el-form"),L=i("router-link"),P=q;return M(),$("main",z,[m("div",A,[o(R,{ref_key:"registerFormEl",ref:_,model:e(l),rules:E,"status-icon":"",autocomplete:"on","label-position":"left"},{default:t(()=>[m("div",H,[m("h2",J,v(e(s)("register.title")),1)]),o(u,{prop:"serverURL",required:""},{default:t(()=>[o(n,{ref:"serverURLEl",modelValue:e(l).serverURL,"onUpdate:modelValue":r[0]||(r[0]=a=>e(l).serverURL=a),placeholder:e(s)("placeholder.server_url"),name:"serverURL",type:"text",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),o(u,{prop:"display_name"},{default:t(()=>[o(n,{ref:"displayNameEl",modelValue:e(l).display_name,"onUpdate:modelValue":r[1]||(r[1]=a=>e(l).display_name=a),placeholder:e(s)("placeholder.nickname"),name:"display_name",type:"text",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),o(u,{prop:"email"},{default:t(()=>[o(n,{ref_key:"emailEl",ref:w,modelValue:e(l).email,"onUpdate:modelValue":r[2]||(r[2]=a=>e(l).email=a),placeholder:e(s)("placeholder.email"),name:"email",type:"text",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),o(u,{prop:"url"},{default:t(()=>[o(n,{ref:"urlEl",modelValue:e(l).url,"onUpdate:modelValue":r[3]||(r[3]=a=>e(l).url=a),placeholder:e(s)("user.url"),name:"url",type:"text",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),o(u,{prop:"password"},{default:t(()=>[o(n,{ref_key:"passwordEl",ref:f,modelValue:e(l).password,"onUpdate:modelValue":r[4]||(r[4]=a=>e(l).password=a),placeholder:e(s)("placeholder.password"),name:"password",type:"password",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),o(u,{prop:"checkPassword"},{default:t(()=>[o(n,{ref_key:"passwordEl",ref:f,modelValue:e(l).password,"onUpdate:modelValue":r[5]||(r[5]=a=>e(l).password=a),placeholder:e(s)("message.input_password_again"),name:"password",type:"password"},null,8,["modelValue","placeholder"])]),_:1}),o(u,null,{default:t(()=>[o(d,{type:"primary",class:"block w-full",loading:e(c),onClick:b},{default:t(()=>[h(v(e(s)("button.register")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),m("div",K,[o(L,{to:"/login"},{default:t(()=>[o(d,null,{default:t(()=>[h(v(e(s)("button.login")),1)]),_:1})]),_:1}),o(P)])])])}}});export{Z as default};
