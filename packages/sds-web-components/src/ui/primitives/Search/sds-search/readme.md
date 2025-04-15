# sds-search



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                         | Type                    | Default     |
| ------------- | ------------- | ----------------------------------- | ----------------------- | ----------- |
| `ariaLabel`   | `aria-label`  | Label for the search input (hidden) | `string`                | `'Search'`  |
| `disabled`    | `disabled`    | Disables the search                 | `boolean`               | `false`     |
| `placeholder` | `placeholder` | Placeholder text for the search     | `string`                | `''`        |
| `results`     | --            | Results to be shown below input     | `string[] \| undefined` | `undefined` |


## Events

| Event        | Description                       | Type                                   |
| ------------ | --------------------------------- | -------------------------------------- |
| `sds-search` | Emitted when search input changes | `CustomEvent<{ searchTerm: string; }>` |


## Dependencies

### Depends on

- [sds-icon-button](../../Button/sds-icon-button)
- [sds-icon-x](../../../icons)
- [sds-icon-search](../../../icons)
- [sds-list-box](../../ListBox/sds-list-box)
- [sds-list-box-item](../../ListBox/sds-list-box-item)

### Graph
```mermaid
graph TD;
  sds-search --> sds-icon-button
  sds-search --> sds-icon-x
  sds-search --> sds-icon-search
  sds-search --> sds-list-box
  sds-search --> sds-list-box-item
  style sds-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
