console.log('person1:shows ticket');
console.log('person2:shows ticket');

const premovie = async() =>{

    const promiseWifeBringTicket = new Promise((resolve,reject) =>{
        setTimeout(() => resolve('ticket'),3000);
    });
    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    const addbutter = new Promise((resolve,reject) => resolve('butter'));
    const getColddrink = new Promise((resolve,reject) => resolve('colddrink'));
    let ticket = await promiseWifeBringTicket;

    console.log(`wife: i got ${ticket}` );
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn =await getPopcorn;

    console.log(`husband: I got some ${popcorn}`)
    console.log('husband: we should go in');
    console.log('wife: no i need some Butter on popcorn');

    let butter =await addbutter;

    console.log(`husband: I got some ${butter} on popcorn`);
    console.log('husband: anything else');;
    console.log('wife: i also need colddrink')
    
    let coldDrink =await getColddrink
    
    console.log(`husband: I got ${coldDrink}`);
    console.log('husband: anything else');
    console.log('wife: lets go we are getting late');
    console.log('husband: thanks for remainder');

    return ticket;

}
premovie().then((m) => console.log(`person3:shows${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');