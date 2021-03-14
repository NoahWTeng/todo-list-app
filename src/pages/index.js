import React from 'react';
import { END } from 'redux-saga'
import Link from 'next/link'
import PropTypes from 'prop-types';

import { withTranslation } from '../../i18n';
import { wrapper, processGetPhotos } from '../redux';

import { Block, Text, Button } from '../theme';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().placeholderData) {
    store.dispatch(processGetPhotos())
    store.dispatch(END)
  }
  await store.sagaTask.toPromise()
})

function Welcome({ t }) {
  return (
    <Block height="100%"
      // eslint-disable-next-line global-require
      image={require('../../public/static/img/Welcome.png')}
      repeat="no-repeat"
      position="center"
      size="cover"
      flex
      column
      between
      padding="4em 0"
    >
      <Block>
        <Text center h3 color="white" bold>Welcome</Text>
        <Text center caption color="white">The best app to order fast in the world</Text>
      </Block>

      <Button radius="0"
        height="3em"
        color="white"
        border="none"
        styles={{ boxShadow: '0px 0px 5px 5px #00000069' }}
      >
        <Link href="/menu">
          <Text bold>START!</Text>
        </Link>
      </Button>
    </Block>
  );
}

Welcome.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Welcome)
