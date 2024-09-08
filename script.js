let i = 1;

function addForm(){
  const typeOfValue = document.getElementById("menuSelector-id").value
  if(typeOfValue === "Text-Input"){
    const newDiv = document.createElement("div")
    newDiv.setAttribute("id", "preview-"+i);
    newDiv.setAttribute("class", "preview")
    const newHeading = document.createElement("h4")
    newHeading.setAttribute("class", "new-label-heading")
    const value = document.getElementById("inp").value
    newHeading.innerHTML = value;
    newDiv.appendChild(newHeading);
    document.getElementById("new-label-div").appendChild(newDiv);
    i++;
  }
  else if(typeOfValue === "Radio"){
    const newInput = document.createElement("input")
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", `preview-`+i)
    newDiv.setAttribute("class", "preview")
    newInput.setAttribute("type", "radio");
    newInput.setAttribute("name", "dynamicRadioGroup");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("id", "new-added-label")
    const value = document.getElementById("inp").value
    newLabel.appendChild(newInput);
    newLabel.appendChild(document.createTextNode(""+value));
    newDiv.appendChild(newLabel)
    document.getElementById("new-label-div").appendChild(newDiv)
    i++;
  }
  else{
    const newInput = document.createElement("input");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "preview-"+i);
    newDiv.setAttribute("class", "preview")
    newInput.setAttribute("type", "checkbox");
    const newLabel = document.createElement("label");
    newLabel.setAttribute("id", "new-added-label")
    const value = document.getElementById("inp").value;
    newLabel.appendChild(newInput);
    newLabel.appendChild(document.createTextNode(""+ value))
    newDiv.appendChild(newLabel);
    document.getElementById("new-label-div").appendChild(newDiv)
    i++;
  }
}