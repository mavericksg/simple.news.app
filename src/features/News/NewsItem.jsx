import "./NewsItem.css"; 

const NewsItem = (props) => {
	let { title, description, imgUrl, newsUrl, date, source } = props;
	return (
		<div className="my-4 mx-4">
			<div className="card" style={{ height: "450px" }}>
				<img src={imgUrl} className="card-img" style={{ height: "220px" }} alt="..." />
				<div className="card-body">
					<h6 className="card-subtitle mb-2 text-muted">
						<small className="text-danger ">
							<span className=" badge rounded-pill bg-danger">{source}</span> on {new Date(date).toLocaleString()}
						</small>
					</h6>
					<h5 className="card-description">{title}...</h5>
					<p className="card-description">{description}...</p>
					<a rel="noreferrer" style={{ display: "flex", position: "absolute", right: 5, bottom: 5 }} href={newsUrl} target="_blank" className="card-btn">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
