# Mohaiminul Islam Nirob — Portfolio

A responsive portfolio built with HTML, CSS, and vanilla JavaScript. The original four-view structure is retained, with content updated from the September 2026 CV.

## Run locally

Open `index.html` directly, or serve the folder with Python:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`. No build step or package installation is required. Font Awesome icons load from a CDN.

## Content and structure

| File | Purpose |
| --- | --- |
| `index.html` | Shared header, profile panel, navigation, and CV download |
| `js/about.js` | Introduction, academic/competition highlights, and current focus |
| `js/learning.js` | Education, coursework links, leadership timeline, and activities |
| `js/competencies.js` | Project/research data, grouped skills, and achievements |
| `js/contact.js` | Contact links and Google Forms submission handling |
| `js/main.js` | Application initialization and rendering |
| `js/navigation.js` | Hash navigation, section links, and mobile menu state |
| `js/theme.js` | Light/dark theme with optional local storage |
| `css/` | Shared styles and one stylesheet for each view |
| `assets/Nirob_CV_v2.pdf` | Current downloadable one-page CV |

Page URLs retain the original IDs: `#about`, `#life`, `#learnings`, and `#contact`. Competencies also supports direct links to `#projects`, `#research`, `#skills`, and `#achievements`. Browser back/forward navigation and keyboard focus are supported.

Update the project/research arrays and skill groups at the top of `js/competencies.js` when adding work. Use the project status field for ongoing work; the Heliyon manuscript is described as in revision, not published. Project cards use text and technology tags without requiring thumbnail images.

## Contact form

The form uses the original Google Forms endpoint and field mappings. Its cross-origin response is opaque, so the site cannot confirm that Google accepted a submission. It displays an unconfirmed-delivery notice after a resolved request, retains the text, and offers direct email. Network failures and timeouts show accurate feedback instead of a success alert. End-to-end receipt requires checking the destination Google Form; local checks mock requests and send no messages.

## Maintenance checks

- Visit all four views on desktop and mobile, and test section links and browser history.
- Check both themes, keyboard navigation, mobile menu state, and expanded project details.
- Verify the CV download after replacing the PDF.
- Keep academic results, problem counts, roles, and research status current with the CV.
