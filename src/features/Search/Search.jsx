import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading/Loading";
import NewsItem from "../News/NewsItem";
import NewsAPI from "../../services/NewsAPI";

const Search = (props) => {

	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const capitalFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const { query } = useParams();

	useEffect(() => {
		document.title = `Search - ${capitalFirstLetter(query)}`;
		updateNews();
		// eslint-disable-next-line
	}, []);

	const updateNews = async () => {
		try {
			props.setProgress(30);
			setLoading(true);
			const data = await NewsAPI.getSearchPaginated({query, category:props.category, page:page, pageSize:props.pageSize}); // Use the service function
			setArticles(data.articles);
			setTotalResults(data.totalArticles);
			setLoading(false);
			props.setProgress(100);
		} catch (error) {
			// Error handled in service, but you can manage component state here if needed
			setLoading(false);
		}
	};

	const fetchMoreData = async () => {
		try {
			console.log("updateNews:" + query);
			setPage(page + 1);
			const data = await NewsAPI.getSearchPaginated({query, category:props.category, page:page, pageSize:props.pageSize}); // Use the service function
			setArticles(articles.concat(data.articles));
			setTotalResults(data.totalArticles);
		} catch (error) {
			// Placeholder for error handled in service
		}
	};

	return (
		<>
			<h1 className="text-center title-big">Search result for <u>{query}</u></h1>

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

export default Search;

Search.defaultProps = {
	country: "us",
	pageSize: 16,
	category: "general",
};

Search.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};
