import * as styles from './ScopedAnimations.css';

import * as React from 'react';

export default class ScopedAnimations extends React.Component<any, any> {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.ball} />
      </div>
    );
  }

};
