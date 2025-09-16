export function SetInStorage (key, value){
    localStorage.SetItem(key, JSON.stringify(value));
}

export function GetInstorage(key){
    const Items = localStorage.getItem(key);
    if(Items === null)
        return null;
    else return Items
}