(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{215:function(e,t,n){},216:function(e,t,n){},235:function(e,t){},257:function(e,t){},259:function(e,t){},335:function(e,t){},337:function(e,t){},369:function(e,t){},374:function(e,t){},376:function(e,t){},383:function(e,t){},396:function(e,t){},475:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_tokenIdCounter","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')},476:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n.n(a),s=n(197),i=n.n(s),u=(n(215),n(216),n(14)),o=n.n(u),p=n(24),c=n(37),d=n(12);n(219).config();var l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ALCHEMY_KEY,y=(0,n(222).createAlchemyWeb3)(l),m=n(475),b="0x9e7EBB6590cc4cEEe704C856373A4991eF5817D7",f=function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new y.eth.Contract(m,b);case 2:return t=e.sent,e.next=5,t.methods._tokenIdCounter().call();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(d.jsx)("span",{children:Object(d.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(d.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above."});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the top right button."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(d.jsx)("span",{children:Object(d.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(d.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(o.a.mark((function e(t,n,a){var r,s,i,u,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://ipfs.filebase.io/ipfs/QmUp4Zr5YU5z87D9fzmNaZ8gxYhmCBQG6kK2LebBZC8cCL/",e.next=3,new y.eth.Contract(m,b);case 3:return window.contract=e.sent,e.next=6,window.contract.methods._tokenIdCounter().call();case 6:return s=e.sent,i=r+s,console.log(i),u={to:b,from:window.ethereum.selectedAddress,data:window.contract.methods.safeMint(window.ethereum.selectedAddress,r).encodeABI()},e.prev=10,e.next=13,window.ethereum.request({method:"eth_sendTransaction",params:[u]});case 13:return p=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Check out your transaction on Etherscan: https://goerli.etherscan.io/tx/"+p});case 17:return e.prev=17,e.t0=e.catch(10),e.abrupt("return",{success:!1,status:"\ud83d\ude25 Something went wrong: "+e.t0.message});case 20:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t,n,a){return e.apply(this,arguments)}}(),w=function(e){var t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),u=Object(c.a)(i,2),l=u[0],y=u[1],m=Object(a.useState)(""),b=Object(c.a)(m,2),w=b[0],x=(b[1],Object(a.useState)("")),T=Object(c.a)(x,2),O=T[0],k=(T[1],Object(a.useState)("")),g=Object(c.a)(k,2),M=g[0],C=g[1],S=Object(a.useState)(""),_=Object(c.a)(S,2),A=_[0],E=_[1];Object(a.useEffect)(Object(p.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,n=t.address,a=t.status,e.next=7,f();case 7:r=e.sent,s(n),y(a),E(r),C("https://ipfs.filebase.io/ipfs/Qme7Bb8vjjbEDJK2apW6XdTZpTRNiGGieth5JReBbwRbYd/"+r+".png");case 12:case"end":return e.stop()}}),e)}))),[]);var I=function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,y(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(M,w,O);case 2:t=e.sent,n=t.status,y(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"Minter",children:[Object(d.jsx)("button",{id:"walletButton",onClick:I,children:r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(d.jsx)("span",{children:"Connect Wallet"})}),Object(d.jsx)("br",{}),Object(d.jsx)("h1",{id:"title",children:"Stable Diffusion NFT Minter"}),Object(d.jsx)("h3",{children:'Here is the next NFT to be minted if you like it you can press "Mint."'}),Object(d.jsxs)("p",{children:["NFT Number ",A," "]}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:M,alt:"nft"})}),Object(d.jsx)("button",{id:"mintButton",onClick:F,children:"Mint NFT"}),Object(d.jsx)("p",{id:"status",children:l})]})};var x=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(w,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,480)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),T()}},[[476,1,2]]]);
//# sourceMappingURL=main.9767d2ce.chunk.js.map