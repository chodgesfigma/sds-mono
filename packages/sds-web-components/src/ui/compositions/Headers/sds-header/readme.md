# sds-header



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [sds-section](../../../layout/sds-section)
- [sds-flex](../../../layout/sds-flex)
- [sds-flex-item](../../../layout/sds-flex-item)
- [sds-logo](../../../primitives/Logo)
- [sds-header-auth](../sds-header-auth)

### Graph
```mermaid
graph TD;
  sds-header --> sds-section
  sds-header --> sds-flex
  sds-header --> sds-flex-item
  sds-header --> sds-logo
  sds-header --> sds-header-auth
  sds-section --> sds-image
  sds-header-auth --> sds-button-group
  sds-header-auth --> sds-button
  sds-header-auth --> sds-navigation
  sds-header-auth --> sds-navigation-pill
  sds-header-auth --> sds-flex
  sds-header-auth --> sds-flex-item
  sds-header-auth --> sds-dialog-button
  sds-header-auth --> sds-icon-menu
  sds-header-auth --> sds-dialog-close
  sds-header-auth --> sds-avatar
  sds-header-auth --> sds-label
  sds-header-auth --> sds-menu-button
  sds-header-auth --> sds-icon-chevron-down
  sds-header-auth --> sds-menu-item
  sds-header-auth --> sds-avatar-block
  sds-dialog-button --> sds-dialog-trigger
  sds-dialog-button --> sds-icon-button
  sds-dialog-button --> sds-button
  sds-dialog-button --> sds-dialog-modal
  sds-dialog-button --> sds-dialog
  sds-dialog-close --> sds-icon-button
  sds-dialog-close --> sds-icon-x
  sds-menu-button --> sds-menu-trigger
  sds-menu-button --> sds-menu-popover
  sds-menu-button --> sds-icon-button
  sds-menu-button --> sds-menu
  sds-avatar-block --> sds-text-strong
  sds-avatar-block --> sds-text
  style sds-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
