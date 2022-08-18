/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = []


backpack.push("Jedi Robe")
backpack.push('Lightsaber')
backpack.push('Crippling sense of failure and guilt')

backpack.splice(1,1)

backpack.push('Wookie Coat')

backpack.pop()

backpack.push('blue milk', 'baby yoda', 'a child named luke', "com device", 'high ground', 'blaster')

let stroller = [backpack.splice(3,2)]

console.log(backpack)
console.log(stroller)

console.log(backpack.length)

// for (i =0; i < backpack.length; i++)
// {
//     console.log(backpack[i])
// }

for (i in backpack)
{
    console.log(backpack[i])
}