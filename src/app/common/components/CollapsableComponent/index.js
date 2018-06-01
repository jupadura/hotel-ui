import React, { Component } from 'react';

import styles from './styles.scss';

class CollapsableComponent extends Component {
    state = { 
        collapsed: false 
    };

    render() {
        const { className, children, header } = this.props;

        return <div className={`${className} ${this.state.collapsed ? styles.collapsed : ''}`}>
                <div 
                    className={styles.header}
                    onClick={() => this.setState(({ collapsed }) => ({ collapsed: !collapsed }))}>
                    {header}
                    <span className={styles.arrow}></span>
                </div>
                <div className={`${styles.content}`}>
                    {children}
                </div>
            </div>
    }
}

export default CollapsableComponent;