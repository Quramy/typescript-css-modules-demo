import * as styles from './ScopedSelectors.css';

import * as React from 'react';

export default class ScopedSelectors extends React.Component<any, any> {

  render() {
    return (
      <div className={ styles.root }>
        <p className={ styles.text }>Scoped Selectors</p>
      </div>
    );
  }

};
