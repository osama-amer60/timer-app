class Timer {
    constructor(durationInput, startBtn, pauseBtn,callback){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callback) {
            this.onStart = callback.onStart
            this.onTick = callback.onTick
            this.onComplete = callback.onComplete

        }


        this.startBtn.addEventListener("click",this.start)
        this.pauseBtn.addEventListener("click",this.pause)
    };

    start = () =>{
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.inttervalId = setInterval(this.tick, 50);
    };
    pause = () =>{
        clearInterval(this.inttervalId)
    };
    tick = () =>{
        if (this.timeRemaining <=0) {
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }
        }else{
            this.timeRemaining = this.timeRemaining - 0.05        
            if (this.onTick) {
                this.onTick(this.timeRemaining)
            } 
        }

    } ;   

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    };

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2)
    }

}