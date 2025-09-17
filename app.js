import renderHome from './components/home.js'
import {renderDashbaord} from './components/dashboard.js'


const routes = {
    '/home' : renderHome,
    '/dashboard' : renderDashbaord
}


function router(){
    const path  = location.hash.split(1) || '/home';
    const page = routes[path];
    console.log('dhddhdhh');
    
    if(page != null){
        page();
    }
    else {
        renderHome();
    }

}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
