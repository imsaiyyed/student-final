import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table,Badge,Button } from 'reactstrap';
import {Route,Link,NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Students extends Component {

  componentDidMount(){
    console.log(this.props);
  }

    deleteStudent=(rollNo)=>{
        let newStudents=[...this.props.students];
        newStudents.forEach((student,index)=>{
          if(student.rollNo===rollNo){
            newStudents.splice(index,1);
          }
        });
        this.props.updateStudents(newStudents);
      }
  render() {

    let jsxSource=null;
    jsxSource=(
      <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>City</th>
          <th></th>

        </tr>
      </thead>
      <tbody>{
      this.props.students.map(item=>
          <tr key={item.rollNo} >
          {/* onClick={(event)=>{this.editRecord(event,item.rollNo)}} */}
          <th scope="row">{item.rollNo}</th>
          <td>{item.name}</td>
          <td>{item.mobile}</td>
          <td>{item.email}</td>
          <td>{item.city}</td>
          {/* onClick={()=>{this.editStudent(item.rollNo)}} */}
          <td><Link to={{pathname:"/edit/"+item.rollNo}}><Button color="warning" size="sm">Edit</Button></Link>{'  '}
              <Button onClick={()=>{this.deleteStudent(item.rollNo)}} color="danger" size="sm">Delete</Button></td>
        </tr>
      )  
       }
      </tbody>
      </Table>
    );



    return (
      <div >
      
        {jsxSource}        

      </div>
    );
  }
}

const mapStateToProps=state=>{
    return {
      students:state.students
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
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Students));
