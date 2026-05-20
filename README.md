# REU AICT 2026

Website for the **NSF Research Experience for Undergraduates (REU) Site in Accessible Information & Communication Technology** at Gallaudet University.

Live site (once Pages is enabled): https://gallaudet-university.github.io/reu-aict-2026/

## Stack

Plain [Jekyll](https://jekyllrb.com/) site, deployed automatically to GitHub Pages via the workflow in `.github/workflows/pages.yml`. No JavaScript framework, no build tooling beyond Jekyll itself.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/reu-aict-2026/>.

## Editing content

All content lives in plain Markdown at the repo root:

- `index.md` — home page
- `program.md` — program structure and schedule
- `projects.md` — research projects available to apply for
- `people.md` — directors, mentors, staff
- `contact.md` — contact info

Site-wide settings (title, dates, stipend, navigation) live in `_config.yml`.

## Deploying

Pushes to `main` automatically build and publish via GitHub Actions. To enable:

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push a change to `main` (or run the workflow manually) to trigger the first deploy.

## License

Content © Gallaudet University. Code released under the MIT License.
