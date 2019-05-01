import React, {useEffect, useRef} from 'react';
import {Fab, Icon, IconButton} from '@material-ui/core';
import {FuseAnimate, FusePageSimple} from '@fuse';
import {useActions, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import FileList from './FileList';
import DetailSidebarHeader from './DetailSidebarHeader';
import DetailSidebarContent from './DetailSidebarContent';
import MainSidebarHeader from './MainSidebarHeader';
import MainSidebarContent from './MainSidebarContent';
import Breadcrumb from './Breadcrumb';

function FileManagerApp()
{
    const files = useSelector(({fileManagerApp}) => fileManagerApp.files, []);
    const selectedItem = useSelector(({fileManagerApp}) => files[fileManagerApp.selectedItemId], [files]);
    const getFiles = useActions(Actions.getFiles, []);

    const pageLayout = useRef(null);

    useEffect(() => {
        getFiles();
    }, []);

    return (
        <FusePageSimple
            classes={{
                root         : "bg-red",
                header       : "h-96 min-h-96 sm:h-160 sm:min-h-160",
                sidebarHeader: "h-96 min-h-96 sm:h-160 sm:min-h-160",
                rightSidebar : "w-320"
            }}
            header={
                <div className="flex flex-col flex-1 p-8 sm:p-12 relative">
                    <div className="flex items-center justify-between">
                        <IconButton
                            onClick={(ev) => {
                                pageLayout.current.toggleLeftSidebar();
                            }}
                            aria-label="open left sidebar"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <FuseAnimate animation="transition.expandIn" delay={200}>
                            <IconButton aria-label="search">
                                <Icon>search</Icon>
                            </IconButton>
                        </FuseAnimate>
                    </div>
                    <div className="flex flex-1 items-end">
                        <FuseAnimate animation="transition.expandIn" delay={600}>
                            <Fab color="secondary" aria-label="add" className="absolute pin-b pin-l ml-16 -mb-28 z-999">
                                <Icon>add</Icon>
                            </Fab>
                        </FuseAnimate>
                        <FuseAnimate delay={200}>
                            <div>
                                {selectedItem && (
                                    <Breadcrumb selected={selectedItem} className="flex flex-1 pl-72 pb-12 text-16 sm:text-24"/>
                                )}
                            </div>
                        </FuseAnimate>
                    </div>
                </div>
            }
            content={
                <FileList pageLayout={pageLayout}/>
            }
            leftSidebarVariant="temporary"
            leftSidebarHeader={
                <MainSidebarHeader/>
            }
            leftSidebarContent={
                <MainSidebarContent/>
            }
            rightSidebarHeader={
                <DetailSidebarHeader/>
            }
            rightSidebarContent={
                <DetailSidebarContent/>
            }
            ref={pageLayout}
            innerScroll
        />
    )
}

export default withReducer('fileManagerApp', reducer)(FileManagerApp);
