import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'

export let userContext = createContext()

function Context({Children}) {

    let [currentwindow,setWindow] = useState("wide");
    let [column,setColumn] = useState(4)




    let updateWindow = () =>{
      let Wi = window.innerWidth;
        if(Wi > 1200)   {
            setWindow("wide")
        }
        if(Wi < 1200 && Wi > 1000) {
            setWindow("medium")
        }
        if( Wi < 1000) {
            setWindow("small")
        }
        if (Wi < 730) {
            setWindow("mobile")
        }
        if (Wi < 520) {
            setWindow("xsm")
        }
    }

    
    useEffect(()=>{
        updateWindow()
      window.addEventListener("resize",()=>{
          updateWindow()
      })
    },[])
    
    useEffect(()=>{
        updateColumn()
    },[currentwindow])

    let updateColumn = () => {
        switch (currentwindow) {
            case "wide": 
                setColumn(5)
                break;
            case "medium": 
                setColumn(4)
                break;
            case "small": 
                setColumn(3)
                break;        
            case "mobile": 
                setColumn(2)
                break;
            case "xsm":
                setColumn(1)
                break;
            default:
                break;
        }
    }
    

    let [content,setContent] = useState({})
    let  [search_param,setSearch] = useState(["big_ass"])
    let [dp,setDp] = useState([])
    
    let values = {content,setContent,column,search_param,setSearch,dp,setDp}

  return (
    <userContext.Provider value={values}>
        {Children}
    </userContext.Provider>
  )
}

export default Context