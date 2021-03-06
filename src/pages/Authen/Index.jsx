import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ButtonLoading from "../../components/buttons/ButtonLoading"
import { requestLogin } from "../../redux/slices/authenSlice"
const Index = () => {
  const authenState = useSelector(state => state.authenReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName) {
      console.log('vui long nhap username');
      return false
    }
    if (!password) {
      console.log('vui long nhap password');
      return false
    }
    // console.log('success', userName, password);
    dispatch(requestLogin({ userName, password }))
  }
  useEffect(() => {
    if (!authenState.isPending && authenState.acceptToken) {
      navigate('/')
    }
  }, [authenState])

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-bg">
          <span className="r"></span>
          <span className="r s"></span>
          <span className="r s"></span>
          <span className="r"></span>
        </div>
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 relative">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 uppercase text-center">Sign in to cbbank sso</h5>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Username</label>
              <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username to HRM" required="" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="????????????????????????" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            {!authenState.isPending
              ? <button type="submit" className={`w-full text-white bg-green-sea focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center disabled ${userName && password ? '' : 'opacity-50 cursor-not-allowed'}`}>Login to your account</button>
              : <ButtonLoading color='text-white' background='bg-green-sea' />
            }
            {authenState.error &&
              <div className="font-semibold text-red-500">
                {authenState.error}
              </div>
            }
            <div className="font-medium text-gray-500">
              N???u b???n ch??a c?? t??i kho???n vui l??ng li??n h??? <b> Ph??ng Qu???n L?? Nh??n S??? &amp; ????o T???o</b>.
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Index