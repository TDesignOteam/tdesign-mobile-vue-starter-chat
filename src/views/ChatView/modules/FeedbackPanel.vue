<script lang="ts" setup name="FeedbackPanel">
</script>

<template>
  <div class="feedback-panel">
    <div class="feedback-panel__container">
      <div class="feedback-panel__title">请问您需要进行哪种类型的退款呢？</div>
      <t-button class="feedback-panel__btn" variant="outline" block>个人采购</t-button>
      <t-button class="feedback-panel__btn" variant="outline" block>企业采购</t-button>
      <t-link hover theme="primary">都不是? 手动反馈</t-link>
    </div>
  </div>
</template>

<style lang="less">
.feedback-panel {
  padding: 12px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  &__title {
    width: 100%;
    text-align: left;
    margin-bottom: 12px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.9);
  }

  &__btn {
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 38px;
    margin-bottom: 12px;
  }
}
</style>