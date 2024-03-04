import Calogo from "../assets/investment-calculator-logo.png"
export default function Header(){
    return (
    <div id="header">
        <img src={Calogo} alt="" />
        <h1>Financial Calculator</h1>
    </div>
    );
}