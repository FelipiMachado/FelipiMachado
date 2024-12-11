// TODA A LÓGICA MINHA
const formUser = document.querySelector("#formUser");
const divRetorno = document.querySelector("#divReturn");

formUser.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const user_id = document.querySelector('#user_id').value;

    fetch(`get-user-by-id.php?user_id=${user_id}`, {
        method: 'GET',
    })
    .then(response => response.json())  
        .then((user) => {
            
            user = user.data;

           // console.log(user);
            
            if (user) {
                divRetorno.innerHTML = `
                name: ${user.name} <br>
                description: ${user.description} <br>
                email: ${user.email} <br>
                `
            }else {
                //divRetorno.innerHTML = `${user.message}`
                divRetorno.innerHTML = `Ero`
            }
        })
});
