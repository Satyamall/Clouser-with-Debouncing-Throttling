// function

// it is a way that an inner function still references a value which is available outside it

const allStates=[]
function useState(init)
{
    let state = init;

    const update = (newValue)=>{
        const previousValue = allStates[allStates.length-1];
        if(typeof newValue === 'function'){
            const updateValue = newValue()
            allStates.push(updateValue)
        }
        else{
            state = newValue;
            allStates.push(previousValue)
        }
        return state
    }
    return [state, newValue]
}
// function outer(){
//     let value = 100;
//     let a =10;
//     return function inner(){
//         console.log(value);
//     }
// }

// const inn = outer();
// inn()
// inn()
// inn()

// console.log(value)

function Component(){
    const [value,setState]= useState(100);

    function add(){
        setState(value+1)
    }

    console.log(value, allStates);
    return {add}
}

let comp = Component()
comp.add()
// * update Component
comp = Component()
comp.add()
// * update Component
comp = Component()
comp.add()
// * update Component
comp = Component()
comp.add()
// * update Component

console.log(allStates)