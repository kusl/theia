var Greeter = (function () {
    function Greeter(element, stopButton) {
        this.isRunning = false;
        this.element = element;
        this.element.innerHTML += "The UTC time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        this.stopButton.innerHTML = "Stop";
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.isRunning = true;
        this.stopButton.innerHTML = "Stop";
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toLocaleString(); }, 100);
    };
    Greeter.prototype.stop = function () {
        this.isRunning = false;
        this.stopButton.innerHTML = "Start";
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var btn1 = document.getElementsByName("btnStop")[0];
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
//# sourceMappingURL=app.js.map