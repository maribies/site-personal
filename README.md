# Personal Website

A personal website to reflect my personality and accomplishments.

## Development

Developed with Next.js see documentation here: https://nextjs.org/docs/getting-started.

Working locally:
`npm run dev`

## Deployment

Deployed with [Vercel](https://vercel.com), connected to this GitHub repo.

- The production branch is set in Vercel under Settings → Git (`main` by default). Pushes to other branches create preview deployments; the Vercel bot reports their status and preview URL on the branch or pull request.
- The Node version comes from `engines.node` in `package.json` (`24.x`), which overrides the Node version in the Vercel project settings. Keep it in sync with `.node-version` for local development.
- `www.marissabiesecker.com` is attached to the Vercel project, with DNS pointing to Vercel.
