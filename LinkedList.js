
export class LinkedList {
  #list = [];
  #size = 0;

  append(value) {
    // Adds a new node containing @value to the end of the list
    const newNode = new Node(value);
    // console.log('new Node to the end: ', newNode.value)
    if (this.#size !== 0) {
      const lastNode = this.at(this.#size - 1);
      // console.log('last node ', lastNode)
      // console.log('size: ', this.#size)
      // console.log('list', this.#list)
      lastNode.nextNode = newNode;
    }
    this.#list[this.#size] = newNode;
    this.#size ++;
  }

  prepend(value) {
    // Adds a new node containing @value to the start of the list
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.#list[0] = newNode;
    this.#size ++;
  }

  get size() {
    // Returns the total number of nodes in the list
    return this.#size;
  }

  get head() {
    // Returns the first node in the list
    return this.#list[0];
  }

  get tail() {
    // Returns the last node in the list
    return this.at(this.#size - 1);
  }

  at(index) {
    // Returns the node at the given index
    let node = this.head;
    for (let i = 0; i < index; i++) {
      let nextNode = node.nextNode;
      node = nextNode;
    }
    return node;
  }

  pop() {
    // Removes the last element from the list

    let currentNode = this.head;
    // Iterates until the the node pointing to the tail is found
    while (currentNode.nextNode !== this.tail) {
      currentNode = currentNode.nextNode;
    }
    // Unlink the nodes
    currentNode.nextNode = null;
    this.#size --;


  }

  contains(value) {
    // Returns true if the passed in value is in the list
    // and otherwise returns false.
    let currentNode = this.head;
    for (let i = 0; i < this.#size; i++) {
      if (currentNode.value === value) return true;
      let nextNode = currentNode.nextNode;
      currentNode = nextNode;
    }
    return false;
  }

  find(value) {
    // Returns the index of the node containing value, or null if not found.
    let currentNode = this.head;
    for (let i = 0; i < this.#size; i++) {
      if (currentNode.value === value) return i;
      let nextNode = currentNode.nextNode;
      currentNode = nextNode;
    }
    return null;
  }

  toString() {
    // represents your LinkedList objects as strings,
    // so you can print them out and preview them in the console.
    //
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let stringList = '';
    let currentNode = this.head;

    while (currentNode !== null) {
      stringList += `(${currentNode.value}) -> `;
      let nextNode = currentNode.nextNode;
      currentNode = nextNode;
    }
    return stringList += 'null';
  }

}

class Node {
  value = null;
  nextNode = null;

  constructor(value) {
    this.value = value;
  }
}
