import '../src/index.css';
import './../dist/sds/sds.css';
import theme from './theme';
import { addons } from '@storybook/manager-api';

addons.setConfig({
  theme: theme,
});
