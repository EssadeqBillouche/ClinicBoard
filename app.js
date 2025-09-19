import renderHome from './components/home.js'
import renderSignup from './components/signUp.js'
import renderLogin from './components/login.js'
import renderDashboard from './components/dashboard.js'
import renderFinance  from './components/Finance.js'
import renderAppointments from './components/appointments.js'
import renderPatients from './components/patients.js'


const routes = {
  "/login": renderLogin,
  "/signup": renderSignup,
  "/dashboard": renderDashboard,
  "/patients": renderPatients,
  "/appointments": renderAppointments,
  "/finance": renderFinance,
};



function router(){

    const path = location.hash;

    const page = routes[path.slice(1)] ;

    console.log(page)
    if(page){
        page()
    }else{
        renderHome()
    }
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);