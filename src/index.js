import dva from 'dva';
import RouterView from './routes';
import 'antd/dist/antd.css';
const createBrowserHistory = require('history').createBrowserHistory;
// 1. Initialize
const app = dva({
    history: createBrowserHistory()
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./store/models/example').default);

// 4. Router
app.router(RouterView)
// 5. Start
app.start('#root')
