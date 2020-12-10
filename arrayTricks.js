var items = ['apple', 'samsung', 'huawei', 'infinix'];
console.log(items);
var arr1 = items;       //it gets a reference to that array that is why change in one will cause change in other too
arr1[2] = 'htc';
console.log(items);

var arr2 = items.slice(0);       //does not allow changes, copy by value not reference
arr2[1] = 'mi';
console.log(items);

var arr3 = [...items];           //spread operator, copies by value
arr2[1] = 'oppo';
console.log(items);

//falsy values:
//any values when converted to boolean, returns a false

var num = [1, 22, 5, NaN, 0, 7, undefined, 9];
console.log(num);
console.log(num.filter(num => Boolean(num)==true));           //removing falsy values from array


var items = ['apple', 'samsung', 'huawei', 'infinix', 'apple', 'oppo', 'huawei'];
console.log(items);
console.log([...new Set(items)]);                               //removing duplicates from array

if(items.indexOf('apple') >=0){
    console.log('found');
}
else{
    console.log('not found');
}

if(~items.indexOf('samsung1')){
    console.log('found');
}
else{
    console.log('not found');
}