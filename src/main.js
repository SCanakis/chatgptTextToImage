
// import './style.css';



const form = document.getElementById("form");

form.addEventListener('submit', async (e) => {
    console.log("button clicked")
    e.preventDefault();
    const data = new FormData(form);
    
    const response = await fetch("http://localhost:8080/dream", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: data.get("prompt"),
        }),

    });
    const {image} = await response.json();
    console.log("response recieved")
    const result = document.getElementById("image-container");
    result.innerHTML = `<img src="${image}" alt="Retro Placeholder" id="center-image" style="margin-left:auto; margin-right: auto;" >`;

});