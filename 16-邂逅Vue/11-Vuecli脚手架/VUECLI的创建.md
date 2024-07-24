# vue创建项目的两种方式
## 1.方式一【基于webpack构建】
全局按照依赖包，通过vue create 'xxx（项目名）'来创建
具体步骤如下：

### 1.1 全局安装依赖包 (注意ode版本)
    npm install -g @vue/cli
### 1.2 创建一个项目

```
vue create project_demo
```

### 1.3 选择需要的版本或者手动选择特性

- 选择预设

![image-20240722194930642](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240722194930642.png)

- 选择特性

![image-20240722195149657](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240722195149657.png)

- 选择版本

![image-20240722195210207](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240722195210207.png)

- 选择配置是否单独放一个文件中

![image-20240722195252828](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240722195252828.png)

- 是否保存为一个预设

![image-20240722195316905](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240722195316905.png)

基于以上配置通过vue create命令基本创建完成。

- 目录介绍

  ![](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/mymyimage-20240722195658434.png)

## 2.方式二【基于vite构建】

### 2.1 npm init vue@latest

   > 1.安装一个本地工具，create-vue
   > 2.用create-vue创建一个vue项目

@latest 总是保持一个最新的版本

![image-20240722200352191](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240722200352191.png)

![image-20240722200448119](https://cysir-1314462720.cos.ap-nanjing.myqcloud.com/cysir-1314462720/myimage-20240722200448119.png)

其他与webpack构建的基本是一致的。