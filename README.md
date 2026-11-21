# Superman — Metropolis Archive (`superman-site`)

A responsive, zero-dependency static informational webpage dedicated to **Superman (Clark Kent / Kal-El)**, built with semantic HTML, modern CSS, inline SVG artwork, and vanilla JavaScript.

## What's Included

- **Hero Section:** Classic Kryptonian blue, crimson red, and solar gold visual theme featuring custom inline SVG House of El crest artwork, Art Deco Metropolis skyline silhouette, quick facts, and sticky navigation.
- **Origin & Biography:** Three-chapter journey across Krypton, the Kent farm in Smallville, and the Daily Planet in Metropolis, plus a quick identity dossier.
- **Powers & Weaknesses:** Filterable breakdown of Superman's seven core yellow-sun abilities alongside key vulnerabilities—including an interactive **Kryptonite Varieties** explorer, red sun radiation, magic, and sensory limits.
- **Allies & Rogues Gallery:** Filterable and searchable character cards for key allies (Lois Lane, Jimmy Olsen, Martha & Jonathan Kent, Supergirl, Justice League, Perry White) and iconic villains (Lex Luthor, Brainiac, General Zod, Doomsday, Darkseid, Bizarro) with expandable character dossiers.
- **Comics & Media Timeline:** Curated milestones from *Action Comics #1* (1938) through graphic novels, animation, television, and modern films, filterable by medium.

## Project Structure

```text
superman-site/
├── index.html   # Semantic single-page markup and inline SVG artwork
├── styles.css   # Responsive layout, palette, accessibility & reduced-motion styles
├── script.js    # Interactive filters, Kryptonite explorer, modal dossiers & nav helpers
└── README.md    # Project overview and local viewing instructions
```

## Running Locally

No build step or package installation is required.

### Option 1: Open directly in your browser

Double-click `index.html` or open it from your browser's **File → Open** menu.

### Option 2: Serve via a local HTTP server

Using Python 3:

```bash
python -m http.server 8000
```

Or using Node.js:

```bash
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Publishing with GitHub Pages (Optional)

1. Open your repository's **Settings → Pages** on GitHub.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then click **Save**.
4. GitHub Pages will publish the site at `https://<username>.github.io/superman-site/`.
