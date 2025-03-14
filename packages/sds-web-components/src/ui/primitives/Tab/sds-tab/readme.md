# sds-tab



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                    | Type      | Default |
| --------- | ---------- | ------------------------------ | --------- | ------- |
| `active`  | `active`   | Flag if tab is active/inactive | `boolean` | `false` |
| `panelId` | `panel-id` | Unique ID for tab              | `string`  | `''`    |


## Events

| Event              | Description                                          | Type                                |
| ------------------ | ---------------------------------------------------- | ----------------------------------- |
| `sds-tab-click`    | Event emitted when tab is clicked on                 | `CustomEvent<{ panelId: string; }>` |
| `sds-tab-next`     | Event emitted when using right arrow key to navigate | `CustomEvent<{ panelId: string; }>` |
| `sds-tab-previous` | Event emitted when using left arrow key to navigate  | `CustomEvent<{ panelId: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
