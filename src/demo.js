import './styles.less'
import initCloud from './index'
import data from './nice.json'
const chart = initCloud(document.getElementById('demo'), data, {imageUrl: ''})

console.log(chart)
chart.on('click', ({
  data
}) => {
  alert(data.name)
})