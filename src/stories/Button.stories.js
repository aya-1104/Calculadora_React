import { Button } from '../components/Button';

export default {
  title: 'Calculator/Button',
  component: Button,
  argTypes: {
    clase: {
      control: { type: 'select' },
      options: ['number', 'operator', 'special'],
    },
    isWide: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
};

export const Number = {
  args: {
    value: '7',
    clase: 'number',
    isWide: false,
  },
};

export const Operator = {
  args: {
    value: '+',
    clase: 'operator',
    isWide: false,
  },
};

export const isWide = {
  args: {
    value: '0',
    clase: 'number',
    isWide: true,
  },
};

export const Special = {
  args: {
    value: '=',
    clase: 'special',
    isWide: false,
  },
};
