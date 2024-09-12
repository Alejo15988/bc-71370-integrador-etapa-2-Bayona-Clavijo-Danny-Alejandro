import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss'; // Importa el archivo SCSS aquí

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img className="search-bar__logo-container" src="/img/INFINITOO.png" alt="Logo" />
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">
          Buscar
        </label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
          placeholder="Buscar productos..."
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>
      <div className="search-bar__carrito-container">
        <Link to="carrito">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
