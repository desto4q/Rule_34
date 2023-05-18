import React, { useEffect } from 'react'
import Homebar from '../components/Homebar';
import { search } from '../data/data';
import { useQuery } from 'react-query';
import Card from '../components/Card';
import Layout from 'react-masonry-list';


function Home() {

  

    let {data, isLoading} = useQuery(["post"],()=> {
      let resp = search()
      return resp
    })

    useEffect(()=>{
      console.log(data)
    },[data])
  
  return (
    <div className="home">
      <Homebar/>
      <div className="container">
        {isLoading == true ? null : 
          <>
          <Layout colCount={{1100: 5}} className='masonry'  gap={10} minWidth={200} items={ data.posts.map(({preview_url,change})=>{
            return(
              <Card img={preview_url} key={change}/>
            )
          })}>
          </Layout>

          
          </>
        }
        
      </div>
    </div>
  )
}

export default Home