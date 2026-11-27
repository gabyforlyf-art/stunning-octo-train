// All 16 media files from your archive
const mediaFiles = [
  { file: "WhatsApp Video 2026-11-27 at 12.30.48.mp4", type: "video", title: "Motion Reel 01" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.19.jpeg", type: "image", title: "Portrait 01" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.19 (1).jpeg", type: "image", title: "Portrait 02" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.19 (2).jpeg", type: "image", title: "Portrait 03" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.20.jpeg", type: "image", title: "Portrait 04" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.20 (1).jpeg", type: "image", title: "Portrait 05" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.20 (2).jpeg", type: "image", title: "Portrait 06" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.21.jpeg", type: "image", title: "Portrait 07" },
  { file: "WhatsApp Video 2026-11-27 at 12.31.24.mp4", type: "video", title: "Motion Reel 02" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.26.jpeg", type: "image", title: "Portrait 08" },
  { file: "WhatsApp Video 2026-11-27 at 12.31.27.mp4", type: "video", title: "Motion Reel 03" },
  { file: "WhatsApp Video 2026-11-27 at 12.31.27 (1).mp4", type: "video", title: "Motion Reel 04" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.27.jpeg", type: "image", title: "Portrait 09" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.27 (1).jpeg", type: "image", title: "Portrait 10" },
  { file: "WhatsApp Image 2026-11-27 at 12.31.28.jpeg", type: "image", title: "Portrait 11" },
  { file: "WhatsApp Video 2026-11-27 at 12.31.28.mp4", type: "video", title: "Motion Reel 05" }
];

const grid = document.getElementById("portfolio-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeLightbox = document.getElementById("close-lightbox");

// Mobile Navigation Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Render Portfolio Grid
function renderGallery(filter = "all") {
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? mediaFiles
    : mediaFiles.filter(item => item.type === filter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    const filePath = `media/${item.file}`;

    if (item.type === "image") {
      card.innerHTML = `
        <span class="badge">Photo</span>
        <img src="${filePath}" alt="${item.title}" loading="lazy" />
        <div class="card-overlay"><span>${item.title}</span></div>
      `;
    } else {
      card.innerHTML = `
        <span class="badge">Video</span>
        <video src="${filePath}" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>
        <div class="card-overlay"><span>${item.title} (Click to watch)</span></div>
      `;
    }

    card.addEventListener("click", () => openModal(item, filePath));
    grid.appendChild(card);
  });
}

// Lightbox Controls
function openModal(item, filePath) {
  lightboxContent.innerHTML = "";
  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = filePath;
    lightboxContent.appendChild(img);
  } else {
    const video = document.createElement("video");
    video.src = filePath;
    video.controls = true;
    video.autoplay = true;
    lightboxContent.appendChild(video);
  }
  lightboxCaption.textContent = item.title;
  lightbox.classList.remove("hidden");
}

function closeModal() {
  lightbox.classList.add("hidden");
  lightboxContent.innerHTML = "";
}

closeLightbox.addEventListener("click", closeModal);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Filter Buttons
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

// Contact Form Submission Feedback
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
  contactForm.reset();
});

// Initial Render
renderGallery();
```[cite: 1]

### What Was Added to Make It a Full Website:
* **Sticky Navigation Bar:** Smooth-scroll links to Home, Portfolio, About, and Contact, plus a responsive mobile hamburger menu.
* **Hero Section:** Bold headline, tagline, and call-to-action buttons.
* **About & Services Section:** Highlights creative focus areas alongside quick stats.
* **Interactive Contact Form:** Validated form with instant confirmation feedback.

Would you like to swap in your actual brand name, bio text, or connect the contact form to an email service like Formspree or WhatsApp?