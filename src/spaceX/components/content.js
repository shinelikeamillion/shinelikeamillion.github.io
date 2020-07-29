import React from "react"

const Content = ({ title, content, detailUrl }) => (
  <div className="content-block">
    <div className="mission">
      <h1 className="title">
        {title}
        <span> mission</span>
      </h1>
      <p>{content}</p>
      <a>
        <span>learn more</span>
      </a>
    </div>
  </div>
)

const Contents = ({ missions }) => (
  <div className="content-container">
    {missions.map(mission => (
      <Content
        key={mission.title}
        title={mission.title}
        content={mission.content}
      />
    ))}
  </div>
)

export default Contents
