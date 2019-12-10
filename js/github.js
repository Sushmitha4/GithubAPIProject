//Load git apis
//Communicate between local server to github server

const api = "https://api.github.com/users"; //this is which api we are going to communicate
//const api = "https://api.github.com/users1"; //Output is Promise{<pending>}


window
    .fetch(api) //this is to retreive api's
    .then(data => { //this is to get response(.then)
        //console.log(data);

        //Coverting into json object
        data
            .json() //this is json method
            .then(gituser => {
                //console.log(gituser);

                //Print object
                var output = [];
                for(let user of gituser) {  //or let userdata.forEach(element => {
                    //console.log(user);

                    //console.log(user.login);
                    output += `
                    <div class = "container">
                        <table class="table table-bordered mt-4">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Photo</th>
                                <th>Repo</th>
                                <th>URL</th>
                            </tr>

                            <tr>
                                <td>${user.id}</td>
                                <td>${user.login}</td>
                                <td><img src="${user.avatar_url}"/></td>
                                <td>${user.repos_url}</td>
                                <td>${user.url}</td>
                            </tr>
                        </table>
                    </div>  
                    `;

                    document.getElementById('template').innerHTML = output;
                }
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
