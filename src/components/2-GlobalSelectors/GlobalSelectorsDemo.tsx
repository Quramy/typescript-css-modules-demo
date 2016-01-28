import GlobalSelectors from './GlobalSelectors';

import * as React from 'react';

import Snippet, {IFile} from '../shared/Snippet/Snippet';

import * as fs from 'fs';
const tsx = fs.readFileSync(__dirname + '/GlobalSelectors.tsx', 'utf8');
const css = fs.readFileSync(__dirname + '/GlobalSelectors.css', 'utf8');

export default class GlobalSelectorsDemo extends React.Component<any, any> {

  render() {
    const files = [
      { name: 'GlobalSelectors.tsx', source: tsx },
      { name: 'GlobalSelectors.css', source: css }
    ] as IFile[];

    return (
      <Snippet files={files}>
        <GlobalSelectors />
      </Snippet>
    );
  }

};
