// (world: boolean[][]) => boolean[][]
export const next = (world) => {
  var state = ''; // The new state.
 console.log("world in next:", world)
 var check=''
  for (var i=1; i<world.length-1; i++) {
    console.log("world.charAt(i-1) + world.charAt(i+1):",i,':',(world.charAt(i-1) + world.charAt(i+1)))
    
    check = world.charAt(i-1) + world.charAt(i+1);
    

    
    
    
    
    switch (check) {
      
      case '..': var stateItem = (world.charAt(i) == '.') ? "." : "0"; state=state+stateItem; console.log("state0: ",state); break;
      case '0.':console.log('i:',i,":",world.charAt(i)); var stateItem= (world.charAt(i) == '.') ? "0" : "."; state=state+stateItem; console.log("state1: ",state); break;
      case '.0': var stateItem = (world.charAt(i) == '.') ? "0" : "."; state=state+stateItem; console.log("state2: ",state); break;
      case '00': var stateItem= (world.charAt(i) == '.') ? "0" : ".";  state=state+stateItem;console.log("state3: ",state); break;

    }
  }
  console.log("state in engin next::",state)
  return state;
};
// (pattern: string) => boolean[][]
export const parse = (pattern) => {
  const array = pattern.split('\n')
  return array.map((row) => row.split('').map(alive => alive !== '.'));
};
