import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Container>
             <Link className="navbar-brand" to="/">Sian McGill</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ml-auto">
           <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
           </li>
           <li className="nav-item active">
               <Link className="nav-link" to="/Bag"><i className='fas fa-shopping-cart'></i>Bag</Link>
           </li>
           <li className="nav-item active">
           <Link className="nav-link" to="/Login"><i className='fas fa-user'></i>Login</Link>
          </li>
          </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form>
     </div>
     </Container>
     </nav>
        </header>
    )
}

export default Header
