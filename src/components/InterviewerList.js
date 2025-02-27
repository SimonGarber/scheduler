import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem';
import 'components/InterviewerList.scss';
// The selectable list of interviewers is rendered to the create appointment form
// The interviewer state is set onChange with the setInterviewer function
export default function InterviewerList(props) {
  const interviewerListItems = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={props.setInterviewer}
        selected={interviewer.id === props.value}
        onChange={() => props.onChange(interviewer.id)}
      />
    );
  });

  return <ul className="interviewers__list">{interviewerListItems}</ul>;
}
