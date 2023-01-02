import { Router } from 'express';

import users from './routes/users/index.js'
import posts from "./routes/posts.js";
import comments from "./routes/comments.js"

/* 
 * routes 디렉토리의 API들을 모두 내보낸다.
 * users, posts, comments
 */
export default () => {
	const app = Router();

	// user 디렉토리의 index.js 에 Router() 넘기기
	users(app);

    posts(app);
	comments(app);

	return app
}