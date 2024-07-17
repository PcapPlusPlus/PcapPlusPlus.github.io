"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[3077],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=i,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2845:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),i=a(143),r=a(4996);const l=function(e){let{relativePath:t,children:a}=e;return n.createElement("a",{href:(0,r.Z)(`/api-docs/${(0,i.zu)().label.toLowerCase()}${t}`)},a)}},9457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),i=(a(7294),a(3905)),r=a(2845);const l={title:"Build for Android"},o="Build From Source for Android",p={unversionedId:"install/android",id:"version-v23.09/install/android",title:"Build for Android",description:"Prerequisites",source:"@site/versioned_docs/version-v23.09/install/android.mdx",sourceDirName:"install",slug:"/install/android",permalink:"/docs/install/android",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v23.09/install/android.mdx",tags:[],version:"v23.09",frontMatter:{title:"Build for Android"},sidebar:"docs",previous:{title:"Build on Windows (MinGW-w64)",permalink:"/docs/install/mingw"},next:{title:"Build on FreeBSD",permalink:"/docs/install/freebsd"}},d={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build",id:"build",level:2},{value:"Installation",id:"installation",level:2},{value:"Do I need a rooted device in order to use PcapPlusPlus in my Android app?",id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app",level:2},{value:"Using PcapPlusPlus in my app",id:"using-pcapplusplus-in-my-app",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-from-source-for-android"},"Build From Source for Android"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to build PcapPlusPlus for Android please make sure you have the following prerequisites:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/ndk"},"Android NDK")," should be installed"),(0,i.kt)("li",{parentName:"ol"},"Pre-compiled ",(0,i.kt)("inlineCode",{parentName:"li"},"libpcap")," library for Android + header files which can be downloaded from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seladb/libpcap-android"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"libpcap-android")," GitHub repo")," (for Android API versions 21-30)")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"In order to build for Android a few parameters are needed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The path of Android NDK. Let's assume it's stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"ANDROID_NDK")),(0,i.kt)("li",{parentName:"ul"},"Android API version - must be between 21 and 30. Let's assume it's stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"API_VERSIOM")),(0,i.kt)("li",{parentName:"ul"},"Target architecture which accepts the following values: ",(0,i.kt)("inlineCode",{parentName:"li"},"arm64-v8a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"armeabi-v7a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"x86"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"x86_64"),". Let's assume it's stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"ANDROID_ABI")),(0,i.kt)("li",{parentName:"ul"},"The path of ",(0,i.kt)("inlineCode",{parentName:"li"},"libpcap")," compiled for Android. Let's assume it's stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"LIBPCAP_DIR"))),(0,i.kt)("p",null,"Assuming you want to build PcapPlusPlus into a ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cmake \\\n-DCMAKE_TOOLCHAIN_FILE="${ANDROID_NDK}/build/cmake/android.toolchain.cmake" \\\n-DANDROID_PLATFORM="${API_VERSION}" \\\n-DANDROID_ABI="${ABI}" \\\n-DPCAP_LIBRARY="${LIBPCAP_DIR}/${ABI}/${API_VERSION}/libpcap.a" \\\n-DPCAP_INCLUDE_DIR="${LIBPCAP_DIR}/include/" \\\n-DPCAPPP_BUILD_TESTS=OFF \\\n-DPCAPPP_BUILD_EXAMPLES=OFF \\\n-S . -B build\n')),(0,i.kt)("admonition",{title:"NOTE",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"-DPCAPPP_BUILD_TESTS=OFF")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-DPCAPPP_BUILD_EXAMPLES=OFF")," are not mandatory, but building PcapPlusPlus tests and examples for Android usually doesn't make sense.")),(0,i.kt)("p",null,"And then initiate the build in one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using CMake:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cmake --build build\n"))),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"make"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd build\nmake\n")))),(0,i.kt)("p",null,"This process will build the PcapPlusPlus libs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build/Common++/libCommon++.a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build/Packet++/libPacket++.a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build/Pcap++/libPcap++.a"))),(0,i.kt)("p",null,"The following configuration options are available (on top of CMake's built-in options):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DCMAKE_TOOLCHAIN_FILE=<PATH>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Android CMake toolchain file, usuaully resides in: ",(0,i.kt)("inlineCode",{parentName:"td"},"${ANDROID_NDK}/build/cmake/android.toolchain.cmake"),". This is a mandatory option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DANDROID_PLATFORM=<API_VERSION>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Android API version, must be between 21 and. . This is a mandatory option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DANDROID_ABI=<TARGET_ARCH>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Android target architecture which accepts one of the following values: ",(0,i.kt)("inlineCode",{parentName:"td"},"arm64-v8a"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"armeabi-v7a"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"x86"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"x86_64"),". This is a mandatory option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAP_LIBRARY=<LIBPCAP_DIR>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The path of ",(0,i.kt)("inlineCode",{parentName:"td"},"libpcap.a")," that is compiled for Android with the target architecture and API version, for example: ",(0,i.kt)("inlineCode",{parentName:"td"},"${LIBPCAP_DIR}/${ABI}/${API_VERSION}/libpcap.a"),". This is a mandatory option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAP_INCLUDE_DIR=<LIBPCAP_INCLUDE_DIR>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The path of lipbpcap include files, for example: ",(0,i.kt)("inlineCode",{parentName:"td"},"${LIBPCAP_DIR}/include/"),". This is a mandatory option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_EXAMPLES=<ON/OFF>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus examples, in most cases should be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"OFF"),". If you want to run ",(0,i.kt)("a",{parentName:"td",href:"../examples"},"PcapPlusPlus examples")," on an Android device you need shell access, and for some of them you also need a rooted device. The examples will reside in ",(0,i.kt)("inlineCode",{parentName:"td"},"build/examples_bin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_TESTS=<ON/OFF>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus tests, in most cases should be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_TUTORIALS=<ON/OFF>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus tutorials. This option is only available if ",(0,i.kt)("inlineCode",{parentName:"td"},"DPCAPPP_BUILD_EXAMPLES=ON")," (default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_INSTALL=<ON/OFF>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Install PcapPlusPlus (default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"ON")," if building the project itself, otherwise ",(0,i.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DBUILD_SHARED_LIBS=<ON/OFF>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Build shared libs (default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_ENABLE_PCAP_IMMEDIATE_MODE=<ON/OFF>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enable pcap immediate mode (default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_ENABLE_PCAP_SET_DIRECTION=<ON/OFF>"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enable set direction for capturing incoming or outgoing packets (default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"OFF"),")")))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"When building for Android the build machine (host) is usually different from the target device (target), so you may want to gather the lib and header files in a directory in the host instead of installing it on it.\nYou can use the following command in order to achieve this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'DESTDIR=<DIR> cmake --install build --prefix "/"\n')),(0,i.kt)("h2",{id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app"},"Do I need a rooted device in order to use PcapPlusPlus in my Android app?"),(0,i.kt)("p",null,"The quick answer is no. A lot of PcapPlusPlus functionality will work on any device and any app. However, on non-rooted devices some of the features may not work. The main reason is that non-rooted devices do not allow access to the device's network interfaces and configuration. That means that capturing live network traffic using ",(0,i.kt)(r.Z,{relativePath:"/classpcpp_1_1_pcap_live_device.html",mdxType:"APIDocsLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PcapLiveDevice"))," may not work, as well as opening raw sockets with ",(0,i.kt)(r.Z,{relativePath:"/classpcpp_1_1_raw_socket_device.html",mdxType:"APIDocsLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RawSocketDevice")),". You may also need your app to request ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/training/data-storage"},"additional permissions to read and write files")," in order to read and write pcap/pcapng files."),(0,i.kt)("p",null,"But other than that, most of the features should work including parsing and analyzing of network packets and the ",(0,i.kt)("a",{parentName:"p",href:"../features#supported-network-protocols"},"various protocols")," supported by PcapPlusPlus, which is what ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus"},"ToyVpn-PcapPlusPlus")," demonstrates."),(0,i.kt)("p",null,"If you do have a rooted device most of PcapPlusPlus features should work. Please feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seladb/PcapPlusPlus/issues"},"open an issue")," if something is not working as expected."),(0,i.kt)("h2",{id:"using-pcapplusplus-in-my-app"},"Using PcapPlusPlus in my app"),(0,i.kt)("p",null,"PcapPlusPlus is a native C++ library so in order to use it in an Android app you need to get familiar with ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/ndk"},"Android NDK")," which is the toolset for using native code in Android apps."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus"},"ToyVpn-PcapPlusPlus")," is a good way to get started because it provides a very simple yet end-to-end example of writing PcapPlusPlus code and integrating it with the app. Here are a few links to parts in the code you might find interesting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/pcapplusplus_interface.cpp"},(0,i.kt)("inlineCode",{parentName:"a"},"pcapplusplus_interface.cpp"))," - the C++ code that uses PcapPlusPlus. It exposes 2 ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/articles/perf-jni"},"JNI")," methods that are used within the app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/CMakeLists.txt"},(0,i.kt)("inlineCode",{parentName:"a"},"CMakeLists.txt"))," - a CMake file to build the native code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/java/com/example/android/pcapplusplus/PcapPlusPlusInterface.kt"},(0,i.kt)("inlineCode",{parentName:"a"},"PcapPlusPlusInterface.kt"))," - a Kotlin file that uses the native JNI methods")),(0,i.kt)("p",null,"If you want to learn more we strongly recommend going over ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md"},"ToyVpn-PcapPlusPlus's ",(0,i.kt)("inlineCode",{parentName:"a"},"README.md"))," file as it contains very detail information of how PcapPlusPlus can be used in a real Android app."))}m.isMDXComponent=!0}}]);