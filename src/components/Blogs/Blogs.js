import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>Blogs</h2>
      <div>
        <div className="card">
          <div className="card-header">
            {" "}
            <h4>Difference between javascript and nodejs?</h4>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Javascript</th>
                  <th scope="col">NodeJs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Javascript is a programming language</td>
                  <td>NodeJS is a Javascript runtime</td>
                </tr>
                <tr>
                  <td>Javascript is used in frontend development.</td>
                  <td>Nodejs is used in server-side development.</td>
                </tr>
                <tr>
                  <td>
                    JavaScript run Spider Monkey, V8, and JavaScript Core
                    engine.
                  </td>
                  <td>Node JS is only supported by the V8 engine.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------- */}
      <div>
        <div className="card mt-5">
          <div className="card-header">
            {" "}
            <h4>Differences between SQL and NoSQL databases?</h4>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">SQL</th>
                  <th scope="col">NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SQL is relational databases</td>
                  <td>NoSQL is non-relational databases</td>
                </tr>
                <tr>
                  <td>Structured query language</td>
                  <td>No declarative query language</td>
                </tr>
                <tr>
                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
                <tr>
                  <td>SQL databases are table based databases</td>
                  <td>NoSQL databases can be document based</td>
                </tr>
                <tr>
                  <td>Examples-Oracle, Postgres, and MS-SQL</td>
                  <td>Examples-MongoDB, Redis, Neo4j, Cassandra, Hbase</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;