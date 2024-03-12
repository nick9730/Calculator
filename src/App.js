import { useState } from "react";
import * as math from 'mathjs'

const values = [1,2,3,4,5,6,7,8,9,0,'+','-','X','/',]



function App() {

  const [number,setNumber] = useState(0)
  
  console.log(number)

  const [numberArray,setNumberArray] = useState([]);
  const [ screen,setScreen] = useState()

  const Delete = ()=>{

     setNumber('C')
     {number && setNumberArray('')}
    
  }
 
const HandleEqual= ()=>{
  const input=numberArray.join('');
  if(!input) return
  setScreen(math.evaluate(input) )
}

  const hadleAddnumber=(numbers)=>
  {
    setNumberArray((numberArray)=>[...numberArray,numbers])
  }

  return (
    <div className="App">
          <div className="wrapper">
            <Screen  Delete={Delete} setNumberArray={setNumberArray} screen={screen} onEqual={HandleEqual} number={number}   numberArray={numberArray}/>
              <Btn setNumberArray={setNumberArray} onAdd={hadleAddnumber} numberArray= { numberArray} setNumber={setNumber}/>
          </div>
    </div>
  );
}

export default App;



function Btn ({setNumberArray, numberArray,setNumber,onAdd}){
  return(
    <div>
      {values.map((value,i
      )=>
       <Btnvalue i = {i } setNumberArray={setNumberArray} key={value} numberArray={ numberArray} setNumber={setNumber} onAdd={onAdd}  value={value}/>)}
    </div>
  )
}



function Btnvalue({i,setNumberArray,numberArray,value,setNumber,onAdd}){

 
  return(
          <Button i= { i} setNumberArray={setNumberArray} numberArray={numberArray}  onClick={()=>{onAdd(value!=='=' && value !=='C' && value)
            setNumber(value)}}>{value}</Button>
  )
}


function Button({i,setNumberArray,value,numberArray,children,onClick}){
    

  {i===15 && <button ></button>}

  
  return(
  <button onClick={onClick}  className="button">
  {children} {i}
  </button>
  )
}


function Screen({ Delete,screen,numberArray,number,onEqual}){

  const HandleSumbit=(e)=>{
    e.preventDefault();
    if(number==="C"){
      console.log('nikos')
    }
    if(!screen) return
   
   
     
  }
  return(
 <form onSubmit={HandleSumbit}>
  <div>
    {numberArray}
    </div>
  <div>

    <p>
     Result: {screen}
      </p>
  </div>
  
<button style={{margin:10,position: "absolute",top:400,width:30,padding:10}} onClick={onEqual} >=</button>
<button onClick={Delete} >C</button>


 </form>
  )
}