import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='bg-slate-100'>
            {/* Hero Section */}
            <div className="hero min-h-screen" style={{backgroundImage: `url("https://images.unsplash.com/photo-1668094497457-29f4bd775c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`}}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Breaking news </h1>
                        <p className="mb-5">Brazil manager Tite announced his list of 26 players to represent the five-time world champions at the 2022 FIFA World Cup in Qatar</p>
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
                        <h1 className="text-5xl font-bold">Box Office News</h1>
                        <p className="py-6">Fans on social media have often been spotted endorsing the latest box office collections of the movies featuring their treasured stars, to promote them further.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="hero my-16">
                <div className="w-11/12 lg:w-4/5 gap-10 mx-auto hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="w-full h-96 rounded-lg shadow-2xl" alt='...' />
                    <div className='w-full text-slate-900'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Box Office news, data and analysis covering the US, UK and international ... 'Black Adam' passes $300m at global box office; Japanese anime 'One Piece Film .</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;