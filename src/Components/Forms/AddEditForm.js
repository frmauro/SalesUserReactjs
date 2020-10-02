import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class AddEditForm extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          name: '', 
          email: '', 
          password: '', 
          status: '', 
          userType: ''
      }
  }
  
     
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }

      onClickOption = e => {
        this.setState({[e.target.name]: e.target.value});
      }



    submitFormAdd = e => {
        e.preventDefault();
        //console.log(this.state);
        // fetch('http://localhost:3000/crud', {
        //   method: 'post',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     first: this.state.first,
        //     last: this.state.last,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     location: this.state.location,
        //     hobby: this.state.hobby
        //   })
        // })
        //   .then(response => response.json())
        //   .then(item => {
        //     if(Array.isArray(item)) {
        //       this.props.addItemToState(item[0])
        //       this.props.toggle()
        //     } else {
        //       console.log('failure')
        //     }
        //   })
        //   .catch(err => console.log(err))
      }      




      submitFormEdit = e => {
        e.preventDefault();
        //console.log(this.state);
        // fetch('http://localhost:3000/crud', {
        //   method: 'put',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     id: this.state.id,
        //     name: this.state.name,
        //     email: this.state.email,
        //     password: this.state.password,
        //     status: this.state.status,
        //     userType: this.state.userType
        //   })
        // })
        //   .then(response => response.json())
        //   .then(item => {
        //     if(Array.isArray(item)) {
        //       // console.log(item[0])
        //       this.props.updateState(item[0])
        //       this.props.toggle()
        //     } else {
        //       console.log('failure')
        //     }
        //   })
        //   .catch(err => console.log(err))
      }






      componentDidMount(){
        // if item exists, populate the state with proper data
        if(this.props.item){
          const { name, email, password, status, userType } = this.props.item
          this.setState({ name, email, password, status, userType })
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
                  <Label for="status">Status</Label>
                   <select onChange={this.onClickOption} class="browser-default custom-select" name="status" id="status">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                   </select>
                </FormGroup>

                <FormGroup>
                  <Label for="userType">User Type</Label>
                   <select onChange={this.onClickOption} class="browser-default custom-select" name="userType" id="userType">
                      <option value="Administrator">Administrator</option>
                      <option value="Client">Client</option>
                   </select>
                </FormGroup>

                <Button>Save</Button>
            </Form>

          )
      }
}


export default AddEditForm