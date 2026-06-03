import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.scss"
import "./mock/index.ts"
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US';
import 'dayjs/locale/zh-cn';


createRoot(document.getElementById('root')!).render(
    
    <Provider store={store}>
        <ConfigProvider locale={enUS}>
        <App />
      </ConfigProvider>
            
    </Provider>

)
