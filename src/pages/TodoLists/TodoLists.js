import React, { useState } from 'react';
import dayjs from 'dayjs';

import { Block, Text } from '../../theme/components';
import { Header, Today } from './components';

const container = {
  display: 'grid',
  gridColumnTemplate: 'repeat(3, 1fr)',
  gridAutoRows: '0.1fr 1fr',
  columnGap: '1em',
  rowGap: '1em',
  height: '100vh',
  padding: '1em',
};

const left = {};

const right = {};

export function TodoLists() {
  const [today, changeToday] = useState(dayjs());

  return (
    <Block {...container}>
      <Header />
      <Block {...left}>One</Block>
      <Today day={today} />
      <Block {...right}>three</Block>
    </Block>
  );
}
