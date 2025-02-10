import { addons } from '@storybook/manager-api';
import '../src/index.css';
import './../dist/sds/sds.css';
import theme from './theme';

addons.setConfig({
  theme: theme,
});
