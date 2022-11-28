<template>
  <div>
    <q-header bordered class="desktop-view-rpl bg-white">
      <div class="row">
        <div class="col-lg-1 col-md-1 col-sm-1"></div>
        <div class="col-lg-10 col-md-10 col-sm-10">
          <q-toolbar class="top-header-rpl">
            <div class="redimind-img-div-rpl" @click="scrollToElement('home-desk')">
              <img src="../assets/home.png" style="height: 40px;cursor: pointer;">
            </div>

            <q-space />

            <q-toolbar-title>
              <div class="title-block">
                <div class="home" @click="scrollToElement('id_about_me')" :style="{ color: navbarColors[$route.path] }">
                  About Me
                </div>
                <div class="about" @click="scrollToElement('id_projects')"
                  :style="{ color: navbarColors1[$route.path] }">
                  Projects
                </div>
                <div class="Blog" @click="scrollToElement('id_skills')" :style="{ color: navbarColors2[$route.path] }">
                  Skills
                </div>
                <div class="Learn" @click="scrollToElement('id_contact')"
                  :style="{ color: navbarColors3[$route.path] }">
                  Contact
                </div>
              </div>
            </q-toolbar-title>

          </q-toolbar>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1">
        </div>
      </div>
    </q-header>
    <q-header bordered class="mobile-view-rpl bg-white">
      <q-toolbar class="top-header-rpl q-px-sm">
        <div>
          <img src="../assets/home.png" style="height: 30px;" @click="scrollToElementmb('home-mb')">
        </div>
        <q-space />
        <div id="mySidenav" class="sidenav">
          <a class="closebtn" @click="closeNav()">&times;</a>

          <a @click="scrollToElementmb('id_about_mb')">About Me</a>
          <a @click="scrollToElementmb('id_projects_mb')">Projects</a>
          <a @click="scrollToElementmb('id_skills_mb')">Skills</a>
          <a @click="scrollToElementmb('id_contact_mb')">Contact</a>

        </div>
        <q-btn size="md" flat icon="menu" @click="openNav()" color="black" />
      </q-toolbar>
    </q-header>


    <!-- Desktop-design -->
    <div class="desktop-view-rpl main" style="padding-top:50px;">
      <div id="home-desk" class="full-height full-width flex flex-center text-center"
        style="background-color: rgba(0, 0, 0, 0.68) !important; z-index:0;">
        <div>
          <div class="text-h4" style="color: white;">
            Hello, I'm Karan Kumar Jha.
          </div>
          <div class="text-h2 text-white q-py-sm q-my-md"
            style="border-top:3px solid #00d1c1; border-bottom: 3px solid #00d1c1; color: #00d1c1;">
            I'm a Front-end Developer.
          </div>
        </div>
      </div>
      <div class="row" id="id_about_me" style="background-color: #00d1c1;">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-5 col-md-5">
          <img src="../assets/my_2.png" style="width: 100%;">
        </div>
        <div class="col-lg-5 col-md-5">
          <div class="full-height full-width flex flex-center text-center text-white text-h5 q-pa-md"
            style="text-align:start; position: relative;">
            Hi 👋 <br> I'm Karan Kumar Jha! Welcome to my portfolio. I'm a Frontend Developer skilled with good
            knowledge of VueJs & JavaScript. I love creating web apps and solve a coding challenge and hopefully
            creating something that makes people love. Although my primary interest is in Web Development and
            enthusiastically grabbing onto new programming languages to help me become a Full Stack Developer.
            <br>
            Aside from my Job, I like to create and contribute to open source projects. That helps me to learn a ton of
            new stuff, grow as a developer and support other open source projects. I believe for sustaining in
            the
            market, you need to keep yourself updated technology with knowledge.
            <br>
            Take a look at my work or get in touch ツ
          </div>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="row" id="id_projects">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-10 col-md-10">
          <q-timeline :layout="layout" color="secondary">

            <q-timeline-entry heading style="color:#00d1c1">
              PROJECTS
            </q-timeline-entry>

            <q-timeline-entry
              title="APPROVAL APP (Management of Approval System to digitize the initiation and authorization process.)"
              subtitle="Started:- August, 2021 - Ongoing" side="left">
              <div style="text-align:start;">
                APPROVAL APP:- The Approvals App is a way to streamline all of your requests and processes with your
                team or partners. You'll be able to create new approvals,auditing, compilance, rejection and view the
                ones sent your way,
                and see all of your previous approvals in one place. Just select an approval type, add details, attach
                files, and choose approvers. Once submitted, approvers are notified and can review and act on the
                request.
                <br>
                In this application what i worked :- <br>
                ● The Dashboard has the features for creating a new approval, reviewing, and approving/rejecting/pending
                for the new requests. <br>
                ● Integrated Google and Microsoft authentication to achieve SSO. <br>
                ● Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                ● Developed Donut chart to maintain the Approval Status. <br>
                ● Worked in Quasar UI Framework to achieve responsiveness of the application. <br>
                ● Implementing custom Plugins made in Vue JS.
              </div>


            </q-timeline-entry>
            <q-timeline-entry title="MOTRAC (Motrac is the official importer and distributor in
              Belgium of Linde's leading forklifts and warehouse trucks)" subtitle="Started:- February, 2022 - Ongoing"
              side="right">
              <div style="text-align:start;">
                In this application what i worked:- <br>
                ● The dashboard integrates all the modules and functionalities which
                include total orders, pending orders, lorries under maintenance, processing, pending, and invoicing
                details. <br>
                ● Responsible for the development and delivery of new feature for our product while keeping an eye on
                appealing user interfaces. <br>
                ● Worked closely with UI/UX designers, product owners and backend developers on creative and customer
                centric solutions. <br>
                ● Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                ● Implementing custom Plugins made in Vue JS. <br>
                ● Maintain existing code and bug fixing. <br>
              </div>


            </q-timeline-entry>
            <q-timeline-entry title="FFS (It is an application built for organizations to track
              resources, projects, sprints, and time logs of each resource
              within the organization.)" subtitle="Started:- APRIL, 2022 - Ongoing" side="left">
              <div style="text-align:start;">
                FFS:- The system also has the feature of an overview of all the projects and also the performance of
                each
                user. Admin can monitor the workload of each resource and can see the daily/weekly/monthly reports and
                performances of each resource across the projects. <br>
                In this application what i worked:- <br>
                ● The application is designed with a responsive UI that is feasible for all devices. <br>
                ● Collaborated with Product and Design Team to build maintainable, usable and beautiful features. <br>
                ● Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                ● Worked in Agile-driven environment to effectively maintain project timelines and utilize available
                resources. <br>
                ● Implementing custom Plugins made in Vue JS.
              </div>

            </q-timeline-entry>

            <q-timeline-entry>
            </q-timeline-entry>

          </q-timeline>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="row" id="id_skills">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-10 col-md-10">
          <div style="text-align:center; color:#00d1c1;" class="text-h2 q-py-md">
            Skills
          </div>
          <q-card class="q-pa-lg" style="display:flex;justify-content: space-evenly;
            border: 2px solid black;
            background: #00d1c1">
            <div>
              <img src="../assets/sk1.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk2.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk3.webp" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk4.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk5.svg" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk6.png" style="height:100px;width:100px;">
            </div>
            <div>
              <img src="../assets/sk7.png" style="height:100px;width:100px;">
            </div>

            <div>
              <img src="../assets/sk8.png" style="height:100px;width:100px;">
            </div>
          </q-card>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
      <div class="q-py-lg"></div>
      <div class="row q-py-lg" id="id_contact">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-10 col-md-10">
          <div style="text-align:center; color:#00d1c1;" class="text-h3 q-py-lg">
            🕊 Get in Touch !
          </div>
          <div style="text-align:center; color:#00d1c1;" class="text-h5 q-py-xs">
            📞 Contact me for more info
          </div>
          <div class="row q-pt-md">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="mail-info-child">
                <div>
                  <span class="mif-mail icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  karanjha.org@gmail.com
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="mail-info-child">
                <div>
                  <span class="mif-whatsapp icone-css"></span>
                </div>

                <div class="more-info q-pt-sm">
                  +91 8334815154
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="mail-info-child">
                <div>
                  <span class="mif-location icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  Sodepur 1st Lane ,
                  Kolkata 700082
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>

      <q-toolbar class="flex flex-center text-white" style="background-color: #00d1c1;border-top: 2px solid green">
        <div class="q-pa-sm q-gutter-sm">
          <q-btn target="_blank" style="border: 2px solid green" round type="a"
            href="https://twitter.com/karankumarjha65" glossy icon="fab fa-twitter" />
          <q-btn target="_blank" style="border: 2px solid green" round type="a" href="https://github.com/jhakaran15"
            glossy icon="fab fa-github" />
          <q-btn style="border: 2px solid green" round type="a" href="mailto:karanjha.org@gmail.com" glossy
            icon="email" />
          <q-btn target="_blank" style="border: 2px solid green;" round type="a"
            href="https://www.linkedin.com/in/karankumarjha/" glossy>
            <div>
              <span class="mif-linkedin"></span>
            </div>
          </q-btn>
          <q-btn target="_blank" style="border: 2px solid green;" round type="a" href="https://codepen.io/jhakaran"
            glossy icon="fab fa-codepen" />
        </div>
      </q-toolbar>
    </div>

    <!-- mobile-design -->
    <div class="mobile-view-rpl main" style="padding-top:50px;">
      <div id="home-mb" class="full-height full-width flex flex-center text-center"
        style="background-color: rgba(0, 0, 0, 0.68) !important;z-index:0;">
        <div>
          <div class="text-h6" style="color: white;">
            Hello, I'm Karan Kumar Jha.
          </div>
          <div class="text-h5 text-white  q-py-sm q-my-md"
            style="border-top:3px solid #00d1c1;border-bottom: 3px solid #00d1c1; color: #00d1c1;">
            I'm a Front-end Developer.
          </div>
        </div>
      </div>

      <div id="id_about_mb" style="background-color: #00d1c1;">
        <div class="q-pa-md">


          <div>
            <img src="../assets/my_2.png" style="width: 100%;">
          </div>


          <div class="text-white text-h6 q-pa-sm">
            Hi 👋 <br> I'm Karan Kumar Jha! Welcome to my portfolio. I'm a Frontend Developer skilled with good
            knowledge of VueJs & JavaScript. I love creating web apps and solve a coding challenge and hopefully
            creating something that makes people love. Although my primary interest is in Web Development and
            enthusiastically grabbing onto new programming languages to help me become a Full Stack Developer.
            <br>
            Aside from my Job, I like to create and contribute to open source projects. That helps me to learn a ton of
            new stuff, grow as a developer and support other open source projects. I believe for sustaining in
            the
            market, you need to keep yourself updated technology with knowledge.
            <br>
            Take a look at my work or get in touch ツ
          </div>
        </div>
      </div>


      <div id="id_projects_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <q-timeline color="secondary">
              <q-timeline-entry heading style="color:#00d1c1">
                PROJECTS
              </q-timeline-entry>

              <q-timeline-entry
                title="APPROVAL APP (Management of Approval System to digitize the initiation and authorization process.)"
                subtitle="Started:- August, 2021 - Ongoing" side="left">
                <div style="text-align:start;" class="q-py-md">
                  APPROVAL APP:- The Approvals App is a way to streamline all of your requests and processes with your
                  team or partners. You'll be able to create new approvals,auditing, compilance, rejection and view the
                  ones sent your way,
                  and see all of your previous approvals in one place. Just select an approval type, add details, attach
                  files, and choose approvers. Once submitted, approvers are notified and can review and act on the
                  request.
                  <br><br>
                  In this application what i worked :- <br><br>
                  ● The Dashboard has the features for creating a new approval, reviewing, and
                  approving/rejecting/pending
                  for the new requests. <br>
                  ● Integrated Google and Microsoft authentication to achieve SSO. <br>
                  ● Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                  ● Developed Donut chart to maintain the Approval Status. <br>
                  ● Worked in Quasar UI Framework to achieve responsiveness of the application. <br>
                  ● Implementing custom Plugins made in Vue JS.
                </div>



              </q-timeline-entry>
              <q-timeline-entry title="MOTRAC (Motrac is the official importer and distributor in
                Belgium of Linde's leading forklifts and warehouse trucks)"
                subtitle="Started:- February, 2022 - Ongoing" side="left">
                <div style="text-align:start;" class="q-py-md">
                  In this application what i worked:- <br><br>
                  ● The dashboard integrates all the modules and functionalities which
                  include total orders, pending orders, lorries under maintenance, processing, pending, and invoicing
                  details. <br>
                  ● Responsible for the development and delivery of new feature for our product while keeping an eye on
                  appealing user interfaces. <br>
                  ● Worked closely with UI/UX designers, product owners and backend developers on creative and customer
                  centric solutions. <br>
                  ● Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                  ● Implementing custom Plugins made in Vue JS. <br>
                  ● Maintain existing code and bug fixing. <br>
                </div>


              </q-timeline-entry>
              <q-timeline-entry title="FFS (It is an application built for organizations to track
                resources, projects, sprints, and time logs of each resource
                within the organization.)" subtitle="Started:- APRIL, 2022 - Ongoing" side="left">
                <div style="text-align:start;" class="q-py-md">
                  FFS:- The system also has the feature of an overview of all the projects and also the performance of
                  each
                  user. Admin can monitor the workload of each resource and can see the daily/weekly/monthly reports and
                  performances of each resource across the projects. <br><br>
                  In this application what i worked:- <br><br>
                  ● The application is designed with a responsive UI that is feasible for all devices. <br>
                  ● Collaborated with Product and Design Team to build maintainable, usable and beautiful features. <br>
                  ● Integrated UI with backend using REST API's ,VUEX and AXIOS. <br>
                  ● Worked in Agile-driven environment to effectively maintain project timelines and utilize available
                  resources. <br>
                  ● Implementing custom Plugins made in Vue JS.
                </div>



              </q-timeline-entry>

              <q-timeline-entry>
              </q-timeline-entry>

            </q-timeline>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div id="id_skills_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div style="text-align:center; color:#00d1c1;" class="q-py-xs text-h4">
              Skills
            </div>
            <q-card class="q-pa-lg" style="background-color:#00d1c1;border: 2px solid black;">
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk1.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk2.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk3.webp" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk4.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk5.svg" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk6.png" style="height:100px;width:100px;">
              </div>
              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk7.png" style="height:100px;width:100px;">
              </div>

              <div class="q-pa-xs" style="text-align: center;">
                <img src="../assets/sk8.png" style="height:100px;width:100px;">
              </div>
            </q-card>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div id="id_contact_mb">
        <div class="row">
          <div class="col-sm-1 col-xs-1"></div>
          <div class="col-sm-10 col-xs-10">
            <div style="text-align:center; color:#00d1c1;" class="text-h4 q-py-lg">
              🕊 Get in Touch !
            </div>
            <div style="text-align:center; color:#00d1c1;" class="text-h6 q-py-xs">
              📞 Contact me for more info
            </div>
            <div class="q-pt-md">
              <div class="mail-info-child q-py-md">
                <div>
                  <span class="mif-mail icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  karanjha.org@gmail.com
                </div>
              </div>
              <div class="mail-info-child q-py-md">
                <div>
                  <span class="mif-whatsapp icone-css"></span>
                </div>

                <div class="more-info q-pt-sm">
                  +91 8334815154
                </div>
              </div>
              <div class="mail-info-child q-py-md">
                <div>
                  <span class="mif-location icone-css"></span>
                </div>
                <div class="more-info q-pt-sm">
                  Sodepur 1st Lane ,
                  Kolkata 700082
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-1 col-xs-1"></div>
        </div>
      </div>

      <q-toolbar class="flex flex-center text-white" style="background-color: #00d1c1;border-top: 2px solid green">
        <div class="q-pa-sm q-gutter-sm">
          <q-btn target="_blank" style="border: 2px solid green" round type="a"
            href="https://twitter.com/karankumarjha65" glossy icon="fab fa-twitter" />
          <q-btn target="_blank" style="border: 2px solid green" round type="a" href="https://github.com/jhakaran15"
            glossy icon="fab fa-github" />
          <q-btn style="border: 2px solid green" round type="a" href="mailto:karanjha.org@gmail.com" glossy
            icon="email" />
          <q-btn target="_blank" style="border: 2px solid green;" round type="a"
            href="https://www.linkedin.com/in/karankumarjha/" glossy>
            <div>
              <span class="mif-linkedin"></span>
            </div>
          </q-btn>
          <q-btn target="_blank" style="border: 2px solid green;" round type="a" href="https://codepen.io/jhakaran"
            glossy icon="fab fa-codepen" />
        </div>
      </q-toolbar>
    </div>
  </div>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  computed: {
    layout() {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  data() {
    return {
      navbarColors: {
        '/websiteHome': 'orange',
      },
      navbarColors1: {
        '/aboutUs': 'orange',
      },
      navbarColors2: {
        '/blogs': 'orange',
      },
      navbarColors3: {
        '/learnmore': 'orange',
      },
    };
  },
  methods: {
    scrollToElementmb(id) {
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - 65
      const duration = 800
      setScrollPosition(target, offset, duration);
      document.getElementById("mySidenav").style.width = "0";
    },
    scrollToElement(id) {
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - 65
      const duration = 800
      setScrollPosition(target, offset, duration)
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>


<style lang="scss" scoped>
* {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
}

$blue-color: #00d1c1;
$black-color: #00160A;

.top-header-rpl {
  color: black;
  background: white;
}

.title-block {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}

.home {
  color: $black-color;
}

.home:hover {
  color: #00d1c1;
  cursor: pointer;
}

.about {
  color: $black-color;
}

.about:hover {
  color: #00d1c1;
  cursor: pointer;
}

.Blog {
  color: $black-color;
}

.Blog:hover {
  color: #00d1c1;
  cursor: pointer;
}

.Learn {
  color: $black-color;
}

.Learn:hover {
  color: #00d1c1;
  cursor: pointer;
}

.login-button {
  background: $blue-color !important;
  color: white !important;
}

.item-border-rpl {
  border: 1px solid $blue-color;
  border-radius: 10px;
}

@media (min-width: 600px) and (max-width: 767px) {
  .title-block {
    font-size: 7px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .title-block {
    font-size: 10px;
  }
}

@media (min-width: 1024px) and (max-width: 1439px) {}

@media (min-width: 1440px) and (max-width: 1919px) {
  .title-block {
    font-size: 18px;
  }
}

@media (min-width: 1920px) {
  .title-block {
    font-size: 22px;
  }
}

.sidenav {
  height: 60%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #00d1c1;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #FFFFFF;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #00d1c1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media all and (max-width: 599px) {
  .mobile-view-rpl {
    display: block;
  }

  .desktop-view-rpl {
    display: none;
  }
}

@media all and (min-width: 600px) {
  .mobile-view-rpl {
    display: none;
  }

  .desktop-view-rpl {
    display: block;
  }
}

.main {
  background: url("../assets/my_1.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh !important;
}

.icone-css {
  font-size: 50px;
}

.whatsapp-icone {
  font-size: 50px;
}

.more-info {
  font-size: 18px;
  color: $black-color;
  text-align: center;
}

.mail-info-child {
  text-align: center;
}
</style>
