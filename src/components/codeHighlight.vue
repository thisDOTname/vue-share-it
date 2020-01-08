<template>
  <v-container>
    <v-layout>
      <v-flex class="align-left" xs12>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      }),
};
</script>

<style scoped>
@import './../assets/highlight.css';

.align-left {
  text-align: left;
}
</style>
