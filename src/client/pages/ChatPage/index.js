import React, {PureComponent} from 'react';
import neo4j from 'neo4j-driver/lib/browser/neo4j-web';
import {isIOS} from 'react-device-detect';
import style from './style.scss';

import ChatHeader from './containers/ChatHeader.jsx';
import ChatBody from './containers/ChatBody.jsx';

import OpenInAppButton from '../../components/OpenInAppButton/OpenInAppButton.jsx';

export default class ChatPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _chatTitle: '',
      _messages: []
    };
  }
  componentDidMount = () => {
    var _skip = 0;
    var _limit = 30;
    /* var messeges = messegesFunctions(_skip, _limit); */
/*     this.setState({
      _messages: messeges
    }); */
  };
  render() {
    return (
      <section className={style.chatSection}>
        <ChatHeader chatTitle={this.state._chatTitle} />
        <ChatBody messages={this.state._messages} />
      </section>
    );
  }
}
