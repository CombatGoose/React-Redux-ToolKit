import './Modal.scss'

import { useDispatch, useSelector } from 'react-redux'

import { changeModal, changeCreateStatus } from '../../redux/reducers/UIReducer'
import { updateName } from '../../redux/reducers/userReducer'
import { addUser, deleteUser } from '../../redux/reducers/userList'
import { useState } from 'react'

const Modal = () => {

    const [form, setForm] = useState({
        name: '',
        age: null,
        description: ''
    })

    const dispatch = useDispatch()
    
    const createStatus = useSelector(state => state.ui.createStatus)
    const username = useSelector(state => state.user.name)

    const userList = useSelector(state => state.userList.list)

    const handleDeleteUser = (candidateId) => {
        dispatch(deleteUser(candidateId))
      }

    const userCollection = userList.map(el => (
        <div key={el.id}>
            <p className='modal_text'>Name: {el.name}</p>
            <p className='modal_text'>Age: {el.age}</p>
            <p className='modal_text'>Description: {el.description}</p>
            <button onClick={() => handleDeleteUser(el.id)} className='modal_btn delete'>Delete</button>
      </div>
    ))

    const handleUpdateForm = (formType, formName) => { 
        setForm({
          ...form,
          [formType]: formName
        })
      }
      
      const handleCreate = () => { 
        dispatch(addUser(form.name, form.age, form.description))
        setForm({
          name: '',
          age: null,
          description: ''
        })
      }

    const handleClickModal = () => {
        dispatch(changeModal())
    }

    const handleClickCreate = () => {
        dispatch(changeCreateStatus())
    }

    const handleChangeName = (value) => {
        dispatch(updateName(value))
        
    }

    return (
        <div className='container'>
            <div className='modal'>
                <h1 className='modal_title'>CATPROG</h1>
                <p className='modal_username'>{username.length === 0 ? "Unknown user" : `Welcome, ${username}!`}</p>
                <p className='modal_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consequuntur corrupti. Magni iste rerum sunt maiores, exercitationem dolores earum architecto.</p>
                {
                    createStatus &&
                    <div className='flex-column'>
                        <h3 className="modal_text">Press button "Create" one more time to close this</h3>
                        {
                            handleChangeName(username)
                        }
                        <input className='modal_input' type="text" placeholder='Your age' onChange={e => handleUpdateForm('age', e.target.value)}/>
                        <input className='modal_input' type="text" placeholder='About you' onChange={e => handleUpdateForm('description', e.target.value)} />
                        <button onClick={handleCreate} className='btn-send'>Send</button>
                        {userCollection}
                    </div>
                }
                <div className='flex'>
                    <button onClick={handleClickModal} className='modal_btn'>Close</button>
                    <button onClick={handleClickCreate} className='modal_btn create'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Modal