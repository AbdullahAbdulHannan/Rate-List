function rateCard(container) {
    let containerDisp = document.getElementById(container)
    let divCard = document.createElement('div')
    divCard.setAttribute('class','styleDivCard')
   divCard.style.color = 'rgb(69, 69, 236)'
    divCard.style.backgroundColor = 'white'
    divCard.style.border = '2px solid blue'
    divCard.style.borderRadius = '8px '
    divCard.style.width = '500px'
    divCard.style.height = '350px'
    divCard.style.display = 'block'
    divCard.style.margin = '10px'
    containerDisp.appendChild(divCard)
    let inp = document.getElementById('main')
    let inpHeading = document.createElement('h1')
    inpHeading.style.color = 'white'
    inpHeading.style.backgroundColor = 'rgb(69, 69, 236)'
    inpHeading.style.height='50px'
    inpHeading.style.marginTop='0px'
    inpHeading.style.padding='15px'
    inpHeading.style.paddingLeft='30px'
    inpHeading.textContent = inp.value
    divCard.appendChild(inpHeading)
    let inpImage = document.getElementById('image')
    let inpImageURL = inpImage.value
    let imageDisp = document.createElement('img')
    imageDisp.style.width = '490px'
    imageDisp.style.height = '180px'
    // imageDisp.style.marginLeft = '50px'
    imageDisp.setAttribute('src', inpImageURL)
    divCard.appendChild(imageDisp)
    let inpPrice = document.getElementById('price')
    let priceDisplay = document.createElement('p')
    priceDisplay.style.fontSize = '30px'
    priceDisplay.style.fontWeight = 'bold'
    priceDisplay.style.textAlign = 'center'
    priceDisplay.marginBottom='10px'
    priceDisplay.textContent = 'Rs/- ' + inpPrice.value
    divCard.appendChild(priceDisplay)
}
