import{_ as a}from"./assets/index-POi8GhpC.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a0d58c70-7593-4b2b-9062-5f78e12eb49f",n._sentryDebugIdIdentifier="sentry-dbid-a0d58c70-7593-4b2b-9062-5f78e12eb49f")}catch{}})();const t={[a.Bitcoin]:6.25,[a.BitcoinCash]:6.25,[a.Litecoin]:12.5,[a.Dogecoin]:1e4,[a.Ethereum]:3,[a.Fiat]:0,[a.THORChain]:0,[a.Avalanche]:0,[a.Cosmos]:0,[a.Maya]:0,[a.Kujira]:0,[a.Optimism]:0,[a.Arbitrum]:0,[a.Polygon]:0,[a.BinanceSmartChain]:0,[a.Dash]:0,[a.Chainflip]:0,[a.Polkadot]:0,[a.Solana]:0,[a.Radix]:0,[a.Base]:0},o={[a.Arbitrum]:50,[a.Avalanche]:3,[a.Base]:2,[a.BinanceSmartChain]:3,[a.Bitcoin]:600,[a.BitcoinCash]:600,[a.Chainflip]:5,[a.Cosmos]:1,[a.Dash]:150,[a.Dogecoin]:600,[a.Ethereum]:12,[a.Fiat]:60,[a.Kujira]:2,[a.Litecoin]:150,[a.Maya]:6,[a.Optimism]:1,[a.Polkadot]:6,[a.Polygon]:2,[a.THORChain]:6,[a.Solana]:1,[a.Radix]:5},r=({chain:n,amount:e})=>{const i=(t==null?void 0:t[n])??0,s=(o==null?void 0:o[n])??0;return i?Math.ceil((e==null?void 0:e.getValue("number"))||0/i)*s:0},c=({chain:n,amount:e})=>{const i=r({chain:n,amount:e});return i?i<60?`<${i}s`:`<${Math.ceil(i/60)}m`:"<5s"};export{o as b,c as g};