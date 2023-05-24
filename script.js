// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const count = 10;
const apiKey = "O0CcOVq55D4qRiAv1Rd9JtvTmWbDU7QVnajTDEWHblg";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// get photos from unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // catch erro aqui
  }
}

getPhotos();
