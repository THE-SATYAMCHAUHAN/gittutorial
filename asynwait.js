console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringTicket = new Promise((resolve, reject)=>{
 setTimeout(()=>{
    resolve('ticket');
 },3000)
})

const getPopcorn = promiseWifeBringTicket.then((t) => {
    console.log('wife: i got tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=> resolve(`${t} popcorn`))
});
const getButter = getPopcorn.then((t)=>{
    console.log('husband: I got some popcorn')
    console.log('husband: we should go in');
    console.log('wife: no i need some Butter on popcorn');
    return new Promise((resolve,reject)=> resolve(`${t} butter`))
});
const getColddrink=getButter.then((t)=> {
    console.log(`husband: I got coldDrink`);
    console.log('husband: anything else');
    console.log('wife: lets go we are getting late');
    console.log('husband: thanks for remainder');
    return new Promise((resolve,reject)=>resolve(`${t} colddrink`))
});
getColddrink.then((t)=>console.log('person 3:shows ticket'))
console.log('person4: shows ticket');
console.log('person5: shows ticket');