class Counter {
  constructor(elem, delay) {
    var value =0;
    if (elem != null) {
      value = parseInt(elem.getAttribute("value"), 10);
    }
    var interval;
    var titles = [
      "Developer",
      "Blogger",
      "Learner"
    ];
    function updateDisplay(value) {
      elem.innerHTML = value;
    }
    function run() {
      value += 1;
      if (value == titles.length)
        value = 0;
      elem.setAttribute("value", value);
      updateDisplay(titles[value]);
    }
    function start() {
      interval = window.setInterval(run, delay);
    }
    // exports
    // This actually creates a function that our counter can call
    // you'll see it used below.
    //
    // The other functions above cannot be accessed from outside
    // this function.
    this.start = start;
  }
}
  
  var elem = document.getElementById("title-switcher");
  
  counter = new Counter(elem, 2000);
  counter.start();
  