import * as styles from './CompositionOverrides.css';

import * as React from 'react';

export default class CompositionOverrides extends React.Component<any, any> {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Class Composition with Overrides</p>
      </div>
    );
  }

};
