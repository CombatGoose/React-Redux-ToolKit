import './Modal.scss'

import { useDispatch, useSelector } from 'react-redux'

import { changeModal, changeCreateStatus } from '../../redux/reducers/UIReducer'
import { updateName, updateAge, updateDesc } from '../../redux/reducers/userReducer'

const Modal = () => {
    let inputChecked = false

    const dispatch = useDispatch()
    
    const username = useSelector(state => state.user.name)
    const createStatus = useSelector(state => state.ui.createStatus)

    const handleClickModal = () => {
        dispatch(changeModal())
    }

    const handleClickCreate = () => {
        dispatch(changeCreateStatus())
    }

    const userInf = {
        name: '',
        age: null,
        desc: ''
    }

    const handleChangeName = (value) => {
        dispatch(updateName(value))
        userInf.name = value
    }

    const handleChangeAge = (value) => {
        dispatch(updateAge(value))
        userInf.age = value
        // console.log(dispatch(updateAge(value)).payload)
    }

    const handleChangeDesc = (value) => {
        dispatch(updateDesc(value))
        userInf.desc = value
    }

    const checkInputs = () => {
        inputChecked = true
    }

    const returnInf = () => {
        return (
            <div>
                <p className='modal_text'>{userInf.name}</p>
                <p className='modal_text'>{userInf.age}</p>
                <p className='modal_text'>{userInf.desc}</p>
            </div>
        )
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
                        {
                            username.length === 0 &&
                            <input className='modal_input' type="text" placeholder='Your name' onChange={(e) => {handleChangeName(e.target.value)}} />
                        }
                        <input className='modal_input' type="text" placeholder='Your age' onChange={(e) => {handleChangeAge(e.target.value)}} />
                        <input className='modal_input' type="text" placeholder='About you' onChange={(e) => {handleChangeDesc(e.target.value)}} />
                        <button onClick={checkInputs} className='btn-send'>Send</button>
                        {
                            inputChecked &&
                            returnInf
                        }
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