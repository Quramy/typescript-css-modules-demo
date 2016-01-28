import ScopedAnimations from './ScopedAnimations';

import * as React from 'react';

import Snippet, {IFile} from '../shared/Snippet/Snippet';

import * as fs from 'fs';
const tsx = fs.readFileSync(__dirname + '/ScopedAnimations.tsx', 'utf8');
const css = fs.readFileSync(__dirname + '/ScopedAnimations.css', 'utf8');
const animationsCss = fs.readFileSync(__dirname + '/../shared/styles/animations.css', 'utf8');

export default class ScopedAnimationsDemo extends React.Component<any, any> {

  render() {
    const files = [
      { name: 'ScopedAnimations.tsx', source: tsx },
      { name: 'ScopedAnimations.css', source: css },
      { name: 'shared/styles/animations.css', source: animationsCss }
    ];

    return (
      <Snippet files={files}>
        <ScopedAnimations />
      </Snippet>
    );
  }

};
