import {calculateInvestmentResults , formatter} from "../util/investment.js"
export default function Result({input})
{
    let dataResults = calculateInvestmentResults(input);
    const initialInvestment= dataResults[0].interest-dataResults[0].annualInvestment
   return <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataResults.map(yearData=>{
          const totalInterest = yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment
          const investedCapital = yearData.valueEndOfYear-totalInterest;
          return (<tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>)
        })}
      </tbody>
    </table>
    
}