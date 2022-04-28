import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const MessageBox = ({ msg, onClose, showd = true }) => {
  const [show, setShow] = useState(showd);
  return (
    <StyledDiv
      style={{ display: show ? "block" : "" }}
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-body">
        {msg}
        <div className="mt-2 pt-2 border-top">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            data-bs-dismiss="toast"
            onClick={() => {
              setShow(false);
              onclose();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default MessageBox;
