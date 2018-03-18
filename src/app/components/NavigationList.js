import React from 'react';
import config from '../config/NavigationConfig';
import { Link } from 'react-router';

class NavigationList extends React.Component
{

    isActive(href) {
        if (window.location.pathname === href)
            return window.location.pathname;
    }

    render() {



        let items = config.menu.map((item, index) => {
            return <li className={this.isActive(item.link)? 'active' : ''} key={index}>
                        <Link className={item.aClass} to={item.link}>
                            {item.name}
                        </Link>
                    </li>
        });


        return <ul className="nav navbar-nav navbar-left">
                {items}
            </ul>

    }
}

export default NavigationList;