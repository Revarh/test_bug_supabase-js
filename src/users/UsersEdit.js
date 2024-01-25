import { Edit, FormDataConsumer, SimpleForm, TextInput } from 'react-admin';

const UsersEdit = props => (
  <Edit mutationMode="pessimistic" redirect="list">
      <SimpleForm>
        <TextInput source="id" fullWidth disabled />

        <TextInput label="Name" fullWidth source="name" />

        <FormDataConsumer>
          {({ formData, ...rest }) => (
            formData.name && <TextInput label="Username" source="username" fullWidth />
          )}
        </FormDataConsumer>
      </SimpleForm>
  </Edit>
)

export default UsersEdit