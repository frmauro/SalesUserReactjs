import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalForm from './Components/Modals/Modal';
import DataTable from './Components/Tables/DataTable';

import  UserService  from "./userService";

class App extends Component{

      state = {
        items: []        
      }

      getItems(){
         let arrItems = UserService.getAPIServiceInstance().getUsers();
         this.setState({arrItems});
         console.log(arrItems);
      }

      addItemToState = (item) => {
        this.setState(prevState => ({
          items: [...prevState.items, item]
        }))
      }

      gridUserUpdate(){
        window.location.reload()
      }

      componentDidMount(){
        this.getItems()
      }

      render(){
        return(
          <Container className="App">
            <Row>
              <Col>
                <h1 style={{margin: "20px 0"}}>USERS</h1>
              </Col>
            </Row>
            <Row>
          <Col>
            <DataTable items={this.state.items} />
          </Col>
        </Row>
            <Row>
              <Col>
                <ModalForm buttonLabel="Add Item" gridUserUpdate={this.gridUserUpdate} addItemToState={this.addItemToState}/>
              </Col>
            </Row>
          </Container>
        )
      }
}


export default App;
