import * as styles from './StyleVariantB.css';

import * as React from 'react';

export default class StyleVariantB extends React.Component<any, any> {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Style Variant B</p>
      </div>
    );
  }

};
