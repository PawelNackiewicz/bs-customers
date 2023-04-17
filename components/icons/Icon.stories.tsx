import type { Meta, StoryObj } from '@storybook/react';
import { defaultIcons } from './defaultIcons';

import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
  render: () =>
  (
    <div>
      {Object.keys(defaultIcons).map((item) =>
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icon name={item as keyof typeof defaultIcons} />
          <p>{item}</p>
        </div>
      )}
    </div>
  )
};
