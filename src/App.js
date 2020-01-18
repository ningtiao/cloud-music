import React from 'react';
import { GlobalStyle } from  './style';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import { IconStyle } from './assets/iconfont/iconfont';
import store from './store/index'
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';
console.log(1)
function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes (routes) }
      </HashRouter>
    </Provider>
  )
}

export default App;