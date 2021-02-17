export default class OutroDrag{
    constructor(){
       this.cards = document.querySelectorAll('.card')
       this.dropzones = document.querySelectorAll('.dropzone')
    }


    addEvent(){
        this.cards.forEach(item=>{
            item.addEventListener('dragstart',()=>{
                this.dragstart()
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
        this.dropzones.forEach(item=>{
            item.addEventListener('dragover',()=>{
                this.dragover()
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

        dragstart(){
           this.dropzones.forEach(dropzone => dropzone.classList.add("highlight"))
           this.cards.forEach((item, index)=> item[index].classList.add('.is-dragging'))
        }
        drag(){
            console.log("drag")
            
        }

        dragend(){
            this.dropzones.forEach(dropzone => dropzone.classList.remove("highlight"))
            this.cards.forEach((item, index)=> item[index].classList.remove('.is-dragging'))
        }
        dragenter(){
            console.log("dragenter")
        }
        dragover(){
            console.log("dragover")
        }
        dragleave(){
            console.log("dragleave")
        }
        drop(){
            console.log("drop")
        }



    
   


    init(){
       
       
        this.addEvent();
    }

}
