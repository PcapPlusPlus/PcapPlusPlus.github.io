"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[1443],{8840:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"install/android","title":"Build for Android","description":"Prerequisites","source":"@site/versioned_docs/version-v23.09/install/android.mdx","sourceDirName":"install","slug":"/install/android","permalink":"/docs/v23.09/install/android","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v23.09/install/android.mdx","tags":[],"version":"v23.09","frontMatter":{"title":"Build for Android"},"sidebar":"docs","previous":{"title":"Build on Windows (MinGW-w64)","permalink":"/docs/v23.09/install/mingw"},"next":{"title":"Build on FreeBSD","permalink":"/docs/v23.09/install/freebsd"}}');var l=i(4848),t=i(8453),d=i(4211);const r={title:"Build for Android"},o="Build From Source for Android",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build",id:"build",level:2},{value:"Installation",id:"installation",level:2},{value:"Do I need a rooted device in order to use PcapPlusPlus in my Android app?",id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app",level:2},{value:"Using PcapPlusPlus in my app",id:"using-pcapplusplus-in-my-app",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"build-from-source-for-android",children:"Build From Source for Android"})}),"\n",(0,l.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(s.p,{children:"In order to build PcapPlusPlus for Android please make sure you have the following prerequisites:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://developer.android.com/ndk",children:"Android NDK"})," should be installed"]}),"\n",(0,l.jsxs)(s.li,{children:["Pre-compiled ",(0,l.jsx)(s.code,{children:"libpcap"})," library for Android + header files which can be downloaded from ",(0,l.jsxs)(s.a,{href:"https://github.com/seladb/libpcap-android",children:["the ",(0,l.jsx)(s.code,{children:"libpcap-android"})," GitHub repo"]})," (for Android API versions 21-30)"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"build",children:"Build"}),"\n",(0,l.jsx)(s.p,{children:"In order to build for Android a few parameters are needed:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["The path of Android NDK. Let's assume it's stored in ",(0,l.jsx)(s.code,{children:"ANDROID_NDK"})]}),"\n",(0,l.jsxs)(s.li,{children:["Android API version - must be between 21 and 30. Let's assume it's stored in ",(0,l.jsx)(s.code,{children:"API_VERSIOM"})]}),"\n",(0,l.jsxs)(s.li,{children:["Target architecture which accepts the following values: ",(0,l.jsx)(s.code,{children:"arm64-v8a"}),", ",(0,l.jsx)(s.code,{children:"armeabi-v7a"}),", ",(0,l.jsx)(s.code,{children:"x86"}),", ",(0,l.jsx)(s.code,{children:"x86_64"}),". Let's assume it's stored in ",(0,l.jsx)(s.code,{children:"ANDROID_ABI"})]}),"\n",(0,l.jsxs)(s.li,{children:["The path of ",(0,l.jsx)(s.code,{children:"libpcap"})," compiled for Android. Let's assume it's stored in ",(0,l.jsx)(s.code,{children:"LIBPCAP_DIR"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Assuming you want to build PcapPlusPlus into a ",(0,l.jsx)(s.code,{children:"build"})," directory:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'cmake \\\n-DCMAKE_TOOLCHAIN_FILE="${ANDROID_NDK}/build/cmake/android.toolchain.cmake" \\\n-DANDROID_PLATFORM="${API_VERSION}" \\\n-DANDROID_ABI="${ABI}" \\\n-DPCAP_LIBRARY="${LIBPCAP_DIR}/${ABI}/${API_VERSION}/libpcap.a" \\\n-DPCAP_INCLUDE_DIR="${LIBPCAP_DIR}/include/" \\\n-DPCAPPP_BUILD_TESTS=OFF \\\n-DPCAPPP_BUILD_EXAMPLES=OFF \\\n-S . -B build\n'})}),"\n",(0,l.jsx)(s.admonition,{title:"NOTE",type:"tip",children:(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"-DPCAPPP_BUILD_TESTS=OFF"})," and ",(0,l.jsx)(s.code,{children:"-DPCAPPP_BUILD_EXAMPLES=OFF"})," are not mandatory, but building PcapPlusPlus tests and examples for Android usually doesn't make sense."]})}),"\n",(0,l.jsx)(s.p,{children:"And then initiate the build in one of two ways:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Using CMake:","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"cmake --build build\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["Using ",(0,l.jsx)(s.code,{children:"make"}),":","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"cd build\nmake\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"This process will build the PcapPlusPlus libs:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"build/Common++/libCommon++.a"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"build/Packet++/libPacket++.a"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"build/Pcap++/libPcap++.a"})}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"The following configuration options are available (on top of CMake's built-in options):"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Option"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DCMAKE_TOOLCHAIN_FILE=<PATH>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Android CMake toolchain file, usuaully resides in: ",(0,l.jsx)(s.code,{children:"${ANDROID_NDK}/build/cmake/android.toolchain.cmake"}),". This is a mandatory option"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DANDROID_PLATFORM=<API_VERSION>"})})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"Android API version, must be between 21 and. . This is a mandatory option"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DANDROID_ABI=<TARGET_ARCH>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Android target architecture which accepts one of the following values: ",(0,l.jsx)(s.code,{children:"arm64-v8a"}),", ",(0,l.jsx)(s.code,{children:"armeabi-v7a"}),", ",(0,l.jsx)(s.code,{children:"x86"}),", ",(0,l.jsx)(s.code,{children:"x86_64"}),". This is a mandatory option"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAP_LIBRARY=<LIBPCAP_DIR>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["The path of ",(0,l.jsx)(s.code,{children:"libpcap.a"})," that is compiled for Android with the target architecture and API version, for example: ",(0,l.jsx)(s.code,{children:"${LIBPCAP_DIR}/${ABI}/${API_VERSION}/libpcap.a"}),". This is a mandatory option"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAP_INCLUDE_DIR=<LIBPCAP_INCLUDE_DIR>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["The path of lipbpcap include files, for example: ",(0,l.jsx)(s.code,{children:"${LIBPCAP_DIR}/include/"}),". This is a mandatory option"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAPPP_BUILD_EXAMPLES=<ON/OFF>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Build PcapPlusPlus examples, in most cases should be set to ",(0,l.jsx)(s.code,{children:"OFF"}),". If you want to run ",(0,l.jsx)(s.a,{href:"../examples",children:"PcapPlusPlus examples"})," on an Android device you need shell access, and for some of them you also need a rooted device. The examples will reside in ",(0,l.jsx)(s.code,{children:"build/examples_bin"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAPPP_BUILD_TESTS=<ON/OFF>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Build PcapPlusPlus tests, in most cases should be set to ",(0,l.jsx)(s.code,{children:"OFF"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAPPP_BUILD_TUTORIALS=<ON/OFF>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Build PcapPlusPlus tutorials. This option is only available if ",(0,l.jsx)(s.code,{children:"DPCAPPP_BUILD_EXAMPLES=ON"})," (default value is ",(0,l.jsx)(s.code,{children:"OFF"}),")"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAPPP_INSTALL=<ON/OFF>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Install PcapPlusPlus (default value is ",(0,l.jsx)(s.code,{children:"ON"})," if building the project itself, otherwise ",(0,l.jsx)(s.code,{children:"OFF"}),")"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DBUILD_SHARED_LIBS=<ON/OFF>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Build shared libs (default value is ",(0,l.jsx)(s.code,{children:"OFF"}),")"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAPPP_ENABLE_PCAP_IMMEDIATE_MODE=<ON/OFF>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Enable pcap immediate mode (default value is ",(0,l.jsx)(s.code,{children:"OFF"}),")"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.code,{children:"-DPCAPPP_ENABLE_PCAP_SET_DIRECTION=<ON/OFF>"})})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["Enable set direction for capturing incoming or outgoing packets (default value is ",(0,l.jsx)(s.code,{children:"OFF"}),")"]})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(s.p,{children:"When building for Android the build machine (host) is usually different from the target device (target), so you may want to gather the lib and header files in a directory in the host instead of installing it on it.\nYou can use the following command in order to achieve this:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'DESTDIR=<DIR> cmake --install build --prefix "/"\n'})}),"\n",(0,l.jsx)(s.h2,{id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app",children:"Do I need a rooted device in order to use PcapPlusPlus in my Android app?"}),"\n","\n",(0,l.jsxs)(s.p,{children:["The quick answer is no. A lot of PcapPlusPlus functionality will work on any device and any app. However, on non-rooted devices some of the features may not work. The main reason is that non-rooted devices do not allow access to the device's network interfaces and configuration. That means that capturing live network traffic using ",(0,l.jsx)(d.A,{relativePath:"/classpcpp_1_1_pcap_live_device.html",children:(0,l.jsx)(s.code,{children:"PcapLiveDevice"})})," may not work, as well as opening raw sockets with ",(0,l.jsx)(d.A,{relativePath:"/classpcpp_1_1_raw_socket_device.html",children:(0,l.jsx)(s.code,{children:"RawSocketDevice"})}),". You may also need your app to request ",(0,l.jsx)(s.a,{href:"https://developer.android.com/training/data-storage",children:"additional permissions to read and write files"})," in order to read and write pcap/pcapng files."]}),"\n",(0,l.jsxs)(s.p,{children:["But other than that, most of the features should work including parsing and analyzing of network packets and the ",(0,l.jsx)(s.a,{href:"../features#supported-network-protocols",children:"various protocols"})," supported by PcapPlusPlus, which is what ",(0,l.jsx)(s.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus",children:"ToyVpn-PcapPlusPlus"})," demonstrates."]}),"\n",(0,l.jsxs)(s.p,{children:["If you do have a rooted device most of PcapPlusPlus features should work. Please feel free to ",(0,l.jsx)(s.a,{href:"https://github.com/seladb/PcapPlusPlus/issues",children:"open an issue"})," if something is not working as expected."]}),"\n",(0,l.jsx)(s.h2,{id:"using-pcapplusplus-in-my-app",children:"Using PcapPlusPlus in my app"}),"\n",(0,l.jsxs)(s.p,{children:["PcapPlusPlus is a native C++ library so in order to use it in an Android app you need to get familiar with ",(0,l.jsx)(s.a,{href:"https://developer.android.com/ndk",children:"Android NDK"})," which is the toolset for using native code in Android apps."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus",children:"ToyVpn-PcapPlusPlus"})," is a good way to get started because it provides a very simple yet end-to-end example of writing PcapPlusPlus code and integrating it with the app. Here are a few links to parts in the code you might find interesting:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/pcapplusplus_interface.cpp",children:(0,l.jsx)(s.code,{children:"pcapplusplus_interface.cpp"})})," - the C++ code that uses PcapPlusPlus. It exposes 2 ",(0,l.jsx)(s.a,{href:"https://developer.android.com/training/articles/perf-jni",children:"JNI"})," methods that are used within the app"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/CMakeLists.txt",children:(0,l.jsx)(s.code,{children:"CMakeLists.txt"})})," - a CMake file to build the native code"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/java/com/example/android/pcapplusplus/PcapPlusPlusInterface.kt",children:(0,l.jsx)(s.code,{children:"PcapPlusPlusInterface.kt"})})," - a Kotlin file that uses the native JNI methods"]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["If you want to learn more we strongly recommend going over ",(0,l.jsxs)(s.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md",children:["ToyVpn-PcapPlusPlus's ",(0,l.jsx)(s.code,{children:"README.md"})]})," file as it contains very detail information of how PcapPlusPlus can be used in a real Android app."]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4211:(e,s,i)=>{i.d(s,{A:()=>d});i(6540);var n=i(4070),l=i(6025),t=i(4848);const d=function(e){let{relativePath:s,children:i}=e;return(0,t.jsx)("a",{href:(0,l.Ay)(`/api-docs/${(0,n.ir)().label.toLowerCase()}${s}`),children:i})}},8453:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>r});var n=i(6540);const l={},t=n.createContext(l);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);