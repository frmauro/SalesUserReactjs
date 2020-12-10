import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import BoxMsg from './BoxMsg';
import Dropdown from './Dropdown';


class AddEditForm extends React.Component {

  itemsUserTypes = ["Administrator", "Client"];
  itemsStatus = ["Active", "Inactive"];

   constructor(props){
    super(props);
        this.state = {
          _id: '',
          name: '', 
          email: '', 
          password: '', 
          status: 'Active', 
          userType: 'Administrator',
          shouldHideSuccess: false,
          shouldHideDanger: false,
          message: ''
      };

      this.onClickOption = this.onClickOption.bind(this);
      this.onChange = this.onChange.bind(this);
  }
  
     
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }

      onClickOption = e => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
      }


    submitFormAdd = e => {
        e.preventDefault();
        //console.log('submitFormAdd');

        const vm = JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          status: this.state.status,
          userType: this.state.userType
        })
        //console.log(vm);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: vm
        };

          fetch('http://localhost:8088', requestOptions)
            .then(response => response.json())
            .then(item => {
              if(Array.isArray(item)) {
                //this.setState({message: 'operation completed with success'});
                //this.setState({shouldHideSuccess: true});
                //this.setState({shouldHideDanger: false});
                this.props.toggle(true);
              } else if (item === 'user exists'){
                this.setState({message: 'user exists'});
                this.setState({shouldHideSuccess: false});
                this.setState({shouldHideDanger: true});
              }
            })
            .catch(err => console.log(err))
       }      




      submitFormEdit = e => {
        e.preventDefault();
        //console.log('submitFormEdit');

        const vm = JSON.stringify({
          _id: this.state._id,
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          status: this.state.status,
          userType: this.state.userType
        })
        //console.log(vm);

        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: vm
      };

      //this.props.toggle();

        fetch('http://localhost:8088', requestOptions)
          .then(response => response.json())
          .then(item => {
              this.props.toggle(true);
          })
          .catch(err => console.log(err))

      }


      componentDidMount(){
        // if item exists, populate the state with proper data
        if(this.props.item){
          const { _id, name, email, password, status, userType } = this.props.item
          this.setState({ _id, name, email, password, status, userType })
        }
      };


      render(){
          return(

            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} />
                </FormGroup>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password}  />
                </FormGroup>
                
                <FormGroup>
                  <Dropdown  property={this.state.status} eventHandler={this.onClickOption} name={"status"} id={"status"} items={this.itemsStatus} ></Dropdown>
                </FormGroup>

                <FormGroup>
                  <Dropdown  property={this.state.userType} eventHandler={this.onClickOption} name={"userType"} id={"userType"} items={this.itemsUserTypes} ></Dropdown>
                </FormGroup>

                <BoxMsg message={this.state.message} 
                  isSuccessOpened={this.state.shouldHideSuccess} 
                  isDangerOpened={this.state.shouldHideDanger} 
                ></BoxMsg>
                <Button>Save</Button>
            </Form>

          )
      }
}


export default AddEditForm