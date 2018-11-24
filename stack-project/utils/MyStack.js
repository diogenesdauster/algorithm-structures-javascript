
function MyStack(){
  let items = [];

  // add a new element for the stack
  this.push = function(element){
    items.push(element);
  }
  // Remove the last element of the stack
  this.pop = function(){
    return items.pop();
  }
  // Get de last element of the stack
  this.peek = function(){
    return items[items.length-1];
  }
  // verifiy if the stack is Empty
  this.isEmpty = function(){
    return items.length === 0;
  }
  // cleaner all the elements of stack
  this.clear = function(){
    items = [];
  }
  // return the length of stack
  this.size = function(){
    return items.length;
  }
}

export default MyStack;
