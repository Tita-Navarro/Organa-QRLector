import React from "react";
import {Link} from 'react-router-dom';


export default function ListDetails() {
  return (
    <div className="row">
      <div className="col card " >
        <div className="card-header">Asistencias</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="">
            <Link to='/about' className="btn btn-warning">Ver más</Link>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="col card">
        <div className="card-header">Ausencias</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="">
               <Link to='/about' className="btn btn-warning">Ver más</Link>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="col card">
        <div className="card-header">Retardos</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="">
               <Link to='/about' className="btn btn-warning">Ver más</Link>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="col card">
        <div className="card-header">Abandonos</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="">
            <Link to='/about' className="btn btn-warning">Ver más</Link>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
