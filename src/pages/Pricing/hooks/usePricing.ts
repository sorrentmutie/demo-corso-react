import { useEffect, useState } from "react";
import { Building } from "../models/building";
import axios from "axios";

export function usePricing(){
    const [buildings, setBuildings]= useState<Building[]>([]);
    useEffect( () => {
        async function getData(){
            const response = await axios.get<Building[]>('http://localhost:4001/buildings');
            const data = response.data;
            setBuildings(data);
        }
        getData();
     },[]);
    return {buildings}
}