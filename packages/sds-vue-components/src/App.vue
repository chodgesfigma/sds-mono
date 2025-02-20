<script setup>
import { SdsButton, SdsAccordion, SdsAccordionItem } from "./index";
</script>

<template>
  <div>
    <h1>Testing Vue Components</h1>
    <SdsButton variant="primary">Test!</SdsButton>
    <SdsAccordion>
      <SdsAccordionItem summary="Item 1"> test item 1</SdsAccordionItem>
      <SdsAccordionItem summary="Item 2"> test item 2</SdsAccordionItem>
      <SdsAccordionItem summary="Item 3"> test item 3</SdsAccordionItem>
    </SdsAccordion>
  </div>
</template>
