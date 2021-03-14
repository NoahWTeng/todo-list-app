import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.color};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  &:hover {
    ${(props) => props.hover}
  }

  ${
  (props) => props.styles
}
`;
