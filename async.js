console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringsTickets = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve('ticket');
    },2000);
});

const getPopCorn = promiseWifeBringsTickets.then((t) => {
    console.log('wife: i have tickets');
    console.log('hub : lets go in');
    console.log('wifey: no, im hungry');

    return new Promise((resolve,reject) =>{
        resolve(`${t} popcorn`);
    })
})


const getButter = getPopCorn.then((t) =>{
    console.log('huby: i got popcorns');
    console.log('hubby: we should go in ');
    console.log('wife: i need butter on my popcorn');

    return new Promise((resolve,reject)=>{
        resolve(`${t} with butter`);
    });
});

const getColdDrink = getButter.then((t)=>{
    console.log('hubby: i got popcorn wid butter');
    console.log('wife: i need cold drink, dear');

    return new Promise ((resolve , reject) => {
        resolve (`${t} & colddrink`);
    });
});


getColdDrink.then((t)=>{
    console.log(t);
})





// Using async/await



(async () => {

    console.log('person1: shows ticket');

    console.log('person2: shows ticket');



    const promiseWifeBringingTicks = new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve('ticket');

      }, 3000);

    });



    const t1 = await promiseWifeBringingTicks;

    console.log('wife: i have the tickets');

    console.log('husband: we should go in');

    console.log('wife: no, I am hungry');



    const t2 = `${t1} popcorn`;

    console.log('husband: I got some popcorn');

    console.log('husband: we should go in');

    console.log('wife: I need butter on my popcorn');



    const t3 = `${t2} with butter`;

    console.log('husband: I got the butter on the popcorn');

    console.log('husband: do you want any cold drinks, dear?');



    const t4 = `${t3} and cold drinks`;



    const getColdDrinks = new Promise((resolve, reject) => {

      resolve(t4);

    });



    console.log(await getColdDrinks);

  })();



//   // Handling Promise.all with async/await



//   (async () => {

//     const promises = [

//       new Promise(resolve => setTimeout(() => resolve(1), 3000)),

//       new Promise(resolve => setTimeout(() => resolve(2), 2000)),

//       new Promise(resolve => setTimeout(() => resolve(3), 1000))

//     ]})
