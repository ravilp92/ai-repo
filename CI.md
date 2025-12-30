# CI / GitHub Actions

This project includes a GitHub Actions workflow at `.github/workflows/ci.yml` that runs on push and pull_request to `main` (or `master`). It performs:

- npm ci
- unit tests (Karma)
- build (production)
- Cypress e2e tests (headless)

How to enable locally / on repository:

1. Commit the new workflow and push to your repository:
   ```bash
   git add .github/workflows/ci.yml package.json CI.md
   git commit -m "chore(ci): add GitHub Actions workflow and Cypress run script"
   git push origin main
   ```

2. Actions will run automatically on push / PR. If your repo is private or you require secrets for Cypress Dashboard, set them in repository Settings → Secrets & variables → Actions.

Troubleshooting notes
- The workflow starts the dev server with `npm start -- --port 4200` and waits on `http://localhost:4200` before running Cypress. Ensure the app starts on that port in CI.
- If you prefer the Cypress dashboard or recording tests, add `CYPRESS_RECORD_KEY` as a repository secret and update the workflow.
