import Keypad from "./Keypad"
import Display from "./Display"
import './styles/calculator.css'
import { useCalculator } from "../hooks/useCalculator"

export default function Calculator() {
  const {display, inputDigit, inputDot, clearDisplay, toggleSign, doOperation} = useCalculator()
  
  return (
    <div className="container">
        <div className="calc">
            <Display value={display}/>
            <Keypad onDigitClick={inputDigit} onOperationClick={doOperation} onClear={clearDisplay}
            onToggleSign={toggleSign} onDecimalClick={inputDot}/>
        </div>
    </div>
  )
}