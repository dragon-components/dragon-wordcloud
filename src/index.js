import echarts from 'echarts'
import 'dragon-echarts-wordcloud'
import getBase64Image from './base64'

/**
 * 简单封装文字云, 带图片
 * el: DOM
 */
export default function initCloud(el, data, params = {}) {
  const chart = echarts.init(el)
  var img = params.imageUrl || "/src/china.png";
  var image = new Image();
  image.crossOrigin = 'Anonymous';
  image.src = img;
  clearTimeout(timer)
  var timer = setTimeout(() => {
  let base64 = getBase64Image(image);
  image.src = base64;
  const options = {
    series: [
      {
        type: 'wordCloud',
        left: params.left || 'center',
        top: params.top || 'center',
        width: params.width || '600',
        height: params.height ||  '600',
        right: null,
        bottom: null,
        rotationRange: [-90, 90],
        rotationStep: 45,
        drawOutOfBound: false,
        gridSize: 1,
        maskImage: image,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return (
                'rgb(' +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') +
                ')'
              )
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data
      }
    ]
  }

  chart.setOption(options)
  window.addEventListener('resize', chart.resize)
  }, 1000);
  return chart
}
