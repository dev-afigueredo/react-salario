import React, { Component } from 'react';
import { formatNumber } from '../helpers/formatHelpers';

let porcentDescINSS = 0;
let porcentDescIRPF = 0;
let porcentDescSalaryLiq = 0;

export default class InputReadOnly extends Component {
  render() {
    const { baseINSS, baseIRPF, descINSS, descIRPF, salaryLiq } = this.props;

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
      <div>
        <div className="row">
          <div className="input-field col s3">
            <input
              id="baseINSS"
              type="text"
              className="validate"
              value={`R$ ${formatNumber(baseINSS)}`}
              disabled
              readOnly
              style={{ color: 'black', fontWeight: 'Bold' }}
            />
            <label className="active" htmlFor="baseINSS">
              Base INSS:
            </label>
          </div>

          <div className="input-field col s3">
            <input
              id="descINSS"
              type="text"
              className="validate"
              value={`R$ ${formatNumber(descINSS)} (${formatNumber(
                porcentDescINSS
              )}%)`}
              disabled
              readOnly
              style={{ color: '#e67e22', fontWeight: 'Bold' }}
            />
            <label className="active" htmlFor="descINSS">
              Desconto INSS:
            </label>
          </div>

          <div className="input-field col s3">
            <input
              id="baseIRPF"
              type="text"
              className="validate"
              value={`R$ ${formatNumber(baseIRPF)}`}
              disabled
              readOnly
              style={{ color: 'black', fontWeight: 'Bold' }}
            />
            <label className="active" htmlFor="baseIRPF">
              Base IRPF:
            </label>
          </div>

          <div className="input-field col s3">
            <input
              id="descIRPF"
              type="text"
              className="validate"
              value={`R$ ${formatNumber(descIRPF)} (${formatNumber(
                porcentDescIRPF
              )}%)`}
              disabled
              readOnly
              style={{ color: '#c0392b', fontWeight: 'Bold' }}
            />
            <label className="active" htmlFor="descIRPF">
              Desconto IRPF:
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s4">
            <input
              id="salaryLiq"
              type="text"
              className="validate"
              value={`R$ ${formatNumber(salaryLiq)} (${formatNumber(
                porcentDescSalaryLiq
              )}%)`}
              disabled
              readOnly
              style={{ color: 'green', fontWeight: 'Bold' }}
            />
            <label className="active" htmlFor="salaryLiq">
              Salário líquido:
            </label>
          </div>
        </div>
      </div>
    );
  }
}
