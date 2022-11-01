const url = `https://api.github.com/repos/wilson-syring/codeup-web-exercises/commits`

function lastGitCommit(){
return fetch(url, {headers: {'Authorization': `token ${github}`}})
    .then((data) => data.json())
    .then (jsonInfo => {
        console.log(jsonInfo);
        return "Last commit was: " + jsonInfo[0].commit.author.date + " user name is: " + jsonInfo[0].commit.author.name
    })
    .catch(function(error) {
       console.log(error)
    });
}

lastGitCommit().then((res)=>console.log(res));

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));