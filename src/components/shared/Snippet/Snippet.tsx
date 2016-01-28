import * as styles from './Snippet.css';

import * as React from 'react';

export interface IFile {
    name: string;
    source: string;
}

export default class Snippet extends React.Component<{files?: IFile[]; children?: any}, any> {

  render() {
    return (
      <div className={styles.root}>

        <div className={styles.output}>
          <div className={styles.fileName}>Output</div>
          <div className={styles.outputContent}>
            { this.props.children }
          </div>
        </div>

        {
          this.props.files.map(file => (
            <div key={file.name} className={styles.file}>
              <div className={styles.fileName}>{ file.name }</div>
              <pre className={styles.pre}>{ file.source }</pre>
            </div>
          ))
        }

      </div>
    );
  }

};
