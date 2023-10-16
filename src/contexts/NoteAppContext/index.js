import React from "react";

function NoteAppContext({children}){
    const NoteAppContext= React.createContext();
    const [list,setList] = React.useState([]);



    return (
        <NoteAppContext.Provider 
        value={
            {
            list,
            setList,
            }
        }>
            {children}

        </NoteAppContext.Provider>
    ); 
}
export {NoteAppContext};