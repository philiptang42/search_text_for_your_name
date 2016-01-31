/*jshint multistr:true */
var text = "My name is Philip. But \
not everyone calls me that. Some call \
me Phil. Or Flip, as in Felip. Or Frog.\
...as in, Frog. \
Either way, my name is Philip. Got it? \
Philip. Not Frog. It's Philip.";
var myName = "Philip";
var hits = [];

for(var i = 0; i < text.length; i++) {
  if(text[i] === myName[0]) {
    for(var j = i; j < i + myName.length; j++) {
      hits.push(text[j]);
    };
  };
};

if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
