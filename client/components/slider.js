import React from 'react';
import { Link } from 'react-router-dom';

const Sliders = ({list}) => {
  return (
    <div>
      {
        list.length && list.map((item, i) => {
          if(item.head)
              return(
                <div key={item.id} className="articles-slider">
                  {
                      list[i].articles.map((article) => {
                        return (
                            <div key={article.id} className="slide-item" style={{backgroundImage: 'url('+ article.logo +')'}}>
                              <Link to={'/article/' + article.id}>
                                <h1>{article.title}</h1>
                              </Link>
                            </div>
                        );
                      })
                  }
                </div>
              )
            else 
              return(
                <div key={item.id} className="col-sm-6">
                  <div className='row'>
                    <div className="skin-slider">
                      {
                          list[i].articles.map((article) => {
                            return (
                                <div key={article.id} className="slide-item" style={{backgroundImage: 'url('+ article.logo +')'}}>
                                  <Link to={'/article/' + article.id}>
                                    <h1>{article.title}</h1>
                                  </Link>
                                </div>
                            );
                          })
                      }
                    </div>
                  </div>
                </div>
              )
        })
      }
    </div>
  )
}

export default Sliders;
