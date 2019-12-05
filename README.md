# dragon-wordcloud

## 开发
### 安装
```

yarn || npm install
```
### 开发
```
yarn dev || npm run dev
```
### 编译
```
yarn build || npm run build
```

### 使用

```
 yarn add dragon-wordcloud || npm install -S dragon-wordcloud
```

```
import initCloud from 'dragon-wordcloud'

let chart = initCloud(document.getElementById('demo'), [{name: '测试', value: 200}], {height: 500, width: 500, imageUrl: '', left: 'center', top: 'center'})

chart.on('click', ({
  data
}) => {
  alert(data.name)
})
```
