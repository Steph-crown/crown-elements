# crown-button



<!-- Auto Generated Below -->


## Overview

CrownButton Component
Represents a customizable button component.

## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                                                                                     | Type                                                        | Default     |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `autofocus`   | `autofocus`    | Specifies whether the button is focused when the page loads.                                                                                                                                                                                                                                    | `boolean`                                                   | `false`     |
| `customClass` | `custom-class` | Additional CSS classes to apply to the button. Has to be Tailwind CSS classes.                                                                                                                                                                                                                  | `string`                                                    | `undefined` |
| `disabled`    | `disabled`     | The disabled state of the button.                                                                                                                                                                                                                                                               | `boolean`                                                   | `false`     |
| `mode`        | `mode`         | The color mode of the button. Possible values include "light" or "dark".                                                                                                                                                                                                                        | `"dark" \| "light"`                                         | `'light'`   |
| `name`        | `name`         | The name of the button, which is submitted with the form data.                                                                                                                                                                                                                                  | `string`                                                    | `undefined` |
| `type`        | `type`         | The type of button. Possible values include "button", "submit", or "reset".                                                                                                                                                                                                                     | `"button" \| "reset" \| "submit"`                           | `'button'`  |
| `value`       | `value`        | The value associated with the button, which is submitted with the form data.                                                                                                                                                                                                                    | `string`                                                    | `undefined` |
| `variant`     | `variant`      | The variant of the button. Possible values include "filled", "outlined", "text", "elevated", or "tonal".                                                                                                                                                                                        | `"elevated" \| "filled" \| "outlined" \| "text" \| "tonal"` | `'filled'`  |
| `width`       | `width`        | The width of the button. Possible values include "auto", "full", or specific CSS width (e.g., "200px"). "auto" sets the button width to the width of its content, "full" sets the button width to 100% of its container, and a specific CSS width sets the button width to the specified width. | `string`                                                    | `'auto'`    |


## Slots

| Slot       | Description                                           |
| ---------- | ----------------------------------------------------- |
|            | Default slot for button content.                      |
| `"after"`  | Slot for content to appear after the button content.  |
| `"before"` | Slot for content to appear before the button content. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
