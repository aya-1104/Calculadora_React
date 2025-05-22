import Keypad from "../components/Keypad"
import { action } from '@storybook/addon-actions'

export default {
  title: 'Calculator/Keypad',
  component: Keypad,
}

export const Primary = {
    args: {
        onButtonClick: action('button clicked'),
    },
}