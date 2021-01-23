let container = document.getElementById('box-container')

let i = 6;

// document.addEventListener('click', function (event) {
//     var x = event.clientX;
//     var y = event.clientY;

//     i++

//     container.innerHTML += `
//         <div class="random-box" id ="sskotak${i}" ></div>
//     `

//     event.preventDefault()


//     console.log(event)
// })

function create(event) {
    //Create the image
    var i = document.createElement('div');

    //Set the source of the image
    i.classList += 'kotak-random'


    //Set CSS styles so it appears where you clicked (Top left corner)
    i.style.left = event.clientX + 'px';
    i.style.top = event.clientY + 'px';

    //Add it to the body of the document
    document.body.appendChild(i);
    console.log(i)
}
//Main event listener for clicks
document.addEventListener('click', create);