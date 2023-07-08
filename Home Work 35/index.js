// const div = document.createElement("div");
// const innerDiv = document.createElement('div');
// const body = document.querySelector("body");

// div.classList.add("block");
// innerDiv.innerHTML ='h1';
// innerDiv.classList.add('innerDiv');
// div.append(innerDiv);
// innerDiv.style.backgroundColor = 'black'
// body.prepend(div);
// console.log(div);

// // div.onclick = () => console.log('onemouseclick');
// // div.onmousedown = () => console.log('onemousedown');
// // div.onmouseup = () => console.log('onemouseup');
// // div.ondblclick = () => console.log('onemoondbclick');
// // div.oncontextmenu = () => console.log('contextmenu');
// // let x = null;
// // let y = null;

// // let isDiveActive = false;

// // div.onmousedown = (e) => {
// //   console.log(e);
// //   x = e.screenX;
// //   y = e.screenY;
// //   isDiveActive = true;
// // };

// // div.onmousemove = (e) => {
// //   if (isDiveActive) {
// //     console.log(e);
// //     let _x = e.screenX;
// //     let _y = e.screenY;

// //     const differentX = _x - x;
// //     const differentY = _y - y;

// //     div.style.left = !div.style.left
// //       ? `${differentX}px`
// //       : `${parseInt(div.style.left) + differentX}px`;
      
// //     div.style.top = !div.style.top
// //       ? `${differentY}px`
// //       : `${parseInt(div.style.top) + differentY}px`;

// //     x = _x;
// //     y = _y;
// //   }
// // };

// // div.onmouseup = (e) => {
// //   isDiveActive = false;
// // };

// div.addEventListener('click', () => {
//     console.log('click')

// })

// document.addEventListener('keydown', e => {
//     console.log('keyup', e.keyCode)
// })



let btnGetLink = document.querySelector(".btnPrompt");
let btnGoTolLink = document.querySelector(".btnLink");
let link;

btnGetLink.addEventListener('click', function () {
link = prompt("Введите ссылку");
    if (!/^https?:/.test(link)) { link = 'https://' + link;
} 
    else if (/^http?:/.test(link)) { link = 'https://' + link.split('').slice(7).join('');
}
})


btnGoTolLink.addEventListener("click", function () {
    if (!link) {
        alert('Нет ссылки');
    } else {
        location.href = link;
    }
})




