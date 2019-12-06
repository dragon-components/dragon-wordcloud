import './styles.less'
import initCloud from './index'
import data from './nice.json'
import axios from 'axios'
// 文字库
function getText() {
  return axios.get('/user/12345');
}
// 图片库
function getImage() {
  return axios.get('/user/12345/permissions');
}
// TODO
/*axios.all([getText(), getImage()])
  .then(function(response) {
    let data = response[0]
    let imageUrl = response[1]
    const chart = initCloud(document.getElementById('demo'), data, {imageUrl: imageUrl})
    chart.on('click', ({
      data
    }) => {
      alert(data.name)
    })
})*/
const chart = initCloud(document.getElementById('demo'), data, {imageUrl: ''})

console.log(chart)
chart.on('click', ({
  data
}) => {
  alert(data.name)
})
