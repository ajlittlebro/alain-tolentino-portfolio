/** Language-independent constants. */
export const PROFILE = {
  email: 'alain.tolentino@outlook.com',
  github: 'https://github.com/ajlittlebro',
  linkedin: 'https://www.linkedin.com/in/alain-tolentinoi/',
} as const;

export const REPOS = {
  shop: 'https://github.com/ajlittlebro/PWEB-APP-TIENDA',
  crossword: 'https://github.com/ajlittlebro/Juego-De-Mesa-Pensamiento-Creativo',
  crosswordDemo: 'https://pensamiento-fimenio.netlify.app/',
  sisdon: 'https://github.com/ajlittlebro/Sistema-SISDON-Proyecto-TPOO',
} as const;

/**
 * CV download buttons. Keep `false` until PDFs WITHOUT personal data
 * (address, phone, date of birth) are placed in /public/cv/.
 */
export const CV_ENABLED = false;
