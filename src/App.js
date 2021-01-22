import React, { Component } from 'react';
import InputSalaryBrute from './components/InputSalaryBrute';
import InputReadOnly from './components/InputReadOnly';
import { calculateSalaryFrom } from './helpers/salary';
import BarSalary from './components/BarSalary';

let porcentDescINSS = 0;
let porcentDescIRPF = 0;
let porcentDescSalaryLiq = 0;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salaryBrute: '',
      baseINSS: 0,
      descINSS: 0,
      baseIRPF: 0,
      descIRPF: 0,
      salaryLiq: 0,
    };
  }

  handleChanceSalary = (newSalary) => {
    const fullSalary = calculateSalaryFrom(newSalary);

    this.setState({
      salaryBrute: newSalary,
      baseINSS: fullSalary.baseINSS,
      descINSS: fullSalary.discountINSS,
      baseIRPF: fullSalary.baseIRPF,
      descIRPF: fullSalary.discountIRPF,
      salaryLiq: fullSalary.netSalary,
    });
  };

  render() {
    const {
      salaryBrute,
      baseINSS,
      baseIRPF,
      descINSS,
      descIRPF,
      salaryLiq,
    } = this.state;

    if (baseINSS !== 0) {
      porcentDescINSS = (descINSS / baseINSS) * 100;
      porcentDescIRPF = (descIRPF / baseINSS) * 100;
      porcentDescSalaryLiq = (salaryLiq / baseINSS) * 100;
    } else {
      porcentDescINSS = 0;
      porcentDescIRPF = 0;
      porcentDescSalaryLiq = 0;
    }

    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <InputSalaryBrute
          salaryBrute={salaryBrute}
          onChanceSalary={this.handleChanceSalary}
        />
        <InputReadOnly
          baseINSS={baseINSS}
          baseIRPF={baseIRPF}
          descINSS={descINSS}
          descIRPF={descIRPF}
          salaryLiq={salaryLiq}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <BarSalary
            barSalary={porcentDescSalaryLiq}
            barDescINSS={porcentDescINSS}
            barDescIRPF={porcentDescIRPF}
          />
        </div>
      </div>
    );
  }
}
