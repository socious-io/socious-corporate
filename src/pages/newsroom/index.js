import React from "react";

import Layout from "../../components/Layout";
import Seo from "../../components/seo"

import Banner from "../../components/NewsroomPage/Banner";

const NewsroomPage = () => {
  return (
    <Layout>
      <Seo
        title='Newsroom'
        description='Keep up to date with the latest news at Socious'
      />
      <Banner />
    </Layout>
  )
}

export default NewsroomPage
