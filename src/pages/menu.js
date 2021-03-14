import React from 'react'
import { Menu } from '../components'
import { Block } from '../theme'
import { withTranslation } from '../../i18n';

const datas = [
  {
    id: 1,
    name: 'Pasta',
    source: require('../../public/static/img/bruna-branco-t8hTmte4O_g-unsplash.png'),
  },
  {
    id: 2,
    name: 'Steak',
    source: require('../../public/static/img/chad-montano-M0lUxgLnlfk-unsplash.png'),
  },
  {
    id: 3,
    name: 'Pizza',
    source: require('../../public/static/img/shaian-ramesht-exSEmuA7R7k-unsplash.png'),
  },
  {
    id: 4,
    name: 'Sushi',
    source: require('../../public/static/img/spencer-chow-PF_zcUW_NYU-unsplash.png'),
  },
  {
    id: 5,
    name: 'Sea Food',
    source: require('../../public/static/img/sam-moqadam-9VsmW_ySo10-unsplash.png'),
  },
  {
    id: 6,
    name: 'Drink',
    source: require('../../public/static/img/kobby-mendez-xBFTjrMIC0c-unsplash.png'),
  },
  {
    id: 7,
    name: 'Burger',
    source: require('../../public/static/img/john-fornander-1CNFRA3dMlQ-unsplash.png'),
  },
]

function Home() {
  return (
    <Block
      height="100%"
    >
      <Block padding="1em" height="100%">
        <Menu categories={datas} />
      </Block>
    </Block>
  )
}

export default withTranslation('common')(Home)
