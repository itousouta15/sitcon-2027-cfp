// Placeholder build until the site reaches `main`: copies the redirect page to
// the site root and to every route of the real site, so deep links redirect too.
import { copyFileSync, mkdirSync, rmSync } from 'node:fs'

const routes = [
  '',
  'about',
  'sessions/general',
  'sessions/open',
  'sessions/demo',
  'submit/general',
  'submit/open',
  'submit/demo',
]

rmSync('dist', { recursive: true, force: true })
for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true })
  copyFileSync('index.html', `dist/${route}/index.html`)
}
