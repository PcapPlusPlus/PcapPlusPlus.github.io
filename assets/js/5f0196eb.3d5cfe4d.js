"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[2227],{8888:(e,n,s)=>{s.r(n),s.d(n,{default:()=>O});s(6540);var r=s(1957),a=s(2644),t=s(6025),c=s(4164);const i={heroBanner:"heroBanner_qdFl",logoContainer:"logoContainer_xdaK",buttons:"buttons_AeoN",landingBtn:"landingBtn_iQ5W",landingBtnHeader:"landingBtnHeader_F0KY",codeBlock:"codeBlock_NVHr",Section:"Section_tvup",column:"column_T1EA",last:"last_J38O",left:"left_g_Qb",tint:"tint_YWU3",dark:"dark_u3a4",LearnMoreLink:"LearnMoreLink_vIjh",TwoColumns:"TwoColumns_unnZ",reverse:"reverse_JkIZ",right:"right_OHMl",first:"first_tj0_",DisplayNetwork:"DisplayNetwork_qvQu",OperatingSystemContainer:"OperatingSystemContainer_oSx1",OperatingSystem:"OperatingSystem_bKPo"};var l=s(4848);function o(e){let{children:n,className:s,background:r}=e;return(0,l.jsx)("section",{className:(0,c.A)(i.Section,s,r),children:n})}o.defaultProps={background:"light"};const d=o;function p(e){let{columnOne:n,columnTwo:s,reverse:r=!1}=e;const a=r?(0,c.A)(i.column,i.last,i.right):(0,c.A)(i.column,i.first,i.left),t=r?(0,c.A)(i.column,i.first,i.left):(0,c.A)(i.column,i.last,i.right);return(0,l.jsxs)("div",{className:i.TwoColumns,children:[(0,l.jsx)("div",{className:a,children:n}),(0,l.jsx)("div",{className:t,children:s})]})}p.defaultProps={reverse:!1};const u=p;const h=function(e){let{text:n}=e;return(0,l.jsx)("h2",{className:i.Heading,children:n})};const x=function(e){let{title:n,content:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{text:n}),s]})};const g=function(){return(0,l.jsxs)("ul",{className:i.DisplayNetwork,children:[(0,l.jsx)("li",{children:(0,l.jsx)("span",{children:"DPDK"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{children:"eBPF AF_XDP"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{children:"LIBPCAP"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{children:"WINPCAP"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{children:"NPCAP"})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{children:"PF_RING"})})]})};const j=function(){return(0,l.jsx)(d,{className:i.Section,background:"light",children:(0,l.jsx)(u,{columnOne:(0,l.jsx)(x,{title:"Capture and Send Network Traffic",content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["PcapPlusPlus enables capturing and sending network packets through easy-to-use C++ wrappers for the most popular packet processing engines such as"," ",(0,l.jsx)("a",{href:"https://www.tcpdump.org/",children:"libpcap"}),","," ",(0,l.jsx)("a",{href:"https://www.winpcap.org/",children:"WinPcap"}),","," ",(0,l.jsx)("a",{href:"https://nmap.org/npcap/",children:"NPcap"}),","," ",(0,l.jsx)("a",{href:"https://www.dpdk.org/",children:"DPDK"}),","," ",(0,l.jsx)("a",{href:"https://ebpf.io/",children:"eBPF AF_XDP"})," and"," ",(0,l.jsx)("a",{href:"https://www.ntop.org/products/packet-capture/pf_ring/",children:"PF_RING"})]}),(0,l.jsxs)("a",{className:i.LearnMoreLink,href:(0,t.Ay)("/docs/features#packet-capture"),children:["Learn More",(0,l.jsx)(a.fOo,{})]})]})}),columnTwo:g()})})};var m=s(1432);const f=function(){return(0,l.jsx)(d,{className:i.Section,background:"light",children:(0,l.jsx)(u,{reverse:!0,columnOne:(0,l.jsx)(x,{title:"Decode and Forge Packets",content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["PcapPlusPlus enables decoding and forging capabilities for a large variety of"," ",(0,l.jsx)("a",{href:(0,t.Ay)("/docs/features#supported-network-protocols"),children:"network protocols"})]}),(0,l.jsxs)("a",{className:i.LearnMoreLink,href:(0,t.Ay)("/docs/features#packet-parsing-and-crafting"),children:["Learn More",(0,l.jsx)(a.fOo,{})]})]})}),columnTwo:(0,l.jsx)(m.A,{className:(0,c.A)("language-cpp",i.codeBlock),children:'// parse the raw packet into a parsed packet\npcpp::Packet parsedPacket(&rawPacket);\n\n// check if it\'s an IPv4 packet\nif (parsedPacket.isPacketOfType(pcpp::IPv4)) {\n// extract source and dest IPs\npcpp::IPv4Address srcIP = \n    parsedPacket.getLayerOfType()->getSrcIPv4Address();\npcpp::IPv4Address destIP = \n    parsedPacket.getLayerOfType()->getDstIPv4Address();\n\n// print source and dest IPs\nstd::cout << \n    "Source IP is: " << srcIP << std::endl <<\n    "Dest IP is: " << destIP << std::endl;'})})})};const P=function(){return(0,l.jsx)(d,{className:i.Section,background:"light",children:(0,l.jsx)(u,{columnOne:(0,l.jsx)(x,{title:"Super Fast!",content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"PcapPlusPlus is designed to be efficient and lightweight. It enables amazingly fast packet processing with minimum overhead"}),(0,l.jsxs)("a",{className:i.LearnMoreLink,href:(0,t.Ay)("/docs/benchmark"),children:["View Benchmarks",(0,l.jsx)(a.fOo,{})]})]})}),columnTwo:(0,l.jsx)("img",{alt:"",src:(0,t.Ay)("img/landing-page/rocket.png")})})})};var k=s(1612);const w=function(){return(0,l.jsx)("div",{className:i.OperatingSystemContainer,children:(0,l.jsxs)("ul",{className:i.OperatingSystem,children:[(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:[(0,l.jsx)(k.xuF,{}),"\xa0\xa0Windows"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:[(0,l.jsx)(k.Ucx,{}),"\xa0\xa0Linux"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:[(0,l.jsx)(k.eMv,{}),"\xa0\xa0Apple"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:[(0,l.jsx)(k.pd8,{}),"\xa0\xa0FreeBSD"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:[(0,l.jsx)(k.DGu,{}),"\xa0\xa0Android"]})})]})})};const N=function(){return(0,l.jsx)(d,{className:i.Section,background:"light",children:(0,l.jsx)(u,{reverse:!0,columnOne:(0,l.jsx)(x,{title:"Multi Platform Support",content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"PcapPlusPlus is fully supported on Windows, MacOS, Linux, Android and FreeBSD. You can download pre-built binaries for each platform or build it from source. PcapPlusPlus is available in popular package managers such as Homebrew and Conan"}),(0,l.jsxs)("a",{className:i.LearnMoreLink,href:(0,t.Ay)("/docs/install"),children:["View Installation Guide",(0,l.jsx)(a.fOo,{})]})]})}),columnTwo:w()})})};const b=function(){return(0,l.jsx)(d,{className:i.Section,background:"light",children:(0,l.jsx)(u,{columnOne:(0,l.jsx)(x,{title:"Read and Write Packets to Files",content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["PcapPlusPlus provides an easy-to-use interface for reading and writing network packets into files.It supports the most popular file formats which are"," ",(0,l.jsx)("a",{href:"https://wiki.wireshark.org/Development/LibpcapFileFormat",children:"PCAP"})," ","and ",(0,l.jsx)("a",{href:"https://github.com/pcapng/pcapng",children:"PCAPNG"})]}),(0,l.jsxs)("a",{className:i.LearnMoreLink,href:(0,t.Ay)("/docs/features#read-and-write-packets-fromto-files"),children:["Learn More",(0,l.jsx)(a.fOo,{})]})]})}),columnTwo:(0,l.jsx)(m.A,{className:(0,c.A)("language-cpp",i.codeBlock),children:'// create a pcap file reader\npcpp::PcapFileReaderDevice pcapReader("input.pcap");\npcapReader.open();\n\n// create a pcapng file writer\npcpp::PcapNgFileWriterDevice pcapNgWriter("output.pcapng");\npcapNgWriter.open();\n\n// raw packet object\npcpp::RawPacket rawPacket;\n\n// read packets from pcap reader and write pcapng writer\nwhile (pcapReader->getNextPacket(rawPacket)) {\n  pcapNgWriter.writePacket(rawPacket);\n}'})})})};const v=function(){return(0,l.jsx)(d,{className:i.Section,background:"light",children:(0,l.jsx)(u,{reverse:!0,columnOne:(0,l.jsx)(x,{title:"Packet Reassembly",content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"PcapPlusPlus contains unique implementation of packet reassembly techniques."}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"TCP Reassembly"})," which supports TCP retransmission, out-of-order TCP packets and missing TCP data."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"IP Fragmentation and Defragmentation"})," to create and reassemble IPv4 and IPv6 fragments"]}),(0,l.jsxs)("a",{className:i.LearnMoreLink,href:(0,t.Ay)("/docs/features#packet-reassembly"),children:["Learn More",(0,l.jsx)(a.fOo,{})]})]})}),columnTwo:(0,l.jsx)("img",{alt:"",src:(0,t.Ay)("img/landing-page/stream.png")})})})};var A=s(4586),y=s(8774);const _={className:void 0};function F(e){let{text:n,to:s,className:r}=e;return(0,l.jsx)(y.A,{className:(0,c.A)("button button--lg",i.landingBtn,r),to:s,children:n})}F.defaultProps=_;const I=F;const L=function(){const{siteConfig:e}=(0,A.A)();return(0,l.jsx)("header",{className:(0,c.A)("hero hero--primary",i.heroBanner),children:(0,l.jsx)(u,{reverse:!0,columnOne:(0,l.jsx)("div",{className:i.logoContainer,children:(0,l.jsx)("img",{alt:"",src:(0,t.Ay)("img/landing-page/logo.svg")})}),columnTwo:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"hero__title",children:"Welcome to PcapPlusPlus!"}),(0,l.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,l.jsxs)("div",{className:i.buttons,children:[(0,l.jsx)(I,{text:"Get Started",to:"/docs/quickstart"}),"\xa0\xa0",(0,l.jsx)(I,{text:"Download",to:"/docs/install"})]})]})})})};const O=function(){return(0,l.jsxs)(r.A,{description:"A multi-platform C++ library for capturing, parsing and crafting of network packets",children:[(0,l.jsx)(L,{}),(0,l.jsxs)("main",{children:[(0,l.jsx)(j,{}),(0,l.jsx)(f,{}),(0,l.jsx)(P,{}),(0,l.jsx)(N,{}),(0,l.jsx)(b,{}),(0,l.jsx)(v,{})]})]})}}}]);