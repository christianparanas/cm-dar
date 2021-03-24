import Nav from '../../components/Nav'

export default function chapter5() {


	return (
		<div className="chapter">

			<Nav />
			<div className="content">
				<div className="title">Chapter 5</div>

				<div className="list-tit">Unordered List</div>
				<ul>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				</ul>

				<div className="list-tit">Ordered List</div>
				<ol>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				</ol>

				<div className="list-tit">Description List</div>
				<dl>
				  <dt>Coffee</dt>
				  <dd>black hot drink</dd>
				  <dt>Milk</dt>
				  <dd>white cold drink</dd>
				</dl>
			</div>
		</div>
	)
}