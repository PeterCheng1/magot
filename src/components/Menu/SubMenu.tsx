import React from 'react';

import './SubMenu.less';

import Menu, { MenuItemArray } from './Menu';
import MenuItems from './MenuItems';
import ItemClickContext from './ItemClickContext';
import Popup from '../Popup';
import Icon from '../Icon';
import Iconable from '../Icon/Iconable';
import * as component from '../component';

export interface SubMenuProps
  extends component.BaseComponent,
    component.DisableComponent,
    component.NestedComponent,
    component.IconableComponent {
  /**
   * 子菜单标签
   */
  label: string;

  /**
   * 子菜单标识
   */
  name?: string;

  /**
   * 子菜单内容值
   */
  value?: any;

  /**
   * 子菜单项数据列表
   * @default null
   */
  items?: MenuItemArray | null;
}

const defaultProps: Partial<SubMenuProps> = {
  ...component.getDefaultDisabledProps(),
  items: null,
};

function SubMenu(props: SubMenuProps) {
  const { disabled, ...otherProps } = props;
  const type = 'submenu';
  const prefix = component.getComponentPrefix(type);
  const inherits = component.getComponentClasses('menu-item', { disabled });
  const cls = component.getComponentClasses(type, otherProps, inherits);
  return (
    <ItemClickContext.Consumer>
      {onClick => {
        const handleClick = () => {
          if (onClick) onClick(props.name, props.value);
        };
        return (
          <Popup
            align="rightTop"
            space={4}
            preventOut={true}
            overlay={
              <Menu className={prefix + '-popup'} onItemClick={onClick}>
                {props.items ? (
                  <MenuItems items={props.items} />
                ) : (
                  props.children
                )}
              </Menu>
            }>
            <li className={cls} style={props.style} onClick={handleClick}>
              <Iconable
                name={props.icon}
                position={props.iconPosition}
                size={props.iconSize}>
                <span className="label">{props.label}</span>
              </Iconable>
              <Icon name="forward" />
            </li>
          </Popup>
        );
      }}
    </ItemClickContext.Consumer>
  );
}

SubMenu.defaultProps = defaultProps;

export default SubMenu;
