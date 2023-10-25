import React from "react";
import "./tagFilter.css";
import {ListTag} from "../ListTag";
import {Tag} from "../Tag";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { SearchBox } from "../SearchBox";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function TagFilter(){
    const {listTags,searchTag,setFlagNewTag} = React.useContext(NoteAppContext);
    const auxListTags=[...listTags];
    let auxListFilteredListTags=[];
    let flagEmpty=true;

    listTags.map((element)=>{
        if(element.status){
            flagEmpty= false;
        }    
    }
    );

    auxListFilteredListTags= auxListTags.filter((element)=>{
        return ((element.status) == false && element.description.includes(searchTag) && searchTag != "");
    });

    if(auxListFilteredListTags.length == 0 && searchTag.length>0 && searchTag != ""){
        setFlagNewTag(true);
    }else{
        setFlagNewTag(false);

    }
    
    const handleOpenSearchTag=()=>{
     const tagFilterConfig=  document.getElementsByClassName("TagFilter__config");
     if(tagFilterConfig.item(0).classList.contains("TagFilter__config--show")){
        tagFilterConfig.item(0).classList.remove("TagFilter__config--show");
     }else{
        tagFilterConfig.item(0).classList.add("TagFilter__config--show");
     }
    }

    return (
        <>
        <div className="TagFilterContainer">
            <ListTag>
                { flagEmpty ? <span> Add a tag to filter </span>:
                listTags.map((tag)=>{
                    return( 
                        tag.status 
                        && <Tag key={`TagFilterContainer${tag.idTag}`} text= {tag.description} name={tag.idTag} />
                    )
                })
                }
            </ListTag>
            <div className="TagFilter__optionsContainer">
                <div className="TagFilter__options">
                    <Button text="Add" handleOnclick={handleOpenSearchTag}/>
                    <Icon
                        type="FilterImg"
                        />
                </div>
            </div>
        </div>
        <div className="TagFilter__config">
            <SearchBox text="Search Tag"/>
            <ListTag>
            {auxListFilteredListTags.map((tag)=>{
                    return(
                        <Tag text= {tag.description} name={tag.idTag} />
                    )
                })
                }
            </ListTag>
        </div>
        </>
    );
}
export {TagFilter};