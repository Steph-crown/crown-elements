/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    /**
     * CrownButton Component
     * Represents a customizable button component.
     */
    interface CrownButton {
        /**
          * Specifies whether the button is focused when the page loads.
          * @default false
         */
        "autofocus": boolean;
        /**
          * Additional CSS classes to apply to the button. Has to be Tailwind CSS classes.
         */
        "customClass": string;
        /**
          * The disabled state of the button.
          * @default false
         */
        "disabled": boolean;
        /**
          * The name of the button, which is submitted with the form data.
         */
        "name": string;
        /**
          * The type of button. Possible values include "button", "submit", or "reset".
          * @default "button"
         */
        "type": 'button' | 'submit' | 'reset';
        /**
          * The value associated with the button, which is submitted with the form data.
         */
        "value": string;
        /**
          * The variant of the button. Possible values include "filled", "outlined", "text", "elevated", or "tonal".
         */
        "variant": 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
        /**
          * The width of the button. Possible values include "auto", "full", or specific CSS width (e.g., "200px"). "auto" sets the button width to the width of its content, "full" sets the button width to 100% of its container, and a specific CSS width sets the button width to the specified width.
          * @default "auto"
         */
        "width": 'auto' | 'full' | string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    /**
     * CrownButton Component
     * Represents a customizable button component.
     */
    interface HTMLCrownButtonElement extends Components.CrownButton, HTMLStencilElement {
    }
    var HTMLCrownButtonElement: {
        prototype: HTMLCrownButtonElement;
        new (): HTMLCrownButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "crown-button": HTMLCrownButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    /**
     * CrownButton Component
     * Represents a customizable button component.
     */
    interface CrownButton {
        /**
          * Specifies whether the button is focused when the page loads.
          * @default false
         */
        "autofocus"?: boolean;
        /**
          * Additional CSS classes to apply to the button. Has to be Tailwind CSS classes.
         */
        "customClass"?: string;
        /**
          * The disabled state of the button.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The name of the button, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * The type of button. Possible values include "button", "submit", or "reset".
          * @default "button"
         */
        "type"?: 'button' | 'submit' | 'reset';
        /**
          * The value associated with the button, which is submitted with the form data.
         */
        "value"?: string;
        /**
          * The variant of the button. Possible values include "filled", "outlined", "text", "elevated", or "tonal".
         */
        "variant"?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
        /**
          * The width of the button. Possible values include "auto", "full", or specific CSS width (e.g., "200px"). "auto" sets the button width to the width of its content, "full" sets the button width to 100% of its container, and a specific CSS width sets the button width to the specified width.
          * @default "auto"
         */
        "width"?: 'auto' | 'full' | string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "crown-button": CrownButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * CrownButton Component
             * Represents a customizable button component.
             */
            "crown-button": LocalJSX.CrownButton & JSXBase.HTMLAttributes<HTMLCrownButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
