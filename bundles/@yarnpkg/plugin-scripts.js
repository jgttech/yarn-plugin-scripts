/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-scripts",
factory: function (require) {
var plugin=(()=>{var p=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var I=Object.prototype.hasOwnProperty;var n=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,o)=>(typeof require<"u"?require:r)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var j=(t,r)=>{for(var o in r)p(t,o,{get:r[o],enumerable:!0})},b=(t,r,o,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of P(r))!I.call(t,i)&&i!==o&&p(t,i,{get:()=>r[i],enumerable:!(a=A(r,i))||a.enumerable});return t};var E=t=>b(p({},"__esModule",{value:!0}),t);var D={};j(D,{default:()=>v});var u=n("child_process"),c=async(t,r,o)=>{var d;let a=(d=t.projectCwd)==null?void 0:d.endsWith(`dlx-${process.pid}`),i=t.get("scripts"),l=!!i[r]||!1,y=e=>(0,u.execSync)(e,{stdio:"inherit",cwd:t.projectCwd||void 0});try{if(!l&&o)throw new Error(`[yarn scripts] Script not found "${r}".`);i&&l&&!a&&i[r].forEach(C=>y(C))}catch(e){return(e==null?void 0:e.status)||1}return 0};var x=n("@yarnpkg/core"),f={scripts:{description:"Hook that will always run clean operations",type:x.SettingsType.ANY,default:""}};var g=n("@yarnpkg/core"),h=n("@yarnpkg/cli"),S=n("clipanion"),w=n("typanion");var s=class extends h.BaseCommand{constructor(){super(...arguments);this.script=S.Option.String({validator:(0,w.isString)()})}async execute(){let o=await g.Configuration.find(this.context.cwd,this.context.plugins);return c(o,this.script,!0)}};s.paths=[["scripts"]];var m=async t=>{await c(t.configuration,"afterAllInstalled",!1)};var k={configuration:f,commands:[s],hooks:{afterAllInstalled:m}},v=k;return E(D);})();
return plugin;
}
};
