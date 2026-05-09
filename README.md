# Edi Antohe - Portfolio

A Pixieset-style photography portfolio built with pure HTML, CSS, and JavaScript — ready to deploy on GitHub Pages.

## Structure

```
portfolio/
├── index.html       ← Gallery / home page
├── about.html       ← About page with services
├── contact.html     ← Contact form
└── images/          ← Add your photos here
```

## Adding Real Photos

Replace the CSS gradient placeholders with real images:

```html
<!-- In index.html, change each gallery-img div like this: -->
<div class="gallery-img">
  <img src="images/your-photo.jpg" alt="Photo description"
       style="width:100%;height:100%;object-fit:cover;" />
</div>
```

## Customising

| What                | Where                              |
|---------------------|------------------------------------|
| Your name           | `<title>`, `.nav-logo`, `footer`   |
| Hero subtitle       | `.hero-subtitle` in `index.html`   |
| Contact email       | `contact.html` → contact-info      |
| Location & services | `about.html`                       |
| Color palette       | CSS variables                      |

## Color Variables

```css
--cream:        #f7f4ef   /* page background */
--warm-white:   #fdfcfa   /* card surfaces   */
--charcoal:     #1c1a17   /* primary text    */
--mid-gray:     #6b6760   /* secondary text  */
--accent:       #8a7460   /* warm brown      */
--accent-light: #c4b09a   /* highlights      */
```
