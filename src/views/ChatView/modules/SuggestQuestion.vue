<script lang="ts" setup name="SuggestQuestion">
import { KEY_WORDSLIST } from '../config/constant'

defineProps({
  list: {
    type: Array<string>,
    default: KEY_WORDSLIST
  }
})
</script>
<template>
  <div class="suggest-question">
    <div class="suggest-question__title">我猜想您想问如下问题</div>
    <div class="suggest-question__content">
      <div
        class="suggest-question__item"
        v-for="(item, index) in list"
        :key="index"
        @click="$emit('onClick', item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.suggest-question {
  &__title {
    font-size: 12px;
    line-height: 44px;
    height: 44px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    border-bottom: 0.5px solid #e7e7e7ff;
    box-sizing: border-box;
  }

  &__content {
    padding: 0 16px;
  }

  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.9);

    &:not(:last-child) {
      border-bottom: 0.5px solid #e7e7e7ff;
    }
  }
}
</style>
