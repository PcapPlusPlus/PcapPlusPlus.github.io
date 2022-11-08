"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[7741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2845:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(143),i=a(4996);const l=function(e){let{relativePath:t,children:a}=e;return n.createElement("a",{href:(0,i.Z)(`/api-docs/${(0,r.zu)().label.toLowerCase()}${t}`)},a)}},9634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905)),i=a(2845);const l={title:"Build for Android"},o="Build From Source for Android",p={unversionedId:"install/android",id:"version-v22.05/install/android",title:"Build for Android",description:"Prerequisites",source:"@site/versioned_docs/version-v22.05/install/android.mdx",sourceDirName:"install",slug:"/install/android",permalink:"/docs/v22.05/install/android",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.05/install/android.mdx",tags:[],version:"v22.05",frontMatter:{title:"Build for Android"},sidebar:"docs",previous:{title:"Build on Windows (MinGW)",permalink:"/docs/v22.05/install/mingw"},next:{title:"Build on FreeBSD",permalink:"/docs/v22.05/install/freebsd"}},d={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Do I need a rooted device in order to use PcapPlusPlus in my Android app?",id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app",level:2},{value:"Using PcapPlusPlus in my app",id:"using-pcapplusplus-in-my-app",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-from-source-for-android"},"Build From Source for Android"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In order to build PcapPlusPlus for Android please make sure you have the following prerequisites:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Linux machine - building on other platforms is currently not supported"),(0,r.kt)("li",{parentName:"ol"},"You should have ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/ndk"},"Android NDK")," installed"),(0,r.kt)("li",{parentName:"ol"},"Pre-compiled ",(0,r.kt)("inlineCode",{parentName:"li"},"libpcap")," library for Android + header files which can be downloaded from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seladb/libpcap-android"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"libpcap-android")," GitHub repo")," (for Android API versions 21-30)")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Run the configuration script from PcapPlusPlus main directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./configure-android.sh\n")),(0,r.kt)("p",null,"This script accepts the following arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Is mandatory / default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--ndk-path"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The path of Android NDK, for example: ",(0,r.kt)("inlineCode",{parentName:"td"},"/opt/Android/Sdk/ndk/22.0.7026061"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--target"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Target architecture which accepts the following values: ",(0,r.kt)("inlineCode",{parentName:"td"},"arm64-v8a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"armeabi-v7a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"x86"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"x86_64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--api"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional. Default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"29")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android API level. Must be between 21 and 30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--libpcap-include-dir"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"libpcap")," header files directory. Can be downloaded from ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/seladb/libpcap-android"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"libpcap-android")," GitHub repo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"--libpcap-lib-dir"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"libpcap")," pre-compiled libs directory. Can be downloaded from ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/seladb/libpcap-android"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"libpcap-android")," GitHub repo")," for all 4 targets and API versions 21-30")))),(0,r.kt)("p",null,"Here is an example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-android.sh --ndk-path /opt/Android/Sdk/ndk/22.0.7026061 --target arm64-v8a --api 29 --libpcap-include-dir ~/libpcap-android/include --libpcap-lib-dir ~/libpcap-android/arm64-v8a/30\n\n******************************************\nPcapPlusPlus Android configuration script\n******************************************\n\nBuild machine OS type: linux\nBuild machine OS arch: x86_64\n\nAndroid NDK root: /opt/Android/Sdk/ndk/22.0.7026061\nAnrdoid API level: 30\nAndroid toolchain path: /opt/Android/Sdk/ndk/22.0.7026061/toolchains/llvm/prebuilt/linux-x86_64\n\nTarget triple: aarch64-linux-android\n\nlibpcap include dir: /home/seladb/libpcap-android/include\nlibpcap library dir: /home/seladb/libpcap-android/arm64-v8a/30\n\nPcapPlusPlus Android configuration is complete.\n\nconfigurations is written to :\n    - /home/seladb/PcapPlusPlus/PcapPlusPlus/mk/platform.mk\n    - /home/seladb/PcapPlusPlus/PcapPlusPlus/mk/PcapPlusPlus.mk\n")),(0,r.kt)("h2",{id:"build-the-code"},"Build the code"),(0,r.kt)("p",null,"After running the config script, you're can safely build the code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"make libs")," to build PcapPlusPlus libraries only (which is the common use-case for Android) or ",(0,r.kt)("inlineCode",{parentName:"li"},"make all")," to build everything including the unit-tests and examples"),(0,r.kt)("li",{parentName:"ol"},"After a successful build you can find the libraries, header files, example executables (if built) and helpful makefiles under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Dist")," directory"),(0,r.kt)("li",{parentName:"ol"},"Please notice that in order to run ",(0,r.kt)("a",{parentName:"li",href:"../examples"},"PcapPlusPlus examples")," on an Android device you need shell access, and for some of them you also need a rooted device")),(0,r.kt)("h2",{id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app"},"Do I need a rooted device in order to use PcapPlusPlus in my Android app?"),(0,r.kt)("p",null,"The quick answer is no. A lot of PcapPlusPlus functionality will work on any device and any app. However, on non-rooted devices some of the features may not work. The main reason is that non-rooted devices do not allow access to the device's network interfaces and configuration. That means that capturing live network traffic using ",(0,r.kt)(i.Z,{relativePath:"/classpcpp_1_1_pcap_live_device.html",mdxType:"APIDocsLink"},(0,r.kt)("inlineCode",{parentName:"p"},"PcapLiveDevice"))," may not work, as well as opening raw sockets with ",(0,r.kt)(i.Z,{relativePath:"/classpcpp_1_1_raw_socket_device.html",mdxType:"APIDocsLink"},(0,r.kt)("inlineCode",{parentName:"p"},"RawSocketDevice")),". You may also need your app to request ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/training/data-storage"},"additional permissions to read and write files")," in order to read and write pcap/pcapng files."),(0,r.kt)("p",null,"But other than that, most of the features should work including parsing and analyzing of network packets and the ",(0,r.kt)("a",{parentName:"p",href:"../features#supported-network-protocols"},"various protocols")," supported by PcapPlusPlus, which is what ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus"},"ToyVpn-PcapPlusPlus")," demonstrates."),(0,r.kt)("p",null,"If you do have a rooted device most of PcapPlusPlus features should work. Please feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/PcapPlusPlus/issues"},"open an issue")," if something is not working as expected."),(0,r.kt)("h2",{id:"using-pcapplusplus-in-my-app"},"Using PcapPlusPlus in my app"),(0,r.kt)("p",null,"PcapPlusPlus is a native C++ library so in order to use it in an Android app you need to get familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/ndk"},"Android NDK")," which is the toolset for using native code in Android apps."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus"},"ToyVpn-PcapPlusPlus")," is a good way to get started because it provides a very simple yet end-to-end example of writing PcapPlusPlus code and integrating it with the app. Here are a few links to parts in the code you might find interesting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/pcapplusplus_interface.cpp"},(0,r.kt)("inlineCode",{parentName:"a"},"pcapplusplus_interface.cpp"))," - the C++ code that uses PcapPlusPlus. It exposes 2 ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/training/articles/perf-jni"},"JNI")," methods that are used within the app"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/CMakeLists.txt"},(0,r.kt)("inlineCode",{parentName:"a"},"CMakeLists.txt"))," - a CMake file to build the native code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/java/com/example/android/pcapplusplus/PcapPlusPlusInterface.kt"},(0,r.kt)("inlineCode",{parentName:"a"},"PcapPlusPlusInterface.kt"))," - a Kotlin file that uses the native JNI methods")),(0,r.kt)("p",null,"If you want to learn more we strongly recommend going over ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md"},"ToyVpn-PcapPlusPlus's ",(0,r.kt)("inlineCode",{parentName:"a"},"README.md"))," file as it contains very detail information of how PcapPlusPlus can be used in a real Android app."))}c.isMDXComponent=!0}}]);