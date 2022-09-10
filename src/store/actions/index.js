import * as actionsAuth from './auth';
import * as actionsPost from './post';

const ActionCreators = { ...actionsAuth, ...actionsPost };

export default ActionCreators;
