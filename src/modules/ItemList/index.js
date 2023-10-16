import React from "react";
import "./itemList.css";
import {Item} from "../Item";

function ItemList(){
    return (
        <div className="ItemListContainer">
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
}
export {ItemList};