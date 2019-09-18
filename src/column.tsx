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

const Column: React.FC<FooterColumn> = ({
  prefixCls,
  icon,
  title,
  items = [],
}) => (
  <div className={`${prefixCls}-column`}>
    {(title || icon) && (
      <h2>
        {icon && <span className={`${prefixCls}-column-icon`}>{icon}</span>}
        {title}
      </h2>
    )}
    {items.map((item, i) => (
      <div className={`${prefixCls}-item`} key={i}>
        <a href={item.url} target={item.openExternal ? '_blank' : undefined}>
          {item.icon && (
            <span className={`${prefixCls}-item-icon`}>{item.icon}</span>
          )}
          {item.title}
        </a>
        {item.description && (
          <>
            <span className={`${prefixCls}-item-separator`}>-</span>
            <span className={`${prefixCls}-item-description`}>
              {item.description}
            </span>
          </>
        )}
      </div>
    ))}
  </div>
);

export default Column;
