"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[86677],{34073:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),i=a(13904),l=["components"],n={title:"Moodle 2.4.2",tags:["Release notes","Moodle 2.4"],sidebar_position:2,moodleVersion:"2.4.2"},d=void 0,p={unversionedId:"releases/2.4/2.4.2",id:"releases/2.4/2.4.2",title:"Moodle 2.4.2",description:"Because of a serious regression in the 2.4.2 release, Moodle 2.4.3 was release on Mon 18 March, 2013.",source:"@site/general/releases/2.4/2.4.2.md",sourceDirName:"releases/2.4",slug:"/releases/2.4/2.4.2",permalink:"/devdocs/general/releases/2.4/2.4.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.4/2.4.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.4",permalink:"/devdocs/general/tags/moodle-2-4"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654579737,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.4.2",tags:["Release notes","Moodle 2.4"],sidebar_position:2,moodleVersion:"2.4.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.4.1",permalink:"/devdocs/general/releases/2.4/2.4.1"},next:{title:"Moodle 2.4.3",permalink:"/devdocs/general/releases/2.4/2.4.3"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,a=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Because of a serious regression in the 2.4.2 release, ",(0,s.kt)("a",{parentName:"p",href:"/general/releases/2.4/2.4.3"},"Moodle 2.4.3")," was release on Mon 18 March, 2013."))),(0,s.kt)("p",null,"Release date: 11 March 2013"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.4.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.4.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32975"},"MDL-32975")," - There is an option to sort My Courses list alphabetically"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36297"},"MDL-36297")," - HTML purifier strings are now cached"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35074"},"MDL-35074")," - More students can now appear per page in the Grader Report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34435"},"MDL-34435")," - Actions in categories are now logged")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30669"},"MDL-30669")," - Admins are warned before deleting 'Sticky' site-wide blocks in 2.2 accidentally through a course page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37894"},"MDL-37894")," - Not yet opened quizzes show close date as well as open date"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35336"},"MDL-35336")," - Process for enabling statistics is now clearer")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36363"},"MDL-36363")," - Removing a file store cache instance removes its folder too"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31636"},"MDL-31636")," - Comments API allows plugins to set the date format")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225339"},"MSA-13-0011")," Calendar subscription capability issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225341"},"MSA-13-0012")," Information leak in course profiles"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225342"},"MSA-13-0013")," Server information revealed through exception messages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225343"},"MSA-13-0014")," Password revealed in WebDav repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225344"},"MSA-13-0015")," Cross-site scripting issue in Filepicker"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225345"},"MSA-13-0016")," External Entity Injection through Zend library"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225346"},"MSA-13-0017")," Form manipulation issue in notes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225347"},"MSA-13-0018")," Personal information leak through repositories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=225348"},"MSA-13-0019")," Unauthorised settings editing through WebDav repository")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Fixes for MUC - ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37683"},"MDL-37683")," ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37545"},"MDL-37545")," ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38110"},"MDL-38110")," ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38165"},"MDL-38165")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37792"},"MDL-37792")," - Conditional Resource based on a profile interest field now works when fields are empty"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38173"},"MDL-38173")," - Adding modules to courses where completion is enabled no longer causes corruption"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37847"},"MDL-37847")," - Plain text essays now show HTML special characters appropriately"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37774"},"MDL-37774")," - Moodle 1.9 to 2.x course restore now works with directory resources"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37563"},"MDL-37563")," - Assignment upgrade now includes conditional access settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36757"},"MDL-36757")," - Editing an activity no longer reveals hidden grades"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35780"},"MDL-35780")," - Participants page disclosure of email addresses is now consistent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35175"},"MDL-35175")," - Lesson now shows attempts if associated with a grouping"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37710"},"MDL-37710")," - Students can access their own submitted files in a team submission assignment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38352"},"MDL-38352")," - Improved language strings added to the English language pack, the most noticeable being 'My Moodle' in the site admin settings renamed as ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/My_home"},"My home"))),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.4.2"},"Notas de Moodle 2.4.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.4.2"},"Notes de mise \xe0 jour de Moodle 2.4.2"))))}c.isMDXComponent=!0}}]);