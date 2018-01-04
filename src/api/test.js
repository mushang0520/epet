let time=new Date()
console.log(time.getTime());
let str='{"index":"2949","is_show":1,"type":"100","is_dynamic":"0","type_name":"\u6a21\u5757\u5206\u5272\u7ebf","value":{"image":"","img_size":"750x25","target":{}}},{"index":"2948","is_show":1,"type":"13","is_dynamic":"0","type_name":"\u901a\u7528\u5e7f\u544a\u6a21\u677f","left_image":{"image":"","img_size":"","target":{}},"center_image":{"image":"","img_size":"","target":{}},"right_image":{"image":"","img_size":"","target":{}},"show_line":"0","content_images":[[{"advid":"25144","atid":"0","image":"https:\/\/img2.epetbar.com\/nowater\/2017-12\/13\/11\/be84f01e893b0e631d8512566eb79117.jpg@!water","img_size":"750x61","target":{}}]]}'


console.log(str.replace(/\\n[a-z0-9]{4}/g,s=>s.fromCodePoint));
