import u from"./FormLabel.0e93f219.js";import p from"./FormHelptext.ffa3748c.js";import{d as f,r as s,o as t,b as o,a as n,e as m,h as c,L as b,F as h,g,t as y}from"./app.2d6b4786.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";const v=f({components:{FormHelptext:p,FormLabel:u},props:{label:{required:!0,type:String},helptext:{required:!1,default:"",type:String},modelValue:{required:!1,default:"",type:[String,Number,Boolean]},name:{required:!1,type:String,default:""},options:{required:!0,type:Array},required:{required:!1,default:!1,type:Boolean}},emits:["update:modelValue"],computed:{internalOptions(){return this.required?this.options:[{name:"------",value:null},...this.options]},model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}}}),_=["for"],F={class:"flex mt-1 space-x-2 items-center"},S=["id","name"],V=["value"];function $(e,l,k,B,L,x){const d=s("FormLabel"),i=s("FormHelptext");return t(),o("label",{for:e.name,class:"block relative"},[n(d,{required:e.required,label:e.label},null,8,["required","label"]),m("div",F,[c(m("select",{id:`form--${e.name}`,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),name:e.name,class:"cursor-pointer mt-1 appearance-none block w-full pl-3 pr-6 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lorgablue focus:border-lorgablue focus:ring-1 sm:text-sm"},[(t(!0),o(h,null,g(e.internalOptions,r=>{var a;return t(),o("option",{key:r.name||r,value:r.id||r.value||r},y((a=r.name)!=null?a:r),9,V)}),128))],8,S),[[b,e.model]])]),n(i,{"form-helptext":e.helptext},null,8,["form-helptext"])],8,_)}var D=q(v,[["render",$]]);export{D as default};
