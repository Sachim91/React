//spread

const number = [1,2,3];
const newNum = [...number,4];
console.log(newNum);

const person = {
    name : "max"

}
const newPerson = {
    ...person,
    age:28
}
console.log(newPerson);

//rest 

const filter = (...args) =>{
    return args.filter((el) =>{
       if(el === 1)
       return el;
    })

}
console.log(filter(1,2,3));