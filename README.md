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

## 二、搭建index界面
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

### 4. 添加推荐模块。
### 5. 添加ajax(axios)
1. 安装npm install axios --save
2. 引用
## 三、搭建city界面
### 1. better-scroll
```
    npm install better-scroll --save
```
### 2. 关联兄弟组件实现点击右侧字母实现城市跳转对应位置
> 将子组件（Alphabet）传递到父组件（city）再转发到list组件中
#### 1. 实现点击字母表，跳转到相应位置
1. 子组件（Alphabet）通过$emit传递事件及参数给父组件（City）;
2. 父组件（City）接收参数及事件，传递给子组件（List）
3. 子组件（list）接收参数，添加监听事件，监听letter变化
```
watch: {
        letter() {
            if (this.letter) {
                // 找到对应元素
                const element = this.$refs[this.letter][0];
                //  滑动至对应位置
                this.scroll.scrollToElement(element)
            }
        }
    }
```
#### 2. 实现字母表滑动，切换列表（）
详见：alphabet组件
#### 3. 实现地址搜索功能（city-search-logic分支）
详见search.vue
## 四、使用vuex实现数据共享（city-vuex分支）
> 没有公用组件，使用vuex（数据框架）
安装：npm install vuex --save
#### 1. 新建store
#### 2. 在main.js中引用
#### 3. 在组件中使用
通过this.$store 对象进行操作
#### 4. 编程式的导航
 this.$router.push('/');
#### 5. localStorage