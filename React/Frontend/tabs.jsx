import React from 'react';

class Tab extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      tabs_index: 0
    };
    // props.values
  }

  render(){
    return (

    );
  }
}

Tab.Header = class Header extends React.Component{
    render(){
        return(
            <div>
                Tab Header
            </div>
        );
    }
}

export default Tab;
