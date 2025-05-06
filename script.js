
fetch("posts.json").then(response => response.json()).then(posts => renderpost(posts));

function renderpost(posts) {
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


