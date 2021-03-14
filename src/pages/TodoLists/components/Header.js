import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { Block, Text } from '../../../theme/components';

dayjs.extend(utc);
dayjs.extend(timezone);

const header = {
  gridColumnStart: 1,
  gridColumnEnd: 4,
  display: 'grid',

  gridTemplate: 'repeat(3, 1fr)',
};

const title = {
  gridColumnStart: 1,
  gridColumnEnd: 4,
  display: 'flex',
};

const times = {
  display: 'flex',
};

export function Header() {
  const [globalTime, changeGlobalTime] = useState({
    USA: dayjs().tz('America/New_York').format('HH:mm:ss'),
    ES: dayjs().tz('Europe/Madrid').format('HH:mm:ss'),
    CH: dayjs().tz('Asia/Shanghai').format('HH:mm:ss'),
  });

  useEffect(() => {
    const time = setInterval(() => {
      changeGlobalTime({
        USA: dayjs().tz('America/New_York').format('HH:mm:ss'),
        ES: dayjs().tz('Europe/Madrid').format('HH:mm:ss'),
        CH: dayjs().tz('Asia/Shanghai').format('HH:mm:ss'),
      });
    }, 1000);

    return () => clearInterval(time);
  });

  return (
    <Block {...header}>
      <Block {...title} center middle>
        <Text h2>Todo Lists</Text>
      </Block>
      <Block {...times} center middle column>
        <Text subtitle>New York</Text>
        <Text caption>{globalTime.USA}</Text>
      </Block>
      <Block {...times} center middle column>
        <Text subtitle>Madrid</Text>
        <Text caption>{globalTime.ES}</Text>
      </Block>
      <Block {...times} center middle column>
        <Text subtitle>Shanghai</Text>
        <Text caption>{globalTime.CH}</Text>
      </Block>
    </Block>
  );
}
