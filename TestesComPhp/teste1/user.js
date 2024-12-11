const divDeUsers = document.querySelector("#divDeUsers");

fetch("user.php", {
    method: 'get'
}) .then(response => response.json())
    .then((usersList => {
        //console.log(usersList);
        const testeArray = usersList.data;
        console.log(testeArray);
        
        divDeUsers.innerHTML = '';
        
        testeArray.forEach(user => {
            //console.log(user);
            let newDiv = document.createElement("div");
            
            newDiv.innerHTML = `id: ${user.user_id} <br>
                                nome: ${user.name}  <br>
                                email: ${user.email}  <br>
                                description ${user.description}  <br>
                                pass: ${user.pass}  <br>
                                profile_picture: ${user.profile_picture}  <br>
                                `;
            divDeUsers.appendChild(newDiv);
        })
    }))