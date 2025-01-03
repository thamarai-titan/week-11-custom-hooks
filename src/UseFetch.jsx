import {useEffect, useState} from 'react'

export function UseFetch(){

    const [data, setData] = useState(null);

    async function getData(url) {
        const response = await fetch(url);
        const result = await response.json();
        setData(result)
        
    }
    const [state,useState] = useState();

    useEffect(()=>{
        getData();
    },[])

    return {
        data:data
    }

}