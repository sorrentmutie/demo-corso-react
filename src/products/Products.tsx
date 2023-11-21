import { ProductProps } from "./products-props";

export function Products(props: ProductProps) 
{
   return (
     <h3> Ci sono {props.value} prodotti</h3>
   )
}

export const  Products2: React.FC<ProductProps> = (props) => 
         <h3> Ci sono {props.value} prodotti</h3>
