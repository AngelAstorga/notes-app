import React from "react";
import { LocalStorage } from "./LocalStorage";

const NoteAppContext= React.createContext();

function NoteAppProvider({children}){
    // const INITIAL_VALUE=[
    //     {id: "uniqueId1", description:"example note 1", tags:[{idTag:"idTag1", tagDescription: "study"},{idTag:"idTag2", tagDescription: "work"}]},
    //     {id: "uniqueId2",description:"example note 2", tags:[{idTag:"idTag1", tagDescription: "study"},{idTag:"idTag2", tagDescription: "work"}]},
    //     {id: "uniqueId3",description:"example note 3", tags:[{idTag:"idTag1", tagDescription: "study"},{idTag:"idTag2", tagDescription: "work"}]},
    // ];
    const INITIAL_TAGS=[
        {idTag: "uniqueIdTag1", description:"work", status: true},
        {idTag: "uniqueIdTag2", description:"education", status: true},
        {idTag: "uniqueIdTag3", description:"todo", status: true},
    ];

    const {item:listNotes, saveList:setListNotes} = LocalStorage("NOTES_V1");
    const {item:listTags, saveList:setListTags} = LocalStorage("TAGS_V1");
    const [search,setSearch] = React.useState("");
    const [searchTag,setSearchTag] = React.useState("");
    const [flagNewTag,setFlagNewTag] = React.useState(false);



    return (
        <NoteAppContext.Provider 
        value={
            {
                listNotes,
                setListNotes,
                search,
                setSearch,
                searchTag,
                setSearchTag,
                listTags,
                setListTags,
                setFlagNewTag,
                flagNewTag,
            }
        }>
            {children}

        </NoteAppContext.Provider>
    ); 
}
export {NoteAppContext,NoteAppProvider};