import React, { Component }  from 'react';
import Axios from 'axios';

// User Components
import HeaderRecords from '../componets/admin/records/headerRecords';
import SearchRecords from '../componets/admin/records/searchRecords';
import ListRecords from '../componets/admin/records/listRecords';
import FooterRecords from '../componets/admin/records/footerRecords';

const URL = "http://localhost:8080/"

export default class RecordsPage extends Component{

  constructor(props) {
    super(props)
    this.state = {list: [], view: []}

    this.refresh()
  }

  refresh() {
    Axios.get(`${URL}records?sort=-createdAt`)
    .then(resp => this.setState({...this.state, list: resp.data['records']}))
  }
  
  render(){
  return (
   <div>
     <HeaderRecords></HeaderRecords>

     <SearchRecords></SearchRecords>

     <ListRecords
     list={this.state.list}></ListRecords>

     <FooterRecords></FooterRecords>
  </div>  
    )
  }
}
