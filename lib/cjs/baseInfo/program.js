"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEVNET_PROGRAM_ID = exports.MAINNET_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
exports.MAINNET_PROGRAM_ID = {
    SERUM_MARKET: new web3_js_1.PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
    OPENBOOK_MARKET: new web3_js_1.PublicKey('srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX'),
    UTIL1216: new web3_js_1.PublicKey('CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS'),
    FarmV3: new web3_js_1.PublicKey('EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q'),
    FarmV5: new web3_js_1.PublicKey('9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z'),
    FarmV6: new web3_js_1.PublicKey('FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG'),
    AmmV4: new web3_js_1.PublicKey('dexrBFKXSS5Mge5FN8DRRMfsqigjgj2P9ifm38orQRx'),
    AmmStable: new web3_js_1.PublicKey('5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h'),
    CLMM: new web3_js_1.PublicKey('CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK'),
    Router: new web3_js_1.PublicKey('routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS'),
};
exports.DEVNET_PROGRAM_ID = {
    SERUM_MARKET: new web3_js_1.PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
    OPENBOOK_MARKET: new web3_js_1.PublicKey('srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX'),
    UTIL1216: new web3_js_1.PublicKey('CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS'),
    FarmV3: new web3_js_1.PublicKey('EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q'),
    FarmV5: new web3_js_1.PublicKey('9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z'),
    FarmV6: new web3_js_1.PublicKey('FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG'),
    AmmV4: new web3_js_1.PublicKey('dexrBFKXSS5Mge5FN8DRRMfsqigjgj2P9ifm38orQRx'),
    AmmStable: new web3_js_1.PublicKey('5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h'),
    CLMM: new web3_js_1.PublicKey('CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK'),
    Router: new web3_js_1.PublicKey('routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS'),
};
//# sourceMappingURL=program.js.map