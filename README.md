# Personal Website

A personal website to reflect my personality and accomplishments.

## Development

Built with [Vite](https://vite.dev) and React. Pages are pre-rendered to static HTML at build time.

- `npm run dev`: local dev server.
- `npm run build`: builds and pre-renders the site into `dist/`.
- `npm run preview`: serves the built site locally.

## Testing

### Automated

- `npm test`: unit tests in `tests/`, run against fixture data.
- `npm run test:build`: checks the output of `npm run build`.

### By hand

Before merging changes to components, styles, routing or hosting, check a preview build (`npm run build && npm run preview`, or a Vercel preview deployment):

- [ ] Interactions and animations work and feel right.
- [ ] Visuals look right on desktop and mobile.
- [ ] Accessibility: keyboard navigation, a screen reader (VoiceOver: ⌘F5), and Lighthouse's audit.
- [ ] Routing: each page loads, and unknown paths return a 404.
- [ ] Link previews (after deploying): check them with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Deployment

Deployed with [Vercel](https://vercel.com), connected to this GitHub repo.

- Build settings (framework, build command, output directory, clean URLs) are in `vercel.json`, which overrides the Vercel project settings.
- The production branch is set in Vercel under Settings → Git (`main` by default). Pushes to other branches create preview deployments; the Vercel bot reports their status and preview URL on the branch or pull request.
- The Node version comes from `engines.node` in `package.json` (`24.x`), which overrides the Node version in the Vercel project settings. Keep it in sync with `.node-version` for local development.
- `www.marissabiesecker.com` is attached to the Vercel project, with DNS pointing to Vercel.

## License

The code is licensed under the [MIT License](LICENSE).

The following are not covered by the MIT License:

- **Personal content**, all rights reserved, including and not limited to: the written content (bio and experience data in `public/api/` and copy in `components/`), the photo `public/static/images/me.jpeg`, and the logos `public/static/SVG/logo.svg` and `public/static/SVG/staticlogo.svg`.
- **Company logos** in `public/static/images/` are trademarks of their respective owners.
- **Font Awesome icons** (see Credits) remain under their own license.

## Credits

- Cursor icons in `public/static/SVG/cursors/` and inline icons in `components/Hero` and `components/ExperienceSection` are from [Font Awesome Free](https://fontawesome.com) 6.4.2 by Fonticons, Inc., licensed under [CC BY 4.0](https://fontawesome.com/license/free).
