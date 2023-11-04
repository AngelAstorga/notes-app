import React from "react";
import "./tag.css";
import { NoteAppContext } from "../../contexts/NoteAppContext";

const TagTypes= {
    "description": ({text})=>{
        return (
            <span className="TagContainer TagContainer--description">
            {text}
            </span>)
         },
    "filter": ({text, name, listTags, setListTags,setSearchTag})=>{ 
                return(
                    <span 
                    onDoubleClick={
                        (e)=>{
                        manageTag({e,listTags,setListTags, setSearchTag})
                    }
                    
                    } 
                    className="TagContainer" 
                    name= {name}>
                    
                    {text}
                    </span>
            )
        },
        
    "TagItemManager": ({text, name, listTags, setListTags, setSearchTag,listNotes, setListNotes})=>{
            return (
                <span 
                    onDoubleClick={
                        (e)=>{
                        manageTagFromItem({e,listTags,setListTags, setSearchTag, listNotes, setListNotes})
                    }
                    
                    } 
                    className="TagContainer" 
                    name= {name}>
                    
                    {text}
                    </span>
                )
        },       
    "default": ({})=>{
        return (
                <></>
                )
        }       
}

    const manageTag=({e,listTags, setListTags, setSearchTag})=>{
        
        let indexAux=undefined;
        let listTagsAux=[...listTags];
        let element=listTagsAux.find((element,index)=>{
            if(element.idTag ==  e.target.getAttribute("name")){
                indexAux= index;
            }
            return element.idTag ==  e.target.getAttribute("name")
        });
        if(element.status){
            element.status = false;
        }else{
            element.status = true;
            setSearchTag("");
            
        }
        listTagsAux.splice(indexAux,1,element);
        setListTags(listTagsAux);        
    }
    const manageTagFromItem=({e,listTags, listNotes, setListNotes})=>{
        let idNote=e.currentTarget.parentNode.parentNode.parentNode.parentNode.firstChild.getAttribute("name");
        let flagAdded= true;
        const auxListNotesMain= JSON.parse(JSON.stringify(listNotes));

        let indexNote=undefined;
        let indexTag= undefined;
        let idTag="";
        let description="";
        let selectedNote="";

        if(idNote==undefined){
            idNote=e.currentTarget.parentNode.parentNode.parentNode.firstChild.getAttribute("name");
            flagAdded= false;
        }

        selectedNote=auxListNotesMain.find((note, index)=>{
            if(note.id == idNote){
                indexNote= index;
            }
            return note.id == idNote;
        });

        if(selectedNote != undefined){
            if(flagAdded){
                selectedNote.tags.map((tag, index)=>{
                    if(tag.tagDescription == e.currentTarget.innerHTML){
                        indexTag= index;
                    }
                    return tag.description == e.currentTarget.innerHTML
                });
            }else{
                listTags.map((tag)=>{
                    if(tag.description == e.currentTarget.innerHTML){
                        idTag= tag.idTag;
                        description= tag.description;

                    }
                });
            }
            
            if(selectedNote != undefined){
                let auxListNotes =[];
                let newNote=[];
                auxListNotes=[...auxListNotesMain];
                newNote= auxListNotes[indexNote];
             if(flagAdded){
                newNote.tags.splice(indexTag,1);
                auxListNotes.splice(indexNote,1,newNote);
                setListNotes(auxListNotes);
             }else{
                newNote.tags.push({idTag: idTag, tagDescription: description});
                auxListNotes.splice(indexNote,1,newNote);
                setListNotes(auxListNotes);
             }
                
            }
        }
        // let indexAux=undefined;
        // let listTagsAux=[...listTags];
        // let element=listTagsAux.find((element,index)=>{
        //     if(element.idTag ==  e.target.getAttribute("name")){
        //         indexAux= index;
        //     }
        //     return element.idTag ==  e.target.getAttribute("name")
        // });
        // if(element.status){
        //     element.status = false;
        // }else{
        //     element.status = true;
        //     setSearchTag("");
            
        // }
        // listTagsAux.splice(indexAux,1,element);
        // setListTags(listTagsAux);        
    }
    
function Tag({text, name, type}){
    const {listTags,setListTags, setSearchTag, listNotes, setListNotes}= React.useContext(NoteAppContext);
    if(typeof(type) != "string"){
        type="default"
    }

    return(
        <>
        {TagTypes[type]({text, name, type, listTags, setListTags, setSearchTag, listNotes, setListNotes})}
        </>
    );
}
export {Tag}