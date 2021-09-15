import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import "./App.css";
import {
  ChannelListContainer,
  ChannelContainer,
  ChannelSearch,
} from "./components/index";

const apiKey = "jjqrtwwdp5ev";

const client = StreamChat.getInstance(apiKey);
const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team dark">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
