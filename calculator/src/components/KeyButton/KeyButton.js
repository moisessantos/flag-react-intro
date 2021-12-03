import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useClickContext } from '../../ClickContext';
import styles from './KeyButton.module.css';


const KeyButton = ({ text, ...otherProps }) => {
  const handleClick = useClickContext();
  console.warn("render");
  return (
    <Button
      variant="secondary"
      name={text}
      onClick={e => handleClick(e.target.name)}
      {...otherProps}
      className={isNaN(Number(text)) && styles.operator}>
      {text}
    </Button>);
}

KeyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(KeyButton, (prevProps, nextProps) => prevProps.text === nextProps.text);
