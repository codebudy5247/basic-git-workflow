const img = document.querySelector("img");
const img2 = document.getElementById("img2");

function getData() {
    fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=Gu85MpAz5E9Unye9bQoUIPpAkrb5zM1j&s=iron man",
        { mode: "cors" }
    )
        .then((response) => {
            return response.json();
        })
        //.then((json) => console.log(json))
        .then((response) => {
            img.src = response.data.images.original.url;
        })
        .catch((e) => {
            console.log(e);
        });
}
fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=Gu85MpAz5E9Unye9bQoUIPpAkrb5zM1j&s=cat",
    { mode: "cors" }
)
    .then((response) => {
        return response.json();
    })
    //.then((json) => console.log(json))
    .then((response) => {
        img1.src = response.data.images.original.url;
    })
    .catch((e) => {
        console.log(e);
    });