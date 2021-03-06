import React from 'react'


function SignIn() {
    return (
        <div className="box">
  <h2>Login</h2>
  <form>
    <div className="inputBox">
      <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);" value=""/>
      <label>Username</label>
    </div>
    <div className="inputBox">
      <input type="password" name="password" required value=""
             onkeyup="this.setAttribute('value', this.value);"
             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
             title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
      <label>Password</label>
    </div>
    <input type="submit" name="sign-in" value="Sign In"/>
  </form>
</div>
    )
}

export default SignIn;
