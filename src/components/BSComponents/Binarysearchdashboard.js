import React from "react";
import { Card } from "primereact/card";

const Binarysearchdashboard = (props) => {



function handleStyle()
{
   return props.searchresult==='Found'?'green':'red';
}

  return (
    <div>
      <Card style={{'backgroundColor':'#f5f5f5','width':'300px','height':'200px'}}>
       <div style={{'fontSize':'1.2em','textAlign':'left',marginLeft:'10px',marginTop:'40px',float:'left'}}>
           Total Iteration
       </div>
       <div style={{color:'grey','fontSize':'4em','textAlign':'right',marginRight:'30px',float:'right',fontFamily:'bold'}}>
           {props.iteration}
       </div>
        <br />
       <div style={{'color':handleStyle(),'fontSize':'2em','textAlign':'center',fontFamily:'bold',marginLeft:"20px",marginTop:'90px'}}>
           {props.searchresult}
       </div>

       
      </Card>
    </div>
  );
};

export default Binarysearchdashboard;
