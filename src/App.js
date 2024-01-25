import { Admin, Resource } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';
import dataProvider from './dataProvider';
import users from './users';

const App = () => (
  <BrowserRouter>
    <Admin dataProvider={dataProvider}>
      <Resource name="users" {...users} />
    </Admin>
  </BrowserRouter>
)

export default App