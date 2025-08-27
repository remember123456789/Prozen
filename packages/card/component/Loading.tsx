import React from "react";
import styled from "styled-components";
//全局loading组件

interface Props {
    loadingShow: boolean
}

const loadingCard: React.FC<Props> = (props: Props) => {
    const { loadingShow } = props
    const CardStyle = styled.div`
    .loading {
  width: 30px;
  height: 30px;
  border: 2px solid #000;
  border-top-color: transparent;
  border-radius: 100%;
//   display: flex;
//   justify-content: center;
//     align-items: center;
  animation: circle infinite 0.75s linear;
}

// 转转转动画
@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

    `

    if (loadingShow) {

        return (
            <CardStyle>
                <div className="loading"></div>
            </CardStyle>
        );
    }
}

export default loadingCard;