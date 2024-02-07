import { Component, Prop, h } from '@stencil/core';

/**
 * The crown-button element.
 *
 * @slot - The default slot for the button text.
 * @slot before - The slot for the content to be displayed before the button text.
 * @slot after - The slot for the content to be displayed after the button text.
 */

@Component({
  tag: 'crown-button',
  styleUrl: 'crown-button.css',
  shadow: true,
})
export class CrownButton {
  /**
   * The color of the button.
   */
  @Prop() color: string;

  /**
   * The size of the button (e.g., small, medium, large).
   */
  @Prop() size: string;

  /**
   * The variant of the button (e.g., outlined, contained, text).
   */
  @Prop() variant: string;

  /**
   * Indicates whether the button is disabled.
   */
  @Prop() disabled: boolean;

  /**
   * The type of the button (e.g., submit, reset, button).
   */
  @Prop() type: string;

  /**
   * The URL if the button behaves as a link.
   */
  @Prop() href: string;

  /**
   * The target window or frame if the button behaves as a link.
   */
  @Prop() target: string;

  @Prop() useShadowDOM: boolean;

  render() {
    return (
      <button>
        <slot name="before" />
        <slot />
        <slot name="after" />
      </button>
    );
  }
}
