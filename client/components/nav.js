import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) =>  
  <nav className="navbar navbar-default navbar-fixed-top">
       <div className="container-fluid text-center">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/category/1">Уроки макияжа</Link></li>
            <li><Link to="/category/2">Косметика</Link></li>
            <li><Link to="/category/3">Пошаговый макияж</Link></li>
            <li><Link to="/category/4">Процедуры по уходу за кожей</Link></li>
            <li><Link to="/category/5">Типы кожи лица</Link></li>
            <li><Link to="/">Видео</Link></li>
            <li className="nav-search">
              <form action="index.html" method="get">
                <label htmlFor="nav_search"><i className="fa fa-search"></i></label>
                <input type="search" value="" id="nav_search" />
                <span></span>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>

export default Nav;
