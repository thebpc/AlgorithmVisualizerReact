import React from "react";

//method 1
//we cannot use ref keyword and useref hook on functional component as it does have
//instance. so either make it class or use forwardref
// const ArrayBox=React.forwardRef((props,ref)=>(
    
//       <div ref={ref} className={props.class}>{props.number}</div>
    
//   ))


   //method 2
  //callbackref -
  function ArrayBox(props){
   return( 
   <div ref={props.divref} className={props.class}>{props.number}</div>  
   )
  }

export default ArrayBox;
