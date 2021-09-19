


// Update an existing item
async function updateItem(event){
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const category_id = document.getElementById('category').value; 
    const itemId = document.querySelector('#mainContainer').dataset.item;
    console.log(`itemid ${itemId}`);
    console.log('Title: ' + title);
    console.log('desc: ' + description);
    console.log('cat_id: ' + category_id);

    if (title && description && category_id) {
        const response = await fetch(`/api/items/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description, category_id }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log(response);
            document.location.replace('/userProfile');
        } else {
            console.log(response.statusText);
        }
        } else {
            console.log("Unable to update your item.");
        }
};

// Delete an existing item
async function deleteItem(event){
    event.preventDefault();
    const itemId = document.querySelector('#mainContainer').dataset.item;
    console.log(`itemid ${itemId}`);

    if (itemId) {
        const response = await fetch(`/api/items/${itemId}`, {
            method: 'DELETE',
            // body: JSON.stringify({ title, description, category_id }),
            headers: { 'Content-Type': 'application/json' },
            
        });
        console.log("afterfetch");
    
        if (response.ok) {
            console.log(response);
            document.location.replace('/userProfile');
        } else {
            console.log(response.statusText);
        }
        } else {
            console.log("Unable to delete your item.");
        }

}

document.getElementById('updateBtn').addEventListener('click',updateItem);
document.getElementById('delItemBtn').addEventListener('click',deleteItem);

