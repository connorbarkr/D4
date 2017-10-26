var names = {
  0: "Connor Barker",
  1: "Eric Chiang",
  2: "Rob Farlow",
  3: "Salmaan Khan"
};

var schedule = {
  0: "placeholder",
  1: "placeholder",
  2: "placeholder",
  3: "placeholder",
  4: "placeholder",
  5: "placeholder",
  6: "placeholder"
}

function getIndexByName(names, name) {
  return Object.keys(names).find(key => names[key] === name);
}

function getStart(list) {
  if (list[0] == "placeholder") return 0; // if schedule is empty set start to 0
  var start = parseInt(getIndexByName(names, list[6])) + 1; //initialize the starting index to the next name in the list
  if (start > 3) start = 0; // ensure it stays in range
  return start;
}

function scheduler(list, start) {
  var j = 0;
  for (var i = start; j < 7; i++) {
    if (i > 3) i = 0;
    list[j] = names[i];
    j++;
  }
}

function getName(list) {
  var d = new Date();
  name = list[d.getDay()];
  return name;
}

function startup() {
  var start = getStart(schedule);
  scheduler(schedule, start);
  document.getElementById("name").innerHTML = schedule[getName(schedule)];
}
