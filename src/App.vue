<script setup lang="ts">
import { cards } from "./cards.ts";
import Card from "./components/Card.vue";

const onEditClick = () => {
  window.open('https://github.com/StreakingMan/switch-card-share/edit/master/src/cards.ts', '_blank');
};
</script>

<template>
  <div class="operator">
    <button @click="onEditClick">去编辑</button>
  </div>
  <div class="container">
    <Card v-for="(card, idx) in cards" :key="idx" :meta="card" />
  </div>
</template>

<style scoped>
.operator {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>
