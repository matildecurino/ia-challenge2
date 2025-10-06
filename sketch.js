let basePattern; // pattern del primo quadrante (in alto a sx): matrice di 0 e 1
let cellSize = 20; // quadratini grandi 20px
let colorSwitchSpeed = 0.15; // ogni 0.15 sec il colore viene invertito
let bgColor;
let rectColor;

function setup() {
  createCanvas(510, 510);

  //i rettangoli vengono disegnati dal loro centro
  rectMode(CENTER); 
  noStroke();
  
  //pattern del primo quadrante del fullPattern composto da una matrice di 
  //pieni(1) e vuoti(0)
  basePattern = [
    [1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1],
    [0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],
    [1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0],
    [1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1],
    [1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0],
    [1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1],
    [1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0],
    [1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0],
    [1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0],
    [0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0],
    [0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0],
    [0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0],
    [1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1],
    [0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1],
    [0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1],
    [0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1],
    [0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1],
    [1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0]

  ];
  
}

function draw() {
  //tempo in millisecondi trascorsi da quando il programma è partito
  //millis()/1000 per avere il valore in secondi
  let t = millis() / 1000;  


  //floor()--> Calculates the closest integer value that is less than or equal to the value of a number.
  //Prende la parte "intera" del risultato della divisione (t/colorSwitchSpeed)

  //t/colorSwitchSpeed permette di capire quante volte il colore è stato cambiato
  //diviso il tempo trascorso per la velocità con cui il colore cambia --> ottengo il numero di lampeggi eseguiti

  //%2 resto della divisione per 2 --> sarà un valore 0 o 1 
  //== 0 (quando il risultato è 0 la variabile flip è true, 
  //quando il risultato è 1 la variabile flip è false)
  let flip = floor(t / colorSwitchSpeed) % 2 == 0;
  
  //se flip è true --> sfondo bianco e figure nere 
  //se flip è false --> sfondo nero e figure bianche
  if (flip) {
  bgColor = color(255);    
  rectColor = color(0, 0, 0); 
  } else {
  bgColor = color(0, 0, 0);   
  rectColor = color(255);    
  }
  
  background(bgColor);
  

  //Leggo ogni riga del pattern
  //dentro ogni riga leggo ogni quadratino
  //Se quel quadratino contiene 1, disegnalo.

  //ciclo per andare da una riga all'altra
  //basePattern.lenght è il numero totale di righe
  for (let riga = 0; riga < basePattern.length; riga++) {

    //per ogni riga si guardano le colonne (i numeri dentro ad ogni riga)
    //basePattern[riga].length indica quanti numeri ci sono in quella riga, quindi cante colonne ci sono 
    for (let colonna = 0; colonna < basePattern[riga].length; colonna++) {

        //la posizione specifica cella è composta da una riga e una colonna in quella riga
        let cella = basePattern[riga][colonna];

        //il rect verrà colorato solo se nella specifica posizione della
        //colonna c'è il valore 1
        if (cella == 1) {
            
            //posizione lungo l'asse delle x --> numero della colonna per cellSize (20px)
            let x = colonna * cellSize;
            let y = riga * cellSize;

            fill(rectColor);
            rect(x,y,cellSize, cellSize);
        }
    }

  }

}