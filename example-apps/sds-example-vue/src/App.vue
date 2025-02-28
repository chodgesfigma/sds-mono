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

<style scoped></style>
