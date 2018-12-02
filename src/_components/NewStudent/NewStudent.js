import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table,Badge } from 'reactstrap';
import {Route,Link,NavLink} from 'react-router-dom';
import { FormGroup,Form,Button,Label,Input} from 'reactstrap';
import './NewStudent.css'
import {withRouter} from 'react-router-dom';

class NewStudent extends Component {


  componentDidMount(){
    console.log(this.props);
  }
    addStudent=()=>{
        this.props.addStudent(this.props.student);
      }
    formChanged=(event)=>{
        console.log(event.target)
        switch(event.target.name)
        {
                case 'rollNo':
                  this.props.student.rollNo=event.target.value;
                break;
                case 'name':
                  this.props.student.name=event.target.value;
                break;
                case 'email':
                  this.props.student.email=event.target.value;
                break;
                case 'city':
                  this.props.student.city=event.target.value;
                break;
                case 'mobile':
                  this.props.student.mobile=event.target.value;
                break;
        }
        this.props.editForm(this.props.student);
      }


  render() {
    
    return (
        <div className="NewStudent">
        <Form>
        <FormGroup>
              <Label for="rollNo">Roll No</Label>
              <Input onChange={this.formChanged}type="number" value={this.props.student.rollNo} name="rollNo" id="rollNo" placeholder="Roll No" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input onChange={this.formChanged}type="text" value={this.props.student.name}name="name" id="name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input onChange={this.formChanged}type="email" value={this.props.student.email}name="email" id="email" placeholder="Your Email-Id" />
            </FormGroup>
            <FormGroup>
              <Label for="mobile">Mobile</Label>
              <Input onChange={this.formChanged}type="mobile" value={this.props.student.mobile}name="mobile" id="mobile" placeholder="Your Mobile" />
            </FormGroup><FormGroup>
              <Label for="city">City</Label>
              <Input  onChange={this.formChanged}type="city"value={this.props.student.city} name="city" id="city" placeholder="Your City" />
            </FormGroup>
            <Button onClick={this.addStudent} >Submit</Button>
          </Form>
          </div>
    );
  }
}


const mapStateToProps=state=>{
    return {
      students:state.students,
      student:state.student
    };
  }

  
const mapDispatchToProps=dispatch=>{
    return {
      addStudent:(student)=>dispatch({
        type:'ADD',
        student:student
      }),
      updateStudents:(students)=>dispatch({
        type:'UPDATELIST',
        students:students
      }),
      editForm:(student)=>dispatch({
        type:'EDITED',
        student:student
      }),
      initializeState:(data)=>dispatch({
        type:'INITIALIZE',
        val:data
      })
    }
  }
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewStudent));
