import {
  SdsButton,
  SdsButtonDanger,
  SdsFieldset,
  SdsFieldGroup,
  SdsInputField,
  SdsLegend,
  SdsSelectField,
  SdsSelectItem,
  SdsSlider,
  SdsText,
  SdsButtonGroup,
} from 'sds-react-components';
import './App.css';
import { useState } from 'react';

function App() {
  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => setDisabled(!disabled);

  const handleSubmit = () => {
    window.alert('Submitted in React env!');
  };

  return (
    <main className="main">
      <label>
        <input
          type="checkbox"
          checked={disabled}
          onChange={toggleDisabled}
        />
        Disable form
      </label>
      <hr />
      <SdsFieldset disabled={disabled}>
        <SdsLegend>Shipping details</SdsLegend>
        <SdsText>
          Without this your odds of getting your order are low.
        </SdsText>

        <SdsFieldGroup>
          <SdsInputField
            required={true}
            defaultValue="123 Example Ln."
            label="Street address"
            description="Hello there"
            disabled={disabled}
          />
          <SdsSelectField
            label="Country"
            description="I am a select description"
            disabled={disabled}
          >
            <SdsSelectItem id="ca">Canada</SdsSelectItem>
            <SdsSelectItem id="mx">Mexico</SdsSelectItem>
            <SdsSelectItem id="us" selected>
              United States
            </SdsSelectItem>
          </SdsSelectField>
          <SdsSlider
            name="range"
            label="Slide here"
            description="I am a slider description"
            defaultValue="40"
            showOutput
            disabled={disabled}
          />
        </SdsFieldGroup>

        <SdsButtonGroup align="end">
          <SdsButtonDanger disabled={disabled} type="reset">
            Clear
          </SdsButtonDanger>
          <SdsButton
            disabled={disabled}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </SdsButton>
        </SdsButtonGroup>
      </SdsFieldset>
    </main>
  );
}

export default App;
