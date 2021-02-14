import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import theme from './config/theme';

import HomeScreen from './screens/Home';

export default () => (
  <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
    <HomeScreen />
  </ApplicationProvider>
);
