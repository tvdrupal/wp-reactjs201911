import React from 'react'
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }


 

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  




  render() {
 

    function ListItem(props) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    //<li key={number.toString()}>{number}</li>
     <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>{listItems}</ul>
  );
}



const numbers = [1, 2, 3, 4, 5,6];
 
  
  return (
      <div style = {warn} >
        <NumberList numbers = {numbers} />
          
      </div>
    );
  }
}

const warn = {
     border: '1px solid #ff0000',
     marginTop:'50px'
       

}
 
export default  List