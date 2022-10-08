/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-scripts",
factory: function (require) {
var plugin=(()=>{var p=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var P=Object.prototype.hasOwnProperty;var n=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(i,o)=>(typeof require<"u"?require:i)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var D=(t,i)=>{for(var o in i)p(t,o,{get:i[o],enumerable:!0})},M=(t,i,o,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of S(i))!P.call(t,r)&&r!==o&&p(t,r,{get:()=>i[r],enumerable:!(c=y(i,r))||c.enumerable});return t};var Y=t=>M(p({},"__esModule",{value:!0}),t);var $={};D($,{default:()=>v});var m=n("child_process"),f=n("@yarnpkg/cli"),d=n("@yarnpkg/core"),l=n("clipanion"),u=n("typanion"),s=class extends f.BaseCommand{constructor(){super(...arguments);this.script=l.Option.String({validator:(0,u.isString)()})}async execute(){var a;let o=await d.Configuration.find(this.context.cwd,this.context.plugins),c=(a=o.projectCwd)==null?void 0:a.endsWith(`dlx-${process.pid}`),r=o.get("scripts"),x=!!r[this.script]||!1,C=e=>(0,m.execSync)(e,{stdio:"inherit",cwd:o.projectCwd||void 0});if(r&&x&&!c){let e=r[this.script];this.context.stdout.write(`Running script: "${this.script}"
`),e.forEach(w=>{C(w)})}}};s.paths=[["scripts"]];var g=n("@yarnpkg/core"),h={scripts:{description:"Hook that will always run clean operations",type:g.SettingsType.ANY,default:""}};var k={configuration:h,commands:[s]},v=k;return Y($);})();
return plugin;
}
};
