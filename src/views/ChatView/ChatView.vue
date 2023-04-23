<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { mockMessageList } from './config/index'

document.title = '专属客服'
const containerRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<HTMLInputElement>()
const messgeList = ref(mockMessageList)
const init = () => {
  const dom = containerRef.value as HTMLDivElement
  if (dom) {
    setTimeout(() => {
      dom.scrollTo(0, 100000)
    }, 200)
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="chat-view">
    <div class="chat-view__container" ref="containerRef">
      <template v-for="item in messgeList" :key="item.id">
        <!-- robot -->
        <div class="chat-view__robot" v-if="item.type === 'robot'">
          <div class="chat-view__robot__avatar">
            <img :src="item.identity.avatar" />
          </div>
          <div class="chat-view__robot__content">
            <div class="chat-view__robot__name">{{ item.identity.name }}</div>
            <!-- 机器消息 -->
            <div class="chat-view__robot__msgBox">
              <div class="chat-view__robot__message">
                <span class="text">{{ item.msg.text }}</span>
                <t-image
                  class="img"
                  v-if="item.msg.imgUrl"
                  fit="fill"
                  :src="item.msg.imgUrl"
                ></t-image>
              </div>
            </div>
            <!-- 机器人自定义模块 -->
            <div class="chat-view__robot__msgBox" v-if="item.compontent">
              <div class="chat-view__robot__component">
                <Component :is="comp" v-for="(comp, index) in item.compontent" :key="index" />
              </div>
            </div>
          </div>
        </div>
        <!-- 用户 -->
        <div class="chat-view__user" v-if="item.type === 'user'">
          <div class="chat-view__user__content">
            <div class="chat-view__user__name">{{ item.identity.name }}</div>
            <div class="chat-view__user__msgBox">
              <div class="chat-view__user__message">
                <span>{{ item.msg.text }}</span>
              </div>
            </div>
          </div>
          <div class="chat-view__user__avatar">
            <img :src="item.identity.avatar" alt="" />
          </div>
        </div>
      </template>
    </div>
    <div class="chat-view__footer">
      <div></div>
      <div class="chat-view__footer__input__box">
        <input type="" placeholder="请输入你的问题" ref="inputRef"  />
        <button disabled>发送</button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>
