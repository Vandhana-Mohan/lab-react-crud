const URL = process.env.REACT_APP_API_BASE_URL;
// Shows

// Create
export function createShow(show) {
  const method = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "content-type": "application/json" },
  };
  return fetch(`${URL}/shows`, method).then((response) => response.json());
}

// Delete
export function destroyShow(id) {
  return fetch(`${URL}/shows/${id}`, { method: "DELETE" });
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  const method = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "content-type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, method).then((response) =>
    response.json()
  );
}

// Movies

// Index/Get all

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

// Movie/Get one

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

// Delete

export function destroyMovie(id) {
  return fetch(`${URL}/movies/${id}`, { method: "DELETE" });
}

// Create

export function createMovie(movie) {
  const method = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "content-type": "application/json" },
  };
  return fetch(`${URL}/movies`, method).then((response) => response.json());
}

// Update

export function updateMovie(id, movie) {
  const method = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "content-type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, method).then((response) =>
    response.json()
  );
}
