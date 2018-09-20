import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters - Rendered');
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
//key cant be acessed, just by react
/* return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            <h4>Counter #{counter.id}</h4> can pass as a children
          </Counter>
        ))}
      </div>
    ); */

export default Counters;
