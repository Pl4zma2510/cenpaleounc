import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'

function HeaderAdmin() {
    return (
      <header className="shadow-lg p-2 bg-dark d-flex align-items-center justify-content-between">
          <h1 className="pl-2 text-white"><strong>Cenpaleo</strong> - Registros</h1>
          <div>
          <Link to='/admin'>
             <button className="btn btn-dark border border-white btn-lg p-3">
                 Voltar
             </button>
          </Link>
          </div>
      </header>
       

    );
  }
  
  export default HeaderAdmin;