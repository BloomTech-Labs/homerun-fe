import React from "react";

import { List, Icon } from "semantic-ui-react";

const SwipeLeft = () => {
  return (
    <List.Item className="swipe-left">
      <Icon aria-hidden="true" className="trash alternate" size="small" />
    </List.Item>
  );
};
export default SwipeLeft;
