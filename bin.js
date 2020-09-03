
    class Bin {
        constructor(x,y,width,height){
    var options = {
        isStatic:true
    
    }
    this.image = loadImage('dustbingreen.png')
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    
    
        }
        display(){
    imageMode (CENTER)        
    image (this.image , this.body.position.x , this.body.position.y , this.width , this.height)
        }
        
    }
