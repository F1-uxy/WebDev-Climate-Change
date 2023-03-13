class ImageItem{
  constructor(idName, imageSource){
    this.idName = idName
    this.imageSource = imageSource
  }
}

class ContainerBR{
  constructor(idName, className, content){
    this.idName = idName
    this.className = className
    this.content = content
  }
}

class ContainerTR{
  constructor(className, content){
    this.className = className
    this.content = content
  }
}

const imageItems = [];
const containerBR = [];
const containerTR = [];

const imageSection = document.getElementById("imageSection")

console.log(imageItems)

function loadContent(){

  fetch('index.json')
  .then(response => response.json()) // parse the JSON data
  .then(data => {
    // Loop through the array of objects in the JSON file
    

      data.images.forEach(object => {
        let idName = object.idName
        let imageSource = object.imageSource
        let imageItem = new ImageItem(idName, imageSource)
  
        imageItems.push(imageItem)
      }) 
    
    imageItems.forEach(image => {
      let imageSource = image.imageSource
      let imageId = image.idName
      let element = document.createElement('img')
      element.src = imageSource
      element.classList.add("img")
      element.setAttribute("id", imageId)
      console.log("test")
  
  
      document.body.appendChild(element)
    })

      data.containerBottomRight.forEach(object => {
        let idName = object.idName
        let className = object.className
        let content = object.content
        let containerBRItem = new ContainerBR(idName, className, content)

        containerBR.push(containerBRItem)
      })

      let containerBRDiv = document.getElementById("bottom-right-container")

      containerBR.forEach(containerBRItem => {
        let idName = containerBRItem.idName
        let className = containerBRItem.className
        let content = containerBRItem.content
        let node = document.createTextNode(content)
        let element = document.createElement("p")
        element.appendChild(node)
        element.classList.add(className)
        element.setAttribute("id", idName)

        containerBRDiv.appendChild(element)
        console.log("test")

      })

      data.containerTopRight.forEach(object => {
        let className = object.className
        let content = object.content
        let containerTRItem = new ContainerTR(className, content)

        containerTR.push(containerTRItem)
      })   

      let containerTRDiv = document.getElementById("top-right-container")
      
      containerTR.forEach(containerTRItem => {
        let className = containerTRItem.className
        let content = containerTRItem.content
        let element = document.createElement("p")
        let node = document.createTextNode(content)
        element.appendChild(node)
        element.classList.add(className)

        containerTRDiv.appendChild(element)
        console.log("test")

      })
  
  });

  
  
  

}

function contentClick() {
    content.classList.toggle("clicked")
    // if clicked change menu to X
}

const menu = document.getElementById("menu")

Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.selected = index;
    }
    item.onmouseleave  = () => {
        menu.removeAttribute("data-selected");
    }
});

const content = document.getElementById("content")
content.addEventListener("click", contentClick);
window.addEventListener("DOMContentLoaded", loadContent, false);

