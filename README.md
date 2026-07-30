# My Taaluma Story

A one-page story site built for the Taaluma team workshop introductions — React + Vite + Tailwind v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Add your photo

Drop your image in at **`public/me.jpg`**. Until it's there, the portrait shows a
monogram placeholder with a reminder. To use a different filename or format,
change `profile.photo` in [`src/content.js`](src/content.js).

The portrait frame is 4:5, so something around 1200×1500 looks best.

## Edit the words

All copy lives in one place: [`src/content.js`](src/content.js). Nothing in the
components needs touching to change the story.

| Export       | Covers                                        |
| ------------ | --------------------------------------------- |
| `profile`    | Name, role, tagline, photo path               |
| `sections`   | 01 The Photo, 02 Turning Point, 03 The Mentor |
| `superpower` | 04 — three trait cards                        |
| `mission`    | 05 — what I hope to help Taaluma achieve      |
| `needs`      | 06 — what I need from the team                |
| `meta`       | Event name and footer note                    |

Each story section takes `body` (an array of paragraphs) and an optional `pull`
quote shown in the margin.

## Presenting it

- **On a phone** — mobile-first; just scroll top to bottom.
- **On a screen** — the left rail tracks progress on wide displays.
- **On paper** — hit **Save as page** in the top bar (or Ctrl/Cmd+P). A dedicated
  print stylesheet drops the dark theme, the chrome and the animation, and lays
  the story out on white.

## Structure

```
src/
  content.js              all copy
  App.jsx                 page composition
  index.css               theme tokens, reveal animation, print styles
  components/
    TopBar.jsx            sticky bar, scroll progress, print button
    SideNav.jsx           section rail (xl and up)
    Hero.jsx              name, tagline, portrait
    Portrait.jsx          photo with monogram fallback
    StorySection.jsx      narrative beat + pull quote
    CardGrid.jsx          three-up cards (superpower, needs)
    Mission.jsx           centred manifesto section
    Footer.jsx
    SectionHeading.jsx    shared numeral + kicker + title
  hooks/
    useReveal.js          fade-in on scroll
    useActiveSection.js   drives the side rail
```

Theme colours are defined once as Tailwind v4 tokens in the `@theme` block of
`src/index.css` — `ink`, `sand`, `ember`, `muted`, `line`, `moss`.
