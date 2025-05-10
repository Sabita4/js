const chai = {
    name : 'masala chai',
    price : 120,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai , 'name',{
    writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
