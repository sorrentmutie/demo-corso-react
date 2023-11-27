import { useEffect, useState } from "react";
import { Result } from "../shared/randomUser";
import { CardProps } from "../shared/cardProps";
import { Card } from "../components/Card";

export function FeaturesPage() {
    const [results, setResults] = useState<Result[]>([]);

    useEffect( () => {
        async function getData(){
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            setResults(data.results);
            console.log(data.results[0].name.first) 
        }
        getData();
    },[]);

    return (
        <div>
            <h1>Features Page</h1>
            {
                results.map( result => {
                      const cardProps: CardProps = {
                            title: result.name.first + ' ' + result.name.last,
                            description: result.email,
                            image: result.picture.large,
                            link: 'https://www.google.com'
                      }
                      return <Card {...cardProps}></Card>;
                })
            }

        </div>
    );
}