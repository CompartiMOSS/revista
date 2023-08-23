import React from 'react'
import styled from "styled-components";
import Highlight, { defaultProps } from 'prism-react-renderer'
import { themes } from 'prism-react-renderer';

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  font-size: 10pt;
  font-family: 'Courier New', Courier, monospace;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export default ({ children, className }) => {
  let language = "";
  if (className) {
     language = className.replace(/language-/, '') || ""
  }
 
  return (
    <Highlight {...defaultProps}
      code={children}
      language={language}
      theme={themes.nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>      
      )}
    </Highlight>
  )
}