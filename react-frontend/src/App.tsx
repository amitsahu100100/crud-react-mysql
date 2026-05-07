import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostIndex from './PostIndex';
import PostCreate from './postCreate';
import LocalStorageForm from './LocalStorageForm';
import PostEdit from './PostEdit';
import PostShow from './PostShow';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Routes>
      <Route path='/' element={<PostIndex />}></Route>
      <Route path='/create' element={<PostCreate />}></Route>
      <Route path='/Localstorageform' element={<LocalStorageForm />}></Route>
      <Route path='/edit/:id' element={<PostEdit />}></Route>
      <Route path='/show/:id' element={<PostShow />}></Route>
     </Routes>
    </>
  )
}

export default App
