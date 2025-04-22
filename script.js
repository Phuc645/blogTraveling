const posts = [
    { name: "Vịnh Hạ Long", image: "images/halong.jpg", alt: "Vịnh Hạ Long", link: "pages/vinhhalong.html" },
    { name: "Hội An", image: "images/hoian.jpg", alt: "Hội An", link: "pages/hoian.html" },
    { name: "Phú Quốc", image: "images/phuquoc.jpg", alt: "Phú Quốc", link: "pages/vinhhalong.html" }
];

function renderpost() {
    const content = document.querySelector(".content");
    posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";
        let html = `<a href="${post.link}">
                <img src="${post.image}" class="tourist" alt="${post.alt}"/>
                <h3>${post.name}</h3>
                </a>`
        card.innerHTML = html;
        content.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", renderpost);


