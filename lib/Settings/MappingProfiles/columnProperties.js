import React from 'react';
import { FormattedMessage } from 'react-intl';

import { combineMCLProps } from '../../utils/combineMCLProps';

export const DEFAULT_MAPPING_PROFILES_COLUMNS = {
  NAME: 'name',
  FOLIO_RECORD: 'folioRecord',
  UPDATED: 'updated',
  UPDATED_BY: 'updatedBy',
};

export const getMappingProfilesColumnProperties = combineMCLProps({
  visibleColumns: Object.values(DEFAULT_MAPPING_PROFILES_COLUMNS),
  columnMapping: {
    name: <FormattedMessage id="stripes-data-transfer-components.name" />,
    folioRecord: <FormattedMessage id="stripes-data-transfer-components.folioRecordType" />,
    updated: <FormattedMessage id="stripes-data-transfer-components.updated" />,
    updatedBy: <FormattedMessage id="stripes-data-transfer-components.updatedBy" />,
  },
  columnWidths: {
    name: '300px',
    updated: '100px',
    updatedBy: '250px',
  },
});
