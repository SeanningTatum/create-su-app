import React from 'react';

import styled from '@emotion/styled';

import { Button } from '@app/components/base';

import type { DirectoryGeneratedProps } from './Directory.types';

const DirectoryView = (props: DirectoryGeneratedProps): JSX.Element => (
  <Container className="overflow-hidden">
    <div className="flex items-center justify-end mb-6">
      <Button onClick={() => {}}>Add Team Member</Button>
    </div>

    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  </Container>
);

const Container = styled.div``;

export default DirectoryView;
