<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    v-bind="$attrs"
    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:text-gray-300 focus:outline-none"
  >
    {{ text }}
  </button>
</template>
