class ChapterContent{
    constructor(imageSource, h1Text, content1, content2, content3){
        this.imageSource = imageSource
        this.h1Text = h1Text
        this.content1 = content1
        this.content2 = content2
        this.content3 = content3
    }
}

let chapterContents = []
let contentSection = document.getElementById("contentSection")

function loadContent(){

    fetch('chaptercontent.json')
    .then(response => response.json()) // parse the JSON data
    .then(data => {

        data.globalPicture.forEach(object => {
            let imageSource = object.imageSource
            let h1Text = object.h1Text
            let content1 = object.content1
            let content2 = object.content2
            let content3 = object.content3
            let chapterItem = new ChapterContent(imageSource, h1Text, content1, content2, content3)
      
            chapterContents.push(chapterItem)
          }) 

        chapterContents.map((item)=>{
            console.log(`item ${item.id}`);    
        })
    
        let header = document.createElement("header")
        let headerNode = document.createTextNode("Global Picture")
        
        header.appendChild(headerNode)
        document.body.insertBefore(header, contentSection)

        
        let displayItem = chapterContents.map( (item) => {
            return `
            <div class="container">
                <img src="images/${item.imageSource}">
                <div class="text">
                    <h1>${item.h1Text}</h1>
                    <p>${item.content1}</p>
                    <p>${item.content2}<p>
                    <p>${item.content3}<p>
                </div>
            </div>
            `;
        })
        console.log("test")



        displayItem = displayItem.join("");
        contentSection.innerHTML = displayItem
        

    });

}

window.addEventListener("DOMContentLoaded", loadContent, false);