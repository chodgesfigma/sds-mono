# sds-checkbox-field



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                | Type      | Default |
| --------------- | --------------- | ------------------------------------------ | --------- | ------- |
| `description`   | `description`   | A secondary label below the checkbox       | `string`  | `''`    |
| `disabled`      | `disabled`      | Disables the checkbox                      | `boolean` | `false` |
| `indeterminate` | `indeterminate` | Marks the checkbox as an in-between state  | `boolean` | `false` |
| `label`         | `label`         | The checkbox label                         | `string`  | `''`    |
| `selected`      | `selected`      | Controls if the checkbox is checked or not | `boolean` | `false` |
| `value`         | `value`         | The value of the checkbox                  | `string`  | `''`    |


## Events

| Event        | Description                          | Type                                                |
| ------------ | ------------------------------------ | --------------------------------------------------- |
| `sds-change` | Emitted when the checkbox is toggled | `CustomEvent<{ checked: boolean; value: string; }>` |


## Dependencies

### Depends on

- [sds-icon-minus](../../../icons)
- [sds-icon-check](../../../icons)

### Graph
```mermaid
graph TD;
  sds-checkbox-field --> sds-icon-minus
  sds-checkbox-field --> sds-icon-check
  style sds-checkbox-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
