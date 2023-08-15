var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var newArray = [];
for (var i = 0; i < array.length; i++) {
    var number = array[i];
    var numberStr = number.toString();
    if (numberStr.startsWith('2') || numberStr.startsWith('5')) {
        newArray.push(number);
    }
}
console.log(newArray);



function boolStrNum(data) {
    console.log(typeof data );
}
boolStrNum(false);
boolStrNum('hello world!');
boolStrNum(42);



var allTags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var tags = {};
for (var i = 0; i <allTags.length; i++) {
    var tag = allTags[i];
    if (tags[tag]) {
        tags[tag]++;
    } else {
        tags[tag] = 1;
    }
}
console.log(tags);

