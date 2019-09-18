import React from 'react';
import classNames from 'classnames';

interface FooterProps {
  prefixCls?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ prefixCls, className, ...props }) => {
  const footerClassName = classNames(`${prefixCls}-footer`, className);
  return <footer className={footerClassName} {...props} />;
};

export default Footer;
