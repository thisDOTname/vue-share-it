<template>
  <div class="vue-share-it-button" :class="{'dark': dark, 'light': !dark, 'dense': dense}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'share-button',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.vue-share-it-button {
  padding: 1em;
  margin: 0 0.5em;
  display: inline-flex;
  font-size: 0.875rem;
  box-shadow: none;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  flex: 0 0 auto;
  justify-content: center;
  max-width: 100%;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.light {
  background: #f5f5f5;
  color: rgba(0, 0, 0, 0.87);
}

.dark {
  background: #212121 !important;
  color: #ffffff !important;
}

.dense {
  padding: 0.5em !important;
}

.vue-share-it-button label {
  padding: 0 0.5em;
  cursor: pointer;
}

</style>