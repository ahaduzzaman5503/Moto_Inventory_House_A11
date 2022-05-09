import React from 'react';

const About = () => {
    return (
        <div className='container w-75'>
             <h3>What are the differences between Node.JS and Javascript?</h3>
 
            <p>
            The main difference between Node.JS and Javascript is Javascript can run in the browsers and be used on the client-side. On the other hand, NodeJS can run outside of the browser and be used on the server-side. Javascript is a high-level programming language used both on the client-side and server-side that allows you to make web pages interactive. NodeJS is a Javascript runtime environment, cross-platform, back-end JavaScript that runs on the Javascript V8 engine and executes JavaScript code outside a web browser.
            </p>

            <h3>When should we use NodeJS and when should we use MongoDB?</h3>

            <p>
            Shortly we can say, NodeJS is a JavaScript runtime environment. It actually helps JavaScript to run outside of the server. It's used in server-side development.

If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of a database. 
But, MongoDB is a NoSQL database that is document-oriented. It represents data as JSON documents. It's used to store data.
            </p>

            <h3> What are the  difference between SQL and NoSQL</h3>
            <p>
            SQL is a relational database management system. These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage.	 These databases are best suited for complex queries.
            NoSQL is a non-relational or distributed database system. They have a dynamic schema. These databases are best suited for hierarchical data storage. These databases are best suited for hierarchical data storage. Horizontally scalable. 

            </p>

            <h3>What are the purpose to use jwt token</h3>

            <p>
            JSON web token (JWT ) is an open standard (RFC 7519) that defines a compact, self-contained way to securely transmit information between parties as a JSON object.
Instead of storing information on the server after authentication, JWT creates a JSON web token and encodes, sterilizes, and adds a signature with a secret key that cannot be tampered with. This key is then sent back to the browser. Each time a request is sent, it verifies and sends the response back.

The main difference here is that the user’s state is not stored on the server, as the state is instead stored inside the token on the client-side.

JWT also allows us to use the same JSON Web Token in multiple servers that you can run without running into problems where one server has a certain session, and the other server doesn’t.

Most modern web applications use JWT for authentication reasons like scalability and mobile device authentication.
            </p>
        </div>
    );
};

export default About;