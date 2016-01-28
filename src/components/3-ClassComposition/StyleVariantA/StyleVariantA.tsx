import * as styles from './StyleVariantA.css';

import * as React from 'react';

export default class StyleVariantA extends React.Component<any, any> {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Style Variant A</p>
      </div>
    );
  }

};
