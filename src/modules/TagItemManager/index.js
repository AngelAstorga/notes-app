import React from "react";
import "./tagItemManager.css";
import { Tag } from "../Tag";
import { Button } from "../Button";
import { SearchBox } from "../SearchBox";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function TagItemManager({listTags,listTagsAdded, flagEdit}){

    const {listNotes}=React.useContext(NoteAppContext);
    const [searchTag, setSearchTag] = React.useState("");
    const [flagNewTagFromItem,setFlagNewTagFromItem]= React.useState(false);
    const [auxListTags,setAuxListTags]= React.useState([]);
    const [flagOpenSearch,setFlagOpenSearch]= React.useState(false);

    let value=[];
    value=listTags.find((tag)=>{
        return (tag.description == searchTag);
    });

    if(!flagNewTagFromItem){
        if(searchTag != "" && value == undefined){
            setFlagNewTagFromItem(true);
        }
    }else{
        if(searchTag =="" || value != undefined){
            setFlagNewTagFromItem(false);
        }
    }


    React.useEffect(()=>{
        if(listTags.length >0){
            let containerList= JSON.parse(JSON.stringify(listTags)); 
            listTagsAdded.forEach((tag)=>{
                for(let i=0; i< listTags.length;i++){
                    if(listTags[i].idTag == tag.idTag){
                        containerList[i].status = true;
                    }else{
                    }
                }
            });
            setAuxListTags(containerList);
        }

    },[listTags,listNotes]);

    React.useEffect(()=>{
        if(!flagEdit){
            setFlagOpenSearch(false);
        }
    },[flagEdit]);

    const handleOpenSearch=()=>{
        flagOpenSearch?setFlagOpenSearch(false):setFlagOpenSearch(true);
    }

    return(
        <div className="TagItemManagerContainer">
            <div className="TagItemManager__head">
                <div className="TagItemManager__listTags">
                    {
                    flagEdit 
                    ? auxListTags.map((tag)=>{
                        return (
                            tag.status 
                            && <Tag 
                                key={`ItemTag${tag.idTag}`} 
                                text= {tag.description} 
                                type="TagItemManager"/>)
                        })
                    : auxListTags.map((tag)=>{
                    return (
                        tag.status 
                        && <Tag 
                            key={`ItemTag${tag.idTag}`} 
                            text= {tag.description} 
                            type="description"/>)
                    })
                    }
                </div>
                {flagEdit && <Button text="Add" handleOnclick={handleOpenSearch}/>}
            </div>
        {(flagOpenSearch && flagEdit) &&
        <>
            <SearchBox 
            type="SearchTagItem" 
            text="Search Tag" 
            searchTagItem={searchTag} 
            setSearchTagItem={setSearchTag}
            flagNewTagFromItem={flagNewTagFromItem}
            setFlagNewTagFromItem={setFlagNewTagFromItem}
            />
        <div className="TagItemManager__listTags">
                    {auxListTags.map((tag)=>{
                        return (!tag.status && tag.description.includes(searchTag) && searchTag.length > 0) 
                        && <Tag 
                        key={`ItemTag${tag.idTag}`} 
                        text= {tag.description} 
                        type="TagItemManager"/>
                    })}
        </div>    
                    </>
        }

        
        </div>
    );
}
export {TagItemManager};