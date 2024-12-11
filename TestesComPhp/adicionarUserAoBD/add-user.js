const formTop = document.querySelector("#formTop");
const h101 = document.querySelector("#h101");


formTop.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("add-user.php", {
        method: 'post',
        body: new FormData(formTop)
    }).then(response => response.json())
        .then((message) => {
            console.log(message);
            
            
            //h101.innerHTML = `${}`
        })
})