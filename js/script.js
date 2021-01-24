function create(event) {
    //Create the image
    var i = document.createElement('div');

    //Set the source of the image
    i.classList += 'kotak-random'


    //Set CSS styles so it appears where you clicked (Top left corner)
    i.style.left = event.clientX + 'px';
    i.style.top = event.clientY + 'px';
    let t = Math.floor((event.clientY + 20) / 67)
    i.style.animationDuration = t + 's'

    //Add it to the body of the document
    document.body.appendChild(i);
    console.log(t)
}
//Main event listener for clicks
document.addEventListener('click', create);