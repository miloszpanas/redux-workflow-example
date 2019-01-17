import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {

  render() {
    const { user } = this.props;

    if(!user) {
      return null;
    }

    return <div className="header">{user.name}</div>
  }
}

// mapStateToProps function has the second argument of "OwnProps" that knows what props are passed to the component 

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
