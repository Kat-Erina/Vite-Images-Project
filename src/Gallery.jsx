import { GlobalContextContainer } from "./Context"
import React from "react";
import { Image } from "./image.JSX";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const Gallery=()=>{
    const {value}=GlobalContextContainer();

    
    const url=`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`

        const result=useQuery({
            queryKey:["items", value], 
            queryFn:()=>axios.get(`${url}&query=${value}`),
            
          })  
    
  

    if(result.isLoading==true){
        return<p>Loading...</p>
    } else
    
    return <div className="gallery">
        {result.data.data.results.map((el)=>{
            const src=el.urls.regular;
            return <Image key={el.id} src={src}/>
        })}
    </div>
}