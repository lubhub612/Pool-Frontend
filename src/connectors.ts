import { InjectedConnector } from '@web3-react/injected-connector'

export const MetaMask = new InjectedConnector({
  supportedChainIds: [
    56, // Mainet
    97, // Testnet
  ],
})
