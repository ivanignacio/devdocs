"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1897],{23644:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return c}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.9.2",tags:["Release notes","Moodle 3.9"],sidebar_position:2,moodleVersion:"3.9.2"},p=void 0,m={unversionedId:"releases/3.9/3.9.2",id:"releases/3.9/3.9.2",title:"Moodle 3.9.2",description:"Release date: 14 September 2020",source:"@site/general/releases/3.9/3.9.2.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.2",permalink:"/devdocs/general/releases/3.9/3.9.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654579737,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 3.9.2",tags:["Release notes","Moodle 3.9"],sidebar_position:2,moodleVersion:"3.9.2"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.1",permalink:"/devdocs/general/releases/3.9/3.9.1"},next:{title:"Moodle 3.9.3",permalink:"/devdocs/general/releases/3.9/3.9.3"}},d={},c=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],k={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 September 2020"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.2"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63375"},"MDL-63375")," - Workshop rubric display issue in grid view"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60574"},"MDL-60574")," - Atto editor undo/redo (crtl-y/z) can sometimes wipe all content"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26401"},"MDL-26401")," - Byte order mark at the beginning of import groups file fail the process with the confusing error message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51709"},"MDL-51709")," - Gradebook single view has a hard coded name format in grade view"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40227"},"MDL-40227")," - Numerical question in lesson - decimal fractions problem"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66665"},"MDL-66665")," - Reopened assignment shown as graded by student themselves"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61215"},"MDL-61215")," - Badge and user profile picture using an svg file doesn't display"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66810"},"MDL-66810")," - Allow microphone and camera to be accessed from content iframe"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69079"},"MDL-69079")," - Activity chooser does not display if site contains plugins missing from disk"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68178"},"MDL-68178")," - Email-based self-registration confirmation email is not re-sent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67831"},"MDL-67831")," - The Message reply box is not fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66670"},"MDL-66670")," - list bullet points are cut off in some browsers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69246"},"MDL-69246")," - Question manual grading: floating point issues can lead to valid grades being rejected"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65819"},"MDL-65819")," - Contact request email must respect the receiver's language"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68715"},"MDL-68715"),' - Condition: "Completion of other courses" is set without the course creator intervention'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52052"},"MDL-52052")," - Import grades with an empty identifier causes bad upload but it doesn't show error message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55340"},"MDL-55340")," - Export labels from feedback"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67671"},"MDL-67671")," - Backup step 2 show type options missing activity names"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67440"},"MDL-67440")," - \\core\\task\\analytics_cleanup_task extremely slow on Postgres site."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68210"},"MDL-68210")," - Unable to edit user overrides if assignment is not available to student"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66900"},"MDL-66900"),' - "Alternate image" gets removed upon editing course category settings.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66755"},"MDL-66755")," - After editing a forum post, a user is unsubscribed from the discussion"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66626"},"MDL-66626")," - Assignfeedback_editpdf sending infinite request when page ready is not equal to page number of combined pdf"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69297"},"MDL-69297")," - File-based Assignments shouldn't accept submissions without any files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69168"},"MDL-69168")," - Recently Accessed Items block uses stock LTI icon even if it has been customized"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69215"},"MDL-69215")," - load_fontawesome_icon_map web service does not respect current theme"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69414"},"MDL-69414"),' - 3.9 regression - "Drag and drop onto image" flips in RTL lang.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69336"},"MDL-69336")," - Collapsing columns in dynamic tables no longer functions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55299"},"MDL-55299")," - Single and double quotes encoded in HTML characters in downloaded files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68618"},"MDL-68618")," - Forum idnumber update not working"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68558"},"MDL-68558")," - Admin can get stuck on the Plugin dependencies check failure page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68444"},"MDL-68444")," - Calendar accessibility followups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69401"},"MDL-69401")," - Book's chapter title not showing max length limit"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69358"},"MDL-69358")," - The 'backup_cleanup_task' task deletes records related to incompleted adhoc tasks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69375"},"MDL-69375")," - LTI Names and Roles Provisioning Service generates Link headers with incorrect format"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66818"},"MDL-66818"),' - Portfolio "export whole discussion" button should not be visible if the user has inadequate permissions'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66707"},"MDL-66707")," - Forum too eager to mark messages as read (threaded view)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69296"},"MDL-69296")," - Pressing cancel on a resource activity settings page may result in a file download"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69241"},"MDL-69241")," - Participants page pagination doesn't reset when applying filters"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69199"},"MDL-69199")," - Complete user report incorrectly shows last modified time of quiz attempts, not time submitted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69112"},"MDL-69112")," - Underscore in folder name breaks assign feedback multi-upload"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69089"},"MDL-69089")," - Content bank allows empty names"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69069"},"MDL-69069")," - Insufficient colour contrast for in-place editable and drag and drop upload status"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69054"},"MDL-69054")," - Edit button for badge backpack not displayed when version is OBv1.0"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68964"},"MDL-68964")," - Swapping theme in chat window causing notice error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68889"},"MDL-68889")," - Recently accessed courses not functioning on small view ports"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68731"},"MDL-68731")," - Forum digest processing does not mark posts as read"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68706"},"MDL-68706")," - Course Custom field text area cant be emptied"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42434"},"MDL-42434")," - Chat activity needs user help"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69448"},"MDL-69448")," - Course Copy in 3.9 and 3.9.1 not working for teacher with extended permissions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69204"},"MDL-69204")," - User A can see the privacy and policies + data retention summary link on user B's profile page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69645"},"MDL-69645")," - Preferences window can be opened on Safe Exam Browser Mac clients during quizzes using manual configuration")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69394"},"MDL-69394")," - Insufficient colour contrast for calendar event colour indicators"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68344"},"MDL-68344")," - File Picker: focus lost on upload"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69391"},"MDL-69391")," - Some dropdown menus have insufficient colour contrast between text and background"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69389"},"MDL-69389")," - Insufficient colour contrast between link text and normal text"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69387"},"MDL-69387")," - Completion checkbox images don't have sufficient colour contrast"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69214"},"MDL-69214")," - Error reading database on Participants page if site:accessallgroups is set to prohibit"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69115"},"MDL-69115")," - Course and category management page accessibility followups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69114"},"MDL-69114")," - Insufficient colour contrast for .*-info classes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69111"},"MDL-69111")," - Forum grading panel cannot be used when zoomed to 400%")),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69068"},"MDL-69068")," - Allow behat generators to be pivoted")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=410839"},"MSA-20-0011")," Stored XSS via moodlenetprofile parameter in user profile"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=410840"},"MSA-20-0012")," Reflected XSS in tag manager"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=410841"},"MSA-20-0013"),' "Log in as" capability in a course context may lead to some privilege escalation'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=410842"},"MSA-20-0014")," Denial of service risk in file picker unzip functionality"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=410843"},"MSA-20-0015")," Chapter name in book not always escaped with forceclean enabled")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.2"},"Notes de mise \xe0 jour de Moodle 3.9.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.2"},"Notas de Moodle 3.9.2"))))}u.isMDXComponent=!0}}]);