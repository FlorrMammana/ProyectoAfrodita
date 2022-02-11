import { Spinner } from 'react-bootstrap';

const Spinners = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
    </div>
  )
}
export default Spinners