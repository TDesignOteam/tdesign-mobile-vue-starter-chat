<script lang="ts" setup name="KeywordList">
import KeywordHighLight from './KeywordHighLight'

defineProps({
  list: {
    type: Array<string>,
    default: () => []
  },
  keyword: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="keyword_list">
    <div class="keyword_list__item" v-for="(item, index) in list" :key="index">
      <KeywordHighLight :originText="item" :keyword="keyword" @click="$emit('clickItem', item)" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.keyword_list {
  padding: 0 16px;

  &__item {
    padding: 12px 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.9);

    &:not(:last-child) {
      border-bottom: 0.5px solid #e7e7e7ff;
    }
  }
}
</style>
