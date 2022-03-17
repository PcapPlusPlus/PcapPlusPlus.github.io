"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[2083],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Build on MacOS"},s="Build From Source on MacOS",p={unversionedId:"install/macos",id:"version-v21.11/install/macos",title:"Build on MacOS",description:"Prerequisites",source:"@site/versioned_docs/version-v21.11/install/macos.mdx",sourceDirName:"install",slug:"/install/macos",permalink:"/docs/install/macos",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v21.11/install/macos.mdx",tags:[],version:"v21.11",frontMatter:{title:"Build on MacOS"},sidebar:"docs",previous:{title:"Build on Linux",permalink:"/docs/install/linux"},next:{title:"Build on Windows (VS)",permalink:"/docs/install/vs"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Installation",id:"installation",level:2},{value:"Running tests",id:"running-tests",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-from-source-on-macos"},"Build From Source on MacOS"),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to compile PcapPlusPlus on Linux please make sure you have the following components installed:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode/"},"Xcode")," which contains all prerequisites required for PcapPlusPlus including gcc/g++ compiler and libpcap with all relevant header files")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make sure you have Xcode Command Line Tools. You can install it by running the following command in Terminal:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"PcapPlusPlus is available for both ",(0,l.kt)("strong",{parentName:"p"},"Intel")," and ",(0,l.kt)("strong",{parentName:"p"},"Apple silicon (M1)")," processors. To build for Apple silicon please use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--arm64")," flag (please see below)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"OPTIONAL")," - install ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/zstd/"},"Zstd")," if you wish to enable ",(0,l.kt)("a",{parentName:"p",href:"../features#readingwriting-pcapng-files-with-compression"},"PCAPNG streaming compression support"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install zstd\n")))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Run the configuration script from PcapPlusPlus main directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./configure-mac_os_x.sh\n")),(0,l.kt)("p",null,"This script has the following command-line switches (you can also view then by running ",(0,l.kt)("inlineCode",{parentName:"p"},"./configure-mac_os_x.sh --help")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./configure-mac_os_x.sh -h"),"):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"no switches")),(0,l.kt)("td",{parentName:"tr",align:"left"},"use the default configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--use-immediate-mode"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"use libpcap immediate mode which enables getting packets as fast as possible (supported on libpcap>=1.5)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--set-direction-enabled"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"set direction for capturing incoming or outgoing packets (supported on libpcap>=0.9.1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--install-dir"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"set a custom installation directory. Default is ",(0,l.kt)("inlineCode",{parentName:"td"},"/usr/local"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--libpcap-include-dir"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"libpcap header files directory. This parameter is optional and if omitted PcapPlusPlus will look for the header files in the default include paths")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--libpcap-lib-dir"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"libpcap pre compiled lib directory. This parameter is optional and if omitted PcapPlusPlus will look for the lib file in the default lib paths")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--use-zstd"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"use ",(0,l.kt)("a",{parentName:"td",href:"../features#readingwriting-pcapng-files-with-compression"},"Zstd for PCAPNG streaming compression"),". This parameter is optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--arm64"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"build for Apple Silicon M1 (arm64 architecture). This flag can be used for cross-compilation which means you can don't have to run the build on an Apple silicon M1 machine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-h")),", ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--help"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"displays a help message and exits. No further actions are performed")))),(0,l.kt)("p",null,"Here are a few examples:"),(0,l.kt)("p",null,"Default configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-mac_os_x.sh\n")),(0,l.kt)("p",null,"Configure PcapPlusPlus with libpcap's immediate mode:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-mac_os_x.sh --use-immediate-mode\n")),(0,l.kt)("p",null,"Configure PcapPlusPlus with libpcap's set direction:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-mac_os_x.sh --set-direction-enabled\n")),(0,l.kt)("p",null,"Provide non-standard paths for libpcap header and library files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-mac_os_x.sh --libpcap-include-dir /home/myuser/my-libpcap/include --libpcap-lib-dir /home/myuser/my-libpcap/lib\n")),(0,l.kt)("p",null,"Provide a custom installation directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-mac_os_x.sh --install-dir /home/myuser/my-install-dir\n")),(0,l.kt)("p",null,"Use Zstd for pcapng compression:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-linux.sh --use-zstd\n")),(0,l.kt)("h2",{id:"build-the-code"},"Build the code"),(0,l.kt)("p",null,"After running the config script, you're can safely build the code:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"make")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"make all")," from PcapPlusPlus main directory"),(0,l.kt)("li",{parentName:"ol"},"This should compile all libraries, unit-tests and examples"),(0,l.kt)("li",{parentName:"ol"},"To build the libraries only (without the unit-tests and examples) run ",(0,l.kt)("inlineCode",{parentName:"li"},"make libs")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"make all")),(0,l.kt)("li",{parentName:"ol"},"After compilation you can find the libraries, examples, header files and helpful makefiles under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Dist")," directory")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"After build is complete you can run the installation script which will copy the library and header files to the installation directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"MyMAC:PcapPlusPlus seladb$ sudo make install\nInstallation complete!\nMyMAC:PcapPlusPlus seladb$\n")),(0,l.kt)("p",null,"The default installation directory is ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," which means the header files will be copied to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/include/pcapplusplus")," and the library files will be copied to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/lib"),"."),(0,l.kt)("p",null,"You can change the installation directory by using the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"--install-dir"))," switch in the configuration script."),(0,l.kt)("h2",{id:"running-tests"},"Running tests"),(0,l.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,l.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}m.isMDXComponent=!0}}]);