// Creating the ToDoList class
class ToDoList {
  //Creating empty list
  elements = [];

  //Method to add an element
  add(element) {
    this.elements.push(element);
  }

  //Method to remove an element
  remove(index) {
    this.elements.splice(index, 1);
  }

  //Method to get all elements
  list() {
    return this.elements;
  }
}

//Testing
describe('Testing ToDoList', () => {
  //Creating an instance of ToDoList before every test
  beforeEach(() => {
    ToDoList = new ToDoList();
  })

  //Testing if the ToDoList is a class
  it('Must be a class', () => {
    expect(typeof ToDoList).toBe('class');
  });

  //Testing if the new ToDoList is an instance of the ToDoList class
  it('Every list should be an instance of ToDoList', () => {
    expect(new ToDoList()).toBeInstanceOf(ToDoList);
  });

  it('Is it able to add an element?', () => {
    ToDoList.add('Test');
    expect(ToDoList.list().length).toBe(1);
  });

  it('Is it able to remove the last element?', () => {
    ToDoList.add('Test', 'Test2', 'Test3', 'Test4');
    ToDoList.remove(ToDoList.list().length - 1);
    expect(ToDoList.list().length).toBe(3);
  })

  it('Is it able to get all elements?', () => {
    ToDoList.add('Test', 'Test2', 'Test3', 'Test4');
    expect(ToDoList.list().length).toBe(4);
  })
});