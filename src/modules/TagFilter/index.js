import React from "react";
import "./tagFilter.css";
import {ListTag} from "../ListTag";
import {Tag} from "../Tag";
import { Button } from "../Button";
import { Icon } from "../Icon";

function TagFilter(){
    return (
        <div className="TagFilterContainer">
            <ListTag>
                <Tag/>
                <Tag/>
                <Tag/>
            </ListTag>
            <div className="TagFilter__Options">
                <Button text="Add"/>
                <Icon
                    type="FilterImg"
                />
            </div>
        </div>
    );
}
export {TagFilter};