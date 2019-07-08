import React from 'react';
import { shallow, mount } from 'enzyme';

import Navbar from './Navbar';

jest.mock('../Board.messages', () => {
  return {
    tilesDeleted: {
      id: 'cboard.components.Board.tilesDeleted',
      defaultMessage: 'Tiles deleted'
    },
    rootBoardNotDeleted: {
      id: 'cboard.components.Board.rootBoardNotDeleted',
      defaultMessage: 'Root Board cannot be deleted'
    },
    tilesCreated: {
      id: 'cboard.components.Board.tilesCreated',
      defaultMessage: 'Tiles created'
    },
    boardSavedNotification: {
      id: 'cboard.components.Board.boardSavedNotification',
      defaultMessage: 'Board changes were saved'
    },
    boardNotSavedNotification: {
      id: 'cboard.components.Board.boardNotSavedNotification',
      defaultMessage: 'There was an error updating your board on the cloud. Check your connection'
    },
    editTitle: {
      id: 'cboard.components.Board.editTitle',
      defaultMessage: 'Edit Board Title'
    },
    boardTitle: {
      id: 'cboard.components.Board.boardTitle',
      defaultMessage: 'Board Title'
    },
    share: {
      id: 'cboard.components.Board.share',
      defaultMessage: 'Share'
    },
    copyMessage: {
      id: 'cboard.components.Board.copyMessage',
      defaultMessage: 'Copied to clipboard!'
    },
    clicksToUnlock: {
      id: 'cboard.components.Board.clicksToUnlock',
      defaultMessage: 'clicks to unlock'
    },
    scannerHowToDeactivate: {
      id: 'cboard.components.Board.scannerHowToDeactivate',
      defaultMessage: 'Press Escape 4 times to deactivate Scanner.'
    },
    scannerManualStrategy: {
      id: 'cboard.components.Board.scannerManualStrategy',
      defaultMessage:
        'Scanner advances with space bar key, press enter to select an item.'
    },
    scannerAutomaticStrategy: {
      id: 'cboard.components.Board.scannerAutomaticStrategy',
      defaultMessage:
        'Scanner will iterate over elements, press any key to select them.'
    }
  }
});

const mockBoard = {
  name: 'tewt',
  id: '12345678901234567',
  tiles: [{ id: '1234', loadBoard: '456456456456456456456' }],
  isPublic: false,
  email: 'asd@qwe.com',
  markToUpdate: true
};

describe('NavBar tests', () => {
  const COMPONENT_PROPS = {
    intl: {
      formatMessage: msg => msg
    },
    board: mockBoard,
    userData: { email: 'qa@qa.com' },
    onLockNotify: jest.fn(),
    className: 'string',
    title: 'string',
    disabled: false,
    isLocked: false,
    onBackClick: jest.fn(),
    onLockClick: jest.fn(),
    isScannerActive: false,
    onDeactivateScannerClick: jest.fn()
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar {...COMPONENT_PROPS} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders without crashing locked', () => {
    const props = {
      ...COMPONENT_PROPS,
      isLocked: true
    };
    const wrapper = shallow(<Navbar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('check share', () => {
    const wrapper = shallow(<Navbar {...COMPONENT_PROPS} />);
    wrapper.prop('onLockClick')();
  });
});
