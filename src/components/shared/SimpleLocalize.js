import React from "react";
import { IntlProvider } from "react-intl";

const SimpleLocalize = (props) => {
  const language = props.pageContext.language;
  const messages = props.pageContext.messages;
  return (
    <IntlProvider
      locale={language}
      messages={messages}>
      {props.children}
    </IntlProvider>
  );
}

export default SimpleLocalize;
