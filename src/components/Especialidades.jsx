import React from "react";
import "../App.css";
const Especialidades = () => {
  return (
    <div className="body">
      <div className="grid-container">
        <div className="item">
          <a onClick={() => alert("Hola")}><img src="americana.png" alt="" /></a>
        </div>

        <div className="item">
          <img src="especial.png" alt="" />
        </div>

        <div className="item">
          <img src="margarita.png" alt="" />
        </div>

        <div className="item">
          <img src="suprema.png" alt="" />
        </div>

        <div className="item">
          <img src="peperoni.png" alt="" />
        </div>

        <div className="item">
          <img src="americana.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Especialidades);
