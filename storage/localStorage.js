import { hashPass } from "../Auth/Encryption";



const storageKey = 'clinicApp:data'

function getAllStorage(){

    const data = JSON.parse(localStorage.getItem(storageKey));

    if (!data){
        data = {
            user : {
                password: "",
                attamptTolog: 0,
                locked: null
            },
            patients : [],
            appointments : [],
            finance : {
                expenses:[],
                income:[]
            }

        }
    }
    return data

}


function saveToStorage(data){
    localStorage.setItem(storageKey ,JSON.stringify(data));
}





