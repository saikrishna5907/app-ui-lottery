import {
  createUseWriteContract,
  createUseSimulateContract,
  createUseReadContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KeeperCompatibleInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const keeperCompatibleInterfaceAbi = [
  {
    type: 'function',
    inputs: [{ name: 'checkData', internalType: 'bytes', type: 'bytes' }],
    name: 'checkUpkeep',
    outputs: [
      { name: 'upkeepNeeded', internalType: 'bool', type: 'bool' },
      { name: 'performData', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'performData', internalType: 'bytes', type: 'bytes' }],
    name: 'performUpkeep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LinkTokenInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const linkTokenInterfaceAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: 'decimalPlaces', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseApproval',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseApproval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: 'tokenName', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: 'tokenSymbol', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [
      { name: 'totalTokensIssued', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transferAndCall',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Raffle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const raffleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'vrfCoordinatorV2', internalType: 'address', type: 'address' },
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'gasLane', internalType: 'bytes32', type: 'bytes32' },
      { name: 'interval', internalType: 'uint256', type: 'uint256' },
      { name: 'entranceFee', internalType: 'uint256', type: 'uint256' },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
  },
  { type: 'error', inputs: [], name: 'Raffle__RaffleNotOpen' },
  { type: 'error', inputs: [], name: 'Raffle__SendMoreToEnterRaffle' },
  { type: 'error', inputs: [], name: 'Raffle__TransferFailed' },
  {
    type: 'error',
    inputs: [
      { name: 'currentBalance', internalType: 'uint256', type: 'uint256' },
      { name: 'numPlayers', internalType: 'uint256', type: 'uint256' },
      { name: 'raffleState', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'Raffle__UpkeepNotNeeded',
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
    name: 'RaffleEnter',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'RequestedRaffleWinner',
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
    name: 'WinnerPicked',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'checkUpkeep',
    outputs: [
      { name: 'upkeepNeeded', internalType: 'bool', type: 'bool' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enterRaffle',
    outputs: [],
    stateMutability: 'payable',
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
    name: 'getInterval',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastTimeStamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNumWords',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNumberOfPlayers',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getPlayer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRaffleState',
    outputs: [
      { name: '', internalType: 'enum Raffle.RaffleState', type: 'uint8' },
    ],
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
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'player', internalType: 'address', type: 'address' }],
    name: 'hasEnteredRaffle',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'performUpkeep',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFConsumerBaseV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfConsumerBaseV2Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFCoordinatorV2Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfCoordinatorV2InterfaceAbi = [
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequestConfig',
    outputs: [
      { name: '', internalType: 'uint16', type: 'uint16' },
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'keyHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: 'callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'numWords', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'requestRandomWords',
    outputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VRFCoordinatorV2Mock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vrfCoordinatorV2MockAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_baseFee', internalType: 'uint96', type: 'uint96' },
      { name: '_gasPriceLink', internalType: 'uint96', type: 'uint96' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidConsumer' },
  { type: 'error', inputs: [], name: 'InvalidRandomWords' },
  { type: 'error', inputs: [], name: 'InvalidSubscription' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'MustBeSubOwner',
  },
  { type: 'error', inputs: [], name: 'TooManyConsumers' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ConsumerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'consumer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ConsumerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'outputSeed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'payment',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      { name: 'success', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RandomWordsFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'keyHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'preSeed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'callbackGasLimit',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'numWords',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RandomWordsRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SubscriptionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'subId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'oldBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionFunded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BASE_FEE',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'GAS_PRICE_LINK',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_CONSUMERS',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_subId', internalType: 'uint64', type: 'uint64' }],
    name: 'acceptSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'addConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'cancelSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'consumerIsAdded',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createSubscription',
    outputs: [{ name: '_subId', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'fulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_consumer', internalType: 'address', type: 'address' },
      { name: '_words', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'fulfillRandomWordsWithOverride',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'fundSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        name: 'minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: 'maxGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'stalenessSeconds', internalType: 'uint32', type: 'uint32' },
      {
        name: 'gasAfterPaymentCalculation',
        internalType: 'uint32',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFallbackWeiPerUnitLink',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFeeConfig',
    outputs: [
      {
        name: 'fulfillmentFlatFeeLinkPPMTier1',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier2',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier3',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier4',
        internalType: 'uint32',
        type: 'uint32',
      },
      {
        name: 'fulfillmentFlatFeeLinkPPMTier5',
        internalType: 'uint32',
        type: 'uint32',
      },
      { name: 'reqsForTier2', internalType: 'uint24', type: 'uint24' },
      { name: 'reqsForTier3', internalType: 'uint24', type: 'uint24' },
      { name: 'reqsForTier4', internalType: 'uint24', type: 'uint24' },
      { name: 'reqsForTier5', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequestConfig',
    outputs: [
      { name: '', internalType: 'uint16', type: 'uint16' },
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '_subId', internalType: 'uint64', type: 'uint64' }],
    name: 'getSubscription',
    outputs: [
      { name: 'balance', internalType: 'uint96', type: 'uint96' },
      { name: 'reqCount', internalType: 'uint64', type: 'uint64' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'consumers', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'subId', internalType: 'uint64', type: 'uint64' }],
    name: 'pendingRequestExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_consumer', internalType: 'address', type: 'address' },
    ],
    name: 'removeConsumer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_keyHash', internalType: 'bytes32', type: 'bytes32' },
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      {
        name: '_minimumRequestConfirmations',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: '_callbackGasLimit', internalType: 'uint32', type: 'uint32' },
      { name: '_numWords', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'requestRandomWords',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_subId', internalType: 'uint64', type: 'uint64' },
      { name: '_newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'requestSubscriptionOwnerTransfer',
    outputs: [],
    stateMutability: 'pure',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keeperCompatibleInterfaceAbi}__
 */
export const useWriteKeeperCompatibleInterface =
  /*#__PURE__*/ createUseWriteContract({ abi: keeperCompatibleInterfaceAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keeperCompatibleInterfaceAbi}__ and `functionName` set to `"checkUpkeep"`
 */
export const useWriteKeeperCompatibleInterfaceCheckUpkeep =
  /*#__PURE__*/ createUseWriteContract({
    abi: keeperCompatibleInterfaceAbi,
    functionName: 'checkUpkeep',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link keeperCompatibleInterfaceAbi}__ and `functionName` set to `"performUpkeep"`
 */
export const useWriteKeeperCompatibleInterfacePerformUpkeep =
  /*#__PURE__*/ createUseWriteContract({
    abi: keeperCompatibleInterfaceAbi,
    functionName: 'performUpkeep',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keeperCompatibleInterfaceAbi}__
 */
export const useSimulateKeeperCompatibleInterface =
  /*#__PURE__*/ createUseSimulateContract({ abi: keeperCompatibleInterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keeperCompatibleInterfaceAbi}__ and `functionName` set to `"checkUpkeep"`
 */
export const useSimulateKeeperCompatibleInterfaceCheckUpkeep =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keeperCompatibleInterfaceAbi,
    functionName: 'checkUpkeep',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link keeperCompatibleInterfaceAbi}__ and `functionName` set to `"performUpkeep"`
 */
export const useSimulateKeeperCompatibleInterfacePerformUpkeep =
  /*#__PURE__*/ createUseSimulateContract({
    abi: keeperCompatibleInterfaceAbi,
    functionName: 'performUpkeep',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__
 */
export const useReadLinkTokenInterface = /*#__PURE__*/ createUseReadContract({
  abi: linkTokenInterfaceAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadLinkTokenInterfaceAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLinkTokenInterfaceBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLinkTokenInterfaceDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"name"`
 */
export const useReadLinkTokenInterfaceName =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadLinkTokenInterfaceSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLinkTokenInterfaceTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__
 */
export const useWriteLinkTokenInterface = /*#__PURE__*/ createUseWriteContract({
  abi: linkTokenInterfaceAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteLinkTokenInterfaceApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"decreaseApproval"`
 */
export const useWriteLinkTokenInterfaceDecreaseApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'decreaseApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"increaseApproval"`
 */
export const useWriteLinkTokenInterfaceIncreaseApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'increaseApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLinkTokenInterfaceTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferAndCall"`
 */
export const useWriteLinkTokenInterfaceTransferAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteLinkTokenInterfaceTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__
 */
export const useSimulateLinkTokenInterface =
  /*#__PURE__*/ createUseSimulateContract({ abi: linkTokenInterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateLinkTokenInterfaceApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"decreaseApproval"`
 */
export const useSimulateLinkTokenInterfaceDecreaseApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'decreaseApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"increaseApproval"`
 */
export const useSimulateLinkTokenInterfaceIncreaseApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'increaseApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLinkTokenInterfaceTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferAndCall"`
 */
export const useSimulateLinkTokenInterfaceTransferAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkTokenInterfaceAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateLinkTokenInterfaceTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkTokenInterfaceAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__
 */
export const useReadRaffle = /*#__PURE__*/ createUseReadContract({
  abi: raffleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"checkUpkeep"`
 */
export const useReadRaffleCheckUpkeep = /*#__PURE__*/ createUseReadContract({
  abi: raffleAbi,
  functionName: 'checkUpkeep',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getEntranceFee"`
 */
export const useReadRaffleGetEntranceFee = /*#__PURE__*/ createUseReadContract({
  abi: raffleAbi,
  functionName: 'getEntranceFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getInterval"`
 */
export const useReadRaffleGetInterval = /*#__PURE__*/ createUseReadContract({
  abi: raffleAbi,
  functionName: 'getInterval',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getLastTimeStamp"`
 */
export const useReadRaffleGetLastTimeStamp =
  /*#__PURE__*/ createUseReadContract({
    abi: raffleAbi,
    functionName: 'getLastTimeStamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getNumWords"`
 */
export const useReadRaffleGetNumWords = /*#__PURE__*/ createUseReadContract({
  abi: raffleAbi,
  functionName: 'getNumWords',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getNumberOfPlayers"`
 */
export const useReadRaffleGetNumberOfPlayers =
  /*#__PURE__*/ createUseReadContract({
    abi: raffleAbi,
    functionName: 'getNumberOfPlayers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getPlayer"`
 */
export const useReadRaffleGetPlayer = /*#__PURE__*/ createUseReadContract({
  abi: raffleAbi,
  functionName: 'getPlayer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getRaffleState"`
 */
export const useReadRaffleGetRaffleState = /*#__PURE__*/ createUseReadContract({
  abi: raffleAbi,
  functionName: 'getRaffleState',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getRecentWinner"`
 */
export const useReadRaffleGetRecentWinner = /*#__PURE__*/ createUseReadContract(
  { abi: raffleAbi, functionName: 'getRecentWinner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"getRequestConfirmations"`
 */
export const useReadRaffleGetRequestConfirmations =
  /*#__PURE__*/ createUseReadContract({
    abi: raffleAbi,
    functionName: 'getRequestConfirmations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"hasEnteredRaffle"`
 */
export const useReadRaffleHasEnteredRaffle =
  /*#__PURE__*/ createUseReadContract({
    abi: raffleAbi,
    functionName: 'hasEnteredRaffle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link raffleAbi}__
 */
export const useWriteRaffle = /*#__PURE__*/ createUseWriteContract({
  abi: raffleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"enterRaffle"`
 */
export const useWriteRaffleEnterRaffle = /*#__PURE__*/ createUseWriteContract({
  abi: raffleAbi,
  functionName: 'enterRaffle',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"performUpkeep"`
 */
export const useWriteRafflePerformUpkeep = /*#__PURE__*/ createUseWriteContract(
  { abi: raffleAbi, functionName: 'performUpkeep' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useWriteRaffleRawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: raffleAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link raffleAbi}__
 */
export const useSimulateRaffle = /*#__PURE__*/ createUseSimulateContract({
  abi: raffleAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"enterRaffle"`
 */
export const useSimulateRaffleEnterRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: raffleAbi,
    functionName: 'enterRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"performUpkeep"`
 */
export const useSimulateRafflePerformUpkeep =
  /*#__PURE__*/ createUseSimulateContract({
    abi: raffleAbi,
    functionName: 'performUpkeep',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link raffleAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useSimulateRaffleRawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: raffleAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link raffleAbi}__
 */
export const useWatchRaffleEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: raffleAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link raffleAbi}__ and `eventName` set to `"RaffleEnter"`
 */
export const useWatchRaffleRaffleEnterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: raffleAbi,
    eventName: 'RaffleEnter',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link raffleAbi}__ and `eventName` set to `"RequestedRaffleWinner"`
 */
export const useWatchRaffleRequestedRaffleWinnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: raffleAbi,
    eventName: 'RequestedRaffleWinner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link raffleAbi}__ and `eventName` set to `"WinnerPicked"`
 */
export const useWatchRaffleWinnerPickedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: raffleAbi,
    eventName: 'WinnerPicked',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__
 */
export const useWriteVrfConsumerBaseV2 = /*#__PURE__*/ createUseWriteContract({
  abi: vrfConsumerBaseV2Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useWriteVrfConsumerBaseV2RawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfConsumerBaseV2Abi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__
 */
export const useSimulateVrfConsumerBaseV2 =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfConsumerBaseV2Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfConsumerBaseV2Abi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useSimulateVrfConsumerBaseV2RawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfConsumerBaseV2Abi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__
 */
export const useReadVrfCoordinatorV2Interface =
  /*#__PURE__*/ createUseReadContract({ abi: vrfCoordinatorV2InterfaceAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"getRequestConfig"`
 */
export const useReadVrfCoordinatorV2InterfaceGetRequestConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'getRequestConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadVrfCoordinatorV2InterfaceGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadVrfCoordinatorV2InterfacePendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__
 */
export const useWriteVrfCoordinatorV2Interface =
  /*#__PURE__*/ createUseWriteContract({ abi: vrfCoordinatorV2InterfaceAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useWriteVrfCoordinatorV2InterfaceAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteVrfCoordinatorV2InterfaceAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteVrfCoordinatorV2InterfaceCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteVrfCoordinatorV2InterfaceCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteVrfCoordinatorV2InterfaceRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useWriteVrfCoordinatorV2InterfaceRequestRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useWriteVrfCoordinatorV2InterfaceRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__
 */
export const useSimulateVrfCoordinatorV2Interface =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfCoordinatorV2InterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateVrfCoordinatorV2InterfaceCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateVrfCoordinatorV2InterfaceCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useSimulateVrfCoordinatorV2InterfaceRequestRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2InterfaceAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useSimulateVrfCoordinatorV2InterfaceRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2InterfaceAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useReadVrfCoordinatorV2Mock = /*#__PURE__*/ createUseReadContract({
  abi: vrfCoordinatorV2MockAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"BASE_FEE"`
 */
export const useReadVrfCoordinatorV2MockBaseFee =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'BASE_FEE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"GAS_PRICE_LINK"`
 */
export const useReadVrfCoordinatorV2MockGasPriceLink =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'GAS_PRICE_LINK',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"MAX_CONSUMERS"`
 */
export const useReadVrfCoordinatorV2MockMaxConsumers =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'MAX_CONSUMERS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"acceptSubscriptionOwnerTransfer"`
 */
export const useReadVrfCoordinatorV2MockAcceptSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'acceptSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"consumerIsAdded"`
 */
export const useReadVrfCoordinatorV2MockConsumerIsAdded =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'consumerIsAdded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getConfig"`
 */
export const useReadVrfCoordinatorV2MockGetConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getFallbackWeiPerUnitLink"`
 */
export const useReadVrfCoordinatorV2MockGetFallbackWeiPerUnitLink =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getFallbackWeiPerUnitLink',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getFeeConfig"`
 */
export const useReadVrfCoordinatorV2MockGetFeeConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getFeeConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getRequestConfig"`
 */
export const useReadVrfCoordinatorV2MockGetRequestConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getRequestConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"getSubscription"`
 */
export const useReadVrfCoordinatorV2MockGetSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'getSubscription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"pendingRequestExists"`
 */
export const useReadVrfCoordinatorV2MockPendingRequestExists =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'pendingRequestExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"requestSubscriptionOwnerTransfer"`
 */
export const useReadVrfCoordinatorV2MockRequestSubscriptionOwnerTransfer =
  /*#__PURE__*/ createUseReadContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'requestSubscriptionOwnerTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useWriteVrfCoordinatorV2Mock =
  /*#__PURE__*/ createUseWriteContract({ abi: vrfCoordinatorV2MockAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useWriteVrfCoordinatorV2MockAddConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useWriteVrfCoordinatorV2MockCancelSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useWriteVrfCoordinatorV2MockCreateSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWords"`
 */
export const useWriteVrfCoordinatorV2MockFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWordsWithOverride"`
 */
export const useWriteVrfCoordinatorV2MockFulfillRandomWordsWithOverride =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWordsWithOverride',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fundSubscription"`
 */
export const useWriteVrfCoordinatorV2MockFundSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fundSubscription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useWriteVrfCoordinatorV2MockRemoveConsumer =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useWriteVrfCoordinatorV2MockRequestRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useSimulateVrfCoordinatorV2Mock =
  /*#__PURE__*/ createUseSimulateContract({ abi: vrfCoordinatorV2MockAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"addConsumer"`
 */
export const useSimulateVrfCoordinatorV2MockAddConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'addConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"cancelSubscription"`
 */
export const useSimulateVrfCoordinatorV2MockCancelSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'cancelSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"createSubscription"`
 */
export const useSimulateVrfCoordinatorV2MockCreateSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'createSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWords"`
 */
export const useSimulateVrfCoordinatorV2MockFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fulfillRandomWordsWithOverride"`
 */
export const useSimulateVrfCoordinatorV2MockFulfillRandomWordsWithOverride =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fulfillRandomWordsWithOverride',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"fundSubscription"`
 */
export const useSimulateVrfCoordinatorV2MockFundSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'fundSubscription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"removeConsumer"`
 */
export const useSimulateVrfCoordinatorV2MockRemoveConsumer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'removeConsumer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `functionName` set to `"requestRandomWords"`
 */
export const useSimulateVrfCoordinatorV2MockRequestRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vrfCoordinatorV2MockAbi,
    functionName: 'requestRandomWords',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__
 */
export const useWatchVrfCoordinatorV2MockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: vrfCoordinatorV2MockAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"ConsumerAdded"`
 */
export const useWatchVrfCoordinatorV2MockConsumerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'ConsumerAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"ConsumerRemoved"`
 */
export const useWatchVrfCoordinatorV2MockConsumerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'ConsumerRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"RandomWordsFulfilled"`
 */
export const useWatchVrfCoordinatorV2MockRandomWordsFulfilledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'RandomWordsFulfilled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"RandomWordsRequested"`
 */
export const useWatchVrfCoordinatorV2MockRandomWordsRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'RandomWordsRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"SubscriptionCanceled"`
 */
export const useWatchVrfCoordinatorV2MockSubscriptionCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'SubscriptionCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"SubscriptionCreated"`
 */
export const useWatchVrfCoordinatorV2MockSubscriptionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'SubscriptionCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vrfCoordinatorV2MockAbi}__ and `eventName` set to `"SubscriptionFunded"`
 */
export const useWatchVrfCoordinatorV2MockSubscriptionFundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vrfCoordinatorV2MockAbi,
    eventName: 'SubscriptionFunded',
  })
