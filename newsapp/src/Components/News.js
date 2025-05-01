// import React, { useState,useEffect } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";
// // import { useSubmit } from 'react-router-dom';

// // export class News extends Component {
// const News =(props)=> {
//     // static defaultProps = {
//     //     country: 'in',
//     //     pageSize: 8,
//     //     category: 'general'
//     // }

//     // static propTypes = {
//     //     country: PropTypes.string,
//     //     pageSize: PropTypes.number,
//     //     category: PropTypes.string,
//     // }
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(0);
//     // document.title = `${capitalize(props.category)} - DailyNews`;


//     const capitalize=(s)=> {
//         return s[0].toUpperCase() + s.slice(1);
//     };


//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         articles: [],
//     //         loading: false,
//     //         page: 1,
//     //         totalResults: 0
//     //     }
    



//     const updateNews=async()=> {
//         props.setprogress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
//         // this.setState({ loading: true });
//         setLoading(true);
//         let data = await fetch(url);
//         props.setprogress(30);
//         let parseddata = await data.json()
//         props.setprogress(50);
//         setArticles(parseddata.articles);
//         setTotalResults(parseddata.totalResults);
//         setLoading(false);
//         // this.setState({
//         //     articles: parseddata.articles,
//         //     totalResults: parseddata.totalResults,
//         //     loading: false
//         // })
//         props.setprogress(100);
//     }


//     useEffect(() => {
//         const fetchData = async () => {
//             document.title = `${capitalize(props.category)} - DailyNews`;
//             await updateNews();
//         };
    
//         fetchData();
//     }, []);
    

//     // async componentDidMount() {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a449fb7bfcf4a45a72f0bf595babdd0&page=1&pageSize=${props.pageSize}`;
//         // this.setState({loading:true});
//         // let data = await fetch(url);
//         // let parseddata = await data.json()
//         // console.log(parseddata)
//         // this.setState({ articles: parseddata.articles,
//         //      totalResults: parseddata.totalResults,
//         //      loading:false
//         //      })
//         // this.updateNews();
//     // }

//     // const handlenextclick = async () => {
//         // if (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {

//         // }
//         // else {
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a449fb7bfcf4a45a72f0bf595babdd0&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//         //     this.setState({loading:true});
//         //     let data = await fetch(url);
//         //     let parseddata = await data.json()
//         //     console.log(parseddata)
//         //     this.setState({
//         //         page: this.state.page + 1,
//         //         articles: parseddata.articles,
//         //         loading:false
//         //     })
//         // }
//         // this.setState({ page: this.state.page + 1 });

//     //     setPage(page+1);
//     //     updateNews();
//     // }

//     // const handleprevclick = async () => {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a449fb7bfcf4a45a72f0bf595babdd0&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//         // this.setState({loading:true});
//         // let data = await fetch(url);
//         // let parseddata = await data.json()
//         // console.log(parseddata)
//         // this.setState({
//         //     page: this.state.page - 1,
//         //     articles: parseddata.articles,
//         //     loading:false
//         // })
//         // this.setState({ page: this.state.page - 1 });


//     //     setPage(page-1);
//     //     // this.updateNews();
//     //     updateNews();
//     // }

//     const fetchMoreData = async () => {
//         // this.setState({ page: this.state.page + 1 })
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
//         setPage(page+1);
//         // this.setState({ loading: true });
//         // setLoading(true);
//         let data = await fetch(url);
//         let parseddata = await data.json();
//         setArticles(articles.concat(parseddata.articles));
//         setTotalResults(parseddata.totalResults);
//         // this.setState({
//         //     articles: this.state.articles.concat(parseddata.articles),
//         //     totalResults: parseddata.totalResults,
//         //     // loading: false,
//         // })
//         // this.updateNews();
//     };

//         return (
//             <>
//                 <h1 className='text-center' style={{ margin: "32px 0px", marginTop:"76px" }}>DailyNews- Top News HeadLines From {capitalize(props.category)}</h1>
//                 {/* {this.state.loading && <Spinner />} */}
//                 {loading && <Spinner />}


//                 <InfiniteScroll
//                     // dataLength={this.state.articles.length}
//                     dataLength={articles.length}
//                     // next={this.fetchMoreData}
//                     next={fetchMoreData}
//                     // hasMore={this.state.articles.length !== this.state.totalResults}
//                     hasMore={articles.length !== totalResults}
//                     loader={<Spinner />}
//                 >
//                     <div className="container">
//                         <div className="row">
//                             {/* {this.state.articles.map((element) => { */}
//                             {articles.map((element) => {
//                                 return <div className="col-md-3" key={element.url}>
//                                     <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                                 </div>
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>


//                 {/* <div classNameName="container d-flex justify-content-between">
//                     <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handleprevclick}>&laquo; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &raquo;</button>
//                 </div> */}
//             </>
//         )
//     }
//     News.defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general'
//     }

//     News.propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }


// export default News


import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    };

    const updateNews = async () => {
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        try {
            let data = await fetch(url);
            props.setprogress(30);
            let parseddata = await data.json();
            props.setprogress(50);
            setArticles(parseddata.articles || []);
            setTotalResults(parseddata.totalResults || 0);
        } catch (error) {
            console.error('Error fetching the news data', error);
            setArticles([]);
            setTotalResults(0);
        }
        setLoading(false);
        props.setprogress(100);
    };

    useEffect(() => {
        document.title = `${capitalize(props.category)} - DailyNews`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        try {
            let data = await fetch(url);
            let parseddata = await data.json();
            setArticles(articles.concat(parseddata.articles || []));
            setTotalResults(parseddata.totalResults || 0);
        } catch (error) {
            console.error('Error fetching more news data', error);
        }
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: "32px 0px", marginTop: "76px" }}>
                DailyNews - Top News Headlines From {capitalize(props.category)}
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-3" key={element.url}>
                                    <Newsitem
                                        title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""}
                                        imageurl={element.urlToImage}
                                        newsurl={element.url}
                                        author={element.author}
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

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    apikey: '9a449fb7bfcf4a45a72f0bf595babdd0' // replace with your actual API key
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string,
    setprogress: PropTypes.func.isRequired,
};

export default News;
