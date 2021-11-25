<p align="center">
  <a href="https://socious.io/">
    <img alt="Gatsby" src="https://media-exp1.licdn.com/dms/image/C560BAQH4gHoQxIBVvA/company-logo_200_200/0/1630919891632?e=1643241600&v=beta&t=dagbkNMv02QTDeVuvmRyjsDSsOvkqrdnoJyiSIaMWoU" />
  </a>
</p>
<h1 align="center">
  Socious
</h1>

> Socious.io is a social networking app for social change. Socious.io helps social entrepreneurs hire talented people who are passionate about their companies’ missions through its social passion search function and data-driven mechanism for mutually relevant connections. Unlike its competitors, Socious.io allows mission-fit and culture-fit analyses and its AI will recommend suitable candidates for their social startups.

### Site and download links

Live website: https://socious.io/

Gatsby build (in progress): https://sociousgatsbymaster.gatsbyjs.io/

App Store: https://apps.apple.com/jp/app/socious/id1581904474

Play Store: https://play.google.com/store/apps/details?id=com.dissocialnetwork

## Getting started

After cloning the repository in your selected folder:

    cd socious-gatsby
    npm install
    gatsby develop

The site will now be running at http://localhost:8000

## Notion Integration

Using the [gatsby-source-notion-api](https://www.gatsbyjs.com/plugins/gatsby-source-notion-api/) plugin, you can connect to a Notion database and dynamically create pages based on GraphQL queries. For more information check out the documentation including how to query information and what environment variables you need.

## Considerations

I considered a number of different data types to house job listing data but decided to stick with standard JavaScript objects in order to inject the data into React components. I considered using markdown but each job page follows the same structure and has repeated content in the body section. This means that by defining one component (DescriptionRow) you're able to map over the body object nested within the parent and create individual components.

### Data type

When using a CMS or data types other than JSON (e.g. MDX) it's much easier to dynamically generate pages. Although I considered this as an option, I felt that the small number of concurrent job listings at any given time isn't likely to grow to the point where this is necessary. I instead focused on creating components that are easily reusable and can generate individual pages quickly based on a template. Should the number of listings grow to the point where individually posting them becomings extremely time-consuming then I'll likely migrate data to a more convenient format and render accordingly.

### Drawbacks

The main downside to this approach is that each time we want to create a new job listing page we have to go follow a process of creating the data then using that data to render components inside a new page component. This makes the barrier for entry regarding posting new jobs slightly higher as it requires at least a basic knowledge of React and Gatsby link components.

## Job Posting Data Template

Any job listing data should be created in a new file inside the following folder:

``/data/CareersPage``

The name of the file should be the name of the job listing in lowerCamelCase (e.g. seniorDataScientist.js)

Replace jobTitleHere in declaration name with relevant job title.

    import React from "react";

    const jobTitleHere = {
      title: '',
      location: '',
      department: '',
      body: [
        {
          header: '',
          content: ,
        },
        {
          header: '',
          content: ,
        },
        {
          header: '',
          content: ,
        },
        {
          header: '',
          content: ,
        },
        {
          header: '',
          content: ,
        },
        {
          header: '',
          content: ,
        },
      ]
    }

    export default jobTitleHere
    
Header content will always be rendered as an h3 element in the final component so a string value is recommended. The content property can be given HTML as a value. To avoid any errors it's best to place the content in a div.

In each rendered DescriptionRow component within the overall job component the header will be displayed on the left and the content on the right, for example:

              Header                                      Content

![image](https://user-images.githubusercontent.com/32938384/138551176-d3f9cd06-0577-42b0-b628-5b44dbd1a1ef.png)

    
## Job Posting Component

Once the data for the job listing has been set up create a new page component in the following folder:

``/src/pages/careers``

The name of the file should be the layout you want the link to be displayed in the url. For consistency this should be kebab-case (e.g. senior-data-scientist.js)

Replace the following:

- jobTitleData

Replace with the name of the data file you create using the above template. Replace both in the import and in the jobInformation function.

- JobTitleComponent

Replace with the name of the job listing you're creating (same as the file name). If the job title is Senior Data Scientist, the name should be SeniorDataScientist. Replace in both the function declaration as well as the export or combine using ``export default function JobTitleComponent() {body}``

```
import React from "react";

import Layout from '../../components/Layout'
import jobTitleData from "../../../data/CareersPage/jobTitleHere";

import PositionHeader from "../../components/JobPage/PositionHeader";
import DescriptionRow from "../../components/JobPage/DescriptionRow";

const JobTitleComponent = () => {
  const { title, location, department } = JobTitleHere

  const jobInformation = jobTitleData.body.map(data =>
      <DescriptionRow
        key={data.id}
        header={data.header}
        content={data.content}
      />
    )

  return (
    <Layout pageTitle={title}>
      <div className="job-container">
        <PositionHeader
          title={title}
          location={location}
          department={department}
        />
        <div className="position-description">
          {jobInformation}
        </div>
      </div>
    </Layout>
  )
}

export default JobTitleComponent
```
