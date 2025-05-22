import { Button } from "./Button"
import './styles/calculator.css'

export default function Keypad({onDigitClick, onOperationClick, onClear, onToggleSign, onDecimalClick}) {
  const buttons = [ { value: 'C', clase: 'special', action: onClear }, { value: '±', clase: 'operator', action: onToggleSign },
    { value: '%', clase: 'operator', action: () => onOperationClick('%') }, { value: '÷', clase: 'operator', action: () => onOperationClick('/') },
    { value: '7', clase: 'number', action: () => onDigitClick('7') },{ value: '8', clase: 'number', action: () => onDigitClick('8') },{ value: '9', clase: 'number', action: () => onDigitClick('9') },{ value: '×', clase: 'operator', action: () => onOperationClick('*') },
    { value: '4', clase: 'number', action: () => onDigitClick('4') }, { value: '5', clase: 'number', action: () => onDigitClick('5') }, { value: '6', clase: 'number', action: () => onDigitClick('6') }, { value: '-', clase: 'operator', action: () => onOperationClick('-') },
    { value: '1', clase: 'number', action: () => onDigitClick('1') }, { value: '2', clase: 'number', action: () => onDigitClick('2') }, { value: '3', clase: 'number', action: () => onDigitClick('3') },{ value: '+', clase: 'operator', action: () => onOperationClick('+') },
    { value: '0', clase: 'number', isWide: true, action: () => onDigitClick('0') },{ value: '.', clase: 'number', action: onDecimalClick },{ value: '=', clase: 'special', action: () => onOperationClick('=') }
  ]
  return (
    <div className='calc-keypad'>
      {buttons.map((button, index) => (
        <Button key={index} value={button.value} clase={button.clase} isWide={button.isWide || false} 
        onClick={button.action}/>
      ))}
    </div>
  )
};