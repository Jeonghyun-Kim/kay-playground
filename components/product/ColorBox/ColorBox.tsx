import React from 'react';
import cn from 'classnames';

import { Root } from './ColorBox.styles';

interface Props {
  color: string;
  className?: string;
}
const ColorBox: React.FC<Props> = ({ color, className, ...props }) => {
  return <Root className={cn(className)} {...props} />;
};

export default ColorBox;
