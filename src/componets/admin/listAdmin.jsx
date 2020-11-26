import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import RemoverAdmin from './removerAdmin';
import VisualizarAdmin from './visualizarAdmin';
import EditarAdmin from './editarAdmin';
import { Table } from 'react-bootstrap';

function ListAdmin(props) {
    
    const renderRows = () => {
        const list = props.list || []
        console.log(list)
        return list.map(artefatos => (
            <tr key={artefatos._id} className="bg-white">
                <td><h3 className="m-2 text-dark size-25">{artefatos.numCollection}</h3></td>
                <td><h3 className="m-2 text-dark">{artefatos.name}</h3></td>
                <td><h3 className="m-2 text-dark">{artefatos.collec}</h3></td>
                <td className="d-flex">
                <VisualizarAdmin id={artefatos._id} view={props.view} vizualizar={props.vizualizar}></VisualizarAdmin>
                <EditarAdmin id={artefatos._id} view={props.view} vizualizar={props.vizualizar} editar={props.editar}></EditarAdmin>
                <RemoverAdmin id={artefatos._id} remover={props.remover}></RemoverAdmin>
                </td>
            </tr>
        ))
    }
    return (
             <Table className="table table-hover table-dark mb-5">
                <thead className="thead-dark">
                    <tr className="shadow border border-dark">
                         <th scope="col"><h2>Número da Coleção</h2></th>
                         <th scope="col"><h2>Nome</h2></th>
                         <th scope="col"><h2>Coleção</h2></th>
                         <th scope="col"><h2>Interação</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
              </Table>

    );
  }
  
  export default ListAdmin;