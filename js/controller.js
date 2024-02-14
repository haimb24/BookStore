'use strict'

const gbooks = []
const book = {
    name: ``,
    price: 0,
    id: makeid()
}

// הפונקציה מייצרת את הספר בתוך המערך
function onCreatbook() {
    gbooks.push(book)
    book.name = prompt(`book NAME?`)
    book.price = +prompt(`book PRICE?`)
    
    console.log(gbooks);
}


//זו הפונקציה שמרורצת מהכפתור
function OnAddBook(){
    onCreatbook()
    renderBooks(1)
}

//הפונקציה הזו מייצרת ספרים 
// HTMLבעמוד
// 

/*function renderBooks(count) {
    var elbook = document.querySelector(`.mybooks`) 
    var strHTML = `<tr>
    <th scope="row">${book.id}</th>
    <td>${book.name}</td>
    <td>${book.price}</td>
    <td>
        <button class="read" onclick="OnAddBook()">Read</button>
        <button class="update" onclick="updateBook()">Update</button>
        <button class="delete" onclick="removeBook()">Delete</button>
    </td>
  </tr>`
    for (var i = 0; i<count; i++) {
        elbook.innerHTML += strHTML
    }
}*/

function renderBooks() {
    var strHTML = `<tr>
                    <th scope="row">${book.id}</th>
                    <td>${book.name}</td>
                    <td>${book.price}</td>
                    <td>
                    <button class="read" onclick="OnAddBook()">Read</button>
                    <button class="update" onclick="updateBook()">Update</button>
                    <button class="delete" onclick="removeBook()">Delete</button>
                    </td>
                    </tr>`
    const elbook = document.querySelector('.mybooks tbody')
    elbook.innerHTML += strHTML

}
