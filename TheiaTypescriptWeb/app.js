var Greeter = (function () {
    function Greeter(element) {
        this.isRunning = false;
        this.element = element;
        this.element.innerHTML += "The UTC time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.isRunning = true;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toLocaleString(); }, 100);
    };
    Greeter.prototype.stop = function () {
        this.isRunning = false;
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var btn1 = document.getElementsByName("btnStop")[0];
    var greeter = new Greeter(el);
    greeter.start();
    alert("ok so far");
    btn1.addEventListener('click', function () {
        greeter.stop();
    }, false);
};
