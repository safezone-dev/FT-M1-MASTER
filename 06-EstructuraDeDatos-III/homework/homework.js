"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  
  // CASO BASE CUANDO SE LLEGA A UN NODO O HIOIJA BLANCA
  if (!this.left && !this.right) return 1;

  // CUANDO NUESTRO ARBOL TIENE UN HIJO
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();

  // CUANDO TIENE DOS HIJOS
  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      let myTree = new BinarySearchTree(value);
      this.left = myTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value < this.value) {
    if (!this.left) return false;
    return this.left.contains(value);
  }
  if (value > this.value) {
    if (!this.right) return false;
    return this.right.contains(value);
  }
};
BinarySearchTree.prototype.depthFirstForEach = function (cb, recorrido) {
  if (recorrido === "in-order" || !recorrido) {

    //
    // N IZQUIERDO ----> N PADRE ----> N DERECHO
    // 
    this.left && this.left.depthFirstForEach(cb, recorrido);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, recorrido);
  }
  if (recorrido === "post-order") {
    //
    //N IZQUIERDO ----> N DERECHO ----> N PADRE
    //
    
    this.left && this.left.depthFirstForEach(cb, recorrido);
    this.right && this.right.depthFirstForEach(cb, recorrido);
    cb(this.value);
  }
  if (recorrido === "pre-order") {
    //
    // N PADRE ----> N IZQUIERDO ----> N DERECHO
    //
    
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, recorrido);
    this.right && this.right.depthFirstForEach(cb, recorrido);
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr) {
  if (!arr) {
    var arr = [];
  }
  cb(this.value);
  this.left && arr.push(this.left);
  this.right && arr.push(this.right);

  arr.length && arr.shift().breadthFirstForEach(cb, arr);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
