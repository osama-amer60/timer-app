const durationInput = document.querySelector("#duration")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")

const circle = document.querySelector("circle")

const perimeter = circle.getAttribute("r")*2*Math.PI
circle.setAttribute("stroke-dasharray",perimeter)

let duration =0;
let timer = new Timer(durationInput, startBtn, pauseBtn,{
    onStart(totalDuration){
        console.log("timer started !!")
        duration = totalDuration
    },
    onTick(timeRemaining){
        circle.setAttribute("stroke-dashoffset",
            perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete(){
        console.log("timer is completed")
    }
})

