import React from 'react';

const Blogs = () => {
	return (
		<div className=' min-h-screen p-10  bg-white text-left text-black'>
			<h1 className='text-5xl my-10 text-center'>
				Some important Developer Questions
			</h1>
			<hr />
			<div className=' flex justify-center flex-wrap mt-10 '>
				<div className=' w-96 border-b-2 p-5 border-l-2'>
					<h1 className='text-2xl my-2 font-bold'>
						Difference between SQL and NoSQL ?
					</h1>
					<p>
						SQL is the programming language used to interface with relational
						databases. (Relational databases model data as records in rows and
						tables with logical links between them). NoSQL is a class of DBMs
						that are non-relational and generally do not use SQL.
					</p>
					<h4 className='text-2xl font-bold'>
						There are five practical differences between SQL and NoSQL:
					</h4>
					<ul className=' list-decimal '>
						<li>Language</li>
						<li>Scalability</li>
						<li>Structure</li>
						<li>Properties</li>
						<li>Support and communities</li>
					</ul>
				</div>
				<div className=' w-96 border-b-2 p-5 border-l-2'>
					<h1 className='text-2xl my-2 font-bold'>
						What is JWT, and how does it work?
					</h1>
					<p>
						What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
						standard (RFC 7519) for securely transmitting information between
						parties as JSON object. It is compact, readable and digitally signed
						using a private key/ or a public key pair by the Identity
						Provider(IdP)
					</p>
					<h4 className='text-2xl font-bold'>Structure of JWT</h4>
					<ul className=' list-decimal '>
						<li>Header</li>
						<li>Payload</li>
						<li>Signature</li>
					</ul>
				</div>
				<div className=' w-96 border-b-2 p-5 border-l-2'>
					<h1 className='text-2xl my-2 font-bold'>
						What is the difference between javascript and NodeJS?
					</h1>
					<p>
						JavaScript is a simple programming language that can be used with
						any browser that has the JavaScript Engine installed. Node. js, on
						the other hand, is an interpreter or execution environment for the
						JavaScript programming language.
					</p>
					<h4 className='text-2xl font-bold'>
						Benefits and Drawbacks of Node.js
					</h4>
					<ul className=' list-decimal '>
						<li> JS is an MIT-licensed accessible framework.</li>
						<li>
							It is a multi-platform framework that runs on Windows, Mac OS X,
							and Linux.
						</li>
						<li>
							The JavaScript programming language is used to create server-side
							apps.
						</li>
					</ul>
					<h4 className='text-2xl font-bold'>
						The Benefits and Drawbacks of JavaScript
					</h4>
					<ul className=' list-decimal '>
						<li>
							{' '}
							It is an open-source framework that is flexible, fast, and
							lightweight.
						</li>
						<li>Cross-compilation is possible.</li>
						<li>Interfaces, modules, and classes are all supported.</li>
					</ul>
				</div>
				<div className=' w-96 border-b-2 p-5 border-l-2'>
					<h1 className='text-2xl my-2 font-bold'>
						How does NodeJS handle multiple requests at the same time?
					</h1>
					<p>
						How NodeJS handle multiple client requests? NodeJS receives multiple
						client requests and places them into EventQueue. NodeJS is built
						with the concept of event-driven architecture. NodeJS has its own
						EventLoop which is an infinite loop that receives requests and
						processes them.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
