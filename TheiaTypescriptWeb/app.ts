class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    isRunning: boolean;
    constructor(element: HTMLElement) {
        this.isRunning = false;
        this.element = element;
        this.element.innerHTML += "The UTC time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.isRunning = true;
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toLocaleString(), 100);
    }

    stop() {
        this.isRunning = false;
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var btn1 = (<HTMLButtonElement[]><any>document.getElementsByName("btnStop"))[0];
    var greeter = new Greeter(el);
    greeter.start();
    alert("ok so far");

    btn1.addEventListener('click', function () {
        //alert("ok so far");
        greeter.stop();
    }, false);
};