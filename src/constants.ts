import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  // ETHEREUM = 1,
  // RINKEBY = 4,
  FANTOM = 250,
  FANTOM_TESTNET = 4002
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xC831A5cBfb4aC2Da5ed5B194385DFD9bF5bFcBa7'

// const FACTORY_ADDRESS_ETH = '0xD93801d7D3a368D94A3A32E97A20f7aC1948a5dB'

export const FACTORY_ADDRESS_MAP = {
  // [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  // [ChainId.RINKEBY]: FACTORY_ADDRESS_ETH,
  [ChainId.FANTOM]: FACTORY_ADDRESS,
  [ChainId.FANTOM_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17'
}

export const INIT_CODE_HASH = '0x55c39e9406ff3c89a193882b4752879e73c8a0ce1222fe1de34c5e8f6482d9b6'

// const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'

export const INIT_CODE_HASH_MAP = {
  // [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  // [ChainId.RINKEBY]: INIT_CODE_HASH_ETH,
  [ChainId.FANTOM]: INIT_CODE_HASH,
  [ChainId.FANTOM_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9981)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
