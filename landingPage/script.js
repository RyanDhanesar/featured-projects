// Handle Modal
const modal = document.getElementById("modal");
const buildyourbottleBtn = document.getElementById("buildyourbottleBtn");
const closeModal = document.querySelector(".close");
const doneBtn = document.getElementById("sealthecalmBtn");

// Price elements
const priceDisplay = document.getElementById("price");
const modalPriceDisplay = document.getElementById("modalPrice");
const colorSelect = document.getElementById("color");
const addons = document.querySelectorAll(".addon");

const basePrice = 199.99; // Base price of the bottle;

// Show Modal
buildyourbottleBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  updatePrice();
});

// Close Modal on x
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close Modal on Seal the calm
doneBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

// Update price on option change
colorSelect.addEventListener("change", updatePrice);
addons.forEach(addon => addon.addEventListener("change", updatePrice));

function updatePrice() {
  let total = basePrice + Number(colorSelect.value);
  addons.forEach(addon => {
    if (addon.checked) {
      total += Number(addon.value);
    }
  });
  modalPriceDisplay.textContent = total;
  priceDisplay.textContent = total;
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  if (!document.getElementById("terms").checked) {
    alert("You must agree to the Terms and Conditions.");
    e.preventDefault();
  }
});
