import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //new Ajax
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }
  //can use constructor instead of arrow function
  /* constructor() {
    super();
    //this.handleIncrement = this.handleIncrement.bind(this);
  } */

  //removed to have a single source of truth, so we dont need the incremented here,
  //just in the parent component
  /*   handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  }; */

  render() {
    console.log('Count - Rendered');
    /* {this.props.children} inside return to pass as children */
    //console.log(this.props);
    //let product = { id: 1 };
    /* () => this.handleIncrement(product) */
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
