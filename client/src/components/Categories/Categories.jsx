import React from 'react';
import "./Categories.scss";
import { Link, NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                <button>
                    <NavLink className="link" to="/products/sale">
                        Sale items
                    </NavLink>
                </button>
            </div>
            <div className="row">
                <img
                    src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />

                <button>
                    <NavLink className="link" to="/products/liselotte-augusta">
                        Liselotte Augusta
                    </NavLink>
                </button>
            </div>
        </div>

        <div className="col">
            <div className="row">
                {" "}
                <img
                    src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />

                <button>
                    <NavLink className="link" to="/products/new">
                        New Collections
                    </NavLink>
                </button>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img
                            src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />

                        <button>
                            <NavLink to="/products/scenic" className="link">
                                Mokhtar Ioannicius
                            </NavLink>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {" "}
                        <img
                            src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />

                        <button>
                            <Link to="/products/akinyi-nonie" className="link">
                                Akinyi Nonie
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img
                    src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                
                <button>
                    <Link to="/products/odin-paul" className="link">
                        Odin Paul
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories