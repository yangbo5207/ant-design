webpackJsonp([102,197],{1769:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),s=(o(a),n(2));o(s);e.exports={content:["section",["p","Upload file by selecting or dragging."],["h2","When To Use"],["p","Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool."],["ul",["li",["p","When you need to upload one or more files."]],["li",["p","When you need to show the process of uploading."]],["li",["p","When you need to upload files by dragging and dropping."]]]],meta:{category:"Components",type:"Form Controls",title:"Upload",filename:"components/upload/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]],["li",["a",{href:"#show-download-links"},"show download links"]],["li",["a",{href:"#IE-note"},"IE note"]]],api:["section",["h2","API"],["blockquote",["p","You can consult ",["a",{title:null,href:"https://github.com/blueimp/jQuery-File-Upload/wiki"},"jQuery-File-Upload"]," about how to implement server side upload interface."]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","name"],["td","Optional. The name of uploading file"],["td","String"],["td","file"]],["tr",["td","defaultFileList"],["td","Optional. Default list of files that have been uploaded."],["td","Array","[object]"],["td","-"]],["tr",["td","fileList"],["td","Optional. List of files that have been uploaded."],["td","Array","[object]"],["td","-"]],["tr",["td","action"],["td","Required. Uploading URL"],["td","String"],["td","-"]],["tr",["td","data"],["td","Optional. Uploading params or function which can return uploading params."],["td","Object or function(file)"],["td","-"]],["tr",["td","headers"],["td","Optional. Set request headers, valid above IE10."],["td","Object"],["td","-"]],["tr",["td","showUploadList"],["td","Optional. Whether to show uploadList."],["td","Boolean"],["td","true"]],["tr",["td","multiple"],["td","Optional. Whether to support selected multiple file. ",["code","IE10+"]," supported. You can select multiple files with CTRL holding down while multiple is set to be true"],["td","Boolean"],["td","false"]],["tr",["td","accept"],["td","Optional. File types that can be accepted. See ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"},"input accept Attribute"]],["td","String"],["td","-"]],["tr",["td","beforeUpload"],["td","Optional. Hook function which takes an argument: the uploaded file, will be executed before uploading.  Uploading will be stopped with ",["code","false"]," or a rejected Promise returned. ",["strong","Warning\uff1athis function is not supported by old IE"],"\u3002"],["td","Function"],["td","-"]],["tr",["td","onChange"],["td","Optional. A callback function, can be executed when uploading state is changing. See ",["a",{title:null,href:"#onChange"},"onChange"]],["td","Function"],["td","-"]],["tr",["td","listType"],["td","Optional. Built-in stylesheets, support for two types: ",["code","text"]," or ",["code","picture"]],["td","String"],["td","'text'"]],["tr",["td","onPreview"],["td","A callback function, will be executed when file link is clicked."],["td","Function(file)"],["td","-"]],["tr",["td","onRemove"],["td","A callback function, will be executed when removing file button is clicked"],["td","Function(file)"],["td","-"]],["tr",["td","supportServerRender"],["td","Need to be turned on while the server side is rendering."],["td","Boolean"],["td","false"]]]],["h3","onChange"],["blockquote",["p","The function will be called when uploading is in progress, completed or  failed"]],["p","When uploading state change, it returns:"],["pre",{lang:"js",highlighted:'<span class="token punctuation" >{</span>\n  file<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  fileList<span class="token punctuation" >:</span> <span class="token punctuation" >[</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  event<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span>'},["code","{\n  file: { /* ... */ },\n  fileList: [ /* ... */ ],\n  event: { /* ... */ },\n}"]],["ol",["li",["p",["code","file"]," File object for the current operation."],["pre",{lang:"js",highlighted:'<span class="token punctuation" >{</span>\n   uid<span class="token punctuation" >:</span> <span class="token string" >\'uid\'</span><span class="token punctuation" >,</span>      <span class="token comment" spellcheck="true">// unique identifier\uff0cnegative is recommend\uff0cto prevent interference with internal generated id</span>\n   name<span class="token punctuation" >:</span> <span class="token string" >\'xx.png\'</span>   <span class="token comment" spellcheck="true">// file name</span>\n   status<span class="token punctuation" >:</span> <span class="token string" >\'done\'</span><span class="token punctuation" >,</span>  <span class="token comment" spellcheck="true">// options\uff1auploading, done, error, removed</span>\n   response<span class="token punctuation" >:</span> <span class="token string" >\'{"status": "success"}\'</span><span class="token punctuation" >,</span>  <span class="token comment" spellcheck="true">// response from server</span>\n<span class="token punctuation" >}</span>'},["code","{\n   uid: 'uid',      // unique identifier\uff0cnegative is recommend\uff0cto prevent interference with internal generated id\n   name: 'xx.png'   // file name\n   status: 'done',  // options\uff1auploading, done, error, removed\n   response: '{\"status\": \"success\"}',  // response from server\n}"]],["blockquote",["p","Before ",["code","antd@1.9.0"],", this parameter will be Array Object ",["code","[file, ...]"]," in multiple mode, while in ",["code","antd@1.9.0+"],", it will always be an Object."]]],["li",["p",["code","fileList"]," current list of files"]],["li",["p",["code","event"]," response from server, including uploading progress, supported by advanced browsers."]]],["h2","show download links"],["p","please set property ",["code","url"]," of property ",["code","fileList"]," to control content of link"],["h2","IE note"],["ul",["li",["p",["a",{title:null,href:"https://github.com/react-component/upload#ie89-note"},"https://github.com/react-component/upload#ie89-note"]]]]]}}});