import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


console.log(list.toString());
console.log(list.size)

list.pop()

console.log(list.at(0))
list.prepend('new');

console.log(list.toString());
console.log(list.size)
