#!/usr/bin/env node
(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("yargs");var n=e.n(t);const s=require("fs");var o=e.n(s);const i=require("path");var r=e.n(i);const a=require("inquirer");var c=e.n(a);const l=require("chalk");var p=e.n(l);const d=require("fs/promises");var u=e.n(d);const y=e=>void 0===e,m=(e,{color:t="green",lineDown:n=1}={})=>{console.log(""),console.log(p()[t].bold(e)),n&&console.log("")},b=e=>{m(e,{color:"red"})},g=(...e)=>console.log.apply(void 0,e),f=e=>{const t=r().dirname(e);return!!o().existsSync(t)||(o().mkdirSync(t),f(t))},h=(e,t)=>{let n=e[t]||{};if("string"==typeof n)try{n=JSON.parse(n)}catch(e){b(`Error while parsing "${t}" option`),b(e),n={}}return n},v=e=>({...e,babel:h(e,"babel"),htmlWebpack:h(e,"htmlWebpack")}),w=(e,t)=>{const n=o().existsSync(e);n&&o().statSync(e).isDirectory()?(o().mkdirSync(t),o().readdirSync(e).forEach((n=>{w(r().join(e,n),r().join(t,n))}))):n&&o().copyFileSync(e,t)},S=e=>r().resolve(process.cwd(),e),k=()=>require,j=e=>k().resolve(e),x=(e={})=>({presets:[[j("@babel/preset-env"),{targets:e.targets}]],plugins:[j("@babel/plugin-transform-runtime")]}),F=require("listr");var $=e.n(F);const _=require("spdx-license-list/full");var q=e.n(_);const O=require("lodash.template");var E=e.n(O);const P="1.0.0",C="./template",N=process.cwd(),B=e=>{const t=r().resolve(__dirname,`${C}/${e}`);return o().readFileSync(t,"utf8")},D=e=>r().resolve(N,e),I=e=>r().resolve(__dirname,`${C}/${e}`),A=e=>!(!e||"false"===e),R=require("dts-bundle-generator"),T=require("webpack");var W=e.n(T);const J=require("html-webpack-plugin");var L=e.n(J);const M=require("terser-webpack-plugin");var H=e.n(M);const U=process.cwd();let z=[];const G=(e={})=>{const t=r().join(U,"package.json"),n=o().readFileSync(t),s=JSON.parse(n),{args:i,cmdOpts:a={}}=e,{htmlWebpack:c={}}=i,l=s.name,d=e.production,u=`/*! ${l} - ${s.version} */`;if(!d){const e="index.html",t=`${U}/${e}`,n=`${U}/_${e}`;let s=r().resolve(__dirname,`./../${e}`);o().existsSync(n)?s=n:o().existsSync(t)&&(s=t),z.push(new(L())({inject:"head",template:s,...c,templateParameters:{name:l,title:l,dragifyVersion:"latest",pathdragify:"",pathdragifyCss:"",...c.templateParameters||{}}}))}const y=r().resolve(U,i.output),m=["node_modules",r().join(__dirname,"../node_modules")];let b={entry:r().resolve(U,i.entry),mode:d?"production":"development",devtool:d?"source-map":"eval",optimization:{minimizer:[new(H())({extractComments:!1,terserOptions:{compress:{evaluate:!1},output:{comments:!1,quote_style:3,preamble:u}}})]},output:{path:y,filename:"index.js",library:l,libraryTarget:"umd",globalObject:"typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this)"},module:{rules:[{test:/\.tsx?$/,loader:j("ts-loader"),exclude:/node_modules/,options:{context:S(""),configFile:S("tsconfig.json")}},{test:/\.js$/,loader:j("babel-loader"),include:/src/,options:{...x(i),cacheDirectory:!0,...i.babel}}]},resolve:{extensions:[".tsx",".ts",".js"],modules:m},plugins:z};const f=S("webpack.config.js");let h;if(o().existsSync(f)){const e=k()(f);h=e.default||e}if("function"==typeof h){const e=h({config:b,webpack:W(),pkg:s});b=null===(v=e)||Array.isArray(v)||"object"!=typeof v?b:e}var v;return a.verbose&&g(p().yellow("Webpack config:\n"),b,"\n"),b},Y=require("child_process"),V=require("rimraf");var K=e.n(V);const Q=require("@babel/core"),X=async(e={})=>{const t=S("src/index.ts");if(!o().existsSync(t))return;m("Start building TS declaration file...",{lineDown:0});const n={filePath:t,output:{noBanner:!0}},s={preferredConfigPath:S("tsconfig.json")},i=(0,R.generateDtsBundle)([n],s)[0];await(async(e,t)=>{try{const n=r().dirname(e);await(async e=>{try{return await u().access(e),!0}catch{return!1}})(n)||await u().mkdir(n,{recursive:!0}),await u().writeFile(e,t,"utf8")}catch(e){throw new Error(e)}})(S("dist/index.d.ts"),i),m("TS declaration file building completed successfully!")},Z=require("webpack-dev-server");var ee=e.n(Z);n().usage(p().green.bold(o().readFileSync(r().resolve(__dirname,"./banner.txt"),"utf8")+`\nv${P}`));const te=e=>{e.positional("config",{describe:"webpack configuration options",type:"string",default:"{}"}).positional("babel",{describe:"Babel configuration object",type:"string",default:"{}"}).positional("targets",{describe:"Browser targets in browserslist query",type:"string",default:"> 0.25%, not dead"}).positional("entry",{describe:"Library entry point",type:"string",default:"src/index"}).positional("output",{describe:"Build destination directory",type:"string",default:"dist"})},ne=e=>e.command(["serve [port]","server"],"Start the server",(e=>{e.positional("devServer",{describe:"webpack-dev-server options",type:"string",default:"{}"}).positional("host",{alias:"h",describe:"Host to bind on",type:"string",default:"localhost"}).positional("port",{alias:"p",describe:"Port to bind on",type:"number",default:8080}).positional("htmlWebpack",{describe:"html-webpack-plugin options",type:"string",default:"{}"}),te(e)}),(e=>((e={})=>{m("Start the development server...");const{host:t,port:n}=e,s=e.verbose,o={...G({args:v(e),cmdOpts:e}),...h(e,"webpack")},i={...o.devServer,open:!0,...h(e,"devServer")};"localhost"!==t&&(i.host=t),8080!==n&&(i.port=n),s&&(g(p().yellow("Server config:\n"),e,"\n"),g(p().yellow("DevServer config:\n"),i,"\n"));const r=W()(o);new(ee())(i,r).start()})(e))).command("build","Build the source",(e=>{e.positional("stats",{describe:"Options for webpack Stats instance",type:"string",default:"{}"}).positional("statsOutput",{describe:'Specify the path where to output webpack stats file (eg. "stats.json")',type:"string",default:""}).positional("patch",{describe:"Increase automatically the patch version",type:"boolean",default:!0}).positional("localePath",{describe:"Path to the directory containing locale files",type:"string",default:"src/locale"}).positional("dts",{describe:'Generate typescript dts file ("include", "skip", "only")',type:"string",default:"include"}),te(e)}),(e=>((e={})=>{m("Start building the library...");const t=e.verbose,{dts:n}=e;t&&g(p().yellow("Build config:\n"),e,"\n");const s=()=>{const s={...G({production:1,args:v(e),cmdOpts:e}),...h(e,"config")};if("only"===n)return X(e);W()(s,(async(s,i)=>{const r=s||!!i&&i.hasErrors(),a={hash:!1,colors:!0,builtAt:!1,entrypoints:!1,modules:!1,...h(e,"stats")};if(i){e.statsOutput&&o().writeFileSync(S(e.statsOutput),JSON.stringify(i.toJson())),t&&g(p().yellow("Stats config:\n"),a,"\n");const n=i.toString(a);g(n,"\n")}await(async(e={})=>{const{localePath:t}=e;if(!o().existsSync(S(t)))return;m("Start building locale files...",{lineDown:0}),await K()("locale");const n=S("locale");w(S(t),n);let s="";o().readdirSync(n).forEach((e=>{const t=e.split(".")[0];s+=`export { default as ${t} } from './${t}'\n`})),o().writeFileSync(`${n}/index.js`,s);const i={...x(v(e))};o().readdirSync(n).forEach((e=>{const t=`${n}/${e}`,s=(0,Q.transformFileSync)(t,i).code;o().writeFileSync(t,s)})),m("Locale files building completed successfully!")})(e),"skip"!==n&&await X(e),r?(b("Error during building"),console.error(s)):m("Building completed successfully!")}))};e.patch?(t&&g(p().yellow("Patch the version"),"\n"),(0,Y.exec)("npm version --no-git-tag-version patch",s)):s()})(e))).command("init","Init dragifyJS plugin project",(e=>{e.positional("yes",{alias:"y",describe:"All default answers",type:"boolean",default:!1}).positional("name",{describe:"Name of the project",type:"string"}).positional("rName",{describe:"Repository name",type:"string"}).positional("user",{describe:"Repository username",type:"string"}).positional("components",{describe:"Indicate to include custom component types API",type:"boolean"}).positional("blocks",{describe:"Indicate to include blocks API",type:"boolean"}).positional("i18n",{describe:"Indicate to include the support for i18n",type:"boolean"}).positional("license",{describe:"License of the project",type:"string"})}),(e=>(async(e={})=>{const t=r().basename(process.cwd()),n=[],{verbose:s,name:i,rName:a,user:l,yes:p,components:d,blocks:u,i18n:b,license:h}=e;let v={name:i||(w=t,w.replace(/\_/g,"-").split("-").filter((e=>e)).map((e=>e[0].toUpperCase()+e.slice(1))).join(" ")),rName:a||t,user:l||"YOUR-USERNAME",components:!!y(d)||d,blocks:!!y(u)||u,i18n:!!y(b)||b,license:h||"MIT"};var w;m(`Init the project${s?" (verbose)":""}...`),p||(!i&&n.push({name:"name",message:"Name of the project",default:v.name}),!a&&n.push({name:"rName",message:"Repository name (used also as the plugin name)",default:v.rName}),!l&&n.push({name:"user",message:"Repository username (eg. on GitHub/Bitbucket)",default:v.user}),y(d)&&n.push({type:"boolean",name:"components",message:"Will you need to add custom Component Types?",default:v.components}),y(u)&&n.push({type:"boolean",name:"blocks",message:"Will you need to add Blocks?",default:v.blocks}),y(b)&&n.push({type:"boolean",name:"i18n",message:"Do you want to setup i18n structure in this plugin?",default:v.i18n}),!h&&n.push({name:"license",message:"License of the project",default:v.license}));const S=await c().prompt(n);v={...v,...S},s&&g({results:v,opts:e}),await(async(e={})=>{m("Start project creation..."),e.components=A(e.components),e.blocks=A(e.blocks),e.i18n=A(e.i18n);const t=new($())([{title:"Creating initial source files",task:()=>(async(e={})=>{const t=B("README.md"),n=D("README.md"),s=B("src/index.js"),i=D("src/index.js"),r=B("_index.html"),a=D("_index.html"),c=q()[e.license],l=c&&(c.licenseText||"").replace("<year>",`${(new Date).getFullYear()}-current`).replace("<copyright holders>",e.name);f(i),o().writeFileSync(i,E()(s)(e).trim()),o().writeFileSync(a,E()(r)(e)),o().writeFileSync(n,E()(t)(e)),l&&o().writeFileSync(D("LICENSE"),l),o().copyFileSync(I(".gitignore-t"),D(".gitignore")),o().copyFileSync(I(".npmignore-t"),D(".npmignore")),o().copyFileSync(I("tsconfig.json"),D("tsconfig.json"))})(e)},{title:"Creating custom Component Type file",task:()=>((e={})=>{const t="src/components.js",n=I(t),s=D(t);e.components&&o().copyFileSync(n,s)})(e),enabled:()=>e.components},{title:"Creating Blocks file",task:()=>((e={})=>{const t="src/blocks.js",n=I(t),s=D(t);e.blocks&&o().copyFileSync(n,s)})(e),enabled:()=>e.blocks},{title:"Creating i18n structure",task:()=>((e={})=>{const t="src/locale/en.js",n=B(t),s=D(t);f(s),o().writeFileSync(s,E()(n)(e))})(e),enabled:()=>e.i18n},{title:"Update package.json",task:()=>((e={})=>{const t="package.json",n=B(t),s=D(t);o().writeFileSync(s,E()(n)({...e,version:P}))})(e)}]);await t.run()})(v),m("Project created! Happy coding")})(e))).options({verbose:{alias:"v",description:"Run with verbose logging",type:"boolean",default:!1}}).recommendCommands().strict();(async()=>{try{(await(async()=>await ne(n()).parse())())._.length||n().showHelp()}catch(e){b((e.stack||e).toString())}})()})();