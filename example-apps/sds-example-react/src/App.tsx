import {
  SdsAccordion,
  SdsAccordionItem,
  SdsButton,
} from 'sds-react-components';
import './App.css';

function App() {
  const handleClick = () => {
    window.alert('Button Clicked!');
  };

  return (
    <>
      <SdsButton variant='primary' onClick={handleClick}>
        Test!
      </SdsButton>
      <SdsAccordion>
        <SdsAccordionItem summary='Item 1'>
          This is an accordion item.
        </SdsAccordionItem>
        <SdsAccordionItem summary='Item 2'>
          This is another item.
        </SdsAccordionItem>
      </SdsAccordion>
    </>
  );
}

export default App;
