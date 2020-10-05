import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalForm from './Components/Modals/Modal';
import DataTable from './Components/Tables/DataTable';

class App extends Component{

      state = {
        items: []        
      }


      getItems(){
        fetch('http://localhost:8088')
          .then(response => response.json())
          .then(items => this.setState({items}))
          .catch(err => console.log(err))
      }

      addItemToState = (item) => {
        this.setState(prevState => ({
          items: [...prevState.items, item]
        }))
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
                <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
              </Col>
            </Row>
          </Container>
        )
      }
}


export default App;
