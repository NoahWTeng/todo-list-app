import React, { useState } from 'react';
import { Block, Text } from '../../../theme/components';

const middle = {
  padding: '1em',
  display: 'grid',
  gridRowTemplate: '50px 100px auto',
  rowGap: '1em',
};

const title = {
  width: '100%',
  textAlign: 'center',
};

export function Tomorrow({ day }) {
  const [tasks, changeTasks] = useState([{}]);

  return (
    <Block {...middle}>
      <Block {...title}>
        <Text h4>Today</Text>
      </Block>

      <Block {...title}>
        <Text h4>Today</Text>
      </Block>
    </Block>
  );
}
