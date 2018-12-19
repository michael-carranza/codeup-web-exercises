// function wait(number){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(`You have waited ${number} seconds.`)
//         }, number*1000)
//     })
// }

// 6611855751fdbcaf5cfdba785729b51416225da6

function fetchResponse() {
    return fetch('https://api.github.com/users/michael-carranza/events', {headers: {'Authorization': 'token '}})
}


const checkResponseForErrors = response => {
    console.group('checkResponseForErrors')
    console.log(response)
    console.groupEnd()
    if (response.status !== 200) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
}
const parseResponseAsJson = response => {
    console.group('parseResponseAsJson')
    console.log(response)
    console.groupEnd()
    const jsonResponse = response.json();
    console.log(jsonResponse);
    return jsonResponse;
}
const lastCommit = response => response[0];

const post = data => {
    console.log(data.created_at);
}

fetchResponse()
    .then(checkResponseForErrors)
    .then(parseResponseAsJson)
    .then(lastCommit)
    .then(post);