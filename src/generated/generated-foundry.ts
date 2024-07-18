import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lottery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lotteryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'entranceFee', internalType: 'uint256', type: 'uint256' },
      { name: 'lotteryDuration', internalType: 'uint256', type: 'uint256' },
      { name: 'vrfCoordinator', internalType: 'address', type: 'address' },
      { name: 'gasLane', internalType: 'bytes32', type: 'bytes32' },
      { name: 'subscriptionId', internalType: 'uint256', type: 'uint256' },
      { name: 'requestConfirmations', internalType: 'uint16', type: 'uint16' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'checkUpKeep',
    outputs: [
      { name: 'upKeepNeeded', internalType: 'bool', type: 'bool' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enterLottery',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCallbackGasLimit',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getEntranceFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getGasLane',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLotteryDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLotteryState',
    outputs: [
      { name: '', internalType: 'enum Lottery.LotteryState', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getPlayer',
    outputs: [{ name: 'player', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPlayersCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRecentWinner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequestConfirmations',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStartTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'performUpKeep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256' },
      { name: 'randomWords', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_vrfCoordinator',
    outputs: [
      {
        name: '',
        internalType: 'contract IVRFCoordinatorV2Plus',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_vrfCoordinator', internalType: 'address', type: 'address' },
    ],
    name: 'setCoordinator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'vrfCoordinator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CoordinatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'player',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'EnteredLottery',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'WinnerPicked',
  },
  { type: 'error', inputs: [], name: 'Lottery__LotteryNotOpen' },
  { type: 'error', inputs: [], name: 'Lottery__LotteryNotOwner' },
  { type: 'error', inputs: [], name: 'Lottery__LotteryOwnerAddBalance' },
  { type: 'error', inputs: [], name: 'Lottery__LotteryOwnerAddBalanceNill' },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'playersCount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'state',
        internalType: 'enum Lottery.LotteryState',
        type: 'uint8',
      },
    ],
    name: 'Lottery__LotteryUpkeepNotNeeded',
  },
  { type: 'error', inputs: [], name: 'Lottery__NotEnoughEthToEnterLottery' },
  { type: 'error', inputs: [], name: 'Lottery__WinnerTransferAmountFailed' },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
  },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'coordinator', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyOwnerOrCoordinator',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useReadLottery = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"checkUpKeep"`
 */
export const useReadLotteryCheckUpKeep = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'checkUpKeep',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getBalance"`
 */
export const useReadLotteryGetBalance = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'getBalance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getCallbackGasLimit"`
 */
export const useReadLotteryGetCallbackGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'getCallbackGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getEntranceFee"`
 */
export const useReadLotteryGetEntranceFee = /*#__PURE__*/ createUseReadContract(
  { abi: lotteryAbi, functionName: 'getEntranceFee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getGasLane"`
 */
export const useReadLotteryGetGasLane = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'getGasLane',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getLotteryDuration"`
 */
export const useReadLotteryGetLotteryDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'getLotteryDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getLotteryState"`
 */
export const useReadLotteryGetLotteryState =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'getLotteryState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getPlayer"`
 */
export const useReadLotteryGetPlayer = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'getPlayer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getPlayersCount"`
 */
export const useReadLotteryGetPlayersCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'getPlayersCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getRecentWinner"`
 */
export const useReadLotteryGetRecentWinner =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'getRecentWinner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getRequestConfirmations"`
 */
export const useReadLotteryGetRequestConfirmations =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'getRequestConfirmations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getStartTime"`
 */
export const useReadLotteryGetStartTime = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'getStartTime',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLotteryOwner = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"s_vrfCoordinator"`
 */
export const useReadLotterySVrfCoordinator =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 's_vrfCoordinator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useWriteLottery = /*#__PURE__*/ createUseWriteContract({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteLotteryAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"enterLottery"`
 */
export const useWriteLotteryEnterLottery = /*#__PURE__*/ createUseWriteContract(
  { abi: lotteryAbi, functionName: 'enterLottery' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"performUpKeep"`
 */
export const useWriteLotteryPerformUpKeep =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'performUpKeep',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useWriteLotteryRawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"setCoordinator"`
 */
export const useWriteLotterySetCoordinator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLotteryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useSimulateLottery = /*#__PURE__*/ createUseSimulateContract({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateLotteryAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"enterLottery"`
 */
export const useSimulateLotteryEnterLottery =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'enterLottery',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"performUpKeep"`
 */
export const useSimulateLotteryPerformUpKeep =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'performUpKeep',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useSimulateLotteryRawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"setCoordinator"`
 */
export const useSimulateLotterySetCoordinator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLotteryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useWatchLotteryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"CoordinatorSet"`
 */
export const useWatchLotteryCoordinatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'CoordinatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"EnteredLottery"`
 */
export const useWatchLotteryEnteredLotteryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'EnteredLottery',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 */
export const useWatchLotteryOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLotteryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"WinnerPicked"`
 */
export const useWatchLotteryWinnerPickedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'WinnerPicked',
  })
