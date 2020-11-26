import React, { Component } from 'react';
import Axios from 'axios';

// Admin Components
import HeaderAdmin from '../componets/admin/headerAdmin';
import SearchAdmin from '../componets/admin/searchAdmin';
import ListAdmin from '../componets/admin/listAdmin';
import FootAdmin from '../componets/admin/footerAdmin';

const URL = "http://localhost:8080/"

export default class AdminPage extends Component{

  constructor(props) {
    super(props)
    this.state = {list: [], view: []}
    
    this.editar = this.editar.bind(this)
    this.adicionar = this.adicionar.bind(this)
    this.vizualizar = this.vizualizar.bind(this)
    this.remover = this.remover.bind(this)
    this.colecao = this.colecao.bind(this)
    this.numero = this.numero.bind(this)
    this.refresh = this.refresh.bind(this)

    this.refresh()
  } 

  refresh() {
    Axios.get(`${URL}?sort=-createdAt`)
    .then(resp => this.setState({...this.state, list: resp.data['artefatos']}))
  }

  adicionar(numCollection,name,image,collec,category,description,origin,cenpaleo,location_in_cenpaleo,collector){
    Axios.post(URL,{ numCollection, name, image, collec,
    category, description, origin, cenpaleo, location_in_cenpaleo, collector})
    .then(resp => this.refresh())
  }

  editar(id,numCollection,name,image,collec,category,description,origin,cenpaleo,location_in_cenpaleo,collector,description_r){
    Axios.put(`${URL}${id}`,{numCollection,name,image,collec,
    category,description,origin,cenpaleo,location_in_cenpaleo,collector,description_r})
    .then(resp => this.refresh())
  }
  
  vizualizar(id){
    Axios.get(`${URL}${id}`)
    .then(resp => this.setState({...this.state, view: resp.data['artefato']}))
  }

  remover(id){
     const description_r = 'Artefato Excluido'
     Axios.delete(`${URL}${id}`,{description_r}).then(resp => this.refresh())
  }

  colecao(col) {
    Axios.get(`${URL}Collec/${col}`)
    .then(resp => this.setState({...this.state, list: resp.data['artefatos']}))
  }

  numero(num) {
  Axios.get(`${URL}numCollec/${num}`)
  .then(resp => this.setState({...this.state, list: resp.data['artefatos']}))
  .catch(error => {
  });
  }

  render(){
  return (
   <div>
     <HeaderAdmin></HeaderAdmin>

     <SearchAdmin
     adicionar={this.adicionar}
     colecao={this.colecao}
     numero={this.numero}
     refresh={this.refresh}></SearchAdmin>

     <ListAdmin
     list={this.state.list}
     vizualizar={this.vizualizar}
     view={this.state.view}
     remover={this.remover}
     editar={this.editar}></ListAdmin>

     <FootAdmin></FootAdmin>
  </div>  
    )
  }
}

