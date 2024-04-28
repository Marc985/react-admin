import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const CommentCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Post" />
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);

export default CommentCreate;
