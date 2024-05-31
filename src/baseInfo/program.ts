import { PublicKey } from '@solana/web3.js'

export type ProgramId = {
  SERUM_MARKET: PublicKey
  OPENBOOK_MARKET: PublicKey

  UTIL1216: PublicKey

  FarmV3: PublicKey
  FarmV5: PublicKey
  FarmV6: PublicKey

  AmmV4: PublicKey
  AmmStable: PublicKey

  CLMM: PublicKey

  Router: PublicKey
}

export const MAINNET_PROGRAM_ID: ProgramId = {
  SERUM_MARKET: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
  OPENBOOK_MARKET: new PublicKey('srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX'),

  UTIL1216: new PublicKey('CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS'),

  FarmV3: new PublicKey('EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q'),
  FarmV5: new PublicKey('9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z'),
  FarmV6: new PublicKey('FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG'),

  AmmV4: new PublicKey('dexrBFKXSS5Mge5FN8DRRMfsqigjgj2P9ifm38orQRx'),
  AmmStable: new PublicKey('5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h'),

  CLMM: new PublicKey('CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK'),

  Router: new PublicKey('routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS'),
}

export const DEVNET_PROGRAM_ID: ProgramId = {
  SERUM_MARKET: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
  OPENBOOK_MARKET: new PublicKey('srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX'),

  UTIL1216: new PublicKey('CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS'),

  FarmV3: new PublicKey('EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q'),
  FarmV5: new PublicKey('9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z'),
  FarmV6: new PublicKey('FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG'),

  AmmV4: new PublicKey('dexrBFKXSS5Mge5FN8DRRMfsqigjgj2P9ifm38orQRx'),
  AmmStable: new PublicKey('5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h'),

  CLMM: new PublicKey('CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK'),

  Router: new PublicKey('routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS'),
}
