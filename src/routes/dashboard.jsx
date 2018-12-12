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
import Tickets from '../views/Tickets/Tickets.jsx';
import Events from '../views/Events/Events.jsx';
import AboutUs from '../views/AboutUs/AboutUs.jsx';
import ContactUs from '../views/ContactUs/ContactUs.jsx';
import Services from '../views/Services/Services.jsx';

const dashboardRoutes = [
  {
    path: "/services",
    sidebarName: "Services",
    navbarName: "Our services",
    icon: Dashboard,
    component: Services
  },
  {
    path: "/tickets",
    sidebarName: "Tickets",
    navbarName: "Tickets",
    icon: Person,
    component: Tickets
  },
  
  {
    path: "/aboutUs",
    sidebarName: "About Us",
    navbarName: "About Us",
    icon: Person,
    component: AboutUs
  },
  {
    path: "/contactUs",
    sidebarName: "Contact Us",
    navbarName: "Contact Us",
    icon: Person,
    component: ContactUs
  },
  { redirect: true, path: "/", to: "/events", navbarName: "Redirect" }
];

export default dashboardRoutes;