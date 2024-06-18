import EventsList from '../../components/EventsList'
import EventForm from '../../components/EventForm'

export default async function Page() {

  return (
    <div>
      <EventForm/>
      <EventsList/>
    </div>
  );
}
