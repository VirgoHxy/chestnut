# memory
> memory 记忆小游戏 最多翻开两张卡片 相同消失 不相同恢复
30s内完成 25s-30s内一次加20分 20s-25s内一次加15分 15s-20s内一次加10分 10s-15s内一次加5分 0-10s内一次加2分

## 安装依赖
### yarn install

## 开发
### yarn serve

## 打包
### yarn build

* ## 文件目录
* ### node_modules ---- 模块
* ### src ---- 开发目录
  * #### assets ---- 静态文件夹 require方式引用
  * #### components ---- 封装vue的组件
  * #### css ---- 样式表
  * #### router ---- vue路由
  * #### store ---- vuex
  * #### views ---- vue页面，目录代表层级
    * ##### Entrance ---- 游戏入口文件
    * ##### Memory ---- 游戏文件
  * #### App.vue ---- vue总页面，可以设置全局css
  * #### main.js ---- vue总js，可以设置全局插件组件
* ### package.json ---- 开发配置和模块
* ### package-lock.json ---- 锁定安装模块的版本号