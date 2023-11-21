import './App.css';
import { Hello } from './components/Hello';
import { Menu } from './components/Menu';
import { Person } from './components/Person';
import { PersonProps } from './components/personPros';
import { ProductsPage } from './products/ProductsPage';
import { MenuItem } from './shared/menuItem';

function App() {
  const person: PersonProps = {
      gender: "F"
  }

    const menuItems: MenuItem[] = [
      { key:"1", text: 'Home', link: 'http://www.repubblica.it'},
      { key:"2", text: 'Features', link: 'http://www.gazzetta.it'},
      { key:"3", text: 'Pricing', link: 'http://www.google.com'},
      { key:"4", text: 'About', link: 'http://www.microsoft.com'}
    ];

  return (
    <div>
      <Menu menuItems={menuItems}/>
      <header className="App-header">
          <Person gender={person.gender}/>
          <Hello/>
          <ProductsPage/>
      </header>
    </div>
  );
}

export default App;
