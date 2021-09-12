import { defineRule } from 'vee-validate'
import { regex, required, email, min, numeric, min_value, max_value } from '@vee-validate/rules'

export default {
  install: () => {
    defineRule('required', required)
    defineRule('regex', regex)
    defineRule('email', email)
    defineRule('min', min)
    defineRule('numeric', numeric)
    defineRule('min_value', min_value)
    defineRule('max_value', max_value)
  }
}