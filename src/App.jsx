import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"



function App() {
  const [data, setData] = useState(
    {initialInvestment: 1000,
    annualInvestment: 2000,
    expectedReturn: 500,
    duration:10,
  })
  const durationValid = data.duration>=1;


  function handleChange(inputField,newValue)
  {
    setData((prevData)=>{
      return {
        ...prevData,
        [inputField]: +newValue
      }
    })
  }
  return (
    <>
     <Header/>
     <UserInput data={data} onChangeInput={handleChange}/>
     {!durationValid && <p className="center">Please enter valid Duration</p>}
     {durationValid && <Result input={data}/>}
    </>
     
  )
}

export default App
