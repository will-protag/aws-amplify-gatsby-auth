import React from 'react'
import { Link } from 'gatsby'

const Downloads = () => <div>
  <h1>Downloads</h1>
	{/* <p>Windows Latest (dev): <Link to="/app/profile">View profile</Link></p> */}
	<h2>Cyball</h2>
		<li>Windows latest (dev): <a href="s3://aws-amplify-ptg-portal-storage-dohyxeahtqqv9project-devv/public/Cyball-Windows-debug.zip">Click here</a></li>
		<li>Android latest (dev): <a href="s3://aws-amplify-ptg-portal-storage-dohyxeahtqqv9project-devv/public/Cyball-Android-debug.zip">Click here</a></li>
	</div>

export default Downloads