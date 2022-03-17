"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[7042],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1054:function(e,t,n){var a=n(7294),r=n(2232);t.Z=function(e){var t=e.relativePath,n=e.children;return a.createElement("a",{href:(0,r.E2)()+t},n)}},2232:function(e,t,n){n.d(t,{hv:function(){return i},kq:function(){return s},K7:function(){return o},s6:function(){return l},u$:function(){return p},Wx:function(){return c},E2:function(){return d},rU:function(){return u},vR:function(){return h}});var a=n(5551),r="https://github.com/seladb/PcapPlusPlus";function i(){return r}function s(){var e=(0,a.yW)(),t=(0,a.zu)();return"Next"===t.label?e.label:t.label}function o(e){return r+"/releases/tag/"+e}function l(){return o(s())}function p(){return r+"/archive/"+s()+".zip"}function c(){return r+"/archive/"+s()+".tar.gz"}function d(){var e=(0,a.zu)(),t="Next"===e.label?"master":e.label;return r+"/tree/"+t}function u(){return r+"/archive/master.zip"}function h(){return r+"/archive/master.tar.gz"}},2168:function(e,t,n){var a=n(7294),r=n(2232);t.Z=function(e){var t=e.versionString;return a.createElement("a",{href:(0,r.s6)()},t||(0,r.kq)()+" release")}},1857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return u},toc:function(){return h},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(2168),o=n(1054),l=["components"],p={sidebar_position:4},c="Part 4: Packet Parsing",d={unversionedId:"tutorials/packet-parsing",id:"version-v21.11/tutorials/packet-parsing",title:"Part 4: Packet Parsing",description:"Introduction",source:"@site/versioned_docs/version-v21.11/tutorials/packet-parsing.mdx",sourceDirName:"tutorials",slug:"/tutorials/packet-parsing",permalink:"/docs/tutorials/packet-parsing",editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v21.11/tutorials/packet-parsing.mdx",tags:[],version:"v21.11",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Part 3: Capture/Send Packets",permalink:"/docs/tutorials/capture-packets"},next:{title:"Part 5: Packet Crafting",permalink:"/docs/tutorials/packet-crafting"}},u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Packet parsing basics",id:"packet-parsing-basics",level:2},{value:"Parsing Ethernet",id:"parsing-ethernet",level:2},{value:"Parsing IPv4",id:"parsing-ipv4",level:2},{value:"Parsing TCP",id:"parsing-tcp",level:2},{value:"Parsing HTTP",id:"parsing-http",level:2},{value:"Running the example",id:"running-the-example",level:2}],g={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"part-4-packet-parsing"},"Part 4: Packet Parsing"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Packet parsing, editing and crafting are a major part of PcapPlusPlus and is the essence of the Packet++ library. There is a long list of ",(0,i.kt)("a",{parentName:"p",href:"../features#supported-network-protocols"},"protocols currently supported"),", each of them is represented by a ",(0,i.kt)("inlineCode",{parentName:"p"},"Layer")," class which (in most cases) supports both parsing of the protocol, editing and creation of new layers from scratch."),(0,i.kt)("p",null,"This tutorial will go through the packet parsing fundamentals and the next tutorial will focus on packet crafting and editing. The tutorial demonstrate parsing on a few popular protocols:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ethernet"),(0,i.kt)("li",{parentName:"ul"},"IPv4"),(0,i.kt)("li",{parentName:"ul"},"TCP"),(0,i.kt)("li",{parentName:"ul"},"HTTP")),(0,i.kt)("p",null,"For further information about these protocols and the other protocols supported in PcapPlusPlus please go to the ",(0,i.kt)("a",{parentName:"p",href:"../api"},"API documentation")),(0,i.kt)("h2",{id:"packet-parsing-basics"},"Packet parsing basics"),(0,i.kt)("p",null,"In this tutorial we'll read a packet from a pcap file, let PcapPlusPlus parse it, and see how we can retrieve data from each layer. Let's start by writing a ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method and add the includes that we need:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include "stdlib.h"\n#include "SystemUtils.h"\n#include "Packet.h"\n#include "EthLayer.h"\n#include "IPv4Layer.h"\n#include "TcpLayer.h"\n#include "HttpLayer.h"\n#include "PcapFileDevice.h"\n\nint main(int argc, char* argv[])\n{\n    // We\'ll write our code here\n}\n')),(0,i.kt)("p",null,"As you can see we added an include to ",(0,i.kt)("inlineCode",{parentName:"p"},"Packet.h")," which contains the basic parsed packet structures, to ",(0,i.kt)("inlineCode",{parentName:"p"},"PcapFileDevice.h")," which contains the API for reading from pcap files and to all of the layers which we want to retrieve information from. In addition we included ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemUtils.h")," for using ",(0,i.kt)("inlineCode",{parentName:"p"},"netToHost16()")," which we'll use later."),(0,i.kt)("p",null,"Now let's read the packet from the pcap file. This pcap file contains only 1 packet, so we'll open the reader, read the packet and close the reader:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// use the IFileReaderDevice interface to automatically identify file type (pcap/pcap-ng)\n// and create an interface instance that both readers implement\npcpp::IFileReaderDevice* reader = pcpp::IFileReaderDevice::getReader("1_http_packet.pcap");\n\n// verify that a reader interface was indeed created\nif (reader == NULL)\n{\n    std::cerr << "Cannot determine reader for file type" << std::endl;\n    return 1;\n}\n\n// open the reader for reading\nif (!reader->open())\n{\n    std::cerr << "Cannot open input.pcap for reading" << std::endl;\n    return 1;\n}\n\n// read the first (and only) packet from the file\npcpp::RawPacket rawPacket;\nif (!reader->getNextPacket(rawPacket))\n{\n    std::cerr << "Couldn\'t read the first packet in the file" << std::endl;\n    return 1;\n}\n\n// close the file reader, we don\'t need it anymore\nreader->close();\n')),(0,i.kt)("p",null,"The next step is to let PcapPlusPlus parse the packet. We do this by creating an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Packet")," class and giving it in the constructor a pointer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RawPacket")," instance we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// parse the raw packet into a parsed packet\npcpp::Packet parsedPacket(&rawPacket);\n")),(0,i.kt)("p",null,"Before we dive into the protocols, let's remember how the ",(0,i.kt)("inlineCode",{parentName:"p"},"Packet")," class is ",(0,i.kt)("a",{parentName:"p",href:"./intro#packets-and-layers"},"built"),": it contains a link list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Layer")," instances, each layer points to the next layer in the packet. In our example: Ethernet layer will be the first one, it will point to IPv4 layer which will point to TCP layer and finally we'll have HTTP request layer. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Packet")," class exposes this link list so we can iterate over the layers and retrieve basic information like the protocols they represent, sizes, etc. Let's see the code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// first let\'s go over the layers one by one and find out its type, its total length, its header length and its payload length\nfor (pcpp::Layer* curLayer = parsedPacket.getFirstLayer(); curLayer != NULL; curLayer = curLayer->getNextLayer())\n{\n    std::cout\n        << "Layer type: " << getProtocolTypeAsString(curLayer->getProtocol()) << "; " // get layer type\n        << "Total data: " << curLayer->getDataLen() << " [bytes]; " // get total length of the layer\n        << "Layer data: " << curLayer->getHeaderLen() << " [bytes]; " // get the header length of the layer\n        << "Layer payload: " << curLayer->getLayerPayloadSize() << " [bytes]" // get the payload length of the layer (equals total length minus header length)\n        << std::endl;\n}\n')),(0,i.kt)("p",null,"As you can see, we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"getFirstLayer()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getNextLayer()")," APIs to iterate over the layers. In each layer we have the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getProtocol()")," - get an enum of the protocol the layer represents"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getHeaderLen()")," - get the size of the layer's header, meaning the size of the layer data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getLayerPayloadSize()")," - get the size of the layer's payload, meaning the size of all layers that follows this layer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getDataLen()")," - get the total size of the layer: header + payload")),(0,i.kt)("p",null,"For printing the protocols I used a simple function that takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"ProtocolType")," enum and returns a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string getProtocolTypeAsString(pcpp::ProtocolType protocolType)\n{\n    switch (protocolType)\n    {\n    case pcpp::Ethernet:\n        return "Ethernet";\n    case pcpp::IPv4:\n        return "IPv4";\n    case pcpp::TCP:\n        return "TCP";\n    case pcpp::HTTPRequest:\n    case pcpp::HTTPResponse:\n        return "HTTP";\n    default:\n        return "Unknown";\n    }\n}\n')),(0,i.kt)("p",null,"Let's see the output so far:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Layer type: Ethernet; Total data: 443 [bytes]; Layer data: 14 [bytes]; Layer payload: 429 [bytes]\nLayer type: IPv4; Total data: 429 [bytes]; Layer data: 20 [bytes]; Layer payload: 409 [bytes]\nLayer type: TCP; Total data: 409 [bytes]; Layer data: 32 [bytes]; Layer payload: 377 [bytes]\nLayer type: HTTP; Total data: 377 [bytes]; Layer data: 377 [bytes]; Layer payload: 0 [bytes]\n")),(0,i.kt)("h2",{id:"parsing-ethernet"},"Parsing Ethernet"),(0,i.kt)("p",null,"Now let's see what information we can get from the first layer in this packet: ",(0,i.kt)("inlineCode",{parentName:"p"},"EthLayer"),". First let's get a pointer to this layer. We can use the methods we used before and cast the ",(0,i.kt)("inlineCode",{parentName:"p"},"Layer*")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"EthLayer*")," but the ",(0,i.kt)("inlineCode",{parentName:"p"},"Packet")," class offers a more convenient way to do that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// now let's get the Ethernet layer\npcpp::EthLayer* ethernetLayer = parsedPacket.getLayerOfType<pcpp::EthLayer>();\nif (ethernetLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find Ethernet layer\" << std::endl;\n    return 1;\n}\n")),(0,i.kt)("p",null,"As you can see we used the templated method ",(0,i.kt)("inlineCode",{parentName:"p"},"getLayerOfType<pcpp::EthLayer>()")," which returns a pointer to ",(0,i.kt)("inlineCode",{parentName:"p"},"EthLayer")," if exists in the packet or NULL otherwise. Now we are ready to start getting some information. The Ethernet layer is quite simple so there's not much information we can get. We can basically get the source and destination MAC addresses and the Ether Type of the next layer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// print the source and dest MAC addresses and the Ether type\nstd::cout << std::endl\n    << "Source MAC address: " << ethernetLayer->getSourceMac() << std::endl\n    << "Destination MAC address: " << ethernetLayer->getDestMac() << std::endl\n    << "Ether type = 0x" << std::hex << pcpp::netToHost16(ethernetLayer->getEthHeader()->etherType) << std::endl;\n')),(0,i.kt)("p",null,"For getting the source and destination MAC addresses ",(0,i.kt)("inlineCode",{parentName:"p"},"EthLayer")," exposes methods which return an instance of type ",(0,i.kt)("inlineCode",{parentName:"p"},"MacAddress")," which encapsulates MAC addresses and provides helper function such as print the MAC address as a nice string (like we have in our code example). For getting the Ether Type we call ",(0,i.kt)("inlineCode",{parentName:"p"},"getEthHeader()")," which casts the raw packet bytes into a struct: ",(0,i.kt)("inlineCode",{parentName:"p"},"ether_header*")," and we can read the Ether Type from this struct. Since packet raw data is stored in network order, we need to convert the Ether Type value from network to host order using ",(0,i.kt)("inlineCode",{parentName:"p"},"netToHost16()")),(0,i.kt)("p",null,"The output is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Source MAC address: 00:50:43:01:4d:d4\nDestination MAC address: 00:90:7f:3e:02:d0\nEther type = 0x800\n")),(0,i.kt)("h2",{id:"parsing-ipv4"},"Parsing IPv4"),(0,i.kt)("p",null,"Now let's get the IPv4 layer, we'll do it in the same way as before using the template ",(0,i.kt)("inlineCode",{parentName:"p"},"getLayerOfType<pcpp::IPv4Layer>()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// let's get the IPv4 layer\npcpp::IPv4Layer* ipLayer = parsedPacket.getLayerOfType<pcpp::IPv4Layer>();\nif (ipLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find IPv4 layer\" << std::endl;\n    return 1;\n}\n")),(0,i.kt)("p",null,"Let's get some information from the ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv4Layer"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// print source and dest IP addresses, IP ID and TTL\nstd::cout << std::endl\n    << "Source IP address: " << ipLayer->getSrcIPAddress() << std::endl\n    << "Destination IP address: " << ipLayer->getDstIPAddress() << std::endl\n    << "IP ID: 0x" << std::hex << pcpp::netToHost16(ipLayer->getIPv4Header()->ipId) << std::endl\n    << "TTL: " << std::dec << (int)ipLayer->getIPv4Header()->timeToLive << std::endl;\n')),(0,i.kt)("p",null,"As you can see this layer exposes 2 methods for reading the source and destination IP addresses in an easy-to-use wrapper class called ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv4Address"),". This class provides various capabilities, one of them is printing the IP address as a string. Next, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getIPv4Header()")," method which casts the raw packet bytes to a struct called ",(0,i.kt)("inlineCode",{parentName:"p"},"iphdr*")," and we can retrieve the rest of the data from there. Since the packet data is in network order, we need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"netToHost16()")," when getting data larger than 1 byte (like when reading the IP ID)."),(0,i.kt)("p",null,"Here is the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Source IP address: 172.16.133.132\nDestination IP address: 98.139.161.29\nIP ID: 0x36E4\nTTL: 64\n")),(0,i.kt)("h2",{id:"parsing-tcp"},"Parsing TCP"),(0,i.kt)("p",null,"Let's get the TCP layer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// let's get the TCP layer\npcpp::TcpLayer* tcpLayer = parsedPacket.getLayerOfType<pcpp::TcpLayer>();\nif (tcpLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find TCP layer\" << std::endl;\n    return 1;\n}\n")),(0,i.kt)("p",null,"Now let's get the TCP data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// print TCP source and dest ports, window size, and the TCP flags that are set in this layer\nstd::cout << std::endl\n    << "Source TCP port: " << tcpLayer->getSrcPort() << std::endl\n    << "Destination TCP port: " << tcpLayer->getDstPort() << std::endl\n    << "Window size: " << pcpp::netToHost16(tcpLayer->getTcpHeader()->windowSize) << std::endl\n    << "TCP flags: " << printTcpFlags(tcpLayer) << std::endl;\n')),(0,i.kt)("p",null,"The TCP layer exposes two methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"getPortSrc()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getPortDst()")," to fetch the source and destination ports. It also exposes the method ",(0,i.kt)("inlineCode",{parentName:"p"},"getTcpHeader()")," to cast the raw packet data into a struct ",(0,i.kt)("inlineCode",{parentName:"p"},"tpchdr*")," which contains all of the TCP fields. That way we can fetch additional fields such as windows size etc. Notice the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"netToHost16()")," to convert the data from network to host byte order as the raw packet arrives in network order. I also wrote a small function that gathers all of the TCP flags on the packet and prints them nicely:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string printTcpFlags(pcpp::TcpLayer* tcpLayer)\n{\n    std::string result = "";\n    if (tcpLayer->getTcpHeader()->synFlag == 1)\n        result += "SYN ";\n    if (tcpLayer->getTcpHeader()->ackFlag == 1)\n        result += "ACK ";\n    if (tcpLayer->getTcpHeader()->pshFlag == 1)\n        result += "PSH ";\n    if (tcpLayer->getTcpHeader()->cwrFlag == 1)\n        result += "CWR ";\n    if (tcpLayer->getTcpHeader()->urgFlag == 1)\n        result += "URG ";\n    if (tcpLayer->getTcpHeader()->eceFlag == 1)\n        result += "ECE ";\n    if (tcpLayer->getTcpHeader()->rstFlag == 1)\n        result += "RST ";\n    if (tcpLayer->getTcpHeader()->finFlag == 1)\n        result += "FIN ";\n\n    return result;\n}\n')),(0,i.kt)("p",null,"Another cool feature ",(0,i.kt)("inlineCode",{parentName:"p"},"TcpLayer")," provides is retrieving information about the TCP options (if exist). We can iterate the TCP options using the methods ",(0,i.kt)("inlineCode",{parentName:"p"},"getFirstTcpOption()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getNextTcpOption(tcpOption)")," and extract all the information on the TCP option such as type, length and value. In our example let's iterate over them and print their type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// go over all TCP options in this layer and print its type\nstd::cout << "TCP options: ";\nfor (pcpp::TcpOption tcpOption = tcpLayer->getFirstTcpOption(); tcpOption.isNotNull(); tcpOption = tcpLayer->getNextTcpOption(tcpOption))\n{\n    std::cout << printTcpOptionType(tcpOption.getTcpOptionType()) << " ";\n}\nstd::cout << std::endl;\n')),(0,i.kt)("p",null,"Let's see the method that gets the TCP option type as enum and converts it to string. Notice this method handles only the TCP options we have on the specific packet we're parsing, PcapPlusPlus support all TCP options types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string printTcpOptionType(pcpp::TcpOptionType optionType)\n{\n    switch (optionType)\n    {\n    case pcpp::PCPP_TCPOPT_NOP:\n        return "NOP";\n    case pcpp::PCPP_TCPOPT_TIMESTAMP:\n        return "Timestamp";\n    default:\n        return "Other";\n    }\n}\n')),(0,i.kt)("h2",{id:"parsing-http"},"Parsing HTTP"),(0,i.kt)("p",null,"Finally, let's see the capabilities ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpRequestLayer")," has to offer. First let's extract the layer from the packet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// let's get the HTTP request layer\npcpp::HttpRequestLayer* httpRequestLayer = parsedPacket.getLayerOfType<pcpp::httprequestlayer>();\nif (httpRequestLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find HTTP request layer\" << std::endl;\n    return 1;\n}\n")),(0,i.kt)("p",null,"Of course there is a similar class ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponseLayer")," for HTTP responses."),(0,i.kt)("p",null,"HTTP messages (both requests and responses) have 3 main parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first line (also known as request-line or status-line) which includes the HTTP version, HTTP method (for requests) or status code (for responses) and the URI (for requests)"),(0,i.kt)("li",{parentName:"ul"},"Message headers which include all header fields (e.g host, user-agent, cookie, content-type etc.)"),(0,i.kt)("li",{parentName:"ul"},"Message body")),(0,i.kt)("p",null,"The HTTP layer classes provide access to all of these parts. Let's start with showing how to get data from the first line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// print HTTP method and URI. Both appear in the first line of the HTTP request\nstd::cout << std::endl\n    << "HTTP method: " << printHttpMethod(httpRequestLayer->getFirstLine()->getMethod()) << std::endl\n    << "HTTP URI: " << httpRequestLayer->getFirstLine()->getUri() << std::endl;\n')),(0,i.kt)("p",null,"As you can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpRequestLayer")," class exposes a getter (",(0,i.kt)("inlineCode",{parentName:"p"},"getFirstLine()"),") that retrieves an object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpRequestFirstLine")," that contain all of the first-line data: method, URI,etc. The method is returned as an enum so I added a simple function ",(0,i.kt)("inlineCode",{parentName:"p"},"printHttpMethod")," to print it as a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string printHttpMethod(pcpp::HttpRequestLayer::HttpMethod httpMethod)\n{\n    switch (httpMethod)\n    {\n    case pcpp::HttpRequestLayer::HttpGET:\n        return "GET";\n    case pcpp::HttpRequestLayer::HttpPOST:\n        return "POST";\n    default:\n        return "Other";\n    }\n}\n')),(0,i.kt)("p",null,"Now let's see how to get header fields data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// print values of the following HTTP field: Host, User-Agent and Cookie\nstd::cout\n    << "HTTP host: " << httpRequestLayer->getFieldByName(PCPP_HTTP_HOST_FIELD)->getFieldValue() << std::endl\n    << "HTTP user-agent: " << httpRequestLayer->getFieldByName(PCPP_HTTP_USER_AGENT_FIELD)->getFieldValue() << std::endl\n    << "HTTP cookie: " << httpRequestLayer->getFieldByName(PCPP_HTTP_COOKIE_FIELD)->getFieldValue() << std::endl;\n')),(0,i.kt)("p",null,"The HTTP request and response layers exposes a method ",(0,i.kt)("inlineCode",{parentName:"p"},"getFieldByName()")," to get a header field data by it's name. The class representing a field is called ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpField")," and has some interesting API, but probably the most important method for parsing is ",(0,i.kt)("inlineCode",{parentName:"p"},"getFieldValue()")," which returns the value of this header field as string. Please notice that I didn't write the header field names as strings but rather used a macro defined in PcapPlusPlus for some of the most useful HTTP fields (like host, cookie, user-agent, etc.)."),(0,i.kt)("p",null,"Finally, let's see another cool method in ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpRequestLayer")," which is ",(0,i.kt)("inlineCode",{parentName:"p"},"getURL()"),' that forms and returns the full URL from the request (including host-name from "Host" header field + URI from the request-line):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// print the full URL of this request\nstd::cout << "HTTP full URL: " << httpRequestLayer->getUrl() << std::endl;\n')),(0,i.kt)("p",null,"Now let's see the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP method: GET\nHTTP URI: /serv?s=19190039&t=1361916157&f=us-p9h3\nHTTP host: geo.yahoo.com\nHTTP user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10\nHTTP cookie: B=fdnulql8iqc6l&b=3&s=ps\nHTTP full URL: geo.yahoo.com/serv?s=19190039&t=1361916157&f=us-p9h3\n")),(0,i.kt)("h2",{id:"running-the-example"},"Running the example"),(0,i.kt)("p",null,"All code that was covered in this tutorial can be found ",(0,i.kt)(o.Z,{relativePath:"/Examples/Tutorials/Tutorial-PacketParsing",mdxType:"CodeLink"},"here"),". In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from the ",(0,i.kt)(s.Z,{mdxType:"ReleaseLink"}),". Then follow these instruction, according to your platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running ",(0,i.kt)("strong",{parentName:"li"},"sudo make install")," in PcapPlusPlus main directory). Then either change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile.non_windows")," file name to ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," and run ",(0,i.kt)("inlineCode",{parentName:"li"},"make all"),", or run ",(0,i.kt)("inlineCode",{parentName:"li"},"make -f Makefile.non_windows all")),(0,i.kt)("li",{parentName:"ul"},"Windows using MinGW or MinGW-w64 - either change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile.windows")," file name to ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," and run ",(0,i.kt)("inlineCode",{parentName:"li"},"make all"),", or run ",(0,i.kt)("inlineCode",{parentName:"li"},"make -f Makefile.windows all")),(0,i.kt)("li",{parentName:"ul"},"Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: ",(0,i.kt)("inlineCode",{parentName:"li"},"mk\\[vs_version]\\Tutorials.sln"),". Just open it and compile all tutorials")),(0,i.kt)("p",null,"In all options the compiled executable will be inside the tutorial directory (",(0,i.kt)("inlineCode",{parentName:"p"},"[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-PacketParsing"),")"))}m.isMDXComponent=!0}}]);