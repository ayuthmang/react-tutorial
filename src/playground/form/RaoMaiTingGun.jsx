import React from 'react'

class RaoMaiTingGun extends React.Component {
  state = {
    name: '',
    job: '',
    submittedName: null,
    submittedJob: null,
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name, job } = this.state
    this.setState(
      {
        submittedName: name,
        submittedJob: job,
      },
      () => console.log(this.state)
    )
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleJobChange = (e) => {
    console.log('handleJobChange')
    this.setState({
      job: e.target.value,
    })
  }

  render() {
    return (
      <>
        <h1>เราไม่ทิ้งกัน</h1>
        <hr />
        <h1>Personal Information</h1>
        <form onSubmit={this.onSubmit} data-testid="form">
          <label>
            Name:​​{' '}
            <input
              type="text"
              onChange={this.handleNameChange}
              placeholder={'Your name'}
              data-testid={'name'}
            />
          </label>
          <br />
          <label>
            Job:{' '}
            <select
              value={this.state.job}
              onChange={this.handleJobChange}
              data-testid="job"
            >
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
          <button type="submit" data-testid="submit">
            submit
          </button>
        </form>

        <hr />

        <h1>Result</h1>
        <p data-testid="nameResult">Name: {this.state.submittedName}</p>
        <p data-testid="jobResult">Job: {this.state.submittedJob}</p>
        <p data-testid="eligibleResult">
          Eligible for 5,000 baht?:{' '}
          {this.state.submittedJob &&
            (this.state.submittedJob.toLowerCase() === 'programmer'
              ? 'NO'
              : 'YES')}
        </p>
        <br />
      </>
    )
  }
}

export default RaoMaiTingGun
