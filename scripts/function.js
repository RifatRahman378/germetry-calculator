function calculateTriangle() {
    const base = inputValueById('triangle-base');
    const height = inputValueById('triangle-height')
    const area = '' + (base * height * 0.5);
    setInnerText('triangle-id', area)
}
function calculateRectangle() {
    const base = inputValueById('rectangle-base');
    const height = inputValueById('rectangle-height')
    const area = '' + (base * height * 0.5);
    setInnerText('rectangle-id', area)
}

// function to get input
function inputValueById(inputValue) {
    const Value = parseFloat(document.getElementById(inputValue).value);
    return Value;
}
// function to set text
function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = (area);
}