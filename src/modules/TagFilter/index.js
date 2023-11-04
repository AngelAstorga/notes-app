import React from "react";
import "./tagFilter.css";
import {ListTag} from "../ListTag";
import {Tag} from "../Tag";
import { Button } from "../Button";
import { SearchBox } from "../SearchBox";
import { NoteAppContext } from "../../contexts/NoteAppContext";
import { FilterIcon } from "../Icon/FilterIcon";

function TagFilter(){
    const {listTags,searchTag,setFlagNewTag,setFlagFilter} = React.useContext(NoteAppContext);

    const [auxListFilteredListTags, setAuxListFilteredListTags] = React.useState([]);

    let flagEmpty=true;

    const handleFilter=()=>{
        const element=document.getElementById("filterIcon");
        if(element.classList.contains("FilterIcon--on")){
            element.classList.remove("FilterIcon--on");
            setFlagFilter(false);
        }else{
            element.classList.add("FilterIcon--on");
            setFlagFilter(true);
        }
    }

    listTags.map((element)=>{
        if(element.status){
            flagEmpty= false;
        }    
    }
    );

    React.useEffect(
        ()=>{
            let filteredTags= listTags.filter((element)=>{
                return ((element.status) == false && element.description.includes(searchTag) && searchTag != "");
            });
            setAuxListFilteredListTags(filteredTags);

            if(auxListFilteredListTags.length == 0 && searchTag.length>0 && searchTag != ""){
                setFlagNewTag(true);
            }else{
                setFlagNewTag(false);
            }
        }
        ,[listTags,searchTag,setFlagFilter,setFlagNewTag]);

    
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
                        && <Tag key={`TagFilterContainer${tag.idTag}`} text= {tag.description} name={tag.idTag} type="filter" />
                    )
                })
                }
            </ListTag>
            <div className="TagFilter__optionsContainer">
                <div className="TagFilter__options">
                    <Button text="Add" handleOnclick={handleOpenSearchTag}/>
                    <FilterIcon
                        handleFilter={handleFilter}
                    />
                </div>
            </div>
        </div>
        <div className="TagFilter__config">
            <SearchBox text="Search Tag" type="SearchFilter"/>
            <ListTag>
            {auxListFilteredListTags.map((tag)=>{
                    return(
                        <Tag key={`TagFilterContainer${tag.idTag}`} text= {tag.description} name={tag.idTag} type="filter"/>
                    )
                })
                }
            </ListTag>
        </div>
        </>
    );
}
export {TagFilter};