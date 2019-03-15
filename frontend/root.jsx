import React from 'react'; 
import Clock from './clock'; 
import Tabs from './tabs'; 

function Root() {
    // return {<div>}
    const tabArray = [
        {title: "Tab1", content: "Content1"}, 
        {title: "Tab2", content: "Content2"}
    ];

    return (
        <>
        <Clock />
        <h1>I am the root</h1>
        
        <Tabs 
            tabs= {tabArray}
        /> 

        </>
    )
}
 
export default Root; 