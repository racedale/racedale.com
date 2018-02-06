import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HoverCard from '../components/HoverCard';
import imageFile from '../../public/images/test.png';

storiesOf('HoverCard', module)
  .add('with image', () => (
    <HoverCard title="Whatever Title" src={imageFile} />
  ));