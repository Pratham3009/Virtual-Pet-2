class food{

    constructor()
    {
        this.lastFed;
        this.foodStock =0;

        this.image =loadImage("Milk.png");
    }

    

    display()
    {
      var x =80,y=100;
    
      
      if(this.foodStock!=0)
      {
        
        for(var i=0; i<this.foodStock; i++)
        {
          if(i%10 == 0)
          {
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
      
    }
    

    getfood()
    {
     var foodStockref =database.ref('Food');
    foodStockref.on("value",(data)=>{
      this.foodStock =data.val();
    })
    }


     updateFood()
{
  if(this.foodStock <= 0)
  {
    this.foodStock=0;
  }else{
    this.foodStock=this.foodStock-1;
  }
  
  database.ref('/').update({
    Food:this.foodStock
  })

}
}
