import React, { useContext } from "react";
import { GlobalState } from "../contexts/GlobalState";

const Display = () => {
    const {text} = useContext(GlobalState)
    return <div id="display" style={{marginLeft: '2em',backgroundColor: 'blue'}}>
        <h3>{ text}</h3>
    </div>;
}

export default Display
