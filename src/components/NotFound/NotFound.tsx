import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => {
  return (
    <div className="not_found">
      <h1>404</h1>
      <div className="oups">
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/home" className="home">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
