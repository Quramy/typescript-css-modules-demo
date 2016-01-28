import CompositionOverrides from './CompositionOverrides';

import * as React from 'react';

import Snippet, {IFile} from '../shared/Snippet/Snippet';

import * as fs from 'fs';
const tsx = fs.readFileSync(__dirname + '/CompositionOverrides.tsx', 'utf8');
const css = fs.readFileSync(__dirname + '/CompositionOverrides.css', 'utf8');
const layoutCss = fs.readFileSync(__dirname + '/../shared/styles/layout.css', 'utf8');
const typographyCss = fs.readFileSync(__dirname + '/../shared/styles/typography.css', 'utf8');

export default class CompositionOverridesDemo extends React.Component<any, any> {

  render() {
    const files = [
      { name: 'CompositionOverrides.tsx', source: tsx },
      { name: 'CompositionOverrides.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ] as IFile[];

    return (
      <Snippet files={files}>
        <CompositionOverrides />
      </Snippet>
    );
  }

};
