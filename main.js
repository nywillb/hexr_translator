$('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

function capString(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var replacements = {
  "plox": "please",
  "lelz": "ha",
  "hai thar": "hi there",
  "mee-wow": "Wow, that is an interesting cat fact",
  "hexy_hello": "Hello",
  "hexr": "hacker", // this has to be above hex
  "hex": "hack",
  "outpot": "output",
  "broswer": "browser",
  "sput_oot": "output",
  "nao": "now",
  "wheye": "why",
  "nu": "no",
  "cod": "code",
  "moar": "more"
};

function convert() {
  var str = document.getElementById('input').value.toLowerCase();
  for (var toReplace in replacements) {
    str = str.replace(toReplace, replacements[toReplace]);
  }
  str = capString(str);
  document.getElementById("outpot").innerHTML = str;
}
