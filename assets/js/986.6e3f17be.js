(window.webpackJsonp=window.webpackJsonp||[]).push([[986],{1566:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"在-macos-catlina-安裝-vue-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-macos-catlina-安裝-vue-js"}},[s._v("#")]),s._v(" 在 macOS Catlina 安裝 Vue.js")]),s._v(" "),e("h2",{attrs:{id:"安裝作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業"}},[s._v("#")]),s._v(" 安裝作業")]),s._v(" "),e("p",[s._v("Vue.js 之使用，需搭配 Vue CLI 指令操作。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("【參考文件】：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://cli.vuejs.org/guide/prototyping.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue CLI"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"安裝前準備"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝前準備"}},[s._v("#")]),s._v(" 安裝前準備")]),s._v(" "),e("p",[s._v("Vue CLI 需搭配 Node.js 版本 8.11.0+ 。故請先用以下指令檢查目前使用中之 Node.js 版本。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ node -v\n")])])]),e("h3",{attrs:{id:"執行安裝指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#執行安裝指令"}},[s._v("#")]),s._v(" 執行安裝指令")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ npm install -g @vue/cli\n")])])]),e("p",[s._v("或")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ yarn global add @vue/cli\n")])])]),e("h3",{attrs:{id:"驗證安裝成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#驗證安裝成功"}},[s._v("#")]),s._v(" 驗證安裝成功")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ vue --version\n@vue/cli 4.0.4\n")])])]),e("h2",{attrs:{id:"值得安裝的-vs-code-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#值得安裝的-vs-code-extensions"}},[s._v("#")]),s._v(" 值得安裝的 VS Code Extensions")]),s._v(" "),e("p",[s._v("採用 VS Code 作為程式編輯器者，可安裝下列之 Extensions，使 Vue.js App 開發作業更加順暢。")]),s._v(" "),e("ul",[e("li",[s._v("Vetur")]),s._v(" "),e("li",[s._v("Vue VSCode Snippets")]),s._v(" "),e("li",[s._v("Vue VS Code Extension Pack")]),s._v(" "),e("li",[s._v("Vue 2 Snippets")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("【參考文件】：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.kayee.nl/2019/03/11/best-visual-studio-code-vue-js-extensions-for-sitecore-jss-development/",target:"_blank",rel:"noopener noreferrer"}},[s._v("BEST VISUAL STUDIO CODE VUE.JS EXTENSIONS FOR SITECORE JSS DEVELOPMENT"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"node-js-版本控管工具：n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-版本控管工具：n"}},[s._v("#")]),s._v(" Node.js 版本控管工具：n")]),s._v(" "),e("h3",{attrs:{id:"使用-n-進行版本控管"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-n-進行版本控管"}},[s._v("#")]),s._v(" 使用 n 進行版本控管")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("【參考文件】：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[s._v("n – Interactively Manage Your Node.js Versions"),e("OutboundLink")],1)])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("安裝 n ：不使用 brew ，改用 n-install 方式安裝：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ curl -L https://git.io/n-install | bash\n\n\n$ which n\n/Users/<UserName>/n/bin/n\n")])])]),e("p",[s._v("【註】： 使用 brew install n 安裝，其安裝路徑如下")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ which n\n/usr/local/bin/n\n\n$ ls -al /usr/local/bin/n\nlrwxr-xr-x  1 <UserName>  admin  23 10 19 10:37 /usr/local/bin/n -> ../Cellar/n/6.0.1/bin/n\n")])])])]),s._v(" "),e("li",[e("p",[s._v("設定環境變數 PATH ，以便 n 能順利執行。")]),s._v(" "),e("p",[s._v("n-install 於安裝結束時，自動在 Shell 設定檔："),e("code",[s._v("~/.bash_profile")]),s._v(" (Bash Shell)，或 "),e("code",[s._v("~/.zshrc")]),s._v(" (ZSH Shell) ，加入如下之 PATH 相關設定，以便 "),e("strong",[e("code",[s._v("$HOME/n/bin")])]),s._v(" 路徑也能加入環境變數 PATH 之中。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"\n')])])])]),s._v(" "),e("li",[e("p",[s._v("重新啟動 Shell 。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ source ~/.bash_profile\n")])])]),e("p",[s._v("或")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ source ~/.zshrc\n")])])])])]),s._v(" "),e("h3",{attrs:{id:"解除安裝作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解除安裝作業"}},[s._v("#")]),s._v(" 解除安裝作業")]),s._v(" "),e("p",[s._v("使用 n-install 方式安裝， n 會安裝在以下目錄路徑：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$HOME/n/bin\n")])])]),e("p",[s._v("欲解除安裝，可透過 n-install 其自行提供的工具 n-uninstall 完成。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ n-uninstall\n")])])]),e("p",[s._v("記得 "),e("code",[s._v("~/.bash_profile")]),s._v(", "),e("code",[s._v("~/.zshrc")]),s._v(" 檔案，對於「環境變數」與 PATH 相關的設定亦需取消。")]),s._v(" "),e("p",[s._v("以 Bash Shell 為例：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("啟動文字編輯器。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v(" $ vim ~/.bash_profile \n")])])])]),s._v(" "),e("li",[e("p",[s._v("刪除以下這段設定。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v(' export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"\n')])])])]),s._v(" "),e("li",[e("p",[s._v("取消已設定之環境變數。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v(" $ unset N_PREFIX\n")])])])]),s._v(" "),e("li",[e("p",[s._v("重載 Bash Shell 設定。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v(" $ source ~/.bash_profile\n")])])])])]),s._v(" "),e("h3",{attrs:{id:"n-版本控管常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#n-版本控管常用操作"}},[s._v("#")]),s._v(" n 版本控管常用操作")]),s._v(" "),e("p",[e("strong",[s._v("安裝 LTS 版本")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ n lts\n\n  installing : node-v10.16.3\n       mkdir : /Users/alanjui/n/n/versions/node/10.16.3\n       fetch : https://nodejs.org/dist/v10.16.3/node-v10.16.3-darwin-x64.tar.gz\n   installed : v10.16.3 to /Users/alanjui/n/bin/node\n      active : v12.12.0 at /usr/local/bin/node\n")])])]),e("p",[e("strong",[s._v("安裝最近發行版本")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ n latest\n\n  installing : node-v12.12.0\n       mkdir : /Users/alanjui/n/n/versions/node/12.12.0\n       fetch : https://nodejs.org/dist/v12.12.0/node-v12.12.0-darwin-x64.tar.gz\n   installed : v12.12.0 to /Users/alanjui/n/bin/node\n      active : v12.12.0 at /usr/local/bin/node\n")])])]),e("p",[e("strong",[s._v("查詢已安裝各版本")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ n ls\nnode/10.16.3\nnode/12.12.0\n")])])]),e("p",[e("strong",[s._v("切換版本")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ n\n\n    node/10.16.3\n    node/12.12.0\n\nUse up/down arrow keys to select a version, return key to install, q to quit\n")])])]),e("p",[s._v("然後使用上、下鍵，標示欲擇用版本，按《Enter》鍵。")])])}),[],!1,null,null,null);a.default=n.exports}}]);