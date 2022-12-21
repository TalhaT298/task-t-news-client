import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='bg-slate-100'>
            {/* Hero Section */}
            <div className="hero min-h-screen" style={{backgroundImage: `url("https://ichef.bbci.co.uk/news/976/cpsprodpb/184DE/production/_125405599_hi072924521.jpg")`}}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Breaking news </h1>
                        <p className="mb-5">Brazil manager Tite announced his list of 26 players to represent the five-time world champions at the 2022 FIFA World Cup in Qatar.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Card Section */}
            <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                    services.map(service =>
                        <div key={service._id} className="card w-auto bg-base-100 shadow-xl">
                            <figure><img src={service.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.details.slice(0, 100)}...</p>
                                <div className="card-actions justify-between items-center">
                                    <h2 className='text-lg text-orange-500 font-bold'>Price: {service.price}</h2>
                                    <Link to={`/services/${service._id}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

            <div className='w-full text-center'>
                <Link to={"/services"} className="btn btn-primary">See All</Link>
            </div>

            <div className="hero my-16">
                <div className="w-11/12 lg:w-4/5 gap-10 mx-auto hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" className="w-full h-96 rounded-lg shadow-2xl" alt='...' />
                    <div className='w-full text-slate-900'>
                        <h1 className="text-5xl font-bold">Sports News</h1>
                        <p className="py-6">Cricket is the most popular spectator sport in the country, and citizens often play it as a recreational activity; it generates the highest television viewership, and features full-capacity audiences in stadiums during international and Indian Premier League (IPL) matches. It is part of popular culture.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="hero my-16">
                <div className="w-11/12 lg:w-4/5 gap-10 mx-auto hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="w-full h-96 rounded-lg shadow-2xl" alt='...' />
                    <div className='w-full text-slate-900'>
                        <h1 className="text-5xl font-bold">Latest News!</h1>
                        <p className="py-6">Understand every aspect of the global economy – and know how to make your next move. Get unlimited digital access on Bloomberg.com or The Bloomberg App.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;