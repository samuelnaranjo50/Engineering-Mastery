var mytrain = ['gold', 'silver', 'wood'];


mytrain [2] = 'water';
mytrain [3] = 'wood';

// Retrieving specific element of a array

console.log('Value:', mytrain[1]);


// Iterating over all array elements

for(let i = 0; i < mytrain.length; i++){
    console.log('Value:', mytrain[i]);
}

// Iterating over section of array elements

for(let i = 2; i < 4; i++){
    console.log('Value:', mytrain[i]);
}