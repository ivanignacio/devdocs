"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[74460],{43844:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var o=a(83117),r=a(80102),n=(a(67294),a(3905)),l=a(13904),s=["components"],i={title:"Moodle 1.9",tags:["Release notes","Moodle 1.9"],sidebar_position:-109,moodleVersion:"1.9"},d=void 0,m={unversionedId:"releases/1.9",id:"releases/1.9",title:"Moodle 1.9",description:"Moodle 1.9",source:"@site/general/releases/1.9.md",sourceDirName:"releases",slug:"/releases/1.9",permalink:"/devdocs/general/releases/1.9",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/devdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654579737,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:-109,frontMatter:{title:"Moodle 1.9",tags:["Release notes","Moodle 1.9"],sidebar_position:-109,moodleVersion:"1.9"},sidebar:"releaseNotes",previous:{title:"Moodle 2.0.10",permalink:"/devdocs/general/releases/2.0/2.0.10"},next:{title:"Moodle 1.9.1",permalink:"/devdocs/general/releases/1.9/1.9.1"}},p={},u=[{value:"Moodle 1.9",id:"moodle-19",level:2},{value:"Headline features",id:"headline-features",level:3},{value:"Other major improvements",id:"other-major-improvements",level:3},{value:"Module improvements",id:"module-improvements",level:3},{value:"New language packs",id:"new-language-packs",level:3},{value:"Upgrading issues",id:"upgrading-issues",level:3},{value:"See also",id:"see-also",level:3},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,(0,o.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("h2",{id:"moodle-19"},"Moodle 1.9"),(0,n.kt)("p",null,"Release date: 3rd March 2008"),(0,n.kt)("p",null,"Here is ",(0,n.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/ReleaseNote.jspa?projectId=10011&styleName=Html&version=10190"},"the full list of fixed issues in 1.9"),"."),(0,n.kt)("h3",{id:"headline-features"},"Headline features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Gradebook"},"Gradebook")," - Moodle.com  (funded by Open University)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completely rewritten from scratch for speed and flexibility. The new gradebook consists of plugins for reports, imports and exports. There are a number of standard reports which are useful for graders, students etc. The grader report allows you to treat the gradebook much more like a spreadsheet with manual editing, calculations, aggregations, weighting, locking, hiding, textual notes and so on."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Outcomes"},"Outcomes")," - Moodle.com",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can also now develop a list of expected outcomes (competencies) and connect these to courses and activities. You can even grade against multiple outcomes at once (ie Rubrics)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Old_Events_API"},"Old Events API")," - Moodle.com",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'The new Events API provides a way for any code to "hook" into events in a clean, loosely coupled way. A lot of events in Moodle (such as adding a user or a course) now trigger events that developers can hook into.'))),(0,n.kt)("li",{parentName:"ul"},"Scalability and performance improvements - Catalyst IT Ltd and Moodle.com",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A complete overhaul of the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Roles"},"Roles")," implementation for correctness and scalability. Large sites with thousands of courses and users now load quickly and behave well under heavy traffic, thanks to reworked code for Roles. Additional boost for sites using PHP pre-compilers and significant improvements in the database access code for all databases.  Many other parts of Moodle have been optimised to cope better with large numbers of courses and students.  Overall performance is very noticeably increased."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Mahoodle"},"Moodle Network - Mahara Interoperability")," - Catalyst IT Ltd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Moodle 1.9 and ",(0,n.kt)("a",{parentName:"li",href:"http://www.mahara.org/"},"Mahara E-porfolio v0.9")," now do transparent Single Sign On - one to one, one to many, many to many. Students can maintain their personal ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/E-portfolio"},"E-portfolios")," in Mahara."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Tags"},"Tags")," - Luiz Cruz (",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Student_projects/Social_Networking_features"},"GSOC Social Networking project"),") and Mathieu Petit-Clair (Moodle.com)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows users to describe their own interests in terms of tags, which creates interest pages around those tags, bringing information together from a variety of sources (Blogs, Flickr, Youtube etc)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Question_Engine_Changes_in_Moodle_1.9"},"Improved question bank")," - Jamie Pratt funded by ",(0,n.kt)("a",{parentName:"li",href:"http://www.fun.ac.jp/en/"},"Future University Hakodate"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows questions to be shared by the whole site, a course category, a single course, or be kept private to a single module. More control over who can do what to each question. Improved file management for files linked to by questions. WARNING: previously published question categories upgraded from prior releases will no longer be editable until a suitable role is created and users assigned. For further details see ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/How_to_let_teachers_share_questions_between_courses"},"How to let teachers share questions between courses")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Notes"},"Notes")," - Andrei Bautu (",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Student_projects/User_Management_Improvements"},"GSOC User Management Improvements project"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Detailed notes can be kept about individual users (for example teachers might want to keep and share notes about students in their class)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Bulk_user_actions"},"Bulk user actions")," - Andrei Bautu (",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Student_projects/User_Management_Improvements"},"GSOC User Management Improvements project"),"), Moodle.com",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Administrators can perform bulk user actions, such as the mass deletion of user accounts. Extended features in the bulk user upload script to allow generation of user fields based on templates."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Custom_corners_theme"},"Custom corners theme")," - Urs Hunkler",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Beautiful and curvy (in all browsers)."))),(0,n.kt)("li",{parentName:"ul"},"KSES related XSS security vulnerability fixed")),(0,n.kt)("h3",{id:"other-major-improvements"},"Other major improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apis/subsystems/groups"},"Groups")," and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Groupings"},"Groupings")," - UPLGC, Catalyst Ltd, Moodle.com",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New support for groupings (groups of groups) which was added briefly and then removed from 1.8.x. Activities and resources may be assigned to particular groupings."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/NTLM_authentication"},"Active Directory NTLM Single Sign On")," - Catalyst Ltd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Integrated a reworked version of the NTLM Single Sign On, originally by Dan Marsden."))),(0,n.kt)("li",{parentName:"ul"},"New theme settings",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Category themes - can now set the theme for a category which will apply to all sub-categories and courses"),(0,n.kt)("li",{parentName:"ul"},"Theme order - new setting ",(0,n.kt)("em",{parentName:"li"},"$CFG->themeorder")," which sets the priority of the themes from highest to lowest."))),(0,n.kt)("li",{parentName:"ul"},"Ability to control block visibility with roles",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A new ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/block/view"},"moodle/block:view")," capability has been added which allows control of who can view blocks from the roles system. This allows certain blocks to be hidden from the guest user, for example. See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Block_permissions"},"Hiding blocks from certain users"),"."))),(0,n.kt)("li",{parentName:"ul"},"Oracle Support - Catalyst Ltd, USQ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Significant enhancements in Oracle support, scalability and performance"))),(0,n.kt)("li",{parentName:"ul"},"Numerous admin settings fixes and improvements - Moodle.com",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ability to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Upload_user_pictures"},"mass import/upload user profile images"),". See ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-11752"},"MDL-11752")," for details."))),(0,n.kt)("li",{parentName:"ul"},"More robust block and module uninstalling - Moodle.com"),(0,n.kt)("li",{parentName:"ul"},"cURL is used for component downloading, SOCKS5 proxies and user/password proxy authentication supported, fopen() not used anymore"),(0,n.kt)("li",{parentName:"ul"},"Completed course reset implementation - Shamim Rezaie, Moodle.com"),(0,n.kt)("li",{parentName:"ul"},"Rewritten IP lookup - for lookup used either NetGeo server or local GeoIP database, visualized with static world image or Google Maps - Moodle.com"),(0,n.kt)("li",{parentName:"ul"},"Terms used for each role can be redefined in each course (like before Moodle 1.7)"),(0,n.kt)("li",{parentName:"ul"},"Installer improvement - when upgrading Moodle, a page is displayed showing all modules installed on the site and highlighting any non-compatible contrib modules - Moodle.com"),(0,n.kt)("li",{parentName:"ul"},"Statistics performance improvements and bugfixing - Moodle.com"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Translation"},"Language translation tool")," improvements - ability to translate non-standard modules, GUI changes, capabilities support")),(0,n.kt)("h3",{id:"module-improvements"},"Module improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quiz/Question improvements:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Improved question bank, as above."),(0,n.kt)("li",{parentName:"ul"},"Quizzes now listed on the MyMoodle page. (Implemented by Stephen Bourget and Tim Hunt.)"),(0,n.kt)("li",{parentName:"ul"},"A quiz can now ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Quiz_submission_email_notification"},"send emails when an attempt is finished")," - a confirmation to the student, a notification to all teachers, or both. (Implemented by Graham Miller of ",(0,n.kt)("a",{parentName:"li",href:"http://www.webenhanced.com.au/"},"Web Enhanced Solutions")," and Tim Hunt.)"),(0,n.kt)("li",{parentName:"ul"},"Third party question types can now implement Moodle XML and other import and export format. (Implemented by Howard Miller.)"),(0,n.kt)("li",{parentName:"ul"},"Gift Import/Export format can now handle Essay and Description question types."),(0,n.kt)("li",{parentName:"ul"},"Some slight improvements to quiz layout. See ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-10374"},"MDL-10374")," for details. Theme designers please note."),(0,n.kt)("li",{parentName:"ul"},"Multiple choice questions now show the feedback for all the options to students on the review page after the attempt is over."))),(0,n.kt)("li",{parentName:"ul"},"Forum improvements:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Major performance improvements in cron and user interface - Moodle.com"),(0,n.kt)("li",{parentName:"ul"},"Ability to select aggregation type (i.e. sum, max, min, average, or count) for forum ratings. See ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-3942"},"MDL-3942")," for details.")))),(0,n.kt)("h3",{id:"new-language-packs"},"New language packs"),(0,n.kt)("p",null,"Five new language packs (see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Translation_credits"},"en")," for additional details) and improvements in many other languages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Armenian - Andranik Markosyan"),(0,n.kt)("li",{parentName:"ul"},"Latin - Nicholas Sinnott-Armstrong (GHOP project)"),(0,n.kt)("li",{parentName:"ul"},"Macedonian - Dimitar Talevsk and his team"),(0,n.kt)("li",{parentName:"ul"},"Mongolian - B.Batpurev, I.Mendbayar, G.Khadbaatar, Munkhzul, O.Amartuvshin, Batbayar, B.Uugangerel"),(0,n.kt)("li",{parentName:"ul"},"Tamil Sri Lanka - M A Kaleelur Rahuma")),(0,n.kt)("h3",{id:"upgrading-issues"},"Upgrading issues"),(0,n.kt)("p",null,"If upgrading from 1.6 or later, you must have converted your site to Unicode. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Upgrading_to_Moodle_1.9"},"Upgrading to Moodle 1.9")," for further information."),(0,n.kt)("h3",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9"},"French version of this page"))),(0,n.kt)("h2",{id:"translations"},"Translations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_1.9_Versionsinformationen"},"Moodle 1.9 Versionsinformationen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_1.9"},"Notas de Moodle 1.9"))))}h.isMDXComponent=!0}}]);