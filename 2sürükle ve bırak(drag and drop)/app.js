const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
function dragStart(){
   this.className += ' hold'
   setTimeout(() => (this.className = 'invisible'),0) 
}

fill.addEventListener('dragend',dragEnd)
function dragEnd(){
    this.className = 'fill'    
}

//içi boş kutucuklarla da işlem yapabilmek için:
for (const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('drop',dragDrop)
}

// yukarıdaki draglar ne yapıyorsa onları etkin hale getirmek için:
function dragOver(e){
    e.preventDefault() //tekrar etmemesi için
    //console.log('dragOver')
}


function dragEnter(e){
    e.preventDefault()
    this.className += ' hover'

    //console.log('dragEnter')    
}


function dragLeave(){
    this.className = 'empty'
    //console.log('dragLeave')    
}


function dragDrop(){
    this.className = 'empty'
    this.append(fill)
    //console.log('dragDrop')
}