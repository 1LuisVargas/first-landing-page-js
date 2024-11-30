// Creating the ToDoList class
class ToDoList {
  constructor () {
    this.ToDoList = [];    
  }

  //Method to add an element
  add(toDo) {
    this.ToDoList.push(toDo);
  }

  //Method to remove the last element
  remove() {
    this.ToDoList.pop();
  }

  //Method to get all elements
  list() {
    return this.ToDoList;
  }
}

//Testing
describe('Testing ToDoList', () => {
  //Creating an instance of ToDoList before every test
  beforeEach(() => {
    testingList = new ToDoList();
  })

  //Testing if the ToDoList is a class
  it('Must be a class', () => {
    expect(typeof ToDoList.prototype.constructor).toBe('function');
  });

  //Testing if the new ToDoList is an instance of the ToDoList class
  it('Every list should be an instance of ToDoList', () => {
    expect(new ToDoList()).toBeInstanceOf(ToDoList);
  });

  it('Is it able to add an element?', () => {
    testingList.add('Test');
    expect(testingList.list()).toContain('Test');
  });

  it('Is it able to remove the last element?', () => {
    testingList.add('Test', 'Test2', 'Test3', 'Test4');
    testingList.remove();
    expect(testingList.list()).not.toContain('Test4');
  })

  it('Is it able to get all elements?', () => {
    testingList.add('Test', 'Test2', 'Test3', 'Test4');
    expect(testingList.list()).not.toContain('Test4');
  })
});