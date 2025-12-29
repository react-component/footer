import React from 'react';
import { clsx } from 'clsx';
import Column from './column';
import type { FooterColumn } from './column';

export interface FooterProps {
  prefixCls?: string;
  bottom?: React.ReactNode;
  maxColumnsPerRow?: number;
  columns?: FooterColumn[];
  theme?: 'dark' | 'light';
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  columnLayout?: 'space-around' | 'space-between';
}

const Footer: React.FC<FooterProps> = (props) => {
  const {
    prefixCls = 'rc-footer',
    className,
    style,
    bottom,
    columns,
    maxColumnsPerRow,
    backgroundColor,
    columnLayout,
    theme = 'dark',
    ...restProps
  } = props;

  const footerClassName = clsx(prefixCls, className, {
    [`${prefixCls}-${theme}`]: theme,
  });

  const shouldWrap =
    typeof maxColumnsPerRow === 'number' &&
    !Number.isNaN(maxColumnsPerRow) &&
    maxColumnsPerRow > 0;

  return (
    <footer
      {...restProps}
      className={footerClassName}
      style={{ ...style, backgroundColor }}
    >
      <section className={`${prefixCls}-container`}>
        {columns && columns.length > 0 && (
          <section
            className={`${prefixCls}-columns`}
            style={{
              justifyContent: columnLayout,
              flexWrap: shouldWrap ? 'wrap' : undefined,
            }}
          >
            {columns.map((item, i) => {
              const {
                title,
                icon,
                style: columnStyle,
                className: columnClassName,
                items = [],
              } = item;
              const styleObject: React.CSSProperties = { ...columnStyle };
              if (shouldWrap) {
                styleObject.flex = `0 0 ${
                  100 / (maxColumnsPerRow! + 1) + 0.1
                }%`;
              }
              return (
                <Column
                  key={i}
                  prefixCls={prefixCls}
                  title={title}
                  icon={icon}
                  items={items}
                  style={styleObject}
                  className={columnClassName}
                />
              );
            })}
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
