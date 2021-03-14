import styled from 'styled-components';

export const Block = styled.div`
  position: ${(props) => {
    if (props.relative) return 'relative';
    if (props.absolute) return 'absolute';
    if (props.fixed) return 'fixed';
    return props.position;
  }};

  left: ${(props) => (props.left ? '0' : props.left)};
  right: ${(props) => (props.right ? '0' : props.right)};
  top: ${(props) => (props.top ? '0' : props.top)};
  bottom: ${(props) => (props.bottom ? '0' : props.bottom)};

  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};

  background-color: ${(props) => {
    if (props.primary) return 'var(--primary)';
    if (props.secondary) return 'var(--secondary)';
    return props.color;
  }};

  display: ${(props) => {
    if (props.flex) return 'flex';
    if (props.grid) return 'grid';
    return props.display;
  }};

  flex-wrap: ${(props) => props.wrap};
  flex: ${(props) => props.flexNumb};

  justify-content: ${(props) => {
    if (props.between) return 'space-between';
    if (props.around) return 'space-around';
    if (props.evenly) return 'space-evenly';
    if (props.middle) return 'center';
    return props.justify;
  }};
  align-items: ${(props) => (props.center ? 'center' : props.align)};
  flex-direction: ${(props) => {
    if (props.row) return 'row';
    if (props.column) return 'column';
    return props.direction;
  }};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  overflow: ${(props) => props.overflow};

  background-image: ${(props) => props.image && `url(${props.image})`};
  background-repeat: ${(props) => props.repeat};
  background-size: ${(props) => props.size};
  background-position: ${(props) => props.bgPosition};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};

  word-break: ${(props) => {
    if (props.breakAll) return 'break-all';
    if (props.breakWork) return 'break-work';
    return props.word;
  }};

  text-align: ${(props) => props.textAlign};

  grid-template-columns: ${(props) => props.gridColumnTemplate};
  grid-template-rows: ${(props) => props.gridRowTemplate};

  grid-auto-rows: ${(props) => props.gridAutoRows};
  column-gap: ${(props) => props.columnGap};
  row-gap: ${(props) => props.rowGap};
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};

  ${(props) => props.styles};
`;
