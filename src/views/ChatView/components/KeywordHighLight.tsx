import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    originText: {
      type: String,
      default: ''
    },
    keyword: {
      type: String,
      default: ''
    }
  },
  __name: 'KeywordHighLight',
  setup(props) {
    const { keyword, originText } = toRefs(props)

    const markKeyWords = () => {
      if (!keyword.value || keyword.value.length === 0) {
        return <span>{originText.value}</span>
      }
      const regStr = keyword.value.split('').reduce((str, item, index) => {
        if (index === keyword.value.length - 1) {
          return (str += `(${item})`)
        } else {
          return (str += `(${item})|`)
        }
      }, '')

      const reg = new RegExp(regStr)
      const strArr = originText.value.split(reg)
      return strArr.map((item, index) => {
        if (item) {
          if (keyword.value.includes(item)) {
            return (
              <span style={{ color: '#0052D9' }} key={index}>
                {item}
              </span>
            )
          } else {
            return <span key={index}>{item}</span>
          }
        } else {
          return null
        }
      })
    }

    return () => {
      return <div>{markKeyWords()}</div>
    }
  }
})
