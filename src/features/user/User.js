import React from "react";
import Spinner from "./Spinner";
import Error from "./Error";
import UserDetails from "./UserDetails";
import { useGetUserByIdQuery } from "./userService";

const Users = () => {
  const { data, error, isLoading } = useGetUserByIdQuery("1");
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
          {data && <UserDetails userDetails={data} />}
          {isLoading && <Spinner />}
          {error && !data && (
            <Error
              errorMessage={error?.message || "oops! something flopped!"}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Users;
