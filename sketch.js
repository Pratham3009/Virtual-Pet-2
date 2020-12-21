var dog, happyDog, database, foodS, foodStock;
var dogImg,happyDogImg;

var database;

var fedtimesec

var foood,foodObj;

var fooodi,foodObjs

var feed,addFood;
var fedtime,lastfed;

function preload()
{
  //load images here
  dogImg =loadImage("dogImg.png");
  happyDogImg =loadImage("dogImg1.png");
}

function setup() {
	createCanvas(1000,500);
  
  database =firebase.database();
  
  foodObj =new food();

  dog =createSprite(850,300,5,5);
  dog.scale =0.3;
  dog.addImage(dogImg);

  feed =createButton("Feed the dog");
  feed.position(700,60);
  feed.mousePressed(feedDog);

  addFood =createButton("Add Food");
  addFood.position(800,60);
  addFood.mousePressed(addFoods);

  foodObj.getfood();
  

}


function draw() {  

  background(46, 139, 87)
  //add styles here               

  foodObj.display();
  dog.display();
 
  drawSprites();
  
  fedtime = hour();
  textSize(15);
  fill("red");
  text("LAST FEED :" + fedtime,250,48);

}

function addFoods()
{
foodObj.foodStock++;
database.ref('/').update({
  Food:foodObj.foodStock
}) 
}

function feedDog()
{
  dog.addImage(happyDogImg);

  foodObj.updateFood(foodObj.getfood()-1);
  database.ref('/').update({
    Food:foodObj.getfood(),
  })
}