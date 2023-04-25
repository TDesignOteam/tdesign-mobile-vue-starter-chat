import { type Component, markRaw } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import SuggestQuestion from '../modules/SuggestQuestion.vue'
import SeriveScore from '../modules/ServiceScore.vue'
import FeedbackPanel from '../modules/FeedbackPanel.vue'

type User = {
  name: string
  avatar: string
}

export type Message = {
  id: number | string
  type: 'user' | 'robot'
  msg: {
    text: string
    imgUrl?: string
  }
  compontent?: Array<Component>
}

export const robot: User = {
  name: '客服小T',
  avatar: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png'
}

export const user: User = {
  name: '',
  avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4'
}

export const suggestQuestion = markRaw(SuggestQuestion)
export const seriveScore = markRaw(SeriveScore)
export const feedbackPanel = markRaw(FeedbackPanel)

export const mockMessageList: Array<Message> = [
  {
    id: uuidv4(),
    type: 'robot',
    msg: {
      text: '您好！TDesign智能客服为你服务，请输入您的问题。'
    },
    compontent: [suggestQuestion]
  }
]

export const rotbotReply = (item: string): Message => {
  switch (item) {
    case '我要退款':
      return {
        id: uuidv4(),
        type: 'robot',
        msg: {
          text: '请发送您需要退货的订单号。'
        }
      }
    case '如何操作申请退款？':
      return {
        id: uuidv4(),
        type: 'robot',
        msg: {
          text: '您可以根据如下图片指引进行退货申请，如有问题，可以进一步询问：',
          imgUrl: 'https://tdesign.gtimg.com/site/upload1.png'
        }
      }
    case '申请退款':
      return {
        id: uuidv4(),
        type: 'robot',
        msg: {
          text: ''
        },
        compontent: [feedbackPanel]
      }
    case '如何使用TDesign组件库？':
      return {
        id: uuidv4(),
        type: 'robot',
        msg: {
          text: '您可以访问TDesign组件官网进行查看哦，网址如下：https://tdesign.tencent.com/'
        }
      }
    case '订单没有成功，如何解决？':
      return {
        id: uuidv4(),
        type: 'robot',
        msg: {
          text: '您可以检查网络是否通畅，看是否成功下单呢？'
        }
      }
    case '人工客服':
      return {
        id: uuidv4(),
        type: 'robot',
        msg: {
          text: '当前人工客服忙，结束当前会话！'
        },
        compontent: [seriveScore]
      }
    default:
      return {
        id: uuidv4(),
        type: 'robot',
        msg: {
          text: '小T不明白您的意思～请您重新提问'
        }
      }
  }
}
