DvaJS

安装 dva-cli
通过 npm 安装 dva-cli 并确保版本是 0.9.1 或以上。
npm install -g dva-cli
# 或
yarn global add dva-cli
$ dva -v
dva-cli version 0.9.1

#创建新应用
安装完 dva-cli 之后，就可以在命令行里访问到 dva 命令（不能访问？）。现在，你可以通过 dva new 创建新应用。
$ dva new dva-quickstart

这会创建 dva-quickstart 目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。
然后我们 cd 进入 dva-quickstart 目录，并启动开发服务器：
$ cd dva-quickstart
$ npm start

几秒钟后，你会看到以下输出：
Compiled successfully!

The app is running at:

  http://localhost:8000/

Note that the development build is not optimized.
To create a production build, use npm run build.

在浏览器里打开 http://localhost:8000 ，你会看到 dva 的欢迎界面。
#使用 antd
通过 npm 安装 antd 和 babel-plugin-import 。babel-plugin-import 是用来按需加载 antd 的脚本和样式的，详见 repo 。
$ npm install antd babel-plugin-import --save

编辑 .webpackrc，使 babel-plugin-import 插件生效。
{
+  "extraBabelPlugins": [
+    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
+  ]
}

注：dva-cli 基于 roadhog 实现 build 和 dev，更多 .webpackrc 的配置详见 roadhog#配置
目录结构
项目初始化以后，默认的目录结构如下：
|- mock
|- node_modules
|- package.json
|- public
|- src
    |- asserts
    |- components
    |- models
    |- routes
    |- services
    |- utils
    |- router.js
    |- index.js
    |- index.css
|- .editorconfig
|- .eslintrc
|- .gitignore
|- .roadhogrc.mock.js
|- .webpackrc

mock 存放用于 mock 数据的文件；
public 一般用于存放静态文件，打包时会被直接复制到输出目录(./dist)；
src 文件夹用于存放项目源代码；
asserts 用于存放静态资源，打包时会经过 webpack 处理；
components 用于存放 React 组件，一般是该项目公用的无状态组件；
models 用于存放模型文件
routes 用于存放需要 connect model 的路由组件；
services 用于存放服务文件，一般是网络请求等；
utils 工具类库
router.js 路由文件
index.js 项目的入口文件
index.css 一般是共用的样式
.editorconfig 编辑器配置文件
.eslintrc ESLint配置文件
.gitignore Git忽略文件
.roadhogrc.mock.js Mock配置文件
.webpackrc 自定义的webpack配置文件，JSON格式，如果需要 JS 格式，可修改为 .webpackrc.js
CSS Modules
使用 dva-cli 初始化的项目默认已经启用了 CSS Modules，如果不想使用 CSS Modules，在 .webpackrc 中添加以下配置项即可禁用：
{
  "disableCSSModules": true
}
 version 0.9.1
开发代理
如需开发过程中代理 API 接口，在 .webpackrc 中添加如下配置即可：
{
  "proxy": {
    "/api": {
      "target": "http://your-api-server",
      "changeOrigin": true
    }
  }
}
HMR
HMR，即模块热替换，在修改代码后不需要刷新整个页面，方便开发时的调试。可以在 .webpackrc 中添加如下配置以使用 HMR：
{
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  }
}

如果无效，请尝试更新一下 babel-plugin-dva-hmr。
env 字段是针对特定环境进行配置，因为 HMR 只在开发环境下使用，所以将配置添加到 development 字段即可，运行 npm run build 时的环境变量为 production。
Model
Model 是 dva 最重要的部分，可以理解为 redux、react-redux、redux-saga 的封装。
通常项目中一个模块对应一个 model，一个基本的 model 如下：
import { fetchUsers } from '../services/user';

export default {
  namespace: 'user',
  state: {
    list: [],
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.data,
      };
    },
  },
  effects: {
    *fetch(action, { put, call }) {
      const users = yield put(fetchUsers, action.data);
      yield put({ type: 'save', data: users });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/user') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
}

namespace 是该 model 的命名空间，同时也是全局 state 上的一个属性，只能是字符串，不支持使用 . 创建多层命名空间。
state 是状态的初始值。
reducer 类似于 redux 中的 reducer，它是一个纯函数，用于处理同步操作，是唯一可以修改 state 的地方，由 action 触发，它有 state 和 action 两个参数。
effects 用于处理异步操作，不能直接修改 state，由 action 触发，也可触发 action。它只能是 generator 函数，并且有 action 和 effects 两个参数。第二个参数 effects 包含 put、call 和 select 三个字段，put 用于触发 action，call 用于调用异步处理逻辑，select 用于从 state 中获取数据。
subscriptions 用于订阅某些数据源，并根据情况 dispatch 某些 action，格式为 ({ dispatch, history }, done) => unlistenFunction。
如上的一个 model，监听路由变化，当进入 /user 页面时，执行 effects 中的 fetch，以从服务端获取用户列表，然后 fetch 中触发 reducers 中的 save 将从服务端获取到的数据保存到 state中。
注意，在 model 中触发这个 model 中的 action 时不需要写命名空间，比如在 fetch 中触发 save 时是 { type: 'save' }。而在组件中触发 action 时就需要带上命名空间了，比如在某个组件中触发 fetch 时，应该是 { type: 'user/fetch' }。
