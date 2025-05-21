# sds-pagination-previous



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                      | Type             | Default      |
| -------- | --------- | ------------------------------------------------------------------------------------------------ | ---------------- | ------------ |
| `href`   | `href`    | Link for the next page (currently WIP), disables the button if null                              | `null \| string` | `null`       |
| `label`  | `label`   | Label for the next page button, defaults to 'Previous' and can be overridden via a child element | `string`         | `'Previous'` |


## Dependencies

### Depends on

- [sds-button](../../button/sds-button)
- [sds-icon-arrow-left](../../../icons)

### Graph
```mermaid
graph TD;
  sds-pagination-previous --> sds-button
  sds-pagination-previous --> sds-icon-arrow-left
  style sds-pagination-previous fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
