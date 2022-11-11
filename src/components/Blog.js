import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto'>
            <h2 className='text-3xl font-bold text-center mt-10'>Blog Page</h2>
            <div className='my-16'>
                <h2 className='text-2xl font-bold my-5'>Question 1:Difference between sql and nosql?</h2>
                <p><strong>Answer:</strong> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

                <h2 className='text-2xl font-bold my-5'>Question 2: What is JWT and how it works?</h2>
                <p><strong>Answer:</strong>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>

                <h2 className='text-2xl font-bold my-5'>Question 3:What is difference between Javascript and Node jsNodeJS ?</h2>
                <p><strong>Answer:</strong> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

                <h2 className='text-2xl font-bold my-5'>Question 4: How does node js handle multiple requests at same time?</h2>
                <p><strong>Answer:</strong> How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;