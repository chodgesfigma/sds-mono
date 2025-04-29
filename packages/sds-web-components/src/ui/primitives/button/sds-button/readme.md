# sds-button-group

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                | Type                                 | Default     |
| ---------- | ---------- | -------------------------- | ------------------------------------ | ----------- |
| `disabled` | `disabled` | Disables the button        | `boolean \| undefined`               | `undefined` |
| `rounded`  | `rounded`  | Visually rounds the button | `boolean`                            | `false`     |
| `size`     | `size`     | The button size            | `"medium" \| "small"`                | `'medium'`  |
| `type`     | `type`     | The button type            | `"button" \| "reset" \| "submit"`    | `'button'`  |
| `variant`  | `variant`  | The button default variant | `"neutral" \| "primary" \| "subtle"` | `'primary'` |


## Dependencies

### Used by

 - [sds-dialog-button](../../dialog/sds-dialog-button)
 - [sds-dialog-close](../../dialog/sds-dialog-close)
 - [sds-header-auth](../../../compositions/Headers/sds-header-auth)
 - [sds-menu-button](../../Menu/sds-menu-button)

### Graph
```mermaid
graph TD;
  sds-dialog-button --> sds-button
  sds-dialog-close --> sds-button
  sds-header-auth --> sds-button
  sds-menu-button --> sds-button
  style sds-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
