"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[85343],{60620:function(e,t,i){i.d(t,{nR:function(){return s}});var n=i(67294),a=i(80069),l=i(3905),r=i(78989),o=function(e){return"boolean"!=typeof e&&e?"string"==typeof e||n.isValidElement(e)?n.createElement(l.Zo,null,e):n.createElement(l.Zo,null,n.createElement(e,null)):null},s=function(e){var t,i,s,d=function(e){return Object.assign({filetype:"php",examplePurpose:e.summary},e)}(Object.assign({examplePurpose:null!=(t=null==e?void 0:e.summary)?t:null},e));(d.description=function(e,t){var i=e.description,a=void 0===i?null:i,r=e.extraDescription,s=void 0===r?null:r,d=e.children,u=void 0===d?null:d;if(u){var p=o(u);return n.createElement(l.Zo,null,p)}if(a){var c=o(a);return n.createElement(l.Zo,null,c)}var m=o(t),f=o(s);return m?n.createElement(l.Zo,null,m,f):null}(d,null!=(i=null==d?void 0:d.defaultDescription)?i:null),null!=d&&d.example||null!=d&&d.defaultExample)&&(d.example=(0,r.W7)(d,null!=(s=null==d?void 0:d.defaultExample)?s:null));return(0,a.Z)(d)}},80069:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(67294),a=i(87918),l=i(80684),r=i(86886),o=i(34673),s=i(3905),d=function(e,t,i){return void 0===i&&(i="info"),n.createElement(r.ZP,{item:!0,key:e},n.createElement(l.Z,{title:t},n.createElement(a.Z,{label:e,color:i})))};function u(e){var t=e.filepath,i=e.summary,a=function(e){var t=e.required,i=void 0!==t&&t,n=e.legacy,a=void 0!==n&&n,l=e.deprecated,r=void 0!==l&&l,o=e.refreshedDuringUpgrade,s=void 0!==o&&o,u=e.refreshedDuringPurge,p=void 0!==u&&u,c=[];return s&&c.push(d("Upgradable","Changes to this file or directory will be re-applied during a Moodle upgrade. If you make any changes to it, you can simply increment the version number and perform a Moodle upgrade.","info")),p&&c.push(d("Refreshed on cache purge","The contents of this file or directory are cached. To see your changes you can simply purge Moodle's caches and refresh the page.","info")),i&&c.push(d("Required","This file must be present","success")),a&&c.push(d("Legacy","Use of this file is being phased out. It is still supported for older installations but will be removed..","warning")),r&&c.push(d("Deprecated","Use of this file is deprecated and not recommended.It may still be provided for older versions of Moodle but is no longer used.","error")),c}(e),l=e.description?n.createElement(r.ZP,{item:!0,xs:12},e.description):null;return n.createElement(s.Zo,null,n.createElement(r.ZP,{container:!0,spacing:2},n.createElement(r.ZP,{item:!0,xs:6},n.createElement("h4",null,i)),n.createElement(r.ZP,{item:!0,xs:6},n.createElement(r.ZP,{container:!0,spacing:2,justifyContent:"flex-end"},a)),n.createElement(r.ZP,{item:!0,xs:12},n.createElement("h5",null,"File path:"," ",t)),l,function(e){var t=e.example,i=e.open,a=void 0!==i&&i;return t?n.createElement(r.ZP,{item:!0,xs:12},n.createElement(o.Z,{summary:n.createElement("summary",null,"View example"),open:a},t)):null}(e)))}},78989:function(e,t,i){i.d(t,{W7:function(){return c}});var n,a=i(67294),l=i(46975),r=JSON.parse('{"plugintypes":{"antivirus":"lib/antivirus","availability":"availability/condition","qtype":"question/type","mod":"mod","auth":"auth","calendartype":"calendar/type","customfield":"customfield/field","enrol":"enrol","message":"message/output","block":"blocks","media":"media/player","filter":"filter","editor":"lib/editor","format":"course/format","dataformat":"dataformat","profilefield":"user/profile/field","report":"report","coursereport":"course/report","gradeexport":"grade/export","gradeimport":"grade/import","gradereport":"grade/report","gradingform":"grade/grading/form","mlbackend":"lib/mlbackend","mnetservice":"mnet/service","webservice":"webservice","repository":"repository","portfolio":"portfolio","search":"search/engine","qbank":"question/bank","qbehaviour":"question/behaviour","qformat":"question/format","plagiarism":"plagiarism","tool":"admin/tool","cachestore":"cache/stores","cachelock":"cache/locks","fileconverter":"files/converter","contenttype":"contentbank/contenttype","theme":"theme","local":"local","h5plib":"h5p/h5plib","paygw":"payment/gateway"},"subsystems":{"access":null,"admin":"admin","adminpresets":"admin/presets","analytics":"analytics","antivirus":"lib/antivirus","auth":"auth","availability":"availability","backup":"backup/util/ui","badges":"badges","block":"blocks","blog":"blog","bulkusers":null,"cache":"cache","calendar":"calendar","cohort":"cohort","comment":"comment","competency":"competency","completion":"completion","contentbank":"contentbank","countries":null,"course":"course","courseformat":"course/format","currencies":null,"customfield":"customfield","dbtransfer":null,"debug":null,"editor":"lib/editor","edufields":null,"enrol":"enrol","error":null,"favourites":"favourites","filepicker":null,"fileconverter":"files/converter","files":"files","filters":"filter","form":"lib/form","grades":"grade","grading":"grade/grading","group":"group","help":null,"hub":null,"h5p":"h5p","imscc":null,"install":null,"iso6392":null,"langconfig":null,"license":null,"mathslib":null,"media":"media","message":"message","mimetypes":null,"mnet":"mnet","my":"my","notes":"notes","pagetype":null,"payment":"payment","pix":null,"plagiarism":"plagiarism","plugin":null,"portfolio":"portfolio","privacy":"privacy","question":"question","rating":"rating","reportbuilder":"reportbuilder","repository":"repository","rss":"rss","role":"admin/roles","search":"search","table":"lib/table","tag":"tag","timezones":null,"user":"user","userkey":"lib/userkey","webservice":"webservice","xapi":"lib/xapi"}}'),o=function(e){return function(t){var i=t.plugintype,n=void 0===i?"plugintype":i,a=t.pluginname,l=void 0===a?"pluginname":a,r=t.filepath,o=void 0===r?null:r,s=function(e){return function(t){return e.plugintypes[t]?e.plugintypes[t]:"[path/to/"+t+"]"}}(e)(n);return""+(s+=l?"/"+l:"/[pluginname]")+o}},s=o(r),d=(s(r),function(e){if(!e.showFileHeader)return"";switch(null==e?void 0:e.filetype){case"xml":return"";case"js":case"javascript":return function(e){var t=e.plugintype,i=void 0===t?"plugintype":t,n=e.pluginname,a=void 0===n?"pluginname":n,l=e.examplePurpose,r=e.modulename;if(!l)throw Error("Purpose must be specified");if(!r)throw Error("AMD Module name must be specified");return["/**"," * "+l+" for the "+i+"_"+a+" plugin."," *"," * @module   "+i+"_"+a+"/"+r," * @copyright Year, You Name <your@email.address>"," * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later"," */",""].join("\n")}(e);default:return function(e){var t=e.plugintype,i=void 0===t?"plugintype":t,n=e.pluginname,a=void 0===n?"pluginname":n,l=e.examplePurpose;if(!l)throw Error("Purpose must be specified");return["/**"," * "+l+" for the "+i+"_"+a+" plugin."," *"," * @package   "+i+"_"+a," * @copyright Year, You Name <your@email.address>"," * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later"," */",""].join("\n")}(e)}}),u=function(e){return e.showLicense?(e.filetype,"// This file is part of Moodle - http://moodle.org/\n//\n// Moodle is free software: you can redistribute it and/or modify\n// it under the terms of the GNU General Public License as published by\n// the Free Software Foundation, either version 3 of the License, or\n// (at your option) any later version.\n//\n// Moodle is distributed in the hope that it will be useful,\n// but WITHOUT ANY WARRANTY; without even the implied warranty of\n// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n// GNU General Public License for more details.\n//\n// You should have received a copy of the GNU General Public License\n// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.\n"):""},p=function(e){var t=e.filetype,i=void 0===t?"php":t;switch(i){case"js":case"javascript":return"javascript";case"xml":return"xml";case"php":case null:return"php";default:return i}},c=(n=r,function(e,t){var i,r=Object.assign({plugintype:"plugintype",showLicense:!0,showFileHeader:!0,filepath:null!=(i=e.exampleFilepath)?i:e.filepath},e),s=o(n),c=function(e,t){void 0===t&&(t=null);var i=[u(e),d(e),e.example?e.example:t||null].filter((function(e){return e})).map((function(e){return e.trim()})).join("\n\n");return[function(e){var t=e.filetype;switch(void 0===t?"php":t){case"js":case"javascript":case"xml":return null;default:return"<?php"}}(e),i].filter((function(e){return e})).join("\n")}(r,t);return a.createElement(l.Z,{title:s(r),language:p(r)},c)})},58791:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var n=i(83117),a=i(80102),l=(i(67294),i(3905)),r=i(13904),o=i(60620),s=["components"],d={title:"Database fields",tags:["mod_data","datafield","plugintype","subplugin"],documentationDraft:!0},u=void 0,p={unversionedId:"apis/plugintypes/mod_data/fields",id:"apis/plugintypes/mod_data/fields",title:"Database fields",description:"The Database activity included with Moodle includes support for several predefined field types, including text, date, and URL. It is also possible to create new field types. For example, you might like to create:",source:"@site/docs/apis/plugintypes/mod_data/fields.md",sourceDirName:"apis/plugintypes/mod_data",slug:"/apis/plugintypes/mod_data/fields",permalink:"/devdocs/docs/apis/plugintypes/mod_data/fields",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/mod_data/fields.md",tags:[{label:"mod_data",permalink:"/devdocs/docs/tags/mod-data"},{label:"datafield",permalink:"/devdocs/docs/tags/datafield"},{label:"plugintype",permalink:"/devdocs/docs/tags/plugintype"},{label:"subplugin",permalink:"/devdocs/docs/tags/subplugin"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655881204,formattedLastUpdatedAt:"22/06/2022",frontMatter:{title:"Database fields",tags:["mod_data","datafield","plugintype","subplugin"],documentationDraft:!0},sidebar:"docs",previous:{title:"Database activity sub-plugins",permalink:"/devdocs/docs/apis/plugintypes/mod_data/"},next:{title:"Database presets",permalink:"/devdocs/docs/apis/plugintypes/mod_data/presets"}},c={},m=[{value:"File structure",id:"file-structure",level:2},{value:"Field class",id:"field-class",level:3},{value:"Field configuration form",id:"field-configuration-form",level:3}],f={toc:m};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,(0,n.Z)({frontMatter:d},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Database_module"},"Database activity")," included with Moodle includes support for several predefined ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/plugintypes/mod_data/fields"},"field types"),", including text, date, and URL. It is also possible to create new field types. For example, you might like to create:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Discipline-specific field types - For example "Protein PDB code": users can enter the PDB code for a protein, and then the display 3D viewer for the protein structure, or link out to molecular databases.'),(0,l.kt)("li",{parentName:"ul"},'Institution-specific field types -  For example "library reference number": Allow users to enter a reference number which can be automatically turned into a direct link for local library services.'),(0,l.kt)("li",{parentName:"ul"},'Module-specific field types - For example "wiki page": users see a drop-down list containing the names of pages in your wiki, and can choose which page this particular entry refers to.')),(0,l.kt)("h2",{id:"file-structure"},"File structure"),(0,l.kt)("p",null,"Database field sub-plugins are located in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/mod/data/field")," directory."),(0,l.kt)("p",null,"Each plugin is in a separate subdirectory and consists of a number of ",(0,l.kt)("em",{parentName:"p"},"mandatory files")," and any other files the developer is going to use."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"View an example directory layout for the `datafield_number` subplugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"mod/data/field/number\n\u251c\u2500\u2500 classes\n\u2502\xa0\xa0 \u2514\u2500\u2500 privacy\n\u2502\xa0\xa0     \u2514\u2500\u2500 provider.php\n\u251c\u2500\u2500 field.class.php\n\u251c\u2500\u2500 lang\n\u2502\xa0\xa0 \u2514\u2500\u2500 en\n\u2502\xa0\xa0     \u2514\u2500\u2500 datafield_number.php\n\u251c\u2500\u2500 mod.html\n\u2514\u2500\u2500 version.php\n"))),(0,l.kt)("p",null,"Some of the important files for the database field plugintype are described below. See the ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/commonfiles/"},"common plugin files")," documentation for details of other files which may be useful in your plugin."),(0,l.kt)("h3",{id:"field-class"},"Field class"),(0,l.kt)(o.nR,{filepath:"/field.class.php",required:!0,summary:"Definition of the field type",mdxType:"ComponentFileSummary"}),(0,l.kt)("p",null,"The field, its behaviours, and its properties, are defined in a class named ",(0,l.kt)("inlineCode",{parentName:"p"},"data_field_[pluginname]")," located in ",(0,l.kt)("inlineCode",{parentName:"p"},"field.class.php"),". This class must extend the ",(0,l.kt)("inlineCode",{parentName:"p"},"data_field_base")," base class."),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Class locations")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The field definition is currently located in the ",(0,l.kt)("inlineCode",{parentName:"p"},"field.class.php")," file and is not yet autoloaded by Moodle."))),(0,l.kt)("p",null,"The base class defines some simple behaviours which you can override in your plugin. The following functions are of particular interest:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"display_add_field($recordid = 0)")," - Return some HTML for use when a user is adding/editing a record"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"display_browse_field($recordid, $template)")," - Return some HTML for displaying a record"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update_content($recordid, $value, $name = '')")," - Store the data entered by a user for a record"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"get_sort_sql($fieldname)")," - Specify SQL for how this field should be sorted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"get_content_value($value)")," - Useful if the info stored in the database if different from the info that ends up being presented to the user")),(0,l.kt)("h3",{id:"field-configuration-form"},"Field configuration form"),(0,l.kt)(o.nR,{filepath:"/mod.html",required:!0,summary:"Form definition for adding and editing the field configuration",mdxType:"ComponentFileSummary"}),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The field definition is one of the older parts of Moodle and does not use best practice."))))}h.isMDXComponent=!0}}]);