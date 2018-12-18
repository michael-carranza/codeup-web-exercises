function wait(number){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(`You have waited ${number} seconds.`)
        }, number*1000)
    })
}