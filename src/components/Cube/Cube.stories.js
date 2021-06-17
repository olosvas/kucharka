import React from 'react';
import Cube from './Cube';

export default {
  title: 'Application/Component Library/Cube',
  component: Cube,
  controls: {
    hideNoControlsWarning: true
  }
}

const recipe = {name:"Recept1", author:"adam"}

const Template = () => <Cube recipe1={recipe}/>

export const Default = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}
