document.addEventListener("DOMContentLoaded", function(){

const container = document.querySelector(".card_container");

cardData.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("cards");

    card.innerHTML = `
    <div class="cards_img">
      <img src="${project.img}" alt="${project.alt}">
    </div>
    <div class="cards_h3">
      <h3>${project.title}</h3></div>
      <div class="cards_p">
      <p>${project.description}</p></div>
      <button class="sec_btn" onclick="window.open('${project.liveLink}', '_blank')">
        View Projects
        <span class="material-symbols-outlined">arrow_forward</span>
      </button>
      <span class="hashtags">${project.hashtags}</span>
    
  `;

  container.appendChild(card);
});
});