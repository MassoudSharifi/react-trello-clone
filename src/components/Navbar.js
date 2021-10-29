import { Dropdown, Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { signOut } from '../services/auth';
import { ROUTES } from '../constants';
import { AccountSettings } from '../pages';

export const Navbar = withRouter(() => {
    return (
        <nav
            className={`flex justify-between bg-blue-500 text-white px-3 py-2 absolute z-10 top-0 left-0 right-0`}
        >
            <Link to={ROUTES.BOARDS}>
                <div
                    className={`w-8 h-8 flex bg-blue-400 justify-center items-center rounded text-white`}
                >
                    <HomeOutlined />
                </div>
            </Link>
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item key="0" onClick={() => signOut()}>
                            Sign Out
                        </Menu.Item>
                        <Menu.Item key="1">
                            <AccountSettings />
                        </Menu.Item>
                    </Menu>
                }
                trigger={['click']}
            >
                <div
                    className={`w-8 h-8 flex bg-blue-400 justify-center items-center rounded text-white`}
                >
                    <SettingOutlined />
                </div>
            </Dropdown>
        </nav>
    );
});
