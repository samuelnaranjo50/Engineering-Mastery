var bike = {
color: 'red',
wheel_size: 27,
startRiding(){
    console.log('Riding at 1km/h');
},
["Stop riding *"](){
    console.log('Stoping the bike');
},
};

bike.startRiding(); //Calling with . notation
bike["Stop riding *"](); //Calling with [] notation