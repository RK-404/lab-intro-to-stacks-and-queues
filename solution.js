const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let rem = this.top;
    this.top = this.top.next;
    return rem;
  }

  size() {
    let size = 0;
    let node = this.top;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  isEmpty() {
    return !this.top;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let min = this.top;
    let node = this.top.next;
    while (node) {
      if (node.data < min.data) {
        min = node;
      }
      node = node.next;
    }
    return min.data;
  }

  sort() {
    let current = this.top;
    while (current) {
      let min = this.findMin(current);
      let tmp = current.data;
      current.data = min;
      current = current.next;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = -Infinity;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    }
    else {
      this.last.next = newItem;
      this.last = newItem;
    }

    if (data > this.max) {
      this.max = data;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  isEmpty() {
    return this.first === null;
  }
  
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  count() {
    return this.size;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    return this.max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
