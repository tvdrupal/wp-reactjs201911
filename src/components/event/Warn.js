import React from 'react'
class Warn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }



  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }



  render() {



    return (
      <div style = {warn} >
        <WarningBanner  warn={this.state.showWarning} />  
        <button onClick={this.handleToggleClick}>
          hide or show: {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );



    function WarningBanner(props) {
      if (!props.warn) {
        return null;
      }
      return (
        <div className="warning">  Warning!  </div>
      );

    }



  }



}

const warn = {
  border: '1px solid #ff0000',
  marginTop: '50px'


}

export default Warn