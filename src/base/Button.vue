<template>
  <button v-bind="$attrs" :class="[`button button-${type}`, `button-${size}`, { 'button-disabled' : disabled }]"
          :disabled="disabled"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CButton',
  inheritAttrs: false,
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['primary', 'default', 'warning', 'success', 'danger'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['mini', 'default', 'small', 'big'].indexOf(value) !== -1
      }
    },
    disabled: Boolean
  },
  setup (props, { emit }) {
    const handleClick = (e) => {
      emit('click', e)
    }
    return {
      handleClick
    }
  }
}
</script>

<style scoped>
.button {
  @apply px-3 py-2 border border-border1 rounded outline-none text-base
}

.button-small {
  @apply px-2 py-1 text-sm
}

.button-mini {
  @apply px-2 py-1 text-xs
}

.button-big {
  @apply px-4 py-3 text-xl
}

.button-primary {
  @apply bg-primary border-primary text-white hover:opacity-80
}

.button-success {
  @apply bg-success border-success text-white hover:opacity-80
}

.button-warning {
  @apply bg-warning border-warning text-white hover:opacity-80
}

.button-danger {
  @apply bg-danger border-danger text-white hover:opacity-80
}

.button-disabled {
  @apply cursor-not-allowed opacity-40 hover:opacity-40
}
</style>
