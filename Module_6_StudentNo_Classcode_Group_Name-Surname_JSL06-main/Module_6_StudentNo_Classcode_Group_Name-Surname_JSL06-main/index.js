
// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};


// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");
    let menuHTML = '';

    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create HTML for category heading and items
        menuHTML += `<h2>${category}</h2><ul>`;
        items.forEach(item => {
            menuHTML += `<li>${item}</li>`;
        });
        menuHTML += `</ul>`;
    }

    // Set the menu container's HTML with the generated content
    menuContainer.innerHTML = menuHTML;

    // Add click event listeners to all list items to add them to the order
    menuContainer.querySelectorAll('li').forEach(item => {
        item.addEventListener("click", () => {
            addToOrder(item.textContent);
        });
    });
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    // Create a list item for the order
    const orderItem = document.createElement("li");

    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;

    // Attach a click event listener to the order item to remove it and reduce the total price
    orderItem.addEventListener("click", () => {
        orderItem.remove();

        // Reduce the total price by 60
        const currentTotal = parseFloat(orderTotalElement.textContent);
        orderTotalElement.textContent = (currentTotal - 60).toFixed(2);
    });

    // Append the list item to the order items list
    orderList.appendChild(orderItem);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    orderTotalElement.textContent = (currentTotal + 60).toFixed(2); // Add 60 to the current total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

