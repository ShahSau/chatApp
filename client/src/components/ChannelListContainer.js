import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from ".";

import SideBar from "./Sidebar";

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
    </>
  );
};

export default ChannelListContainer;
