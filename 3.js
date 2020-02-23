//3) Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
//Try solving this without creating a copy of the list.

const list = [1, 2, 3, 4, 5, 6];

Array.prototype.rotateList = function(numOfElems) {
  if (numOfElems > list.length) {
    console.log(`NumOfelements must be smaller than list length.`);
    return;
  }
  const rotatedElems = this.splice(0, numOfElems);

  this.push(...rotatedElems);
  console.log(this);
};

list.rotateList(4);
