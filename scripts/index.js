// Adding the individual activity class
class Activities {	
    constructor(id, title, description, image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;        
    }
}

// Adding the activity list to store all activities added
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

// Creating the activity list
const  activityList1 = new ActivityList();

// Adding the first activity to the list
activityList1.addActivity(new Activities(null, "Gaming", "Playing video games", "image")); //Null solution recommended by chatGPT

console.log(activityList1);