let str = "ferrari";

let reg1 = /ca(r|t)/;

let reg2 = /pr?op/;

let reg3 = /ferr(et|y|ari)/;

let reg4 = /\b\w+ious\b/;

let reg5 = /\s(\.|,|:|;)/;

let reg6 = /\w{7}/;

let reg7 = //;

console.log("cat".match(reg1));
console.log("prop".match(reg2));
console.log("ferret".match(reg3));
console.log("conscious".match(reg4));
console.log(" .".match(reg5));
console.log("MartinK".match(reg6));
console.log("hEl".match(reg7));

verify(reg1, ["my car", "bad cats"], ["camper", "high art"]);

verify(reg2, ["pop culture", "mad props"], ["plop", "prrrop"]);

verify(reg3, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

verify(reg4, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

verify(reg5, ["bad punctuation ."], ["escape the period"]);

verify(
    reg6,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]
);

verify(
    reg7,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes)
        if (!regexp.test(str)) {
            console.log(`Failure to match '${str}'`);
        }
    for (let str of no)
        if (regexp.test(str)) {
            console.log(`Unexpected match for '${str}'`);
        }
}

console.log("red platypus".match(reg7));