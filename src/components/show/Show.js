import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Info from './Info';
import Episodes from './Episodes';

function Show() {
    // Gets current show
    const { data } = useSelector((state) => state.searchState);
    console.log(data);

    // If show is null, redirect to home
    if (!data) return <Redirect to="/" />;

    return (
      <div>
        <Info show={data} />
        <Episodes show={data} />
      </div>
    );
}

export default Show;
