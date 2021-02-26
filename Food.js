class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
    }

     display(){

        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.image,700,300,70,70);

        if (foodS !== 0){
            for (var i=0; i<foodS; i++){

                if (i%10 === 0){
                    y = y+50;
                    x = 80;
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }


    }
    getFoodStock(){
        var foodStockRef=database.ref('food');
        foodStockRef.on("value",function(data){
            foodS = data.val();
        });
    } 

    updateFoodStock(x){
        database.ref('/').update({
            food:x
          });
    } 

    
}
