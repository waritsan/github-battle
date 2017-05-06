var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function(item) {
      return item.friend === true
    })

    var nonFriends = this.props.list.filter(function(item) {
      return item.friend !== true
    })

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {/*Create an <li> for every name in the list array who is also your friend*/
            friends.map(function(item) {
              return <li key={item.name}>{item.name}</li>
            })
          }
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {/*Create an <li> for every name in the list array who is NOT your friend*/
            nonFriends.map(function(item) {
              return <li key={item.name}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);
