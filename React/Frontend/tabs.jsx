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
      <Tab.Header values = {this.props.values}/>
    );
  }
}

Tab.Header = class Header extends React.Component{
    render(){
        return(
            <div>
                {this.props.values.map(value => <h1>{value["title"]}</h1>)}
            </div>
        );
    }
};

export default Tab;
