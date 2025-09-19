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

export async function addAdmin(data){
    const data = getAllStorage;
    const hashedPass = await hashPass(data);

    data.user.password = hashedPass;
    data.user.attamptTolog = 0;
    data.user.locked = null;
    saveToStorage(data);
}

export async function verifyPassword(password){
    
    
    const currentTime = Date.now();
    const data = getAllStorage();

    const isItValidPass = (await hashPass(password)) === data.user.password ;

    if(!isItValidPass)
        {
        data.user.attamptTolog += 1
         if(data.user.attamptTolog >= 3){
            data.user.locked = currentTime + 90000
            data.user.attamptTolog = 0
         }
         saveToStorage(data);
         return {success : false, message : "invalid password" }
    }

    if (data.user.locked < currentTime){
        return { success : false, message : "your account has been blockd"}
    }

    if(isItValidPass){
        return true
    }
}

// patient CRUD

export function addPatient(patient){

    const data = getAllStorage;
    data.patients.push({id : data.now(), ...patient})
    saveToStorage(data);
}

export function deletePatient(id){
    const data = getAllStorage();
    data.patient = data.patient.filter((patient) => patient.id != id);
    saveToStorage(data)
}

export function updatePatient(updateInfo, id){

    const data = getAllStorage();
    const patient = data.patients.find( (id)=>id === patient.id);
    if(patient){
        Object.assign(patient, updateInfo);
        return {success : true, message : "Updated successfully"}
    }
}
// expense CRUD





