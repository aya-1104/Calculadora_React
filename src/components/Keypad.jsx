import { Button } from "./Button";
import './styles/calculator.css';

export default function Keypad({onButtonClick}) {
    const buttons = [{ value: 'C', clase: 'special' }, { value: '±', clase: 'operator' },{ value: '%', clase: 'operator' },
      { value: '÷', clase: 'operator' },{ value: '7', clase: 'number' },{ value: '8', clase: 'number' },{ value: '9', clase: 'number' },{ value: '×', clase: 'operator' },{ value: '4', clase: 'number' },
      { value: '5', clase: 'number' },{ value: '6', clase: 'number' },{ value: '-', clase: 'operator' },{ value: '1', clase: 'number' },{ value: '2', clase: 'number' },{ value: '3', clase: 'number' },
      { value: '+', clase: 'operator' },{ value: '0', clase: 'number', isWide: true },{ value: '.', clase: 'number' },{ value: '=', clase: 'special' }
    ];
  
    return (
      <div className='calc-keypad'>
        {buttons.map((button, index) => (
          <Button key={index} value={button.value} clase={button.clase} isWide={button.isWide || false} 
          onClick={() => onButtonClick(button.value)}/>
        ))}
      </div>
    )
}