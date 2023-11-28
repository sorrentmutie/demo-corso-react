import { useEffect, useState } from "react";
import { Result } from "../shared/randomUser";
import axios from "axios";

export function useFeatures() {
    const [results, setResults] = useState<Result[]>([]);
    useEffect( () => {
 
         // qui inizia la chiamat http
         async function getData(){
             //const response = await fetch('https://randomuser.me/api/?results=10');
             //const data = await response.json();
 
             const response = await axios.get('https://randomuser.me/api/?results=10');
             const data = response.data;
            // qui arriva il dato
             setResults(data.results);
         }
         getData();
     },[]);
     return {
        results
     }
}