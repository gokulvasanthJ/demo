import React from 'react'
import { useState,useMemo } from 'react'
function UseMemo() {
  let [value,setValue] = useState(0)
  let [name,setName] = useState("")

  let doubleValue=useMemo(()=>{
    return expensiveCalculation(value)
  },[value])

  return<>
  <h2>useMemo</h2>
  <p>It will always return a value</p>
  <div>
    <label>Name : </label>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="name"/>

  </div>
  <div>
    <label>Age : </label>
      <input type="number" onChange={(e)=>setValue(e.target.value)}/>
  </div>
  <div>He's name is {name} and age is {doubleValue}</div>
  
  <h2>useCallback</h2>
  <p>It will always return a function</p>
  </>
}

export default UseMemo

function expensiveCalculation(value)
{
  for (let i=0; i<100000000; i++){}
  return value*2
}