# 购物商城

## 页面规划

- Home 首页
- Category 分类
- Hot 热销
- Cart 购物车
- Me 个人中心
- Rank 排行榜
- Detail 商品详情
- Recharge 充值
- Bill 账单
- Conllection 收藏
- Comment 评论
- ...

## 商城源码目录

```tree
src                       
├─ assets                 
│  ├─ images              
│  └─ styles              
├─ components             
├─ navigator              
├─ screen                 
│  ├─ bill                
│  │  └─ Bill.tsx         
│  ├─ cart                
│  │  └─ Cart.tsx         
│  ├─ category            
│  │  └─ Category.tsx     
│  ├─ comment             
│  │  └─ Comment.tsx      
│  ├─ conllection         
│  │  └─ Conllection.tsx  
│  ├─ detail              
│  │  └─ Detail.tsx       
│  ├─ home                
│  │  └─ Home.tsx         
│  ├─ me                  
│  │  └─ Me.tsx           
│  ├─ rank                
│  │  └─ Rank.tsx         
│  └─ recharge            
│     └─ Recharge.tsx     
├─ service                
├─ store                  
├─ types                  
├─ utils                  
└─ App.tsx                

```

## 已完成事件

- 图标

## Todo

- 自定义全局字体（搞明白默认字体及大小）
- 跟随系统字体（限制跟随系统）
- statusBar

### react-native-vector-icons

- 安装

```shell
$ yarn add react-native-vector-icons
```

#### IOS 端

- 进入ios文件夹中安装依赖

```shell
# 进入ios文件夹
$ cd ios

# 安装依赖
$ pod install
```

- 在Info.plist中添加字体
  
> 注意：这儿的Info.plist是`ios/build`同级目录的项目名称下的文件

```xml
<key>UIAppFonts</key>
<array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Fontisto.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Zocial.ttf</string>
</array>
```

#### Android 端

- 在 `android/build.gradle` 文件内配置如下内容
  
```shell
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
  
- 添加字体
> 将`node_modules/react-native-vector-icons/Fonts`内的文件复制到 `android/app/src/main/assets/fonts`中；注意文件名大小写
