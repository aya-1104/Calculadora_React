import { useCalculator } from "./useCalculator";
import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('useCalculator', () => {
    it('realiza suma correctamente', () => {
        const { result } = renderHook(() => useCalculator())
    
        act(() => { result.current.inputDigit('5');});
        expect(result.current.display).toBe('5');
        act(() => { result.current.doOperation('+');});
        expect(result.current.display).toBe('5');
        act(() => { result.current.inputDigit('3');});
        expect(result.current.display).toBe('3'); 
        act(() => { result.current.doOperation('=');});
        expect(result.current.display).toBe('8');
    })

    it('no permite más de 9 caracteres en el display', () => {
        const { result } = renderHook(() => useCalculator())

        act(() => { result.current.inputDigit('1');});
        act(() => { result.current.inputDigit('2');});
        act(() => { result.current.inputDigit('3');});
        act(() => { result.current.inputDigit('4');});
        act(() => { result.current.inputDot();});
        act(() => { result.current.inputDigit('5');});
        act(() => { result.current.inputDigit('6');});
        act(() => { result.current.inputDigit('7');});
        act(() => { result.current.inputDigit('8');});
        act(() => { result.current.inputDigit('9');});

        expect(result.current.display).toBe('1234.5678');

        // Verificamos que no acepte más dígitos después de llegar al límite
        act(() => { result.current.inputDigit('0');});
        expect(result.current.display).toBe('1234.5678'); // No cambia
    })

    it('muestra ERROR al superar el límite de 999999999', () => {
        const { result } = renderHook(() => useCalculator())
        
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.doOperation('*');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.inputDigit('9');});
        act(() => { result.current.doOperation('=');});
        
        expect(result.current.display).toBe('ERROR');
    });
})