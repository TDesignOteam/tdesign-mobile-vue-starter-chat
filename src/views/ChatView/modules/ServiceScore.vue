<script lang="ts" setup name="ServiceScore"></script>

<template>
  <div class="service-socre">
    <div class="service-socre__title">邀请您对本次服务进行评价</div>
    <div class="service-socre__rate">
      <t-rate :count="5" clearable />
    </div>
    <span class="service-socre__tips">未评价</span>
  </div>
</template>

<style scoped lang="less">
.service-socre {
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.9);
  }

  &__rate {
    padding: 12px 0;
  }

  &__tips {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
