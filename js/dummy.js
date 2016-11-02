var assert = require("assert");
/**
 * Created by colinstclaire on 10/28/16.
 */

function recFib(intN) {
    if (intN <= 2) {
        return 1;
    } else {
        return recFib(intN-2) + recFib(intN-1);
    }
}

function iterFib(intN) {
    var n1 = 0;
    var n2 = 1;
    var n3 = 1;

    for (var i = 2; i <= intN; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n3;
}

var n = 7;
assert(recFib(n) === iterFib(n))
console.log("recFib(" + n + ") = " +
    recFib(n) + "; iterFib(" + n + ") = " + iterFib(n));