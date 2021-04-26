import React from 'react';

import styled from '@emotion/styled';
import type { Story, Meta } from '@storybook/react/types-6-0';

import ChevronDown from './ChevronDown';
import {
  Checkbox,
  CheckboxCheckedDisabled,
  CheckboxChecked,
  CheckboxDisabled,
  CheckboxIndeterminateDisabled,
  CheckboxIndeterminate,
  CheckboxInvalid,
} from './index';
import StatusApproved from './StatusApproved';
import type { SVGProps } from './Svg.types';

export default {
  title: 'Assets/Svg',
  component: Checkbox, // anything
} as Meta;

const Template: Story<SVGProps> = (args) => (
  <Container>
    <SvgWrapper>
      <Checkbox {...args} />
      <p className="text-sm">Checkbox</p>
    </SvgWrapper>

    <SvgWrapper>
      <CheckboxChecked {...args} />
      <p className="text-sm">CheckboxChecked</p>
    </SvgWrapper>

    <SvgWrapper>
      <CheckboxIndeterminate {...args} />
      <p className="text-sm">CheckboxIndeterminate</p>
    </SvgWrapper>

    <SvgWrapper>
      <CheckboxDisabled {...args} />
      <p className="text-sm">CheckboxDisabled</p>
    </SvgWrapper>

    <SvgWrapper>
      <CheckboxCheckedDisabled {...args} />
      <p className="text-sm">CheckboxCheckedDisabled</p>
    </SvgWrapper>

    <SvgWrapper>
      <CheckboxIndeterminateDisabled {...args} />
      <p className="text-sm">CheckboxIndeterminateDisabled</p>
    </SvgWrapper>

    <SvgWrapper>
      <CheckboxInvalid {...args} />
      <p className="text-sm">CheckboxInvalid</p>
    </SvgWrapper>

    <SvgWrapper>
      <ChevronDown {...args} fill="black" />
      <p className="text-sm">ChevronDown</p>
    </SvgWrapper>

    <SvgWrapper>
      <StatusApproved {...args} height={24} width={24} />
      <p className="text-sm">StatusApproved</p>
    </SvgWrapper>
  </Container>
);

export const List = Template.bind({});
List.args = {};

// MARK:- Styles
const Container = styled.div`
  display: flex;
`;

const SvgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
`;
