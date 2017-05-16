import React from 'react';
import { Link } from 'react-router-dom';

export default (props) =>  
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
            <li><a href="/">Главная</a></li>
            <li><a href="/lessons">Уроки макияжа</a></li>
            <li><a href="#">Косметика</a></li>
            <li><a href="#">Пошаговый макияж</a></li>
            <li><a href="#">Процедуры по уходу за кожей</a></li>
            <li><a href="#">Типы кожи лица</a></li>
            <li><a href="video.html">Видео</a></li>
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
