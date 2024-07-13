/* eslint-disable react/prop-types */

const ErrorComponent = ({message}) => {
  return (
    <p className="font-bold my-5 md:text-2xl text-red-600">{message}</p>
  )
}

export default ErrorComponent