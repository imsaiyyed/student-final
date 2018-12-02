import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table,Badge,Button } from 'reactstrap';
import {Route,Link,NavLink} from 'react-router-dom';
import Students from '../Students/Students';
import NewStudent from '../NewStudent/NewStudent';
import EditStudent from '../EditStudent/EditStudent';

class Home extends Component {

  componentDidMount(){
    console.log(this.props);
  }
  render() {

    
    return (
      <div >
      
      <header>
          <nav>
            <Link to="/students">Students</Link>
            <Link to="/form">New Student</Link>
          </nav>
      </header>
        
        <Route path='/students' exact render={()=><Students {...this.props}/>} />
        <Route path='/form' exact render={()=><NewStudent {...this.props}/>}/>
        <Route path='/edit/:id' exact render={()=><EditStudent {...this.props}/>}/>
{/* render={()=><Students {...this.props}/>} */}
      </div>
    );
  }
}

export default Home;
