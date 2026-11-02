// ============================================
// FIGHTING FORCE MMA - JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // ============================================
    // 1. ACTIVE NAVIGATION
    // ============================================

    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNavigation() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNavigation);
    updateActiveNavigation();


    // ============================================
    // 2. INTERACTIVE FAQ SECTION
    // ============================================

    const faqSection = document.createElement("section");
    faqSection.id = "faq";

    faqSection.innerHTML = `
        <h2>Frequently Asked Questions</h2>

        <div class="faq-item">
            <h3>Do I need experience to join?</h3>
            <p> No. Beginners are welcome at Fighting Force MMA.
                Training is suitable for different experience levels.
            </p>
        </div>

        <div class="faq-item">
            <h3>What training programmes are available?</h3>
            <p> We offer MMA, boxing, kickboxing, kids classes,
                women's self-defence and personal training.
            </p>
        </div>

        <div class="faq-item">
            <h3>Where are you located?</h3>
            <p> We are located at 44 Surat Avenue, Lenasia,
                Johannesburg, 1821.
            </p>
        </div>

        <div class="faq-item">
            <h3>How do I become a member?</h3>
            <p> Contact us through our enquiry form or WhatsApp
                to find out more about membership.
            </p>
        </div>
    `;

    const contactSection = document.getElementById("contact");

    if (contactSection) {
        contactSection.parentNode.insertBefore(faqSection, contactSection);
    }

    const faqQuestions = faqSection.querySelectorAll(".faq-item h3");

    faqQuestions.forEach(function (question) {

        const answer = question.nextElementSibling;
        answer.style.display = "none";

        question.style.cursor = "pointer";

        question.addEventListener("click", function () {

            const isOpen = answer.style.display === "block";

            answer.style.display = isOpen ? "none" : "block";

        });
    });


    // ============================================
    // 3. GALLERY LIGHTBOX
    // ============================================

    const galleryImages = document.querySelectorAll("#gallery img");

    const lightbox = document.createElement("div");

    lightbox.id = "imageLightbox";

    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <img id="lightboxImage" src="" alt="">
        <p id="lightboxCaption"></p>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeLightbox = document.getElementById("closeLightbox");

    lightbox.style.display = "none";

    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.backgroundColor = "rgba(0,0,0,0.95)";
    lightbox.style.zIndex = "9999";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.flexDirection = "column";

    lightboxImage.style.maxWidth = "85%";
    lightboxImage.style.maxHeight = "80%";
    lightboxImage.style.border = "3px solid #e63946";
    lightboxImage.style.borderRadius = "8px";

    closeLightbox.style.position = "absolute";
    closeLightbox.style.top = "20px";
    closeLightbox.style.right = "35px";
    closeLightbox.style.fontSize = "45px";
    closeLightbox.style.color = "white";
    closeLightbox.style.cursor = "pointer";

    lightboxCaption.style.color = "white";
    lightboxCaption.style.marginTop = "15px";

    galleryImages.forEach(function (image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            lightbox.style.display = "flex";

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightboxCaption.textContent = image.alt;

        });
    });

    function closeGalleryLightbox() {
        lightbox.style.display = "none";
        lightboxImage.src = "";
    }

    closeLightbox.addEventListener("click", closeGalleryLightbox);

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeGalleryLightbox();
        }

    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeGalleryLightbox();
        }

    });


    // ============================================
    // 4. WEBSITE SEARCH FUNCTIONALITY
    // ============================================

    const searchContainer = document.createElement("div");

    searchContainer.innerHTML = `
        <h3>Search Our Website</h3>

        <input
            type="search"
            id="websiteSearch"
            placeholder="Search programs, classes or membership..."
            aria-label="Search website">

        <div id="searchResults" aria-live="polite"></div>
    `;

    const programsSection = document.getElementById("programs");

    if (programsSection) {
        programsSection.insertBefore(
            searchContainer,
            programsSection.children[1]
        );
    }

    const searchInput = document.getElementById("websiteSearch");
    const searchResults = document.getElementById("searchResults");

    const searchableSections = [
        "about",
        "programs",
        "timetable",
        "membership",
        "reviews",
        "contact"
    ];

    searchInput.addEventListener("input", function () {

        const searchTerm = searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (searchTerm.length === 0) {
            return;
        }

        let resultsFound = 0;

        searchableSections.forEach(function (sectionId) {

            const section = document.getElementById(sectionId);

            if (!section) return;

            const headings = section.querySelectorAll("h2, h3");

            headings.forEach(function (heading) {

                const parent = heading.parentElement;

                const text = parent.textContent.toLowerCase();

                if (heading.textContent.toLowerCase().includes(searchTerm) ||
                    text.includes(searchTerm)) {

                    const result = document.createElement("p");

                    const link = document.createElement("a");

                    link.href = "#" + sectionId;

                    link.textContent = heading.textContent;

                    result.appendChild(link);

                    searchResults.appendChild(result);

                    resultsFound++;

                }

            });

        });

        if (resultsFound === 0) {

            searchResults.textContent = "No matching information found.";

        }

    });


    // ============================================
    // 5. DYNAMIC TIMETABLE HIGHLIGHTING
    // ============================================

    const timetable = document.querySelector("#timetable table");

    if (timetable) {

        const timetableRows = timetable.querySelectorAll("tr");

        const today = new Date().getDay();

        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        timetableRows.forEach(function (row) {

            const dayCell = row.querySelector("td");

            if (dayCell && dayCell.textContent.trim() === days[today]) {

                row.style.backgroundColor = "rgba(230, 57, 70, 0.2)";

                row.style.fontWeight = "bold";

            }

        });

    }


    // ============================================
    // 6. ENQUIRY FORM VALIDATION
    // ============================================

    const enquiryForm = document.querySelector("#contact form");

    if (enquiryForm) {

        const nameInput = document.getElementById("enquiry-name");
        const phoneInput = document.getElementById("enquiry-phone");
        const emailInput = document.getElementById("enquiry-email");
        const messageInput = document.getElementById("enquiry-message");

        const formMessage = document.createElement("p");

        formMessage.id = "formMessage";

        formMessage.setAttribute("aria-live", "polite");

        enquiryForm.appendChild(formMessage);

        nameInput.required = true;
        phoneInput.required = true;
        emailInput.required = true;
        messageInput.required = true;

        emailInput.setAttribute("autocomplete", "email");
        nameInput.setAttribute("autocomplete", "name");
        phoneInput.setAttribute("autocomplete", "tel");

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            const phonePattern = /^\+?[0-9\s()-]{10,20}$/;

            formMessage.style.color = "#e63946";

            if (!name || !phone || !email || !message) {

                formMessage.textContent =
                    "Please complete all the required fields.";

                return;

            }

            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                return;

            }

            if (!phonePattern.test(phone)) {

                formMessage.textContent =
                    "Please enter a valid phone number.";

                return;

            }

            if (message.length < 10) {

                formMessage.textContent =
                    "Your message must contain at least 10 characters.";

                return;

            }

            formMessage.style.color = "#4caf50";

            formMessage.textContent =
                "Thank you, " + name +
                "! Your enquiry has been successfully validated.";

            enquiryForm.reset();

        });

    }


    // ============================================
    // 7. INTERACTIVE GOOGLE MAP
    // ============================================

    const mapHeading = Array.from(
        document.querySelectorAll("#contact h3")
    ).find(function (heading) {

        return heading.textContent.trim() === "Google Maps";

    });

    if (mapHeading) {

        const mapContainer = document.createElement("div");

        mapContainer.style.width = "100%";
        mapContainer.style.maxWidth = "600px";
        mapContainer.style.margin = "20px 0";

        const map = document.createElement("iframe");

        map.src =
            "https://www.google.com/maps?q=44+Surat+Ave,+Lenasia,+1821&output=embed";

        map.width = "100%";
        map.height = "350";
        map.style.border = "0";
        map.style.borderRadius = "8px";

        map.loading = "lazy";

        map.title = "Fighting Force MMA location on Google Maps";

        map.allowFullscreen = true;

        mapContainer.appendChild(map);

        mapHeading.insertAdjacentElement("afterend", mapContainer);

    }


    // ============================================
    // 8. DYNAMIC WELCOME MESSAGE
    // ============================================

    const welcomeHeading = document.querySelector("#home h2");

    if (welcomeHeading) {

        const welcomeMessage = document.createElement("p");

        const hour = new Date().getHours();

        if (hour < 12) {

            welcomeMessage.textContent =
                "Good morning! Start your day with Fighting Force MMA.";

        } else if (hour < 18) {

            welcomeMessage.textContent =
                "Good afternoon! Ready to improve your fitness?";

        } else {

            welcomeMessage.textContent =
                "Good evening! Your training journey starts here.";

        }

        welcomeMessage.style.color = "#f4a261";
        welcomeMessage.style.fontWeight = "bold";

        welcomeHeading.insertAdjacentElement(
            "afterend",
            welcomeMessage
        );

    }

});