import React, {Component} from 'react';
import {Text, View, Platform, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
// import {NavigationActions, withNavigation} from 'react-navigation';
export default class AnimationTypingText extends React.Component {
  constructor(props) {
    super(props);

    this.index = 0;

    this.typing_timer = -1;

    this.blinking_cursor_timer = -1;

    this.state = {text: '', blinking_cursor_color: ''};
  }

  componentDidMount() {
    this.typingAnimation();
  }

  typingAnimation = () => {
    clearTimeout(this.typing_timer);

    this.typing_timer = -1;

    if (this.index < this.props.text.length) {
      if (this.refs.animatedText) {
        this.setState(
          {text: this.state.text + this.props.text.charAt(this.index)},
          () => {
            this.index++;
            this.typing_timer = setTimeout(() => {
              this.typingAnimation();
            }, this.props.typingAnimationDuration);
          },
        );
      }
    } else {
      {
        console.log(this.props.val);
        this.props.nav.navigation.navigate(this.props.val);
      }
    }
  };

  render() {
    return (
      <Text
        ref="animatedText"
        style={{
          color: this.props.color,
          fontSize: this.props.textSize,
          textAlign: 'center',
          fontFamily: 'Lobster-Regular',
        }}>
        {this.state.text}
      </Text>
    );
  }
}

AnimationTypingText.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textSize: PropTypes.number,

  typingAnimationDuration: PropTypes.number,
  blinkingCursorAnimationDuration: PropTypes.number,
};

AnimationTypingText.defaultProps = {
  text: 'Default Typing Animated Text.',
  color: 'white',
  textSize: 20,
  typingAnimationDuration: 40,
  blinkingCursorAnimationDuration: 190,
};
