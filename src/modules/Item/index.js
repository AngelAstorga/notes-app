import React from "react";
import "./item.css";
import { ListTag } from "../ListTag";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { DeleteIcon } from "../Icon/DeleteIcon";

function Item(){
    return (
        <div className="ItemContainer" >
            <textarea className="Item__text" name="" id=""></textarea>
            <div className="Item__tagContainer">
                <ListTag>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                </ListTag>
                <Button text="Add"/>
            </div>
            <DeleteIcon noteDelete={true}/>
            <div id="modalTag">
            </div>
        </div>

    );
}
export {Item};