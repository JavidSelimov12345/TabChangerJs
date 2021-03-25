[...document.querySelectorAll('.tab')].map(tab=>{
    tab.onclick=function(){
        document.querySelector('.tabs .active').classList.remove('active')
        this.classList.add('active')

        const index= this.getAttribute('data-id')

        

        document.querySelector('.contentTab.active').classList.remove('active')

        document.querySelector(`.contentTab[data-id="${index}"]`).classList.add('active')

    }
})
