import React from 'react';
import { Card } from "primereact/card";

const ColorCodePanel = ()=>
{

    return (

        <Card style={{'backgroundColor':'#f5f5f5','width':'300px','height':'200px',textAlign:"left"}}>
            <div style={{display:'inline-block',padding:'3px'}}>
                <div style={{backgroundColor:'green',width:'40px',height:'40px'}}></div>
            </div>
            <div style={{display:'inline-block',padding:'3px'}}>
                &nbsp; &nbsp; &nbsp; Found
            </div>
            <br/>
            <div style={{display:'inline-block',padding:'3px'}}>
                <div style={{backgroundColor:'red',width:'40px',height:'40px'}}></div>
            </div >
            <div style={{display:'inline-block',verticalAlign:'center',minHeight:'2em',textAlign:'center'}}>
                &nbsp; &nbsp; &nbsp; Mid/Not Found
            </div>
            <br/>
            <div style={{display:'inline-block',padding:'3px',height:'40px'}}>
                <div style={{backgroundColor:'#f4f792',width:'40px',height:'40px'}}></div>
            </div >
            <div style={{display:'inline-block',padding:'3px',height:'40px'}}>
                &nbsp; &nbsp; &nbsp;Active Search Range
            </div>
        </Card>
    );
}


export default ColorCodePanel;