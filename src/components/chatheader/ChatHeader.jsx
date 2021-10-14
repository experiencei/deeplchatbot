import React from 'react';
import "./ChatHeader.css";
import  EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { HelpRounded, SendRounded } from '@material-ui/icons';
function ChatHeader({channelName}) {
    return (
        <div  className="chatheader">
            <div className="chatHeader__left">
              <h3><span className="chatHeader__hash">
                  #
              </span>
              {channelName}
              </h3>
            </div>

            <div className="chatHeader__right">
                 <NotificationsIcon/>
                 <EditLocationRoundedIcon/>
                 <PeopleAltRoundedIcon/>

                 <div className="chatHeader__search">
                     <input type="text" placeholder="search" />
                     <SearchRoundedIcon />
                 </div>

                 <SendRounded/>
                 <HelpRounded/>
            </div>
        </div>
    )
}

export default ChatHeader
