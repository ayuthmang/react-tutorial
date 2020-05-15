import React from 'react'

class PersonalInfoForm extends React.Component {
  state = {
    name: '',
    job: '',
    submittedName: null,
    submittedJob: null,
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name, job } = this.state
    this.setState({
      submittedName: name,
      submittedJob: job,
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

        <hr />

        <h1>Result</h1>
        <label>Name: {this.state.submittedName}</label>
        <br />
        <label>Job: {this.state.submittedJob}</label>
        <br />
        <label>
          Eligible for 5,000 baht?:{' '}
          <strong>
            {this.state.submittedJob &&
            this.state.submittedJob.toLocaleLowerCase() !== 'programmer'
              ? 'YES'
              : 'NO'}
          </strong>
        </label>
        <br />
      </>
    )
  }
}

export default function App() {
  return (
    <div className="App">
      <PersonalInfoForm />
    </div>
  )
}
