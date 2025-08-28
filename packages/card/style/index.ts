import React from "react";
import styled from "styled-components";
import { getPrefixCls } from "../../../script/Allconfig";

const CardStyle = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  .prozen-head {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid #e8e8e8;
  }

  .prozen-body {
    padding: 12px;
    background-color: #fff;
  }
`;

const useStyleHooks = () => {
  const getStyles = (classNames: string) => {
    let classArr = classNames.split(" ");
    
    let obj = {
      [`${getPrefixCls()}-loading`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#12b3e4ff",
      },
      // [`${getPrefixCls()}-header`]: {
      //   display: "none",
      // },
    };
    //找到符合条件的class
    let result = Object.keys(obj)
      .map((key) => {
        if (classArr.includes(key)) {
          return obj[key];
        }
      })
      .filter(Boolean);

    return { ...result.reduce((o, item) => ({ ...o, ...item }), {}) };
  };

  return {
    getStyles,
  };
};
export { CardStyle };
export default useStyleHooks;
