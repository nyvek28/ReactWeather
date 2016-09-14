var React = require('react'),
    {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className = 'text-center'>Examples</h1>
      <p>Here are some locations to try out:</p>
      <ol>
        <li>
          <Link to = '/?location=Heredia'>Heredia, CR</Link>
        </li>
        <li>
          <Link to = '/?location=London'>London, UK</Link>
        </li>
        <li>
          <Link to = '/?location=Chicago'>Chicago, USA</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
