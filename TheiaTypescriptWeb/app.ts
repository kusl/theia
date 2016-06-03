class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    isRunning: boolean;
    stopButton: HTMLButtonElement;

    constructor(element: HTMLElement, stopButton: HTMLButtonElement) {
        this.isRunning = false;
        this.element = element;
        this.element.innerHTML += "The UTC time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        this.stopButton.innerHTML = "Stop";
    }

    start() {
        this.isRunning = true;
        this.stopButton.innerHTML = "Stop";
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toLocaleString(), 100);
    }

    stop() {
        this.isRunning = false;
        this.stopButton.innerHTML = "Start";
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var btn1 = (<HTMLButtonElement[]><any>document.getElementsByName("btnStop"))[0];
    var greeter = new Greeter(el, btn1);
    greeter.start();

    var myEl = document.getElementById('btnStop');

    myEl.addEventListener('click', function () {
        if (greeter.isRunning) {
            greeter.stop();
        }
        else {
            greeter.start();
        }
    }, false);
};