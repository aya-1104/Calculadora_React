import { useState } from "react";

/**
 * Custom hook que maneja la lógica principal de una calculadora simple.
 * Controla el display, las operaciones, y la validación de resultados.
 */
export function useCalculator() {

    const [display, setDisplay] = useState('0') // Lo que se muestra en pantalla
    const [storedValue, setStoredValue] = useState(null) // Valor almacenado antes de una operación
    const [operation, setOperation] = useState(null) //Operacion actual
    const [waitOperand, setWaitOperand] = useState(false) // Indica si se debe esperar a un nuevo número tras una operación

    //Agrega un digito al display
    const inputDigit = (digit) => {
        if (display.length >= 9) return
        
        if (waitOperand) {
          setDisplay(digit)
          setWaitOperand(false)
        } else {
          setDisplay(display === '0' ? digit : display + digit)
        }
    }

    // Realiza una operación matemática entre dos valores.
    const calculate = (firstValue, secondValue, operation) => {
        switch(operation) {
          case '+': return firstValue + secondValue
          case '-': return firstValue - secondValue
          case '*': return firstValue * secondValue
          case '/': return firstValue / secondValue
          case '%': return firstValue % secondValue
          default: return secondValue
        }
    }

    //Procesa una operación nueva. Si ya hay una pendiente, calcula el resultado antes.
    const doOperation = (nextOperation) => {
        const inputValue = parseFloat(display);
        
        if (storedValue === null) {
          setStoredValue(inputValue);
        } else if (operation) {
          const result = calculate(storedValue, inputValue, operation);
          let displayResult;
          
          // Manejo especial para divisiones
          if (operation === '/' && Number.isInteger(result) === false) {
            displayResult = formatDecimalResult(result);
          } else {
            displayResult = formatIntegerResult(result);
          }
          
          setDisplay(displayResult);
          setStoredValue(result);
        }
        
        setWaitOperand(true);
        setOperation(nextOperation);
    };

    // Limpia todo el estado de la calculadora.
    const clearDisplay = () => {
        setDisplay('0')
        setStoredValue(null)
        setOperation(null)
        setWaitOperand(false)
    }

    //Formatea resultados enteros, validando límites.
    const formatIntegerResult = (result) => {
        if (result > 999999999 || result.toString().length > 9) {
          return 'ERROR';
        }
        if (result < 0) {
          return 'ERROR';
        }
        return String(result);
    };

    //Formatea resultados decimales, validando límites.
    const formatDecimalResult = (result) => {
        if (result < 0 || result > 999999999) {
          return 'ERROR';
        }

        let resultStr = result.toString();

        // Limitar a 9 caracteres (incluyendo el punto)
        if (resultStr.length > 9) {
          // Contar los dígitos antes del punto
          const integerPart = resultStr.split('.')[0];
          
          // Si la parte entera ya tiene 9 dígitos -> ERROR
          if (integerPart.length >= 9) {
            return 'ERROR';
          }
          
          // Calcular cuántos decimales se pueden mostrar
          const availableDecimals = 8 - integerPart.length;
          resultStr = result.toFixed(availableDecimals).replace(/\.?0+$/, '');
          
        }
      
        return resultStr;
    };
    
    //Cambia el signo del número actual.
    const toggleSign = () => {
        if (display === '0') return
        if (display.startsWith('-')) {
            setDisplay(display.substring(1))
        } else if (display.length < 9) {
            setDisplay('-' + display)
        }
    }

    //Agrega un punto decimal si no existe uno ya.
    const inputDot = () => {
        if (waitOperand) {
          setDisplay('.')
          setWaitOperand(false)
          return
        }
    
        if (!display.includes('.')) {
          setDisplay(display + '.')
        }
    }

    return { display, inputDigit, inputDot, clearDisplay, toggleSign, doOperation}
}
