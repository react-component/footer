import React from 'react';
import { clsx } from 'clsx';

export interface FooterColumnItem {
  title: React.ReactNode;
  url?: string;
  openExternal?: boolean;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  LinkComponent?: React.ElementType<any>;
}

export interface FooterColumn {
  prefixCls?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  items?: FooterColumnItem[];
  className?: string;
  style?: React.CSSProperties;
}

const Column: React.FC<FooterColumn> = (props) => {
  const { prefixCls, icon, title, items = [], style, className } = props;
  return (
    <div className={clsx(`${prefixCls}-column`, className)} style={style}>
      {(title || icon) && (
        <h2>
          {icon && <span className={`${prefixCls}-column-icon`}>{icon}</span>}
          {title}
        </h2>
      )}
      {items.map((item, i) => {
        const LinkComponent = item.LinkComponent || 'a';
        return (
          <div
            className={clsx(`${prefixCls}-item`, item.className)}
            style={item.style}
            key={i}
          >
            <LinkComponent
              href={item.url}
              to={typeof LinkComponent !== 'string' ? item.url : undefined}
              target={item.openExternal ? '_blank' : undefined}
              rel={item.openExternal ? 'noopener noreferrer' : undefined}
            >
              {item.icon && (
                <span className={`${prefixCls}-item-icon`}>{item.icon}</span>
              )}
              {item.title}
            </LinkComponent>
            {item.description && (
              <>
                <span className={`${prefixCls}-item-separator`}>-</span>
                <span className={`${prefixCls}-item-description`}>
                  {item.description}
                </span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Column;
