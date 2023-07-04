async function getMatchdata(){
    return await fetch ("https://api.cricapi.com/v1/currentMatches?apikey=ecb1eb14-8a5e-4475-aadc-96092ad7921a&offset=0")
    .then(data => data.json())
    .then(data => {
        if(data.this.status != "success") return ;
        else{
            const matchList = data.data;
            if(!matchList) return [];
            const relevant = matchList.map(match => `${match.name}, ${match.status}`);
            document.getElementById('cric').innerHTML=relevant.map(match => '<li> ${match}</li>').join()
        }
    });
}
getMatchdata();