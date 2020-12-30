

var board =    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

const width = 40;
const tuiles = [];
var position = 450;
var onFood = false;
var onHole = false;
var positionFood;
var dernierTrouvisité;
var board_div =  document.getElementById('board');
var gameOver_div = document.getElementById('gameOver');
var gridIsAlreadyOn = false;
var mouvement;

function positionnerFood()
{
  do {
    positionFood = getRandomInt(41, 757)
  } while (positionFood % 40 === 0 || (positionFood + 1) % 40 === 0);
    tuiles[positionFood].classList = "food";
    board[positionFood] = 3;
}

function createGrid() //creation de la grille au lancement du jeu
{
  for(let i = 0; i < board.length; i++)
  {
    const tuile = document.createElement('div')
    board_div.appendChild(tuile);
    tuiles[i] = tuile;

    tuiles[i].classList.add(typeDeTuile(i))
  }
}
function refreshGrid()
{
  for(let i = 0; i < board.length; i++)
  {
    tuiles[i].classList = typeDeTuile(i);
  }
}

function typeDeTuile(e) //e = posiition sur la grille
{
  var x;
  switch(board[e])
  {
    case 0: x = 'sky';
            break;
    case 1: x = 'wall';
            break;
    case 2: x = 'perso';
            break;
    case 3: x = 'food';
            break;
    case 99: x = 'hole';
  }
  return x;
}


function positionnerPerso()
{
  board[position] = 2;
}

// 0 = sky
// 1 = wall
// 2 = personnage
// 3 = food
// 99 = néant


function askForMove(e)
{
  var nouv;
  switch (e.keyCode)
  {
    case 37:  nouv = position - 1;
              mouvement = "holeLeft";
              break;
    case 38:  nouv = position - width;
              mouvement = "holeUp";
              break;
    case 39:  nouv = position + 1;
              mouvement = "holeRight";
              break;
    case 40:  nouv = position + width;
              mouvement = "holeDown";
  }
  switch(checkMove(nouv))
  {
    case 'wall':break;
    case 'sky':
                move(nouv, checkMove(nouv));
                break;
    case 'hole':
                if(mouvement == tuiles[nouv].classList)
                {
                  move(nouv, checkMove(nouv))
                }
                break;
    case 'food':
                move(nouv, checkMove(nouv));
                break;
  }
}

function move(e, f)   //e = nouvelle position - f = type de la nouvelle tuile
{
  switch(f)
  {
    case 'wall':
      break
    case 'sky':                                           //on se déplace vers 'sky'
              board[e] = 2;
              tuiles[e].classList.replace("sky", "perso");                    // nouvelle tuile
              if(!onFood && !onHole)                                         // on arrive de "sky"
              {
                    tuiles[position].classList.replace("perso", "sky");      // ancienne tuile
                    board[position] = 0;                                     //ancienne position
              }
              else if(onFood)                                                // on arrive de 'food'
              {
                    console.log('ca marche');
                    tuiles[position].classList.replace("perso", mouvement); // ancienne tuile
                    board[position] = 99;                                   //ancienne position
                    onFood = false;
              }
              else if(onHole)
              {
                    tuiles[position].classList.replace("perso", dernierTrouvisité); // ancienne tuile
                    board[position] = 99;                                //ancienne position
                    onHole = false;
              }
              position = e;
              break;


  case 'food':                                                      //on se déplace vers 'food'
              board[e] = 2;
              tuiles[e].classList.replace("food", "perso");         // nouvelle tuile

              if(!onFood && !onHole)                                // on arrive de 'sky'
              {
              tuiles[position].classList.replace("perso", "sky");   // ancienne tuile
              board[position] = 0;
              }
              else if(onFood)                                       // on arrive de 'food'
              {
              tuiles[position].classList.replace("perso", mouvement);
              board[position] = 99;
              onFood = false;
              }
              else if(onHole)
              {
                tuiles[position].classList.replace("perso", mouvement);
                board[position] = 99;
                onHole = false;
              }
              position = e;
              onFood = true;
              positionnerFood()
              break;


  case 'hole':                                                                //on se déplace vers 'hole'
              board[e] = 2;                                                   //nouvelle position
              tuiles[e].classList.replace("holeUp", "perso");                   // nouvelle tuile
              tuiles[e].classList.replace("holeDown", "perso");
              tuiles[e].classList.replace("holeLeft", "perso");
              tuiles[e].classList.replace("holeRight", "perso");
              if(!onFood && !onHole)                                          // on arrive de 'sky'
              {
              tuiles[position].classList.replace("perso", "sky");
              board[position] = 0;
              }
              else if(onFood)                                                  // on arrive de 'food'
              {
              tuiles[position].classList.replace("perso", mouvement);
              board[position] = 99;
              onFood = false;
              }
              else if(onHole)                                                  // on arrive de 'hole'
              {
              tuiles[position].classList.replace("perso", mouvement);
              board[position] = 99;
              onFood = false;
              }
              position = e;
              onHole = true;
              dernierTrouvisité = mouvement;                                  // nouvelle tuile
  }
}





function getRandomInt(min, max)
{
return Math.floor(Math.random() * (max - min)) + min;
}

function checkMove(e) // e == nouvelle position demandé par le joueur
{
  var check;
  switch(board[e])
  {
    case 0: check = 'sky';
    break;
    case 1: check = 'wall';
    break;
    case 3: check = 'food';
    break;
    case 99: check = 'hole';
    break;
  }
  return check;
}

positionnerPerso();
createGrid()
document.addEventListener('keydown', askForMove);
