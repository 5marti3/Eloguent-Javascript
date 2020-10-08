let text = "Hi my 'name' is Martin and my friends arent't cocks";

console.log(text);

console.log(text.replace(/(^|\W)'|'(\W|$)/g, "$1\"$2"));

