var React = require('react');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver() {
  return(
    <MainContainer>
      <Link to='playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </MainContainer>
  )
}

function Results(props) {
  if(props.isLoading === true) {
    return <Loading speed={400} text={'Results Are Loading'} />
  }

  if(props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1: 0;
  return(
      <MainContainer>
        <h1>Results</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Winner'>
            <UserDetails info={props.playersInfo[winningIndex]} score={props.scores[winningIndex]}/>
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Loser'>
            <UserDetails info={props.playersInfo[losingIndex]} score={props.scores[losingIndex]}/>
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <StartOver />
        </div>
      </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;

