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
    listaCorsi: [
      {
        corsImg: "course4-600x359.png",
        corsTitle: "Software training reloaded",
        settore: "INFORMATION TECH / MACHINE LEARNING / TECHNOLOGY",
      },
      {
        corsImg: "course3-600x359.png",
        corsTitle: "Data mining",
        settore: "DATA",
      },
      {
        corsImg: "course2-1-600x359.png",
        corsTitle: "Design Dynamics",
        settore: "DESIGN / INFORMATION TECH",
      },
      {
        corsImg: "course6-600x359.png",
        corsTitle: "Understanding Color Psychology",
        settore: "DESIGN",
      },
      {
        corsImg: "course7-600x359.png",
        corsTitle: "Impact of a minimalist Design",
        settore: "DESIGN",
      },
      {
        corsImg: "course1-600x359.png",
        corsTitle: "Machine Learning Tools",
        settore: "INTELLIGENCE / TECHNOLOGY",
      },
    ],
    listaBrand: [
      {
        brandImg: "logo2.png",
      },
      {
        brandImg: "logo5.png",
      },
      {
        brandImg: "logo4.png",
      },
      {
        brandImg: "logo3.png",
      },
    ],
    listaCustomers: [
      {
        custTitle: "A must for trainers",
        custPar: "There are many variations of passages of Lorem ipsum available, but the majority have suffered...",
        imgProfilo: "instructor3-460x460.jpg",
        name: "JP Mcgraw",
        ruolo: "ABC Inc.",
      },
      {
        custTitle: "Great platform for low cost courses",
        custPar: "There are many variations of passages of Lorem ipsum available, but the majority have suffered...",
        imgProfilo: "instructor1-460x460.jpg",
        name: "Martha Penn",
        ruolo: "ABC Inc.",
      },
      {
        custTitle: "Quality hands on training tool",
        custPar: "There are many variations of passages of Lorem ipsum available, but the majority have suffered...",
        imgProfilo: "instructor2-460x460.jpg",
        name: "Mikhail",
        ruolo: "CEO, FinTech",
      },
    ],
    listaFooter: [
      {
        helpTitle: "About Company",
        helper: ["Register","Activate","All Courses","Groups Directory","Members Directory"],
      },
      {
        helpTitle: "Top Courses",
        helper: ["Design Dynamics","Internet of Things Security","Deep Virtual Reality","Artificial Intelligence","Machine Learning Tools"],
      },
      {
        helpTitle: "Popular Categories",
        helper: ["Register","Activate","All Courses","Groups Directory","Members Directory"],
      },
    ],
  },
  method: {

  }
})
