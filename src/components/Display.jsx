import './styles/display.css';
import './styles/calculator.css';

export default function Display ({value})  {
  return (
    <div className="calc-display">
        {value}
    </div>
  )
}

