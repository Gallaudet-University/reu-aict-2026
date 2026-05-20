# REU AICT 2026

Website for the **NSF Research Experience for Undergraduates (REU) Site in Accessible Information & Communication Technology** at Gallaudet University.

NSF Award **#2447704** · Live site: https://gallaudet-university.github.io/reu-aict-2026/

## Stack

Built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Deployment is via the included `.github/workflows/deploy.yml`, which builds the site and publishes the result to the `gh-pages` branch on every push to `main`.

## Local preview

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000/reu-aict-2026/
```

## Editing content

- **Home page** — `_pages/about.md`
- **News announcements** — `_news/*.md` (short inline posts on the home page and `/news/`)
- **Research projects** — `_projects/*.md` (one file per project)
- **People** — `_pages/profiles.md` and the `about_*.md` content files in `_pages/`
- **Schedule** — `_pages/schedule.md`
- **Site-wide settings** — `_config.yml` (title, URL, nav, theme)

## Deploying

1. In repo Settings → Pages → **Source**, set **Deploy from a branch**, branch **`gh-pages`**, folder **`/`** (root).
2. Push to `main`. The deploy workflow will build and push to `gh-pages` automatically.
3. After the first deploy, the live URL appears in Settings → Pages.

## Credits

- Theme: [al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat and contributors (MIT).
- This material is based upon work supported by the National Science Foundation #2447704. Any opinions, findings, and conclusions or recommendations expressed are those of the authors and do not necessarily reflect the views of NSF.
