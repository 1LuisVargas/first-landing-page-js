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

// Function to create a card for an activity
function createCard(activity) {
    // De-structuring of properties
    const {title, description, image} = activity;

    const card_activity = document.createElement("div");
    card_activity.classList.add("card");
    card_activity.innerHTML = `
        <h3>${title}</h3>
        <img src="${image}" alt="${title}">
        <p>${description}</p>
        <button class="delete-btn">Delete</button>
    `;

    const deleteBtn = card_activity.querySelector(".delete-btn"); //Getting the delete button

    // Add click event to delete the activity
    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation(); //Preventing the card click
        activityList1.deleteActivity(activity.id); // Delete activity by ID
        addCard(); // Refresh the card list
    });

    return card_activity;
}

// Function to create and append cards for all activities
function addCard() {
    const activitiesContainer = document.getElementById("activities-container");
    activitiesContainer.innerHTML = ""; // Clear the container

    // Create cards for each activity and append them
    activityList1.getActivities().forEach(activity => {
        const card = createCard(activity);
        activitiesContainer.appendChild(card);
    });
}

// Handler function for adding a new activity
function handler(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    // Check if all fields are filled
    if (!title || !description || !image) {
        alert("Please fill in all fields");
        return;
    }

    // Create new activity and add it to the list
    const activity = new Activities(null, title, description, image);
    activityList1.addActivity(activity);

    // Refresh the card list
    addCard();

    // Clear input fields to fill again
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
}

// Attach event listener to the "Add Activity" button
const button = document.getElementById("add-activity");
button.addEventListener("click", handler);