import styled from "styled-components";

const TitleH1 = styled.h3`
  margin-top: 5px;
`;

const StyledMainDiv = styled.div`
  width: calc(100% - 10px);
  height: calc(100% - 10px);
`;

const StyledModalDiv = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  margin: auto;
  background-color: gray;
  opacity: 0.5;
`;

const StyledRow = styled.div`
  padding: 0.2em;
`;

const StyledColumn = styled.div`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

export { TitleH1, StyledMainDiv, StyledModalDiv, StyledRow, StyledColumn };
