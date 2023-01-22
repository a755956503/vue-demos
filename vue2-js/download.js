const fs = require('fs');
const fetch = require('node-fetch');
// const province = require('arr.json');
// const str = `anhui.json	30.9 kB	application/json
// aomen.json	1.92 kB	application/json
// beijing.json	21.4 kB	application/json
// chongqing.json	48.5 kB	application/json
// fujian.json	43 kB	application/json
// gansu.json	47.2 kB	application/json
// guangdong.json	71.9 kB	application/json
// guangxi.json	46.8 kB	application/json
// guizhou.json	32.1 kB	application/json
// hainan.json	29 kB	application/json
// hebei.json	39.4 kB	application/json
// heilongjiang.json	78.4 kB	application/json
// henan.json	35.9 kB	application/json
// hubei.json	38.5 kB	application/json
// hunan.json	45.4 kB	application/json
// jiangsu.json	23.1 kB	application/json
// jiangxi.json	32.1 kB	application/json
// jilin.json	41.3 kB	application/json
// liaoning.json	49.7 kB	application/json
// neimenggu.json	57.3 kB	application/json
// ningxia.json	12.2 kB	application/json
// qinghai.json	43.7 kB	application/json
// shandong.json	50.3 kB	application/json
// shanghai.json	12.2 kB	application/json
// shanxi.json	22.6 kB	application/json
// shanxi1.json	31.1 kB	application/json
// sichuan.json	83.9 kB	application/json
// taiwan.json	32.2 kB	application/json
// tianjin.json	12.7 kB	application/json
// xianggang.json	12 kB	application/json
// xinjiang.json	87.9 kB	application/json
// xizang.json	686 kB	application/json
// yunnan.json	62.4 kB	application/json
// zhejiang.json	50.9 kB	application/json`;

// let arr = str.split('\n').map((item) => item.split('\t')[0]);
// fs.writeFileSync('arr.json', JSON.stringify(arr));
// const province = [
//   "anhui.json",
//   "aomen.json",
//   "beijing.json",
//   "chongqing.json",
//   "fujian.json",
//   "gansu.json",
//   "guangdong.json",
//   "guangxi.json",
//   "guizhou.json",
//   "hainan.json",
//   "hebei.json",
//   "heilongjiang.json",
//   "henan.json",
//   "hubei.json",
//   "hunan.json",
//   "jiangsu.json",
//   "jiangxi.json",
//   "jilin.json",
//   "liaoning.json",
//   "neimenggu.json",
//   "ningxia.json",
//   "qinghai.json",
//   "shandong.json",
//   "shanghai.json",
//   "shanxi.json",
//   "shanxi1.json",
//   "sichuan.json",
//   "taiwan.json",
//   "tianjin.json",
//   "xianggang.json",
//   "xinjiang.json",
//   "xizang.json",
//   "yunnan.json",
//   "zhejiang.json"
// ];
// province.forEach((item) => {
//   const href = `https://unpkg.com/echarts@4.9.0/map/json/province/${item}`;
//   fetch(href).then(res => res.json()).then(res => {
//     fs.writeFileSync('map/' + item, JSON.stringify(res));
//   })
// })
// const href = `https://unpkg.com/echarts@3.6.2/map/json/china.json`;
//   fetch(href).then(res => res.text()).then(res => {
//     console.log(res)
//     fs.writeFileSync('zhejiang.json', res);
//   }).catch((err) => {
//     console.log(err);
//   })
const arr1 = [
  'china.json',
  'world.json',
  'china-cities.json',
  'china-contour.json'
]
arr1.forEach((item) => {
  const href = `https://unpkg.com/echarts@4.9.0/map/json/${item}`;
  fetch(href).then(res => res.json()).then(res => {
    fs.writeFileSync('map/' + item, JSON.stringify(res));
  })
})