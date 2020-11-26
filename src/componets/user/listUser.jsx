import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import VisualizarUser from './visualizarUser';
import { Table } from 'react-bootstrap';

function ListUser(props) {

    const renderRows = () => {
        const list = props.list || []
        return list.map(artefatos => (
            <tr key={artefatos._id} className="bg-white">
                <td><h3 className="m-2 text-dark size-25">{artefatos.image}</h3></td>
                <td><h3 className="m-2 text-dark">{artefatos.category}</h3></td>
                <td><h3 className="m-2 text-dark">{artefatos.name}</h3></td>
                <td className="d-flex">
                <VisualizarUser id={artefatos._id} view={props.view} vizualizar={props.vizualizar} ></VisualizarUser>
                </td>
            </tr>
        ))
    }


    return (
             <Table className="table table-hover table-dark mb-5">
                <thead className="thead-dark">
                    <tr className="shadow border border-dark" >
                         <th scope="col"><h2>Imagem</h2></th>
                         <th scope="col"><h2>Categoria</h2></th>
                         <th scope="col"><h2>Nome</h2></th>
                         <th scope="col"><h2>Interação</h2></th>
                    </tr>
                </thead>
                <tbody>
                         {renderRows()}
                </tbody>
              </Table>

    );
  }
  
  export default ListUser;