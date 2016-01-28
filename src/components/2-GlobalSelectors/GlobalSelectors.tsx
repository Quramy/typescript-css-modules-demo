import * as styles from './GlobalSelectors.css';

import * as React from 'react';

export default class GlobalSelectors extends React.Component<any, any> {

  render() {
    return (
      <div className={ styles.root }>
        <p>Global Selectors</p>
      </div>
    );
  }

};
