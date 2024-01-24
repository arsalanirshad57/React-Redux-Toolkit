// import { MdDeleteForever } from "../all";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DisplayUser = () => {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data, "data")

    const deleteusers = (id) => {
        dispatch(removeUser(id))
    }
    return <Wrapper>
        <>
            {
                data.map((user, id) => {
                    return (
                        <li key={id}>
                            {user}
                            <button className="btn del" onClick={() => { deleteusers(id) }}>
                                Delete
                            </button>
                        </li>
                    )
                })
            }
        </>

    </Wrapper>
}

const Wrapper = styled.section`
li{
width:100%;
display:flex;
align-items:center;
padding:1rem;
border-bottom:1px solid #eee;
}
.del{
 margin-left:60rem;
}
`
export { DisplayUser }