var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

var Results = function(props) {
  return(
      <h1>Results: {puke(props)} </h1>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
