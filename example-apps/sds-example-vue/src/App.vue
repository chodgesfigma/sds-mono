<script setup lang="ts">
import { SdsAccordion, SdsAccordionItem, SdsButton } from "sds-vue-components";

const handleClick = () => {
  window.alert("Button Clicked!");
};
</script>

<template>
  <SdsButton variant="primary" @click="handleClick">Test!</SdsButton>
  <SdsAccordion>
    <SdsAccordionItem summary="Item 1"
      >This is an accordion item.</SdsAccordionItem
    >
    <SdsAccordionItem summary="Item 2">This is another item.</SdsAccordionItem>
  </SdsAccordion>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
