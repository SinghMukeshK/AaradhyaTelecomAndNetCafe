// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import Home from '../views/Home/Home.jsx';
import Tickets from '../views/Tickets/Tickets.jsx';
import Events from '../views/Events/Events.jsx';
import AboutUs from '../views/AboutUs/AboutUs.jsx';
import ContactUs from '../views/ContactUs/ContactUs.jsx';
import Services from '../views/Services/Services.jsx';
import News from '../views/Services/News.jsx';
import Blogs from '../views/Blogs/Blogs.jsx';
import NewArticle from '../views/Blogs/NewArticle.jsx';
import Forms from '../views/Services/Forms'
import AddNewJob from '../views/Services/AddNewJob';

const dashboardRoutes = [
  {
    path: "/Home",
    sidebarName: "Home",
    navbarName: "",
    icon: Notifications,
    component: Home
  }, {
    path: "/services",
    sidebarName: "Services",
    navbarName: "Our services",
    icon: LibraryBooks,
    component: Services
  },
  {
    path: "/tickets",
    sidebarName: "Tickets",
    navbarName: "Tickets",
    icon: BubbleChart,
    component: Tickets
  },

  {
    path: "/newJob",
    sidebarName: "Add New Job",
    navbarName: "Add New Job",
    icon: Unarchive,
    component: AddNewJob
  },
  {
    path: "/blogs",
    sidebarName: "Blogs",
    navbarName: "",
    icon: Unarchive,
    component: Blogs
  },
  // {
  //   path: "/news",
  //   sidebarName: "News",
  //   navbarName: "",
  //   icon: Unarchive,
  //   component: News
  // },
  // {
  //   path: "/newArticle",
  //   sidebarName: "Add New Article",
  //   navbarName: "",
  //   icon: Unarchive,
  //   component: NewArticle
  // },
  {
    path: "/forms",
    sidebarName: "Latest Jobs",
    navbarName: "",
    icon: Unarchive,
    component: Forms
  },
  // {
  //   path: "/contactUs",
  //   sidebarName: "Contact Us",
  //   navbarName: "Contact Us",
  //   icon: Notifications,
  //   component: ContactUs
  // }, 
  { redirect: true, path: "/", to: "/Home", navbarName: "Redirect" }
];

export default dashboardRoutes;
