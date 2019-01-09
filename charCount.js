var countLetters = function(sentence) {
  var arr = sentence.replace(/\s/g, "").toLowerCase().split("");
  var final = {};

  for (var num in arr){
    var current = arr[num];
    final[current] = 0;

    for (var x in arr) {
      if (current === arr[x]) {
        final[current]++;
      }
    }
  }
  return final;
};

console.log(countLetters("Lighthouse in the House"));
