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

1.  cd socious-gatsby
2.  npm install
3.  gatsby develop

The site will now be running at http://localhost:8000

## Considerations

I considered a number of different data types to house job listing data but decided to stick with standard JavaScript objects in order to inject the data into React components. I considered using markdown but each job page follows the same structure and has repeated content in the body section. This means that by defining one component (DescriptionRow) you're able to map over the body object nested within the parent and create individual components.

### Data type

When using a CMS or data types other than JSON (e.g. MDX) it's much easier to dynamically generate pages. Although I considered this as an option, I felt that the small number of concurrent job listings at any given time isn't likely to grow to the point where this is necessary. I instead focused on creating components that are easily reusable and can generate individual pages quickly based on a template. Should the number of listings grow to the point where individually posting them becomings extremely time-consuming then I'll likely migrate data to a more convenient format and render accordingly.

## Job Posting Data Template

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
    
## Job Posting Component

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
