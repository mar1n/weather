import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [1, 2, 3, 4, 5];

const listItems = list.map((lis) => <li>{lis}</li>);

export default <listItems />;