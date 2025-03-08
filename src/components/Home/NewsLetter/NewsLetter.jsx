import React from 'react'

const NewsLetter = () => {
  return (
    <div>
      <div className="NewsLetter pb-5 pt-3">
        <div className="container gx-0">
            <div className="row gx-0">
                <div className="col-md-6">
                    <div className="NewsLetter_col1">
                        <h2>Join Us & Get Updates</h2>
                        <p>Sign Up for exclusive offers,latest news and updates</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="NewsLetter_col2 ">
                      <form action="">
                        <div className="form-imput d-flex">
                          <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            className="form-control mx-3" 
                          />
                          <button type="submit" className="main_btn rounded-5">
                            Subscribe
                            </button>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
