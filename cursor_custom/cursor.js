var elem = document.querySelectorAll('.element');

elem.forEach(val => {
    val.addEventListener('mouseenter', function () {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener('mouseleave', function () {
        val.childNodes[3].style.opacity = 0
        // val.style.backgroundColor = "transparent";
    })
    val.addEventListener('mousemove', function (e) {
        val.childNodes[3].style.left = e.x + "px";
        // val.childNodes[3].style.top = e.y + "px";
    })
});











// elem1.addEventListener('mousemove', function(e) {
//     elemImage.style.left = e.x + "px";
//     elemImage.style.top = e.y + "px";
// })
// elem1.addEventListener('mouseenter', function(e) {
//     elemImage.style.opacity = 1
// })
// elem1.addEventListener('mouseleave', function(e) {
//     elemImage.style.opacity = 0
// })