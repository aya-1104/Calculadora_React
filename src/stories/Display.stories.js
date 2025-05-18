import Display from "../components/Display"

export default {
  title: 'Calculator/Display',
  component: Display,
}

export const Default = {
  args: {
    value: '0'
  }
}

export const WithNumber = {
  args: {
    value: '123456789'
  }
}

export const ErrorState = {
  args: {
    value: 'ERROR'
  }
}