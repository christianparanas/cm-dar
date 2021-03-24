import Nav from '../../components/Nav'

export default function chapter3() {


	return (
		<div className="chapter">

			<Nav />
			<div className="content">
			<div className="title">Chapter 3</div>
								<h1>Curriculum Vitae</h1>
	
				<h2><u>Personal Information:</u></h2>
<pre>{`
Last Name 	:	Alvarez
First Name 	:	Darryl Dave
Middle Name 	:	
Age		:	21
Birthday	:	January 16, 2000
Educational Attainment:
Elementary	:	Kapangian Central School
Year Graduated	:   	2012
	
Secondary	:	Leyte National High School
Year Graduated	:	2016
Tertiary	:	Eastern Visayas State University
Degree		:	Bachelor of Schience in Information Technology
Yeear Graduated	:	Undergrad
`}</pre>
			</div>
		</div>
	)
}