console.log("Let's get this party started!");

async function getGifs(query) {
    let res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: query, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    console.log(res.data.data[0].images.original.url)
    return res.data.data[0].images.original.url
}

let input = document.querySelector("#input")


let container = document.querySelector("#gifContainer")
function createGifs() {
    let img = document.createElement("img")
    img.src = getGifs(input.value)
    img.alt = "gif"
    container.append(img)

}

let search = document.querySelector("#search")
search.addEventListener("click", function(e) {
    e.preventDefault();
    createGifs()
})

let deleteBtn = document.querySelector("#delete")
deleteBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let allImg = document.querySelectorAll("img")
    for (let imgs of allImg) {
        imgs.remove()
    }
})

// getGifs()