import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const PostEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
           
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;