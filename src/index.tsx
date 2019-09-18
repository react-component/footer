import React from 'react';
import classNames from 'classnames';
import Column, { FooterColumn } from './column';

export interface FooterProps {
  prefixCls?: string;
  className?: string;
  bottom?: React.ReactNode;
  columns?: FooterColumn[];
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
  prefixCls,
  className,
  bottom,
  columns,
  ...restProps
}) => {
  const footerClassName = classNames(`${prefixCls}-footer`, className);
  return (
    <footer className={footerClassName} {...restProps}>
      <section className={`${prefixCls}-footer-main`}>
        {columns && columns.length > 0 && (
          <section className={`${prefixCls}-footer-columns`}>
            {columns.map(({ title, items = [] }) => (
              <Column prefixCls={prefixCls} title={title} items={items} />
            ))}
          </section>
        )}
      </section>
      {bottom && (
        <section className={`${prefixCls}-footer-bottom`}>{bottom}</section>
      )}
    </footer>
  );
};

export default Footer;
