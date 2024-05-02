// const dataApi = 'http://universities.hipolabs.com/search?country=Kazakhstan';

const dataJs = [
    {
        image: "image1.jpg",
        title: "Заголовок 1",
        paragraph: "Текст параграфа 1"
    },
    {
        image: "image2.jpg",
        title: "Заголовок 2",
        paragraph: "Текст параграфа 2"
    }
];

const container = document.getElementById("container");

dataJs.forEach(function(item){
    const imgElement = document.createElement("img");
    imgElement.src = item.image;

    const titleElement = document.createElement("h1");
    titleElement.textContent = item.title;

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = item.paragraph;

    container.appendChild(imgElement);
    container.appendChild(titleElement);
    container.appendChild(paragraphElement);
});
