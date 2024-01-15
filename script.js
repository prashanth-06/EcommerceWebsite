let slide=document.querySelectorAll('.slidesCont')
let contEl=document.querySelectorAll('.cont')
let count=0

slide.forEach(function(slides,index){
    slides.style.left=`${index*100}%`
})

function myFunc(){
    slide.forEach(function(car){
        car.style.transform=`translateX(-${count*100}%)`
    })
}

setInterval(function(){
    count++;
    if (count==slide.length){
        count=0
    }
    myFunc()
    console.log('Hello')
},2000)

contEl.forEach(function(cards){
    cards.addEventListener('click',function(){
        document.querySelector(".container").style.display='none'
        let div=document.createElement('div')
        console.log(cards.firstElementChild.src)
        div.classList.add('cardDetails')
        div.innerHTML=`
        <img src=${cards.firstElementChild.src} alt="">
        <div class="cardText">
            <h2>Trending Wear</h2>
            <h2>Upto 30% OFF Hurry Up.....</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem asperiores</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>
        `
        document.querySelector('body').appendChild(div)
    })

})

