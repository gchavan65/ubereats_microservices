import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import React from 'react';
import 'tailwindcss/tailwind.css'

export default function Home({ allPostsData }) {
  return (
    <div>
  <Head>
        <title> uber eats  </title>
      </Head>
    </div>
    
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
