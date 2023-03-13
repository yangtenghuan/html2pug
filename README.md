# html2pug #

> 以[html2jade](https://github.com/donpark/html2jade) 为基础，进行一些修改、精简并修复一些bug，使生成的pug能够线上运行和符合个人代码习惯，[html2pug](https://pecopeco.github.io/html2pug/#/) 

# tips

此转换工具适用于 vue 内 pug 模板，因此生成的 pug 会自动忽略 html 和 body 根节点，为避免造成一些不必要的缩进错误，在输入时尽量不要在根节点写入 html、body、template 以及一些非常规的节点名

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
