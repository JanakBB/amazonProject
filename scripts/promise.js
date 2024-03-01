const promiseOne = new Promise (function(resolve, reject) {
    setTimeout(function(){
        console.log('Asynchronous task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Asynchronous task 2');
        resolve();
    },1000)
}).then(function(){
    console.log("Asychronous 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Janak",
            email: "janakcustomx@gmail.com"
        });
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({
                username: 'Janak',
                password: '1234'
            })
        } else {
            reject('ERROR: Something went wrong.')
        }
    },1000)
});

promiseFour.then((user) => {
    return user;
}).then((username) => {
    console.log(username.username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected")
})

