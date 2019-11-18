window.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    fetchJson();
}

function fetchJson() {
    
    const urlParams = new URLSearchParams(window.location.search);
    let search = urlParams.get("pod");
    console.log(search)
    
    
    fetch("http://georgianadancu.com/wordpress/wp-json/wp/v2/"+search)
           .then(res=>res.json())
           .then(data=>{
        console.log(data);
        data.forEach(printOutEachPost);
       });
}

function printOutEachPost(e) { 
    console.log(e.ticket_price);
    const copiesContainer = document.querySelector('#templateCopiesContainer');
    const myTemplate = document.querySelector('.podTemplate').content;
    let myCopy = myTemplate.cloneNode(true);
    
    // populate the elements within the clone here
    let h1 = myCopy.querySelector('h1');
    h1.textContent = e.title.rendered;
    
    let description = myCopy.querySelector('.description');
    description.innerHTML = e.content.rendered;
    
    let ticketPrice = myCopy.querySelector('.ticket_price');
    ticketPrice.innerHTML = e.ticket_price;
    
    
     // let img = myCopy.querySelector('h1');
    // img.setAttribute('src', e.)
    copiesContainer.appendChild(myCopy);
    
    
  

}