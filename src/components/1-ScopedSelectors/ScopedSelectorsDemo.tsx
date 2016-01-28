import ScopedSelectors from './ScopedSelectors';

import * as React from 'react';

import Snippet, {IFile} from '../shared/Snippet/Snippet';

import * as fs from 'fs';
const tsx = fs.readFileSync(__dirname + '/ScopedSelectors.jsx', 'utf8');
const css = fs.readFileSync(__dirname + '/ScopedSelectors.css', 'utf8');

export default class ScopedSelectorsDemo extends React.Component<any, any> {

  render() {
    const files = [
      { name: 'ScopedSelectors.tsx', source: tsx },
      { name: 'ScopedSelectors.css', source: css }
    ] as IFile[];

    return (
      <Snippet files={files}>
        <ScopedSelectors />
      </Snippet>
    );
  }

};
