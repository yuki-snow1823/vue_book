<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        {{ test }}
        <ul>
          <slot name="a" />
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // name: 'TestComponent',
  data: function() {
    return {
      test: "Hello!"
    }
  }
}
</script>
