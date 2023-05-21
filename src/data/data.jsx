import axios from 'axios';
import { useContext, useEffect } from 'react';
import { posts } from 'rule34js';
import xml2td, { td2xml } from 'xml2td';
import { userContext } from '../context/context';
export let  getSingle = async (id) => {
    let url = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&id=${id}&json=1`
    let resp = await axios.get(url).then(res =>{
        
        return res.data

    })
    return resp
}




export let search =  async (search) => {
    console.log(search)
    let resp = await posts({tags: search ,limit: 20}).then(res => {
        return res
    }).catch(err => {
        console.log(err)
    })
    return resp
}

export let getTaglist = async (value) => {
    let url = `https://api.rule34.xxx//index.php?page=dapi&s=tag&q=index&limit=15&name_pattern=${value}`
    let resp = await axios.get(url).then(res =>{
        let data = (xml2td(res.data))
        let arr = []
        data.map((d)=>{
            if (typeof(d) == "object") {
                arr.push({key: d[1]?.id ,value: d[1]?.name})
            }   
        })
        return (arr)
    }).catch(err =>{
        console.log(err)
    })
    return resp
}