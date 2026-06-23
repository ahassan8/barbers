const barberGrid = document.getElementById("barberGrid");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

async function loadBarbers() {
  try {
    const response = await fetch("barbers.json");
    const barbers = await response.json();

    barberGrid.innerHTML = barbers
      .map(
        (barber) => `
          <article class="barber-card">
            <h3>${barber.name}</h3>
            <p><strong>Area:</strong> ${barber.area}</p>
            <p><strong>Phone:</strong> ${barber.phone}</p>
            <p><strong>Hours:</strong> ${barber.hours}</p>
            <p>${barber.description}</p>
            <span class="tag">${barber.specialty}</span>
          </article>
        `
      )
      .join("");
  } catch (error) {
    barberGrid.innerHTML = "<p>Unable to load barbershops right now.</p>";
  }
}

loadBarbers();











