import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal';


class DataTable extends Component{


    render() {

        const items = this.props.items.map(item => {
          return (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.status}</td>
              <td>{item.userType}</td>
            </tr>
            )
          })
    
        return (
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>STATUS</th>
                <th>USERTYPE</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </Table>
        )
      }
}

export default DataTable