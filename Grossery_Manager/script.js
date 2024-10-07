document.addEventListener("DOMContentLoaded", () => {
    const dietaryPreferenceInput = document.getElementById("diet-preference");
    const addPreferenceBtn = document.getElementById("add-preference-btn");
    const preferenceList = document.getElementById("preference-list");

    const seasonalList = document.getElementById("seasonal-list");

    const groceryItemInput = document.getElementById("grocery-item");
    const addItemBtn = document.getElementById("add-item-btn");
    const groceryList = document.getElementById("grocery-list");

    const allergyItemInput = document.getElementById("allergy-item");
    const addAllergyBtn = document.getElementById("add-allergy-btn");
    const allergyList = document.getElementById("allergy-list");

    const clearGroceryBtn = document.getElementById("clear-grocery-btn");

    const allergyStack = [];
    const groceryQueue = [];

    const seasonalProduce = [
        { name: "Strawberries", season: "Spring" },
        { name: "Pumpkins", season: "Fall" },
        { name: "Apples", season: "Fall" },
        { name: "Asparagus", season: "Spring" }
    ];

    function displaySeasonalProduce() {
        seasonalList.innerHTML = "";
        seasonalProduce.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - ${item.season}`;
            seasonalList.appendChild(listItem);
        });
    }

    addPreferenceBtn.addEventListener("click", () => {
        const preference = dietaryPreferenceInput.value.trim();
        if (preference) {
            const listItem = document.createElement("li");
            listItem.textContent = preference;
            preferenceList.appendChild(listItem);
            dietaryPreferenceInput.value = ""; // Clear input
        }
    });

    addItemBtn.addEventListener("click", () => {
        const item = groceryItemInput.value.trim();
        if (item) {
            groceryQueue.push(item);
            displayGroceryList();
            groceryItemInput.value = ""; // Clear input
        }
    });

    function displayGroceryList() {
        groceryList.innerHTML = "";
        groceryQueue.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            groceryList.appendChild(listItem);
        });
    }

    addAllergyBtn.addEventListener("click", () => {
        const allergy = allergyItemInput.value.trim();
        if (allergy) {
            allergyStack.push(allergy); // Add allergy to the stack
            displayAllergyList(); // Update display
            allergyItemInput.value = ""; // Clear input
        }
    });

    function displayAllergyList() {
        allergyList.innerHTML = ""; // Clear existing list
        // Iterate over the stack in reverse order to display the last added first
        for (let i = allergyStack.length - 1; i >= 0; i--) {
            const listItem = document.createElement("li");
            listItem.textContent = allergyStack[i]; // Display allergies in LIFO order
            allergyList.appendChild(listItem);
        }
    }

    clearGroceryBtn.addEventListener("click", () => {
        groceryQueue.length = 0; // Clear the queue
        displayGroceryList();
        alert("Grocery list cleared.");
    });

    // Download Grocery List as PDF
    document.getElementById("download-grocery-btn").addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text("Grocery List", 10, 10);
        groceryQueue.forEach((item, index) => {
            doc.text(`${index + 1}. ${item}`, 10, 20 + (10 * index));
        });
        doc.save("grocery_list.pdf");
    });

    // Pop Allergy function
    document.getElementById("pop-allergy").addEventListener("click", () => {
        const poppedAllergy = allergyStack.pop(); // Pop the last added allergy
        const poppedAllergyDisplay = document.getElementById('popped-allergy');
        if (poppedAllergy) {
            poppedAllergyDisplay.innerText = `Popped Allergy: ${poppedAllergy}`;
        } else {
            poppedAllergyDisplay.innerText = 'No allergies to pop!';
        }
        displayAllergyList(); // Update the allergy list display
    });

    // Initial display
    displaySeasonalProduce();
});
