// TODO: Import and integrate the `WeatherContext` component into the `Alert` component below.
// Each `Alert` component should display each of the `WeatherContext` fields.
import { useContext } from 'react';

interface AlertProps {
  alertType: string;
  message: string;
  adminMessage: string;
};

function Alert(props: AlertProps) {
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      <p>{props.message}</p>
      <p>Weather Conditions for: {/* TODO: city here */}</p>
      <p>{/* TODO: temperature here */} {/* TODO: temperatureUnits here */}</p>
      <p>{/* TODO: conditions here */}</p>
    </div>
  );
}

export default Alert;
