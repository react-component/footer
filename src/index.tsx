import React from 'react';
import classNames from 'classnames';
import Column, { FooterColumn } from './column';

export interface FooterProps {
  prefixCls?: string;
  bottom?: React.ReactNode;
  columns?: FooterColumn[];
  className?: string;
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
  prefixCls = 'rc-footer',
  className,
  bottom,
  columns,
  ...restProps
}) => {
  const footerClassName = classNames(`${prefixCls}`, className);
  return (
    <footer className={footerClassName} {...restProps}>
      <section className={`${prefixCls}-container`}>
        {columns && columns.length > 0 && (
          <section className={`${prefixCls}-columns`}>
            {columns.map(({ title, icon, items = [] }, i) => (
              <Column
                key={i}
                prefixCls={prefixCls}
                title={title}
                icon={icon}
                items={items}
              />
            ))}
          </section>
        )}
      </section>
      {bottom && (
        <section className={`${prefixCls}-bottom`}>
          <div className={`${prefixCls}-bottom-container`}>{bottom}</div>
        </section>
      )}
    </footer>
  );
};

export default Footer;
