import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ModalLoginUser from './loginModalUser'


function HeaderUser() {
    return (
      <header className="shadow-lg p-2 bg-dark d-flex align-items-center justify-content-between">
          <h1 className="pl-2 text-white"><strong>Cenpaleo</strong></h1>
          <ModalLoginUser></ModalLoginUser>
      </header>
       

    );
  }
  
  export default HeaderUser;