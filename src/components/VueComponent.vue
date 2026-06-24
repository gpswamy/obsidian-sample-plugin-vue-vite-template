<template>
  <div class="my-plugin-container">
    <h3>Hello from Vue!</h3>
    <p>This is a sample Vue component running inside an Obsidian plugin.</p>
    <p>The current count is: {{ count }}</p>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function increment() {
	count.value++;
}
</script>
