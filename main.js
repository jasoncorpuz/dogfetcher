
function handleSubmit(){
    $('.dogfetcher').submit(event => {
        event.preventDefault();
        let dogNum = $('.number');
        let dogList = dogNum.val(); //number of dogs to be iterated
        //console.log(dogList);
        reset();
        getPups();
    })
}


function getPups() {
    //reaches to api
    //turns json into data we can use
    //consolelogs data
    fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response => response.json())
    .then(responseJson => renderPups(responseJson))
    .catch(error => alert('error'))

}



function renderPups(responseJson){
        // console.log(responseJson);
    //  $('.results').append(`<img src=${responseJson.message[0]} alt="doggie">
    // <img src=${responseJson.message[1]} alt="doggie">
    // <img src=${responseJson.message[2]} alt="doggie">`);
       // console.log(responseJson) 
        let dogNum = $('.number');
        let dogList = dogNum.val();
        for(let i = 0; i < dogList; i++) {
        console.log(responseJson.message[i])
        $('.results').append(`<img src=${responseJson.message[i]} alt="doggie">`);
        
    }
}

//clears images before new submit is called
function reset(){
    $('.results').html('');
} 



//fetch from the API
//turn the data into JSON
//if user inputs breed is IN JSON
//render image

function searchHandle(){
    $('.searcher').submit(event => {
        event.preventDefault();
        let userSearch= $('.search');
        let result = userSearch.val();
        console.log(result);
        fetchPups(result); // passes result to fetchpups
        resetSearch(); //resets html
    })
}

function fetchPups(result){
    fetch(`https://dog.ceo/api/breed/${result}/images/random`)
    .then(response => response.json())
    .then(responseJson => renderSearch(responseJson))
    .catch(error => alert('error'))

}

function renderSearch(responseJson) {
    console.log(responseJson.message)
    $('.searchresults').append(`<img src=${responseJson.message} alt='pupper'>`);
}

function resetSearch(){
    $('.searchresults').html('');
}


function callApp(){
    handleSubmit();
    searchHandle();
}

$(callApp);