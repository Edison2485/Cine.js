function drama() {
    let rango = document.getElementById("edad").value
    let pelicula = document.getElementById("recomendacion")
    
    if (rango > 0 && rango < 13){
        pelicula.textContent = "- Casablanca"   
    }
    else if (rango >= 13 && rango <= 16){
        pelicula.textContent = "- The Shawshank Redemption"
    }
    else if (rango > 16){
        pelicula.textContent = "- Taxi Driver"
    }
}

function comedia() {
    let rango = document.getElementById("edad").value
    let pelicula = document.getElementById("recomendacion")
    if (rango > 0 && rango < 13){
        pelicula.textContent = "- Back to the Future"
    }
    else if (rango >= 13 && rango <= 16){
        pelicula.textContent = "- The Truman Show"
    }
    else if (rango > 16){
        pelicula.textContent = "- The Wolf of Wall Street"
    }
}

function musical() {
    let rango = document.getElementById("edad").value
    let pelicula = document.getElementById("recomendacion")
    if (rango > 0 && rango < 13){
        pelicula.textContent = "- La La Land"
    }
    else if (rango >= 13 && rango <= 16){
        pelicula.textContent = "- Los Miserables"
    }
    else if (rango > 16){
        pelicula.textContent = "- The Rocky Horror Picture Show"
    }
}

function crimen() {
    let rango = document.getElementById("edad").value
    let pelicula = document.getElementById("recomendacion")
    if (rango > 0 && rango < 13){
        pelicula.textContent = "- No hay peliculas ATP (Apta para todo publico)"
    }
    else if (rango >= 13 && rango <= 16){
        pelicula.textContent = "- El secreto de sus ojos"
    }
    else if (rango > 16){
        pelicula.textContent = "- The Godfather"
    }
}
