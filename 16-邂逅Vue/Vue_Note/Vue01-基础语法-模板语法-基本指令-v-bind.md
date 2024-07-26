# Vue-认识基础语法【第一节】

## 1. Vue的引入方法

- CDN引入
- 本地引入

## 2. Vue动态的数据展示

- 声明式编程  **面试题：声明式编程和命令式编程的区别？**

>原生DOM都是采用的命令式编程，操作页面的元素都要获取该元素的DOM。然而在Vue中不需要操作原生的DOM，直接在data中声明数据即可。

- 不直接操作DOM,将一些数据直接渲染到页面上

![image-20240721130626365](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240721130626365.png)

## 3. Vue展示列表数据

- 数组如何渲染

```javascript
<script>
        let title = "hello world"
        const app = Vue.createApp({
            template:`
              <h1>{{ name }}</h1>
              <ul>
                <li v-for="(item,index) in name">{{item}}</li>
              </ul>
            `,
            data:function () {
                return {
                    title:title,
                    name: ["张三", "李四", "王五"],
                };
            }
        })
        console.log(app)
        // 挂载
        app.mount("#app")
    </script>
```

## 4. Vue实现计数器【经典案例】

```javascript
 <script>
        let title = "hello world"
        const app = Vue.createApp({
            template:`<h1>当前计数：{{counter}}</h1>
                <button @click="fn1">+1</button>
                <button @click="fn2">-1</button>
            `,
            data:function () {
                return {
                    counter:0
                };
            },
            methods:{
                fn1:function (){
                    this.counter++
                },
                fn2:function (){
                    this.counter--
                }
            }
        })
        console.log(app)
        // 挂载
        app.mount("#app")
</script>
```



## 5. Option-api

- data  面试题：为什么data是一个函数?
- methods

## 6. Mystache双括号语法【大胡子语法】

## 7. Vue的指令

- v-once
- v-text
- v-html
- v-pre
- v-cloak
- v-memo

### 7.1 v-bind指令 

#### 7.1.1 v-bind绑定基本属性

>需要动态的改变页面的属性，通过v-bind来动态的绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="./lib/Vue.js"></script>
    <style>
    </style>
</head>
<body>
        <h2>你好</h2>
<!--        但是，除了内容需要动态来决定外，某些属性我们也希望动态来绑定。-->
        <div id="app">
            <div>
                <h1>{{name}}</h1>
                <img  :src="url" alt="">
<!--                有很多的，比如图片的链接src、网站的链接href、动态绑定一些类、样式等等 -->
                <a :href="href">百度一下</a>
            </div>
            <button @click="update">改变</button>
        </div> 
        <script>
               const app = Vue.createApp({
                   data() {
                       return {
                           name:"chenyi",
                           url:"https://www.neu.edu.cn/images/dangdaihuinew.jpg",
                           href:"https://www.neu.edu.cn/",
                           url2:"https://www.neu.edu.cn/images/2696de7a-6d24-4272-a7b2-7466a35d17d4.jpg",
                       }
                   },
                   methods:{
                       update:function (){
                           this.href="https://cysir.icu";
                           this.url = this.url === this.url2 ? this.url : this.url2
                       }
                   }
               });
               console.log(app);
               // 挂载
               app.mount('#app');
        </script>
</body>
</html>


```

#### 7.1.2 v-bind绑定class属性-数组-对象的方式

>需要动态的改变页面的样式，通过v-bind来动态的绑定样式。【不同的写法】

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="./lib/Vue.js"></script>
    <style>
        .active{
            color:red;
        }
        .demo{
            font-size: 30px;
        }
    </style>
</head>
<body>

        <div id="app">
            <h1 >hello world</h1>
<!--            <button :class="isActive ? 'active':'' " @click="btnClick">按钮</button>-->

<!--            动态class可以写对象语法-->
<!--            我们可以传给:class (v-bind:class 的简写)一个对象，以动态地切换 class-->
<!--            <button :class="{active:isActive}" @click="btnClick" >按钮</button>-->

<!--            对象语法的多个键值对-->
<!--            <button :class="{active:isActive,why:true}" @click="btnClick" >按钮</button>-->


<!--            动态绑定的class是可以和普通的class同时的使用 ~!!!!!!!!!!!!!!!!!!-->
            <button class="demo" :class="getDynamicClass()" @click="btnClick" >按钮</button>

            <h1 :class="['abc','def']">hello</h1>
            <h1 :class="['abc',className,getDynamicClass()]">hello</h1>

        </div> 
        <script>
               const app = Vue.createApp({
                   data() {
                       return {
                           isActive:false,
                           className:'why'
                       }
                   },
                   methods:{
                        btnClick:function (){
                            this.isActive = !this.isActive
                        },
                       getDynamicClass:function (){
                            return {active:this.isActive,why:true}
                       }
                   }
               });

               app.mount('#app');
        </script>
</body>
</html>


```

![image-20240724213517490](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240724213517490.png)

#### 7.1.3 v-bind绑定style属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="./lib/Vue.js"></script>
    <style>
        .active{
            color:red;
        }
        .demo{
            font-size: 30px;
            font-family: "Agency FB";
        }
    </style>
</head>
<body>

        <div id="app">
<!--            2.1.动态绑定style，在后面跟上:对象类型-->
<!--            单引号 或者 驼峰-->
<!--            CSS property 名可以用驼峰式(camelCase)或短横线分隔(kebab-case， 记得用引号括起来)来命名;-->
            <h1 :style="{color:fontColor,fontSize:fontSize}">hello world</h1>
<!--            动态的绑定属性，这个属性是一个对象-->
            <h2 :style="objStyle">chenyi</h2>
<!--            动态的绑定属性，这个属性是一个数组-->
            <h2 :style="[objStyle,{fontFamily:'Agency FB'}]">呵呵哈哈哈</h2>
        </div>
        <script>
               const app = Vue.createApp({
                   data() {
                       return {
                           fontColor:"green",
                           fontSize:'60px',
                           objStyle:{
                               color:'green',
                               fontSize: '100px'
                           }
                       }
                   },
                   methods:{
                        btnClick:function (){
                            this.isActive = !this.isActive
                        },
                       getDynamicClass:function (){
                            return {active:this.isActive,why:true}
                       }
                   }
               });

               app.mount('#app');
        </script>
</body>
</html>


```

#### 7.1.4 v-bind绑定属性名

![image-20240724213631649](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240724213631649.png)

#### 7.1.5 v-bind直接绑定对象

>一般在组件传值的时候可以用

![image-20240724213759645](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240724213759645.png)





