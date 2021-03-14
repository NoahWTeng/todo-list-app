import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${(props) => {
    if (props.primary) return 'var(--primary)'
    if (props.secondary) return 'var(--secondary)'
    return props.color
  }};

display: ${(props) => (props.flex ? 'flex' : props.display)};
justify-content: ${(props) => {
    if (props.between) return 'space-between'
    if (props.around) return 'space-around'
    if (props.evenly) return 'space-evenly'
    if (props.middle) return 'center'
    return props.justify
  }};

padding: ${(props) => props.padding};
margin: ${(props) => props.margin};

${
  (props) => props.styles
}
`
