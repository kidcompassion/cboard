import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

import FullScreenDialog from '../../UI/FullScreenDialog';
import messages from './Display.messages';

import './Display.css';
import {
  DISPLAY_SIZE_STANDARD,
  DISPLAY_SIZE_LARGE,
  DISPLAY_SIZE_EXTRALARGE,
  LABEL_POSITION_ABOVE,
  LABEL_POSITION_BELOW,
  LABEL_POSITION_HIDDEN
} from './Display.constants';

const propTypes = {
  /**
   * Callback fired when clicking the back button
   */
  onClose: PropTypes.func,
  displaySettings: PropTypes.object.isRequired,
  updateDisplaySettings: PropTypes.func.isRequired
};

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.displaySettings
    };
  }

  toggleHideOutput = () => {
    this.setState({
      hideOutputActive: !this.state.hideOutputActive
    });
  };

  toggleDarkTheme = () => {
    this.setState({
      darkThemeActive: !this.state.darkThemeActive
    });
  };

  onDisplaySettingsChange(displaySetting, event) {
    const {
      target: { value }
    } = event;
    this.setState({ [displaySetting]: value });
  }

  renderRadioGroup(name) {
    return (
      <RadioGroup
        aria-label={this.props.intl.formatMessage(messages[name])}
        name={name}
        className="Display__Options__Row"
        value={this.state[name]}
        onChange={e => this.onDisplaySettingsChange(name, e)}
      >
        <FormControlLabel
          control={<Radio />}
          label={this.props.intl.formatMessage(
            name === 'labelPosition'
              ? messages[LABEL_POSITION_ABOVE]
              : messages[DISPLAY_SIZE_STANDARD]
          )}
          value={
            name === 'labelPosition'
              ? LABEL_POSITION_ABOVE
              : DISPLAY_SIZE_STANDARD
          }
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Radio />}
          label={this.props.intl.formatMessage(
            name === 'labelPosition'
              ? messages[LABEL_POSITION_BELOW]
              : messages[DISPLAY_SIZE_LARGE]
          )}
          value={
            name === 'labelPosition' ? LABEL_POSITION_BELOW : DISPLAY_SIZE_LARGE
          }
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Radio />}
          label={this.props.intl.formatMessage(
            name === 'labelPosition'
              ? messages[LABEL_POSITION_HIDDEN]
              : messages[DISPLAY_SIZE_EXTRALARGE]
          )}
          value={
            name === 'labelPosition'
              ? LABEL_POSITION_HIDDEN
              : DISPLAY_SIZE_EXTRALARGE
          }
          labelPlacement="start"
        />
      </RadioGroup>
    );
  }

  onSubmit() {
    this.props.updateDisplaySettings(this.state);
  }

  render() {
    const { onClose } = this.props;
    return (
      <FullScreenDialog
        open
        title={<FormattedMessage {...messages.display} />}
        onClose={onClose}
        onSubmit={this.onSubmit.bind(this)}
      >
        <Paper className="Display">
          <List>
            <ListItem>
              <ListItemText
                className="Display__ListItemText"
                primary={<FormattedMessage {...messages.uiSize} />}
                secondary={<FormattedMessage {...messages.uiSizeSecondary} />}
              />
              <ListItemSecondaryAction className="Display__Options">
                {this.renderRadioGroup('uiSize')}
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                className="Display__ListItemText"
                primary={<FormattedMessage {...messages.fontSize} />}
                secondary={<FormattedMessage {...messages.fontSizeSecondary} />}
              />
              <ListItemSecondaryAction className="Display__Options">
                {this.renderRadioGroup('fontSize')}
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                className="Display__ListItemText"
                primary={<FormattedMessage {...messages.outputHide} />}
                secondary={
                  <FormattedMessage {...messages.outputHideSecondary} />
                }
              />
              <ListItemSecondaryAction>
                <Switch
                  checked={this.state.hideOutputActive}
                  onChange={this.toggleHideOutput}
                  value="active"
                  color="secondary"
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                className="Display__ListItemText"
                primary={<FormattedMessage {...messages.labelPosition} />}
                secondary={
                  <FormattedMessage {...messages.labelPositionSecondary} />
                }
              />
              <ListItemSecondaryAction className="Display__Options">
                {this.renderRadioGroup('labelPosition')}
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                className="Display__ListItemText"
                primary={<FormattedMessage {...messages.darkTheme} />}
                secondary={
                  <FormattedMessage {...messages.darkThemeSecondary} />
                }
              />
              <ListItemSecondaryAction className="Display__Options">
                <Switch
                  checked={this.state.darkThemeActive}
                  onChange={this.toggleDarkTheme}
                  value="active"
                  color="secondary"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
      </FullScreenDialog>
    );
  }
}

Display.propTypes = propTypes;

export default Display;
