import React from "react";
import "./searchBox.css";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function SearchBox({text}){

    const {search, setSearch,searchTag, setSearchTag, flagNewTag, listTags, setListTags} = React.useContext(NoteAppContext);

    const handleOnCreateNewTag=()=>{
        const date= new Date();
        let time= date.getTime();
        if(flagNewTag){
            let listTagsAux= [...listTags];
            const newTag={idTag: date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),description: searchTag ,status:true}
            listTagsAux.push(newTag);
            setListTags(listTagsAux);

        }
        console.log(time);
    }
    return (
        (text === 'Search') 
        ? <div className="SearchBoxContainer">
        <input onChange={(e)=>{setSearch(e.target.value)}} className="SearchBoxInput" value={search} type="text" placeholder={text} />
        </div> 
        :<div className="SearchBoxContainer">
            <input onChange={(e)=>{setSearchTag(e.target.value)}} className="SearchBoxInput" value={searchTag} type="text" placeholder={text} />
            <button onClick={()=>{
                if(flagNewTag){
                    handleOnCreateNewTag();
                }
            }} className={`SearchBox__create ${flagNewTag && "SearchBox__create--on"}`}>Create</button>
        </div>
        );
        
}
export {SearchBox};