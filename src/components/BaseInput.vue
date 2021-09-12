<template>
  <div class="flex flex-col mb-4">
    <label v-if="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full py-2 pl-2 border border-gray-400 rounded-md sm:text-sm"
    />
    <BaseErrorMessage v-if="validation.meta.touched" :id="`${uuid}-error`">
      {{ validation.errorMessage }}
    </BaseErrorMessage>
  </div>
</template>

<script>
import BaseErrorMessage from '@/components/BaseErrorMessage.vue'
import UniqueID from '@/features/UniqueID'

export default {
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    validation: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const uuid = UniqueID().getID()

    return {
      uuid,
    }
  },
}
</script>
