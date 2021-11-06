import React, { useMemo } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';

const GridMasonryTemplate = ({
  children,
  isCenter,
  isMobile,
  width,
  isMobileSSR,
  defaultBreakpoint,
}) => {
  const breakpointColumns = useMemo(() => {
    return {
      default: (isMobileSSR || isMobile) ? 2 : width <= 1440 ? 5 : 7,
      360: 2,
      375: 2,
      576: 2,
      768: 3,
      992: 3,
      1200: 4,
      1440: 5,
      1680: 6,
      1920: 7,
      2560: 10,
    };
  }, [isMobileSSR, isMobile, width]);

  return (
    <WrapMasonry
      breakpointCols={defaultBreakpoint || breakpointColumns}
      columnClassName="my-masonry-grid_column"
      isCenter={isCenter}
    >
      {children}
    </WrapMasonry>
  );
};

const WrapMasonry = styled(Masonry)`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  justify-content: ${props => props.isCenter && 'center'};
  width: 90%;
  @media only screen and (max-width: 376px) {
    margin: 0px;
    width: -webkit-fill-available;
    padding: 0 8px!important;
  }
  @media only screen and (max-width: 576px) {
    margin: 0;
    width: -webkit-fill-available;
    padding: 0 24px;
  }
  .my-masonry-grid_column {
    padding: 0 8px;
    @media only screen and (max-width: 375px) {
      padding: 0 8px;
    }
  }
`;

export default GridMasonryTemplate;
