import React from 'react';
import { Block, Text } from '../../../theme/components';

const middle = {
  color: '#9b9b9b',
  padding: '1em',
  display: 'grid',
  gridRowTemplate: '100px 150px auto',
};

const title = {
  width: '100%',
  textAlign: 'center',
};

export function Today({ day }) {
  return (
    <Block {...middle}>
      <Block {...title}>
        <Text h4>Today</Text>
        <Text subtitle>{day.format('DD-MM-YYYY')}</Text>
      </Block>
      <Block {...title}>
        <Text h4>Today</Text>
        <Text subtitle>{day.format('DD-MM-YYYY')}</Text>
      </Block>
      <Block {...title}>
        <Text h4>Today</Text>
        <Text subtitle>{day.format('DD-MM-YYYY')}</Text>
      </Block>
    </Block>
  );
}
