import React, {
  Component
} from 'react';

class Comp extends Component {

  state = {
    title: ''
  }



  render() {


    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    function Welcome(props) {
      return <h1>Hello33, {props.name}</h1>;
    }

    const element = (
      <div>
      <h1 style={btnStyle}>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <p style={{ color: `red` }}> { formatName(user) } cc</p>
     
      
    </div>
    );

    const element2 = <Welcome name="Sara" />;

    return (
      <div>
    	<div> ddd { element }</div>
    	<div> <Welcome name="Sara" /></div>
    	</div>
    )
  }
}


const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  cursor: 'pointer',
}


export default Comp;