// *********React 25*************
// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     return (
//       <div>
//         this is the news item component
//       </div>
//     )
//   }
// }
// export default NewsItem



// *********React 26*************
// import React, { Component } from 'react'

// export class NewsItem extends Component {
//     render() {
//         let {title, description} = this.props // this is the synta to be written and it is mandatory
//         return (
//             <div>
//                 <div className="card" style={{width: "18rem"}}>
//                     <img src="https://i.guim.co.uk/img/media/0e1a2d307ec034dda2736bd96ee5c1734236583b/0_345_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f140e725fc7f4eea3ef1944c69f4c165" className="card-img-top" alt="..."/>
//                         <div className="card-body">
//                             <h5 className="card-title">{title}</h5> {/* title is coming from "News.js" */}
//                             <p className="card-text">{description}</p> {/* description is coming from "News.js" */}
//                             <a href="/NewsItem" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem



// *********React 27*************
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props // this is the syntax to be written and it is mandatory
        return (
            <div>
                {/* <div className="card" style={{ width: "18rem" }}> */}
                <div className="card" style={{ margin: '20px 0px 0px 0px' }}>

                <div style = { // this is React 38
                   { display: 'flex-end',
                    justifyContent: 'center',
                    position: 'absolute',
                    right: '0'}
                }>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>

                    <img src={!imageUrl ? "https://www.carlrippon.com/static/0459b2616714a176ce81ebb04b275614/2bef9/banner.png" : imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5> {/* title is coming from "News.js" */}
                        <p className="card-text">{!description ? "description Unknown" : description}...<span className="badge bg-secondary">New</span></p> {/* description is coming from "News.js" */}

                        {/* React 34 */}
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p> {/* This is the syntax used to display the time in GMT */}
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary bg-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

