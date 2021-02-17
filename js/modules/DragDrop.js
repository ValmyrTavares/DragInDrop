export default class DragDrop{
    constructor(){
        this.img = document.querySelector("img")
        this.x=this.img.offsetTop;
        this.y=this.img.offsetLeft;
        this.dx = 0;
        this.dy = 0;
    }
    addEvent(){      
      
        this.img.addEventListener('mousedown',()=>{
            this.onStart()
        });        
        this.img.addEventListener('mouseup',()=> {
            this.mouseUp()
        })     
     
    }
    // onMove(event){     
        
    //     this.dy = (event.clientY - this.y); 
    //     console.log(this.img.offsetTop) 
    //     console.log(this.img.offsetLeft)    
    //     console.log(this.y)
    //     console.log(this.x)

    //     this.dx =( event.clientX - this.x);
    //     this.img.style.top = `${this.img.offsetTop + this.dy}px`
    //     this.img.style.left = `${this.img.offsetLeft + this.dx}px`
    //     console.log("Correndo")  
    // }

    onStart(){
        event.preventDefault() 
        console.log("Clicou")
        this.x = event.clientX;
        this.y = event.clientY;     
        console.log(this.y)
        console.log(this.x)  
         this.img.addEventListener('mousemove',this.onMove)
    }     

    mouseUp(){       
        console.log("Desclicou")
        this.img.removeEventListener('mousemove',this.onMove)
    }     
            
    // bindEvents(){
    //     this.onMove = this.onMove.bind(this)
    // }

    init(){
    // this.bindEvents();
    this.addEvent();
    }
}

        
       

  

   

      
       

   

// addEvent(){       
//     this.img.addEventListener('mousedown',this.onStart);        
//     this.img.addEventListener('mouseup',this.mouseUp,)     
 
// }
// onMove(){     
//   console.log("correndo")
// }


// onStart(event){
//     event.preventDefault()       
//      this.img.addEventListener('mousemove',this.onMove)
// }     

// mouseUp(){       
//     console.log("Desclicou")
//      this.img.removeEventListener('mousemove', this.onMove)
// }     

// bindEvents(){
// this.onMove = this.onMove.bind(this)
// this.mouseUp = this.mouseUp.bind(this)
// this.onStart = this.onStart.bind(this)

// } 


// init(){
//     this.bindEvents();
//    this.addEvent();
//     console.log(this.img)
// }