const
  React = require('react')
, transparentBg = require('../styles').transparentBg
, Prompt = require ('../components/Prompt')
, PromptContainer = React.createClass({
    getInitialState: function () {
      return {
        username: ''
      }
    },
    contextTypes: {
      router: React.props
    },
    handleUpdateUser: function (e) {
      this.setState({
        username: e.target.value
      })
    },
    handleSubmitUser: function (e) {
      e.preventDefault();
      const username = this.state.username;
      this.setState({
        username: ''
      });

      if (this.props.routeParams.playerOne) {
        this.context.router.push({
          pathname: '/battle',
	  query: {
	    playerOne: this.props.routeParams.playerOne,
	    playerTwo: this.state.username
	  }
	})
      } else {
        this.context.router.push ('/playerTwo/' + this.state.username)
      }
    },
    render: function(){
      return (
      	<Prompt
          onSubmitUser={this.handleSubmitUser}
          onUpdateUser={this.handleUpdateUser}
          header={this.props.route.header}
          username={this.state.username} />
      )
    }
  })

, nil = null;

module.exports = PromptContainer;

