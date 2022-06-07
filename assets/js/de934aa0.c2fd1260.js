"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[41283],{50895:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var r=a(83117),o=a(80102),l=(a(67294),a(3905)),i=a(13904),n=["components"],s={title:"Moodle App 4.0.0 release notes",sidebar_label:"Moodle App 4.0.0",tags:["Moodle App","Release notes"]},p=void 0,m={unversionedId:"app_releases/v4/v4.0.0",id:"app_releases/v4/v4.0.0",title:"Moodle App 4.0.0 release notes",description:"Release date: 22 April 2022",source:"@site/general/app_releases/v4/v4.0.0.md",sourceDirName:"app_releases/v4",slug:"/app_releases/v4/v4.0.0",permalink:"/devdocs/general/app_releases/v4/v4.0.0",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v4/v4.0.0.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654579737,formattedLastUpdatedAt:"07/06/2022",frontMatter:{title:"Moodle App 4.0.0 release notes",sidebar_label:"Moodle App 4.0.0",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Release notes",permalink:"/devdocs/general/app_releases"},next:{title:"Moodle App 4.0.1",permalink:"/devdocs/general/app_releases/v4/v4.0.1"}},k={},d=[{value:"New features and improvements",id:"new-features-and-improvements",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"New Features",id:"new-features",level:3},{value:"Improvement",id:"improvement",level:3},{value:"Task",id:"task",level:3},{value:"Sub-task",id:"sub-task",level:3},{value:"Bug",id:"bug",level:3}],h={toc:d};function c(e){var t=e.components,p=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,r.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,(0,r.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 22 April 2022"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This new version will only connect Moodle sites version >= 3.5 and that it won't work if your site is using the deprecated local_mobile (Mobile app additional features) plugin."))),(0,l.kt)("h2",{id:"new-features-and-improvements"},"New features and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Support Moodle 4.0 LMS new "My courses" page'),(0,l.kt)("li",{parentName:"ul"},"User profile repositioned to match LMS"),(0,l.kt)("li",{parentName:"ul"},"Design updated to Material design 3 matching overall Moodle style"),(0,l.kt)("li",{parentName:"ul"},"Some pages now support swipe (participants, book module, grades, forum discussions,...)"),(0,l.kt)("li",{parentName:"ul"},"Resuming a course or a book is now easier"),(0,l.kt)("li",{parentName:"ul"},"Course main page additional options menu redesigned"),(0,l.kt)("li",{parentName:"ul"},"Navigation between sections and activities improved"),(0,l.kt)("li",{parentName:"ul"},"SCORM, H5P automatic full-screen mode"),(0,l.kt)("li",{parentName:"ul"},"Thumbnails for videos are automatically generated"),(0,l.kt)("li",{parentName:"ul"},"Content and activities pages with fewer distractions for users so they can focus on learning"),(0,l.kt)("li",{parentName:"ul"},"General performance improvements"),(0,l.kt)("li",{parentName:"ul"},"New notifications page (capturing all the notifications received by the user)"),(0,l.kt)("li",{parentName:"ul"},"The enrolment fee plugin is now supported (launched in a browser outside the app to complete the process)"),(0,l.kt)("li",{parentName:"ul"},"New 4.0 assignment time-limited submissions supported"),(0,l.kt)("li",{parentName:"ul"},"Teachers can now see H5P attempt reports")),(0,l.kt)("p",null,"Moodle.com announcement: ",(0,l.kt)("a",{parentName:"p",href:"https://moodle.com/news/moodle-app-4-0/"},"https://moodle.com/news/moodle-app-4-0/")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"App Store image",src:a(78006).Z,width:"2688",height:"952"})),(0,l.kt)("h2",{id:"complete-list-of-issues"},"Complete list of issues"),(0,l.kt)("h3",{id:"new-features"},"New Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3688"},"MOBILE-3688")," - Create index&list link handlers for mod site plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3799"},"MOBILE-3799")," - Let teachers view attempts in H5P activity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3800"},"MOBILE-3800")," - Log report_viewed when viewing H5P activity report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3873"},"MOBILE-3873")," - Support BigBlueButton (bigbluebuttonbn) activity in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3889"},"MOBILE-3889")," - Add development settings page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3919"},"MOBILE-3919")," - Support time-limited submission assignments (LMS 4.0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4022"},"MOBILE-4022")," - Support new tool_mobile_autologinmintimebetweenreq setting for auto-login requests")),(0,l.kt)("h3",{id:"improvement"},"Improvement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2848"},"MOBILE-2848")," - Language handling improvements for the mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3306"},"MOBILE-3306")," - Show the titles of blocks as if they had icons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3316"},"MOBILE-3316")," - Handle user suspended use-case"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3729"},"MOBILE-3729")," - Let plugins refresh the course page method data of a single module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3779"},"MOBILE-3779")," - Wiki: clicking a link to a wiki index page doesn't select the right subwiki or page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3782"},"MOBILE-3782")," - Change the string 'Download course' once the course is downloaded"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3786"},"MOBILE-3786")," - Add a new setting to enable display the Course and Courses (Dashboard) download options"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3792"},"MOBILE-3792")," - Use npm v7 to allow audit fix work"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3793"},"MOBILE-3793")," - Forum reply/edit reply: make it more consistent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3831"},"MOBILE-3831")," - Publish cordova plugin forks in npm"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3846"},"MOBILE-3846")," - Logout user if site URL is no longer one of the allowed URLs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3847"},"MOBILE-3847")," - Detect if resources are no longer accessible when offline use is disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3848"},"MOBILE-3848")," - Recent accessed courses block doesn't display guest access courses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3859"},"MOBILE-3859")," - Improve error message for invalid certificates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3860"},"MOBILE-3860")," - Remove calls to login/token.php just to check if site exists"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3863"},"MOBILE-3863")," - Make CSP less strict to match behaviour in native devices"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3881"},"MOBILE-3881")," - Timeline block improvements for 4.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3897"},"MOBILE-3897")," - Links (",(0,l.kt)("inlineCode",{parentName:"li"},"<a>"),") to files: first time opened in browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3898"},"MOBILE-3898")," - Remove overly generic Behat transformers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3901"},"MOBILE-3901")," - Support insights action URL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3910"},"MOBILE-3910")," - Change text to accept site policy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3913"},"MOBILE-3913")," - Add search box to timeline block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3916"},"MOBILE-3916")," - Ionic5 - header to have same color than system bar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3917"},"MOBILE-3917")," - Display a better error if a dependency isn't found when deploying an H5P package"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3922"},"MOBILE-3922")," - Check userhomepage setting to show default landing page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3935"},"MOBILE-3935")," - Allow changing the InAppBrowser toolbar colors"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3940"},"MOBILE-3940")," - Use new webservice on My courses page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3941"},"MOBILE-3941")," - Don't open browser automatically if URL is set and displayqroncredentialscreen is true"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3950"},"MOBILE-3950")," - Restore Ionic1 Image viewer with zoom"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3951"},"MOBILE-3951")," - Always handle scheduling notifications in service instead of pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3954"},"MOBILE-3954")," - Move prefetch module and section options to storage manager"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3959"},"MOBILE-3959")," - Update cordova-android to 10.1.1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3960"},"MOBILE-3960")," - New config.json setting to skip the Sites page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3961"},"MOBILE-3961")," - Include the app version number in the user agent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3962"},"MOBILE-3962")," - Support the course_list block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3966"},"MOBILE-3966")," - Adapt disabled features to changes in 4.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3967"},"MOBILE-3967")," - Add setting to show legacy completion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3968"},"MOBILE-3968")," - Ignore fake course overview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3971"},"MOBILE-3971")," - Optimize database usage for reading the config DB table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3975"},"MOBILE-3975")," - Move the default notification time for calendar events to config.json"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3976"},"MOBILE-3976")," - Remove online-offline options on notifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3977"},"MOBILE-3977")," - Cache database tables with different strategies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3980"},"MOBILE-3980")," - New index page for book module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3981"},"MOBILE-3981")," - Use optimized database adapter for tables used during startup"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3990"},"MOBILE-3990")," - Add missing handler for notification preferences, for example: /message/notificationpreferences.php?userid=6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3993"},"MOBILE-3993")," - Identify with a class or ID all the elements displaying group info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3996"},"MOBILE-3996")," - Fix navigation bar positioning"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3998"},"MOBILE-3998")," - Create a new IMSCP index/contents page to avoid having 2 nav bars"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4002"},"MOBILE-4002")," - Support new option to enable/disable the Dashboard in LMS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4008"},"MOBILE-4008")," - Timeline block views should display consistent information (mobile app)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4012"},"MOBILE-4012")," - Support enrol_fee on the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4015"},"MOBILE-4015")," - Support fallbacks for javascript click actions on the app via data-app-url"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4017"},"MOBILE-4017")," - Unit tests and lint should work correctly on Windows")),(0,l.kt)("h3",{id:"task"},"Task"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3802"},"MOBILE-3802")," - Moodle App navigation improvements for 4.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3803"},"MOBILE-3803")," - Moodle App performance improvements for 4.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3804"},"MOBILE-3804")," - Moodle App User Interface (UI) improvements for 4.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3805"},"MOBILE-3805")," - Moodle App notifications improvements for 4.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3865"},"MOBILE-3865"),' - Add link to the "Accessibility Statement for Moodle App"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3883"},"MOBILE-3883")," - Force ITSAppUsesNonExemptEncryption to NO (false) for iOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3926"},"MOBILE-3926")," - Add swipe navigation to pages using split view"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3927"},"MOBILE-3927")," - Add swipe navigation to non-split view pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3934"},"MOBILE-3934")," - Refactor pages with nested split views"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3939"},"MOBILE-3939")," - Refactor feedback respondents navigation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3974"},"MOBILE-3974")," - Disable Paypal in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4010"},"MOBILE-4010")," - In-app Moodle app survey should be available only for logged-in users")),(0,l.kt)("h3",{id:"sub-task"},"Sub-task"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2282"},"MOBILE-2282")," - App takes a lot to start if site is down or unreachable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2748"},"MOBILE-2748")," - Improve how activity icons are supported now"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3099"},"MOBILE-3099")," - Navigation within courses in the mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3103"},"MOBILE-3103")," - SCORM full screen. Full screen button to remove top and bottom bar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3148"},"MOBILE-3148")," - Switch user account should not logout until new account is selected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3149"},"MOBILE-3149")," - Main activity action should be stuck at the bottom"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3153"},"MOBILE-3153")," - Support User tours in app (onboarding in screens)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3415"},"MOBILE-3415")," - Support finger/swipe gestures for browsing course contents and activities with multiple pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3726"},"MOBILE-3726")," - Display page before opening links in the browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3773"},"MOBILE-3773")," - Automatically display thumbnail using Media Fragments for videos without poster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3794"},"MOBILE-3794")," - Accept site policy: iframe height is too small"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3798"},"MOBILE-3798"),' - Duplicated "My learning plans" in "More" menu and the user profile'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3806"},"MOBILE-3806"),' - "My courses" option in the app'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3807"},"MOBILE-3807"),' - New "User profile" menu'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3808"},"MOBILE-3808")," - Navigation between courses sections"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3810"},"MOBILE-3810")," - Main activity/resource content visualisation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3811"},"MOBILE-3811")," - Update icons to use Moodle 4.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3814"},"MOBILE-3814")," - Update apps design to match 4.0 overall styling and components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3819"},"MOBILE-3819")," - Moodle 3.1 and local_mobile deprecation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3821"},"MOBILE-3821")," - Review offline app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3823"},"MOBILE-3823")," - Ensure H5P, SCORM and similar packages (IMSCP) do not display the description box in landscape mode (mobile)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3828"},"MOBILE-3828")," - Evaluate if we could display the HTML version of popup notifications in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3829"},"MOBILE-3829")," - Default fallback for Push Notifications should also display the notification message"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3875"},"MOBILE-3875")," - Integrate performance tests in CI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3876"},"MOBILE-3876")," - Improve production bundles optimization"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3887"},"MOBILE-3887")," - Use core_message_get_messages to display list of notifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3899"},"MOBILE-3899")," - Only show main menu when navigation is at level 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3902"},"MOBILE-3902")," - In-app notification for site admins when Push Notifications are not enabled for a site"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3905"},"MOBILE-3905")," - Add swipe navigation to course participants"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3909"},"MOBILE-3909")," - Allow users to set the reminder at the same time the event is created"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3914"},"MOBILE-3914")," - Support new block drawer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3915"},"MOBILE-3915")," - New course index menu and fab button"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3930"},"MOBILE-3930")," - Start and Resume course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3931"},"MOBILE-3931")," - Re-think the activity contextual menu"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3932"},"MOBILE-3932")," - File resource should display the file media type, size and other useful information in their own page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3965"},"MOBILE-3965"),' - Change "Logout" and "Switch account" behaviour'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3970"},"MOBILE-3970")," - Open course information on a lateral menu")),(0,l.kt)("h3",{id:"bug"},"Bug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3060"},"MOBILE-3060")," - Group image isn't seen in push notifications in Android 9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3289"},"MOBILE-3289")," - H5P fullscreen does not work for Mobile App"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3552"},"MOBILE-3552")," - H5P ignores TEX-Formulas in App but not in Browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3667"},"MOBILE-3667"),' - "Last accessed" sort choice on the module dashboard doesn\'t work unless refresh the page'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3676"},"MOBILE-3676")," - QR reader button should not be displayed in the credentials screen for sites that disabled it"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3686"},"MOBILE-3686"),' - Long lists in "Available Courses" can crash app.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3695"},"MOBILE-3695")," - Delete a site: cannot unregister device if site is configured to logout"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3711"},"MOBILE-3711")," - Access rules error messages should include as part of the string (variable) the access rule name (instead concatenating it hardcoded)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3715"},"MOBILE-3715")," - Launch external app from InAppBrowser: ERR_FILE_NOT_FOUND"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3763"},"MOBILE-3763")," - H5P embedded directly (using embed code) have height=0 in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3775"},"MOBILE-3775")," - PTR on a page doesn't update the page contents"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3780"},"MOBILE-3780")," - Max size of attachment is not correctly detected (Forum and Assignment)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3785"},"MOBILE-3785")," - Assignment - visible groups: teachers on browser can select 'All participants' whereas on the app they need to select a specific group"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3787"},"MOBILE-3787")," - Assignment - Submission in group status are not correct"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3822"},"MOBILE-3822")," - Disable click in links in MathJax"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3825"},"MOBILE-3825")," - npm run dev:ios fails with Unknown option: '--platform'"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3844"},"MOBILE-3844")," - Download mp3 file outside of app's folder"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3849"},"MOBILE-3849")," - Revise kebab icon being shown when loading app and show download options on site home"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3855"},"MOBILE-3855")," - Manual completion cannot be changed when accessing activity via recent accessed items"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3857"},"MOBILE-3857")," - Course overview selector not displayed in old Moodle sites"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3868"},"MOBILE-3868")," - Badges are empty when navigating to own user profile from online users block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3877"},"MOBILE-3877")," - Revise Quiz offline - when user finishes they see the summary instead of the review"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3886"},"MOBILE-3886")," - Android app can no longer connect to HTTP sites"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3895"},"MOBILE-3895")," - Long MathJax equations cut off in quiz feedback and no way to scroll"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3896"},"MOBILE-3896")," - Links to tokenpluginfile are opened in browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3900"},"MOBILE-3900"),' - Course overview block does not honour "coursegraceperiodbefore" and "coursegraceperiodafter"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3903"},"MOBILE-3903")," - Link to a course with self enrol doesn't work"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3906"},"MOBILE-3906")," - App laggs after accepting policy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3912"},"MOBILE-3912")," - Remove needs help from login error modal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3918"},"MOBILE-3918"),' - Some H5P packages display "undefined" instead of title'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3923"},"MOBILE-3923")," - Courses are not correctly sorted on Starred courses block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3924"},"MOBILE-3924")," - Revise license.json generation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3944"},"MOBILE-3944")," - User interests in the user profile is not linking to tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3946"},"MOBILE-3946")," - Automatic completion of H5P activity isn't automatically detected by the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3948"},"MOBILE-3948")," - H5P: Apply MDL code to fix issue when users have same email address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3949"},"MOBILE-3949")," - Fix Zip Path Traversal vulnerability in Android"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3952"},"MOBILE-3952")," - Kebab icon should be hidden if options menu is empty"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3953"},"MOBILE-3953")," - Site plugins: override handler properties isn't working as expected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3956"},"MOBILE-3956"),' - URL to Feedback on mainpage and courseid returns "module not found"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3958"},"MOBILE-3958")," - Support gradeformatted with icons in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3982"},"MOBILE-3982")," - Follow-up with Collapsible header issues"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3997"},"MOBILE-3997")," - Revise message when links with autologin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4001"},"MOBILE-4001")," - Quiz Result percentage shown in the app should apply the same rounding as the other grades"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-4005"},"MOBILE-4005")," - Support domain restricted Vimeo videos new security hash parameters")))}c.isMDXComponent=!0},78006:function(e,t,a){t.Z=a.p+"assets/images/MoodleApp40Store-77e90a1a541782a8e9b23afc7f2f10f4.webp"}}]);