<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskTabs from '@/views/ChatView/components/TaskTabs.vue'
import KeywordList from '@/views/ChatView/components/KeywordList.vue'
import { mockMessageList, type Message, user, robot, rotbotReply } from './config/index'
import { KEY_WORDSLIST } from './config/constant'

document.title = '专属客服'
const containerRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<HTMLInputElement>()
const inputValue = ref('')
const messgeList = ref<Array<Message>>(mockMessageList)
const init = () => {
  const dom = containerRef.value as HTMLDivElement
  if (dom) {
    setTimeout(() => {
      dom.scrollTo(0, dom.scrollHeight + 100)
    }, 0)
  }
}

const userSpeak = (item: string) => {
  const userMsg: Message = {
    id: Math.random(),
    type: 'user',
    msg: {
      text: item
    }
  }
  messgeList.value.push(userMsg)
  robotSpeak(item)
}

const robotSpeak = (item: string) => {
  const mesInfo = rotbotReply(item)
  messgeList.value.push(mesInfo)
  init()
}

const clickItem = (item: string) => {
  inputValue.value = ''
  userSpeak(item)
}

const sendMsg = () => {
  userSpeak(inputValue.value)
  inputValue.value = ''
  inputRef.value?.blur()
}

const onPressEnter = () => {
  sendMsg()
}

const kewwordList = computed(() => {
  return KEY_WORDSLIST.filter((item) => item.includes(inputValue.value) && inputValue.value.trim())
})
</script>

<template>
  <div class="chat-view">
    <div class="chat-view__container" ref="containerRef">
      <template v-for="item in messgeList" :key="item.id">
        <!-- robot -->
        <div class="chat-view__robot" v-if="item.type === 'robot'">
          <div class="chat-view__robot__avatar">
            <img :src="robot.avatar" />
          </div>
          <div class="chat-view__robot__content">
            <div class="chat-view__robot__name">{{ robot.name }}</div>
            <!-- 机器消息 -->
            <div class="chat-view__robot__msgBox">
              <div class="chat-view__robot__message" v-if="item.msg.text || item.msg.imgUrl">
                <span class="text">{{ item.msg.text }}</span>
                <img class="img" :src="item.msg.imgUrl" alt="" />
              </div>
            </div>
            <!-- 机器人自定义模块 -->
            <div class="chat-view__robot__msgBox" v-if="item.compontent">
              <div class="chat-view__robot__component">
                <Component
                  @onClick="userSpeak"
                  :is="comp"
                  v-for="(comp, index) in item.compontent"
                  :key="index"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 用户 -->
        <div class="chat-view__user" v-if="item.type === 'user'">
          <div class="chat-view__user__content">
            <div class="chat-view__user__name">{{ user.name }}</div>
            <div class="chat-view__user__msgBox">
              <div class="chat-view__user__message">
                <span>{{ item.msg.text }}</span>
              </div>
            </div>
          </div>
          <div class="chat-view__user__avatar">
            <img :src="user.avatar" alt="" />
          </div>
        </div>
      </template>
    </div>
    <div class="chat-view__footer">
      <TaskTabs @clickTabs="userSpeak" />
      <div class="chat-view__footer__keyword" v-if="kewwordList.length > 0">
        <KeywordList :list="kewwordList" @clickItem="clickItem" :keyword="inputValue" />
      </div>
      <div class="chat-view__footer__input__box">
        <input
          @keydown.enter="onPressEnter"
          placeholder="请输入你的问题"
          ref="inputRef"
          v-model="inputValue"
          enterkeyhint="send"
        />
        <t-button :disabled="inputValue.trim().length <= 0" @click="sendMsg">发送</t-button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>
