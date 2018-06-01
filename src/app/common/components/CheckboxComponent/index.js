import React, { Component } from 'react';

import styles from './styles.scss';

class CheckboxComponent extends Component {
    state = {
        checked: this.props.checked || false,
    };

    toggleChecked = () => {
        this.setState(({ checked }) => ({
            checked: !checked
        }));
    }

    render() {
        return <div className={`${styles.checkbox_container} ${this.props.className}`}>
            <div
                onClick={this.toggleChecked}
                className={`${styles.checkbox} ${this.state.checked ? styles.selected : ''} `}
                tabIndex="0">
            </div>
            {this.props.children}        
        </div>
    }
};

export default CheckboxComponent;