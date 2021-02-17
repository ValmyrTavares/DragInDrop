export default class OutroDrag{
    constructor(){
       this.cards = document.querySelectorAll('.card')
       this.dropzones = document.querySelectorAll('.dropzone')
    }


    addEvent(){
        this.cards.forEach((item,index)=>{
            item.addEventListener('dragstart',()=>{
                this.dragstart(index)
            })
        })
        this.cards.forEach(item=>{
            item.addEventListener('drag',()=>{
                this.drag()
            })
        })
        this.cards.forEach(item=>{
            item.addEventListener('dragend',()=>{
                this.dragend()
            })
        })
        this.dropzones.forEach(item=>{
            item.addEventListener('dragenter',()=>{
                this.dragenter()
            })
        })
        this.dropzones.forEach((item,index)=>{
            item.addEventListener('dragover',()=>{
                this.dragover(index)
            })
        })
        this.dropzones.forEach(item=>{
            item.addEventListener('dragleave',()=>{
                this.dragleave()
            })
        })
        this.dropzones.forEach(item=>{
            item.addEventListener('drop',()=>{
                this.drop()
            })
        })
    }

        dragstart(index){
           this.dropzones.forEach(dropzone => dropzone.classList.add("highlight"))
        //    this.cards.forEach((item, index)=> item[index].classList.add('.is-dragging'))
        this.cards[index].classList.add("is-dragging")
        }
        drag(){
            console.log("drag")
            
        }

        dragend(){
            this.dropzones.forEach(dropzone => dropzone.classList.remove("highlight"))
            this.cards.forEach(item => item.classList.remove("is-dragging"))
            
        }
        dragenter(){
            // console.log("dragenter")
        }
        dragover(index){
           this.dropzones[index].classList.add("over")
           this.cardBeingDragged = document.querySelector(".is-dragging")
           this.selectDropZone = document.querySelector(".over")
           this.selectDropZone.appendChild(this.cardBeingDragged)
        }
        dragleave(){
            this.dropzones.forEach(item => item.classList.remove("over"))
        }
        drop(){
            //console.log("drop")
        }



    
   


    init(){
       
       
        this.addEvent();
    }

}
