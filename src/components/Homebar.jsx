import React, { useContext, useEffect, useRef, useState } from 'react'
import { userContext } from '../context/context'
import { empty } from 'dom/lib/mutation'
import { getTaglist } from '../data/data'
import ReactSearchBox from "react-search-box";



function Homebar() {
  let {dp,setDp,setSearch,search_param} = useContext(userContext)
  let [temp,setTemp] = useState([])
  let inputRef = useRef()
  let ivalue = inputRef
  useEffect(()=>{
    console.log(temp)
  },[temp])
  
  useEffect(()=>{
    
    if (ivalue.current.value == undefined || ivalue.current.value == "") {
      setDp([])
    }
  },[ivalue])
  

  return (
    <div className="homeBar">
        <div className="logo">
            Rule34
        </div>

        <div className="search_box">
          {
            temp.map((item)=>{
              return (
                <div className="params" onClick={e=>{
                  let filtered = temp.filter(name => name != e.target.innerHTML)
                  setTemp(filtered)
                }}>
                  {item}
                </div>
              )
            })
          }
          <div className="search" >
            <input ref={inputRef} onChange= { async e=> {
              let resp = await getTaglist(e.target.value)
                setDp(resp)
              }} type='text'>
            </input>
            <button onClick={e=>{
              console.log(inputRef.current.value)
              let tags = inputRef.current.value.split(" ")
              setTemp(curr => [...curr, ...tags])
              inputRef.current.value = "";

            }}>Add</button>
              <button onClick={(()=>{
                if (temp == [])  {
                  setSearch(["all"])
                }
                if (temp != []) {
                  setSearch([...temp]);
                  inputRef.current.value = "";
                  setDp([])
                }
                
              })}>
                Submit
              </button>
            <div className="search_list">
              {dp.map(({key,value})=>{
                if(key != undefined) {
                  return(
                    <div tabIndex={1} onClick={e=>{
                      console.log(e.target.innerHTML)
                      if (temp.includes(e.target.innerHTML) == false) {
                        setTemp(curr => [...curr, e.target.innerHTML])
                        inputRef.current.value = "";
                        setDp([])
                      }
                      else {
                        alert("exists")
                      }
                      
                    }}>
                      {value}
                    </div>
                  )
                }
              })}
            </div>
         </div>
         
        </div>
        
    </div>
  )
}

export default Homebar