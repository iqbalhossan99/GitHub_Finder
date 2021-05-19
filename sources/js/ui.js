// 

class UI {
    constructor() {
        this.profile = document.querySelector("#profile");
    }

    showProfile(user) {
        this.clearAlert();

        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class"btn btn-primary"></a>
                </div>
                <div class="col-md-9">
                    <span class="btn btn-primary">Public Repos: ${user.public_repos}</span>
                    <span class="btn btn-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="btn btn-success">Followers: ${user.followers}</span>
                    <span class="btn btn-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div> `;
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = "";
    }

    // Show Alert
    showAlert(message, className) {
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".searchContainer");
        let search = document.querySelector(".search");

        container.insertBefore(div, search);
    }

    // Clear Alert
    clearAlert() {
        let currentAlert = document.querySelector(".alert");
        if (currentAlert) {
            currentAlert.remove();
        }
    }


}