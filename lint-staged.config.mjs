/** @type {import('lint-staged').Config} */
export default {
  '**/*.{js,mjs,jsx,ts,tsx,vue}': 'nx affected -t lint --fix=true',
  '**/*.{html,json}': 'prettier --write',
}
