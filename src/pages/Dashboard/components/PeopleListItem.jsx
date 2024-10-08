import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  const profileUrl = "/view/" + person.login.uuid

  return (
    <li>
      <h3>
        <Link to={profileUrl}>{person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
