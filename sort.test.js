const sort = require('./sort');

const cases = [
    {
        input: [2, 1],
        expected: [1, 2],
    },
    {
        input: [2, 1, 4, 3],
        expected: [1, 2, 3, 4],
    },
    {
        input: [2, 1, 1, 2, 1, 4, 4, 3],
        expected: [1, 2, 3, 4],
    },
    {
        input: [2, 1, 4, 3, 0, -1000],
        expected: [-1000, 0, 1, 2, 3, 4],
    },
    {
        input: [2, 1, 4, 4, 0, 3, 0, -1000],
        expected: [-1000, 0, 1, 2, 3, 4],
    },
    {
        input: [2, 1, -1000, 4, 4, 0, 3, 0, -1000],
        expected: [-1000, 0, 1, 2, 3, 4],
    },
    // {
    //     input: [2, 1, 2, -1000, 4, 4, 0, 3, 0, -1000],
    //     expected: [-1000, 0, 1, 2, 3, 4],
    // },
];

function test(unsorted, expected) {
    console.log('Unsorted input:');
    console.dir(unsorted);

    console.log('Sorting...');

    if (unsorted.length > 8) {
        console.log(`WARNING: With the factorial sorting complexity and input this huge (${unsorted.length} items) this is going to take a while...`);
    }

    const sorted = sort(unsorted);
    
    for (let i in sorted) {
        if (sorted[i] !== expected[i]) {
            console.error(`${sorted[i]} is not equal ${expected[i]}.`);
            console.log('Actual:');
            console.dir(sorted);
            console.log('Expected:');
            console.dir(expected);
            console.error('FAIL');
            console.log(``);
            return;
        }
    }

    console.log('Sorted:');
    console.dir(sorted);
    console.log(`PASS`);
    console.log(``);
}

for (let tc of cases) {
    test(tc.input, tc.expected);
}
