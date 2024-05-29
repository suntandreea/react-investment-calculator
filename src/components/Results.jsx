import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({form}) {

  const results = calculateInvestmentResults(form);
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      {results.map(res => {
        const totalInterest = res.valueEndOfYear - res.annualInvestment * res.year - initialInvestment;
        const investedCapital = res.valueEndOfYear - totalInterest;
          return <tr key={res.year}>
            <td>{res.year}</td>
            <td>{formatter.format(res.valueEndOfYear)}</td>
            <td>{formatter.format(res.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
        }
      )}
      </tbody>
    </table>
  );
}
