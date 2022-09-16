import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xce549CB14F11d6ff2B426cb16ec641a8c95D3bf6"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/SQG7itu20sn_e-LFNdAogJ8KLZ21uKaE",
  },
};