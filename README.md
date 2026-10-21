# Vidhatri Bhavan website

A one-page bilingual (English / ಕನ್ನಡ) site for Vidhatri Bhavan, a pure vegetarian family hotel in Shivamogga. It is plain HTML, CSS and JavaScript, with no build step. See [PLAN.md](PLAN.md) for the research and the design plan.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly also works, but the maps load more reliably from a server.

## Changing content

All the restaurant's details live in [`js/data.js`](js/data.js): the WhatsApp number, branches (address, phone, hours, Google rating), the Zomato and Instagram links, and the menu. The dish names come from their Zomato listing. Prices are left out until the dine-in menu card is confirmed; add `price: 45` to any item and it shows up. Edit that file only; the page picks up the changes on its own. Items still waiting for confirmation are marked `TODO`.

The page wording, in both languages, is in the `I18N` block at the top of [`js/main.js`](js/main.js).

## Photos

Put the photos in `assets/images/` with these exact names, replacing any that are already there. Until a photo exists, its spot shows a green placeholder that says what belongs there.

Most dish photos (hero, Mudde Oota, biryani, and the gallery's rice dish, dining hall, curd rice and north Indian thali) are from the restaurant's Instagram. The other food photos are free-licensed stand-ins from Wikimedia Commons and Flickr. Their licences require a credit, which the footer shows from `photoCredits` in `js/data.js`. When you replace one with the restaurant's own photo, delete its entry there.

| File | What it shows | Shape |
| --- | --- | --- |
| `hero.jpg` | Meals on a banana leaf (main photo in the hero collage, which also uses `biryani.jpg` and `gallery-4.jpg`) | Portrait, 4:5 |
| `mudde-oota.jpg` | Mudde Oota, the featured VB special | Wide, 16:9 |
| `holige-oota.jpg` | Holige Oota | Landscape, 4:3 |
| `idli-vada.jpg` | Idli vada with sambar and chutney | Landscape, 4:3 |
| `filter-coffee.jpg` | Filter coffee in a steel tumbler | Landscape, 4:3 |
| `biryani.jpg` | Veg biryani | Landscape, 4:3 |
| `party-order.jpg` | A festive meal spread or bulk order | Wide, 16:9 |
| `gallery-1.jpg` | Tall gallery tile (today: rice dish in the dining hall; ideally the carved chariot showcase) | Tall, portrait |
| `gallery-2.jpg` | Dining hall interior | Wide, 2:1 |
| `gallery-3.jpg` | Masala dosa | Square-ish |
| `gallery-4.jpg` | Special curd rice | Square-ish |
| `gallery-5.jpg` | Thali on a banana leaf | Square-ish |
| `gallery-6.jpg` | North Indian thali | Square-ish |

Photos are cropped to fit, so keep the subject in the middle. Resize them to about 1600 px on the long side (under 300 KB each) so the site stays fast on mobile data.

The logo is `assets/logo.png` (512 px) and `assets/logo-192.png` (header, footer and browser tab), cut from the restaurant's logo image in `assets/images/image.png`. `assets/emblem.svg` is only used as the icon on photo placeholders.

## Google reviews

The "Loved by Shivamogga" band shows a sliding row of review cards. By default it uses the `reviews` list in `js/data.js`. To add a review, copy it word for word from the restaurant's Google Maps page with the reviewer's name, and add `source: "google"` and `rating: 5` to show the Google logo and five stars. Never write reviews yourself.

Optionally, the band can load live reviews from Google instead once `googleMapsKey` in `js/data.js` is set. It shows only 5-star reviews with text, with the reviewer's photo, name and date, and slides through them automatically. Google's own rating and review count also replace the numbers in `data.js`. Without a key, the band shows the stored ratings and reviews from `data.js`.

To get a key:

1. In [Google Cloud Console](https://console.cloud.google.com/), create a project and turn on billing (Google requires it, even within the free monthly usage).
2. Enable **Maps JavaScript API** and **Places API (New)**.
3. Under *Credentials*, create an API key. Restrict it to *Websites* (add `http://localhost:8765/*` and the live domain) and to those two APIs.
4. Paste it into `googleMapsKey` in `js/data.js`.

The first time the page runs, the browser console prints each branch's Google place ID. Adding those as `placeId` on each branch in `data.js` saves one lookup per visit. Google returns at most five reviews per branch, so the carousel shows whichever of those are 5-star.

## Publishing (GitHub Pages)

The workflow in `.github/workflows/deploy-pages.yml` publishes the site every time `main` is pushed. It publishes only the website files (`index.html`, `404.html`, `css/`, `js/` and `assets/`), so `README.md` and `PLAN.md` never appear on the live site.

One-time setup:

1. On GitHub, open the repository's **Settings → Pages**, and under *Build and deployment* set **Source** to **GitHub Actions**.
2. Push to `main`. The *Actions* tab shows the deploy; when it finishes, the site is live at <https://prureddy.github.io/vidhatri-bhavan-website/>.

GitHub Pages only works on a private repository with a paid GitHub plan (Pro, Team or Enterprise). On the free plan the repository has to be public, and then everything committed, including `PLAN.md`, can be read on GitHub.

If the site later moves to its own domain, update the `canonical`, `og:url` and `og:image` addresses at the top of `index.html`, so link previews in WhatsApp keep showing the food photo.
