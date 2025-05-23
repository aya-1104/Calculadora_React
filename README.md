# Proyecto de Calculadora con Vite + React

## Características

- Operaciones básicas: suma, resta, multiplicación, división y modulo.
- Soporte para punto decimal y cambio de signo.
- Lógica encapsulada en un hook (`useCalculator`).
- Pruebas unitarias con Vitest.
- Storybook para vista previa de componentes y documentación visual.
- Diseño responsive y accesible. 

## Características Especiales

- Límite de 9 dígitos en pantalla
- Manejo de errores (overflow, división por cero)
- Botón de limpiar (C)

# Componentes

- Display: Muestra los números y resultados
- Button: Botones interactivos reutilizables
- Keypad: Distribución de teclas
- useCalculator: Lógica principal, custom hook

## Tecnologías Utilizadas

- React
- Vite
- Storybook
- Vitest
- Testing Library

## Cómo Ejecutar el Proyecto

```bash
git clone https://github.com/aya-1104/Calculadora_React.git
cd Calculadora_React
npm install
```
```bash
npm run dev	
```
Inicia la app en desarrollo (http://localhost:5173)

```bash
npm run storybook
```
Abre Storybook (http://localhost:6006)

```bash
npm test	
```
Ejecuta tests



