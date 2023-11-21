import { useState } from "react";
import cn from 'classnames';
import { MenuProps } from "../shared/menuItem";

export const Menu: React.FC<MenuProps> = (props) => {
    const [clicked, setClicked ] = useState<boolean>(false);

    const toggle = () => setClicked(!clicked);
   // const cls = clicked ? 'container-fluid bg-info': 'container-fluid bg-light'
    const cls = cn('container-fluid', {'bg-info': clicked, 'bg-light': !clicked});

    const navigate = (url: string) => window.open(url);

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className={cls} onClick={toggle}    >
          <a className="navbar-brand" href="#">Corso React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">         
              {
                props.menuItems.map( (menuItem) => {
                        return (
                           <li onClick={() => navigate(menuItem.link)} key={menuItem.key} className="nav-item">
                              <div className="nav-link active" aria-current="page">
                                {menuItem.text}
                              </div>
                           </li>
                        )
                })
              }
            </ul>

            <form onMouseOut={() => setClicked(false)}  onMouseOver={ () => setClicked(true)} className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }