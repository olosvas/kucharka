import React from 'react';
import RecipeGrid from './RecipeGrid';

export default {
  title: 'Application/Component Library/RecipeGrid',
  component: RecipeGrid,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <RecipeGrid />

export const Default = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}
