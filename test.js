for (let i = 1; i <= 3; i++) {
    console.log(i);
}

var i= 1;
while (i <= 3) {
    console.log(i);
    i++;
}

i = 1;
do {
    console.log(i);
    i++;
} while (i <= 3);

grades_arr = [99, 95, 100, 98, 96]

arr2 = grades_arr;
arr2[0] = 1000;
for (let i = 0; i < grades_arr.length; i++) {
    console.log(grades_arr[i]);
}
console.log(arr2[0]);