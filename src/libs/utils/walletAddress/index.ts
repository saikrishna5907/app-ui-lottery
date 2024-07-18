/**
 *
 * @param address   wallet address
 * @param beforeLength length of the string to be displayed before ...
 * @param afterLength length of the string to be displayed after ...
 * @returns returns a string with the first 6 characters of the address and ... then last 4 characters of the address
 * @example1 addressToShortString('0x1234567890abcdef1234567890abcdef12345678') => '0x1234...5678'
 * @example2  addressToShortString(null) => ''
 */

export const addressToShortString = (
  address?: string | null,
  beforeLength = 6,
  afterLength = 4,
) => {
  if (!address) return '';
  return `${address.slice(0, beforeLength)}...${address.slice(-afterLength)}`;
};
