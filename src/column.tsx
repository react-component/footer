import React from 'react';

export interface FooterColumnItem {
  title: React.ReactNode;
  url: string;
  openExternal?: boolean;
  icon?: React.ReactNode;
  description?: React.ReactNode;
}

export interface FooterColumn {
  prefixCls?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  items?: FooterColumnItem[];
}

const Column: React.FC<FooterColumn> = ({ prefixCls, title, items = [] }) => (
  <div className={`${prefixCls}-footer-column`}>
    {title && <h2>{title}</h2>}
    {items.map(item => (
      <div className={`${prefixCls}-footer-item`}>
        {item.icon && (
          <span className={`${prefixCls}-footer-item-icon`}>{item.icon}</span>
        )}
        <a href={item.url} target={item.openExternal ? '_blank' : undefined}>
          {item.title}
        </a>
        {item.description && (
          <>
            <span>-</span>
            <span className={`${prefixCls}-footer-item-description`}>
              {item.description}
            </span>
          </>
        )}
      </div>
    ))}
  </div>
);

export default Column;
