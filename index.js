const obj = {
    name:'John',
    age:21,
    skills: ['a','b','c'],
    student: true
}

function objType(obj){
    for (let key in obj) console.log(typeof obj[key])
}

objType(obj)
 
const obj2 = {
    ...obj,
    student:false,
    height:170
}
//console.log(obj2)

arr = [3,4,5,6]

function arrChange(array){
    return array.reduce((acc,item)=>{
        acc.push(item+1)
        return acc
    },[])

}
console.log(arrChange(arr))
