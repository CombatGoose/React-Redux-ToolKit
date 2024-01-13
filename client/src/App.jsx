import './App.scss'

import { useDispatch, useSelector } from 'react-redux'

import Modal from './Components/Modal/Modal'

import { changeModal } from './redux/reducers/UIReducer'
import { updateName } from './redux/reducers/userReducer'

const App = () => {

    const dispatch = useDispatch()

    const modalStatus = useSelector(state => state.ui.modalStatus)

    const handleClickModal = () => {
        dispatch(changeModal())
    }

    const handleChangeName = (value) => {
        dispatch(updateName(value))
    }

    return (
        <div className='container'>
            <input className='container_input' type="text" placeholder='Write your name' onChange={(e) => {
                handleChangeName(e.target.value)
            }} />
            <button onClick={handleClickModal} className='btn'>Open Modal</button>
            {
                modalStatus && <Modal/>
            }
        </div>
    )
}

export default App