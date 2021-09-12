<template>
  <input
    type="radio"
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue === value"
    :id="uuid"
  />
  <label v-if="label" :for="uuid">
    {{ label }}
  </label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import BaseErrorMessage from '@/components/BaseErrorMessage.vue'
import UniqueID from '@/features/UniqueID'
import SetupFormComponent from '@/features/SetupFormComponent'

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
    },
    error: {
      type: String,
      default: '',
    },
  },
  components: {
    BaseErrorMessage,
  },
  setup(props, context) {
    const uuid = UniqueID().getID()
    const { updateValue } = SetupFormComponent(props, context)
    return {
      updateValue,
      uuid,
    }
  },
}
</script>
