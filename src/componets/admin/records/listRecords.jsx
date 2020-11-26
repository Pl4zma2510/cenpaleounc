import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';
import VisualizarRecords from './visualizarRecords';


function ListUser(props) {

    const renderRows = () => {
        const list = props.list || []
        console.log(list)
        return list.map(registros => (
            <tr key={registros._id} className="bg-white">
                <td><h3 className="m-2 text-dark">{registros.idArtifacts}</h3></td>
                <td><h3 className="m-2 text-dark">{registros.date}</h3></td>
                <td className="d-flex">
                <VisualizarRecords registros={registros} ></VisualizarRecords>
                </td>
            </tr>
        ))
    }

    return (
        <Table className="table table-hover table-dark mb-5">
        <thead className="thead-dark">
            <tr className="shadow border border-dark" >
                 <th scope="col"><h2>Número da Coleção</h2></th>
                 <th scope="col"><h2>Data do Registro</h2></th>
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