var car ={
    name : "civic",
    model : 2019
};

//iteration an objects
//in returns us a key in c
for(let c in car){
    console.log(c, car[c]);
}

Object.entries(car).forEach(([key, value]) => {
    console.log(key, value);
});

//converting object to array
console.log(Object.entries(car));

//if an object has a property or not
console.log('name' in car);
console.log(car.hasOwnProperty('name'));     //recommended
console.log('name1' in car);
console.log(car.hasOwnProperty('name1'));

var car ={
    name : "civic",
    model : 2019
};

car.color = 'black';                          //adding a new property
console.log(car);
Object.preventExtensions(car);                //prevents adding new properties to an object 
car.speed = 300;
console.log(car);

delete car.color;                             //deleting a property
console.log(car);
Object.seal(car);
delete car.model;                            //prevents adding or deleting properties of an object
console.log(car);

car.model = 2020;
console.log(car);
Object.freeze(car);                          //prevents deleting or changing existing property of an object
car.name = 'city';
console.log(car);

console.log(Object.isExtensible(car));
console.log(Object.isSealed(car));
console.log(Object.isFrozen(car));



