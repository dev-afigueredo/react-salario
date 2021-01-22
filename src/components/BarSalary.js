import React, { Component } from 'react';

export default class BarSalary extends Component {
  render() {
    const { barSalary, barDescINSS, barDescIRPF } = this.props;
    return (
      <>
        <div style={{ width: barDescINSS + '%', backgroundColor: '#e67e22' }}>
          <span style={{ color: '#e67e22' }}>-</span>
        </div>
        <div style={{ width: barDescIRPF + '%', backgroundColor: '#c0392b' }}>
          <span style={{ color: '#c0392b' }}>-</span>
        </div>
        <div style={{ width: barSalary + '%', backgroundColor: '#16a085' }}>
          <span style={{ color: '#16a085' }}>-</span>
        </div>
      </>
    );
  }
}
