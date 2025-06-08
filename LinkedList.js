
export class LinkedList {
  #list = [];
  #size = 0;

  append(value) {
    // Adds a new node containing @value to the end of the list
    const newNode = new Node(value);
    if (this.#size !== 0) {
      const lastNode = this.#list[this.#size - 1];
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
    return this.#list[this.#size - 1];
  }

  at(index) {
    // Returns the node at the given index
    let i = 0;
    let node = this.head;
    while (i < index) {
      let nextNode = node.nextNode;
      node = nextNode;
      i++;
    }
    return node;
  }

  pop() {
    // Removes the last element from the list
    delete this.#list[this.#size - 1];
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
