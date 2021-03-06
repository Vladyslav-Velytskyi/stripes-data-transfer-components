import React from 'react';
import { FormattedTime } from 'react-intl';
import { expect } from 'chai';
import {
  describe,
  it,
} from '@bigtest/mocha';

import jobExecution from '../../tests/jobExecution';
import { listTemplate } from '../listTemplate';

describe('JobLogs > listTemplate', () => {
  it('should format runBy field value correctly', () => {
    const {
      runBy: {
        firstName,
        lastName,
      },
    } = jobExecution;

    expect(listTemplate.runBy(jobExecution)).to.equal(`${firstName} ${lastName}`);
  });

  it('should format completed date field value correctly', () => {
    const { completedDate } = jobExecution;
    const formattedDate = (
      <FormattedTime
        value={completedDate}
        day="numeric"
        month="numeric"
        year="numeric"
      />
    );
    const templateDate = listTemplate.completedDate(jobExecution);

    expect(templateDate.props.value).to.equal(formattedDate.props.value);
    expect(templateDate.props.day).to.equal(formattedDate.props.day);
    expect(templateDate.props.month).to.equal(formattedDate.props.month);
    expect(templateDate.props.year).to.equal(formattedDate.props.year);
  });

  it('should format job profile name field value correctly', () => {
    const { jobProfileInfo: { name } } = jobExecution;

    expect(listTemplate.jobProfileName(jobExecution)).to.equal(name);
  });

  it('should format total records field value correctly', () => {
    const { progress: { total } } = jobExecution;

    expect(listTemplate.totalRecords(jobExecution)).to.equal(total);
  });

  it('should format file name field value correctly', () => {
    expect(listTemplate.fileName(jobExecution)).to.equal(jobExecution.fileName);
  });

  it('should format hrId  field value correctly', () => {
    expect(listTemplate.hrId(jobExecution)).to.equal(jobExecution.hrId);
  });
});
