/**
 * Created by ddxx on 2017/6/13.
 */

import React from 'react';
import { Form, Select, Button, Slider, InputNumber, Switch, Radio, Icon,Upload } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class LastFromDemo extends React.Component {

    constructor() {
        super();

        this.handSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err,values)=>{
                if(!err){
                    console.log('Received values of form: ', values);
                }
            })
        }

        this.normalFile = (e) => {
            console.log('Upload event:',e);
            if(Array.isArray(e)){
                return e;
            }

            return e && e.fileList;
        }
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span:6 },
            wrapperCol: { span:14 }
        };

        return (
            <Form onSubmit={this.handSubmit}>
                <FormItem {...formItemLayout} label="Select" hasFeedback>
                    {
                        getFieldDecorator('select',
                            {
                                rules: [{required: true,message:'Please select you country!'}]
                            }
                        )(
                            <Select placeholder="please select a country">
                                <Option value="china">China</Option>
                                <Option value="usa">U.S.A</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Select[multiple]">
                    {
                        getFieldDecorator('select-multiple',
                            {
                                rules:[{required:true,message:'Please select your favourite colors!',type:'array'}]
                            })(
                            <Select mode="multiple" placeholder="Please select favourite colors">
                                <Option value="red">Red</Option>
                                <Option value="green">Green</Option>
                                <Option value="blue">Blue</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="InputNumber">
                    {
                        getFieldDecorator('input-number',{initialValue:3})(
                            <InputNumber min={1} max={3}/>
                        )
                    }
                    <span>machines</span>
                </FormItem>
                <FormItem {...formItemLayout} label="Switch">
                    {
                        getFieldDecorator('switch',{valuePropName:'checked'})(
                            <Switch/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Slider">
                    {
                        getFieldDecorator('slider')(
                            <Slider marks={{0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }}/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Radio.Group">
                    {
                        getFieldDecorator('radio-group')(
                            <RadioGroup>
                                <Radio value="a">item 1</Radio>
                                <Radio value="b">item 2</Radio>
                                <Radio value="c">item 3</Radio>
                            </RadioGroup>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Radio.Button">
                    {
                        getFieldDecorator('radio-button')(
                            <RadioGroup>
                                <RadioButton value="a">item 1</RadioButton>
                                <RadioButton value="b">item 2</RadioButton>
                                <RadioButton value="c">item 3</RadioButton>
                            </RadioGroup>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
                    {
                        getFieldDecorator('upload',{valuePropName:'fileList',
                            getValueFromEvent:this.normalFile})(
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload"/>Click to upload
                                </Button>
                            </Upload>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Dragger">
                    <div style={{height:180,lineHeight:1.5}}>
                        {
                            getFieldDecorator('dragger',{valuePropName:'fileList',
                                getValueFromEvent:this.noramlFile})(
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                </Upload.Dragger>
                            )
                        }
                    </div>
                </FormItem>
                <FormItem wrapperCol={{span:12,offset:6}}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}

const LastFromDemoCreate = Form.create()(LastFromDemo);
export default LastFromDemoCreate;