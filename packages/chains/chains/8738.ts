export default {
  "name": "Alph Network",
  "chain": "ALPH",
  "rpc": [
    "https://alph-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.alph.network",
    "wss://rpc.alph.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Alph Network",
    "symbol": "ALPH",
    "decimals": 18
  },
  "infoURL": "https://alph.network",
  "shortName": "alph",
  "chainId": 8738,
  "networkId": 8738,
  "explorers": [
    {
      "name": "alphscan",
      "url": "https://explorer.alph.network",
      "icon": "alphscan",
      "standard": "EIP3091"
    }
  ],
  "testnet": false,
  "slug": "alph-network"
} as const;