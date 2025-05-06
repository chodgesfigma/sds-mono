# sds-button-group

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description                | Type                                 | Default     |
| ---------- | ---------- | -------------------------- | ------------------------------------ | ----------- |
| `disabled` | `disabled` | Disables the button        | `boolean \| undefined`               | `undefined` |
| `size`     | `size`     | The button size            | `"medium" \| "small"`                | `'medium'`  |
| `type`     | `type`     | The button type            | `"button" \| "reset" \| "submit"`    | `'button'`  |
| `variant`  | `variant`  | The button default variant | `"neutral" \| "primary" \| "subtle"` | `'primary'` |

## Dependencies

### Used by

- [sds-dialog-button](../../dialog/sds-dialog-button)
- [sds-dialog-close](../../dialog/sds-dialog-close)
- [sds-menu-button](../../Menu/sds-menu-button)
- [sds-dialog-button](../../Dialog/sds-dialog-button)
- [sds-notification](../../Notification)
- [sds-pagination-next](../../Pagination/sds-pagination-next)
- [sds-pagination-page](../../Pagination/sds-pagination-page)
- [sds-pagination-previous](../../Pagination/sds-pagination-previous)

### Graph

```mermaid
graph TD;
  sds-dialog-button --> sds-button
  sds-dialog-close --> sds-button
  sds-menu-button --> sds-button
  sds-notification --> sds-button
  sds-pagination-next --> sds-button
  sds-pagination-page --> sds-button
  sds-pagination-previous --> sds-button
  style sds-button fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
