import { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";
import { Hello2 } from "./Hello2";

export function Hello() {
    // stato del component è espresso da counter
    // Il valore iniziale di counter = 1
    // setCounter è la funzione che incrementa counter
    // useState viene destrutturato in counter e setCounter
    // hook

  const [counter, setCounter] = useState(5);
  const handleClick = () => setCounter(counter + 10);
  return (
    <div>
      <h1>Ciao</h1>
      <Hello2/>
      <Button incrementCounter={handleClick}/>
      <Display testo={counter}/>
    </div>
  )
}

// interface Person {
//   nome: string;
//   cognome: string;
//   eta: number;
// }

// interface Teacher extends Person {
//   materia: string;
// }


// class Persona {
//   constructor(private nome: string, public cognome: string, public eta: number){
//   }

//   getNome(): string {
//     return this.nome;
//   }
// }

// function printName(person: Person): string {
//   return person.nome + " " + person.cognome;
// }


// function myFunction2(){
//   const a = {
//     nome: "Mario",
//     cognome: "Rossi",
//     eta: 30
//   }

//   const b = new Persona("Mario", "Rossi", 30);
//   console.log(b.getNome());

//   const c: Person = {
//     nome: "Luigi",
//     cognome: "Bianchi",
//     eta: 40
//   };

//   console.log(printName(c));


// }

// function myFunction() {
//     // const a: number = 5;
//     // const b = 6;
//     // let b1 = true;
//     // const c = somma(a,b);
//     //let a: number | undefined = undefined;
//      // ...
//      //a = 6;
//      const c = somma(1, 2);
//      console.log(c);
// }

// function somma(a: number | undefined, b: number | undefined): number {
//   if(a && b){
//     return a + b;
//   } 
//   else if( a && !b) {
//     return a;
//   }
//   else if(!a && b){ 
//     return b;
//   }
//   else {
//     return 0;
//   }
// }
 




