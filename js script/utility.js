function getTextElementValueById(Id){
    const element = document.getElementById(Id);
    const ElementValueText = element.innerText;
    const value = parseInt(ElementValueText);
    return value;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}