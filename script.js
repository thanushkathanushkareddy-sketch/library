
let books = [];

function displayBooks() {

    let list = document.getElementById("bookList");

    list.innerHTML = "";

    books.forEach((book, index) => {

        list.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>
                    <button onclick="deleteBook(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

    });
}

function addBook() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;

    if (id === "" || name === "" || author === "") {
        alert("Please enter all details");
        return;
    }

    books.push({ id, name, author });

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";

    displayBooks();
}

function deleteBook(index) {

    books.splice(index, 1);

    displayBooks();
}
