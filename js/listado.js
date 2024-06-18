document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".btn-delete");
    const editButtons = document.querySelectorAll(".btn-edit");
    const addButton = document.querySelector(".btn-add");

    deleteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const confirmation = confirm("¿Está seguro de querer eliminar este elemento?");
            if (!confirmation) {
                event.preventDefault();
            }
        });
    });

    editButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const confirmation = confirm("¿Está seguro de querer editar este elemento?");
            if (!confirmation) {
                event.preventDefault();
            }
        });
    });

    addButton.addEventListener("click", (event) => {
        const confirmation = confirm("¿Desea añadir una nueva jornada?");
        if (!confirmation) {
            event.preventDefault();
        }
    });
});

