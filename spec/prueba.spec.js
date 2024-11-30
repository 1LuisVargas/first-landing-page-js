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

//Testing the sample exercise done in the class video
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

class Activities {	
  constructor(id, title, description, image) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.image = image;        
  }
}

class ActivityList {
  // Creating the empty array to store all activities
  constructor() {
      this.activities = [];
  }

  // New method to add activity to the array
  addActivity(activity) {
      activity.id = this.activities.length + 1;
      this.activities.push(activity);
  }

  // Method to get all activities
  getActivities() {
      return this.activities;
  }

  //Method to get activity by id and remove it from the array 
  deleteActivity(id) {
      this.activities = this.activities.filter(activity => activity.id !== id);
  }
}

// Testing the activityList class and everything we've done so far
describe('Testing ActivityList', () => {
  //Creating an instance of ActivityList before every test
  beforeEach(() => {
    activityList1 = new ActivityList();
  })

  //Testing if the ActivityList is a class
  it('Must be a class', () => {
    expect(typeof ActivityList.prototype.constructor).toBe('function');
  });

  //Testing if the new ActivityList is an instance of the ActivityList class
  it('Every list should be an instance of ActivityList', () => {
    expect(new ActivityList()).toBeInstanceOf(ActivityList);
  });

  //Testing if addActivity is able to add an element
  it('Is it able to add an element?', () => {
    activityList1.addActivity(new Activities(1, 'Test', 'Test', 'Test'));
    expect(activityList1.getActivities()).toContain(new Activities(1, 'Test', 'Test', 'Test'));    
  });

  //Testing if deleteActivity is able to remove the last element
  it('Is it able to remove the last element?', () => {
    activityList1.addActivity(new Activities(1, 'Test', 'Test', 'Test'));
    activityList1.deleteActivity(1);
    expect(activityList1.getActivities()).not.toContain(new Activities(1, 'Test', 'Test', 'Test'));
  })

  //Testing if getActivities is able to get all elements
  it('Is it able to get all elements?', () => {
    activityList1.addActivity(new Activities(1, 'Test', 'Test', 'Test'));
    expect(activityList1.getActivities()).toContain(new Activities(1, 'Test', 'Test', 'Test'));
  })
})