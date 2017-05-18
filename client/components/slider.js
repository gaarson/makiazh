import React from 'react';
import { Link } from 'react-router-dom';

const Sliders = ({list}) => {
  return (
    <div>
      {
        list.length && list.map((item, i) => {
          return(
            <div key={item.id} className={i == 0 ? "articles-slider" : "col-sm-6"}>
              <div className="row">
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
          )
        })
      }
    </div>
  )
}

export default Sliders;
