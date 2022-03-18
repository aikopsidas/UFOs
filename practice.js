// Functions can call other functions
function addition(a,b) { return a + b;
};
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  };
  console.log(doubleAddition(65, 34));

doubledoodoo = (c, d) => addition(c, d) *2;
console.log(doubledoodoo(33, 25));



let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    };
