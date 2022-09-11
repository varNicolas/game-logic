let whoStarts = document.querySelector('.definirQuemComeca')
let yourDamage = document.querySelector('.seuDano')

let lifeOscar = 10
let myLife = 10

let kick

let damage = {
  randomSelection: [{ soco: 4 }, { chute: 2 }, { cabeçada: 1 }],
  myDamagePunch: 2,
  myDamageKick: 1,
  myDamageHeadbutt: 2
}

function game() {
  whoStarts.style.display = 'none'
  yourDamage.style.display = 'block'
  let whoInitial = prompt(`  
  Bem-vindo ao jogo.
  Quem irá começar atacando 
  Você ou o Oscar?`).toLowerCase()
  setTimeout(() => {
    if (whoInitial == 'eu') {
      alert('Você começa atacando')
      myBlow()
    } else if (whoInitial === 'oscar') {
      alert('Oscar começará atacando')
      blowOscar()
    } else if (
      whoInitial != 'oscar' ||
      whoInitial == '' ||
      whoInitial == undefined ||
      whoInitial == null
    ) {
      alert('Indique um personagem válido')
      game()
    }
  }, 10)
}
function blowOscar() {
  let damageIndex = damage.randomSelection
  let atackOscar = Math.floor(Math.random() * damageIndex.length)
  let obj = damageIndex[atackOscar]
  let key = Object.keys(obj)
  let property = Object.values(obj)
  keyObj = key[0]
  value = property[0]

  functionDamageOscar(keyObj, value)
}
function myBlow() {
  let blowValue = prompt(`
  Você quer dar um(a):
  soco
  cabeçada
  chute
  `).toLowerCase()
  myDamageFunction(blowValue)
}
function myDamageFunction(blowValue) {
  if (blowValue === 'chute') {
    kick = damage.myDamageKick
    lifeOscar = lifeOscar - kick
    oscarLived()
  } else if (blowValue === 'soco') {
    kick = damage.myDamagePunch
    lifeOscar = lifeOscar - kick
    oscarLived()
  } else if (blowValue === 'cabeçada') {
    kick = damage.myDamageHeadbutt
    lifeOscar = lifeOscar - kick
    oscarLived()
  } else {
    alert('Indique um ataque válido')
    myBlow()
  }
  blowOscar()
}

function functionDamageOscar(keyObj, value) {
  alert(`O ataque de Oscar foi ${keyObj}`)
  if (keyObj === 'chute') {
    myLife = myLife - value
    imLived()
  } else if (keyObj === 'soco') {
    myLife = myLife - value
    imLived()
  } else if (keyObj === 'cabeçada') {
    myLife = myLife - value
    imLived()
  }
  myBlow()
}
function oscarLived() {
  if (lifeOscar <= 0) {
    alert('O Oscar está morto.')
    gameOver('Você')
  } else {
    alert(`
    Você tem ${myLife} de vida.
    Oscar tem ${lifeOscar} de vida.
    `)
  }
}
function imLived() {
  if (myLife <= 0) {
    alert('Você morreu.')
    gameOver('Oscar')
  } else {
    alert(`
    Você tem ${myLife} de vida.
    Oscar tem ${lifeOscar} de vida.
    `)
  }
}

function gameOver(winner) {
  let yesOurNo = prompt(`
  Fim de jogo, o ganhador foi ${winner}
  Você deseja jogar outra partida?
  `).toLowerCase()
  if (
    yesOurNo == 'sim' ||
    yesOurNo == 'desejo' ||
    yesOurNo == 'aceito' ||
    yesOurNo == 'yes'
  ) {
    game()
  } else {
    document.querySelector('h1').style.display = 'none'
    document.querySelector('.seuDano').style.display = 'none'
    document.querySelector('.gameOver').style.display = 'flex'
  }
  validationFinal(yesOurNo)
}

setTimeout(() => {
  game()
}, 100)
