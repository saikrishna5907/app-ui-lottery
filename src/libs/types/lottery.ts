import { raffleAbi } from '@lottery/generated/generated-hardhat';
import { Abi, ContractEventName, WatchContractEventOnLogsParameter } from 'viem';

export type TWatchContractEventOnLogsFn<
  abi extends Abi | readonly unknown[] = Abi,
  eventName extends ContractEventName<abi> = ContractEventName<abi>,
  strict extends boolean | undefined = undefined,
> = (logs: WatchContractEventOnLogsParameter<abi, eventName, strict>) => void;

export type TLotteryEventTypeFn<
  abi extends typeof raffleAbi | readonly unknown[] = typeof raffleAbi,
  EventName extends ContractEventName<abi> = ContractEventName<abi>,
  strict extends boolean | undefined = undefined,
> = (logs: WatchContractEventOnLogsParameter<abi, EventName, strict>) => void;
