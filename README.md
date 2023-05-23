# JdaAssistant
建大助手官方文档

# Website

本官网使用 [Docusaurus 2](https://docusaurus.io/)进行构建.使用第三方平台自动化部署托管

## 前置要求（会自学即可）

1. 了解简单的js

2. 了解简单的html

3. 了解简单的css

4. 了解react开发

5. 会在互联网学习相关知识

## 项目开发准备

1. 安装 node.js

2. 安装 npm

3. 新建项目文地址，用来安装项目文件夹，例：E:\github

4. 打开命令行

5. 进入项目地址(每行输完后回车)

```
E:
cd E:\github
```

6. 创建项目

```
npx create-docusaurus@latest jdaassistant classic
```

7. fork本仓库的main分支的所有文件到项目文件夹里，重复文件请选择替换文件（本仓库文件仅不包含node_modules文件夹）

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

   或

   pnpm：

   ```
   pnpm run build
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
   或

   pnpm：

   ```
   pnpm run serve
   ```
### 提交

`请把最后编写的文件提交到仓库的相应部分`(仅上传新增文件，请勿上传已有项目文件)

## 注意

1. 开发过程中建议备份项目文件

2. 最后build文件为静态的，故请自行调试生成的文件

3. 详情请参考[Docusaurus](https://docusaurus.io/zh-CN/)官网文档
