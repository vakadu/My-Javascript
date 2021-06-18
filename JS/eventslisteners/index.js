document.getElementById("grandparent")
    .addEventListener('click', (e) => {
        e.stopPropagation();
        console.log("grandparent clicked")
    }, true); //capturing

document.getElementById("child")
    .addEventListener('click', (e) => {
        console.log("child clicked")
    }, true); //bubbling

document.getElementById("clickme")
    .addEventListener('click', (e) => {
        console.log("button clicked")
    }, true); //bubbling


//last param is usecapture if true means capturing, false means bubbling
//default its bubbling
//e.stoppropagation stops propagation
