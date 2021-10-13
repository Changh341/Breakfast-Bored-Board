
import { useDispatch, useSelector } from "react-redux"
import './placedetail.css'



const PlaceDetail = ({ displayDetail, id }) => {
  const place = useSelector((state) => state.place)
  const userId = useSelector((state) => {
    if (state.session.user) {
      return state.session.user.id
    } else { return null }
  })

  const editTool = (userId == place[id].hostId)
  console.log(editTool)


  if (!place) {
    return <div>Did not load</div>
  }
  const edit = () => {
    return <button>Edit</button>

  }

  return (
    <>
      <div id='modal-container'>
        <div className='modal-background' onClick={(event) => displayDetail(false)}>
        </div>
        <div id='detailmodal'>
          <button className='x-btn' onClick={(event) => displayDetail(false)}> X </button>
          {editTool ? edit() : null}
          <h1>{place[id].name}</h1>
          <p>{place[id].address}, {place[id].city}, {place[id].state}</p>
          <p>{place[id].description}</p>
          <span>${place[id].price}/night</span>
        </div>
      </div>
    </>
  )
}

export default PlaceDetail