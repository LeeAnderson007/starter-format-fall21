import Appointments from "./Appointments";
import Home from "./Home";
import NewAppointment from "./NewAppointment";
import Doctors from "./Doctors";
import PatientListLoader from "./PatientListLoader";

export const routes = [
  { pathname: "/", title: "Home", component: Home },
  { pathname: "/appointments", title: "Appointments", component: Appointments },
  { pathname: "/patients", title: "Patients", component: PatientListLoader },
  { pathname: "/doctors", title: "Doctors", component: Doctors },
  { pathname: "/newappointment", title: "New Appointent", component: NewAppointment }, 
];