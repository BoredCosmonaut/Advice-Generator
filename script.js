let adviceNumber = document.getElementById("number").innerHTML
let number = parseInt(adviceNumber)
document.getElementById("dice-image").addEventListener("click", async () => {
    number +=1
    console.log(number)
    const adivce = await getAdvice("https://api.adviceslip.com/advice")
    document.getElementById("advice-real").innerText = adivce
    document.getElementById("number").innerHTML = number
})

//getAdvice function calls the API
const getAdvice = async function(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.slip.advice)
        return data.slip.advice
    }
    //Catches any errors
    catch(e) {
        console.log(e)
    }
}