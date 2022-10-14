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

function BinarySearchTree() {
  // metodos

  BinarySearchTree.prototype.size = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
  };


  BinarySearchTree.prototype.insert = function(){
    // caso base -- > cuando llegamos a nodo hoja o null
    if(!this.left && !this.right) return 1;
    // cuando nuestro arbol un solo hijo
    if(!this.left) return 1 + this.right.size();
    if(!this.right) return 1 + this.left.size();
    // cuando nuestro arbol tiene sus dos hijos
    return 1 + this.left.size() + this.right.size();

  };

  BinarySearchTree.prototype.contains = function(){};
  BinarySearchTree.prototype.depthFirstForEach = function(){};
  BinarySearchTree.prototype.breadthFirstForEach = function(){};

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
