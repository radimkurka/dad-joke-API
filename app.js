const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const result = await axios.get("https://icanhazdadjoke.com/", config)
        return result.data.joke;
    } catch (e) {
        return `No jokes are available, there must have been some kind of error... ${e}`
    }

}

const text = document.querySelector("#jokeDisplay");
const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let joke = await getDadJoke();
    text.innerText = joke
})