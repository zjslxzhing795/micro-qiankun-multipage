<img src='./public/images/react-boilerplate.png' style='width:200px'>

# create-my-app
> 基于react的中台脚手架

## 框架特性:
+ **干净整洁, 没有不必要的配置**
+ 标准的[代码风格](https://standardjs.com/)
+ 成熟的项目结构
+ 使用最新的 Webpack@4.x
+ 使用最新的 React@16.x
+ 使用最新的 React-router@4.x
+ 使用最新的 Babel@7.x
+ 支持 ECMAScript 2016
+ 基于 Rematch 优化 redux 实践
+ 支持 Sass/style-in-js
+ 热更新
+ 集成 Fusion UI
+ 代码分割
+ 打包优化
+ 使用 ESLint 约束代码风格
+ 多种Layout

## 安装

```bash
git clone https://github.com/seazzw/create-my-app.git <your_project_name>
```

使用NPM安装依赖:

```bash
npm install
```

或者使用 YARN 安装依赖:

```bash
yarn install
```

## 开发

启动开发服务:

```bash
npm run dll //仅需执行一次
npm run dev
```

NPM Scripts 说明:

|`npm run <script>` |Description|
|-------------------|-----------|
|`dll`              |将第三方依赖打包为dll文件，防止重复解析，<br>优化npm run dev的速度和热更新 |
|`dev`              |启动服务 `localhost:8088`|
|`build`            |打包项目|
|`lint`             |检查文件格式|
|`lint:fix`         |检查文件格式并自动格式化|
|`clean`            |打包前删除旧的build文件夹|

## 项目结构
```
.
├── README.md                        #项目说明
├── src                              #源代码
│   ├── App.js                       #应用根组件
│   ├── components                   #通用组件
│   ├── index.html                   #HTML 模版
│   ├── index.js                     #入口文件
│   ├── layouts                      #项目用到的通用布局
│   ├── menuConfig.js                #导航配置
│   ├── models.js                    #基于 rematch 统一处理reducer/action
│   ├── pages                        #按照业务拆分的页面模块
│   ├── routes.js                    #路由配置
│   ├── store.js                     #Redux 的 Store
│   └── styles                       #样式目录
├── build                            #打包生成的文件
│   └── index.html                   
├── dll                              #第三方依赖包的dll文件
│   ├── vendor-manifest.json         
│   └── vendor.dll.js                
├── docs                             #项目文档
├── package-lock.json                #锁定安装时包的版本号,以保证其他人在npm install时大家的依赖能保证一致               
├── package.json                     
├── public                           #静态资源
│   └── images                       
└── scripts                          #存储一些项目用到的脚本
    ├── pack.base.js                 #webpack 基础配置
    ├── pack.build.js                #webpack 生产环境配置
    ├── pack.dev.js                  #webpack 开发环境配置
    └── pack.dll.js                  #优化 npm run dev 的速度和热更新，将第三方依赖打包为 dll 文件, 防止重复解析

```

## 打包

```bash
npm run build
```

## License

MIT
