const _ = require("lodash");

let items = [1, [2, [3, [4, [5]]]]];

const flattenItems = _.flattenDeep(items);

console.log(flattenItems);
