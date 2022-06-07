"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[61022],{38168:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var o=a(83117),r=a(80102),s=(a(67294),a(3905)),l=a(13904),i=["components"],n={title:"Moodle 2.1.4",tags:["Release notes","Moodle 2.1"],sidebar_position:4,moodleVersion:"2.1.4"},d=void 0,p={unversionedId:"releases/2.1/2.1.4",id:"releases/2.1/2.1.4",title:"Moodle 2.1.4",description:"Release date: 9 January 2012",source:"@site/general/releases/2.1/2.1.4.md",sourceDirName:"releases/2.1",slug:"/releases/2.1/2.1.4",permalink:"/devdocs/general/releases/2.1/2.1.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.1/2.1.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.1",permalink:"/devdocs/general/tags/moodle-2-1"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654579737,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 2.1.4",tags:["Release notes","Moodle 2.1"],sidebar_position:4,moodleVersion:"2.1.4"},sidebar:"releaseNotes",previous:{title:"Moodle 2.1.3",permalink:"/devdocs/general/releases/2.1/2.1.3"},next:{title:"Moodle 2.1.5",permalink:"/devdocs/general/releases/2.1/2.1.5"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 January 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.1.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.1.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28710"},"MDL-28710")," - CSS class names have been added for rating div/span elements enabling theming"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29579"},"MDL-29579")," - Question text included in export of quiz statistics report in Moodle 2.1")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19147"},"MDL-19147")," - Single Simple forums are no longer targets for moving (and losing) discussions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30273"},"MDL-30273")," - Students and teachers can add additional topics to a simple forum discussion")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194008"},"MSA-12-0001")," - Recaptcha transmission consistency issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194011"},"MSA-12-0003")," - Added password protection"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194012"},"MSA-12-0004")," - Added profile image security"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194013"},"MSA-12-0005")," - Encryption enhancement"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194014"},"MSA-12-0006")," - Additional email address validation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194015"},"MSA-12-0007")," - Email injection prevention"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194016"},"MSA-12-0008")," - Unsynchronised access via tokens"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194017"},"MSA-12-0009")," - Role access issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194018"},"MSA-12-0010")," - Unauthorised access to session key"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194019"},"MSA-12-0011")," - Browser autofill password issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194020"},"MSA-12-0012")," - Form validation issue")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30376"},"MDL-30376")," - Glossary RSS feed no longer generates error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30378"},"MDL-30378")," - Site page links fixed in Navigation blocks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30460"},"MDL-30460")," - Wiki image dropdown includes files with upper case suffixes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30466"},"MDL-30466")," - Writing to database fixed for restoring a course with uses course completion"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30569"},"MDL-30569")," - Editing the front page when defaulthomepage = mymoodle now works as expected"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28180"},"MDL-28180")," - Duplicating an assignment that has course completion enabled no longer breaks course completion for the course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27314"},"MDL-27314")," - It is now possible to delete or regrade quiz attempts in separate groups mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29730"},"MDL-29730")," - Fixed Lesson question shortanswer with regexp option"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30260"},"MDL-30260")," - Emailstop option fixed")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.1.4"},"Notas de Moodle 2.1.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.1.4"},"Notes de mise \xe0 jour de Moodle 2.1.4"))))}h.isMDXComponent=!0}}]);