var arr = [
    {
        dp:"https://images.unsplash.com/photo-1701532645075-68b8e262e2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", 
        story:"https://images.unsplash.com/photo-1701213327963-742e60643f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1701519664310-f5fa33f5062f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D", 
        story:"https://images.unsplash.com/photo-1700522188830-bd0323a2c571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1682695795931-a546abdb6733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D", 
        story:"https://images.unsplash.com/photo-1701630714252-0b6778466e5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1701491809352-ba4c11bcf864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D", 
        story:"https://images.unsplash.com/photo-1701688213212-6f9ff4ed1e56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1682695798522-6e208131916d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D", 
        story:"https://images.unsplash.com/photo-1701526474661-78692d537503?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D"
    }, 
]

var storiya = document.querySelector("#storiya");

clutter = "";
arr.forEach(function (elem, idx) {
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiya.innerHTML= clutter;

storiya.addEventListener('click', function (dets) {
    document.querySelector("#full_screen").style.display = "block";
    document.querySelector("#full_screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

});