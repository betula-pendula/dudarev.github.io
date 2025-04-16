const modalOverlay = document.getElementById("modalOverlay");
const openButton = document.querySelector(".button");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  requestAnimationFrame(() => {
    modalOverlay.classList.add("show");
  });
});

function closeModal() {
  modalOverlay.classList.remove("show");
  setTimeout(() => {
    if (!modalOverlay.classList.contains("show")) {
      modalOverlay.style.display = "none";
    }
  }, 300);
}

closeButton.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card");
  const categoryBody = document.querySelector(".category-body");

  const categoryData = {
    karrierewege: {
      title: "Karrierewege",
      text: "Der Weg zur Professur ist nicht nur steinig, sondern auch vielfältig: ...",
    },
    promotion: {
      title: "Promotion",
      text: "Erfahren Sie, wie Sie Ihre Promotion erfolgreich planen ...",
      image: "images/personal-growth.png",
    },
    habilitation: {
      title: "Habilitation",
      text: "Was bedeutet Habilitation? Wir erklären den Ablauf ...",
      image: "images/saving-book.png",
    },
    juniorprofessur: {
      title: "Juniorprofessur",
      text: "Der Einstieg in die Professur: Alles über Voraussetzungen ...",
      image: "images/teacher.png",
    },
    berufungsverfahren: {
      title: "Berufungsverfahren",
      text: "Schritt für Schritt durch das Berufungsverfahren ...",
      image: "images/permanent-job.png",
    },
    arbeitsplatz: {
      title: "Arbeitsplatz",
      text: "Erfahren Sie mehr über die Arbeitsbedingungen ...",
      image: "images/job.png",
    },
    familie: {
      title: "Familie und Karriere",
      text: "Karriere und Familie in Einklang bringen ...",
      image: "images/defend-family.png",
    },
    mobilitaet: {
      title: "Mobilität",
      text: "Berufliche Mobilität als Chance: Standortwechsel ...",
    },
    blickausland: {
      title: "Blick ins Ausland",
      text: "Internationale Perspektiven: Arbeiten und Forschen im Ausland ...",
    },
    allgemein: {
      title: "Allgemeine Informationen",
      text: "Grundlegende Informationen zu Themen rund um wissenschaftliche Karrieren ...",
    },
  };

  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      categoryCards.forEach((c) => {
        c.style.backgroundColor = "";
        c.style.color = "";
      });

      card.style.backgroundColor = "#00a5e2";
      card.style.color = "white";

      const categoryKey = card.getAttribute("data-category");
      const data = categoryData[categoryKey];

      categoryBody.style.opacity = "0";
      setTimeout(() => {
        if (data) {
          categoryBody.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.text}</p>
            ${
              data.image
                ? `<img src="${data.image}" alt="${data.title}" />`
                : ""
            }
          `;
        } else {
          categoryBody.innerHTML = `
            <h3>Information nicht verfügbar</h3>
            <p>Für diese Kategorie liegen derzeit keine Daten vor.</p>
          `;
        }
        categoryBody.style.opacity = "1";
      }, 300);
    });
  });
});
