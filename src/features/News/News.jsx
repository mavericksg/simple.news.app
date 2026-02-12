import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading/Loading";
import NewsItem from "./NewsItem";
import NewsAPI from "../../services/NewsAPI";

import "./News.css"; 

const News = (props) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const capitalFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	useEffect(() => {
		document.title = `${capitalFirstLetter(props.category)}`;
		updateNews();
		// eslint-disable-next-line
	}, []);

	const updateNews = async () => {
		try {
			props.setProgress(30);
			setLoading(true);
			const data = await NewsAPI.getCategoryPaginated({category:props.category, country:props.country, page:page, pageSize:props.pageSize}); // Use the service function
			setArticles(data.articles);
			setTotalResults(data.totalArticles);
			setLoading(false);
			props.setProgress(100);
		} catch (error) {
			setLoading(false);
		}
	};


	const fetchMoreData = async () => {
		try {
			setPage(page + 1);
			const data = await NewsAPI.getCategoryPaginated({category:props.category, country:props.country, page:page, pageSize:props.pageSize}); // Use the service function
			setArticles(articles.concat(data.articles));
			setTotalResults(data.totalArticles);
		} catch (error) {
			// Placeholder for error handled in service
		}
	};

	return (
		<>
			<h1 className="text-center title-big">Top Headlines on <u>{capitalFirstLetter(props.category)}</u></h1>
			{loading && <Loading />}
			<InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />}>
				<div className="container">
					<div className="row">
						{articles.map((element, index) => {
							return (
								<div className="col-md-4" key={index}>
									<NewsItem 
										title={element.title ? element.title.slice(0, 60) : ""} 
										description={element.description ? element.description.slice(0, 120) : ""} 
										imgUrl={element.image} 
										newsUrl={element.url} 
										date={element.publishedAt}
										source={element.source.name} 
									/>
								</div>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
		</>
	);
};

export default News;

News.defaultProps = {
	country: "us",
	pageSize: 16,
	category: "general",
};

News.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};
