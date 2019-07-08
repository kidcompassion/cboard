import * as helpers from './Export.helpers';

import defaultBoards from '../../../api/boards.json';

const [...boards] = defaultBoards.advanced;
const intl = { formatMessage: () => 'dummy translation' };

describe('Export helper tests', () => {
  test('check openboardExportAdapter', () => {
    helpers.openboardExportAdapter(boards, intl)
      .then()
      .catch(e => { });
  });
  test('check pdfExportAdapter', () => {
    helpers.pdfExportAdapter(boards, intl)
      .then()
      .catch(e => { });
  });
  test('check cboardExportAdapter', () => {
    helpers.cboardExportAdapter(boards, intl)
      .then()
      .catch(e => { });
  });
});
