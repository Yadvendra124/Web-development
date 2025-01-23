const URL ="https://dog.ceo/api/breeds/image/random";
// let promise = fetch(URL);
// console.log(promise);
const getPics = async()=>{
    console.log("gettig pics ....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
}