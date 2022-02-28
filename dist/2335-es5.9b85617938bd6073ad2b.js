!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunksrijan_angular=self.webpackChunksrijan_angular||[]).push([[2335],{2335:function(t,n,o){"use strict";o.r(n),o.d(n,{UploadModule:function(){return U}});var a=o(8583),l=o(665),c=o(7716),u=o(4762),s=o(9075);function d(e,t){if(1&e){var n=c.EpF();c.TgZ(0,"ngx-dropzone-remove-badge",1),c.NdJ("click",function(e){return c.CHM(n),c.oxw()._remove(e)}),c.qZA()}}var p=[[["ngx-dropzone-label"]]],f=["ngx-dropzone-label"],g=["fileInput"];function h(e,t){1&e&&c.Hsn(0,2,["*ngIf","!_hasPreviews"])}var v=[[["ngx-dropzone-preview"]],"*",[["ngx-dropzone-label"]]],b=["ngx-dropzone-preview","*","ngx-dropzone-label"],m=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.lG2({type:e,selectors:[["ngx-dropzone-label"]]}),e}();function y(e){return null!=e&&"false"!="".concat(e)}var x=(function(e){e[e.BACKSPACE=8]="BACKSPACE",e[e.DELETE=46]="DELETE"}(x||(x={})),x),_=function(){var e=function(){function e(t){r(this,e),this.sanitizer=t,this._removable=!1,this.removed=new c.vpe,this.tabIndex=0}return i(e,[{key:"file",get:function(){return this._file},set:function(e){this._file=e}},{key:"removable",get:function(){return this._removable},set:function(e){this._removable=y(e)}},{key:"keyEvent",value:function(e){switch(e.keyCode){case x.BACKSPACE:case x.DELETE:this.remove()}}},{key:"hostStyle",get:function(){return this.sanitizer.bypassSecurityTrustStyle("\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t")}},{key:"_remove",value:function(e){e.stopPropagation(),this.remove()}},{key:"remove",value:function(){this._removable&&this.removed.next(this.file)}},{key:"readFile",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){var i=new FileReader;if(i.onload=function(t){e(t.target.result)},i.onerror=function(e){console.error("FileReader failed on file ".concat(t.file.name,".")),n(e)},!t.file)return n("No file to read. Please provide a file using the [file] Input property.");i.readAsDataURL(t.file)}));case 1:case"end":return e.stop()}},e)}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.H7))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ngx-dropzone-preview"]],hostVars:3,hostBindings:function(e,t){1&e&&c.NdJ("keyup",function(e){return t.keyEvent(e)}),2&e&&(c.Ikx("tabindex",t.tabIndex),c.Akn(t.hostStyle))},inputs:{file:"file",removable:"removable"},outputs:{removed:"removed"},ngContentSelectors:f,decls:2,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(c.F$t(p),c.Hsn(0),c.YNc(1,d,1,0,"ngx-dropzone-remove-badge",0)),2&e&&(c.xp6(1),c.Q6J("ngIf",t.removable))},directives:function(){return[a.O5,Z]},styles:["[_nghost-%COMP%]{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]}),e}(),w=function(){var e=function(){function e(){r(this,e)}return i(e,[{key:"parseFileList",value:function(e,t,n,i){for(var r=[],o=[],a=0;a<e.length;a++){var l=e.item(a);this.isAccepted(l,t)?n&&l.size>n?this.rejectFile(o,l,"size"):!i&&r.length>=1?this.rejectFile(o,l,"no_multiple"):r.push(l):this.rejectFile(o,l,"type")}return{addedFiles:r,rejectedFiles:o}}},{key:"isAccepted",value:function(e,t){if("*"===t)return!0;var n=t.split(",").map(function(e){return e.toLowerCase().trim()}),i=e.type.toLowerCase(),r=e.name.toLowerCase();return!!n.find(function(e){return e.endsWith("/*")?i.split("/")[0]===e.split("/")[0]:e.startsWith(".")?r.endsWith(e):e==i})}},{key:"rejectFile",value:function(e,t,n){var i=t;i.reason=n,e.push(i)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e}(),k=function(){var e=function(){function e(t){r(this,e),this.service=t,this.change=new c.vpe,this.accept="*",this._disabled=!1,this._multiple=!0,this._maxFileSize=void 0,this._expandable=!1,this._disableClick=!1,this._isHovered=!1}return i(e,[{key:"_hasPreviews",get:function(){return!!this._previewChildren.length}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=y(e),this._isHovered&&(this._isHovered=!1)}},{key:"multiple",get:function(){return this._multiple},set:function(e){this._multiple=y(e)}},{key:"maxFileSize",get:function(){return this._maxFileSize},set:function(e){this._maxFileSize=function(e){return isNaN(parseFloat(e))||isNaN(Number(e))?null:Number(e)}(e)}},{key:"expandable",get:function(){return this._expandable},set:function(e){this._expandable=y(e)}},{key:"disableClick",get:function(){return this._disableClick},set:function(e){this._disableClick=y(e)}},{key:"_onClick",value:function(){this.disableClick||this.showFileSelector()}},{key:"_onDragOver",value:function(e){this.disabled||(this.preventDefault(e),this._isHovered=!0)}},{key:"_onDragLeave",value:function(){this._isHovered=!1}},{key:"_onDrop",value:function(e){this.disabled||(this.preventDefault(e),this._isHovered=!1,this.handleFileDrop(e.dataTransfer.files))}},{key:"showFileSelector",value:function(){this.disabled||this._fileInput.nativeElement.click()}},{key:"_onFilesSelected",value:function(e){this.handleFileDrop(e.target.files),this._fileInput.nativeElement.value="",this.preventDefault(e)}},{key:"handleFileDrop",value:function(e){var t=this.service.parseFileList(e,this.accept,this.maxFileSize,this.multiple);this.change.next({addedFiles:t.addedFiles,rejectedFiles:t.rejectedFiles,source:this})}},{key:"preventDefault",value:function(e){e.preventDefault(),e.stopPropagation()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(w,2))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ngx-dropzone"],["","ngx-dropzone",""]],contentQueries:function(e,t,n){var i;(1&e&&c.Suo(n,_,5),2&e)&&(c.iGM(i=c.CRH())&&(t._previewChildren=i))},viewQuery:function(e,t){var n;(1&e&&c.Gf(g,7),2&e)&&(c.iGM(n=c.CRH())&&(t._fileInput=n.first))},hostVars:8,hostBindings:function(e,t){1&e&&c.NdJ("click",function(){return t._onClick()})("dragover",function(e){return t._onDragOver(e)})("dragleave",function(){return t._onDragLeave()})("drop",function(e){return t._onDrop(e)}),2&e&&c.ekj("ngx-dz-hovered",t._isHovered)("ngx-dz-disabled",t.disabled)("expandable",t.expandable)("unclickable",t.disableClick)},inputs:{accept:"accept",disabled:"disabled",multiple:"multiple",maxFileSize:"maxFileSize",expandable:"expandable",disableClick:"disableClick",id:"id",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedBy:["aria-describedby","ariaDescribedBy"]},outputs:{change:"change"},features:[c._Bn([w])],ngContentSelectors:b,decls:5,vars:8,consts:[["type","file",3,"id","multiple","accept","disabled","change"],["fileInput",""],[4,"ngIf"]],template:function(e,t){1&e&&(c.F$t(v),c.TgZ(0,"input",0,1),c.NdJ("change",function(e){return t._onFilesSelected(e)}),c.qZA(),c.YNc(2,h,1,0,"ng-content",2),c.Hsn(3),c.Hsn(4,1)),2&e&&(c.Q6J("id",t.id)("multiple",t.multiple)("accept",t.accept)("disabled",t.disabled),c.uIk("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedBy),c.xp6(2),c.Q6J("ngIf",!t._hasPreviews))},directives:[a.O5],styles:["[_nghost-%COMP%]{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{cursor:no-drop;opacity:.5;pointer-events:none}.expandable[_nghost-%COMP%]{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]}),e}(),Z=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["ngx-dropzone-remove-badge"]],decls:3,vars:0,consts:[["x1","0","y1","0","x2","10","y2","10"],["x1","0","y1","10","x2","10","y2","0"]],template:function(e,t){1&e&&(c.O4$(),c.TgZ(0,"svg"),c._UZ(1,"line",0),c._UZ(2,"line",1),c.qZA())},styles:["[_nghost-%COMP%]{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke:#fff;stroke-width:2px}"]}),e}(),C=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.ez]]}),e}(),z=o(2989),A=o(1558),O=o(2111);function T(e,t){if(1&e){var n=c.EpF();c.TgZ(0,"ngx-dropzone-preview",17),c.NdJ("removed",function(){c.CHM(n);var e=c.oxw().$implicit;return c.oxw().onRemove(e)})("click",function(e){return c.CHM(n),c.oxw(2).onClick(e)}),c.TgZ(1,"ngx-dropzone-label"),c.TgZ(2,"div",18),c._uU(3),c.qZA(),c.TgZ(4,"div",19),c._uU(5),c.qZA(),c.qZA(),c.qZA()}if(2&e){var i=c.oxw().$implicit,r=c.oxw();c.Q6J("removable",!0),c.xp6(3),c.Oqu(r.getSize(i)),c.xp6(2),c.Oqu(i.name)}}function F(e,t){if(1&e){var n=c.EpF();c.TgZ(0,"ngx-dropzone-preview",17),c.NdJ("removed",function(){c.CHM(n);var e=c.oxw().$implicit;return c.oxw().onRemove(e)})("click",function(e){return c.CHM(n),c.oxw(2).onClick(e)}),c.TgZ(1,"ngx-dropzone-label"),c.TgZ(2,"div",18),c._uU(3),c.qZA(),c.TgZ(4,"div",19),c._uU(5),c.qZA(),c.qZA(),c.qZA()}if(2&e){var i=c.oxw().$implicit,r=c.oxw();c.Udp("background-image",r.getPreviewUrl(i))("background-size","cover"),c.Q6J("removable",!0),c.xp6(3),c.Oqu(r.getSize(i)),c.xp6(2),c.Oqu(i.name)}}function P(e,t){if(1&e&&(c.ynx(0),c.YNc(1,T,6,3,"ngx-dropzone-preview",15),c.YNc(2,F,6,7,"ngx-dropzone-preview",16),c.BQk()),2&e){var n=t.$implicit;c.xp6(1),c.Q6J("ngIf",!n.type.includes("image")),c.xp6(1),c.Q6J("ngIf",n.type.includes("image"))}}var S,q,M=[{path:"",component:(S=function(){function t(e){r(this,t),this.sanitizer=e,this.pageTitle=[],this.files=[]}return i(t,[{key:"ngOnInit",value:function(){this.pageTitle=[{label:"Forms",path:"/"},{label:"File Upload",path:"/",active:!0}]}},{key:"onSelect",value:function(t){var n;(n=this.files).push.apply(n,e(t.addedFiles))}},{key:"onRemove",value:function(e){this.files.splice(this.files.indexOf(e),1)}},{key:"getSize",value:function(e){var t=e.size;if(0===t)return"0 Bytes";var n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}},{key:"getPreviewUrl",value:function(e){return this.sanitizer.bypassSecurityTrustStyle("url("+URL.createObjectURL(e)+")")}},{key:"onClick",value:function(e){e.stopPropagation()}}]),t}(),S.\u0275fac=function(e){return new(e||S)(c.Y36(s.H7))},S.\u0275cmp=c.Xpm({type:S,selectors:[["app-file-upload"]],decls:26,vars:2,consts:[["title","File Upload",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"header-title","mt-0","mb-1"],[1,"sub-header"],["fileUpload","ngForm"],[1,"dropzone",2,"height","auto !important",3,"change"],[1,"h1","text-muted","dripicons-cloud-upload"],[1,"text-muted","font-13"],[4,"ngFor","ngForOf"],[1,"clearfix","text-end","mt-3"],["type","button",1,"btn","btn-danger"],[1,"uil","uil-arrow-right","me-1"],[3,"removable","removed","click",4,"ngIf"],[3,"removable","background-image","background-size","removed","click",4,"ngIf"],[3,"removable","removed","click"],[1,"dz-size"],[1,"dz-filename"]],template:function(e,t){1&e&&(c._UZ(0,"app-page-title",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"h4",5),c._uU(6,"Dropzone File Upload"),c.qZA(),c.TgZ(7,"p",6),c._uU(8," DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews. "),c.qZA(),c.TgZ(9,"form",null,7),c.TgZ(11,"ngx-dropzone",8),c.NdJ("change",function(e){return t.onSelect(e)}),c.TgZ(12,"ngx-dropzone-label"),c._UZ(13,"i",9),c.TgZ(14,"h3"),c._uU(15,"Drop files here or click to upload."),c.qZA(),c.TgZ(16,"span",10),c._uU(17,"(This is just a demo dropzone. Selected files are "),c.TgZ(18,"strong"),c._uU(19,"not"),c.qZA(),c._uU(20," actually uploaded.)"),c.qZA(),c.qZA(),c.YNc(21,P,3,2,"ng-container",11),c.qZA(),c.qZA(),c.TgZ(22,"div",12),c.TgZ(23,"button",13),c._UZ(24,"i",14),c._uU(25," Submit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.Q6J("breadcrumbItems",t.pageTitle),c.xp6(21),c.Q6J("ngForOf",t.files))},directives:[O.T,l._Y,l.JL,l.F,k,m,a.sg,a.O5,_],styles:[""]}),S)}],I=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[A.Bz.forChild(M)],A.Bz]}),e}(),U=((q=function e(){r(this,e)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=c.oAB({type:q}),q.\u0275inj=c.cJS({imports:[[a.ez,l.u5,C,z.p,I]]}),q)},2989:function(e,t,n){"use strict";n.d(t,{p:function(){return a}});var i=n(8583),o=n(7716),a=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.ez]]}),e}()},2111:function(e,t,n){"use strict";n.d(t,{T:function(){return d}});var o=n(7716),a=n(9075),l=n(8583);function c(e,t){if(1&e&&(o.TgZ(0,"li",6),o.TgZ(1,"a",11),o._uU(2),o.qZA(),o.qZA()),2&e){var n=o.oxw().$implicit;o.xp6(2),o.Oqu(n.label)}}function u(e,t){if(1&e&&(o.TgZ(0,"li",12),o.TgZ(1,"a",13),o._uU(2),o.qZA(),o.qZA()),2&e){var n=o.oxw().$implicit;o.xp6(2),o.Oqu(n.label)}}function s(e,t){if(1&e&&(o.ynx(0),o.YNc(1,c,3,1,"li",9),o.YNc(2,u,3,1,"li",10),o.BQk()),2&e){var n=t.$implicit;o.xp6(1),o.Q6J("ngIf",!n.active),o.xp6(1),o.Q6J("ngIf",n.active)}}var d=function(){var e=function(){function e(t){r(this,e),this.titleService=t,this.breadcrumbItems=[],this.title=""}return i(e,[{key:"ngOnInit",value:function(){this.titleService.setTitle((this.windowTitle?this.windowTitle:this.title)+" | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.Dx))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title",windowTitle:"windowTitle"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h4",3),o._uU(4),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"ol",5),o.TgZ(7,"li",6),o.TgZ(8,"a",7),o._uU(9,"Shreyu"),o.qZA(),o.qZA(),o.YNc(10,s,3,2,"ng-container",8),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(4),o.Oqu(t.title),o.xp6(6),o.Q6J("ngForOf",t.breadcrumbItems))},directives:[l.sg,l.O5],styles:[""]}),e}()},4762:function(e,t,n){"use strict";n.d(t,{ZT:function(){return r},pi:function(){return o},mG:function(){return a},ev:function(){return l}});var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function a(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{c(i.next(e))}catch(t){o(t)}}function l(e){try{c(i.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,l)}c((i=i.apply(e,t||[])).next())})}function l(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}}}])}();