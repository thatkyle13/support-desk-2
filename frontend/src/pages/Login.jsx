import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }) )
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const {email, password} = formData
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login to get Support</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" id='email' name='email' value={email} onChange={onChange} required placeholder='Enter your email'/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} onChange={onChange} required placeholder='Enter password'/>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>

        </form>
      </section>
    </>
  )
}

export default Login