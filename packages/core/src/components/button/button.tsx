import { Component, Element, Prop, h } from '@stencil/core';

import { hasSlot } from '@utils/slot';

// import { baseButtonClass, buttonVariantClasses } from './button.constants';

/**
 * CrownButton Component
 * Represents a customizable button component.
 * @slot before - Slot for content to appear before the button content.
 * @slot after - Slot for content to appear after the button content.
 * @slot - Default slot for button content.
 */
@Component({
  tag: 'crown-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class CrownButton {
  @Element() hostElement: HTMLElement;

  /**
   * The type of button. Possible values include "button", "submit", or "reset".
   * @default "button"
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * The variant of the button. Possible values include "filled", "outlined", "text", "elevated", or "tonal".
   */
  @Prop() variant: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal' = 'filled';

  /**
   * Additional CSS classes to apply to the button. Has to be Tailwind CSS classes.
   */
  @Prop() customClass: string;

  /**
   * The disabled state of the button.
   * @default false
   */
  @Prop() disabled: boolean = false;

  /**
   * The name of the button, which is submitted with the form data.
   */
  @Prop() name: string;

  /**
   * The value associated with the button, which is submitted with the form data.
   */
  @Prop() value: string;

  /**
   * Specifies whether the button is focused when the page loads.
   * @default false
   */
  @Prop() autofocus: boolean = false;

  /**
   * The width of the button. Possible values include "auto", "full", or specific CSS width (e.g., "200px"). "auto" sets the button width to the width of its content, "full" sets the button width to 100% of its container, and a specific CSS width sets the button width to the specified width.
   * @default "auto"
   */
  @Prop() width: 'auto' | 'full' | string = 'auto';

  /**
   * The color mode of the button. Possible values include "light" or "dark".
   * @default "light"
   */
  @Prop() mode: 'light' | 'dark' = 'light';

  private getWidthClass(): string {
    const widthClasses = {
      auto: 'w-max',
      full: 'w-full',
    };

    return widthClasses[this.width] ?? this.width;
  }

  render() {
    const hasBeforeSlot = hasSlot(this.hostElement, 'before');
    const hasAfterSlot = hasSlot(this.hostElement, 'after');

    console.log({ hasAfterSlot, hasBeforeSlot });

    const buttonProps = {
      type: this.type,
      disabled: this.disabled,
      name: this.name,
      value: this.value,
      autofocus: this.autofocus,
    };

    const variantClasses = buttonVariantClasses[this.mode];

    return (
      <button
        {...buttonProps}
        class={`${baseButtonClass} ${variantClasses[this.variant]} ${this.customClass ?? ''} ${this.getWidthClass()} ${this.variant} relative disabled:cursor-not-allowed`}
      >
        {hasBeforeSlot ? <slot name="before" /> : null}
        <slot />
        {hasAfterSlot ? <slot name="after" /> : null}
      </button>
    );
  }
}

/**
 * class names for button variants.
 */

const buttonLightModeVariantClasses = {
  filled: 'bg-primary/100 text-white disabled:bg-sys/light/disabled/[.12] disabled:text-sys/light/disabled/[.38]',
  outlined:
    'bg-transparent border border-solid border-neutral/50 text-neutral/10 hover:bg-primary/100/4 hover:text-primary/100 active:bg-primary/100/10 active:border-primary/100 disabled:bg-transparent disabled:border-sys/light/disabled/[.12] disabled:text-sys/light/disabled/[.38]',
  text: 'bg:transparent text-primary/100 hover:bg-primary/100/4 active:bg-primary/100/10 disabled:bg-transparent disabled:text-sys/light/disabled/[.38]',
  elevated: 'bg-[#FFF5FB] hover:bg-[#FDEFF8] text-primary/100 active:bg-[#FAE3EE] disabled:bg-sys/light/disabled/[.12] disabled:text-sys/light/disabled/[.38] disabled:shadow-none',
  tonal: 'bg-[#FAE3EE] text-neutral/10 disabled:bg-sys/light/disabled/[.12] disabled:text-sys/light/disabled/[.38]',
};

const buttonDarkModeVariantClasses = {
  filled: 'bg-primary-600 text-white',
  outlined: 'border border-primary-600 text-primary-600  hover:bg-primary-600 hover:text-white',
  text: 'text-primary-600 hover:bg-primary-600 hover:text-white',
  elevated: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md',
  tonal: 'bg-primary-600 hover:bg-primary-700 text-white shadow-none',
};

const buttonVariantClasses = {
  light: buttonLightModeVariantClasses,
  dark: buttonDarkModeVariantClasses,
};

const baseButtonClass = 'text-sm font-medium leading-[160%] flex items-center justify-center rounded-[0.25rem] px-7 py-2.5 w-full gap-2 transition-all';
