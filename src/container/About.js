import React from "react";
import BinarySearch from "../components/BSComponents/BinarySearchAlgo"

function About() {
  const inputRef1 = React.useRef([]);
  const [searchvalue,setSearchValue]= React.useState(0);
  // ...Array(8).keys() -> this will create an array of keys(index) and spread the array
  //into new list array.
  const list = [...Array(8).keys()];


  function clickEvent1(x) {
    console.log(inputRef1.current[x]);
  }

  function focusEvent(x) {
    inputRef1.current[x].style.backgroundColor = "pink";
  }

  function outFocusEvent(x) {
    inputRef1.current[x].style.backgroundColor = "";
  }

  function search() {
    let x=searchvalue;
    console.log(x);
    
    let arr=[3,4,5,6,7,8,9];
    let res=BinarySearch(arr,x);
    console.log(res);
  
  }

  return (
    <div>
      <div>About</div>

      Search: <input type="text" value={searchvalue} onChange={(event)=>setSearchValue(event.target.value)}/>
      <button onClick={()=>search()}>Search</button>
      {list.map((x) => (
        <div key={x}>
          <input
            key={x}
            type="text"
            ref={(el) => (inputRef1.current[x] = el)}
            onClick={() => clickEvent1(x)}
            onFocus={() => focusEvent(x)}
            onBlur={() => outFocusEvent(x)}
          />
          <br />
        </div>
      ))}
    </div>
  );
}

export default About;
