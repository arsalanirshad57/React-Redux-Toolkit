import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
// import { DleteUser } from "../store/slices/UserSlice";
import { Deleteuser } from "../store/actions";

const DeleteAllUser = () => {
  const dispatch = useDispatch()

  const deleteComp = () => {

    dispatch(Deleteuser())
  }
  return <Wrapper>
    <button className="btn deleteComp " onClick={() => { deleteComp() }}>DeleteAllUser</button>
  </Wrapper>
};
const Wrapper = styled.section`
.deleteComp{
  margin-top:2rem;
}
`

export default DeleteAllUser;