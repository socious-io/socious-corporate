import React from "react";
import { useLocation } from '@reach/router';
import SimpleLocalize from "../components/shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import Seo from "../components/seo"

const SupportPage = (props) => {
  const location = useLocation();
  const jaPage = location.pathname.includes('/ja')

  const seoTitle = jaPage ?
                   'サポート' :
                   'Socious Support'

  return (
    <Layout>
      <Seo
        title={seoTitle}
      />
      <SimpleLocalize {...props}>
        <div style={{ maxWidth: "max-content", margin: "0 auto", padding: "0 2rem" }}>
          <div class="title">
            <FormattedMessage
              id="support-title"
            />
          </div>
          <div class="content">
            <FormattedMessage id="support-content-one"/><a href="https://drive.google.com/file/d/1UL8sGX63H4MXmypAv9RYRbDmkg5zL5jl/view?usp=sharing" aria-label="Socious"><FormattedMessage id="support-content-two"/></a>
          </div>
          <div class="content">
            <FormattedMessage
              id="support-mail-description"
            />
          </div>
          <div class="content">
            <span><FormattedMessage id="support-email-title"/><a href="mailto:support@socious.io">support@socious.io</a></span>
            <br/>
            <strong>
              <FormattedMessage
                id="support-team"
              />
            </strong>
          </div>
        </div>
      </SimpleLocalize>
    </Layout>
  )
}

export default SupportPage
