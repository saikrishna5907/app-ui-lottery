import { TLocalStorageKey, TLocalStorageValueMap } from '@lottery/types';

/**
 * @param key
 * @example lcGetItem(LocalStorageKeys.WALLET_CONNECTED) => JSON.parse(localStorage.getItem("WALLET_CONNECTED") || '')
 */
export const lcGetItem = <K extends TLocalStorageKey>(key: K): TLocalStorageValueMap[K] | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as TLocalStorageValueMap[K]) : null;
};

/**
 * @param key
 * @param value
 * @example lcSetItem(LocalStorageKeys.WALLET_CONNECTED, 'true') => localStorage.setItem("WALLET_CONNECTED", '"true"')
 */
export const lcSetItem = <K extends TLocalStorageKey>(
  key: K,
  value: TLocalStorageValueMap[K],
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @param key
 * @example lcRemoveItem(LocalStorageKeys.WALLET_CONNECTED) => localStorage.removeItem("WALLET_CONNECTED")
 */
export const lcRemoveItem = (key: TLocalStorageKey): void => {
  localStorage.removeItem(key);
};
