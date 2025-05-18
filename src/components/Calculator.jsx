import Keypad from "./Keypad";
import Display from "./Display";
import './styles/calculator.css';

export default function Calculator() {
  return (
    <div className="container">
        <div className="calc">
            <Display value={""}/>
            <Keypad onButtonClick={""}/>
        </div>
    </div>
  )
}
