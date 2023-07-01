# JdaAssistant

建大助手官方文档

>已停用github网页托管（ch4019.github.io/JdaAssistant）该测试版网站已停用，请使用官方地址[建大助手官网](https://jdaassistant.ch4019.fun/)

# Website

本官网使用 [Docusaurus 2](https://docusaurus.io/)进行构建.使用vercel平台自动化部署托管

## 前置要求（会自学即可）

- 请前往[Docusaurus 2](https://docusaurus.io/)网站查看（会基本即可）

## 项目开发准备

1. 安装 node.js

2. 安装 npm 或 yarn

3. 创建项目环境

   ```
   npx create-docusaurus@latest jdaassistant classic
   ```
4. clone本仓库的main分支的所有文件到项目文件夹里，重复文件请选择替换文件（本仓库文件仅不包含node_modules文件夹）

- 请单独安装使用的其他包：

   | animate.css | 暂无 |
   | :----: | :----: |
   | [animate官网](https://docusaurus.io/zh-CN) | 暂无 |

## 开发过程

### 开发


### 测试

1. 运行网站

   ```
   cd jdaassistant
   $ yarn start
   ```
   或
   ```
   cd jdaassistant
   $ npm start
   ```

2. 使用编辑器编辑，浏览器实时显示

### Build（构建）

   npm：

   ```
   npm run build
   ```

   或

   yarn：

   ```
   yarn build
   ```

### 本地运行测试

   npm：

   ```
   npm run serve
   ```
   或

   yarn：

   ```
   yarn serve
   ```

### 提交

`请把最后编写的文件提交到仓库的相应部分`(请勿上传node_modules文件)

## 注意

1. 开发过程中建议备份项目文件

2. 最后build文件为静态的，故请自行调试生成的文件

3. 详情请参考[Docusaurus](https://docusaurus.io/zh-CN/)官网文档
