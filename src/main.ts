import { createApp } from 'vue'
import App from '@/App.vue'
import TDesign from 'tdesign-mobile-vue'
import router from '@/router'
import '@/assets/reset.less'
import '@/index.less'

const app = createApp(App)

app.use(router)
app.use(TDesign);
app.mount('#app')
