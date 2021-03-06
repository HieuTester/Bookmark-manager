import React, { useEffect, useState } from 'react';
import { addBookmark } from '../actions';
// import NewBookmark from '../components/NewBookmark';
import { Form, Modal, Button, Input, Select, message, Divider } from 'antd';
import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
// import moment from 'moment'


const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};




const AddBookmark = (props) => {
    const [form] = Form.useForm();
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [newTag, setNewTag] = useState('')
    const [listTag, setListTag] = useState([])
    const [bookmark, setBookmark] = useState({})

    const {
        // bookmark,
        editBookmark,
        listTags, 
        addBookmark
    } = props
    useEffect(() => {
        // setBookmark(props.bookmark)
        setListTag(listTags)
    }, [listTags])

    // useEffect(() => {
    //     if (props.bookmark.id) {
    //         const values = {
    //             id: bookmark.id,
    //             title: bookmark.title,
    //             url: bookmark.content,
    //             groupId: bookmark.group.id,
    //             // date: note.date
    //         }
    //         form.setFieldsValue(values)
    //     }
    // }, [bookmark.id]);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false)
    }
    const handleOk = () => {
        closeModal();
        clearFormValues();
    };

    const handleCancel = () => {
        closeModal();
        clearFormValues();
    };

    const clearFormValues = () => {
        form.resetFields();
    }


    // const getGroupById = groupId => {
    //     const index = listGroup.findIndex(x => x.id === groupId)
    //     return listGroup[index]
    // }

    // const genNewId = () => Math.random().toString(36).substr(2, 23)

    function handleAddTag() {
        try {
            if (listTag.filter(item => item === newTag).length === 0) {
                if (newTag.length > 0) {
                    const newListTag = [...listTag]
                    newListTag.push(newTag)
                    setListTag(newListTag)
                }
            } else {
                message.error("Tag already exist!")
            }
        } catch (e) {
            message.error(e.message)
        }
    }

    const onFinish = values => {
        const newBookmark = {
            title: values.title,
            tag: values.tag,
            url: values.url,
        }
        if (bookmark.id) {
            newBookmark["id"] = bookmark.id
            // newNote["date"] = note.date
            // newNote["modifyDate"] = moment().format('DD/MM/YYYY')
            editBookmark(newBookmark)
        } else {
            // newBookmark["id"] = genNewId()
            // // newNote["date"] = moment().format('DD/MM/YYYY')
            addBookmark(newBookmark);
        }
        console.log(newBookmark)
        closeModal();
        clearFormValues();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div className='add-button'>
            <Button onClick={openModal} type="primary" shape="round" icon={<FolderAddOutlined />} size="middle" />
            <Modal
                title={!bookmark.id ? "Add A Bookmark" : "Edit Bookmark"}
                visible={isOpenModal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button form="add-bookmark" type="primary" key="submit" htmlType="submit">
                        OK
                    </Button>
                ]}
            >
                <Form
                    {...layout}
                    name="bookmark"
                    id="add-bookmark"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                >
                    <Form.Item
                        label="title"
                        name="title"
                        // initialValues={note.title}
                        rules={[{ required: true, message: 'Please input note title!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Tag"
                        name="tag"
                        // value={note.category.id}
                        rules={[{ required: true, message: 'Please select tag!' }]}
                    >
                        <Select
                            style={{ width: "50%" }}
                            placeholder="Select tag"
                            dropdownRender={menu => (
                                <div>
                                    {menu}
                                    <Divider style={{ margin: '4px 0' }} />
                                    <div style={{ display: 'flex', flexWrap: 'nowrap', padding: '0 8px', height: '30px' }}>
                                        <Input style={{ flex: 'auto' }} onChange={(e) => setNewTag(e.target.value)} />
                                        <a
                                            style={{ flex: 'none', paddingLeft: '8px', display: 'block', cursor: 'pointer' }}
                                        // onClick={this.addItem}
                                        >
                                            <Button icon={<FileAddOutlined />} onClick={handleAddTag}>
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            )}
                        >
                            {listTag?.map((item, index) => (
                                <Option key={index} value={item} >{item}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* <Button style={{margin: "0 10px"}}  icon={<FileAddOutlined />} onClick={showCategoryModal}>
                            </Button> */}
                    <Form.Item
                        label="Url"
                        name="url"
                        // initialValues={note.content}
                        rules={[{ required: true, message: 'Please input url!' }]}
                    >

                        <Input.TextArea rows={4} />
                    </Form.Item>


                </Form>
            </Modal>
        </div>
    )
}


// const mapDispatchToProps = dispatch => {
//     return {
//         onAddBookmark: (bookmark) => {
//             dispatch(addBookmark(bookmark));
//         }
//     };
// };

// export default connect(null,mapDispatchToProps)(AddBookmark);
export default AddBookmark;