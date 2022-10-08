/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-scripts",
factory: function (require) {
var plugin=(()=>{var p=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var s=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(i,o)=>(typeof require<"u"?require:i)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var P=(t,i)=>{for(var o in i)p(t,o,{get:i[o],enumerable:!0})},D=(t,i,o,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of y(i))!Y.call(t,r)&&r!==o&&p(t,r,{get:()=>i[r],enumerable:!(c=S(i,r))||c.enumerable});return t};var M=t=>D(p({},"__esModule",{value:!0}),t);var $={};P($,{default:()=>v});var m=s("@yarnpkg/shell"),f=s("@yarnpkg/cli"),d=s("@yarnpkg/core"),l=s("clipanion"),u=s("typanion"),n=class extends f.BaseCommand{constructor(){super(...arguments);this.script=l.Option.String({validator:(0,u.isString)()})}async execute(){var a;let o=await d.Configuration.find(this.context.cwd,this.context.plugins),c=(a=o.projectCwd)==null?void 0:a.endsWith(`dlx-${process.pid}`),r=o.get("scripts"),h=!!r[this.script]||!1,C=e=>(0,m.execute)(e,[],{cwd:o.projectCwd||void 0});if(r&&h&&!c){let e=r[this.script];this.context.stdout.write(`Running script: "${this.script}"
`),e.forEach(w=>{C(w)})}}};n.paths=[["scripts"]];var g=s("@yarnpkg/core"),x={scripts:{description:"Hook that will always run clean operations",type:g.SettingsType.ANY,default:""}};var k={configuration:x,commands:[n]},v=k;return M($);})();
return plugin;
}
};
