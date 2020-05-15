import React from 'react'

class PersonalInfoForm extends React.Component {
  state = {
    name: '',
    job: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name, job } = this.state
    this.props.onSubmit({
      name,
      job,
    })
  }

  handleNameChange = (e) => {
    const name = e.target.value
    this.setState({
      name,
    })
  }

  handleJobChange = (e) => {
    const job = e.target.value
    this.setState({
      job,
    })
  }

  render() {
    return (
      <>
        <h1>เราไม่ทิ้งกัน</h1>
        <hr />
        <h1>Personal Information</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Name:​​ <input type="text" onSelect={this.handleNameChange} />
          </label>
          <br />
          <label>
            Job:{' '}
            <select value={this.state.job} onChange={this.handleJobChange}>
              <option value="" disabled>
                Select your job
              </option>
              <option value="farmer">Farmer</option>
              <option value="driver">Driver</option>
              <option value="programmer">Programmer</option>
            </select>
          </label>
          <br />
          <p>We're using AI to check!</p>
          <button type="submit">submit</button>
        </form>
      </>
    )
  }
}

class PersonalInfoResult extends React.Component {
  render() {
    return (
      <div>
        <h1>Result</h1>
        <label>Name: {this.props.name}</label>
        <br />
        <label>Job: {this.props.job}</label>
        <br />
        <label>
          Eligible for 5,000 baht?:{' '}
          <strong>
            {this.props.job &&
            this.props.job.toLocaleLowerCase() !== 'programmer'
              ? 'YES'
              : 'NO'}
          </strong>
        </label>
        <br />
      </div>
    )
  }
}

export default class App extends React.Component {
  state = {
    user: {
      name: '',
      job: '',
    },
  }

  onSubmit = (submittedUser) => {
    this.setState({
      user: {
        name: submittedUser.name,
        job: submittedUser.job,
      },
    })
  }

  render() {
    return (
      <div className="App">
        <PersonalInfoForm onSubmit={this.onSubmit} />
        <hr />
        <PersonalInfoResult {...this.state.user} />
      </div>
    )
  }
}
