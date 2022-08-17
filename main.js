const form = document.querySelector('#formulario')


form.addEventListener('submit', function (e) {
  e.preventDefault()
  alert()
  const pesot = document.querySelector('#peso')
  const alturat = document.querySelector('#altura')

  const peso = pesot.value
  const altura = alturat.value

  if (!peso) {
    setResultado('Peso Inválido!', False)
  }
  if (!altura) {
    setResultado('Altura Inválida!', False)
  }


  const imcF = calculaImc(peso, altura)
  const nivell = getNivel(imcF)
  // console.log(nivell)
  const resultado = ` O seu IMC é: ${imcF} (${nivell})`

  setResultado(resultado, true)

})



function calculaImc(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)

}


function getNivel(imc) {
  const nivel = ['abaixo do peso', 'peso normal', 'Sobrepeso', 'Obesidade', 'Obesidade GRAVE.']
  if (imc >= 39.9) return nivel[4]
  if (imc >= 34.9) return nivel[3]
  if (imc >= 29.9) return nivel[2]
  if (imc >= 18.8) return nivel[1]
  if (imc < 18.5) return nivel[0]


}


function criaP() {
  const p = document.createElement('p')
  return p
}


function setResultado(msg, isValid) {
  const res = document.querySelector('#resultado')
  //res.innerHTML = ''

  const p = criaP()

  if (isValid) {
    p.classList.add('paragrafo-resultado')

  } else {
    p.classList.add('bad')
  }


  p.innerHTML = msg
  res.appendChild(p)

}