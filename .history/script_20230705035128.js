async function getMatchdata(){
    var v = document.getElementById("abc");
    v.innerHTML = "HEyyyy"
    return await fetch ("https://api.cricapi.com/v1/currentMatches?apikey=ecb1eb14-8a5e-4475-aadc-96092ad7921a&offset=0")
    .then(data => data.json());
}
getMatchdata();