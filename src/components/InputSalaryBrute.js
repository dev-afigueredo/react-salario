import React, { Component } from 'react';

export default class InputSalaryBrute extends Component {
  handleInputSalary = (event) => {
    const newSalary = event.target.value;

    this.props.onChanceSalary(newSalary);
  };
  render() {
    const { salaryBrute } = this.props;
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="salaryBrute"
            type="number"
            className="validate"
            value={salaryBrute}
            onChange={this.handleInputSalary}
            autoFocus
          />
          <label className="active" htmlFor="salaryBrute">
            Salário bruto:
          </label>
        </div>
      </div>
    );
  }
}
