import React from "react";
import styled from "styled-components";
//全局loading组件

interface Props {
  loadingShow: boolean
}

const loadingCard: React.FC<Props> = (props: Props) => {
  const { loadingShow } = props
  // 作者：德育处主任
  // 链接：https://juejin.cn/post/7037036742985121800
  // 来源：稀土掘金
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  const CardStyle = styled.div`

.loading {
width: 30px;
  height: 30px;
  border: 2px solid #000;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    animation: circle infinite 0.75s linear;
  }

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