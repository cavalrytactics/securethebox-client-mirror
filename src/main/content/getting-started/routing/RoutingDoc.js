import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from 'material-ui';

const styles = theme => ({
    layoutRoot: {}
});

class RoutingDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="title">Fuse Routing</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            Fuse React routing system based on <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer" className="font-bold">
                            react-router</a> and its package <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config" target="_blank"
                                                                rel="noopener noreferrer" className="font-bold">react-router-config</a>
                        </Typography>

                        <Typography className="mb-16" component="p">
                            For the modular approach and route based Fuse settings, we are using config files and generate routes from that files.
                        </Typography>

                        <Typography className="mb-16" component="p">
                            For example, have a look at <FuseHighlight component="code" className="language-bash">MailAppConfig.js</FuseHighlight> file under <code
                            className="language-bash">src/main/content/apps/mail</code>. Whenever we navigate to <code className="language-bash">/apps/mail</code>, the navigation
                            sidebar position will be changed to right.
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx my-16">
                            {`
                            import MailApp from './MailApp';
                            import React from 'react';
                            import {Redirect} from 'react-router-dom';

                            export const MailAppConfig = {
                                settings: {
                                     layout          : {
                                        navigation          : 'right', // 'right', 'left', 'top', 'none'
                                        navigationFolded    : false, // true, false
                                        navigationFoldedOpen: false,
                                        toolbar             : 'below', // 'above', 'below', 'none'
                                        footer              : 'below', // 'above', 'below', 'none'
                                        mode                : 'fullwidth' // 'boxed', 'fullwidth'
                                     },
                                     customScrollbars: true,
                                     theme           : 'default'
                                },
                                routes  : [
                                    {
                                        path     : '/apps/mail/label/:labelHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail/filter/:filterHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail/:folderHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail',
                                        component: () => <Redirect to="/apps/mail/inbox"/>
                                    }
                                ]
                            };
                            `}
                        </FuseHighlight>

                        <Typography className="mb-16" component="p">
                            Then we import and generate routes from that file in <code className="language-bash">fuse-configs/fuseRoutes</code>
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx my-16">
                            {`
                                import {appsRoutes} from 'main/content/apps/mail/MailAppConfig.js';
                                import {FuseUtils} from '@fuse/index';
                                import {Redirect} from 'react-router-dom';
                                import React from 'react';

                                const routeConfigs = [
                                    MailAppConfig
                                ];

                                export const routes = [
                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
                                    {
                                        path     : '/',
                                        component: () => <Redirect to="/pages/errors/error-404"/>
                                    }
                                ];
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(RoutingDoc);