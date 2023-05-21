import React, { useContext, useEffect } from 'react'
import Homebar from '../components/Homebar';
import { search } from '../data/data';
import { useQuery } from 'react-query';
import Card from '../components/Card';
import Layout from 'react-masonry-list';
import { userContext } from '../context/context';
import { posts } from 'rule34js';


function Home() {

  let {column,search_param,setSearch} = useContext(userContext)  

    let {data, isLoading,isError} = useQuery(["posts", search_param],()=> {
      let resp = search(search_param)
      return resp
    })
    
    useEffect(()=>{
     
      console.log()

    },[
      data
    ])
  
  return (
    <div className="home">
      <Homebar/>
      <div className="container">
        {isLoading == true && data == undefined && isError == false ? null : 
          <>
          
          {
            data.posts == undefined || Array.isArray(data.posts) == false ?  <div className="error">Nothing here but chickens</div> :
            <>
              <Layout colCount={column} className='masonry'   gap={10} minWidth={200} items={ data.posts.map    ((item)=>
                {
                let {preview_url,change,creator_id,file_url,sample_url,id} =  item
                return(
                  <Card img={preview_url} file={file_url} sample={sample_url} key={id} id={id} details={item}/>
                )
                })}>
              </Layout>
            </>
          }

          .loaded
          </>
        }
        
      </div>
    </div>
  )
}

export default Home