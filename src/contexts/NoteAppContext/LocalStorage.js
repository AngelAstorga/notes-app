import React from "react";


function LocalStorage(name, initialValue){

    const [item,setItem] = React.useState([]);    
    React.useEffect(()=>{
        if(initialValue == undefined){
            if(localStorage.getItem(name) == null || JSON.parse(localStorage.getItem(name)).length == 0){
                localStorage.setItem(name,JSON.stringify([]));
                setItem([]);
            }
            else{
                setItem(JSON.parse(localStorage.getItem(name)));            
            }
        }else{
            saveList(initialValue);                            
        }
    },[]);
    
    const saveList=(newList)=>{
        localStorage.setItem(name,JSON.stringify(newList));
        setItem(initialValue);
    }

    return({
        item,
        saveList
    });


}
export {LocalStorage};