import React from 'react';
import config from '../config/NavigationConfig';

class NavigationList extends React.Component
{
    render() {

        let items = config.menu.map((item, index) => {
            return <li className={item.liClass} key={index}>
                        <a className={item.aClass} href={item.link}>{item.name}
                        </a>
                    </li>
        });

        console.log(items);

        return <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                {items}
            </ul>
        </div>
    }
}

export default NavigationList;