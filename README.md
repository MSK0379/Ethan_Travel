# ethan_travel

> msk的vue应用
## 一、项目初始化
### 1.初始化项目
1. vue init webpack  Ethan_Travel
2. 安装fastclick,并引入
> npm install --save fastclick
```
// click事件导致300ms
import fastClick from 'fastclick'
fastClick.attach(document.body)
```

3. 修改index.html
> <meta name="viewport" content="width=device-width,initial-scale=1.0,
    minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
### 2.git管理
1. github创建项目
2. 将本地项目关联

## 二、搭建界面
### 1.安装stylus
 > npm install stylus --save
 > npm install stylue-loader --save
 > 在vue文件中声明<style lang="stylus">
### 2. 使用icon-font
1. icon-font网站下载（选中有用的添加到购物车，下载到本地）
2. 导入本地项目（在本地@/assets/styles/iconfont下放入：[.eot , .svg , .ttf , .woff]四个文件，在本地@/assets/styles放入：[iconfont.css]）
3. 修改iconfont.css引入的路径
4. 在html中使用 <span class="iconfont">&#xe624;</span>【&#xe624;是从官网中复制代码的来】
> 创建别名：在webpack.base.conf.js中 添加'styles': resolve('src/assets/styles')
### 3. 创建轮播图，使用swiper
#### 1. git的新分支：
1. 创建并切换新分支：git checkout -b <分支名>
2. 
#### 2. 引入swiper