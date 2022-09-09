import React from "react";

const Users = () => {
  return (
    <>
      <section className="overflow-hidden bg-white shadow sm:rounded-lg">
        <input
          type="text"
          placeholder="ID"
          className="text-3xl text-gray-500"
        />
        <header className="px-4 py-5 sm:px-6">
          <h1 className="text-lg font-medium leading-6 text-gray-900">
            User Information
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Gotten from the{" "}
            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="__blank"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              JSON placeholder API users endpoint
            </a>
          </p>
        </header>
        <div className="border-t border-gray-200 w-full">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Margot Foster
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};

export default Users;
