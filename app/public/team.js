class Profile{
    constructor(email, name, idName, imageSource, imageAlt, personalDescription){
        this.email = email
        this.name = name
        this.idName = idName
        this.imageSource = imageSource
        this.imageAlt = imageAlt
        this.personalDescription = personalDescription
    }
}

let profiles = []
let profileSection = document.getElementById("contentSection")

function loadContent(){

    fetch('team.json')
    .then(response => response.json()) // parse the JSON data
    .then(data => {

        data.profile.forEach(object => {
            let email = object.email
            let name = object.name
            let idName = object.idName
            let imageSource = object.imageSource
            let imageAlt = object.imageAlt
            let personalDescription = object.personalDescription
            let profile = new Profile(email, name, idName, imageSource, imageAlt, personalDescription)
      
            profiles.push(profile)
          }) 

          profiles.map((item)=>{
            console.log(`item ${item.id}`);    
        })

        
        let displayItem = profiles.map( (item) => {
            return `
            <div class="profile-box">
                <a href="mailto:${item.email}">
                    <h2 id="${item.idName}-tag" class="img-name-tag">${item.name}</h2>
                    <img id="${item.idName}-img" class="profile-image" src="images/${item.imageSource}" alt="${item.imageAlt}">
                    <div id="${item.idName}-desc" class="personal-desc-box">
                        <p class="personal-desc">${item.personalDescription}</p>
                    </div>
                </a>
            </div>
            `;
        })


        let teamDescriptionDiv = document.getElementById("team-desc")
        let element = document.createElement("p")
        element.setAttribute("id", "team-desc")

        element.append("Group 162: Saving the world one website at a time")

        teamDescriptionDiv.appendChild(element)

        displayItem = displayItem.join("");
        profileSection.innerHTML = displayItem
        

    });

}

window.addEventListener("DOMContentLoaded", loadContent, false);