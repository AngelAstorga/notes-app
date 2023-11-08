import React from "react";
import "./searchBox.css";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function SearchBox({type, text, searchTagItem, setSearchTagItem, flagNewTagFromItem, setFlagNewTagFromItem}){

    const {search, setSearch,searchTag, setSearchTag, flagNewTag, listTags, setListTags} = React.useContext(NoteAppContext);

    const handleOnCreateNewTag=()=>{
        const date= new Date();
        if(flagNewTag){
            let listTagsAux= [...listTags];
            const newTag={idTag: date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),description: searchTag ,status:true}
            listTagsAux.push(newTag);
            setSearchTag("");
            setListTags(listTagsAux);
        }
    }
    const handleOnCreateNewTagFromItem=()=>{
        const date= new Date();
        if(flagNewTagFromItem){
            let listTagsAux= [...listTags];
            const newTag={idTag: date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),description: searchTagItem ,status:false}
            listTagsAux.push(newTag);
            setListTags(listTagsAux);
            setSearchTagItem("");
            setFlagNewTagFromItem(false);
        }
    }
    const typesOfSearch={
        "Search":({text})=>{
            return(
                <div className="SearchBoxContainer">
                    <input onChange={(e)=>{setSearch(e.target.value)}} className="SearchBoxInput" value={search} type="text" placeholder={text} />
                </div> 
            )
        },
        "SearchFilter":({text})=>{
            return (
                <div className="SearchBoxContainer">
                    <input onChange={(e)=>{setSearchTag(e.target.value)}} className="SearchBoxInput" value={searchTag} type="text" placeholder={text} />
                    <button onClick={()=>{
                        if(flagNewTag){
                            handleOnCreateNewTag();
                        }
                    }} className={`SearchBox__create ${flagNewTag && "SearchBox__create--on"}`}>Create</button>
                </div>
            )
        },
        "SearchTagItem": ({text,setSearchTagItem, searchTagItem})=>{
            return(
                <div className="SearchBoxContainer">
                    <input onChange={(e)=>{setSearchTagItem(e.target.value)}} className="SearchBoxInput" value={searchTagItem} type="text" placeholder={text} />
                    <button onClick={()=>{
                        if(flagNewTagFromItem){
                            handleOnCreateNewTagFromItem();
                        }
                    }} className={`SearchBox__create ${flagNewTagFromItem && "SearchBox__create--on"}`}>Create</button>
                </div>
            )
        }
    }



    return (
        typesOfSearch[type]({text,searchTagItem, setSearchTagItem, flagNewTagFromItem, setFlagNewTagFromItem})
        );
        
}
export {SearchBox};