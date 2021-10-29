import React, { useState } from 'react';
import { Form, Input, Button, Typography, Modal, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;
export function AccountSettings(props) {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = async () => {
        form.validateFields()
            .then(async (values) => {
                console.log(values);
            })
            .catch((info) => {
                console.log(info);
            });
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handelAfterClose = () => {
        setLoading(false);
        form.resetFields();
    };

    const handleShowModal = () => {
        setVisible(true);
    };

    return (
        <div className="">
            <div onClick={handleShowModal} aria-hidden="true">
                Account Settings
            </div>
            <Modal
                title={false}
                closable={false}
                afterClose={handelAfterClose}
                destroyOnClose
                centered
                style={{ top: 10, bottom: 10 }}
                visible={visible}
                maskClosable={false}
                onCancel={handleCancel}
                bodyStyle={styles.bodyStyle}
                width={560}
                footer={false}
            >
                <div className="flex justify-between  my-5 pl-7 pr-4 mx-0" justify="space-between">
                    <Title level={4} className="font-bold">
                        Change password
                    </Title>

                    <Button icon={<CloseOutlined onClick={handleCancel} />} type="text" />
                </div>
                <Form
                    colon={false}
                    labelAlign="left"
                    form={form}
                    hideRequiredMark
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 12 }}
                    size="large"
                    style={styles.form}
                    className="px-7 overflow-y-auto"
                >
                    <Form.Item
                        label={<span className="text-gray-400 text-md">Current password</span>}
                        name="currentPassword"
                        className="rounded-lg p-3 bg-gray-100 my-0"
                    >
                        <Input.Password
                            className="rounded-md border-purple-300"
                            placeholder="Enter your password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label={<span className="text-gray-400 text-md">Create password</span>}
                        className="rounded-lg p-3 my-0"
                        help={<span className="text-xs">Make sure it's at least 8 characters</span>}
                    >
                        <Input.Password
                            placeholder="Enter new password"
                            className="rounded-md border-purple-300"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        label={<span className="text-gray-400 text-md">Confirm password</span>}
                        dependencies={['password']}
                        hasFeedback
                        className="rounded-md p-3 bg-gray-100"
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        `New Password is not same as confirm password`
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            className="rounded-lg border-purple-300"
                            placeholder="Confirm new password"
                        />
                    </Form.Item>
                </Form>
                <div className="text-right py-5 px-4 shadow-inner bg-white right-0 w-full">
                    <Button
                        onClick={handleCancel}
                        className="rounded-md mx-2 font-semibold border-0 bg-blue-50 px-7 text-blue-700"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="primary"
                        onClick={handleSubmit}
                        loading={loading}
                        className="rounded-md font-semibold border-0 bg-gray-300 px-7 text-white"
                    >
                        Change
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

const styles = {
    bodyStyle: { padding: '12px 0px 0px 0px' },
    form: { height: 'calc(100vh - 210px)' },
};
