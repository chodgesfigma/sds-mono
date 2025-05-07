<script setup lang="ts">
import {
  SdsButton,
  SdsButtonDanger,
  SdsFieldset,
  SdsFieldGroup,
  SdsInputField,
  SdsLegend,
  SdsForm,
  SdsSelectField,
  SdsSelectItem,
  SdsSlider,
  SdsText,
  SdsButtonGroup,
} from "sds-vue-components";
import { ref } from "vue";

const disabled = ref(false);
const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const handleSubmit = () => {
  window.alert("Submitted in Vue env!");
};
</script>

<template>
  <main class="main">
    <label>
      <input type="checkbox" :checked="disabled" @change="toggleDisabled" />
      Disable form
    </label>
    <hr />
    <SdsForm>
      <SdsFieldset :disabled="disabled">
        <SdsLegend>Shipping details</SdsLegend>
        <SdsText>
          Without this your odds of getting your order are low.
        </SdsText>
        <SdsFieldGroup>
          <SdsInputField required defaultValue="123 Example Ln." label="Street address" description="Hello there"
            :disabled="disabled" />
          <SdsSelectField label="Country" description="I am a select description" :disabled="disabled">
            <SdsSelectItem id="ca">Canada</SdsSelectItem>
            <SdsSelectItem id="mx">Mexico</SdsSelectItem>
            <SdsSelectItem id="us" selected>
              United States
            </SdsSelectItem>
          </SdsSelectField>
          <SdsSlider name="range" label="Slide here" description="I am a slider description" defaultValue="40"
            showOutput :disabled="disabled" />
        </SdsFieldGroup>
        <SdsButtonGroup align="end">
          <SdsButtonDanger :disabled="disabled" type="reset">
            Clear
          </SdsButtonDanger>
          <SdsButton :disabled="disabled" type="submit" @click="handleSubmit">
            Submit
          </SdsButton>
        </SdsButtonGroup>
      </SdsFieldset>
    </SdsForm>
  </main>
</template>

<style>
/* These styles are what a consumer app might define themselves as defaults */
:root {
  --global-focus-ring-size: var(--sds-size-stroke-focus-ring);
  --global-focus-ring-color: rgb(0 106 255);
  --global-line-height-paragraph: 1.4;
  --global-stack-top: 999;
  --global-stack-focus: 999;
  --global-stack-dialog-backdrop: 9999;
  --global-stack-dialog-container: 99999;
  --global-container-max-width: 75rem;
  --global-dialog-max-width: 32rem;
  --global-tooltip-max-width: calc(var(--global-dialog-max-width) / 2);
  --global-line-height-body: 1.6;
}

.display-none-to-flex {
  display: var(--sds-responsive-display-none-to-flex) !important;
}

.display-flex-to-none {
  display: var(--sds-responsive-display-flex-to-none) !important;
}

@media (prefers-color-scheme: dark) {
  :root {
    --global-focus-ring-color: rgb(0 106 255);
  }
}

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  background: var(--sds-color-background-default-default);
  color: var(--sds-color-text-default-default);
  margin: 0;
}

html,
body {
  height: 100%;
}

body,
button,
textarea,
input,
select {
  font: var(--sds-font-body-base);
}

pre,
code {
  font: var(--sds-font-body-code);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: var(--sds-font-heading);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 1rem;
  box-sizing: inherit;
  position: relative;
}

hr {
  height: 4px;
  background: #0001;
  width: 100%;
  border: none;
}
</style>
