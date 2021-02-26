//Create variables here
let dog,dogImg, happyDogImg, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300);
  dog.addImage(dogImg);
  dog.scale = 0.35;

  
  feedButton = createButton("Feed the dog");
  feedButton.position(width/2-50,80);

  addFoodButton = createButton("Add food to the stock");
  addFoodButton.position(width/2+50,80);

  foodObj = new Food();
  foodObj.getFoodStock();

  
}


function draw() {  

  
  //add styles here
  background(46, 139, 87);
  
  drawSprites();
  

  feedButton.mousePressed(function(){
    dog.addImage(happyDogImg);
    
    foodS = foodS-1;
    foodObj.updateFoodStock(foodS);
    feedtime:hour();

  });

  addFoodButton.mousePressed(function(){
    foodS+=1;
    foodObj.updateFoodStock(foodS);
  });
  
}

