import React from 'react';

import styled from '@emotion/styled';

import type { DashboardGeneratedProps } from './Dashboard.types';

const DashboardView = (props: DashboardGeneratedProps): JSX.Element => (
  <Container>
    <h1>Dashboard</h1>
  </Container>
);

const Container = styled.div``;

export default DashboardView;
