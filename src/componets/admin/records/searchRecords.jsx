import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function SearchRecords(props) {
    return (
        <div className="w-100 p-5">
           <div className="input-group justify-content-center">
           <input placeholder="Data Inicial" type="date" className="input-lg mr-2 border border-dark"></input>
           <strong className="justify-content-center d-flex align-items-center mr-2">Entre</strong>
           <input placeholder="Data Final" type="date" className="input-lg mr-2 border border-dark"></input>
            <input type="text" maxLength="4" placeholder="Número da Coleção" className="shadow border border-dark mr-2 input-lg"></input>
            </div>
        </div>

    );
  }
  
  export default SearchRecords;