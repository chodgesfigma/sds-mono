# sds-notification



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                             | Type                   | Default     |
| --------------- | ---------------- | --------------------------------------- | ---------------------- | ----------- |
| `isDismissible` | `is-dismissible` | Allows the notification to be dismissed | `boolean`              | `false`     |
| `variant`       | `variant`        | Visual variant of the alert             | `"alert" \| "message"` | `'message'` |


## Events

| Event         | Description                                | Type               |
| ------------- | ------------------------------------------ | ------------------ |
| `sds-dismiss` | Emitted when the notification is dismissed | `CustomEvent<any>` |


## Dependencies

### Depends on

- [sds-destructive-icon-button](../Button/sds-destructive-icon-button)
- [sds-icon-x](../../icons)
- [sds-icon-button](../Button/sds-icon-button)

### Graph
```mermaid
graph TD;
  sds-notification --> sds-destructive-icon-button
  sds-notification --> sds-icon-x
  sds-notification --> sds-icon-button
  style sds-notification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
