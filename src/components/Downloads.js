import React from 'react'
import { Link } from 'gatsby'

const Downloads = () => <div>
  <h1>Downloads</h1>
	{/* <p>Windows Latest (dev): <Link to="/app/profile">View profile</Link></p> */}
	<p>Windows latest (dev): <a href="https://s3.console.aws.amazon.com/s3/object/ftx-cyball-builds?region=us-west-2&prefix=dev-builds/Windows/Cyball-Windows-debug.zip">Click here</a></p>
	{/* <p>Now go build something great and deploy it using the <a href="https://console.amplify.aws">AWS Amplify Console</a></p> */}
	</div>

export default Downloads