let x, y;
let speed = 10; // Velocidad lateral
let jumpSpeed = 0; // Velocidad del salto
let gravity = 0.5; // Gravedad
let isJumping = false; // Controla si el objeto está saltando
let groundY = 350; // El límite del suelo en el eje Y
let groundColor; // Color del suelo

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = groundY; // incia en el suelo
  groundColor = color(67, 56, 120); // Color inicial del suelo
}

function draw() {
  background(126, 96, 191);

  // Suelo con un color de incio
  fill(groundColor);
  rect(0, groundY + 70, width, height - groundY);

  //Personaje
  noStroke();
  fill(200, 22, 86);
  rect(x - 45, y - 15, 40, 65, 20, 0, 0, 20); //mochila
  rect(x - 12, y - 40, 70, 100, 40, 40, 0, 0); //cuerpo
  fill(255, 22, 86);
  rect(x - 12, y - 40, 70, 80, 40, 40, 0, 100); //sombra
  fill(245, 245, 247);
  rect(x + 20, y - 20, 45, 25, 40); //lente
  fill(104, 109, 118);
  rect(x + 40, y - 10, 20, 5, 40); //Reflejo
  fill(200, 22, 86);
  rect(x + 33, y + 50, 25, 40, 0, 0, 20, 20); // P.1
  rect(x - 12, y + 50, 25, 40, 0, 0, 20, 20); //P.2

  // Mostrar instrucciones de teclas
  fill(255, 225, 255); // Color del texto (negro)
  textSize(20); // Tamaño de texto
  text("W: Saltar", 60, 600);
  text("A: Izquierda", 160, 600);
  text("D: Derecha", 280, 600);

  if (keyIsDown(65)) {
    // se mueve a la izquierda A
    x -= speed;
  }

  if (keyIsDown(68)) {
    // se mueve a la derecha D
    x += speed;
  }

  if (keyIsDown(87) && !isJumping) {
    //saltar W
    jumpSpeed = -10; // Velocidad hacia arriba
    isJumping = true;

    groundColor = color(random(255), random(255), random(255)); //cambio de color del suelo
  }

  // Aplicar la gravedad
  y += jumpSpeed;
  jumpSpeed += gravity;

  // Limitar la posición del círculo al suelo
  if (y >= groundY) {
    y = groundY; // Mantener el círculo en el suelo
    isJumping = false; // Permitir que salte de nuevo
    jumpSpeed = 0; // Reiniciar la velocidad de salto cuando toca el suelo
  }
}
