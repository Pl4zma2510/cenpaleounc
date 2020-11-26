import React, { Component }  from 'react';
import Axios from 'axios';

// User Components
import HeaderUser from '../componets/user/headerUser';
import SearchUser from '../componets/user/searchUser';
import ListUser from '../componets/user/listUser';
import FooterUser from '../componets/user/footerUser';

const URL = "http://localhost:8080/"

export default class UserPage extends Component{

  constructor(props) {
    super(props)
    this.state = {list: [], view: []}
    this.vizualizar = this.vizualizar.bind(this)
    this.categoria = this.categoria.bind(this)
    this.nome = this.nome.bind(this)
    this.refresh = this.refresh.bind(this)


    this.refresh()
  }

  refresh() {
    Axios.get(`${URL}?sort=-createdAt`)
    .then(resp => this.setState({...this.state, list: resp.data['artefatos']}))
  }

  categoria(cat) {
      Axios.get(`${URL}categoria/${cat}`)
      .then(resp => this.setState({...this.state, list: resp.data['artefatos']}))
  }

  nome(nome) {
    Axios.get(`${URL}nome/${nome}`)
    .then(resp => this.setState({...this.state, list: resp.data['artefatos']}))
    .catch(error => {
    });
  }

  vizualizar(id){
    Axios.get(`${URL}${id}`)
    .then(resp => this.setState({...this.state, view: resp.data['artefato']}))
  }
  
  render(){
  return (
   <div>
     <HeaderUser></HeaderUser>

     <SearchUser
     categoria={this.categoria}
     nome={this.nome}
     refresh={this.refresh}></SearchUser>

     <ListUser
     list={this.state.list}
     vizualizar={this.vizualizar}
     view={this.state.view}></ListUser>

     <FooterUser></FooterUser>
  </div>  
    )
  }
}
