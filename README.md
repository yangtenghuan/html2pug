# html2pug #

鉴于目前大部分 html2jade 线上服务挂掉，开发者带着小姨子跑路，项目坟头草三米，多年未维护，索性以 [html2jade](https://github.com/donpark/html2jade) 为基础，进行了一些修改和精简并修复一些bug，使生成的pug能够线上运行和符合个人代码习惯，上线 [html2pug](https://pecopeco.github.io/html2pug/#/) 便于使用

# tips

此转换工具适用于 vue 内 pug 模板，因此生成的 pug 会自动忽略 html 和 body 根节点，为避免造成一些不必要的缩进错误，在输入时尽量不要在根节点写入 html 和 body 以及一些稀奇古怪的节点名

# vue

## 安装
```
npm install
```

### 运行
```
npm start
```

### 打包
```
npm run build
```

### 发布

复制dist目录下所有文件，切换到gh-pages分支，粘贴并提交
