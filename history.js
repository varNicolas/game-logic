let part1 = document.querySelector('.part1')
let part2 = document.querySelector('.part2')
let part3 = document.querySelector('.part3')
let part4 = document.querySelector('.part4')
let part5 = document.querySelector('.part5')
let part6 = document.querySelector('.part6')
function next1() {
  part1.style.display = 'none'
  part2.style.display = 'block'
  setTimeout(() => {
    part2.style.display = 'none'
    part3.style.display = 'flex'
  }, 4000)
}
function next3() {
  part3.style.display = 'none'
  part4.style.display = 'flex'
  setTimeout(() => {
    part4.style.display = 'none'
    part5.style.display = 'block'
  }, 4000)
}
function next5(){
  part5.style.display = 'none'
  part6.style.display = 'flex'

}