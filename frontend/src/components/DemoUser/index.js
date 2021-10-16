const { useDispatch } = require("react-redux");
const { createDemo } = require("../../store/session");


const DemoUser = () => {
  const dispatch = useDispatch();
  const submitHandler = async () => {
    return await dispatch(createDemo())
  }
  return (
    <div id='demo-container'>
      <button id='demo-btn' onClick={submitHandler}>Demo User</button>
    </div>
  )
}

export default DemoUser