<script setup lang="ts">
import { Card } from "../cards.ts";

defineProps<{
  meta: Card;
}>();
</script>

<template>
  <div class="card">
    <div class="card__name">
      {{ meta.name }}
    </div>
    <div class="card__info">
      <div class="card__owner">
        {{ meta.owner }}
      </div>
      <div>👉</div>
      <div class="card__borrower">
        {{ meta.borrower || "无" }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  &__name {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    margin-top: 16px;
  }

  &__owner {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #666666;
  }

  &__borrower {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #666666;
  }
}
</style>
