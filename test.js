let date=(new Date())
console.log(parseInt(date.getTime()));

console.log(!![]);
console.log([]==false);

var str='get_element_by_id';
str=str.replace(/\_[a-z]/g,(s)=>s.replace('_','').toUpperCase())
console.log(str);
console.log(!!'0');
