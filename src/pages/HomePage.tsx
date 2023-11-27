import { Hello } from "../components/Hello";
import { Person } from "../components/Person";
import { PersonProps } from "../components/personPros";
import { ProductsPage } from "../products/ProductsPage";

export function HomePage(){
    const person: PersonProps = {
        gender: "F"
    }
    return(
        <div>
            <h1>Home Page</h1>
            <header className="App-header">
                <Person gender={person.gender}/>
                <Hello/>
                <ProductsPage/>
        </header>
        </div>
    );
}