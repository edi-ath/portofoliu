# Edi Antohe Portfolio

A Pixieset-style photography portfolio — **three fully self-contained HTML files**, no build step, no dependencies, works instantly on GitHub Pages.

## Adding real photos

In `index.html`, each gallery item looks like:

```html
<div class="gi tall" data-c="portrait" data-i="0">
  <div class="gi-img" style="background:linear-gradient(...)">
    <div class="ph p1"></div>   <!-- remove this placeholder div -->
  </div>
  ...
```

Replace the gradient background and remove the placeholder:

```html
<div class="gi tall" data-c="portrait" data-i="0">
  <div class="gi-img" style="background:#000">
    <img src="images/golden-hour.jpg" alt="Golden Hour portrait"
         style="width:100%;height:100%;object-fit:cover;display:block;">
  </div>
  ...
```

Create an `images/` folder alongside the HTML files and put your JPEGs there.

## Customising

| What | Where |
|------|-------|
| Photographer name | `<title>`, `.nav-logo`, `h1`, footer in all 3 files |
| Color palette | `:root` CSS variables at the top of each file |
| Contact email | `contact.html` → `.info-val` link |
| Services & pricing | `about.html` → `.svc-card` blocks |
| Gallery categories | `data-c` attribute on each `.gi` div |

## Color palette

```css
--cream:    #f7f4ef   /* page background */
--warm:     #fdfcfa   /* card/nav surfaces */
--dark:     #1c1a17   /* headings, text */
--mid:      #6b6760   /* secondary text */
--line:     #d4d0c8   /* borders, dividers */
--accent:   #8a7460   /* warm brown accent */
--accent-l: #c4b09a   /* light accent */
```

## File structure

All CSS and JavaScript is inlined inside each HTML file — nothing external except the Google Fonts `@import`, which degrades gracefully to Georgia/Helvetica if unavailable.
