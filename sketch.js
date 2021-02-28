//Create variables here
let dog,dogImg, happyDogImg, database, foodS, foodStock;
let feedTime;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,350);
  dog.addImage(dogImg);
  dog.scale = 0.35;

  
  feedButton = createButton("Feed the dog");
  feedButton.position(width/2+200,80);

  addFoodButton = createButton("Add food to the stock");
  addFoodButton.position(width/2+300,80);

  foodObj = new Food();
  foodObj.getFoodStock();
  
  var feedTimeRef = database.ref('lastFed');
  feedTimeRef.on("value",function(data){
    feedTime = data.val();
  });

  
}


function draw() {  

  
  //add styles here
  background(46, 139, 87);
  
  if (feedTime !== undefined){
    fill(255);
    textSize(15);
    if(feedTime>=12){
      text("Last Feed: "+ feedTime%12 + " PM", width-150,80);
    }
    else if(feedTime===0){
      text("Last Feed: 12 AM ", width-150,80);
    }
    else{
      text("Last Feed: "+ feedTime + " AM", width-150,80);
    }
  }
  
  
  foodObj.display();
  
  drawSprites();
  

  feedButton.mousePressed(function(){
    dog.addImage(happyDogImg);
    
    foodS = foodS-1;
    foodObj.updateFoodStock(foodS);
    feedTime = hour();
    database.ref('/').update({
      lastFed: feedTime
    });
  });

  addFoodButton.mousePressed(function(){
    foodS+=1;
    foodObj.updateFoodStock(foodS);
  });
  
}

