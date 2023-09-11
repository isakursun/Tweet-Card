const editableInput = document.querySelector(".editable")

const placeHolder = document.querySelector(".placeholder")

const counter = document.querySelector('.counter')

const tweetButton=document.querySelector('.button')

const readonly=document.querySelector('.readonly')

editableInput.onfocus=()=>{
    placeHolder.style.color = '#c5ccd3'
}

editableInput.onblur=()=>{
    placeHolder.style.color = '#98a5b1'
}

/* klavye etkinlik işlemleri */

editableInput.onkeypress=(e)=>{
    placeHolder.style.display='none'
    validateTweet(e.target)
}

editableInput.onkeyup=(e)=>{
    validateTweet(e.target)
}

const validateTweet=(element)=>{
    let text;
    let tweetLength=element.innerText.length
    let tweetLimit=100;
    if(tweetLength <= 0){
        placeHolder.style.display='block'
        counter.style.display='none'
        tweetButton.classList.remove('active')
    }else{
        tweetButton.classList.add('active')
        counter.style.display='block'
        placeHolder.style.display='none'
    }

    counter.innerText=tweetLimit-tweetLength

    if(tweetLength>tweetLimit){

        let overText=element.innerText.substr(tweetLimit,tweetLength)
        overText = `<span class='overSpan'>${overText}</span>`
        text = element.innerText.substr(0,tweetLimit) + overText
        readonly.style.zIndex='1'

        tweetButton.classList.remove('active')


        counter.style.color='#e0245e'
    }else{
        counter.style.color='#333'
    }


    readonly.innerHTML=text

}




