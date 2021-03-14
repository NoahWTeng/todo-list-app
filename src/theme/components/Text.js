import styled from 'styled-components';

export const Text = styled.p`
  font-weight: ${(props) => {
    if (props.bold) return 'var(--bold)'
    if (props.thin) return 'var(--thin)'
    return 'var(--regular)'
  }};
  font-size: ${(props) => {
    if (props.h1) return 'var(--h1)'
    if (props.h2) return 'var(--h2)'
    if (props.h3) return 'var(--h3)'
    if (props.h4) return 'var(--title)'
    if (props.subtitle) return 'var(--subtitle)'
    if (props.caption) return 'var(--caption)'
    if (props.small) return 'var(--small)'
    return props.size
  }};
  color: ${(props) => {
    if (props.primary) return 'var(--primary)'
    if (props.secondary) return 'var(--secondary)'
    return props.color
  }};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  text-transform: ${(props) => props.transform};
  letter-spacing: ${(props) => props.spacing};
  line-height: ${(props) => props.height};
  text-align: ${(props) => {
    if (props.center) return 'center'
    return props.align
  }};
  font-family:${(props) => props.fonts}

  ${
  (props) => props.styles
}
`;
