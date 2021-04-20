var app = new Vue({
  el: '#app',
  data: {
    menu: [
      {
        page_title: "HOME",
      },
      {
        page_title: "COURSES",
      },
      {
        page_title: "PAGES",
      },
      {
        page_title: "APP",
      }
    ],
    freeApp: [
      {
        img: "feature1.PNG",
        appTitle: "Administrator App",
        info: "Manage the entire site, the students, the instructors and the store.",
      },
      {
        img: "feature2.PNG",
        appTitle: "Instructor App",
        info: "Create courses, manage students, import questions and get reports.",
      },
      {
        img: "feature3.PNG",
        appTitle: "Student App",
        info: "Easy access to enrolled courses. Pursue courses, join meeting in TV.",
      },
      {
        img: "feature4.PNG",
        appTitle: "Custom Features",
        info: "All Wplms modules in App. Conferencing, Calendars.",
      }
    ],
  },
  method: {

  }
})
