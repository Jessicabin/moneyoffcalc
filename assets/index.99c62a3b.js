var Y=Object.defineProperty;var Z=(o,e,l)=>e in o?Y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[e]=l;var q=(o,e,l)=>(Z(o,typeof e!="symbol"?e+"":e,l),l);import{af as f,l as h,m as O,p as v,W as a,F as L,av as K,aw as W,ax as $,P as k,Q as s,U as g,a5 as x,ay as B,e as P,V as N,T as z,_ as U,$ as A,c as ee,a as R,ai as te,R as oe,ab as D,az as le,aA as ne,as as ae,aB as re,aC as se}from"./vue.52e69934.js";import{a as ie,l as T}from"./utils.11921c2f.js";import{E as I,a as ce,i as de}from"./ele.49b9e069.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const M=(o,e)=>{const l=o.__vccOpts||o;for(const[n,t]of e)l[n]=t;return l},ue={},pe=o=>(K("data-v-f09bf169"),o=o(),W(),o),fe=pe(()=>v("header",null," \u5929\u732B\u6EE1\u51CF\u8BA1\u7B97 (\u5148\u65B0\u589E \u54C1\u724C \u518D\u65B0\u589E \u5546\u54C1 \uFF01\uFF01\u6D89\u53CA\u5E97\u94FA\u5238/\u6DD8\u91D1\u5E01/88vip95\u6298\uFF0C\u5B9E\u4ED8\u8BA1\u7B97\u4E0D\u6B63\u786E\uFF01\uFF01) ",-1));function me(o,e){const l=f("RouterView");return h(),O(L,null,[fe,v("main",null,[a(l)])],64)}const _e=M(ue,[["render",me],["__scopeId","data-v-f09bf169"]]),ye=()=>ie("1234567890abcdefghijklmnopqrstuvwxyz",8)(8),he=function(o){console.time("subsets");const e=[],l=o.length;for(let n=0;n<1<<l;++n){const t=[];for(let r=0;r<l;++r)n&1<<r&&t.push(o[r]);t.length&&e.push(t)}return console.log(e.length),console.timeEnd("subsets"),e},F=(o,e,l="")=>{const n=new Blob([o],{type:`application/${e}`});if(l=`${l}.${e}`,window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(n,l);else{const t=document.createElement("a"),r=document.querySelector("body");t.href=window.URL.createObjectURL(n),t.download=l,t.style.display="none",r.appendChild(t),t.click(),r.removeChild(t),window.URL.revokeObjectURL(t.href)}},V=({array:o=[],map:e={},key:l="id",value:n="item"})=>(o.forEach(t=>{const r=l?t[l]:t,i=n==="item"?t:t[n];e[r]=i}),e),ge=o=>typeof o=="string",be=o=>Object.prototype.toString.call(o)==="[object Object]",Ce=o=>Object.prototype.toString.call(o)==="[object Array]",J=o=>o==null||ge(o)&&o===""||Ce(o)&&o.length===0||be(o)&&Object.keys(o).length===0;class E{constructor(e={}){var l;Object.assign(this,e),this.map=(l=this.map)!=null?l:{},this.options=this.getOptions()}getOptions(){const e=[];if(Object.keys(this.map).length)for(let l in this.map){/^[0-9]*$/.test(l)&&(l=+l);let n={label:this.map[l],value:l};e.push(n)}return e}}const ve=$("cart",{state:()=>({productList:[],productSelectionList:[],brandList:[],categoryCouponList:[{id:0,couponName:"\u7F8E\u5986\u60CA\u559C\u5238",couponType:"makeup",threshold:1200,off:110},{id:1,couponName:"\u7CBE\u81F4\u751F\u6D3B\u5238",couponType:"life",threshold:200,off:15}],moneyOffList:[{id:0,label:"300-50",threshold:300,off:50}],productNextId:0,voncherOptions:[{label:"1000-50",value:1e3},{label:"3800-300",value:3800},{label:"6800-300",value:6800}],orderList:[]}),getters:{brandMapping:o=>new E({map:V({array:o.brandList,key:"id",value:"brandName"})}),categoryCouponMapping:o=>new E({map:V({array:o.categoryCouponList,key:"couponType",value:"couponName"}),config:V({array:o.categoryCouponList,key:"couponType",value:"item"})}),moneyOffMapping:o=>new E({map:V({array:o.moneyOffList,key:"id",value:"label"}),config:V({array:o.moneyOffList,key:"id",value:"item"})}),productListIndexs:o=>{const e={};return o.productList.forEach((l,n)=>{e[l.id]=n}),e}},actions:{updateProductSelectionList(o){this.productSelectionList=o},addProduct(o){const e={...o,id:this.productNextId},{productName:l}=e;this.productList.find(t=>t.productName===l)?I.error("\u91CD\u590D\u6DFB\u52A0\uFF01"):(this.productList.push(e),this.productNextId=this.productNextId+1)},updateProduct(o){const e=this.productListIndexs[o.id];this.productList.splice(e,1,o)},deleteProduct(o){const e=this.productListIndexs[o.id];this.productList.splice(e,1)},saveProductList(){F(JSON.stringify(this.productList,null,2),"json","shoppingCart")},importProductList(o){this.productList=o,this.productNextId=T.exports.last(o.sort((e,l)=>e.id-l.id)).id+1},addBrand(o){const e={...o,id:ye()},{brandName:l}=e;this.brandList.find(t=>t.brandName===l)?I.error("\u91CD\u590D\u6DFB\u52A0\uFF01"):this.brandList.push(e)},updateBrand(o,e){this.brandList.splice(e,1,o)},deleteBrand(o){this.brandList.splice(o,1)},saveBrandList(){F(JSON.stringify(this.brandList,null,2),"json","brandList")},importBrandList(o){this.brandList=o}},persist:!0});function S(){return{cart:ve()}}const Oe={brandName:"",remark:""},ke={brandName:[{required:!0,message:"\u8BF7\u8F93\u5165\u54C1\u724C\u540D\u79F0",trigger:"blur"}]},we={productName:"",brandId:null,unitPrice:0,quantity:1,price:0,categoryCouponType:null,moneyOffId:0,productCoupon:0,cutPrice:0,deposit:0,remark:""},Me={productName:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"}],brandId:[{required:!0,message:"\u8BF7\u9009\u62E9\u54C1\u724C",trigger:"change"}],unitPrice:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C"},{type:"number",message:"\u8BF7\u8F93\u5165\u6570\u5B57"}],quantity:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C"},{type:"number",message:"\u8BF7\u8F93\u5165\u6570\u5B57"}],productCoupon:[{type:"number",message:"\u8BF7\u8F93\u5165\u6570\u5B57"}],cutPrice:[{type:"number",message:"\u8BF7\u8F93\u5165\u6570\u5B57"}],deposit:[{type:"number",message:"\u8BF7\u8F93\u5165\u6570\u5B57"}]},Ve={data(){return{dialogVisible:!1,formModel:{},rules:Me}},setup(){const{cart:o}=S(),e=o.categoryCouponMapping.options,l=o.moneyOffMapping.options;return{cart:o,categoryCouponOptions:e,moneyOffOptions:l}},methods:{initDialog({row:o,index:e}={}){this.dialogVisible=!0,this.isAdd=!o,this.formModel=T.exports.cloneDeep(o||we),this.index=e},closeDialog(){this.dialogVisible=!1},async handleConfirm(){await this.$refs.form.validate((o,e)=>{if(o){const{unitPrice:l,quantity:n}=this.formModel;Object.assign(this.formModel,{price:l*1e4*n/1e4}),this.isAdd?this.cart.addProduct(this.formModel):this.cart.updateProduct(this.formModel),this.closeDialog()}else console.log("error submit!",e)})}}},Le={class:"dialog-footer"};function xe(o,e,l,n,t,r){const i=f("el-input"),u=f("el-form-item"),c=f("el-option"),d=f("el-select"),m=f("el-input-number"),y=f("el-form"),C=f("el-button"),_=f("el-dialog");return h(),k(_,{modelValue:t.dialogVisible,"onUpdate:modelValue":e[10]||(e[10]=p=>t.dialogVisible=p),title:"\u65B0\u589E",width:"30%","destroy-on-close":"",center:""},{footer:s(()=>[v("span",Le,[a(C,{onClick:r.closeDialog},{default:s(()=>[g("\u53D6\u6D88")]),_:1},8,["onClick"]),a(C,{type:"primary",onClick:r.handleConfirm},{default:s(()=>[g(" \u786E\u5B9A ")]),_:1},8,["onClick"])])]),default:s(()=>[a(y,{ref:"form","label-width":"100px",model:t.formModel,rules:t.rules},{default:s(()=>[a(u,{label:"\u5546\u54C1\u540D\u79F0",prop:"productName"},{default:s(()=>[a(i,{modelValue:t.formModel.productName,"onUpdate:modelValue":e[0]||(e[0]=p=>t.formModel.productName=p)},null,8,["modelValue"])]),_:1}),a(u,{label:"\u54C1\u724C",prop:"brandId"},{default:s(()=>[a(d,{modelValue:t.formModel.brandId,"onUpdate:modelValue":e[1]||(e[1]=p=>t.formModel.brandId=p),placeholder:"\u8BF7\u9009\u62E9\u54C1\u724C"},{default:s(()=>[(h(!0),O(L,null,x(n.cart.brandMapping.options,p=>(h(),k(c,{key:p.value,label:p.label,value:p.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u5355\u4EF7",prop:"unitPrice"},{default:s(()=>[a(m,{modelValue:t.formModel.unitPrice,"onUpdate:modelValue":e[2]||(e[2]=p=>t.formModel.unitPrice=p),step:.01},null,8,["modelValue","step"])]),_:1}),a(u,{label:"\u6570\u91CF",prop:"quantity"},{default:s(()=>[a(m,{min:1,modelValue:t.formModel.quantity,"onUpdate:modelValue":e[3]||(e[3]=p=>t.formModel.quantity=p)},null,8,["modelValue"])]),_:1}),a(u,{label:"\u54C1\u7C7B\u5238\u7C7B\u578B",prop:"categoryCouponType"},{default:s(()=>[a(d,{modelValue:t.formModel.categoryCouponType,"onUpdate:modelValue":e[4]||(e[4]=p=>t.formModel.categoryCouponType=p),placeholder:"\u8BF7\u9009\u62E9\u54C1\u7C7B\u5238\u7C7B\u578B"},{default:s(()=>[(h(!0),O(L,null,x(n.categoryCouponOptions,p=>(h(),k(c,{key:p.value,label:p.label,value:p.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u6EE1\u51CF\u7C7B\u578B",prop:"moneyOffId"},{default:s(()=>[a(d,{modelValue:t.formModel.moneyOffId,"onUpdate:modelValue":e[5]||(e[5]=p=>t.formModel.moneyOffId=p),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6EE1\u51CF\u7C7B\u578B"},{default:s(()=>[(h(!0),O(L,null,x(n.moneyOffOptions,p=>(h(),k(c,{key:p.value,label:p.label,value:p.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u5546\u54C1\u5238\u91D1\u989D",prop:"productCoupon"},{default:s(()=>[a(i,{modelValue:t.formModel.productCoupon,"onUpdate:modelValue":e[6]||(e[6]=p=>t.formModel.productCoupon=p),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),a(u,{label:"\u62CD\u4E0B\u7ACB\u51CF\u91D1\u989D",prop:"cutPrice"},{default:s(()=>[a(i,{modelValue:t.formModel.cutPrice,"onUpdate:modelValue":e[7]||(e[7]=p=>t.formModel.cutPrice=p),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),a(u,{label:"\u5B9A\u91D1",prop:"deposit"},{default:s(()=>[a(i,{modelValue:t.formModel.deposit,"onUpdate:modelValue":e[8]||(e[8]=p=>t.formModel.deposit=p),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),a(u,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[a(i,{type:"textarea",modelValue:t.formModel.remark,"onUpdate:modelValue":e[9]||(e[9]=p=>t.formModel.remark=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}const Se=M(Ve,[["render",xe]]);class H{constructor({productList:e=[],calcCon:l={},moneyOffConfig:n,categoryCouponConfig:t}){q(this,"getOrders",(e=[])=>{const{threshold:l,off:n}=this.moneyOffSlnConfig,t=V({array:this.productList,key:"id",value:"item"});return new Promise(r=>{const i=[];for(let u=0;u<e.length;u++){const c=e[u],d=c.map(X=>t[X]),m=this.getStatictics(d),{moneyOffPriceTotal:y,categoryCouponCalc:C,depositTotal:_}=m,p=this.getCategoryCouponSln(C),b=Object.assign(c,{order:d,...m,moneyOffTotal:Math.floor(y/l)*n,moneyOffDiff:Math.round(y%l*1e4)/1e4,...p}),w=this.getBalance(b);Object.assign(b,{balance:w,cutDeposit:w-_}),b.moneyOffDiff<=this.calcCon.moneyOff.precision&&i.push(b)}r(i)})});Object.assign(this,{productList:e,calcCon:l,categoryCouponConfig:t}),this.moneyOffSlnConfig=n[l.moneyOff.id],this.productMap=V({array:this.productList,key:"id",value:"item"})}async calc(){console.time("calc");const e=this.getSubsets();console.log("----\u8BA2\u5355\u7EC4\u5408\u8BA1\u7B97\u5B8C\u6210-----");const l=await this.getResult(e);return console.log("----\u7ED3\u679C\u8BA1\u7B97\u5B8C\u6210-----"),console.timeEnd("calc"),Promise.resolve(l)}async total(){return this.getOrder(this.productList)}getSubsets(){const e=[],l=this.productList.length;for(let n=0;n<1<<l;++n){const t=[];for(let r=0;r<l;++r)n&1<<r&&t.push(this.productList[r]);if(t.length){const r=this.getOrder(t);r&&e.push(r)}}return e}getOrder(e){const{threshold:l,off:n}=this.moneyOffSlnConfig,t=this.getStatictics(e),{moneyOffPriceTotal:r,categoryCouponCalc:i,depositTotal:u}=t,c=this.getCategoryCouponSln(i),d={order:e,...t,moneyOffTotal:Math.floor(r/l)*n,moneyOffDiff:Math.round(r%l),...c},m=this.getBalance(d);return Object.assign(d,{balance:m,cutDeposit:m-u}),d}getStatictics(e){return e.reduce((l,n)=>{const{moneyOffId:t,price:r,categoryCouponType:i,deposit:u,cutPrice:c,productCoupon:d}=n;return l.total=l.total+r,l.depositTotal=l.depositTotal+u,l.cutPriceTotal=l.cutPriceTotal+c,l.productCouponTotal=l.productCouponTotal+d,t===this.moneyOffSlnConfig.id&&(l.moneyOffPriceTotal=l.moneyOffPriceTotal+r),i&&(l.categoryCouponCalc[i]=l.categoryCouponCalc[i]+r),l},{total:0,moneyOffPriceTotal:0,depositTotal:0,cutPriceTotal:0,productCouponTotal:0,categoryCouponCalc:{life:0,makeup:0}})}getCategoryCouponSln(e){const l={categoryCoupon:[],categoryCouponTotal:0};return Object.entries(e).forEach(([n,t])=>{const{threshold:r}=this.categoryCouponConfig[n];t>=r&&(l.categoryCoupon.push(n),l.categoryCouponTotal=l.categoryCouponTotal+this.categoryCouponConfig[n].off)}),l}getBalance(e){const{total:l,moneyOffTotal:n,categoryCouponTotal:t,productCouponTotal:r,cutPriceTotal:i}=e,u=l-n-t-r-i;return Math.round(u*1e4)/1e4}async getResult(e){const l=[];for(let n=0;n<e.length;n++){const t=e[n],{order:r}=t;t.products=r.map(m=>m.productName).join("|");const{moneyOff:i,balance:u,categoryCoupon:c}=this.calcCon;let d=null;if(t.moneyOffDiff<=i.precision&&(d=t),d&&c.type.length&&(d=null,c.type.length>1?c.type.length===t.categoryCoupon.length&&(d=t):c.type.forEach(m=>{t.categoryCoupon.includes(m)&&(d=t)})),d&&u.calc){d=null;const{threshold:m,precision:y}=u;t.balance>=m&&t.balance-m<=y&&(t.balanceDiff=t.balance-m,d=t)}d&&l.push(d)}return console.log(l),this.calcCon.balance.calc?l.sort((n,t)=>n.balanceDiff-t.balanceDiff):l.sort((n,t)=>n.moneyOffDiff-t.moneyOffDiff),l}async _getSubsets(){const e=this.getIdSubsets();console.log("----\u5546\u54C1ID\u7EC4\u5408\u8BA1\u7B97\u5B8C\u6210------");const l=await this.getOrders(e);return console.log("----\u8BA2\u5355\u7EC4\u5408\u8BA1\u7B97\u5B8C\u6210-----"),l}getIdSubsets(){return he(this.productList.map(e=>e.id))}}const Te={components:{AddProduct:Se},data(){return{columns:[]}},setup(){const{cart:o}=S(),{productList:e,brandList:l}=B(o),n=P(()=>o.categoryCouponMapping),t=P(()=>o.moneyOffMapping),r=c=>{o.updateProductSelectionList(c)},i=async()=>{const d=await new H({productList:e.value,calcCon:{moneyOff:{id:0}},moneyOffConfig:t.value.config,categoryCouponConfig:n.value.config}).total(),{balance:m,depositTotal:y,cutDeposit:C}=d;ce.alert(`\u5B9E\u4ED8\uFF1A${m} \u5DF2\u4ED8\u5B9A\u91D1\uFF1A${y}  \u5C3E\u6B3E\u5B9E\u4ED8\uFF1A${C}`,"\u8D2D\u7269\u8F66\u603B\u5B9E\u4ED8\u6B3E")};return{filterTableData:P(()=>T.exports.orderBy(e.value.map(c=>{const{price:d,moneyOffId:m,productCoupon:y,cutPrice:C}=c,_=d-y-C;let p=0;if(m!==""){const{threshold:b,off:w}=t.value.config[m]||{};p=Math.floor(d/b)*w}return Object.assign(T.exports.cloneDeep(c),{balance:_-p,moneyOffIdOrder:J(m)?-1:m,moneyOffDesc:t.value.map[m],categoryCouponDesc:n.value.map[c.categoryCouponType]})}),["categoryCouponType","moneyOffIdOrder","balance"],["asc","desc","desc"])),cart:o,brandList:l,categoryCouponMapping:n,moneyOffMapping:t,handleSelectionChange:r,handleCalcTotal:i,isEmpty:J}},created(){this.generateColumns()},methods:{handleAddOrUpdate(o){this.$refs.add.initDialog(o)},handleBeforeUpload(o){const e=new FileReader;e.readAsText(o),e.onload=l=>{const n=JSON.parse(l.target.result);this.cart.importProductList(n)}},generateColumns(){const o=[{key:"id",title:"ID",width:50},{key:"productName",title:"\u5546\u54C1\u540D",width:200},{key:"price",title:"\u6D3B\u52A8\u4EF7",width:100,sortable:!0},{key:"balance",title:"\u5B9E\u4ED8",width:100},{key:"categoryCouponType",title:"\u54C1\u7C7B\u5238",width:100},{key:"moneyOffId",title:"\u6EE1\u51CF\u6D3B\u52A8",width:100},{key:"productCoupon",title:"\u5546\u54C1\u5238",width:100},{key:"cutPrice",title:"\u62CD\u4E0B\u7ACB\u51CF",width:100},{key:"deposit",title:"\u5B9A\u91D1",width:100},{key:"operations",type:"oper",title:"\u64CD\u4F5C",width:100}];this.columns=o.map(e=>{const{key:l,type:n}=e;return Object.assign(e,{props:l,dataKey:n?void 0:l})})}}},De={class:"cart__wrapper"},Pe={style:{display:"flex",gap:"10px"}},Ne={class:"cart-table__wrapper"};function Ue(o,e,l,n,t,r){const i=f("el-button"),u=f("el-upload"),c=f("el-table-column"),d=f("el-tag"),m=f("el-table"),y=f("el-auto-resizer"),C=f("add-product");return h(),O("div",De,[v("div",Pe,[a(i,{type:"primary",disabled:!n.brandList.length,onClick:r.handleAddOrUpdate},{default:s(()=>[g("\u65B0\u589E\u5546\u54C1")]),_:1},8,["disabled","onClick"]),a(i,{type:"primary",onClick:n.cart.saveProductList},{default:s(()=>[g("\u5BFC\u51FA")]),_:1},8,["onClick"]),a(u,{accept:".json","show-file-list":!1,action:"#",beforeUpload:r.handleBeforeUpload},{trigger:s(()=>[a(i,null,{default:s(()=>[g(" \u5BFC\u5165 ")]),_:1})]),_:1},8,["accept","beforeUpload"]),a(i,{class:"ml10",onClick:n.handleCalcTotal},{default:s(()=>[g("\u603B\u5B9E\u4ED8\u6B3E")]),_:1},8,["onClick"])]),v("div",Ne,[a(y,null,{default:s(({height:_,width:p})=>[a(m,{data:n.filterTableData,width:p,height:_,ref:"table",onSelectionChange:n.handleSelectionChange},{default:s(()=>[a(c,{type:"selection",width:"55"}),a(c,{prop:"id",label:"ID",width:"50"}),a(c,{prop:"productName",label:"\u5546\u54C1\u540D",width:"200"}),a(c,{prop:"categoryCouponType",label:"\u54C1\u7C7B\u5238",width:"120"},{default:s(({row:b})=>[b.categoryCouponDesc?(h(),k(d,{key:0,effect:"plain"},{default:s(()=>[g(N(b.categoryCouponDesc),1)]),_:2},1024)):z("",!0)]),_:1}),a(c,{prop:"moneyOffId",label:"\u6EE1\u51CF\u6D3B\u52A8",width:"100"},{default:s(({row:b})=>[b.moneyOffDesc?(h(),k(d,{key:0,effect:"dark"},{default:s(()=>[g(N(b.moneyOffDesc),1)]),_:2},1024)):z("",!0)]),_:1}),a(c,{prop:"price",label:"\u6D3B\u52A8\u4EF7",width:"100"}),a(c,{prop:"productCoupon",label:"\u5546\u54C1\u5238",width:"100"}),a(c,{prop:"cutPrice",label:"\u62CD\u4E0B\u7ACB\u51CF",width:"100"}),a(c,{prop:"deposit",label:"\u5B9A\u91D1",width:"100"}),a(c,{prop:"balance",label:"\u5230\u624B\u4EF7",width:"100"}),a(c,{prop:"remark",label:"\u5907\u6CE8"}),a(c,{fixed:"right",label:"\u64CD\u4F5C",width:"120"},{default:s(({row:b})=>[a(i,{link:"",type:"primary",size:"small",onClick:U(w=>r.handleAddOrUpdate({row:b}),["prevent"])},{default:s(()=>[g(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),a(i,{link:"",type:"primary",size:"small",onClick:U(w=>n.cart.deleteProduct(b),["prevent"])},{default:s(()=>[g(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:2},1032,["data","width","height","onSelectionChange"])]),_:1})]),a(C,{ref:"add"},null,512)])}const Ie=M(Te,[["render",Ue],["__scopeId","data-v-29f4e250"]]),Be={data(){return{dialogVisible:!1,formModel:{},rules:ke}},setup(){const{cart:o}=S();return{cart:o}},methods:{initDialog({row:o,index:e}={}){this.dialogVisible=!0,this.isAdd=!o,this.formModel=T.exports.cloneDeep(o||Oe),this.index=e},closeDialog(){this.dialogVisible=!1},async handleConfirm(){await this.$refs.form.validate((o,e)=>{o?(this.isAdd?this.cart.addBrand(this.formModel):this.cart.updateBrand(this.formModel,this.index),this.closeDialog()):console.log("error submit!",e)})}}},je={class:"dialog-footer"};function Ae(o,e,l,n,t,r){const i=f("el-input"),u=f("el-form-item"),c=f("el-form"),d=f("el-button"),m=f("el-dialog");return h(),k(m,{modelValue:t.dialogVisible,"onUpdate:modelValue":e[2]||(e[2]=y=>t.dialogVisible=y),title:"\u65B0\u589E",width:"30%","destroy-on-close":"",center:""},{footer:s(()=>[v("span",je,[a(d,{onClick:r.closeDialog},{default:s(()=>[g("\u53D6\u6D88")]),_:1},8,["onClick"]),a(d,{type:"primary",onClick:r.handleConfirm},{default:s(()=>[g(" \u786E\u5B9A ")]),_:1},8,["onClick"])])]),default:s(()=>[a(c,{ref:"form","label-width":"100px",model:t.formModel,rules:t.rules},{default:s(()=>[a(u,{label:"\u54C1\u724C\u540D\u79F0",prop:"brandName"},{default:s(()=>[a(i,{modelValue:t.formModel.brandName,"onUpdate:modelValue":e[0]||(e[0]=y=>t.formModel.brandName=y)},null,8,["modelValue"])]),_:1}),a(u,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[a(i,{modelValue:t.formModel.remark,"onUpdate:modelValue":e[1]||(e[1]=y=>t.formModel.remark=y),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}const Re=M(Be,[["render",Ae]]);const Ee={components:{AddBrand:Re},data(){return{columns:[]}},setup(){const{cart:o}=S(),{brandList:e}=B(o);return{cart:o,brandList:e}},methods:{handleAddOrUpdate(o){this.$refs.add.initDialog(o)},handleBeforeUpload(o){const e=new FileReader;e.readAsText(o),e.onload=l=>{const n=JSON.parse(l.target.result);this.cart.importBrandList(n)}}}},qe={class:"cart__wrapper"},ze={style:{display:"flex"}},Fe={class:"cart-table__wrapper"};function Je(o,e,l,n,t,r){const i=f("el-button"),u=f("el-upload"),c=f("el-table-column"),d=f("el-table"),m=f("el-auto-resizer"),y=f("add-brand");return h(),O("div",qe,[v("div",ze,[a(i,{type:"primary",onClick:r.handleAddOrUpdate},{default:s(()=>[g("\u65B0\u589E\u54C1\u724C")]),_:1},8,["onClick"]),a(i,{type:"primary",onClick:n.cart.saveBrandList},{default:s(()=>[g("\u5BFC\u51FA")]),_:1},8,["onClick"]),a(u,{accept:".json","show-file-list":!1,action:"#",beforeUpload:r.handleBeforeUpload},{trigger:s(()=>[a(i,null,{default:s(()=>[g(" \u5BFC\u5165 ")]),_:1})]),_:1},8,["accept","beforeUpload"])]),v("div",Fe,[a(m,null,{default:s(({height:C,width:_})=>[a(d,{data:n.brandList,width:_,height:C},{default:s(()=>[a(c,{prop:"id",label:"ID",width:"120"}),a(c,{prop:"brandName",label:"\u54C1\u724C\u540D",width:"150"}),a(c,{prop:"remark",label:"\u5907\u6CE8"}),a(c,{label:"\u64CD\u4F5C",width:"120"},{default:s(({row:p,$index:b})=>[a(i,{link:"",type:"primary",size:"small",onClick:U(w=>r.handleAddOrUpdate({row:p,index:b}),["prevent"])},{default:s(()=>[g(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),a(i,{link:"",type:"primary",size:"small",onClick:U(w=>n.cart.deleteBrand(b),["prevent"])},{default:s(()=>[g(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:2},1032,["data","width","height"])]),_:1})]),a(y,{ref:"add"},null,512)])}const Ke=M(Ee,[["render",Je],["__scopeId","data-v-31110d11"]]);const We={data(){return{}},props:{total:{type:Number,default:0}},setup(o,e){const{proxy:l}=ee(),n=A({calc:!0,id:0,precision:0}),t=A({calc:!1,type:""}),r=A({calc:!1,threshold:1e3,precision:50}),{cart:i}=S(),{productList:u,productSelectionList:c}=B(i),d=P(()=>c.value.length||u.value.length);return{cart:i,filterProdLength:d,handleCalcMoneyOff:()=>{if(d.value>24){l.$msg.error("\u9009\u62E9\u6570\u636E\u8FC7\u591A\uFF01");return}e.emit("calc",{categoryCoupon:t,moneyOff:n,balance:r})},categoryCoupon:t,moneyOff:n,balance:r}}},Q=o=>(K("data-v-f0bf0fde"),o=o(),W(),o),He={class:"calc-btn__wrapper"},Qe=Q(()=>v("div",{class:"ml10"},"\u6EE1\u51CF\u7C7B\u578B\uFF1A",-1)),Ge=Q(()=>v("div",{class:"ml10"},"\u7B5B\u9009\u7CBE\u5EA6\uFF1A",-1)),Xe={class:"ml10"};function Ye(o,e,l,n,t,r){const i=f("el-option"),u=f("el-select"),c=f("el-input"),d=f("el-form-item"),m=f("el-checkbox"),y=f("el-form"),C=f("el-button");return h(),O("div",He,[a(y,{ref:"form","label-width":"100px",inline:!0,"label-suffix":":"},{default:s(()=>[a(d,{label:"\u8BA1\u7B97\u6EE1\u51CF"},{default:s(()=>[Qe,a(u,{modelValue:n.moneyOff.id,"onUpdate:modelValue":e[0]||(e[0]=_=>n.moneyOff.id=_),disabled:!n.moneyOff.calc,style:{width:"100px"}},{default:s(()=>[(h(!0),O(L,null,x(n.cart.moneyOffMapping.options,_=>(h(),k(i,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"]),Ge,a(c,{modelValue:n.moneyOff.precision,"onUpdate:modelValue":e[1]||(e[1]=_=>n.moneyOff.precision=_),modelModifiers:{number:!0},disabled:!n.moneyOff.calc,style:{width:"100px"}},null,8,["modelValue","disabled"])]),_:1}),a(d,{label:"\u54C1\u7C7B\u5238"},{default:s(()=>[a(u,{class:"ml10",modelValue:n.categoryCoupon.type,"onUpdate:modelValue":e[2]||(e[2]=_=>n.categoryCoupon.type=_),clearable:"",multiple:"",style:{width:"250px"}},{default:s(()=>[(h(!0),O(L,null,x(n.cart.categoryCouponMapping.options,_=>(h(),k(i,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(d,{label:"\u4F7F\u7528\u6D88\u8D39\u5238"},{default:s(()=>[a(m,{modelValue:n.balance.calc,"onUpdate:modelValue":e[3]||(e[3]=_=>n.balance.calc=_)},null,8,["modelValue"]),a(u,{class:"ml10",modelValue:n.balance.threshold,"onUpdate:modelValue":e[4]||(e[4]=_=>n.balance.threshold=_),clearable:"",style:{width:"120px"},disabled:!n.balance.calc},{default:s(()=>[(h(!0),O(L,null,x(n.cart.voncherOptions,_=>(h(),k(i,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"]),g(" \u7B5B\u9009\u7CBE\u5EA6\uFF1A "),a(c,{modelValue:n.balance.precision,"onUpdate:modelValue":e[5]||(e[5]=_=>n.balance.precision=_),modelModifiers:{number:!0},disabled:!n.balance.calc,style:{width:"100px"}},null,8,["modelValue","disabled"])]),_:1})]),_:1},512),v("div",null,"\u9009\u4E2D"+N(n.filterProdLength)+"\u4E2A",1),a(C,{class:"ml10",onClick:n.handleCalcMoneyOff},{default:s(()=>[g("\u67E5\u8BE2")]),_:1},8,["onClick"]),v("div",Xe,"\u5171"+N(l.total)+"\u6761",1)])}const Ze=M(We,[["render",Ye],["__scopeId","data-v-f0bf0fde"]]);const $e={components:{FilterCondition:Ze},data(){return{columns:[],orders:[]}},setup(){const{cart:o}=S(),{productList:e,productSelectionList:l}=B(o),n=R(!1),t=R(""),r=R([]),i=()=>{n.value=!0,r.value=[],t.value="\u8BA1\u7B97\u4E2D"},u=()=>{n.value=!1,t.value="",r.value.length===0&&I.info("\u65E0\u7ED3\u679C\uFF0C\u8BF7\u4FEE\u6539\u7B5B\u9009\u6761\u4EF6!")},c=m=>new H({productList:D(l.value.length?l.value:e.value),calcCon:D(m),moneyOffConfig:D(o.moneyOffMapping.config),categoryCouponConfig:D(o.categoryCouponMapping.config)});return{productList:e,productSelectionList:l,loading:n,loadingMsg:t,dataSource:r,handleCalcMoneyOff:m=>{i(),setTimeout(async()=>{const y=c(m);r.value=await y.calc(),u()},50)}}},methods:{generateColumns(){const o=[{key:"products",title:"\u8BA2\u5355\u5546\u54C1",width:800},{key:"total",title:"\u603B\u8BA1",width:100},{key:"moneyOffPriceTotal",title:"\u6EE1\u51CF\u603B\u8BA1",width:100},{key:"moneyOffDiff",title:"\u6EE1\u51CF\u5DEE\u503C",width:100},{key:"balance",title:"\u5B9E\u4ED8",width:100},{key:"balanceDiff",title:"\u5B9E\u4ED8\u95E8\u69DB\u5DEE\u503C",width:100},{key:"categoryCoupon",title:"\u4F7F\u7528\u54C1\u7C7B\u5238",width:100}];this.columns=o.map(e=>{const{key:l}=e;return Object.assign(e,{props:l,dataKey:l})})}},created(){this.generateColumns()}},et=["element-loading-text"],tt={class:"sln__wrapper"};function ot(o,e,l,n,t,r){const i=f("filter-condition"),u=f("el-table-v2"),c=f("el-auto-resizer"),d=te("loading");return oe((h(),O("div",{class:"result__wrapper","element-loading-text":n.loadingMsg},[a(i,{total:n.dataSource.length,onCalc:n.handleCalcMoneyOff},null,8,["total","onCalc"]),v("div",tt,[a(c,null,{default:s(({height:m,width:y})=>[a(u,{columns:t.columns,data:n.dataSource,width:y,height:m},null,8,["columns","data","width","height"])]),_:1})])],8,et)),[[d,n.loading]])}const lt=M($e,[["render",ot],["__scopeId","data-v-eb38d4ab"]]);const nt={data(){return{activeName:"cart"}},components:{ShoppingCart:Ie,MoneyOffResult:lt,BrandList:Ke},methods:{}},at={class:"page_wrapper"},rt={class:"main__wrapper"};function st(o,e,l,n,t,r){const i=f("shopping-cart"),u=f("el-tab-pane"),c=f("brand-list"),d=f("el-tabs"),m=f("money-off-result");return h(),O("div",at,[v("div",rt,[a(d,{modelValue:t.activeName,"onUpdate:modelValue":e[0]||(e[0]=y=>t.activeName=y)},{default:s(()=>[a(u,{label:"\u8D2D\u7269\u8F66",name:"cart"},{default:s(()=>[a(i)]),_:1}),a(u,{label:"\u54C1\u724C",name:"brand"},{default:s(()=>[a(c)]),_:1})]),_:1},8,["modelValue"])]),a(m,{class:"money-off-wrapper"})])}const it=M(nt,[["render",st]]),ct=le({history:ne("/moneyoffcalc/"),routes:[{path:"/",name:"home",component:it}]});const j=ae(_e),G=re();G.use(se);j.use(G);j.use(ct).use(de);j.config.globalProperties.$msg=I;j.mount("#app");
