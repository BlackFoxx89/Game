let personagem
let grama
let andarX = 0
let andarY = 0

//executada paenas uma vez quando o programa é inicializado
function setup() {
  createCanvas(576, 576);

  personagem = loadImage('person.png')
  grama = loadImage ('grass.png')
}
  
//ficar executando até que o programa se encerre
function draw() {
  background(350);

  for(let y = 0; y < 9; y++){
    for(let x = 0; x < 9; x++){
  image(grama, x*64, y*64, 64, 64)
    }
  }   
    
  image(personagem, andarX, andarY, 64, 64)
  
  
}

//é chamada uma vez sempre que uma tecla é pressionada
function keyPressed() {
  if(keyIsDown(RIGHT_ARROW) && andarX < 512){
    //andar para direita
    andarX += 64
  }
  
  if(keyIsDown(LEFT_ARROW) && andarX > 0){
    //andar para esquerda
    andarX -= 64
  }
  
  if(keyIsDown(DOWN_ARROW) && andarY < 512){
    //andar para baixo
    andarY += 64
  }
    
  
  if(keyIsDown(UP_ARROW) && andarY > 0){
   //andar para cima 
    andarY -= 64
  }
  
}
