import React, { useState } from 'react';
import { Block, Text, Input } from '../../../theme/components';

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

const task = {
  width: '100%',
  textAlign: 'center',
  display: 'flex',
};

export function Today({ day }) {
  const [tasks, changeTasks] = useState([{}]);

  const handleSubmit = (event) => {
    console.log('[ submit ] >', event.target.name.value);
    event.preventDefault();
  };

  return (
    <Block {...middle}>
      <Block {...title}>
        <Text h4>Today</Text>
        <Text subtitle>{day.format('DD-MM-YYYY')}</Text>
      </Block>
      <Block {...task} middle center>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            width="20em"
            height="2em"
            padding="0.2em"
            name="name"
            placeholder="Task title"
          />
          <Input type="submit" width="5em" height="2em" value="Add" />
        </form>
      </Block>
      <Block {...title}>
        <Text h4>Today</Text>
        <Text subtitle>{day.format('DD-MM-YYYY')}</Text>
      </Block>
    </Block>
  );
}
