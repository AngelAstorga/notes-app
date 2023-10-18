import React from "react";
import { LocalStorage } from "./LocalStorage";

const NoteAppContext= React.createContext();

function NoteAppProvider({children}){
    const INITIAL_VALUE=[
        {description:"example note 1", tags:["study","today"]},
        {description:"example note 2", tags:["study","today"]},
        {description:"example note 3", tags:["study","today"]},
    ];

    const {item:listNotes, saveList:setListNotes} = LocalStorage("NOTES_V1");

    return (
        <NoteAppContext.Provider 
        value={
            {
                listNotes,
                setListNotes
            }
        }>
            {children}

        </NoteAppContext.Provider>
    ); 
}
export {NoteAppContext,NoteAppProvider};