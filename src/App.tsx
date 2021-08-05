import './App.css';
import { parsedDates } from "data/calendar-response";
import CasaiCalendar from 'components/casai-calendar';

function App() {
  return (
    <div className="App">
      <CasaiCalendar calendarDates={parsedDates} />
    </div>
  );
}

export default App;
