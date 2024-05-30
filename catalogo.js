class Catalogo {
    #peliculas;

    // constructor con mi arreglo de pelis principal
    constructor() {
        this.#peliculas = [
            { id: 1, 
              titulo: "Interestelar", 
              descripcion: "Interstellar narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto con el propósito de superar los límites hasta ahora conocidos por la Humanidad y conquistar las vastas distancias a la que abre paso el viaje interestelar.", 
              imagen: "./img/inter.jpg" },
            
            { id: 2, 
              titulo: "Spiderman", 
              descripcion: "Peter Parker es un tímido estudiante de preparatoria, intelectualmente brillante pero poco hábil socialmente. Durante una visita a un laboratorio de genética de la Universidad de Columbia es mordido por una araña genéticamente modificada.", 
              imagen: "./img/spider.jpg" },
            
            { id: 3, 
              titulo: "Flash 2023", 
              descripcion: "Los mundos chocan en Flash cuando Barry utiliza sus superpoderes para viajar en el tiempo y cambiar los acontecimientos del pasado. Barry intenta salvar a su familia, pero sin saberlo altera el futuro y queda atrapado en una realidad en la que el general Zod ha regresado y amenaza con la aniquilación, pero en la que no hay Superhéroes a los que recurrir. A menos que Barry pueda persuadir a un Batman muy diferente para que salga de su retiro y rescate a un kryptoniano encarcelado... aunque no sea el que está buscando. En última instancia, para salvar el mundo en el que se encuentra y regresar al futuro que conoce, la única esperanza de Barry es luchar por seguir vivo. Pero ¿este último sacrificio será suficiente para reiniciar el universo? (FILMAFFINITY)", 
              imagen: "./img/flash.jpg" }
        ];
        this.mostrarPeliculas();
    }

    agregarPelicula(titulo, descripcion, imagen) {
        if (!titulo || !descripcion || !imagen) {
            alert("Por favor, ingrese todos los datos (Título, Descripción y URL de la imagen).");
            return;
        }

        const nuevaPelicula = {
            id: this.#peliculas.length + 1,
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen || 'default.jpg'
        };
        this.#peliculas.push(nuevaPelicula);
        this.mostrarPeliculas();

        // Limpiar campos de entrada después de agregar la película
        document.getElementById('titulo').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('imagen').value = '';
    }

    editarPelicula(id, nuevoTitulo, nuevaDescripcion, nuevaImagen) {
        const pelicula = this.#peliculas.find(pelicula => pelicula.id === id);
        if (pelicula) {
            pelicula.titulo = nuevoTitulo;
            pelicula.descripcion = nuevaDescripcion;
            pelicula.imagen = nuevaImagen || pelicula.imagen;
            this.mostrarPeliculas();
        }
    }

    eliminarPelicula(id) {
        this.#peliculas = this.#peliculas.filter(pelicula => pelicula.id !== id);
        this.mostrarPeliculas();
    }

    obtenerPeliculas() {
        return this.#peliculas;
    }

    mostrarPeliculas() {
        const listaPeliculas = document.getElementById('lista-peliculas');
        listaPeliculas.innerHTML = '';

        const peliculaElements = this.#peliculas.map(pelicula => {
            const peliculaElement = document.createElement('div');
            peliculaElement.className = 'pelicula';
            peliculaElement.innerHTML = `
                <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="pelicula-imagen">
                <h3>${pelicula.titulo}</h3>
                <p>${pelicula.descripcion}</p>
                <button onclick="editarPelicula(${pelicula.id})">Editar</button>
                <button onclick="eliminarPelicula(${pelicula.id})">Eliminar</button>
            `;
            return peliculaElement;
        });

        peliculaElements.forEach(element => listaPeliculas.appendChild(element));
    }
}

// Inicialización del catálogo
const catalogo = new Catalogo();

const agregarPelicula = () => {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;
    catalogo.agregarPelicula(titulo, descripcion, imagen);
};

const editarPelicula = (id) => {
    const nuevoTitulo = prompt("Nuevo título:");
    const nuevaDescripcion = prompt("Nueva descripción:");
    const nuevaImagen = prompt("Nueva imagen (URL):");
    catalogo.editarPelicula(id, nuevoTitulo, nuevaDescripcion, nuevaImagen);
};

const eliminarPelicula = (id) => {
    catalogo.eliminarPelicula(id);
};
