import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from ".";

//importing components
import CompanyHeader from "./CompanyHeader";
import SideBar from "./Sidebar";

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
      </div>
    </>
  );
};

export default ChannelListContainer;
