import ClassComposition from './ClassComposition';

import * as React from 'react';

import Snippet, {IFile} from '../shared/Snippet/Snippet';

import * as fs from 'fs';
const tsx = fs.readFileSync(__dirname + '/StyleVariantA/StyleVariantA.tsx', 'utf8');
const css = fs.readFileSync(__dirname + '/StyleVariantA/StyleVariantA.css', 'utf8');
const layoutCss = fs.readFileSync(__dirname + '/../shared/styles/layout.css', 'utf8');
const typographyCss = fs.readFileSync(__dirname + '/../shared/styles/typography.css', 'utf8');

export default class ClassCompositionDemo extends React.Component<any, any> {

  render() {
    const files = [
      { name: 'StyleVariantA.tsx', source: tsx },
      { name: 'StyleVariantA.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ] as IFile[];

    return (
      <Snippet files={files}>
        <ClassComposition />
      </Snippet>
    );
  }

};
