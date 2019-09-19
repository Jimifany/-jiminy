{
  "extraBabelPlugins"=[
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    }]
  ],
   "disableCSSModules"=false,
   "proxy"= {
    "/api": {
      "target": "http://127.0.0.1:7001",
      "changeOrigin": true
    }
  },
  "env"= {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  }
}