<template>
  <p class="text-red-500" aria-live="assertive" :id="id">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>
