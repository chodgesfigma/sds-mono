# sds-header



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [sds-section](../../../layout/sds-section)
- [sds-flex](../../../layout/sds-flex)
- [sds-flex-item](../../../layout/sds-flex-item)
- [sds-logo](../../../primitives/SdsLogo)
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
  sds-header-auth --> sds-button
  sds-header-auth --> sds-navigation
  sds-header-auth --> sds-navigation-pill
  sds-header-auth --> sds-flex
  sds-header-auth --> sds-flex-item
  sds-header-auth --> sds-icon-menu
  sds-header-auth --> sds-icon-x
  sds-header-auth --> sds-avatar
  sds-header-auth --> sds-label
  sds-header-auth --> sds-button-group
  sds-header-auth --> sds-icon-chevron-down
  sds-header-auth --> sds-avatar-block
  sds-avatar-block --> sds-text-strong
  sds-avatar-block --> sds-text
  style sds-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
