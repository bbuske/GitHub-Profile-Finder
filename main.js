function getProfile(e) {
    e.preventDefault();
    console.log('Fetching...')
    // Get Username from HTML Username Field
    let username = document.getElementById('username').value;
    if(!username){
        document.getElementById('profile').innerHTML ="Error! User not found";
    }
    // Do AJAX Status Check and if it works, pull the profile info from GitHub
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState === 4 && xhttp.status === 200){
            let user = JSON.parse(xhttp.responseText);
            // Create HTML Panel with Bootstrap, using JavaScript
            document.getElementById('profile').innerHTML = `<div class="panel panel-default">
            <div class="panel-body">
                <div class="row">
                <div class="col-md-3">
                <img src="${user.avatar_url}" alt="User Avatar">
                <span class="label label-danger">Profile Created: ${user.created_at}</span>
                <span class="label label-danger">Profile Updated: ${user.updated_at}</span>
                </div>
                <div class="col-md-9">
                    <span class="label label-short label-primary">Public Repos: ${user.public_repos}</span>
                    <span class="label label-long label-primary"><span class="url">Repos URL:</span> <a class="link" href="${user.repos_url}" target="_blank">
                    ${user.repos_url}</a></span><br/>
                    <span class="label label-short label-warning">Public Gists: ${user.public_gists}</span>
                    <span class="label label-long label-warning"><span class="url"> Gists URL:</span> <a class="link" href="${user.gists_url}" target="_blank">
                    ${user.repos_url}</a></span><br/>
                    <ul class="list-group">
                        <li class="list-group-item"><span class="li-header">Company:</span> ${user.company}</li>
                        <li class="list-group-item"><span class="li-header">Website:</span> ${user.blog}</li>
                        <li class="list-group-item"><span class="li-header">Email:</span> ${user.email}</li>
                        <li class="list-group-item"><span class="li-header">Location:</span> ${user.location}</li>
                        <li class="list-group-item"><span class="li-header">Hireable:</span> ${user.hireable}</li>
                        <li class="list-group-item"><span class="li-header">Bio:</span> ${user.bio}</li>
                    </ul>
                    <a class="btn btn-default" id="visit" target="_blank" href="${user.html_url}">Visit Github Profile</a>
                </div>
                </div>
            </div>
        </div>`;
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    xhttp.send();
}

document.getElementById('userForm').addEventListener('submit', getProfile, false);