import {renderHome} from './components/home'
import {dashboard} from './components/dashboard'
import {login} from './components/login'


const routes = {
    '/home' : renderHome,
    '/login' : login,
    '/dashboard' : dashboard
}


function router(){
    const path  = location.hash.split(1);
    const page = routes[path];

    if(page != null){
        page();
    }
    else {
        home();
    }

}

window.addEventListener('load', router);
window.addEventListener('hachChange', router);