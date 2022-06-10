import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="card my-2 position-relative">
            <span className="position-absolute top-0 translate-middle-x badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>
                {source}
                <span className="visually-hidden">unread messages</span>
            </span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-1">{description}</p><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small><br />
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm stretched-link my-2">Read more</a>

            </div>
        </div>
    )
}


export default NewsItem