// utils/slotUtils.ts

/**
 * Checks if a slot with the given name exists in the host element.
 * @param host The host element to check for slots.
 * @param name The name of the slot to check.
 * @returns Whether the slot exists or not.
 */
export function hasSlot(host: HTMLElement, name: string): boolean {
  return !!host.querySelector(`[slot="${name}"]`);
}
