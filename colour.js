
const container=document.querySelector('.container')
const refreshBtn=document.querySelector('.refersh-btn')
const generatePalette=()=>{
   container.innerHTML="" ;
    for(let i=0 ; i<10 ;  i++)
    {
        let randomHex=Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex=`#${randomHex}`
        console.log(randomHex)
        const color=document.createElement("li") ;
        // classList is used to add CSS class to an element
        color.classList.add('colour')
        color.innerHTML=`
        <div class="rect-box" style="background:${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`
        color.addEventListener('click',()=>copyColor(color,randomHex)) ;
        container.appendChild(color) ;
 
    }

}
const copyColor=(ele,hexVal)=>{
    const colorELement=ele.querySelector('.hex-value')
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorELement.innerText='Copied'
        setTimeout(()=>{
            colorELement.innerText=hexVal
        },1000)
    }).catch(()=>alert("Failed to copy text"))
}
generatePalette()
refreshBtn.addEventListener('click',generatePalette)