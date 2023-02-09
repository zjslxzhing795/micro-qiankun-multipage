import React, { Component } from "react";
import PropTypes from "prop-types"; // eslint-disable-line
import { CustomBreadcrumb, Card } from "@/components";

import { Link } from "react-router-dom";
import { Table, Pagination, Switch } from "@alifd/next";

class RoomManage extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }
    onPageChange = (currentPage) => {
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            this.setState({
                // dataSource: dataSource(currentPage * 5),
                loading: false,
            });
        }, 200);
    };
    onRoomChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    render() {
        const breadcrumb = [
            {
                link: "#",
                text: "直播间管理",
            },
            {
                link: "",
                text: "直播间列表",
            },
        ];
        const dataSource = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: { name: ` ${3 + i}` },
                    id: 100306660940 + i,
                    peopleNum: 100 + i,
                    category: `目录${i}`,
                    time: 100306660940 + i,
                    fee: 100306660940 + i,
                    salesVolume: 10030 + i,
                    sales: 10030 + i,
                    pic: i,
                    auth: i,
                });
            }
            return result;
        };
        // 查看直播间
        const toLivingRoom = (value, index, record) => {
            return <Link to="/live">房间({record.id})</Link>;
        };
        // 直播间操作
        const isLivingRoomOpen = (value, index, record) => {
            return (
                <Switch
                    defaultChecked
                    onChange={this.onRoomChange}
                    size="small"
                    checkedChildren="开"
                    unCheckedChildren="关"
                />
            );
        };
        return (
            <div>
                <CustomBreadcrumb
                    items={breadcrumb}
                    title="father-直播间列表"
                />
                <Card>
                    <Table
                        dataSource={dataSource()}
                        loading={this.state.loading}
                        isZebra
                    >
                        <Table.Column title="直播间ID" dataIndex="id" />
                        <Table.Column title="观看人数" dataIndex="peopleNum" />
                        <Table.Column title="直播类目" dataIndex="category" />
                        <Table.Column
                            title="直播时长（小时）"
                            dataIndex="time"
                        />
                        <Table.Column title="销量" dataIndex="salesVolume" />
                        <Table.Column title="销售额" dataIndex="sales" />
                        <Table.Column title="观看 " cell={toLivingRoom} />
                        <Table.Column title="权限" cell={isLivingRoomOpen} />
                    </Table>
                    <Pagination
                        style={styles.pagination}
                        onChange={this.onPageChange}
                    />
                </Card>
            </div>
        );
    }
}
const styles = {
    pagination: {
        marginTop: "20px",
        textAlign: "right",
    },
};

export default RoomManage;
