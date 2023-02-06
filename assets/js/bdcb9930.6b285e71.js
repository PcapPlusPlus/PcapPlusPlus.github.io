"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[4377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1054:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(2232);const i=function(e){let{relativePath:t,children:n}=e;return a.createElement("a",{href:(0,r.E2)()+t},n)}},2232:(e,t,n)=>{n.d(t,{E2:()=>d,K7:()=>s,Wx:()=>c,hv:()=>i,kq:()=>o,rU:()=>u,s6:()=>l,u$:()=>p,vR:()=>h});var a=n(143);const r="https://github.com/seladb/PcapPlusPlus";function i(){return r}function o(){const e=(0,a.yW)(),t=(0,a.zu)();return"Next"===t.label?e.label:t.label}function s(e){return`${r}/releases/tag/${e}`}function l(){return s(o())}function p(){return`${r}/archive/${o()}.zip`}function c(){return`${r}/archive/${o()}.tar.gz`}function d(){const e=(0,a.zu)(),t="Next"===e.label?"master":e.label;return`${r}/tree/${t}`}function u(){return`${r}/archive/master.zip`}function h(){return`${r}/archive/master.tar.gz`}},8339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(1054);const o={sidebar_position:6},s="Part 6: Working With DPDK",l={unversionedId:"tutorials/dpdk",id:"tutorials/dpdk",title:"Part 6: Working With DPDK",description:"Introduction",source:"@site/docs/tutorials/dpdk.mdx",sourceDirName:"tutorials",slug:"/tutorials/dpdk",permalink:"/docs/next/tutorials/dpdk",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/tutorials/dpdk.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Part 5: Packet Crafting",permalink:"/docs/next/tutorials/packet-crafting"},next:{title:"Supported platforms",permalink:"/docs/next/platforms"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Set up DPDK Devices",id:"set-up-dpdk-devices",level:2},{value:"DPDK Worker Threads",id:"dpdk-worker-threads",level:2},{value:"Start Worker Threads",id:"start-worker-threads",level:2},{value:"Management And Statistics Collection",id:"management-and-statistics-collection",level:2},{value:"Running the code",id:"running-the-code",level:2},{value:"Option 1: Install a pre-compiled version of PcapPlusPlus",id:"option-1-install-a-pre-compiled-version-of-pcapplusplus",level:3}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-6-working-with-dpdk"},"Part 6: Working With DPDK"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"One of the key advantages of PcapPlusPlus over similar libraries is its extensive support for the Data Plane Development Kit (DPDK). PcapPlusPlus provides an extensive wrapper for DPDK which encapsulates most of its important and commonly used APIs in an easy-to-use C++ way."),(0,r.kt)("p",null,"This tutorial will go through the fundamentals of using PcapPlusPlus with DPDK. It will demonstrate how to build a L2 forwarding (bridge) application that receives packets on one interface and sends them on another interface. It may sound simple, but DPDK enables to do that in wire speed (!). This example will demonstrate some of the key APIs and concepts in PcapPlusPlus wrapper for DPDK."),(0,r.kt)("p",null,"This specific example was chosen because it corresponds to a similar example in DPDK documentation called ",(0,r.kt)("a",{parentName:"p",href:"https://doc.dpdk.org/guides-18.08/sample_app_ug/l2_forward_real_virtual.html"},"L2 Forwarding")," which many DPDK users are probably familiar with, and that may help in better understanding the code and the idea behind it."),(0,r.kt)("p",null,"Before starting this tutorial it is highly recommended to have a basic understanding of what DPDK is (you can find a lot of reading material in ",(0,r.kt)("a",{parentName:"p",href:"http://dpdk.org/"},"DPDK web-site"),") and also read the page describing ",(0,r.kt)("a",{parentName:"p",href:"../dpdk"},"PcapPlusPlus support for DPDK"),"."),(0,r.kt)("p",null,"For further information about the APIs and classes please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../api"},"API documentation"),"."),(0,r.kt)("p",null,"Before diving into the code, let's see how our L2 forwarding (bridge) application will be built:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"L2Fwd",src:n(2063).Z,width:"817",height:"423"})),(0,r.kt)("p",null,"As you can see, we will use 2 DPDK-controlled NICs, one from each side of the network. We'll also have 2 worker threads. The first thread will receive packets on NIC #1 and will send them on NIC #2 and the other thread will receive packets on NIC #2 and will send them on NIC #1","."," Now that we have this basic understanding let's go ahead and build this application!"),(0,r.kt)("h2",{id:"set-up-dpdk-devices"},"Set up DPDK Devices"),(0,r.kt)("p",null,"The first thing any application that uses DPDK should do is initialize DPDK and set up the DPDK interfaces (devices). This initialization involves a couple of steps and we'll go through all of them."),(0,r.kt)("p",null,"The first step is done before running the application. PcapPlusPlus contains a shell script called ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-dpdk.sh")," which initializes Huge Pages (which are required for DPDK's memory allocation) and DPDK kernel driver which removes kernel control from selected NICs and hand it over to DPDK. You can read more about it in ",(0,r.kt)("a",{parentName:"p",href:"../dpdk"},"PcapPlusPlus support for DPDK")," page."),(0,r.kt)("p",null,"The second step is done in the application's code and is a general DPDK initialization phase. It is also described in the ",(0,r.kt)("a",{parentName:"p",href:"../dpdk"},"PcapPlusPlus support for DPDK")," page and contains steps like initialize DPDK internal structures and memory pools, initialize packet memory pool, and more. Lets start by writing a general main method and initialize DPDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <vector>\n#include <unistd.h>\n#include <sstream>\n#include "SystemUtils.h"\n#include "DpdkDeviceList.h"\n#include "TablePrinter.h"\n\n#include "WorkerThread.h"\n\n#define MBUF_POOL_SIZE 16*1024-1\n#define DEVICE_ID_1 0\n#define DEVICE_ID_2 1\n\nint main(int argc, char* argv[])\n{\n    // Initialize DPDK\n    pcpp::CoreMask coreMaskToUse = pcpp::getCoreMaskForAllMachineCores();\n    pcpp::DpdkDeviceList::initDpdk(coreMaskToUse, MBUF_POOL_SIZE);\n\n    ....\n    ....\n}\n')),(0,r.kt)("p",null,"There are couple of steps here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decide of the mbuf pool size. mbufs are DPDK structures for holding packet data. Each mbuf holds one packet data or a portion (segment) of it. On application start-up DPDK allocates memory for creating a pool of mbufs that will be used by the application throughout its runtime. That way DPDK avoids the overhead of creating mbufs and allocating memory during application run. Let's decide that the size of this mbuf pool is 16383 mbufs. It is recommended to set a size that is a power of 2 minus 1 (in our case: 16383 = 2^14 - 1)"),(0,r.kt)("li",{parentName:"ul"},"Decide which CPU cores will take part in running the application. DPDK leverages multi-core architecture to parallelize packet processing. In our case we initialize DPDK with all cores available on the machine"),(0,r.kt)("li",{parentName:"ul"},"Invoke ",(0,r.kt)("inlineCode",{parentName:"li"},"pcpp::DpdkDeviceList::initDpdk()")," which runs the initialization")),(0,r.kt)("p",null,"Now let's find the DPDK interfaces (devices) we'll use to send and receive packets. The class ",(0,r.kt)("inlineCode",{parentName:"p"},"DpdkDevice")," encapsulates a DPDK interface. The singleton ",(0,r.kt)("inlineCode",{parentName:"p"},"DpdkDeviceList")," contains all DPDK devices that are available for us to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Find DPDK devices\npcpp::DpdkDevice* device1 = pcpp::DpdkDeviceList::getInstance().getDeviceByPort(DEVICE_ID_1);\nif (device1 == NULL)\n{\n    std::cerr << "Cannot find device1 with port \'" << DEVICE_ID_1 << "\'" << std::endl;\n    return 1;\n}\n\npcpp::DpdkDevice* device2 = pcpp::DpdkDeviceList::getInstance().getDeviceByPort(DEVICE_ID_2);\nif (device2 == NULL)\n{\n    std::cerr << "Cannot find device2 with port \'" << DEVICE_ID_2 << "\'" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,"As you can see, we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"DpdkDeviceList")," singleton to get the 2 DPDK devices. The port numbers ",(0,r.kt)("em",{parentName:"p"},"DEVICE_ID_1")," (of value 0) and ",(0,r.kt)("em",{parentName:"p"},"DEVICE_ID_2")," (of value 1) are determined by DPDK and we should know them in advance."),(0,r.kt)("p",null,"The next step is to open the 2 devices so we can start receiving and sending packets through them. Let's see the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Open DPDK devices\nif (!device1->openMultiQueues(1, 1))\n{\n    std::cerr << "Couldn\'t open device1 #" << device1->getDeviceId() << ", PMD \'" << device1->getPMDName() << "\'" << std::endl;\n    return 1;\n}\n\nif (!device2->openMultiQueues(1, 1))\n{\n    std::cerr << "Couldn\'t open device2 #" << device2->getDeviceId() << ", PMD \'" << device2->getPMDName() << "\'" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("p",null,"As you can see we're using a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"openMultiQueues()"),". This method opens the device with a provided number of RX and TX queues. The number of supported RX and TX queues varies between NICs. You can get the number of supported queues by using the following methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"DpdkDevice::getTotalNumOfRxQueues()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DpdkDevice::getTotalNumOfTxQueues()"),". The reason for opening more than 1 RX/TX queue is to parallelize packet processing over multiple cores where each core is responsible for 1 or more RX/TX queues. On RX, The NIC is responsible to load-balance RX packets to the different queues based on a provided hash function. Doing this inside the NIC makes it much faster and offloads processing from CPU cores. This load balancing mechanism is called Receive Side Scaling (RSS) and is also wrapped by PcapPlusPlus, for more details please see RSS configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"DpdkDevice::DpdkDeviceConfiguration"),"."),(0,r.kt)("p",null,"In our case we choose the simple case of 1 RX queue and 1 TX queue for each device. That means we'll use 1 thread for each direction."),(0,r.kt)("h2",{id:"dpdk-worker-threads"},"DPDK Worker Threads"),(0,r.kt)("p",null,"Now that we finished the DPDK setup and initialization, let's move on to the actual work of capturing and sending packets. The way we are going to do that is using DPDK worker threads. We will create 2 worker threads: one for sending packets from device1 to device2, and the other for sending packets from device2 to device1","."," Each worker thread will run on a separate CPU core and will execute an endless loop that will receive packets from one device and send them to the other."),(0,r.kt)("p",null,"Worker threads on PcapPlusPlus are instances of a class that inherits ",(0,r.kt)("inlineCode",{parentName:"p"},"DpdkWorkerThread"),". Let's write the header file of this class and see how it looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n\n#include "DpdkDevice.h"\n#include "DpdkDeviceList.h"\n\nclass L2FwdWorkerThread : public pcpp::DpdkWorkerThread\n{\n    private:\n    pcpp::DpdkDevice* m_RxDevice;\n    pcpp::DpdkDevice* m_TxDevice;\n    bool m_Stop;\n    uint32_t m_CoreId;\n\n    public:\n    // c\'tor\n    L2FwdWorkerThread(pcpp::DpdkDevice* rxDevice, pcpp::DpdkDevice* txDevice);\n\n    // d\'tor (does nothing)\n    ~L2FwdWorkerThread() { }\n\n    // implement abstract method\n\n    // start running the worker thread\n    bool run(uint32_t coreId);\n\n    // ask the worker thread to stop\n    void stop();\n\n    // get worker thread core ID\n    uint32_t getCoreId() const;\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DpdkWorkerThread")," is an abstract class that requires inherited classes to implement 3 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run()")," - start the worker. This method is called when the thread gets invoked and is expected to run throughout the life of the thread. Typically this method will contain an endless loop that runs the logic of the application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stop()")," - stop the execution of the worker"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getCoreId()")," - return the core ID the worker is running on")),(0,r.kt)("p",null,"In addition to implementing these method we also have a constructor and an empty destructor. We also save pointers to the RX and TX devices of where the worker will read packets from and send packets to. Now let's see the implementation of this class's methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "WorkerThread.h"\n\nL2FwdWorkerThread::L2FwdWorkerThread(pcpp::DpdkDevice* rxDevice, pcpp::DpdkDevice* txDevice) :\n    m_RxDevice(rxDevice), m_TxDevice(txDevice), m_Stop(true), m_CoreId(MAX_NUM_OF_CORES+1)\n{\n}\n\nbool L2FwdWorkerThread::run(uint32_t coreId)\n{\n    // Register coreId for this worker\n    m_CoreId = coreId;\n    m_Stop = false;\n\n    // initialize a mbuf packet array of size 64\n    pcpp::MBufRawPacket* mbufArr[64] = {};\n\n    // endless loop, until asking the thread to stop\n    while (!m_Stop)\n    {\n    // receive packets from RX device\n    uint16_t numOfPackets = m_RxDevice->receivePackets(mbufArr, 64, 0);\n\n    if (numOfPackets > 0)\n    {\n        // send received packet on the TX device\n        m_TxDevice->sendPackets(mbufArr, numOfPackets, 0);\n    }\n    }\n\n    return true;\n}\n\nvoid L2FwdWorkerThread::stop()\n{\n    m_Stop = true;\n}\n\nuint32_t L2FwdWorkerThread::getCoreId() const\n{\n    return m_CoreId;\n}\n')),(0,r.kt)("p",null,"The constructor is quite straight forward and initializes the private members. Please notice that the initialized value for the core ID is the maximum supported number of cores + 10."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"stop()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getCoreId()")," methods are also quite trivial and self explanatory."),(0,r.kt)("p",null,"Now let's take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"run()")," method which contains the L2 forwarding logic. It consists of an endless loop that is interrupted through a flag set by the ",(0,r.kt)("inlineCode",{parentName:"p"},"stop()")," method (which indicates the thread should stop its execution). Before starting the loop it creates an array of 64 ",(0,r.kt)("inlineCode",{parentName:"p"},"MBufRawPacket")," pointers which will be used to store the received packets. The loop itself is very simple: it receives packets from the RX device using ",(0,r.kt)("inlineCode",{parentName:"p"},"m_RxDevice->receivePackets(mbufArr, 64, 0)"),". The packets are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MBufRawPacket")," array. Then it immediately sends those packets to the TX device using ",(0,r.kt)("inlineCode",{parentName:"p"},"m_TxDevice->sendPackets(mbufArr, numOfPackets, 0)"),". You may be asking who takes care of freeing the packet array and mbufs in each iteration of the loop. Well, this is done automatically by ",(0,r.kt)("inlineCode",{parentName:"p"},"sendPackets()")," so we don't have to take care of it ourselves."),(0,r.kt)("p",null,"This basically summarizes the implementation of the worker thread. In the current application we'll set up 2 worker threads: one for receiving packets from DEVICE_ID_1 and send them over DEVICE_ID_2 and another to receiving packets from DEVICE_ID_2 and send them over DEVICE_ID_1."),(0,r.kt)("h2",{id:"start-worker-threads"},"Start Worker Threads"),(0,r.kt)("p",null,"Now that we have the worker thread code ready, let's wire everything up and start the application. First, let's create the worker thread instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Create worker threads\nstd::vector<pcpp::DpdkWorkerThread*> workers;\nworkers.push_back(new L2FwdWorkerThread(device1, device2));\nworkers.push_back(new L2FwdWorkerThread(device2, device1));\n")),(0,r.kt)("p",null,"As you can see we give the first worker thread device1 as the RX device and device2 as the TX device, and vice versa for the second worker thread. We store pointers to these two instances in a vector."),(0,r.kt)("p",null,"Next step is to assign cores for these two worker threads to run on. DPDK enforces running each worker in a separate core to maximize performance. We will create a core mask that contains core 1 and core 2, let's see how this code looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Create core mask - use core 1 and 2 for the two threads\nint workersCoreMask = 0;\nfor (int i = 1; i <= 2; i++)\n{\n    workersCoreMask = workersCoreMask | (1 << i);\n}\n")),(0,r.kt)("p",null,"As you can see, we basically create the value 0x6 (or 0b110) where we set only the bits who correspond to the cores we want to use (1 and 2)"),(0,r.kt)("p",null,"Now let's start the worker threads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Start capture in async mode\nif (!pcpp::DpdkDeviceList::getInstance().startDpdkWorkerThreads(workersCoreMask, workers))\n{\n    std::cerr << "Couldn\'t start worker threads" << std::endl;\n    return 1;\n}\n')),(0,r.kt)("h2",{id:"management-and-statistics-collection"},"Management And Statistics Collection"),(0,r.kt)("p",null,"Now wer'e at a point where the 2 worker threads are running their endless loops which receives packets on one interface and sends them to the other interface. Practically we're done and the bridge should be working now. But to make the program more complete let's also add a graceful shutdown and user friendly prints to view the RX/TX statistics during application run."),(0,r.kt)("p",null,"For the graceful shutdown we'll use an utility class in PcapPlusPlus called ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationEventHandler")," which encapsulates user-driven events that may occur during application run, such as process kill (ctrl+c). For using this class we'll need to add one line at the beginning of our ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method which registers a callback we'd like to be called when ctrl+c is pressed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int main(int argc, char* argv[])\n{\n    // Register the on app close event handler\n    pcpp::ApplicationEventHandler::getInstance().onApplicationInterrupted(onApplicationInterrupted, NULL);\n\n    // Initialize DPDK\n    pcpp::CoreMask coreMaskToUse = pcpp::getCoreMaskForAllMachineCores();\n    pcpp::DpdkDeviceList::initDpdk(coreMaskToUse, MBUF_POOL_SIZE);\n\n    .....\n    .....\n")),(0,r.kt)("p",null,"Now let's implement this ",(0,r.kt)("inlineCode",{parentName:"p"},"onApplicationInterrupted")," callback. It'll have a very simple logic which sets a global flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Keep running flag\nbool keepRunning = true;\n\nvoid onApplicationInterrupted(void* cookie)\n{\n    keepRunning = false;\n    std::cout << std::endl << "Shutting down..." << std::endl;\n}\n')),(0,r.kt)("p",null,"Now that we have this flag we can set up an endless loop that will run on the main thread and will keep printing statistics until ctrl+c is pressed. Please notice this is not the loop the worker threads are running, this is a different loop that runs on the management core (core 0 in our case). Let's dwell on this point a little bit more to better understand how DPDK works: the worker threads are running on cores 1 and 2 and their endless loop consumes 100% of their capacity. This guarantees achieving the best possible performance. However it's a good practice (although not required) to allocate at least one more CPU core for management, meaning tasks that are not in the application's fast-path, such as statistics collection, provide user-interface (CLI or other), health monitoring, etc. Usually this management core will be core 0, but you can set up any other core. This management core is also the one running the ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method. Now let's go back to our application: once we started the worker threads on cores 1 and 2, we would like the management core to continuously gather statistics and print them to the user. The way to do that is to set up and endless loop inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method that will collect and print the stats and will be interrupted when the user presses ctrl+c (and setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"keepRunning")," flag). Let's see the implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#define COLLECT_STATS_EVERY_SEC 2\nuint64_t counter = 0;\nint statsCounter = 1;\n\n// Keep running while flag is on\nwhile (keepRunning)\n{\n    // Sleep for 1 second\n    sleep(1);\n\n    // Print stats every COLLECT_STATS_EVERY_SEC seconds\n    if (counter % COLLECT_STATS_EVERY_SEC == 0)\n    {\n    // Clear screen and move to top left\n    std::cout << "\\033[2J\\033[1;1H";\n\n    std::cout\n        << "Stats #" << statsCounter++ << std::endl\n        << "==========" << std::endl\n        << std::endl;\n\n    // Print stats of traffic going from Device1 to Device2\n    std::cout << std::endl\n        << "Device1->Device2 stats:" << std::endl\n        << std::endl;\n    printStats(device1, device2);\n\n    // Print stats of traffic going from Device2 to Device1\n    std::cout << std::endl\n        << "Device2->Device1 stats:" << std::endl\n        << std::endl;\n    printStats(device2, device1);\n    }\n\n    counter++;\n}\n')),(0,r.kt)("p",null,"As you can see the while loop collects statistics, prints them and then sleeps for 1 second."),(0,r.kt)("p",null,"Now let's see how to gather network statistics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void printStats(pcpp::DpdkDevice* rxDevice, pcpp::DpdkDevice* txDevice)\n{\n    pcpp::DpdkDevice::DpdkDeviceStats rxStats;\n    pcpp::DpdkDevice::DpdkDeviceStats txStats;\n    rxDevice->getStatistics(rxStats);\n    txDevice->getStatistics(txStats);\n\n    std::vector<std::string> columnNames;\n    columnNames.push_back(" ");\n    columnNames.push_back("Total Packets");\n    columnNames.push_back("Packets/sec");\n    columnNames.push_back("Bytes");\n    columnNames.push_back("Bits/sec");\n\n    std::vector<int> columnLengths;\n    columnLengths.push_back(10);\n    columnLengths.push_back(15);\n    columnLengths.push_back(15);\n    columnLengths.push_back(15);\n    columnLengths.push_back(15);\n\n    pcpp::TablePrinter printer(columnNames, columnLengths);\n\n    std::stringstream totalRx;\n    totalRx << "rx" << "|" << rxStats.aggregatedRxStats.packets << "|" << rxStats.aggregatedRxStats.packetsPerSec << "|" << rxStats.aggregatedRxStats.bytes << "|" << rxStats.aggregatedRxStats.bytesPerSec*8;\n    printer.printRow(totalRx.str(), \'|\');\n\n    std::stringstream totalTx;\n    totalTx << "tx" << "|" << txStats.aggregatedTxStats.packets << "|" << txStats.aggregatedTxStats.packetsPerSec << "|" << txStats.aggregatedTxStats.bytes << "|" << txStats.aggregatedTxStats.bytesPerSec*8;\n    printer.printRow(totalTx.str(), \'|\');\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DpdkDevice")," exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"getStatistics()")," method for stats collection. Various counters are being collected such as the number of packets, amount of data, packet per second, bytes per second, etc. You can view them separately per RX/TX queue, or aggregated per device. It's important to understand that these numbers are only relevant for the timestamp they are being collected and therefore this timestamp is also included in the data. You can read more about this in the class documentation."),(0,r.kt)("p",null,"If we go back to the code above, you can see we're collecting stats for the 2 devices. From one we take RX stats and from the other we take TX stats. We are using an utility class in PcapPlusPlus called ",(0,r.kt)("inlineCode",{parentName:"p"},"TablePrinter")," to print the numbers nicely in a table format. For the sake of simplicity we are taking only the aggregated RX and TX stats, but of course we can also take and prints RX/TX stats per queue."),(0,r.kt)("p",null,"We are almost done. One last thing to do is to run the necessary clean ups once the user presses ctrl+c. The only relevant clean-up is to stop the worker threads, let's see the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Stop worker threads\npcpp::DpdkDeviceList::getInstance().stopDpdkWorkerThreads();\n\n// Exit app with normal exit code\nreturn 0;\n")),(0,r.kt)("p",null,"That's it, we're all set! Now let's run the program and see the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Stats #5\n==========\n\nDevice1->Device2 stats:\n\n--------------------------------------------------------------------------------------\n|            | Total Packets   | Packets/sec     | Bytes           | Bits/sec        |\n--------------------------------------------------------------------------------------\n| rx         | 2850754         | 134607          | 4307240599      | 1627406832      |\n| tx         | 2851371         | 132058          | 4296728841      | 1592137536      |\n--------------------------------------------------------------------------------------\n\nDevice2->Device1 stats:\n\n--------------------------------------------------------------------------------------\n|            | Total Packets   | Packets/sec     | Bytes           | Bits/sec        |\n--------------------------------------------------------------------------------------\n| rx         | 160880          | 3273            | 11261910        | 1833416         |\n| tx         | 161001          | 4533            | 10627168        | 2393688         |\n--------------------------------------------------------------------------------------\n")),(0,r.kt)("p",null,"This output is printed every 2 seconds and shows for each direction: the total number of packets received and sent so far, the total number of bytes received and sent so far, packets per second and bps (bits per second)"),(0,r.kt)("h2",{id:"running-the-code"},"Running the code"),(0,r.kt)("p",null,"All code that was covered in this tutorial can be found ",(0,r.kt)(i.Z,{relativePath:"/Examples/Tutorials/Tutorial-DpdkL2Fwd",mdxType:"CodeLink"},"here"),". In order to compile and run the code please choose one of the options mentioned below,\nand then follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"#post-build"},"Post build")," section."),(0,r.kt)("h3",{id:"option-1-install-a-pre-compiled-version-of-pcapplusplus"},"Option 1: Install a pre-compiled version of PcapPlusPlus"),(0,r.kt)("p",null,"You can download and install PcapPlusPlus using one of the options mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"../install"},"installation page"),"."),(0,r.kt)("p",null,"Once installed, download all of the files in the ",(0,r.kt)(i.Z,{relativePath:"/Examples/Tutorials/Tutorial-DpdkL2Fwd",mdxType:"CodeLink"},"tutorial folder")," and run CMake:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cmake -S . -B build\ncmake --build build\n")),(0,r.kt)("p",null,"The executable will be created in the same directory."),(0,r.kt)("admonition",{title:"Notes:",type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"If PcapPlusPlus is ",(0,r.kt)("strong",{parentName:"li"},"NOT")," installed in the default directory you may need to specify ",(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_PREFIX_PATH"),", for example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"CMAKE_PREFIX_PATH=/my/pcapplusplus/path cmake -S . -B build\n"))),(0,r.kt)("li",{parentName:"ol"},"If DPDK is ",(0,r.kt)("strong",{parentName:"li"},"NOT")," installed in the default directory you may need to add it to ",(0,r.kt)("inlineCode",{parentName:"li"},"CMAKE_PREFIX_PATH")," as well, for example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'CMAKE_PREFIX_PATH="/my/pcapplusplus/path;/my/dpdk/path" cmake -S . -B build\n')),":::")),(0,r.kt)("h3",{parentName:"admonition",id:"option-2-build-the-tutorials-with-pcapplusplus"},"Option 2: build the tutorials with PcapPlusPlus"),(0,r.kt)("p",{parentName:"admonition"},"If you're building PcapPlusPlus from source and would like to build the tutorials as well you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-DPCAPPP_BUILD_TUTORIALS=ON")," option.\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"../install#build-from-source"},"build from source page")," for more details (choose your platform page)."),(0,r.kt)("h3",{parentName:"admonition",id:"post-build"},"Post build"),(0,r.kt)("p",{parentName:"admonition"},"After done building the tutorial code and/or PcapPlusPlus and before running the tutorial please run ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-dpdk.sh")," script to setup the necessary runtime parameters for DPDK. More details on this script can be found ",(0,r.kt)("a",{parentName:"p",href:"../dpdk"},"here"),"."),(0,r.kt)("p",{parentName:"admonition"},"Please note this tutorial needs a special environment to run on, as it needs at least 2 devices connected only through a third device running this application. If you need help setting up this environment and you have VirtualBox you can use ",(0,r.kt)("a",{parentName:"p",href:"https://www.brianlinkletter.com/how-to-use-virtualbox-to-emulate-a-network/"},"this")," great tutorial which will walk you through it.")))}u.isMDXComponent=!0},2063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/L2Fwd-d63de0729bc526130874df7c156e1090.png"}}]);