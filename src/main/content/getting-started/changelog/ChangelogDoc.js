import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {FusePageSimple} from '@fuse';
import {Typography} from 'material-ui';

const styles = theme => ({
    layoutRoot: {}
});

class ChangelogDoc extends Component {

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
                        <Typography variant="title">Changelog</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <div className="flex items-center mb-32 mt-48">
                            <Typography className="text-28" component="h2">v1.0.1</Typography>
                            <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-05-10)</Typography>
                        </div>

                        <div className="mb-24">
                            <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">NEW:</Typography>
                            <ul>
                                <li>
                                    <Typography className="text-14 mb-8">
                                        All dependencies updated.
                                    </Typography>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-24">
                            <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">FIXES:</Typography>

                            <ul>
                                <li>
                                    <Typography className="text-14 mb-8">
                                        <code>cross-env</code> library added for absolute path across platforms.
                                    </Typography>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center mb-32 mt-48">
                            <Typography className="text-28" component="h2">v1.0.0</Typography>
                            <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-04-21)</Typography>
                        </div>

                        <ul>
                            <li><Typography className="text-14 mb-8">Initial Release</Typography></li>
                        </ul>

                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(ChangelogDoc);