import { wrapper } from '../redux';
import { appWithTranslation } from '../../i18n';
import '../theme/theme.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: {
      ...pageProps,
      namespacesRequired: ['common'],
    },
  };
};

export default wrapper.withRedux(appWithTranslation(MyApp));
