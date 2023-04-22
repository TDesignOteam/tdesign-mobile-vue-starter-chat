<script lang="ts" setup name="SuggestQuestion"></script>
<template>
  <div class="suggest-question">
    <div class="suggest-question__title">我猜想您想问如下问题</div>
    <div class="suggest-question__content">
      <div>如何使用Tdesgin组件库</div>
      <div>订单没有成功，如何解决？</div>
      <div>如何操作退款？</div>
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
    
    > div {
      display: flex;
      align-items: center;
      width: 100%;
      height: 48px;
      font-size: 14px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.9);

      &:not(:last-child) {
        border-bottom: 0.5px solid #e7e7e7ff;
      }
    }
  }
}
</style>