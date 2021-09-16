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
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(prewiewPropps) => (
            <TeamChannelPreview {...prewiewPropps} type="team" />
          )}
        />

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(prewiewPropps) => (
            <TeamChannelPreview {...prewiewPropps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
