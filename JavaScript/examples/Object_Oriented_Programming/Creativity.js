class Creatives {
    creativityFlow(){
       console.log("Entering flow state ")
    }
}

class Musicians extends Creatives {
startMusicSession(){
    console.log("Picking up musical instrument")
}
}

class JazzMusician extends Musicians {
doyourthingMaster() {
    console.log("Jazzy melodies")
  }
}

class HipHopMusician extends Musicians {
doyourthingMaster() {
    console.log("Drop the beat")
  }
}

let sam = new HipHopMusician();

let sofiEcho = new JazzMusician();

sam.creativityFlow();
sam.startMusicSession();
sam.doyourthingMaster();

sofiEcho.creativityFlow();
sofiEcho.startMusicSession();
sofiEcho.doyourthingMaster();