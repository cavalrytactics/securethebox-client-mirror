import DemoApp from './main/content/DemoApp';
import {MailAppConfig} from './main/content/apps/mail/MailAppConfig';
import {UserInterfaceConfig} from './main/content/user-interface/UserInterfaceConfig';
import _ from 'lodash';

function setRoutes(config)
{
    let routes = [...config.routes];

    if ( config.settings && !_.isEmpty(config.settings) )
    {
        routes = routes.map((route) => {
            if ( route.settings )
            {
                return route;
            }
            return {
                ...route,
                settings: config.settings
            }
        })
    }

    return [...routes];
}

export const routes = [
    ...setRoutes(MailAppConfig),
    ...setRoutes(UserInterfaceConfig),
    {
        path     : '/demo',
        exact    : true,
        component: DemoApp
    },
    {
        path     : '/',
        exact    : true,
        component: DemoApp
    }
];
