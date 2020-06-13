import React from "react";
import ArrayBox from "../components/BSComponents/ArrayBox";
import BinarySearch from "../components/BSComponents/BinarySearchAlgo";
import Binarysearchcontrols from '../components/BSComponents/Binarysearchcontrols';
import Binarysearchdashboard from '../components/BSComponents/Binarysearchdashboard';
import ColorCodePanel from '../components/BSComponents/ColorCodePanel';

function BS() {
  const [arr, setArr] = React.useState([]);
  const [low, setLow] = React.useState([]);
  const [high, setHigh] = React.useState([]);
  const [mid, setMid] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [result,setResult] =React.useState("");
  const [searchvalue, setValue] = React.useState("");

  const arrayboxref = React.useRef([]);

  //state is required to send chnages to UI 
  //at anypoint of time any chnage will be shown
  //one time data can be send just using normal var like localresult
  //but I am using state for result as in delaymethod I want to show it after each iteration
 
  function mutateBSSate(val)
  {
    console.log("searchvalue:",val);
    setValue(val);
  }

  function generateRandomNumbers() {
    var number;
    number = Math.floor(Math.random() * 99);
    console.log("returning number", number);
    return number;
  }

  function fillArray() {
    console.log("fillArray called");
    let arr = [];
    console.log("arr length", arr.length);
    for (var i = 0; i < 20; i++) {
      console.log("i", i);
      var num = generateRandomNumbers();
      console.log(arr.includes(num));
      if (arr.includes(num)) {
        console.log("i", i);
        i = i - 1;
      } else {
        arr.push(num);
      }
    }
    arr.sort((a, b) => a - b);
    setArr(arr);
    setLow(0);
    setHigh(arr.length - 1);
  }

  function search() {
    reset();
    console.log("search value", searchvalue);
    var uiarr = [];
    var result = BinarySearch(arr, searchvalue, uiarr);
    updateState(uiarr);

    console.log("result:", result);
  }

  function reset() {
    for (var i = 0; i < arr.length; i++) {
      arrayboxref.current[i].style.backgroundColor = "";
      arrayboxref.current[i].style.color = "";
    }
  }

  function updateState(uiarr) {
    console.log(uiarr);
    for (var i = 0; i < uiarr.length; i++) {
      delayUpdate(uiarr[i], i);
      console.log("loop", i);
    }
  }

  function updateUIArrayRange(obj)
  {
    //update UI the search range
    for(var i=0;i<arr.length;i++)
    {
      if(Number(arr[i])>=Number(arr[obj.l]) && Number(arr[i])<=Number(arr[obj.h]) && arr[i]!==arr[obj.m])
      {
        arrayboxref.current[i].style.backgroundColor = "#f4f792";
        console.log("set color gre arr[i]",arr[i],arr[obj.l],arr[obj.h]);
      }else{
        arrayboxref.current[i].style.backgroundColor = "";
        console.log("set color ",i)
      }
    }

  }

  function updateUIMidLowHigh(obj)
  {
    var flag = 0;
    if (Number(arr[obj.m]) === Number(searchvalue)) {
        
      arrayboxref.current[arr.findIndex((val) => {
          return Number(val) === Number(searchvalue);
        })].style.backgroundColor = "green";

      arrayboxref.current[arr.findIndex((val) => {
          return Number(val) === Number(searchvalue);
        })].style.color = "white";

      flag = 1;
    } else {
      if (flag === 1) {
        arrayboxref.current[arr.findIndex((val) => {
            return Number(val) === Number(searchvalue);
          })].style.backgroundColor = "";

        arrayboxref.current[arr.findIndex((val) => {
            return Number(val) === Number(searchvalue);
          })].style.color = "";
      }
      flag = 0;
    }
  }

  function delayUpdate(obj, i) {
    console.log("arr[obj.m]", arr[obj.m]);

    setTimeout(() => {

      updateUIArrayRange(obj);
      updateUIMidLowHigh(obj);
      setHigh(obj.h);
      setLow(obj.l);
      setMid(obj.m);
      setCount(i+1);
      if(Number(searchvalue)===arr[obj.m])
      {
        setResult("Found");
      }
      else{
        setResult("Not Found");
      }
      console.log("delay update", obj.h);
    }, 2000 * i);
    // In the code given above you have to do 2000 * i at line 8 because
    //setTimeout method inside the loop doesn’t makes the loop pause but actually adds
    //a delay to each iteration. Remember that all the iteration start their time together.
    // Thus if we only do 2000 there, that will make all the iterations execute together and
    //it will just give 2000 ms delay in the first iteration and all other iteration will
    //happen instantly after it.
    // Thus to avoid that we add 0 to first, 2000 to second, 4000 to third and it goes on.
  }

  return (
  <div className="p-grid">
      <div style={{'marginTop':'30px','marginLeft':'40px'}} className="p-col-3">
        <Binarysearchcontrols searchValue={searchvalue} setSearchValueHandler={mutateBSSate} searchHandler={search} fillArrayHandler={fillArray}></Binarysearchcontrols>
      </div>
      <div style={{'marginTop':'30px','marginLeft':'40px'}} className="p-col-3">
        <Binarysearchdashboard iteration={count} searchresult={result}></Binarysearchdashboard>
      </div>
      <div style={{'marginTop':'30px','marginLeft':'40px'}} className="p-col-3">
        <ColorCodePanel></ColorCodePanel>
      </div>
      
      <div
        className="p-grid p-nogutter"
        style={{ marginTop: "100px", marginLeft: "50px" }}
      >
        <div className="p-col-12 p-nogutter">
          {arr.map((value, index) => (
            // used forwardref hence we can use now ref on ArrayBox custom element
            <ArrayBox
              key={index}
              divref={(el) => (arrayboxref.current[index] = el)}
              number={value}
              class={
                low === index
                  ? "boxlow"
                  : "" || high === index
                  ? "boxhigh"
                  : "" || mid === index
                  ? "boxmid"
                  : "" || "box"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BS;
