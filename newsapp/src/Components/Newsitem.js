import React from 'react'

const Newsitem=(props)=> {
        let { title, description, imageurl, newsurl, author, date,source } = props
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"  style={{ left:'13%'}}>
                         {source}
                    </span>
                    <img src={!imageurl ? "https://www.financialexpress.com/wp-content/uploads/2023/10/Breaking-News-10.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

export default Newsitem

