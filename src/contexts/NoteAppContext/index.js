import React from "react";
import { LocalStorage } from "./LocalStorage";

const NoteAppContext= React.createContext();

function NoteAppProvider({children}){
    const INITIAL_VALUE=[
        {id: "uniqueId1", description:"example note 1", tags:[{idTag:"idTag1", tagDescription: "study"},{idTag:"idTag2", tagDescription: "work"}]},
        {id: "uniqueId2",description:"example note 2", tags:[{idTag:"idTag1", tagDescription: "study"},{idTag:"idTag2", tagDescription: "work"}]},
        {id: "uniqueId3",description:"example note 3", tags:[{idTag:"idTag1", tagDescription: "study"},{idTag:"idTag2", tagDescription: "work"}]},
    ];

    const {item:listNotes, saveList:setListNotes} = LocalStorage("NOTES_V1");
    const [search,setSearch] = React.useState("");


    return (
        <NoteAppContext.Provider 
        value={
            {
                listNotes,
                setListNotes,
                search,
                setSearch,
            }
        }>
            {children}

        </NoteAppContext.Provider>
    ); 
}
export {NoteAppContext,NoteAppProvider};