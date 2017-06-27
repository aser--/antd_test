/**
 * Created by ddxx on 2017/5/12.
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Form } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
import { NavigationsDemo } from './NavigationsDemo.jsx';
import { TabsDemo } from './TabsDemo.jsx';
import { AutoCompleteDemo } from './AutoCompleteDemo.jsx';
import { DatePickerDemo } from './DatePickerDemo.jsx';
import { RegistrationForm } from './RegistrationForm.jsx';
import { AdvancedSearchForm } from './AdvancedSearchForm.jsx';
import { FormDemo } from './FormDemo.jsx';
import { NormalFormDemo } from './NormalFormDemo.jsx';
import { CollectionsPage } from './CollectionsPage.jsx';
import { TimeRelatedForm } from './TimeRelatedForm.jsx';
import { LastFromDemo } from './LastFromDemo.jsx';
import { BaseTabel } from './table/BaseTabel.jsx';
// import { SelectionTable } from './table/SelectionTable.jsx';
// import { SelectionTable1 } from './table/SelectionTable1.jsx';
// import { LoadTable } from './table/LoadTable.jsx';
// import { BorderTable } from './table/BorderTable.jsx';
// import { ExpandedRowTable } from './table/ExpandedRowTable.jsx';
// import { HeBingTable } from './table/HeBingTable.jsx';
// import { GDheadTable } from './table/GDheadTable.jsx';
// import { EditTable } from './table/EditTable.jsx';
// import { DynamicTable } from './table/DynamicTable.jsx';
// import { AlertDemo } from './other/AlertDemo.jsx';
// import { ModalDemo } from './other/ModalDemo.jsx';
// import { MessageDemo } from './other/MessageDemo.jsx';
// import { NotificationDemo } from './other/NotificationDemo.jsx';
import { asyncComponent } from './AsyncComponent.jsx';
// import { SimpleEChartsDemo } from './echarts/SimpleEChartsDemo.jsx';

import ReactEcharts from 'echarts-for-react';  //引入echarts框架,打包进vendor

import './layoutDemo.css';

export class LayoutDemo extends React.Component {

    constructor() {
        super();

        this.state = {
            collapsed: false,
            mode: 'inline',
            selectMenuItem:'simpleEChartsDemo'
        };

        const RegistrationFormCreate = Form.create()(RegistrationForm);
        const AdvancedSearchFormCreate = Form.create()(AdvancedSearchForm);
        const FormDemoCreate = Form.create()(FormDemo);
        const NormalFormDemoCreate = Form.create()(NormalFormDemo);
        const TimeRelatedFormCreate = Form.create()(TimeRelatedForm);
        const LastFromDemoCreate = Form.create()(LastFromDemo);

        const NotificationDemo = asyncComponent(() => (
            import(/* webpackChunkName: "NotificationDemo" */ "./other/NotificationDemo.jsx")
        ));
        const MessageDemo = asyncComponent(() => (
            import(/* webpackChunkName: "MessageDemo" */ "./other/MessageDemo.jsx")
        ));
        const ModalDemo = asyncComponent(() => (
            import(/* webpackChunkName: "ModalDemo" */ "./other/ModalDemo.jsx")
        ));
        const AlertDemo = asyncComponent(() => (
            import(/* webpackChunkName: "AlertDemo" */ "./other/AlertDemo.jsx")
        ));
        const DynamicTable = asyncComponent(() => (
            import(/* webpackChunkName: "DynamicTable" */ "./table/DynamicTable.jsx")
        ));
        const EditTable = asyncComponent(() => (
            import(/* webpackChunkName: "EditTable" */ "./table/EditTable.jsx")
        ));
        const GDheadTable = asyncComponent(() => (
            import(/* webpackChunkName: "GDheadTable" */ "./table/GDheadTable.jsx")
        ));
        const HeBingTable = asyncComponent(() => (
            import(/* webpackChunkName: "HeBingTable" */ "./table/HeBingTable.jsx")
        ));
        const ExpandedRowTable = asyncComponent(() => (
            import(/* webpackChunkName: "ExpandedRowTable" */ "./table/ExpandedRowTable.jsx")
        ));
        const BorderTable = asyncComponent(() => (
            import(/* webpackChunkName: "BorderTable" */ "./table/BorderTable.jsx")
        ));
        const LoadTable = asyncComponent(() => (
            import(/* webpackChunkName: "LoadTable" */ "./table/LoadTable.jsx")
        ));
        const SelectionTable1 = asyncComponent(() => (
            import(/* webpackChunkName: "SelectionTable1" */ "./table/SelectionTable1.jsx")
        ));
        const SelectionTable = asyncComponent(() => (
            import(/* webpackChunkName: "SelectionTable" */ "./table/SelectionTable.jsx")
        ));
        const BaseTabel = asyncComponent(() => (
            import(/* webpackChunkName: "BaseTabel" */ "./table/BaseTabel.jsx")
        ));
        const SimpleEChartsDemo = asyncComponent(() => (
            import(/* webpackChunkName: "SimpleEChartsDemo" */ "./echarts/SimpleEChartsDemo.jsx")
        ));
        const SimpleEChartsDemo1 = asyncComponent(() => (
            import(/* webpackChunkName: "SimpleEChartsDemo1" */ "./echarts/SimpleEChartsDemo1.jsx")
        ));
        const SimpleEChartsDemo2 = asyncComponent(() => (
            import(/* webpackChunkName: "SimpleEChartsDemo1" */ "./echarts/SimpleEChartsDemo2.jsx")
        ));

        this.views = {
            'nav': <NavigationsDemo/>,
            'tab': <TabsDemo/>,
            'auto': <AutoCompleteDemo/>,
            'date': <DatePickerDemo/>,
            'form': <FormDemoCreate/>,
            'normalForm': <NormalFormDemoCreate/>,
            'regForm': <RegistrationFormCreate/>,
            'advancedSearch': <AdvancedSearchFormCreate/>,
            'collectionsPage': <CollectionsPage/>,
            'timeRelated': <TimeRelatedFormCreate/>,
            'lastFormDemo': <LastFromDemoCreate/>,
            'baseTable': <BaseTabel/>,
            'selectionTable': <SelectionTable/>,
            'selectionTable1': <SelectionTable1/>,
            'loadTable': <LoadTable/>,
            'borderTable': <BorderTable/>,
            'expandedRowTable': <ExpandedRowTable/>,
            'heBingTable': <HeBingTable/>,
            'gDheadTable': <GDheadTable/>,
            'editTable': <EditTable/>,
            'dynamicTable': <DynamicTable/>,
            'alertDemo': <AlertDemo/>,
            'modalDemo': <ModalDemo/>,
            'messageDemo': <MessageDemo/>,
            'notificationDemo': <NotificationDemo/>,
            'simpleEChartsDemo': <SimpleEChartsDemo/>,
            'simpleEChartsDemo1': <SimpleEChartsDemo1/>,
            'simpleEChartsDemo2': <SimpleEChartsDemo2/>
        };

        this.onCollapse = this.onCollapse.bind(this);

        this.onMenuItemSelect = this.onMenuItemSelect.bind(this);

    }

    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({
            collapsed: collapsed,
            mode: collapsed ? 'vertical':'inline'
        });
    }

    onMenuItemSelect({item, key, selectedKeys}) {
        const selectMenuItem = key;
        console.log(key);
        this.setState({selectMenuItem});
    }

    render() {
        return (
            // <Layout>
            //     <Sider>Sider</Sider>
            //
            //     <Layout>
            //         <Header>Header</Header>
            //         <Content>Content</Content>
            //         <Footer>Footer</Footer>
            //     </Layout>
            //
            //
            // </Layout>

            // <Layout>
            //     <Header>
            //         <div className="log"></div>
            //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight:'64px'}}>
            //             <Menu.Item key="1">Nav1</Menu.Item>
            //             <Menu.Item key="2">Nav2</Menu.Item>
            //             <Menu.Item key="3">Nav3</Menu.Item>
            //         </Menu>
            //     </Header>
            //     <Content style={{padding:'0 50px'}}>
            //         <Breadcrumb style={{margin:'12px 0'}}>
            //             <Breadcrumb.Item>Home</Breadcrumb.Item>
            //             <Breadcrumb.Item>List</Breadcrumb.Item>
            //             <Breadcrumb.Item>App</Breadcrumb.Item>
            //         </Breadcrumb>
            //         <div style={{background:'#fff', padding:24, minHeight:280}}>Context</div>
            //     </Content>
            //     <Footer style={{textAlign:'center'}}>
            //         Ant Design ©2016 Created by Ant UED
            //     </Footer>
            // </Layout>

            // <Layout>
            //     <Header>
            //         <div className="log"></div>
            //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight:'64px'}}>
            //             <Menu.Item key="1">Nav1</Menu.Item>
            //             <Menu.Item key="2">Nav2</Menu.Item>
            //             <Menu.Item key="3">Nav3</Menu.Item>
            //         </Menu>
            //     </Header>
            //     <Breadcrumb style={{margin:'12px 0'}}>
            //         <Breadcrumb.Item>Home</Breadcrumb.Item>
            //         <Breadcrumb.Item>List</Breadcrumb.Item>
            //         <Breadcrumb.Item>App</Breadcrumb.Item>
            //     </Breadcrumb>
            //     <Layout>
            //         <Sider width={200}>
            //             <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
            //             style={{height:'100%'}}>
            //                 <SubMenu key="sub1" title={<span><Icon type="user"/>Subnav 1</span>}>
            //                     <Menu.Item key="1">option1</Menu.Item>
            //                     <Menu.Item key="2">option2</Menu.Item>
            //                     <Menu.Item key="3">option3</Menu.Item>
            //                     <Menu.Item key="4">option4</Menu.Item>
            //                 </SubMenu>
            //                 <SubMenu key="sub2" title={<span><Icon type="laptop"/>Subnav 2</span>}>
            //                     <Menu.Item key="5">option1</Menu.Item>
            //                     <Menu.Item key="6">option2</Menu.Item>
            //                     <Menu.Item key="7">option3</Menu.Item>
            //                     <Menu.Item key="8">option4</Menu.Item>
            //                 </SubMenu>
            //                 <SubMenu key="sub3" title={<span><Icon type="notification"/>Subnav 3</span>}>
            //                     <Menu.Item key="9">option1</Menu.Item>
            //                     <Menu.Item key="10">option2</Menu.Item>
            //                     <Menu.Item key="11">option3</Menu.Item>
            //                     <Menu.Item key="12">option4</Menu.Item>
            //                 </SubMenu>
            //             </Menu>
            //         </Sider>
            //         <Content style={{ background:'#fff', padding:'24px', margin:0, minHeight:'280px'}}>
            //             Context
            //         </Content>
            //
            //     </Layout>
            //
            //     <Footer style={{textAlign:'center'}}>
            //         Ant Design ©2016 Created by Ant UED
            //     </Footer>
            // </Layout>

            <Layout>
                <Sider collapsible={true} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="log"></div>
                    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['simpleEChartsDemo']}
                          defaultOpenKeys={['sub5']} onSelect={this.onMenuItemSelect}>
                        <SubMenu key="sub1"
                                 title={<span><Icon type="user"/><span className="nav-text">User</span></span>}>
                            <Menu.Item key="nav">NavigationsDemo</Menu.Item>
                            <Menu.Item key="tab">TabDemo</Menu.Item>
                            <Menu.Item key="auto">AutoCompleteDemo</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2"
                                 title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}>
                            <Menu.Item key="date">DatePickerDemo</Menu.Item>
                            <Menu.Item key="form">FormDemo</Menu.Item>
                            <Menu.Item key="normalForm">NormalFormDemo</Menu.Item>
                            <Menu.Item key="regForm">RegistrationForm</Menu.Item>
                            <Menu.Item key="advancedSearch">AdvancedSearchForm</Menu.Item>
                            <Menu.Item key="collectionsPage">CollectionsPage</Menu.Item>
                            <Menu.Item key="timeRelated">TimeRelatedForm</Menu.Item>
                            <Menu.Item key="lastFormDemo">LastFormDemo</Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub3"
                                 title={<span><Icon type="file"/><span className="nav-text">Table</span></span>}>
                            <Menu.Item key="baseTable">BaseTable</Menu.Item>
                            <Menu.Item key="selectionTable">SelectionTable</Menu.Item>
                            <Menu.Item key="selectionTable1">SelectionTable1</Menu.Item>
                            <Menu.Item key="loadTable">LoadTable</Menu.Item>
                            <Menu.Item key="borderTable">BorderTable</Menu.Item>
                            <Menu.Item key="expandedRowTable">ExpandedRowTable</Menu.Item>
                            <Menu.Item key="heBingTable">HeBingTable</Menu.Item>
                            <Menu.Item key="gDheadTable">GDheadTable</Menu.Item>
                            <Menu.Item key="editTable">EditTable</Menu.Item>
                            <Menu.Item key="dynamicTable">DynamicTable</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4"
                                 title={<span><Icon type="file"/><span className="nav-text">Other</span></span>}>
                            <Menu.Item key="alertDemo">AlertDemo</Menu.Item>
                            <Menu.Item key="modalDemo">ModalDemo</Menu.Item>
                            <Menu.Item key="messageDemo">MessageDemo</Menu.Item>
                            <Menu.Item key="notificationDemo">NotificationDemo</Menu.Item>
                            <Menu.Item key="alertDemo">AlertDemo</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5"
                                 title={<span><Icon type="file"/><span className="nav-text">ECharts</span></span>}>
                            <Menu.Item key="simpleEChartsDemo">SimpleEChartsDemo</Menu.Item>
                            <Menu.Item key="simpleEChartsDemo1">SimpleEChartsDemo1</Menu.Item>
                            <Menu.Item key="simpleEChartsDemo2">SimpleEChartsDemo2</Menu.Item>
                            <Menu.Item key="notificationDemo">NotificationDemo</Menu.Item>
                            <Menu.Item key="alertDemo">AlertDemo</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6">
                            <span>
                                <Icon type="file"/>
                                <span className="nav-text">file</span>
                            </span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background:'#fff', padding:0}}/>
                    <Content style={{margin:'0 16px'}}>
                        <Breadcrumb style={{margin:'12px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding:24, background:'#fff', minHeight:360}}>
                            {
                                this.views[this.state.selectMenuItem]
                            }
                        </div>
                    </Content>
                    <Footer style={{textAlign:'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>

        );
    }
}

