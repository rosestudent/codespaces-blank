Fighting Force MMA — Website

A modern, responsive website for **Fighting Force MMA**, a martial arts and fitness gym based in **Lenasia, Johannesburg, South Africa**.

---

## Project Overview

This is a static HTML5 website designed to showcase the gym's training programmes, class timetable, membership options, gallery, testimonials, and contact information. It is styled with a custom CSS stylesheet featuring a bold dark theme with red accents — reflecting the energy and intensity of MMA training.

---

## File Structure

```
Fighting-Force-MMA/
│
├── index.html          # Main website file (all content & structure)
├── style.css           # Custom stylesheet (dark theme, responsive design)
└── README.md           # This file
```

---

## Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Fully optimised for desktop, tablet, and mobile devices |
| **Sticky Navigation** | Menu bar stays fixed at the top while scrolling |
| **Smooth Scrolling** | Click any nav link to smoothly scroll to that section |
| **Modern Dark Theme** | Black/dark-gray background with red & orange accents |
| **Interactive Gallery** | Images scale and reveal colour on hover |
| **Styled Tables** | Class timetable, budget, and timeframe tables with hover effects |
| **Contact Form** | Styled form ready for backend integration |
| **Social Links** | Placeholder links for Instagram, Facebook, TikTok & WhatsApp |

---

## Sections Included

1. **Home** — Welcome message with call-to-action buttons
2. **About Us** — Gym introduction and "Why Train With Us" benefits
3. **Training Programmes** — MMA, Boxing, Kickboxing, Self-Defence, Kids MMA, Fitness
4. **Class Timetable** — Weekly schedule (sample data)
5. **Membership Options** — Beginner, All Access, and Fight Team tiers
6. **Gallery** — Placeholder images for gym photos
7. **Testimonials** — Sample customer reviews
8. **Contact Us** — Location, phone, email, contact form, and social links
9. **Technical Requirements** — Guide for hosting and maintaining the site
10. **Estimated Budget** — Cost breakdown in South African Rand (ZAR)
11. **Development Time Frame** — 6-week project timeline

---

## How to View the Website

### Option 1: Open Locally
1. Download or clone this project folder.
2. Double-click `index.html` to open it in your web browser.

### Option 2: Using a Local Server (Recommended for Testing)
If you have Python installed:
```bash
# Navigate to the project folder
cd Fighting-Force-MMA

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

---

## Browser Compatibility

The website has been designed to work correctly on:

- Google Chrome (recommended)
- Microsoft Edge
- Mozilla Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

---

## Customisation Guide

### 1. Replace Placeholder Content

| Placeholder | What to Replace With |
|-------------|---------------------|
| `[ADD PHONE NUMBER]` | Gym's actual phone number |
| `[ADD WHATSAPP NUMBER]` | Gym's WhatsApp business number |
| `[ADD EMAIL ADDRESS]` | Gym's official email address |
| `Sample Review` | Real customer names |
| Sample testimonial text | Actual customer feedback |
| `#` in social links | Real Instagram, Facebook, TikTok, WhatsApp URLs |

### 2. Replace Gallery Images

Change the `src` attributes in the `<img>` tags inside the `#gallery` section:

```html
<!-- Before -->
<img src="https://via.placeholder.com/300x200?text=MMA+Training" alt="MMA training session">

<!-- After -->
<img src="images/mma-training.jpg" alt="MMA training session">
```

> **Tip:** Create an `images/` folder and place all gym photos there for better organisation.

### 3. Update the Class Timetable

Edit the table inside the `#classes` section with real class names, days, and times.

### 4. Add Membership Prices

Replace the text *"Contact us for membership prices"* with actual pricing or integrate a pricing table.

### 5. Customise Colours

Open `style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #e63946;    /* Change this to your brand colour */
    --secondary-color: #f4a261;  /* Accent colour */
    --dark-bg: #0a0a0a;          /* Background colour */
    /* ... etc */
}
```

---

## Technical Requirements

To edit and maintain this website, you will need:

- A computer or laptop
- A code editor (e.g., Visual Studio Code, Notepad++, Sublime Text)
- A modern web browser for testing
- An internet connection (for publishing and online features)
- Web hosting service (for going live)
- A domain name (e.g., `.co.za` for South African businesses)
- SSL/HTTPS certificate (for security)

---

## Estimated Budget (ZAR)

| Item | Estimated Cost |
|------|---------------|
| Domain name | R150 – R300 / year |
| Basic web hosting | R600 – R1,500 / year |
| Website development | R2,500 – R5,000 |
| Photography / images | R0 – R1,500 |
| Logo / branding | R0 – R1,000 |
| Setup & testing | R500 – R1,000 |
| **First-year total** | **R3,750 – R10,300** |

**Recommended starting budget:** R5,000 – R7,000

---

## Development Time Frame

| Phase | Activity | Duration |
|-------|----------|----------|
| Planning | Gather info, images, requirements | 1 week |
| Design | Plan structure & content | 1 week |
| Development | Build the HTML & CSS | 2 weeks |
| Testing | Test pages, links, forms, mobile | 1 week |
| Launch | Publish the website | 1 week |
| **Total** | | **6 weeks** |

---

## Credits

- **Design & Development:** Custom-built for Fighting Force MMA
- **Fonts:** System fonts (Segoe UI, Tahoma, Geneva, Verdana, sans-serif)
- **Icons:** Unicode symbols (✓, ▸, •)
- **Placeholder Images:** via.placeholder.com

---

## License

This project is created for **Fighting Force MMA** and is intended for their exclusive use.

---

## Contact

For questions about this website or to request updates, please contact the developer or the gym directly.

**Fighting Force MMA**  
📍 Lenasia, Johannesburg, South Africa  
🥋 *Train Hard. Fight Smart. Build Confidence.*
