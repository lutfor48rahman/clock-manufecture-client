import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className=' text-center text-secondary font-bold font-serif text-4xl my-16'>ANSWERING QUESTION PART</h1>
            <div className=' mx-12 my-12'>
                <div className=" card bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <h2 className="card-title text-secondary"> How will you improve the performance of a React Application?</h2>
                        <p> if you follow this things you will  able  improve performance of a React Application <br />
                            1. Keeping component state local where necessary.<br />
                            2. Memoizing React components to prevent unnecessary re - renders.<br />
                            3. Code -- splitting in React using dynamic import().<br />
                            4.   Windowing or list virtualization in React.<br />
                            5.  Lazy loading images in React.<br />
                        </p>

                    </div>
                </div>
                <div className=" card bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <h2 className="card-title text-secondary">What are the different ways to manage a state in a React application?</h2>
                        <p>you should know this things than you will able to mange  react app.There are four main types of state you need to properly manage in your React apps..<br />
                            1. Local state.<br />
                            2. Global state.<br />
                            3. Server state.<br />
                            4. URL state.<br />
                        </p>

                    </div>
                </div>
                <div className=" card bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <h2 className="card-title text-secondary"> How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                        </p>

                    </div>
                </div>
                <div className=" card bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <h2 className="card-title text-secondary">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>To find the product of elements of an array .tou can find products by name<br />
                            1.create an empty variable. ( product)<br />
                            2. Initialize it with 1.<br />
                            3.In a loop traverse through each element (or get each element from user) multiply each element to product.<br />
                            4. Print the product.<br />
                        </p>

                    </div>
                </div>
                <div className=" card bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <h2 className="card-title text-secondary"> What is a unit test? Why should write unit tests?</h2>
                        <p> Main objective of unit testing is isolate written code to test and determine if it is works as intended.It is is an important step in the development process, because if done correctly and it  it can help detect early flaws in code that may be more difficult to find in later testing stages.
                        </p>

                    </div>
                </div>
            </div>





        </div >
    );
};

export default Blogs;