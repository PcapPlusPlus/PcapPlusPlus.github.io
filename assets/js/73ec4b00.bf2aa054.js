"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[2523],{6872:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"examples","title":"Example Apps","description":"PcapPlusPlus contains various example applications that make use of most PcapPlusPlus APIs and features. Although some of them may be useful on their own (like arping or arp-spoofing), their main objective is to show how to use PcapPlusPlus. All examples are well documented and contain code which is easy to understand. After compiling PcapPlusPlus all compiled applications are under Dist/examples. Here is the list of example applications:","source":"@site/versioned_docs/version-v22.11/examples.mdx","sourceDirName":".","slug":"/examples","permalink":"/docs/v22.11/examples","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.11/examples.mdx","tags":[],"version":"v22.11","sidebarPosition":7,"frontMatter":{"title":"Example Apps","sidebar_position":7},"sidebar":"docs","previous":{"title":"Supported platforms","permalink":"/docs/v22.11/platforms"},"next":{"title":"Benchmarks","permalink":"/docs/v22.11/benchmark"}}');var t=a(4848),s=a(8453),r=a(3967);const l={title:"Example Apps",sidebar_position:7},o="Example Applications",p={},c=[{value:"<CodeLink>ArpSpoofing</CodeLink>",id:"arpspoofing",level:2},{value:"<CodeLink>Arping</CodeLink>",id:"arping",level:2},{value:"<CodeLink>DnsSpoofing</CodeLink>",id:"dnsspoofing",level:2},{value:"<CodeLink>DNSResolver</CodeLink>",id:"dnsresolver",level:2},{value:"<CodeLink>IcmpFileTransfer</CodeLink>",id:"icmpfiletransfer",level:2},{value:"<CodeLink>HttpAnalyzer</CodeLink>",id:"httpanalyzer",level:2},{value:"<CodeLink>SSLAnalyzer</CodeLink>",id:"sslanalyzer",level:2},{value:"<CodeLink>DpdkExample-FilterTraffic</CodeLink>",id:"dpdkexample-filtertraffic",level:2},{value:"<CodeLink>DpdkBridge</CodeLink>",id:"dpdkbridge",level:2},{value:"<CodeLink>KniPong</CodeLink>",id:"knipong",level:2},{value:"<CodeLink>PfRingExample-FilterTraffic</CodeLink>",id:"pfringexample-filtertraffic",level:2},{value:"<CodeLink>PcapPrinter</CodeLink>",id:"pcapprinter",level:2},{value:"<CodeLink>PcapSplitter</CodeLink>",id:"pcapsplitter",level:2},{value:"<CodeLink>PcapSearch</CodeLink>",id:"pcapsearch",level:2},{value:"<CodeLink>TcpReassembly</CodeLink>",id:"tcpreassembly",level:2},{value:"<CodeLink>IPFragUtil</CodeLink>",id:"ipfragutil",level:2},{value:"<CodeLink>IPDefragUtil</CodeLink>",id:"ipdefragutil",level:2},{value:"<CodeLink>TLSFingerprinting</CodeLink>",id:"tlsfingerprinting",level:2},{value:"<CodeLink>PcapPlusPlus-benchmark</CodeLink>",id:"pcapplusplus-benchmark",level:2}];function d(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"example-applications",children:"Example Applications"})}),"\n","\n",(0,t.jsx)(i.p,{children:"PcapPlusPlus contains various example applications that make use of most PcapPlusPlus APIs and features. Although some of them may be useful on their own (like arping or arp-spoofing), their main objective is to show how to use PcapPlusPlus. All examples are well documented and contain code which is easy to understand. After compiling PcapPlusPlus all compiled applications are under Dist/examples. Here is the list of example applications:"}),"\n",(0,t.jsx)(i.h2,{id:"arpspoofing",children:(0,t.jsx)(r.A,{relativePath:"/Examples/ArpSpoofing",children:"ArpSpoofing"})}),"\n",(0,t.jsxs)(i.p,{children:["An application that does ARP spoofing using Packet++ and Pcap++. You can read more about ARP spoofing ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ARP_spoofing",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"arping",children:(0,t.jsx)(r.A,{relativePath:"/Examples/Arping",children:"Arping"})}),"\n",(0,t.jsxs)(i.p,{children:["An implementation of the ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Arping",children:"arping"})," utility using PcapPlusPlus."]}),"\n",(0,t.jsx)(i.h2,{id:"dnsspoofing",children:(0,t.jsx)(r.A,{relativePath:"/Examples/DnsSpoofing",children:"DnsSpoofing"})}),"\n",(0,t.jsxs)(i.p,{children:["A command-line utility that does ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/DNS_spoofing",children:"DNS spoofing"})," using Packet++ and Pcap++."]}),"\n",(0,t.jsx)(i.h2,{id:"dnsresolver",children:(0,t.jsx)(r.A,{relativePath:"/Examples/DNSResolver",children:"DNSResolver"})}),"\n",(0,t.jsx)(i.p,{children:"A command-line utility that resolves IPv4 address for an hostname using ARP and DNS protocols."}),"\n",(0,t.jsx)(i.h2,{id:"icmpfiletransfer",children:(0,t.jsx)(r.A,{relativePath:"/Examples/IcmpFileTransfer",children:"IcmpFileTransfer"})}),"\n",(0,t.jsxs)(i.p,{children:["An application that demonstrates how to transfer files between two machines using only ICMP messages. The basic idea is to use the data part of ICMP messages to transfer chunks of the file between the machines. You can read more about it ",(0,t.jsx)(i.a,{href:"http://www.unixist.com/security/data-transfer-over-icmp/index.html",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"httpanalyzer",children:(0,t.jsx)(r.A,{relativePath:"/Examples/HttpAnalyzer",children:"HttpAnalyzer"})}),"\n",(0,t.jsx)(i.p,{children:"An application that analyzes HTTP traffic and presents detailed and diverse information about it such as packet count and rate, bandwidth, flow count and rate, HTTP requests and responses count and rate, hostname histogram, content-type histogram, status code histogram and much more. Can operate on live traffic or read packets from a pcap file."}),"\n",(0,t.jsx)(i.h2,{id:"sslanalyzer",children:(0,t.jsx)(r.A,{relativePath:"/Examples/SSLAnalyzer",children:"SSLAnalyzer"})}),"\n",(0,t.jsx)(i.p,{children:"An application that analyzes SSL/TLS traffic and presents detailed and diverse information about it such as packet count and rate, bandwidth, flow count and rate, SSL/TLS messages count, hostname histogram, SSL/TLS version count, cipher-suite count and much more. Can operate on live traffic or read packets from a pcap file."}),"\n",(0,t.jsx)(i.h2,{id:"dpdkexample-filtertraffic",children:(0,t.jsx)(r.A,{relativePath:"/Examples/DpdkExample-FilterTraffic",children:"DpdkExample-FilterTraffic"})}),"\n",(0,t.jsx)(i.p,{children:"An application that demonstrates PcapPlusPlus DPDK APIs. This application listens to one or more DPDK ports (a.k.a DPDK devices), captures all traffic and matches packets by user-defined matching criteria such as source/dest IP, source/dest TCP/UDP port and more. Matched packets can be send to another DPDK port and/or be save to a pcap file. In addition the application collects statistics on received and matched packets."}),"\n",(0,t.jsx)(i.h2,{id:"dpdkbridge",children:(0,t.jsx)(r.A,{relativePath:"/Examples/DpdkBridge",children:"DpdkBridge"})}),"\n",(0,t.jsx)(i.p,{children:"An application that demonstrates how to create a bridge between two network devices (similar to DPDK's L2 forwarding example) using PcapPlusPlus DPDK APIs."}),"\n",(0,t.jsx)(i.h2,{id:"knipong",children:(0,t.jsx)(r.A,{relativePath:"/Examples/KniPong",children:"KniPong"})}),"\n",(0,t.jsx)(i.p,{children:"An application that demonstrates PcapPlusPlus wrapper for DPDK KNI. It emulates the Unix NETCAT utility run with -u key. It is basically a ping/pong client/server channel using user provided input from stdin."}),"\n",(0,t.jsx)(i.h2,{id:"pfringexample-filtertraffic",children:(0,t.jsx)(r.A,{relativePath:"/Examples/PfRingExample-FilterTraffic",children:"PfRingExample-FilterTraffic"})}),"\n",(0,t.jsx)(i.p,{children:"An application that demonstrates PcapPlusPlus PF_RING APIs. This application listens to a PF_RING interface, captures all traffic and matches packets by user-defined matching criteria such as source/dest IP, source/dest TCP/UDP port and more. Matched packets can be send to another PF_RING interface and/or be save to a pcap file. In addition the application collects statistics on received and matched packets."}),"\n",(0,t.jsx)(i.h2,{id:"pcapprinter",children:(0,t.jsx)(r.A,{relativePath:"/Examples/PcapPrinter",children:"PcapPrinter"})}),"\n",(0,t.jsx)(i.p,{children:"A simple application that outputs packets from a pcap file as a readable string."}),"\n",(0,t.jsx)(i.h2,{id:"pcapsplitter",children:(0,t.jsx)(r.A,{relativePath:"/Examples/PcapSplitter",children:"PcapSplitter"})}),"\n",(0,t.jsx)(i.p,{children:"An application that splits pcap files into smaller pcap files by various criteria defined by the user like file size, packet count, split per connection, per client-ip, per server-ip, per server-port (protocol) or per IP src + IP dst (2-tuple). This application is very advanced compared to similar tools, for example: there is no limit on input file size or packet count, no technical limit on number of output files (unless the user sets a limit), support for both IPv4 and IPv6, and a lot more."}),"\n",(0,t.jsx)(i.h2,{id:"pcapsearch",children:(0,t.jsx)(r.A,{relativePath:"/Examples/PcapSearch",children:"PcapSearch"})}),"\n",(0,t.jsx)(i.p,{children:"An application that search inside pcap files in a directory/ies given by the user and counts how many packet match a user-defined pattern given in a BPF format."}),"\n",(0,t.jsx)(i.h2,{id:"tcpreassembly",children:(0,t.jsx)(r.A,{relativePath:"/Examples/TcpReassembly",children:"TcpReassembly"})}),"\n",(0,t.jsx)(i.p,{children:"An application that captures data transmitted as part of TCP connections, organizes the data and stores it in a way that is convenient for protocol analysis and debugging. This application reconstructs the TCP data streams and stores each connection in a separate file(s). TcpReassembly understands TCP sequence numbers and will correctly reconstruct data streams regardless of retransmissions, out-of-order delivery or data loss."}),"\n",(0,t.jsx)(i.h2,{id:"ipfragutil",children:(0,t.jsx)(r.A,{relativePath:"/Examples/IPFragUtil",children:"IPFragUtil"})}),"\n",(0,t.jsx)(i.p,{children:"A utility for splitting IP packets into fragments. It works on pcap and pcapng files and allows the user to choose which packets to fragment and to which size. Works on IPv4 and IPv6 packets."}),"\n",(0,t.jsx)(i.h2,{id:"ipdefragutil",children:(0,t.jsx)(r.A,{relativePath:"/Examples/IPDefragUtil",children:"IPDefragUtil"})}),"\n",(0,t.jsx)(i.p,{children:"A utility for reassembling IP fragments back to IP packets. It works on pcap and pcapng files and allows the user to choose which fragments to reassemble. Works on IPv4 and IPv6 packets."}),"\n",(0,t.jsx)(i.h2,{id:"tlsfingerprinting",children:(0,t.jsx)(r.A,{relativePath:"/Examples/TLSFingerprinting",children:"TLSFingerprinting"})}),"\n",(0,t.jsx)(i.p,{children:"An application the demonstrates how to collect ClientHello (JA3) and ServerHello (JA3S) TLS fingerprints from live traffic or pcap files, write them to an output file and display various statistics."}),"\n",(0,t.jsx)(i.h2,{id:"pcapplusplus-benchmark",children:(0,t.jsx)(r.A,{relativePath:"/Examples/PcapPlusPlus-benchmark",children:"PcapPlusPlus-benchmark"})}),"\n",(0,t.jsxs)(i.p,{children:["The benchmark application used for measuring PcapPlusPlus performance. See ",(0,t.jsx)(i.a,{href:"./benchmark",children:"benchmark page"})," for more details. This application currently compiles on Linux only (where benchmark was running on)."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3967:(e,i,a)=>{a.d(i,{A:()=>s});a(6540);var n=a(5329),t=a(4848);const s=function(e){let{relativePath:i,children:a}=e;return(0,t.jsx)("a",{href:(0,n.t_)()+i,children:a})}},5329:(e,i,a)=>{a.d(i,{ZA:()=>o,iI:()=>c,i_:()=>p,jA:()=>h,k9:()=>s,kF:()=>r,l:()=>l,t_:()=>d,zk:()=>u});var n=a(4070);const t="https://github.com/seladb/PcapPlusPlus";function s(){return t}function r(){const e=(0,n.r7)(),i=(0,n.ir)();return"Next"===i.label?e.label:i.label}function l(e){return`${t}/releases/tag/${e}`}function o(){return l(r())}function p(){return`${t}/archive/${r()}.zip`}function c(){return`${t}/archive/${r()}.tar.gz`}function d(){const e=(0,n.ir)(),i="Next"===e.label?"master":e.label;return`${t}/tree/${i}`}function h(){return`${t}/archive/master.zip`}function u(){return`${t}/archive/master.tar.gz`}},8453:(e,i,a)=>{a.d(i,{R:()=>r,x:()=>l});var n=a(6540);const t={},s=n.createContext(t);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);