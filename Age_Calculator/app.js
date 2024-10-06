function getresult() {
  var dobinput = document.getElementById("dob");
  var result = document.getElementById("result");

  var dob = new Date(dobinput.value);
  var todaydate = Date.now();
  var diff = todaydate - dob;
  var age = diff / (12 * 24 * 30 * 60 * 60 * 1000);
  var ages = Math.floor(age);
  result.innerHTML = "Your age is " + ages + " years old ";
}
