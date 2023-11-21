import { Empty } from "./Empty";
import { Products2 } from "./Products";

export function ProductsPage(){
     const products: number = 3;
     const renderMessage = () => {
        return products === 0 ?
            <Empty/>:
            <Products2 value={products}/>
     }
     return (
            <div style={{color: 'red'}}>
                {renderMessage()}
            </div>
     )
}