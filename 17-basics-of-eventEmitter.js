const EventEmitter = require('events');


const customEmitter = new EventEmitter();

// ------------Emitting the event before the event registers itself, it means there would not be any listening to this emission
customEmitter.emit('click');

// --------Registering the click event for the first time
customEmitter.on('click',()=>{
    console.log("Button clicked for the 1st time");
})

// -----Emitting the click event after first registration of it. Now above listener will listen to this emission, Got it
customEmitter.emit('click');


// --------Registering the click event for the second time
customEmitter.on('click',()=>{
    console.log("Button clicked for the 2nd time");
})



// -----Emitting the click event again after second registration of it. Now both the above listeners will listen to this emission, Got it
customEmitter.emit('click');


// -------------Below event registration is to demonstrate that you can register parameter expecting events also 
customEmitter.on('paramEvent',(name,id)=>{
    console.log(`This is the data received:- name=${name} and id =${id} `)
})

// ---------emitting the respective event and passing the arguments too
customEmitter.emit('paramEvent',"Aman",5721);