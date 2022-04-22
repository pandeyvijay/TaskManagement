import React, { useEffect, useRef, useState } from "react";

const OptionDiv = ({ value, onChange }) => {
  return (
    <div
      className="select-option select-all-option"
      role="option"
      aria-selected="false"
      style={{ height: "38px" }}
    >
      <span class="select-option-text">
        <input
          type="checkbox"
          class="form-check-input"
          autocompleted=""
          onChange={(e) => {
            onChange(value, e.target.checked);
          }}
        />
        {value.value}
      </span>
    </div>
  );
};

const MultiSelector = ({ customStyles, option, values }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOptions] = useState(option);
  const [selOptions, setSelOptions] = useState([]);
  const containerRef = useRef();
  const ddRef = useRef();
  const toggleDropDown = (event) => {
    setShowDropdown((oldvalue) => {
      return !oldvalue;
    });
  };

  useEffect(() => {
    const { bottom, left, width } =
      containerRef.current.getBoundingClientRect();
    ddRef.current.style.cssText += `top:${bottom}px;left:${left}px;width:${width}px;`;
  }, []);
  const text = selOptions
    .map((o) => {
      return o.value;
    })
    .join(",");
  return (
    <>
      <div ref={containerRef} class="form-outline" style={customStyles}>
        <input
          onClick={toggleDropDown}
          class="form-control select-input placeholder-active active focused"
          type="text"
          readonly="true"
          value={text}
          style={{ textOverflow: "ellipsis" }}
        />
        <span class="select-arrow"></span>
        <div class="form-notch">
          <div class="form-notch-leading" style={{ width: "9px" }}></div>
          <div class="form-notch-middle" style={{ width: "0px" }}></div>
          <div class="form-notch-trailing"></div>
        </div>
      </div>

      <div
        ref={ddRef}
        className="select-dropdown-container"
        id="select-dropdown-container-229618"
        data-popper-placement="bottom-start"
        style={{
          width: "352px",
          inset: "0px auto auto 0px",
          display: showDropdown ? "inline-block" : "none",
          position: "absolute",
        }}
      >
        <div tabindex="0" class="select-dropdown open">
          <div className="input-group">
            <input
              className="form-control select-filter-input"
              placeholder="Search..."
              role="searchbox"
              type="text"
            />
          </div>
          <div
            className="select-options-wrapper"
            style={{ maxHeight: "190px", overflowY: "auto" }}
          >
            <div className="select-options-list">
              {options.map((val, index) => {
                return (
                  <OptionDiv
                    key={val.key}
                    onChange={(selVal, checked) => {
                      const { key, value } = selVal;
                      setSelOptions((opts) => {
                        if (!checked) {
                          return opts.filter((o) => o.key !== key);
                        }
                        return [...opts, selVal];
                      });
                    }}
                    value={val}
                  ></OptionDiv>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSelector;
