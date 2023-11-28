import { useEffect, useState } from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { MenuItem, MenuProps } from './shared/menuItem';
import axios from 'axios';
import { MainNavigation } from './components/MainNavigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect( () => {    
     async function fetchData() {
        const response = await axios.get<MenuItem[]>('http://localhost:4001/menuItems');
        setMenuItems(response.data);
     }
     fetchData();
  },[]);

  const navigate = (url: string) => window.location.href = url;

  const menuProps: MenuProps = {
    menuItems: menuItems,
    onItemClicked: navigate
  }

  return (
    <div>
    <BrowserRouter>
        <Menu {...menuProps}/>
        <MainNavigation/>
    </BrowserRouter>
    </div>
  );
}

export default App;
