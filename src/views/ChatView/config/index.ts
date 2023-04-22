import { type Component, markRaw } from 'vue'
import SuggestQuestion from '../components/SuggestQuestion.vue'

type User = {
  name: string
  avatar: string
}

type Message = {
  id: number
  type: 'user' | 'robot'
  identity: User
  msg: {
    text: string
    imgUrl?: string
  }
  compontent?: Array<Component>
}

export const robt: User = {
  name: '客服小T',
  avatar: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png'
}

export const user: User = {
  name: '',
  avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4'
}

const suggestQuestion = markRaw(SuggestQuestion)

export const mockMessageList: Array<Message> = [
  {
    id: 1,
    type: 'robot',
    identity: robt,
    msg: {
      text: '您好！TDesign智能客服为你服务，请输入您的问题。'
    },
    compontent: [suggestQuestion]
  },
  {
    id: 2,
    type: 'user',
    identity: user,
    msg: {
      text: '我要退款！'
    }
  }
]
