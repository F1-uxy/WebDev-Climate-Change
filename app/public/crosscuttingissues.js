class ChapterContent{
    constructor(imageSource, h1Text, content){
        this.imageSource = imageSource
        this.h1Text = h1Text
        this.content = content
    }
}

let chapterContents = []
let contentSection = document.getElementById("contentSection")

function loadContent(){

    fetch('chaptercontent.json')
    .then(response => response.json()) // parse the JSON data
    .then(data => {

        data.crossCuttingIssues.forEach(object => {
            let imageSource = object.imageSource
            let h1Text = object.h1Text
            let content = object.content
            let chapterItem = new ChapterContent(imageSource, h1Text, content)
      
            chapterContents.push(chapterItem)
          }) 

        chapterContents.map((item)=>{
            console.log(`item ${item.id}`);    
        })
    
        let header = document.createElement("header")
        let headerNode = document.createTextNode("Cross Cutting Issues")
        
        header.appendChild(headerNode)
        document.body.insertBefore(header, contentSection)

        
        let displayItem = chapterContents.map( (item) => {
            return `
            <div class="container">
                <img src="images/${item.imageSource}">
                <div class="text">
                    <h1>${item.h1Text}</h1>
                    <p>${item.content}</p>
                </div>
            </div>
            `;
        })


        displayItem = displayItem.join("");
        contentSection.innerHTML = displayItem
        

    });

}

window.addEventListener("DOMContentLoaded", loadContent, false);