<script lang="ts" setup name="TaskTabs">
defineProps({
  list: {
    type: Array,
    default: () => [ '人工客服','咨询订单问题','申请退款','联系售后' ]
  }
})
</script>

<template>
  <div class="task-tabs">
    <div class="task-tabs__container">
      <div class="task-tabs__item" @click="$emit('clickTabs',item)" v-for="(item,index) in list" :key="index">{{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="less">
.task-tabs {
  overflow: hidden;

  &__container {
    width: 100%;
    height: 64px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    flex-shrink: 0;
    margin-right: 8px;
    padding: 9px 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.9);
    background-color: #fff;
    border-radius: 22px;
    border: 1px solid #dcdcdcff;
  }
}
</style>