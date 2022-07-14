import { Blockchain } from "../enums/blockchain.enum";

export const TOKENS = [
    {
        name: 'Ethereum',
        symbol: 'ETH',
        icon: 'assets/icons/tokens/eth.svg',
        blockchain: Blockchain.ETH,
        standard: 'erc20'
    },
    {
        name: 'Tether USD',
        symbol: 'USDT',
        icon: 'assets/icons/tokens/usdt.svg',
        blockchain: Blockchain.ETH,
        standard: 'erc20'
    },
    {
        name: 'USD coin',
        symbol: 'USDC',
        icon: 'assets/icons/tokens/usdc.svg',
        blockchain: Blockchain.ETH,
        standard: 'erc20'
    },
    {
        name: 'Matic',
        symbol: 'MATIC',
        icon: 'assets/icons/tokens/matic.svg',
        blockchain: Blockchain.POLYGON,
        standard: 'erc20'
    },
    {
        name: 'Tether USD',
        symbol: 'USDT',
        icon: 'assets/icons/tokens/usdt.svg',
        blockchain: Blockchain.POLYGON,
        standard: 'erc20'
    },
    {
        name: 'USD coin',
        symbol: 'USDC',
        icon: 'assets/icons/tokens/usdc.svg',
        blockchain: Blockchain.POLYGON,
        standard: 'erc20'
    },
    {
        name: 'BNB',
        symbol: 'BNB',
        icon: 'assets/icons/tokens/eth.svg',
        blockchain: Blockchain.BINANCE,
        standard: 'bep20'
    },
    {
        name: 'Tether USD',
        symbol: 'USDT',
        icon: 'assets/icons/tokens/usdt.svg',
        blockchain: Blockchain.BINANCE,
        standard: 'bep20'
    },
    {
        name: 'USD coin',
        symbol: 'USDC',
        icon: 'assets/icons/tokens/usdc.svg',
        blockchain: Blockchain.BINANCE,
        standard: 'bep20'
    }
]