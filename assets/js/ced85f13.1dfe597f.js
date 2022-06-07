"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[93695],{59400:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=a(83117),o=a(80102),l=(a(67294),a(3905)),s=a(13904),n=["components"],i={title:"Moodle Mobile 2.1 release notes",sidebar_label:"Moodle Mobile 2.1",tags:["Moodle App","Release notes"]},p=void 0,d={unversionedId:"app_releases/v2/v2.1",id:"app_releases/v2/v2.1",title:"Moodle Mobile 2.1 release notes",description:"Release date: 28th August 2015",source:"@site/general/app_releases/v2/v2.1.md",sourceDirName:"app_releases/v2",slug:"/app_releases/v2/v2.1",permalink:"/devdocs/general/app_releases/v2/v2.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v2/v2.1.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654579737,formattedLastUpdatedAt:"07/06/2022",frontMatter:{title:"Moodle Mobile 2.1 release notes",sidebar_label:"Moodle Mobile 2.1",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Moodle Mobile 2.0",permalink:"/devdocs/general/app_releases/v2/v2.0"},next:{title:"Moodle Mobile 2.2",permalink:"/devdocs/general/app_releases/v2/v2.2"}},m={},u=[{value:"New features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Development",id:"development",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"Bug",id:"bug",level:3},{value:"Improvement",id:"improvement",level:3},{value:"New Feature",id:"new-feature",level:3},{value:"Task",id:"task",level:3}],k={toc:u};function c(e){var t=e.components,a=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,r.Z)({frontMatter:i},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 28th August 2015"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/jira/secure/ReleaseNote.jspa?projectId=10070&version=14666"},"Complete list of issues for Moodle Mobile 2.1")),(0,l.kt)("h2",{id:"new-features"},"New features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New add-on: Course completion - Users can see course completion status if they're allowed to. They can also mark a course as self-completed."),(0,l.kt)("li",{parentName:"ul"},"Errors in the app can be sent to our server to improve bug fixing.")),(0,l.kt)("h2",{id:"improvements"},"Improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Participant's country name is now translated."),(0,l.kt)("li",{parentName:"ul"},"Loading a site or starting the app is no longer blocked until the site info is updated."),(0,l.kt)("li",{parentName:"ul"},"Improved accessibility."),(0,l.kt)("li",{parentName:"ul"},"If local_mobile check returns an unexpected response now it shows a warning and no longer blocks the authentication."),(0,l.kt)("li",{parentName:"ul"},"Deleted users are handled in a similar way to Moodle web."),(0,l.kt)("li",{parentName:"ul"},"Pull to refresh has been added to user profile."),(0,l.kt)("li",{parentName:"ul"},"The app is now able to detect local_mobile plugin has been installed to a stored Moodle site.")),(0,l.kt)("h2",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed an error with Android notification IDs being too high."),(0,l.kt)("li",{parentName:"ul"},"Fixed errors with credentials not being stored in Samsung Galaxy S4 Mini."),(0,l.kt)("li",{parentName:"ul"},"In mod_book, using pull to refresh now re-loads the current chapter instead of the first one. The same goes for IMSCP."),(0,l.kt)("li",{parentName:"ul"},"Fixed an error with files included in mod_book."),(0,l.kt)("li",{parentName:"ul"},"Fixed a problem with user profile images in recent discussions."),(0,l.kt)("li",{parentName:"ul"},"Fixed icon shown in push notifications when the app is in foreground.")),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An app init process has been implemented to handle processes that should be executed before the app is ready.")),(0,l.kt)("h2",{id:"complete-list-of-issues"},"Complete list of issues"),(0,l.kt)("h3",{id:"bug"},"Bug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1076"},"MOBILE-1076")," - App doesn't notice local_mobile is installed on a site already stored"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1131"},"MOBILE-1131")," - iOS: HTML in Notifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1140"},"MOBILE-1140")," - Audio Files not playing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1141"},"MOBILE-1141")," - Unable to return from Vimeo/YouTube"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1143"},"MOBILE-1143")," - App not loading on Chrome/Chromium Windows"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1146"},"MOBILE-1146")," - App fails to load when viewed in iOS devices"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1147"},"MOBILE-1147")," - Unexpected error. Please close and reopen the application to try again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1149"},"MOBILE-1149")," - Pull to refresh on mod_book: always shows the first chapter, not the current one"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1169"},"MOBILE-1169"),' - Course completion: "Completion of other courses" status is not shown right'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1171"},"MOBILE-1171")," - Some checks if addon is enabled are wrong"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1172"},"MOBILE-1172")," - IMSCP: Pull to refresh loading is shown forever"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1173"},"MOBILE-1173")," - Can't see discussions from non-contacts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1175"},"MOBILE-1175")," - Moodle icon not shown in push notifications received with the app in foreground"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1180"},"MOBILE-1180")," - iOS: TypeError: null is not an object (evaluating 'm.offsetX')")),(0,l.kt)("h3",{id:"improvement"},"Improvement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-975"},"MOBILE-975")," - Translate participant's country name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1017"},"MOBILE-1017")," - Handle deleted users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1019"},"MOBILE-1019")," - Update site info periodically"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1079"},"MOBILE-1079"),' - Implement an app "init process"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1124"},"MOBILE-1124")," - Accessibility improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1133"},"MOBILE-1133")," - Upgrade to ionic 1.0.1 (and fix dependency issues)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1135"},"MOBILE-1135")," - Reconnect should not allow back"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1136"},"MOBILE-1136")," - Error message on failed request is ambiguous"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1137"},"MOBILE-1137")," - Display and retrieve un-expected errors in the app so we can get feedback"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1139"},"MOBILE-1139")," - Do not show the grades option if grades are disabled for a course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1142"},"MOBILE-1142")," - Improve accessibility for iOs and Android using headings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1144"},"MOBILE-1144")," - Pass username, password and service to login/token.php in $mmSitesManager#siteExists to be able to use CORS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1153"},"MOBILE-1153")," - Modify language files doesn't automatically build in ionic serve")),(0,l.kt)("h3",{id:"new-feature"},"New Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1104"},"MOBILE-1104")," - Add support for course completion display")),(0,l.kt)("h3",{id:"task"},"Task"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1122"},"MOBILE-1122")," - Add .jshintrc to project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1165"},"MOBILE-1165")," - Release version 2.1")))}c.isMDXComponent=!0}}]);