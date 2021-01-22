function percentage(value) {
  let porcentDescINSS = 0;
  let porcentDescIRPF = 0;
  let porcentDescSalaryLiq = 0;
  if (value !== 0) {
    porcentDescINSS = (descINSS / baseINSS) * 100;
    porcentDescIRPF = (descIRPF / baseINSS) * 100;
    porcentDescSalaryLiq = (salaryLiq / baseINSS) * 100;
  } else {
    porcentDescINSS = 0;
    porcentDescIRPF = 0;
    porcentDescSalaryLiq = 0;
  }

  return { porcentDescINSS, porcentDescIRPF, porcentDescSalaryLiq };
}

export { percentage };
