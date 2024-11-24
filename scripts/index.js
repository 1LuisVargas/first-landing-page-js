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

const adding = document.getElementById("add-activity");
adding.addEventListener("click", () => {
    console.log("click");
})

// function addActivity() {
//     const activitiesContainer = document.getElementById("activities-container");

//     // Creating a card for each activity
//     const card_activity = document.createElement("div");
//     card_activity.classList.add("card");
//     card_activity.innerHTML = `
//     <img src="${document.getElementById("image").value}" alt="${document.getElementById("title").value}">
//     <p>${document.getElementById("title").value}</p>
//     <p>${document.getElementById("description").value}</p>
//     `;

//     activitiesContainer.appendChild(card_activity);
// }

// document.getElementById("add-activity").addEventListener("click", addActivity);